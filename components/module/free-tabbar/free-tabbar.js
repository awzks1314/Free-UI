// components/module/free-tabbar/free-tabbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list:{
      type:Array,
      value:[]
    },
    // 默认字体颜色
    color:{
      type:String,
      value:'#aaaaaa'
    },
    // 选择字体颜色
    selectColor:{ 
      type:String,
      value:'#0081ff'
    },
    // 背景颜色
    backgroundColor:{
      type:String,
      value:'#FFFFFF'
    },
    current:{
      type:[String,Number],
      value:0
    },
    // 是否固定在底部
    isFixed:{
      type:Boolean,
      value:true
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
    handleClick(e){
      // 1
      this.triggerEvent("click", {
        index: e.currentTarget.dataset.index
      })

      // 2
      // wx.switchTab({
      //   url: e.currentTarget.dataset.url,
      // })
    }
  }
})