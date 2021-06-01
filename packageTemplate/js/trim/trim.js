
// 引入外部js,utils/function.js
const {trim} = require('../../../utils/function')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:" 那些年 我们一起追过的 女孩 ",
    values:''
  },
  onLoad(){
    this.setData({
      values:trim(this.data.value,'left')
    })
  },
  getMode(e){
    console.log(e)
    let post = e.detail.index == 0 ? 'left' : e.detail.index == 1 ? 'right' : e.detail.index == 2 ? 'all' : 'both';
    this.setData({
      values:trim(this.data.value,post)
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})