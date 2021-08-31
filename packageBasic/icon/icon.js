const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    CustomBar: app.globalData.CustomBar,
    iconList:[
      {show:true,name:"add"},
      {show:true,name:"apps"},
      {show:true,name:"attention"},
      {show:true,name:"attentionfill"},
      {show:true,name:"attentionforbid"},
      {show:true,name:"attentionforbidfill"},
      {show:true,name:"back"},
      {show:true,name:"calendar"},
      {show:true,name:"camera"},
      {show:true,name:"cameraadd"},
      {show:true,name:"cameraaddfill"},
      {show:true,name:"camerafill"},
      {show:true,name:"card_fill"},
      {show:true,name:"cart"},
      {show:true,name:"cartfill"},
      {show:true,name:"cascades"},
      {show:true,name:"check"},
      {show:true,name:"close"},

      {show:true,name:"comment"},
      {show:true,name:"commentfill"},
      {show:true,name:"community"},
      {show:true,name:"communityfill"},
      {show:true,name:"copy"},
      {show:true,name:"delete"},
      {show:true,name:"deletefill"},
      {show:true,name:"deliver"},
      {show:true,name:"down"},
      {show:true,name:"edit"},
      {show:true,name:"elemo"},
      {show:true,name:"favor"},

      {show:true,name:"favor_fill_light"},
      {show:true,name:"favorfill"},
      {show:true,name:"female"},
      {show:true,name:"fold"},
      {show:true,name:"form"},
      {show:true,name:"formfill"},
      {show:true,name:"friend"},
      {show:true,name:"friendadd"},
      {show:true,name:"friendfamous"},
      {show:true,name:"global_light"},
      {show:true,name:"goods"},
      {show:true,name:"home"},
      {show:true,name:"homefill"},
      {show:true,name:"infofill"},
      
      {show:true,name:"like"},
      {show:true,name:"likefill"},
      {show:true,name:"list"},
      {show:true,name:"location"},
      {show:true,name:"locationfill"},
      {show:true,name:"male"},
      {show:true,name:"mark"},
      {show:true,name:"markfill"},
      {show:true,name:"moneybagfill"},

      {show:true,name:"more"},
      {show:true,name:"my"},
      {show:true,name:"myfill"},
      {show:true,name:"news_hot_fill_light"},
      {show:true,name:"news_hot_light"},
      {show:true,name:"notice"},
      {show:true,name:"noticefill"},
      {show:true,name:"notificationfill"},
      {show:true,name:"notificationforbidfill"},
      {show:true,name:"order"},
      {show:true,name:"paint"},
      {show:true,name:"paintfill"},
      {show:true,name:"pay"},
      {show:true,name:"people"},
      {show:true,name:"peoplefill"},

      {show:true,name:"pic"},
      {show:true,name:"picfill"},
      {show:true,name:"playfill"},
      {show:true,name:"present"},
      {show:true,name:"pulldown"},
      {show:true,name:"pullright"},
      {show:true,name:"pullup"},
      {show:true,name:"qrcode"},
      {show:true,name:"question"},
      {show:true,name:"questionfill"},
      {show:true,name:"radiobox"},
      {show:true,name:"rank"},
      {show:true,name:"rankfill"},
      {show:true,name:"read"},
      {show:true,name:"recharge"},
      {show:true,name:"rechargefill"},

      {show:true,name:"recordfill"},
      {show:true,name:"recordlight"},
      {show:true,name:"redpacket"},
      {show:true,name:"refresharrow"},
      {show:true,name:"right"},
      {show:true,name:"round"},
      {show:true,name:"roundadd"},
      {show:true,name:"roundaddfill"},
      {show:true,name:"roundcheck"},
      {show:true,name:"roundcheckfill"},
      {show:true,name:"roundclose"},
      {show:true,name:"roundclosefill"},
      {show:true,name:"rounddown"},
      {show:true,name:"roundleftfill"},
      {show:true,name:"roundleftfill-copy"},
      {show:true,name:"roundright"},

      {show:true,name:"safe"},
      {show:true,name:"scan"},
      {show:true,name:"search"},
      {show:true,name:"searchlist"},
      {show:true,name:"send"},
      {show:true,name:"settings"},
      {show:true,name:"share"},
      {show:true,name:"shop"},
      {show:true,name:"shopfill"},
      {show:true,name:"square"},
      {show:true,name:"squarecheck"},
      {show:true,name:"squarecheckfill"},
      {show:true,name:"stop"},
      {show:true,name:"tag"},
      {show:true,name:"tagfill"},
      {show:true,name:"text"},

      {show:true,name:"ticket"},
      {show:true,name:"ticket_money_fill"},
      {show:true,name:"time"},
      {show:true,name:"timefill"},
      {show:true,name:"top"},
      {show:true,name:"triangledownfill"},
      {show:true,name:"triangleupfill"},
      {show:true,name:"unfold"},
      {show:true,name:"upload"},
      {show:true,name:"video"},
      {show:true,name:"videofill"},
      {show:true,name:"voicefill"},
      {show:true,name:"warnfill"},

      {show:true,name:"weibo2"},
      {show:true,name:"weixin"},
      {show:true,name:"xiazai"},
      {show:true,name:"zhifubao"}
    ]
  },
  copy(e){
    wx.setClipboardData({ 
      data: e.currentTarget.dataset.name
    })
  },
  clickIcon(e){
    console.log(e)
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