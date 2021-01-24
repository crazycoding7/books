## Glide

[TOC]

#### 1. 介绍

​	Glide是一个高效的Android图片加载库，注重平滑的滚动。

- 优点
##### **生命周期集成**;

  1、创建一个无UI的Fragment，具体来说是`SupportRequestManagerFragment／RequestManagerFragment`，并绑定到当前Activity，这样Fragment就可以感知Activity的生命周期；
   2、在创建Fragment时，初始化`Lifecycle`、`LifecycleListener`，并且在生命周期的onStart() 、onStop()、 onDestroy()中调用相关方法；
   3、在创建RequestManager时传入`Lifecycle` 对象，并且LifecycleListener实现了`LifecycleListener`接口；
   4、这样当生命周期变化的时候，就能通过接口回调去通知RequestManager处理请求。

  ```java
  // 空UI
  public class SupportRequestManagerFragment extends Fragment {
    private static final String TAG = "SupportRMFragment";
    private final ActivityFragmentLifecycle lifecycle;
    
     @Override
    public void onStart() {
      super.onStart();
      lifecycle.onStart(); // 通知对应的RequestManager处理图片请求(1对多通知)！
    }
  
    @Override
    public void onStop() {
      super.onStop();
      lifecycle.onStop();
    }
  
    @Override
    public void onDestroy() {
      super.onDestroy();
      lifecycle.onDestroy();
      unregisterFragmentWithRoot();
    }
  }
  // 请求类
  public class RequestManager
      implements  LifecycleListener {
    @Override
    public void onStart() {
      resumeRequests();
      targetTracker.onStart();
    }
  
    @Override
    public void onStop() {
      pauseRequests();
      targetTracker.onStop();
    }
  
    @Override
    public void onDestroy() {
      targetTracker.onDestroy();
      for (Target<?> target : targetTracker.getAll()) {
        clear(target);
      }
      targetTracker.clear();
      requestTracker.clearRequests();
    }  
  }
  ```
##### **高效的缓存机制**

1. Glide缓存机制大致分为三层：Lru算法缓存、弱引用缓存、磁盘缓存。

   读取的顺序是：弱引用缓存、Lru算法缓存、磁盘缓存

   写入的顺序是：弱引用缓存、Lru算法缓存、磁盘缓存（不准确）

   ```java
   public Engine{
      public Engine(
         MemoryCache memoryCache, // 内存缓存
         DiskCache.Factory diskCacheFactory, // 硬盘缓存
         GlideExecutor diskCacheExecutor,
         GlideExecutor sourceExecutor,
         GlideExecutor sourceUnlimitedExecutor,
         GlideExecutor animationExecutor,
         boolean isActiveResourceRetentionAllowed) {...
   }
     
   	// 加载图片
     private EngineResource<?> loadFromMemory(
         EngineKey key, boolean isMemoryCacheable, long startTime) {
       if (!isMemoryCacheable) {
         return null;
       }
   
       EngineResource<?> active = loadFromActiveResources(key);  // 弱引用加载正在使用的图片
       // 实现代码：final Map<Key, ResourceWeakReference> activeEngineResources = new HashMap<>();
   
       if (active != null) {
         if (VERBOSE_IS_LOGGABLE) {
           logWithTimeAndKey("Loaded resource from active resources", startTime, key);
         }
         return active;
       }
   
       EngineResource<?> cached = loadFromCache(key); // LruCache LinkedHashMap加载图片
       // 实现代码： LruResourceCache 中的   private final Map<T, Y> cache = new LinkedHashMap<>(100, 0.75f, true);
   
       if (cached != null) {
         if (VERBOSE_IS_LOGGABLE) {
           logWithTimeAndKey("Loaded resource from cache", startTime, key);
         }
         return cached;
       }
   
       return null;
     }
   
   }
     
   ```

   

<img src="/Users/xin/AndroidBlogs/android/06架构与设计/images/glide_cache.png" style="zoom:80%;" />

##### **多种图片格式的缓存，支持GIF、缩略图等。**

- ARGB_8888 :32位图,带透明度,每个像素占4个字节

- ARGB_4444 :16位图,带透明度,每个像素占2个字节

- RGB_565 :16位图,不带透明度,每个像素占2个字节

