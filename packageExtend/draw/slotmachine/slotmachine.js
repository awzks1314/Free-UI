import Machine from "./utils/slotmachine.js"

Page({
  data: {

  },

  onLoad () {
    
    this.machine = new Machine(this, {
      height: 40,  //单个数字高度
      len: 10,     
      transY1: 0,
      num1: 3,
      transY2: 0,
      num2: 0,
      transY3: 0,
      num3: 0,
      transY4: 0,
      num4: 1,
      speed: 24,
      callback: () => {
        wx.showModal({
          title: '提示',
          content: '恭喜您，中奖了',
          showCancel: false,
          success: (res) =>  {            
            if (res.confirm) {
              console.log('用户点击确定')
              this.machine.reset()
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })          
      }      
    })

  },

  onReady () {
    console.log("onReady")    
  },

  onStart () {
    this.machine.start()
  }

})