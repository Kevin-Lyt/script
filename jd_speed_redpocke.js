/*
京东极速版红包
自动提现微信现金

活动时间：2021-3-8至2021-3-25
活动地址：https://prodev.m.jd.com/jdlite/active/31U4T6S4PbcK83HyLPioeCWrD63j/index.html
活动入口：京东极速版-领红包
已支持IOS双京东账号,Node.js支持N个京东账号
脚本兼容: QuantumultX, Surge, Loon, JSBox, Node.js
============Quantumultx===============
[task_local]
#京东极速版红包
0 0 * * * https://gitee.com/lxk0301/jd_scripts/raw/master/jd_speed_redpocke.js, tag=京东极速版红包, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/jd.png, enabled=true

================Loon==============
[Script]
cron "0 0 * * *" script-path=https://gitee.com/lxk0301/jd_scripts/raw/master/jd_speed_redpocke.js,tag=京东极速版红包

===============Surge=================
京东极速版红包 = type=cron,cronexp="0 0 * * *",wake-system=1,timeout=3600,script-path=https://gitee.com/lxk0301/jd_scripts/raw/master/jd_speed_redpocke.js

============小火箭=========
京东极速版红包 = type=cron,script-path=https://gitee.com/lxk0301/jd_scripts/raw/master/jd_speed_redpocke.js, cronexpr="0 0 * * *", timeout=3600, enable=true
*/

const $ = new Env('京东极速版红包');

const notify = $.isNode() ? require('./sendNotify') : '';
//Node.js用户请在jdCookie.js处填写京东ck;
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';


let cookiesArr = [], cookie = '', message;

/*
 *Progcessed By JSDec in 0.57s
 *JSDec - JSDec.js.org
 */
if ($['isNode']()) {
    Object['keys'](jdCookieNode)['forEach'](_0x1de508 => {
        cookiesArr['push'](jdCookieNode[_0x1de508]);
    });
    if (process['env']['JD_DEBUG'] && process['env']['JD_DEBUG'] === 'false') console['log'] = () => {};
} else {
    cookiesArr = [$['getdata']('CookieJD'), $['getdata']('CookieJD2'), ...jsonParse($['getdata']('CookiesJD') || '[]')['map'](_0x28de3a => _0x28de3a['cookie'])]['filter'](_0x40eef7 => !!_0x40eef7);
}!(async () => {
    var _0x3de713 = {
        'YuWax': function(_0x1d5588, _0x16e204) {
            return _0x1d5588(_0x16e204);
        },
        'CoNjq': 'api.m.jd.com',
        'dxjPU': '*/*',
        'ZzPQb': 'keep-alive',
        'WcQbc': './JS_USER_AGENTS',
        'KypYH': 'JSUA',
        'uueiw': '\'jdltapp;iPad;3.1.0;14.4;network/wifi;Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
        'cQlCz': 'zh-Hans-CN;q=1,en-CN;q=0.9',
        'jNkxg': 'gzip, deflate, br',
        'DTxls': 'application/x-www-form-urlencoded',
        'lJrqF': 'https://an.jd.com/babelDiy/Zeus/q1eB6WUB8oC4eH1BsCLWvQakVsX/index.html',
        'rmzky': '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取',
        'DgWsl': 'https://bean.m.jd.com/bean/signIndex.action',
        'Qlaab': function(_0x1e341c, _0xddf2c5) {
            return _0x1e341c < _0xddf2c5;
        },
        'TFbNW': function(_0x1f5408, _0x2567cb) {
            return _0x1f5408 !== _0x2567cb;
        },
        'AsnAx': 'TlTbz',
        'LVNtt': 'inwTu',
        'AXAkg': function(_0x390ea4, _0x134476) {
            return _0x390ea4(_0x134476);
        },
        'bCEXo': function(_0xea7ddb, _0x4aae7c) {
            return _0xea7ddb + _0x4aae7c;
        },
        'zZIss': function(_0x2d53a9) {
            return _0x2d53a9();
        }
    };
    if (!cookiesArr[0x0]) {
        $['msg']($['name'], _0x3de713['rmzky'], _0x3de713['DgWsl'], {
            'open-url': _0x3de713['DgWsl']
        });
        return;
    }
    for (let _0x3027f8 = 0x0; _0x3de713['Qlaab'](_0x3027f8, cookiesArr['length']); _0x3027f8++) {
        if (_0x3de713['TFbNW'](_0x3de713['AsnAx'], _0x3de713['LVNtt'])) {
            if (cookiesArr[_0x3027f8]) {
                console['log']('\n如提示活动火爆,可再执行一次尝试\n');
                cookie = cookiesArr[_0x3027f8];
                $['UserName'] = _0x3de713['AXAkg'](decodeURIComponent, cookie['match'](/pt_pin=(.+?);/) && cookie['match'](/pt_pin=(.+?);/)[0x1]);
                $['index'] = _0x3de713['bCEXo'](_0x3027f8, 0x1);
                $['isLogin'] = !![];
                $['nickName'] = '';
                message = '';
                await _0x3de713['zZIss'](TotalBean);
                console['log']('\n******开始【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']) + '*********\n');
                if (!$['isLogin']) {
                    $['msg']($['name'], '【提示】cookie已失效', '京东账号' + $['index'] + ' ' + ($['nickName'] || $['UserName']) + '\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action', {
                        'open-url': _0x3de713['DgWsl']
                    });
                    if ($['isNode']()) {
                        await notify['sendNotify']($['name'] + 'cookie已失效 - ' + $['UserName'], '京东账号' + $['index'] + ' ' + $['UserName'] + '\n请重新登录获取cookie');
                    }
                    continue;
                }
                await _0x3de713['zZIss'](jsRedPacket);
            }
        } else {
            return {
                'url': 'https://api.m.jd.com/',
                'body': 'appid=activities_platform&functionId=' + function_id + '&body=' + _0x3de713['YuWax'](escape, JSON['stringify'](body)) + '&t=' + +new Date(),
                'headers': {
                    'Cookie': cookie,
                    'Host': _0x3de713['CoNjq'],
                    'Accept': _0x3de713['dxjPU'],
                    'Connection': _0x3de713['ZzPQb'],
                    'user-agent': $['isNode']() ? process['env']['JS_USER_AGENT'] ? process['env']['JS_USER_AGENT'] : _0x3de713['YuWax'](require, _0x3de713['WcQbc'])['USER_AGENT'] : $['getdata'](_0x3de713['KypYH']) ? $['getdata'](_0x3de713['KypYH']) : _0x3de713['uueiw'],
                    'Accept-Language': _0x3de713['cQlCz'],
                    'Accept-Encoding': _0x3de713['jNkxg'],
                    'Content-Type': _0x3de713['DTxls'],
                    'referer': _0x3de713['lJrqF']
                }
            };
        }
    }
})()['catch'](_0xfd7a93 => {
    $['log']('', '❌ ' + $['name'] + ', 失败! 原因: ' + _0xfd7a93 + '!', '');
})['finally'](() => {
    $['done']();
});
async function jsRedPacket() {
    var _0x386e7b = {
        'uvUng': function(_0x27630b) {
            return _0x27630b();
        },
        'fyDNs': function(_0x42b092, _0x2b0a9c) {
            return _0x42b092 < _0x2b0a9c;
        }
    };
    try {
        await _0x386e7b['uvUng'](invite);
        for (let _0x5ef865 = 0x0; _0x386e7b['fyDNs'](_0x5ef865, 0x3); ++_0x5ef865) {
            await _0x386e7b['uvUng'](redPacket);
            await $['wait'](0x1f4);
        }
        await _0x386e7b['uvUng'](getPacketList);
        await _0x386e7b['uvUng'](showMsg);
    } catch (_0x3a1ef0) {
        $['logErr'](_0x3a1ef0);
    }
}

