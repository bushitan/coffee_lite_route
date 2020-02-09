// pages/historyDetail/historyDetail.js
//获取应用实例
const app = getApp()
const db = require("../../db/db.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    form: {},
    type: -1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    console.log(options.id)
    this.onInit(options)
  },

  async onInit(options){
    // 获取制作记录详情
    if ( options.type == 1 ) {
      this.setData({
        type: 1
      })
      var result = await app.db.mapGet({ _id: options.id })
      this.setData({
        form: result.data
      })
      console.log(this.data.form)
    }
    // 获取浏览记录详情
    if (options.type == 2 ) {

    }
  },

  async downloadImg() {
    var obj = {}
    obj.imgUrl = this.data.form.imageUrl
    var result = await app.db.downloadImage(obj)
  },

  async downloadCode() {
    var obj = {}
    obj.imgUrl = this.data.form.qrUrl
    var result = await app.db.downloadImage(obj)
  },

  /**
    * @method 查看实景导航图
    */
  preRouteImage(e) {
    wx.previewImage({
      urls: ["/images/temp_all.jpg"],
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