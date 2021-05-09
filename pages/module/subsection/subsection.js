// pages/module/subsection/subsection.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mode:'button',
    activeColor:'',
    inactiveColor:'',
    buttonColor:''
  },
  getMode(e){
    console.log(e)
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