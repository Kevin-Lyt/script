/*
京东极速版红包
自动提现微信现金

活动时间：2021-4-6至2021-5-5
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
const linkId = "jOkIZzWCgGa9NfPuHBSx1A";



/*
 *Progcessed By JSDec in 0.34s
 *JSDec - JSDec.js.org
 */
if ($['isNode']()) {
    Object['keys'](jdCookieNode)['forEach'](_0x466fa7 => {
        cookiesArr['push'](jdCookieNode[_0x466fa7]);
    });
    if (process['env']['JD_DEBUG'] && process['env']['JD_DEBUG'] === 'false') console['log'] = () => {};
    if (JSON['stringify'](process['env'])['indexOf']('GITHUB') > -0x1) process['exit'](0x0);
} else {
    cookiesArr = [$['getdata']('CookieJD'), $['getdata']('CookieJD2'), ...jsonParse($['getdata']('CookiesJD') || '[]')['map'](_0x26cbab => _0x26cbab['cookie'])]['filter'](_0xbe065f => !!_0xbe065f);
}!(async () => {
    var _0x154ce6 = {
        'Czkji': '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取',
        'CgCAw': 'https://bean.m.jd.com/bean/signIndex.action',
        'VcUGG': function(_0xe43540, _0x3794da) {
            return _0xe43540 < _0x3794da;
        },
        'zmihf': function(_0x2a1ebb, _0x5cc9e7) {
            return _0x2a1ebb(_0x5cc9e7);
        },
        'EThNh': function(_0x484d38, _0x2a66c4) {
            return _0x484d38 + _0x2a66c4;
        },
        'JZPWH': function(_0x2901a2) {
            return _0x2901a2();
        },
        'NrdNi': function(_0x3ea736) {
            return _0x3ea736();
        }
    };
    if (!cookiesArr[0x0]) {
        $['msg']($['name'], _0x154ce6['Czkji'], _0x154ce6['CgCAw'], {
            'open-url': _0x154ce6['CgCAw']
        });
        return;
    }
    for (let _0x40e19e = 0x0; _0x154ce6['VcUGG'](_0x40e19e, cookiesArr['length']); _0x40e19e++) {
        if (cookiesArr[_0x40e19e]) {
            console['log']('\n如提示活动火爆,可再执行一次尝试\n');
            cookie = cookiesArr[_0x40e19e];
            $['UserName'] = _0x154ce6['zmihf'](decodeURIComponent, cookie['match'](/pt_pin=([^; ]+)(?=;?)/) && cookie['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1]);
            $['index'] = _0x154ce6['EThNh'](_0x40e19e, 0x1);
            $['isLogin'] = !![];
            $['nickName'] = '';
            message = '';
            await _0x154ce6['JZPWH'](TotalBean);
            console['log']('\n******开始【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']) + '*********\n');
            if (!$['isLogin']) {
                $['msg']($['name'], '【提示】cookie已失效', '京东账号' + $['index'] + ' ' + ($['nickName'] || $['UserName']) + '\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action', {
                    'open-url': _0x154ce6['CgCAw']
                });
                if ($['isNode']()) {
                    await notify['sendNotify']($['name'] + 'cookie已失效 - ' + $['UserName'], '京东账号' + $['index'] + ' ' + $['UserName'] + '\n请重新登录获取cookie');
                }
                continue;
            }
            await _0x154ce6['NrdNi'](jsRedPacket);
        }
    }
})()['catch'](_0x4d1be6 => {
    $['log']('', '❌ ' + $['name'] + ', 失败! 原因: ' + _0x4d1be6 + '!', '');
})['finally'](() => {
    $['done']();
});
async function jsRedPacket() {
    var _0x3d8e7e = {
        'UKPCk': function(_0x43602d) {
            return _0x43602d();
        },
        'srFJV': function(_0xa3f487, _0x4a5561) {
            return _0xa3f487 < _0x4a5561;
        },
        'NgGyL': function(_0x41413c) {
            return _0x41413c();
        },
        'Fglfy': function(_0x42b7ab) {
            return _0x42b7ab();
        }
    };
    try {
        await _0x3d8e7e['UKPCk'](invite);
        for (let _0x521240 = 0x0; _0x3d8e7e['srFJV'](_0x521240, 0x3); ++_0x521240) {
            await _0x3d8e7e['NgGyL'](redPacket);
            await $['wait'](0x1f4);
        }
        await _0x3d8e7e['Fglfy'](getPacketList);
        await _0x3d8e7e['Fglfy'](showMsg);
    } catch (_0x584b2b) {
        $['logErr'](_0x584b2b);
    }
}

