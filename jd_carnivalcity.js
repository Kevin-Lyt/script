/*
 * @Author: LXK9301 https://github.com/LXK9301
 * @Date: 2020-11-03 09:25:47
 * @Last Modified by: LXK9301
 * @Last Modified time: 2021-4-2 10:27:07
 */
/*
京东手机狂欢城活动，每日可获得20+以上京豆（其中20京豆是往期奖励，需第一天参加活动后，第二天才能拿到）
活动时间: 2021-4-1至2021-4-20
活动入口：暂无 [活动地址](https://carnivalcity.m.jd.com/)

往期奖励：
a、 4月1日-4月20日期间第1名可获得实物手机一部，4月1日/16日/17日/18日/19日/20日 第1名/418名获得手机。
b、 每日第2-10000名，可获得50个京豆
c、 每日第10001-30000名可获得20个京豆
d、 30000名之外，0京豆


脚本兼容: QuantumultX, Surge, Loon, JSBox, Node.js
===================quantumultx================
[task_local]
#京东手机狂欢城
0 0-18/6 * * * https://gitee.com/lxk0301/jd_scripts/raw/master/jd_carnivalcity.js, tag=京东手机狂欢城, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/jd.png, enabled=true

=====================Loon================
[Script]
cron "0 0-18/6 * * *" script-path=https://gitee.com/lxk0301/jd_scripts/raw/master/jd_carnivalcity.js, tag=京东手机狂欢城

====================Surge================
京东手机狂欢城 = type=cron,cronexp=0 0-18/6 * * *,wake-system=1,timeout=3600,script-path=https://gitee.com/lxk0301/jd_scripts/raw/master/jd_carnivalcity.js

============小火箭=========
5G狂欢城 = type=cron,script-path=https://gitee.com/lxk0301/jd_scripts/raw/master/jd_carnivalcity.js, cronexpr="0 0,6,12,18 * * *", timeout=3600, enable=true
*/
const $ = new Env('京东手机狂欢城');
const notify = $.isNode() ? require('./sendNotify') : '';
//Node.js用户请在jdCookie.js处填写京东ck;
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';

//IOS等用户直接用NobyDa的jd cookie
!function(n){"use strict";function r(n,r){var t=(65535&n)+(65535&r);return(n>>16)+(r>>16)+(t>>16)<<16|65535&t}function t(n,r){return n<<r|n>>>32-r}function u(n,u,e,o,c,f){return r(t(r(r(u,n),r(o,f)),c),e)}function e(n,r,t,e,o,c,f){return u(r&t|~r&e,n,r,o,c,f)}function o(n,r,t,e,o,c,f){return u(r&e|t&~e,n,r,o,c,f)}function c(n,r,t,e,o,c,f){return u(r^t^e,n,r,o,c,f)}function f(n,r,t,e,o,c,f){return u(t^(r|~e),n,r,o,c,f)}function i(n,t){n[t>>5]|=128<<t%32,n[14+(t+64>>>9<<4)]=t;var u,i,a,h,g,l=1732584193,d=-271733879,v=-1732584194,C=271733878;for(u=0;u<n.length;u+=16)i=l,a=d,h=v,g=C,d=f(d=f(d=f(d=f(d=c(d=c(d=c(d=c(d=o(d=o(d=o(d=o(d=e(d=e(d=e(d=e(d,v=e(v,C=e(C,l=e(l,d,v,C,n[u],7,-680876936),d,v,n[u+1],12,-389564586),l,d,n[u+2],17,606105819),C,l,n[u+3],22,-1044525330),v=e(v,C=e(C,l=e(l,d,v,C,n[u+4],7,-176418897),d,v,n[u+5],12,1200080426),l,d,n[u+6],17,-1473231341),C,l,n[u+7],22,-45705983),v=e(v,C=e(C,l=e(l,d,v,C,n[u+8],7,1770035416),d,v,n[u+9],12,-1958414417),l,d,n[u+10],17,-42063),C,l,n[u+11],22,-1990404162),v=e(v,C=e(C,l=e(l,d,v,C,n[u+12],7,1804603682),d,v,n[u+13],12,-40341101),l,d,n[u+14],17,-1502002290),C,l,n[u+15],22,1236535329),v=o(v,C=o(C,l=o(l,d,v,C,n[u+1],5,-165796510),d,v,n[u+6],9,-1069501632),l,d,n[u+11],14,643717713),C,l,n[u],20,-373897302),v=o(v,C=o(C,l=o(l,d,v,C,n[u+5],5,-701558691),d,v,n[u+10],9,38016083),l,d,n[u+15],14,-660478335),C,l,n[u+4],20,-405537848),v=o(v,C=o(C,l=o(l,d,v,C,n[u+9],5,568446438),d,v,n[u+14],9,-1019803690),l,d,n[u+3],14,-187363961),C,l,n[u+8],20,1163531501),v=o(v,C=o(C,l=o(l,d,v,C,n[u+13],5,-1444681467),d,v,n[u+2],9,-51403784),l,d,n[u+7],14,1735328473),C,l,n[u+12],20,-1926607734),v=c(v,C=c(C,l=c(l,d,v,C,n[u+5],4,-378558),d,v,n[u+8],11,-2022574463),l,d,n[u+11],16,1839030562),C,l,n[u+14],23,-35309556),v=c(v,C=c(C,l=c(l,d,v,C,n[u+1],4,-1530992060),d,v,n[u+4],11,1272893353),l,d,n[u+7],16,-155497632),C,l,n[u+10],23,-1094730640),v=c(v,C=c(C,l=c(l,d,v,C,n[u+13],4,681279174),d,v,n[u],11,-358537222),l,d,n[u+3],16,-722521979),C,l,n[u+6],23,76029189),v=c(v,C=c(C,l=c(l,d,v,C,n[u+9],4,-640364487),d,v,n[u+12],11,-421815835),l,d,n[u+15],16,530742520),C,l,n[u+2],23,-995338651),v=f(v,C=f(C,l=f(l,d,v,C,n[u],6,-198630844),d,v,n[u+7],10,1126891415),l,d,n[u+14],15,-1416354905),C,l,n[u+5],21,-57434055),v=f(v,C=f(C,l=f(l,d,v,C,n[u+12],6,1700485571),d,v,n[u+3],10,-1894986606),l,d,n[u+10],15,-1051523),C,l,n[u+1],21,-2054922799),v=f(v,C=f(C,l=f(l,d,v,C,n[u+8],6,1873313359),d,v,n[u+15],10,-30611744),l,d,n[u+6],15,-1560198380),C,l,n[u+13],21,1309151649),v=f(v,C=f(C,l=f(l,d,v,C,n[u+4],6,-145523070),d,v,n[u+11],10,-1120210379),l,d,n[u+2],15,718787259),C,l,n[u+9],21,-343485551),l=r(l,i),d=r(d,a),v=r(v,h),C=r(C,g);return[l,d,v,C]}function a(n){var r,t="",u=32*n.length;for(r=0;r<u;r+=8)t+=String.fromCharCode(n[r>>5]>>>r%32&255);return t}function h(n){var r,t=[];for(t[(n.length>>2)-1]=void 0,r=0;r<t.length;r+=1)t[r]=0;var u=8*n.length;for(r=0;r<u;r+=8)t[r>>5]|=(255&n.charCodeAt(r/8))<<r%32;return t}function g(n){return a(i(h(n),8*n.length))}function l(n,r){var t,u,e=h(n),o=[],c=[];for(o[15]=c[15]=void 0,e.length>16&&(e=i(e,8*n.length)),t=0;t<16;t+=1)o[t]=909522486^e[t],c[t]=1549556828^e[t];return u=i(o.concat(h(r)),512+8*r.length),a(i(c.concat(u),640))}function d(n){var r,t,u="";for(t=0;t<n.length;t+=1)r=n.charCodeAt(t),u+="0123456789abcdef".charAt(r>>>4&15)+"0123456789abcdef".charAt(15&r);return u}function v(n){return unescape(encodeURIComponent(n))}function C(n){return g(v(n))}function A(n){return d(C(n))}function m(n,r){return l(v(n),v(r))}function s(n,r){return d(m(n,r))}function b(n,r,t){return r?t?m(r,n):s(r,n):t?C(n):A(n)}$.md5=b}();
let cookiesArr = [], cookie = '', message = '', allMessage = '';

/*
 *Progcessed By JSDec in 2.70s
 *JSDec - JSDec.js.org
 */
if ($['isNode']()) {
    Object['keys'](jdCookieNode)['forEach'](_0x2cf743 => {
        cookiesArr['push'](jdCookieNode[_0x2cf743]);
    });
    if (process['env']['JD_DEBUG'] && process['env']['JD_DEBUG'] === 'false') console['log'] = () => {};
    if (JSON['stringify'](process['env'])['indexOf']('GITHUB') > -0x1) process['exit'](0x0);
} else {
    cookiesArr = [$['getdata']('CookieJD'), $['getdata']('CookieJD2'), ...jsonParse($['getdata']('CookiesJD') || '[]')['map'](_0x2d9fd1 => _0x2d9fd1['cookie'])]['filter'](_0x54292f => !!_0x54292f);
}
let inviteCodes = [];
const JD_API_HOST = 'https://carnivalcity.m.jd.com';
const activeEndTime = '2021/4/20 00:59:59+08:00';
!(async () => {
    var _0x2d3ef9 = {
        'hKYwl': function(_0x6c9bab, _0x2a610d) {
            return _0x6c9bab === _0x2a610d;
        },
        'jemBv': 'code',
        'gpFPd': 'data',
        'dIYiY': 'jingBean',
        'uluAy': '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取',
        'gpNdx': 'https://bean.m.jd.com/bean/signIndex.action',
        'IPWkb': function(_0x5b50ba) {
            return _0x5b50ba();
        },
        'cclSo': function(_0x2d70ae, _0x1e9ea8) {
            return _0x2d70ae < _0x1e9ea8;
        },
        'XpreN': function(_0x533e5d, _0x2d9020) {
            return _0x533e5d(_0x2d9020);
        },
        'agfqv': function(_0x382d17, _0x20f1d8) {
            return _0x382d17 + _0x20f1d8;
        },
        'KrdFP': function(_0x5af7c7) {
            return _0x5af7c7();
        },
        'LunVm': function(_0x5ef840, _0x1d3a2d) {
            return _0x5ef840 !== _0x1d3a2d;
        },
        'bgtoJ': 'EokFI',
        'ufRju': 'tGkbI',
        'baLWK': function(_0x5bf0f4) {
            return _0x5bf0f4();
        },
        'aKARP': 'VFjno',
        'myULj': 'AVnHm'
    };
    if (!cookiesArr[0x0]) {
        $['msg']($['name'], _0x2d3ef9['uluAy'], _0x2d3ef9['gpNdx'], {
            'open-url': _0x2d3ef9['gpNdx']
        });
        return;
    }
    $['temp'] = [];
    await _0x2d3ef9['IPWkb'](updateShareCodesCDN);
    await _0x2d3ef9['IPWkb'](requireConfig);
    for (let _0xa53d92 = 0x0; _0x2d3ef9['cclSo'](_0xa53d92, cookiesArr['length']); _0xa53d92++) {
        if (cookiesArr[_0xa53d92]) {
            cookie = cookiesArr[_0xa53d92];
            $['UserName'] = _0x2d3ef9['XpreN'](decodeURIComponent, cookie['match'](/pt_pin=([^; ]+)(?=;?)/) && cookie['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1]);
            $['index'] = _0x2d3ef9['agfqv'](_0xa53d92, 0x1);
            $['isLogin'] = !![];
            $['nickName'] = '';
            $['jingBeanNum'] = 0x0;
            $['integralCount'] = 0x0;
            $['integer'] = 0x0;
            $['lasNum'] = 0x0;
            $['num'] = 0x0;
            $['beans'] = 0x0;
            $['blockAccount'] = ![];
            message = '';
            await _0x2d3ef9['KrdFP'](TotalBean);
            console['log']('\n开始【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']) + '\x0a');
            if (!$['isLogin']) {
                if (_0x2d3ef9['LunVm'](_0x2d3ef9['bgtoJ'], _0x2d3ef9['ufRju'])) {
                    $['msg']($['name'], '【提示】cookie已失效', '京东账号' + $['index'] + ' ' + ($['nickName'] || $['UserName']) + '\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action', {
                        'open-url': _0x2d3ef9['gpNdx']
                    });
                    if ($['isNode']()) {
                        await notify['sendNotify']($['name'] + 'cookie已失效 - ' + $['UserName'], '京东账号' + $['index'] + ' ' + $['UserName'] + '\n请重新登录获取cookie');
                    }
                    continue;
                } else {
                    $['integer'] = data['data']['myRank']['integral'];
                    $['num'] = data['data']['myRank']['rank'];
                    message += '当前获得积分：' + $['integer'] + '\x0a';
                    message += '当前获得排名：' + $['num'] + '\x0a';
                }
            }
            await _0x2d3ef9['KrdFP'](shareCodesFormat);
            await _0x2d3ef9['baLWK'](JD818);
        }
    }
    if (allMessage) {
        if ($['isNode']()) {
            if (_0x2d3ef9['LunVm'](_0x2d3ef9['aKARP'], _0x2d3ef9['myULj'])) {
                await notify['sendNotify']($['name'], allMessage, {
                    'url': JD_API_HOST
                });
                $['msg']($['name'], '', allMessage);
            } else {
                if (err) {
                    console['log']('' + JSON['stringify'](err));
                    console['log']($['name'] + ' API请求失败，请检查网路重试');
                } else {
                    console['log']('getBrowsePrize 领取奖励 结果:' + data);
                    data = JSON['parse'](data);
                    if (data && _0x2d3ef9['hKYwl'](data[_0x2d3ef9['jemBv']], 0xc8)) {
                        if (data[_0x2d3ef9['gpFPd']][_0x2d3ef9['dIYiY']]) $['beans'] += data[_0x2d3ef9['gpFPd']][_0x2d3ef9['dIYiY']];
                    }
                }
            }
        }
    }
})()['catch'](_0x281892 => {
    $['log']('', '❌ ' + $['name'] + ', 失败! 原因: ' + _0x281892 + '!', '');
})['finally'](() => {
    $['done']();
});
async function JD818() {
    var _0x57f1d9 = {
        'iGTLP': function(_0xe3af91, _0x361767) {
            return _0xe3af91(_0x361767);
        },
        'zGztH': function(_0x5a6ee2, _0x18a5c8) {
            return _0x5a6ee2 !== _0x18a5c8;
        },
        'pWDzV': 'NyenV',
        'vfQcA': 'AkwDj',
        'fDNng': '1|5|6|4|7|12|2|11|9|8|3|0|10',
        'AJCsj': function(_0x4d6c24) {
            return _0x4d6c24();
        },
        'ZBDZi': function(_0x4fdb7e) {
            return _0x4fdb7e();
        },
        'tpOfH': function(_0x199deb) {
            return _0x199deb();
        }
    };
    try {
        if (_0x57f1d9['zGztH'](_0x57f1d9['pWDzV'], _0x57f1d9['vfQcA'])) {
            var _0x4b57d2 = _0x57f1d9['fDNng']['split']('|'),
                _0xec343 = 0x0;
            while (!![]) {
                switch (_0x4b57d2[_0xec343++]) {
                    case '0':
                        await _0x57f1d9['AJCsj'](getListJbean);
                        continue;
                    case '1':
                        await _0x57f1d9['AJCsj'](indexInfo);
                        continue;
                    case '2':
                        await _0x57f1d9['AJCsj'](doBrowseshopTask);
                        continue;
                    case '3':
                        await _0x57f1d9['AJCsj'](getListIntegral);
                        continue;
                    case '4':
                        await _0x57f1d9['iGTLP'](indexInfo, !![]);
                        continue;
                    case '5':
                        await _0x57f1d9['AJCsj'](getHelp);
                        continue;
                    case '6':
                        if ($['blockAccount']) return;
                        continue;
                    case '7':
                        await _0x57f1d9['AJCsj'](doHotProducttask);
                        continue;
                    case '8':
                        await _0x57f1d9['AJCsj'](getListRank);
                        continue;
                    case '9':
                        await _0x57f1d9['AJCsj'](myRank);
                        continue;
                    case '10':
                        await _0x57f1d9['AJCsj'](showMsg);
                        continue;
                    case '11':
                        await _0x57f1d9['ZBDZi'](doHelp);
                        continue;
                    case '12':
                        await _0x57f1d9['tpOfH'](doBrandTask);
                        continue;
                }
                break;
            }
        } else {
            _0x57f1d9['iGTLP'](resolve, data);
        }
    } catch (_0x4e08ff) {
        $['logErr'](_0x4e08ff);
    }
}
async function doHotProducttask() {
    var _0x3d54f2 = {
        'DsCHk': function(_0x1cc365, _0x555f7e, _0xc516ad, _0x5817ea, _0x119734, _0x3fc85c) {
            return _0x1cc365(_0x555f7e, _0xc516ad, _0x5817ea, _0x119734, _0x3fc85c);
        },
        'ksFzu': 'hot',
        'ryjPI': 'browse',
        'dCyAE': 'browseHotSku',
        'agqMK': function(_0x197d73, _0x4aae63) {
            return _0x197d73(_0x4aae63);
        }
    };
    $['hotProductList'] = $['hotProductList']['filter'](_0x220c35 => !!_0x220c35 && _0x220c35['status'] === '1');
    if ($['hotProductList'] && $['hotProductList']['length']) console['log']('开始 【浏览热销手机产品】任务');
    for (let _0x2d34a7 of $['hotProductList']) {
        await _0x3d54f2['DsCHk'](doBrowse, _0x2d34a7['id'], '', _0x3d54f2['ksFzu'], _0x3d54f2['ryjPI'], _0x3d54f2['dCyAE']);
        await $['wait'](0xc8);
        if ($['browseId']) {
            await _0x3d54f2['agqMK'](getBrowsePrize, $['browseId']);
        }
    }
}

