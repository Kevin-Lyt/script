/*
粉丝互动
类似于京东抽奖机，各个店铺的粉丝互动活动。
有看到新活动可以私信我添加活动ID。 GitHub@i-chenzhe
新手写脚本，难免有bug，能用且用。

更新地址：https://raw.githubusercontent.com/i-chenzhe/qx/main/jd_fanslove.js
============Quantumultx===============
[task_local]
#粉丝互动
3 10 * * * https://raw.githubusercontent.com/i-chenzhe/qx/main/jd_fanslove.js, tag=粉丝互动,  enabled=true
[rewrite_local]
^https://lzkjdz\-isv\.isvjcloud\.com\/wxFansInterActionActivity\/activityContent url script-response-body https://raw.githubusercontent.com/i-chenzhe/qx/main/jd_getFanslove.js
================Loon==============
[Script]
cron "3 10 * * *" script-path=https://raw.githubusercontent.com/i-chenzhe/qx/main/jd_fanslove.js,tag=粉丝互动
===============Surge=================
粉丝互动 = type=cron,cronexp="3 10 * * *",wake-system=1,timeout=3600,script-path=https://raw.githubusercontent.com/i-chenzhe/qx/main/jd_fanslove.js
============小火箭=========
粉丝互动 = type=cron,script-path=https://raw.githubusercontent.com/i-chenzhe/qx/main/jd_fanslove.js, cronexpr="3 10 * * *", timeout=3600, enable=true
*/

const $ = new Env('粉丝互动');
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
const notify = $.isNode() ? require('./sendNotify') : '';
let cookiesArr = [], cookie = '', originCookie = '', message = '';
let helpAuthor = false;//为作者助力的开关
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
/*
 *Progcessed By JSDec in 0.59s
 *JSDec - JSDec.js.org
 */
