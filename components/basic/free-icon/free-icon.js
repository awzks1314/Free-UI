
/*
  freeUi for MP-weixin  | by 搞文艺的猿 
  仅供学习交流，如作它用所承受的法律责任一概与作者无关
  使用freeUi开发扩展与插件时，请注明基于freeUi开发
  
  （作者QQ：664423077 | 微信：creater8888）
*/
Component({
  externalClasses: ['free-icon-class'],
  properties: {
    name: {
      type: String,
      value: ''
    },
    size: {
      type: [Number,String],
      value: 40
    },
    color: {
      type: String,
      value: '#aaaaaa'
    }, 
    bold:{
      type:Boolean,
      value:false
    },
    visible:{
      type: Boolean,
      value: true
    },
    index:{
      type: Number,
      value: 0
    }
  },
  methods:{
    click(){
      this.triggerEvent('click',{
        index:this.data.index
      })
    }
  }
});