function doBrowse(_0x2e1c48 = '', _0x294968 = '', _0x2e8bf5 = 'hot', _0x14558a = 'browse', _0x42f671 = 'browseHotSku') {
    var _0x45401b = {
        'XQQEB': function(_0x4d9c77, _0x2a9703) {
            return _0x4d9c77(_0x2a9703);
        },
        'Zneoc': function(_0x3729a1, _0x10412f) {
            return _0x3729a1 === _0x10412f;
        },
        'jUmEH': function(_0x4ace60, _0x5ec89f) {
            return _0x4ace60 === _0x5ec89f;
        },
        'UTTie': 'ezbOf',
        'weMZi': 'BnhpY',
        'dVerj': 'code',
        'MdidZ': function(_0xc5226c, _0x24095f) {
            return _0xc5226c !== _0x24095f;
        },
        'dtTMI': 'axUvZ',
        'ACIzs': 'data',
        'dDtsb': 'browseId',
        'stUnQ': 'ExjKu',
        'gzjkB': 'DCGOq',
        'OhOxn': function(_0x37fd04) {
            return _0x37fd04();
        },
        'MIsAS': function(_0x23ecfe, _0xefc18, _0x9aeb1a) {
            return _0x23ecfe(_0xefc18, _0x9aeb1a);
        },
        'CmOpl': '/khc/task/doBrowse'
    };
    return new Promise(_0x5bfd16 => {
        var _0x3824b1 = {
            'QDBJk': function(_0x29b502, _0x424667) {
                return _0x45401b['XQQEB'](_0x29b502, _0x424667);
            },
            'TzmmR': function(_0x5b9858, _0x343b7c) {
                return _0x45401b['Zneoc'](_0x5b9858, _0x343b7c);
            },
            'nEPEp': function(_0x31277e, _0x54110b) {
                return _0x45401b['jUmEH'](_0x31277e, _0x54110b);
            },
            'aVLZV': _0x45401b['UTTie'],
            'OFuZu': _0x45401b['weMZi'],
            'hbwmL': _0x45401b['dVerj'],
            'LPIIT': function(_0x5365e3, _0xb69660) {
                return _0x45401b['MdidZ'](_0x5365e3, _0xb69660);
            },
            'kxmtd': _0x45401b['dtTMI'],
            'OkyIv': _0x45401b['ACIzs'],
            'pGlVJ': _0x45401b['dDtsb'],
            'GGScs': _0x45401b['stUnQ'],
            'gjquC': _0x45401b['gzjkB'],
            'oMxQA': function(_0x131a9d) {
                return _0x45401b['OhOxn'](_0x131a9d);
            }
        };
        const _0x1f9e54 = 'brandId=' + _0x294968 + '&id=' + _0x2e1c48 + '&taskMark=' + _0x2e8bf5 + '&type=' + _0x14558a + '&logMark=' + _0x42f671;
        const _0xa0e6bb = _0x45401b['MIsAS'](taskPostUrl, _0x45401b['CmOpl'], _0x1f9e54);
        $['post'](_0xa0e6bb, (_0x22438d, _0x2b678a, _0x5c90c9) => {
            try {
                if (_0x3824b1['nEPEp'](_0x3824b1['aVLZV'], _0x3824b1['OFuZu'])) {
                    _0x3824b1['QDBJk'](_0x5bfd16, _0x5c90c9);
                } else {
                    if (_0x22438d) {
                        console['log']('' + JSON['stringify'](_0x22438d));
                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                    } else {
                        console['log']('doBrowse 做' + _0x2e8bf5 + '任务:' + _0x5c90c9);
                        _0x5c90c9 = JSON['parse'](_0x5c90c9);
                        if (_0x5c90c9 && _0x3824b1['nEPEp'](_0x5c90c9[_0x3824b1['hbwmL']], 0xc8)) {
                            if (_0x3824b1['LPIIT'](_0x3824b1['kxmtd'], _0x3824b1['kxmtd'])) {
                                $['logErr'](e, _0x2b678a);
                            } else {
                                $['browseId'] = _0x5c90c9[_0x3824b1['OkyIv']][_0x3824b1['pGlVJ']] || '';
                            }
                        } else {
                            console['log']('doBrowse异常');
                        }
                    }
                }
            } catch (_0x475370) {
                $['logErr'](_0x475370, _0x2b678a);
            } finally {
                if (_0x3824b1['nEPEp'](_0x3824b1['GGScs'], _0x3824b1['gjquC'])) {
                    _0x5c90c9 = JSON['parse'](_0x5c90c9);
                    if (_0x3824b1['TzmmR'](_0x5c90c9['code'], 0xc8)) {
                        $['jingBeanNum'] = _0x5c90c9['data']['jingBeanNum'] || 0x0;
                        message += '累计获得京豆：' + $['jingBeanNum'] + '🐶\n';
                    } else {
                        console['log']('jingBeanRecord失败：' + JSON['stringify'](_0x5c90c9));
                    }
                } else {
                    _0x3824b1['oMxQA'](_0x5bfd16);
                }
            }
        });
    });
}

function getBrowsePrize(_0x2cae20, _0x5aab5d = '') {
    var _0x3cafd6 = {
        'iJJkG': function(_0x1cf109, _0x3066c7) {
            return _0x1cf109(_0x3066c7);
        },
        'EXXvk': function(_0x254542, _0x12a535) {
            return _0x254542 === _0x12a535;
        },
        'nAXPV': 'mVxKd',
        'YImEG': function(_0x342be0, _0x5339eb) {
            return _0x342be0 !== _0x5339eb;
        },
        'lgYHs': 'nodPi',
        'eYMJA': 'kqfJu',
        'CFivg': 'code',
        'VqfFJ': function(_0xe5e447, _0x176aa4) {
            return _0xe5e447 !== _0x176aa4;
        },
        'IhRSU': 'FQEiQ',
        'vgaRs': 'tUbWu',
        'iBXON': 'data',
        'BDMRr': 'jingBean',
        'dkEDd': function(_0x3b2dde, _0x281b84) {
            return _0x3b2dde(_0x281b84);
        },
        'rWSKm': function(_0xb3c88b, _0x4acdf5) {
            return _0xb3c88b == _0x4acdf5;
        },
        'MONdb': 'string',
        'kFWEX': function(_0x243983, _0x28310a) {
            return _0x243983 + _0x28310a;
        },
        'mTVBl': 'object',
        'iVikr': function(_0x549105, _0x7d9291) {
            return _0x549105(_0x7d9291);
        },
        'PoAEE': function(_0x5dedcf, _0x11938b) {
            return _0x5dedcf + _0x11938b;
        },
        'mMzNo': function(_0xd0c25b, _0x32fada) {
            return _0xd0c25b + _0x32fada;
        },
        'ovdQn': function(_0x18df77, _0x47b36c) {
            return _0x18df77 + _0x47b36c;
        },
        'pQkFk': 'hQguw',
        'boQoO': function(_0x4a4a91, _0x7722a3, _0x2ae00c) {
            return _0x4a4a91(_0x7722a3, _0x2ae00c);
        },
        'rPqjV': '/khc/task/getBrowsePrize'
    };
    return new Promise(_0xe1cdbb => {
        var _0x1463ba = {
            'wXQuV': function(_0x5188ea, _0x21240f) {
                return _0x3cafd6['rWSKm'](_0x5188ea, _0x21240f);
            },
            'AzpWd': _0x3cafd6['MONdb'],
            'NWBBP': function(_0x52f295, _0x4b5c0b) {
                return _0x3cafd6['kFWEX'](_0x52f295, _0x4b5c0b);
            },
            'TcDfk': function(_0x5a9993, _0x3d6ca2) {
                return _0x3cafd6['rWSKm'](_0x5a9993, _0x3d6ca2);
            },
            'wjjXA': _0x3cafd6['mTVBl'],
            'TVZOz': function(_0x5aea72, _0x18cb12) {
                return _0x3cafd6['iVikr'](_0x5aea72, _0x18cb12);
            },
            'cCJev': function(_0x1c3591, _0x35ab6c) {
                return _0x3cafd6['PoAEE'](_0x1c3591, _0x35ab6c);
            },
            'AcOKF': function(_0x46612f, _0x4c8b8c) {
                return _0x3cafd6['mMzNo'](_0x46612f, _0x4c8b8c);
            },
            'kggIy': function(_0x1d455a, _0x220c26) {
                return _0x3cafd6['ovdQn'](_0x1d455a, _0x220c26);
            }
        };
        if (_0x3cafd6['VqfFJ'](_0x3cafd6['pQkFk'], _0x3cafd6['pQkFk'])) {
            if (err) {
                console['log']('' + JSON['stringify'](err));
                console['log']($['name'] + ' API请求失败，请检查网路重试');
            } else {
                data = JSON['parse'](data);
            }
        } else {
            const _0x3e2cd7 = 'brandId=' + _0x5aab5d + '&browseId=' + _0x2cae20;
            const _0x47fdfe = _0x3cafd6['boQoO'](taskPostUrl, _0x3cafd6['rPqjV'], _0x3e2cd7);
            $['post'](_0x47fdfe, (_0x3386cb, _0x5afd72, _0x4d7f90) => {
                var _0x331985 = {
                    'OVzag': function(_0x4b7bf7, _0x3bafba) {
                        return _0x3cafd6['iJJkG'](_0x4b7bf7, _0x3bafba);
                    }
                };
                if (_0x3cafd6['EXXvk'](_0x3cafd6['nAXPV'], _0x3cafd6['nAXPV'])) {
                    try {
                        if (_0x3386cb) {
                            console['log']('' + JSON['stringify'](_0x3386cb));
                            console['log']($['name'] + ' API请求失败，请检查网路重试');
                        } else {
                            if (_0x3cafd6['YImEG'](_0x3cafd6['lgYHs'], _0x3cafd6['eYMJA'])) {
                                console['log']('getBrowsePrize 领取奖励 结果:' + _0x4d7f90);
                                _0x4d7f90 = JSON['parse'](_0x4d7f90);
                                if (_0x4d7f90 && _0x3cafd6['EXXvk'](_0x4d7f90[_0x3cafd6['CFivg']], 0xc8)) {
                                    if (_0x3cafd6['VqfFJ'](_0x3cafd6['IhRSU'], _0x3cafd6['vgaRs'])) {
                                        if (_0x4d7f90[_0x3cafd6['iBXON']][_0x3cafd6['BDMRr']]) $['beans'] += _0x4d7f90[_0x3cafd6['iBXON']][_0x3cafd6['BDMRr']];
                                    } else {
                                        _0x331985['OVzag'](_0xe1cdbb, _0x4d7f90);
                                    }
                                }
                            } else {
                                if (_0x3386cb) {
                                    console['log']('' + JSON['stringify'](_0x3386cb));
                                    console['log']($['name'] + ' API请求失败，请检查网路重试');
                                } else {
                                    $['updatePkActivityIdRes'] = JSON['parse'](_0x4d7f90);
                                }
                            }
                        }
                    } catch (_0x567f24) {
                        $['logErr'](_0x567f24, _0x5afd72);
                    } finally {
                        _0x3cafd6['dkEDd'](_0xe1cdbb, _0x4d7f90);
                    }
                } else {
                    var _0x5c5340 = '',
                        _0x393ddd = n['split']('?')[0x1] || '';
                    if (t) {
                        if (_0x1463ba['wXQuV'](_0x1463ba['AzpWd'], typeof t)) _0x5c5340 = _0x1463ba['NWBBP'](t, _0x393ddd);
                        else if (_0x1463ba['TcDfk'](_0x1463ba['wjjXA'], _0x1463ba['TVZOz'](P, t))) {
                            var _0x31d9df = [];
                            for (var _0x29d745 in t) _0x31d9df['push'](_0x1463ba['cCJev'](_0x1463ba['cCJev'](_0x29d745, '='), t[_0x29d745]));
                            _0x5c5340 = _0x31d9df['length'] ? _0x1463ba['AcOKF'](_0x31d9df['join']('&'), _0x393ddd) : _0x393ddd;
                        }
                    } else _0x5c5340 = _0x393ddd;
                    if (_0x5c5340) {
                        var _0xd6e907 = _0x5c5340['split']('&')['sort']()['join']('');
                        return $['md5'](_0x1463ba['kggIy'](_0xd6e907, e));
                    }
                    return $['md5'](e);
                }
            });
        }
    });
}
async function doBrandTask() {
    var _0x539b68 = {
        'DKjAH': function(_0x382ac6, _0x428d5f) {
            return _0x382ac6(_0x428d5f);
        },
        'LQEYy': 'brandId'
    };
    for (let _0x58ebd3 of $['brandList']) {
        await _0x539b68['DKjAH'](brandTaskInfo, _0x58ebd3[_0x539b68['LQEYy']]);
    }
}

