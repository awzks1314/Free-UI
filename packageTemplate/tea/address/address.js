// packageTemplate/tea/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      type:options.type || ''
    })
  },
  // 选择地址
  onChoose(e){
    // 存地址信息
    let address ={
      name:'隔壁老王',
      gender:'1',
      mobile:'188888888',
      address:'魅力之城5期三单元1栋606'
    }
    wx.setStorageSync('address', address)
    if(this.data.type == 'takeOut'){
      wx.setStorageSync('orderType', 'takeOut')
      wx.reLaunch({
        url: '/packageTemplate/tea/drink/drink',
      })
    }
  },
  address(){
    wx.navigateTo({
      url: '/packageTemplate/tea/addAddres/addAddres'
    })
  },
})