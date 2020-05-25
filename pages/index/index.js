const app = getApp()

Page({
  data: {
    arr:[]
  },
  //事件处理函数
  bindViewTap: function() {
  },
  onLoad: function () {
    let json = require(`./newest.js`);
    this.setData({
      arr:json.newest
    })
  },
  getUserInfo: function(e) {
    
  }
})
