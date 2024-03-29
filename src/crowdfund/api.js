import wepy from 'wepy'
import base from '@/api/base'

export default class config extends base {
  // 获取首页数据
  static async videoIndex(opt) {
    let url = `${this.baseUrl}/video`;
    let params = {
      sessionId: wepy.$instance.globalData.sessionId
    }
    return this.post(url, params, true).then(res => {
      return res;
    })
  }
  // 获取众筹详情
  static async getSupportDetai(regId) {
    let url = `${this.baseUrl}/crowdfunding/getSupportDetai`;
    let params = {
      regId,
      sessionId: wepy.$instance.globalData.sessionId
    }
    return this.get(url, params, true,true,true).then(res => {
      return res;
    })
  }
  // 发起众筹
  static async toCrowdfunding(opt) {
    let url = `${this.baseUrl}/crowdfunding/toCrowdfunding`;
    let params = {
      ...opt,
      sessionId: wepy.$instance.globalData.sessionId
    }
    return this.post(url, params, true,true,true).then(res => {
      return res;
    })
  }
   // 初始化可支持金额
   static async toSupport(regId) {
    let url = `${this.baseUrl}/crowdfunding/toSupport`;
    let params = {
      regId,
      sessionId: wepy.$instance.globalData.sessionId
    }
    return this.post(url, params, true,true,true).then(res => {
      return res;
    })
  }
   // 提交支持订单
   static async commit(opt) {
    let url = `${this.baseUrl}/crowdfunding/commit`;
    let params = {
      ...opt,
      sessionId: wepy.$instance.globalData.sessionId
    }
    return this.post(url, params, true,true,true).then(res => {
      return res;
    })
  }
  // 提交支持订单
  static async crowdfunds() {
    let url = `${this.baseUrl}/member/crowdfunding/list`;
    let params = {
      sessionId: wepy.$instance.globalData.sessionId
    }
    return this.post(url, params, true,true,true).then(res => {
      return res;
    })
  }
}
