
const time = require('../../../utils/function')
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 滑动盒子长度
    slideBoxWidth:{
      type:[String,Number],
      value:280
    },
    // 滑动块长宽
    slideWidth:{
      type:[String,Number],
      value:50
    },
    // 边框颜色
    borderColor: {
      type:[String],
      value:'#fff'
    },
    // 是否展示
    show : {
      type:[Boolean],
      value:false
    },
    // 背景图片
    image:{
      type: [String],
      value:''
    },
    // 背景顏色
    background:{
      type: [String],
      value:'rgba(128,128,128,.7)'
    },
    // 模式
    slideStyle: {
      type: [String],
      value:'right'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    moveToLeft:0,//滑动距离
    starX:0,//初始距离
    starY:0,//初始距离
    time:time.timeFormat((new Date().getTime()/1000),'M月D日'),
    hour:'',
    minute:''
  }, 
  pageLifetimes:{
    show: function() {
      // 页面被展示
      this.setData({
        hour:new Date().getHours(),
        minute:new Date().getMinutes()
      })
    },
    hide: function() {
      // 页面被隐藏
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    touchstartTap(e){
      let starX = e.changedTouches[0].pageX;
      let starY = e.changedTouches[0].pageY;
      this.setData({
        starX,
        starY
      })
    },
    touchmoveTap(e){
      let ToLeft =this.data.slideStyle=='right'?e.changedTouches[0].pageX-this.data.starX:this.data.starX - e.changedTouches[0].pageX;//变化后的坐标减去初始坐标
      let slideBoxW = Math.floor(this.data.slideBoxWidth - this.data.slideWidth-1);//计算大盒子宽度
      if (ToLeft<0){
        ToLeft=0;//滑块不能超出大盒子左边
      }else if (ToLeft >= slideBoxW){
        ToLeft = slideBoxW;//滑块不能超出大盒子右边
        this.setData({
          show: false
        })
      }
      this.setData({
        moveToLeft: ToLeft 
      })
      let ti = setTimeout(() => {
        clearTimeout(ti)
        this.setData({
          moveToLeft: 0 
        })
      }, 1000);
    },
    // 上滑动
    touchmoveTapY(e){
      let ToLeft =this.data.starY - e.changedTouches[0].pageY//变化后的坐标减去初始坐标
      if(ToLeft > 16) {
        this.setData({
          show: false
        })
      }
      this.setData({
        moveToLeft: ToLeft 
      })
      let ti = setTimeout(() => {
        clearTimeout(ti)
        this.setData({
          moveToLeft: 0 
        })
      }, 1000);
    },
    touchendTap(){//离开的时候回到初始位置
      this.setData({
        moveToLeft: 0
      })
    },  
  }
})
