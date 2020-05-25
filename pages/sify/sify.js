// pages/sify/sify.js
Page({

  data: {
    le:[],
    currentIndex: 0,
    st:0,
    ed:0
  },
  start(e){
    this.setData({
      st:e.changedTouches[0].clientY
    })
  },
  end(e){
    this.setData({
      ed:e.changedTouches[0].clientY
    })
    if(this.data.st-this.data.ed>50){
      let currentPageIndex = this.data.currentIndex
          currentPageIndex = (currentPageIndex + 1) % 6
          this.setData({
            currentIndex: currentPageIndex
          })
    }else if(this.data.st-this.data.ed<-50){
      let currentPageIndex = this.data.currentIndex
          currentPageIndex = currentPageIndex - 1
          if(currentPageIndex < 0){
            currentPageIndex = 5
          }
          this.setData({
            currentIndex: currentPageIndex
          })
    }
  },
  fn(e){
    let str = e.currentTarget.dataset.item;
    this.setData({
      currentIndex: e.currentTarget.dataset.item
    })
  },
  onLoad: function (options) {
    let json = require(`./cate-detail.js`);
    this.setData({
      le:json,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
   
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})