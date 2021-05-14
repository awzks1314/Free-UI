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
    console.log(e)
    let index = e.currentTarget.dataset.index
    if(index == 1){
      wx.setClipboardData({
        data: 'https://github.com/awzks1314/Free-UI',
      })
    }else{
      wx.navigateTo({
        url: e.currentTarget.dataset.url
      })
    } 
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})