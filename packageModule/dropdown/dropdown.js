// packageModule/select/select.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menu:[
      {title:'标签一'},
      {title:'标签二',disabled:false},
      {title:'标签三'},
    ],
    close:false,//关闭展开
    borderBottom:true,//底部边框
    height:40,//菜单高度px
    closeOnClickMask:true,//点击遮罩层是否可以关闭
    closeOnClickSelf:true,//点击标题是否可以关闭
    activeColor:'#2979ff',//菜单标题和选项的激活态颜色
    inactiveColor:'#606266',// 菜单标题和选项的未激活态颜色
    list0:[
      {
        label:'西瓜',
        value:1
      },
      {
        label:'芒果',
        value:2
      },
      {
        label:'香蕉',
        value:3
      },
    ],
    list1:[
      {
        label:'西瓜',
        value:1
      },
      {
        label:'芒果',
        value:2
      },
      {
        label:'葡萄',
        value:3
      },
      {
        label:'桃子',
        value:4
      },
      {
        label:'火龙果',
        value:5
      },
      {
        label:'牛油果',
        value:6
      },
      {
        label:'哈密瓜',
        value:7
      }
    ]
  },
  // 参数配置
  getMode(e){
    this.setData({
      [e.currentTarget.dataset.name]:e.detail.value
    })
  },
  change0(e){
    wx.showToast({
      title: '点击了'+this.data.list0[e.detail.index].label,
      icon:'none'
    })
    // 选择了收起下拉菜单
    this.setData({
      close:true
    })
  },
  change1(e){
    wx.showToast({
      title: '点击了'+this.data.list1[e.detail.index].label,
      icon:'none'
    })
    // 选择了收起下拉菜单
    this.setData({
      close:true
    })
  },
  closeDropdown(){
    // 选择了收起下拉菜单
    this.setData({
      close:false
    })
  }  
})