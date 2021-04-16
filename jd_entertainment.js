/*
百变大咖秀
活动入口：首页搜索-‘百变大咖秀’-底部最右侧按钮
请手动进入一次活动页面已确保能够自动抽奖
活动地址：https://lzdz-isv.isvjcloud.com/dingzhi/change/able/activity/3508994?activityId=dz2102100001340211

新手写脚本，难免有bug，能用且用。
多谢 whyour 大佬 指导

脚本内置了一个给作者任务助力的网络请求，默认开启，如介意请自行关闭。
助力活动链接： https://h5.m.jd.com/babelDiy/Zeus/4ZK4ZpvoSreRB92RRo8bpJAQNoTq/index.html
参数 helpAuthor = false

更新地址：https://share.r2ray.com/dust/i-chenzhe/z_entertainment.js
============Quantumultx===============
[task_local]
#百变大咖秀
10 10,11 * * 2-5 https://share.r2ray.com/dust/i-chenzhe/z_entertainment.js, tag=百变大咖秀,  enabled=true
================Loon==============
[Script]
cron "10 10,11 * * 2-5" script-path=https://share.r2ray.com/dust/i-chenzhe/z_entertainment.js,tag=百变大咖秀
===============Surge=================
百变大咖秀 = type=cron,cronexp="10 10,11 * * 2-5",wake-system=1,timeout=3600,script-path=https://share.r2ray.com/dust/i-chenzhe/z_entertainment.js
============小火箭=========
百变大咖秀 = type=cron,script-path=https://share.r2ray.com/dust/i-chenzhe/z_entertainment.js, cronexpr="10 10,11 * * 2-5", timeout=3600, enable=true
*/


const $ = new Env('百变大咖秀');
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
const notify = $.isNode() ? require('./sendNotify') : '';
let cookiesArr = [], cookie = '', originCookie = '', message = '';
let helpAuthor = false;//为作者助力的开关
     /*
 *Progcessed By JSDec in 2.05s
 *JSDec - JSDec.js.org
 */
