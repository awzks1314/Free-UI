// pages/my/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList:[
      {name:'Download',number:'999+',color:"orange"},
      {name:'Star',number:'999+',color:"blue"},
      {name:'Fork',number:'999+',color:"cyan"},
    ]
  },

  detail(e){
    wx.showToast({
      title: '你点击了该选项',
      icon:'none',
      duration: 1000
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})