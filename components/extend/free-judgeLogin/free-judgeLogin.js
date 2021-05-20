// components/judeLogin/judeLogin.js
const app = getApp()
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
        url: '/packageExtend/loginPage/loginPage'              
      })
		}
  }
})
