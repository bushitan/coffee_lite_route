import dbFather from '../db/db_1_Route.js'
class dbSon extends dbFather {	

    getStoreInfo(){
        return new Promise((resolve,reject) =>{
            var data = {
                name: "店铺名称",
                qrUrl:"", //二维码地址
                latitude: 23.4588,
                longitude:108.459523,
                nodeList:[
                    {
                        imageUrl:"",
                        text:"",
                        step:1
                    },
                ],
            }
            resolve(data)
        })
    }
}
module.exports = dbSon