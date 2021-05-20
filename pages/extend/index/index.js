// pages/extend/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listPage:[
      {
        name:'索引列表',
        title:'indexes',
        desc:'城市选择、通讯录、通讯录吸顶效果',
        type:'icon',
        color:'red',
        icon:'electronics'
      },
      {
        name:'分类选择',
        title:'classify',
        desc:'',
        type:'icon',
        color:'orange',
        icon:'electronics'
      },
      {
        name:'收货地址',
        title:'address'
      },
      {
        name:'登录页面', 
        title:'loginPage'
      },
      {
        name:'订单列表', 
        title:'orderList'
      },
      {
        name:'订单详情', 
        title:'orderDetail'
      }
    ],
    listComponent:[
      {
        name:'登录判断',
        title:'judgeLogin'
      },
      {
        name:'操作条',
        title:'actionBar'
      },
    ]
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})