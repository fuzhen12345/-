// pages/nice/nice2/nice2.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    arr:[],
    idx:"",
    text:[],
    t:"",
    num:0,
    isFlag:[true, false, false],
    numcart:1
  },
  add(e){
    let numcart = this.data.numcart
    ++numcart
    this.setData({
      numcart
    })
  },
  gwc(e){
    let carts = wx.getStorageSync('carts')||[];
    let arr = this.data.arr;
    let idx = this.data.idx;
    let index = carts.findIndex((v,i)=>{return v.id === idx})
    if(index == -1){
      let cart = {
      id: arr[idx].id,
      num:this.data.numcart,
      checked:true,
      data:arr[idx]
      }
      carts.push(cart);
      this.setData({
        num:cart.num
      })
    }else{
      carts[index].num = carts[index].num+this.data.numcart;
      this.setData({
        num:carts[index].num 
      })
      wx.showToast({
        title: '加入成功！', // 标题
        icon: 'success',  // 图标类型，默认success
        duration: 1000  // 提示窗停留时间，默认1500ms
      })
    }
    wx.setStorageSync('carts', carts)
    console.log(carts)
  },
  fn(e){
    let str = e.currentTarget.dataset.item;
    let flag = this.data.isFlag.map((e,i)=>{
        if(i==str){
          e = true
        }else{
          e = false
        }
        return e
      })
    this.setData({
      isFlag:flag,
      t:this.data.text[str]
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let json = require(`./details-data.js`);
    let text = [
        `这是${json[options.a].title}商品`,
        `${json[options.a].parameter}`,
        `一经售出不退货`
    ];
    this.setData({
      arr:json,
      idx:options.a,
      text,
      
      t:text[0],
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
    let cars = wx.getStorageSync('carts')
    let idx = this.data.idx;
    
    let index = cars.findIndex((v,i)=>{return v.id === idx})
    if(index != -1){
      let num = cars[index].num;
      this.setData({
        num
      })
    }
    
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