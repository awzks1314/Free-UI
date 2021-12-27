// components/module/free-collapse/free-collapse.js
/*
  freeUi for MP-weixin  | by 搞文艺的猿 
  仅供学习交流，如作它用所承受的法律责任一概与作者无关
  使用freeUi开发扩展与插件时，请注明基于freeUi开发
  
  （作者QQ：664423077 | 微信：creater8888）
*/
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
