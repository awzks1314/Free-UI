// pages/module/swiper/swiper.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList:[
      {id:0,type:'image',url:'https://ossweb-img.qq.com/images/lol/web201310/skin/big84003.jpg'},
      {id:1,type:'image',url:'https://ossweb-img.qq.com/images/lol/web201310/skin/big84004.jpg'},
      {id:2,type:'image',url:'https://ossweb-img.qq.com/images/lol/web201310/skin/big84005.jpg'},
      {id:3,type:'image',url:'https://ossweb-img.qq.com/images/lol/web201310/skin/big84006.jpg'},
      {id:4,type:'image',url:'https://ossweb-img.qq.com/images/lol/web201310/skin/big84007.jpg'},
      {id:5,type:'image',url:'https://ossweb-img.qq.com/images/lol/web201310/skin/big84008.jpg'},
      {id:6,type:'video',url:'https://ugcydzd.qq.com/uwMROfz2r5zEIaQXGdGnC2dfDmafRkP9ujxgqKjuATzMrE-2/j31632vvxni.mp4?sdtfrom=v1104&guid=7c27d5a99979f521610ff24845e2cb6e&vkey=BE5FC5D40381396E0400C3BB8F894C00E17460F1EC13D4579D1E455C53351D89457FCAEBDF0DBC27B83C4991F5EC592832B17E68AC63F5A5D52D3E8710E3F6A671EDC0171FEA295DF9A32ED58D23167BF4953609413204E712A0763FE69A3FD1D45FA9BC8BD1DFD4639BC98B6FCED88DD6F07EE8F6FAEFD27CB13A216245B026'},
    ],
    cardCur:0
  },
  onLoad(){
    this.towerSwiper('swiperList');
  },
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },
  // 初始化
  towerSwiper(name) {
    let list = this.data[name];
    for (let i = 0; i < list.length; i++) {
      list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
      list[i].mLeft = i - parseInt(list.length / 2)
    }
    this.setData({
      swiperList: list
    })
  },
  // towerSwiper触摸开始
  towerStart(e) {
    this.setData({
      towerStart: e.touches[0].pageX
    })
  },
  // towerSwiper计算方向
  towerMove(e) {
    this.setData({
      direction: e.touches[0].pageX - this.data.towerStart > 0 ? 'right' : 'left'
    })
  },
  // towerSwiper计算滚动
  towerEnd(e) {
    let direction = this.data.direction;
    let list = this.data.swiperList;
    if (direction == 'right') {
      let mLeft = list[0].mLeft;
      let zIndex = list[0].zIndex;
      for (let i = 1; i < list.length; i++) {
        list[i - 1].mLeft = list[i].mLeft
        list[i - 1].zIndex = list[i].zIndex
      }
      list[list.length - 1].mLeft = mLeft;
      list[list.length - 1].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    } else {
      let mLeft = list[list.length - 1].mLeft;
      let zIndex = list[list.length - 1].zIndex;
      for (let i = list.length - 1; i > 0; i--) {
        list[i].mLeft = list[i - 1].mLeft
        list[i].zIndex = list[i - 1].zIndex
      }
      list[0].mLeft = mLeft;
      list[0].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    }
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})