function showMsg() {
    var _0x234cd9 = {
        'AKciI': function(_0x4b4107, _0x39ae16) {
            return _0x4b4107(_0x39ae16);
        },
        'DJsZR': function(_0x28e313, _0x1ca201) {
            return _0x28e313 !== _0x1ca201;
        },
        'QKUCH': 'eWODi',
        'MVXxZ': function(_0x41abdc) {
            return _0x41abdc();
        }
    };
    return new Promise(_0x4847e2 => {
        if (_0x234cd9['DJsZR'](_0x234cd9['QKUCH'], _0x234cd9['QKUCH'])) {
            _0x234cd9['AKciI'](_0x4847e2, data);
        } else {
            if (message) $['msg']($['name'], '', '京东账号' + $['index'] + $['nickName'] + '\x0a' + message);
            _0x234cd9['MVXxZ'](_0x4847e2);
        }
    });
}
async function redPacket() {
    var _0x512e86 = {
        'nRIRg': function(_0x1f93a8, _0x256b2f) {
            return _0x1f93a8 !== _0x256b2f;
        },
        'PQYqK': 'weNKm',
        'tHrLx': function(_0x2df6bb, _0x2d34f6) {
            return _0x2df6bb(_0x2d34f6);
        },
        'nkixU': function(_0x111925, _0xcfe090) {
            return _0x111925 === _0xcfe090;
        },
        'DwhnV': 'EYdcC',
        'yCmzY': '获得优惠券',
        'CZLgc': function(_0x50cebe, _0x1db7e8) {
            return _0x50cebe !== _0x1db7e8;
        },
        'LUyom': 'aesOz',
        'uOEsW': function(_0x27db04, _0x43897e, _0x18221b) {
            return _0x27db04(_0x43897e, _0x18221b);
        },
        'wTKya': 'spring_reward_receive',
        'oSINb': 'QjbG7npj44R73JIjks18BQ',
        'LXidl': 'cm56tNtI6Wp-BMwsuR6FyXjHnoIMIapaw7Ql0pR0zus',
        'PkQND': function(_0x423a7e, _0x5e4b92) {
            return _0x423a7e * _0x5e4b92;
        }
    };
    return new Promise(_0xee767b => {
        var _0x2502a5 = {
            'cXOTk': function(_0x509ca5, _0x5bd89f) {
                return _0x512e86['nRIRg'](_0x509ca5, _0x5bd89f);
            },
            'LGMCQ': _0x512e86['PQYqK'],
            'gGSnq': function(_0x425962, _0x1f8969) {
                return _0x512e86['tHrLx'](_0x425962, _0x1f8969);
            },
            'GDqGE': function(_0x1345cd, _0x80f1a9) {
                return _0x512e86['nkixU'](_0x1345cd, _0x80f1a9);
            },
            'HfUrt': function(_0x1580ca, _0xd18496) {
                return _0x512e86['nRIRg'](_0x1580ca, _0xd18496);
            },
            'Jfzsp': function(_0x24b33a, _0x270707) {
                return _0x512e86['nkixU'](_0x24b33a, _0x270707);
            },
            'aGbXg': _0x512e86['DwhnV'],
            'tRpLL': _0x512e86['yCmzY'],
            'rugTS': function(_0x501089, _0x59ce2e) {
                return _0x512e86['CZLgc'](_0x501089, _0x59ce2e);
            },
            'fVNsK': _0x512e86['LUyom']
        };
        $['get'](_0x512e86['uOEsW'](taskGetUrl, _0x512e86['wTKya'], {
            'inviter': [_0x512e86['oSINb'], _0x512e86['LXidl']][Math['floor'](_0x512e86['PkQND'](Math['random'](), 0x2))],
            'linkId': linkId
        }), async (_0x1258f5, _0x384c0f, _0x1402a0) => {
            try {
                if (_0x1258f5) {
                    console['log']('' + JSON['stringify'](_0x1258f5));
                    console['log']($['name'] + ' API请求失败，请检查网路重试');
                } else {
                    if (_0x2502a5['cXOTk'](_0x2502a5['LGMCQ'], _0x2502a5['LGMCQ'])) {
                        $['logErr'](e, _0x384c0f);
                    } else {
                        if (_0x2502a5['gGSnq'](safeGet, _0x1402a0)) {
                            _0x1402a0 = JSON['parse'](_0x1402a0);
                            if (_0x2502a5['GDqGE'](_0x1402a0['code'], 0x0)) {
                                if (_0x2502a5['HfUrt'](_0x1402a0['data']['received']['prizeType'], 0x1)) {
                                    if (_0x2502a5['Jfzsp'](_0x2502a5['aGbXg'], _0x2502a5['aGbXg'])) {
                                        message += '获得' + _0x1402a0['data']['received']['prizeDesc'] + '\x0a';
                                        console['log']('获得' + _0x1402a0['data']['received']['prizeDesc']);
                                    } else {
                                        console['log']('提现成功！');
                                    }
                                } else {
                                    console['log'](_0x2502a5['tRpLL']);
                                }
                            } else {
                                console['log'](_0x1402a0['errMsg']);
                            }
                        }
                    }
                }
            } catch (_0x18b0ec) {
                $['logErr'](_0x18b0ec, _0x384c0f);
            } finally {
                if (_0x2502a5['rugTS'](_0x2502a5['fVNsK'], _0x2502a5['fVNsK'])) {
                    message += '获得' + _0x1402a0['data']['received']['prizeDesc'] + '\x0a';
                    console['log']('获得' + _0x1402a0['data']['received']['prizeDesc']);
                } else {
                    _0x2502a5['gGSnq'](_0xee767b, _0x1402a0);
                }
            }
        });
    });
}

