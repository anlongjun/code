//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    worker: '猪肉五花肉25g 16.9元',
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    background: ['../../images/1.jpg', '../../images/2.jpg', '../../images/3.jpeg'],
    indicatorDots: false,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    choose:1
  },
  choosefun:function(e){
    console.log(e)
    var id = e.currentTarget.dataset.id;
    console.log(id)
    this.setData({
      choose:id
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  inputChange(event) {
    let dataset_name = event.currentTarget.dataset.name   // worker字符串
    let view_name = event.detail.value
    this.setData({
      [dataset_name]: view_name    // worker: input框输入的值
    })
  }
})
