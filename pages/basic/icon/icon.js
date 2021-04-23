// pages/basic/icon/icon.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    iconList:[
      {name:"add"},{name:"add-circle"},{name:"arrow-double-left"},{name:"arrow-double-right"},{name:"arrow-down-bold"},
      {name:"arrow-down-filling"},{name:"arrow-left-bold"},{name:"arrow-left-circle"},{name:"arrow-left-filling"},{name:"arrow-right-bold"},
      {name:"arrow-right-circle"},{name:"arrow-right-filling"},{name:"arrow-up-bold"},{name:"arrow-up-circle"},{name:"arrow-up-filling"},
      {name:"ashbin"},{name:"attachment"},{name:"bottom"},{name:"browse"},{name:"calendar"},
      {name:"camera"},{name:"chart-bar"},{name:"chart-pie"},{name:"check-item"},{name:"add"},
      {name:"check-item-filling"},{name:"close"},{name:"comment"},{name:"comment-filling"},{name:"complete"},
      {name:"copy"},{name:"direction-down"},{name:"direction-down-circle"},{name:"direction-left"},{name:"direction-right"},
      {name:"download"},{name:"edit"},{name:"electronics"},{name:"elipsis"},
      {name:"email"},{name:"eye-close"},{name:"fabulous"},{name:"filter"},{name:"good"},{name:"help"},{name:"hide"},{name:"home"},{name:"home-filling"},{name:"link"},{name:"loading"},{name:"map-filling"},{name:"minus-bold"},{name:"minus-circle"},{name:"navigation"},{name:"notification"},{name:"notification-filling"},{name:"picture-filling"},{name:"play"},{name:"prompt"},{name:"save"},{name:"scanning"},{name:"search"},{name:"security"},{name:"select"},{name:"setting"},{name:"time"},{name:"top"},{name:"upload"},{name:"user"}
    ]
  },
  copy(e){
    wx.setClipboardData({ 
      data: e.currentTarget.dataset.name
    })
  }
})