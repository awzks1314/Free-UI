// packageTemplate/js/hyperlink/hyperlink.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    color:'#0081ef',
    underline:false,
    url:'',
    path:'/packageTemplate/js/colorSwitch/colorSwitch'
  },
  getMode(e){
    this.setData({      
      [e.currentTarget.dataset.name]:e.currentTarget.dataset.name=='path'?'/packageTemplate/js/'+e.detail.value:e.detail.value
    })

    if (e.currentTarget.dataset.name=='url') {
      this.setData({
        path:'',
        url:e.detail.value
      })
    }
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})