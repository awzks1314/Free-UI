// components/module/free-dropdown/free-dropdown.js
Component({
  options:{
    multipleSlots:true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    // 菜单标题和选项的激活态颜色
    activeColor: {
      type: String,
      value: '#2979ff'
    },
    // 菜单标题和选项的未激活态颜色
    inactiveColor: {
      type: String,
      value: '#606266'
    }, 
    menu:{
      type:Array,
      value:[]
    },
    // // 是否展示
    // close:{
    //   type:Boolean,
    //   value:false
    // },
    // 标题菜单的高度，单位任意，数值默认为rpx单位
    height: {
      type: [Number, String],
      value: 40,
      observer:function(){
        this.getContentHeight()
      }
    },
    // 是否显示下边框
    borderBottom: {
      type: Boolean,
      value: true
    },
    // 点击遮罩层是否关闭
    closeOnClickMask:{
      type: Boolean,
      value: true
    },
    // 点击当前激活项标题是否关闭菜单
    closeOnClickSelf: {
      type: Boolean,
      value: true
    }
},

  /**
   * 组件的初始数据
   */
  data: {
    // 让某个菜单保持高亮的状态
    highlightIndex: 99999,
    // 外层内容的样式，初始时处于底层，且透明
    contentStyle: {
      zIndex: -1,
      opacity: 0
    },
    active:false,
    current:99999,
    contentHeight:0
  },
  ready(){
    this.getContentHeight()
  },
  observers:{
    'close':function(val){
      if(val){
        this.close()
      }
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    content(){

    },
    // 点击遮罩
    maskClick() {
      // 如果不允许点击遮罩，直接返回
      if (!this.data.closeOnClickMask) return;
      this.close();
    },
    // 点击标题
    menuClick(e){
      let index = e.currentTarget.dataset.index
      if(this.data.menu[index].disabled) {
        return
      }
      if(index == this.data.current && this.data.closeOnClickSelf){
        this.close()  
        setTimeout(() => {
          this.setData({
            active:false
          })
        }, 300);
        return
      }
      this.open(index)
    },
    open(index){
      this.data.contentStyle = {
        zIndex:11
      }
      this.setData({
        contentStyle:this.data.contentStyle,
        active:true,
        current:index
      },() => {
        this.triggerEvent('open',{
          index:this.data.current
        })
      })
    },
    close(){
      this.triggerEvent('close',{
        index:this.data.current
      })
      this.data.contentStyle.zIndex = -1
      this.data.contentStyle.opacity = 0
      this.setData({
        contentStyle:this.data.contentStyle,
        current:99999
      })
    },
    // 计算高度
    getContentHeight(){
      wx.getSystemInfo({
        success: (e) => {
          this.setData({
            contentHeight:e.windowHeight - this.data.height
          })
        },
      })
    }
  }
})
