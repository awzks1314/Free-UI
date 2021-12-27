// components/module/free-steps/free-steps.js
/*
  freeUi for MP-weixin  | by 搞文艺的猿 
  仅供学习交流，如作它用所承受的法律责任一概与作者无关
  使用freeUi开发扩展与插件时，请注明基于freeUi开发
  
  （作者QQ：664423077 | 微信：creater8888）
*/
Component({
  externalClasses:['class'],
  /**
   * 组件的属性列表
   */
  properties: { 
    list:{
      type:Array,
      value:[]
    },
    current:{
      type:String,
      value:0
    },
    color:{
      type:String,
      value:'#000'
    },
    // type:icon number more
    type:{
      type:String,
      value:'icon'
    }
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