!(async () => {
    var _0x2e3df6 = {
        'SYKgp': 'https://api.r2ray.com/jd.bargain/done',
        'TmEqT': function(_0x3fbabb, _0x371208) {
            return _0x3fbabb < _0x371208;
        },
        'IABXl': 'application/x-www-form-urlencoded',
        'GFyay': 'https://h5.m.jd.com',
        'optGM': 'keep-alive',
        'fpeDs': 'application/json, text/plain, */*',
        'bHYHq': 'jdapp;iPhone;9.4.0;14.3;;network/wifi;ADID/;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone10,3;addressid/;supportBestPay/0;appBuild/167541;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
        'htfwZ': 'zh-cn',
        'KxffV': 'https://api.r2ray.com/jd.bargain/index',
        'vLcTt': 'https://bean.m.jd.com/bean/signIndex.action',
        'XLMir': function(_0x1c7c15) {
            return _0x1c7c15();
        },
        'aiPyl': function(_0x20d719, _0x2bf5fc) {
            return _0x20d719 > _0x2bf5fc;
        },
        'bOiAG': function(_0x3458bd, _0x414f7f) {
            return _0x3458bd + _0x414f7f;
        },
        'edcwz': function(_0x4dbf67) {
            return _0x4dbf67();
        },
        'GjCbS': function(_0x49c8b6, _0x969ae2) {
            return _0x49c8b6 > _0x969ae2;
        },
        'JBFUL': 'message'
    };
    if (!cookiesArr[0x0]) {
        $['msg']($['name'], '【提示】请先获取京东账号一cookie\x0a直接使用NobyDa的京东签到获取', _0x2e3df6['vLcTt'], {
            'open-url': _0x2e3df6['vLcTt']
        });
        return;
    }
    await _0x2e3df6['XLMir'](getACT_ID);
    $['sendNotify'] = ![];
    $['bean'] = 0x0;
    console['log']('共有' + $['ACT_IDarr']['length'] + '个店铺粉丝互动');
    if (_0x2e3df6['aiPyl']($['ACT_IDarr']['length'], 0x0)) {
        for (let _0x1352c = 0x0; _0x1352c < $['ACT_IDarr']['length']; _0x1352c++) {
            console['log']('开始第 ' + _0x2e3df6['bOiAG'](_0x1352c, 0x1) + ' 个店铺粉丝互动');
            $['ACT_ID'] = $['ACT_IDarr'][_0x1352c]['ACT_ID'];
            for (let _0x360306 = 0x0; _0x2e3df6['TmEqT'](_0x360306, cookiesArr['length']); _0x360306++) {
                if (cookiesArr[_0x360306]) {
                    cookie = cookiesArr[_0x360306];
                    originCookie = cookiesArr[_0x360306];
                    $['UserName'] = decodeURIComponent(cookie['match'](/pt_pin=(.+?);/) && cookie['match'](/pt_pin=(.+?);/)[0x1]);
                    $['index'] = _0x360306 + 0x1;
                    $['isLogin'] = !![];
                    $['nickName'] = '';
                    await _0x2e3df6['XLMir'](TotalBean);
                    console['log']('\n******开始【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']) + '*********\n');
                    if (!$['isLogin']) {
                        $['msg']($['name'], '【提示】cookie已失效', '京东账号' + $['index'] + ' ' + ($['nickName'] || $['UserName']) + '\x0a请重新登录获取\x0ahttps://bean.m.jd.com/bean/signIndex.action', {
                            'open-url': _0x2e3df6['vLcTt']
                        });
                        if ($['isNode']()) {
                            await notify['sendNotify']($['name'] + 'cookie已失效 - ' + $['UserName'], '京东账号' + $['index'] + ' ' + $['UserName'] + '\n请重新登录获取cookie');
                        }
                        continue;
                    }
                    if (helpAuthor) {
                        if (helpAuthor) {
                            new Promise(_0x5763cb => {
                                var _0xde0c2a = {
                                    'HiZHE': _0x2e3df6['SYKgp'],
                                    'ymGir': 'application/json',
                                    'hOkXt': function(_0x5eb06a, _0x2bdcbd) {
                                        return _0x5eb06a !== _0x2bdcbd;
                                    },
                                    'RJeYY': function(_0x2fb0c6, _0x36b52f) {
                                        return _0x2e3df6['TmEqT'](_0x2fb0c6, _0x36b52f);
                                    },
                                    'cFxMb': 'api.m.jd.com',
                                    'gspzg': _0x2e3df6['IABXl'],
                                    'VdlKD': _0x2e3df6['GFyay'],
                                    'VDeWo': _0x2e3df6['optGM'],
                                    'gHLRp': _0x2e3df6['fpeDs'],
                                    'CbiRt': _0x2e3df6['bHYHq'],
                                    'KMpYw': _0x2e3df6['htfwZ']
                                };
                                $['get']({
                                    'url': _0x2e3df6['KxffV']
                                }, (_0x36afa6, _0x3cd528, _0x497284) => {
                                    var _0x9583dd = {
                                        'njOMx': _0xde0c2a['HiZHE'],
                                        'GhFlG': _0xde0c2a['ymGir']
                                    };
                                    try {
                                        if (_0x497284) {
                                            $['dataGet'] = JSON['parse'](_0x497284);
                                            if (_0xde0c2a['hOkXt']($['dataGet']['data']['length'], 0x0)) {
                                                for (let _0x360306 = 0x0; _0xde0c2a['RJeYY'](_0x360306, $['dataGet']['data']['length']); _0x360306++) {
                                                    actID = $['dataGet']['data'][_0x360306]['actID'];
                                                    actsID = $['dataGet']['data'][_0x360306]['actsID'];
                                                    let _0x1e8e20 = {
                                                        'url': 'https://api.m.jd.com/client.action',
                                                        'headers': {
                                                            'Host': _0xde0c2a['cFxMb'],
                                                            'Content-Type': _0xde0c2a['gspzg'],
                                                            'Origin': _0xde0c2a['VdlKD'],
                                                            'Accept-Encoding': 'gzip, deflate, br',
                                                            'Cookie': cookie,
                                                            'Connection': _0xde0c2a['VDeWo'],
                                                            'Accept': _0xde0c2a['gHLRp'],
                                                            'User-Agent': _0xde0c2a['CbiRt'],
                                                            'Referer': 'https://h5.m.jd.com/babelDiy/Zeus/4ZK4ZpvoSreRB92RRo8bpJAQNoTq/index.html?serveId=wxe30973feca923229&actId=' + actID + '&way=0&lng=&lat=&sid=&un_area=',
                                                            'Accept-Language': _0xde0c2a['KMpYw']
                                                        },
                                                        'body': 'functionId=cutPriceByUser&body={"activityId":"' + actID + '\",\"userName\":\"\",\"followShop\":1,\"shopId\":' + actsID + ',"userPic":""}&client=wh5&clientVersion=1.0.0'
                                                    };
                                                    return new Promise(_0x5763cb => {
                                                        $['post'](_0x1e8e20, (_0x36afa6, _0x47364f, _0x497284) => {
                                                            if (_0x497284) {
                                                                _0x497284 = JSON['parse'](_0x497284);
                                                                if (_0x497284['status'] === 0x4) {
                                                                    let _0x1e8e20 = {
                                                                        'url': _0x9583dd['njOMx'],
                                                                        'headers': {
                                                                            'Content-Type': _0x9583dd['GhFlG']
                                                                        },
                                                                        'body': JSON['stringify']({
                                                                            'actID': actID,
                                                                            'actsID': actsID,
                                                                            'done': 0x1
                                                                        })
                                                                    };
                                                                    return new Promise(_0x5763cb => {
                                                                        $['post'](_0x1e8e20, (_0x36afa6, _0x3cd528, _0x497284) => {});
                                                                    });
                                                                };
                                                            };
                                                        });
                                                    });
                                                };
                                            };
                                        };
                                    } catch (_0x25cae1) {
                                        console['log'](_0x25cae1);
                                    } finally {
                                        _0x5763cb();
                                    };
                                });
                            });
                        };
                    }
                    await _0x2e3df6['edcwz'](fansLove);
                }
            }
        }
    }
    for (const _0x15111e in allNotify) {
        if (allNotify[_0x15111e]['hasOwnProperty']('bean')) {
            if (_0x2e3df6['GjCbS'](allNotify[_0x15111e]['bean'], 0xa)) {
                message += '京东账号' + _0x15111e + ' \x0a恭喜中奖，共获得' + allNotify[_0x15111e]['bean'] + '京豆\n';
            }
        }
        if (allNotify[_0x15111e]['hasOwnProperty'](_0x2e3df6['JBFUL'])) {
            if (allNotify[_0x15111e]['message'] !== '') {
                message += '京东账号' + _0x15111e + ' \x0a' + allNotify[_0x15111e]['message'] + '\x0a';
            }
        }
    }
    if ($['sendNotify']) {
        if ($['isNode']()) {
            await notify['sendNotify']('' + $['name'], '' + message);
        } else {
            $['msg']($['name'], '有点儿收获'
                `${message}`);
        }
    }
})()['catch'](_0x5db183 => {
    $['log']('', '❌ ' + $['name'] + ', 失败! 原因: ' + _0x5db183 + '!', '');
})['finally'](() => {
    $['done']();
});
async function fansLove() {
    var _0x2f8c74 = {
        'aIROZ': function(_0x16a8c4, _0x587f68) {
            return _0x16a8c4 > _0x587f68;
        },
        'AzEYO': '2|5|0|6|8|7|4|1|3|9',
        'PzGKT': function(_0x189e15, _0x12bc40) {
            return _0x189e15 + _0x12bc40;
        },
        'SkGOa': function(_0x32c53e, _0x29776f) {
            return _0x32c53e === _0x29776f;
        },
        'OZZyN': function(_0x43106c, _0x8095d6, _0x5a87e7) {
            return _0x43106c(_0x8095d6, _0x5a87e7);
        },
        'otvhw': 'wxFansInterActionActivity/startDraw',
        'VvOsr': function(_0x315236, _0x4a80a0) {
            return _0x315236(_0x4a80a0);
        },
        'WgqcX': function(_0x3da853, _0x101e33) {
            return _0x3da853 >= _0x101e33;
        },
        'RStLf': function(_0x2cf15c, _0x23adea) {
            return _0x2cf15c >= _0x23adea;
        },
        'KkOSO': function(_0x3ec626) {
            return _0x3ec626();
        }
    };
    var _0x27777c = '4|8|13|6|3|7|0|12|5|11|1|10|9|2' ['split']('|'),
        _0x13f18 = 0x0;
    while (!![]) {
        switch (_0x27777c[_0x13f18++]) {
            case '0':
                await $['wait'](0x1f4);
                continue;
            case '1':
                await $['wait'](0x1f4);
                continue;
            case '2':
                if (_0x2f8c74['aIROZ']($['actInfo']['endTime'], Date['now']())) {
                    if (!$['risk']) {
                        var _0x236a28 = _0x2f8c74['AzEYO']['split']('|'),
                            _0x95278c = 0x0;
                        while (!![]) {
                            switch (_0x236a28[_0x95278c++]) {
                                case '0':
                                    await $['wait'](0x3e8);
                                    continue;
                                case '1':
                                    if (_0x2f8c74['PzGKT']($['actorInfo']['fansLoveValue'], $['actorInfo']['energyValue']) >= $['actConfig']['prizeScoreTwo'] && _0x2f8c74['SkGOa']($['actorInfo']['prizeTwoStatus'], ![])) {
                                        await _0x2f8c74['OZZyN'](doTask, _0x2f8c74['otvhw'], 'activityId=' + $['ACT_ID'] + '&uuid=' + $['actorInfo']['uuid'] + '&drawType=02');
                                    }
                                    continue;
                                case '2':
                                    await $['wait'](0x3e8);
                                    continue;
                                case '3':
                                    await $['wait'](0x3e8);
                                    continue;
                                case '4':
                                    await $['wait'](0x3e8);
                                    continue;
                                case '5':
                                    await getActContent(!![]);
                                    continue;
                                case '6':
                                    await _0x2f8c74['VvOsr'](getActContent, ![]);
                                    continue;
                                case '7':
                                    if (_0x2f8c74['WgqcX']($['actorInfo']['fansLoveValue'] + $['actorInfo']['energyValue'], $['actConfig']['prizeScoreOne']) && _0x2f8c74['SkGOa']($['actorInfo']['prizeOneStatus'], ![])) {
                                        await _0x2f8c74['OZZyN'](doTask, _0x2f8c74['otvhw'], 'activityId=' + $['ACT_ID'] + '&uuid=' + $['actorInfo']['uuid'] + '&drawType=01');
                                    }
                                    continue;
                                case '8':
                                    console['log']('当前积分 ' + ($['actorInfo']['fansLoveValue'] + $['actorInfo']['energyValue']) + ' ');
                                    continue;
                                case '9':
                                    if (_0x2f8c74['RStLf'](_0x2f8c74['PzGKT']($['actorInfo']['fansLoveValue'], $['actorInfo']['energyValue']), $['actConfig']['prizeScoreThree']) && _0x2f8c74['SkGOa']($['actorInfo']['prizeThreeStatus'], ![])) {
                                        await _0x2f8c74['OZZyN'](doTask, _0x2f8c74['otvhw'], 'activityId=' + $['ACT_ID'] + '&uuid=' + $['actorInfo']['uuid'] + '&drawType=03');
                                    }
                                    continue;
                            }
                            break;
                        }
                    }
                } else {
                    console['log']($['actInfo']['shopName'] + ' 活动已经结束');
                }
                continue;
            case '3':
                await $['wait'](0x1f4);
                continue;
            case '4':
                $['risk'] = ![];
                continue;
            case '5':
                await $['wait'](0x1f4);
                continue;
            case '6':
                await _0x2f8c74['KkOSO'](getActCookie);
                continue;
            case '7':
                await _0x2f8c74['KkOSO'](getActInfo);
                continue;
            case '8':
                await _0x2f8c74['KkOSO'](grantToken);
                continue;
            case '9':
                console['log']('当前积分 ' + _0x2f8c74['PzGKT']($['actorInfo']['fansLoveValue'], $['actorInfo']['energyValue']) + ' ');
                continue;
            case '10':
                await getActContent(![]);
                continue;
            case '11':
                await getUserInfo();
                continue;
            case '12':
                await _0x2f8c74['KkOSO'](getMyPing);
                continue;
            case '13':
                await $['wait'](0x1f4);
                continue;
        }
        break;
    }
}

