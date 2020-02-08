//index.js
//获取应用实例
const app = getApp()
const db = require("../../db/db.js")

Page({
    data: {
        historyList:[
          {
            _id: 1,
            name: '金咖啡',
            createdTime: '2020-02-02'
          },
          {
            _id: 2,
            name: '蓝山咖啡',
            createdTime: '2020-02-12'
          },
        ]
    },

    onLoad: function () {

    },

    toPage(e) {
      console.log(e)
      var id = e.currentTarget.dataset.id
      wx.navigateTo({
        url: '/pages/historyDetail/historyDetail?id=' + id,
      })
    }
    
})
