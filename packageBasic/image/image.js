// packageBasic/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageList:[
      {name:'scaleToFill',msg:'缩放模式，不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素'},
      {name:'aspectFit',msg:'缩放模式，保持纵横比缩放图片，使图片的长边能完全显示出来。也就是说，可以完整地将图片显示出来。'},
      {name:'aspectFill',msg:'缩放模式，保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。'},
      {name:'widthFix',msg:'缩放模式，宽度不变，高度自动变化，保持原图宽高比不变'},
      {name:'heightFix',msg:'缩放模式，高度不变，宽度自动变化，保持原图宽高比不变'},
      {name:'top',msg:'裁剪模式，不缩放图片，只显示图片的顶部区域'},
      {name:'bottom',msg:'裁剪模式，不缩放图片，只显示图片的底部区域'},
      {name:'center',msg:'裁剪模式，不缩放图片，只显示图片的中间区域'},
      {name:'left',msg:'裁剪模式，不缩放图片，只显示图片的左边区域'},
      {name:'right',msg:'裁剪模式，不缩放图片，只显示图片的右边区域'},
      {name:'top left',msg:'裁剪模式，不缩放图片，只显示图片的左上边区域'},
      {name:'top right',msg:'裁剪模式，不缩放图片，只显示图片的右上边区域'},
      {name:'bottom left',msg:'裁剪模式，不缩放图片，只显示图片的左下边区域'},
      {name:'bottom right',msg:'裁剪模式，不缩放图片，只显示图片的右下边区域'},
    ],
    mode:'scaleToFill',
    preview:true,
    width:'200rpx',
    height:'200rpx',
    radius:0,
    long:true
  },
  getMode(e){
    this.setData({
      [e.currentTarget.dataset.name]:e.detail.value
    },()=>{
      console.log(this.data.mode)
    })
  }
})