const cp = $['isNode']() ? require('child_process') : '';
const ACT_ID = 'dz2102100001340211';
const questionList = [{
    'q': '05bb5dd38c70476f88d73620a8949b86',
    'a': 'A:卡斯柏'
}, {
    'q': '35e1cf0a624943ebbdd604cd2d4c94b4',
    'a': 'A:冯提莫'
}, {
    'q': '46fb3f92c4534342902c2e5ba4ded402',
    'a': 'A:韩宇'
}, {
    'q': '74fed0dc3d444142a5166e2c4244d2a5',
    'a': 'B:王祖蓝'
}, {
    'q': 'df70012eb8bc4d3f92bcacf5ab31ad18',
    'a': 'B:白凯南'
}, {
    'q': 'e07dfe989aef4d64b792126204c9cea0',
    'a': 'A:何炅'
}, {
    'q': 'ee81cf8dbcc946d682203b19802d34d8',
    'a': 'B:大张伟'
}, {
    'q': 'f3c53e9694d44b62b085e18b71bfd1bf',
    'a': 'B:刘嘉玲'
}, {
    'q': 'f3c59f6e13604806958c0059597b8b65',
    'a': 'A:VAVA'
}];
if ($['isNode']()) {
    Object['keys'](jdCookieNode)['forEach'](_0x2bcef1 => {
        cookiesArr['push'](jdCookieNode[_0x2bcef1]);
    });
    if (process['env']['JD_DEBUG'] && process['env']['JD_DEBUG'] === 'false') console['log'] = () => {};
} else {
    let cookiesData = $['getdata']('CookiesJD') || '[]';
    cookiesData = JSON['parse'](cookiesData);
    cookiesArr = cookiesData['map'](_0xd03361 => _0xd03361['cookie']);
    cookiesArr['reverse']();
    cookiesArr['push'](...[$['getdata']('CookieJD2'), $['getdata']('CookieJD')]);
    cookiesArr['reverse']();
    cookiesArr = cookiesArr['filter'](_0x338a6e => !!_0x338a6e);
}
$['log']('脚本版本 v0.8\n更新时间:2021-04-16 12:13\n仓库：https://www.github.com/i-chenzhe/qx');
!(async () => {
    var _0x32e514 = {
        'QQUjQ': function(_0x2267be) {
            return _0x2267be();
        },
        'ySANM': function(_0x1e43ad) {
            return _0x1e43ad();
        },
        'WxHOe': 'wQvzQ',
        'ijeHW': 'application/x-www-form-urlencoded',
        'LWwyJ': 'https://h5.m.jd.com',
        'cjalA': 'gzip, deflate, br',
        'EUKlp': 'application/json, text/plain, */*',
        'rJzwn': 'jdapp;iPhone;9.4.0;14.3;;network/wifi;ADID/;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone10,3;addressid/;supportBestPay/0;appBuild/167541;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
        'FtcPK': 'zh-cn',
        'xYHOd': 'icnIU',
        'YSdde': function(_0x49a5cb, _0x1eba00) {
            return _0x49a5cb !== _0x1eba00;
        },
        'GYdtL': function(_0x4bac23) {
            return _0x4bac23();
        },
        'MMcUJ': 'https://api.r2ray.com/jd.bargain/index',
        'BeQXl': 'hMEpb',
        'eJyvg': 'https://api.r2ray.com/jd.bargain/done',
        'CQYsT': 'application/json',
        'kGASc': 'keep-alive',
        'zzRTX': function(_0x1a3414, _0x3e2df9) {
            return _0x1a3414 === _0x3e2df9;
        },
        'WQExk': function(_0x5bf5fb, _0x216fa3) {
            return _0x5bf5fb !== _0x216fa3;
        },
        'mBiAO': 'BwByD',
        'joOaq': 'manito',
        'ULOBn': function(_0x3194b2, _0x2fe3e1) {
            return _0x3194b2 !== _0x2fe3e1;
        },
        'mCDHF': function(_0x4a3802, _0x5cbe7f) {
            return _0x4a3802 < _0x5cbe7f;
        },
        'WBjnT': 'XWMVl',
        'gBPcA': 'umuKe',
        'CgXRI': 'RaYDA',
        'umDVS': function(_0x5275ee, _0x467578) {
            return _0x5275ee(_0x467578);
        },
        'Hlqyl': function(_0x5b7f9e, _0x5e92da) {
            return _0x5b7f9e + _0x5e92da;
        },
        'OSVDM': 'HpWBV',
        'eZhbt': function(_0x3f9e56) {
            return _0x3f9e56();
        },
        'FDkrF': 'RzXvH',
        'sKTHE': function(_0x5de73b, _0x582b1c) {
            return _0x5de73b < _0x582b1c;
        },
        'DXdKc': function(_0x152d73, _0x53f3c7) {
            return _0x152d73 === _0x53f3c7;
        },
        'JvtYT': function(_0x821901, _0x29c3b1) {
            return _0x821901 === _0x29c3b1;
        },
        'iKuzC': 'iyAbs',
        'pDrUy': 'xeZFY',
        'mBRxd': function(_0x1a483c, _0x284787, _0x1d0655) {
            return _0x1a483c(_0x284787, _0x1d0655);
        },
        'fUcLQ': '├ 当你收到这条通知说明你可能在使用【JD-FreeFuck】项目\x0a    ├ 如果你并没有使用【JD-FreeFuck】项目也收到了这条消息请私聊我\x0a    ├ 我不喜欢【JD-FreeFuck】搬运我脚本的行为\x0a    ├ 建议更换运行环境\x0a    ├ lxk0301 docker部署方案:https://gitee.com/lxk0301/jd_docker \x0a    ├ 青龙 docker部署方案：https://t.me/c/1465257366/31 或 whyour/qinglong 请自行查找。\x0a    └ 不愿透露姓名的大佬的部署方案:  nevinee/jd 请自行查找。\x0a\x0a ',
        'vxteu': function(_0x469944, _0x57aac9) {
            return _0x469944 === _0x57aac9;
        },
        'SjkTk': 'nmBhA',
        'sgjGA': 'api.m.jd.com',
        'PBdCZ': function(_0x1eb76a, _0x5078b3) {
            return _0x1eb76a !== _0x5078b3;
        },
        'AvVQl': '【提示】请先获取京东账号一cookie\x0a直接使用NobyDa的京东签到获取',
        'jtAqE': 'https://bean.m.jd.com/bean/signIndex.action',
        'OCCiB': 'cd .. && git remote -v',
        'yPzmC': function(_0x5334ef, _0x26b34b) {
            return _0x5334ef < _0x26b34b;
        },
        'xcpgl': function(_0x4da668, _0x4bdba) {
            return _0x4da668 === _0x4bdba;
        },
        'GNCSE': function(_0x38770c, _0x2c0330) {
            return _0x38770c !== _0x2c0330;
        },
        'ZlzRl': 'okIFE',
        'wYUVL': 'oJnVp',
        'rIsfu': function(_0x26fdf1, _0x188efb) {
            return _0x26fdf1 !== _0x188efb;
        },
        'cTkTo': '4|1|2|3|0',
        'oiFUm': function(_0x4761e8) {
            return _0x4761e8();
        },
        'lNeMi': 'XVTLN'
    };
    if (!cookiesArr[0x0]) {
        $['msg']($['name'], _0x32e514['AvVQl'], _0x32e514['jtAqE'], {
            'open-url': 'https://bean.m.jd.com/bean/signIndex.action'
        });
        return;
    }
    if ($['isNode']()) {
        cp['exec'](_0x32e514['OCCiB'], async function(_0x337702, _0x52a527, _0x3e9cc4) {
            var _0xbaca1a = {
                'WaUvN': _0x32e514['xYHOd'],
                'vVBER': function(_0x2c3bc9, _0x1831c7) {
                    return _0x32e514['YSdde'](_0x2c3bc9, _0x1831c7);
                },
                'kZlLQ': function(_0x365484) {
                    return _0x32e514['GYdtL'](_0x365484);
                },
                'ePJbC': _0x32e514['MMcUJ'],
                'PMDQP': _0x32e514['BeQXl'],
                'VsTjx': function(_0xcd6e59) {
                    return _0x32e514['GYdtL'](_0xcd6e59);
                },
                'WNTHr': _0x32e514['eJyvg'],
                'klmRl': _0x32e514['CQYsT'],
                'rFKCf': _0x32e514['ijeHW'],
                'ALnpT': _0x32e514['LWwyJ'],
                'gwAnp': _0x32e514['kGASc'],
                'IuqPn': _0x32e514['EUKlp'],
                'goZmN': _0x32e514['rJzwn']
            };
            if (_0x32e514['zzRTX'](_0x337702, null)) {
                if (_0x32e514['WQExk']('BwByD', _0x32e514['mBiAO'])) {
                    _0x32e514['QQUjQ'](resolve);
                } else {
                    if (_0x52a527['includes']('supermanito') || _0x52a527['includes']('super') || _0x52a527['includes'](_0x32e514['joOaq'])) {
                        if (_0x32e514['ULOBn']('uOhZV', 'uOhZV')) {
                            $['userShareCode'] = '';
                        } else {
                            for (let _0x23dd4d = 0x0; _0x32e514['mCDHF'](_0x23dd4d, cookiesArr['length']); _0x23dd4d++) {
                                if (_0x32e514['ULOBn'](_0x32e514['WBjnT'], _0x32e514['gBPcA'])) {
                                    if (cookiesArr[_0x23dd4d]) {
                                        if (_0x32e514['zzRTX']('QVtUv', _0x32e514['CgXRI'])) {
                                            $['zRes'] = JSON['parse'](data);
                                            resolve();
                                        } else {
                                            cookie = cookiesArr[_0x23dd4d];
                                            originCookie = cookiesArr[_0x23dd4d];
                                            $['UserName'] = _0x32e514['umDVS'](decodeURIComponent, cookie['match'](/pt_pin=(.+?);/) && cookie['match'](/pt_pin=(.+?);/)[0x1]);
                                            $['index'] = _0x32e514['Hlqyl'](_0x23dd4d, 0x1);
                                            $['isLogin'] = !![];
                                            $['nickName'] = '';
                                            message = '';
                                            console['log']('\x0a*******开始【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']) + '********\x0a');
                                            if (!$['isLogin']) {
                                                $['msg']($['name'], '【提示】cookie已失效', '京东账号' + $['index'] + ' ' + ($['nickName'] || $['UserName']) + '\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action', {
                                                    'open-url': 'https://bean.m.jd.com/bean/signIndex.action'
                                                });
                                                if ($['isNode']()) {
                                                    if ('HpWBV' !== _0x32e514['OSVDM']) {
                                                        _0x32e514['ySANM'](resolve);
                                                    } else {
                                                        await notify['sendNotify']($['name'] + 'cookie已失效 - ' + $['UserName'], '京东账号' + $['index'] + ' ' + $['UserName'] + '\n请重新登录获取cookie');
                                                    }
                                                }
                                                continue;
                                            }
                                            if (helpAuthor) {
                                                function _0x50fa53() {
                                                    return new Promise(_0x4815e7 => {
                                                        var _0x7d6bc2 = {
                                                            'rFFxr': _0xbaca1a['WaUvN'],
                                                            'poqPj': function(_0x238aec, _0x16e228) {
                                                                return _0xbaca1a['vVBER'](_0x238aec, _0x16e228);
                                                            },
                                                            'aNllG': function(_0x466b24) {
                                                                return _0xbaca1a['kZlLQ'](_0x466b24);
                                                            }
                                                        };
                                                        $['get']({
                                                            'url': _0xbaca1a['ePJbC']
                                                        }, (_0x1d1e02, _0x37024a, _0x2867e7) => {
                                                            if (_0x7d6bc2['rFFxr'] !== 'icnIU') {
                                                                _0x4815e7();
                                                            } else {
                                                                try {
                                                                    if (_0x2867e7) {
                                                                        $['zData'] = JSON['parse'](_0x2867e7);
                                                                    };
                                                                } catch (_0x40d909) {
                                                                    console['log'](_0x40d909);
                                                                } finally {
                                                                    if (_0x7d6bc2['poqPj']('lzJyN', 'IVGQF')) {
                                                                        _0x7d6bc2['aNllG'](_0x4815e7);
                                                                    } else {
                                                                        console['log']('' + JSON['stringify'](_0x1d1e02));
                                                                    }
                                                                };
                                                            }
                                                        });
                                                    });
                                                }

                                                function _0x3c4437(_0x14ec38, _0x5e7c8b) {
                                                    var _0xbbf3dd = {
                                                        'BfSQh': function(_0x2b8332) {
                                                            return _0x32e514['ySANM'](_0x2b8332);
                                                        }
                                                    };
                                                    if (_0x32e514['WxHOe'] === _0x32e514['WxHOe']) {
                                                        let _0x47e55d = {
                                                            'url': 'https://api.m.jd.com/client.action',
                                                            'headers': {
                                                                'Host': 'api.m.jd.com',
                                                                'Content-Type': _0x32e514['ijeHW'],
                                                                'Origin': _0x32e514['LWwyJ'],
                                                                'Accept-Encoding': _0x32e514['cjalA'],
                                                                'Cookie': cookie,
                                                                'Connection': 'keep-alive',
                                                                'Accept': _0x32e514['EUKlp'],
                                                                'User-Agent': _0x32e514['rJzwn'],
                                                                'Referer': 'https://h5.m.jd.com/babelDiy/Zeus/4ZK4ZpvoSreRB92RRo8bpJAQNoTq/index.html?serveId=wxe30973feca923229&actId=' + _0x14ec38 + '&way=0&lng=&lat=&sid=&un_area=',
                                                                'Accept-Language': _0x32e514['FtcPK']
                                                            },
                                                            'body': 'functionId=cutPriceByUser&body={\"activityId\":\"' + _0x14ec38 + '","userName":"","followShop":1,"shopId":' + _0x5e7c8b + ',"userPic":""}&client=wh5&clientVersion=1.0.0'
                                                        };
                                                        return new Promise(_0x4d236b => {
                                                            $['post'](_0x47e55d, (_0x4cf454, _0x347df1, _0x487c3f) => {
                                                                if (_0x487c3f) {
                                                                    $['zRes'] = JSON['parse'](_0x487c3f);
                                                                    _0xbbf3dd['BfSQh'](_0x4d236b);
                                                                };
                                                            });
                                                        });
                                                    } else {
                                                        $['bean'] += data['data']['drawInfo']['beanNum'];
                                                    }
                                                }

                                                function _0x32904e(_0x2cf8d9, _0x5ac2b0) {
                                                    var _0x2af11b = {
                                                        'QQeRg': _0xbaca1a['PMDQP'],
                                                        'RGJfX': function(_0x511acc) {
                                                            return _0xbaca1a['VsTjx'](_0x511acc);
                                                        }
                                                    };
                                                    let _0x513736 = {
                                                        'url': _0xbaca1a['WNTHr'],
                                                        'headers': {
                                                            'Content-Type': _0xbaca1a['klmRl']
                                                        },
                                                        'body': JSON['stringify']({
                                                            'actID': _0x2cf8d9,
                                                            'actsID': _0x5ac2b0,
                                                            'done': 0x1
                                                        })
                                                    };
                                                    return new Promise(_0x102823 => {
                                                        $['post'](_0x513736, (_0xe793d3, _0x4d0632, _0x3bc0b9) => {
                                                            if (_0x2af11b['QQeRg'] === 'rGniE') {
                                                                console['log'](e);
                                                            } else {
                                                                _0x2af11b['RGJfX'](_0x102823);
                                                            }
                                                        });
                                                    });
                                                }
                                                await _0x32e514['eZhbt'](_0x50fa53);
                                                if ($['zData']['data']['length'] !== 0x0) {
                                                    if (_0x32e514['ULOBn'](_0x32e514['FDkrF'], _0x32e514['FDkrF'])) {
                                                        let _0x419e17 = {
                                                            'url': 'https://api.m.jd.com/client.action',
                                                            'headers': {
                                                                'Host': 'api.m.jd.com',
                                                                'Content-Type': _0xbaca1a['rFKCf'],
                                                                'Origin': _0xbaca1a['ALnpT'],
                                                                'Accept-Encoding': 'gzip, deflate, br',
                                                                'Cookie': cookie,
                                                                'Connection': _0xbaca1a['gwAnp'],
                                                                'Accept': _0xbaca1a['IuqPn'],
                                                                'User-Agent': _0xbaca1a['goZmN'],
                                                                'Referer': 'https://h5.m.jd.com/babelDiy/Zeus/4ZK4ZpvoSreRB92RRo8bpJAQNoTq/index.html?serveId=wxe30973feca923229&actId=' + actID + '&way=0&lng=&lat=&sid=&un_area=',
                                                                'Accept-Language': 'zh-cn'
                                                            },
                                                            'body': 'functionId=cutPriceByUser&body={"activityId":"' + actID + '","userName":"","followShop":1,"shopId":' + actsID + ',\"userPic\":\"\"}&client=wh5&clientVersion=1.0.0'
                                                        };
                                                        return new Promise(_0x311753 => {
                                                            var _0x143c02 = {
                                                                'NgbTu': function(_0x1d3bcc) {
                                                                    return _0x1d3bcc();
                                                                }
                                                            };
                                                            $['post'](_0x419e17, (_0x1c0ec6, _0x3b1119, _0x3205af) => {
                                                                if (_0x3205af) {
                                                                    $['zRes'] = JSON['parse'](_0x3205af);
                                                                    _0x143c02['NgbTu'](_0x311753);
                                                                };
                                                            });
                                                        });
                                                    } else {
                                                        for (let _0x23dd4d = 0x0; _0x32e514['sKTHE'](_0x23dd4d, $['zData']['data']['length']); _0x23dd4d++) {
                                                            actID = $['zData']['data'][_0x23dd4d]['actID'];
                                                            actsID = $['zData']['data'][_0x23dd4d]['actsID'];
                                                            await _0x3c4437(actID, actsID);
                                                            await $['wait'](0x5dc);
                                                            if ($['Res'] && _0x32e514['DXdKc']($['Res']['status'], 0x4)) {
                                                                if (_0x32e514['JvtYT'](_0x32e514['iKuzC'], _0x32e514['pDrUy'])) {
                                                                    console['log']('' + JSON['stringify'](err));
                                                                } else {
                                                                    await _0x32e514['mBRxd'](_0x32904e, actID, actsID);
                                                                }
                                                            }
                                                        };
                                                    }
                                                };
                                            };
                                        }
                                    }
                                } else {
                                    $['logErr'](e, resp);
                                }
                            }
                            await notify['sendNotify']($['name'], '    ├ 当你收到这条通知说明你可能在使用【JD-FreeFuck】项目\n    ├ 如果你并没有使用【JD-FreeFuck】项目也收到了这条消息请私聊我\n    ├ 我不喜欢【JD-FreeFuck】搬运我脚本的行为\n    ├ 建议更换运行环境\n    ├ lxk0301 docker部署方案:https://gitee.com/lxk0301/jd_docker \n    ├ 青龙 docker部署方案：https://t.me/c/1465257366/31 或 whyour/qinglong 请自行查找。\n    └ 不愿透露姓名的大佬的部署方案:  nevinee/jd 请自行查找。\n\n ');
                            $['log'](_0x32e514['fUcLQ']);
                            return;
                        }
                    }
                }
            }
        });
    }
    for (let _0x1e4902 = 0x0; _0x32e514['yPzmC'](_0x1e4902, cookiesArr['length']); _0x1e4902++) {
        if (_0x32e514['xcpgl']('ZoBUy', 'sfSXA')) {
            $['isLogin'] = ![];
            return;
        } else {
            if (cookiesArr[_0x1e4902]) {
                cookie = cookiesArr[_0x1e4902];
                originCookie = cookiesArr[_0x1e4902];
                $['UserName'] = _0x32e514['umDVS'](decodeURIComponent, cookie['match'](/pt_pin=(.+?);/) && cookie['match'](/pt_pin=(.+?);/)[0x1]);
                $['index'] = _0x1e4902 + 0x1;
                $['isLogin'] = !![];
                $['nickName'] = '';
                await checkCookie();
                console['log']('\n******开始【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']) + '*********\n');
                if (!$['isLogin']) {
                    if (_0x32e514['GNCSE'](_0x32e514['ZlzRl'], _0x32e514['ZlzRl'])) {
                        $['logErr'](e, resp);
                    } else {
                        $['msg']($['name'], '【提示】cookie已失效', '京东账号' + $['index'] + ' ' + ($['nickName'] || $['UserName']) + '\x0a请重新登录获取\x0ahttps://bean.m.jd.com/bean/signIndex.action', {
                            'open-url': _0x32e514['jtAqE']
                        });
                        if ($['isNode']()) {
                            if (_0x32e514['GNCSE'](_0x32e514['wYUVL'], 'oJnVp')) {
                                $['cardList'] = data['data']['list'];
                            } else {
                                await notify['sendNotify']($['name'] + 'cookie已失效 - ' + $['UserName'], '京东账号' + $['index'] + ' ' + $['UserName'] + '\n请重新登录获取cookie');
                            }
                        }
                        continue;
                    }
                }
                if (helpAuthor) {
                    function _0x373957() {
                        return new Promise(_0x560ecd => {
                            var _0x5afd36 = {
                                'idPLW': function(_0x115911) {
                                    return _0x32e514['eZhbt'](_0x115911);
                                },
                                'uScYP': function(_0x5ab7c8, _0x4ceb9c) {
                                    return _0x32e514['vxteu'](_0x5ab7c8, _0x4ceb9c);
                                },
                                'gnbHn': 'jtIYT',
                                'NbbKo': 'JCADi',
                                'eyeWU': function(_0x7fcbdd, _0x4cedb0) {
                                    return _0x7fcbdd !== _0x4cedb0;
                                },
                                'cTJUB': 'trxah',
                                'elqbP': _0x32e514['SjkTk']
                            };
                            $['get']({
                                'url': 'https://api.r2ray.com/jd.bargain/index'
                            }, (_0x18fcc2, _0x21e10d, _0xc98065) => {
                                if (_0x5afd36['uScYP'](_0x5afd36['gnbHn'], _0x5afd36['NbbKo'])) {
                                    $['zRes'] = JSON['parse'](_0xc98065);
                                    _0x5afd36['idPLW'](_0x560ecd);
                                } else {
                                    try {
                                        if (_0x5afd36['eyeWU'](_0x5afd36['cTJUB'], _0x5afd36['elqbP'])) {
                                            if (_0xc98065) {
                                                $['zData'] = JSON['parse'](_0xc98065);
                                            };
                                        } else {
                                            times = newCardList['length'];
                                        }
                                    } catch (_0x360d37) {
                                        console['log'](_0x360d37);
                                    } finally {
                                        _0x5afd36['idPLW'](_0x560ecd);
                                    };
                                }
                            });
                        });
                    }

                    function _0xfee42e(_0x57ff7a, _0x29a578) {
                        var _0x2995b9 = {
                            'UKpoc': function(_0x4aa29b, _0x196935) {
                                return _0x4aa29b !== _0x196935;
                            },
                            'OejdK': 'skrxn',
                            'TvSEQ': function(_0x2cf620) {
                                return _0x2cf620();
                            }
                        };
                        if (_0x32e514['PBdCZ']('hwvIA', 'hwvIA')) {
                            var _0x184d2c = {
                                'wuust': function(_0x456130) {
                                    return _0x456130();
                                }
                            };
                            let _0x1a6034 = {
                                'url': 'https://api.m.jd.com/client.action',
                                'headers': {
                                    'Host': _0x32e514['sgjGA'],
                                    'Content-Type': _0x32e514['ijeHW'],
                                    'Origin': _0x32e514['LWwyJ'],
                                    'Accept-Encoding': _0x32e514['cjalA'],
                                    'Cookie': cookie,
                                    'Connection': _0x32e514['kGASc'],
                                    'Accept': 'application/json, text/plain, */*',
                                    'User-Agent': _0x32e514['rJzwn'],
                                    'Referer': 'https://h5.m.jd.com/babelDiy/Zeus/4ZK4ZpvoSreRB92RRo8bpJAQNoTq/index.html?serveId=wxe30973feca923229&actId=' + _0x57ff7a + '&way=0&lng=&lat=&sid=&un_area=',
                                    'Accept-Language': _0x32e514['FtcPK']
                                },
                                'body': 'functionId=cutPriceByUser&body={"activityId":"' + _0x57ff7a + '","userName":"","followShop":1,"shopId":' + _0x29a578 + ',"userPic":""}&client=wh5&clientVersion=1.0.0'
                            };
                            return new Promise(_0x312c4d => {
                                $['post'](_0x1a6034, (_0x261fe7, _0x3f7da5, _0x3ed232) => {
                                    if (_0x3ed232) {
                                        $['zRes'] = JSON['parse'](_0x3ed232);
                                        _0x184d2c['wuust'](_0x312c4d);
                                    };
                                });
                            });
                        } else {
                            let _0x3dcb83 = {
                                'url': 'https://api.m.jd.com/client.action',
                                'headers': {
                                    'Host': _0x32e514['sgjGA'],
                                    'Content-Type': _0x32e514['ijeHW'],
                                    'Origin': _0x32e514['LWwyJ'],
                                    'Accept-Encoding': 'gzip, deflate, br',
                                    'Cookie': cookie,
                                    'Connection': 'keep-alive',
                                    'Accept': 'application/json, text/plain, */*',
                                    'User-Agent': 'jdapp;iPhone;9.4.0;14.3;;network/wifi;ADID/;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone10,3;addressid/;supportBestPay/0;appBuild/167541;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
                                    'Referer': 'https://h5.m.jd.com/babelDiy/Zeus/4ZK4ZpvoSreRB92RRo8bpJAQNoTq/index.html?serveId=wxe30973feca923229&actId=' + _0x57ff7a + '&way=0&lng=&lat=&sid=&un_area=',
                                    'Accept-Language': _0x32e514['FtcPK']
                                },
                                'body': 'functionId=cutPriceByUser&body={"activityId":"' + _0x57ff7a + '","userName":"","followShop":1,"shopId":' + _0x29a578 + ',"userPic":""}&client=wh5&clientVersion=1.0.0'
                            };
                            return new Promise(_0x4a687a => {
                                $['post'](_0x3dcb83, (_0x50f5ed, _0x537e20, _0x466e22) => {
                                    if (_0x466e22) {
                                        if (_0x2995b9['UKpoc'](_0x2995b9['OejdK'], 'RPcEh')) {
                                            $['zRes'] = JSON['parse'](_0x466e22);
                                            _0x2995b9['TvSEQ'](_0x4a687a);
                                        } else {
                                            console['log']('' + JSON['stringify'](_0x50f5ed));
                                        }
                                    };
                                });
                            });
                        }
                    }

                    function _0x31ac70(_0x1abf2c, _0x3bd362) {
                        var _0x4088e2 = {
                            'yCmTw': function(_0x204dc6, _0x508863) {
                                return _0x204dc6 === _0x508863;
                            },
                            'RHCID': function(_0x42f8ec) {
                                return _0x42f8ec();
                            }
                        };
                        let _0x5ca993 = {
                            'url': _0x32e514['eJyvg'],
                            'headers': {
                                'Content-Type': _0x32e514['CQYsT']
                            },
                            'body': JSON['stringify']({
                                'actID': _0x1abf2c,
                                'actsID': _0x3bd362,
                                'done': 0x1
                            })
                        };
                        return new Promise(_0x78c872 => {
                            var _0x3c10f5 = {
                                'SfkPP': function(_0xd59a82, _0x3ce15b) {
                                    return _0x4088e2['yCmTw'](_0xd59a82, _0x3ce15b);
                                },
                                'CSDom': 'wIOUt',
                                'hCojj': function(_0x22a488) {
                                    return _0x4088e2['RHCID'](_0x22a488);
                                }
                            };
                            $['post'](_0x5ca993, (_0x3d8d52, _0x1c9782, _0x1d9e77) => {
                                if (_0x3c10f5['SfkPP'](_0x3c10f5['CSDom'], 'wIOUt')) {
                                    _0x3c10f5['hCojj'](_0x78c872);
                                } else {
                                    cookie = '' + cookie + ck['split'](';')[0x0] + ';';
                                }
                            });
                        });
                    }
                    await _0x32e514['eZhbt'](_0x373957);
                    if (_0x32e514['rIsfu']($['zData']['data']['length'], 0x0)) {
                        for (let _0x1e4902 = 0x0; _0x32e514['yPzmC'](_0x1e4902, $['zData']['data']['length']); _0x1e4902++) {
                            var _0x2e0ac5 = _0x32e514['cTkTo']['split']('|'),
                                _0x2907a5 = 0x0;
                            while (!![]) {
                                switch (_0x2e0ac5[_0x2907a5++]) {
                                    case '0':
                                        if ($['Res'] && $['Res']['status'] === 0x4) {
                                            await _0x31ac70(actID, actsID);
                                        }
                                        continue;
                                    case '1':
                                        actsID = $['zData']['data'][_0x1e4902]['actsID'];
                                        continue;
                                    case '2':
                                        await _0x32e514['mBRxd'](_0xfee42e, actID, actsID);
                                        continue;
                                    case '3':
                                        await $['wait'](0x5dc);
                                        continue;
                                    case '4':
                                        actID = $['zData']['data'][_0x1e4902]['actID'];
                                        continue;
                                }
                                break;
                            }
                        };
                    };
                };
                await _0x32e514['oiFUm'](entertainment);
            }
        }
    }
    if (_0x32e514['rIsfu'](message, '')) {
        if (_0x32e514['lNeMi'] === _0x32e514['lNeMi']) {
            if ($['isNode']()) {
                await notify['sendNotify']($['name'] + '运行完成', message);
            } else {
                await $['msg']($['name'] + '运行完成', '好像有点儿东西进账了', message);
            }
        } else {
            console['log']('' + JSON['stringify'](err));
        }
    }
})()['catch'](_0x380007 => {
    $['log']('', '❌ ' + $['name'] + ', 失败! 原因: ' + _0x380007 + '!', '');
})['finally'](() => {
    $['done']();
});
async function entertainment() {
    var _0x220d55 = {
        'YduHt': function(_0x8773a3) {
            return _0x8773a3();
        },
        'qUTjF': 'wfqFN',
        'pxQZB': function(_0x161710, _0x31fd1c) {
            return _0x161710 === _0x31fd1c;
        },
        'mqtms': 'EPWzu',
        'jfyWC': 'https://api.r2ray.com/jd.bargain/index',
        'fslqL': function(_0x1e624a, _0x568334) {
            return _0x1e624a !== _0x568334;
        },
        'pEvZY': 'QvQpO',
        'BJsor': 'eQLjB',
        'NOOxL': 'api.m.jd.com',
        'uLDJx': 'application/x-www-form-urlencoded',
        'wNHHx': 'https://h5.m.jd.com',
        'ppoOk': 'keep-alive',
        'ZbleQ': 'application/json, text/plain, */*',
        'Lqfho': 'https://api.r2ray.com/jd.bargain/done',
        'xtftp': 'application/json',
        'IJaZG': 'dingzhi/taskact/common/drawContent',
        'PLuhB': function(_0x2192b7, _0x3ad434) {
            return _0x2192b7(_0x3ad434);
        },
        'JnQnZ': function(_0x2b4ec4, _0xd3591c) {
            return _0x2b4ec4(_0xd3591c);
        },
        'Skmez': function(_0x207f48) {
            return _0x207f48();
        },
        'WwLKD': function(_0x2ccac1, _0x4acf6a) {
            return _0x2ccac1 === _0x4acf6a;
        },
        'NskLS': 'mWTOG',
        'yWwur': function(_0x5d1d02, _0x364102) {
            return _0x5d1d02 === _0x364102;
        },
        'IaTvl': 'WIKen',
        'HLtnJ': 'SPpqI',
        'emMYC': function(_0x5accf9, _0x118c9f) {
            return _0x5accf9 < _0x118c9f;
        },
        'wtNFZ': '3|4|2|0|1',
        'hjvgr': function(_0x31ff80, _0x26eec7) {
            return _0x31ff80 === _0x26eec7;
        },
        'oBrOE': function(_0x4438cd, _0x346b16, _0x476ea2) {
            return _0x4438cd(_0x346b16, _0x476ea2);
        }
    };
    $['risk'] = ![];
    $['gameScore'] = 0x0;
    $['bean'] = 0x0;
    await _0x220d55['YduHt'](grantToken);
    await $['wait'](0x5dc);
    await getActCookie();
    await $['wait'](0x5dc);
    await _0x220d55['YduHt'](getActInfo);
    await $['wait'](0x5dc);
    await getMyPing();
    await $['wait'](0x5dc);
    await getUserInfo();
    await $['wait'](0x5dc);
    await getActContent(![], $['userShareCode']);
    await doTask(_0x220d55['IJaZG'], 'activityId=' + ACT_ID + '&pin=' + _0x220d55['PLuhB'](encodeURIComponent, $['secretPin']));
    if (!$['risk']) {
        await $['wait'](0x5dc);
        await _0x220d55['PLuhB'](getActContent, $['doJob']);
        await $['wait'](0x5dc);
        await _0x220d55['YduHt'](answer);
        await $['wait'](0x5dc);
        await _0x220d55['JnQnZ'](getActContent, ![]);
        await _0x220d55['Skmez'](draw);
    } else {
        if ($['isNode']()) {
            await notify['sendNotify']($['name'] + '运行完成', '京东账号' + $['index'] + ' ' + ($['nickName'] || $['UserName']) + '\n京东说‘本活动与你无缘，请关注其他活动。’');
        } else {
            if (_0x220d55['WwLKD']('qHfVU', _0x220d55['NskLS'])) {
                cookiesArr['push'](jdCookieNode[item]);
            } else {
                await $['msg']($['name'] + '运行完成', '京东说‘本活动与你无缘，请关注其他活动。’');
            }
        }
    }
    if ($['bean'] > 0x0) {
        if (_0x220d55['yWwur'](_0x220d55['IaTvl'], 'GbAZt')) {
            resolve(data);
        } else {
            message += '\n京东账号' + $['index'] + ' ' + ($['nickName'] || $['UserName']) + '\n    └获得' + $['bean'] + '京豆';
        }
    }
    if (helpAuthor) {
        if (_0x220d55['fslqL'](_0x220d55['HLtnJ'], _0x220d55['HLtnJ'])) {
            console['log']('' + JSON['stringify'](err));
        } else {
            function _0x61b87a() {
                var _0xf26cdb = {
                    'Ryweo': function(_0x1a4f8a, _0x1135b1) {
                        return _0x1a4f8a(_0x1135b1);
                    },
                    'mzJTz': function(_0x4f0c2e) {
                        return _0x220d55['YduHt'](_0x4f0c2e);
                    },
                    'nZwEm': 'VbfHd',
                    'lUPHS': function(_0x5adfea, _0x11d4cd) {
                        return _0x5adfea !== _0x11d4cd;
                    },
                    'nahGi': _0x220d55['qUTjF'],
                    'jWKvI': function(_0x4cdb5d, _0x44fb3d) {
                        return _0x220d55['pxQZB'](_0x4cdb5d, _0x44fb3d);
                    },
                    'PsUNa': _0x220d55['mqtms'],
                    'eMIEO': _0x220d55['jfyWC']
                };
                if (_0x220d55['fslqL'](_0x220d55['pEvZY'], _0x220d55['pEvZY'])) {
                    if (err) {
                        console['log']('' + JSON['stringify'](err));
                    } else {
                        data = JSON['parse'](data);
                        if (data['result']) {
                            $['secretPin'] = data['data']['secretPin'];
                            cookie = 'AUTH_C_USER=' + $['secretPin'] + ';' + cookie;
                        }
                    }
                } else {
                    return new Promise(_0x5d9a66 => {
                        var _0x1b014a = {
                            'elBoR': function(_0x3302f4) {
                                return _0xf26cdb['mzJTz'](_0x3302f4);
                            },
                            'ewvpv': _0xf26cdb['nZwEm'],
                            'bbWkZ': function(_0x43e0ae, _0x37efc8) {
                                return _0xf26cdb['lUPHS'](_0x43e0ae, _0x37efc8);
                            },
                            'gVEiu': 'qRJrF',
                            'rfBIk': _0xf26cdb['nahGi'],
                            'VbGBH': 'ZiNTp'
                        };
                        if (_0xf26cdb['jWKvI'](_0xf26cdb['PsUNa'], 'kcuHX')) {
                            _0xf26cdb['Ryweo'](_0x5d9a66, data);
                        } else {
                            $['get']({
                                'url': _0xf26cdb['eMIEO']
                            }, (_0x33adf3, _0x1eb41e, _0x4ba349) => {
                                try {
                                    if ('VbfHd' !== _0x1b014a['ewvpv']) {
                                        console['log']('在本地题库中找到了答案：' + tmp[0x0]['a']);
                                        options = tmp[0x0]['a'];
                                    } else {
                                        if (_0x4ba349) {
                                            if (_0x1b014a['bbWkZ'](_0x1b014a['gVEiu'], _0x1b014a['rfBIk'])) {
                                                $['zData'] = JSON['parse'](_0x4ba349);
                                            } else {
                                                $['shopId'] = _0x4ba349['data']['venderId'];
                                            }
                                        };
                                    }
                                } catch (_0x7a3fe7) {
                                    console['log'](_0x7a3fe7);
                                } finally {
                                    if (_0x1b014a['bbWkZ'](_0x1b014a['VbGBH'], 'sRGDi')) {
                                        _0x1b014a['elBoR'](_0x5d9a66);
                                    } else {
                                        _0x1b014a['elBoR'](_0x5d9a66);
                                    }
                                };
                            });
                        }
                    });
                }
            }

            function _0x4b8049(_0x188757, _0x2253ba) {
                var _0x13dd95 = {
                    'bNdob': function(_0x7a7176) {
                        return _0x7a7176();
                    },
                    'oSwXA': function(_0x520609, _0x4f48f4) {
                        return _0x520609 === _0x4f48f4;
                    },
                    'MnjHo': _0x220d55['BJsor']
                };
                let _0x385c5e = {
                    'url': 'https://api.m.jd.com/client.action',
                    'headers': {
                        'Host': _0x220d55['NOOxL'],
                        'Content-Type': _0x220d55['uLDJx'],
                        'Origin': _0x220d55['wNHHx'],
                        'Accept-Encoding': 'gzip, deflate, br',
                        'Cookie': cookie,
                        'Connection': _0x220d55['ppoOk'],
                        'Accept': _0x220d55['ZbleQ'],
                        'User-Agent': 'jdapp;iPhone;9.4.0;14.3;;network/wifi;ADID/;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone10,3;addressid/;supportBestPay/0;appBuild/167541;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
                        'Referer': 'https://h5.m.jd.com/babelDiy/Zeus/4ZK4ZpvoSreRB92RRo8bpJAQNoTq/index.html?serveId=wxe30973feca923229&actId=' + _0x188757 + '&way=0&lng=&lat=&sid=&un_area=',
                        'Accept-Language': 'zh-cn'
                    },
                    'body': 'functionId=cutPriceByUser&body={"activityId":"' + _0x188757 + '","userName":"","followShop":1,"shopId":' + _0x2253ba + ',"userPic":""}&client=wh5&clientVersion=1.0.0'
                };
                return new Promise(_0x292223 => {
                    var _0x175598 = {
                        'KejVS': 'zLAAz',
                        'GKTfx': function(_0x1d0f7, _0x24c1c9) {
                            return _0x1d0f7 === _0x24c1c9;
                        },
                        'WhaMl': 'DtdFE',
                        'RaKlG': function(_0x57fdcb) {
                            return _0x13dd95['bNdob'](_0x57fdcb);
                        }
                    };
                    if (_0x13dd95['oSwXA']('MOPoL', _0x13dd95['MnjHo'])) {
                        if (data) {
                            $['zData'] = JSON['parse'](data);
                        };
                    } else {
                        $['post'](_0x385c5e, (_0x4b8a73, _0x2559e7, _0x56830a) => {
                            if ('zLAAz' === _0x175598['KejVS']) {
                                if (_0x56830a) {
                                    if (_0x175598['GKTfx']('DtdFE', _0x175598['WhaMl'])) {
                                        $['zRes'] = JSON['parse'](_0x56830a);
                                        _0x175598['RaKlG'](_0x292223);
                                    } else {
                                        console['log']('' + JSON['stringify'](_0x4b8a73));
                                    }
                                };
                            } else {
                                $['tokenKey'] = _0x56830a['tokenKey'];
                                cookie = cookie + 'IsvToken=' + $['tokenKey'];
                            }
                        });
                    }
                });
            }

            function _0x5d809d(_0x56f70a, _0x260a8c) {
                let _0x3821ae = {
                    'url': _0x220d55['Lqfho'],
                    'headers': {
                        'Content-Type': _0x220d55['xtftp']
                    },
                    'body': JSON['stringify']({
                        'actID': _0x56f70a,
                        'actsID': _0x260a8c,
                        'done': 0x1
                    })
                };
                return new Promise(_0x237b23 => {
                    var _0xf0a48e = {
                        'TziQu': function(_0xe11d3a) {
                            return _0x220d55['YduHt'](_0xe11d3a);
                        }
                    };
                    $['post'](_0x3821ae, (_0xdb20ae, _0x181b53, _0x2eea9c) => {
                        _0xf0a48e['TziQu'](_0x237b23);
                    });
                });
            }
            await _0x220d55['Skmez'](_0x61b87a);
            if ($['zData']['data']['length'] !== 0x0) {
                for (let _0x24f5fa = 0x0; _0x220d55['emMYC'](_0x24f5fa, $['zData']['data']['length']); _0x24f5fa++) {
                    var _0x5f503d = _0x220d55['wtNFZ']['split']('|'),
                        _0x421a92 = 0x0;
                    while (!![]) {
                        switch (_0x5f503d[_0x421a92++]) {
                            case '0':
                                await $['wait'](0x5dc);
                                continue;
                            case '1':
                                if ($['Res'] && _0x220d55['hjvgr']($['Res']['status'], 0x4)) {
                                    await _0x220d55['oBrOE'](_0x5d809d, actID, actsID);
                                }
                                continue;
                            case '2':
                                await _0x220d55['oBrOE'](_0x4b8049, actID, actsID);
                                continue;
                            case '3':
                                actID = $['zData']['data'][_0x24f5fa]['actID'];
                                continue;
                            case '4':
                                actsID = $['zData']['data'][_0x24f5fa]['actsID'];
                                continue;
                        }
                        break;
                    }
                };
            };
        }
    };
}
async function draw() {
    var _0x365c5f = {
        'CfTPm': 'CookiesJD',
        'eJJnD': 'CookieJD',
        'esATM': function(_0x21505b, _0x1bd437) {
            return _0x21505b < _0x1bd437;
        },
        'CHMDQ': function(_0x4d6922, _0x40052a) {
            return _0x4d6922 === _0x40052a;
        },
        'cLJlx': function(_0x4e7057, _0x2a3032) {
            return _0x4e7057 !== _0x2a3032;
        },
        'vjLMy': function(_0x3ea5b2, _0x426460, _0x448c97) {
            return _0x3ea5b2(_0x426460, _0x448c97);
        },
        'rYlFs': 'dingzhi/change/able/startDraw'
    };
    for (let _0x2326f8 = 0x0; _0x365c5f['esATM'](_0x2326f8, $['cardList']['length']); _0x2326f8++) {
        const _0x591c60 = $['cardList'][_0x2326f8];
        if (_0x365c5f['CHMDQ'](_0x591c60['answer'], !![]) && _0x591c60['draw'] === ![]) {
            if (_0x365c5f['cLJlx']('MvfQe', 'MvfQe')) {
                let _0x2279be = $['getdata'](_0x365c5f['CfTPm']) || '[]';
                _0x2279be = JSON['parse'](_0x2279be);
                cookiesArr = _0x2279be['map'](_0x1bed36 => _0x1bed36['cookie']);
                cookiesArr['reverse']();
                cookiesArr['push'](...[$['getdata']('CookieJD2'), $['getdata'](_0x365c5f['eJJnD'])]);
                cookiesArr['reverse']();
                cookiesArr = cookiesArr['filter'](_0x52125f => !!_0x52125f);
            } else {
                console['log']('开始抽奖');
                await _0x365c5f['vjLMy'](doTask, _0x365c5f['rYlFs'], 'activityId=' + ACT_ID + '&actorUuid=' + $['shareCode'] + '&pin=' + encodeURIComponent($['secretPin']) + '&cardId=' + _0x591c60['uuid']);
                await $['wait'](0x3e8);
            }
        }
    }
}
async function answer() {
    var _0x18caee = {
        'CZSai': function(_0x39068d, _0x4337cc, _0x4dc735) {
            return _0x39068d(_0x4337cc, _0x4dc735);
        },
        'ARMYm': 'dingzhi/change/able/getHasCard',
        'XuLQw': 'YIvgw',
        'uOfQc': function(_0x48247f, _0x547a81) {
            return _0x48247f === _0x547a81;
        },
        'WtMfs': function(_0x24b5fc, _0x10f711) {
            return _0x24b5fc !== _0x10f711;
        },
        'gOwpD': 'pTfKY',
        'zJsQh': 'pQchc',
        'VLvnW': function(_0x5ac04d, _0x296eaf) {
            return _0x5ac04d !== _0x296eaf;
        },
        'qjePy': function(_0x2d09ab, _0x3b4f8c) {
            return _0x2d09ab < _0x3b4f8c;
        },
        'BGqPt': function(_0x58efb5, _0x2125e5) {
            return _0x58efb5 <= _0x2125e5;
        },
        'ModbU': 'HBAcs',
        'TYbiS': function(_0x14ffb1, _0x59c908) {
            return _0x14ffb1(_0x59c908);
        },
        'GhzUM': function(_0x157e4b, _0x221d0d, _0x4da02a) {
            return _0x157e4b(_0x221d0d, _0x4da02a);
        }
    };
    await _0x18caee['CZSai'](doTask, _0x18caee['ARMYm'], 'activityId=' + ACT_ID + '&actorUuid=' + $['shareCode'] + '&pin=' + encodeURIComponent($['secretPin']));
    let _0x244856 = [0x0, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8];
    let _0x5384b8 = [];
    for (let _0x22c667 = 0x0; _0x22c667 < $['cardList']['length']; _0x22c667++) {
        if (_0x18caee['XuLQw'] === 'YIvgw') {
            const _0x152e41 = $['cardList'][_0x22c667];
            if (_0x18caee['uOfQc'](_0x152e41['position'], 0x63)) {
                if (_0x18caee['WtMfs'](_0x18caee['gOwpD'], _0x18caee['zJsQh'])) {
                    _0x5384b8['push'](_0x152e41);
                } else {
                    data = JSON['parse'](data);
                    if (data['result']) {
                        $['secretPin'] = data['data']['secretPin'];
                        cookie = 'AUTH_C_USER=' + $['secretPin'] + ';' + cookie;
                    }
                }
            }
            if (_0x18caee['VLvnW'](_0x152e41['position'], 0x63)) {
                let _0x4fa378 = _0x244856['indexOf'](_0x152e41['position']);
                _0x244856['splice'](_0x4fa378, 0x1);
            }
        } else {
            if (err) {
                console['log']('' + JSON['stringify'](err));
                console['log']($['name'] + ' API请求失败，请检查网路重试');
            } else {
                data = JSON['parse'](data);
                console['log'](data['msg']);
            }
        }
    }
    if (_0x5384b8['length'] === 0x0) {
        console['log']('已经答对所有题目了。');
        return;
    }
    if (_0x18caee['qjePy'](_0x5384b8['length'], $['gameScore'])) {
        times = _0x5384b8['length'];
    } else {
        times = $['gameScore'];
    }
    for (let _0x1b7cb1 = 0x0; _0x18caee['BGqPt'](_0x1b7cb1, times); _0x1b7cb1++) {
        if (_0x18caee['ModbU'] !== 'GYPLG') {
            let _0x409062 = '';
            const _0x33d5fe = questionList['filter'](_0x1b1e02 => _0x1b1e02['q'] === _0x5384b8[_0x1b7cb1]['uuid']);
            if (_0x33d5fe && _0x33d5fe[0x0]) {
                console['log']('在本地题库中找到了答案：' + _0x33d5fe[0x0]['a']);
                _0x409062 = _0x33d5fe[0x0]['a'];
            }
            let _0x509406 = 'activityId=' + ACT_ID + '&actorUuid=' + $['shareCode'] + '&pin=' + _0x18caee['TYbiS'](encodeURIComponent, $['secretPin']) + '&uuid=' + _0x5384b8[_0x1b7cb1]['uuid'] + '&answer=' + _0x18caee['TYbiS'](encodeURIComponent, _0x409062) + '&position=' + _0x244856[_0x1b7cb1];
            await _0x18caee['GhzUM'](doTask, 'dingzhi/change/able/answer', _0x509406);
            await $['wait'](0x5dc);
        } else {
            console['log']('已经答对所有题目了。');
            return;
        }
    }
}
async function getActContent(_0x1685c6 = !![], _0x4e35af = '') {
    var _0x3b14ed = {
        'CqrTd': function(_0xbdc961, _0x52a9fb) {
            return _0xbdc961 === _0x52a9fb;
        },
        'crXHS': function(_0x172697, _0x5b2521) {
            return _0x172697 > _0x5b2521;
        },
        'mmXZF': 'Set-Cookie',
        'tQMpn': function(_0x42c603, _0x52b7bd) {
            return _0x42c603 === _0x52b7bd;
        },
        'nZSfg': function(_0x4343f6, _0x4b2c28, _0x29a69a) {
            return _0x4343f6(_0x4b2c28, _0x29a69a);
        },
        'NsAdm': 'toShop',
        'UdhLM': 'mainActive',
        'bSXOE': 'RawIY',
        'vFNIT': function(_0x3a89bc, _0x2794ed) {
            return _0x3a89bc(_0x2794ed);
        },
        'oNArI': function(_0x4f4553, _0x56b1e9) {
            return _0x4f4553 === _0x56b1e9;
        },
        'iKRAM': 'dingzhi/change/able/saveTask',
        'YNIed': function(_0x4d1a6b, _0x477056, _0x5d2d30) {
            return _0x4d1a6b(_0x477056, _0x5d2d30);
        },
        'PQuZO': function(_0x2617fa, _0x58ccfc) {
            return _0x2617fa === _0x58ccfc;
        },
        'eQnkA': 'sNBhg',
        'lOBvb': function(_0x3f5fc8, _0x31c011) {
            return _0x3f5fc8(_0x31c011);
        },
        'tykkG': function(_0x358a1a, _0x944e4d) {
            return _0x358a1a === _0x944e4d;
        },
        'MczHU': 'VAgud',
        'IRLaT': function(_0x2a0bba, _0x14a692, _0xcd0d74) {
            return _0x2a0bba(_0x14a692, _0xcd0d74);
        }
    };
    return new Promise(_0x598352 => {
        if (_0x3b14ed['tykkG'](_0x3b14ed['MczHU'], 'hXCdJ')) {
            data = JSON['parse'](data);
            if (_0x3b14ed['CqrTd'](data['code'], '0')) {
                $['token'] = data['token'];
            }
        } else {
            $['post'](_0x3b14ed['IRLaT'](taskPostUrl, 'dingzhi/change/able/activityContent', 'activityId=' + ACT_ID + '&pin=' + _0x3b14ed['lOBvb'](encodeURIComponent, $['secretPin']) + '&pinImg=' + $['pinImg'] + '&nick=' + $['nickName'] + '&cjyxPin=&cjhyPin=&shareUuid=' + _0x4e35af), async (_0x31197e, _0x131c24, _0x410569) => {
                var _0xfb8192 = {
                    'DVhsS': function(_0x440b30, _0xd60a52) {
                        return _0x3b14ed['crXHS'](_0x440b30, _0xd60a52);
                    },
                    'ctmoF': 'headers',
                    'gjIYJ': _0x3b14ed['mmXZF']
                };
                try {
                    if (_0x31197e) {
                        console['log']('' + JSON['stringify'](_0x31197e));
                    } else {
                        _0x410569 = JSON['parse'](_0x410569);
                        if (_0x3b14ed['tQMpn'](_0x410569['result'], ![])) {
                            $['risk'] = !![];
                            console['log']('京东说‘本活动与你无缘，请关注其他活动。’');
                            return;
                        }
                        $['cardScore'] = _0x410569['data']['cardScore'];
                        $['shareCode'] = _0x410569['data']['actorUuid'];
                        $['addSku'] = _0x410569['data']['addSku'];
                        $['mainActive'] = _0x410569['data']['mainActive'];
                        $['toShop'] = _0x410569['data']['toShop'];
                        if (_0x3b14ed['tQMpn'](_0x410569['data']['gameScore'], 0x9)) {
                            $['doJob'] = ![];
                            if (_0x410569['data']['drawOrNo'] === ![] && _0x410569['data']['canDrawBig'] === !![]) {
                                console['log']('开始抽取最终大奖。');
                                await _0x3b14ed['nZSfg'](doTask, 'dingzhi/change/able/startDrawBig', 'activityId=' + ACT_ID + '&actorUuid=' + $['shareCode'] + '&pin=' + escape($['secretPin']) + '&cardId=');
                            }
                        }
                        if (_0x1685c6) {
                            for (let _0x25c32f of [_0x3b14ed['NsAdm'], _0x3b14ed['UdhLM']]) {
                                if (_0x3b14ed['tQMpn']('RawIY', _0x3b14ed['bSXOE'])) {
                                    let _0x55ff96 = _0x410569['data'][_0x25c32f];
                                    for (let _0x16e297 of _0x55ff96['settings']) {
                                        let _0x18535a = 'activityId=' + ACT_ID + '&actorUuid=' + $['shareCode'] + '&pin=' + _0x3b14ed['vFNIT'](encodeURIComponent, $['secretPin']) + '&taskType=' + _0x16e297['type'] + '&taskValue=' + _0x16e297['value'];
                                        let _0x2b49c0 = 'venderId=' + _0x410569['data']['shopId'] + '&elementId=' + encodeURIComponent('店铺' + _0x16e297['value']) + '&pageId=' + ACT_ID + '&pin=' + _0x3b14ed['vFNIT'](encodeURIComponent, $['secretPin']);
                                        if (_0x3b14ed['oNArI'](_0x16e297['type'], 0xc) && _0x16e297['status'] === 0x0) {
                                            console['log']('浏览会场 - ' + _0x16e297['name']);
                                            await _0x3b14ed['nZSfg'](doTask, _0x3b14ed['iKRAM'], _0x18535a);
                                            await $['wait'](0x7d0);
                                            await _0x3b14ed['YNIed'](doTask, 'crm/pageVisit/insertCrmPageVisit', _0x2b49c0);
                                        } else if (_0x3b14ed['PQuZO'](_0x16e297['status'], 0x0)) {
                                            console['log']('浏览店铺 - ' + _0x16e297['name']);
                                            await doTask(_0x3b14ed['iKRAM'], _0x18535a);
                                            await $['wait'](0x7d0);
                                        }
                                    }
                                    await $['wait'](0x5dc);
                                } else {
                                    if (_0x410569) {
                                        _0x410569 = JSON['parse'](_0x410569);
                                        if (_0xfb8192['DVhsS'](_0x410569['data']['length'], 0x0)) {
                                            $['userShareCode'] = _0x410569['data'][0x0]['share_code'];
                                        } else {
                                            $['userShareCode'] = '';
                                        }
                                    }
                                }
                            }
                            await $['wait'](0x5dc);
                            await doTask(_0x3b14ed['iKRAM'], 'activityId=' + ACT_ID + '&actorUuid=' + $['shareCode'] + '&pin=' + _0x3b14ed['vFNIT'](encodeURIComponent, $['secretPin']) + '&taskType=' + $['addSku']['settings'][0x0]['type'] + '&taskValue=' + $['addSku']['settings'][0x0]['value']);
                        }
                    }
                } catch (_0x57152d) {
                    $['logErr'](_0x57152d, _0x131c24);
                } finally {
                    if (_0x3b14ed['eQnkA'] === _0x3b14ed['eQnkA']) {
                        _0x3b14ed['lOBvb'](_0x598352, _0x410569);
                    } else {
                        cookie = cookie + ';';
                        if ($['isNode']())
                            for (let _0x42308a of _0x131c24[_0xfb8192['ctmoF']]['set-cookie']) {
                                cookie = '' + cookie + _0x42308a['split'](';')[0x0] + ';';
                            } else {
                                for (let _0x556b00 of _0x131c24[_0xfb8192['ctmoF']][_0xfb8192['gjIYJ']]['split'](',')) {
                                    cookie = '' + cookie + _0x556b00['split'](';')[0x0] + ';';
                                }
                            }
                    }
                }
            });
        }
    });
}