function showMsg() {
    var _0x332dde = {
        'QyBcj': function(_0x2f8799) {
            return _0x2f8799();
        }
    };
    return new Promise(_0x54ff62 => {
        $['msg']($['name'], '', '京东账号' + $['index'] + $['nickName'] + '\x0a' + message);
        _0x332dde['QyBcj'](_0x54ff62);
    });
}
async function redPacket() {
    var _0x4c17a9 = {
        'Mcjuk': function(_0x28f31f, _0x18d99b) {
            return _0x28f31f == _0x18d99b;
        },
        'YQevf': 'string',
        'jMTSC': '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie',
        'HAVzS': function(_0x1a5845, _0x549066) {
            return _0x1a5845(_0x549066);
        },
        'DMCPx': function(_0x10483a, _0x238add) {
            return _0x10483a === _0x238add;
        },
        'fCKSQ': function(_0x359af4, _0x70dc63) {
            return _0x359af4 !== _0x70dc63;
        },
        'OxjxB': '获得优惠券',
        'slEoJ': function(_0x2b8b2e, _0x44830b) {
            return _0x2b8b2e !== _0x44830b;
        },
        'ajznF': 'OWCJS',
        'vFrqx': 'YySpu',
        'TZDjb': 'Gzcas',
        'gRmGa': function(_0x568fe5, _0x45b8ab) {
            return _0x568fe5 === _0x45b8ab;
        },
        'GBPpN': 'RGZXJ',
        'cYlim': 'IVsUn',
        'wFAOc': function(_0x2d3338, _0x27edac) {
            return _0x2d3338 !== _0x27edac;
        },
        'twnaH': 'tHmpU',
        'epqvf': 'aNvLO',
        'ycHPk': function(_0x261663, _0x3dbec1) {
            return _0x261663 !== _0x3dbec1;
        },
        'UcnFX': 'BCjGk',
        'tWSpz': 'kBqdP',
        'iTOZW': 'MHKys',
        'KxumR': 'Zyeya',
        'AgxTv': 'IuhVW',
        'odtaa': function(_0x553aba, _0x400824) {
            return _0x553aba(_0x400824);
        },
        'ucCCO': 'api.m.jd.com',
        'mmoSv': '*/*',
        'PBTxR': 'keep-alive',
        'hZtya': './JS_USER_AGENTS',
        'aiViy': 'JSUA',
        'pKxcC': '\'jdltapp;iPad;3.1.0;14.4;network/wifi;Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
        'dAGwz': 'zh-Hans-CN;q=1,en-CN;q=0.9',
        'fRETJ': 'gzip, deflate, br',
        'WoRZt': 'application/x-www-form-urlencoded',
        'RuieD': 'https://an.jd.com/babelDiy/Zeus/q1eB6WUB8oC4eH1BsCLWvQakVsX/index.html',
        'hULMc': function(_0x36ed5a, _0x1774ae, _0x10c06f) {
            return _0x36ed5a(_0x1774ae, _0x10c06f);
        },
        'BTmkx': 'spring_reward_receive',
        'DXQyU': 'hJyuwiDvDEc5-jIeec4Iyg',
        'vcrWu': 'CKKfDuj5ere8P1EUy_lC0g'
    };
    return new Promise(_0x1662ce => {
        var _0x38ccf7 = {
            'HVBGT': function(_0x381367, _0x460bf1) {
                return _0x4c17a9['odtaa'](_0x381367, _0x460bf1);
            },
            'wmrao': _0x4c17a9['ucCCO'],
            'OKrrL': _0x4c17a9['mmoSv'],
            'wezRi': _0x4c17a9['PBTxR'],
            'mQnrl': function(_0x208270, _0x505e26) {
                return _0x4c17a9['odtaa'](_0x208270, _0x505e26);
            },
            'NuvLm': _0x4c17a9['hZtya'],
            'SwFeo': _0x4c17a9['aiViy'],
            'BgbbG': _0x4c17a9['pKxcC'],
            'xbgNg': _0x4c17a9['dAGwz'],
            'VpSLU': _0x4c17a9['fRETJ'],
            'PZhjh': _0x4c17a9['WoRZt'],
            'sHAIA': _0x4c17a9['RuieD']
        };
        $['get'](_0x4c17a9['hULMc'](taskGetUrl, _0x4c17a9['BTmkx'], {
            'inviter': _0x4c17a9['DXQyU'],
            'linkId': _0x4c17a9['vcrWu']
        }), async (_0x14c8c6, _0x21e397, _0x5cc9ce) => {
            var _0x4153a4 = {
                'ljKcg': function(_0x1cf06a, _0x59b706) {
                    return _0x4c17a9['Mcjuk'](_0x1cf06a, _0x59b706);
                },
                'jgVRh': _0x4c17a9['YQevf'],
                'JRGzX': _0x4c17a9['jMTSC'],
                'imnnR': function(_0x42354e, _0x41b540) {
                    return _0x4c17a9['HAVzS'](_0x42354e, _0x41b540);
                },
                'pYUDZ': function(_0x4e9cfe, _0x5594de) {
                    return _0x4c17a9['DMCPx'](_0x4e9cfe, _0x5594de);
                },
                'CLXnL': function(_0x573962, _0x386769) {
                    return _0x4c17a9['fCKSQ'](_0x573962, _0x386769);
                },
                'qwlkx': _0x4c17a9['OxjxB']
            };
            if (_0x4c17a9['slEoJ'](_0x4c17a9['ajznF'], _0x4c17a9['vFrqx'])) {
                try {
                    if (_0x4c17a9['slEoJ'](_0x4c17a9['TZDjb'], _0x4c17a9['TZDjb'])) {
                        console['log']('' + JSON['stringify'](_0x14c8c6));
                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                    } else {
                        if (_0x14c8c6) {
                            if (_0x4c17a9['gRmGa'](_0x4c17a9['GBPpN'], _0x4c17a9['cYlim'])) {
                                if (_0x4153a4['ljKcg'](typeof str, _0x4153a4['jgVRh'])) {
                                    try {
                                        return JSON['parse'](str);
                                    } catch (_0x3af41b) {
                                        console['log'](_0x3af41b);
                                        $['msg']($['name'], '', _0x4153a4['JRGzX']);
                                        return [];
                                    }
                                }
                            } else {
                                console['log']('' + JSON['stringify'](_0x14c8c6));
                                console['log']($['name'] + ' API请求失败，请检查网路重试');
                            }
                        } else {
                            if (_0x4c17a9['HAVzS'](safeGet, _0x5cc9ce)) {
                                if (_0x4c17a9['wFAOc'](_0x4c17a9['twnaH'], _0x4c17a9['epqvf'])) {
                                    _0x5cc9ce = JSON['parse'](_0x5cc9ce);
                                    if (_0x4c17a9['gRmGa'](_0x5cc9ce['code'], 0x0)) {
                                        if (_0x4c17a9['ycHPk'](_0x5cc9ce['data']['received']['prizeType'], 0x1)) {
                                            message += '获得' + _0x5cc9ce['data']['received']['prizeDesc'] + '\x0a';
                                            console['log']('获得' + _0x5cc9ce['data']['received']['prizeDesc']);
                                        } else {
                                            if (_0x4c17a9['gRmGa'](_0x4c17a9['UcnFX'], _0x4c17a9['tWSpz'])) {
                                                if (_0x4153a4['imnnR'](safeGet, _0x5cc9ce)) {
                                                    _0x5cc9ce = JSON['parse'](_0x5cc9ce);
                                                    if (_0x4153a4['pYUDZ'](_0x5cc9ce['code'], 0x0)) {
                                                        console['log']('提现成功！');
                                                    } else {
                                                        console['log'](_0x5cc9ce['errMsg']);
                                                    }
                                                }
                                            } else {
                                                console['log'](_0x4c17a9['OxjxB']);
                                            }
                                        }
                                    } else {
                                        console['log'](_0x5cc9ce['errMsg']);
                                    }
                                } else {
                                    return {
                                        'url': 'https://api.m.jd.com/?appid=activities_platform&functionId=' + function_id + '&body=' + _0x38ccf7['HVBGT'](escape, JSON['stringify'](body)) + '&t=' + +new Date(),
                                        'headers': {
                                            'Cookie': cookie,
                                            'Host': _0x38ccf7['wmrao'],
                                            'Accept': _0x38ccf7['OKrrL'],
                                            'Connection': _0x38ccf7['wezRi'],
                                            'user-agent': $['isNode']() ? process['env']['JS_USER_AGENT'] ? process['env']['JS_USER_AGENT'] : _0x38ccf7['mQnrl'](require, _0x38ccf7['NuvLm'])['USER_AGENT'] : $['getdata'](_0x38ccf7['SwFeo']) ? $['getdata'](_0x38ccf7['SwFeo']) : _0x38ccf7['BgbbG'],
                                            'Accept-Language': _0x38ccf7['xbgNg'],
                                            'Accept-Encoding': _0x38ccf7['VpSLU'],
                                            'Content-Type': _0x38ccf7['PZhjh'],
                                            'referer': _0x38ccf7['sHAIA']
                                        }
                                    };
                                }
                            }
                        }
                    }
                } catch (_0x2d1b23) {
                    if (_0x4c17a9['ycHPk'](_0x4c17a9['iTOZW'], _0x4c17a9['KxumR'])) {
                        $['logErr'](_0x2d1b23, _0x21e397);
                    } else {
                        if (_0x4153a4['CLXnL'](_0x5cc9ce['data']['received']['prizeType'], 0x1)) {
                            message += '获得' + _0x5cc9ce['data']['received']['prizeDesc'] + '\x0a';
                            console['log']('获得' + _0x5cc9ce['data']['received']['prizeDesc']);
                        } else {
                            console['log'](_0x4153a4['qwlkx']);
                        }
                    }
                } finally {
                    if (_0x4c17a9['gRmGa'](_0x4c17a9['AgxTv'], _0x4c17a9['AgxTv'])) {
                        _0x4c17a9['HAVzS'](_0x1662ce, _0x5cc9ce);
                    } else {
                        return JSON['parse'](str);
                    }
                }
            } else {
                console['log']('' + JSON['stringify'](_0x14c8c6));
                console['log']($['name'] + ' API请求失败，请检查网路重试');
            }
        });
    });
}

