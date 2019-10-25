class dbBase {
	/**
	 * @statics 静态变量
	 */
    KEY_USER_INFO = "user_info"
    KEY_UUID = "uuid"
    KEY_TOKEN = "token"
    KEY_SESSION = "session"

    CODE_SUCCESS = 10001
    CODE_LOGIN_SUCCESS = 10002

    // URL = "http://221.7.253.6:9019/Api/Task/TaskHandler.ashx?"
    URL = "http://221.7.253.6:9019/"

    // URL_WORK = "http://221.7.253.6:9019/Api/Task/WorkHandler.ashx?action="

    constructor() { }

    /********瀑布流模块*********/
    checkIsMore(page, limit, count) {
        //判断是否还有更多
        if (page * limit < count)
            return true
        else
            return false
    }

	/**
	 * @method 初始化瀑布流
	 */
    listInit(self) {
        self.setData({
            page: 1,
            limit: 10,
            lock: false,
            isMore: true,
            list: [],
        })
    }

	/**
	 * @method 更新
	 */
    listUpdate(self, res) {
        // debugger
        var page = self.$data.page
        var limit = self.$data.limit
        var count = res.count
        var oldList = self.$data.list
        var newList = res.data

        var isMore = this.checkIsMore(page, limit, count)
        self.setData({
            page: self.$data.page + 1,
            lock: false,
            list: oldList.concat(newList),
            isMore: isMore,
        })
    }

    /**************计算************/
    accDiv(arg1, arg2) {
        let t1 = 0, t2 = 0, r1, r2;
        try { t1 = arg1.toString().split(".")[1].length } catch (e) { }
        try { t2 = arg2.toString().split(".")[1].length } catch (e) { }
        r1 = Number(arg1.toString().replace(".", ""))
        r2 = Number(arg2.toString().replace(".", ""))
        return (r1 / r2) * Math.pow(10, t2 - t1);
    }


    /********基础请求*********/

    // 封装基础的请求
    base(options) {
        return new Promise((resolve, reject) => {
            var data = options.data || {}
            // data['customer_uuid'] = wx.getStorageSync(API.UUID)
            // debugger
            wx.request({
                url: options.url,
                method: options.method || "POST",
                header: {
                    'content-type': 'application/x-www-form-urlencoded',// 默认值
                    'Access-Control-Allow-Origin': true,
                },
                data: data,
                success(res) {
                    resolve(res)
                },
                fail(res) {
                    console.log(res)
                    reject(res)
                },
            })
        })
    }

    // 获取店铺列表
    baseURL(url, method, data) {
        return new Promise((resolve, reject) => {
            // debugger
            wx.showLoading()
            this.base({
                url: this.URL + url,
                method: method,
                data: data || {},
            })
                .then(res => {
                    wx.hideLoading()
                    resolve(res.data)
                })
                .catch(res => {

                    wx.hideLoading()
                    reject(res)
                })
        })
    }
}
module.exports = dbBase
