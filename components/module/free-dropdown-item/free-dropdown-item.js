// components/module/free-dropdown-item/free-dropdown-item.js
/*
  freeUi for MP-weixin  | by 搞文艺的猿 
  仅供学习交流，如作它用所承受的法律责任一概与作者无关
  使用freeUi开发扩展与插件时，请注明基于freeUi开发
  
  （作者QQ：664423077 | 微信：creater8888）
*/
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
