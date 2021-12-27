//为了可重用性强，这里做了修改，和thorui.css里的略有不同
/*
  freeUi for MP-weixin  | by 搞文艺的猿 
  仅供学习交流，如作它用所承受的法律责任一概与作者无关
  使用freeUi开发扩展与插件时，请注明基于freeUi开发
  
  （作者QQ：664423077 | 微信：creater8888）
*/
Component({
  externalClasses: ['class'],
  properties: {
    //是否可见
    visible: {
      type: Boolean,
      value: false
    },
    //当前页面背景颜色
    bgcolor: {
      type: String,
      value: "transport"
    },
    // 是否有左右横线
    noBorder:{
      type: Boolean,
      value: false
    },
    //加载状态文字
    text:{
      type:Object,
      value: {
        loadmore: '轻轻上拉',
        loading: '努力加载中',
        nomore: '实在没有了'
      }
    },
    index:{
      type: Number,
      value: 1
    },
    //颜色设置，只有index=3时生效：primary，red，orange，green
    type:{
      type: String,
      value: ""
    },
    // loading loadmore nomore
    status:{
      type: String,
      value: "loading"
    }
  },
  data: {  
    
  },
  methods: {}
})