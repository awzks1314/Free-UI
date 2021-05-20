// packageExtend/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressList:[
      {
        name:'张三',
        phone:'13566487854',
        address:'云南省昆明市官渡区矣六街道114号5-1',
        default:false
      },
      {
        name:'李四',
        phone:'13566487854',
        address:'云南省昆明市官渡区矣六街道114号5-1',
        default:false
      },
      {
        name:'王五',
        phone:'13566487854',
        address:'云南省昆明市官渡区矣六街道114号5-1',
        default:false
      },
      {
        name:'赵六',
        phone:'13566487854',
        address:'云南省昆明市官渡区矣六街道114号5-1',
        default:false
      },
      {
        name:'王五',
        phone:'13566487854',
        address:'云南省昆明市官渡区矣六街道114号5-1',
        default:false
      },
      {
        name:'赵六',
        phone:'13566487854',
        address:'云南省昆明市官渡区矣六街道114号5-1',
        default:false
      },
    ]
  },
  change(e){
    let type = e.currentTarget.dataset.type
    let index = e.currentTarget.dataset.index
    switch (type) {
      case 'default':
        this.changeDefault(index)
        break;
      case 'edit':
        wx.navigateTo({
          url: '/packageExtend/address/editAddress/editAddress?type='+type
        })
        break;
      case 'dele':
        this.changeDele(index)
        break;
      case 'add':
        wx.navigateTo({
          url: '/packageExtend/address/editAddress/editAddress?type='+type
        })
        break;
      default:
        break;
    }
  },
  // 改变默认
  changeDefault(current){
    this.data.addressList.forEach((i,index) => {
      if(current == index){
        i.default = !i.default
      }else{
        i.default = false
      }
    })
    this.data.addressList.sort((a,b)=> {
      return b.default - a.default
    })
    this.setData({
      addressList:this.data.addressList
    })
  },
  changeDele(current){
    console.log(current)
    wx.showModal({      
      cancelText: '取消',
      confirmText: '确认',
      content: '是否删除该条地址',
      showCancel: true,
      title: '提示',
      success: (result) => {
        if(result.confirm){
          this.data.addressList.splice(current,1)
          console.log(this.data.addressList)
          this.setData({
            addressList:this.data.addressList
          })
        }
      },
      fail: (res) => {},
      complete: (res) => {},
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})