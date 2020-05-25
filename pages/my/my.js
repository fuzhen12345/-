// pages/my/my.js
Page({
  data: {
    // 用来存储个人信息
    userInfo: "",
    usemessage:{}
  },
  // button点击事件
  fn(e){
    let userInfo = e.detail.userInfo;
    this.setData({
      userInfo
    })
    wx.setStorageSync("userInfo", userInfo)
  },
  get(e){
    let that = this;
    wx.chooseAddress({
    success:function(res){
        console.log(res)
        let usemessage = res;
        that.setData({
          usemessage
        })
        wx.setStorageSync('usemessage', usemessage)
      }
    })
  },
  xiu(){
    let that = this;
    wx.chooseAddress({
    success:function(res){
        console.log(res)
        let usemessage = res;
        that.setData({
          usemessage
        })
        wx.setStorageSync('usemessage', usemessage)
      }
    })
  },
  
  onLoad: function (options) {
    let usemessage = wx.getStorageSync('usemessage')
    this.setData({
      usemessage
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
    let userInfo = wx.getStorageSync("userInfo");
    this.setData({
      userInfo
    })
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