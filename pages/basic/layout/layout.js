// pages/basic/layout/layout.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:[
      {name:'Flex布局'},{name:'内外边距'}
    ],
    currentTab:0,
    // flex布局
    width:'xs',
    oneWidth:'flex-sub',
    twoWidth:'flex-sub',
    justify:'flex-start',
    align:'align-start',
    // 内外边距
    padding:'padding',
    paddingValue:'xs',
    margin:'margin',
    marginValue:'xs',
  },
  getMode(e){
    this.setData({
      [e.currentTarget.dataset.name]:e.detail.value,
    })
  },
  // 水平布局
  getModeChange1(e){
    this.setData({
      [e.currentTarget.dataset.name]:e.currentTarget.dataset.name+'-'+e.detail.value
    })
  },
  // 改变一下下
  getModeChange(e){
    switch (e.detail.value) {
      case '1:1':
        this.data.oneWidth = 'flex-sub'
        this.data.twoWidth = 'flex-sub'
        break;
      case '1:2':
        this.data.oneWidth = 'flex-sub'
        this.data.twoWidth = 'flex-twice'
        break;
      case '1:3':
        this.data.oneWidth = 'flex-sub'
        this.data.twoWidth = 'flex-treble'
        break;
      case '2:3':
        this.data.oneWidth = 'flex-twice'
        this.data.twoWidth = 'flex-treble'
        break;
      default:
        break;
    }    
    this.setData({
      oneWidth:this.data.oneWidth,
      twoWidth:this.data.twoWidth 
    })
  },
  // 改变选择tab
  change(e){
    this.setData({
      currentTab:e.detail.index
    })
  }
})