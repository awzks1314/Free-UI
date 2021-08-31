// packageModule/actionSheet/actionSheet.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        name:'基础用法'
      },
      {
        name:"退出登录"
      },
      {
        name:"无提示操作",
      },
      {
        name:"无取消按钮"
      },
      {
        name:"自定义样式",
      },
      {
        name:"mask不可点击"
      }
    ],
    showActionSheet:false,//控制显隐
    tips: "确认清空搜索历史吗？",//提示文本
    itemList: [],//操作按钮列表
    color: "#9a9a9a",
    size: 26, 
    isCancel: true,//是否取消
    maskClosable:true,//mask是否可以点击
  },
  closeActionSheet() {
    this.setData({
      showActionSheet: false
    })
  },
  // 点击
  itemClick: function(e) {
    let index = e.detail.index;
    this.closeActionSheet();
    wx.showToast({
      title: `您点击的索引为：${index}`,
      icon:'none'
    })
  },
  // 打开
  openActionSheet(e) {
    let type = Number(e.currentTarget.dataset.type);
    let itemList = [{
      text: "确定",
      color: "#1a1a1a"
    }];
    let maskClosable = true;
    let tips = "确认清空搜索历史吗？";
    let color = "#9a9a9a";
    let size = 26;
    let isCancel = true;
    //组件中都有默认值，实际应用中不需要可不操作
    switch (type) {
      case 0:
        break;
      case 1:
        tips = "退出登录会清除您的登录信息，确认退出吗？";
        itemList = [{
          text: "退出登录",
          color: "#e53a37"
        }];
        break;
      case 2:
        tips = "";
        itemList = [{
          text: "点赞",
          color: "#1a1a1a"
        }, {
          text: "评论",
          color: "#1a1a1a"
        }, {
          text: "收藏",
          color: "#1a1a1a"
        }, {
          text: "分享",
          color: "#1a1a1a"
        }]
        break;
      case 3:
        isCancel = false;
        tips = "选择您的性别";
        itemList = [{
          text: "男",
          color: "#1a1a1a"
        }, {
          text: "女",
          color: "#1a1a1a"
        }, {
          text: "不公开",
          color: "#1a1a1a"
        }]
        break;
      case 4:
        color = "#0081ff";
        size = 28;
        break;
      case 5:
        maskClosable = false;
        break;
      default:
        break;
    }
    setTimeout(() => {
      this.setData({
        showActionSheet: true,
        itemList: itemList,
        maskClosable: maskClosable,
        tips: tips,
        color: color,
        size: size,
        isCancel: isCancel
      })
    }, 0)
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})