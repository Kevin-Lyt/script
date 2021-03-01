/*
百变大咖秀
活动入口：首页搜索-‘百变大咖秀’-底部最右侧按钮
请手动进入一次活动页面已确保能够自动抽奖
活动地址：https://lzdz-isv.isvjcloud.com/dingzhi/change/able/activity/3508994?activityId=dz2102100001340204

新手写脚本，难免有bug，能用且用。
多谢 whyour 大佬 指导

脚本内置了一个给作者任务助力的网络请求，默认开启，如介意请自行关闭。
助力活动链接： https://h5.m.jd.com/babelDiy/Zeus/4ZK4ZpvoSreRB92RRo8bpJAQNoTq/index.html
参数 helpAuthor = false

更新地址：https://raw.githubusercontent.com/i-chenzhe/qx/main/jd_entertainment.js
============Quantumultx===============
[task_local]
#百变大咖秀
10 10,11 * * 2-5 https://raw.githubusercontent.com/i-chenzhe/qx/main/jd_entertainment.js, tag=百变大咖秀,  enabled=true
================Loon==============
[Script]
cron "10 10,11 * * 2-5" script-path=https://raw.githubusercontent.com/i-chenzhe/qx/main/jd_entertainment.js,tag=百变大咖秀
===============Surge=================
百变大咖秀 = type=cron,cronexp="10 10,11 * * 2-5",wake-system=1,timeout=3600,script-path=https://raw.githubusercontent.com/i-chenzhe/qx/main/jd_entertainment.js
============小火箭=========
百变大咖秀 = type=cron,script-path=https://raw.githubusercontent.com/i-chenzhe/qx/main/jd_entertainment.js, cronexpr="10 10,11 * * 2-5", timeout=3600, enable=true
*/

