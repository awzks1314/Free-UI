// pages/module/select/select.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dropdownShow:false,
    dropdownShow1:false,
    dropdownShowValue:''
  },
  openDownListShow(){
    this.setData({
      dropdownShow:!this.data.dropdownShow
    })
  },
  openDownListShow1(){
    this.setData({
      dropdownShow1:!this.data.dropdownShow1
    })
  },
  selectIndex(e){
    wx.showToast({
      title: '您点击了微信支付'+e.currentTarget.dataset.index,
      icon:'none',
      duration: 1500,
    })
    this.setData({
      dropdownShowValue:'微信支付'+e.currentTarget.dataset.index,
      dropdownShow:false,
      dropdownShow1:false
    })
  },
})