// pages/module/list/list.js
Page({

  /**
   * 页面的初始数据
   */ 
  data: {
    // 列表属性：
    // name：名字 number：角标 image：图片 width：图片宽 height：图片高 color：角标背景
    gridList:[ 
      {name:'默认样式',number:49,image:'/static/image/my/dog.jpg'},
      {name:'数量超99',number:999,image:''},
      {name:'默认颜色',number:18},
      {name:'无角标',number:0,},
      {name:'颜色可修改',number:17,color:'green'},
      {name:'修改大小',number:100,width:"",height:''},
      {name:'默认颜色',number:18},
      {name:'无角标',number:0,},
      {name:'颜色可修改',number:17,color:'green'},
      {name:'修改大小',number:100}
    ],
    col:3,//列数
    row:2,//行数,仅在isSwiper为true有用
    radius:'10',//圆角
    border:false,//边框
    isSwiper:false,
    swiperHeight:400
  },
  getMode(e){
    this.setData({
      [e.currentTarget.dataset.name]:e.detail.value
    })
  },
  onClick(e){
    wx.showToast({
      title: `点击索引${e.detail.index}`,
      icon:'none',
      duration: 1000
    })
  }
})