- ALPHA_8 :32位图,只有透明度,不带颜色,每个像素占4个字节

  Picasso的默认质量是 ARGB_8888 
  Glide的默认质量则为 RGB_565

  **Picasso** 是下载图片然后缓存完整的大小到本地，比如说图片的大小是1080p的，之后如果我需要同一张图片，就会返回这张 full size 的，如果我需要resize，也是对这种 full size 的做 resize。

  **Glide** 则是完全不一样的做法。Glide 是会先下载图片，然后改变图片的大小，以适应 imageView 的要求，然后缓存到本地。 所以如果你是下载同一张图片，但是设定两个不一样大小的 imageView, 那么Glide 实际上是会缓存两份。
  
  ```javascript
  // 根据不同显示的宽高生成不同的缓存
  public <R> LoadStatus load() {
      EngineKey key = keyFactory.buildKey(model, signature, 
  width, height, resourceClass, transcodeClass, options);
  }
  ```

#### 2. 原理

- 异步加载

  主要用到三个线程池，然后通过handler进行UI更新

  。

  ```java
  public final class GlideBuilder {
    private GlideExecutor sourceExecutor;   //加载源文件的线程池，包括网络加载
    private GlideExecutor diskCacheExecutor; //加载硬盘缓存的线程池
    private GlideExecutor animationExecutor; //动画线程池
  }
  // 通过handler通知UI更新
  private val MAIN_THREAD_EXECUTOR = object : Executor {
          private val handler = Handler(Looper.getMainLooper())
          override fun execute(command: Runnable) {
              handler.post(command)
          }
  }
  ```

  对象池技术request、弱引用 WeakHashMap<Request, Boolean>、内置线程池也支持okhttp等。

- 缓存

  图片三级缓存：内存缓存、硬盘缓存、网络。

  1. 内存缓存

     利用LRUCache算法。利用LinkedHashmap实现有序(hashmap+双向链表)。

     LruCache小结：

     - **LinkHashMap 继承HashMap，在 HashMap的基础上，新增了双向链表结构，每次访问数据的时候，会更新被访问的数据的链表指针，具体就是先在链表中删除该节点，然后添加到链表头header之前，这样就保证了链表头header节点之前的数据都是最近访问的（从链表中删除并不是真的删除数据，只是移动链表指针，数据本身在map中的位置是不变的）。**
     - **LruCache 内部用LinkHashMap存取数据，在双向链表保证数据新旧顺序的前提下，设置一个最大内存，往里面put数据的时候，当数据达到最大内存的时候，将最老的数据移除掉，保证内存不超过设定的最大值。**

  2. 硬盘缓存类似

- 防止OOM

  1. LruCache缓存大小设置，可以有效防止OOM；

  2. LruCache里存的是软引用对象，那么当内存不足的时候，Bitmap会被回收，也就是说通过SoftReference修饰的Bitmap就不会导致OOM；

     ```java
      private static LruCache<String, SoftReference<Bitmap>> mLruCache = new LruCache<String, SoftReference<Bitmap>>(10 * 1024){
             @Override
             protected int sizeOf(String key, SoftReference<Bitmap> value) {
                 //默认返回1，这里应该返回Bitmap占用的内存大小，单位：K
                 //Bitmap被回收了，大小是0
                 if (value.get() == null){
                     return 0;
                 }
                 return value.get().getByteCount() /1024;
             }
         };
     ```

  3. onLowMemory

     ```java
     //Glide
     public void onLowMemory() {
         clearMemory();
     }
     
     public void clearMemory() {
         // Engine asserts this anyway when removing resources, fail faster and consistently
         Util.assertMainThread();
         // memory cache needs to be cleared before bitmap pool to clear re-pooled Bitmaps too. See #687.
         memoryCache.clearMemory();
         bitmapPool.clearMemory();
         arrayPool.clearMemory();
       }
     ```

  4. Bitmap像素存储考虑

      **Bitmap的像素数据大小 = 宽 \* 高 \* 1像素占用的内存。**

     ```java
     	// 1像素占用字节数
       public static final int ALPHA_8_BYTES_PER_PIXEL = 1;
       public static final int ARGB_4444_BYTES_PER_PIXEL = 2;
       public static final int ARGB_8888_BYTES_PER_PIXEL = 4;
       public static final int RGB_565_BYTES_PER_PIXEL = 2;  // glide
       public static final int RGBA_F16_BYTES_PER_PIXEL = 8;
     ```

     如果Bitmap使用 `RGB_565` 格式，则1像素占用 2 byte，`ARGB_8888` 格式则占4 byte。
      **在选择图片加载框架的时候，可以将内存占用这一方面考虑进去，更少的内存占用意味着发生OOM的概率越低。** Glide内存开销是Picasso的一半，就是因为默认Bitmap格式不同。

     **那是否可以让像素数据不放在java堆中，而是放在native堆中呢**？据说Android 3.0到8.0 之间Bitmap像素数据存在Java堆，而8.0之后像素数据存到native堆中。

