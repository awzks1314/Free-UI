var wxbarcode = require('../../../utils/util');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wxbarcode.qrcode('qrcode', this, '123456789', 600, 350);
  },
  onShow(){
    // 登录凭证，假设name有即登录
    this.setData({
      name:wx.getStorageSync('name')
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})