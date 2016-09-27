/*  
    Javascript interface of Cordova plugin for TalkingData Analytics SDK 
*/

var BrCordova = {

    // 初始化 TalkingData Analytics SDK
    // appKey    : TalkingData appid, https://www.talkingdata.com/app/document_web/index.jsp?statistics
    // channelId : 渠道号

    makePhoneCall:function(phoneNumber,user_clue_id) {
        cordova.exec(null, null, "BrCordova", "makePhoneCall", [phoneNumber,user_clue_id]);
    },

    getDeviceToken:function(callBack) {
        cordova.exec(callBack, null, "BrCordova", "getDeviceToken", []);
    },
    pay:function(price) {
        cordova.exec(null, null, "BrCordova", "pay", [price]);
    },
    init:function(appKey, channelId) {
        cordova.exec(null, null, "BrCordova", "init", [appKey, channelId]);
    },

    // 触发自定义事件
    // eventId   : 自定义事件的 eventId
    onEvent:function(eventId) {
        cordova.exec(null, null, "BrCordova", "onEvent", [eventId]);
    },

    // 触发自定义事件
    // eventId:    自定义事件的 eventId
    // eventLabel: 自定义事件的事件标签
    onEventWithLabel:function(eventId, eventLabel) {
        cordova.exec(null, null, "BrCordova", "onEventWithLabel", [eventId, eventLabel]);
    },

    // 触发自定义事件
    // eventId:    自定义事件的 eventId
    // eventLabel: 自定义事件的事件标签
    // eventData : 自定义事件的数据，Json 对象格式
    onEventWithExtraData:function(eventId, eventLabel, eventData) {
        var eventDataJson = JSON.stringify(eventData);
        cordova.exec(null, null, "BrCordova", "onEventWithExtraData", [eventId, eventLabel, eventDataJson]);
    },

    // 触发页面事件，在页面加载完毕的时候调用，记录页面名称和使用时长，一个页面调用这个接口后就不用再调用 onPageBegin 和 onPageEnd 接口了
    // pageName  : 页面自定义名称
    onPage:function(pageName) {
        cordova.exec(null, null, "BrCordova", "onPage", [pageName]);
    },

    // 触发页面事件，在页面加载完毕的时候调用，用于记录页面名称和使用时长，和 onPageEnd 配合使用
    // pageName  : 页面自定义名称
    onPageBegin:function(pageName) {
        cordova.exec(null, null, "BrCordova", "onPageBegin", [pageName]);
    },

    // 触发页面事件，在页面加载完毕的时候调用，用于记录页面名称和使用时长，和 onPageBegin 配合使用
    // pageName  : 页面自定义名称
    onPageEnd:function(pageName) {
        cordova.exec(null, null, "BrCordova", "onPageEnd", [pageName]);
    },

    // 设置位置经纬度
    // latitude  : 纬度
    // longitude : 经度
    setLocation:function(latitude, longitude) {
        cordova.exec(null, null, "BrCordova", "setLocation", [latitude, longitude]);
    },

    // 获取 TalkingData Device Id，并将其作为参数传入 JS 的回调函数
    // callBack  : 处理 deviceId 的回调函数
    getDeviceId:function(callBack) {
        cordova.exec(callBack, null, "BrCordova", "getDeviceId", []);
    },

    // 设置是否记录并上报程序异常信息
    // enabled   : true or false
    setExceptionReportEnability:function(enabled) {
        cordova.exec(null, null, "BrCordova", "setExceptionReportEnability", [enabled]);
    },

    // 设置是否记录并上传 iOS 平台的 signal
    // enabled   : true or false
    setSignalReportEnability:function(enabled) {
        cordova.exec(null, null, "BrCordova", "setSignalReportEnability", [enabled]);
    },

    // 设置是否在控制台（iOS）/LogCat（Android）中打印运行时日志
    // enabled   : true or false
    setLogEnability:function(enabled) {
        cordova.exec(null, null, "BrCordova", "setLogEnability", [enabled]);
    }
};

module.exports = BrCordova;