const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    teaList:app.globalData.teaList,
    hasOrder:false,
    list:[
      {
        name:'已下单',
        width:40,
        height:40,
        load:'/static/image/tea/order/ordered.png',
        selected:'/static/image/tea/order/ordered_selected.png',
      },
      {
        name:'制作中',
        width:40,
        height:40,
        load:'/static/image/tea/order/delivered.png',
        selected:'/static/image/tea/order/delivered_selected.png',
      },
      {
        name:'配送中',
        width:40,
        height:40,
        load:'/static/image/tea/order/delivery.png',
        selected:'/static/image/tea/order/delivery_selected.png',
      },
      {
        name:'已送达',
        width:40,
        height:40,
        load:'/static/image/tea/order/production.png',
        selected:'/static/image/tea/order/production_selected.png',
      },
    ]
  },
  onShow(){
    this.setData({
      hasOrder:wx.getStorageSync('hasOrder')
    })
  },
  goToUrl(e){
    if(!e.currentTarget.dataset.url){
      return
    }
    // 判断登录
    if(!wx.getStorageSync('name')){
      wx.navigateTo({
        url: '/packageTemplate/tea/login/login',
      })
    }else{
      wx.navigateTo({
        url: e.currentTarget.dataset.url,
      })
    }
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})