const $ = new Env('百变大咖秀');
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
const notify = $.isNode() ? require('./sendNotify') : '';
let cookiesArr = [], cookie = '', originCookie = '', message = '';
let helpAuthor = false;//为作者助力的开关
const ACT_ID = 'dz2102100001340204';
const questionList = [
  { q: '2ac2613ac0944d46a439859680c40c48', a: 'A:沈梦辰' },
  { q: '3015c6e3d4374627bd639d3fb16df287', a: 'B:大张伟' },
  { q: '4b9d9886eac24a3188c26f7d9594add5', a: 'A:虎虎' },
  { q: '54d0563ce5424fb5b75c4a29581173c9', a: 'B:蔡国庆' },
  { q: '76a8c0b2d46e4ec495fe74c556ba6bb7', a: 'A:黄艺馨' },
  { q: '78c6a42baa374299bd9290771268ba80', a: 'C:任贤齐' },
  { q: 'dfd7acb0efb54487984ecfc9edee0cee', a: 'A:陈浩民' },
  { q: 'f67e2bfefae34709971e4fabd961b0f5', a: 'B:王祖蓝' },
  { q: 'fcff5670e2214eb099924b9b9bc1d355', a: 'B:张海宇' }
]
if ($.isNode()) {
  Object.keys(jdCookieNode).forEach((item) => {
    cookiesArr.push(jdCookieNode[item])
  })
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => { };
} else {
  let cookiesData = $.getdata('CookiesJD') || "[]";
  cookiesData = JSON.parse(cookiesData);
  cookiesArr = cookiesData.map(item => item.cookie);
  cookiesArr.reverse();
  cookiesArr.push(...[$.getdata('CookieJD2'), $.getdata('CookieJD')]);
  cookiesArr.reverse();
  cookiesArr = cookiesArr.filter(item => !!item);
}
!(async () => {
    var _0x25983a = {
        'xYYqf': 'https://bean.m.jd.com/bean/signIndex.action',
        'Nfzku': function(_0x383c39, _0x1ca093) {
            return _0x383c39 < _0x1ca093;
        },
        'FTcuF': function(_0x2a6cca, _0x4b9c65) {
            return _0x2a6cca(_0x4b9c65);
        },
        'oeuna': 'entertainment',
        'ElTlY': function(_0x521333, _0x5ab4bd) {
            return _0x521333 + _0x5ab4bd;
        },
        'oLDGz': function(_0x109027) {
            return _0x109027();
        }
    };
    if (!cookiesArr[0x0]) {
        $['msg']($['name'], '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取', 'https://bean.m.jd.com/bean/signIndex.action', {
            'open-url': _0x25983a['xYYqf']
        });
        return;
    }
    for (let _0x5bd902 = 0x0; _0x25983a['Nfzku'](_0x5bd902, cookiesArr['length']); _0x5bd902++) {
        if (cookiesArr[_0x5bd902]) {
            await _0x25983a['FTcuF'](getAuthorCode, _0x25983a['oeuna']);
            await getShareCode();
            cookie = cookiesArr[_0x5bd902];
            originCookie = cookiesArr[_0x5bd902];
            $['UserName'] = decodeURIComponent(cookie['match'](/pt_pin=(.+?);/) && cookie['match'](/pt_pin=(.+?);/)[0x1]);
            $['index'] = _0x25983a['ElTlY'](_0x5bd902, 0x1);
            $['isLogin'] = !![];
            $['nickName'] = '';
            await _0x25983a['oLDGz'](TotalBean);
            console['log']('\x0a******开始【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']) + '*********\x0a');
            if (!$['isLogin']) {
                $['msg']($['name'], '【提示】cookie已失效', '京东账号' + $['index'] + ' ' + ($['nickName'] || $['UserName']) + '\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action', {
                    'open-url': _0x25983a['xYYqf']
                });
                if ($['isNode']()) {
                    await notify['sendNotify']($['name'] + 'cookie已失效 - ' + $['UserName'], '京东账号' + $['index'] + ' ' + $['UserName'] + '\n请重新登录获取cookie');
                }
                continue;
            }
            await _0x25983a['oLDGz'](entertainment);
        }
    }
})()['catch'](_0x4a5597 => {
    $['log']('', '❌ ' + $['name'] + ', 失败! 原因: ' + _0x4a5597 + '!', '');
})['finally'](() => {
    $['done']();
});
async function entertainment() {
    var _0x1111c4 = {
        'cEHiE': function(_0x368118) {
            return _0x368118();
        },
        'DzuXT': function(_0x19126f) {
            return _0x19126f();
        },
        'rADXk': 'api.m.jd.com',
        'FSUvK': 'gzip, deflate, br',
        'XqLoW': 'keep-alive',
        'aaBae': 'application/json, text/plain, */*',
        'ZgPJS': 'jdapp;iPhone;9.4.0;14.3;;network/wifi;ADID/;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone10,3;addressid/;supportBestPay/0;appBuild/167541;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
        'bdbOF': 'zh-cn',
        'VvMFc': function(_0x506f47, _0x560dc4) {
            return _0x506f47 !== _0x560dc4;
        },
        'mwNlW': function(_0x21817c, _0x5ecf0d) {
            return _0x21817c < _0x5ecf0d;
        },
        'xPnOG': '2|4|1|0|3',
        'OWvWG': function(_0x26f5ef, _0x49aa6e, _0xf91989) {
            return _0x26f5ef(_0x49aa6e, _0xf91989);
        },
        'oPpeN': function(_0x5264e6, _0x4757ce) {
            return _0x5264e6 === _0x4757ce;
        },
        'BPSSn': function(_0x416e24, _0x264eeb, _0x5534cc) {
            return _0x416e24(_0x264eeb, _0x5534cc);
        },
        'krbSJ': function(_0x3e5a09, _0x283b75) {
            return _0x3e5a09(_0x283b75);
        },
        'BJZby': function(_0x406ebd) {
            return _0x406ebd();
        },
        'whCUL': function(_0x410626, _0x102518) {
            return _0x410626(_0x102518);
        }
    };
    if (helpAuthor) {
        function _0x3c0dd0() {
            return new Promise(_0x3a7950 => {
                var _0x38290d = {
                    'sLTzm': function(_0x23ba46) {
                        return _0x1111c4['cEHiE'](_0x23ba46);
                    }
                };
                $['get']({
                    'url': ' '
                }, (_0x2f2860, _0x38006c, _0x3616bf) => {
                    try {
                        if (_0x3616bf) {
                            $['zData'] = JSON['parse'](_0x3616bf);
                        };
                    } catch (_0x42a5c1) {
                        console['log'](_0x42a5c1);
                    } finally {
                        _0x38290d['sLTzm'](_0x3a7950);
                    };
                });
            });
        }

        function _0x356e3f(_0x25d87f, _0x9ccfc5) {
            let _0x4aae64 = {
                'url': 'https://api.m.jd.com/client.action',
                'headers': {
                    'Host': _0x1111c4['rADXk'],
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Origin': 'https://h5.m.jd.com',
                    'Accept-Encoding': _0x1111c4['FSUvK'],
                    'Cookie': cookie,
                    'Connection': _0x1111c4['XqLoW'],
                    'Accept': _0x1111c4['aaBae'],
                    'User-Agent': _0x1111c4['ZgPJS'],
                    'Referer': 'https://h5.m.jd.com/babelDiy/Zeus/4ZK4ZpvoSreRB92RRo8bpJAQNoTq/index.html?serveId=wxe30973feca923229&actId=' + _0x25d87f + '&way=0&lng=&lat=&sid=&un_area=',
                    'Accept-Language': _0x1111c4['bdbOF']
                },
                'body': 'functionId=cutPriceByUser&body={"activityId":"' + _0x25d87f + '","userName":"","followShop":1,"shopId":' + _0x9ccfc5 + ',"userPic":""}&client=wh5&clientVersion=1.0.0'
            };
            return new Promise(_0x13b2aa => {
                var _0x5b417d = {
                    'gZzsk': function(_0x12d82c) {
                        return _0x1111c4['DzuXT'](_0x12d82c);
                    }
                };
                $['post'](_0x4aae64, (_0x3816f3, _0x3be731, _0x15a790) => {
                    if (_0x15a790) {
                        $['zRes'] = JSON['parse'](_0x15a790);
                        _0x5b417d['gZzsk'](_0x13b2aa);
                    };
                });
            });
        }

        function _0x291d21(_0x136a63, _0x207c53) {
            let _0x585598 = {
                'url': ' ',
                'headers': {
                    'Content-Type': 'application/json'
                },
                'body': JSON['stringify']({
                    'actID': _0x136a63,
                    'actsID': _0x207c53,
                    'done': 0x1
                })
            };
            return new Promise(_0x11a189 => {
                $['post'](_0x585598, (_0x4ec4df, _0x229217, _0x40d06c) => {
                    _0x11a189();
                });
            });
        }
        await _0x3c0dd0();
        if (_0x1111c4['VvMFc']($['zData']['data']['length'], 0x0)) {
            for (let _0x585cff = 0x0; _0x1111c4['mwNlW'](_0x585cff, $['zData']['data']['length']); _0x585cff++) {
                var _0x969c92 = _0x1111c4['xPnOG']['split']('|'),
                    _0x3ca283 = 0x0;
                while (!![]) {
                    switch (_0x969c92[_0x3ca283++]) {
                        case '0':
                            await $['wait'](0x5dc);
                            continue;
                        case '1':
                            await _0x1111c4['OWvWG'](_0x356e3f, actID, actsID);
                            continue;
                        case '2':
                            actID = $['zData']['data'][_0x585cff]['actID'];
                            continue;
                        case '3':
                            if ($['Res'] && _0x1111c4['oPpeN']($['Res']['status'], 0x4)) {
                                await _0x291d21(actID, actsID);
                            }
                            continue;
                        case '4':
                            actsID = $['zData']['data'][_0x585cff]['actsID'];
                            continue;
                    }
                    break;
                }
            };
        };
    };
    $['risk'] = ![];
    $['gameScore'] = 0x0;
    await grantTokenKey();
    await $['wait'](0x5dc);
    await grantToken();
    await $['wait'](0x5dc);
    await getActCookie();
    await $['wait'](0x5dc);
    await _0x1111c4['DzuXT'](getActInfo);
    await $['wait'](0x5dc);
    await _0x1111c4['DzuXT'](getMyPing);
    await $['wait'](0x5dc);
    await getUserInfo();
    await $['wait'](0x5dc);
    await _0x1111c4['BPSSn'](getActContent, ![], $['userShareCode']);
    if (!$['risk']) {
        var _0x26ada3 = '6|4|5|3|2|0|7|8|1' ['split']('|'),
            _0x576885 = 0x0;
        while (!![]) {
            switch (_0x26ada3[_0x576885++]) {
                case '0':
                    await _0x1111c4['krbSJ'](getActContent, ![]);
                    continue;
                case '1':
                    await submitShareCode({
                        'share_code': $['shareCode'],
                        'pt_key': $['UserName']
                    });
                    continue;
                case '2':
                    await $['wait'](0x5dc);
                    continue;
                case '3':
                    await _0x1111c4['BJZby'](answer);
                    continue;
                case '4':
                    await _0x1111c4['whCUL'](getActContent, $['doJob']);
                    continue;
                case '5':
                    await $['wait'](0x5dc);
                    continue;
                case '6':
                    await $['wait'](0x5dc);
                    continue;
                case '7':
                    await _0x1111c4['BJZby'](draw);
                    continue;
                case '8':
                    console['log']('好友助力码【 ' + $['shareCode'] + ' 】');
                    continue;
            }
            break;
        }
    } else {
        if ($['isNode']()) {
            await notify['sendNotify']($['name'] + '运行完成', '京东账号' + $['index'] + ' ' + ($['nickName'] || $['UserName']) + '\x0a京东说‘本活动与你无缘，请关注其他活动。’');
        } else {
            await $['msg']($['name'] + '运行完成', '京东说‘本活动与你无缘，请关注其他活动。’');
        }
    }
}
async function draw() {
    var _0x818844 = {
        'NgZna': function(_0x47c759, _0x40f307) {
            return _0x47c759 < _0x40f307;
        },
        'upAwf': function(_0x45adea, _0x5206bf) {
            return _0x45adea === _0x5206bf;
        },
        'pPgpZ': function(_0x343008, _0x27856b, _0x3be64d) {
            return _0x343008(_0x27856b, _0x3be64d);
        },
        'oITKY': 'dingzhi/change/able/startDraw',
        'ycvkH': function(_0x4d16d7, _0x30cc28) {
            return _0x4d16d7(_0x30cc28);
        }
    };
    for (let _0x1107ae = 0x0; _0x818844['NgZna'](_0x1107ae, $['cardList']['length']); _0x1107ae++) {
        const _0x427521 = $['cardList'][_0x1107ae];
        if (_0x427521['answer'] === !![] && _0x818844['upAwf'](_0x427521['draw'], ![]) && $['canDraw'] === !![]) {
            console['log']('开始抽奖');
            await _0x818844['pPgpZ'](doTask, _0x818844['oITKY'], 'activityId=' + ACT_ID + '&actorUuid=' + $['shareCode'] + '&pin=' + _0x818844['ycvkH'](encodeURIComponent, $['secretPin']) + '&cardId=' + _0x427521['uuid']);
            await $['wait'](0x3e8);
        }
    }
}
async function answer() {
    var _0x203886 = {
        'fRTqa': 'dingzhi/change/able/getHasCard',
        'hxNgQ': function(_0x44fea0, _0x160f4e) {
            return _0x44fea0 === _0x160f4e;
        },
        'ISymO': function(_0x24e448, _0x1797da) {
            return _0x24e448 !== _0x1797da;
        },
        'AmOPo': function(_0xad6b57, _0x525f6b) {
            return _0xad6b57 < _0x525f6b;
        },
        'nveja': function(_0x5739a3, _0x8da72c) {
            return _0x5739a3(_0x8da72c);
        },
        'eVEbU': function(_0x5891f1, _0x10705b, _0x196d7f) {
            return _0x5891f1(_0x10705b, _0x196d7f);
        },
        'CQFRq': 'dingzhi/change/able/answer'
    };
    await doTask(_0x203886['fRTqa'], 'activityId=' + ACT_ID + '&actorUuid=' + $['shareCode'] + '&pin=' + encodeURIComponent($['secretPin']));
    let _0x134d20 = [0x0, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8];
    let _0x3e096d = [];
    for (let _0x4ae5b7 = 0x0; _0x4ae5b7 < $['cardList']['length']; _0x4ae5b7++) {
        const _0x1af50d = $['cardList'][_0x4ae5b7];
        if (_0x203886['hxNgQ'](_0x1af50d['position'], 0x63)) {
            _0x3e096d['push'](_0x1af50d);
        }
        if (_0x203886['ISymO'](_0x1af50d['position'], 0x63)) {
            let _0x461309 = _0x134d20['indexOf'](_0x1af50d['position']);
            _0x134d20['splice'](_0x461309, 0x1);
        }
    }
    if (_0x3e096d['length'] === 0x0) {
        console['log']('已经答对所有题目了。');
        return;
    }
    if (_0x203886['AmOPo'](_0x3e096d['length'], $['gameScore'])) {
        times = _0x3e096d['length'];
    } else {
        times = $['gameScore'];
    }
    for (let _0x533aa4 = 0x0; _0x533aa4 <= times; _0x533aa4++) {
        let _0x528606 = '';
        const _0x5dca58 = questionList['filter'](_0x416e01 => _0x416e01['q'] === _0x3e096d[_0x533aa4]['uuid']);
        if (_0x5dca58 && _0x5dca58[0x0]) {
            console['log']('在本地题库中找到了答案：' + _0x5dca58[0x0]['a']);
            _0x528606 = _0x5dca58[0x0]['a'];
        }
        let _0x38624c = 'activityId=' + ACT_ID + '&actorUuid=' + $['shareCode'] + '&pin=' + encodeURIComponent($['secretPin']) + '&uuid=' + _0x3e096d[_0x533aa4]['uuid'] + '&answer=' + _0x203886['nveja'](encodeURIComponent, _0x528606) + '&position=' + _0x134d20[_0x533aa4];
        await _0x203886['eVEbU'](doTask, _0x203886['CQFRq'], _0x38624c);
        await $['wait'](0x5dc);
    }
}
async function getActContent(_0x57945f = !![], _0x4fd6e6 = '') {
    var _0x3063d8 = {
        'qBJvi': function(_0x431773, _0x133002) {
            return _0x431773 === _0x133002;
        },
        'jyAbW': function(_0x3b432a, _0xfc17d9, _0x556787) {
            return _0x3b432a(_0xfc17d9, _0x556787);
        },
        'Hbavf': function(_0x1583f0, _0x3743ef) {
            return _0x1583f0(_0x3743ef);
        },
        'Cnelj': 'mainActive',
        'duDrt': function(_0x3e9081, _0x2be669) {
            return _0x3e9081(_0x2be669);
        },
        'IwcQt': function(_0x489bce, _0x11d72d) {
            return _0x489bce(_0x11d72d);
        },
        'VQQZo': 'dingzhi/change/able/saveTask',
        'isFJG': function(_0xb72ac1, _0xb0fd5, _0x4145b3) {
            return _0xb72ac1(_0xb0fd5, _0x4145b3);
        },
        'mOhBR': 'crm/pageVisit/insertCrmPageVisit',
        'eXzHC': function(_0x299f0a, _0x10c796, _0x43c82c) {
            return _0x299f0a(_0x10c796, _0x43c82c);
        }
    };
    return new Promise(_0x20ebef => {
        var _0x1f618a = {
            'mNCLN': function(_0x4504b1, _0x10fbc4) {
                return _0x4504b1 === _0x10fbc4;
            },
            'AiZlE': function(_0x91865b, _0x2f3437) {
                return _0x3063d8['qBJvi'](_0x91865b, _0x2f3437);
            },
            'peKKC': function(_0x426bc5, _0x503236, _0x175232) {
                return _0x3063d8['jyAbW'](_0x426bc5, _0x503236, _0x175232);
            },
            'kNfct': function(_0x5e99be, _0x5b1e2d) {
                return _0x3063d8['Hbavf'](_0x5e99be, _0x5b1e2d);
            },
            'Wcxxk': 'toShop',
            'zViCy': _0x3063d8['Cnelj'],
            'JJtEd': function(_0x22635a, _0x5b9bfa) {
                return _0x3063d8['duDrt'](_0x22635a, _0x5b9bfa);
            },
            'DJOga': function(_0x21c681, _0x2dafe6) {
                return _0x3063d8['IwcQt'](_0x21c681, _0x2dafe6);
            },
            'YmRKD': function(_0x3ab7cf, _0x4a3b5a) {
                return _0x3ab7cf + _0x4a3b5a;
            },
            'AtpBv': _0x3063d8['VQQZo'],
            'wNGKF': function(_0x303941, _0x3f06db, _0x524206) {
                return _0x3063d8['isFJG'](_0x303941, _0x3f06db, _0x524206);
            },
            'OJUIH': _0x3063d8['mOhBR']
        };
        $['post'](_0x3063d8['eXzHC'](taskPostUrl, 'dingzhi/change/able/activityContent', 'activityId=' + ACT_ID + '&pin=' + encodeURIComponent($['secretPin']) + '&pinImg=' + $['pinImg'] + '&nick=' + $['nickName'] + '&cjyxPin=&cjhyPin=&shareUuid=' + _0x4fd6e6), async (_0x53d107, _0x4de3c9, _0x3c421b) => {
            try {
                if (_0x53d107) {
                    console['log']('' + JSON['stringify'](_0x53d107));
                } else {
                    _0x3c421b = JSON['parse'](_0x3c421b);
                    if (_0x1f618a['mNCLN'](_0x3c421b['result'], ![])) {
                        $['risk'] = !![];
                        console['log']('京东说‘本活动与你无缘，请关注其他活动。’');
                        return;
                    }
                    $['cardScore'] = _0x3c421b['data']['cardScore'];
                    $['shareCode'] = _0x3c421b['data']['actorUuid'];
                    $['addSku'] = _0x3c421b['data']['addSku'];
                    $['mainActive'] = _0x3c421b['data']['mainActive'];
                    $['toShop'] = _0x3c421b['data']['toShop'];
                    if (_0x1f618a['mNCLN'](_0x3c421b['data']['gameScore'], 0x9)) {
                        $['doJob'] = ![];
                        if (_0x1f618a['AiZlE'](_0x3c421b['data']['drawOrNo'], ![]) && _0x3c421b['data']['canDrawBig'] === !![]) {
                            console['log']('开始抽取最终大奖。');
                            await _0x1f618a['peKKC'](doTask, 'dingzhi/change/able/startDrawBig', 'activityId=' + ACT_ID + '&actorUuid=' + $['shareCode'] + '&pin=' + _0x1f618a['kNfct'](escape, $['secretPin']) + '&cardId=');
                        }
                    }
                    if (_0x57945f) {
                        for (let _0x24135d of [_0x1f618a['Wcxxk'], _0x1f618a['zViCy']]) {
                            let _0x5a9493 = _0x3c421b['data'][_0x24135d];
                            for (let _0x3e573d of _0x5a9493['settings']) {
                                let _0x1a45bb = 'activityId=' + ACT_ID + '&actorUuid=' + $['shareCode'] + '&pin=' + _0x1f618a['JJtEd'](encodeURIComponent, $['secretPin']) + '&taskType=' + _0x3e573d['type'] + '&taskValue=' + _0x3e573d['value'];
                                let _0x19d019 = 'venderId=' + _0x3c421b['data']['shopId'] + '&elementId=' + _0x1f618a['DJOga'](encodeURIComponent, _0x1f618a['YmRKD']('店铺', _0x3e573d['value'])) + '&pageId=' + ACT_ID + '&pin=' + _0x1f618a['DJOga'](encodeURIComponent, $['secretPin']);
                                if (_0x1f618a['AiZlE'](_0x3e573d['type'], 0xc)) {
                                    console['log']('浏览会场 - ' + _0x3e573d['name']);
                                    await _0x1f618a['peKKC'](doTask, _0x1f618a['AtpBv'], _0x1a45bb);
                                    await $['wait'](0x7d0);
                                    await _0x1f618a['wNGKF'](doTask, _0x1f618a['OJUIH'], _0x19d019);
                                } else {
                                    console['log']('浏览店铺 - ' + _0x3e573d['name']);
                                    await doTask(_0x1f618a['AtpBv'], _0x1a45bb);
                                    await $['wait'](0x7d0);
                                }
                            }
                            await $['wait'](0x5dc);
                        }
                        await $['wait'](0x5dc);
                        await _0x1f618a['wNGKF'](doTask, _0x1f618a['AtpBv'], 'activityId=' + ACT_ID + '&actorUuid=' + $['shareCode'] + '&pin=' + encodeURIComponent($['secretPin']) + '&taskType=' + $['addSku']['settings'][0x0]['type'] + '&taskValue=' + $['addSku']['settings'][0x0]['value']);
                    }
                }
            } catch (_0x54ecbf) {
                $['logErr'](_0x54ecbf, _0x4de3c9);
            } finally {
                _0x1f618a['DJOga'](_0x20ebef, _0x3c421b);
            }
        });
    });
}

