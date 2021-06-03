# QQ侧滑删除实现

[TOC]

## 一、设计思路

### 1. 自定义实现

```markdown
1. 自定义View继承Linearout(水平布局)； 
2. 初始化；
	高度固定(100dp)；
	三个显示区域宽度8：1：1(屏幕占比)；
	状态类型： 1：默认状态(一个view)  2： 拖动状态 3：全显状态(三个View)；
	x,y:Action_Down时的坐标；
	显示阈值：20px;
	固定显示阈值：200px;
2. onDraw方法;
	根据状态和view坐标 绘制一个或三个View
3. onTouchEvent()方法
	Action_Down:记录按下坐标；
	Action_Move:与Down计算距离，大于阈值慢慢绘制其余view(第一个view的右下角坐标不停改变)；
	Action_Up:
	  如果大于固定阈值，重新绘制三个View；
	  如果小于固定阈值，恢复默认；
	  如果坐标在对应View的区域内，调用对应onClick事件；
```

### 2. DrawerLayout实现

> 自定义ViewGroup，根据layout_gravity判断子布局是否是侧滑布局。

```java
<?xml version="1.0" encoding="utf-8"?>
<androidx.drawerlayout.widget.DrawerLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:id="@+id/dl_view"
    android:layout_width="match_parent"
    android:layout_height="50dp">

    <!-- 显示内容 -->  
    <RelativeLayout
        android:id="@+id/rl_item"
        android:layout_width="match_parent"
        android:layout_height="50dp"
        android:gravity="center_vertical"
        android:orientation="vertical"
        android:paddingLeft="16dp"
        android:paddingRight="16dp">

        <TextView
            android:id="@+id/tv_name"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:maxWidth="170dp"
            android:text="2015-11"
            android:textColor="@color/color_333333"
            android:textSize="14sp" />

    </RelativeLayout>
    <!-- 侧滑内容 -->             
    <LinearLayout
        android:layout_width="200dp"
        android:layout_height="50dp"
        android:layout_gravity="start">

        <TextView
            android:id="@+id/top"
            android:layout_width="0dp"
            android:layout_height="match_parent"
            android:layout_weight="1"
            android:background="#FFEB3B"
            android:gravity="center"
            android:text="置顶"
            android:textSize="26sp" />

        <TextView
            android:id="@+id/del"
            android:layout_width="0dp"
            android:layout_height="match_parent"
            android:layout_weight="1"
            android:background="#F10001"
            android:gravity="center"
            android:text="删除"
            android:textSize="26sp" />

    </LinearLayout>          

</androidx.drawerlayout.widget.DrawerLayout>
              
              
holder.dlLayout.addDrawerListener(new DrawerLayout.DrawerListener() {
            @Override
            public void onDrawerSlide(@NonNull View drawerView, float slideOffset) {
                //DrawerLayout滑动监听
                holder.rlView.setTranslationX(-(drawerView.getMeasuredWidth() * slideOffset));

            }

            @Override
            public void onDrawerOpened(@NonNull View drawerView) {

            }

            @Override
            public void onDrawerClosed(@NonNull View drawerView) {

            }

            @Override
            public void onDrawerStateChanged(int newState) {

            }
        });              
```

### 