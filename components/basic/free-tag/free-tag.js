// components/basic/free-tag/free-tag.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 颜色类别
    type:{
      type:String,
      value:'blue'
    },
    // 圆角
    radius:{
      type:String,
      value:'4rpx'
    },
    // 内边距
    padding:{
      type:String,
      value:''
    },
    // 阴影
    shadow:{ 
      type:Boolean,
      value:true
    },
    // 大小
    size:{
      type:String,
      value:'df'
    },
    // dark light plain
    effect:{
      type:String,
      value:'dark'
    },
    // 图标
    icon:{
      type:String,
      value:''
    },
    // 图标颜色
    iconColor:{
      type:String,
      value:''
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

  }
})
