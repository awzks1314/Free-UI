// components/module/free-empty/free-empty.js
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
