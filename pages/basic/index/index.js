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
        desc:'Flex布局、Grid布局、内外边距',
        icon:'electronics'
      },
      {
        name:'背景',
        title:'color',
        desc:'深色、浅色、渐变背景',
        icon:'picture-filling'
      },
      {
        name:'边框',
        title:'border',
        desc:'虚实边框、圆角以及阴影',
        icon:'scanning'
      },
      {
        name:'图标',
        title:'icon',
        desc:'一些内置的图标，直接食用',
        icon:'notification-filling'
      },
      {
        name:'按钮',
        title:'button',
        desc:'高亮、镂空以及各种颜色大小按钮',
        icon:'arrow-up-circle'
      },
      {
        name:'标签',
        title:'tag',
        desc:'常用的标签样式',
        icon:'good'
      },
      {
        name:'文本',
        title:'text',
        desc:'文本样式、多行省略、特俗文字',
        icon:'edit'
      }
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