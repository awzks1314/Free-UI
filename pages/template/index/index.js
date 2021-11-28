
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        name:'奈雪的茶',
        title:'tea'
      }
    ],
    jsList:[
      
      {
        name:'多久之前',
        title:'timeFrom'
      },
      {
        name:'多久之后',
        title:'timeAfter'
      },
      {
        name:'防抖节流',
        title:'debounce'
      },
      {
        name:'颜色转化',
        title:'colorSwitch'
      },
      {
        name:'规则验证',
        title:'rules'
      },
      {
        name:'去除空格',
        title:'trim'
      },
      {
        name:'时间格式化',
        title:'timeFormat'
      },
      {
        name:'文本超链接',
        title:'hyperlink'
      }
    ]
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  onShareTimeline(){
    
  }
})