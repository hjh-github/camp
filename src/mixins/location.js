import wepy from 'wepy'
export default class location extends wepy.mixin {

  methods = {
    // 内置地图显示
    openMap(latitude, longitude,name,address) {

      wx.openLocation({
        latitude: Number(latitude),
        longitude: Number(longitude),
        scale: 28,
        name:name,
        address:address
      });

    }
  }

}
