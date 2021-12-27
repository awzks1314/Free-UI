//抽屉组件
/*
  freeUi for MP-weixin  | by 搞文艺的猿 
  仅供学习交流，如作它用所承受的法律责任一概与作者无关
  使用freeUi开发扩展与插件时，请注明基于freeUi开发
  
  （作者QQ：664423077 | 微信：creater8888）
*/
Component({
  externalClasses: ['free-drawer-class'], //自定义样式
  properties: {
    // visible: {
    //   type: Boolean,
    //   value: false
    // },
    show:{
      type: Boolean,
      value: false
    },
    mode: {
      type: String,
      value: 'left' // left right top bottom center
    },
    mask: {
      type: Boolean,
      value: true
    },
    // 遮罩层能否点击
    maskClosable: {
      type: Boolean,
      value: true
    },
    width:{
      type:String,
      value:''
    },
    height:{
      type:String,
      value:''
    },
    // 圆角
    radius:{
      type:String,
      value:'20rpx'
    },
    // 抽屉颜色
    backgroundColor: {
      type:String,
      value:'#fff'
    },
    // 抽屉的宽度(mode=left|right)，或者高度(mode=top|bottom)，单位rpx，或者"auto"
		// 或者百分比"50%"，表示由内容撑开高度或者宽度
    length:{
      type:[Number,String],
      value:'auto'
    },
    // 是否显示关闭图标
		closeable: {
			type: Boolean,
			value: true
		},
    closeIconPos:{
      type:String,
      value:'top-right'
    },
    // 关闭图标的名称，只能FreeUI的内置图标
		closeIcon: {
			type: String,
			value: 'close'
    },
    // 关闭图标的颜色
		closeIconColor: {
			type: String,
			value: '#909399'
		},
		// 关闭图标的大小，单位rpx
		closeIconSize: {
			type: [String, Number],
			value: '36'
		},
  },
  observers:{
    visible:function(val){
      if(val){
        this.changeShow('sync','showDrawer',true)
      }else if(!this.data.closeFromInner) {
        this.changeShow('showDrawer','sync',false)
			}
			this.setData({
        closeFromInner:false
      })
    },
    show:function(va){
      console.log(va)
      this.setData({
        visible:va
      })
    }
  },
  data: {
    visible:'',
    showDrawer:false,
    sync:false,
    closeFromInner:false
  },
  methods: {
    changeShow(value1,value2,status){
      this.setData({
        [value1]:status
      })
      if(status){
        this.timer = setTimeout(() => {
          this.setData({
            [value2]:status
          })
          // 父组件监听
          this.triggerEvent('open')
        }, 50);
      }else{
        this.setData({
          closeFromInner:true
        })
        this.timer = setTimeout(() => {
          this.setData({
            [value2]:status
          })
          this.triggerEvent('close')
        }, 250);
      }
    },  
    // 图标关闭
    closeClick(){
      this.setData({
        visible:false 
      })
    },
    // 遮罩层关闭
    maskClick(){
      if(!this.data.maskClosable){
        return
      }
      this.setData({
        visible:false 
      })
    },
    handleMaskClick() {
      if(this.data.mode != 'center' && !this.data.maskClosable){
        return
      }
      this.setData({
        visible:false
      })
    }
  }
});