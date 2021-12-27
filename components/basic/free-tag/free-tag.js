
/*
  freeUi for MP-weixin  | by 搞文艺的猿 
  仅供学习交流，如作它用所承受的法律责任一概与作者无关
  使用freeUi开发扩展与插件时，请注明基于freeUi开发
  
  （作者QQ：664423077 | 微信：creater8888）
*/
Component({
  externalClasses: ['free-tag-class'], //自定义样式
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
      value:'5000rpx'
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
    // 大小 sm
    size:{ 
      type:String,
      value:''
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
      value:'#fff'
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
