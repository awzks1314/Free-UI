const {debounce} = require('../../../utils/debounce')
const {throttle} = require('../../../utils/throttle')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result:[0],
    timeout: 1000,
    immediate: true,
    mode: 'throttle'
  },
  getMode(e){
    this.setData({
      [e.currentTarget.dataset.name]:e.detail.value
    })
  },
  getModeMode(e){
    this.setData({
      mode:e.detail.value=='节流'?'throttle':'debounce'
    })
  },
  getModeIm(e){
    this.setData({
      immediate:e.detail.value=='执行前'?true:false
    })
  },
  // 定义一个时间A
  functionA(){
    if(this.data.result.length>=6){
      this.data.result = []
    }
    this.data.result.push(0)
    this.setData({
      result:this.data.result
    })
  },
  start(){
    if(this.data.mode == 'throttle'){
      // 调用节流
      throttle(this.functionA,this.data.timeout,this.data.immediate)
    }else{
      debounce(this.functionA,this.data.timeout,this.data.immediate)
    }
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})