function doTask(_0x401cde, _0x217bcd) {
    var _0x4c02a9 = {
        'gNyTE': function(_0x22ddaf, _0x4ff15e) {
            return _0x22ddaf === _0x4ff15e;
        },
        'VHrgm': 'jAPzq',
        'uRSoE': 'uQEYm',
        'aXkPe': 'headers',
        'OkauH': 'set-cookie',
        'EgxiY': 'gameScore',
        'HbVnh': 'uMXxf',
        'XzLLZ': 'right',
        'CkQwF': 'rarLt',
        'SrbOV': 'drawInfo',
        'AbSHX': function(_0x4483b0, _0x3e4c98) {
            return _0x4483b0 === _0x3e4c98;
        },
        'pGFas': 'pJEIO',
        'YffNX': 'GATXb',
        'RtTLa': '京东返回了一段空数据',
        'rnXsM': function(_0x459402, _0x18dffc) {
            return _0x459402 === _0x18dffc;
        }
    };
    return new Promise(_0x4db21f => {
        var _0x4284f2 = {
            'wTbmx': function(_0x4279e0, _0x2c6b2f) {
                return _0x4279e0 === _0x2c6b2f;
            },
            'iAaHd': function(_0x300a58) {
                return _0x300a58();
            },
            'dJZrg': 'bUaru',
            'MnVwq': function(_0x36afae, _0x5fd463) {
                return _0x4c02a9['gNyTE'](_0x36afae, _0x5fd463);
            },
            'LmXNM': _0x4c02a9['VHrgm'],
            'vhlCr': _0x4c02a9['uRSoE'],
            'bastV': _0x4c02a9['aXkPe'],
            'tiqbM': _0x4c02a9['OkauH'],
            'QTwZO': _0x4c02a9['EgxiY'],
            'JSGCw': function(_0x119eeb, _0x5b42e7) {
                return _0x119eeb !== _0x5b42e7;
            },
            'FHfBc': _0x4c02a9['HbVnh'],
            'nQCxb': 'AqsIi',
            'ruTeR': _0x4c02a9['XzLLZ'],
            'zfqLs': function(_0x58c7c3, _0x2b3363) {
                return _0x4c02a9['gNyTE'](_0x58c7c3, _0x2b3363);
            },
            'eKxEG': 'uKNtJ',
            'PzBce': _0x4c02a9['CkQwF'],
            'QQedK': _0x4c02a9['SrbOV'],
            'pcZfY': function(_0x542fec, _0x1782da) {
                return _0x4c02a9['AbSHX'](_0x542fec, _0x1782da);
            },
            'hYeAs': _0x4c02a9['pGFas'],
            'sUIGT': _0x4c02a9['YffNX'],
            'ATJiP': _0x4c02a9['RtTLa'],
            'iGhcJ': function(_0x4272eb, _0x37e3aa) {
                return _0x4c02a9['rnXsM'](_0x4272eb, _0x37e3aa);
            },
            'GFKUO': 'znfUo',
            'XVASz': function(_0x392118) {
                return _0x392118();
            }
        };
        $['post'](taskPostUrl(_0x401cde, _0x217bcd), (_0xd861d2, _0xcf761, _0x2c0476) => {
            var _0xfecda5 = {
                'CAlDR': function(_0x46cf37) {
                    return _0x4284f2['iAaHd'](_0x46cf37);
                }
            };
            try {
                if (_0x4284f2['dJZrg'] === _0x4284f2['dJZrg']) {
                    if (_0xd861d2) {
                        console['log']('' + JSON['stringify'](_0xd861d2));
                    } else {
                        if (_0x4284f2['MnVwq'](_0x4284f2['LmXNM'], _0x4284f2['vhlCr'])) {
                            message += '获得' + _0x2c0476['data']['drawInfo']['name'] + '\x0a';
                            console['log']('获得' + _0x2c0476['data']['drawInfo']['name'] + '\x0a');
                            if (_0x4284f2['wTbmx'](_0x2c0476['data']['drawInfoType'], 0x6)) {
                                $['bean'] += _0x2c0476['data']['drawInfo']['beanNum'];
                            } else {
                                message += '\n京东账号' + $['index'] + ' ' + ($['nickName'] || $['UserName']) + '\n    └获得' + _0x2c0476['data']['drawInfo']['name'];
                            }
                        } else {
                            if (_0x2c0476) {
                                _0x2c0476 = JSON['parse'](_0x2c0476);
                                if (_0xcf761[_0x4284f2['bastV']][_0x4284f2['tiqbM']]) {
                                    cookie = _0xcf761['headers'][_0x4284f2['tiqbM']]['join'](';') + '; ' + originCookie;
                                }
                                if (_0x4284f2['MnVwq'](_0x2c0476['result'], !![])) {
                                    if (_0x2c0476['data']['hasOwnProperty'](_0x4284f2['QTwZO'])) {
                                        if (_0x4284f2['JSGCw'](_0x4284f2['FHfBc'], 'uMXxf')) {
                                            console['log']('抽奖结果:' + _0x2c0476['errorMessage']);
                                        } else {
                                            $['gameScore'] += _0x2c0476['data']['gameScore'];
                                            if (_0x4284f2['JSGCw'](_0x2c0476['data']['gameScore'], 0x0)) {
                                                if (_0x4284f2['JSGCw']('AqsIi', _0x4284f2['nQCxb'])) {
                                                    _0x4db21f();
                                                } else {
                                                    console['log']('获得1次翻牌机会');
                                                }
                                            }
                                        }
                                    }
                                    if (_0x2c0476['data']['hasOwnProperty']('list')) {
                                        $['cardList'] = _0x2c0476['data']['list'];
                                    }
                                    if (_0x2c0476['data']['hasOwnProperty'](_0x4284f2['ruTeR'])) {
                                        if (_0x4284f2['zfqLs'](_0x4284f2['eKxEG'], _0x4284f2['eKxEG'])) {
                                            if (_0x4284f2['zfqLs'](_0x2c0476['data']['right'], !![])) {
                                                if (_0x4284f2['PzBce'] === 'rarLt') {
                                                    console['log']('回答正确。');
                                                } else {
                                                    $['token'] = _0x2c0476['token'];
                                                }
                                            }
                                        } else {
                                            _0xfecda5['CAlDR'](_0x4db21f);
                                        }
                                    }
                                    if (_0x2c0476['data']['hasOwnProperty'](_0x4284f2['QQedK'])) {
                                        if (_0x4284f2['pcZfY'](_0x2c0476['data']['drawOk'], !![])) {
                                            message += '获得' + _0x2c0476['data']['drawInfo']['name'] + '\x0a';
                                            console['log']('获得' + _0x2c0476['data']['drawInfo']['name'] + '\x0a');
                                            if (_0x4284f2['pcZfY'](_0x2c0476['data']['drawInfoType'], 0x6)) {
                                                $['bean'] += _0x2c0476['data']['drawInfo']['beanNum'];
                                            } else {
                                                if ('GwKgW' === _0x4284f2['hYeAs']) {
                                                    $['post'](opt, (_0x5d7f3a, _0x43ed63, _0x2d203a) => {
                                                        if (_0x2d203a) {
                                                            $['zRes'] = JSON['parse'](_0x2d203a);
                                                            _0x4db21f();
                                                        };
                                                    });
                                                } else {
                                                    message += '\x0a京东账号' + $['index'] + ' ' + ($['nickName'] || $['UserName']) + '\x0a    └获得' + _0x2c0476['data']['drawInfo']['name'];
                                                }
                                            }
                                        } else {
                                            if (_0x4284f2['JSGCw'](_0x4284f2['sUIGT'], 'GATXb')) {
                                                console['log'](_0x2c0476);
                                            } else {
                                                console['log']('抽奖结果:' + _0x2c0476['errorMessage']);
                                            }
                                        }
                                    }
                                } else {
                                    console['log'](_0x2c0476['errorMessage']);
                                }
                            } else {
                                $['log'](_0x4284f2['ATJiP']);
                            }
                        }
                    }
                } else {
                    console['log'](e, _0xcf761);
                }
            } catch (_0x179ec6) {
                console['log'](_0x179ec6, _0xcf761);
            } finally {
                if (_0x4284f2['iGhcJ'](_0x4284f2['GFKUO'], _0x4284f2['GFKUO'])) {
                    _0x4284f2['XVASz'](_0x4db21f);
                } else {
                    $['risk'] = !![];
                    console['log']('京东说‘本活动与你无缘，请关注其他活动。’');
                    return;
                }
            }
        });
    });
}

