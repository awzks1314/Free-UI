// pages/basic/color/color.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:[
      {name:'深色背景'},{name:'浅色背景'},{name:'渐变背景'}
    ],
    currentTab:0,
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
    gradualList:[
      {name:'梅红',str:'#f43f3b - #ec008c',style:'red'},
      {name:'鎏金',str:'#ff9700 - #ed1c24',style:'orange'},
      {name:'翠柳',str:'#39b54a - #8dc63f',style:'green'},
      {name:'靛青',str:'#0081ff - #1cbbb4',style:'blue'},
      {name:'惑紫',str:'#9000ff - #5e00ff',style:'purple'},
      {name:'霞彩',str:'#ec008c - #6739b6',style:'pink'},
      {name:'心动',str:'#ffa593 - #ff1c4e',style:'heart'},
      {name:'牵牛花',str:'#eec6a2 - #ef6a9f',style:'yan'},
      {name:'香槟金',str:'#ba9961 - #edde95',style:'gold'},
      {name:'黛蓝',str:'#182830 - #385c6e',style:'other'},
    ]
  },
  copy(e){
    wx.setClipboardData({ 
      data:'bg-'+ e.currentTarget.dataset.name
    })
  },
   // 改变选择tab
   change(e){
    this.setData({
      currentTab:e.detail.index
    })
  },
})