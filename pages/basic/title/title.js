// pages/basic/title/title.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bold:true,
    titlecolor:'#0081ef',
    bottomColor:'#0081ef',
    type:1,
    icon:'none',
    bgColor:'#fff'
  },
  getMode(e){
    this.setData({
      [e.currentTarget.dataset.name]:e.detail.value
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})