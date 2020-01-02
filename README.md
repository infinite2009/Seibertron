## Build Your Page

### 旨在为设计师和产品经理提供简单易懂的组件自助实现服务

### 产品设计
* 表单驱动定制组件视觉和交互效果 
  1. 用户根据组件原型（component prototype）设计符合满足自身需求的组件实例（component）
  2. 用户使用自己设计好的组件实例，构建布局（page layout）
  3. 用户通过在页面内设置业务逻辑事件，实现页面间跳转
  
### 实现设计
* 使用 widget（小部件） 组成 component（组件）
* widget 是用户可以定制视觉和交互的最小单元，定制组件样式和设置交互动作，本质上都是在定制 widget 的样式和事件
* widget 可以定制的样式和事件，以 schema 的形式提供给组件原型类（component prototype class），后者读取 widget，实现表单交互和用户定制的 schema 向后端的输出
