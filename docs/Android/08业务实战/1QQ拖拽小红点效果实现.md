# QQ拖拽小红点效果

[TOC]

## 一、实现思路

### 1. 组成部分？

目标小红点、拖拽小红点、两个小红点连接部分区域。

### 2. 拖拽后拉长效果如何实现？

在两个小红点之间绘制二阶贝塞尔曲线。

```java
// 绘制贝塞尔曲线
mPath.moveTo(100, 500);
mPath.quadTo(300, 100, 600, 500);
canvas.drawPath(mPath, mPaint);
```

### 3. 如何整个屏幕拖拽？

默认每个item有一个小红点，小红点只能在Item内移动，不符合需求。

**思路：** 在DocorView内添加一层自定义DragLayout，在DragLayout中绘制所有拖拽效果，原小红点隐藏；`dispatchDraw`时候先绘制子View，然后再绘制拖拽相关图形，以此保证拖拽效果绘制在最上层。

```java
// DecorView 添加Draglayout
public static void attachToActivity(Activity activity) {
        ViewGroup decorView = (ViewGroup) activity.getWindow().getDecorView();

        /*not exist, need to attachToActivity draggableLayout to view tree*/
        DraggableLayout draggableLayout = new DraggableLayout(activity);
        FrameLayout.LayoutParams params = new FrameLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT);
        draggableLayout.setLayoutParams(params);

        for (int i = 0; i < decorView.getChildCount(); i++) {
            View v = decorView.getChildAt(i);
            decorView.removeView(v);
            draggableLayout.addView(v);
        }
        decorView.addView(draggableLayout, 0);
    }
```

### 4. 如何设计？

1. 构造一个DotView(继承TextView)，用于显示默认小红点和文字内容；

   在onAttachedToWindow()方法中获取 mDragLayout对象变量；

2. 构造DragLayout(ViewGroup)；

   包含： 源小红点副本；拖拽小红点；DotView变量(用于获取目标小红点位置和控制显示隐藏);

3. 在Activity的`attach()`方法添加DragLayout层；

4. 单击小红点Down：

   DotView的onTouchEvent接受到Down事件，调用mDragLayout保持当前对象和event坐标并设置DragLayout后续拦截事件(Move/UP);

5. Move Event

   隐藏DotView;

   获取DotView小红点坐标，然后复制创建二个大小位置一样的小红点，orginCircle和touchCircle;

   拦截Move事件，计算移动的距离，依次为中心点，重新绘制touchCircle(它就可以跟随手指移动了)；

   如何圆形距离没越界，绘制贝塞尔曲线；

   可以根据距离的长短，调整两个圆的大小；

   **注意：**`dispatchDraw()中先执行super.dispatchDraw(canvas),然后绘制可拖拽的部分。`

6. Move Up;


​		显示DotView;

## 二、源代码

