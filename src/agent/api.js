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
    static async plusUp(opt) {
        let url = `${this.baseUrl}/member/plus/up`;
        let params = {
            sessionId: wepy.$instance.globalData.sessionId
        }
        return this.post(url, params, true,true).then(res => {
            return res;
        })
    }
    static async agentIndex() {
        let url = `${this.baseUrl}/member/agent/index`;
        let params = {
            sessionId: wepy.$instance.globalData.sessionId
        }
        return this.post(url, params, true).then(res => {
            return res;
        })
    }
    static async applyV2() {
        let url = `${this.baseUrl}/member/agent/applyV2`;
        let params = {
            sessionId: wepy.$instance.globalData.sessionId
        }
        return this.post(url, params, true).then(res => {
            return res;
        })
    }
    static async withdrawLog() {
        let url = `${this.baseUrl}/member/agent/withdrawLog`;
        let params = {
            sessionId: wepy.$instance.globalData.sessionId
        }
        return this.post(url, params, true).then(res => {
            return res;
        })
    }
    static async fanslist() {
        let url = `${this.baseUrl}/member/agent/fans`;
        let params = {
            sessionId: wepy.$instance.globalData.sessionId
        }
        return this.post(url, params, true).then(res => {
            return res;
        })
    }
}