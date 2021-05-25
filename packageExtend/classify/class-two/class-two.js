const app = getApp()
const {menuData} = require('../../../utils/teaData')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    teaList:app.globalData.teaList,
    ads: [
      {image: 'https://img-shop.qmimg.cn/s23107/2020/04/27/4ebdb582a5185358c4.jpg?imageView2/2/w/600/h/600'},
      {image: 'https://images.qmai.cn/s23107/2020/05/08/c25de6ef72d2890630.png?imageView2/2/w/600/h/600'},
      {image: 'https://img-shop.qmimg.cn/s23107/2020/04/10/add546c1b1561f880d.jpg?imageView2/2/w/600/h/600'},
      {image: 'https://images.qmai.cn/s23107/2020/04/30/b3af19e0de8ed42f61.jpg?imageView2/2/w/600/h/600'},
      {image: 'https://img-shop.qmimg.cn/s23107/2020/04/17/8aeb78516d63864420.jpg?imageView2/2/w/600/h/600'}
    ],
    menuList:menuData,
    currentTab:0,
    itemId:'',
    scrollTop:0,
    scrollRightTop:0,
    arr:[],
    menuHeight:0,
    menuItemHeight:0,
    timer: null, // 定时器  
  },
  onLoad(){
    this.getMenuItemTop()
    console.log(this.data.menuList)
    this.getElRect('menus', 'menuHeight')
    this.getElRect('menu', 'menuItemHeight')
  },
  // 左侧点击
  swichNav(e){
    var current = e.currentTarget.dataset.current;
    if(current == this.data.currentTab){
      return
    }
    wx.nextTick( () => {
      this.setData({
        scrollRightTop:this.data.menuList[current].top
      })
			this.leftMenuStatus(current);
    })
  },
  // 右侧滑动
  rightScroll(e){
    let scrollHeight = e.detail.scrollTop ;
    let tabs = []
    console.log(scrollHeight)
    this.data.menuList.forEach((i,index) => {
      if(i.top<=scrollHeight &&  scrollHeight <i.bottom){
        tabs.push({
          index:index
        })
      }
    })
    tabs = tabs.reverse()    
    console.log(tabs)
    if(tabs.length>0){
      this.leftMenuStatus(tabs[0].index)
      return
    }
  },
  // 设置左边菜单的滚动状态
  leftMenuStatus(index) {
    console.log(index)
    // 将菜单活动item垂直居中
    this.data.scrollTop = index * this.data.menuItemHeight + this.data.menuItemHeight / 2 - this.data.menuHeight / 2;
    this.setData({
      currentTab:index,
      scrollTop:this.data.scrollTop
    })
  },
  // 计算右侧每个item到顶部的距离
  getMenuItemTop(){
    let h = 10
			
    let view = wx.createSelectorQuery().select('#ads')
    view.fields({
      size: true
    }, data => {
      h += Math.floor(data.height)
    }).exec()
    
    this.data.menuList.forEach((item,index) => {
      let view = wx.createSelectorQuery().select(`#cate-${index}`)
      view.fields({
        size: true
      }, data => {        
        item.top = h 
        h += data.height
        item.bottom = h
      }).exec()
    })
    this.setData({
      menuList:this.data.menuList
    })
  },
  // 获取一个目标元素的高度
  getElRect(elClass, dataVal) {
    new Promise((resolve, reject) => {
      const query = wx.createSelectorQuery().in(this);
      query.select('.' + elClass).fields({
        size: true
      }, res => {
        // 如果节点尚未生成，res值为null，循环调用执行
        if (!res) {
          setTimeout(() => {
            this.getElRect(elClass);
          }, 10);
          return;
        }
        this.setData({
          [dataVal]:res.height
        })
        resolve();
      }).exec();
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})