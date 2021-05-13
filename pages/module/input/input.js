Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputStyle:'',
    color:'',
    extreaWord:'',
    extreaColor:'#0081ef',//默认颜色，wxml没有传入
    prefixIcon:'search',
    suffixIcon:"",
    bgColor:'',
    inputBg:'',
    password:false,
    disabled:false,
    close:false
  },
  extrea(){
    wx.showToast({
      title: '点击了额外按钮！',
      icon:'none',
      duration: 1000
    })
  },
  input(e){
    
  },
  getMode(e){
    this.setData({
      [e.currentTarget.dataset.name]:e.detail.value
    },() => {
      if(e.currentTarget.dataset.name=='extreaWord' && e.detail.value == '默认'){
        this.setData({
          extreaWord:''
        })
      }
    })
  }
})