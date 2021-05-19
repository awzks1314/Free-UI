const friend = require("../../../utils/friend.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:'',
    lists:[],//城市列表
    searchResult:[],//查找列表
    winHeight: 0,
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
          console.log(res)
          let barHeight = winHeight - res.windowWidth / 750 * 232
          // 上下距离232/2px
          that.setData({      
            winHeight:winHeight - 50,
            indexBarHeight: barHeight ,
            indexBarItemHeight: barHeight / 25,
            titleHeight: res.windowWidth / 750 * 116,
            lists: friend.list
          })
        }
      })
    }, 50)
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
  // 点击城市
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
    let pageY = e.touches[0].pageY
    let index = Math.floor((pageY - this.data.titleHeight) / this.data.indexBarItemHeight)
    let item = this.data.lists[index]
    if (item) {
      this.setData({
        scrollViewId: item.letter,
        touchmoveIndex: index
      })
    }
  },
  touchMove(e) {
    let pageY = e.touches[0].pageY;
    let index = Math.floor((pageY - this.data.titleHeight) / this.data.indexBarItemHeight)
    let item = this.data.lists[index]
    if (item) {
      this.setData({
        scrollViewId: item.letter,
        touchmoveIndex: index
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