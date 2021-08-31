// packageModule/form/form.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: null,
    picker: ['123456', '7891011', '1213141516'],
    multiArray: [['Invertebrate', 'Vertebrate '], ['Platyhelminth', 'Nemathelminth', 'Annelida', 'Mollusc', 'Arthropod'], ['Taenia solium', 'Blood sucker']],    
    multiIndex: [0, 0, 0],
    time: '12:16',
    date: '1997-12-25',
    region:['云南省', '昆明市', '官渡区'],
    imgList:[],
    modalName: null,
    textareaAValue: '',
    textareaBValue: ''
  },
  // 单个选择
  PickerChange(e) {
    this.setData({
      index: e.detail.value
    })
  },
  // 地址选择
  RegionChange: function(e) {
    this.setData({
      region: e.detail.value
    })
  },
  // 时间选择
  TimeChange(e) {
    this.setData({
      time: e.detail.value
    })
  },
  // 日期选择
  DateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },
  // 多选
  MultiChange(e) {
    this.setData({
      multiIndex: e.detail.value
    })
  },
  MultiColumnChange(e) {
    let data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    // 替换当前选中下标
    data.multiIndex[e.detail.column] = e.detail.value
    switch (e.detail.column) {
      case 0:
        switch (data.multiIndex[0]) {
          case 0:
            data.multiArray[1] = ['Platyhelminth', 'Nemathelminth', 'Annelida', 'Mollusc', 'Arthropod'];
            data.multiArray[2] = ['Arthropod', 'Taenia solium'];
            break;
          case 1:
            data.multiArray[1] = ['Fish', 'Amphibian', 'Reptile'];
            data.multiArray[2] = ['Crucian', 'Hairtail'];
            break;
        }
        data.multiIndex[1] = 0;
        data.multiIndex[2] = 0;
        break;
      case 1:
        switch (data.multiIndex[0]) {
          case 0:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['Arthropod', 'Taenia solium'];
                break;
              case 1:
                data.multiArray[2] = ['Roundworm'];
                break;
              case 2:
                data.multiArray[2] = ['Ant', 'Leech'];
                break;
              case 3:
                data.multiArray[2] = ['Clam', 'Snail', 'Slug'];
                break;
              case 4:
                data.multiArray[2] = ['Insect', 'Crustacean', 'Arachnid', 'Polypod'];
                break;
            }
            break;
          case 1:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['Crucian', 'Hairtail'];
                break;
              case 1:
                data.multiArray[2] = ['Frog', 'Giant salamander'];
                break;
              case 2:
                data.multiArray[2] = ['Lizard', 'Turtle', 'Gecko'];
                break;
            }
            break;
        }
        data.multiIndex[2] = 0;
        break;
    }
    this.setData(data);
  },
  textareaAInput(e) {
    this.setData({
      textareaAValue: e.detail.value
    })
  },
  textareaBInput(e) {
    this.setData({
      textareaBValue: e.detail.value
    })
  },
  // 选择图片
  ChooseImage() {
    wx.chooseImage({
      count: 4, //默认9
      sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album'], //从相册选择
      success: (res) => {
        if (this.data.imgList.length != 0) {
          this.setData({
            imgList: this.data.imgList.concat(res.tempFilePaths)
          })
        } else {
          this.setData({
            imgList: res.tempFilePaths
          })
        }
      }
    });
  },
  ViewImage(e) {
    wx.previewImage({
      urls: this.data.imgList,
      current: e.currentTarget.dataset.url
    });
  },
  DelImg(e) {
    wx.showModal({
      title: '召唤师',
      content: '确定要删除这段回忆吗？',
      cancelText: '再看看',
      confirmText: '再见',
      success: res => {
        if (res.confirm) {
          this.data.imgList.splice(e.currentTarget.dataset.index, 1);
          this.setData({
            imgList: this.data.imgList
          })
        }
      }
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})