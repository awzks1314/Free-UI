const utils = require('../../../utils/toast.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    position:'top',
    options:{
      msg:'默认消息提示',
      duration:2000,
      type:'blue'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  getMode(e){
    this.setData({
      [e.currentTarget.dataset.name]:e.detail.value
    },()=>{
      this.open()
    })
  },
  open(){
    utils.toast(this.data.options);
  }
})