function getActContent(_0xe7202b = ![]) {
    var _0xa2ebb9 = {
        'nUlvE': function(_0x3bd4da, _0x26fd45, _0x3eb039) {
            return _0x3bd4da(_0x26fd45, _0x3eb039);
        },
        'oxYub': 'wxFansInterActionActivity/followShop',
        'KqotU': function(_0x2f0f4e, _0x2baaf0) {
            return _0x2f0f4e === _0x2baaf0;
        },
        'GrrWY': 'wxFansInterActionActivity/doSign',
        'nrxUf': 'wxFansInterActionActivity/doBrowGoodsTask',
        'MuJBG': 'wxFansInterActionActivity/doAddGoodsTask',
        'HJCTo': function(_0x178185, _0x5460fc) {
            return _0x178185 !== _0x5460fc;
        },
        'paxtb': '5|10|2|9|3|4|11|1|0|8|7|6',
        'seAvh': '获取活动参数成功。',
        'YkJgf': 'wxFansInterActionActivity/activityContent',
        'CILXu': function(_0xc91243, _0x49973b) {
            return _0xc91243(_0x49973b);
        }
    };
    console['log']('getActContent');
    return new Promise(_0x14cf4c => {
        var _0x1b2cf5 = {
            'EXSDx': function(_0x1d7537, _0x9ecf57) {
                return _0x1d7537(_0x9ecf57);
            },
            'QeieG': function(_0x305a4b, _0x5695b6, _0x152879) {
                return _0xa2ebb9['nUlvE'](_0x305a4b, _0x5695b6, _0x152879);
            },
            'dWwxn': _0xa2ebb9['oxYub'],
            'gsxsu': function(_0x3aae56, _0x727652) {
                return _0xa2ebb9['KqotU'](_0x3aae56, _0x727652);
            },
            'JfFXf': _0xa2ebb9['GrrWY'],
            'mmFRb': function(_0x36ff91, _0x2e1c75) {
                return _0x36ff91 !== _0x2e1c75;
            },
            'EnOgt': _0xa2ebb9['nrxUf'],
            'iRHPz': _0xa2ebb9['MuJBG'],
            'JItmG': function(_0x30dcc2, _0x19e771) {
                return _0x30dcc2 < _0x19e771;
            },
            'SwzCw': function(_0x618859, _0x39f19b, _0x50e108) {
                return _0x618859(_0x39f19b, _0x50e108);
            },
            'MvxsY': 'wxFansInterActionActivity/doShareTask',
            'VUpgZ': function(_0x334e91, _0x19467f) {
                return _0xa2ebb9['HJCTo'](_0x334e91, _0x19467f);
            },
            'msJud': function(_0x9ad256, _0x1d1c97, _0x1b59e2) {
                return _0xa2ebb9['nUlvE'](_0x9ad256, _0x1d1c97, _0x1b59e2);
            },
            'mPiAx': 'wxFansInterActionActivity/doMeetingTask',
            'smMAC': _0xa2ebb9['paxtb'],
            'ZKxKd': _0xa2ebb9['seAvh']
        };
        $['post'](_0xa2ebb9['nUlvE'](taskPostUrl, _0xa2ebb9['YkJgf'], 'activityId=' + $['ACT_ID'] + '&pin=' + _0xa2ebb9['CILXu'](encodeURIComponent, $['secretPin'])), async (_0x5064c9, _0x39f387, _0x18f32c) => {
            try {
                if (_0x5064c9) {
                    console['log']('' + JSON['stringify'](_0x5064c9));
                } else {
                    if (_0x1b2cf5['EXSDx'](safeGet, _0x18f32c)) {
                        _0x18f32c = JSON['parse'](_0x18f32c);
                        if (_0x18f32c['result'] === ![]) {
                            $['risk'] = !![];
                            console['log']('京东说‘本活动与你无缘，请关注其他活动。’');
                            return;
                        }
                        if (_0xe7202b) {
                            console['log']('开始执行 ' + $['actInfo']['shopName'] + ' 的任务');
                            await _0x1b2cf5['QeieG'](doTask, _0x1b2cf5['dWwxn'], 'activityId=' + $['ACT_ID'] + '&uuid=' + $['actorInfo']['uuid']);
                            await $['wait'](0x3e8);
                            if ($['task1Sign'] && _0x1b2cf5['gsxsu']($['task1Sign']['finishedCount'], 0x0)) {
                                await _0x1b2cf5['QeieG'](doTask, _0x1b2cf5['JfFXf'], 'activityId=' + $['ACT_ID'] + '&uuid=' + $['actorInfo']['uuid']);
                                await $['wait'](0x3e8);
                            }
                            if ($['task2BrowGoods'] && _0x1b2cf5['mmFRb']($['task2BrowGoods']['finishedCount'], $['task2BrowGoods']['upLimit'])) {
                                for (let _0xaf4194 of $['task2BrowGoods']['taskGoodList']) {
                                    if (_0x1b2cf5['gsxsu'](_0xaf4194['finished'], ![])) {
                                        await _0x1b2cf5['QeieG'](doTask, _0x1b2cf5['EnOgt'], 'activityId=' + $['ACT_ID'] + '&uuid=' + $['actorInfo']['uuid'] + '&skuId=' + _0xaf4194['skuId']);
                                    }
                                    await $['wait'](0x7d0);
                                }
                            }
                            if ($['task3AddCart'] && $['task3AddCart']['finishedCount'] !== $['task3AddCart']['upLimit']) {
                                for (let _0x3df59c of $['task3AddCart']['taskGoodList']) {
                                    if (_0x1b2cf5['gsxsu'](_0x3df59c['finished'], ![])) {
                                        await doTask(_0x1b2cf5['iRHPz'], 'activityId=' + $['ACT_ID'] + '&uuid=' + $['actorInfo']['uuid'] + '&skuId=' + _0x3df59c['skuId']);
                                    }
                                    await $['wait'](0x7d0);
                                }
                            }
                            if ($['task4Share'] && _0x1b2cf5['mmFRb']($['task4Share']['finishedCount'], $['task4Share']['upLimit'])) {
                                for (let _0x4e8586 = 0x0; _0x1b2cf5['JItmG'](_0x4e8586, $['task4Share']['upLimit']); _0x4e8586++) {
                                    await _0x1b2cf5['SwzCw'](doTask, _0x1b2cf5['MvxsY'], 'activityId=' + $['ACT_ID'] + '&uuid=' + $['actorInfo']['uuid']);
                                    await $['wait'](0x7d0);
                                }
                            }
                            if ($['task5Remind'] && _0x1b2cf5['mmFRb']($['task5Remind']['finishedCount'], $['task5Remind']['upLimit'])) {
                                await _0x1b2cf5['SwzCw'](doTask, 'wxFansInterActionActivity/doRemindTask', 'activityId=' + $['ACT_ID'] + '&uuid=' + $['actorInfo']['uuid']);
                                await $['wait'](0x7d0);
                            }
                            if ($['task6GetCoupon'] && _0x1b2cf5['VUpgZ']($['task6GetCoupon']['finishedCount'], $['task6GetCoupon']['upLimit'])) {
                                for (let _0x1ee1f3 = 0x0; _0x1b2cf5['JItmG'](_0x1ee1f3, $['task6GetCoupon']['taskCouponInfoList']['length']); _0x1ee1f3++) {
                                    await _0x1b2cf5['msJud'](doTask, 'wxFansInterActionActivity/doGetCouponTask', 'activityId=' + $['ACT_ID'] + '&uuid=' + $['actorInfo']['uuid'] + '&couponId=' + $['task6GetCoupon']['taskCouponInfoList'][_0x1ee1f3]['couponId']);
                                    await $['wait'](0x7d0);
                                }
                            }
                            if ($['task7MeetPlaceVo'] && _0x1b2cf5['VUpgZ']($['task7MeetPlaceVo']['finishedCount'], $['task7MeetPlaceVo']['upLimit'])) {
                                await _0x1b2cf5['msJud'](doTask, _0x1b2cf5['mPiAx'], 'activityId=' + $['ACT_ID'] + '&uuid=' + $['actorInfo']['uuid']);
                            }
                        } else {
                            var _0x5f3a18 = _0x1b2cf5['smMAC']['split']('|'),
                                _0x39f3b1 = 0x0;
                            while (!![]) {
                                switch (_0x5f3a18[_0x39f3b1++]) {
                                    case '0':
                                        $['actorInfo'] = _0x18f32c['data']['actorInfo'];
                                        continue;
                                    case '1':
                                        $['shopInfoVO'] = _0x18f32c['data']['shopInfoVO'];
                                        continue;
                                    case '2':
                                        $['task3AddCart'] = _0x18f32c['data']['task3AddCart'];
                                        continue;
                                    case '3':
                                        $['task5Remind'] = _0x18f32c['data']['task5Remind'];
                                        continue;
                                    case '4':
                                        $['task6GetCoupon'] = _0x18f32c['data']['task6GetCoupon'];
                                        continue;
                                    case '5':
                                        $['task1Sign'] = _0x18f32c['data']['task1Sign'];
                                        continue;
                                    case '6':
                                        console['log'](_0x1b2cf5['ZKxKd']);
                                        continue;
                                    case '7':
                                        $['actInfo'] = _0x18f32c['data']['actInfo'];
                                        continue;
                                    case '8':
                                        $['actConfig'] = _0x18f32c['data']['actConfig'];
                                        continue;
                                    case '9':
                                        $['task4Share'] = _0x18f32c['data']['task4Share'];
                                        continue;
                                    case '10':
                                        $['task2BrowGoods'] = _0x18f32c['data']['task2BrowGoods'];
                                        continue;
                                    case '11':
                                        $['task7MeetPlaceVo'] = _0x18f32c['data']['task7MeetPlaceVo'];
                                        continue;
                                }
                                break;
                            }
                        }
                    }
                }
            } catch (_0x210fb3) {
                $['logErr'](_0x210fb3, _0x39f387);
            } finally {
                _0x1b2cf5['EXSDx'](_0x14cf4c, _0x18f32c);
            }
        });
    });
}

