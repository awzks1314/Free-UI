// components/basic/free-title/free-title.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    bgColor:{
      type:String,
      value:'#fff'
    },
    // 标题字体颜色
    titlecolor:{
      type:String,
      value:'#333333' 
    },
    height:{
      type:String,
      value:100
    },
    // 底部颜色
    bottomColor:{
      type:String,
      value:'#0081ff'
    },
    // 标题
    title:{
      type:String,
      value:''
    },
    // 副标题
    sub:{
      type:String,
      value:''
    },
    // 图标
    icon:{
      type:String,
      value:''
    },
    // 
    // 大小
    size:{
      type:String,
      value:'32'
    },
    // 长度
    width:{
      type:String,
      value:''
    },
    // 加粗程度
    bold:{
      type:Boolean,
      value:true
    },
    type:{
      type:String,
      value:'1'
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
