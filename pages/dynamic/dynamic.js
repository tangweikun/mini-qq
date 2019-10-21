Page({
  data: {
    messages: [
      {
        groupName: '游戏',
        icon: '/images/game.png',
        rightImage: '/images/tip.png',
      },
      {
        groupName: '日迹',
        icon: '/images/weather.png',
        rightImage: '/images/tip.png',
      },
      {
        groupName: '看点',
        icon: '/images/kan.png',
        rightImage: '/images/tip.png',
      },
      {
        groupName: '音乐',
        icon: '/images/song.png',
        rightImage: '/images/tip.png',
      },
      {
        groupName: '直播',
        icon: '/images/video.png',
        rightImage: '/images/tip.png',
      },
      {
        groupName: '附近的群',
        icon: '/images/qun.png',
        rightImage: '/images/tip.png',
      },
      {
        groupName: '同城服务',
        icon: '/images/cityse.png',
        rightImage: '/images/tip.png',
      },
      {
        groupName: '运动',
        icon: '/images/sport.png',
        rightImage: '/images/tip.png',
      },
      {
        groupName: '腾讯课堂',
        icon: '/images/class.png',
        rightImage: '/images/tip.png',
      },
    ],
    idx: 0,
  },

  showToast: function() {
    // https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showToast.html
    wx.showToast({
      title: '功能开发中...',
      icon: 'success',
      duration: 1000,
    });
  },

  toPage: function(event) {
    //点击跳转菜单，获取当前的index值
    // var index = event.currentTarget.dataset.index;
    // switch (index) {
    //   case 3: //判断跳转页面
    //     wx.navigateTo({
    //       url: '/pages/dynamic/music/music',
    //     });
    // }
  },
});
