// pages/module/collapse/collapse.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        title:"一致性 Consistency",
        disabled:false,
        intro:"与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。"
      },
      {
        title:"反馈 Feedback",
        intro:"控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。"
      },
      {
        title:"效率 Efficiency",
        intro:"简化流程：设计简洁直观的操作流程；清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。"
      }
    ],
    accordion:true,
    arrow:true,
    height:'auto',
    hdBgColor:'#fff',
    bdBgColor:'#fff'
  },
  change(e) {
    console.log(e)
    let index = e.detail.index;
    wx.showToast({
      title: `当前索引${index}`,
      icon:'none'
    })
  },
  getMode(e){
    this.setData({
      [e.currentTarget.dataset.name]:e.detail.value
    })
    console.log(this.data)
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})