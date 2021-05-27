// packageTemplate/tea/review/review.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current:1,
    textareaValue:'',
    list:[
      {
        name:'服务',
        title:'能感受到良好的服务态度吗?',
        rate:0
      },
      {
        name:'点单',
        title:'点单有恰当的介绍，快速准确地下单吗?',
        rate:0
      },
      {
        name:'速度',
        title:'出品的速度您认为可接受吗?',
        rate:0
      },
      {
        name:'产品',
        title:'您享用的茶饮或面包，如您所期待吗?',
        rate:0
      },
      {
        name:'环境',
        title:'门店环境和清洁卫生，您满意吗?',
        rate:0
      },
    ]
  },
  change(e){
    // 第几个
    console.log(e.detail.index)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})