function doTask(_0x52e131, _0x3b6d08) {
    var _0x1b3002 = {
        'QoTlh': 'headers',
        'nAPLY': function(_0x13ebe8, _0x5bd927) {
            return _0x13ebe8 === _0x5bd927;
        },
        'tXVea': function(_0x17ed0a, _0x4efb35) {
            return _0x17ed0a !== _0x4efb35;
        },
        'XnXcG': 'list',
        'AygIK': 'right',
        'FWonu': function(_0x5ba774, _0x43b3c7) {
            return _0x5ba774 === _0x43b3c7;
        },
        'zzvaZ': function(_0x263db5, _0x290d5a, _0x544eba) {
            return _0x263db5(_0x290d5a, _0x544eba);
        }
    };
    return new Promise(_0x6fc9f3 => {
        var _0x1dca95 = {
            'aqQxC': _0x1b3002['QoTlh'],
            'nLpUn': 'set-cookie',
            'ZYHBg': function(_0x232c53, _0x4a0773) {
                return _0x1b3002['nAPLY'](_0x232c53, _0x4a0773);
            },
            'lCkoJ': 'gameScore',
            'rMsbk': function(_0x1b4b27, _0xd5c5d4) {
                return _0x1b3002['tXVea'](_0x1b4b27, _0xd5c5d4);
            },
            'teytb': _0x1b3002['XnXcG'],
            'isIBP': _0x1b3002['AygIK'],
            'XhwIf': function(_0x104bf6, _0x3a5fde) {
                return _0x1b3002['FWonu'](_0x104bf6, _0x3a5fde);
            },
            'LhMrb': function(_0x237bad) {
                return _0x237bad();
            }
        };
        $['post'](_0x1b3002['zzvaZ'](taskPostUrl, _0x52e131, _0x3b6d08), (_0x29c604, _0x527286, _0x3e10c9) => {
            try {
                if (_0x29c604) {
                    console['log']('' + JSON['stringify'](_0x29c604));
                } else {
                    _0x3e10c9 = JSON['parse'](_0x3e10c9);
                    if (_0x527286[_0x1dca95['aqQxC']][_0x1dca95['nLpUn']]) {
                        cookie = _0x527286['headers'][_0x1dca95['nLpUn']]['join'](';') + '; ' + originCookie;
                    }
                    if (_0x1dca95['ZYHBg'](_0x3e10c9['result'], !![])) {
                        if (_0x3e10c9['data']['hasOwnProperty'](_0x1dca95['lCkoJ'])) {
                            $['gameScore'] += _0x3e10c9['data']['gameScore'];
                            if (_0x1dca95['rMsbk'](_0x3e10c9['data']['gameScore'], 0x0)) {
                                console['log']('获得1次翻牌机会');
                            }
                        }
                        if (_0x3e10c9['data']['hasOwnProperty'](_0x1dca95['teytb'])) {
                            $['cardList'] = _0x3e10c9['data']['list'];
                        }
                        if (_0x3e10c9['data']['hasOwnProperty'](_0x1dca95['isIBP'])) {
                            if (_0x1dca95['XhwIf'](_0x3e10c9['data']['right'], !![])) {
                                console['log']('回答正确。');
                            }
                        }
                        if (_0x3e10c9['data']['hasOwnProperty']('drawInfo')) {
                            if (_0x3e10c9['data']['drawOk'] === !![]) {
                                message += '获得' + _0x3e10c9['data']['drawInfo']['name'] + '\x0a';
                                console['log']('获得' + _0x3e10c9['data']['drawInfo']['name'] + '\x0a');
                            } else {
                                $['canDraw'] = ![];
                                console['log']('抽奖结果:' + _0x3e10c9['errorMessage']);
                                $['msg']($['name'] + '\n请手动进入一次活动页面后重新尝试');
                            }
                        }
                    } else {
                        console['log'](_0x3e10c9['errorMessage']);
                    }
                }
            } catch (_0xe77649) {
                console['log'](_0xe77649, _0x527286);
            } finally {
                _0x1dca95['LhMrb'](_0x6fc9f3);
            }
        });
    });
}

