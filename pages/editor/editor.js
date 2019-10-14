//index.js
//获取应用实例
const app = getApp()
const db = require("../../db/db.js")
const coverConfig = require("../../pages/editor/coverConfig.js")

// import Poster from '../../components/poster/poster';

// const posterConfig = {
    
// }

Page({
    data: {
        shareCover:{},
        posterConfig: coverConfig.route,
    },

    onLoad: function () {

        console.log(coverConfig.jdConfig)
        this.setData({
            shareCover: {
                // shareImage: share_image,
                // userQR: user_qr,
                slugImage: '../../images/cavasn_slug.jpg'
            }
        })
    },

    /**
     * @method 获取地址详情
     */
    getLocation(){
        wx.chooseLocation({
            success(res){
                console.log(res)
            },
        })
    },
    

    /**
     * @method 获取地址详情
     */
    add() {
        wx.chooseImage({
            count:1,
            sizeType:["compressed"],
            success: function(res) {},
        })
    },

    /**
      * @method 预览
      */
    preview() {
        wx.previewImage({
            urls: ['/images/temp_all.jpg'],
        })

    },

    /**
      * @method 生成
      */
    make() {
        wx.previewImage({
            urls: ['/images/temp_all.jpg'],
        })
    },

    onPosterSuccess(e) {
        const { detail } = e;
        wx.previewImage({
            current: detail,
            urls: [detail]
        })
    }
})



