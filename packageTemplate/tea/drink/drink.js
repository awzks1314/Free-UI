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
    arr:[],//右侧到顶部的距离
    menuHeight:0,
    menuItemHeight:0,
    timer: null, // 定时器 
    orderType:'',//订单状态
    address:'' ,//外卖情况下的收货地址
    cartList:[],//购物车列表
    cartNumber:0,//购物车数量
    show:false,//弹框展示
    sizeShow:false,//规格弹窗
    sizeSelectInfo:{},//弹窗选中数据
  },
  onReady(){
    this.getMenuItemTop()
    this.getElRect('menus', 'menuHeight')
    this.getElRect('menu', 'menuItemHeight')
  },
  onShow(){
    // 获取地址信息
    this.setData({
      orderType:wx.getStorageSync('orderType') || 'takeIn',
      address:wx.getStorageSync('address') || {},
    })
  },
  // 自取还是外卖
  changeType(e){
    let type = e.currentTarget.dataset.type
    if(type == this.data.orderType){
      return
    }
    if(type == 'takeIn'){
      this.setData({
        orderType:type
      })
    }else{
      wx.navigateTo({
        url: '/packageTemplate/tea/address/address?type='+type
      })
    }
  },
  // +号添加商品
  addProduct(e){
    let index = e.currentTarget.dataset.index
    let name = e.currentTarget.dataset.item.name
    let type = e.currentTarget.dataset.type    
    // 加入购物车

    this.data.menuList.forEach(i => {
      i.number = 0
      if(i.name == name && type =='add'){
        i.product[index].number +=1
      }
      else if(i.name == name && type =='reduce'){
        i.product[index].number -=1
      }
      i.product.forEach(u => {
        i.number +=u.number
      })
    })
    this.setData({
      menuList:this.data.menuList
    },() => {
      this.sumCart()
    })
  },
  // 加入购物车
  sumCart(){
    let arr = []
    let num = 0
    this.data.menuList.forEach( i => {
      if(i.number>0){
        i.product.forEach(u => {
          if(u.number>0){
            arr.push({
              name:u.name,
              number:u.number,
              price:u.price
            })
          }
        })
      }
    })
    arr.forEach(i => {
      num +=i.number
    })
    this.setData({
      cartList:arr,
      cartNumber:num
    })
  },
  // 打开购物车模态框
  openCart(e){
    this.setData({
      show:!this.data.show
    })
  },
  // 打开规格模态框
  openSize(e){
    this.setData({
      sizeSelectInfo:e.currentTarget.dataset.item,//弹框选中数据
      sizeShow:!this.data.sizeShow
    })
  },
  // 隐藏
  hideSize(){
    this.setData({
      sizeShow:false
    })
  },
  // 购物车数量加减
  changeCart(e){
    let ind = e.currentTarget.dataset.index    
    let type = e.currentTarget.dataset.type  
    this.data.cartList.forEach((i,index) => {
      if( type =='add' && ind == index){
        i.number +=1
      }
      else if(type =='reduce'&& ind == index){
        // 
        if(i.number == 1){
          // 再减就删除了
          this.data.cartList.splice(index,1)
        }else{
          i.number -=1
        }        
      }
    })
    this.setData({
      cartList:this.data.cartList
    })
  },  
  // 去结算
  pay(){
    wx.navigateTo({
      url: '/packageTemplate/tea/pay/pay'
    })
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
    },10)
  },
  // 设置左边菜单的滚动状态
  leftMenuStatus(index) {
    console.log(index)
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
        // 这里减顶部高度，是因为第一项顶部可能不是贴到导航栏(比如有个搜索框的情况)
        this.data.arr.push(rect.top - 109);
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
  onHide(){
    this.setData({
      show:false
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  onShareTimeline(){
    
  }
})