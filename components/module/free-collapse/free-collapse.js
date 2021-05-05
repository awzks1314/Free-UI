// components/module/free-collapse/free-collapse.js
Component({
  options: {
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    // 是否禁用
    disabled: {
      type: [Boolean, String],
      value: false
    },
    //是否带箭头
    arrow: {
      type: [Boolean, String],
      value: true
    },
    //箭头颜色
    arrowColor: {
      type: String,
      value: "#333"
    },
    //collapse-body实际高度 open时使用
    height: {
      type: String,
      value: 'auto'
    },
    //索引
    index: {
      type: Number,
      value: 0
    },
    //当前索引，index==current时展开
    current: {
      type: Number,
      value: -1,
      observer(val){
        this.updateCurrentChange()
      }
    },
    //collapse背景颜色
    bgColor: {
      type: String,
      value: 'transparent'
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
  lifetimes:{
    attached:function(){
      this.updateCurrentChange()
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    isOpen: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 判断打开关闭
    updateCurrentChange() {
      this.setData({
        isOpen: this.data.index == this.data.current
      })
    },
    // 点击展开关闭
    handleClick() {
      if (this.data.disabled) return;
      this.triggerEvent("click", {
        index: Number(this.data.index)
      })
    }
  }
})