function doTask(_0x3c089c, _0x47d6c1) {
    var _0x45d338 = {
        'yHtaY': 'headers',
        'pJkdW': 'drawOk',
        'uoGmU': function(_0x5e53b1, _0x4fbbda) {
            return _0x5e53b1 === _0x4fbbda;
        },
        'xErwY': function(_0x3f37d7, _0x33b1f6, _0x509f28) {
            return _0x3f37d7(_0x33b1f6, _0x509f28);
        },
        'bZZsx': 'doTask'
    };
    console['log'](_0x45d338['bZZsx']);
    return new Promise(_0x5976d2 => {
        var _0x4165be = {
            'vYCTG': 'set-cookie',
            'CgWJR': _0x45d338['yHtaY'],
            'qumXD': function(_0x38d76b, _0x2c12fd) {
                return _0x38d76b !== _0x2c12fd;
            },
            'EihIr': _0x45d338['pJkdW'],
            'sKVmT': function(_0x26c59b, _0x9b6d18) {
                return _0x45d338['uoGmU'](_0x26c59b, _0x9b6d18);
            }
        };
        $['post'](_0x45d338['xErwY'](taskPostUrl, _0x3c089c, _0x47d6c1), (_0x5ab463, _0x11ae3a, _0x358967) => {
            try {
                if (_0x5ab463) {
                    console['log']('' + JSON['stringify'](_0x5ab463));
                } else {
                    if (safeGet(_0x358967)) {
                        _0x358967 = JSON['parse'](_0x358967);
                        if (_0x11ae3a['headers'][_0x4165be['vYCTG']]) {
                            cookie = _0x11ae3a[_0x4165be['CgWJR']][_0x4165be['vYCTG']]['join'](';') + '; ' + originCookie;
                        }
                        if (_0x4165be['qumXD'](_0x358967['data'], null) && _0x358967['result'] === !![]) {
                            console['log']('请求正常。');
                            if (_0x358967['data']['hasOwnProperty'](_0x4165be['EihIr'])) {
                                if (_0x4165be['sKVmT'](_0x358967['data']['drawOk'], !![])) {
                                    console['log']('恭喜中奖，获得:' + _0x358967['data']['name']);
                                    if (_0x358967['data']['name']['indexOf']('京豆')) {
                                        if (!allNotify[$['index']]) {
                                            allNotify[$['index']] = {};
                                            if (!allNotify[$['index']]['bean']) {
                                                allNotify[$['index']]['bean'] = 0x0;
                                            }
                                        }
                                        allNotify[$['index']]['bean'] += _0x358967['data']['drawInfo']['beanNum'];
                                    } else {
                                        $['sendNotify'] = !![];
                                        if (!allNotify[$['index']]) {
                                            allNotify[$['index']] = {};
                                            if (!allNotify[$['index']]['message']) {
                                                allNotify[$['index']]['message'] = '';
                                            }
                                        }
                                        allNotify[$['index']]['message'] += '恭喜中奖，获得:' + _0x358967['data']['name'] + '\n活动店铺' + $['actInfo']['shopName'] + '\n领奖地址:https://lzkjdz-isv.isvjcloud.com/wxFansInterActionActivity/activity/' + $['ACT_ID'] + '?activityId=' + $['ACT_ID'] + '&adsource=tg_storePage';
                                    }
                                }
                            }
                        }
                    }
                }
            } catch (_0x3bba5f) {
                console['log'](_0x3bba5f, _0x11ae3a);
            } finally {
                _0x5976d2();
            }
        });
    });
}

