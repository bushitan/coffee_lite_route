//app.js
var db = require('db/db.js')
App({
    db: db,
    onLaunch: function () {
      wx.cloud.init({
        env: 'test-router'
      })
    },
})