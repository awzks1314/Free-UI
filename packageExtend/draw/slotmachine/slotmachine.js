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
        wx.showToast({
          title: '恭喜你中奖了',
          icon: 'none'
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