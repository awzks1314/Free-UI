// packageModule/progress/progress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    width:'20%',
    height:'30rpx',
    radius:'4rpx',
    progressBg:'#ebeef5',
    widthBg:'#0081ef',
    color:'#fff',
    striped:true,
    active:true,
    notext:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    setTimeout(function() {
      that.setData({
        loading: true
      })
    }, 500)
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