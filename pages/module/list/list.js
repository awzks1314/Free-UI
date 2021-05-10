// pages/module/list/list.js
Page({

  /**
   * 页面的初始数据
   */ 
  data: {
    tabs:[
      {name:"Grid列表"},
      {name:"菜单列表"},
      {name:"消息列表"}
    ],
    currentTab:0,
    icon:true,//图标图片
    arrow:true,//箭头
  },
  getMode(e){
    this.setData({
      [e.currentTarget.dataset.name]:e.detail.value
    })
  },
  change(e){
    this.setData({
      currentTab:e.detail.index
    })
  },
  onClick(e){
    wx.showToast({
      title: `点击索引${e.detail.index}`,
      icon:'none',
      duration: 1000
    })
  }
})