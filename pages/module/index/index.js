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
        name:'下拉',
        title:'select',
        icon:'picture-filling',
      },
      {
        name:'评分',
        title:'rate',
        icon:'picture-filling',
      },
      {
        name:'消息提示',
        title:'messageTips',
        icon:'picture-filling',
      },
      {
        name:'弹窗',
        title:'modal',
        icon:'picture-filling',
      },
      {
        name:'抽屉',
        title:'drawer',
        icon:'picture-filling',
      },
      {
        name:'导航栏',
        title:'navBar',
        icon:'picture-filling',
      },
      {
        name:'标签页',
        title:'tabs',
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