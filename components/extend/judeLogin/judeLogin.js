// components/judeLogin/judeLogin.js
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    showLogin:{
      type:Boolean,
      value:true
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
      app.geturl()
      wx.navigateTo({
        url: '/pages/login/login'              
      })
		}
  }
})
