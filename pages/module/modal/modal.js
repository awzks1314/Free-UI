// pages/module/modal/modal.js
const util = require('../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    modal:false,
    modal1:false,
    modal2:false,
    modal3:false,
    modal4:false,
    modal5:false,
    modal6:false,
    modal7:false,
    button4:[
      {
        text: "确定",
        type: 'primary'
      }
    ],
    button5:[
      {
        text: "确定",
        type: 'primary'
      },
      {
        text: "确定",
        type: 'danger'
      },
      {
        text: "确定",
        type: 'warning'
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  show(){
    this.setData({
      modal:true
    })
  },
  hide() {
    this.setData({
      modal: false
    })
  },
  handleClick(e) {
    let index = e.detail.index;
    if (index === 0) {
      util.toast("你点击了取消按钮")
    } else {
      util.toast("你点击了确定按钮")
    }
    this.hide()
  },
  show1(){
    this.setData({
      modal1:true
    })
  },
  hide1() {
    this.setData({
      modal1: false
    })
  },
  handleClick1(e) {
    let index = e.detail.index;
    if (index === 0) {
      util.toast("你点击了取消按钮")
    } else {
      util.toast("你点击了确定按钮")
    }
    this.hide1()
  },
  show2(){
    this.setData({
      modal2:true
    })
  },
  hide2() {
    this.setData({
      modal2: false
    })
  },
  handleClick2(e) {
    let index = e.detail.index;
    if (index === 0) {
      util.toast("你点击了取消按钮")
    } else {
      util.toast("你点击了确定按钮")
    }
    this.hide2()
  },
  show3(){
    this.setData({
      modal3:true
    })
  },
  hide3() {
    this.setData({
      modal3: false
    })
  },
  handleClick3(e) {
    let index = e.detail.index;
    if (index === 0) {
      util.toast("你点击了取消按钮")
    } else {
      util.toast("你点击了确定按钮")
    }
    this.hide3()
  },
  show4(){
    this.setData({
      modal4:true
    })
  },
  hide4() {
    this.setData({
      modal4: false
    })
  },
  handleClick4(e) {
    let index = e.detail.index;
    util.toast(`你点击了${index}按钮`)
    this.hide4()
  },
  show5(){
    this.setData({
      modal5:true
    })
  },
  hide5() {
    this.setData({
      modal5: false
    })
  },
  handleClick5(e) {
    let index = e.detail.index;
    util.toast(`你点击了${index}按钮`)
    this.hide5()
  },
  show6(){
    this.setData({
      modal6:true
    })
  },
  hide6() {
    this.setData({
      modal6: false
    })
  },
  handleClick6(e) {
    let index = e.detail.index;
    util.toast(`你点击了${index}按钮`)
    this.hide6()
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})