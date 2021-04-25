// pages/basic/layout/layout.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:[
      {name:'Flex布局'},{name:'Grid布局'},{name:'内外边距'}
    ],
    currentTab:0,
    size:[
      {name:'xs'},{name:'sm'},{name:'df'},{name:'lg'},{name:'xl'},
    ]
  },
  // 改变选择tab
  change(e){
    this.setData({
      currentTab:e.detail.index
    })
  },
  copy(e){
    wx.setClipboardData({ 
      data: e.currentTarget.dataset.name
    })
  }
})