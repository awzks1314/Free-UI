// components/module/free-list/free-list.js
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
    title:{
      type: String,
      value: ""
    },
    color: {
      type: String,
      value: "#333" //字体颜色
    },
    // 副标题
    sub:{
      type: String,
      value: ""
    },
    arrow: {
      type: Boolean,
      value: false //是否有箭头
    }, 
    
    icon:{
      type: String,
      value: ""
    }, 
    iconColor:{
      type: String,
      value: ""
    },
    // 是图片还是内置icon
    image:{
      type: Boolean,
      value: false //是否有箭头
    },
    
    // 内边距
    padding: {
      type: String,
      value: "28rpx 30rpx"
    },
    bgcolor:{
      type: String,
      value: "#fff" //背景颜色
    },
    size:{
      type: Number,
      value: 28//字体大小 
    },
    iconSize: {
      type: Number,
      value: 40//字体大小 
    },
    noBorder: {
      type: Boolean,
      value: false //不要底部线条
    },
    last: {
      type: Boolean,
      value: false //最后一条数据隐藏底部线条
    },
    lineLeft: {
      type: Boolean,
      value: true //左边线条收缩
    },
    lineRight: {
      type: Boolean,
      value: true //右边线条收缩
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
    handleClick() {
      this.triggerEvent('click', {});
    }
  }
})
