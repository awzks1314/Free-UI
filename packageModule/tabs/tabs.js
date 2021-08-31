// packageModule/tabs/tabs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs1:[
      {name:'标签页1'},
      {name:'标签页2',num:99},
      {name:'标签页5',disabled: true},
      {name:'标签页3'},
    ],
    tabs:[
      {name:'标签页1',icon:"home",num:99},
      {name:'标签页2',icon:"home"},
      {name:'标签页3',icon:""},
      {name:'标签页4',icon:"home",disabled: true},
      {name:'标签页5',icon:"home"},
      {name:'标签页6',icon:"home"},
      {name:'标签页7',icon:"home"},
    ],
    list:[
      {name:'标签页1'},
      {name:'标签页2',num:99},
      {name:'标签页5',disabled: true},
      {name:'标签页3'},
    ], 
    currentTab:0,
    bgColor:"#fff",
    bold:true,
    selectedColor:'#0081ef',
    sliderHeight:3,
    sliderWidth:34,
    type:false
  },
  getMode(e){
    this.setData({
      currentTab:0,
      [e.currentTarget.dataset.name]:e.detail.value,
      list:e.currentTarget.dataset.name == 'type' && e.detail.value?this.data.tabs:e.currentTarget.dataset.name == 'type' && !e.detail.value?this.data.tabs1:this.data.list
    })
  },
  change(e){    
    this.setData({
      currentTab:e.detail.index
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})