function getUserInfo() {
    var _0x394d1d = {
        'rWVVX': function(_0x47dc60) {
            return _0x47dc60();
        },
        'yvmpM': function(_0x209fca, _0x5ab8a5) {
            return _0x209fca === _0x5ab8a5;
        },
        'HckSZ': 'eZLSI',
        'hJWIk': 'DhPWX',
        'xclHz': function(_0x25b272, _0xfcd749) {
            return _0x25b272 === _0xfcd749;
        },
        'mmbOw': 'ywidr',
        'gYRKE': 'WXLbu',
        'jbTtq': function(_0x2c0a14, _0x3e2ed1) {
            return _0x2c0a14(_0x3e2ed1);
        }
    };
    return new Promise(_0x18e2b5 => {
        var _0x438eb2 = {
            'MIPHr': function(_0x44bfc9) {
                return _0x44bfc9();
            }
        };
        if (_0x394d1d['xclHz']('WXLbu', _0x394d1d['gYRKE'])) {
            let _0x46a0b1 = 'pin=' + _0x394d1d['jbTtq'](encodeURIComponent, $['secretPin']);
            $['post'](taskPostUrl('wxActionCommon/getUserInfo', _0x46a0b1), async (_0xbfe4b6, _0x144ac9, _0x432cc1) => {
                var _0x4d996a = {
                    'nrIud': function(_0x51f64a, _0x1ef72b) {
                        return _0x51f64a === _0x1ef72b;
                    },
                    'WpjHC': function(_0x85f60e) {
                        return _0x394d1d['rWVVX'](_0x85f60e);
                    }
                };
                try {
                    if (_0x394d1d['yvmpM'](_0x394d1d['HckSZ'], 'eZLSI')) {
                        if (_0xbfe4b6) {
                            if ('pBgTP' !== _0x394d1d['hJWIk']) {
                                console['log']('' + JSON['stringify'](_0xbfe4b6));
                            } else {
                                $['post'](opt, (_0x108bbe, _0x28ace3, _0x4ebad8) => {
                                    if (_0x4ebad8) {
                                        $['zRes'] = JSON['parse'](_0x4ebad8);
                                        _0x18e2b5();
                                    };
                                });
                            }
                        } else {
                            _0x432cc1 = JSON['parse'](_0x432cc1);
                            if (_0x432cc1['data']) {
                                console['log']('用户【' + _0x432cc1['data']['nickname'] + '】信息获取成功');
                                $['userId'] = _0x432cc1['data']['id'];
                                $['pinImg'] = _0x432cc1['data']['yunMidImageUrl'];
                                $['nickName'] = _0x432cc1['data']['nickame'];
                            } else {
                                console['log'](_0x432cc1);
                            }
                        }
                    } else {
                        if (_0xbfe4b6) {
                            console['log']('' + JSON['stringify'](_0xbfe4b6));
                        } else {
                            _0x432cc1 = JSON['parse'](_0x432cc1);
                            if (_0x4d996a['nrIud'](_0x432cc1['code'], '0')) {
                                $['tokenKey'] = _0x432cc1['tokenKey'];
                                cookie = cookie + 'IsvToken=' + $['tokenKey'];
                            }
                        }
                    }
                } catch (_0x226af8) {
                    if (_0x394d1d['xclHz'](_0x394d1d['mmbOw'], 'BDwNd')) {
                        _0x4d996a['WpjHC'](_0x18e2b5);
                    } else {
                        $['logErr'](_0x226af8, _0x144ac9);
                    }
                } finally {
                    _0x18e2b5(_0x432cc1);
                }
            });
        } else {
            if (data) {
                $['zRes'] = JSON['parse'](data);
                _0x438eb2['MIPHr'](_0x18e2b5);
            };
        }
    });
}

