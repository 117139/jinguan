// pages/mytel/mytel.js
const app= getApp()
var jsonData = require('../../static/code.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
		dataList:[
      {
        code: '86'
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
		// this.setData({
    //   //jsonData.dataList获取json.js里定义的json数据，并赋值给dataList
    //   dataList: jsonData.dataList
    // });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
	bindPickerChange: function(e) {
	  console.log('picker发送选择改变，携带值为', e.detail.value)
	  this.setData({
	    index: e.detail.value
	  })
	},
	formSubmit: function(e) {
	  console.log('form发生了submit事件，携带数据为：', e.detail.value)
	},
})