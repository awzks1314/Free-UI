const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ColorList: app.globalData.ColorList,
    tabs:[
      {name:'文本大小'},
      {name:'文本颜色'},
      {name:'文本省略'},
      {name:'文字处理'},
      {name:'特殊效果'},
    ],
    currentTab:0,
    list:[
      {name:'text-xs',sub:'20rpx'},
      {name:'text-sm',sub:'24rpx'},
      {name:'text-df',sub:'28rpx'},
      {name:'text-lg',sub:'32rpx'},
      {name:'text-xl',sub:'36rpx'},
      {name:'text-xxl',sub:'44rpx'},
      {name:'text-sl',sub:'80rpx'},
      {name:'text-xsl',sub:'120rpx'},
    ]
  },
  change(e){
    this.setData({
      currentTab:e.detail.index
    })
  }
})