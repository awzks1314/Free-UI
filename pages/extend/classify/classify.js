const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabbar: ["推荐分类", "进口超市", "国际名牌", "奢侈品", "海囤全球", "男装", "女装", "男鞋", "女鞋", "钟表珠宝", "手机数码", "电脑办公", "家用电器", "玩具乐器", "运动户外", "宠物生活", "特产馆"],
    menuHeight:0,
    currentTab: 0, //预设当前项的值
    scrollTop: 0,//tab标题的滚动条位置
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 计算左侧菜单的高度
    const query = wx.createSelectorQuery()                // 创建节点查询器 query
    query.select('#input').boundingClientRect()
    query.exec((res) => {
      console.log(res)
      this.setData({
        menuHeight: app.globalData.sysInfo.windowHeight - res[0].height
      });
    })
  },
  // 左侧菜单滑动
  swichNav(e){
    console.log(e)
    var current = e.currentTarget.dataset.current;
    if(current == this.data.currentTab){
      return
    }
    // 根据实际情况进行调整，超过一页半数时，滚动
    const query = wx.createSelectorQuery()                // 创建节点查询器 query
    query.select('#item').boundingClientRect()
    query.exec((res) => {
      wx.pageScrollTo({
        scrollTop:0
      })
      this.setData({
        currentTab:current,
        scrollTop:(current - 5) * res[0].height
      })  
    }) 
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})