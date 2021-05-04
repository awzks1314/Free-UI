// components/module/free-list/free-list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    arrow: {
      type: Boolean,
      value: false //是否有箭头
    },
    padding: {
      type: String,
      value: "26rpx 30rpx"
    },
    bgcolor:{
      type: String,
      value: "#fff" //背景颜色
    },
    size:{
      type: Number,
      value: 32//字体大小
    },
    color: {
      type: String,
      value: "#333" //字体颜色
    },
    last: {
      type: Boolean,
      value: false //最后一条数据隐藏底部线条
    },
    lineLeft: {
      type: Boolean,
      value: true //左边线条收缩
    },
    lineRight: {
      type: Boolean,
      value: true //右边线条收缩
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClick() {
      this.triggerEvent('click', {});
    }
  }
})
