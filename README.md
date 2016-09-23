# MINAStart
微信小程序昨天刚开始内测，真是太火了，匆匆下载开发软件，破解完之后，今天终于搞到一份开发文档，看了开发文档对一些结构也有眉目，就小试一下写了个简单的demo,效果图如下


<img src="https://github.com/litong19930321/MINAStart/blob/master/001.png" width="320px" />
<img src="https://github.com/litong19930321/MINAStart/blob/master/002.png" width="320px" />

资料：一个网友上传的[内测的官方开发文档](http://wxopen.notedown.cn/)


# 1.一个大致的文件资源树如下

<img src="https://github.com/litong19930321/MINAStart/blob/master/003.png" width="320px" />


1. 其中app.js是小程序的脚本代码，可以理解成入口，这个文件监听并处理小程序的生命周期函数、声明全局变量
2. app.json是对整个小程序的全局配置。我们可以在这个文件中配置小程序是由哪些页面组成，配置小程序的窗口背景色，配置导航条样式，配置默认标题。注意该文件不可添加任何注释。
3. app.wxss是整个小程序的公共样式表。我们可以在页面组件的class属性上直接使用app.wxss中声明的样式规则

 ### 2.首先每一个界面有4个文件组成
1. xxx.js 我的理解就是数据源，同时还负责定义一些方法，里面可以调用生命周期方法，
2. xxx.wxml 页面结构文件，其实就是视图，跟前端的html类似，微信进行了一些封装，比如 用<view>来代替<div>
3. xxx.wxss 样式表文件，这个跟前端的css文件差别不大（非必须）
4. xxx.json 配置文件，页面的配置文件是非必要的。当有页面的配置文件时，配置项在该页面会覆盖app.json的window中相同的配置项。如果没有指定的页面配置文件，则在该页面直接使用app.json中的默认配置
页面中有Page对象，管理着每个页面的生命周期，比如onLoad，onReady，onShow，onHide，onUnload，你还可以在data中自定义内容，然后再xx.wxml中通过key去读取data 中的内容。

 