function getAuthorCode(_0x48a0ba) {
    var _0x20a420 = {
        'xGQVj': function(_0x1df38d, _0x45e72d) {
            return _0x1df38d > _0x45e72d;
        }
    };
    return new Promise(async _0x4dc666 => {
        var _0x41c970 = {
            'lJAYf': function(_0x2947c8, _0x32a62b) {
                return _0x20a420['xGQVj'](_0x2947c8, _0x32a62b);
            }
        };
        $['get']({
            'url': 'https://api.r2ray.com/jd.shareCode/author?type=' + _0x48a0ba
        }, (_0x2c8ffc, _0x5f5308, _0x1e5605) => {
            try {
                if (_0x2c8ffc) {
                    console['log']('' + JSON['stringify'](_0x2c8ffc));
                } else {
                    if (_0x1e5605) {
                        _0x1e5605 = JSON['parse'](_0x1e5605);
                        if (_0x41c970['lJAYf'](_0x1e5605['data']['length'], 0x0)) {
                            $['authorShareCode'] = _0x1e5605['data'][0x0]['share_code'];
                        } else {
                            $['authorShareCode'] = '';
                        }
                    }
                }
            } catch (_0x2a997c) {
                $['logErr'](_0x2a997c, _0x5f5308);
            } finally {
                _0x4dc666(_0x1e5605);
            }
        });
    });
}