function getPacketList() {
    var _0x24cc28 = {
        'LjDSD': '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取',
        'YMwBt': 'https://bean.m.jd.com/bean/signIndex.action',
        'Gxjpp': 'base',
        'QIxwI': function(_0x1a44f8, _0x3d0c76) {
            return _0x1a44f8 === _0x3d0c76;
        },
        'dWckD': 'EheST',
        'EGzHf': 'IZYWE',
        'wXDbd': function(_0x24c68c, _0x58ce96) {
            return _0x24c68c !== _0x58ce96;
        },
        'xPOKw': 'nuMyG',
        'phBVv': 'JfuAk',
        'sjaAg': function(_0x3803cf, _0x29dc35) {
            return _0x3803cf(_0x29dc35);
        },
        'mkktJ': function(_0x4061d5, _0x35f1ac) {
            return _0x4061d5 === _0x35f1ac;
        },
        'WSFKH': function(_0x86e0d5, _0x2b642f) {
            return _0x86e0d5 === _0x2b642f;
        },
        'cUhrI': 'eTyXp',
        'xshfr': 'iYyPU',
        'hYuZy': function(_0x329cbc, _0x557fc6, _0x42a30d, _0x40c964, _0x12e1eb) {
            return _0x329cbc(_0x557fc6, _0x42a30d, _0x40c964, _0x12e1eb);
        },
        'xIfLs': 'mwHAx',
        'Qrilk': function(_0x3048e1, _0x4cd915) {
            return _0x3048e1(_0x4cd915);
        },
        'PmfrN': function(_0x568d12, _0x4156b1) {
            return _0x568d12 == _0x4156b1;
        },
        'mAtlT': 'object',
        'eZOhM': function(_0x5e95cd) {
            return _0x5e95cd();
        },
        'cYaJk': function(_0x2dd46d, _0x4fc56d) {
            return _0x2dd46d !== _0x4fc56d;
        },
        'YtrVt': 'NIxzt',
        'mYqxK': 'Knlwc',
        'qIjss': function(_0x19b84a, _0xead7e0, _0x24b41a) {
            return _0x19b84a(_0xead7e0, _0x24b41a);
        },
        'YfdfZ': 'spring_reward_list',
        'teCSN': 'CKKfDuj5ere8P1EUy_lC0g'
    };
    return new Promise(_0x4cf2d7 => {
        var _0x29c938 = {
            'HzYWE': function(_0x39bb3a, _0x3ef9bf) {
                return _0x24cc28['PmfrN'](_0x39bb3a, _0x3ef9bf);
            },
            'VYtpA': _0x24cc28['mAtlT'],
            'lhrpt': function(_0x3fd99e) {
                return _0x24cc28['eZOhM'](_0x3fd99e);
            }
        };
        if (_0x24cc28['cYaJk'](_0x24cc28['YtrVt'], _0x24cc28['mYqxK'])) {
            $['get'](_0x24cc28['qIjss'](taskGetUrl, _0x24cc28['YfdfZ'], {
                'pageNum': 0x1,
                'pageSize': 0x64,
                'linkId': _0x24cc28['teCSN'],
                'inviter': ''
            }), async (_0x3148ea, _0x4b0975, _0x415979) => {
                var _0x29e534 = {
                    'nPTNR': _0x24cc28['LjDSD'],
                    'Sxkkb': _0x24cc28['YMwBt'],
                    'RDzDz': _0x24cc28['Gxjpp']
                };
                try {
                    if (_0x3148ea) {
                        if (_0x24cc28['QIxwI'](_0x24cc28['dWckD'], _0x24cc28['EGzHf'])) {
                            $['isLogin'] = ![];
                            return;
                        } else {
                            console['log']('' + JSON['stringify'](_0x3148ea));
                            console['log']($['name'] + ' API请求失败，请检查网路重试');
                        }
                    } else {
                        if (_0x24cc28['wXDbd'](_0x24cc28['xPOKw'], _0x24cc28['phBVv'])) {
                            if (_0x24cc28['sjaAg'](safeGet, _0x415979)) {
                                _0x415979 = JSON['parse'](_0x415979);
                                if (_0x24cc28['mkktJ'](_0x415979['code'], 0x0)) {
                                    for (let _0x1dd609 of _0x415979['data']['items']['filter'](_0x269399 => _0x269399['prizeType'] === 0x4)) {
                                        if (_0x24cc28['WSFKH'](_0x1dd609['state'], 0x0)) {
                                            if (_0x24cc28['wXDbd'](_0x24cc28['cUhrI'], _0x24cc28['xshfr'])) {
                                                console['log']('去提现' + _0x1dd609['amount'] + '微信现金');
                                                message += '提现' + _0x1dd609['amount'] + '微信现金\n';
                                                await _0x24cc28['hYuZy'](cashOut, _0x1dd609['id'], _0x1dd609['poolBaseId'], _0x1dd609['prizeGroupId'], _0x1dd609['prizeBaseId']);
                                            } else {
                                                if (_0x29c938['HzYWE'](typeof JSON['parse'](_0x415979), _0x29c938['VYtpA'])) {
                                                    return !![];
                                                }
                                            }
                                        }
                                    }
                                } else {
                                    console['log'](_0x415979['errMsg']);
                                }
                            }
                        } else {
                            $['msg']($['name'], _0x29e534['nPTNR'], _0x29e534['Sxkkb'], {
                                'open-url': _0x29e534['Sxkkb']
                            });
                            return;
                        }
                    }
                } catch (_0x275118) {
                    $['logErr'](_0x275118, _0x4b0975);
                } finally {
                    if (_0x24cc28['WSFKH'](_0x24cc28['xIfLs'], _0x24cc28['xIfLs'])) {
                        _0x24cc28['Qrilk'](_0x4cf2d7, _0x415979);
                    } else {
                        $['nickName'] = _0x415979[_0x29e534['RDzDz']] && _0x415979[_0x29e534['RDzDz']]['nickname'] || $['UserName'];
                    }
                }
            });
        } else {
            _0x29c938['lhrpt'](_0x4cf2d7);
        }
    });
}

