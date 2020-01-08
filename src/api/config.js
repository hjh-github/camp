import wepy from 'wepy'
import base from './base'

export default class config extends base {
    // 获取首页数据
    static async getIndex(opt) {
        let location = await this.getLocation()
        //   当用户拒绝授权并且没有手动选择城市时，跳转到选择地址页
        if (!location && !wepy.$instance.globalData.cityCode) {
            wepy.redirectTo({ url: './address' });
            return
        }
        let url = `${this.baseUrl}/index`;
        let params = {
            location,
            cityCode: wepy.$instance.globalData.cityCode,
            ...opt
        }
        return this.post(url, params, true).then(res => {
            return res;
        })
    }
    static async citys() {
        let url = `${this.baseUrl}/citys`;
        let params = {}
        return this.get(url, params, true).then(res => {
            return res;
        })
    }
    static async getCourses(opt) {
        let url = `${this.baseUrl}/course/getCourses`;
        let params = {
            cityCode: wepy.$instance.globalData.cityCode,
            ...opt
        }
        return this.get(url, params, true).then(res => {
            return res;
        })
    }

    static async getCourseInfo(id) {
        let url = `${this.baseUrl}/course/getInfo`;
        let params = {
            id
        }
        return this.get(url, params, true).then(res => {
            return res;
        })
    }
    // ########################  人员信息管理  ###################
    // 获取儿童列表
    static async getChildList() {
        let url = `${this.baseUrl}/member/getChildList`;
        let params = {
            sessionId:wepy.$instance.globalData.sessionId
        }
        return this.get(url, params, true).then(res => {
            return res;
        })
    }
    // 获取监护人列表
    static async getGuaList() {
        let url = `${this.baseUrl}/member/getGuaList`;
        let params = {
            sessionId:wepy.$instance.globalData.sessionId
        }
        return this.get(url, params, true).then(res => {
            return res;
        })
    }
    // 活动儿童详情
    static async getChild(id) {
        let url = `${this.baseUrl}/member/getChild`;
        let params = {
            id,
            sessionId:wepy.$instance.globalData.sessionId
        }
        return this.get(url, params, true).then(res => {
            return res;
        })
    }
    // 活动监护人详情
    static async getGua(id) {
        let url = `${this.baseUrl}/member/getGua`;
        let params = {
            id,
            sessionId:wepy.$instance.globalData.sessionId
        }
        return this.get(url, params, true).then(res => {
            return res;
        })
    }
    // 保存监护人
    static async updateGua(opt) {
        let url = `${this.baseUrl}/member/updateGua`;
        let params = {
            ...opt,
            sessionId:wepy.$instance.globalData.sessionId
        }
        return this.post(url, params, true,true).then(res => {
            return res;
        })
    }
    // 保存儿童
    static async updateChild(opt) {
        let url = `${this.baseUrl}/member/updateChild`;
        let params = {
            ...opt,
            sessionId:wepy.$instance.globalData.sessionId
        }
        return this.post(url, params, true,true).then(res => {
            return res;
        })
    }
    // 删除监护人
    static async delGua(id) {
        let url = `${this.baseUrl}/member/delGua`;
        let params = {
            id,
            sessionId:wepy.$instance.globalData.sessionId
        }
        return this.post(url, params, true,true).then(res => {
            return res;
        })
    }
    // 删除儿童信息
    static async delChild(id) {
        let url = `${this.baseUrl}/member/delChild`;
        let params = {
            id,
            sessionId:wepy.$instance.globalData.sessionId
        }
        return this.post(url, params, true,true).then(res => {
            return res;
        })
    }
    // ########################  订单管理  ###################
    // 下单 
    static async ordercommit(opt) {
        let url = `${this.baseUrl}/order/ordercommit`;
        let params = {
            ...opt,
            sessionId:wepy.$instance.globalData.sessionId
        }
        return this.post(url, params, false,true).then(res => {
            return res;
        })
    }
    // 支付 
    static async wxpaytopay(opt) {
        let url = `${this.baseUrl}/wxpay/topay`;
        let params = {
            ...opt,
            sessionId:wepy.$instance.globalData.sessionId
        }
        return this.post(url, params, false,true).then(res => {
            return res;
        })
    }
    // 获取订单列表
    static async orders(opt) {
        let url = `${this.baseUrl}/member/order`;
        let params = {
            ...opt,
            sessionId:wepy.$instance.globalData.sessionId
        }
        return this.get(url, params, false,true).then(res => {
            return res;
        })
    }
    // 获取订单详情
    static async orderdetail(id) {
        let url = `${this.baseUrl}/member/orderdetail`;
        let params = {
            id,
            sessionId:wepy.$instance.globalData.sessionId
        }
        return this.get(url, params, false,true).then(res => {
            return res;
        })
    }
}

