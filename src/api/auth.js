import base from './base'
import wepy from 'wepy';

export default class auth extends base {
  // /**
  //  * 一键登录
  //  */
  static async login() {
    let self = this
   await wepy.checkSession().then(async res=>{
      console.log('还在登录状态下')
      // await self.toLogin()
    }).catch(async err=>{
      console.log('重新登录')
      await self.toLogin()
    });
    
    // wx.checkSession({
    //   success(res) {
    //     console.log('还在登录状态下')
    //     return
    //   },
    //   fail: async function (res) {
    //     console.log('重新登录')
    //     await self.toLogin()
    //   }
    // })

  }
  // 解析手机号
  static async getPhone(codes) {
    const shopCode = wepy.$instance.globalData.appCode;
    let params = {
      appid: shopCode,
      ...codes
    }
    const url = `${this.baseUrl}/seller/web/index.php?r=init/phone`;
    return await this.post(url, params, false);
  }
  // 获取验证码
  static async sendCode(phone) {
    const url = `${this.baseUrl}/seller/web/index.php?r=init/send`;
    return this.post(url, { phone }, true).then(res => {
      return res;
    })
  }
  // 登录
  static async toLogin() {
    const shopCode = wepy.$instance.globalData.appCode;
    let {code} = await wepy.login()
    let params = {
      appid: shopCode,
      code
    }
    const url = `${this.baseUrl}/wxlogin`;
    let _code = await this.post(url, params, true, true);
    console.log(_code)
  }

  /**
     * 检查是否存在权限制
     */
  static hasConfig(key) {
    const value = this.getConfig(key);
    return value != null && value != '';
  }
  /**
   * 读取权限值
   */
  static getConfig(key) {
    return wepy.$instance.globalData.auth[key];
  }
  static getStorage(key) {
    return new Promise((resolve, resject) => {
      wx.getStorage({
        key: key,
        success: function (res) {
          resolve(res)
        }
      })
    })
  }
  /**
  * 设置权限值
  */
  static async setConfig(key, value) {
    await wepy.setStorage({ key: key, data: value });
    wepy.$instance.globalData.auth[key] = value;
  }

  /**
   * 删除权限值
   */
  static async removeConfig(key) {
    wepy.$instance.globalData.auth[key] = null;
    await wepy.removeStorage({ key: key });
  }

}
