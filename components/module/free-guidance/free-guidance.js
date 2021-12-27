// components/module/free-guidance/free-guidance.js
/*
  freeUi for MP-weixin  | by 搞文艺的猿 
  仅供学习交流，如作它用所承受的法律责任一概与作者无关
  使用freeUi开发扩展与插件时，请注明基于freeUi开发
  
  （作者QQ：664423077 | 微信：creater8888）
*/
Component({
  // 自定义class
  externalClasses:['class'],
  /**
   * 组件的属性列表
   */
  properties: {
    tip:{
      type:String,
      value:'点击「添加小程序」，下次访问更便捷'
    },
    // 多少秒后关闭
    time:{
      type:[Number,String],
      value:0,
      observer:function(val){
        this.init()
      }
    },
    animation:{
      type:Boolean,
      value:true
    },
    // 点击关闭
    close:{
      type:Boolean,
      value:false
    },
    // 背景色
    bgColor:{
      type:String,
      value:'#F1F1F1'
    },
    // 单位rpx
    size:{
      type:[Number,String],
      value:'28'
    },
    // 字体颜色
    color:{
      type:String,
      value:'#919293'
    }
  },
  ready(){
    this.init()
  },
  /**
   * 组件的初始数据
   */
  data: {
    showTips:true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    init(){
      // 检测是不是第一次
      let tipFirst = wx.getStorageSync('tipsFirst')
      if(tipFirst){
        this.setData({
          showTips:false
        })
      }else{
        this.setData({
          showTips:true
        })
        console.log(this.data.time)
        if(this.data.time != 0 ){
          // 等于0的话，一直存在，不关闭
          // 全局缓存
          wx.setStorageSync('tipsFirst', false)
          setTimeout(() => {
            this.setData({
              showTips:false
            })
          }, this.data.time * 1000); //5s后消失
        }
      }
    },
    closeTip(){
      this.setData({
        showTips:false
      })
      if(this.data.time != 0 ){
        // 全局缓存
      wx.setStorageSync('tipsFirst', false)
      }
    }
  }
})
