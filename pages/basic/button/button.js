const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ColorList: app.globalData.ColorList,
    shadow:false,
    changePlainShow:false
  },
  changeShadow(e){
    this.setData({
      shadow: e.detail.value
    })
  },
  changePlain(e){
    this.setData({
      changePlainShow: e.detail.value
    })
  }
  
})