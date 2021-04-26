// components/basic/free-input/free-input.js
Component({
  options: {
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    // 背景颜色
    bg:{
      type:String,
      value:'#fff'
    },
    // 输入框背景颜色
    inputBg:{
      type:String,
      value:'#f5f5f5'
    },
    // 输入框圆角
    radius:{
      type:String,
      value:'8000rpx'
    },
    // input还是textarea
    type:{
      type:String,
      value:'input'
    },
    // 头部icon
    prefixIcon:{
      type:String,
      value:'search'
    },
    // 尾部icon
    suffixIcon:{
      type:String,
      value:''
    },
    // 输入框定位
    position:{
      type:String,
      value:'fixed'
    },
    // 提示词
    placeholder:{
      type:String,
      value:'请输入您要查询的参数'
    },
    // 是否显示关闭按钮
    close:{
      type:Boolean,
      value:true
    },
    // 额外按钮
    extreaWord:{
      type:String,
      value:'确定'
    },
    // 额外按钮颜色
    extreaColor:{
      type:String,
      value:'#0081ff'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    textValue:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 输入变化
    getInput(e){
      this.data.textValue = e.detail.value
      this.setData({
        textValue:e.detail.value
      })
      this.triggerEvent("input", {
        value: e.detail.value
      })
    },
    // 聚焦输入框变化
    getFocus(e){
      console.log(e)
      this.data.textValue = e.detail.value
      this.setData({
        textValue:e.detail.value
      })
      this.triggerEvent("focus", {
        value: e.detail.value
      })
    },
    // 失焦
    getBlur(e){
      console.log(e)
      this.data.textValue = e.detail.value
      this.setData({
        textValue:e.detail.value
      })
      this.triggerEvent("blur", {
        value: e.detail.value
      })
    },
    // 聚焦输入框变化
    getConfirm(e){
      console.log(e)
      this.data.textValue = e.detail.value
      this.setData({
        textValue:e.detail.value
      })
      this.triggerEvent("confirm", {
        value: e.detail.value
      })
    },
    // 额外按钮
    extreaBtn(){
      this.triggerEvent("extrea", {
        value: this.data.textValue
      })
    },
    close(){
      this.data.textValue =''
      this.setData({
        textValue:this.data.textValue
      })
      this.triggerEvent("colse", {
        value: ''
      })
    }
  }
})
