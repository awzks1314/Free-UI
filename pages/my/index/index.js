
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList:[
      {name:'Download',number:'999+',color:"orange"},
      {name:'Star',number:'999+',color:"blue"},
      {name:'Fork',number:'999+',color:"cyan"},
    ],
    list:[
      {
        name:'Github源码地址',
        icon:'rankfill',
        iconColor:'#e54d42'
      },
      {
        name:'Gitee源码地址',
        icon:'xiazai',
        iconColor:'#0081ff'
      },
      {
        name:'更新日志',
        icon:'news_hot_fill_light',
        iconColor:'#f37b1d',
        url:'/pages/my/log/log'
      },
      {
        name:'赞赏支持',
        icon:'likefill',
        iconColor:'#fbbd08',
        url:'/pages/my/support/support'
      },
      {
        name:'意见反馈',
        icon:'markfill',
        iconColor:'#e54d42',
        type:'btn'
      },
      {
        name:'关于Free UI',
        icon:'questionfill',
        iconColor:'#0081ff',
        url:'/pages/my/about/about'
      },
    ]
  },
  detail(e){
    console.log(e)
    let index = e.currentTarget.dataset.index
    if(index == 0){
      wx.setClipboardData({
        data: 'https://github.com/awzks1314/Free-UI',
      })
    }else if(index == 1){
      wx.setClipboardData({
        data: 'https://gitee.com/zkszz/free-ui',
      })
    }else if(index == 3){
      wx.previewImage({
        urls: ['cloud://freeui-8gr0qrob21525637.6672-freeui-8gr0qrob21525637-1305934642/wechat.jpg']
      })
    }else if( e.currentTarget.dataset.url){
      wx.navigateTo({
        url: e.currentTarget.dataset.url
      })
    } 
  },
  support(){
    
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  onShareTimeline(){
    
  }
})