function getUserInfo() {
    var _0x5dbd45 = {
        'TOjXw': function(_0x3facc1, _0xdbf24e) {
            return _0x3facc1(_0xdbf24e);
        },
        'ZUuOt': function(_0x80a153, _0x55cc65) {
            return _0x80a153(_0x55cc65);
        },
        'jIUSa': function(_0x3a5d9d, _0xb1d7f8, _0x2334be) {
            return _0x3a5d9d(_0xb1d7f8, _0x2334be);
        },
        'GEtmf': 'wxActionCommon/getUserInfo',
        'YYwfS': 'getUserInfo'
    };
    console['log'](_0x5dbd45['YYwfS']);
    return new Promise(_0x281505 => {
        let _0x2f3073 = 'pin=' + _0x5dbd45['ZUuOt'](encodeURIComponent, $['secretPin']);
        $['post'](_0x5dbd45['jIUSa'](taskPostUrl, _0x5dbd45['GEtmf'], _0x2f3073), async (_0x1d96d1, _0xfa958, _0x3128ff) => {
            try {
                if (_0x1d96d1) {
                    console['log']('' + JSON['stringify'](_0x1d96d1));
                } else {
                    _0x3128ff = JSON['parse'](_0x3128ff);
                    if (_0x3128ff['data']) {
                        console['log']('用户【' + _0x3128ff['data']['nickname'] + '】信息获取成功');
                        $['userId'] = _0x3128ff['data']['id'];
                        $['nickName'] = _0x3128ff['data']['nickame'];
                    } else {
                        console['log'](_0x3128ff);
                    }
                }
            } catch (_0x3a0682) {
                $['logErr'](_0x3a0682, _0xfa958);
            } finally {
                _0x5dbd45['TOjXw'](_0x281505, _0x3128ff);
            }
        });
    });
}

