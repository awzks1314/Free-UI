//为了可重用性强，这里做了修改，和thorui.css里的略有不同
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
      value: "#fff"
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