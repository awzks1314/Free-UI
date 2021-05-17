const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ColorList: app.globalData.ColorList,
    type:'red',
    size:'',
    radius:'',
    effect:'dark',
    icon:'',
    iconColor:''
  },
  getMode(e){
    this.setData({
      [e.currentTarget.dataset.name]:e.detail.value=='无'?'':e.detail.value
    })
  },
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  SetColor(e) {
    this.setData({
      type: e.currentTarget.dataset.color,
      modalName: null
    })
  },
})