function cashOut(_0x403e3b, _0x4c4acc, _0x5a87b3, _0x11dcd8) {
    var _0x3a370f = {
        'SOLje': 'QjbG7npj44R73JIjks18BQ',
        'LQfFE': 'cm56tNtI6Wp-BMwsuR6FyXjHnoIMIapaw7Ql0pR0zus',
        'YdhFK': 'QjbG7npj44R73JIjks18BQ',
        'IDJwI': 'cm56tNtI6Wp-BMwsuR6FyXjHnoIMIapaw7Ql0pR0zus',
        'nhRKi': 'QjbG7npj44R73JIjks18BQ',
        'kTVIc': 'cm56tNtI6Wp-BMwsuR6FyXjHnoIMIapaw7Ql0pR0zus',
        'AeGqB': function(_0x4c658a, _0x1ccdb6) {
            return _0x4c658a * _0x1ccdb6;
        },
        'DshLo': 'api.m.jd.com',
        'EgBOE': 'application/json, text/plain, */*',
        'KlfOO': 'application/x-www-form-urlencoded',
        'hSUpX': 'https://invite-reward.jd.com',
        'saMJS': 'zh-cn',
        'OEczu': function(_0x2f0203, _0x124d42) {
            return _0x2f0203(_0x124d42);
        },
        'EeynU': './JS_USER_AGENTS',
        'csoYz': 'JSUA',
        'PisGa': '\'jdltapp;iPad;3.1.0;14.4;network/wifi;Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
        'eNlXe': 'https://invite-reward.jd.com/',
        'wOfMP': function(_0x8d9569, _0x33de65) {
            return _0x8d9569 === _0x33de65;
        },
        'jIrZe': 'pUyEe',
        'eWCNn': 'cdiuI',
        'ldBoB': function(_0x410be1, _0x23f7e0) {
            return _0x410be1(_0x23f7e0);
        },
        'hOWoq': function(_0x903b0b, _0x21c5f9) {
            return _0x903b0b === _0x21c5f9;
        },
        'MKjwJ': 'uGsWC',
        'UlUhH': function(_0x57e619, _0x3834bb, _0xfc90) {
            return _0x57e619(_0x3834bb, _0xfc90);
        },
        'IFSKD': 'apCashWithDraw',
        'BtSOd': 'SPRING_FESTIVAL_RED_ENVELOPE',
        'NrHoz': 'CKKfDuj5ere8P1EUy_lC0g'
    };
    let _0x1accf6 = {
        'businessSource': _0x3a370f['BtSOd'],
        'base': {
            'id': _0x403e3b,
            'business': '',
            'poolBaseId': _0x4c4acc,
            'prizeGroupId': _0x5a87b3,
            'prizeBaseId': _0x11dcd8,
            'prizeType': 0x4
        },
        'linkId': _0x3a370f['NrHoz'],
        'inviter': ''
    };
    return new Promise(_0xe4bb0 => {
        var _0x21ebf5 = {
            'NlrAc': _0x3a370f['SOLje'],
            'Lpbht': _0x3a370f['LQfFE'],
            'BrKMb': _0x3a370f['YdhFK'],
            'QxfWs': _0x3a370f['IDJwI'],
            'CMGjC': _0x3a370f['nhRKi'],
            'RzDxp': _0x3a370f['kTVIc'],
            'WAzNi': function(_0x1c89d1, _0x442a88) {
                return _0x3a370f['AeGqB'](_0x1c89d1, _0x442a88);
            },
            'JKjir': _0x3a370f['DshLo'],
            'nPhLX': _0x3a370f['EgBOE'],
            'JnGoc': _0x3a370f['KlfOO'],
            'QihVA': _0x3a370f['hSUpX'],
            'yeoAX': _0x3a370f['saMJS'],
            'GaECY': function(_0x52a30a, _0x162d0e) {
                return _0x3a370f['OEczu'](_0x52a30a, _0x162d0e);
            },
            'zIhTY': _0x3a370f['EeynU'],
            'urmUu': _0x3a370f['csoYz'],
            'qCAat': _0x3a370f['PisGa'],
            'aRREo': _0x3a370f['eNlXe'],
            'PlsNF': function(_0x6fbb12, _0x1cb8d2) {
                return _0x3a370f['wOfMP'](_0x6fbb12, _0x1cb8d2);
            },
            'XrwtB': _0x3a370f['jIrZe'],
            'IMFic': _0x3a370f['eWCNn'],
            'nAiSt': function(_0x18f904, _0x3a7242) {
                return _0x3a370f['ldBoB'](_0x18f904, _0x3a7242);
            },
            'sADRg': function(_0x1d9958, _0x4190d5) {
                return _0x3a370f['hOWoq'](_0x1d9958, _0x4190d5);
            },
            'DvERo': _0x3a370f['MKjwJ']
        };
        $['post'](_0x3a370f['UlUhH'](taskPostUrl, _0x3a370f['IFSKD'], _0x1accf6), async (_0x1c85c7, _0x82051d, _0x4c7365) => {
            var _0x24b526 = {
                'VKtGu': function(_0x750ce4, _0x15128c) {
                    return _0x21ebf5['GaECY'](_0x750ce4, _0x15128c);
                }
            };
            try {
                if (_0x1c85c7) {
                    console['log']('' + JSON['stringify'](_0x1c85c7));
                    console['log']($['name'] + ' API请求失败，请检查网路重试');
                } else {
                    if (_0x21ebf5['PlsNF'](_0x21ebf5['XrwtB'], _0x21ebf5['IMFic'])) {
                        let _0x3372bb = +new Date();
                        let _0x2dca62 = [_0x21ebf5['NlrAc'], _0x21ebf5['Lpbht'], _0x21ebf5['BrKMb'], _0x21ebf5['QxfWs'], _0x21ebf5['CMGjC'], _0x21ebf5['RzDxp']][Math['floor'](_0x21ebf5['WAzNi'](Math['random'](), 0x6))];
                        var _0x308c28 = {
                            'Host': _0x21ebf5['JKjir'],
                            'accept': _0x21ebf5['nPhLX'],
                            'content-type': _0x21ebf5['JnGoc'],
                            'origin': _0x21ebf5['QihVA'],
                            'accept-language': _0x21ebf5['yeoAX'],
                            'user-agent': $['isNode']() ? process['env']['JS_USER_AGENT'] ? process['env']['JS_USER_AGENT'] : _0x21ebf5['GaECY'](require, _0x21ebf5['zIhTY'])['USER_AGENT'] : $['getdata'](_0x21ebf5['urmUu']) ? $['getdata'](_0x21ebf5['urmUu']) : _0x21ebf5['qCAat'],
                            'referer': _0x21ebf5['aRREo'],
                            'Cookie': cookie
                        };
                        var _0x4fae24 = 'functionId=InviteFriendApiService&body={"method":"attendInviteActivity","data":{"inviterPin":"' + _0x21ebf5['GaECY'](escape, _0x2dca62) + '","channel":1,"token":"","frontendInitStatus":""}}&referer=-1&eid=eidIf3dd8121b7sdmiBLGdxRR46OlWyh62kFAZogTJFnYqqRkwgr63%2BdGmMlcv7EQJ5v0HBic81xHXzXLwKM6fh3i963zIa7Ym2v5ehnwo2B7uDN92Q0&aid=&client=ios&clientVersion=14.4&networkType=wifi&fp=-1&appid=market-task-h5&_t=' + _0x3372bb;
                        var _0x313110 = {
                            'url': 'https://api.m.jd.com/?t=' + +new Date(),
                            'headers': _0x308c28,
                            'body': _0x4fae24
                        };
                        $['post'](_0x313110, (_0x5e767b, _0x58404d, _0x41f007) => {});
                    } else {
                        if (_0x21ebf5['nAiSt'](safeGet, _0x4c7365)) {
                            _0x4c7365 = JSON['parse'](_0x4c7365);
                            if (_0x21ebf5['sADRg'](_0x4c7365['code'], 0x0)) {
                                console['log']('提现成功！');
                            } else {
                                console['log'](_0x4c7365['errMsg']);
                            }
                        }
                    }
                }
            } catch (_0x2a51ac) {
                $['logErr'](_0x2a51ac, _0x82051d);
            } finally {
                if (_0x21ebf5['sADRg'](_0x21ebf5['DvERo'], _0x21ebf5['DvERo'])) {
                    _0x21ebf5['nAiSt'](_0xe4bb0, _0x4c7365);
                } else {
                    _0x24b526['VKtGu'](_0xe4bb0, _0x4c7365);
                }
            }
        });
    });
}

