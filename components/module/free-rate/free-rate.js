Component({
  externalClasses: ['free-rate-class'],
  properties: {
    //数量
    number: {
      type: Number,
      value: 5
    },
    //当前选中
    current: {
      type: [Number,String],
      value: 0
    },
    //禁用点击
    disabled: {
      type: Boolean,
      value: false
    },
    //大小
    size: {
      type: Number,
      value: 40
    },
    //未选中颜色
    normal: {
      type: String,
      value: "#b2b2b2"
    },
    //选中颜色
    active: {
      type: String,
      value: "#0081ff"
    },
    //未选中是否为空心
    hollow: {
      type: Boolean,
      value: false
    },
    //当前选中星星分数(大于0，小于等于1的数)
    score: {
      type: [Number,String],
      value: 1,
      observer(val) {
        console.log(val)
        this.getPercent()
      }
    },
  },
  lifetimes: {
    attached: function () {
      this.getPercent()
    }
  },
  data: {
    pageX: 0,
    percent: 0
  },
  methods: {
    getPercent() {
      this.setData({
        percent: Number(this.data.score || 0) * 100
      })
    },
    handleTap(e) {
      if (this.data.disabled) {
        return;
      }
      const index = e.currentTarget.dataset.index + 1;
      
      if(index  == 1 ){
        if(this.data.current == 1){
          this.data.current = 0
        }else{
          this.data.current = 1
        }
      }else{
        this.data.current = index
      }
      
      this.setData({
        current : this.data.current
      })
      this.triggerEvent('change', {
        index: this.data.current
      })
    },    
    touchMove(e) {
      if (this.data.disabled) {
        return;
      }
      if (!e.changedTouches[0]) {
        return;
      }
      const movePageX = e.changedTouches[0].pageX;
      const distance = movePageX - this.data.pageX;
      let index = 0
      if (distance <= 0) {
        index = 0
        this.setData({
          current:0
        })
        // return;
      }else{
        index = Math.ceil(distance / this.data.size);
      index = index > this.data.number ? this.data.number : index;
       
        this.setData({
          current:index
        })
      }
      
      this.triggerEvent('change', {
        index: index
      })
    }
  },
  ready() {
    const className = '.free-rate-box';
    let query = wx.createSelectorQuery().in(this)
    query.select(className).boundingClientRect((res) => {
      this.setData({
        pageX: res.left || 0
      })
    }).exec()
  }
})