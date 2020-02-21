import wepy from 'wepy'
export default class location extends wepy.mixin {
    methods = {
        navigator(url, type) {
            console.log(url, type)
            if (type == 'none' || !type) {
                return false
            }
            if (type == 'navigateTo') {
                wepy.navigateTo({
                    url
                });
            } else if (type == 'redirectTo') {
                wepy.redirectTo({
                    url
                });
            } else if (type == 'switchTab') {
                wepy.switchTab({
                    url
                });
            } else if (type == 'reLaunch') {
                wepy.reLaunch({
                    url
                });
            } else if (type == 'web') {
                wepy.navigateTo({ url: '/pages/home/web?src=' + encodeURIComponent(url) });

            } 
        }
    };
}