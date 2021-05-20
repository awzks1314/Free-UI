const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabbar: ["推荐分类", "进口超市", "国际名牌", "奢侈品", "海囤全球", "男装", "女装", "男鞋", "女鞋", "钟表珠宝", "手机数码", "电脑办公", "家用电器", "玩具乐器", "运动户外", "宠物生活", "特产馆"],
    menuHeight: 0, // 左边菜单的高度
		menuItemHeight: 0, // 左边菜单item的高度
    currentTab: 0, //预设当前项的值
    scrollTop: 0,//tab标题的滚动条位置
    scrollRightTop:0,//右边距离
    oldScrollTop: 0,
    swiperList:[
      {id:0,type:'image',url:'https://ossweb-img.qq.com/images/lol/web201310/skin/big84003.jpg'},
      {id:1,type:'image',url:'https://ossweb-img.qq.com/images/lol/web201310/skin/big84004.jpg'},
      {id:2,type:'image',url:'https://ossweb-img.qq.com/images/lol/web201310/skin/big84005.jpg'},
      {id:3,type:'image',url:'https://ossweb-img.qq.com/images/lol/web201310/skin/big84006.jpg'},
      {id:4,type:'image',url:'https://ossweb-img.qq.com/images/lol/web201310/skin/big84007.jpg'},
      {id:5,type:'image',url:'https://ossweb-img.qq.com/images/lol/web201310/skin/big84008.jpg'}
    ],
    gridList:[ 
      {name:'默认样式',number:49,image:''},
      {name:'数量超99',number:999,image:''},
      {name:'默认颜色',number:18},
      {name:'无角标',number:0,},
      {name:'颜色可修改',number:17,color:'green'},
      {name:'修改大小',number:100,width:"",height:''},
      {name:'默认颜色',number:18},
      {name:'无角标',number:0,},
      {name:'颜色可修改',number:17,color:'green'},
      {name:'修改大小',number:100}
    ],
    itemId:'',//锚点id
    arr:[],
    timer: null, // 定时器  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 计算左侧菜单的高度
    const query = wx.createSelectorQuery()                // 创建节点查询器 query
    query.select('#input').boundingClientRect()
    query.exec((res) => {
      this.setData({
        menuHeight: app.globalData.sysInfo.windowHeight - res[0].height
      });
    })
  },
  onReady(){
    // 计算右侧每个item到顶部的距离
    this.getMenuItemTop()
    this.getElRect('left-view', 'menuHeight')
    this.getElRect('left-item', 'menuItemHeight')
  },
  // 左侧菜单滑动
  swichNav(e){
    var current = e.currentTarget.dataset.current;
    if(current == this.data.currentTab){
      return
    }
    this.setData({
      scrollRightTop:this.data.oldScrollTop
    })
    wx.nextTick( () => {
      this.setData({
        currentTab:current,
        scrollRightTop:this.data.arr[current]
      })
			this.leftMenuStatus(current);
    })
  },
  // 设置左边菜单的滚动状态
  leftMenuStatus(index) {
    // 将菜单活动item垂直居中
    this.data.scrollTop = index * this.data.menuItemHeight + this.data.menuItemHeight / 2 - this.data.menuHeight / 2;
    this.setData({
      currentTab:index,
      scrollTop:this.data.scrollTop
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
  // 计算右侧每个item到顶部的距离
  getMenuItemTop(){
    new Promise(resolve => {
      let selectQuery = wx.createSelectorQuery()
      selectQuery.selectAll('.right-item').boundingClientRect((rects) => {
        
        // 如果节点尚未生成，rects值为[](因为用selectAll，所以返回的是数组)，循环调用执行
          if(!rects.length) {
            setTimeout(() => {
              this.getMenuItemTop();
            }, 10);
            return ;
          }
          rects.forEach((rect) => {
            // 这里减去rects[0].top，是因为第一项顶部可能不是贴到导航栏(比如有个搜索框的情况)
            this.data.arr.push(rect.top - rects[0].top );
            resolve();
          })
      }).exec()
    })
    
  },
  // 右侧滑动
   rightScroll(e){
    this.setData({
      oldScrollTop:e.detail.scrollTop
    })
    if(this.data.arr.length == 0){
       this.getMenuItemTop()
    }
    if(this.data.timer){
      return
    }
    
    setTimeout(() => {
      this.setData({
        timer:null
      })
      // scrollHeight 
      // 右边菜单垂直中点位置
      let scrollHeight = e.detail.scrollTop + this.data.menuHeight / 2;
      // console.log(scrollHeight)
      for(let i=0;i<this.data.arr.length;i++){
        // console.log(i)
        let h1 = this.data.arr[i]
        let h2 = this.data.arr[i+1]
        // 如果h2不存在，说明滑到了最后一个，左边菜单最后一项
        if(!h2 || (scrollHeight >= h1 && scrollHeight<h2)){
          this.leftMenuStatus(i)
          return
        }
      }
    }, 10);
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})