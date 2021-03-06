const app =getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    formList:[
      {
        name:'表单',  
        title:'form',
        icon:'home',
      },
      {
        name:'输入框',
        title:'input',
        icon:'home',
      },
      {
        name:'计数器',
        title:'inputNumber',
        icon:'home',
      },
      {
        name:'评分',
        title:'rate',
        icon:'home',
      },
    ],
    dataList:[
      {
        name:'list列表',
        title:'list',
        icon:'home',
      },
      {
        name:'Grid列表',
        title:'grid-list',
        icon:'home',
      },
      {
        name:'卡片',
        title:'card',
        icon:'home',
      },
      {
        name:'通告栏',
        title:'noticeBar',
        icon:'home',
      },
      {
        name:'折叠面板',
        title:'collapse',
        icon:'home',
      },
      {
        name:'步骤条',
        title:'steps',
        icon:'home',
      },
      {
        name:'分割线',
        title:'divider',
        icon:'home',
      },
      {
        name:'阅读更多',
        title:'readMore',
        icon:'home',
      },
    ],
    navigationList:[
      {
        name:'导航栏',
        title:'navBar',
        icon:'home',
      },
      {
        name:'标签页',
        title:'tabs',
        icon:'home',
      },
      {
        name:'自定义',
        title:'tabbar',
        icon:'home',
      },
      {
        name:'页脚',
        title:'footer',
        icon:'home',
      },
      {
        name:'分段器',
        title:'subsection',
        icon:'home-filling',
      }
    ],
    feedbackList:[
      {
        name:'动作面板',
        title:'actionSheet',
        icon:'home',
      },
      {
        name:'下拉菜单',
        title:'dropdown',
        icon:'home',
      },
      {
        name:'消息提示',
        title:'messageTips',
        icon:'home',
      },
      {
        name:'弹窗',
        title:'modal',
        icon:'home',
      },
      {
        name:'抽屉',
        title:'drawer',
        icon:'home',
      },
      {
        name:'进度条',
        title:'progress',
        icon:'home',
      },
    ],
    otherList:[
      {
        name:'滑动菜单',
        title:'swiper-list',
        icon:'home',
      },
      {
        name:'轮播',
        title:'swiper',
        icon:'home',
      },
      {
        name:'分页加载',
        title:'loadmore',
        icon:'home',
      },
      {
        name:'全局加载',
        title:'loading',
        icon:'home'
      },
      {
        name:'时间轴',
        title:'timeline',
        icon:'home',
      },
      {
        name:'占位槽',
        title:'gap',
        icon:'home',
      },
      {
        name:'空内容',
        title:'empty',
        icon:'home',
      },
      {
        name:'返回顶部',
        title:'backTop',
        icon:'home',
      },
      {
        name:'提示引导',
        title:'guidance',
        icon:'home',
      }
    ],
    scrollTop:0
  },
  //页面滚动执行方式
  onPageScroll(e) {
    this.setData({
      scrollTop: e.scrollTop
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  gotoDetail(e){
    let url = e.currentTarget.dataset.url
    wx.navigateTo({
      url: `/packageModule/${url}/${url}`,
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