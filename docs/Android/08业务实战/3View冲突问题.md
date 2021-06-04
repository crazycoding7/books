# View冲突问题

[TOC]

## 一、ScrollView和ListView冲突

### 1. ScrollView嵌套ListView

- 原因：测量冲突导致ListView只显示第一行数据

  ```java
  // ListView.java
  @Override
  protected void onMeasure(int widthMeasureSpec, int heightMeasureSpec) {
    if (heightMode == MeasureSpec.UNSPECIFIED) {//!!！导致测量高度为一个Item高度
      heightSize = mListPadding.top + mListPadding.bottom + childHeight +
        getVerticalFadingEdgeLength() * 2;
    }
  
    if (heightMode == MeasureSpec.AT_MOST) { //!!！导致测量高度为屏幕可见的高度
      // TODO: after first layout we should maybe start at the first visible position, not 0
      heightSize = measureHeightOfChildren(widthMeasureSpec, 0, NO_POSITION, heightSize, -1);
    }
  
    setMeasuredDimension(widthSize, heightSize);
  
    mWidthMeasureSpec = widthMeasureSpec;
  }  
  ```

- 解决方法

```java
public class NoScrollListView extends ListView {

    public NoScrollListView(Context context, AttributeSet attrs) {
        super(context, attrs);
    }

    /**
     * 自己设置测量模式
     */
    public void onMeasure(int widthMeasureSpec, int heightMeasureSpec) {
        int expandSpec = MeasureSpec.makeMeasureSpec(Integer.MAX_VALUE >> 2,
                MeasureSpec.AT_MOST);
        super.onMeasure(widthMeasureSpec, expandSpec);
    }
}
```

### 2. ListView高度固定后无法触发滑动事件

> 当对listview的高度设置为固定值（例200dp）时，listview的高度是可以直接显示出来的。但嵌套在一起后ScrollView中的ListView就没法上下滑动了，事件先被ScrollView响应了。
>
> 解决方法：当ListView自身接收到的滑动事件时，使ScrollView取消拦截。ListView区域内的滑动事件由自己处理，ListView区域外滑动事件由外层ScrollView处理。可以系统自带的API来实现：requestDisallowInterceptTouchEvent这一方法。

- **解决方法一**：在这里我们自定义ListView来重写ListView的dispatchTouchEvent函数：

  ```java
  public class ScollListView extends ListView {
      public ScollListView(Context context) {
          super(context);
      }
  
      @Override
      public boolean dispatchTouchEvent(MotionEvent ev) {
          switch (ev.getAction()) {
              case MotionEvent.ACTION_DOWN:
              case MotionEvent.ACTION_MOVE:
                  getParent().requestDisallowInterceptTouchEvent(true); // 禁止父类拦截
                  break;
              case MotionEvent.ACTION_UP:
              case MotionEvent.ACTION_CANCEL:
                  getParent().requestDisallowInterceptTouchEvent(false);
                  break;
          }
          return super.dispatchTouchEvent(ev);
      }
  }
  ```

## 二、滑动冲突处理思路

### 1. 外部拦截

​	在父View的`onInterceptTouchEvent()`方法中决定是否想子View派发事件。

### 2. 内部拦截

​	在子View中执行`getParent().requestDisallowInterceptTouchEvent(true)`来指定父View是否可以拦截事件。

### 3. 自定义拦截

​	**子View处理需要拦截的事件，在合适的时机，通知父View拦截后续事件。**

​	如子View处理Action_down事件，后续父View拦截处理Action_Move、Action_Up事件(给父View拦截变量设置为true)。