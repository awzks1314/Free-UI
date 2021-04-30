// pages/module/tabs/tabs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs1:[
      {name:'标签页1'},
      {name:'标签页2'},
      {name:'标签页5',disabled: true},
      {name:'标签页3'},
    ],
    tabs2:[
      {name:'标签页1'},
      {name:'标签页2'},
      {name:'标签页3'},
      {name:'标签页3'},
    ],
    tabs:[
      {name:'标签页1',icon:"home"},
      {name:'标签页2',icon:"home"},
      {name:'标签页3',icon:"home"},
      {name:'标签页3',icon:"home"},
    ],
    currentTab:0,
    TabCur: 0,
    scrollLeft:0
  },
  change(e){
    this.setData({
      currentTab:e.detail.index
    })
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id-1)*60
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})