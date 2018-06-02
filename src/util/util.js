// import axios from 'axios';
// import qs from 'qs';

var util = {};

util.setUrl = function(url, jsFile) {
    let base;
    const isAndroidAssets = bundleUrl.indexOf('your_current_IP') >= 0 || bundleUrl.indexOf('file://assets/') >= 0;
    const isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
    // const isiOSAssets = true;
    if (!isAndroidAssets && !isiOSAssets) {
        base = '/web/index.html?page=/pages/';
    } else {
        base = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
        if (base.indexOf('pages') == -1) {
            base += 'pages/'
        }
    }
    const newUrl = base + jsFile;
    return newUrl;
    // const bundleUrl = url;
    // let host = '';
    // let path = '';
    // let nativeBase;
    // const isAndroidAssets = bundleUrl.indexOf('your_current_IP') >= 0 || bundleUrl.indexOf('file://assets/') >= 0;
    // const isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;

    // if (isAndroidAssets) {
    //     nativeBase = 'file://assets/dist';
    // } else if (isiOSAssets) {
    //     // file:///var/mobile/Containers/Bundle/Application/{id}/WeexDemo.app/
    //     // file:///Users/{user}/Library/Developer/CoreSimulator/Devices/{id}/data/Containers/Bundle/Application/{id}/WeexDemo.app/
    //     nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
    //     console.log(nativeBase)
    // } else {
    //     const matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
    //     const matchFirstPath = /\/\/[^\/]+\/([^\s]+)\//.exec(bundleUrl);
    //     if (matches && matches.length >= 2) {
    //         host = matches[1];
    //     }
    //     if (matchFirstPath && matchFirstPath.length >= 2) {
    //         path = matchFirstPath[1];
    //     }
    //     nativeBase = 'http://' + host + '/';
    // }
    // const h5Base = './index.html?page=';
    // // in Native
    // let base = nativeBase;
    // // 判断当前设备
    // if (!isAndroidAssets && !isiOSAssets) {
    //     // check if in weexpack project
    //     if (path === 'web' || path === 'dist') {
    //         base = h5Base + '/dist/page/';
    //     } else {
    //         base = h5Base + '';
    //     }
    // } else {
    //     base = nativeBase + (!!path? path+'/':'');
    //     // base = nativeBase + (!!path? path+'/':'');
    // }
    // const newUrl = base + jsFile;
    // return newUrl;
};

// 数组排序
util.setArrSort = function(arr, val, type, status){
    var arr = arr instanceof Array ? arr : []
    var newArr = []
    var statusObj = {}
    for (var j = 1; j <= arr.length; j++) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i][val] == j) {
                newArr.push(arr[i])
            }
            if (status >= 9 && arr[i][val] == status) {
                statusObj = arr[i]
            }
        }
    }
    // 订单状态
    if (type && type == 'order') {
        newArr.unshift(newArr[3])
        newArr.pop()
        if(status >= 9){
            newArr.splice(1, 3, statusObj)
        }
    }
    // 采购单状态
    if (type && type == 'purchase') {
        newArr.splice(newArr.length-3, 3)
        if(status >= 9){
            newArr.splice(3, 10, statusObj)
        }
    }
    return newArr
}

util.length = function(obj) {
    var count = 0;
    for(var i in obj){
        count ++;
    }
    return count;
};

util.getNumber0 = function (obj){
    for(var i in obj){
        obj[i] == '' ? obj[i] = 0 : ''
    }
    return obj
}

export default util;
