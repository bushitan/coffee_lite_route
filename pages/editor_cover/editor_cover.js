//index.js
//获取应用实例
const app = getApp()
const db = require("../../db/db.js")
const QRCup = require("../../utils/qr_cup.js")

import Poster from '../../components/poster/poster';

// const posterConfig = {
    
// }
var GP 
Page({
    data: {
    },

    onLoad: function () {
        GP = this
        this.clickBtn()
    },  


    clickBtn(){

        var qrCup = new QRCup()   
        qrCup.setBackN8()
        var data = qrCup.getConfigData()


        console.log(data)
        wx.showToast({
            title: '生成中',
        })
        this.setData({ posterConfig: data }, () => {
            Poster.create(true);    // 入参：true为抹掉重新生成
        });
    },

    onPosterSuccess(e) {
        const { detail } = e;
        console.log(e)
        wx.previewImage({
            current: detail,
            urls: [detail]
        })
    },

})



