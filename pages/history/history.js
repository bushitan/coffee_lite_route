//index.js
//获取应用实例
const app = getApp()
const db = require("../../db/db.js")

Page({
    data: {
        historyList:[],
        type: -1
    },

    onLoad: function (options) {
      this.onInit(options)
    },

    async onInit(options) {
      console.log(parseInt(options.type))
      this.setData({
        type: parseInt(options.type)
      })
      var result = await app.db.mapGetList({ type: this.data.type })
      this.setData({
        historyList: result.data
      })
    },

    toPage(e) {
      console.log(e)
      var id = e.currentTarget.dataset.id
      wx.navigateTo({
        url: `/pages/historyDetail/historyDetail?id=${id}&type=${this.data.type}`
      })
    }
    
})
