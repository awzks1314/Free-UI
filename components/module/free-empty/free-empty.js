// components/module/free-empty/free-empty.js
/*
  freeUi for MP-weixin  | by 搞文艺的猿 
  仅供学习交流，如作它用所承受的法律责任一概与作者无关
  使用freeUi开发扩展与插件时，请注明基于freeUi开发
  
  （作者QQ：664423077 | 微信：creater8888）
*/
Component({
  options: {
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    height:{
      type:String,
      value:'300rpx'
    },
    width:{
      type:String,
      value:'300rpx'
    }, 
    // 是否展示
    show:{
      type:Boolean,
      value:false
    },
    // order/coupon/cart/product/search
    type:{
      type:String,
      value:'order'
    },
    info:{
      type:String,
      value:'什么都没有'
    },
    image:{
      type:String,
      value:''
    },
    color:{
      type:String,
      value:'#aaa'
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
