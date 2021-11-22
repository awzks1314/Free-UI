// components/module/free-hyperlink/free-hyperlink.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 文字颜色
    color: {
      type:String,
      value:''
    },
    // 下划线
    underline: {
      type: Boolean,
      value: false
    },
    // 外部网页
    url: {
      type:String,
      value:''
    },
    // 其他页面
    path: {
      type:String,
      value:''
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
    href() {
      // <web-view src="https://www.baidu.com/"></web-view>
      if (this.data.url) {
        wx.navigateTo({
          url: '/pages/webView/webView?url=' + this.data.url
        })
      }else {
        wx.navigateTo({
          url: this.data.path,
        })
      }
    }
  }
})
