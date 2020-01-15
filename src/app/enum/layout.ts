enum Layout {
  // 列布局，一行一个
  column,
  // 行布局，一行 n 个，超出换行
  row,
  // 弹性布局,剩余空间会被控件填充
  flex,
  // 流式布局，剩余空间不会控件填充
  flow,
}

export default Layout;
