// components/module/free-noticeBar/free-noticeBar.js
Component({
  /**
   * 组件的属性列表 
   */
  properties: {
    isLeft:{
      type:Boolean,
      value:true
    },
    leftIcon:{
      type:String,
      value:'notification'
    },
    iconColor:{
      type:String,
      value:'#0081ff'
    },
    // 背景色
    backgroundColor:{
      type:String,
      value:'#fff'
    },
    // 动画
    animation:{
      type:Boolean,
      value:true
    },
    // 是否固定位置
    isFixed:{
      type:Boolean,
      value:false
    },
    // 初始化notice，判断是列表还是对象
    notice:{
      type:[Array,String],
      value:null,
      observer(val){
        this.onlo()
      }
    },
    // 是否有右图标
    isRight:{
      type:Boolean,
      value:false
    },
    //  
    // 是否有左侧图标
    isIcon:{
      type:Boolean,
      value:true
    },
    // 竖向滚动还是横向滚动
    vertical:{
      type:Boolean,
      value:true
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    type:1,
    show:true
  },
  
  /**
   * 组件的方法列表
   */
  methods: {
    // 关闭
    closeNotice(){
      this.setData({
        show:false
      })
    },
    onlo(){
      console.log(this.data.notice.length)
      if(this.data.notice && this.data.notice.length >1){
        this.setData({
          type:2
        })
      }else{
        this.setData({
          type:1
        })
      }
    },
    details(e){
      if(e.currentTarget.dataset.type == 'tab'){
        wx.switchTab({
          url: e.currentTarget.dataset.url
        })
      }else{
        wx.navigateTo({
          url: e.currentTarget.dataset.url
        })
      }
    }
  }
})
