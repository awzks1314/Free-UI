// packageModule/rate/rate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current:1,//当前位置
    active:'#0081EF',//颜色
    number:5,//数量
    size:40,//尺寸大小
    hollow:false,//实心空闲
    score:0,
    disabled:true
  },
  getMode(e){
    this.setData({
      [e.currentTarget.dataset.name]:e.detail.value
    })
  },
  change (e) {
    this.setData({
      current:e.detail.index
    })
  }
})