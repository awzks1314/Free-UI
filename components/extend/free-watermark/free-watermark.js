// components/extend/free-watermark/free-watermark.js
Component({
  externalClasses:['class'],
  /**
   * 组件的属性列表
   */
  properties: {
    text:{
      type:String,
      value:'FreeUI版权所有'
    },
    opacity:{		//设置透明度
      type:[Number,String],		
      value:.3
    },
    color:{
      type:String,
      value:'#0081ef'
    },
    number:{			//设置水印数量
      type:Number,
      value:6
    },
    deg:{			//设置水印数量
      type:String,
      value:'-45'
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

  }
})