function brandTaskInfo(_0x4e4876) {
    var _0x36bf55 = {
        'hJiot': function(_0x58d6c8, _0x515661) {
            return _0x58d6c8(_0x515661);
        },
        'jaFJz': function(_0x466cda, _0x322374) {
            return _0x466cda + _0x322374;
        },
        'iRXnF': function(_0x23f947, _0x363c48) {
            return _0x23f947 + _0x363c48;
        },
        'xTLYS': function(_0x245feb, _0x3d5cb5) {
            return _0x245feb === _0x3d5cb5;
        },
        'JkXWL': 'TyyUQ',
        'CLXiF': 'bsEAr',
        'GdJHg': function(_0x56c1cc, _0x40e291) {
            return _0x56c1cc !== _0x40e291;
        },
        'SmcZX': 'hOoSc',
        'vGjel': 'YTEuK',
        'SuRzf': 'teZGZ',
        'BGrmh': function(_0x2433dc, _0x1c64a6) {
            return _0x2433dc === _0x1c64a6;
        },
        'UMvcW': 'IzwWZ',
        'wqFBf': 'data',
        'jqsBV': 'brandId',
        'sPhCI': 'skuTask',
        'vkAnN': 'shopTask',
        'PkWbO': 'meetingTask',
        'amzVm': 'questionTask',
        'BTnNt': 'yEXJo',
        'BAllV': '1|2|3|4|0',
        'VWpGz': function(_0x1b8b70, _0x15b3ec, _0x38a0d6) {
            return _0x1b8b70(_0x15b3ec, _0x38a0d6);
        },
        'VXxys': 'brandName',
        'TsJuQ': 'name',
        'QtMor': function(_0x2576be, _0x43e510, _0x424879, _0x44b4c0, _0x5677e9, _0x30178b) {
            return _0x2576be(_0x43e510, _0x424879, _0x44b4c0, _0x5677e9, _0x30178b);
        },
        'qlOjZ': 'brand',
        'jvEIn': 'presell',
        'tBgIl': 'browseSku',
        'tKbSo': '0|4|2|3|1',
        'bbwBu': function(_0x260460, _0x12ab1a, _0x523b46) {
            return _0x260460(_0x12ab1a, _0x523b46);
        },
        'QALUr': 'follow',
        'EiFhi': 'browseShop',
        'RimLj': 'iyetV',
        'epHsU': '1|3|0|4|2',
        'Dtplu': function(_0x5c7b61, _0x7470e3, _0x102db7, _0x1fae9c, _0x2b3e19, _0x100d36) {
            return _0x5c7b61(_0x7470e3, _0x102db7, _0x1fae9c, _0x2b3e19, _0x100d36);
        },
        'XhWPc': 'meeting',
        'lhtsk': 'browseVenue',
        'xZWZu': function(_0x31da94, _0xefc5d3, _0x2c368f) {
            return _0x31da94(_0xefc5d3, _0x2c368f);
        },
        'GBjNe': function(_0x1aee24, _0x12c4d5) {
            return _0x1aee24 === _0x12c4d5;
        },
        'QdBaD': 'result',
        'rdomT': 'question',
        'waOvF': function(_0x136f60, _0x115b17) {
            return _0x136f60 < _0x115b17;
        },
        'tPUbC': 'answers',
        'jFUUt': 'CvHGV',
        'euNMA': 'RNnPx',
        'UpdvJ': 'right',
        'gBvYk': function(_0x4c6b83, _0x3e7a31) {
            return _0x4c6b83 !== _0x3e7a31;
        },
        'oQHQo': 'iKpDp',
        'lcQmH': function(_0x1c854d, _0x6f5fd, _0x3830d3, _0x4b436a) {
            return _0x1c854d(_0x6f5fd, _0x3830d3, _0x4b436a);
        },
        'JNOGs': 'WHdjy',
        'SfowH': 'aaNaU',
        'hKcIX': '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取',
        'TotSG': 'https://bean.m.jd.com/bean/signIndex.action',
        'JRtHh': 'function',
        'QhCGg': function(_0xb3b050, _0x58eb40) {
            return _0xb3b050 === _0x58eb40;
        },
        'GpUTz': function(_0x1d12bd, _0x51afa7) {
            return _0x1d12bd !== _0x51afa7;
        },
        'htUyG': 'symbol',
        'FANvl': 'code',
        'XqXEs': 'jingBean',
        'Ohnbv': function(_0x49c229, _0x62d388) {
            return _0x49c229 === _0x62d388;
        },
        'YiQfC': 'vdFkW',
        'CJfDf': 'tmyop',
        'YcSEm': '/khc/index/brandTaskInfo'
    };
    const _0x5d5b6f = _0x36bf55['xZWZu'](taskUrl, _0x36bf55['YcSEm'], {
        't': Date['now'](),
        'brandId': _0x4e4876
    });
    $['skuTask'] = [];
    $['shopTask'] = [];
    $['meetingTask'] = [];
    $['questionTask'] = {};
    return new Promise(_0x55d148 => {
        var _0x1fcb95 = {
            'bdjzw': _0x36bf55['hKcIX'],
            'IJPgL': _0x36bf55['TotSG'],
            'UYnUu': function(_0x9be912, _0x248979) {
                return _0x36bf55['GBjNe'](_0x9be912, _0x248979);
            },
            'QghOT': _0x36bf55['JRtHh'],
            'RAJRS': function(_0x2b0c50, _0x1d4eea) {
                return _0x36bf55['QhCGg'](_0x2b0c50, _0x1d4eea);
            },
            'bixhi': function(_0x5c521c, _0x5ecffc) {
                return _0x36bf55['GpUTz'](_0x5c521c, _0x5ecffc);
            },
            'JYTzQ': _0x36bf55['htUyG'],
            'JJRXi': function(_0x1d4b66, _0x34b46e) {
                return _0x36bf55['QhCGg'](_0x1d4b66, _0x34b46e);
            },
            'LiUKZ': _0x36bf55['FANvl'],
            'ZpHNy': _0x36bf55['wqFBf'],
            'uYQzp': _0x36bf55['XqXEs']
        };
        if (_0x36bf55['Ohnbv'](_0x36bf55['YiQfC'], _0x36bf55['CJfDf'])) {
            _0x36bf55['hJiot'](_0x55d148, data);
        } else {
            $['get'](_0x5d5b6f, async (_0x146078, _0x3bd5d2, _0x303f14) => {
                var _0x3db3b8 = {
                    'FXUTt': function(_0x1acfed, _0x4bdf9c) {
                        return _0x36bf55['jaFJz'](_0x1acfed, _0x4bdf9c);
                    },
                    'aaQLF': function(_0x4dfaab, _0x12852a) {
                        return _0x36bf55['iRXnF'](_0x4dfaab, _0x12852a);
                    }
                };
                try {
                    if (_0x36bf55['xTLYS'](_0x36bf55['JkXWL'], _0x36bf55['CLXiF'])) {
                        console['log']('失败：' + JSON['stringify'](_0x303f14));
                    } else {
                        if (_0x146078) {
                            if (_0x36bf55['GdJHg'](_0x36bf55['SmcZX'], _0x36bf55['vGjel'])) {
                                console['log']('' + JSON['stringify'](_0x146078));
                                console['log']($['name'] + ' API请求失败，请检查网路重试');
                            } else {
                                var _0x5556ee = [];
                                for (var _0x3bd7b1 in t) _0x5556ee['push'](_0x3db3b8['FXUTt'](_0x3db3b8['FXUTt'](_0x3bd7b1, '='), t[_0x3bd7b1]));
                                a = _0x5556ee['length'] ? _0x3db3b8['aaQLF'](_0x5556ee['join']('&'), i) : i;
                            }
                        } else {
                            if (_0x36bf55['GdJHg'](_0x36bf55['SuRzf'], _0x36bf55['SuRzf'])) {
                                $['shareCodesArr']['push'](shareCodes[item]);
                            } else {
                                _0x303f14 = JSON['parse'](_0x303f14);
                                if (_0x36bf55['xTLYS'](_0x303f14['code'], 0xc8)) {
                                    if (_0x36bf55['BGrmh'](_0x36bf55['UMvcW'], _0x36bf55['UMvcW'])) {
                                        let _0x4e4876 = _0x303f14[_0x36bf55['wqFBf']][_0x36bf55['jqsBV']];
                                        $['skuTask'] = _0x303f14[_0x36bf55['wqFBf']][_0x36bf55['sPhCI']] || [];
                                        $['shopTask'] = _0x303f14[_0x36bf55['wqFBf']][_0x36bf55['vkAnN']] || [];
                                        $['meetingTask'] = _0x303f14[_0x36bf55['wqFBf']][_0x36bf55['PkWbO']] || [];
                                        $['questionTask'] = _0x303f14[_0x36bf55['wqFBf']][_0x36bf55['amzVm']] || [];
                                        for (let _0x1992c5 of $['skuTask']['filter'](_0x5816e8 => !!_0x5816e8 && _0x5816e8['status'] !== '4')) {
                                            if (_0x36bf55['GdJHg'](_0x36bf55['BTnNt'], _0x36bf55['BTnNt'])) {
                                                $['msg']($['name'], _0x1fcb95['bdjzw'], _0x1fcb95['IJPgL'], {
                                                    'open-url': _0x1fcb95['IJPgL']
                                                });
                                                return;
                                            } else {
                                                var _0x3c1033 = _0x36bf55['BAllV']['split']('|'),
                                                    _0x3a16e9 = 0x0;
                                                while (!![]) {
                                                    switch (_0x3c1033[_0x3a16e9++]) {
                                                        case '0':
                                                            if ($['browseId']) await _0x36bf55['VWpGz'](getBrowsePrize, $['browseId'], _0x4e4876);
                                                            continue;
                                                        case '1':
                                                            console['log']('\n开始做 品牌手机 【' + _0x303f14[_0x36bf55['wqFBf']][_0x36bf55['VXxys']] + '】 任务');
                                                            continue;
                                                        case '2':
                                                            console['log']('开始浏览 1-F 单品区 任务 ' + _0x1992c5[_0x36bf55['TsJuQ']]);
                                                            continue;
                                                        case '3':
                                                            await _0x36bf55['QtMor'](doBrowse, _0x1992c5['id'], _0x4e4876, _0x36bf55['qlOjZ'], _0x36bf55['jvEIn'], _0x36bf55['tBgIl']);
                                                            continue;
                                                        case '4':
                                                            await $['wait'](0xc8);
                                                            continue;
                                                    }
                                                    break;
                                                }
                                            }
                                        }
                                        for (let _0x3a72a5 of $['shopTask']['filter'](_0x59a80d => !!_0x59a80d && _0x59a80d['status'] !== '4')) {
                                            var _0x34a9f0 = _0x36bf55['tKbSo']['split']('|'),
                                                _0x348d2e = 0x0;
                                            while (!![]) {
                                                switch (_0x34a9f0[_0x348d2e++]) {
                                                    case '0':
                                                        console['log']('\n开始做 品牌手机 【' + _0x303f14[_0x36bf55['wqFBf']][_0x36bf55['VXxys']] + '】 任务');
                                                        continue;
                                                    case '1':
                                                        if ($['browseId']) await _0x36bf55['bbwBu'](getBrowsePrize, $['browseId'], _0x4e4876);
                                                        continue;
                                                    case '2':
                                                        await _0x36bf55['QtMor'](doBrowse, _0x3a72a5['id'], _0x4e4876, _0x36bf55['qlOjZ'], _0x36bf55['QALUr'], _0x36bf55['EiFhi']);
                                                        continue;
                                                    case '3':
                                                        await $['wait'](0x2774);
                                                        continue;
                                                    case '4':
                                                        console['log']('开始浏览 2-F 专柜区 任务 ' + _0x3a72a5[_0x36bf55['TsJuQ']] + '，需等待10秒');
                                                        continue;
                                                }
                                                break;
                                            }
                                        }
                                        for (let _0x300e16 of $['meetingTask']['filter'](_0x3a4ce7 => !!_0x3a4ce7 && _0x3a4ce7['status'] !== '4')) {
                                            if (_0x36bf55['GdJHg'](_0x36bf55['RimLj'], _0x36bf55['RimLj'])) {
                                                $['logErr'](e, _0x3bd5d2);
                                            } else {
                                                var _0x2f6ffb = _0x36bf55['epHsU']['split']('|'),
                                                    _0x230ea9 = 0x0;
                                                while (!![]) {
                                                    switch (_0x2f6ffb[_0x230ea9++]) {
                                                        case '0':
                                                            await _0x36bf55['Dtplu'](doBrowse, _0x300e16['id'], _0x4e4876, _0x36bf55['qlOjZ'], _0x36bf55['XhWPc'], _0x36bf55['lhtsk']);
                                                            continue;
                                                        case '1':
                                                            console['log']('\n开始做 品牌手机 【' + _0x303f14[_0x36bf55['wqFBf']][_0x36bf55['VXxys']] + '】 任务');
                                                            continue;
                                                        case '2':
                                                            if ($['browseId']) await _0x36bf55['xZWZu'](getBrowsePrize, $['browseId'], _0x4e4876);
                                                            continue;
                                                        case '3':
                                                            console['log']('开始浏览 3-F 综合区 任务 ' + _0x300e16[_0x36bf55['TsJuQ']] + '，需等待10秒');
                                                            continue;
                                                        case '4':
                                                            await $['wait'](0x2904);
                                                            continue;
                                                    }
                                                    break;
                                                }
                                            }
                                        }
                                        if ($['questionTask']['hasOwnProperty']('id') && _0x36bf55['GBjNe']($['questionTask'][_0x36bf55['QdBaD']], '0')) {
                                            console['log']('\n开始做 品牌手机 【' + _0x303f14[_0x36bf55['wqFBf']][_0x36bf55['VXxys']] + '】 任务');
                                            console['log']('开始做答题任务 ' + $['questionTask'][_0x36bf55['rdomT']]);
                                            let _0x76930c = 0x0;
                                            for (let _0x4d73b4 = 0x0; _0x36bf55['waOvF'](_0x4d73b4, $['questionTask'][_0x36bf55['tPUbC']]['length']); _0x4d73b4++) {
                                                if (_0x36bf55['GBjNe'](_0x36bf55['jFUUt'], _0x36bf55['euNMA'])) {
                                                    if (shareCodes[item]) {
                                                        $['shareCodesArr']['push'](shareCodes[item]);
                                                    }
                                                } else {
                                                    if ($['questionTask'][_0x36bf55['tPUbC']][_0x4d73b4][_0x36bf55['UpdvJ']]) {
                                                        _0x76930c = _0x36bf55['iRXnF'](_0x4d73b4, 0x1);
                                                    }
                                                }
                                            }
                                            if (_0x36bf55['gBvYk'](_0x76930c, 0x0)) {
                                                if (_0x36bf55['GBjNe'](_0x36bf55['oQHQo'], _0x36bf55['oQHQo'])) {
                                                    await _0x36bf55['lcQmH'](doQuestion, _0x4e4876, $['questionTask']['id'], _0x76930c);
                                                } else {
                                                    console['log']('' + JSON['stringify'](_0x146078));
                                                    console['log']($['name'] + ' API请求失败，请检查网路重试');
                                                }
                                            }
                                        }
                                    } else {
                                        return t && _0x1fcb95['UYnUu'](_0x1fcb95['QghOT'], typeof Symbol) && _0x1fcb95['RAJRS'](t['constructor'], Symbol) && _0x1fcb95['bixhi'](t, Symbol['prototype']) ? _0x1fcb95['JYTzQ'] : typeof t;
                                    }
                                } else {
                                    console['log']('失败：' + JSON['stringify'](_0x303f14));
                                }
                            }
                        }
                    }
                } catch (_0x32e954) {
                    $['logErr'](_0x32e954, _0x3bd5d2);
                } finally {
                    if (_0x36bf55['gBvYk'](_0x36bf55['JNOGs'], _0x36bf55['SfowH'])) {
                        _0x36bf55['hJiot'](_0x55d148, _0x303f14);
                    } else {
                        console['log']('doQuestion 领取答题任务奖励 结果:' + _0x303f14);
                        _0x303f14 = JSON['parse'](_0x303f14);
                        if (_0x303f14 && _0x1fcb95['JJRXi'](_0x303f14[_0x1fcb95['LiUKZ']], 0xc8)) {
                            if (_0x303f14[_0x1fcb95['ZpHNy']][_0x1fcb95['uYQzp']]) $['beans'] += _0x303f14[_0x1fcb95['ZpHNy']][_0x1fcb95['uYQzp']];
                        }
                    }
                }
            });
        }
    });
}

