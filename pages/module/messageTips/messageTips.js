const utils = require('../../../utils/toast.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {name:'一般提示',type:'default',str:"blue"},
      {name:'成功提示',type:'success',str:"green"},
      {name:'警告提示',type:'warning',str:"orange"},
      {name:'错误提示',type:'danger',str:"red"},
      {name:'自定义',type:'primary',str:"blue"},
      {name:'自动关闭',type:'default',str:"grey",duration:4000}
    ],
    index:0,
    type:'top'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  showTips(e){
    let index = e.currentTarget.dataset.index;
    let options={
      msg: this.data.list[index].name,
      duration: this.data.list[index].duration || 2000,
      type: this.data.list[index].str
    };
    this.setData({
      type:e.currentTarget.dataset.str
    })
    console.log(this.data.type)
    utils.toast(options);
  }
})