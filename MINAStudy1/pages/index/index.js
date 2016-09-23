//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    iconUrl:'../images/nickIcon.png',
    nickName:'蛋壳儿',
    array:[{msg : '测试数组中第一个msg'},{msg : '测试数组中第二个msg'}]
  },
  //事件处理函数
  bindViewTap: function() {
    // wx.navigateTo({
    //   url: '../logs/logs'
    // })
    wx.redirectTo({
      url:'../index/index'
    })
  },
  changeText : function(){
      this.setData({
        nickName:'小肉肉'
      })
  },
  onLoad: function () {
    console.log('页面加载 --- onLoad')
    var that = this
  	//调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      console.log(userInfo);
      that.setData({
        userInfo:userInfo
      })
      that.update()
    })
  },
  onReady: function(){
      //生命周期函数--监听页面渲染完成
      console.log('页面准备显示了 onReady');
  },
  onShow:function(){
      //生命周期函数--监听页面显示
      console.log('生命周期函数--监听页面显示');
  },
  onHide:function(){
    //生命周期函数--监听页面隐藏
    console.log('生命周期函数--监听页面隐藏');
  },
    //生命周期函数--监听页面卸载
  onUnload:function(){
    console.log('生命周期函数--监听页面卸载');
  },
  viewTap:function(){
    console.log('有人点我');
  }
})
