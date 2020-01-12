enum Layout {
  // 列布局
  column,
  // 弹性布局,剩余空间会被控件填充
  flex,
  // 流式布局，剩余空间不会控件填充
  flow,
  // 相对布局，将对于某个控件便宜
  relative,
  // 固定定位，相对于屏幕而言，也就是fixed
  fixed,
  // 吸顶定位，滚动到屏幕顶端就会吸顶
  sticky
}

export default Layout;