function invite() {
    var _0x3bf0b6 = {
        'cKyjJ': 'QjbG7npj44R73JIjks18BQ',
        'nAvgu': 'cm56tNtI6Wp-BMwsuR6FyXjHnoIMIapaw7Ql0pR0zus',
        'OYbMX': 'QjbG7npj44R73JIjks18BQ',
        'nYYCf': 'cm56tNtI6Wp-BMwsuR6FyXjHnoIMIapaw7Ql0pR0zus',
        'UyySR': 'QjbG7npj44R73JIjks18BQ',
        'lINzj': 'cm56tNtI6Wp-BMwsuR6FyXjHnoIMIapaw7Ql0pR0zus',
        'vZOqw': function(_0x1258a3, _0x3e22ed) {
            return _0x1258a3 * _0x3e22ed;
        },
        'SNrBa': 'api.m.jd.com',
        'aOrCt': 'application/json, text/plain, */*',
        'EvzEo': 'application/x-www-form-urlencoded',
        'RSisu': 'https://invite-reward.jd.com',
        'OXAnG': 'zh-cn',
        'fYsAu': function(_0x5957ad, _0x5d380d) {
            return _0x5957ad(_0x5d380d);
        },
        'DGaSt': './JS_USER_AGENTS',
        'htcvZ': 'JSUA',
        'ooEYk': '\'jdltapp;iPad;3.1.0;14.4;network/wifi;Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
        'AOPez': 'https://invite-reward.jd.com/'
    };
    let _0x223804 = +new Date();
    let _0xaa9f4e = [_0x3bf0b6['cKyjJ'], _0x3bf0b6['nAvgu'], _0x3bf0b6['OYbMX'], _0x3bf0b6['nYYCf'], _0x3bf0b6['UyySR'], _0x3bf0b6['lINzj']][Math['floor'](_0x3bf0b6['vZOqw'](Math['random'](), 0x6))];
    var _0x352083 = {
        'Host': _0x3bf0b6['SNrBa'],
        'accept': _0x3bf0b6['aOrCt'],
        'content-type': _0x3bf0b6['EvzEo'],
        'origin': _0x3bf0b6['RSisu'],
        'accept-language': _0x3bf0b6['OXAnG'],
        'user-agent': $['isNode']() ? process['env']['JS_USER_AGENT'] ? process['env']['JS_USER_AGENT'] : _0x3bf0b6['fYsAu'](require, _0x3bf0b6['DGaSt'])['USER_AGENT'] : $['getdata'](_0x3bf0b6['htcvZ']) ? $['getdata'](_0x3bf0b6['htcvZ']) : _0x3bf0b6['ooEYk'],
        'referer': _0x3bf0b6['AOPez'],
        'Cookie': cookie
    };
    var _0x463942 = 'functionId=InviteFriendApiService&body={"method":"attendInviteActivity","data":{"inviterPin":"' + _0x3bf0b6['fYsAu'](escape, _0xaa9f4e) + '","channel":1,"token":"","frontendInitStatus":""}}&referer=-1&eid=eidIf3dd8121b7sdmiBLGdxRR46OlWyh62kFAZogTJFnYqqRkwgr63%2BdGmMlcv7EQJ5v0HBic81xHXzXLwKM6fh3i963zIa7Ym2v5ehnwo2B7uDN92Q0&aid=&client=ios&clientVersion=14.4&networkType=wifi&fp=-1&appid=market-task-h5&_t=' + _0x223804;
    var _0x5e89a9 = {
        'url': 'https://api.m.jd.com/?t=' + +new Date(),
        'headers': _0x352083,
        'body': _0x463942
    };
    $['post'](_0x5e89a9, (_0x138ac6, _0x533436, _0x4b1040) => {});
}

