Component({
  externalClasses: ['free-icon-class'],
  properties: {
    name: {
      type: String,
      value: ''
    },
    size: {
      type: [Number,String],
      value: 20
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
    }
  }
});
