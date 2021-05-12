// pages/module/select/select.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menu:[
      {title:'标签一'},
      {title:'标签二',disabled:false},
      {title:'标签三'},
    ],
    list0:[
      {
        label:'选项一',
        value:1
      },
      {
        label:'选项二',
        value:2
      },
      {
        label:'选项三',
        value:3
      },
    ],
    list1:[
      {
        label:'选项一',
        value:1
      },
      {
        label:'选项二',
        value:2
      },
      {
        label:'选项三',
        value:3
      },
      {
        label:'选项四',
        value:4
      },
      {
        label:'选项五',
        value:5
      },
    ]
  },
  change0(e){
    console.log(e.detail.index)
  },
  change1(e){
    console.log(e.detail.index)
  },
  // openDownListShow(){
  //   this.setData({
  //     dropdownShow:!this.data.dropdownShow
  //   })
  // },
  // openDownListShow1(){
  //   this.setData({
  //     dropdownShow1:!this.data.dropdownShow1
  //   })
  // },
  // selectIndex(e){
  //   wx.showToast({
  //     title: '您点击了微信支付'+e.currentTarget.dataset.index,
  //     icon:'none',
  //     duration: 1500,
  //   })
  //   this.setData({
  //     dropdownShowValue:'微信支付'+e.currentTarget.dataset.index,
  //     dropdownShow:false,
  //     dropdownShow1:false
  //   })
  // },
})