function TotalBean() {
    var _0x498d42 = {
        'gJQhA': function(_0x51959b, _0x5dddc1) {
            return _0x51959b === _0x5dddc1;
        },
        'oAYst': 'rJmTN',
        'IiZFE': function(_0x1849b8, _0xd9916d) {
            return _0x1849b8 === _0xd9916d;
        },
        'sScMT': 'PHFuR',
        'Gxgur': function(_0x4d5598, _0x268bac) {
            return _0x4d5598 !== _0x268bac;
        },
        'yMFVv': 'bAbea',
        'OEJOr': 'GQpsb',
        'QejbS': 'Vcvml',
        'PRHeY': 'Isfjo',
        'skVav': function(_0xd16172, _0x31d361) {
            return _0xd16172 === _0x31d361;
        },
        'NGcGP': 'retcode',
        'QSKZh': 'base',
        'MCIKC': function(_0x31f178, _0x19cdc4) {
            return _0x31f178 !== _0x19cdc4;
        },
        'uGuHe': 'QhRay',
        'kpdFQ': 'HZfWG',
        'hdgQY': 'dPBXW',
        'RrOtH': 'dqUrQ',
        'FaQou': 'NeIdG',
        'PDXaO': 'cYADB',
        'eziGw': function(_0x172ded) {
            return _0x172ded();
        },
        'HaIlJ': function(_0x50c8ab, _0x159ed1) {
            return _0x50c8ab(_0x159ed1);
        },
        'PbAli': function(_0x46a119, _0x3f180e) {
            return _0x46a119 == _0x3f180e;
        },
        'jFAID': 'object',
        'XhHSG': function(_0x5398b9, _0x22849c) {
            return _0x5398b9 === _0x22849c;
        },
        'VCoJZ': 'UlWAj',
        'KTahj': 'HQzZJ',
        'WEVJg': 'application/json,text/plain, */*',
        'qKlIK': 'application/x-www-form-urlencoded',
        'YHLdv': 'gzip, deflate, br',
        'zyGrX': 'zh-cn',
        'adRwu': 'keep-alive',
        'UTDNR': 'https://wqs.jd.com/my/jingdou/my.shtml?sceneval=2',
        'ozewQ': './USER_AGENTS',
        'YEBsG': 'JDUA',
        'euSsr': 'jdapp;iPhone;9.2.2;14.2;%E4%BA%AC%E4%B8%9C/9.2.2 CFNetwork/1206 Darwin/20.1.0'
    };
    return new Promise(async _0x37f229 => {
        var _0x6696ee = {
            'maIhW': function(_0xcddf7b, _0x578eb3) {
                return _0x498d42['HaIlJ'](_0xcddf7b, _0x578eb3);
            },
            'iaUnK': function(_0x3b37ab, _0x1ced8d) {
                return _0x498d42['PbAli'](_0x3b37ab, _0x1ced8d);
            },
            'xFhlH': _0x498d42['jFAID']
        };
        if (_0x498d42['XhHSG'](_0x498d42['VCoJZ'], _0x498d42['KTahj'])) {
            console['log']('京东服务器返回空数据');
        } else {
            const _0x430b54 = {
                'url': 'https://wq.jd.com/user/info/QueryJDUserInfo?sceneval=2',
                'headers': {
                    'Accept': _0x498d42['WEVJg'],
                    'Content-Type': _0x498d42['qKlIK'],
                    'Accept-Encoding': _0x498d42['YHLdv'],
                    'Accept-Language': _0x498d42['zyGrX'],
                    'Connection': _0x498d42['adRwu'],
                    'Cookie': cookie,
                    'Referer': _0x498d42['UTDNR'],
                    'User-Agent': $['isNode']() ? process['env']['JD_USER_AGENT'] ? process['env']['JD_USER_AGENT'] : _0x498d42['HaIlJ'](require, _0x498d42['ozewQ'])['USER_AGENT'] : $['getdata'](_0x498d42['YEBsG']) ? $['getdata'](_0x498d42['YEBsG']) : _0x498d42['euSsr']
                }
            };
            $['post'](_0x430b54, (_0x138677, _0x3521ef, _0x46c08a) => {
                if (_0x498d42['gJQhA'](_0x498d42['oAYst'], _0x498d42['oAYst'])) {
                    try {
                        if (_0x138677) {
                            if (_0x498d42['IiZFE'](_0x498d42['sScMT'], _0x498d42['sScMT'])) {
                                console['log']('' + JSON['stringify'](_0x138677));
                                console['log']($['name'] + ' API请求失败，请检查网路重试');
                            } else {
                                $['logErr'](e);
                            }
                        } else {
                            if (_0x498d42['Gxgur'](_0x498d42['yMFVv'], _0x498d42['OEJOr'])) {
                                if (_0x46c08a) {
                                    if (_0x498d42['IiZFE'](_0x498d42['QejbS'], _0x498d42['PRHeY'])) {
                                        console['log'](_0x46c08a['errMsg']);
                                    } else {
                                        _0x46c08a = JSON['parse'](_0x46c08a);
                                        if (_0x498d42['skVav'](_0x46c08a[_0x498d42['NGcGP']], 0xd)) {
                                            $['isLogin'] = ![];
                                            return;
                                        }
                                        if (_0x498d42['skVav'](_0x46c08a[_0x498d42['NGcGP']], 0x0)) {
                                            $['nickName'] = _0x46c08a[_0x498d42['QSKZh']] && _0x46c08a[_0x498d42['QSKZh']]['nickname'] || $['UserName'];
                                        } else {
                                            if (_0x498d42['MCIKC'](_0x498d42['uGuHe'], _0x498d42['kpdFQ'])) {
                                                $['nickName'] = $['UserName'];
                                            } else {
                                                $['nickName'] = $['UserName'];
                                            }
                                        }
                                    }
                                } else {
                                    if (_0x498d42['skVav'](_0x498d42['hdgQY'], _0x498d42['RrOtH'])) {
                                        _0x6696ee['maIhW'](_0x37f229, _0x46c08a);
                                    } else {
                                        console['log']('京东服务器返回空数据');
                                    }
                                }
                            } else {
                                return !![];
                            }
                        }
                    } catch (_0x1a1c9a) {
                        if (_0x498d42['MCIKC'](_0x498d42['FaQou'], _0x498d42['PDXaO'])) {
                            $['logErr'](_0x1a1c9a, _0x3521ef);
                        } else {
                            try {
                                if (_0x6696ee['iaUnK'](typeof JSON['parse'](_0x46c08a), _0x6696ee['xFhlH'])) {
                                    return !![];
                                }
                            } catch (_0x24236e) {
                                console['log'](_0x24236e);
                                console['log']('京东服务器访问数据为空，请检查自身设备网络情况');
                                return ![];
                            }
                        }
                    } finally {
                        _0x498d42['eziGw'](_0x37f229);
                    }
                } else {
                    $['logErr'](e, _0x3521ef);
                }
            });
        }
    });
}

