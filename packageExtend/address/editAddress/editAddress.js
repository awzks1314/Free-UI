// packageExtend/address/editAddress/editAddress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type:'',
    region:['云南省', '昆明市', '官渡区'],
    title:'',
    form:{
      name:'',
      phone:'',
      gender:1,
      address:'',
      notes:'',
      default:true
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      type:options.type,
      title: options.type == 'edit'?'编辑地址':'新增地址',
    })
  },
  changeInput(e){
    let type = e.currentTarget.dataset.type
    this.setData({
      [type]:e.detail.value
    })
  },
  // 提交事件
  sure(){
    console.log(this.data.form)
    wx.showToast({
      title: '新增入库',
    })
  },
  getGender(e){
    this.data.form.gender = e.detail.value
    this.setData({
      form:this.data.form
    })
  },
  // 地址选择
  RegionChange: function(e) {
    this.setData({
      region: e.detail.value
    })
  },
  handlerGobackClick(delta) {
    const pages = getCurrentPages();
    if (pages.length >= 2) {
      wx.navigateBack({
        delta: delta
      });
    } else {
      wx.navigateTo({
        url: '/pages/extend/index/index'
      });
    }
  },
  handlerGohomeClick() {
    wx.switchTab({
      url: '/pages/extend/index/index'
    });
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})