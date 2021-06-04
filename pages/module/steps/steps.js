// pages/module/steps/steps.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    listIcon:[ 
      {
        icon:'playfill',
        size:40,//单位px
        name:'开始'
      },
      {
        icon:'pullright',
        size:40,
        name:'第二步'
      },
      {
        load:'/static/image/tea/order/delivery.png',//初始图片
        height:40,//
        width:40,
        selected:'/static/image/tea/order/delivered_selected.png',//执行到该步骤的图片
        name:'第三步'
      },
      {
        icon:'roundcheckfill',
        size:40,
        name:'第四步'
      },
    ],
    listNumber: [{
      name: '开始'
    }, {
      name: '等待'
    }, {
      name: '错误'
    }, {
      name: '完成'
    }, ],
    listMore:[
      {name:'第1步'},{name:'第2步'},{name:'第3步'},{name:'第4步'},
      {name:'第5步'},{name:'第6步'},{name:'第7步'},{name:'第8步'},
      {name:'第9步'},{name:'第10步'}
    ],
    current:0,//当前步数
    color:'#0081ef',
    type:'icon',
    num:0,//数字
    scroll:0,//多级
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      list:this.data.listIcon
    })
  }, 
  getMode(e){
    this.setData({
      [e.currentTarget.dataset.name]:e.detail.value,
      list:e.currentTarget.dataset.name=='type' && e.detail.value == 'more'?this.data.listMore:e.currentTarget.dataset.name=='type' && e.detail.value == 'number'?this.data.listNumber:this.data.listIcon
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})