function getUserInfo() {
    var _0xc11f = {
        'zvRlt': function(_0x22d588, _0x16e867) {
            return _0x22d588(_0x16e867);
        },
        'iCSFB': function(_0x1ef1ab, _0x2afae7) {
            return _0x1ef1ab(_0x2afae7);
        },
        'PhfRQ': function(_0x298eae, _0x25b67e, _0x1bcaca) {
            return _0x298eae(_0x25b67e, _0x1bcaca);
        },
        'RhalD': 'wxActionCommon/getUserInfo'
    };
    return new Promise(_0xf3c65 => {
        var _0x100730 = {
            'QLBQT': function(_0x45cbd9, _0x2768ab) {
                return _0xc11f['zvRlt'](_0x45cbd9, _0x2768ab);
            }
        };
        let _0x17a9a8 = 'pin=' + _0xc11f['iCSFB'](encodeURIComponent, $['secretPin']);
        $['post'](_0xc11f['PhfRQ'](taskPostUrl, _0xc11f['RhalD'], _0x17a9a8), async (_0x1f08c4, _0x3bc01a, _0x32acc2) => {
            try {
                if (_0x1f08c4) {
                    console['log']('' + JSON['stringify'](_0x1f08c4));
                } else {
                    _0x32acc2 = JSON['parse'](_0x32acc2);
                    if (_0x32acc2['data']) {
                        console['log']('用户【' + _0x32acc2['data']['nickname'] + '】信息获取成功');
                        $['userId'] = _0x32acc2['data']['id'];
                        $['pinImg'] = _0x32acc2['data']['yunMidImageUrl'];
                        $['nickName'] = _0x32acc2['data']['nickame'];
                    } else {
                        console['log'](_0x32acc2);
                    }
                }
            } catch (_0x4c1689) {
                $['logErr'](_0x4c1689, _0x3bc01a);
            } finally {
                _0x100730['QLBQT'](_0xf3c65, _0x32acc2);
            }
        });
    });
}

