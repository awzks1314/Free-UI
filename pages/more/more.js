// pages/more/more.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    elements: [
    {
      title: '芒果背景',
      name: 'background',
      color: 'blue',
      appid:'wx2981dfab57441e61',
      path:'pages/index/index'
    },
      {
      title: 'FreeUI组件库',
      name: 'component',
      color: 'cyan',
      appid:'wxdff7ff3637a35c37',
      path:'pages/my/index/index'
    },
    {
      title: '拾光背景',
      name: 'background',
      color: 'red',
      appid:'wxc081a514564300dd',
      path:'pages/coupon/coupon'
    },
    {
      title: '小芒词典',
      name: 'dictionaries',
      color: 'green',
      appid:'wx356f7586da761650',
      path:'pages/home/home'
    },
    {
      title: '有用助手(注销)',
      name: 'coupon',
      color: 'orange'
    },
    {
      title: '全网精选券(注销)',
      name: 'coupon',
      color: 'purple'
    }
  ]
  },
  gotoMini(e){
    if (!e.currentTarget.dataset.appid) {
      return;
    }
    wx.navigateToMiniProgram({
      appId: e.currentTarget.dataset.appid,
      path: e.currentTarget.dataset.path,
    })
  },
  handlerGobackClick(delta) {
    const pages = getCurrentPages();
    if (pages.length >= 2) {
      wx.navigateBack({
        delta: delta
      });
    } else {
      wx.switchTab({
        url: '/pages/coupon/coupon'
      });
    }
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})