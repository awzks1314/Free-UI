// app.js
App({
  onLaunch() {
    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        let custom = wx.getMenuButtonBoundingClientRect();
        this.globalData.Custom = custom;  
        this.globalData.sysInfo = e
        this.globalData.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
      }
    })
  },
  globalData: {
    StatusBar: null,
    CustomBar:null,
    Custom:null,
    sysInfo:null,//可视化窗口高度
    ColorList: [{
      title: '嫣红',
      name: 'red',
      color: '#e54d42'
    },
    {
      title: '桔橙',
      name: 'orange',
      color: '#f37b1d'
    },
    {
      title: '明黄',
      name: 'yellow',
      color: '#fbbd08'
    },
    {
      title: '橄榄',
      name: 'olive',
      color: '#8dc63f'
    },
    {
      title: '森绿',
      name: 'green',
      color: '#39b54a'
    },
    {
      title: '天青',
      name: 'cyan',
      color: '#1cbbb4'
    },
    {
      title: '海蓝',
      name: 'blue',
      color: '#0081ff'
    },
    {
      title: '姹紫',
      name: 'purple',
      color: '#6739b6'
    },
    {
      title: '木槿',
      name: 'mauve',
      color: '#9c26b0'
    },
    {
      title: '桃粉',
      name: 'pink',
      color: '#e03997'
    },
    {
      title: '棕褐',
      name: 'brown',
      color: '#a5673f'
    },
    {
      title: '玄灰',
      name: 'grey',
      color: '#8799a3'
    },
    {
      title: '草灰',
      name: 'gray',
      color: '#aaaaaa'
    },
    {
      title: '墨黑',
      name: 'black',
      color: '#333333'
    },
    {
      title: '雅白',
      name: 'white',
      color: '#ffffff'
    },
  ],
  teaList: {
    "color": "#aaaaaa",
    "selectedColor": "#97af13",
    "backgroundColor": "#fff",
    list: [
        {
          "pagePath": "/packageTemplate/tea/home/home",
          "text": "首页",
          "iconPath": "/static/image/tea/tabBar/index.png",
          "selectedIconPath": "/static/image/tea/tabBar/index_selected.png",
          type:'url'
        },
        {
          "pagePath": "/packageTemplate/tea/drink/drink",
          "text": "点餐",
          "iconPath": "/static/image/tea/tabBar/drink.png",
          "selectedIconPath": "/static/image/tea/tabBar/drink_selected.png",
          type:'url'
        },
        {
          "pagePath": "/packageTemplate/tea/take/take",
          "text": "取餐",
          "iconPath": "/static/image/tea/tabBar/take.png",
          "selectedIconPath": "/static/image/tea/tabBar/take_selected.png",
          type:'url'
        },
        {
          "pagePath": "/packageTemplate/tea/mine/mine",
          "text": "我的",
          "iconPath": "/static/image/tea/tabBar/mine.png",
          "selectedIconPath": "/static/image/tea/tabBar/mine_selected.png",
          type:'url'
        }
      ]
    },
    updateLog:[
      '1.free-input新增聚焦focus、max最大字数字段',
      '2.free-empty图片初始大小更改300rpx',
      '3.free-list新增noBorder，不设置底部边框',
      '4.free-backTop更改初始图标',
      '5.free-loading新增noBorder，不设置左右横线',
      '6.free-tabbar圆角限制',
      '7.free-judgeLogin新增跳转地址自定义',
    ],
    logShow:true
  }
})