function getMyPing() {
    var _0x3e62fb = {
        'uDZZR': 'zOFzQ',
        'INKzh': function(_0x122853, _0x136a73) {
            return _0x122853 !== _0x136a73;
        },
        'vzGuw': 'Swgyp',
        'FXYYN': function(_0x140a57) {
            return _0x140a57();
        },
        'wVOQj': function(_0x8d00f5, _0x35081c, _0x48af71) {
            return _0x8d00f5(_0x35081c, _0x48af71);
        },
        'OPyHZ': 'customer/getMyPing'
    };
    return new Promise(_0x1d131d => {
        $['post'](_0x3e62fb['wVOQj'](taskPostUrl, _0x3e62fb['OPyHZ'], 'userId=' + $['shopId'] + '&token=' + $['token'] + '&fromType=APP'), async (_0x2ea6c5, _0x1da39c, _0x1a3588) => {
            try {
                if ('zOFzQ' === _0x3e62fb['uDZZR']) {
                    if (_0x2ea6c5) {
                        console['log']('' + JSON['stringify'](_0x2ea6c5));
                    } else {
                        _0x1a3588 = JSON['parse'](_0x1a3588);
                        if (_0x1a3588['result']) {
                            if (_0x3e62fb['INKzh']('UCpRn', 'OKUDQ')) {
                                $['secretPin'] = _0x1a3588['data']['secretPin'];
                                cookie = 'AUTH_C_USER=' + $['secretPin'] + ';' + cookie;
                            } else {
                                $['done']();
                            }
                        }
                    }
                } else {
                    for (let _0x17fc26 of _0x1da39c['headers']['Set-Cookie']['split'](',')) {
                        cookie = '' + cookie + _0x17fc26['split'](';')[0x0] + ';';
                    }
                }
            } catch (_0x2c1e7e) {
                if (_0x3e62fb['INKzh']('ykCKX', _0x3e62fb['vzGuw'])) {
                    $['logErr'](_0x2c1e7e, _0x1da39c);
                } else {
                    $['nickName'] = _0x1a3588['data']['userInfo']['baseInfo']['nickname'];
                }
            } finally {
                _0x3e62fb['FXYYN'](_0x1d131d);
            }
        });
    });
}

