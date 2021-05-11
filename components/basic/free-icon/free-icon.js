Component({
  externalClasses: ['free-icon-class'],
  properties: {
    name: {
      type: String,
      value: ''
    },
    size: {
      type: [Number,String],
      value: 28
    },
    color: {
      type: String,
      value: '#999'
    },
    bold:{
      type:Boolean,
      value:false
    },
    visible:{
      type: Boolean,
      value: true
    }
  }
});
