// 底部弹出框
/*
  freeUi for MP-weixin  | by 搞文艺的猿 
  仅供学习交流，如作它用所承受的法律责任一概与作者无关
  使用freeUi开发扩展与插件时，请注明基于freeUi开发
  
  （作者QQ：664423077 | 微信：creater8888）
*/
Component({
  externalClasses: ['class'],
  properties: {
    //是否需要mask
    mask: {
      type: Boolean,
      value: true
    },
    //控制显示
    show: {
      type: Boolean,
      value: false
    },
    //背景颜色
    bgcolor: {
      type: String,
      value: "#fff"
    },
    //高度 rpx
    height: {
      type: Number,
      value: 0
    }
  },

  data: {
  },
  methods: {
    handleClose() {
      if (!this.data.show) {
        return;
      }
      this.triggerEvent('close', {});
    },
    moveClick() { }
  }
})
