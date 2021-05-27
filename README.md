<p align="center">
    <img alt="logo" src="https://z3.ax1x.com/2021/05/27/2CRvb8.png" width="120" height="120" style="margin-bottom: 10px;border-radius:50%;">
</p>
<h3 align="center" style="margin: 30px 0 30px;font-weight: bold;font-size:40px;">Free UI</h3>
<h3 align="center">轻量简洁的微信原生开发UI组件库</h3>
### 简介

Free UI，是一款微信原生开发的UI框架，全面的组件和便捷的工具会让您信手拈来，如鱼得水

如果你喜欢，请给个star呗~

### 个人说明

如有问题，请联系QQ``664423077``或公众号留言``搞文艺的猿``。
<img src="https://z3.ax1x.com/2021/05/27/2CIEAf.jpg" width="220" height="220" >

### 预览

您可以通过**微信**扫码，查看最佳的演示效果。
<br>
<br>
<img src="https://z3.ax1x.com/2021/05/27/2CfT1A.jpg" width="220" height="220" >

### 源码地址

github地址: [https://github.com/awzks1314/Free-UI](https://github.com/awzks1314/Free-UI)

gitee地址：[https://gitee.com/zkszz/free-ui](https://gitee.com/zkszz/free-ui)

### 开始使用

1. `app.wxss`引入基础样式，路径为`/static/style`
```js
@import '/static/style/main.wxss';
```

2. 按需引入需要的组件，组件都放在`components`里
```css
/* 比如app.json我引用了部分组件，全局使用*/
"usingComponents": {
    "free-tabs": "/components/module/free-tabs/free-tabs",
    "free-tag": "/components/basic/free-tag/free-tag",
    "free-navBar": "/components/module/free-navBar/free-navBar",
    "free-icon": "/components/basic/free-icon/free-icon",
    "free-title": "/components/basic/free-title/free-title",
    "free-subsection": "/components/module/free-subsection/free-subsection",
    "free-gap": "/components/module/free-gap/free-gap",
    "free-list": "/components/module/free-list/free-list",
    "free-image": "/components/basic/free-image/free-image"
  },
```

3. 部分使用，在需要使用的backTop.json里引用
```css
/* /pages/module/backTop/backTop.json */
{
  "navigationBarTitleText":"返回顶部",
  "usingComponents": {
    "free-backTop":"/components/module/free-backTop/free-backTop"
  }
}
```

4. backTop.wxml使用

```html
<!-- {{}}为参数配置-->
<free-backTop 
  scrollTop="{{scrollTop}}" 
  top="{{top}}"
  bottom="{{bottom}}"
  mode="{{mode}}"
  right="{{right}}"
  color="{{color}}"
  bgColor="{{bgColor}}"
  icon="{{icon}}"
  ></free-backTop>
```

### 版权说明

uView遵循[MIT](https://en.wikipedia.org/wiki/MIT_License)开源协议，意味着您无需支付任何费用，也无需授权，即可将uView应用到您的产品中。

### 更新记录

## 1.0.2（2021-05-27）

- 新增模板之奈雪小程序
- 新增组件【提示引导】
- 新增扩展【水印】
- 修复组件bug，新增组件class属性

## 1.0.1（2021-05-20）

- 新增索引列表，分城市索引、通讯录吸顶等
- 新增分类选择扩展页面
- 新增收货地址扩展页面
- 新增登录扩展页面
- 新增订单列表扩展页面
- 新增订单详情扩展页面
- 新增登录判断扩展组件
- 新增操作条扩展组件
- 新增操作条扩展组件
- 新增占位槽、空内容简单组件