// pages/module/collapse/collapse.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listOne:[
      {
        title:"一致性 Consistency",
        intro:"与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。",
        current: 0,
        arrow:true,
        disabled: false
      },
      {
        title:"反馈 Feedback",
        intro:"控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。",
        current: -1,
        arrow:true,
        disabled: false
      },
      {
        title:"无箭头，禁用",
        intro:"简化流程：设计简洁直观的操作流程；清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。",
        current: -1,
        arrow:false,
        disabled: true
      }
    ],
    listTwo:[
      {
        title:"一致性 Consistency",
        intro:"与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。",
        current: 0,
        disabled: false
      },
      {
        title:"反馈 Feedback",
        intro:"控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。",
        current: -1,
        disabled: false
      },
      {
        title:"效率 Efficiency",
        intro:"简化流程：设计简洁直观的操作流程；清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。",
        current: -1,
        disabled: false
      }
    ],
    //手风琴效果
    current: -1,
    current2: -1,
  },
  change(e) {
    let index = e.detail.index;
    let item = this.data.listOne[index];
    this.setData({
      [`listOne[${index}].current`]: item.current == index ? -1 : index
    })
  },
  change1(e) {
    //可关闭自身
    let index = e.detail.index
    this.setData({
      current: this.data.current == index ? -1 : index
    })
  },
  change2(e) {
    //不可关闭自身
    this.setData({
      current2: e.detail.index
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})