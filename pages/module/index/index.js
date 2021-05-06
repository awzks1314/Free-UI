// pages/module/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        name:'输入框',
        title:'input',
        icon:'home',
      },
      {
        name:'计数器',
        title:'inputNumber',
        icon:'home',
      },
      {
        name:'下拉',
        title:'select',
        icon:'home',
      },
      {
        name:'评分',
        title:'rate',
        icon:'home',
      },
      {
        name:'消息提示',
        title:'messageTips',
        icon:'home',
      },
      {
        name:'弹窗',
        title:'modal',
        icon:'home',
      },
      {
        name:'抽屉',
        title:'drawer',
        icon:'home',
      },
      {
        name:'导航栏',
        title:'navBar',
        icon:'home',
      },
      {
        name:'标签页',
        title:'tabs',
        icon:'home',
      },
      {
        name:'列表',
        title:'list',
        icon:'home',
      },
      {
        name:'滑动菜单',
        title:'swiper-list',
        icon:'home',
      },
      {
        name:'卡片',
        title:'card',
        icon:'home',
      },
      {
        name:'标签栏',
        title:'tabbar',
        icon:'home',
      },
      {
        name:'表单',  
        title:'form',
        icon:'home',
      },
      {
        name:'折叠面板',
        title:'collapse',
        icon:'home',
      },
      {
        name:'轮播',
        title:'swiper',
        icon:'home',
      },
      {
        name:'通告栏',
        title:'noticeBar',
        icon:'home',
      },
      {
        name:'步骤条',
        title:'steps',
        icon:'home',
      },
      {
        name:'动作面板',
        title:'actionSheet',
        icon:'home',
      },
      {
        name:'加载',
        title:'loading',
        icon:'home',
      },
      {
        name:'进度条',
        title:'progress',
        icon:'home',
      },
      {
        name:'时间轴',
        title:'timeline',
        icon:'home',
      },
      {
        name:'页脚',
        title:'footer',
        icon:'home-filling',
      },
      {
        name:'结果页',
        title:'result',
        icon:'home',
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  gotoDetail(e){
    let url = e.currentTarget.dataset.url
    wx.navigateTo({
      url: `/pages/module/${url}/${url}`,
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})