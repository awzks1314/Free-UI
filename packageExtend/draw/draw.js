// pages/extend/indexes/indexes.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      // {
      //   id: 'rotate',
      //   sub: 'rotate',
      //   name: '大转盘'
      // }, 
      {
        id: 'scratch',
        sub: 'scratch',
        type: 'blue',
        name: '刮刮乐'
      }, 
      {
        id: 'slotmachine',
        sub: 'slotmachine',
        type: 'red',
        name: '老虎机'
      }, 
      {
        id: 'marquee',
        sub: 'marquee',
        type: 'orange',
        name: '跑马灯'
      }, 
      {
        id: 'gridcard',
        sub: 'gridcard',
        type: 'green',
        name: '九宫格翻纸牌'
      },
      // {
      //   id: 'shake',
      //   sub: 'shake',
      //   name: '摇一摇'
      // },          
      // {
      //   id: 'gestureLock',
      //   sub: 'gestureLock',
      //   name: '手势解锁'
      // }  
    ]
  },
  look(e){
    wx.navigateTo({
      url: `/packageExtend/draw/${e.currentTarget.dataset.sub}/${e.currentTarget.dataset.sub}`
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})