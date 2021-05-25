const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    teaList:app.globalData.teaList,
    serveList:[
      {name:'积分签到',img:'jfqd',url:''},
      {name:'送她心愿',img:'stxy',url:''},
      {name:'奈雪商城',img:'nxsc',url:''},
      {name:'联系客服',img:'lxkf',url:''},
      {name:'我的订单',img:'wddd',url:''},
      {name:'我的资料',img:'wdzl',url:''},
      {name:'收货地址',img:'shdz',url:''},
      {name:'更多服务',img:'gdfw',url:''},
    ]
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})