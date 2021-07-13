Page({

  /**
   * 页面的初始数据
   */
  data: {
    show:false,
    slideStyle:'right',
    background:'gray',
    slideBoxWidth:280,
    image:''
  },
  open(){
    this.setData({
      show:true
    })
  },
  // 有图片，无背景
  sureImage(e){
    this.setData({
      [e.currentTarget.dataset.name]:e.detail.value?'https://z3.ax1x.com/2021/07/13/WASvZj.jpg':'',
      show:true
    })
  },
  getMode(e){
    this.setData({
      [e.currentTarget.dataset.name]:e.detail.value,
      show:true
    })
  },
})