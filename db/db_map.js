import dbFather from '../db/db_1_Route.js'
class dbSon extends dbFather {	

    // getStoreInfo(){
    //     return new Promise((resolve,reject) =>{
    //         var data = {
    //             name: "店铺名称",
    //             qrUrl:"", //二维码地址
    //             latitude: 23.4588,
    //             longitude:108.459523,
    //             nodeList:[
    //                 {
    //                     imageUrl:"",
    //                     text:"",
    //                     step:1
    //                 },
    //             ],
    //         }
    //         resolve(data)
    //     })
    // }



    // 获取地图信息
    mapGet(obj) {
        return new Promise((reslove, reject) => {
            wx.showLoading({ title: "删除中" })
            wx.cloud.callFunction({
                name: 'map_get',
                data: obj,
                success: res => {
                    wx.hideLoading()
                    console.log(res.result)
                    reslove(res.result)
                },
                fail: res => {
                    console.log(res)
                    reject(res.result)
                },
            })
        })
    }



    /**********综合模块**********/
    // 上传图片
    uploadImage(obj) {
        return new Promise((reslove, reject) => {
            // var data = {}
            // reslove(data)
            wx.showLoading({ title: "图片上传中" })
            wx.cloud.uploadFile({
                cloudPath: obj.cloudPath,
                filePath: obj.filePath,
                success: res => {
                    wx.hideLoading()
                    reslove(res.fileID)
                },
                fail: e => {
                    console.error('[上传文件] 失败：', e)
                    wx.showToast({
                        icon: 'none',
                        title: '上传失败请重试',
                    })
                    // reject()
                },
                complete: () => {
                    wx.hideLoading()
                }
            })
        })
    }
    
}

module.exports = dbSon