function getPacketList() {
    var _0x30a4ac = {
        'MmlOK': function(_0x2c730b, _0x5cbd6d) {
            return _0x2c730b !== _0x5cbd6d;
        },
        'FSNDH': '获得优惠券',
        'OeFYf': function(_0x3e7dc8, _0x3a3636) {
            return _0x3e7dc8(_0x3a3636);
        },
        'PaLKD': 'api.m.jd.com',
        'FgtBr': '*/*',
        'XZsjp': 'keep-alive',
        'bdyZx': './JS_USER_AGENTS',
        'bavWJ': 'JSUA',
        'SRjqc': '\'jdltapp;iPad;3.1.0;14.4;network/wifi;Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
        'FTgPk': 'zh-Hans-CN;q=1,en-CN;q=0.9',
        'smROz': 'gzip, deflate, br',
        'cSPey': 'application/x-www-form-urlencoded',
        'EYBAB': 'https://an.jd.com/babelDiy/Zeus/q1eB6WUB8oC4eH1BsCLWvQakVsX/index.html',
        'EHltl': function(_0x3b99c0) {
            return _0x3b99c0();
        },
        'IijYp': 'sMWcZ7TKaEBlU//QsVkItw==',
        'EqymP': 'DWHKncW5H28%3D',
        'pSaDM': 'X6BLtZKxx+ikABCqvZBocS5IRQlTziSkNyv4iNJVUFI=',
        'AFFOq': 'ju4R3JlphlRUoOgU0ihqC4On8bJjlhOf',
        'DhBKF': 'yxGujYAjv5aaJ81ESh2s5PEg0f8qwtrucqU2TISsEcw=',
        'uagCS': 'tWJTao4KARuk3o3W9F0m4A==',
        'HhIKu': function(_0x5e52f8, _0x345981) {
            return _0x5e52f8 * _0x345981;
        },
        'JkAUm': 'application/json, text/plain, */*',
        'UGJpJ': 'https://invite-reward.jd.com',
        'lHzmS': 'zh-cn',
        'MfqlA': 'https://invite-reward.jd.com/',
        'LfFKU': function(_0x8371a2, _0x45a5b1) {
            return _0x8371a2 === _0x45a5b1;
        },
        'JsyES': 'lxVlU',
        'PTPZp': 'gBOXn',
        'aLpRK': function(_0x53a06d, _0x3f7532) {
            return _0x53a06d !== _0x3f7532;
        },
        'OEIhw': 'VVilL',
        'fmtVl': 'zDahp',
        'EDyFw': 'vEWRZ',
        'xxFww': function(_0x1b1b6e, _0x5196c2) {
            return _0x1b1b6e === _0x5196c2;
        },
        'XuOuY': function(_0x169e2d, _0x3fed4c, _0x4d1162, _0x2ad3a3, _0x58fd07) {
            return _0x169e2d(_0x3fed4c, _0x4d1162, _0x2ad3a3, _0x58fd07);
        },
        'BkJIN': function(_0x31c871, _0x2fc4ac) {
            return _0x31c871(_0x2fc4ac);
        },
        'otgjS': 'tuNQx',
        'LJmYf': 'OHZCa',
        'fcHkT': function(_0x42621a, _0x209cf6, _0x2293cc) {
            return _0x42621a(_0x209cf6, _0x2293cc);
        },
        'TureR': 'spring_reward_list'
    };
    return new Promise(_0x49889c => {
        var _0x1d717f = {
            'NwJqv': function(_0x139539, _0x5c0de8) {
                return _0x30a4ac['OeFYf'](_0x139539, _0x5c0de8);
            },
            'TGuSx': _0x30a4ac['PaLKD'],
            'fCbrK': _0x30a4ac['FgtBr'],
            'QAVgP': _0x30a4ac['XZsjp'],
            'qIxCB': _0x30a4ac['bdyZx'],
            'yIglU': _0x30a4ac['bavWJ'],
            'FOVCy': _0x30a4ac['SRjqc'],
            'LMclq': _0x30a4ac['FTgPk'],
            'kAPCY': _0x30a4ac['smROz'],
            'AXtDU': _0x30a4ac['cSPey'],
            'BDVPQ': _0x30a4ac['EYBAB'],
            'kkaBi': function(_0x323f9c) {
                return _0x30a4ac['EHltl'](_0x323f9c);
            },
            'yyUYx': _0x30a4ac['IijYp'],
            'Xltmr': _0x30a4ac['EqymP'],
            'dKqul': _0x30a4ac['pSaDM'],
            'Swzyp': _0x30a4ac['AFFOq'],
            'eAyRR': _0x30a4ac['DhBKF'],
            'IclFt': _0x30a4ac['uagCS'],
            'WKtLm': function(_0x49ee75, _0x3b5088) {
                return _0x30a4ac['HhIKu'](_0x49ee75, _0x3b5088);
            },
            'OYIrG': _0x30a4ac['JkAUm'],
            'jKxGd': _0x30a4ac['UGJpJ'],
            'QYpEj': _0x30a4ac['lHzmS'],
            'TFZlP': _0x30a4ac['MfqlA'],
            'jTsVL': function(_0x1e54a7, _0xe465b8) {
                return _0x30a4ac['LfFKU'](_0x1e54a7, _0xe465b8);
            },
            'kAZZP': _0x30a4ac['JsyES'],
            'cAPhZ': _0x30a4ac['PTPZp'],
            'KbNRX': function(_0x255f9e, _0x3de38b) {
                return _0x30a4ac['aLpRK'](_0x255f9e, _0x3de38b);
            },
            'iCawv': _0x30a4ac['OEIhw'],
            'OUwEx': function(_0x3e76d1, _0x33b9b5) {
                return _0x30a4ac['LfFKU'](_0x3e76d1, _0x33b9b5);
            },
            'zFpcF': _0x30a4ac['fmtVl'],
            'wrJdl': _0x30a4ac['EDyFw'],
            'MCXVH': function(_0x5c4181, _0x5e2275) {
                return _0x30a4ac['xxFww'](_0x5c4181, _0x5e2275);
            },
            'EeOWR': function(_0x2da4d2, _0x40f587, _0x5ce44b, _0xc59609, _0x15ffed) {
                return _0x30a4ac['XuOuY'](_0x2da4d2, _0x40f587, _0x5ce44b, _0xc59609, _0x15ffed);
            },
            'SrtjU': function(_0x1c3c06, _0x332a97) {
                return _0x30a4ac['BkJIN'](_0x1c3c06, _0x332a97);
            }
        };
        if (_0x30a4ac['aLpRK'](_0x30a4ac['otgjS'], _0x30a4ac['LJmYf'])) {
            $['get'](_0x30a4ac['fcHkT'](taskGetUrl, _0x30a4ac['TureR'], {
                'pageNum': 0x1,
                'pageSize': 0x64,
                'linkId': linkId,
                'inviter': ''
            }), async (_0x50c090, _0x214cc1, _0xa6efa5) => {
                var _0xc405e3 = {
                    'nbKjI': function(_0x4ecd75, _0x3c39a8) {
                        return _0x1d717f['NwJqv'](_0x4ecd75, _0x3c39a8);
                    },
                    'lapBi': _0x1d717f['TGuSx'],
                    'fHQwE': _0x1d717f['fCbrK'],
                    'hsDUy': _0x1d717f['QAVgP'],
                    'Sawwb': _0x1d717f['qIxCB'],
                    'RFWYo': _0x1d717f['yIglU'],
                    'sykIY': _0x1d717f['FOVCy'],
                    'PjHZZ': _0x1d717f['LMclq'],
                    'ACHRA': _0x1d717f['kAPCY'],
                    'CFeAx': _0x1d717f['AXtDU'],
                    'YYURL': _0x1d717f['BDVPQ'],
                    'NcZUb': function(_0x900269) {
                        return _0x1d717f['kkaBi'](_0x900269);
                    },
                    'UcXPo': _0x1d717f['yyUYx'],
                    'fJZtK': _0x1d717f['Xltmr'],
                    'VrJLL': _0x1d717f['dKqul'],
                    'IlpXI': _0x1d717f['Swzyp'],
                    'ZhqAi': _0x1d717f['eAyRR'],
                    'fgJvE': _0x1d717f['IclFt'],
                    'wJaPF': function(_0x5e04da, _0x40141a) {
                        return _0x1d717f['WKtLm'](_0x5e04da, _0x40141a);
                    },
                    'WWVCv': _0x1d717f['OYIrG'],
                    'ubGvG': _0x1d717f['jKxGd'],
                    'Cbglh': _0x1d717f['QYpEj'],
                    'GnVOa': _0x1d717f['TFZlP']
                };
                if (_0x1d717f['jTsVL'](_0x1d717f['kAZZP'], _0x1d717f['kAZZP'])) {
                    try {
                        if (_0x1d717f['jTsVL'](_0x1d717f['cAPhZ'], _0x1d717f['cAPhZ'])) {
                            if (_0x50c090) {
                                console['log']('' + JSON['stringify'](_0x50c090));
                                console['log']($['name'] + ' API请求失败，请检查网路重试');
                            } else {
                                if (_0x1d717f['KbNRX'](_0x1d717f['iCawv'], _0x1d717f['iCawv'])) {
                                    return {
                                        'url': 'https://api.m.jd.com/',
                                        'body': 'appid=activities_platform&functionId=' + function_id + '&body=' + _0xc405e3['nbKjI'](escape, JSON['stringify'](body)) + '&t=' + +new Date(),
                                        'headers': {
                                            'Cookie': cookie,
                                            'Host': _0xc405e3['lapBi'],
                                            'Accept': _0xc405e3['fHQwE'],
                                            'Connection': _0xc405e3['hsDUy'],
                                            'user-agent': $['isNode']() ? process['env']['JS_USER_AGENT'] ? process['env']['JS_USER_AGENT'] : _0xc405e3['nbKjI'](require, _0xc405e3['Sawwb'])['USER_AGENT'] : $['getdata'](_0xc405e3['RFWYo']) ? $['getdata'](_0xc405e3['RFWYo']) : _0xc405e3['sykIY'],
                                            'Accept-Language': _0xc405e3['PjHZZ'],
                                            'Accept-Encoding': _0xc405e3['ACHRA'],
                                            'Content-Type': _0xc405e3['CFeAx'],
                                            'referer': _0xc405e3['YYURL']
                                        }
                                    };
                                } else {
                                    if (_0x1d717f['NwJqv'](safeGet, _0xa6efa5)) {
                                        _0xa6efa5 = JSON['parse'](_0xa6efa5);
                                        if (_0x1d717f['OUwEx'](_0xa6efa5['code'], 0x0)) {
                                            if (_0x1d717f['OUwEx'](_0x1d717f['zFpcF'], _0x1d717f['zFpcF'])) {
                                                for (let _0xa10ac0 of _0xa6efa5['data']['items']['filter'](_0x4e3b31 => _0x4e3b31['prizeType'] === 0x4)) {
                                                    if (_0x1d717f['KbNRX'](_0x1d717f['wrJdl'], _0x1d717f['wrJdl'])) {
                                                        console['log']('' + JSON['stringify'](_0x50c090));
                                                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                                                    } else {
                                                        if (_0x1d717f['MCXVH'](_0xa10ac0['state'], 0x0)) {
                                                            console['log']('去提现' + _0xa10ac0['amount'] + '微信现金');
                                                            message += '提现' + _0xa10ac0['amount'] + '微信现金\n';
                                                            await _0x1d717f['EeOWR'](cashOut, _0xa10ac0['id'], _0xa10ac0['poolBaseId'], _0xa10ac0['prizeGroupId'], _0xa10ac0['prizeBaseId']);
                                                        }
                                                    }
                                                }
                                            } else {
                                                var _0x32ecd7 = {
                                                    'GIoTy': function(_0x86ab51) {
                                                        return _0xc405e3['NcZUb'](_0x86ab51);
                                                    }
                                                };
                                                return new Promise(_0x3e1792 => {
                                                    if (message) $['msg']($['name'], '', '京东账号' + $['index'] + $['nickName'] + '\x0a' + message);
                                                    _0x32ecd7['GIoTy'](_0x3e1792);
                                                });
                                            }
                                        } else {
                                            console['log'](_0xa6efa5['errMsg']);
                                        }
                                    }
                                }
                            }
                        } else {
                            console['log'](_0xa6efa5['errMsg']);
                        }
                    } catch (_0x355c0b) {
                        $['logErr'](_0x355c0b, _0x214cc1);
                    } finally {
                        _0x1d717f['SrtjU'](_0x49889c, _0xa6efa5);
                    }
                } else {
                    let _0x108e48 = +new Date();
                    let _0x1d1bfa = [_0xc405e3['UcXPo'], _0xc405e3['fJZtK'], _0xc405e3['VrJLL'], _0xc405e3['IlpXI'], _0xc405e3['ZhqAi'], _0xc405e3['fgJvE']][Math['floor'](_0xc405e3['wJaPF'](Math['random'](), 0x6))];
                    var _0x345792 = {
                        'Host': _0xc405e3['lapBi'],
                        'accept': _0xc405e3['WWVCv'],
                        'content-type': _0xc405e3['CFeAx'],
                        'origin': _0xc405e3['ubGvG'],
                        'accept-language': _0xc405e3['Cbglh'],
                        'user-agent': $['isNode']() ? process['env']['JS_USER_AGENT'] ? process['env']['JS_USER_AGENT'] : _0xc405e3['nbKjI'](require, _0xc405e3['Sawwb'])['USER_AGENT'] : $['getdata'](_0xc405e3['RFWYo']) ? $['getdata'](_0xc405e3['RFWYo']) : _0xc405e3['sykIY'],
                        'referer': _0xc405e3['GnVOa'],
                        'Cookie': cookie
                    };
                    var _0xd4c9ee = 'functionId=InviteFriendApiService&body={"method":"attendInviteActivity","data":{"inviterPin":"' + _0xc405e3['nbKjI'](encodeURIComponent, _0x1d1bfa) + '","channel":1,"token":"","frontendInitStatus":""}}&referer=-1&eid=eidIf3dd8121b7sdmiBLGdxRR46OlWyh62kFAZogTJFnYqqRkwgr63%2BdGmMlcv7EQJ5v0HBic81xHXzXLwKM6fh3i963zIa7Ym2v5ehnwo2B7uDN92Q0&aid=&client=ios&clientVersion=14.4&networkType=wifi&fp=-1&appid=market-task-h5&_t=' + _0x108e48;
                    var _0x1e7de5 = {
                        'url': 'https://api.m.jd.com/?t=' + +new Date(),
                        'headers': _0x345792,
                        'body': _0xd4c9ee
                    };
                    $['post'](_0x1e7de5, (_0x2cdaf7, _0x754327, _0x467e61) => {});
                }
            });
        } else {
            if (_0x30a4ac['MmlOK'](data['data']['received']['prizeType'], 0x1)) {
                message += '获得' + data['data']['received']['prizeDesc'] + '\x0a';
                console['log']('获得' + data['data']['received']['prizeDesc']);
            } else {
                console['log'](_0x30a4ac['FSNDH']);
            }
        }
    });
}

