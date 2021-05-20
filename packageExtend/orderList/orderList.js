// packageExtend/orderList/orderList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {name:'全部',num:99},
      {name:'待支付'},
      {name:'待发货'},
      {name:'待收货',num:1},
      {name:'已完成'},
      {name:'已取消',num:16}
    ],
    currentTab:0,
    status:'loading',
    orderList:[],
    scrollTop:0
  },
  onPageScroll(e) {
    this.setData({
      scrollTop: e.scrollTop
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadmore()
  },
  loadmore(){
    setTimeout(() => {
      this.setData({
        orderList:[
          ...this.data.orderList,
          {},{},{}
        ],
        status:'loadmore'
      })
    }, 500);
  },
  // 触底加载
  onReachBottom(){
    this.setData({
      status:'loading'
    })
    // 模拟加载
    if(this.data.orderList.length<7){
      this.loadmore()
    }else{
      this.setData({
        status:'nomore'
      })
    }
  },
  // 模拟切换
  change(e){    
    this.setData({
      currentTab:e.detail.index,
      status:'loading',
      orderList:[],
    })
    if(e.detail.index == 2){
      setTimeout(() => {
        this.setData({
          status:'nomore'
        })
      }, 300);
    }else{
      this.loadmore()
    }
  },
  // 跳转详情
  goToDetail(e){
    let type = e.currentTarget.dataset.type
    wx.navigateTo({
      url: '/packageExtend/orderDetail/orderDetail?type='+type
    })
  }
})