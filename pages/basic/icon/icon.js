const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    CustomBar: app.globalData.CustomBar,
    iconList:[
      {show:true,name:"add"},{show:true,name:"add-circle"},{show:true,name:"arrow-double-left"},{show:true,name:"arrow-double-right"},{show:true,name:"arrow-down-bold"},
      {show:true,name:"arrow-down-filling"},{show:true,name:"arrow-left-bold"},{show:true,name:"arrow-left-circle"},{show:true,name:"arrow-left-filling"},{show:true,name:"arrow-right-bold"},
      {show:true,name:"arrow-right-circle"},{show:true,name:"arrow-right-filling"},{show:true,name:"arrow-up-bold"},{show:true,name:"arrow-up-circle"},{show:true,name:"arrow-up-filling"},
      {show:true,name:"ashbin"},{show:true,name:"attachment"},{show:true,name:"bottom"},{show:true,name:"browse"},{show:true,name:"calendar"},
      {show:true,name:"camera"},{show:true,name:"chart-bar"},{show:true,name:"chart-pie"},{show:true,name:"check-item"},{show:true,name:"add"},
      {show:true,name:"check-item-filling"},{show:true,name:"close"},{show:true,name:"comment"},{show:true,name:"comment-filling"},{show:true,name:"complete"},
      {show:true,name:"copy"},{show:true,name:"direction-down"},{show:true,name:"direction-down-circle"},{show:true,name:"direction-left"},{show:true,name:"direction-right"},
      {show:true,name:"download"},{show:true,name:"edit"},{show:true,name:"electronics"},{show:true,name:"elipsis"},
      {show:true,name:"email"},{show:true,name:"eye-close"},{show:true,name:"fabulous"},{show:true,name:"filter"},{show:true,name:"good"},{show:true,name:"help"},{show:true,name:"hide"},{show:true,name:"home"},{show:true,name:"home-filling"},{show:true,name:"link"},{show:true,name:"loading"},{show:true,name:"map-filling"},{show:true,name:"minus-bold"},{show:true,name:"minus-circle"},{show:true,name:"navigation"},{show:true,name:"notification"},{show:true,name:"notification-filling"},{show:true,name:"picture-filling"},{show:true,name:"play"},{show:true,name:"prompt"},{show:true,name:"save"},{show:true,name:"scanning"},{show:true,name:"search"},{show:true,name:"security"},{show:true,name:"select"},{show:true,name:"setting"},{show:true,name:"time"},{show:true,name:"top"},{show:true,name:"upload"},{show:true,name:"user"}
    ]
  },
  copy(e){
    wx.setClipboardData({ 
      data: e.currentTarget.dataset.name
    })
  },
  getClose(e){
    this.data.iconList.forEach(o => o.show = true)
    this.setData({
      iconList:this.data.iconList
    })
  },
  getValue(e){
    let word = e.detail.value.toLowerCase()
    let list = this.data.iconList

    list.forEach(i => {
      if(i.name.search(word) != -1){
        // 有
        i.show = true

      }else{
        i.show = false
      }
    })

    this.setData({
      iconList:list
    })
  }
})