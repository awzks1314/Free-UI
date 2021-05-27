// packageExtend/watermark/watermark.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    opacity:'.3',//字体透明度
    color:'#081EF',//字体颜色
    number:6,//水印数量
    deg:'-45'//旋转角度
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