- 内存泄漏

  当然，修改也比较简单粗暴，**将ImageView用WeakReference修饰**就完事了。

  事实上，这种方式虽然解决了内存泄露问题，但是并不完美，例如在界面退出的时候，我们除了希望ImageView被回收，同时希望加载图片的任务可以取消，队未执行的任务可以移除。

  Glide的做法是监听生命周期回调，看 `RequestManager` 这个类,在Activity/fragment 销毁的时候，取消图片加载任务，细节大家可以自己去看源。

  ```java
  public void onDestroy() {
      targetTracker.onDestroy();
      for (Target<?> target : targetTracker.getAll()) {
        //清理任务
        clear(target);
      }
      targetTracker.clear();
      requestTracker.clearRequests();
      lifecycle.removeListener(this);
      lifecycle.removeListener(connectivityMonitor);
      mainHandler.removeCallbacks(addSelfToLifecycle);
      glide.unregisterRequestManager(this);
    }
  ```

  

- 其他

###### 图片错乱

由于RecyclerView或者LIstView的复用机制，网络加载图片开始的时候ImageView是第一个item的，加载成功之后ImageView由于复用可能跑到第10个item去了，在第10个item显示第一个item的图片肯定是错的。

常规的做法是给ImageView设置tag，tag一般是图片地址，更新ImageView之前判断tag是否跟url一致。

当然，可以在item从列表消失的时候，取消对应的图片加载任务。要考虑放在图片加载框架做还是放在UI做比较合适。

###### 线程池任务过多

列表滑动，会有很多图片请求，如果是第一次进入，没有缓存，那么队列会有很多任务在等待。所以在请求网络图片之前，需要判断队列中是否已经存在该任务，存在则不加到队列去。

#### 3. 如果让你设计一个图片加载框架，你会考虑哪些问题？

框架涉及知识点

1. 异步加载：线程池；
2. 切换线程：Handler；
3. 缓存策略：LruCache、DiskLurCache
4. 防止OOM：软引用、LruCache、图片压缩、Bitmap像素存储；
5. 内存泄漏：生命周期集成；
6. 列表滑动加载问题：加载错乱、队列满任务多问题。

#### 4. 如何加载大图和长图

##### **1. 图片压缩(利用BitmapFactory.Options inSampleSize 按比例压缩)；**

```java
 InputStream inputStream = getAssets().open("tangyan.jpg");  
  //先获得图片的宽、高，然后根据显示大小进行压缩  
  BitmapFactory.Options tmpOptions = new BitmapFactory.Options();  
  tmpOptions.inJustDecodeBounds = true;  
  BitmapFactory.decodeStream(inputStream, null, tmpOptions);  
  int width = tmpOptions.outWidth;  
 int height = tmpOptions.outHeight; 
```

##### **2. 局部显示(BitmapRegionDecoder);**

`Android`里面是利用`BitmapRegionDecoder`来局部展示图片的，展示的是一块矩形区域。为了完成这个功能那么就需要一个方法设置图片，另一个方法设置展示的区域。

```java
 //设置显示图片的中心区域(显示一个图片大小为一般的矩形区域)  
	BitmapRegionDecoder bitmapRegionDecoder = BitmapRegionDecoder.newInstance(inputStream, false);  
	BitmapFactory.Options options = new BitmapFactory.Options();  
options.inPreferredConfig = Bitmap.Config.RGB_565;  
	Bitmap bitmap = bitmapRegionDecoder.decodeRegion(new Rect(width / 2 - 100, height / 2 - 100, width / 2 + 100, height / 2 + 100), options);  
	mImageView.setImageBitmap(bitmap);  
  
```

根据上面的分析呢，我们这个自定义控件思路就非常清晰了：

- 提供一个设置图片的入口
- 重写onTouchEvent，在里面根据用户移动的手势，去更新显示区域的参数
- 每次更新区域参数后，调用invalidate，onDraw里面去regionDecoder.decodeRegion拿到bitmap，去draw

