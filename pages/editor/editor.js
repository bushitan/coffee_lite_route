//index.js
//获取应用实例
const app = getApp()
const db = require("../../db/db.js")
const createPoster = require("../../utils/ceatePoster.js")
const coverConfig = require("../../pages/editor/coverConfig.js")

// import Poster from '../../components/poster/poster';

// const posterConfig = {
    
// }

Page({
    data: {
        shareCover: {},
        // posterConfig: "{}",
        // posterConfig: coverConfig.route,
    },

    onLoad: function () {

        console.log(coverConfig.route)

        this.getPostData()

        this.setData({
            // posterConfig: posterData,
            shareCover: {
                // shareImage: share_image,
                // userQR: user_qr,
                slugImage: '../../images/cavasn_slug.jpg'
            }
        })
    },

    /**
     * @method 获取海报数据
     */
    getPostData(){
        this.process()
        var configData = createPoster.getConfigData()
        // var configData = coverConfig.route //完整海报
        console.log(configData)
        this.setData({
            posterConfig: configData,
        })
    },

    // 加工
    process() {
        createPoster.setHeader("Seeking （金湖店）", "金湖广场6号", "魏先生", "15277126678")
        createPoster.setLogo('../../images/painter/qr.png')
        var stepList = [
            { image: "../../images/painter/step.jpg", text: "看到织真1织爱,走到尽头右拐走到尽头右" },
            { image: "../../images/painter/step.jpg", text: "看到织真2织爱,走到尽头右拐走到尽头右" },
            { image: "../../images/painter/step.jpg", text: "看到织真3织爱,走到尽头右拐走到尽头右" },
        ]
        createPoster.addStep(stepList)
        createPoster.setFooter()
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



