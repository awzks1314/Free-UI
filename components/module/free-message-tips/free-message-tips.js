let timer;
/*
  freeUi for MP-weixin  | by 搞文艺的猿 
  仅供学习交流，如作它用所承受的法律责任一概与作者无关
  使用freeUi开发扩展与插件时，请注明基于freeUi开发
  
  （作者QQ：664423077 | 微信：creater8888）
*/
Component({
  externalClasses: ['free-tips-class'],
  properties: {
    //top bottom center
    position: {
      type: String,
      value: "top"
    },
    top: {
      type: [Number,String],
      value: "0"
    }
  },
  data: {
    show: false,
    msg: "无法连接到服务器~",
    type: "grey"
  },
  lifetimes: {
    detached: function() {
      clearTimeout(timer);
      timer = null;
    }
  },
  methods: {
    showTips: function(options) {
      const {type = 'default', duration = 2000} = options;
      clearTimeout(timer);
      this.setData({
        show: true,
        type: type,
        msg: options.msg
      }, () => {
        timer = setTimeout(() => {
          this.setData({
            show: false
          }, () => {
            timer = null;
          })
        }, duration)
      })
    }
  }
})