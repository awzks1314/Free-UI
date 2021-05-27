// components/module/free-steps/free-steps.js
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
