import wepy from 'wepy'
export default class location extends wepy.mixin {
    onLoad() {
        wx.showShareMenu({
            withShareTicket: true
        })
    }
}