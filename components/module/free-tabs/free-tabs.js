Component({
  properties: {
    //标签页
    tabs: {
      type: Array,
      value: []
    },
    //rpx
    height: {
      type: Number,
      value: 100
    },
    //rpx 只对左右padding起作用，上下为0
    padding: {
      type: Number,
      value: 16
    },
    isScroll:{
      type:Boolean,
      value:true
    },
    //背景色
    backgroundColor: {
      type: String,
      value: "#FFFFFF"
    },
    //是否固定
    isFixed: {
      type: Boolean,
      value: false
    },
    //px
    top: {
      type: Number,
      value: 0
    },
    //是否去掉底部线条
    unlined: {
      type: Boolean,
      value: false
    },
    //当前选项卡
    currentTab: {
      type: Number,
      value: 0
    },
    //滑块宽度 px
    sliderWidth: {
      type: Number,
      value: 34
    },
    //滑块高度 px
    sliderHeight: {
      type: Number,
      value: 3
    },
    //滑块背景颜色
    // sliderBgColor: {
    //   type: String,
    //   value: "#0081ff"
    // },
    sliderRadius: {
      type: String,
      value: "50rpx"
    },
    //滑块bottom
    bottom: {
      type: String,
      value: "10"
    },
    // //标签页宽度
    // tabWidth: {
    //   type: String,
    //   value: "100"
    // },
    //字体颜色
    color: {
      type: String,
      value: "#666"
    },
    //选中后字体颜色
    selectedColor: {
      type: String,
      value: "#0081ff"
    },
    //字体大小
    size: {
      type: Number,
      value: 28
    },
    //选中后 是否加粗 ，未选中则无效
    bold: {
      type: Boolean,
      value: true
    }
  },
  observers: {
    'currentTab,tabs,sliderWidth,sliderHeight': function(currentTab, tabs,sliderWidth,sliderHeight) {
      this.checkCor();
    }
  },
  lifetimes: {
    ready: function() {
      setTimeout(() => {
        wx.getSystemInfo({
          success: (res) => {
            this.setData({
              winWidth: res.windowWidth
            }, () => {
              // console.log(res.windowWidth)
              this.getTabRect()
            })
          }
        });
      }, 10);
    }
  },
  data: {
    winWidth: 0,
    scrollLeft: 0,
    scrollSliderLeft:0,
    tabQueryInfo:[],
    barFirstTimeMove: true, // 滑块第一次移动时(页面刚生成时)，无需动画，否则给人怪异的感觉
  },
  methods: {
    getTabRect() {
      // 创建节点查询
      let query = wx.createSelectorQuery().in(this);
      // 历遍所有tab，这里是执行了查询，最终使用exec()会一次性返回查询的数组结果
      for (let i = 0; i < this.data.tabs.length; i++) {
        // 只要size和rect两个参数
        query.select(`#free-tab-item-${i}`).fields({
          size: true,
          rect: true
        });
      }
      // 执行查询，一次性获取多个结果
      query.exec(
        function(res) {
          // console.log(res)
          this.setData({
            tabQueryInfo:res
          })
          // 初始化滚动条和移动bar的位置
          this.checkCor();
        }.bind(this)
      );
    },
    checkCor: function() {
      let tabInfo = this.data.tabQueryInfo[this.data.currentTab];
      if (!tabInfo) return;
      let tabWidth = tabInfo.width
      // 讲tabbar-item移动到最中间
      let scrollLeft = tabInfo.left - (this.data.winWidth - tabWidth)/2
      // tab-item重点距离左边的距离，滑块用的
      let left = tabInfo.left + tabWidth/2
      this.setData({
        scrollLeft:scrollLeft<0?0:scrollLeft,
        scrollSliderLeft:left - this.data.sliderWidth/2
      })
      if(this.data.barFirstTimeMove == true) {
        setTimeout(() => {
          this.setData({
            barFirstTimeMove:false
          })
        }, 100)
      }
    },
    // 点击标题切换当前页时改变样式
    swichTabs: function(e) {
      let index = Number(e.currentTarget.dataset.index)
      let item = this.data.tabs[index]
      if (item && item.disabled) return;
      if (this.data.currentTab == index) {
        return false;
      } else {
        this.triggerEvent("change", {
          index: index
        })
      }
    }
  }
})