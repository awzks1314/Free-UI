// components/basic/free-input/free-input.js
Component({
  options: {
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    // 输入框样式
    inputStyle:{
      type:String,
      value:'0'
    },
    // 背景颜色
    bg:{
      type:String,
      value:'#fff'
    },
    // 输入框背景颜色
    inputBg:{
      type:String,
      value:''
    },
    // 输入框圆角
    radius:{
      type:String,
      value:'8000rpx'
    },
    password:{
      type:Boolean,
      value:false
    },
    // text、number、idcard、digit
    type:{
      type:String,
      value:'text'
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
      value:''
    },
    // 键盘右下角文本
    // send、search、next、go、done
    confirmType:{
      type:String,
      value:'done'
    },
    // 提示词
    placeholder:{
      type:String,
      value:'请输入内容'
    },
    // 是否显示关闭按钮
    close:{
      type:Boolean,
      value:false
    },
    // 是否禁用
    disabled:{
      type:Boolean,
      value:false
    },
    // 额外按钮
    extreaWord:{
      type:String,
      value:''
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
      this.data.textValue = e.detail.value
      this.setData({
        textValue:e.detail.value
      })
      this.triggerEvent("blur", {
        value: e.detail.value
      },{})
    },
    // 聚焦输入框变化
    getConfirm(e){
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
      },{})
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
