//抽屉组件
Component({
  externalClasses: ['free-drawer-class'], //自定义样式
  properties: {
    visible: {
      type: Boolean,
      value: false
    },
    mask: {
      type: Boolean,
      value: true
    },
    maskClosable: {
      type: Boolean,
      value: true
    },
    mode: {
      type: String,
      value: 'left' // left right top bottom
    }
  },
  data: {},
  methods: {
    handleMaskClick() {
      if (!this.data.maskClosable) {
        return;
      }
      this.triggerEvent('close', {});
    }
  }
});