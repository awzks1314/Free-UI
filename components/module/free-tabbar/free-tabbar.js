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
    // 距离底部的距离
    bottom:{
      type:String,
      value:'0'
    },
    // 是否固定在底部
    isFixed:{
      type:Boolean,
      value:true
    },
    // 当前选中下标
    current:{
      type:[String,Number],
      value:0
    },
    // 凸起下标
    humpIndex:{
      type:[Number,String],
      value:null
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
    radius : {
      type:String,
      value:''
    },
    // 底部阴影凸显
    shadow:{
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
      if(!e.currentTarget.dataset.url){
        return
      }
      console.log(e.currentTarget.dataset)
      if(e.currentTarget.dataset.type == 'url'){
        // 带有记忆路由跳转
        wx.redirectTo({
          url: e.currentTarget.dataset.url,
        })
      }else{
        // 可以进行跳转
        wx.reLaunch({
          url: e.currentTarget.dataset.url
        })
      }
      
    }
  }
})
