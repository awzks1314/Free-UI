// components/basic/free-image/free-image.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    src:{
      type:String,
      value:''
    },
    radius:{
      type:String,
      value:''
    },
    mode:{
      type:String,
      value:'scaleToFill'
    },
    width:{
      type:String,
      value:'200rpx'
    },
    height:{
      type:String,
      value:'200rpx'
    },
    // 图片懒加载，在即将进入一定范围（上下三屏）时才开始加载
    lazy:{
      type:Boolean,
      value:false
    },
    preview:{
      type:Boolean,
      value:false
    },
    menu:{
      type:Boolean,
      value:false
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onPriview(){
      if(!this.data.preview){
        return
      }
      wx.previewImage({
        // urls: [this.data.src],
        urls: [' https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1433993011,2529567762&fm=26&gp=0.jpg'],
        current: '0'
      })
    }
  }
})
