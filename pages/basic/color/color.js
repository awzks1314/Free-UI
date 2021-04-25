const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:[
      {name:'深色背景'},{name:'浅色背景'},{name:'渐变背景'}
    ],
    currentTab:0,
    ColorList: app.globalData.ColorList,
    gradualList:[
      {name:'梅红',str:'#f43f3b - #ec008c',style:'red'},
      {name:'鎏金',str:'#ff9700 - #ed1c24',style:'orange'},
      {name:'翠柳',str:'#39b54a - #8dc63f',style:'green'},
      {name:'靛青',str:'#0081ff - #1cbbb4',style:'blue'},
      {name:'惑紫',str:'#9000ff - #5e00ff',style:'purple'},
      {name:'霞彩',str:'#ec008c - #6739b6',style:'pink'},
      {name:'心动',str:'#ffa593 - #ff1c4e',style:'heart'},
      {name:'牵牛花',str:'#eec6a2 - #ef6a9f',style:'yan'},
      {name:'香槟金',str:'#ba9961 - #edde95',style:'gold'},
      {name:'黛蓝',str:'#182830 - #385c6e',style:'other'},
    ]
  },
  copy(e){
    wx.setClipboardData({ 
      data:'bg-'+ e.currentTarget.dataset.name
    })
  },
   // 改变选择tab
   change(e){
    this.setData({
      currentTab:e.detail.index
    })
  },
})