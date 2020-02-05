
class QRCup {
    config = {}   // 配置表
    stepList = [] // 步骤列表
    constructor() {
        this.config = {
            width: 690,
            height: 1355 + 100, // 初始化不设置高度
            backgroundColor:"#ffffff",
            debug: true,
            pixelRatio: 1,
            blocks: [],
            texts: [],
            images: [{  //头图
                width: 690,
                height: 905,
                x: 0,
                y: 0,
                url: '../../images/painter/header.png',
            }],
        }
    }
    /**
     * @method 获取最后的配置结果
     */
    getConfigData() {
        return this.config
    }


    /**
     * @method 设置8张的正面
     */
    setFrontN8() {

    }
    /**
     * @method 设置8张的反面
     * param
     *  logo
     *  qr  客服二维码
     *  name  店铺名称
     *  add 地址
     *  tel 电话
     */
    setBackN8() {
        var name = "Seeking"
        var add = "ADD:金平区金墩园6栋北座106"
        var tel = "TEL: 13592881703"
        // logo
        this.config.images.push({ x: 0, y: 0, width: 200, height: 200, url: '../../images/wm/logo.png', })
        // qr
        this.config.images.push({ x: 200, y: 200, width: 200, height: 200, url: '../../images/wm/qr.png', }) 
        //  店铺名称
        this.config.texts.push({
            baseLine: 'middle', textAlign: 'left', color: '#324ffb', zIndex: 400,
             x: 345, y: 397, text: name,fontSize: 36
        })
        // add 地址
        this.config.texts.push({
            baseLine: 'middle', textAlign: 'left', color: '#324ffb', zIndex: 400,
            x: 345, y: 497, text: add, fontSize: 36
        })
        //  tel 电话
        this.config.texts.push({
            baseLine: 'middle', textAlign: 'left', color: '#324ffb', zIndex: 400,
            x: 345, y: 597, text: tel, fontSize: 36
        })
    }


}

module.exports =  QRCup