function safeGet(_0x433859) {
    var _0x20e00d = {
        'KhuGx': function(_0x409586, _0x40003e) {
            return _0x409586 === _0x40003e;
        },
        'zQhKK': 'retcode',
        'MlPrH': 'base',
        'pejtT': function(_0x501385, _0x20550e) {
            return _0x501385 == _0x20550e;
        },
        'JoGHa': 'object',
        'aYSel': function(_0x7b6eaf, _0x1559d9) {
            return _0x7b6eaf !== _0x1559d9;
        },
        'YmrrT': 'GqhnR',
        'mVslx': 'qjQns'
    };
    try {
        if (_0x20e00d['pejtT'](typeof JSON['parse'](_0x433859), _0x20e00d['JoGHa'])) {
            if (_0x20e00d['aYSel'](_0x20e00d['YmrrT'], _0x20e00d['mVslx'])) {
                return !![];
            } else {
                _0x433859 = JSON['parse'](_0x433859);
                if (_0x20e00d['KhuGx'](_0x433859[_0x20e00d['zQhKK']], 0xd)) {
                    $['isLogin'] = ![];
                    return;
                }
                if (_0x20e00d['KhuGx'](_0x433859[_0x20e00d['zQhKK']], 0x0)) {
                    $['nickName'] = _0x433859[_0x20e00d['MlPrH']] && _0x433859[_0x20e00d['MlPrH']]['nickname'] || $['UserName'];
                } else {
                    $['nickName'] = $['UserName'];
                }
            }
        }
    } catch (_0x1eadbe) {
        console['log'](_0x1eadbe);
        console['log']('京东服务器访问数据为空，请检查自身设备网络情况');
        return ![];
    }
}

