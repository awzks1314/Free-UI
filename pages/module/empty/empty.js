// pages/module/empty/empty.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type:'order',
    image:'',
    color:'#aaa',
    slot:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  navigation(){
    wx.showToast({
      title: '点击了随便看看',
      duration:300,
      icon:'none'
    })
  },
  // 参数配置
  getMode(e){
    this.setData({
      [e.currentTarget.dataset.name]:e.detail.value=='默认'?'':e.detail.value
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})