Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  cancel(){
    wx.showToast({
      title: '点击了取消！',
      duration: 1000
    })
  },
  getInput(e){
    console.log(e)
  }
})