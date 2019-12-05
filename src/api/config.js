import wepy from 'wepy'
import base from './base'

export default class config extends base {
    // 门店列表
    static stores(keyword = '', load = true) {
        let url = `${this.baseUrl}/seller/web/index.php?r=store/list`;
        let params = {
            // token: 'b2041d90289555921ef443892981cc12',
            token: wepy.getStorageSync("token"),
            keyword
        }
        return this.post(url, params, load).then(res => {
            return res;
        })
    }
    // 门店配置
    static getConfig() {
        let url = `${this.baseUrl}/seller/web/index.php?r=lineup/get-config`;
        let params = {
            token: wepy.getStorageSync("token"),
            base_store_id: wepy.getStorageSync("base_store_id"),
        }
        return this.post(url, params, false).then(res => {
            return res;
        })
    }
    // 获取排队列表
    static lineups(opt) {
        let url = `${this.baseUrl}/seller/web/index.php?r=lineup/lineup-list`;
        let params = {
            token: wepy.getStorageSync("token"),
            base_store_id: wepy.getStorageSync("base_store_id"),
            ...opt
        }
        return this.post(url, params, false).then(res => {
            return res;
        })
    }
    // 取号
    static setLineup(opt) {
        let url = `${this.baseUrl}/seller/web/index.php?r=lineup/lineup-number`;
        let params = {
            token: wepy.getStorageSync("token"),
            base_store_id: wepy.getStorageSync("base_store_id"),
            ...opt
        }
        return this.post(url, params, false,true).then(res => {
            return res;
        })
    }
    // 排号操作
    static callQue(opt) {
        let url = `${this.baseUrl}/seller/web/index.php?r=lineup/create-lineup-number`;
        let params = {
            token: wepy.getStorageSync("token"),
            ...opt
        }
        return this.post(url, params, false).then(res => {
            return res;
        })
    }
    // 查看桌台详情
    static deskInfo(desk_id) {
        let url = `${this.baseUrl}/seller/web/index.php?r=lineup/desk-info`;
        let params = {
            token: wepy.getStorageSync("token"),
            desk_id
        }
        return this.post(url, params, false).then(res => {
            return res;
        })
    }
    // 查看桌台详情
    static saveDeskInfo(opt) {
        let url = `${this.baseUrl}/seller/web/index.php?r=lineup/create-desk-config`;
        let params = {
            token: wepy.getStorageSync("token"),
            base_store_id: wepy.getStorageSync("base_store_id"),
            ...opt
        }
        return this.post(url, params, false).then(res => {
            return res;
        })
    }
    // 查看桌台详情
    static saveConfig(opt) {
        let url = `${this.baseUrl}/seller/web/index.php?r=lineup/create-config`;
        let params = {
            token: wepy.getStorageSync("token"),
            ...opt
        }
        return this.post(url, params, false).then(res => {
            return res;
        })
    }
    // 查看空台列表
    static deskStatus() {
        let url = `${this.baseUrl}/seller/web/index.php?r=lineup/desk-status`;
        let params = {
            token: wepy.getStorageSync("token"),
            base_store_id: wepy.getStorageSync("base_store_id")
        }
        return this.post(url, params, false).then(res => {
            return res;
        })
    }
    //  #################  百度语音播报  ######################
    // 获取语音token
    static clientToken() {
        let url = `https://openapi.baidu.com/oauth/2.0/token`;
        let params = {
            grant_type: "client_credentials",
            client_id: 'GNLKG9SyVpyGspiSzhry9CGV',
            client_secret: '5I0t7s8URdvGWpcBabHWYPlGXjGYzF8a'
        }
        return this.get(url, params, true, true, false).then(res => {
            return res;
        })
    }

}