function cashOut(_0x312148, _0x226b6e, _0x33924d, _0x65102e) {
    var _0xcbd14c = {
        'RyhRf': '获得优惠券',
        'ZfpTs': function(_0x3f2aca, _0x525a70) {
            return _0x3f2aca !== _0x525a70;
        },
        'cTQPx': 'dwdVO',
        'uLDdI': 'QJVSR',
        'LmHnd': function(_0x1b93cb, _0x5d51a9) {
            return _0x1b93cb === _0x5d51a9;
        },
        'WLUFA': 'sFkAu',
        'iYQdo': function(_0x3afde2, _0x31e6c0) {
            return _0x3afde2(_0x31e6c0);
        },
        'uZuKC': function(_0x537003, _0x26639f) {
            return _0x537003 === _0x26639f;
        },
        'Tkkrt': 'UJoTl',
        'gaXvA': 'yShKM',
        'NINkz': 'FOtMV',
        'qlhUH': 'OdtTY',
        'bQrqE': 'dGvNA',
        'Xwkja': function(_0x1845ed, _0x52170f, _0x37dec0) {
            return _0x1845ed(_0x52170f, _0x37dec0);
        },
        'qJtaw': 'apCashWithDraw',
        'qsQst': 'SPRING_FESTIVAL_RED_ENVELOPE'
    };
    let _0x42b265 = {
        'businessSource': _0xcbd14c['qsQst'],
        'base': {
            'id': _0x312148,
            'business': '',
            'poolBaseId': _0x226b6e,
            'prizeGroupId': _0x33924d,
            'prizeBaseId': _0x65102e,
            'prizeType': 0x4
        },
        'linkId': linkId,
        'inviter': ''
    };
    return new Promise(_0x5f2e2f => {
        var _0x7c043e = {
            'BfxMO': function(_0x2b54b4, _0x9a28a4) {
                return _0xcbd14c['iYQdo'](_0x2b54b4, _0x9a28a4);
            }
        };
        $['post'](_0xcbd14c['Xwkja'](taskPostUrl, _0xcbd14c['qJtaw'], _0x42b265), async (_0x3b8b8b, _0x1de548, _0x5a7997) => {
            var _0x147892 = {
                'RiQxR': _0xcbd14c['RyhRf']
            };
            if (_0xcbd14c['ZfpTs'](_0xcbd14c['cTQPx'], _0xcbd14c['uLDdI'])) {
                try {
                    if (_0x3b8b8b) {
                        console['log']('' + JSON['stringify'](_0x3b8b8b));
                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                    } else {
                        if (_0xcbd14c['LmHnd'](_0xcbd14c['WLUFA'], _0xcbd14c['WLUFA'])) {
                            if (_0xcbd14c['iYQdo'](safeGet, _0x5a7997)) {
                                _0x5a7997 = JSON['parse'](_0x5a7997);
                                if (_0xcbd14c['LmHnd'](_0x5a7997['code'], 0x0)) {
                                    console['log']('提现成功！');
                                } else {
                                    if (_0xcbd14c['uZuKC'](_0xcbd14c['Tkkrt'], _0xcbd14c['gaXvA'])) {
                                        $['done']();
                                    } else {
                                        console['log'](_0x5a7997['errMsg']);
                                    }
                                }
                            }
                        } else {
                            console['log'](_0x147892['RiQxR']);
                        }
                    }
                } catch (_0x582c95) {
                    if (_0xcbd14c['ZfpTs'](_0xcbd14c['NINkz'], _0xcbd14c['qlhUH'])) {
                        $['logErr'](_0x582c95, _0x1de548);
                    } else {
                        cookiesArr['push'](jdCookieNode[item]);
                    }
                } finally {
                    if (_0xcbd14c['uZuKC'](_0xcbd14c['bQrqE'], _0xcbd14c['bQrqE'])) {
                        _0xcbd14c['iYQdo'](_0x5f2e2f, _0x5a7997);
                    } else {
                        _0x7c043e['BfxMO'](_0x5f2e2f, _0x5a7997);
                    }
                }
            } else {
                $['logErr'](e);
            }
        });
    });
}

