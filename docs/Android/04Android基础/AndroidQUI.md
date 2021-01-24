### QUI

[TOC]

> Android 面试题。
>

[参考1](https://www.jianshu.com/p/7bb56481063d)



#### 1. Windows、Activity、DecorView、ViewRoot区别？

​	参考案例分析

#### 2. performTraversals 执行至少2次问题？

造成这个现象的根本原因是performTranversal函数在View的测量流程中会执行2次(与Surface是否存在有关)。

- 视图容器的ViewGroup宽高不是match_parent或具体数值时，都会对子view进行两次measure，layout.

  大家应该都知道，有些`ViewGroup`可能会让自己的子视图测量两次。比如说，父视图先让每个子视图自己测量，使用`View.MeasureSpec.UNSPECIFIED`，然后在根据每个子视图希望得到的大小不超过父视图的一些限制，就让子视图得到自己希望的大小，否则就用其他尺寸来重新测量子视图。这一类的视图有`FrameLayout`,`RelativeLayout`等。

- View初始化时的三次measure,两次layout却只一次draw吗？

  两次measure效率太低，android底层做了优化。

  ```java
  public final void measure(int widthMeasureSpec, int heightMeasureSpec) {
    ......
    // 当FLAG_FORCE_LAYOUT位为１时，就是当前视图请求一次布局操作
    //或者当前当前widthSpec和heightSpec不等于上次调用时传入的参数的时候
    //才进行从新绘制。
      if (forceLayout || !matchingSize &&
              (widthMeasureSpec != mOldWidthMeasureSpec ||
                      heightMeasureSpec != mOldHeightMeasureSpec)) {
              ......
              onMeasure(widthMeasureSpec, heightMeasureSpec);
              ......
      }
      ......
  }
  ```

  

#### 1. UI部分

1. RelativeLayout、LinearLayout性能区别？

   > 影响布局性能有两个因素，1. 层级深度 2. 选择RL或LL。
   >
   > 重要性： 1 > 2。

   相同的层级深度下，两个布局的性能差别在measure，RL>LL。

   **原因：**RL内的子View会进行两次onMeasure，分别是横向和纵向的； LL分两种情况，如果没有weight，就只关心orientation，子view测量一次，如果有weight，子view测量两次；分别是先orientation，再是weight。

   **例子：**相同的布局，一个RelativeLayout可以完成，但是要使用多个LinearLayout，肯定使用Relativelayout的，尽管会子view会测量两次，但是也比使用多个LinearLayout性能好多了。

2. convertView和ViewHolder的理解？

- convertView 是作为缓存的view，通过使用这个缓存减少inflater加载组件这一步；

- viewHolder中持有的组件和convertView中的组件指向同一对象，所有这里使用viewholder就是替换掉findViewById,防止多次调用。

   ```java
  @Override
  public View getView(finalint position, View convertView, ViewGroup parent) {
    ViewHolder holder;
    //观察convertView随ListView滚动情况             
    Log.v("MyListViewBase", "getView " + position + " " + convertView);
    if (convertView == null) {
      convertView = mInflater.inflate(R.layout.item,null);
      holder = new ViewHolder();
      /**得到各个控件的对象*/                     
      holder.title = (TextView) convertView.findViewById(R.id.ItemTitle);
      holder.text = (TextView) convertView.findViewById(R.id.ItemText);
      holder.bt = (Button) convertView.findViewById(R.id.ItemButton);
      convertView.setTag(holder);//绑定ViewHolder对象                    
    }
    else{
      holder = (ViewHolder)convertView.getTag();//取出ViewHolder对象                   
    }
    /**设置TextView显示的内容，即我们存放在动态数组中的数据*/             
    holder.title.setText(getDate().get(position).get("ItemTitle").toString());
    holder.text.setText(getDate().get(position).get("ItemText").toString());
  
    return convertView;
  }
  ```

3. Listview recycleView 区别？
- 封装了对viewholder的回收复用；
- 可以同时实现线性布局、网格布局、瀑布流布局，完美替代Listview+GirdeView，更容易组合设计出自己的滑动布局；
- 自带了itemAnimation，可以设置加载和移除时的动画。
4. Activity、View、Window三种区别？

   Activity(attach)->PhoneWindow(包含)->DecorView对象->addView;

   这些View的事件监听，是有WIndownManagerService来接收，并且回调Activity函数。比如：onClick,onkeydown等。