function getActInfo() {
    var _0x53c724 = {
        'RCUmB': function(_0x3956de, _0x499f22) {
            return _0x3956de !== _0x499f22;
        },
        'UbGSf': 'rGZTT',
        'qHNCv': 'GoXXe',
        'hoXJj': 'bslTi',
        'ZMFHc': function(_0x58cb90, _0x337253) {
            return _0x58cb90 === _0x337253;
        },
        'NxKgq': 'rJUnC',
        'TniHb': 'ItGyC',
        'bUpuM': 'vOrAR',
        'NTLVN': function(_0x14b613, _0x4170e2) {
            return _0x14b613(_0x4170e2);
        },
        'smYiR': function(_0x4deff3, _0x30397b, _0x4c9b5a) {
            return _0x4deff3(_0x30397b, _0x4c9b5a);
        },
        'jdvfO': 'dz/common/getSimpleActInfoVo'
    };
    return new Promise(_0x544080 => {
        var _0x5f1fa9 = {
            'TNNzw': '京东返回了空数据'
        };
        $['post'](_0x53c724['smYiR'](taskPostUrl, _0x53c724['jdvfO'], 'activityId=' + ACT_ID), async (_0x3cc6d5, _0x264723, _0x3b30e1) => {
            if (_0x53c724['RCUmB']('akJSq', _0x53c724['UbGSf'])) {
                try {
                    if (_0x53c724['qHNCv'] !== _0x53c724['hoXJj']) {
                        if (_0x3cc6d5) {
                            console['log']('' + JSON['stringify'](_0x3cc6d5));
                        } else {
                            if (_0x53c724['ZMFHc']('lCWmI', _0x53c724['NxKgq'])) {
                                $['log'](_0x5f1fa9['TNNzw']);
                            } else {
                                _0x3b30e1 = JSON['parse'](_0x3b30e1);
                                if (_0x3b30e1['result']) {
                                    $['shopId'] = _0x3b30e1['data']['venderId'];
                                }
                            }
                        }
                    } else {
                        _0x544080(_0x3b30e1);
                    }
                } catch (_0x438e50) {
                    if (_0x53c724['TniHb'] === _0x53c724['TniHb']) {
                        $['logErr'](_0x438e50, _0x264723);
                    } else {
                        _0x544080(_0x3b30e1);
                    }
                } finally {
                    if (_0x53c724['RCUmB'](_0x53c724['bUpuM'], _0x53c724['bUpuM'])) {
                        console['log']('用户【' + _0x3b30e1['data']['nickname'] + '】信息获取成功');
                        $['userId'] = _0x3b30e1['data']['id'];
                        $['pinImg'] = _0x3b30e1['data']['yunMidImageUrl'];
                        $['nickName'] = _0x3b30e1['data']['nickame'];
                    } else {
                        _0x53c724['NTLVN'](_0x544080, _0x3b30e1);
                    }
                }
            } else {
                $['zData'] = JSON['parse'](_0x3b30e1);
            }
        });
    });
}

