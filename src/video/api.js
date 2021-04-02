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
  // 获取更多视频数据
  static async videoList(opt) {
    let url = `${this.baseUrl}/video/list`;
    let params = {
      ...opt,
      sessionId: wepy.$instance.globalData.sessionId
    }
    return this.post(url, params, true).then(res => {
      return res;
    })
  }
}
