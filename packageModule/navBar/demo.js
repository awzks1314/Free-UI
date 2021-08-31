// packageModule/navBar/demo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index:'',
    background:'#fff'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      index:options.index
    })
  },
  onPageScroll(e) {
    let opciaty = e.scrollTop / 130;
    if (opciaty >= 1) {
      opciaty = 1;
    } else if (opciaty <= 0) {
      opciaty = 0;
    }
    this.setData({ background: `rgba(255,0,0,${opciaty})` });
  },
  handlerGobackClick(delta) {
    // wx.showModal({
    //   title: '你点击了返回',
    //   content: '是否确认放回',
    //   success: e => {
    //     if (e.confirm) {
    //       const pages = getCurrentPages();
    //       if (pages.length >= 2) {
    //         wx.navigateBack({
    //           delta: 1
    //         });
    //       } else {
    //         wx.navigateTo({
    //           url: '/pages/index/index'
    //         });
    //       }
    //     }
    //   }
    // });
    const pages = getCurrentPages();
    if (pages.length >= 2) {
      wx.navigateBack({
        delta: delta
      });
    } else {
      wx.navigateTo({
        url: '/packageModule/navBar/navBar'
      });
    }
  },
  handlerGohomeClick() {
    wx.switchTab({
      url: '/packageModule/index/index'
    });
  }
})