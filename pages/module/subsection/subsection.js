// pages/module/subsection/subsection.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mode:'button',
    activeColor:'red',//激活颜色
    inactiveColor:'',
    buttonColor:'',
    current:0,
    bold:true
  },
  getMode(e){
    this.setData({
      [e.currentTarget.dataset.name]:e.detail.value
    })
    console.log(this.data)
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})