```java
// 绘制可拖拽View(没有添加到DocorView中)
public class StickyView extends View {
    /**
     * 拖拽圆的圆心
     */
    PointF mDragCanterPoint = new PointF(250, 450);
    /**
     * 固定圆的圆心
     */
    PointF mFixCanterPoint = new PointF(250, 250);
    /**
     * 控制点
     */
    PointF mCanterPoint = new PointF(250, 400);

    /**
     * 固定圆的切点
     */
    PointF[] mFixTangentPointes = new PointF[]{new PointF(235, 250),
            new PointF(265, 250)};
    /**
     * 拖拽圆的切点
     */
    PointF[] mDragTangentPoint = new PointF[]{new PointF(230, 450),
            new PointF(270, 450)};
    /**
     * 拖拽圆半径
     */
    float mDragRadius = 20;
    /**
     * 固定圆半径
     */
    float mFixRadius = 15;
    private int statusBarHeight;
    private Paint mPaint;
    private Path mPath;

    public StickyView(Context context) {
        super(context);
        mPaint = new Paint();
        mPaint.setColor(Color.RED);
        mPaint.setAntiAlias(true);
        mPath = new Path();
    }

    @Override
    public boolean onTouchEvent(MotionEvent event) {
        switch (event.getAction()) {
            case MotionEvent.ACTION_DOWN:

                float startX = event.getRawX();
                float startY = event.getRawY();
                updateDragCenterPoint(startX, startY);
                break;
            case MotionEvent.ACTION_MOVE:
                float endX = event.getRawX();
                float endY = event.getRawY();
//                更加手的移动位置绘制拖拽圆的位置
                updateDragCenterPoint(endX, endY);
//
                break;
        }
        return true;
    }

    /**
     * 更新拖拽圆圆心
     */
    private void updateDragCenterPoint(float x, float y) {
        mDragCanterPoint.set(x, y);
        invalidate();
    }


    @Override
    protected void onDraw(Canvas canvas) {
        super.onDraw(canvas);
        canvas.save();
        canvas.translate(0, -statusBarHeight);
        canvas.drawCircle(mFixCanterPoint.x, mFixCanterPoint.y, mFixRadius,
                mPaint);

        float dy = mDragCanterPoint.y - mFixCanterPoint.y;
        float dx = mDragCanterPoint.x - mFixCanterPoint.x;

        mCanterPoint.set((mDragCanterPoint.x + mFixCanterPoint.x) / 2,
                (mDragCanterPoint.y + mFixCanterPoint.y) / 2);

        if (dx != 0) {
            float k1 = dy / dx;
            float k2 = -1 / k1;
            mDragTangentPoint = getIntersectionPoints(
                    mDragCanterPoint, mDragRadius, (double) k2);
            mFixTangentPointes = getIntersectionPoints(
                    mFixCanterPoint, mFixRadius, (double) k2);
        } else {
            mDragTangentPoint = getIntersectionPoints(
                    mDragCanterPoint, mDragRadius, (double) 0);
            mFixTangentPointes = getIntersectionPoints(
                    mFixCanterPoint, mFixRadius, (double) 0);
        }

        mPath.reset();
        mPath.moveTo(mFixTangentPointes[0].x, mFixTangentPointes[0].y);
        mPath.quadTo(mCanterPoint.x, mCanterPoint.y,
                mDragTangentPoint[0].x, mDragTangentPoint[0].y);
        mPath.lineTo(mDragTangentPoint[1].x, mDragTangentPoint[1].y);
        mPath.quadTo(mCanterPoint.x, mCanterPoint.y,
                mFixTangentPointes[1].x, mFixTangentPointes[1].y);
        mPath.close();
        canvas.drawPath(mPath, mPaint);

        canvas.drawCircle(mDragCanterPoint.x, mDragCanterPoint.y,
                mDragRadius, mPaint);

        canvas.restore();
    }

    /**
     * 获取状态栏高度
     *
     * @param v
     * @return
     */
    public static int getStatusBarHeight(View v) {
        if (v == null) {
            return 0;
        }
        Rect frame = new Rect();
        v.getWindowVisibleDisplayFrame(frame);
        return frame.top;
    }

    @Override
    protected void onSizeChanged(int w, int h, int oldw, int oldh) {
        super.onSizeChanged(w, h, oldw, oldh);
        statusBarHeight = getStatusBarHeight(this);
    }

    /**
     * Get the point of intersection between circle and line.
     * 获取 通过指定圆心，斜率为lineK的直线与圆的交点。
     *
     * @param pMiddle The circle center point.
     * @param radius  The circle radius.
     * @param lineK   The slope of line which cross the pMiddle.
     * @return
     */
    public static PointF[] getIntersectionPoints(PointF pMiddle, float radius, Double lineK) {
        PointF[] points = new PointF[2];

        float radian, xOffset = 0, yOffset = 0;
        if (lineK != null) {

            radian = (float) Math.atan(lineK);
            xOffset = (float) (Math.cos(radian) * radius);
            yOffset = (float) (Math.sin(radian) * radius);
        } else {
            xOffset = radius;
            yOffset = 0;
        }
        points[0] = new PointF(pMiddle.x + xOffset, pMiddle.y + yOffset);
        points[1] = new PointF(pMiddle.x - xOffset, pMiddle.y - yOffset);

        return points;
    }
}

```

