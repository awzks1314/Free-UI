// components/module/free-collapse/free-collapse.js
Component({
  options: {
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    list:{
      type:Array,
      value:[],
      observer:function(){
        this.changeList()
      }
    },
    // 手风琴模式
    accordion:{
      type: [Boolean, String],
      value: true,
      observer:function(){
        this.changeList()
      }
    },
    //是否带箭头
    arrow: {
      type: [Boolean, String],
      value: true
    },
    //collapse-body实际高度
    height: {
      type: String,
      value: 'auto'
    },
    //collapse-head 背景颜色
    hdBgColor: {
      type: String,
      value: '#fff'
    },
    //collapse-body 背景颜色
    bdBgColor: {
      type: String,
      value: 'transparent'
    },
  },
  /**
   * 组件的初始数据
   */
  data: {
    listInfo:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 构造list
    changeList(){
      this.data.list.forEach(i => i.open = false)
      this.setData({
        listInfo:this.data.list
      })
    },
    // 点击展开关闭
    handleClick(e) {
      let index = e.currentTarget.dataset.index
      let show = this.data.listInfo[index].open
      let disabled = this.data.listInfo[index].disabled
      if(disabled){
        return
      }
      if(this.data.accordion){
        // 手风琴模式
        this.data.listInfo.forEach(o => {
          o.open = false
        })
      }
      this.data.listInfo[index].open = !show
      this.setData({
        listInfo:this.data.listInfo
      })
      this.triggerEvent("click", {
        type:!show?'open':'close',
        index: Number(index)
      })
    }
  }
})
