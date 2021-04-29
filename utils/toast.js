const utils = {
  getComponent: function(selector) {
    const pages = getCurrentPages();
    const current = pages[pages.length - 1];
    const component = current.selectComponent(selector);
    if (!component) {
      return null;
    }
    return component;
  },
  toast: function(options) {
    const {      
      selector = '#free-tips-position'
    } = options;
    const component = utils.getComponent(selector);
    if (component) {
      component.showTips(options);
    }
  },
  // 选择时间
  dateTime:function(options){
    const component = utils.getComponent('#tui-dateTime-ctx');
    if (component) {
      component.show();
    }
  }
};
module.exports = {
  toast: utils.toast,
  dateTime: utils.dateTime
};