function getMyPing() {
    var _0x10c613 = {
        'bDMuf': function(_0x4d103c, _0x365e04, _0x586884) {
            return _0x4d103c(_0x365e04, _0x586884);
        },
        'KIHbX': 'customer/getMyPing',
        'PsZjs': 'getMyPing'
    };
    console['log'](_0x10c613['PsZjs']);
    return new Promise(_0x55a7db => {
        var _0x12b323 = {
            'IdGQV': function(_0x584bde) {
                return _0x584bde();
            }
        };
        $['post'](_0x10c613['bDMuf'](taskPostUrl, _0x10c613['KIHbX'], 'userId=' + $['venderId'] + '&token=' + $['token'] + '&fromType=APP'), async (_0x250a48, _0x1db07a, _0x8fc1f6) => {
            try {
                if (_0x250a48) {
                    console['log']('' + JSON['stringify'](_0x250a48));
                } else {
                    _0x8fc1f6 = JSON['parse'](_0x8fc1f6);
                    if (_0x8fc1f6['result']) {
                        $['secretPin'] = _0x8fc1f6['data']['secretPin'];
                        cookie = 'AUTH_C_USER=' + $['secretPin'] + ';' + cookie;
                    }
                }
            } catch (_0x19bb04) {
                $['logErr'](_0x19bb04, _0x1db07a);
            } finally {
                _0x12b323['IdGQV'](_0x55a7db);
            }
        });
    });
}

function getActInfo() {
    var _0x4ce13d = {
        'dlSti': function(_0x8cec38) {
            return _0x8cec38();
        },
        'psdOv': 'customer/getSimpleActInfoVo'
    };
    console['log']('getActInfo');
    return new Promise(_0x19cd3b => {
        $['post'](taskPostUrl(_0x4ce13d['psdOv'], 'activityId=' + $['ACT_ID']), (_0x16e2cb, _0xebc376, _0x3d48c1) => {
            try {
                if (_0x16e2cb) {
                    console['log']('' + JSON['stringify'](_0x16e2cb));
                } else {
                    _0x3d48c1 = JSON['parse'](_0x3d48c1);
                    if (_0x3d48c1['result']) {
                        $['venderId'] = _0x3d48c1['data']['venderId'];
                    }
                }
            } catch (_0x12bf3f) {
                $['logErr'](_0x12bf3f, _0xebc376);
            } finally {
                _0x4ce13d['dlSti'](_0x19cd3b);
            }
        });
    });
}

function grantTokenKey() {
    var _0x80a2cc = {
        'ofBSg': function(_0x3b4dd4, _0x5ce0c1) {
            return _0x3b4dd4 === _0x5ce0c1;
        },
        'YMaFj': function(_0x18a013) {
            return _0x18a013();
        },
        'LTbtw': 'grantTokenKey',
        'YqDSH': 'https://api.m.jd.com/client.action?functionId=genToken',
        'rDTOX': 'api.m.jd.com',
        'dPJJm': '*/*',
        'iMVLp': 'keep-alive',
        'OBRwh': 'JD4iPhone/167538 (iPhone; iOS 14.3; Scale/3.00)',
        'eQLfY': 'zh-Hans-CN;q=1'
    };
    console['log'](_0x80a2cc['LTbtw']);
    let _0x1aadb9 = {
        'url': _0x80a2cc['YqDSH'],
        'headers': {
            'Host': _0x80a2cc['rDTOX'],
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': _0x80a2cc['dPJJm'],
            'Connection': _0x80a2cc['iMVLp'],
            'Cookie': cookie,
            'User-Agent': _0x80a2cc['OBRwh'],
            'Accept-Language': _0x80a2cc['eQLfY'],
            'Accept-Encoding': 'gzip, deflate, br'
        },
        'body': 'body=%7B%22to%22%3A%22https%3A%5C%2F%5C%2Flzkjdz-isv.isvjcloud.com%5C%2FwxFansInterActionActivity%5C%2Factivity%5C%2F' + $['ACT_ID'] + 'c%3FactivityId%3D' + $['ACT_ID'] + '%26adsource%3Dtg_storePage%22%2C%22action%22%3A%22to%22%7D&build=167541&client=apple&clientVersion=9.4.0&joycious=39&lang=zh_CN&networkType=wifi&networklibtype=JDNetworkBaseAF&openudid=385f383ec315d8d01c64a09021df04ef9930c99d&scope=01&sign=49f56090e3f09b668f1afaf8894fdb42&st=1613530021485&sv=111'
    };
    return new Promise(_0x491e14 => {
        $['post'](_0x1aadb9, (_0x1968f9, _0x494481, _0x232889) => {
            try {
                if (_0x1968f9) {
                    console['log']('' + JSON['stringify'](_0x1968f9));
                } else {
                    console['log'](_0x494481);
                    _0x232889 = JSON['parse'](_0x232889);
                    if (_0x80a2cc['ofBSg'](_0x232889['code'], '0')) {
                        $['tokenKey'] = _0x232889['tokenKey'];
                        cookie = cookie + 'IsvToken=' + $['tokenKey'];
                    }
                }
            } catch (_0x2c56e0) {
                console['log'](_0x2c56e0, _0x494481);
            } finally {
                _0x80a2cc['YMaFj'](_0x491e14);
            }
        });
    });
}

