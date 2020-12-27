import wepy from 'wepy'
import base from '@/api/base'

export default class config extends base {
    // 可以领取的列表
    static getcoupons (opt) {
        let url = `${this.baseUrl}/coupon/list`;
        let params = {
            sessionId: wepy.$instance.globalData.sessionId,
        }
        return this.post(url, params, true).then(res => {
            return res;
        })
    }
    // 领取优惠券
    static reveivecoupon (couponId) {
        let url = `${this.baseUrl}/member/coupon/reveivecoupon`;
        let params = {
            sessionId: wepy.$instance.globalData.sessionId,
            couponId
        }
        return this.post(url, params, true,true).then(res => {
            return res;
        })
    }
     // 我的优惠券列表
     static memberCoups (state) {
        let url = `${this.baseUrl}/member/coupon/list`;
        let params = {
            sessionId: wepy.$instance.globalData.sessionId,
            state
        }
        return this.post(url, params, true,true).then(res => {
            return res;
        })
    }
}