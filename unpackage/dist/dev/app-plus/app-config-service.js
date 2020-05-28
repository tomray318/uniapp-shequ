
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/news/news","pages/paper/msg","pages/home/home","pages/search/search","pages/add-input/add-input","components/news/news","pages/topic-nav/topic-nav","pages/topic-detail/topic-detail","pages/user-list/user-list"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"社区交友","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"borderStyle":"black","backgroundColor":"#FFFFFF","color":"#8F8F94","selectedColor":"#f33e54","list":[{"pagePath":"pages/index/index","iconPath":"static/tabbar/index.png","selectedIconPath":"static/tabbar/indexed.png","text":"首页"},{"pagePath":"pages/news/news","iconPath":"static/tabbar/news.png","selectedIconPath":"static/tabbar/newsed.png","text":"动态"},{"pagePath":"pages/paper/msg","iconPath":"static/tabbar/paper.png","selectedIconPath":"static/tabbar/papered.png","text":"消息"},{"pagePath":"pages/home/home","iconPath":"static/tabbar/home.png","selectedIconPath":"static/tabbar/homeed.png","text":"我的"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"梦痕社区","compilerVersion":"2.7.5","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"首页","titleNView":{"searchInput":{"align":"center","backgroundColor":"#F5F4F2","borderRadius":"4px","disabled":true,"placeholder":"搜索用户","placeholderColor":"#6D6C67"},"buttons":[{"color":"#333333","colorPressed":"#FD597C","float":"right","fontSize":"40rpx","fontSrc":"/static/iconfont.ttf","text":""}]}}},{"path":"/pages/news/news","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"NavBar 导航栏","navigationStyle":"custom","enablePullDownRefresh":false,"titleNView":false,"bounce":"none","pullToRefresh":{"style":"circle","offset":"70px"}}},{"path":"/pages/paper/msg","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"消息列表","enablePullDownRefresh":true,"titleNView":{"buttons":[{"color":"#333333","colorPressed":"#FD597C","float":"left","fontSize":"40rpx","fontSrc":"/static/iconfont.ttf","text":""},{"color":"#333333","colorPressed":"#FD597C","float":"right","fontSize":"40rpx","fontSrc":"/static/iconfont.ttf","text":""}]}}},{"path":"/pages/home/home","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"个人中心"}},{"path":"/pages/search/search","meta":{},"window":{"navigationBarTitleText":"搜索页面","titleNView":{"searchInput":{"align":"center","backgroundColor":"#F5F4F2","borderRadius":"6px","disabled":false,"placeholder":"搜索用户","placeholderColor":"#6D6C67"},"buttons":[{"color":"#333333","colorPressed":"#FD597C","float":"right","fontSize":"30rpx","text":"搜索"}]}}},{"path":"/pages/add-input/add-input","meta":{},"window":{"navigationBarTitleText":"NavBar 导航栏","navigationStyle":"custom","enablePullDownRefresh":true,"titleNView":false,"bounce":"none","pullToRefresh":{"style":"circle","offset":"70px"}}},{"path":"/components/news/news","meta":{},"window":{}},{"path":"/pages/topic-nav/topic-nav","meta":{},"window":{"navigationBarTitleText":"话题分类"}},{"path":"/pages/topic-detail/topic-detail","meta":{},"window":{"titleNView":{"type":"transparent","buttons":[{"type":"menu"}]}}},{"path":"/pages/user-list/user-list","meta":{},"window":{"navigationBarTitleText":"添加好友","animationType":"slide-in-left","titleNView":{"autoBackButton":false,"searchInput":{"align":"center","backgroundColor":"#F5F4F2","borderRadius":"4px","disabled":true,"placeholder":"搜索用户","placeholderColor":"#6D6C67"},"buttons":[{"color":"#333333","colorPressed":"#FD597C","float":"right","fontSize":"35rpx","text":"取消"}]}}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