function jsonParse(_0x421011) {
    var _0x1abe8e = {
        'KrnpT': function(_0x3e8c9f, _0x3b5e0e) {
            return _0x3e8c9f == _0x3b5e0e;
        },
        'yFCXn': 'string',
        'kxvQZ': function(_0x1f035f, _0x2ba749) {
            return _0x1f035f !== _0x2ba749;
        },
        'DGFKA': 'mBxvj',
        'rJaNj': '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie'
    };
    if (_0x1abe8e['KrnpT'](typeof _0x421011, _0x1abe8e['yFCXn'])) {
        try {
            return JSON['parse'](_0x421011);
        } catch (_0x309618) {
            if (_0x1abe8e['kxvQZ'](_0x1abe8e['DGFKA'], _0x1abe8e['DGFKA'])) {
                message += '获得' + data['data']['received']['prizeDesc'] + '\x0a';
                console['log']('获得' + data['data']['received']['prizeDesc']);
            } else {
                console['log'](_0x309618);
                $['msg']($['name'], '', _0x1abe8e['rJaNj']);
                return [];
            }
        }
    }
}

function taskPostUrl(_0x8b3c2, _0x5a2ccc) {
    var _0x23deb5 = {
        'otfSv': function(_0x491dca, _0x17a181) {
            return _0x491dca(_0x17a181);
        },
        'OYZXF': 'api.m.jd.com',
        'kgFwN': '*/*',
        'vBZGq': 'keep-alive',
        'ZYBdo': './JS_USER_AGENTS',
        'woXmj': 'JSUA',
        'seguE': '\'jdltapp;iPad;3.1.0;14.4;network/wifi;Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
        'hWXkn': 'zh-Hans-CN;q=1,en-CN;q=0.9',
        'SiSxg': 'gzip, deflate, br',
        'cWbBP': 'application/x-www-form-urlencoded',
        'NxAbA': 'https://an.jd.com/babelDiy/Zeus/q1eB6WUB8oC4eH1BsCLWvQakVsX/index.html'
    };
    return {
        'url': 'https://api.m.jd.com/',
        'body': 'appid=activities_platform&functionId=' + _0x8b3c2 + '&body=' + _0x23deb5['otfSv'](escape, JSON['stringify'](_0x5a2ccc)) + '&t=' + +new Date(),
        'headers': {
            'Cookie': cookie,
            'Host': _0x23deb5['OYZXF'],
            'Accept': _0x23deb5['kgFwN'],
            'Connection': _0x23deb5['vBZGq'],
            'user-agent': $['isNode']() ? process['env']['JS_USER_AGENT'] ? process['env']['JS_USER_AGENT'] : _0x23deb5['otfSv'](require, _0x23deb5['ZYBdo'])['USER_AGENT'] : $['getdata'](_0x23deb5['woXmj']) ? $['getdata'](_0x23deb5['woXmj']) : _0x23deb5['seguE'],
            'Accept-Language': _0x23deb5['hWXkn'],
            'Accept-Encoding': _0x23deb5['SiSxg'],
            'Content-Type': _0x23deb5['cWbBP'],
            'referer': _0x23deb5['NxAbA']
        }
    };
}

function taskGetUrl(_0x3cac03, _0x390c9b) {
    var _0x335ceb = {
        'dCBfC': function(_0x1d1077, _0x23904a) {
            return _0x1d1077(_0x23904a);
        },
        'dfVAe': 'api.m.jd.com',
        'cLsZK': '*/*',
        'ZlGDx': 'keep-alive',
        'oEIjP': function(_0x3475d9, _0x9118e2) {
            return _0x3475d9(_0x9118e2);
        },
        'BlsyK': './JS_USER_AGENTS',
        'untxw': 'JSUA',
        'DPUTB': '\'jdltapp;iPad;3.1.0;14.4;network/wifi;Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
        'jgGHA': 'zh-Hans-CN;q=1,en-CN;q=0.9',
        'leMVE': 'gzip, deflate, br',
        'lzUQM': 'application/x-www-form-urlencoded',
        'DYlqR': 'https://an.jd.com/babelDiy/Zeus/q1eB6WUB8oC4eH1BsCLWvQakVsX/index.html'
    };
    return {
        'url': 'https://api.m.jd.com/?appid=activities_platform&functionId=' + _0x3cac03 + '&body=' + _0x335ceb['dCBfC'](escape, JSON['stringify'](_0x390c9b)) + '&t=' + +new Date(),
        'headers': {
            'Cookie': cookie,
            'Host': _0x335ceb['dfVAe'],
            'Accept': _0x335ceb['cLsZK'],
            'Connection': _0x335ceb['ZlGDx'],
            'user-agent': $['isNode']() ? process['env']['JS_USER_AGENT'] ? process['env']['JS_USER_AGENT'] : _0x335ceb['oEIjP'](require, _0x335ceb['BlsyK'])['USER_AGENT'] : $['getdata'](_0x335ceb['untxw']) ? $['getdata'](_0x335ceb['untxw']) : _0x335ceb['DPUTB'],
            'Accept-Language': _0x335ceb['jgGHA'],
            'Accept-Encoding': _0x335ceb['leMVE'],
            'Content-Type': _0x335ceb['lzUQM'],
            'referer': _0x335ceb['DYlqR']
        }
    };
};
_0xodK = 'jsjiami.com.v6'

// prettier-ignore
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
