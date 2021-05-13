// components/module/free-subsection/free-subsection.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list:{
      type:Array,
      value:[],
      observer:function(){
        this.changeList()
      }
    },
    // 当前活动的tab的index
    current: {
      type: [Number, String],
      value: 0,
      observer:function(current) {
        this.checkCor();
      }
    },
    // 组件的高度，单位rpx
    height: {
      type: [Number, String],
      value: 35
    },
    // 激活tab的字体是否加粗
    bold: {
      type: Boolean,
      value: true
    },
    // 模式选择，mode=button为按钮形式，mode=subsection时为分段模式
    mode:{
      type:String,
      value:'button'
    },
    // mode=button时，组件背景颜色
    bgColor: {
      type: String,
      value: '#eeeeef'
    },
    // mode = button时，滑块背景颜色
    buttonColor: {
      type: String,
      value: '#ffffff'
    },
    // 激活的颜色
    activeColor: {
      type: String,
      value: '#303133'
    },
    // 未激活的颜色
    inactiveColor: {
      type: String,
      value: '#606266'
    },
    // mode== button时，外边框的圆角 px
    borderRadius: {
      type: String,
      value: 0
    },
    // mode==button,内边距 px
    buttonPadding: {
      type: String,
      value: 4
    },
  },
  observers: {
    'mode': function(current) {
      this.getTabsInfo();
    },
  },
  /**
   * 组件的初始数据
   */
  data: {
    itemBgStyle: {
      width: 0,
      left: 0,
      backgroundColor: '#ffffff',
      height: '100%',
      transition: ''
    },
    listInfo: [],
  },
  created(){
    this.getTabsInfo()
  },
  /**
   * 组件的方法列表
   */
  methods: {
    getTabsInfo() {
      let view = wx.createSelectorQuery().in(this);
      for (let i = 0; i < this.data.list.length; i++) {
        view.select('.free-item-' + i).boundingClientRect();
      }
      view.exec(res => {
        if (!res.length) {
          setTimeout(() => {
            this.getTabsInfo();
            return;
          }, 10);
        }
        // 将分段器每个item的宽度，放入listInfo数组
        res.map((val, index) => {
          this.data.listInfo[index].width = val.width;
        });
        // console.log(this.data.mode)
        this.data.itemBgStyle.width = this.data.listInfo[0].width + 'px'
        this.data.itemBgStyle.height =this.data.mode == 'button'?this.data.height - this.data.buttonPadding * 2 +'px' :100%
        this.setData({
          itemBgStyle:this.data.itemBgStyle
        })
        // 初始化滑块的位置
        this.itemBgLeft();
      });
    },
    changeList(){
      this.data.listInfo = this.data.list.map((val, index) => {
				if (typeof val != 'object') {
					let obj = {
						width: 0,
						name: val
					};
					return obj;
				} else {
					val.width = 0;
					return val;
				}
      });
      this.setData({
        listInfo:this.data.listInfo
      })
    },
    checkCor(){
      // 更新滑块的位置
				setTimeout(() => {
					this.itemBgLeft();
				}, 10);
    },
    itemBgLeft() {
      // 根据是否开启动画效果，
      this.data.itemBgStyle.transition = 'all 0.35s';
      let left = 0;
      // 计算当前活跃item到组件左边的距离
      this.data.listInfo.map((val, index) => {
        if (index < this.data.current) left += val.width;
      });
      this.data.itemBgStyle.left =this.data.mode == 'button'?left + this.data.buttonPadding + 'px': left + 'px';
      
      this.setData({
        listInfo:this.data.listInfo,
        itemBgStyle:this.data.itemBgStyle
      })
    },
    click(e){
      let index = e.currentTarget.dataset.index
      if(this.data.current == index) return

      this.setData({
        current:index
      })

      this.triggerEvent('click', {
        index: index,
        value:this.data.list[index]
      })
    },
  }
})
