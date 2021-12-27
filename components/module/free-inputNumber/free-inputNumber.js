
/*
  freeUi for MP-weixin  | by 搞文艺的猿 
  仅供学习交流，如作它用所承受的法律责任一概与作者无关
  使用freeUi开发扩展与插件时，请注明基于freeUi开发
  
  （作者QQ：664423077 | 微信：creater8888）
*/
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    value: {
      type: Number,
      value: 1,
      observer(val) {
        this.setValue()
      }
    },
    min:{
      type:[String,Number],
      value:'1'
    },
    max:{
      type:[String,Number],
      value:'9999'
    },
    step: {
      type: Number,
      value: 1
    },
    //是否禁用操作
    disabled: {
      type: Boolean,
      value: false
    },
    //加减图标大小 rpx
    iconsize: {
      type: Number,
      value: 24
    },
    iconcolor: {
      type: String,
      value: "#333"
    },
    //input 高度
    height: {
      type: Number,
      value: 60
    },
    //input 宽度
    width: {
      type: Number,
      value: 100
    },
    //索引值，列表中使用
    index: {
      type: Number,
      value: 0
    },
    //自定义参数
    custom: {
      type: Number,
      value: 0
    },
    // 其他样式
    style:{
      type:String,
      value:''
    },
    // 样式颜色
    styleColor:{
      type:String,
      value:''
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    inputValue:1
  },
  /**
   * 组件的方法列表
   */
  methods: {
    setValue() {
      this.setData({
        inputValue: +this.data.value
      })
    },
    reduce(){
      this.calcNum('reduce')
    },
    add(){
      this.calcNum('add')
    },
    calcNum(type){
      if(this.data.disabled){
        return
      }
      const scale = this.getScale()
      let num = this.data.value * scale
      let step = this.data.step * scale
      if (type === 'reduce') {
        num -= step
      } else if (type === 'add') {
        num += step
      }
      let value = num / scale
      if (type === "add" && value < this.data.min) {
        value = this.data.min
      } else if (type === "reduce" && value > this.data.max) {
        value = this.data.max
      }
      if (value < this.data.min) {
        value = this.data.min
        // return
      }
      if ( value > this.data.max) {
        value = this.data.max
        // return
      }
      this.valueChange(value, type)
    },
    // 浮点步数
    getScale() {
      let scale = 1;
      //浮点型
      if (this.data.step != parseInt(this.data.step)) {
        scale = Math.pow(10, (this.data.step + '').split('.')[1].length)
      }
      return scale;
    },
    blur: function(e) {
      let value = e.detail.value
      if (value) {
        value = +value
        if (value > this.data.max) {
          value = this.data.max
        } else if (value < this.data.min) {
          value = this.data.min
        }
      } else {
        value = this.data.min
      }
      if (value == this.data.value && value != this.data.inputValue) {
        this.setData({
          inputValue: value
        })
      }
      this.valueChange(value, "blur")
    },
    valueChange(value, type) {
      if (this.data.disabled) {
        return
      }
      this.triggerEvent('change', {
        value: value,
        type: type,
        index: this.data.index,
        custom: this.data.custom
      })
    }
  }
})
