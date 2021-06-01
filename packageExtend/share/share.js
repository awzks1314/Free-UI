// packageExtend/share/share.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    popupShow:false,
    shareList: [{
      share: [{
        name: "微信",
        icon: "weixin",
        color: "#80D640"
      },{
        name: "支付宝",
        icon: "zhifubao",
        color: "#00AAEE"
      }, {
        name: "新浪微博",
        icon: "weibo2",
        color: "#F9C718"
      },{
        name: "浏览器打开",
        icon: "global_light",
        color: "#1695F7"
      }, {
        name: "邮件",
        icon: "commentfill",
        color: "#2868E5"
      },{
        name: "浏览器打开",
        icon: "global_light",
        color: "#1695F7"
      }, {
        name: "邮件",
        icon: "commentfill",
        color: "#2868E5"
      }]
    }, {
      operate: [{
        name: "投诉",
        icon: "warnfill",
        size: 28
      }, {
        name: "复制链接",
        icon: "tag",
        size: 28
      }, {
        name: "收藏",
        icon: "like",
        size: 28
      }, {
        name: "搜索内容",
        icon: "search",
        size: 28
      },{
        name:'扫一扫',
        icon:'scan',
        size:28
      }]
    }]
  },
  
  getMode(e){
    this.setData({
      [e.currentTarget.dataset.name]:e.detail.value
    })
  },
  open(){
    this.setData({
      popupShow:true
    })
  },
  popup(){
    this.setData({
      popupShow:false
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})