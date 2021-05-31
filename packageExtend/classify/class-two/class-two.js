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
      {image: 'https://images.qmai.cn/s23107/2020/05/08/c25de6ef72d2890630.png?imageView2/2/w/600/h/600'}
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
  onReady(){
    this.getMenuItemTop()
    this.getElRect('menus', 'menuHeight')
    this.getElRect('menu', 'menuItemHeight')
  },
  // 左侧点击
  swichNav(e){
    if(this.data.arr.length == 0) {
       this.getMenuItemTop();
    }
    var current = e.currentTarget.dataset.current;
    if(current == this.data.currentTab){
      return
    }  
    wx.nextTick( () => {
      this.setData({
        currentTab:current, 
        itemId:'cate-'+current,
      })
			this.leftMenuStatus(current);
    })
  },
  // 右侧滑动
  rightScroll(e){
    setTimeout(() =>{
      let scrollHeight = e.detail.scrollTop
      let tab = []
      this.data.arr.forEach((u,index) => {
        if(u <= scrollHeight){
          tab.push({
            index:index
          })
        }
      })
      tab = tab.reverse()
      let inde = tab[0] && tab[0].index
      this.setData({
        currentTab:inde        
      })
      this.leftMenuStatus(inde);
    },1)
  },
  // 设置左边菜单的滚动状态
  leftMenuStatus(index) {
    this.data.scrollTop = index * this.data.menuItemHeight + this.data.menuItemHeight / 2 - this.data.menuHeight / 2;
    this.setData({   
      scrollTop:this.data.scrollTop
    })
  },
  // 计算右侧每个item到顶部的距离
  getMenuItemTop(){
    let selectorQuery = wx.createSelectorQuery();
    selectorQuery.selectAll('.category').boundingClientRect((rects) => {
      // 如果节点尚未生成，rects值为[](因为用selectAll，所以返回的是数组)，循环调用执行
      if(!rects.length) {
        setTimeout(() => {
          this.getMenuItemTop();
        }, 10);
        return ;
      }
      rects.forEach((rect) => {
        // 这里减去输入框的高度，是因为第一项顶部可能不是贴到导航栏(比如有个搜索框的情况)
        this.data.arr.push(rect.top - 55);
      })
      this.setData({
        arr:this.data.arr
      })
    }).exec()
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