// pages/module/divider/divider.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lineWidth:'50',
    lineColor:'#dcdfe6',
    title:'没有更多了',
    color:'#333'
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