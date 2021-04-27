// pages/module/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        name:'输入框',
        title:'input',
        icon:'picture-filling',
      },
      {
        name:'计数器',
        title:'inputNumber',
        icon:'picture-filling',
      },
      {
        name:'选择器',
        title:'select',
        icon:'picture-filling',
      },
      {
        name:'评分',
        title:'Rate',
        icon:'picture-filling',
      },
      {
        name:'表单',
        title:'Rate',
        icon:'picture-filling',
      },
      {
        name:'表单',
        title:'form',
        icon:'picture-filling',
      },
      {
        name:'进度条',
        title:'progress',
        icon:'picture-filling',
      },
      {
        name:'警告消息',
        title:'alert',
        icon:'picture-filling',
      },
      {
        name:'加载状态',
        title:'loading',
        icon:'picture-filling',
      },
      {
        name:'消息提示',
        title:'message',
        icon:'picture-filling',
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  gotoDetail(e){
    let url = e.currentTarget.dataset.url
    wx.navigateTo({
      url: `/pages/module/${url}/${url}`,
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})