function grantToken() {
    var _0x4da0e3 = {
        'UIOts': 'grantToken',
        'peTmf': 'https://api.m.jd.com/client.action?functionId=isvObfuscator',
        'FutML': 'api.m.jd.com',
        'aiwdd': 'application/x-www-form-urlencoded',
        'elFSL': '*/*',
        'FLgIL': 'keep-alive',
        'ycVec': 'JD4iPhone/167538 (iPhone; iOS 14.3; Scale/3.00)',
        'bvxiQ': 'zh-Hans-CN;q=1',
        'yETUM': 'gzip, deflate, br'
    };
    console['log'](_0x4da0e3['UIOts']);
    let _0x498eda = {
        'url': _0x4da0e3['peTmf'],
        'headers': {
            'Host': _0x4da0e3['FutML'],
            'Content-Type': _0x4da0e3['aiwdd'],
            'Accept': _0x4da0e3['elFSL'],
            'Connection': _0x4da0e3['FLgIL'],
            'Cookie': cookie,
            'User-Agent': _0x4da0e3['ycVec'],
            'Accept-Language': _0x4da0e3['bvxiQ'],
            'Accept-Encoding': _0x4da0e3['yETUM']
        },
        'body': 'body=%7B%22url%22%3A%22https%3A%5C%2F%5C%2Flzkjdz-isv.isvjcloud.com%22%2C%22id%22%3A%22%22%7D&build=167541&client=apple&clientVersion=9.4.0&openudid=385f383ec315d8d01c64a09021df04ef9930c99d&sign=b747c2565aca50d1e1dfb3544a9e04c8&st=1613530023543&sv=100'
    };
    return new Promise(_0x166a4a => {
        $['post'](_0x498eda, (_0x5d3c3e, _0x4e9c1f, _0x4f2bb4) => {
            try {
                if (_0x5d3c3e) {
                    console['log']('' + JSON['stringify'](_0x5d3c3e));
                } else {
                    _0x4f2bb4 = JSON['parse'](_0x4f2bb4);
                    if (_0x4f2bb4['code'] === '0') {
                        $['token'] = _0x4f2bb4['token'];
                    }
                }
            } catch (_0x13e7ab) {
                console['log'](_0x13e7ab);
            } finally {
                _0x166a4a();
            }
        });
    });
}

function getActCookie() {
    var _0xe8227e = {
        'gsGWm': 'set-cookie',
        'yYEhn': 'headers',
        'HzNUs': 'Set-Cookie',
        'rIOYM': 'text/plain',
        'swczq': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'GezxT': 'keep-alive',
        'QKsyk': 'zh-Hans-CN;q=1',
        'kVMgW': 'gzip, deflate, br'
    };
    let _0x51857a = {
        'url': 'https://lzkjdz-isv.isvjcloud.com/wxFansInterActionActivity/activity/' + $['ACT_ID'] + '?activityId=' + $['ACT_ID'] + '&adsource=tg_storePage',
        'headers': {
            'Content-Type': _0xe8227e['rIOYM'],
            'Accept': _0xe8227e['swczq'],
            'Connection': _0xe8227e['GezxT'],
            'Cookie': '' + cookie,
            'User-Agent': 'jdapp;iPhone;9.3.8;14.3;network/wifi;ADID/;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone10,3;supportBestPay/0;appBuild/167538;jdSupportDarkMode/0;addressid/0;pv/1.12;apprpd/Babel_Native;ref/JDWebViewController;psq/11;ads/;psn/;jdv/0|;adk/;app_device/IOS;pap/JA2015_311210|9.3.8|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
            'Accept-Language': _0xe8227e['QKsyk'],
            'Accept-Encoding': _0xe8227e['kVMgW']
        }
    };
    return new Promise(_0x3035db => {
        $['get'](_0x51857a, (_0x5c8ae0, _0x4d3544, _0x10b933) => {
            try {
                if (_0x5c8ae0) {
                    console['log']('' + JSON['stringify'](_0x5c8ae0));
                } else {
                    cookie = cookie + ';';
                    if ($['isNode']())
                        for (let _0x30d59d of _0x4d3544['headers'][_0xe8227e['gsGWm']]) {
                            cookie = '' + cookie + _0x30d59d['split'](';')[0x0] + ';';
                        } else {
                            for (let _0x2d755e of _0x4d3544[_0xe8227e['yYEhn']][_0xe8227e['HzNUs']]['split'](',')) {
                                cookie = '' + cookie + _0x2d755e['split'](';')[0x0] + ';';
                            }
                        }
                }
            } catch (_0x2a6877) {
                console['log'](_0x2a6877);
            } finally {
                _0x3035db();
            }
        });
    });
}