function getMyPing() {
    var _0x1db7ab = {
        'VsINj': function(_0x193370, _0xc1eec1, _0x29bdfc) {
            return _0x193370(_0xc1eec1, _0x29bdfc);
        },
        'qwCdM': 'customer/getMyPing'
    };
    return new Promise(_0x221cbc => {
        var _0x2435cf = {
            'IZmWa': function(_0x160e95) {
                return _0x160e95();
            }
        };
        $['post'](_0x1db7ab['VsINj'](taskPostUrl, _0x1db7ab['qwCdM'], 'userId=' + $['shopId'] + '&token=' + $['token'] + '&fromType=APP'), async (_0x151c7a, _0x18ae85, _0x437efb) => {
            try {
                if (_0x151c7a) {
                    console['log']('' + JSON['stringify'](_0x151c7a));
                } else {
                    _0x437efb = JSON['parse'](_0x437efb);
                    if (_0x437efb['result']) {
                        $['secretPin'] = _0x437efb['data']['secretPin'];
                        cookie = 'AUTH_C_USER=' + $['secretPin'] + ';' + cookie;
                    }
                }
            } catch (_0x9f5925) {
                $['logErr'](_0x9f5925, _0x18ae85);
            } finally {
                _0x2435cf['IZmWa'](_0x221cbc);
            }
        });
    });
}

function getActInfo() {
    var _0x51ad50 = {
        'SEFhV': function(_0x1c0d00, _0x46b197) {
            return _0x1c0d00(_0x46b197);
        }
    };
    return new Promise(_0x355a3d => {
        $['post'](taskPostUrl('dz/common/getSimpleActInfoVo', 'activityId=' + ACT_ID), async (_0x4389db, _0x163d5b, _0x2260ec) => {
            try {
                if (_0x4389db) {
                    console['log']('' + JSON['stringify'](_0x4389db));
                } else {
                    _0x2260ec = JSON['parse'](_0x2260ec);
                    if (_0x2260ec['result']) {
                        $['shopId'] = _0x2260ec['data']['shopId'];
                    }
                }
            } catch (_0x1552e8) {
                $['logErr'](_0x1552e8, _0x163d5b);
            } finally {
                _0x51ad50['SEFhV'](_0x355a3d, _0x2260ec);
            }
        });
    });
}

function grantTokenKey() {
    var _0x2ab8db = {
        'MdQtX': function(_0x3a5d1d) {
            return _0x3a5d1d();
        },
        'yvSAl': 'api.m.jd.com',
        'IsnMC': 'application/x-www-form-urlencoded',
        'hQQOY': '*/*',
        'akGpc': 'keep-alive',
        'vqpEn': 'JD4iPhone/167538 (iPhone; iOS 14.3; Scale/3.00)',
        'zYUiU': 'gzip, deflate, br'
    };
    let _0x595b11 = {
        'url': 'https://api.m.jd.com/client.action?functionId=genToken',
        'headers': {
            'Host': _0x2ab8db['yvSAl'],
            'Content-Type': _0x2ab8db['IsnMC'],
            'Accept': _0x2ab8db['hQQOY'],
            'Connection': _0x2ab8db['akGpc'],
            'Cookie': cookie,
            'User-Agent': _0x2ab8db['vqpEn'],
            'Accept-Language': 'zh-Hans-CN;q=1',
            'Accept-Encoding': _0x2ab8db['zYUiU']
        },
        'body': 'body=%7B%22to%22%3A%22https%3A%5C%2F%5C%2Flzdz-isv.isvjcloud.com%5C%2Fdingzhi%5C%2Fchange%5C%2Fable%5C%2Factivity%3FactivityId%3Ddz2102100001340203%22%2C%22action%22%3A%22to%22%7D&build=167538&client=apple&clientVersion=9.3.8&openudid=b9b73293715e562295c0f0aac9d15035ea9b4889&sign=55a872906641d1ed946a1ba3458ebee9&st=1612496164952&sv=110'
    };
    return new Promise(_0x132a29 => {
        var _0x579b56 = {
            'hcuUE': function(_0x58c28f, _0x5e5528) {
                return _0x58c28f === _0x5e5528;
            },
            'ijHjM': function(_0xb0ea03) {
                return _0x2ab8db['MdQtX'](_0xb0ea03);
            }
        };
        $['post'](_0x595b11, (_0x32d940, _0x1f89ba, _0x4b12a1) => {
            try {
                if (_0x32d940) {
                    console['log']('' + JSON['stringify'](_0x32d940));
                } else {
                    _0x4b12a1 = JSON['parse'](_0x4b12a1);
                    if (_0x579b56['hcuUE'](_0x4b12a1['code'], '0')) {
                        $['tokenKey'] = _0x4b12a1['tokenKey'];
                        cookie = cookie + 'IsvToken=' + $['tokenKey'];
                    }
                }
            } catch (_0x56b42f) {
                console['log'](_0x56b42f, _0x1f89ba);
            } finally {
                _0x579b56['ijHjM'](_0x132a29);
            }
        });
    });
}

