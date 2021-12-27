// packageModule/animation/animation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index:1,
    mask:false,
    color:'#fff'
  },
  getValue(e){
    this.setData({
      index:e.detail.value
    })
  },
  getMode(e){
    this.setData({
      [e.currentTarget.dataset.name]:e.detail.value
    })
  },
  close() {
    this.setData({
      mask:false
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})