function doQuestion(_0x5777c6, _0x53cda9, _0x3f474b) {
    var _0x5e8932 = {
        'tMsBU': function(_0x3e2242, _0x2b685f) {
            return _0x3e2242 !== _0x2b685f;
        },
        'QUuuZ': 'LFIkJ',
        'OSkyo': 'RDVGH',
        'CXSKf': function(_0x110ed0, _0x4965ed) {
            return _0x110ed0 === _0x4965ed;
        },
        'XAcHP': 'code',
        'NrrsJ': 'data',
        'DMEVo': 'jingBean',
        'RvSnL': 'tGcNi',
        'vZQDE': 'fBjHp',
        'QoFFH': function(_0x263731, _0x55322a) {
            return _0x263731(_0x55322a);
        },
        'zQqSI': function(_0x1aecab) {
            return _0x1aecab();
        },
        'RORQQ': 'WupgO',
        'eQVhp': function(_0x53444b, _0x4e1571, _0x3a3a62) {
            return _0x53444b(_0x4e1571, _0x3a3a62);
        },
        'zVKKY': '/khc/task/doQuestion'
    };
    return new Promise(_0x1577ef => {
        var _0x56fe6f = {
            'eoLdA': function(_0x2b7497) {
                return _0x5e8932['zQqSI'](_0x2b7497);
            }
        };
        if (_0x5e8932['tMsBU'](_0x5e8932['RORQQ'], _0x5e8932['RORQQ'])) {
            data = JSON['parse'](data);
        } else {
            const _0x17f81a = 'brandId=' + _0x5777c6 + '&questionId=' + _0x53cda9 + '&result=' + _0x3f474b;
            const _0x1f8961 = _0x5e8932['eQVhp'](taskPostUrl, _0x5e8932['zVKKY'], _0x17f81a);
            $['post'](_0x1f8961, (_0x364767, _0x10b7ab, _0x585e7f) => {
                if (_0x5e8932['tMsBU'](_0x5e8932['QUuuZ'], _0x5e8932['OSkyo'])) {
                    try {
                        if (_0x364767) {
                            console['log']('' + JSON['stringify'](_0x364767));
                            console['log']($['name'] + ' API请求失败，请检查网路重试');
                        } else {
                            console['log']('doQuestion 领取答题任务奖励 结果:' + _0x585e7f);
                            _0x585e7f = JSON['parse'](_0x585e7f);
                            if (_0x585e7f && _0x5e8932['CXSKf'](_0x585e7f[_0x5e8932['XAcHP']], 0xc8)) {
                                if (_0x585e7f[_0x5e8932['NrrsJ']][_0x5e8932['DMEVo']]) $['beans'] += _0x585e7f[_0x5e8932['NrrsJ']][_0x5e8932['DMEVo']];
                            }
                        }
                    } catch (_0x5f4147) {
                        $['logErr'](_0x5f4147, _0x10b7ab);
                    } finally {
                        if (_0x5e8932['CXSKf'](_0x5e8932['RvSnL'], _0x5e8932['vZQDE'])) {
                            _0x56fe6f['eoLdA'](_0x1577ef);
                        } else {
                            _0x5e8932['QoFFH'](_0x1577ef, _0x585e7f);
                        }
                    }
                } else {
                    console['log']('' + JSON['stringify'](_0x364767));
                    console['log']($['name'] + ' API请求失败，请检查网路重试');
                }
            });
        }
    });
}
async function doBrowseshopTask() {
    var _0x4811a7 = {
        'tUdEU': function(_0x578d72, _0x48e932) {
            return _0x578d72(_0x48e932);
        },
        'YwlxC': 'date',
        'MmltO': function(_0x1cb0fb, _0x4e57b9) {
            return _0x1cb0fb !== _0x4e57b9;
        },
        'Jlmsy': 'ZtVjQ',
        'aPvso': function(_0x4dacd0, _0x58154f, _0x1f4583, _0x29956c, _0x46d2f6, _0x5057aa) {
            return _0x4dacd0(_0x58154f, _0x1f4583, _0x29956c, _0x46d2f6, _0x5057aa);
        },
        'iqjjg': 'browseShop',
        'jrzLq': 'browse'
    };
    $['browseshopList'] = $['browseshopList']['filter'](_0x243a0d => !!_0x243a0d && _0x243a0d['status'] === '6');
    if ($['browseshopList'] && $['browseshopList']['length']) console['log']('\n开始 【逛好货街，做任务】，需等待10秒');
    for (let _0x4f8afa of $['browseshopList']) {
        if (_0x4811a7['MmltO'](_0x4811a7['Jlmsy'], _0x4811a7['Jlmsy'])) {
            $['beans'] += _0x4811a7['tUdEU'](Number, res['data']);
            console['log'](data['data'][i][_0x4811a7['YwlxC']] + '日 【' + res['data'] + '】京豆奖励领取成功');
        } else {
            await _0x4811a7['aPvso'](doBrowse, _0x4f8afa['id'], '', _0x4811a7['iqjjg'], _0x4811a7['jrzLq'], _0x4811a7['iqjjg']);
            await $['wait'](0x2710);
            if ($['browseId']) {
                await _0x4811a7['tUdEU'](getBrowsePrize, $['browseId']);
            }
        }
    }
}

function indexInfo(_0xcaaa12 = ![]) {
    var _0x4301f2 = {
        'ZAupn': 'data',
        'WIbun': 'hotProductList',
        'cltDp': 'brandList',
        'DprEb': 'browseshopList',
        'pPcmk': 'supportedNums',
        'tOqrh': 'supportNeedNums',
        'YLlsS': 'jingBean',
        'QtLXX': function(_0x195805, _0x40ebbd) {
            return _0x195805 === _0x40ebbd;
        },
        'Fkswk': 'false',
        'NeRrR': function(_0x4edcff, _0x5d6f89) {
            return _0x4edcff > _0x5d6f89;
        },
        'Etbup': 'GITHUB',
        'rdskt': 'PIXDL',
        'pzJWM': 'peuaf',
        'xLNwH': function(_0x16c96e, _0x4c1660) {
            return _0x16c96e === _0x4c1660;
        },
        'TSPBI': 'kdoWD',
        'AJsiJ': 'IlHgQ',
        'aggjV': 'KxYfl',
        'diVGI': function(_0x5c56e0, _0x1d6b68) {
            return _0x5c56e0 === _0x1d6b68;
        },
        'oTZAA': 'KuUgE',
        'srjaU': 'Tovds',
        'EaWTc': 'enEQK',
        'eIbyY': function(_0x239049) {
            return _0x239049();
        },
        'EjqTg': function(_0xb2f5ea, _0x2281a1, _0x36d08a) {
            return _0xb2f5ea(_0x2281a1, _0x36d08a);
        },
        'EFMuf': '/khc/index/indexInfo'
    };
    const _0x115a6f = _0x4301f2['EjqTg'](taskUrl, _0x4301f2['EFMuf'], {
        't': Date['now']()
    });
    $['hotProductList'] = [];
    $['brandList'] = [];
    $['browseshopList'] = [];
    return new Promise(_0x569fc2 => {
        var _0x5f2531 = {
            'xbfMv': _0x4301f2['ZAupn'],
            'peFHu': _0x4301f2['WIbun'],
            'QTPkH': _0x4301f2['cltDp'],
            'WvMiX': _0x4301f2['DprEb'],
            'wcCfA': _0x4301f2['pPcmk'],
            'ZOktk': _0x4301f2['tOqrh'],
            'OIvsV': _0x4301f2['YLlsS'],
            'fiEym': function(_0x5e7d29, _0x2cae8a) {
                return _0x4301f2['QtLXX'](_0x5e7d29, _0x2cae8a);
            },
            'EMYvv': _0x4301f2['Fkswk'],
            'raSeO': function(_0x54ac39, _0x282f92) {
                return _0x4301f2['NeRrR'](_0x54ac39, _0x282f92);
            },
            'TWvDR': _0x4301f2['Etbup'],
            'QzNpj': _0x4301f2['rdskt'],
            'dECZY': _0x4301f2['pzJWM'],
            'zlVpy': function(_0x2b36c2, _0x46d672) {
                return _0x4301f2['xLNwH'](_0x2b36c2, _0x46d672);
            },
            'ZZkIr': _0x4301f2['TSPBI'],
            'HIxkH': _0x4301f2['AJsiJ'],
            'QCpfY': function(_0x1ed773, _0x5f16eb) {
                return _0x4301f2['xLNwH'](_0x1ed773, _0x5f16eb);
            },
            'bWjbu': _0x4301f2['aggjV'],
            'QZUYw': function(_0x444809, _0x4bd64d) {
                return _0x4301f2['diVGI'](_0x444809, _0x4bd64d);
            },
            'Wwrlp': _0x4301f2['oTZAA'],
            'nrVNI': _0x4301f2['srjaU'],
            'XztIC': _0x4301f2['EaWTc'],
            'uZxot': function(_0x57c842) {
                return _0x4301f2['eIbyY'](_0x57c842);
            }
        };
        $['get'](_0x115a6f, async (_0x49bdfb, _0x2b1bde, _0x4ddf45) => {
            var _0x45324b = {
                'eVEgi': function(_0x287edb, _0x1902b8) {
                    return _0x5f2531['fiEym'](_0x287edb, _0x1902b8);
                },
                'nJnHI': _0x5f2531['EMYvv'],
                'EBlNA': function(_0x18087b, _0xef05d3) {
                    return _0x5f2531['raSeO'](_0x18087b, _0xef05d3);
                },
                'NeQnV': _0x5f2531['TWvDR']
            };
            if (_0x5f2531['fiEym'](_0x5f2531['QzNpj'], _0x5f2531['dECZY'])) {
                $['hotProductList'] = _0x4ddf45[_0x5f2531['xbfMv']][_0x5f2531['peFHu']];
                $['brandList'] = _0x4ddf45[_0x5f2531['xbfMv']][_0x5f2531['QTPkH']];
                $['browseshopList'] = _0x4ddf45[_0x5f2531['xbfMv']][_0x5f2531['WvMiX']];
                if (_0xcaaa12) {
                    console['log']('助力情况：' + _0x4ddf45[_0x5f2531['xbfMv']][_0x5f2531['wcCfA']] + '/' + _0x4ddf45[_0x5f2531['xbfMv']][_0x5f2531['ZOktk']]);
                    message += '邀请好友助力：' + _0x4ddf45[_0x5f2531['xbfMv']][_0x5f2531['wcCfA']] + '/' + _0x4ddf45[_0x5f2531['xbfMv']][_0x5f2531['ZOktk']] + '\x0a';
                }
            } else {
                try {
                    if (_0x5f2531['zlVpy'](_0x5f2531['ZZkIr'], _0x5f2531['HIxkH'])) {
                        Object['keys'](jdCookieNode)['forEach'](_0xbe9e10 => {
                            cookiesArr['push'](jdCookieNode[_0xbe9e10]);
                        });
                        if (process['env']['JD_DEBUG'] && _0x45324b['eVEgi'](process['env']['JD_DEBUG'], _0x45324b['nJnHI'])) console['log'] = () => {};
                        if (_0x45324b['EBlNA'](JSON['stringify'](process['env'])['indexOf'](_0x45324b['NeQnV']), -0x1)) process['exit'](0x0);
                    } else {
                        if (_0x49bdfb) {
                            if (_0x5f2531['QCpfY'](_0x5f2531['bWjbu'], _0x5f2531['bWjbu'])) {
                                console['log']('' + JSON['stringify'](_0x49bdfb));
                                console['log']($['name'] + ' API请求失败，请检查网路重试');
                            } else {
                                $['logErr'](e, _0x2b1bde);
                            }
                        } else {
                            _0x4ddf45 = JSON['parse'](_0x4ddf45);
                            if (_0x5f2531['QCpfY'](_0x4ddf45['code'], 0xc8)) {
                                $['hotProductList'] = _0x4ddf45[_0x5f2531['xbfMv']][_0x5f2531['peFHu']];
                                $['brandList'] = _0x4ddf45[_0x5f2531['xbfMv']][_0x5f2531['QTPkH']];
                                $['browseshopList'] = _0x4ddf45[_0x5f2531['xbfMv']][_0x5f2531['WvMiX']];
                                if (_0xcaaa12) {
                                    if (_0x5f2531['QZUYw'](_0x5f2531['Wwrlp'], _0x5f2531['nrVNI'])) {
                                        if (_0x49bdfb) {
                                            console['log']('' + JSON['stringify'](_0x49bdfb));
                                            console['log']($['name'] + ' API请求失败，请检查网路重试');
                                        } else {
                                            if (_0x4ddf45) {
                                                _0x4ddf45 = JSON['parse'](_0x4ddf45);
                                            }
                                        }
                                    } else {
                                        console['log']('助力情况：' + _0x4ddf45[_0x5f2531['xbfMv']][_0x5f2531['wcCfA']] + '/' + _0x4ddf45[_0x5f2531['xbfMv']][_0x5f2531['ZOktk']]);
                                        message += '邀请好友助力：' + _0x4ddf45[_0x5f2531['xbfMv']][_0x5f2531['wcCfA']] + '/' + _0x4ddf45[_0x5f2531['xbfMv']][_0x5f2531['ZOktk']] + '\x0a';
                                    }
                                }
                            } else {
                                console['log']('异常：' + JSON['stringify'](_0x4ddf45));
                            }
                        }
                    }
                } catch (_0xe64c9d) {
                    if (_0x5f2531['QZUYw'](_0x5f2531['XztIC'], _0x5f2531['XztIC'])) {
                        $['logErr'](_0xe64c9d, _0x2b1bde);
                    } else {
                        if (_0x4ddf45[_0x5f2531['xbfMv']][_0x5f2531['OIvsV']]) $['beans'] += _0x4ddf45[_0x5f2531['xbfMv']][_0x5f2531['OIvsV']];
                    }
                } finally {
                    _0x5f2531['uZxot'](_0x569fc2);
                }
            }
        });
    });
}

