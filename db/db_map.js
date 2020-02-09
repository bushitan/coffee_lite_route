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

    // 登录
    login() {
      return new Promise((resolve, reject) => {
        wx.showLoading({ title: "加载中" })
        wx.cloud.callFunction({
          name: 'login',
          success: res => {
            wx.hideLoading()
            resolve(res.result)
          },
          fail: res => {
            wx.hideLoading()
            reject(res.result)
          },
        })
      })
    }

    // 获取地图信息
    mapGet(obj) {
        return new Promise((resolve, reject) => {
            wx.showLoading({ title: "加载中" })
            wx.cloud.callFunction({
                name: 'map_get',
                data: obj,
                success: res => {
                  wx.hideLoading()
                  console.log(res.result)
                  resolve(res.result)
                },
                fail: res => {
                  wx.hideLoading()
                  console.log(res)
                  reject(res.result)
                },
            })
        })
    }

    // 添加地图信息
    mapAdd(obj) {
      return new Promise((resolve, reject) => {
        wx.showLoading({ title: "生成中" })
        wx.cloud.callFunction({
          name: 'map_add',
          data: obj,
          success: res => {
            wx.hideLoading()
            console.log(res.result)
            resolve(res.result)
          },
          fail: res => {
            wx.hideLoading()
            console.log(res)
            reject(res.result)
          },
        })
      })
    }

    // 获取地图列表
    mapGetList(obj) {
      return new Promise((resolve, reject) => {
        wx.showLoading({ title: "加载中" })
        wx.cloud.callFunction({
          name: 'map_get_list',
          data: obj,
          success: res => {
            wx.hideLoading()
            console.log(res.result)
            resolve(res.result)
          },
          fail: res => {
            wx.hideLoading()
            console.log(res)
            reject(res.result)
          },
        })
      })
    }

    // 添加用户访问记录
  visitAdd(obj) {
    return new Promise((resolve, reject) => {
      wx.cloud.callFunction({
        name: 'visit_add',
        data: obj,
        success: res => {
          console.log(res.result)
          resolve(res.result)
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
        return new Promise((resolve, reject) => {
            // var data = {}
            // resolve(data)
            wx.showLoading({ title: "图片上传中" })
            wx.cloud.uploadFile({
                cloudPath: obj.cloudPath,
                filePath: obj.filePath,
                success: res => {
                  wx.hideLoading()
                  resolve(res.fileID)
                  wx.showToast({
                    title: '上传完成',
                    icon: 'success',
                    duration: 2000
                  })
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
    // 下载图片
    downloadImage(obj) {
      return new Promise((resolve, reject) => {
        wx.showLoading({ title: "图片下载至相册中" })
        wx.cloud.downloadFile({
          fileID: obj.imgUrl,
          success: res => {
            // get temp file path
            console.log(res.tempFilePath)
            wx.hideLoading()
            wx.saveImageToPhotosAlbum({
              filePath: res.tempFilePath,
              success(res) { 
                console.log(res)
                resolve(res)
                wx.showToast({
                  title: '下载完成',
                  icon: 'success',
                  duration: 2000
                })
              }
            })
          },
          fail: err => {
            // handle error
            console.error('[下载文件] 失败：', err)
            wx.showToast({
              icon: 'none',
              title: '下载失败请重试',
            })
          },
          complete: () => {
            wx.hideLoading()
          }
        })
      })
    }
}

module.exports = dbSon