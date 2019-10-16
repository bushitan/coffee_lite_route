
/**
 * 生成导航图的配置代码
 */

class CreatePoster{
    config = {}   // 配置表
    stepList = [] // 步骤列表
    constructor(){
        this.config = {
            width: 690,
            // height: 1355 + 100, // 初始化不设置高度
            debug: false,
            pixelRatio: 1,
            blocks: [],
            texts: [],
            images: [],
        }
    }

    // // 设置背景色
    // setBackGround() {
    //     this.config.blocks.push({  //背景色
    //         width: 690,
    //         height: 3000,
    //         x: 0,
    //         y: 200,
    //         backgroundColor: 'rgba(254,248,237,1)',
    //         // opacity: 0.5,
    //         zIndex: -100,
    //     })
    // }
    // 设置头
    setLogo(url){
        this.config.images.push({   //二维码
            width: 117,
            height: 117,
            x: 139,
            y: 343,
            borderRadius: 117,
            url: url,

            zIndex: 400,
        })
    }

    setHeader(name,address,hostName,phone){
        this.config.images.push({  //头图
            width: 690,
            height: 905,
            x: 0,
            y: 0,
            url: '../../images/painter/header.png',
        })
        this.config.texts.push({  //店名
            x: 345,
            y: 697,
            baseLine: 'middle',
            textAlign: 'center',
            text: name,
            fontSize: 36,
            color: '#ffffff',
            zIndex: 400,
        })
        this.config.texts.push({  // 地址
            x: 106,
            y: 777,
            baseLine: 'middle',
            text: address,
            fontSize: 24,
            color: '#ffffff',
            zIndex: 300,
        },)
        this.config.texts.push(
        {  // 电话
            x: 106,
            y: 828,
            baseLine: 'middle',
            text: hostName + "  " + phone,
            fontSize: 24,
            color: '#ffffff',
            zIndex: 300,
        })        
    }
    
    setFooter(){
        //  4 底端 y轴 905 + 474*n + 75     , 高度 300
        //  5 画面高度 905 + 474*n + 75 + 300

        var n = this.stepList.length
        
        // 设置footer
        this.config.images.push({   //底部
            width: 690,
            height: 300,
            x: 0,
            y: 905 + 474 * n + 75,
            borderRadius: 25,
            url: '../../images/painter/footer.png',
        },)

        // 设置画面高度
        this.config.height = 905 + 474 * n + 75 + 300

        // 设置背景色
        this.config.blocks.push({  //背景色
            width: 690,
            height: this.config.height - 300,
            x: 0,
            y: 200,
            backgroundColor: 'rgba(254,248,237,1)',
            // opacity: 0.5,
            zIndex: -100,
        })
    }
    addStep(stepList){
        this.stepList = stepList
        //  1 header的 y 0       ,    基础高度  905px
        //  2 每个step y 905 + 474*(n  - 1)   ,高度  474
        //  3 末节线段y 905 + 474*n   ,  高度 75
        //  4 底端 y轴 905 + 474*n + 75     , 高度 300
        //  5 画面高度 905 + 474*n + 75 + 300
        // for (var i in stepList)
        // this.addNode(i,image,text )
        // debugger
        for ( var i = 0 ;i < stepList.length  ; i++){
            var step = stepList[i]
            this.add(i + 1, step.image, step.text)
            console.log(step)
        }
            

        // this.addNode11()
    }
    add(index ,image ,text){
        // 基础配置高度
        var baseH = 905 + 474 * (index - 1)

        console.log(baseH)
        this.config.blocks.push({ //时间轴竖线                     
            width: 3,
            height: 1355 - 906 + 100,
            x: 75,
            y: baseH,
            backgroundColor: '#624424',
            zIndex: 100,
        })
        this.config.blocks.push({   //圆圈           
            width: 50,
            height: 50,
            x: 52,
            y: baseH + 424,
            borderRadius: 50,
            backgroundColor: '#EBA22E',
            zIndex: 200,
        })
        this.config.texts.push({  // 步骤数字 1
            x: 77,
            y: baseH + 449,
            baseLine: 'middle',
            textAlign: 'center',
            text: index,
            fontSize: 34,
            color: '#49290C',
            zIndex: 300,
        })
        this.config.texts.push({  // 步骤内容
            x: 127,
            y: baseH + 449,
            baseLine: 'middle',
            text: text,
            fontSize: 26,
            color: '#49290C',
            zIndex: 300,
        })

        this.config.images.push({   //底图
            width: 464,
            height: 342,
            x: 124,
            y: baseH + 63,
            url: '../../images/painter/photo_bg.png',
        })

        this.config.images.push({   //照片
            width: 427,
            height: 308,
            x: 131,
            y: baseH + 89,
            borderRadius: 25,
            url: image,
        })
    }





    addNode11() {
        // this.config.blocks.push({ //时间轴竖线                     
        //     width: 3,
        //     height: 1355 - 906 + 100,
        //     x: 75,
        //     y: 906,
        //     backgroundColor: '#624424',
        //     zIndex: 100,
        // })
        // this.config.blocks.push({   //圆圈           
        //     width: 50,
        //     height: 50,
        //     x: 52,
        //     y: 1330,
        //     borderRadius: 50,
        //     backgroundColor: '#EBA22E',
        //     zIndex: 200,
        // })

        // this.config.texts.push({  // 步骤数字 1
        //     x: 77,
        //     y: 1355,
        //     baseLine: 'middle',
        //     textAlign: 'center',
        //     text: '8',
        //     fontSize: 34,
        //     color: '#49290C',
        //     zIndex: 300,
        // },)
            
        // this.config.texts.push({  // 步骤内容
        //     x: 127,
        //     y: 1355,
        //     baseLine: 'middle',
        //     text: '看到织真织爱,走到尽头右拐走到尽头右',
        //     fontSize: 26,
        //     color: '#49290C',
        //     zIndex: 300,
        // })

        // this.config.texts.push()
        // this.config.images.push({   //底图
        //     width: 464,
        //     height: 342,
        //     x: 124,
        //     y: 969,
        //     url: '../../images/painter/photo_bg.png',
        // })

        // this.config.images.push({   //照片
        //     width: 427,
        //     height: 308,
        //     x: 131,
        //     y: 995,
        //     borderRadius: 25,
        //     url: '../../images/painter/step.jpg',
        // })
        
            
            
    }


    /**
     * @method 获取最后的配置结果
     */
    getConfigData(){
        return this.config
    }
}

module.exports = new CreatePoster()
