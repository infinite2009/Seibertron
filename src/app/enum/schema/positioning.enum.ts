enum Positioning {
  // 静态定位，
  static,
  // 相对布局，将对于某个控件偏移位置
  relative,
  // 绝对定位，
  absolute,
  // 固定定位，相对于屏幕而言，也就是fixed
  fixed,
  // 吸顶定位，滚动到屏幕顶端就会吸顶
  sticky,
}

export default Positioning;
