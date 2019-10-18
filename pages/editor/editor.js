//index.js
//获取应用实例
const app = getApp()
const db = require("../../db/db.js")
const CreatePoster = require("../../utils/ceatePoster.js")
const coverConfig = require("../../pages/editor/coverConfig.js")

import Poster from '../../components/poster/poster';

// const posterConfig = {
    
// }
var GP 
Page({
    data: {
        shareCover: {},
        // posterConfig: "{}",
        // posterConfig: coverConfig.route,
        logo:"../../images/icon_6_addlogo.png",
        address:{
            isShow:false,
            address:"",
            latitude:"",
            longitude:"",
            name:"",
        },
        stepList :[
            { image: "../../images/store/1.jpg", text: "导航到广西电视台生活区89楼" },
            { image: "../../images/store/2.jpg", text: "别乱走动，过街!" },
            { image: "../../images/store/3.jpg", text: "就是这白色招牌" },
        ],
    },

    onLoad: function () {

        console.log(coverConfig.route)
        GP = this
        // this.getPostData()

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
        createPoster.setHeader("Seeking Coffee（鲤湾店）", "南宁市鲤湾路1号5-15号", "", "18607713629")
        createPoster.setLogo('../../images/store/logo.jpg')
        var stepList = [
            { image: "../../images/store/1.jpg", text: "导航到广西电视台生活区89号" },
            { image: "../../images/store/2.jpg", text: "别乱走动，过街!" },
            { image: "../../images/store/3.jpg", text: "就是这白色招牌" },
        ]
        createPoster.addStep(stepList)
        createPoster.setFooter()
    },



    /**
     * @method 获取表单数据
     */
    formSubmit(e) {
        // console.log(e.detail.target.dataset.type)
        // console.log(e.detail.value)
        var type = e.detail.target.dataset.type
        var value = e.detail.value
        if (this.checkEmpty(value)){
            wx.showModal({
                title: '请填写所有信息',
            })
            return 
        }

        if (type == "preview"){
            this.previewPoster(value)
        }
        if (type == "create"){

        }
    },
    /**
     * @method 检测是否为空
     */
    checkEmpty(storeInfo) {
        var stepList = this.data.stepList
        if(stepList.length==0)
            return true
        for (var i  in storeInfo){
            if (storeInfo[i] == "")
                return true
        }
        return false
    },

    /**
     * @method 预览项目 生成代码
     */
    previewPoster(storeInfo) {
        console.log(storeInfo)
        console.log(this.data.stepList)
        var stepList = this.data.stepList

        var createPoster = new CreatePoster()
        createPoster.setHeader(storeInfo.name, storeInfo.address, "", storeInfo.phone)
        createPoster.setLogo('../../images/store/logo.jpg')
        createPoster.addStep(stepList)
        createPoster.setFooter()
        var configData = createPoster.getConfigData()
        
        wx.showToast({
            title: '生成中',
        })
        this.setData({ posterConfig: configData }, () => {
            Poster.create(true);    // 入参：true为抹掉重新生成
        });
    },


    /**
     * @method 获取地址详情
     */
    setLogo(e) {
        wx.chooseImage({
            count: 1,
            sizeType: ["compressed"],
            success: function (res) {
                GP.setData({
                    logo: res.tempFilePaths[0]
                })
            },
        })
    },

    /**
     * @method 获取地址详情
     */
    getLocation(){
        wx.chooseLocation({
            success(res){
                console.log(res)
                res.isShow  = true,
                GP.setData({
                    address:res
                })
            },
        })
    },

    /**
     * @method 地址3要素的输入框
     */
    inputAddress(e){
        var value = e.detail.value
        return value
    },

    /**
     * @method 获取地址详情
     */
    stepAdd() {
        wx.chooseImage({
            count:5,
            sizeType:["compressed"],
            success: function(res) {
                console.log(res)

                var stepList = GP.data.stepList 
                var fileList = res.tempFilePaths
                for (var i = 0; i < fileList.length;i++){ // 加新的地址并入旧的
                    stepList.push({
                        image: fileList[i],
                        text:"",
                    })
                }
                GP.setData({
                    stepList: stepList
                })
            },
        })
    },

    /**
     * @method 删除
     */
    stepDelete(e){
        var stepIndex = e.currentTarget.dataset.stepindex
        console.log(stepIndex)
        var stepList = this.data.stepList
        stepList.splice(stepIndex,1)
        this.setData({
            stepList: stepList
        })
        
    },


    /**
     * @method 输入文字内容
     */
    inputText(e) {
        var stepIndex = e.currentTarget.dataset.stepindex
        var stepList = this.data.stepList
        stepList[stepIndex].text = e.detail.value
        this.setData({
            stepList: stepList
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
    },
    onShareAppMessage(){
        return {
            title: "探店小地图带你找店店",
            path: '/pages/route/route',
            imageUrl:"../../images/share.jpg",
            
        }
    },
})



