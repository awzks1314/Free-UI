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
