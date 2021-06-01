
const {utils} = require('../../../utils/rules')
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  getMode(e){
    
    let fun = utils[e.currentTarget.dataset.name]
    let msg = fun(e.detail.value)?'验证通过':'验证失败'
    let icon= fun(e.detail.value)?'success':'error'
    wx.showToast({
      title: msg,
      icon:icon,
      duration:500
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})