//app.js
var db = require('db/db.js')
App({
    db: db,
    globalData: {
      appid: '',
      openid: '', 
      userID: ''
    },
    onLaunch: async function () {
      wx.cloud.init({
        env: 'test-router',
        // traceUser: true
      })
      var res = await this.db.login();
      this.globalData.userID = res.data.userID
      console.log(this.globalData)
    },
})