function invite() {
    var _0x850eb2 = {
        'WEFGH': 'Wy3rGd8o4Vckq1VucBFJjA==',
        'pbrIR': 'Lp3j8bN3zVW7XBBFzA%2Fh0IjHF0tn8HHhELd%2BqviJRJw%3D',
        'XYPbe': '7o3vp0hNKwF8W%2FxgNBcgU5T6LBV0%2B5hdlQacVBEYTts%3D',
        'JDtgx': 'YWgBev7LfqZvUzSA4rKCN6QVtF2DuQm7DjwDP1cJBeI%3D',
        'NeeLU': 'yxGujYAjv5aaJ81ESh2s5PEg0f8qwtrucqU2TISsEcw=',
        'tLyoN': 'tWJTao4KARuk3o3W9F0m4A==',
        'nDnTP': function(_0x421d34, _0x43dedf) {
            return _0x421d34 * _0x43dedf;
        },
        'EjZOE': 'api.m.jd.com',
        'zjiAX': 'application/json, text/plain, */*',
        'fIDnI': 'application/x-www-form-urlencoded',
        'pazJU': 'https://invite-reward.jd.com',
        'bifHk': 'zh-cn',
        'lGhnD': function(_0x1e8ee4, _0x596f1f) {
            return _0x1e8ee4(_0x596f1f);
        },
        'Nkpsi': './JS_USER_AGENTS',
        'daBvp': 'JSUA',
        'hIXOt': '\'jdltapp;iPad;3.1.0;14.4;network/wifi;Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
        'dqKxF': 'https://invite-reward.jd.com/',
        'AvPqK': function(_0x276e19, _0x24af63) {
            return _0x276e19(_0x24af63);
        }
    };
    let _0x5b1b40 = +new Date();
    let _0x2e2211 = [_0x850eb2['WEFGH'], _0x850eb2['pbrIR'], _0x850eb2['XYPbe'], _0x850eb2['JDtgx'], _0x850eb2['NeeLU'], _0x850eb2['tLyoN']][Math['floor'](_0x850eb2['nDnTP'](Math['random'](), 0x6))];
    var _0x5f4bfb = {
        'Host': _0x850eb2['EjZOE'],
        'accept': _0x850eb2['zjiAX'],
        'content-type': _0x850eb2['fIDnI'],
        'origin': _0x850eb2['pazJU'],
        'accept-language': _0x850eb2['bifHk'],
        'user-agent': $['isNode']() ? process['env']['JS_USER_AGENT'] ? process['env']['JS_USER_AGENT'] : _0x850eb2['lGhnD'](require, _0x850eb2['Nkpsi'])['USER_AGENT'] : $['getdata'](_0x850eb2['daBvp']) ? $['getdata'](_0x850eb2['daBvp']) : _0x850eb2['hIXOt'],
        'referer': _0x850eb2['dqKxF'],
        'Cookie': cookie
    };
    var _0x31f623 = 'functionId=InviteFriendApiService&body={"method":"attendInviteActivity","data":{"inviterPin":"' + _0x850eb2['AvPqK'](encodeURIComponent, _0x2e2211) + '","channel":1,"token":"","frontendInitStatus":""}}&referer=-1&eid=eidIf3dd8121b7sdmiBLGdxRR46OlWyh62kFAZogTJFnYqqRkwgr63%2BdGmMlcv7EQJ5v0HBic81xHXzXLwKM6fh3i963zIa7Ym2v5ehnwo2B7uDN92Q0&aid=&client=ios&clientVersion=14.4&networkType=wifi&fp=-1&appid=market-task-h5&_t=' + _0x5b1b40;
    var _0x365af6 = {
        'url': 'https://api.m.jd.com/?t=' + +new Date(),
        'headers': _0x5f4bfb,
        'body': _0x31f623
    };
    $['post'](_0x365af6, (_0x311875, _0x3d08c0, _0x4c5a9d) => {});
}

