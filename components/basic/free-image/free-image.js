// components/basic/free-image/free-image.js
Component({
  externalClasses: ['class'], //自定义样式
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
    // 长按识别
    long:{
      type:Boolean,
      value:false
    },
    // 过渡时间，单位ms
		duration: {
			type: [String, Number],
			value: 500
    },
    index:{
      type: Number,
			value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // 图片是否加载错误，如果是，则显示错误占位图
    isError: false,
    // 初始化组件时，默认为加载中状态
    // 不想使用为false，且注释load方法
    loading: true,
    // 不透明度，为了实现淡入淡出的效果
    opacity: 1,
    // 过渡时间，因为props的值无法修改，故需要一个中间值
    durationTime: 500,
    // 图片加载完成时，去掉背景颜色，因为如果是png图片，就会显示灰色的背景
		backgroundColor: ''
  },
  observers:{
    'src':function(val){
      if(!val){
        this.setData({          
          isError: true,          
          loading: false,
        })
      }else{
        this.setData({          
          isError: false,         
        })
      }
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    click(){
      this.triggerEvent('click',{
        index:this.data.index
      })
    },
    // 图片加载失败
		error() {
      this.setData({
        isError: true,          
        loading: false
      })
		},
    load(){
      this.setData({
        isError: false,          
        loading: false,
        opacity:0,
        durationTime:0
      })
      setTimeout(() => {
        this.setData({
          opacity:1,
          durationTime:this.data.duration
        })
        setTimeout(() => {
					this.removeBgColor();
				}, this.data.durationTime);
      },50)
    },
    // 移除图片的背景色
		removeBgColor() {
			// 淡入动画过渡完成后，将背景设置为透明色，否则png图片会看到灰色的背景
      this.setData({
        backgroundColor:'transparent'
      })
		},
    onPriview(){
      if(!this.data.preview){
        return
      }
      wx.previewImage({
        urls: [this.data.src],
        current: '0'
      })
    }
  }
})
