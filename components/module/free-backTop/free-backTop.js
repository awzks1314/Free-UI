Component({
  properties: {
    //回顶部按钮距离底部距离 rpx
    bottom: {
      type: Number,
      value: 120
    },
    //回顶部按钮距离右侧距离 rpx
    right: {
      type: Number,
      value: 24
    },
    //距离顶部多少距离显示 px
    top: {
      type: Number,
      value: 150
    },
    //背景色
    bgColor: {
      type: String,
      value: ''
    },
    // 图标字体颜色
    color: {
      type: String,
      value: ''
    },
    // circle 圆形 square 方形
    mode:{
      type: String,
      value: 'circle'
    },
    // 自定义图标
    icon:{
      type: String,
      value: 'fold'
    },
    //滚动距离
    scrollTop: {
      type: Number,
      observer(val) {
        this.change();
      }
    }
  },
  data: {
    //判断是否显示
    visible: false,
    //控制显示，主要解决调用api滚到顶部fixed元素抖动的问题
    toggle: true
  },
  methods: {
    goTop: function() {
      this.setData({
        toggle: false
      })
      wx.pageScrollTo({
        scrollTop: 0,
        duration: 120
      })
      setTimeout(() => {
        this.setData({
          toggle: true
        })
      }, 220)
    },
    change() {
      let show = this.data.scrollTop > this.data.top;
      if ((show && this.data.visible) || (!show && !this.data.visible)) {
        return
      }
      this.setData({
        visible: show
      })
    }
  }
})