```java
package com.zhy.blogcodes.largeImage.view;  
  
import android.content.Context;  
import android.graphics.Bitmap;  
import android.graphics.BitmapFactory;  
import android.graphics.BitmapRegionDecoder;  
import android.graphics.Canvas;  
import android.graphics.Rect;  
import android.util.AttributeSet;  
import android.view.MotionEvent;  
import android.view.View;  
  
import java.io.IOException;  
import java.io.InputStream;  
  
/**  
 * Created by zhy on 15/5/16.  
 */  
public class LargeImageView extends View  
{  
    private BitmapRegionDecoder mDecoder;  
    /**  
     * 图片的宽度和高度  
     */  
    private int mImageWidth, mImageHeight;  
    /**  
     * 绘制的区域  
     */  
    private volatile Rect mRect = new Rect();  
  
    private MoveGestureDetector mDetector;  
  
  
    private static final BitmapFactory.Options options = new BitmapFactory.Options();  
  
    static  
    {  
        options.inPreferredConfig = Bitmap.Config.RGB_565;  
    }  
  
    public void setInputStream(InputStream is)  
    {  
        try  
        {  
            mDecoder = BitmapRegionDecoder.newInstance(is, false);  
            BitmapFactory.Options tmpOptions = new BitmapFactory.Options();  
            // Grab the bounds for the scene dimensions  
            tmpOptions.inJustDecodeBounds = true;  
            BitmapFactory.decodeStream(is, null, tmpOptions);  
            mImageWidth = tmpOptions.outWidth;  
            mImageHeight = tmpOptions.outHeight;  
  
            requestLayout();  
            invalidate();  
        } catch (IOException e)  
        {  
            e.printStackTrace();  
        } finally  
        {  
  
            try  
            {  
                if (is != null) is.close();  
            } catch (Exception e)  
            {  
            }  
        }  
    }  
  
  
    public void init()  
    {  
        mDetector = new MoveGestureDetector(getContext(), new MoveGestureDetector.SimpleMoveGestureDetector()  
        {  
            @Override  
            public boolean onMove(MoveGestureDetector detector)  
            {  
                int moveX = (int) detector.getMoveX();  
                int moveY = (int) detector.getMoveY();  
  
                if (mImageWidth > getWidth())  
                {  
                    mRect.offset(-moveX, 0);  
                    checkWidth();  
                    invalidate();  
                }  
                if (mImageHeight > getHeight())  
                {  
                    mRect.offset(0, -moveY);  
                    checkHeight();  
                    invalidate();  
                }  
  
                return true;  
            }  
        });  
    }  
  
  
    private void checkWidth()  
    {  
  
  
        Rect rect = mRect;  
        int imageWidth = mImageWidth;  
        int imageHeight = mImageHeight;  
  
        if (rect.right > imageWidth)  
        {  
            rect.right = imageWidth;  
            rect.left = imageWidth - getWidth();  
        }  
  
        if (rect.left < 0)  
        {  
            rect.left = 0;  
            rect.right = getWidth();  
        }  
    }  
  
  
    private void checkHeight()  
    {  
  
        Rect rect = mRect;  
        int imageWidth = mImageWidth;  
        int imageHeight = mImageHeight;  
  
        if (rect.bottom > imageHeight)  
        {  
            rect.bottom = imageHeight;  
            rect.top = imageHeight - getHeight();  
        }  
  
        if (rect.top < 0)  
        {  
            rect.top = 0;  
            rect.bottom = getHeight();  
        }  
    }  
  
  
    public LargeImageView(Context context, AttributeSet attrs)  
    {  
        super(context, attrs);  
        init();  
    }  
  
    @Override  
    public boolean onTouchEvent(MotionEvent event)  
    {  
        mDetector.onToucEvent(event);  
        return true;  
    }  
  
    @Override  
    protected void onDraw(Canvas canvas)  
    {  
        Bitmap bm = mDecoder.decodeRegion(mRect, options);  
        canvas.drawBitmap(bm, 0, 0, null);  
    }  
  
    @Override  
    protected void onMeasure(int widthMeasureSpec, int heightMeasureSpec)  
    {  
        super.onMeasure(widthMeasureSpec, heightMeasureSpec);  
  
        int width = getMeasuredWidth();  
        int height = getMeasuredHeight();  
  
        int imageWidth = mImageWidth;  
        int imageHeight = mImageHeight;  
  
         //默认直接显示图片的中心区域，可以自己去调节  
        mRect.left = imageWidth / 2 - width / 2;  
        mRect.top = imageHeight / 2 - height / 2;  
        mRect.right = mRect.left + width;  
        mRect.bottom = mRect.top + height;  
  
    }  
  
  
}  
```

根据上述源码:

1. setInputStream里面去获得图片的真实的宽度和高度，以及初始化我们的mDecoder
2. onMeasure里面为我们的显示区域的rect赋值，大小为view的尺寸
3. onTouchEvent里面我们监听move的手势，在监听的回调里面去改变rect的参数，以及做边界检查，最后invalidate
4. 在onDraw里面就是根据rect拿到bitmap，然后draw了

##### **3. 降低图片质量、利用本地内存保存BitMap**



- 参考

[设计图片加载框架](https://juejin.im/post/5dbeda27e51d452a161e00c8)

[生命周期和缓存机制](https://www.cnblogs.com/billshen/p/13306285.html)

[BigImageViewer SubsamplingScaleImageView](https://github.com/Piasy/BigImageViewer)

[Android  bitmap 存储位置变迁](https://www.cnblogs.com/mingfeng002/p/11400433.html)

