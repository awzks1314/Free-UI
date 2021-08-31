// packageModule/footer/footer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list1:[
      {
        url: "/packageBasic/index/index",
        type: "switchTab",
        text: "返回首页",
        color: "#5677fc"
      }
    ],
    list2:[
      {
        url: "/packageBasic/index/index",
        type: "switchTab",
        text: "返回首页",
        color: "#5677fc"
      }, {
        url: "/packageModule/index/index",
        type: "switchTab",
        text: "组件中心",
        color: "#5677fc",
        size: 30
      }
    ],
    list3:[
      {
        url: "/packageBasic/index/index",
        type: "switchTab",
        text: "返回首页",
        color: "#5677fc"
      }, {
        url: "/packageModule/index/index",
        type: "switchTab",
        text: "组件中心",
        color: "#5677fc",
        size: 30
      }, {
        url: "/pages/my/index/index",
        type: "switchTab",
        text: "个人中心",
        color: "#5677fc",
        size: 30
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})