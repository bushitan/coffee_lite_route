

var coverConfig = {
    route:{
        width: 690,
        height: 1355 + 100, //3613
        // backgroundColor: '#fff',
        debug: false,
        pixelRatio: 1,
        blocks: [
            // {
            //     width: 690,
            //     height: 808,
            //     x: 30,
            //     y: 183,
            //     borderWidth: 2,
            //     borderColor: '#f0c2a0',
            //     borderRadius: 20,
            // },
            {  //背景色
                width: 690,
                height: 1355 + 100 - 100,
                x: 0,
                y: 200,
                backgroundColor: 'rgba(254,248,237,1)',
                // opacity: 0.5,
                zIndex: -100,
            },
            {   //时间轴竖线
                width: 3,
                height: 1355 - 906 + 100,
                x: 75,
                y: 906,
                backgroundColor: '#624424',
                zIndex: 100,
            },
            {   //圆圈
                width: 50,
                height: 50,
                x: 52,
                y: 1330,
                borderRadius: 50,
                backgroundColor: '#EBA22E',
                zIndex: 200,
            },
        ],
        texts: [
            {  //店名
                x: 345,
                y: 697,
                baseLine: 'middle',
                textAlign:'center',
                text: 'Seeking Coffee/金湖店',
                fontSize: 36,
                color: '#ffffff',
            },
            {  // 地址
                x: 106,
                y: 777,
                baseLine: 'middle',
                text: '南宁市金湖路21号',
                fontSize: 24 ,
                color: '#ffffff',
                zIndex: 300,
            },
            {  // 电话
                x: 106,
                y: 828,
                baseLine: 'middle',
                text: '韦先生 18778078857',
                fontSize: 24,
                color: '#ffffff',
                zIndex: 300,
            },

            {  // 步骤数字 1
                x: 77,
                y: 1355,
                baseLine: 'middle',
                textAlign: 'center',
                text: '8',
                fontSize: 34,
                color: '#49290C',
                zIndex: 300,
            },
            {  // 步骤内容
                x: 127,
                y: 1355,
                baseLine: 'middle',
                text: '看到织真织爱,走到尽头右拐走到尽头右',
                fontSize: 26,
                color: '#49290C',
                zIndex: 300,
            },

        ],
        images: [
            {  //头图
                width: 690,
                height: 905,
                x: 0,
                y: 0,
                url: '../../images/painter/header.png',
            },
            {   //二维码
                width: 117,
                height: 117,
                x: 139,
                y: 343,
                borderRadius: 117,
                url: '../../images/painter/qr.png',
            },

            {   //底图
                width: 464,
                height: 342,
                x: 124,
                y: 969,
                url: '../../images/painter/photo_bg.png',
            },
            {   //照片
                width: 427,
                height: 308,
                x: 131,
                y: 995,
                borderRadius: 25,
                url: '../../images/painter/step.jpg',
            },
            {   //底部
                width: 690,
                height: 300,
                x: 0,
                y: 1355 + 100,
                borderRadius: 25,
                url: '../../images/painter/footer.png',
            },

        ]


    },
    jdConfig: {
        width: 750,
        height: 1334,
        backgroundColor: '#fff',
        debug: false,
        pixelRatio: 1,
        blocks: [
            {
                width: 690,
                height: 808,
                x: 30,
                y: 183,
                borderWidth: 2,
                borderColor: '#f0c2a0',
                borderRadius: 20,
            },
            {
                width: 634,
                height: 74,
                x: 59,
                y: 770,
                backgroundColor: '#fff',
                opacity: 0.5,
                zIndex: 100,
            },
        ],
        texts: [
            {
                x: 113,
                y: 61,
                baseLine: 'middle',
                text: '伟仔',
                fontSize: 32,
                color: '#8d8d8d',
            },
            {
                x: 30,
                y: 113,
                baseLine: 'top',
                text: '发现一个好物，推荐给你呀',
                fontSize: 38,
                color: '#080808',
            },
            {
                x: 92,
                y: 810,
                fontSize: 38,
                baseLine: 'middle',
                text: '标题标题标题标题标题标题标题标题标题',
                width: 570,
                lineNum: 1,
                color: '#8d8d8d',
                zIndex: 200,
            },
            {
                x: 59,
                y: 895,
                baseLine: 'middle',
                text: [
                    {
                        text: '2人拼',
                        fontSize: 28,
                        color: '#ec1731',
                    },
                    {
                        text: '¥99',
                        fontSize: 36,
                        color: '#ec1731',
                        marginLeft: 30,
                    }
                ]
            },
            {
                x: 522,
                y: 895,
                baseLine: 'middle',
                text: '已拼2件',
                fontSize: 28,
                color: '#929292',
            },
            {
                x: 59,
                y: 945,
                baseLine: 'middle',
                text: [
                    {
                        text: '商家发货&售后',
                        fontSize: 28,
                        color: '#929292',
                    },
                    {
                        text: '七天退货',
                        fontSize: 28,
                        color: '#929292',
                        marginLeft: 50,
                    },
                    {
                        text: '运费险',
                        fontSize: 28,
                        color: '#929292',
                        marginLeft: 50,
                    },
                ]
            },
            {
                x: 360,
                y: 1065,
                baseLine: 'top',
                text: '长按识别小程序码',
                fontSize: 38,
                color: '#080808',
            },
            {
                x: 360,
                y: 1123,
                baseLine: 'top',
                text: '超值好货一起拼',
                fontSize: 28,
                color: '#929292',
            },
        ],
        images: [
            {
                width: 62,
                height: 62,
                x: 30,
                y: 30,
                borderRadius: 62,
                url: 'https://lc-I0j7ktVK.cn-n1.lcfile.com/02bb99132352b5b5dcea.jpg',
            },
            {
                width: 634,
                height: 634,
                x: 59,
                y: 210,
                url: 'https://lc-I0j7ktVK.cn-n1.lcfile.com/193256f45999757701f2.jpeg',
            },
            {
                width: 220,
                height: 220,
                x: 92,
                y: 1020,
                url: 'https://lc-I0j7ktVK.cn-n1.lcfile.com/d719fdb289c955627735.jpg',
            },
            {
                width: 750,
                height: 90,
                x: 0,
                y: 1244,
                url: 'https://lc-I0j7ktVK.cn-n1.lcfile.com/67b0a8ad316b44841c69.png',
            }
        ]

    }
}

module.exports = coverConfig