function taskPostUrl(_0x2d23cc, _0x4802d8) {
    var _0x334b43 = {
        'TJscO': function(_0x4694ad, _0x29aedc) {
            return _0x4694ad(_0x29aedc);
        },
        'WsPsY': 'api.m.jd.com',
        'rMlnA': '*/*',
        'NjnyF': 'keep-alive',
        'MigQU': function(_0x4fe99f, _0x382719) {
            return _0x4fe99f(_0x382719);
        },
        'QjukW': './JS_USER_AGENTS',
        'ujLaV': 'JSUA',
        'MyyGZ': '\'jdltapp;iPad;3.1.0;14.4;network/wifi;Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
        'WwALt': 'zh-Hans-CN;q=1,en-CN;q=0.9',
        'tszvl': 'gzip, deflate, br',
        'DatDA': 'application/x-www-form-urlencoded',
        'ZdAep': 'https://an.jd.com/babelDiy/Zeus/q1eB6WUB8oC4eH1BsCLWvQakVsX/index.html'
    };
    return {
        'url': 'https://api.m.jd.com/',
        'body': 'appid=activities_platform&functionId=' + _0x2d23cc + '&body=' + _0x334b43['TJscO'](escape, JSON['stringify'](_0x4802d8)) + '&t=' + +new Date(),
        'headers': {
            'Cookie': cookie,
            'Host': _0x334b43['WsPsY'],
            'Accept': _0x334b43['rMlnA'],
            'Connection': _0x334b43['NjnyF'],
            'user-agent': $['isNode']() ? process['env']['JS_USER_AGENT'] ? process['env']['JS_USER_AGENT'] : _0x334b43['MigQU'](require, _0x334b43['QjukW'])['USER_AGENT'] : $['getdata'](_0x334b43['ujLaV']) ? $['getdata'](_0x334b43['ujLaV']) : _0x334b43['MyyGZ'],
            'Accept-Language': _0x334b43['WwALt'],
            'Accept-Encoding': _0x334b43['tszvl'],
            'Content-Type': _0x334b43['DatDA'],
            'referer': _0x334b43['ZdAep']
        }
    };
}

