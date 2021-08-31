Page({
  data: {
    //小程序没有refs，所以只能用动态布尔值控制关闭
    toggle: false,
    list:[
      { id:1,
        title:"微信开发者工具 Nightly 1.05.2103042"
      },
      { id:2,
        title:"微信开发者工具 Nightly 1.05.2103042"
      },
      { id:3,
        title:"微信开发者工具 Nightly 1.05.2103042"
      },
      { id:4,
        title:"微信开发者工具 Nightly 1.05.2103042"
      },
      { id:5,
        title:"微信开发者工具 Nightly 1.05.2103042"
      },
      { id:6,
        title:"微信开发者工具 Nightly 1.05.2103042"
      },
      { id:7,
        title:"微信开发者工具 Nightly 1.05.2103042"
      },
    ],
    actions: [
      { 
        name: '删除',
        color: '#fff',
        fontsize: '22',
        width: 80,
        //icon: 'like.png',//此处为图片地址
        background: '#ed3f14'
      },
      {
        name: '修改',
        color: '#fff',
        fontsize: '22',
        width: 80,
        //icon: 'like.png',//此处为图片地址
        background: '#ff7900'
      },
      {
        name: '收藏',
        width: 80,
        color: '#80848f',
        fontsize: '22',
        //icon: 'undo'
      }
    ]

  },
  onLoad(){

  },
  handlerCloseButton(e) {
    let index = e.detail.index;
    let item = e.detail.item;
    let menuTxt = ["删除","修改","收藏"][index];
    wx.showToast({
      title: "您点击了【" + menuTxt+"】按钮，列表id："+item.id,
      icon:"none"
    })
  //list中可以每一项都设置toggle
    setTimeout(()=>{
       this.setData({
        toggle: this.data.toggle ? false : true
      });
    },200)
   
  }

})
