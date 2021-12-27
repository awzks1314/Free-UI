// components/basic/free-title/free-title.js

/*
  freeUi for MP-weixin  | by 搞文艺的猿 
  仅供学习交流，如作它用所承受的法律责任一概与作者无关
  使用freeUi开发扩展与插件时，请注明基于freeUi开发
  
  （作者QQ：664423077 | 微信：creater8888）
*/
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
