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

        // 地图坐标
        mapMarkers: [
          // {
          //   iconPath: "/images/icon_6_mark.png",
          //   _id: 0,
          //   latitude: 23.099994,
          //   longitude: 113.324520,
          //   width: 50,
          //   height: 50,
          //   callout:{
          //       content:"seeking咖啡(金湖店)",
          //       color:"#ffffff",
          //       bgColor:"#512B0D",
          //       fontSize:"13",
          //       borderRadius:"5",
          //       padding:"10",
          //       display:"ALWAYS",
          //   },
          // }
        ],
        route:{
            // iconPath: "/images/icon_6_mark.png",
            // _id: 0,
            // latitude: 23.099994,
            // longitude: 113.324520,
            // name: "seeking咖啡(123金湖店)",
            // address: "南宁金湖广场",
            // imageUrl: "/images/all.jpg",
        },
        routeHeight: STATUS_BOTTOM.routeHeight,
        iconArrow: STATUS_BOTTOM.iconArrow,
        isUserVisit: false,
        type: -1 // 1获取我创建的，2  获取我浏览的
    },

    onLoad: function (options) {
        this.onInit(options)
    },

    async onInit(options){
      console.log(options)
      // 如果非扫码进入(商家)，显示制作步骤
      // 如果扫码进入（用户），显示该店信息
      if (options && options.hasOwnProperty("mapID")) {
        this.setData({
          isUserVisit: true,
          type: 2
        })
        // obj._id = decodeURIComponent(options.scene) 
        var result = await app.db.mapGet({ _id: options.mapID })
        var marker = this.getMarkers(result.data)
        var router = this.getRoute(result.data)
        console.log('marker', marker)
        console.log('router', router)
        this.setData({
          mapMarkers: marker,
          route: router,
        })
        console.log('route',this.data.route)
        console.log('mapMarkers',this.data.mapMarkers)

        var visit = await app.db.visitAdd({
          mapID: this.data.route._id,
          name: this.data.route.name,
          imageUrl: this.data.route.imageUrl
        })
      } else {
        this.setData({
          isUserVisit: false,
          type: 1
        })
        db.getRoute().then(res => {
          var route = res.data.route
          this.setData({
            mapMarkers: this.getMarkers(route),
            route: route,
          })
          console.log('route', this.data.route)
          console.log('mapMarkers', this.data.mapMarkers)
        })
      }
    },

    /**
     * @method 基础属性拼接成地图坐标点
     */
    getMarkers(marker){
      return [{
        iconPath: "/images/icon_6_mark.png",
        _id: marker._id,
        latitude: parseFloat(marker.latitude),
        longitude: parseFloat(marker.longitude),
        width: 50,
        height: 50,
        callout: {
            content: marker.name,
            color: "#ffffff",
            bgColor: "#512B0D",
            fontSize: "13",
            borderRadius: "5",
            padding: "10",
            display: "ALWAYS",
        },
      }]
    },

    getRoute(route) {
      return {
        iconPath: "/images/icon_6_mark.png",
        _id: route._id,
        latitude: route.latitude,
        longitude: route.longitude,
        name: route.name,
        address: route.address,
        imageUrl: route.imageUrl
      }
    },

    /**
     * @打开地图导航
     */
    toMapRoute() {
        var route = this.data.route
        wx.openLocation({
            latitude: route.latitude,
            longitude: route.longitude,
            name: route.name,
            address: route.address  ,
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

        return 

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
     * @method 根据type值 跳转到 制作记录 或是 浏览记录
     */
    toHistory(){
        wx.navigateTo({
            url: '/pages/history/history?type=' + this.data.type,
        })
    },

    touchstart(e){
        console.log(e)
    },
    onShareAppMessage(){},
})
