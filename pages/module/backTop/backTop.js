// pages/module/backTop/backTop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mode:'circle',// circle 圆形 square 方形
    bottom:200,//距离顶部距离 rpx
    top:0,//距离顶部多少距离显示 px
    bgColor:'',//背景色
    color:'',//文字图标颜色
    icon:'top',//图标
    right:'24',//距离右侧距离 rpx
    scrollTop:0
  },
  //页面滚动执行方式
  onPageScroll(e) {
    this.setData({
      scrollTop: e.scrollTop
    })
  },
  SetSize(e) {
    this.setData({
      mode: e.detail.value
    })
  },
  getBottom(e) {
    this.setData({
      bottom: e.detail.value
    })
  },
  getTop(e) {
    this.setData({
      top: e.detail.value
    })
  },
  getIcon(e) {
    this.setData({
      icon: e.detail.value
    })
  },
  getBgColor(e) {
    this.setData({
      bgColor: e.detail.value,
      color:"#fff"
    })
  },
  getRight(e) {
    this.setData({
      right:e.detail.value
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})