var app = getApp();
Page({
    data:{
        contentText:"这是第二个页面"
    },
    onLoad: function () {
    console.log('第二个页面加载 --- onLoad')
    },
    onShow : function(){
        console.log('第二个页面显示 --- onLoad')
    }
});

