// packageModule/navBar/navBar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {name:'自定义导航栏',id:'1'},
      {name:'自定义导航栏带搜索',id:'2'},
      {name:'只有返回图标',id:'3'},
      {name:'导航栏深色白图标',id:'4'},
      {name:'导航栏深色带返回',id:'5'},
      {name:'左侧完全自定义',id:'6'},
      {name:'自定义左侧图标',id:'7'},
      {name:'导航栏透明不占位',id:'8'},
      {name:'下拉动态改变背景色',id:'9'}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  gotoDemo(e){
    wx.navigateTo({
      url: './demo?index='+e.currentTarget.dataset.index,
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})