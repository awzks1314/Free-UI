// pages/module/steps/steps.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stepsList:[
      {
        icon:'play',
        name:'开始'
      },
      {
        icon:'loading',
        name:'第二步'
      },
      {
        icon:'time',
        name:'第三步'
      },
      {
        icon:'security',
        name:'第四步'
      },
    ],
    numList: [{
      name: '开始'
    }, {
      name: '等待'
    }, {
      name: '错误'
    }, {
      name: '完成'
    }, ],
    moreList:[
      {name:'第1步'},{name:'第2步'},{name:'第3步'},{name:'第4步'},
      {name:'第5步'},{name:'第6步'},{name:'第7步'},{name:'第8步'},
      {name:'第9步'},{name:'第10步'}
    ],
    current:0,//基本
    num:0,//数字
    scroll:0,//多级
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  // 下一步
  clickStepNext(){
    this.setData({
      current:this.data.current == this.data.stepsList.length -1?0:this.data.current+1
    })
  },
  clickStepBefore(){
    this.setData({
      current:this.data.current == 0?0:this.data.current-1
    })
  },
  // 数字下一步
  clickStepsNext() {
    this.setData({
      num: this.data.num == this.data.stepsList.length - 1 ? 0 : this.data.num + 1
    })
  },
  // 数字上一步
  clickStepsBefore(){
    this.setData({
      num: this.data.num == 0 ? 0 : this.data.num -1
    })
  },
  // 多级下一步
  clickStepMoreNext(){
    this.setData({
      scroll: this.data.scroll == this.data.moreList.length -1 ? 0 : this.data.scroll + 1
    })
  },
  clickStepMoreBefore(){
    this.setData({
      scroll: this.data.scroll == this.data.moreList.length -1 ? 0 : this.data.scroll - 1
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})