// components/module/free-readMore/free-readMore.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    height:{
      type:[Number,String],
      value:200
    },
    textIndent:{
      type:String,
      value:'2em'
    }, 
    openText:{
      type:String,
      value:'展开阅读全文'
    },
    closeText:{
      type:String,
      value:'收起'
    },
    color:{
      type:String,
      value:'#0081ef'
    },
    fontSize:{
      type:[Number,String],
      value:28
    },
    // 展开后是否显示"收起"按钮
    toggle: {
      type: Boolean,
      value: true
    },
    // open和close事件时，将此参数返回在回调参数中
    index: {
      type: [Number, String],
      default: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isLongContent:false,
    showMore: false, // 当前隐藏与显示的状态，true-显示，false-收起
  },
  ready(){
    wx.nextTick( () => {      
      this.init()
    })
  },
  /**
   * 组件的方法列表
   */ 
  methods: {
    init(){
      const query = wx.createSelectorQuery().in(this)               // 创建节点查询器 query
      query.select('.readMoreId').boundingClientRect()
      query.exec((res) => {
        console.log(res)
        if(res[0].height>this.data.height){
          this.setData({
            isLongContent:true,
            showMore:false
          })
        }
      })
    },
    openShow(){
      this.setData({
        showMore:!this.data.showMore
      })
      if(this.data.toggle == false){
        this.setData({
          isLongContent:false
        })
      }
      this.triggerEvent(this.data.showMore?'open':'close',{
        index:this.data.index
      })
    }
  }
})
