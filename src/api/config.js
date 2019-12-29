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
        return this.get(url, params, false).then(res => {
            return res;
        })
    }
    static async getCourses(opt) {
        let url = `${this.baseUrl}/course/getCourses`;
        let params = {
            cityCode: wepy.$instance.globalData.cityCode,
            ...opt
        }
        return this.get(url, params, false).then(res => {
            return res;
        })
    }
    static async getCourseInfo(id) {
        let url = `${this.baseUrl}/course/getInfo`;
        let params = {
            id
        }
        return this.get(url, params, false).then(res => {
            return res;
        })
    }
}

