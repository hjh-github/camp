import wepy from 'wepy'
import base from '../api/base'

export default class agent extends base {
    static async orders(opt) {
        let url = `${this.baseUrl}/member/agent/orders`;
        let params = {
            ...opt,
            sessionId: wepy.$instance.globalData.sessionId
        }
        return this.get(url, params, true,true).then(res => {
            return res;
        })
    }
    static async agenter() {
        let url = `${this.baseUrl}/member/agent`;
        let params = {
            sessionId: wepy.$instance.globalData.sessionId
        }
        return this.get(url, params, true).then(res => {
            return res;
        })
    }
    static async sign(opt) {
        let url = `${this.baseUrl}/member/agent/apply`;
        let params = {
            ...opt,
            sessionId: wepy.$instance.globalData.sessionId
        }
        return this.post(url, params, true,true).then(res => {
            return res;
        })
    }
}