function grantToken() {
    var _0x5c7194 = {
        'UDRJP': function(_0x12bccd) {
            return _0x12bccd();
        },
        'LboMT': 'https://api.m.jd.com/client.action?functionId=isvObfuscator',
        'GxvnQ': '*/*',
        'DdCwm': 'keep-alive',
        'NTVsi': 'JD4iPhone/167538 (iPhone; iOS 14.3; Scale/3.00)',
        'PiZHT': 'zh-Hans-CN;q=1'
    };
    let _0x385aa8 = {
        'url': _0x5c7194['LboMT'],
        'headers': {
            'Host': 'api.m.jd.com',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': _0x5c7194['GxvnQ'],
            'Connection': _0x5c7194['DdCwm'],
            'Cookie': cookie,
            'User-Agent': _0x5c7194['NTVsi'],
            'Accept-Language': _0x5c7194['PiZHT'],
            'Accept-Encoding': 'gzip, deflate, br'
        },
        'body': 'body=%7B%22url%22%3A%22https%3A%5C%2F%5C%2Flzdz-isv.isvjcloud.com%22%2C%22id%22%3A%22%22%7D&build=167538&client=apple&clientVersion=9.3.8&openudid=b9b73293715e562295c0f0aac9d15035ea9b4889&sign=4570aecadf16cfa7aa934a7c611f520b&st=1612496167365&sv=100'
    };
    return new Promise(_0x6d29e1 => {
        var _0x46eda7 = {
            'UdehM': function(_0x3b6293) {
                return _0x5c7194['UDRJP'](_0x3b6293);
            }
        };
        $['post'](_0x385aa8, (_0x183b7c, _0x3fd3a0, _0x200679) => {
            try {
                if (_0x183b7c) {
                    console['log']('' + JSON['stringify'](_0x183b7c));
                } else {
                    _0x200679 = JSON['parse'](_0x200679);
                    if (_0x200679['code'] === '0') {
                        $['token'] = _0x200679['token'];
                    }
                }
            } catch (_0x8fce9f) {
                console['log'](_0x8fce9f);
            } finally {
                _0x46eda7['UdehM'](_0x6d29e1);
            }
        });
    });
}

function getActCookie() {
    var _0x10efe6 = {
        'QnNqS': 'headers',
        'XcGTE': 'Set-Cookie',
        'ZQCDB': function(_0x237e9a) {
            return _0x237e9a();
        },
        'lpErz': 'text/plain',
        'ySZwM': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'BrCdA': 'keep-alive',
        'vwkOY': 'zh-Hans-CN;q=1',
        'sgiVF': 'gzip, deflate, br'
    };
    let _0x4ca3d9 = {
        'url': 'https://lzdz-isv.isvjcloud.com/dingzhi/change/able/activity?activityId=' + ACT_ID,
        'headers': {
            'Content-Type': _0x10efe6['lpErz'],
            'Accept': _0x10efe6['ySZwM'],
            'Connection': _0x10efe6['BrCdA'],
            'Cookie': '' + cookie,
            'User-Agent': 'jdapp;iPhone;9.3.8;14.3;network/wifi;ADID/;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone10,3;supportBestPay/0;appBuild/167538;jdSupportDarkMode/0;addressid/0;pv/1.12;apprpd/Babel_Native;ref/JDWebViewController;psq/11;ads/;psn/;jdv/0|;adk/;app_device/IOS;pap/JA2015_311210|9.3.8|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
            'Accept-Language': _0x10efe6['vwkOY'],
            'Accept-Encoding': _0x10efe6['sgiVF']
        }
    };
    return new Promise(_0x220aa5 => {
        var _0x4efb12 = {
            'vjUhf': _0x10efe6['QnNqS'],
            'snSLT': _0x10efe6['XcGTE'],
            'XhFQt': function(_0x4136a2) {
                return _0x10efe6['ZQCDB'](_0x4136a2);
            }
        };
        $['get'](_0x4ca3d9, (_0x48c26f, _0x29f462, _0x4b0cca) => {
            try {
                if (_0x48c26f) {
                    console['log']('' + JSON['stringify'](_0x48c26f));
                } else {
                    cookie = cookie + ';';
                    if ($['isNode']())
                        for (let _0x190c1f of _0x29f462['headers']['set-cookie']) {
                            cookie = '' + cookie + _0x190c1f['split'](';')[0x0] + ';';
                        } else {
                            for (let _0x2019c6 of _0x29f462[_0x4efb12['vjUhf']][_0x4efb12['snSLT']]['split'](',')) {
                                cookie = '' + cookie + _0x2019c6['split'](';')[0x0] + ';';
                            }
                        }
                }
            } catch (_0x5139dd) {
                console['log'](_0x5139dd);
            } finally {
                _0x4efb12['XhFQt'](_0x220aa5);
            }
        });
    });
}