function taskPostUrl(_0x8e6ec2, _0x114b7a) {
    var _0x49c14a = {
        'fuSLD': 'lzkjdz-isv.isvjcloud.com',
        'ZNDqX': 'application/json, text/javascript, */*; q=0.01',
        'zcUfC': 'XMLHttpRequest',
        'MlmUH': 'application/x-www-form-urlencoded',
        'fEyNQ': 'https://lzkjdz-isv.isvjcloud.com',
        'ZriQA': 'keep-alive',
        'KMuYq': 'jdapp;iPhone;9.3.8;14.3;network/wifi;ADID/;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone10,3;supportBestPay/0;appBuild/167538;jdSupportDarkMode/0;addressid/0;pv/1.12;apprpd/Babel_Native;ref/JDWebViewController;psq/11;ads/;psn/;jdv/0|;adk/;app_device/IOS;pap/JA2015_311210|9.3.8|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1'
    };
    return {
        'url': 'https://lzkjdz-isv.isvjcloud.com/' + _0x8e6ec2,
        'headers': {
            'Host': _0x49c14a['fuSLD'],
            'Accept': _0x49c14a['ZNDqX'],
            'X-Requested-With': _0x49c14a['zcUfC'],
            'Accept-Language': 'zh-cn',
            'Accept-Encoding': 'gzip, deflate, br',
            'Content-Type': _0x49c14a['MlmUH'],
            'Origin': _0x49c14a['fEyNQ'],
            'Connection': _0x49c14a['ZriQA'],
            'Referer': 'https://lzkjdz-isv.isvjcloud.com/wxFansInterActionActivity/activity/' + $['ACT_ID'] + '?activityId=' + $['ACT_ID'] + '&adsource=tg_storePage',
            'Cookie': '' + cookie,
            'User-Agent': _0x49c14a['KMuYq']
        },
        'body': _0x114b7a
    };
}

function getACT_ID() {
    var _0x31dd6e = {
        'kyBdp': function(_0x25e465, _0x43f606) {
            return _0x25e465 > _0x43f606;
        },
        'AVaPh': function(_0x38ebc5, _0xdeaa91) {
            return _0x38ebc5(_0xdeaa91);
        }
    };
    return new Promise(async _0x58e375 => {
        var _0x393dea = {
            'BNSFU': function(_0x493923, _0x157718) {
                return _0x31dd6e['kyBdp'](_0x493923, _0x157718);
            },
            'fzxSq': '获取活动信息成功',
            'zLddo': function(_0x4b8b04, _0x1f2fa1) {
                return _0x31dd6e['AVaPh'](_0x4b8b04, _0x1f2fa1);
            }
        };
        $['get']({
            'url': 'https://api.r2ray.com/jd.fanslove/index?ts=' + Date['now']()
        }, (_0x401db6, _0xb43823, _0x321a05) => {
            try {
                if (_0x401db6) {
                    console['log']('' + JSON['stringify'](_0x401db6));
                } else {
                    if (_0x321a05) {
                        _0x321a05 = JSON['parse'](_0x321a05);
                        if (_0x393dea['BNSFU'](_0x321a05['data']['length'], 0x0)) {
                            $['ACT_IDarr'] = _0x321a05['data'];
                            console['log'](_0x393dea['fzxSq']);
                        } else {
                            $['ACT_IDarr'] = [];
                        }
                    }
                }
            } catch (_0x54b087) {
                $['logErr'](_0x54b087, _0xb43823);
            } finally {
                _0x393dea['zLddo'](_0x58e375, _0x321a05);
            }
        });
    });
}

function TotalBean() {
    var _0x4c7b84 = {
        'mNzmM': 'retcode',
        'lXgOW': 'base',
        'gsynd': 'application/x-www-form-urlencoded',
        'nxgTB': 'https://wqs.jd.com/my/jingdou/my.shtml?sceneval=2',
        'GqLpb': 'jdapp;iPhone;9.2.2;14.2;%E4%BA%AC%E4%B8%9C/9.2.2 CFNetwork/1206 Darwin/20.1.0',
        'zSryr': 'JDUA'
    };
    return new Promise(async _0x4739dd => {
        var _0x1c5ca1 = {
            'JUEVa': function(_0x30ddb6, _0x1a01ea) {
                return _0x30ddb6 === _0x1a01ea;
            },
            'KCcDT': _0x4c7b84['mNzmM'],
            'lgXlE': _0x4c7b84['lXgOW']
        };
        const _0x4333ef = {
            'url': 'https://wq.jd.com/user/info/QueryJDUserInfo?sceneval=2',
            'headers': {
                'Accept': 'application/json,text/plain, */*',
                'Content-Type': _0x4c7b84['gsynd'],
                'Accept-Encoding': 'gzip, deflate, br',
                'Accept-Language': 'zh-cn',
                'Connection': 'keep-alive',
                'Cookie': cookie,
                'Referer': _0x4c7b84['nxgTB'],
                'User-Agent': $['isNode']() ? process['env']['JD_USER_AGENT'] ? process['env']['JD_USER_AGENT'] : _0x4c7b84['GqLpb'] : $['getdata'](_0x4c7b84['zSryr']) ? $['getdata'](_0x4c7b84['zSryr']) : _0x4c7b84['GqLpb']
            }
        };
        $['post'](_0x4333ef, (_0x587a65, _0x2b1860, _0x333ae8) => {
            try {
                if (_0x587a65) {
                    console['log']('' + JSON['stringify'](_0x587a65));
                    console['log']($['name'] + ' API请求失败，请检查网路重试');
                } else {
                    if (_0x333ae8) {
                        _0x333ae8 = JSON['parse'](_0x333ae8);
                        if (_0x1c5ca1['JUEVa'](_0x333ae8[_0x1c5ca1['KCcDT']], 0xd)) {
                            $['isLogin'] = ![];
                            return;
                        }
                        $['nickName'] = _0x333ae8[_0x1c5ca1['lgXlE']]['nickname'];
                    } else {
                        console['log']('京东服务器返回空数据');
                    }
                }
            } catch (_0x5becff) {
                $['logErr'](_0x5becff, _0x2b1860);
            } finally {
                _0x4739dd();
            }
        });
    });
}

function safeGet(_0x5c4670) {
    var _0x5561fa = {
        'ARedc': function(_0x3aa1cb, _0x3daf47) {
            return _0x3aa1cb == _0x3daf47;
        }
    };
    try {
        if (_0x5561fa['ARedc'](typeof JSON['parse'](_0x5c4670), 'object')) {
            return !![];
        }
    } catch (_0xeb06f4) {
        console['log'](_0xeb06f4);
        console['log']('京东服务器访问数据为空，请检查自身设备网络情况');
        return ![];
    }
};
_0xode = 'jsjiami.com.v6'
// prettier-ignore
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
