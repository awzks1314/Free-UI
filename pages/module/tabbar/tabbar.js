// pages/module/tabbar/tabbar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 你也可以在组件写死
    list:[
      {
        text:"首页",
        iconPath:"/static/image/tabbarIcon/basics.png",
        selectedIconPath:"/static/image/tabbarIcon/basic.png",
        number:0,
        pagePath:"/pages/module/index/index"
      },
      {
        text:"扩展",
        iconPath:"/static/image/tabbarIcon/extends.png",
        selectedIconPath:"/static/image/tabbarIcon/extend.png",
        number:0,
        pagePath:"/pages/module/index/index"
      },
      {
        text:"进行",
        iconPath:"/static/image/tabbarIcon/ings.png",
        selectedIconPath:"/static/image/tabbarIcon/ing.png",
        number:0,
        pagePath:"/pages/module/index/index"
      },
      {
        text:"扩展",
        iconPath:"/static/image/tabbarIcon/mores.png",
        selectedIconPath:"/static/image/tabbarIcon/more.png",
        number:0,
        pagePath:"/pages/module/index/index"
      },
      {
        text:"我的",
        iconPath:"/static/image/tabbarIcon/mys.png",
        selectedIconPath:"/static/image/tabbarIcon/my.png",
        number:99,//角标
        pagePath:"/pages/module/index/index"
      }
    ],
    current:0,//当前选中
    bottom:'0',//绝对定位距离底部的距离
    humpIndex:0,//下标凸起
    shadow:true,//顶部边框
    isFixed:true,//固定定位
    color:'#aaaaaa',//字体颜色
    selectColor:'#0081ff',//字体颜色
    backgroundColor:'#fff',//背景颜色
  },
  change(e){
    this.setData({
      current:e.detail.index
    })
  },
  getMode(e){
    this.setData({
      [e.currentTarget.dataset.name]:e.detail.value
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})