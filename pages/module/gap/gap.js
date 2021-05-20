// pages/module/gap/gap.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bgColor:'#f4f5f7',
    height:'30',
    top:0,
    bottom:0
  },
  getMode(e){
    this.setData({
      [e.currentTarget.dataset.name]:e.detail.value
    })
  },
})