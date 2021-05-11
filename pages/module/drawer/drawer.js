// pages/module/drawer/drawer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show:false,
    mode:'left',//模式
    radius:'0rpx',
    closeable:true,
    maskClosable:true,
    closeIconPos:'top-right'
  },
  getMode(e){
    console.log(e)
    this.setData({
      [e.currentTarget.dataset.name]:e.detail.value,
      show:true
    })
  },
  openDrawer(){
    this.setData({
      show:true
    })
  },
  closeDrawer(){
    this.setData({
      show:false
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})