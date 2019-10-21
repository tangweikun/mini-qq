Page({
  data: {
    messages: [
      {
        groupName: '特别关心',
        icon: '/images/close.png',
        number: '0/0',
      },
      {
        groupName: '常用群聊',
        icon: '/images/close.png',
        number: '1/1',
      },
      {
        groupName: '我的好友',
        icon: '/images/close.png',
        number: '41/53',
      },
      {
        groupName: '三年情',
        icon: '/images/close.png',
        number: '4/10',
      },
      {
        groupName: '十年友',
        icon: '/images/close.png',
        number: '10/20',
      },
      {
        groupName: '前端开发组',
        icon: '/images/close.png',
        number: '10/22',
      },
      {
        groupName: '后台开发组',
        icon: '/images/close.png',
        number: '4/9',
      },
      {
        groupName: '微信小程序',
        icon: '/images/close.png',
        number: '12/13',
      },
      {
        groupName: '滥人情',
        icon: '/images/close.png',
        number: '3/8',
      },
      {
        groupName: '娇人笑',
        icon: '/images/close.png',
        number: '4/9',
      },
      {
        groupName: '奈何桥',
        icon: '/images/close.png',
        number: '6/13',
      },
    ],
  },

  showToast: function() {
    // https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showToast.html
    wx.showToast({
      title: '功能开发中...',
      icon: 'success',
      duration: 1000,
    });
  },
});
