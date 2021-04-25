// pages/basic/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        name:'布局',
        title:'layout',
        icon:'electronics'
      },
      {
        name:'背景',
        title:'color',
        icon:'picture-filling'
      },
      {
        name:'边框',
        title:'border',
        icon:'scanning'
      },
      {
        name:'图标',
        title:'icon',
        icon:'notification-filling'
      },
      {
        name:'按钮',
        title:'button',
        icon:'arrow-up-circle'
      },
      {
        name:'标签',
        title:'tag',
        icon:'good'
      },
      {
        name:'文本',
        title:'text',
        icon:'edit'
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