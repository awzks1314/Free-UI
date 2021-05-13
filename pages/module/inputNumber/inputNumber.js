// pages/module/inputNumber/inputNumber.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:1,
    max:6,
    min:1,
    step:1,
    disabled:false,
    height:60,
    width:100,
    iconsize:36,
    styleColor:'',
    style:'normal'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  getMode(e){
    this.setData({
      [e.currentTarget.dataset.name]:e.detail.value
    },() => {
      this.setData({
        value:this.data.min
      })
    })
  },
  getValue(e){
    this.setData({
      value:e.detail.value
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})