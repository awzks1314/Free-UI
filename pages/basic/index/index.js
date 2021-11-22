const app =getApp()
Page({

  /**
   * 页面的初始数据
   */ 
  data: {
    basicStyle:[
      {
        name:'布局',
        title:'layout',
        desc:'Flex布局、Grid布局、内外边距',
        icon:'electronics',
      },
      {
        name:'背景',
        title:'color',
        desc:'深色、浅色、渐变背景',
        icon:'home'
      },
      {
        name:'图标',
        title:'icon',
        desc:'一些内置的图标，直接食用',
        icon:'noticefill'
      },
      {
        name:'按钮',
        title:'button',
        desc:'高亮、镂空以及各种颜色大小按钮',
        icon:'arrow-up-circle'
      },
      {
        name:'边框',
        title:'border',
        desc:'虚实边框、圆角以及阴影',
        icon:'scanning'
      },
      {
        name:'文本',
        title:'text',
        desc:'文本样式、文本颜色、多行省略、特殊文字',
        icon:'edit'
      }
    ],
    basicCompent:[
      {
        name:'图片',
        title:'image',
        desc:'图片大小、懒加载以及预览等',
        icon:'picture-filling'
      },      
      
      {
        name:'标题',
        title:'title',
        desc:'一些标题样式',
        icon:'fabulous'
      },
      
      {
        name:'标签',
        title:'tag',
        desc:'常用的标签样式',
        icon:'good'
      },
    ],
    logShow:false,
    logList:app.globalData.updateLog
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      logShow:app.globalData.logShow || false
    })
  },
  hideLog() {
    this.setData({
      logShow:false
    })
    app.globalData.logShow = false
  },
  stop() {

  },
  goUrl(e) {
    if (e.currentTarget.dataset.url) {
      wx.navigateTo({
        url: e.currentTarget.dataset.url
      })
    }
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  onShareTimeline(){
    
  }
})