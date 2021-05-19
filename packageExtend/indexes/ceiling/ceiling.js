const friend = require("../../../utils/friend.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollTop:0,
    value:'',
    lists:[],//城市列表
    searchResult:[],//查找列表
    titleHeight: 0, // 索引二字距离窗口顶部的高度
    indexBarHeight: 0, // 索引表高度
    indexBarItemHeight: 0, // 索引表子项的高度
    scrollViewId: '', // scroll-view滚动到的子元素的id 锚点
    touchmove: false, // 是否在索引表上滑动
    touchmoveIndex:-1,
  },
  onLoad(options){ 
    var that = this 
    setTimeout(() => {
      wx.getSystemInfo({
        success: function(res) {
          let winHeight = res.windowHeight
          let barHeight = winHeight - res.windowWidth / 750 * 232
          // 上下距离232/2px
          that.setData({            
            indexBarHeight: barHeight,
            indexBarItemHeight: barHeight / 25,
            titleHeight: res.windowWidth / 750 * 132,
            lists: friend.list
          })
        }
      })
    }, 50)
  },
  stickyChange: function(e) {
    let index = e.detail.index;
    let key = `lists[${index}].stickyTop`
    this.setData({
      [key]: e.detail.top
    })
  },
  //页面滚动执行方式
  onPageScroll(e) {
    console.log(e)
    this.setData({
      scrollTop: e.scrollTop
    })
  },
  // 得到value
  getInputValue(e){
    this.setData({
      value:e.detail.value
    },()=>{
      this.searchCity()
    })
  },
  // 清除输入
  closeInput(e){
    console.log(e)
    this.setData({
      value:''
    })
    wx.pageScrollTo({
      top:0,
      duration: 500,
    })
  },
  // 查找
  searchCity(){
    let result = []
    friend.list.forEach((item1, index1) => {
      item1.data.forEach((item2, index2) => {
        if (item2.keyword.indexOf(this.data.value.toLocaleUpperCase()) !== -1) {
          result.push({
            name: item2.name,
            mobile: item2.mobile
          })
        }
      })
    })
    this.setData({
      searchResult: result
    })
  },
  // 点击
  detail(e){
    wx.showModal({
      confirmText: '好的',
      content: `是否联系${e.currentTarget.dataset.name}`,
      showCancel: true,
      title: '提示',
      success:(res => {
        if(res.confirm){
          wx.makePhoneCall({
            phoneNumber: e.currentTarget.dataset.mobile,
          })
        }
      })
    })
  },
  touchStart(e) {
    this.setData({
      touchmove: true
    })
    let pageY = e.touches[0].pageY - this.data.scrollTop;
    // (当前距离 - 距离顶部距离)/每一个高度 = 算出index值。
    let index = Math.floor((pageY - this.data.titleHeight) / this.data.indexBarItemHeight)
    let item = this.data.lists[index]
    if (item) {
      this.setData({
        scrollViewId: item.letter,
        touchmoveIndex: index
      })
      wx.pageScrollTo({
        scrollTop: this.data.lists[index].stickyTop,
        duration: 0
      })
    }
  },
  touchMove(e) {
    let pageY = e.touches[0].pageY - this.data.scrollTop;
    let index = Math.floor((pageY - this.data.titleHeight) / this.data.indexBarItemHeight)
    let item = this.data.lists[index]
    if (item) {
      this.setData({
        scrollViewId: item.letter,
        touchmoveIndex: index
      })
      wx.pageScrollTo({
        scrollTop: this.data.lists[index].stickyTop,
        duration: 0
      })
    }
  },
  touchEnd() {
    this.setData({
      touchmove: false,
      touchmoveIndex: -1
    })
  },
  touchCancel() {
    this.setData({
      touchmove: false,
      touchmoveIndex: -1
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})