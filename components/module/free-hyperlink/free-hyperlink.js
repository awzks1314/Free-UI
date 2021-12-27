// components/module/free-hyperlink/free-hyperlink.js
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
