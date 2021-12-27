// components/judeLogin/judeLogin.js
const app = getApp()
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
    showLogin:{
      type:Boolean,
      value:false
    },
    bgColor:{
      type:String,
      value:'#0081ef'
    },
    color:{
      type:String,
      value:'#0081ef'
    },
    // 登录跳转地址
    url : {
      type:String,
      value:'/packageExtend/loginPage/loginPage'
    },
    title:{
      type:String,
      value:'登录即刻开启品质生活'
    }
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
    // 隐藏登录弹窗
		hideModal() {
			this.setData({
        showLogin:false
      })
		},

		// 去登录
		onLogin() {
      this.setData({
        showLogin:false
      })
      wx.navigateTo({
        url: this.data.url
      })
		}
  }
})
