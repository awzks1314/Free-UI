//注意：自定义组件无法触发form的bindsubmit,bindreset事件. 
// 在基础库2.10.3 以上 添加 behaviors: ['wx://form-field-button'] 属性 form 可以触发bindsubmit事件。
//可以在组件外层嵌套个button按钮，背景设为none，form-type写在外层按钮上(参考登录页面)
/*
  freeUi for MP-weixin  | by 搞文艺的猿 
  仅供学习交流，如作它用所承受的法律责任一概与作者无关
  使用freeUi开发扩展与插件时，请注明基于freeUi开发
  
  （作者QQ：664423077 | 微信：creater8888）
*/
Component({
  behaviors: ['wx://form-field-button'], // 用于触发bindsubmit事件
  externalClasses: ['free-button-class'], //自定义样式
  /**
   * 组件的属性列表
   */
  properties: { 
    radius:{
      type:String,
      value:"10"
    }, 
    // sm lg
    size:{
      type:String,
      value:''
    },
    type:{
      type:String,
      value:'blue'
    },
    // 阴影
    shadow:{
      type:Boolean,
      value:false
    },
    // 镂空
    plain:{
      type:Boolean,
      value:false
    },
    disabled:{
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

  }
})
