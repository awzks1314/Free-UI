// pages/extend/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
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
    ]
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})