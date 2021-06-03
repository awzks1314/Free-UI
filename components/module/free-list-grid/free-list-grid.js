// components/module/free-list-grid/free-list-grid.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list:{
      type:Array,
      value:[]
    },
    // 列数
    col:{
      type:[Number,String],
      value:4
    },
    // 行数
    row:{
      type:[Number,String],
      value:2
    },
    // 边框
    border:{
      type:Boolean,
      value:false
    },
    // 背景色
    bgColor:{
      type:String,
      value:'#fff'
    },
    // 图片长度
    width:{
      type:String,
      value:'60'
    },
    // 图片大小
    height:{
      type:String,
      value:'60'
    },
    // 圆角
    radius:{
      type:[Number,String],
      value:10
    },
    // 是否可滑动，可做金刚区
    isSwiper:{
      type:Boolean,
      value:false
    },
    swiperHeight:{
      type:[Number,String],
      value:400
    }
  },
  observers:{
    'isSwiper,col,row':function(isSwiper,col,row){
      this.changeList()
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    categoryCurrent:0,
    listInfo:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 父组件监听
    onClick(e){
      let index = e.currentTarget.dataset.index
      this.triggerEvent('click',{
        index:index
      })
    },
    onSwiper(e){
      this.setData({
        categoryCurrent:e.detail.current
      })
    },
    // 滑动修改list结构
    changeList(){
      if(!this.data.isSwiper)return
      
      let newList = []
      let tempList = []

      this.data.list.forEach((o,index) => {
        o.id = index
        if(tempList.length == this.data.col * this.data.row){
          tempList = []
        }
        if(tempList.length == 0){
          newList.push(tempList)
        }
        tempList.push(o)
      })
      // 
      console.log(newList)
      this.setData({
        categoryCurrent:0,
        listInfo:newList
      })
    }
  }
})
