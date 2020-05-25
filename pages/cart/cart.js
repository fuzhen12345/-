// pages/cart/cart.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    arr:[],
    // flag:[],
    price:0,
    quan:true
  },
 
  del(e){
    let idx = e.currentTarget.dataset.idx;
    let arr = this.data.arr;
    arr.splice(idx,1);
    this.setData({
      arr,
      price:this.fvp(),
    })
    wx.setStorageSync('carts', arr)
  },
  btn(e){
    let index = e.currentTarget.dataset.id;
    let price = 0;
    let arr = this.data.arr.map(e => {
      if(e.id == index){
        e.checked =!e.checked
      }
      return e
    })
    this.data.arr.forEach(e=>{
      if(e.checked){
        price += (+e.data.price)*e.num.toFixed(2)
      }
    })
    let quan = arr.every(e => e.checked)
    price = price.toFixed(2)
    this.setData({
      arr,quan,
      price,
    })
    wx.setStorageSync('carts', this.data.arr)
  },
  quan(){
      let price = 0;
      let flag = this.data.quan;
      let arr = this.data.arr;
      flag = !flag;
          arr = arr.map(e => {
            if(!e.checked){
              price += (+e.data.price)*e.num.toFixed(2)
            }
          e.checked = flag;
          return e
        })
        price = price.toFixed(2)
      this.setData({
        price,
        arr,
        quan:flag,
      })
      wx.setStorageSync('carts', this.data.arr)
  },
  jie(e){
    let that = this;
    let index = e.currentTarget.dataset.id;
    let carts = this.data.arr;
    if(carts[index].num<=1){
      wx.showModal({
        content:"确定删除商品吗?",
        success:(res)=>{
          if(res.confirm){
            carts.splice(index,1);
            that.setData({
              price:this.fvp(),
              arr:carts
            })
            wx.setStorageSync('carts', carts)
          }else{
            return
          }
        }
      })
    }else{
      carts[index].num--
    }
    this.setData({
      price:this.fvp(),
      arr:carts
    })  
    wx.setStorageSync('carts', carts)
  },
  fvp(){
    let price = 0;
    let arr = this.data.arr;
    arr.forEach(e=>{
      price += (+e.data.price)*e.num.toFixed(2)
    })
    price = price.toFixed(2)
    return price
  },
  add(e){
    let index = e.currentTarget.dataset.id;
    let num = `arr[${index}].num`;
    this.setData({
      price:this.fvp(),
      [num]:++this.data.arr[index].num
    })  
    wx.setStorageSync('carts', this.data.arr)
  },
  onLoad: function (options) {
    let arr = wx.getStorageSync('carts');
    let quan = arr.every(e => e.checked)
     this.setData({
      arr,quan,
      price:this.fvp(),
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.onLoad()
    this.setData({
      price:this.fvp()
    })
  },
})