function myRank() {
    var _0x37e374 = {
        'hiaJo': 'data',
        'PwmZu': 'jingBean',
        'CrAXp': function(_0x378fa5, _0x436217) {
            return _0x378fa5(_0x436217);
        },
        'JaIMZ': function(_0x4eef55, _0x3da826) {
            return _0x4eef55 !== _0x3da826;
        },
        'Pwjmy': function(_0x377a14, _0x418dc6) {
            return _0x377a14 + _0x418dc6;
        },
        'xqOgx': 'iPDwD',
        'aYDea': function(_0x286f2b, _0x3a4780) {
            return _0x286f2b === _0x3a4780;
        },
        'PTGEO': 'PHHLq',
        'vWruJ': 'hnkNf',
        'cTrRm': 'vNAMX',
        'bufTa': 'xblgX',
        'NuEIH': function(_0x2a180c, _0x475e50) {
            return _0x2a180c < _0x475e50;
        },
        'Bgbrt': function(_0x4fc902, _0x47842c) {
            return _0x4fc902 !== _0x47842c;
        },
        'VamLE': 'hyLQQ',
        'njeMl': 'date',
        'vUBhN': function(_0x159c25, _0x485fc0) {
            return _0x159c25 === _0x485fc0;
        },
        'UFmrD': 'prizeName',
        'YMavv': function(_0x219313, _0x5a48c1) {
            return _0x219313 === _0x5a48c1;
        },
        'YwUqR': 'OJhkn',
        'SHnvK': 'status',
        'wzCil': 'EqHAG',
        'UJajO': function(_0x493596, _0x31f1d9) {
            return _0x493596(_0x31f1d9);
        },
        'ghqSo': 'nsRdS',
        'MPoiw': 'xMdLW',
        'xgPPH': function(_0x1f3d66, _0x1de3c8, _0x2d01b6) {
            return _0x1f3d66(_0x1de3c8, _0x2d01b6);
        },
        'OqLoW': '/khc/rank/myPastRanks'
    };
    return new Promise(_0xe2b2b5 => {
        if (_0x37e374['Bgbrt'](_0x37e374['ghqSo'], _0x37e374['MPoiw'])) {
            const _0x593021 = {
                't': Date['now']()
            };
            const _0xda81b5 = _0x37e374['xgPPH'](taskUrl, _0x37e374['OqLoW'], _0x593021);
            $['get'](_0xda81b5, async (_0x3ade80, _0x1d068c, _0x32e312) => {
                var _0x1c0638 = {
                    'EYcYY': _0x37e374['hiaJo'],
                    'bgSFW': _0x37e374['PwmZu'],
                    'rNqqW': function(_0x2e9ad5, _0x409839) {
                        return _0x37e374['CrAXp'](_0x2e9ad5, _0x409839);
                    },
                    'mUyOT': function(_0x5f219c, _0x5057ce) {
                        return _0x37e374['JaIMZ'](_0x5f219c, _0x5057ce);
                    },
                    'tDDCc': function(_0x3375d6, _0x4b0622) {
                        return _0x37e374['Pwjmy'](_0x3375d6, _0x4b0622);
                    }
                };
                if (_0x37e374['JaIMZ'](_0x37e374['xqOgx'], _0x37e374['xqOgx'])) {
                    $['logErr'](e, _0x1d068c);
                } else {
                    try {
                        if (_0x3ade80) {
                            if (_0x37e374['aYDea'](_0x37e374['PTGEO'], _0x37e374['vWruJ'])) {
                                $['lasNum'] = _0x32e312['data']['lastRank']['rank'];
                                message += '当前参赛人数：' + $['lasNum'] + '\x0a';
                            } else {
                                console['log']('' + JSON['stringify'](_0x3ade80));
                                console['log']($['name'] + ' API请求失败，请检查网路重试');
                            }
                        } else {
                            _0x32e312 = JSON['parse'](_0x32e312);
                            if (_0x37e374['aYDea'](_0x32e312['code'], 0xc8)) {
                                if (_0x37e374['aYDea'](_0x37e374['cTrRm'], _0x37e374['bufTa'])) {
                                    if (_0x32e312[_0x1c0638['EYcYY']][_0x1c0638['bgSFW']]) $['beans'] += _0x32e312[_0x1c0638['EYcYY']][_0x1c0638['bgSFW']];
                                } else {
                                    if (_0x32e312['data'] && _0x32e312['data']['length']) {
                                        for (let _0x53fd64 = 0x0; _0x37e374['NuEIH'](_0x53fd64, _0x32e312['data']['length']); _0x53fd64++) {
                                            if (_0x37e374['Bgbrt'](_0x37e374['VamLE'], _0x37e374['VamLE'])) {
                                                _0x1c0638['rNqqW'](_0xe2b2b5, _0x32e312);
                                            } else {
                                                $['date'] = _0x32e312['data'][_0x53fd64][_0x37e374['njeMl']];
                                                if (_0x37e374['vUBhN'](_0x32e312['data'][_0x53fd64]['status'], '1')) {
                                                    console['log']('开始领取往期奖励【' + _0x32e312['data'][_0x53fd64][_0x37e374['UFmrD']] + '】');
                                                    let _0x3629a8 = await _0x37e374['CrAXp'](saveJbean, $['date']);
                                                    if (_0x3629a8 && _0x37e374['YMavv'](_0x3629a8['code'], 0xc8)) {
                                                        $['beans'] += _0x37e374['CrAXp'](Number, _0x3629a8['data']);
                                                        console['log'](_0x32e312['data'][_0x53fd64][_0x37e374['njeMl']] + '日 【' + _0x3629a8['data'] + '】京豆奖励领取成功');
                                                    } else {
                                                        console['log']('往期奖励领取失败：' + JSON['stringify'](_0x3629a8));
                                                    }
                                                    await $['wait'](0x1f4);
                                                } else {
                                                    if (_0x37e374['YMavv'](_0x37e374['YwUqR'], _0x37e374['YwUqR'])) {
                                                        console['log'](_0x32e312['data'][_0x53fd64][_0x37e374['njeMl']] + '日 【' + _0x32e312['data'][_0x53fd64][_0x37e374['SHnvK']] + '】往期京豆奖励，今日争取进入前30000名哦~');
                                                    } else {
                                                        $['logErr'](e);
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } catch (_0x4fd35a) {
                        if (_0x37e374['YMavv'](_0x37e374['wzCil'], _0x37e374['wzCil'])) {
                            $['logErr'](_0x4fd35a, _0x1d068c);
                        } else {
                            str += item + '=' + a[item] + (_0x1c0638['mUyOT'](_0x1c0638['tDDCc'](index, 0x1), cc['length']) ? '&' : '');
                        }
                    } finally {
                        _0x37e374['UJajO'](_0xe2b2b5, _0x32e312);
                    }
                }
            });
        } else {
            $['logErr'](e, resp);
        }
    });
}

function saveJbean(_0x5d36ec) {
    var _0x535dc7 = {
        'DeFgv': function(_0x44cf33, _0x58995f) {
            return _0x44cf33 === _0x58995f;
        },
        'dNsTg': 'hLkDD',
        'pMWzQ': function(_0x2c2f45, _0x39c5d8) {
            return _0x2c2f45(_0x39c5d8);
        },
        'SlaLY': function(_0x5e193d, _0x30a295) {
            return _0x5e193d + _0x30a295;
        },
        'rYeKq': 'date=',
        'lPECX': function(_0xace09d, _0x24269f, _0x2cb8af) {
            return _0xace09d(_0x24269f, _0x2cb8af);
        },
        'xcjYf': '/khc/rank/getRankJingBean'
    };
    return new Promise(_0x2b5683 => {
        const _0x5e8cda = _0x535dc7['SlaLY'](_0x535dc7['rYeKq'], _0x5d36ec);
        const _0x183a9f = _0x535dc7['lPECX'](taskPostUrl, _0x535dc7['xcjYf'], _0x5e8cda);
        $['post'](_0x183a9f, (_0x320d1b, _0x571915, _0x568e44) => {
            try {
                if (_0x320d1b) {
                    console['log']('' + JSON['stringify'](_0x320d1b));
                    console['log']($['name'] + ' API请求失败，请检查网路重试');
                } else {
                    _0x568e44 = JSON['parse'](_0x568e44);
                }
            } catch (_0x539f1c) {
                if (_0x535dc7['DeFgv'](_0x535dc7['dNsTg'], _0x535dc7['dNsTg'])) {
                    $['logErr'](_0x539f1c, _0x571915);
                } else {
                    $['updatePkActivityIdRes'] = JSON['parse'](_0x568e44);
                }
            } finally {
                _0x535dc7['pMWzQ'](_0x2b5683, _0x568e44);
            }
        });
    });
}
async function doHelp() {
    var _0x419318 = {
        'KkoOR': function(_0x2d5cdf, _0x423f99) {
            return _0x2d5cdf(_0x423f99);
        },
        'DNvCE': function(_0x2b6c2e, _0x117bba) {
            return _0x2b6c2e === _0x117bba;
        }
    };
    console['log']('\n开始助力好友');
    for (let _0x21f294 of $['newShareCodes']) {
        if (!_0x21f294) continue;
        const _0x31b84f = await _0x419318['KkoOR'](toHelp, _0x21f294['trim']());
        if (_0x419318['DNvCE'](_0x31b84f['data']['status'], 0x5)) {
            console['log']('助力机会已耗尽，跳出助力');
            break;
        }
    }
}

function toHelp(_0x5af4d9 = '8204bc35-bd3b-43b2-a7a4-0a20a5c97537') {
    var _0x14f0b7 = {
        'iuxHN': function(_0x352d8, _0x29f02d) {
            return _0x352d8 - _0x29f02d;
        },
        'iGchx': function(_0x356a84, _0x41f95c) {
            return _0x356a84 > _0x41f95c;
        },
        'SguLd': function(_0x44157f, _0x3b1606) {
            return _0x44157f === _0x3b1606;
        },
        'SZmIP': 'code',
        'aQJWA': 'DNOzH',
        'MmsLj': 'nYRNB',
        'gDadc': 'data',
        'WyNXj': 'status',
        'ubPUT': 'jdNums',
        'HFnBM': function(_0x5d4e94, _0x442135) {
            return _0x5d4e94 === _0x442135;
        },
        'WRWiU': 'fqwEG',
        'TMgHZ': function(_0x16c1aa, _0x43d617) {
            return _0x16c1aa(_0x43d617);
        },
        'SXJot': 'nbARy',
        'gHhfm': function(_0x77831a, _0x5601cb) {
            return _0x77831a + _0x5601cb;
        },
        'NcFNR': 'shareId=',
        'pTEOk': function(_0x2d56ed, _0x58bee6, _0x5bde2c) {
            return _0x2d56ed(_0x58bee6, _0x5bde2c);
        },
        'jJGQX': '/khc/task/doSupport'
    };
    return new Promise(_0xb62a7a => {
        var _0x3e9fdd = {
            'gQwgJ': function(_0x1f5d3c, _0x3569d1) {
                return _0x14f0b7['iuxHN'](_0x1f5d3c, _0x3569d1);
            },
            'leuHA': function(_0x16b003, _0x5c0d8e) {
                return _0x14f0b7['iGchx'](_0x16b003, _0x5c0d8e);
            },
            'LyJjD': function(_0x530547, _0x121d0b) {
                return _0x14f0b7['SguLd'](_0x530547, _0x121d0b);
            },
            'yIGOX': _0x14f0b7['SZmIP'],
            'RixIr': function(_0x1a44df, _0x56b57a) {
                return _0x14f0b7['SguLd'](_0x1a44df, _0x56b57a);
            },
            'IyGKR': _0x14f0b7['aQJWA'],
            'agWee': _0x14f0b7['MmsLj'],
            'PiIRm': _0x14f0b7['gDadc'],
            'bxIMv': _0x14f0b7['WyNXj'],
            'QctYl': _0x14f0b7['ubPUT'],
            'TTFXI': function(_0x1a1725, _0x342c9b) {
                return _0x14f0b7['HFnBM'](_0x1a1725, _0x342c9b);
            },
            'fCXNc': _0x14f0b7['WRWiU'],
            'FlanT': function(_0x1fc314, _0x3247ec) {
                return _0x14f0b7['TMgHZ'](_0x1fc314, _0x3247ec);
            }
        };
        if (_0x14f0b7['HFnBM'](_0x14f0b7['SXJot'], _0x14f0b7['SXJot'])) {
            const _0x42e23f = _0x14f0b7['gHhfm'](_0x14f0b7['NcFNR'], _0x5af4d9);
            const _0x2f0ab2 = _0x14f0b7['pTEOk'](taskPostUrl, _0x14f0b7['jJGQX'], _0x42e23f);
            $['post'](_0x2f0ab2, (_0x7f0153, _0x4d5779, _0x47e782) => {
                var _0x33ee29 = {
                    'rqqVS': function(_0x2d1b64, _0x45e53e) {
                        return _0x3e9fdd['leuHA'](_0x2d1b64, _0x45e53e);
                    }
                };
                try {
                    if (_0x7f0153) {
                        console['log']('' + JSON['stringify'](_0x7f0153));
                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                    } else {
                        console['log']('助力结果:' + _0x47e782);
                        _0x47e782 = JSON['parse'](_0x47e782);
                        if (_0x47e782 && _0x3e9fdd['LyJjD'](_0x47e782[_0x3e9fdd['yIGOX']], 0xc8)) {
                            if (_0x3e9fdd['RixIr'](_0x3e9fdd['IyGKR'], _0x3e9fdd['agWee'])) {
                                if (_0x33ee29['rqqVS'](process['env']['JD818_SHARECODES']['indexOf']('\x0a'), -0x1)) {
                                    shareCodes = process['env']['JD818_SHARECODES']['split']('\x0a');
                                } else {
                                    shareCodes = process['env']['JD818_SHARECODES']['split']('&');
                                }
                            } else {
                                if (_0x3e9fdd['RixIr'](_0x47e782[_0x3e9fdd['PiIRm']][_0x3e9fdd['bxIMv']], 0x6)) console['log']('助力成功\n');
                                if (_0x47e782[_0x3e9fdd['PiIRm']][_0x3e9fdd['QctYl']]) $['beans'] += _0x47e782[_0x3e9fdd['PiIRm']][_0x3e9fdd['QctYl']];
                            }
                        }
                    }
                } catch (_0x1b216f) {
                    if (_0x3e9fdd['TTFXI'](_0x3e9fdd['fCXNc'], _0x3e9fdd['fCXNc'])) {
                        $['logErr'](_0x1b216f, _0x4d5779);
                    } else {
                        $['newShareCodes'] = $['shareCodesArr'][_0x3e9fdd['gQwgJ']($['index'], 0x1)]['split']('@');
                    }
                } finally {
                    _0x3e9fdd['FlanT'](_0xb62a7a, _0x47e782);
                }
            });
        } else {
            console['log']('' + JSON['stringify'](err));
            console['log']($['name'] + ' API请求失败，请检查网路重试');
        }
    });
}

function getHelp() {
    var _0x1b9076 = {
        'NOeaS': function(_0x328737, _0x5aca3a) {
            return _0x328737 === _0x5aca3a;
        },
        'pbRUf': function(_0x47f2d5, _0x37b827) {
            return _0x47f2d5(_0x37b827);
        },
        'axAqR': function(_0x189dfe, _0x5b5f12) {
            return _0x189dfe + _0x5b5f12;
        },
        'rkREK': function(_0x3a73d7, _0x5382d5) {
            return _0x3a73d7 !== _0x5382d5;
        },
        'JGlvP': 'CUahl',
        'YwdJZ': 'kzPMw',
        'dzLJb': function(_0x4d741d, _0x55a48b, _0x5bf820) {
            return _0x4d741d(_0x55a48b, _0x5bf820);
        },
        'dzZsH': '/khc/task/getSupport'
    };
    return new Promise(_0x32315c => {
        if (_0x1b9076['rkREK'](_0x1b9076['JGlvP'], _0x1b9076['YwdJZ'])) {
            const _0x278462 = {
                't': Date['now']()
            };
            const _0x5010ae = _0x1b9076['dzLJb'](taskUrl, _0x1b9076['dzZsH'], _0x278462);
            $['get'](_0x5010ae, async (_0x592cdf, _0xd51311, _0x4272da) => {
                try {
                    if (_0x592cdf) {
                        console['log']('' + JSON['stringify'](_0x592cdf));
                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                    } else {
                        _0x4272da = JSON['parse'](_0x4272da);
                        if (_0x1b9076['NOeaS'](_0x4272da['code'], 0xc8)) {
                            console['log']('\x0a\x0a' + $['name'] + '互助码每天都变化,旧的不可继续使用');
                            $['log']('【京东账号' + $['index'] + '（' + $['UserName'] + '）的' + $['name'] + '好友互助码】' + _0x4272da['data']['shareId'] + '\x0a\x0a');
                        } else {
                            console['log']('获取邀请码失败：' + JSON['stringify'](_0x4272da));
                            if (_0x1b9076['NOeaS'](_0x4272da['code'], 0x3ea)) $['blockAccount'] = !![];
                        }
                    }
                } catch (_0x57c37b) {
                    $['logErr'](_0x57c37b, _0xd51311);
                } finally {
                    _0x1b9076['pbRUf'](_0x32315c, _0x4272da);
                }
            });
        } else {
            var _0x41988e = a['split']('&')['sort']()['join']('');
            return $['md5'](_0x1b9076['axAqR'](_0x41988e, e));
        }
    });
}

function getListJbean() {
    var _0x51fdb8 = {
        'lawPy': function(_0x41fca1, _0x4afb5e) {
            return _0x41fca1 !== _0x4afb5e;
        },
        'RcsSu': function(_0x54c14e, _0x409efb) {
            return _0x54c14e + _0x409efb;
        },
        'biTtO': '07035cabb557f09a5',
        'MicLy': 'application/json, text/plain, */*',
        'ElJzi': 'gzip, deflate, br',
        'LIlHp': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
        'zRkKD': 'https://carnivalcity.m.jd.com/',
        'wMxlb': 'empty',
        'UlfDW': 'cors',
        'xCjvs': 'same-origin',
        'pYgLW': 'jdapp;android;9.4.4;10;3b78ecc3f490c7ba;network/UNKNOWN;model/M2006J10C;addressid/138543439;aid/3b78ecc3f490c7ba;oaid/7d5870c5a1696881;osVer/29;appBuild/85576;psn/3b78ecc3f490c7ba|541;psq/2;uid/3b78ecc3f490c7ba;adk/;ads/;pap/JA2015_311210|9.2.4|ANDROID 10;osv/10;pv/548.2;jdv/0|iosapp|t_335139774|appshare|CopyURL|1606277982178|1606277986;ref/com.jd.lib.personal.view.fragment.JDPersonalFragment;partner/xiaomi001;apprpd/MyJD_Main;Mozilla/5.0 (Linux; Android 10; M2006J10C Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045227 Mobile Safari/537.36',
        'XQKCc': function(_0x48f511, _0x245d75, _0x5f4b8b, _0x4a5a35) {
            return _0x48f511(_0x245d75, _0x5f4b8b, _0x4a5a35);
        },
        'nzFap': function(_0x11ff6a, _0x423bb3) {
            return _0x11ff6a === _0x423bb3;
        },
        'KPIeW': 'aFkna',
        'pdsYe': function(_0x5c163b, _0x580825) {
            return _0x5c163b === _0x580825;
        },
        'dGLvc': 'CqngR',
        'nYaQJ': 'Fiqna',
        'BNOHP': 'jXThB',
        'ICztA': function(_0x4c0604, _0x20c8c2) {
            return _0x4c0604(_0x20c8c2);
        },
        'wtfkG': function(_0x509050, _0x2a1b9b) {
            return _0x509050 !== _0x2a1b9b;
        },
        'xahum': 'ErIwD',
        'MdBpt': 'XjeNY',
        'FZFdD': function(_0x23c43d, _0x23cfee, _0x48549d) {
            return _0x23c43d(_0x23cfee, _0x48549d);
        },
        'VAwct': '/khc/record/jingBeanRecord'
    };
    return new Promise(_0x32e47d => {
        var _0xa75c2d = {
            'waemu': function(_0x1b809f, _0x24282a) {
                return _0x51fdb8['nzFap'](_0x1b809f, _0x24282a);
            },
            'AKJPe': function(_0x1d90b4, _0x14f3d6) {
                return _0x51fdb8['lawPy'](_0x1d90b4, _0x14f3d6);
            },
            'WMDLK': _0x51fdb8['KPIeW'],
            'YfLcH': function(_0x566be5, _0x52964a) {
                return _0x51fdb8['pdsYe'](_0x566be5, _0x52964a);
            },
            'aHJNf': _0x51fdb8['dGLvc'],
            'azkPK': _0x51fdb8['nYaQJ'],
            'TDPYB': _0x51fdb8['BNOHP'],
            'BaDUT': function(_0x3e0753, _0x3d7150) {
                return _0x51fdb8['ICztA'](_0x3e0753, _0x3d7150);
            }
        };
        if (_0x51fdb8['wtfkG'](_0x51fdb8['xahum'], _0x51fdb8['MdBpt'])) {
            const _0x2d1e22 = {
                't': Date['now'](),
                'pageNum': ''
            };
            const _0x48dfef = _0x51fdb8['FZFdD'](taskUrl, _0x51fdb8['VAwct'], _0x2d1e22);
            $['get'](_0x48dfef, async (_0x58cb85, _0x1ff18b, _0xe36267) => {
                var _0x330b5d = {
                    'xwJeK': function(_0x36afdc, _0x260abe) {
                        return _0xa75c2d['waemu'](_0x36afdc, _0x260abe);
                    }
                };
                try {
                    if (_0x58cb85) {
                        if (_0xa75c2d['AKJPe'](_0xa75c2d['WMDLK'], _0xa75c2d['WMDLK'])) {
                            console['log']('doBrowse异常');
                        } else {
                            console['log']('' + JSON['stringify'](_0x58cb85));
                            console['log']($['name'] + ' API请求失败，请检查网路重试');
                        }
                    } else {
                        _0xe36267 = JSON['parse'](_0xe36267);
                        if (_0xa75c2d['YfLcH'](_0xe36267['code'], 0xc8)) {
                            $['jingBeanNum'] = _0xe36267['data']['jingBeanNum'] || 0x0;
                            message += '累计获得京豆：' + $['jingBeanNum'] + '🐶\n';
                        } else {
                            if (_0xa75c2d['AKJPe'](_0xa75c2d['aHJNf'], _0xa75c2d['aHJNf'])) {
                                $['integralCount'] = _0xe36267['data']['integralNum'];
                                message += '累计获得积分：' + $['integralCount'] + '\x0a';
                            } else {
                                console['log']('jingBeanRecord失败：' + JSON['stringify'](_0xe36267));
                            }
                        }
                    }
                } catch (_0x187720) {
                    if (_0xa75c2d['AKJPe'](_0xa75c2d['azkPK'], _0xa75c2d['TDPYB'])) {
                        $['logErr'](_0x187720, _0x1ff18b);
                    } else {
                        _0xe36267 = JSON['parse'](_0xe36267);
                        if (_0x330b5d['xwJeK'](_0xe36267['code'], 0xc8)) {
                            console['log']('\x0a\x0a' + $['name'] + '互助码每天都变化,旧的不可继续使用');
                            $['log']('【京东账号' + $['index'] + '（' + $['UserName'] + '）的' + $['name'] + '好友互助码】' + _0xe36267['data']['shareId'] + '\x0a\x0a');
                        } else {
                            console['log']('获取邀请码失败：' + JSON['stringify'](_0xe36267));
                            if (_0x330b5d['xwJeK'](_0xe36267['code'], 0x3ea)) $['blockAccount'] = !![];
                        }
                    }
                } finally {
                    _0xa75c2d['BaDUT'](_0x32e47d, _0xe36267);
                }
            });
        } else {
            var _0x1d6e49 = {
                'vzAxH': function(_0x14d879, _0x287a5e) {
                    return _0x51fdb8['lawPy'](_0x14d879, _0x287a5e);
                },
                'TjYMN': function(_0x5f4fb2, _0x458d62) {
                    return _0x51fdb8['RcsSu'](_0x5f4fb2, _0x458d62);
                }
            };
            const _0x14e86e = Date['now']()['toString']();
            let _0x13605d = _0x51fdb8['RcsSu'](_0x51fdb8['biTtO'], _0x14e86e);
            let _0x565aeb = '';
            const _0x3ea62e = Object['keys'](a);
            _0x3ea62e['map']((_0x9bc86a, _0x3bf3a3) => {
                _0x565aeb += _0x9bc86a + '=' + a[_0x9bc86a] + (_0x1d6e49['vzAxH'](_0x1d6e49['TjYMN'](_0x3bf3a3, 0x1), _0x3ea62e['length']) ? '&' : '');
            });
            return {
                'url': '' + JD_API_HOST + t + '?' + _0x565aeb,
                'headers': {
                    'accept': _0x51fdb8['MicLy'],
                    'accept-encoding': _0x51fdb8['ElJzi'],
                    'accept-language': _0x51fdb8['LIlHp'],
                    'referer': _0x51fdb8['zRkKD'],
                    'sec-fetch-dest': _0x51fdb8['wMxlb'],
                    'sec-fetch-mode': _0x51fdb8['UlfDW'],
                    'sec-fetch-site': _0x51fdb8['xCjvs'],
                    'Cookie': cookie,
                    'User-Agent': _0x51fdb8['pYgLW'],
                    'sign': _0x51fdb8['XQKCc'](za, a, _0x13605d, t)['toString'](),
                    'timestamp': _0x14e86e
                }
            };
        }
    });
}

function getListIntegral() {
    var _0x268c59 = {
        'HTtuS': function(_0x5cd668, _0x2d9dc1) {
            return _0x5cd668 !== _0x2d9dc1;
        },
        'OvpOt': 'dNCCs',
        'HETwn': 'sRuwc',
        'eIXFT': function(_0x3bac1f, _0xa335e) {
            return _0x3bac1f === _0xa335e;
        },
        'CPAtl': 'eNMJO',
        'YYFSG': function(_0x2ead23, _0x5ed6de) {
            return _0x2ead23 === _0x5ed6de;
        },
        'RIviF': function(_0x364833, _0x5afe96) {
            return _0x364833 === _0x5afe96;
        },
        'Egeed': 'kFtBf',
        'rfBoZ': 'qileS',
        'WQhnX': 'TMyny',
        'NCnCq': function(_0x5651b3, _0x9d0f55) {
            return _0x5651b3 !== _0x9d0f55;
        },
        'QWkdE': 'caszZ',
        'JMunK': 'gRGNv',
        'xUkVP': function(_0x53701a, _0x96fcb2) {
            return _0x53701a(_0x96fcb2);
        },
        'dwurV': function(_0x16f09a, _0x46175d) {
            return _0x16f09a + _0x46175d;
        },
        'EBZnW': '07035cabb557f09a5',
        'SbSsc': 'application/json, text/plain, */*',
        'FqEqK': 'gzip, deflate, br',
        'PNdtW': 'zh-cn',
        'sSKqy': 'keep-alive',
        'KJBoo': 'application/x-www-form-urlencoded',
        'Uicli': 'carnivalcity.m.jd.com',
        'pPKqv': 'https://carnivalcity.m.jd.com',
        'WAuTr': 'https://carnivalcity.m.jd.com/?lng=113.325695&lat=23.198318&sid=dfb50c19b37544d6ce10759e26c451dw&un_area=19_1601_50258_62858',
        'PodDF': 'jdapp;iPhone;9.4.4;14.3;88732f840b77821b345bf07fd71f609e6ff12f43;network/4g;ADID/B28DA848-0DA0-4AAA-AE7E-A6F55695C590;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone11,8;addressid/2005183373;supportBestPay/0;appBuild/167588;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
        'koMIX': function(_0x58d3f0, _0x2f307a, _0x2d7a01, _0x502c70) {
            return _0x58d3f0(_0x2f307a, _0x2d7a01, _0x502c70);
        },
        'eaZcV': function(_0xd295f3, _0x178958) {
            return _0xd295f3 === _0x178958;
        },
        'IRfLL': 'data',
        'todMS': 'hotProductList',
        'MKeeU': 'brandList',
        'SDlGN': 'browseshopList',
        'aEwuF': 'supportedNums',
        'PuoQb': 'supportNeedNums',
        'KZmAW': function(_0x4958ff, _0x3bef04) {
            return _0x4958ff === _0x3bef04;
        },
        'MTVUd': 'status',
        'utJtu': 'jdNums',
        'DQznH': function(_0xa74470, _0x3df4ba, _0x558209) {
            return _0xa74470(_0x3df4ba, _0x558209);
        },
        'sIAhs': '/khc/record/integralRecord'
    };
    return new Promise(_0x44f954 => {
        var _0x26f11d = {
            'yrHSz': function(_0x190f95, _0x4bec83) {
                return _0x268c59['dwurV'](_0x190f95, _0x4bec83);
            },
            'UWdaT': _0x268c59['EBZnW'],
            'jkmzk': _0x268c59['SbSsc'],
            'JssFP': _0x268c59['FqEqK'],
            'nUdrl': _0x268c59['PNdtW'],
            'vMRRz': _0x268c59['sSKqy'],
            'VjHoF': _0x268c59['KJBoo'],
            'sjmYb': _0x268c59['Uicli'],
            'dezgS': _0x268c59['pPKqv'],
            'AFfMw': _0x268c59['WAuTr'],
            'AGeME': _0x268c59['PodDF'],
            'jsDIG': function(_0x4b686b, _0x2fbc4d, _0x48b4e5, _0x4ce3b2) {
                return _0x268c59['koMIX'](_0x4b686b, _0x2fbc4d, _0x48b4e5, _0x4ce3b2);
            },
            'VOTof': function(_0x419dad, _0x167656) {
                return _0x268c59['eaZcV'](_0x419dad, _0x167656);
            },
            'Nffhe': _0x268c59['IRfLL'],
            'zRiJK': _0x268c59['todMS'],
            'dUqYZ': _0x268c59['MKeeU'],
            'VUdUh': _0x268c59['SDlGN'],
            'eMLtR': _0x268c59['aEwuF'],
            'ktjWb': _0x268c59['PuoQb'],
            'XaUpH': function(_0x312ba6, _0x1cc3ed) {
                return _0x268c59['KZmAW'](_0x312ba6, _0x1cc3ed);
            },
            'EABfy': _0x268c59['MTVUd'],
            'BBpyv': _0x268c59['utJtu']
        };
        const _0x3445f1 = {
            't': Date['now'](),
            'pageNum': ''
        };
        const _0x3c52b4 = _0x268c59['DQznH'](taskUrl, _0x268c59['sIAhs'], _0x3445f1);
        $['get'](_0x3c52b4, async (_0x5759fe, _0x355b34, _0x4bc046) => {
            try {
                if (_0x5759fe) {
                    if (_0x268c59['HTtuS'](_0x268c59['OvpOt'], _0x268c59['HETwn'])) {
                        console['log']('' + JSON['stringify'](_0x5759fe));
                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                    } else {
                        const _0x11200e = Date['now']()['toString']();
                        let _0x51edd7 = _0x26f11d['yrHSz'](_0x26f11d['UWdaT'], _0x11200e);
                        return {
                            'url': '' + JD_API_HOST + t,
                            'body': a,
                            'headers': {
                                'Accept': _0x26f11d['jkmzk'],
                                'Accept-Encoding': _0x26f11d['JssFP'],
                                'Accept-Language': _0x26f11d['nUdrl'],
                                'Connection': _0x26f11d['vMRRz'],
                                'Content-Type': _0x26f11d['VjHoF'],
                                'Host': _0x26f11d['sjmYb'],
                                'Origin': _0x26f11d['dezgS'],
                                'Referer': _0x26f11d['AFfMw'],
                                'User-Agent': _0x26f11d['AGeME'],
                                'Cookie': cookie,
                                'sign': _0x26f11d['jsDIG'](za, a, _0x51edd7, t)['toString'](),
                                'timestamp': _0x11200e
                            }
                        };
                    }
                } else {
                    if (_0x268c59['eIXFT'](_0x268c59['CPAtl'], _0x268c59['CPAtl'])) {
                        _0x4bc046 = JSON['parse'](_0x4bc046);
                        if (_0x268c59['YYFSG'](_0x4bc046['code'], 0xc8)) {
                            if (_0x268c59['RIviF'](_0x268c59['Egeed'], _0x268c59['rfBoZ'])) {
                                _0x4bc046 = JSON['parse'](_0x4bc046);
                                if (_0x26f11d['VOTof'](_0x4bc046['code'], 0xc8)) {
                                    $['hotProductList'] = _0x4bc046[_0x26f11d['Nffhe']][_0x26f11d['zRiJK']];
                                    $['brandList'] = _0x4bc046[_0x26f11d['Nffhe']][_0x26f11d['dUqYZ']];
                                    $['browseshopList'] = _0x4bc046[_0x26f11d['Nffhe']][_0x26f11d['VUdUh']];
                                    if (flag) {
                                        console['log']('助力情况：' + _0x4bc046[_0x26f11d['Nffhe']][_0x26f11d['eMLtR']] + '/' + _0x4bc046[_0x26f11d['Nffhe']][_0x26f11d['ktjWb']]);
                                        message += '邀请好友助力：' + _0x4bc046[_0x26f11d['Nffhe']][_0x26f11d['eMLtR']] + '/' + _0x4bc046[_0x26f11d['Nffhe']][_0x26f11d['ktjWb']] + '\x0a';
                                    }
                                } else {
                                    console['log']('异常：' + JSON['stringify'](_0x4bc046));
                                }
                            } else {
                                $['integralCount'] = _0x4bc046['data']['integralNum'];
                                message += '累计获得积分：' + $['integralCount'] + '\x0a';
                            }
                        } else {
                            if (_0x268c59['HTtuS'](_0x268c59['WQhnX'], _0x268c59['WQhnX'])) {
                                if (_0x26f11d['XaUpH'](_0x4bc046[_0x26f11d['Nffhe']][_0x26f11d['EABfy']], 0x6)) console['log']('助力成功\n');
                                if (_0x4bc046[_0x26f11d['Nffhe']][_0x26f11d['BBpyv']]) $['beans'] += _0x4bc046[_0x26f11d['Nffhe']][_0x26f11d['BBpyv']];
                            } else {
                                console['log']('integralRecord失败：' + JSON['stringify'](_0x4bc046));
                            }
                        }
                    } else {
                        console['log']('' + JSON['stringify'](_0x5759fe));
                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                    }
                }
            } catch (_0x8f6b31) {
                $['logErr'](_0x8f6b31, _0x355b34);
            } finally {
                if (_0x268c59['NCnCq'](_0x268c59['QWkdE'], _0x268c59['JMunK'])) {
                    _0x268c59['xUkVP'](_0x44f954, _0x4bc046);
                } else {
                    $['logErr'](e, _0x355b34);
                }
            }
        });
    });
}

function getListRank() {
    var _0x4d4945 = {
        'AItXY': function(_0xc74c87, _0xb2c6dc) {
            return _0xc74c87 === _0xb2c6dc;
        },
        'LFqWz': 'code',
        'sGXEV': 'data',
        'GAsRi': 'status',
        'Eftov': 'jdNums',
        'NNLdm': 'nzdSh',
        'ALQwJ': 'ZCqbo',
        'WycGf': 'NRMan',
        'pTJnf': function(_0x32ef07, _0x591cd6) {
            return _0x32ef07 === _0x591cd6;
        },
        'CiVoJ': 'dFRbs',
        'yveor': 'dyxYz',
        'XDClN': function(_0x136dba, _0x4cafd7) {
            return _0x136dba === _0x4cafd7;
        },
        'LEcwu': 'HOxGl',
        'WruKJ': function(_0x5b00df, _0x338aac) {
            return _0x5b00df(_0x338aac);
        },
        'nIezU': function(_0x3e1aaa, _0x5290ac, _0x2ede6e) {
            return _0x3e1aaa(_0x5290ac, _0x2ede6e);
        },
        'xhPog': '/khc/rank/dayRank'
    };
    return new Promise(_0x1babfe => {
        const _0x21104e = {
            't': Date['now']()
        };
        const _0x3a8121 = _0x4d4945['nIezU'](taskUrl, _0x4d4945['xhPog'], _0x21104e);
        $['get'](_0x3a8121, async (_0x29a746, _0x44013f, _0xa89c66) => {
            var _0xeed7bf = {
                'FEkUL': function(_0x4d58e8, _0x394fd3) {
                    return _0x4d4945['AItXY'](_0x4d58e8, _0x394fd3);
                },
                'EfErN': _0x4d4945['LFqWz'],
                'RVRmG': _0x4d4945['sGXEV'],
                'UorKl': _0x4d4945['GAsRi'],
                'eiNRf': _0x4d4945['Eftov'],
                'sMGnP': function(_0x27988c, _0xef58fe) {
                    return _0x4d4945['AItXY'](_0x27988c, _0xef58fe);
                }
            };
            try {
                if (_0x29a746) {
                    if (_0x4d4945['AItXY'](_0x4d4945['NNLdm'], _0x4d4945['NNLdm'])) {
                        console['log']('' + JSON['stringify'](_0x29a746));
                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                    } else {
                        console['log']('' + JSON['stringify'](_0x29a746));
                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                    }
                } else {
                    if (_0x4d4945['AItXY'](_0x4d4945['ALQwJ'], _0x4d4945['WycGf'])) {
                        if (_0x29a746) {
                            console['log']('' + JSON['stringify'](_0x29a746));
                            console['log']($['name'] + ' API请求失败，请检查网路重试');
                        } else {
                            console['log']('助力结果:' + _0xa89c66);
                            _0xa89c66 = JSON['parse'](_0xa89c66);
                            if (_0xa89c66 && _0xeed7bf['FEkUL'](_0xa89c66[_0xeed7bf['EfErN']], 0xc8)) {
                                if (_0xeed7bf['FEkUL'](_0xa89c66[_0xeed7bf['RVRmG']][_0xeed7bf['UorKl']], 0x6)) console['log']('助力成功\n');
                                if (_0xa89c66[_0xeed7bf['RVRmG']][_0xeed7bf['eiNRf']]) $['beans'] += _0xa89c66[_0xeed7bf['RVRmG']][_0xeed7bf['eiNRf']];
                            }
                        }
                    } else {
                        _0xa89c66 = JSON['parse'](_0xa89c66);
                        if (_0x4d4945['AItXY'](_0xa89c66['code'], 0xc8)) {
                            if (_0xa89c66['data']['myRank']) {
                                if (_0x4d4945['pTJnf'](_0x4d4945['CiVoJ'], _0x4d4945['yveor'])) {
                                    console['log']('助力结果:' + _0xa89c66);
                                    _0xa89c66 = JSON['parse'](_0xa89c66);
                                    if (_0xa89c66 && _0xeed7bf['FEkUL'](_0xa89c66[_0xeed7bf['EfErN']], 0xc8)) {
                                        if (_0xeed7bf['sMGnP'](_0xa89c66[_0xeed7bf['RVRmG']][_0xeed7bf['UorKl']], 0x6)) console['log']('助力成功\n');
                                        if (_0xa89c66[_0xeed7bf['RVRmG']][_0xeed7bf['eiNRf']]) $['beans'] += _0xa89c66[_0xeed7bf['RVRmG']][_0xeed7bf['eiNRf']];
                                    }
                                } else {
                                    $['integer'] = _0xa89c66['data']['myRank']['integral'];
                                    $['num'] = _0xa89c66['data']['myRank']['rank'];
                                    message += '当前获得积分：' + $['integer'] + '\x0a';
                                    message += '当前获得排名：' + $['num'] + '\x0a';
                                }
                            }
                            if (_0xa89c66['data']['lastRank']) {
                                if (_0x4d4945['XDClN'](_0x4d4945['LEcwu'], _0x4d4945['LEcwu'])) {
                                    $['lasNum'] = _0xa89c66['data']['lastRank']['rank'];
                                    message += '当前参赛人数：' + $['lasNum'] + '\x0a';
                                } else {
                                    $['logErr'](e, _0x44013f);
                                }
                            }
                        }
                    }
                }
            } catch (_0x46674f) {
                $['logErr'](_0x46674f, _0x44013f);
            } finally {
                _0x4d4945['WruKJ'](_0x1babfe, _0xa89c66);
            }
        });
    });
}

function updateShareCodesCDN(_0x2f8271 = 'http://adguard.b.freefrp.net/jd_cityShareCodes.json') {
    var _0x367051 = {
        'gzIUA': function(_0x206f85, _0x392fe4) {
            return _0x206f85 !== _0x392fe4;
        },
        'FPafb': 'Wgqmo',
        'WnAiT': 'XVHam',
        'OAymN': function(_0x1b2ca8, _0x5d0c05) {
            return _0x1b2ca8 === _0x5d0c05;
        },
        'xQFBp': 'Tterr',
        'mZggo': 'VHGnG',
        'aBDtD': function(_0x17f4b2) {
            return _0x17f4b2();
        },
        'qdeHK': function(_0x1cf887, _0x181b27) {
            return _0x1cf887(_0x181b27);
        },
        'ziHWd': './USER_AGENTS',
        'MEWOg': 'JDUA',
        'VwPWW': 'jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1'
    };
    return new Promise(_0x1c696a => {
        var _0x35fa21 = {
            'VUjSM': function(_0x16699f, _0x3b4976) {
                return _0x367051['qdeHK'](_0x16699f, _0x3b4976);
            }
        };
        $['get']({
            'url': _0x2f8271,
            'headers': {
                'User-Agent': $['isNode']() ? process['env']['JD_USER_AGENT'] ? process['env']['JD_USER_AGENT'] : _0x367051['qdeHK'](require, _0x367051['ziHWd'])['USER_AGENT'] : $['getdata'](_0x367051['MEWOg']) ? $['getdata'](_0x367051['MEWOg']) : _0x367051['VwPWW']
            }
        }, async (_0x391d6b, _0x5d776e, _0x30867a) => {
            if (_0x367051['gzIUA'](_0x367051['FPafb'], _0x367051['WnAiT'])) {
                try {
                    if (_0x391d6b) {
                        console['log']('' + JSON['stringify'](_0x391d6b));
                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                    } else {
                        if (_0x367051['OAymN'](_0x367051['xQFBp'], _0x367051['mZggo'])) {
                            _0x35fa21['VUjSM'](_0x1c696a, _0x30867a);
                        } else {
                            $['updatePkActivityIdRes'] = JSON['parse'](_0x30867a);
                        }
                    }
                } catch (_0x797688) {
                    $['logErr'](_0x797688, _0x5d776e);
                } finally {
                    _0x367051['aBDtD'](_0x1c696a);
                }
            } else {
                $['logErr'](e, _0x5d776e);
            }
        });
    });
}

function readShareCode() {
    var _0x47c0ce = {
        'RzWxu': function(_0x5f94b, _0x2ffbc3) {
            return _0x5f94b !== _0x2ffbc3;
        },
        'XoiFI': 'MDMaJ',
        'TifTY': 'sMcjj',
        'AFpzp': function(_0x4dd038, _0x46f2a1) {
            return _0x4dd038 === _0x46f2a1;
        },
        'ZdZaN': 'htJXa',
        'XrcJN': 'iRtMV',
        'oNOwc': 'GIuSZ',
        'KcYFH': 'ptEZG',
        'bynup': function(_0x1d9d4b, _0x5187d3) {
            return _0x1d9d4b !== _0x5187d3;
        },
        'qTzXA': 'iXfiL',
        'aZVzf': 'kEEtA',
        'oemxH': function(_0x2bb9cf, _0x5154ce) {
            return _0x2bb9cf(_0x5154ce);
        },
        'VtyPs': function(_0x274beb, _0x10d036) {
            return _0x274beb + _0x10d036;
        },
        'Twgfr': function(_0x1ddba6) {
            return _0x1ddba6();
        }
    };
    console['log']('开始');
    return new Promise(async _0x116389 => {
        var _0x351539 = {
            'RfRxm': function(_0xa99491, _0x25a536) {
                return _0x47c0ce['VtyPs'](_0xa99491, _0x25a536);
            }
        };
        $['get']({
            'url': 'http://jd.turinglabs.net/api/v2/jd/carnivalcity/read/0/',
            'timeout': 0x4e20
        }, (_0x45e00d, _0x3b76d0, _0x240477) => {
            if (_0x47c0ce['RzWxu'](_0x47c0ce['XoiFI'], _0x47c0ce['TifTY'])) {
                try {
                    if (_0x45e00d) {
                        console['log']('' + JSON['stringify'](_0x45e00d));
                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                    } else {
                        if (_0x47c0ce['AFpzp'](_0x47c0ce['ZdZaN'], _0x47c0ce['XrcJN'])) {
                            $['logErr'](e, _0x3b76d0);
                        } else {
                            if (_0x240477) {
                                if (_0x47c0ce['AFpzp'](_0x47c0ce['oNOwc'], _0x47c0ce['KcYFH'])) {
                                    shareCodes = process['env']['JD818_SHARECODES']['split']('&');
                                } else {
                                    _0x240477 = JSON['parse'](_0x240477);
                                }
                            }
                        }
                    }
                } catch (_0x584d9e) {
                    if (_0x47c0ce['bynup'](_0x47c0ce['qTzXA'], _0x47c0ce['aZVzf'])) {
                        $['logErr'](_0x584d9e, _0x3b76d0);
                    } else {
                        result = _0x351539['RfRxm'](i, 0x1);
                    }
                } finally {
                    _0x47c0ce['oemxH'](_0x116389, _0x240477);
                }
            } else {
                console['log']('' + JSON['stringify'](_0x45e00d));
                console['log']($['name'] + ' API请求失败，请检查网路重试');
            }
        });
        await $['wait'](0x4e20);
        _0x47c0ce['Twgfr'](_0x116389);
    });
}

function shareCodesFormat() {
    var _0x5ec3c9 = {
        'ckuxy': function(_0xf09e66, _0xe26d36) {
            return _0xf09e66 - _0xe26d36;
        },
        'qlJkJ': function(_0x37b3b5, _0x4fa248) {
            return _0x37b3b5 !== _0x4fa248;
        },
        'ywXlR': 'BXkVY',
        'LpKhd': 'wWHxK',
        'BxJrg': function(_0x8f7423, _0xe2d935) {
            return _0x8f7423 > _0xe2d935;
        },
        'lLpOg': function(_0x1ecf02, _0x322a8e) {
            return _0x1ecf02 - _0x322a8e;
        },
        'sNfOa': function(_0x31cf7d) {
            return _0x31cf7d();
        },
        'PYhSk': function(_0x3acc19, _0x49624e) {
            return _0x3acc19 === _0x49624e;
        },
        'RqarO': function(_0x56fe48) {
            return _0x56fe48();
        }
    };
    return new Promise(async _0x3e1cf8 => {
        $['newShareCodes'] = [];
        if ($['shareCodesArr'][_0x5ec3c9['ckuxy']($['index'], 0x1)]) {
            $['newShareCodes'] = $['shareCodesArr'][_0x5ec3c9['ckuxy']($['index'], 0x1)]['split']('@');
        } else {
            if (_0x5ec3c9['qlJkJ'](_0x5ec3c9['ywXlR'], _0x5ec3c9['LpKhd'])) {
                console['log']('由于您第' + $['index'] + '个京东账号未提供shareCode,将采纳本脚本自带的助力码\n');
                const _0x1f1084 = _0x5ec3c9['BxJrg']($['index'], inviteCodes['length']) ? _0x5ec3c9['ckuxy'](inviteCodes['length'], 0x1) : _0x5ec3c9['lLpOg']($['index'], 0x1);
                $['newShareCodes'] = inviteCodes[_0x1f1084] && inviteCodes[_0x1f1084]['split']('@') || [];
                if ($['updatePkActivityIdRes'] && $['updatePkActivityIdRes']['length']) $['newShareCodes'] = [...$['updatePkActivityIdRes'], ...$['newShareCodes']];
            } else {
                return typeof t;
            }
        }
        const _0x190d4b = await _0x5ec3c9['sNfOa'](readShareCode);
        if (_0x190d4b && _0x5ec3c9['PYhSk'](_0x190d4b['code'], 0xc8)) {
            $['newShareCodes'] = [...new Set([...$['newShareCodes'], ..._0x190d4b['data'] || []])];
        }
        console['log']('第' + $['index'] + '个京东账号将要助力的好友' + JSON['stringify']($['newShareCodes']));
        _0x5ec3c9['RqarO'](_0x3e1cf8);
    });
}

function requireConfig() {
    var _0x590f21 = {
        'scJgk': function(_0x5a6ee4, _0x205b85) {
            return _0x5a6ee4 !== _0x205b85;
        },
        'tmaGq': 'CZVPW',
        'eSnkw': 'REpCw',
        'WxpQu': 'FuNIl',
        'DVymJ': 'HDPHS',
        'GZlUD': function(_0x216237, _0x2002a6) {
            return _0x216237 > _0x2002a6;
        },
        'GRKoC': function(_0x132648, _0x3c8ff5) {
            return _0x132648 === _0x3c8ff5;
        },
        'kdWSN': 'eMIjJ',
        'BVAqN': 'JtOsw',
        'ahcwu': function(_0x3ca107) {
            return _0x3ca107();
        }
    };
    return new Promise(_0x1ce66c => {
        if (_0x590f21['scJgk'](_0x590f21['tmaGq'], _0x590f21['eSnkw'])) {
            console['log']('开始获取' + $['name'] + '配置文件\n');
            let _0x1c769a = [];
            if ($['isNode']()) {
                if (_0x590f21['scJgk'](_0x590f21['WxpQu'], _0x590f21['DVymJ'])) {
                    if (process['env']['JD818_SHARECODES']) {
                        if (_0x590f21['GZlUD'](process['env']['JD818_SHARECODES']['indexOf']('\x0a'), -0x1)) {
                            _0x1c769a = process['env']['JD818_SHARECODES']['split']('\x0a');
                        } else {
                            if (_0x590f21['GRKoC'](_0x590f21['kdWSN'], _0x590f21['BVAqN'])) {
                                $['logErr'](e, resp);
                            } else {
                                _0x1c769a = process['env']['JD818_SHARECODES']['split']('&');
                            }
                        }
                    }
                } else {
                    $['logErr'](e, resp);
                }
            }
            console['log']('共' + cookiesArr['length'] + '个京东账号\n');
            $['shareCodesArr'] = [];
            if ($['isNode']()) {
                Object['keys'](_0x1c769a)['forEach'](_0x39f982 => {
                    if (_0x1c769a[_0x39f982]) {
                        $['shareCodesArr']['push'](_0x1c769a[_0x39f982]);
                    }
                });
            }
            console['log']('您提供了' + $['shareCodesArr']['length'] + '个账号的' + $['name'] + '助力码\n');
            _0x590f21['ahcwu'](_0x1ce66c);
        } else {
            $['logErr'](e, resp);
        }
    });
}

function taskUrl(_0x479e2a, _0x32748b) {
    var _0x5e83ab = {
        'dAEvQ': function(_0x171567, _0x1c3667) {
            return _0x171567 !== _0x1c3667;
        },
        'ffAlG': function(_0x13f25f, _0x479e94) {
            return _0x13f25f + _0x479e94;
        },
        'mDJTB': function(_0x408d1a, _0x1ee752) {
            return _0x408d1a + _0x1ee752;
        },
        'yDqAs': '07035cabb557f09a5',
        'sQYWr': 'application/json, text/plain, */*',
        'GCdvf': 'gzip, deflate, br',
        'WgACT': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
        'AgpYZ': 'https://carnivalcity.m.jd.com/',
        'dVAkX': 'empty',
        'vmyqd': 'cors',
        'LLDVi': 'same-origin',
        'ykpLd': 'jdapp;android;9.4.4;10;3b78ecc3f490c7ba;network/UNKNOWN;model/M2006J10C;addressid/138543439;aid/3b78ecc3f490c7ba;oaid/7d5870c5a1696881;osVer/29;appBuild/85576;psn/3b78ecc3f490c7ba|541;psq/2;uid/3b78ecc3f490c7ba;adk/;ads/;pap/JA2015_311210|9.2.4|ANDROID 10;osv/10;pv/548.2;jdv/0|iosapp|t_335139774|appshare|CopyURL|1606277982178|1606277986;ref/com.jd.lib.personal.view.fragment.JDPersonalFragment;partner/xiaomi001;apprpd/MyJD_Main;Mozilla/5.0 (Linux; Android 10; M2006J10C Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045227 Mobile Safari/537.36',
        'SHxZx': function(_0x4fe5e1, _0x372dfe, _0x1f169d, _0x2a2f1f) {
            return _0x4fe5e1(_0x372dfe, _0x1f169d, _0x2a2f1f);
        }
    };
    const _0x514cda = Date['now']()['toString']();
    let _0x23c9aa = _0x5e83ab['mDJTB'](_0x5e83ab['yDqAs'], _0x514cda);
    let _0x39d78b = '';
    const _0x281b4c = Object['keys'](_0x32748b);
    _0x281b4c['map']((_0x133bb6, _0x1d67b0) => {
        _0x39d78b += _0x133bb6 + '=' + _0x32748b[_0x133bb6] + (_0x5e83ab['dAEvQ'](_0x5e83ab['ffAlG'](_0x1d67b0, 0x1), _0x281b4c['length']) ? '&' : '');
    });
    return {
        'url': '' + JD_API_HOST + _0x479e2a + '?' + _0x39d78b,
        'headers': {
            'accept': _0x5e83ab['sQYWr'],
            'accept-encoding': _0x5e83ab['GCdvf'],
            'accept-language': _0x5e83ab['WgACT'],
            'referer': _0x5e83ab['AgpYZ'],
            'sec-fetch-dest': _0x5e83ab['dVAkX'],
            'sec-fetch-mode': _0x5e83ab['vmyqd'],
            'sec-fetch-site': _0x5e83ab['LLDVi'],
            'Cookie': cookie,
            'User-Agent': _0x5e83ab['ykpLd'],
            'sign': _0x5e83ab['SHxZx'](za, _0x32748b, _0x23c9aa, _0x479e2a)['toString'](),
            'timestamp': _0x514cda
        }
    };
}

function taskPostUrl(_0x36892d, _0xfdade3) {
    var _0x316fb4 = {
        'DUIRS': function(_0x185e46, _0x26e098) {
            return _0x185e46 + _0x26e098;
        },
        'YKRrK': '07035cabb557f09a5',
        'cJXsx': 'application/json, text/plain, */*',
        'mmXQR': 'gzip, deflate, br',
        'pawPy': 'zh-cn',
        'cKqbP': 'keep-alive',
        'XBnLq': 'application/x-www-form-urlencoded',
        'MZaZt': 'carnivalcity.m.jd.com',
        'HXJuf': 'https://carnivalcity.m.jd.com',
        'vmIWV': 'https://carnivalcity.m.jd.com/?lng=113.325695&lat=23.198318&sid=dfb50c19b37544d6ce10759e26c451dw&un_area=19_1601_50258_62858',
        'eLydO': 'jdapp;iPhone;9.4.4;14.3;88732f840b77821b345bf07fd71f609e6ff12f43;network/4g;ADID/B28DA848-0DA0-4AAA-AE7E-A6F55695C590;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone11,8;addressid/2005183373;supportBestPay/0;appBuild/167588;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
        'SaZIF': function(_0x1a3e95, _0x5b3e7e, _0x17ba8e, _0x3bfe0d) {
            return _0x1a3e95(_0x5b3e7e, _0x17ba8e, _0x3bfe0d);
        }
    };
    const _0x229c27 = Date['now']()['toString']();
    let _0x43931f = _0x316fb4['DUIRS'](_0x316fb4['YKRrK'], _0x229c27);
    return {
        'url': '' + JD_API_HOST + _0x36892d,
        'body': _0xfdade3,
        'headers': {
            'Accept': _0x316fb4['cJXsx'],
            'Accept-Encoding': _0x316fb4['mmXQR'],
            'Accept-Language': _0x316fb4['pawPy'],
            'Connection': _0x316fb4['cKqbP'],
            'Content-Type': _0x316fb4['XBnLq'],
            'Host': _0x316fb4['MZaZt'],
            'Origin': _0x316fb4['HXJuf'],
            'Referer': _0x316fb4['vmIWV'],
            'User-Agent': _0x316fb4['eLydO'],
            'Cookie': cookie,
            'sign': _0x316fb4['SaZIF'](za, _0xfdade3, _0x43931f, _0x36892d)['toString'](),
            'timestamp': _0x229c27
        }
    };
}

function P(_0x14c668) {
    var _0x564c4f = {
        'ubOmA': function(_0x464dbf, _0x4f235f) {
            return _0x464dbf === _0x4f235f;
        },
        'gAcAR': 'function',
        'ZlkJV': function(_0x11df30, _0x504d2e) {
            return _0x11df30 !== _0x504d2e;
        },
        'ibmKe': 'symbol',
        'iWyYm': function(_0x34a9cf, _0x3c9bd3) {
            return _0x34a9cf === _0x3c9bd3;
        },
        'PYgoY': function(_0x1d99db, _0x4595a7) {
            return _0x1d99db(_0x4595a7);
        }
    };
    return P = _0x564c4f['iWyYm'](_0x564c4f['gAcAR'], typeof Symbol) && _0x564c4f['iWyYm'](_0x564c4f['ibmKe'], typeof Symbol['iterator']) ? function(_0x14c668) {
        return typeof _0x14c668;
    } : function(_0x14c668) {
        return _0x14c668 && _0x564c4f['ubOmA'](_0x564c4f['gAcAR'], typeof Symbol) && _0x564c4f['ubOmA'](_0x14c668['constructor'], Symbol) && _0x564c4f['ZlkJV'](_0x14c668, Symbol['prototype']) ? _0x564c4f['ibmKe'] : typeof _0x14c668;
    }, _0x564c4f['PYgoY'](P, _0x14c668);
}

function za(_0x594204, _0x3b6eff, _0x10b1b7) {
    var _0x5817db = {
        'pcspw': function(_0x25a8cb, _0x13959e) {
            return _0x25a8cb === _0x13959e;
        },
        'hHXuS': function(_0x3951cc, _0x460a3f) {
            return _0x3951cc == _0x460a3f;
        },
        'frGAu': 'string',
        'deDfN': function(_0x35752c, _0x15709d) {
            return _0x35752c + _0x15709d;
        },
        'EtrQl': 'object',
        'oELRt': function(_0x3b3917, _0xd97012) {
            return _0x3b3917(_0xd97012);
        },
        'TJjvC': function(_0x24d9b7, _0x27cb91) {
            return _0x24d9b7 !== _0x27cb91;
        },
        'TzHpO': 'qyrgg',
        'MsJFj': 'fzOBr',
        'tOGZS': function(_0x302525, _0xa3cddc) {
            return _0x302525 + _0xa3cddc;
        },
        'rWWxD': function(_0x6c435e, _0x1037ed) {
            return _0x6c435e + _0x1037ed;
        },
        'TBkPW': function(_0x51a0c3, _0x5cefed) {
            return _0x51a0c3 + _0x5cefed;
        },
        'aJVgU': function(_0x189d0c, _0x2a15a6) {
            return _0x189d0c === _0x2a15a6;
        },
        'TxmYu': 'CqDwq',
        'azITo': 'FneGs'
    };
    var _0x3f5ce = '',
        _0x1e091e = _0x10b1b7['split']('?')[0x1] || '';
    if (_0x594204) {
        if (_0x5817db['hHXuS'](_0x5817db['frGAu'], typeof _0x594204)) _0x3f5ce = _0x5817db['deDfN'](_0x594204, _0x1e091e);
        else if (_0x5817db['hHXuS'](_0x5817db['EtrQl'], _0x5817db['oELRt'](P, _0x594204))) {
            if (_0x5817db['TJjvC'](_0x5817db['TzHpO'], _0x5817db['MsJFj'])) {
                var _0x35493a = [];
                for (var _0x2ed099 in _0x594204) _0x35493a['push'](_0x5817db['tOGZS'](_0x5817db['rWWxD'](_0x2ed099, '='), _0x594204[_0x2ed099]));
                _0x3f5ce = _0x35493a['length'] ? _0x5817db['TBkPW'](_0x35493a['join']('&'), _0x1e091e) : _0x1e091e;
            } else {
                console['log']('jingBeanRecord失败：' + JSON['stringify'](data));
            }
        }
    } else _0x3f5ce = _0x1e091e;
    if (_0x3f5ce) {
        if (_0x5817db['aJVgU'](_0x5817db['TxmYu'], _0x5817db['azITo'])) {
            data = JSON['parse'](data);
            if (_0x5817db['pcspw'](data['code'], 0xc8)) {
                $['integralCount'] = data['data']['integralNum'];
                message += '累计获得积分：' + $['integralCount'] + '\x0a';
            } else {
                console['log']('integralRecord失败：' + JSON['stringify'](data));
            }
        } else {
            var _0x30feb5 = _0x3f5ce['split']('&')['sort']()['join']('');
            return $['md5'](_0x5817db['TBkPW'](_0x30feb5, _0x3b6eff));
        }
    }
    return $['md5'](_0x3b6eff);
};
_0xodc = 'jsjiami.com.v6'


function TotalBean() {
  return new Promise(async resolve => {
    const options = {
      "url": `https://wq.jd.com/user/info/QueryJDUserInfo?sceneval=2`,
      "headers": {
        "Accept": "application/json,text/plain, */*",
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-cn",
        "Connection": "keep-alive",
        "Cookie": cookie,
        "Referer": "https://wqs.jd.com/my/jingdou/my.shtml?sceneval=2",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.2 Mobile/15E148 Safari/604.1"
      }
    }
    $.post(options, (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          if (data) {
            data = JSON.parse(data);
            if (data['retcode'] === 13) {
              $.isLogin = false; //cookie过期
              return
            }
            if (data['retcode'] === 0) {
              $.nickName = (data['base'] && data['base'].nickname) || $.UserName;
            } else {
              $.nickName = $.UserName
            }
          } else {
            console.log(`京东服务器返回空数据`)
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}
async function showMsg() {
  let nowTime = new Date().getTime() + new Date().getTimezoneOffset()*60*1000 + 8*60*60*1000;
  if (nowTime > new Date(activeEndTime).getTime()) {
    $.msg($.name, '活动已结束', `该活动累计获得京豆：${$.jbeanCount}个\n请删除此脚本\n咱江湖再见`);
    if ($.isNode()) await notify.sendNotify($.name + '活动已结束', `请删除此脚本\n咱江湖再见`)
  } else {
    if ($.beans) {
      allMessage += `京东账号${$.index} ${$.nickName || $.UserName}\n本次运行获得：${$.beans}京豆\n${message}活动地址：${JD_API_HOST}${$.index !== cookiesArr.length ? '\n\n' : ''}`
    }
    $.msg($.name, `京东账号${$.index} ${$.nickName || $.UserName}`, `${message}具体详情点击弹窗跳转后即可查看`, {"open-url": JD_API_HOST});
  }
}
function jsonParse(str) {
  if (typeof str == "string") {
    try {
      return JSON.parse(str);
    } catch (e) {
      console.log(e);
      $.msg($.name, '', '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie')
      return [];
    }
  }
}
// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}