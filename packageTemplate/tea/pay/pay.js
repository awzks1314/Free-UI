// packageTemplate/tea/pay/pay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    payShow:false
  },
  // 确认下单弹框
  surePay(){
    this.setData({
      payShow:true
    })
  },
  // 关闭
  hide(){
    this.setData({
      payShow:false
    })
  },
  // 确认
  sure(){
    // 标识有订单
    wx.setStorageSync('hasOrder', true)
    wx.redirectTo({
      url: '/packageTemplate/tea/take/take',
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})