function taskPostUrl(_0x1087df, _0x566596) {
    var _0x2a8aa3 = {
        'qYMve': 'application/json',
        'JoSSz': 'XMLHttpRequest',
        'plIcn': 'zh-cn',
        'qbEuo': 'gzip, deflate, br',
        'iHhqP': 'https://lzdz-isv.isvjcloud.com',
        'kzYhg': 'keep-alive',
        'zeSBi': 'jdapp;iPhone;9.3.8;14.3;network/wifi;ADID/;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone10,3;supportBestPay/0;appBuild/167538;jdSupportDarkMode/0;addressid/0;pv/1.12;apprpd/Babel_Native;ref/JDWebViewController;psq/11;ads/;psn/;jdv/0|;adk/;app_device/IOS;pap/JA2015_311210|9.3.8|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1'
    };
    return {
        'url': 'https://lzdz-isv.isvjcloud.com/' + _0x1087df,
        'headers': {
            'Host': 'lzdz-isv.isvjcloud.com',
            'Accept': _0x2a8aa3['qYMve'],
            'X-Requested-With': _0x2a8aa3['JoSSz'],
            'Accept-Language': _0x2a8aa3['plIcn'],
            'Accept-Encoding': _0x2a8aa3['qbEuo'],
            'Content-Type': 'application/x-www-form-urlencoded',
            'Origin': _0x2a8aa3['iHhqP'],
            'Connection': _0x2a8aa3['kzYhg'],
            'Referer': 'https://lzdz-isv.isvjcloud.com/dingzhi/change/able/activity?activityId=' + ACT_ID,
            'Cookie': '' + cookie,
            'User-Agent': _0x2a8aa3['zeSBi']
        },
        'body': _0x566596
    };
}

function getShareCode() {
    var _0x3e93c5 = {
        'mkQwD': function(_0xe76318, _0x356481) {
            return _0xe76318(_0x356481);
        }
    };
    return new Promise(async _0x1e74ed => {
        $['get']({
            'url': 'https://api.r2ray.com/jd.entertainment/index'
        }, (_0x253526, _0x3a84d3, _0x455017) => {
            try {
                if (_0x253526) {
                    console['log']('' + JSON['stringify'](_0x253526));
                } else {
                    if (_0x455017) {
                        _0x455017 = JSON['parse'](_0x455017);
                        if (_0x455017['data']['length'] > 0x0) {
                            $['userShareCode'] = _0x455017['data'][0x0]['share_code'];
                        } else {
                            $['userShareCode'] = '';
                        }
                    }
                }
            } catch (_0x25acc3) {
                $['logErr'](_0x25acc3, _0x3a84d3);
            } finally {
                _0x3e93c5['mkQwD'](_0x1e74ed, _0x455017);
            }
        });
    });
}

function submitShareCode(_0x3326de) {
    var _0x2daa08 = {
        'PVkcH': function(_0x449f24, _0x1c7df8) {
            return _0x449f24(_0x1c7df8);
        }
    };
    let _0x5ef7fc = {
        'url': 'https://api.r2ray.com/jd.entertainment/update',
        'headers': {
            'Content-Type': 'application/json'
        },
        'body': JSON['stringify'](_0x3326de)
    };
    return new Promise(async _0x3332e1 => {
        $['post'](_0x5ef7fc, (_0xa60bc7, _0x3b28dc, _0x5cd5af) => {
            try {
                if (_0xa60bc7) {
                    console['log']('' + JSON['stringify'](_0xa60bc7));
                    console['log']($['name'] + ' API请求失败，请检查网路重试');
                } else {
                    _0x5cd5af = JSON['parse'](_0x5cd5af);
                    console['log'](_0x5cd5af['msg']);
                }
            } catch (_0x4ab38c) {
                $['logErr'](_0x4ab38c, _0x3b28dc);
            } finally {
                _0x2daa08['PVkcH'](_0x3332e1, _0x5cd5af);
            }
        });
    });
}

function TotalBean() {
    var _0xb6e575 = {
        'IGfUr': function(_0x2f1216, _0x14b4be) {
            return _0x2f1216 === _0x14b4be;
        },
        'yBlvA': 'retcode',
        'WQcZs': 'base',
        'pZoUg': function(_0x58d2d9) {
            return _0x58d2d9();
        },
        'tRKfK': 'application/json,text/plain, */*',
        'kXyoi': 'application/x-www-form-urlencoded',
        'LUtyV': 'gzip, deflate, br',
        'EnDlu': 'zh-cn',
        'PmLUi': 'keep-alive',
        'oniIo': 'https://wqs.jd.com/my/jingdou/my.shtml?sceneval=2',
        'mAghy': 'JDUA',
        'qEnIl': 'jdapp;iPhone;9.2.2;14.2;%E4%BA%AC%E4%B8%9C/9.2.2 CFNetwork/1206 Darwin/20.1.0'
    };
    return new Promise(async _0x17a152 => {
        const _0x2a35d4 = {
            'url': 'https://wq.jd.com/user/info/QueryJDUserInfo?sceneval=2',
            'headers': {
                'Accept': _0xb6e575['tRKfK'],
                'Content-Type': _0xb6e575['kXyoi'],
                'Accept-Encoding': _0xb6e575['LUtyV'],
                'Accept-Language': _0xb6e575['EnDlu'],
                'Connection': _0xb6e575['PmLUi'],
                'Cookie': cookie,
                'Referer': _0xb6e575['oniIo'],
                'User-Agent': $['isNode']() ? process['env']['JD_USER_AGENT'] ? process['env']['JD_USER_AGENT'] : 'jdapp;iPhone;9.2.2;14.2;%E4%BA%AC%E4%B8%9C/9.2.2 CFNetwork/1206 Darwin/20.1.0' : $['getdata'](_0xb6e575['mAghy']) ? $['getdata'](_0xb6e575['mAghy']) : _0xb6e575['qEnIl']
            }
        };
        $['post'](_0x2a35d4, (_0xe44af6, _0x5b04cb, _0x46d0a7) => {
            try {
                if (_0xe44af6) {
                    console['log']('' + JSON['stringify'](_0xe44af6));
                    console['log']($['name'] + ' API请求失败，请检查网路重试');
                } else {
                    if (_0x46d0a7) {
                        _0x46d0a7 = JSON['parse'](_0x46d0a7);
                        if (_0xb6e575['IGfUr'](_0x46d0a7[_0xb6e575['yBlvA']], 0xd)) {
                            $['isLogin'] = ![];
                            return;
                        }
                        $['nickName'] = _0x46d0a7[_0xb6e575['WQcZs']]['nickname'];
                    } else {
                        console['log']('京东服务器返回空数据');
                    }
                }
            } catch (_0x2119ad) {
                $['logErr'](_0x2119ad, _0x5b04cb);
            } finally {
                _0xb6e575['pZoUg'](_0x17a152);
            }
        });
    });
// prettier-ignore
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
