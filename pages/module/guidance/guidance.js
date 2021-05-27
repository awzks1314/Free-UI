// pages/module/guidance/guidance.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time:0,
    animation:true,
    bgColor:'#f1f1f1',
    color:"#919293",
    close:false
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