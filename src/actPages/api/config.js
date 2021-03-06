import wepy from 'wepy'
import base from '@/api/base'

export default class config extends base {
    // 获取评论列表
    static async answerStart(testPaperId) {
        let url = `${this.baseUrl}/answer/start`;
        let params = {
            sessionId: wepy.$instance.globalData.sessionId,
            testPaperId
        }
        return this.post(url, params, true).then(res => {
            return res;
        })
    }
    // 提交答卷
    static async answerOver(opt) {
        let url = `${this.baseUrl}/answer/over`;
        let params = {
            sessionId: wepy.$instance.globalData.sessionId,
            ...opt
        }
        return this.post(url, params, true).then(res => {
            return res;
        })
    }
     // 获取答题活动信息
     static async answerInfo() {
        let url = `${this.baseUrl}/answer`;
        let params = {
            sessionId: wepy.$instance.globalData.sessionId,
        }
        return this.post(url, params, true).then(res => {
            return res;
        })
    }
    // 本周答题列表
    static async answerlist() {
        let url = `${this.baseUrl}/answer/list`;
        let params = {
            sessionId: wepy.$instance.globalData.sessionId,
        }
        return this.post(url, params, true).then(res => {
            return res;
        })
    }
    // 排行榜
    static async ranking(type) {
        let url = `${this.baseUrl}/answer/ranking`;
        let params = {
            sessionId: wepy.$instance.globalData.sessionId,
            type
        }
        return this.post(url, params, true).then(res => {
            return res;
        })
    }
}

