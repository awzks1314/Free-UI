// packageExtend/judgeLogin/judgeLogin.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showLogin:false,
    bgColor:'#0081ef',
    color:'#0081ef'
  },
  getMode(e){
    this.setData({
      [e.currentTarget.dataset.name]:e.detail.value,
      showLogin:true
    })
  },
  startLogin(){
    this.setData({
      showLogin:true
    })
  }
})