# vue-free-bubble

> 针对移动端开发的一个可以在页面任意拖动的浮标按钮。主要处理的是 `touchstart` `touchmove` `touchend` 相关操作, 暂不支持 PC 端数遍操作。

![vue-free-bubble 演示](https://github.com/aoxiaoqiang/vue-free-bubble/raw/master/doc/vue-free-bubble.gif?20180410)

## 使用说明

* 注册组件

```javascript
import Vue from 'vue'
import vueFreeBubble from 'vue-free-bubble'

Vue.use(vueFreeBubble)
```

* 使用组件

```html
<template>
  <div id="app">
    <vue-free-bubble
      :size="bSize"
      :isFreeMove="bIsFreeMove"
      :distanceToEdge = "bDistanceToEdge"
      @click="bubbleClick" />
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      bSize: 60,
      bIsFreeMove: false,
      bDistanceToEdge: 10
    }
  },
  methods: {
    bubbleClick() {
      console.log('ok')
    }
  }
}
</script>
```

* 参数说明

属性

| 属性           | 类型     | 参数说明                                               | 默认值 |
| -------------- | :------- | :----------------------------------------------------- | :----: |
| size           | Number   | 按钮尺寸大小(单位 px)                                  |   56   |
| isFreeMove     | Boolean  | 是否自由移动,如果为 false 按钮会自动靠边停留           | false  |
| distanceToEdge | Number   | 自动停靠(isFreeMove 为 false 时)水平方向距离边界的距离 |   0    |
| click          | Function | 点击事件                                               |   -    |

事件

| 事件名称 | 参数说明 |
| -------- | :------- |
| click    | 点击事件 |
