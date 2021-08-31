// packageModule/noticeBar/noticeBar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    notice:[  
      {
        text:"与现实生活一致：与现实生活的流程、逻辑保持一致，",
        url:'/packageModule/input/input'
      },
      {
        text:"遵循用户习惯的语言和概念；在界面中一致：",
        url:'/packageModule/input/input'
      },
      {
        text:"所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。",
        url:'/packageModule/input/input'
      },
      {
        text:"控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作",
        url:'/packageModule/input/input'
      },
      {
        text:"页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。",
        url:'/packageModule/input/input'
      },
    ],
    isFixed:false,//是否固定顶部
    animation:false,//动画
    isLeft:true,//左侧图标
    iconColor:'#fff',//文字图标颜色
    isRight:true,//右侧图标
    vertical:true,//true横向滚动 false竖向滚动
    backgroundColor:'#0081ef',//背景色
  },
  getMode(e){
    this.setData({
      [e.currentTarget.dataset.name]:e.detail.value
    })
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