// 引入外部js,utils/function.js
const {timeFormat,getDates} = require('../../../utils/function')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nowTime:'',
    days:"10",
    afterTime:null
  },  
  onLoad(){
    this.setData({
      nowTime:timeFormat(new Date().getTime()/1000,'Y-M-D')
    },()=>{
      this.setData({
        afterTime:getDates(this.data.days,this.data.nowTime)
      })
      console.log(this.data.afterTime)
    })
  },
  getMode(e){
    this.setData({
      [e.currentTarget.dataset.name]:e.detail.value
    },() => {
      this.setData({
        afterTime:getDates(this.data.days,this.data.nowTime)
      })
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})