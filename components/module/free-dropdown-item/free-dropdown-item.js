// components/module/free-dropdown-item/free-dropdown-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    custom:{
      type:Boolean,
      value:false
    },
    height:{
      type:[Number,String],
      value:400
    },
    current:{
      type:[Number,String],
      value:0
    },
    list:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  
  /**
   * 组件的方法列表
   */
  methods: {
    itemClick(e){
      let index = e.currentTarget.dataset.index
      if(index == this.data.current)return
      this.setData({
        current:index
      },() => {
        this.triggerEvent('change',{
          index:index
        })
      })
    }
  }
})
