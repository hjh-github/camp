import wepy from 'wepy';
import http from '../utils/Http'

export default class base {
  static baseUrl = wepy.$instance.globalData.baseUrl;
  static kdsUrl = wepy.$instance.globalData.kdsUrl;
  static fuUrl = wepy.$instance.globalData.fuUrl;
  static get = http.get.bind(http);
  static put = http.put.bind(http);
  static post = http.post.bind(http);
  static delete = http.delete.bind(http);
  // 截取经纬度
  static async getLocation() {
    return wepy.getLocation({
      type: 'gcj02'
    }).then(res => {
      return `${res.latitude},${res.longitude}`
    }).catch(err => {
      console.log(err)
      return  ''
    });
  }
}