function grantTokenKey() {
    var _0x29645f = {
        'cyIHQ': function(_0x19a0d5, _0x54f036) {
            return _0x19a0d5 === _0x54f036;
        },
        'EnCGP': function(_0x1b3609, _0x1785fa) {
            return _0x1b3609 !== _0x1785fa;
        },
        'cNEdP': 'yZrhO',
        'WtALl': 'Tqiuj',
        'mZIia': function(_0x316704, _0x79e771) {
            return _0x316704 === _0x79e771;
        },
        'qHNeB': 'aidYt',
        'osKQo': function(_0x1c6602) {
            return _0x1c6602();
        },
        'uBhhO': 'https://api.r2ray.com/jd.bargain/done',
        'sOJEe': function(_0x16362a, _0x3925aa) {
            return _0x16362a !== _0x3925aa;
        },
        'WLORS': 'xofpi',
        'EKwSI': 'https://api.m.jd.com/client.action?functionId=genToken',
        'fsrtD': 'api.m.jd.com',
        'UiTaR': 'application/x-www-form-urlencoded',
        'MsFof': 'keep-alive',
        'oBQMT': 'JD4iPhone/167538 (iPhone; iOS 14.3; Scale/3.00)'
    };
    let _0x845828 = {
        'url': _0x29645f['EKwSI'],
        'headers': {
            'Host': _0x29645f['fsrtD'],
            'Content-Type': _0x29645f['UiTaR'],
            'Accept': '*/*',
            'Connection': _0x29645f['MsFof'],
            'Cookie': cookie,
            'User-Agent': _0x29645f['oBQMT'],
            'Accept-Language': 'zh-Hans-CN;q=1',
            'Accept-Encoding': 'gzip, deflate, br'
        },
        'body': 'body=%7B%22to%22%3A%22https%3A%5C/%5C/lzdz-isv.isvjcloud.com%5C/dingzhi%5C/change%5C/able%5C/activity?activityId%3Ddz2102100001340211%22%2C%22action%22%3A%22to%22%7D&build=167568&client=apple&clientVersion=9.4.2&d_brand=apple&d_model=iPhone12%2C1&eid=eidIbfcc8121a3sct6%2BZJKZeTX6Kw9Ku2bFIdLevmpw4UcG7PaSe2el%2BDdi10Z8E1MMLqWhuF8xiJDdx1DqRQ44vLt8yni%2BSGFKrEaSQGbBBNtzjHZ1t&isBackground=N&joycious=44&lang=zh_CN&networkType=wifi&networklibtype=JDNetworkBaseAF&openudid=385f383ec315d8d01c64a09021df04ef9930c99d&osVersion=14.3&partner=apple&rfs=0000&scope=01&screen=828%2A1792&sign=96ced1a3158cb41dd1b286f706d91554&st=1614917734401&sv=120&uts=0f31TVRjBSsqndu4/jgUPz6uymy50MQJKfbYxxIwfaVeZuOo3SxuAtrc5hGhwSeyqATNq1sOtuG4KO02ef9RgDJ5p8y14ALu4Wwsq%2BoFpVWgl3hmjwodUgIrZ3wtfzwsoVm7DiN0g8qGHTtfd0Y5An3oFegg2F9Qb1oSKUr0%2BJSivRbuiLomybQjfanl9f2%2B7z7tj8MqOb6RjRBtQKtUvw%3D%3D&uuid=hjudwgohxzVu96krv/T6Hg%3D%3D&wifiBssid=unknown'
    };
    return new Promise(_0x3dc3f1 => {
        var _0x1cfea5 = {
            'dkqTS': function(_0x37b48a) {
                return _0x29645f['osKQo'](_0x37b48a);
            },
            'bLEVq': _0x29645f['uBhhO'],
            'UzRoN': 'application/json'
        };
        if (_0x29645f['sOJEe'](_0x29645f['WLORS'], _0x29645f['WLORS'])) {
            if (data) {
                $['zRes'] = JSON['parse'](data);
                _0x1cfea5['dkqTS'](_0x3dc3f1);
            };
        } else {
            $['post'](_0x845828, (_0xd4c6b8, _0x35ce88, _0x2617bd) => {
                var _0x179832 = {
                    'RLyTG': function(_0x46a518, _0x5b0518) {
                        return _0x29645f['cyIHQ'](_0x46a518, _0x5b0518);
                    },
                    'BiLse': 'userInfo'
                };
                try {
                    if (_0xd4c6b8) {
                        if (_0x29645f['EnCGP'](_0x29645f['cNEdP'], _0x29645f['WtALl'])) {
                            console['log']('' + JSON['stringify'](_0xd4c6b8));
                        } else {
                            let _0x2edf74 = {
                                'url': _0x1cfea5['bLEVq'],
                                'headers': {
                                    'Content-Type': _0x1cfea5['UzRoN']
                                },
                                'body': JSON['stringify']({
                                    'actID': actID,
                                    'actsID': actsID,
                                    'done': 0x1
                                })
                            };
                            return new Promise(_0x27922d => {
                                $['post'](_0x2edf74, (_0xedbd3c, _0x28b8ca, _0x290e24) => {
                                    _0x27922d();
                                });
                            });
                        }
                    } else {
                        _0x2617bd = JSON['parse'](_0x2617bd);
                        if (_0x2617bd['code'] === '0') {
                            $['tokenKey'] = _0x2617bd['tokenKey'];
                            cookie = cookie + 'IsvToken=' + $['tokenKey'];
                        }
                    }
                } catch (_0x185792) {
                    if (_0x29645f['mZIia'](_0x29645f['qHNeB'], 'erIcI')) {
                        _0x2617bd = JSON['parse'](_0x2617bd);
                        if (_0x179832['RLyTG'](_0x2617bd['retcode'], '1001')) {
                            $['isLogin'] = ![];
                            return;
                        }
                        if (_0x179832['RLyTG'](_0x2617bd['retcode'], '0') && _0x2617bd['data']['hasOwnProperty'](_0x179832['BiLse'])) {
                            $['nickName'] = _0x2617bd['data']['userInfo']['baseInfo']['nickname'];
                        }
                    } else {
                        console['log'](_0x185792, _0x35ce88);
                    }
                } finally {
                    _0x29645f['osKQo'](_0x3dc3f1);
                }
            });
        }
    });
}

function grantToken() {
    var _0x372c5d = {
        'ePoBZ': function(_0x852cfe, _0x113486) {
            return _0x852cfe !== _0x113486;
        },
        'LRMqn': 'HGLhV',
        'mRWHn': function(_0x5ef13f, _0x543c39) {
            return _0x5ef13f !== _0x543c39;
        },
        'PSXpm': 'CNEBx',
        'ixqVy': 'XhCBk',
        'YusSd': function(_0x289dfe, _0x1585da) {
            return _0x289dfe === _0x1585da;
        },
        'EwiJx': 'XtTHX',
        'wHbov': function(_0x4c4b67) {
            return _0x4c4b67();
        },
        'lwRzU': 'EMtBt',
        'YxaWu': 'https://api.m.jd.com/client.action?functionId=isvObfuscator',
        'cPaFR': '*/*',
        'nTyru': 'zh-Hans-CN;q=1',
        'EqaVc': 'gzip, deflate, br'
    };
    let _0x1f1e22 = {
        'url': _0x372c5d['YxaWu'],
        'headers': {
            'Host': 'api.m.jd.com',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': _0x372c5d['cPaFR'],
            'Connection': 'keep-alive',
            'Cookie': cookie,
            'User-Agent': 'JD4iPhone/167538 (iPhone; iOS 14.3; Scale/3.00)',
            'Accept-Language': _0x372c5d['nTyru'],
            'Accept-Encoding': _0x372c5d['EqaVc']
        },
        'body': 'body=%7B%22url%22%3A%22https%3A%5C%2F%5C%2Flzdz-isv.isvjcloud.com%22%2C%22id%22%3A%22%22%7D&build=167538&client=apple&clientVersion=9.3.8&openudid=b9b73293715e562295c0f0aac9d15035ea9b4889&sign=4570aecadf16cfa7aa934a7c611f520b&st=1612496167365&sv=100'
    };
    return new Promise(_0x4ba041 => {
        if (_0x372c5d['lwRzU'] === 'EMtBt') {
            $['post'](_0x1f1e22, (_0x169cf9, _0x53d243, _0x4e297b) => {
                if (_0x372c5d['ePoBZ'](_0x372c5d['LRMqn'], 'BJeyi')) {
                    try {
                        if (_0x372c5d['mRWHn'](_0x372c5d['PSXpm'], _0x372c5d['ixqVy'])) {
                            if (_0x169cf9) {
                                console['log']('' + JSON['stringify'](_0x169cf9));
                            } else {
                                _0x4e297b = JSON['parse'](_0x4e297b);
                                if (_0x372c5d['YusSd'](_0x4e297b['code'], '0')) {
                                    if (_0x372c5d['YusSd']('vgqgA', _0x372c5d['EwiJx'])) {
                                        message += '\x0a京东账号' + $['index'] + ' ' + ($['nickName'] || $['UserName']) + '\x0a    └获得' + _0x4e297b['data']['drawInfo']['name'];
                                    } else {
                                        $['token'] = _0x4e297b['token'];
                                    }
                                }
                            }
                        } else {
                            console['log'](_0x4e297b['errorMessage']);
                        }
                    } catch (_0x3162eb) {
                        console['log'](_0x3162eb);
                    } finally {
                        _0x372c5d['wHbov'](_0x4ba041);
                    }
                } else {
                    console['log']('' + JSON['stringify'](_0x169cf9));
                }
            });
        } else {
            $['zRes'] = JSON['parse'](data);
            _0x4ba041();
        }
    });
}

function getActCookie() {
    var _0x54ee83 = {
        'byoRL': function(_0x3ad196) {
            return _0x3ad196();
        },
        'Tpzef': function(_0x377e88, _0xe7ea73) {
            return _0x377e88 === _0xe7ea73;
        },
        'LCExP': 'ApLoZ',
        'cybKC': 'Set-Cookie',
        'bwiCN': function(_0x30fc1c, _0x1a408b) {
            return _0x30fc1c !== _0x1a408b;
        },
        'PSmCZ': 'aNmvd',
        'JcVfJ': 'JFCMb',
        'mEKoa': 'noXoF',
        'YuZvh': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'JyQAi': 'keep-alive',
        'CSxqC': 'jdapp;iPhone;9.3.8;14.3;network/wifi;ADID/;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone10,3;supportBestPay/0;appBuild/167538;jdSupportDarkMode/0;addressid/0;pv/1.12;apprpd/Babel_Native;ref/JDWebViewController;psq/11;ads/;psn/;jdv/0|;adk/;app_device/IOS;pap/JA2015_311210|9.3.8|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
        'NcLno': 'zh-Hans-CN;q=1',
        'vBKdH': 'gzip, deflate, br'
    };
    let _0x528a3f = {
        'url': 'https://lzdz-isv.isvjcloud.com/dingzhi/change/able/activity?activityId=' + ACT_ID,
        'headers': {
            'Content-Type': 'text/plain',
            'Accept': _0x54ee83['YuZvh'],
            'Connection': _0x54ee83['JyQAi'],
            'Cookie': '' + cookie,
            'User-Agent': _0x54ee83['CSxqC'],
            'Accept-Language': _0x54ee83['NcLno'],
            'Accept-Encoding': _0x54ee83['vBKdH']
        }
    };
    return new Promise(_0x45d9f0 => {
        if (_0x54ee83['Tpzef'](_0x54ee83['mEKoa'], _0x54ee83['mEKoa'])) {
            $['get'](_0x528a3f, (_0x1a7bf5, _0xa16aa, _0x5d7a1e) => {
                var _0x4fcc6a = {
                    'tQIVL': function(_0x1c497b) {
                        return _0x54ee83['byoRL'](_0x1c497b);
                    }
                };
                try {
                    if (_0x1a7bf5) {
                        if (_0x54ee83['Tpzef'](_0x54ee83['LCExP'], 'ApLoZ')) {
                            console['log']('' + JSON['stringify'](_0x1a7bf5));
                        } else {
                            if (_0x1a7bf5) {
                                console['log']('' + JSON['stringify'](_0x1a7bf5));
                            } else {
                                _0x5d7a1e = JSON['parse'](_0x5d7a1e);
                                if (_0x5d7a1e['result']) {
                                    $['shopId'] = _0x5d7a1e['data']['venderId'];
                                }
                            }
                        }
                    } else {
                        cookie = cookie + ';';
                        if ($['isNode']())
                            for (let _0x272617 of _0xa16aa['headers']['set-cookie']) {
                                cookie = '' + cookie + _0x272617['split'](';')[0x0] + ';';
                            } else {
                                for (let _0x56fe02 of _0xa16aa['headers'][_0x54ee83['cybKC']]['split'](',')) {
                                    if (_0x54ee83['bwiCN'](_0x54ee83['PSmCZ'], 'FtBNG')) {
                                        cookie = '' + cookie + _0x56fe02['split'](';')[0x0] + ';';
                                    } else {
                                        $['post'](_0x528a3f, (_0x248031, _0x830191, _0x5cbd3b) => {
                                            _0x4fcc6a['tQIVL'](_0x45d9f0);
                                        });
                                    }
                                }
                            }
                    }
                } catch (_0x31a147) {
                    if (_0x54ee83['bwiCN'](_0x54ee83['JcVfJ'], _0x54ee83['JcVfJ'])) {
                        console['log']('获得1次翻牌机会');
                    } else {
                        console['log'](_0x31a147);
                    }
                } finally {
                    _0x45d9f0();
                }
            });
        } else {
            _0x54ee83['byoRL'](_0x45d9f0);
        }
    });
}

