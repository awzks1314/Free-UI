// packageTemplate/tea/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  goToUrl(e){
    if(!e.currentTarget.dataset.url){
      return
    }
    // 判断登录
    if(!wx.getStorageSync('name')){
      wx.navigateTo({
        url: '/packageTemplate/tea/login/login',
      })
    }else{
      wx.navigateTo({
        url: e.currentTarget.dataset.url,
      })
    }
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})