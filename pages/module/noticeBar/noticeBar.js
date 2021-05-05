// pages/module/noticeBar/noticeBar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    notice1:{ 
      text:"点击跳转指定url页面点击跳转指定url页面点击跳转指定url页面",
      type:'tab',
      url:'/pages/module/index/index'
    },
    notice:[
      {
        text:"与现实生活一致：与现实生活的流程、逻辑保持一致，",
        url:'/pages/module/input/input'
      },
      {
        text:"遵循用户习惯的语言和概念；在界面中一致：",
        url:'/pages/module/input/input'
      },
      {
        text:"所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。",
        url:'/pages/module/input/input'
      },
      {
        text:"控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作",
        url:'/pages/module/input/input'
      },
      {
        text:"页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。",
        url:'/pages/module/input/input'
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})