// pages/din/din.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    usemessage:{},
    carts:[],
    moeny:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let usemessage = wx.getStorageSync('usemessage');
    let carts = wx.getStorageSync('carts');
    let moeny = 0;
    carts = carts.filter(e=>{
      return e.checked == true
    })
    carts.forEach(e=>{
      moeny += (+e.num)*(+e.data.price);
    })
  
    console.log(carts)
    this.setData({
      usemessage,carts,
      moeny:moeny.toFixed(2)
    })

  },
btn(){
  wx.showToast({
    title: '该功能未上线！',
    icon: 'none',
    duration: 1500
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