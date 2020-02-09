import dbFather from '../db/dbBase.js'
class dbSon extends dbFather {	
    constructor() {
        super()
    }

    /**
     * @method 1 用户登录
         @return
            code:1
            msg:"上传成功"
            data:
            routeID:1 路径id
     */
    userLogin(){
        return new Promise( (resolve,reject) =>{     
            var that = this        
            wx.login({
                success(res) { 
                    var session = "aswewe"
                    wx.setStorageSync(that.KEY_SESSION, session)
                    resolve({
                        code: that.CODE_LOGIN_SUCCESS,
                        data: {
                            session: session,
                            code: res.code,
                        }
                    })
                    // this.baseURL("","POST",{}).then(res=>{
                    // }).catch(res=>{
                    // })
                },
                fail(res) { 
                    
                }
            })          
        })
    }

    /**
     * @method 2 获取导航二维码
     */
    getLiteQR() {
        return new Promise((resolve, reject) => {
            resolve({
                code: this.CODE_SUCCESS,
                data: {
                    qrUrl: "/images/icon_6_mark.png",                        
                }
            })
            // this.baseURL("","POST",{}).then(res=>{

            // }).catch(res=>{

            // })
        })
    }

    /**
     *  @method 2 设置地点
        @param 
            obj 表单
                logo 
                name
                phone
                address
                lantitude
                longtitude
                route_url 合成后的路径图
        @return 
            code:1
            msg:"上传成功"
            routeID:1 路径id
    */
    setRoute(obj) {
        return new Promise((resolve, reject) => {
            // this.baseURL("", "POST", {}).then(res => {

            // }).catch(res => {

            // })
        })
    }

    /**
    * @method 3 获取地点
    */
    getRoute(route_id) {
        var that = this
        return new Promise((resolve, reject) => {
            
            resolve({
                code: that.CODE_SUCCESS,
                data: {
                    route: {
                        iconPath: "/images/icon_6_mark.png",
                        _id: 0,
                        latitude: 23.099994,
                        longitude: 113.324520,
                        name: "seeking咖啡(123金湖店)",
                        imageUrl: "/images/all.jpg",
                    },
                }
            })


            // this.baseURL("", "POST", {}).then(res => {

            // }).catch(res => {

            // })
        })
    }

    /**
    * @method 5 获取制作记录
    */
    getRouteList() {
        return new Promise((resolve, reject) => {
            // this.baseURL("", "POST", {}).then(res => {

            // }).catch(res => {

            // })
        })
    }



}
module.exports = dbSon