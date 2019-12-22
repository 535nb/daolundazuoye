Page({
  data: {

  },
  //跳转到天气页面
  navigate: function () {
    wx.navigateTo({
      url: '../index/index',
    })
  },
  writeTouchStart: function (event) {
    this.setData({
      hoverClass: 'write-image-hover'
    })
  },

  writeTouchEnd: function (event) {
    this.setData({
      hoverClass: ''
    })
  },
})