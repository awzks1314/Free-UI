const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    teaList:app.globalData.teaList,
    StatusBar:app.globalData.StatusBar,
    name:''
  },
  onShow(){
    // 登录凭证，假设name有即登录
    this.setData({
      name:wx.getStorageSync('name')
    })
  },
  gotoMenu(e){
    if(!this.data.name){
      wx.navigateTo({
        url: '/packageTemplate/tea/login/login'
      })
    }else{
      wx.setStorageSync('orderType', e.currentTarget.dataset.type)
      let url = e.currentTarget.dataset.type == 'takeIn'?'/packageTemplate/tea/drink/drink':`/packageTemplate/tea/${e.currentTarget.dataset.url}/${e.currentTarget.dataset.url}`+'?type='+e.currentTarget.dataset.type
      wx.navigateTo({
        url: url
      })
    }
  },
  gotoUrl(e){
    if(!e.currentTarget.dataset.url){
      return
    }
    if(!this.data.name){
      wx.navigateTo({
        url: '/packageTemplate/tea/login/login'
      })
    }else{
      wx.navigateTo({
        url: `/packageTemplate/tea/${e.currentTarget.dataset.url}/${e.currentTarget.dataset.url}`
      })
    }
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  onShareTimeline(){
    
  }
})