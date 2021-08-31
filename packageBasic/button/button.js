const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ColorList: app.globalData.ColorList,
    size:'',
    color:'blue',
    round:'',
    shadow:'',
    light:'',
    line:'',
    block:'',
    disabled:false,
    loading:false
  },
  getMode(e){
    this.setData({
      [e.currentTarget.dataset.name]:e.detail.value=='默认'?'':e.detail.value
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
      color: e.currentTarget.dataset.color,
      modalName: null
    })
  },
})