// pages/module/backTop/backTop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mode:'circle',// circle 圆形 square 方形
    bottom:100,//距离顶部距离 rpx
    top:50,//距离顶部多少距离显示 px
    bgColor:'grey',//背景色
    color:'#fff',//文字图标颜色
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