//index.js
//获取应用实例
const app = getApp()
const db = require("../../db/db.js")

var STATUS_MODE_BOTTOM = 1
var STATUS_MODE_TOP = 2
var STATUS_BOTTOM = {
    mapHeight: "calc(100vh - 40px - 140px)",
    routeHeight:"140px",
    iconArrow: "/images/icon_2_top.png",
}
var STATUS_TOP = {
    mapHeight: "calc(100vh - 40px - 70vh)",
    routeHeight: "70vh",
    iconArrow: "/images/icon_1_bottom.png",
}
Page({
    data: {
        // mapHeight: STATUS_BOTTOM.mapHeight,
        statusMode: STATUS_MODE_BOTTOM,
        mapHeight: STATUS_BOTTOM.mapHeight,
        mapMarkers: [{
            iconPath: "/images/icon_6_mark.png",
            id: 0,
            lagitude: 23.099994,
            longitude: 113.324520,
            width: 50,
            height: 50,
            callout:{
                content:"seeking咖啡(金湖店)",
                color:"#ffffff",
                bgColor:"#512B0D",
                fontSize:"13",
                borderRadius:"5",
                padding:"10",
                display:"ALWAYS",
            },
        }],
        routeHeight: STATUS_BOTTOM.routeHeight,
        iconArrow: STATUS_BOTTOM.iconArrow,
    },

    onLoad: function (options) {
        this.onInit(options)
        // wx.redirectTo({
        //     url: '/pages/editor/editor',
        // })
    },

    onInit(options){
        // 获取路由的id
        var routeID = 1
        if(options.hasOwnProperty('scene')) 
            routeID = decodeURIComponent(options.scene) 

        db.userLogin().then(res=>{
            if ( res.code == db.CODE_LOGIN_SUCCESS){
                    wx.redirectTo({
                        url: '/pages/index/index?routeID=' + routeID,
                    })
            }
            console.log(res)
        }).catch(res=>{

        })
    },










    /**
     * @打开地图导航
     */
    toMapRoute() {
        wx.openLocation({
            latitude: 23.099994,
            longitude: 113.324520,
            name: "seeking（金湖店）",
            address: "南宁金湖广场",
            scale: 18
        })
    },

    /**
     * @制作
     */
    toEditor() {
        wx.navigateTo({
            url: '/pages/editor/editor',
        })
    },

    /**
     * @method 切换地图高度的按钮
     */
    switchArrow(){
        var mode ,option 
        if (this.data.statusMode == STATUS_MODE_BOTTOM){
            mode = STATUS_MODE_TOP
            option = STATUS_TOP
        } else{
            mode = STATUS_MODE_BOTTOM
            option = STATUS_BOTTOM
        }
        this.setData({
            statusMode: mode,
            mapHeight: option.mapHeight,
            routeHeight: option.routeHeight,
            iconArrow: option.iconArrow,
        })
    },

    /**
     * @method 查看实景导航图
     */
    preRouteImage(e){
        wx.previewImage({
            urls: ["/images/temp_all.jpg"],
        })
    },

    /**
     * @method 跳转到历史记录
     */
    toHistory(){
        wx.navigateTo({
            url: '/pages/history/history',
        })
    },

    touchstart(e){
        console.log(e)
    },
    onShareAppMessage(){},
})
