// components/module/free-progress/free-progress.js
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
    // 进度条
    width:{
      type:String,
      value:''
    },
    // 进度条尺寸
    height:{
      type:String,
      value:'28rpx'
    },
    radius:{
      type:String,
      value:''
    },
    // 进度条颜色
    widthBg:{
      type:String,
      value:"#0081ff"
    },
    // 进度条底色
    progressBg:{
      type:String,
      value:"#ebeef5"
    },
    // 文字颜色
    color:{
      type:String,
      value:"#fff"
    },
    // 是否有条纹
    striped:{
      type:Boolean,
      value:false
    },
    // 条纹动画
    active:{
      type:Boolean,
      value:false
    },
    // 不在进度条显示宽度
    notext:{
      type:Boolean,
      value:false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    loading:false
  },
  // 在组件实例进入页面节点树时执行
  attached: function() {
    setTimeout(()=>{
      this.setData({
        loading : true
      })
  }, 500)
  },
  /**
   * 组件的方法列表
   */
  methods: {
  }
})