function taskPostUrl(_0x5a87ff, _0x199627) {
    var _0x4393e1 = {
        'iXfpd': 'lzdz-isv.isvjcloud.com',
        'cuEkJ': 'application/json',
        'dRHTc': 'XMLHttpRequest',
        'CLCmI': 'zh-cn',
        'UsevX': 'https://lzdz-isv.isvjcloud.com',
        'MGZLf': 'keep-alive',
        'XYAZY': 'jdapp;iPhone;9.3.8;14.3;network/wifi;ADID/;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone10,3;supportBestPay/0;appBuild/167538;jdSupportDarkMode/0;addressid/0;pv/1.12;apprpd/Babel_Native;ref/JDWebViewController;psq/11;ads/;psn/;jdv/0|;adk/;app_device/IOS;pap/JA2015_311210|9.3.8|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1'
    };
    return {
        'url': 'https://lzdz-isv.isvjcloud.com/' + _0x5a87ff,
        'headers': {
            'Host': _0x4393e1['iXfpd'],
            'Accept': _0x4393e1['cuEkJ'],
            'X-Requested-With': _0x4393e1['dRHTc'],
            'Accept-Language': _0x4393e1['CLCmI'],
            'Accept-Encoding': 'gzip, deflate, br',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Origin': _0x4393e1['UsevX'],
            'Connection': _0x4393e1['MGZLf'],
            'Referer': 'https://lzdz-isv.isvjcloud.com/dingzhi/change/able/activity?activityId=' + ACT_ID,
            'Cookie': '' + cookie,
            'User-Agent': _0x4393e1['XYAZY']
        },
        'body': _0x199627
    };
}

function getShareCode() {
    var _0x690f1e = {
        'zZFhw': function(_0x227579, _0x392b35) {
            return _0x227579 === _0x392b35;
        },
        'HUwhf': 'TeEYj',
        'MxNrQ': function(_0x279860, _0x5f19bb) {
            return _0x279860 === _0x5f19bb;
        },
        'pUXXQ': 'PJdWf',
        'YqGKh': function(_0x30f5ba, _0x1a5b64) {
            return _0x30f5ba !== _0x1a5b64;
        },
        'QCZev': 'bGcvD',
        'ByvFu': 'FyTBH',
        'FssxB': 'oVJmO',
        'FfUsg': function(_0x5c9ebc, _0x282e80) {
            return _0x5c9ebc(_0x282e80);
        },
        'toMEE': function(_0x2efe9f, _0x48e860) {
            return _0x2efe9f === _0x48e860;
        }
    };
    return new Promise(_0xee1c68 => {
        var _0x1f9188 = {
            'Xaxwv': function(_0x5a4007, _0x123258) {
                return _0x690f1e['toMEE'](_0x5a4007, _0x123258);
            }
        };
        $['get']({
            'url': 'https://api.r2ray.com/jd.entertainment/index'
        }, (_0x49a7b9, _0x2d9599, _0xa67aff) => {
            try {
                if (_0x690f1e['zZFhw'](_0x690f1e['HUwhf'], 'TeEYj')) {
                    if (_0x49a7b9) {
                        if (_0x690f1e['MxNrQ'](_0x690f1e['pUXXQ'], _0x690f1e['pUXXQ'])) {
                            console['log']('' + JSON['stringify'](_0x49a7b9));
                        } else {
                            Object['keys'](jdCookieNode)['forEach'](_0x575ccc => {
                                cookiesArr['push'](jdCookieNode[_0x575ccc]);
                            });
                            if (process['env']['JD_DEBUG'] && _0x1f9188['Xaxwv'](process['env']['JD_DEBUG'], 'false')) console['log'] = () => {};
                        }
                    } else {
                        if (_0xa67aff) {
                            if (_0x690f1e['YqGKh']('bGcvD', _0x690f1e['QCZev'])) {
                                $['log']('', '❌ ' + $['name'] + ', 失败! 原因: ' + e + '!', '');
                            } else {
                                _0xa67aff = JSON['parse'](_0xa67aff);
                                if (_0xa67aff['data']['length'] > 0x0) {
                                    if (_0x690f1e['ByvFu'] !== _0x690f1e['FssxB']) {
                                        $['userShareCode'] = _0xa67aff['data'][0x0]['share_code'];
                                    } else {
                                        console['log'](e);
                                    }
                                } else {
                                    $['userShareCode'] = '';
                                }
                            }
                        }
                    }
                } else {
                    $['logErr'](_0x49a7b9);
                }
            } catch (_0x5d4f85) {
                $['logErr'](_0x5d4f85, _0x2d9599);
            } finally {
                _0x690f1e['FfUsg'](_0xee1c68, _0xa67aff);
            }
        });
    });
}

function submitShareCode(_0x554ea0) {
    var _0x53bc86 = {
        'BKZVy': 'set-cookie',
        'CNSNi': function(_0x1da394, _0x3fd7f6) {
            return _0x1da394 === _0x3fd7f6;
        },
        'mJZnG': 'Yqrca',
        'Inzmi': function(_0x4c6968, _0x44ebee) {
            return _0x4c6968 !== _0x44ebee;
        },
        'YEdkl': 'ldmJH',
        'oIqLY': 'vBLno',
        'MBRuC': function(_0x4c697f, _0x134dfa) {
            return _0x4c697f !== _0x134dfa;
        },
        'ZTvYQ': 'JxJXV',
        'nWADr': function(_0x445228, _0x3a4dea) {
            return _0x445228 === _0x3a4dea;
        },
        'BucJO': 'https://bean.m.jd.com/bean/signIndex.action',
        'PfTzo': 'application/json'
    };
    let _0x108014 = {
        'url': 'https://api.r2ray.com/jd.entertainment/update',
        'headers': {
            'Content-Type': _0x53bc86['PfTzo']
        },
        'body': JSON['stringify'](_0x554ea0)
    };
    return new Promise(async _0x460a1c => {
        var _0x12f85b = {
            'JhiIe': function(_0x2eec45, _0x293a4a) {
                return _0x2eec45 === _0x293a4a;
            },
            'wwTwN': '【提示】请先获取京东账号一cookie\x0a直接使用NobyDa的京东签到获取',
            'wgTPu': _0x53bc86['BucJO']
        };
        $['post'](_0x108014, (_0x150684, _0x511c0f, _0x2fd3d5) => {
            var _0x2c75b3 = {
                'QynhV': _0x53bc86['BKZVy']
            };
            try {
                if (_0x53bc86['CNSNi'](_0x53bc86['mJZnG'], _0x53bc86['mJZnG'])) {
                    if (_0x150684) {
                        if (_0x53bc86['Inzmi'](_0x53bc86['YEdkl'], _0x53bc86['oIqLY'])) {
                            console['log']('' + JSON['stringify'](_0x150684));
                            console['log']($['name'] + ' API请求失败，请检查网路重试');
                        } else {
                            if (_0x150684) {
                                console['log']('' + JSON['stringify'](_0x150684));
                            } else {
                                _0x2fd3d5 = JSON['parse'](_0x2fd3d5);
                                if (_0x12f85b['JhiIe'](_0x2fd3d5['code'], '0')) {
                                    $['token'] = _0x2fd3d5['token'];
                                }
                            }
                        }
                    } else {
                        if (_0x53bc86['MBRuC'](_0x53bc86['ZTvYQ'], _0x53bc86['ZTvYQ'])) {
                            $['msg']($['name'], _0x12f85b['wwTwN'], _0x12f85b['wgTPu'], {
                                'open-url': _0x12f85b['wgTPu']
                            });
                            return;
                        } else {
                            _0x2fd3d5 = JSON['parse'](_0x2fd3d5);
                            console['log'](_0x2fd3d5['msg']);
                        }
                    }
                } else {
                    _0x460a1c();
                }
            } catch (_0x10020f) {
                if (_0x53bc86['nWADr']('XPMyc', 'XPMyc')) {
                    $['logErr'](_0x10020f, _0x511c0f);
                } else {
                    cookie = _0x511c0f['headers'][_0x2c75b3['QynhV']]['join'](';') + '; ' + originCookie;
                }
            } finally {
                _0x460a1c(_0x2fd3d5);
            }
        });
    });
}

function checkCookie() {
    var _0x137dd4 = {
        'BLdda': function(_0x3e918d, _0x41940d) {
            return _0x3e918d !== _0x41940d;
        },
        'ejaBm': '1001',
        'mBRQy': 'kNhxe',
        'OkOLt': 'wnRBR',
        'FimgS': function(_0x55c289, _0x540806) {
            return _0x55c289 === _0x540806;
        },
        'TGXiE': 'zZgYn',
        'jXnFz': 'https://me-api.jd.com/user_new/info/GetJDUserInfoUnion',
        'ScQKA': '*/*',
        'heRxQ': 'keep-alive',
        'qHocI': 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.2 Mobile/15E148 Safari/604.1',
        'fasyi': 'zh-cn',
        'BoVQA': 'https://home.m.jd.com/myJd/newhome.action?sceneval=2&ufc=&',
        'FsuIF': 'gzip, deflate, br'
    };
    const _0x3aebac = {
        'url': _0x137dd4['jXnFz'],
        'headers': {
            'Host': 'me-api.jd.com',
            'Accept': _0x137dd4['ScQKA'],
            'Connection': _0x137dd4['heRxQ'],
            'Cookie': cookie,
            'User-Agent': _0x137dd4['qHocI'],
            'Accept-Language': _0x137dd4['fasyi'],
            'Referer': _0x137dd4['BoVQA'],
            'Accept-Encoding': _0x137dd4['FsuIF']
        }
    };
    return new Promise(_0x316cbe => {
        var _0x166aae = {
            'pYomF': '京东返回了一段空数据',
            'tdaUj': function(_0x219294, _0xc4da5a) {
                return _0x137dd4['BLdda'](_0x219294, _0xc4da5a);
            },
            'MPWrK': function(_0x5f4707, _0xa34bef) {
                return _0x5f4707 === _0xa34bef;
            },
            'pBcvv': 'tbGWz',
            'AIadp': _0x137dd4['ejaBm'],
            'XGjfe': function(_0x5caf89, _0x5bb8c8) {
                return _0x137dd4['BLdda'](_0x5caf89, _0x5bb8c8);
            },
            'PvHqU': _0x137dd4['mBRQy'],
            'JQjuI': _0x137dd4['OkOLt'],
            'iirby': function(_0x78b0e4, _0x3f449c) {
                return _0x137dd4['FimgS'](_0x78b0e4, _0x3f449c);
            },
            'BmRrF': _0x137dd4['TGXiE'],
            'oJuNa': function(_0x1fdd42) {
                return _0x1fdd42();
            }
        };
        $['get'](_0x3aebac, (_0x26ef53, _0x42707f, _0x3ba239) => {
            var _0xb7553c = {
                'EPZrf': function(_0x1ec9ff, _0x25e26a) {
                    return _0x1ec9ff === _0x25e26a;
                }
            };
            if (_0x166aae['MPWrK']('TpFrJ', _0x166aae['pBcvv'])) {
                $['log'](_0x166aae['pYomF']);
            } else {
                try {
                    if (_0x26ef53) {
                        $['logErr'](_0x26ef53);
                    } else {
                        if (_0x3ba239) {
                            _0x3ba239 = JSON['parse'](_0x3ba239);
                            if (_0x3ba239['retcode'] === _0x166aae['AIadp']) {
                                if (_0x166aae['XGjfe'](_0x166aae['PvHqU'], _0x166aae['JQjuI'])) {
                                    $['isLogin'] = ![];
                                    return;
                                } else {
                                    $['gameScore'] += _0x3ba239['data']['gameScore'];
                                    if (_0x166aae['tdaUj'](_0x3ba239['data']['gameScore'], 0x0)) {
                                        console['log']('获得1次翻牌机会');
                                    }
                                }
                            }
                            if (_0x166aae['iirby'](_0x3ba239['retcode'], '0') && _0x3ba239['data']['hasOwnProperty']('userInfo')) {
                                $['nickName'] = _0x3ba239['data']['userInfo']['baseInfo']['nickname'];
                            }
                        } else {
                            $['log']('京东返回了空数据');
                        }
                    }
                } catch (_0x29b519) {
                    if (_0x166aae['iirby'](_0x166aae['BmRrF'], _0x166aae['BmRrF'])) {
                        $['logErr'](_0x29b519);
                    } else {
                        if (_0xb7553c['EPZrf'](_0x3ba239['data']['right'], !![])) {
                            console['log']('回答正确。');
                        }
                    }
                } finally {
                    _0x166aae['oJuNa'](_0x316cbe);
                }
            }
        });
    });
};
_0xodH = 'jsjiami.com.v6'
// prettier-ignore
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