function taskGetUrl(_0x197a70, _0x2a27bf) {
    var _0x28a989 = {
        'NzGRi': function(_0x4a2e2a, _0x4c3e7a) {
            return _0x4a2e2a(_0x4c3e7a);
        },
        'ygYsm': 'api.m.jd.com',
        'ekVey': '*/*',
        'gIPow': 'keep-alive',
        'etSCI': './JS_USER_AGENTS',
        'nXNJP': 'JSUA',
        'SLKTF': '\'jdltapp;iPad;3.1.0;14.4;network/wifi;Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
        'hxvvw': 'zh-Hans-CN;q=1,en-CN;q=0.9',
        'KyYyB': 'gzip, deflate, br',
        'jsgvA': 'application/x-www-form-urlencoded',
        'iSQXv': 'https://an.jd.com/babelDiy/Zeus/q1eB6WUB8oC4eH1BsCLWvQakVsX/index.html'
    };
    return {
        'url': 'https://api.m.jd.com/?appid=activities_platform&functionId=' + _0x197a70 + '&body=' + _0x28a989['NzGRi'](escape, JSON['stringify'](_0x2a27bf)) + '&t=' + +new Date(),
        'headers': {
            'Cookie': cookie,
            'Host': _0x28a989['ygYsm'],
            'Accept': _0x28a989['ekVey'],
            'Connection': _0x28a989['gIPow'],
            'user-agent': $['isNode']() ? process['env']['JS_USER_AGENT'] ? process['env']['JS_USER_AGENT'] : _0x28a989['NzGRi'](require, _0x28a989['etSCI'])['USER_AGENT'] : $['getdata'](_0x28a989['nXNJP']) ? $['getdata'](_0x28a989['nXNJP']) : _0x28a989['SLKTF'],
            'Accept-Language': _0x28a989['hxvvw'],
            'Accept-Encoding': _0x28a989['KyYyB'],
            'Content-Type': _0x28a989['jsgvA'],
            'referer': _0x28a989['iSQXv']
        }
    };
};
_0xodK = 'jsjiami.com.v6'


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
        "User-Agent": $.isNode() ? (process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : (require('./USER_AGENTS').USER_AGENT)) : ($.getdata('JDUA') ? $.getdata('JDUA') : "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1")
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

function safeGet(data) {
  try {
    if (typeof JSON.parse(data) == "object") {
      return true;
    }
  } catch (e) {
    console.log(e);
    console.log(`京东服务器访问数据为空，请检查自身设备网络情况`);
    return false;
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
