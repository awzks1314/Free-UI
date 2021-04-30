// pages/module/list/list.js
Page({

  /**
   * 页面的初始数据
   */ 
  data: {
    tabs:[
      {name:"Grid列表"},
      {name:"菜单列表"},
      {name:"消息列表"},
      {name:"滑动菜单"},
    ],
    currentTab:0,
    gridList:[ 
      {name:'西瓜',number:999,color:'blue'},
      {name:'西瓜',number:999,color:'orange'},
      {name:'西瓜',number:999,color:'olive'},
      {name:'西瓜',number:999,color:'red'},
      {name:'西瓜',number:999,color:'green'},
      {name:'西瓜',number:999,color:'cyan'},
      {name:'西瓜',number:999,color:'yellow'},
      {name:'西瓜',number:999,color:'blue'},
      {name:'西瓜',number:999,color:'yellow'}
    ]
  },
  change(e){
    this.setData({
      currentTab:e.detail.index
    })
  }
})