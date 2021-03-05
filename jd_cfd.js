/*
京喜财富岛
根据github@MoPoQAQ 财富岛脚本修改而来。无需京喜token,只需京东cookie即可.
cron 5 0,8,13,19 * * * jd_cfd.js
更新时间：2021-3-5
活动入口：京喜APP-我的-京喜财富岛

已支持IOS双京东账号,Node.js支持N个京东账号
脚本兼容: QuantumultX, Surge, Loon, JSBox, Node.js
============Quantumultx===============
[task_local]
#京喜财富岛
5 0,8,13,19 * * * https://gitee.com/lxk0301/jd_scripts/raw/master/jd_cfd.js, tag=京喜财富岛, img-url=https://raw.githubusercontent.com/58xinian/icon/master/jxcfd.png, enabled=true

================Loon==============
[Script]
cron "5 0,8,13,19 * * *" script-path=https://gitee.com/lxk0301/jd_scripts/raw/master/jd_cfd.js,tag=京喜财富岛

===============Surge=================
京喜财富岛 = type=cron,cronexp="5 0,8,13,19 * * *",wake-system=1,timeout=3600,script-path=https://gitee.com/lxk0301/jd_scripts/raw/master/jd_cfd.js

============小火箭=========
京喜财富岛 = type=cron,script-path=https://gitee.com/lxk0301/jd_scripts/raw/master/jd_cfd.js, cronexpr="5 0,8,13,19 * * *", timeout=3600, enable=true
 */
const $ = new Env("京喜财富岛");
const JD_API_HOST = "https://m.jingxi.com/";
const notify = $.isNode() ? require('./sendNotify') : '';
const jdCookieNode = $.isNode() ? require("./jdCookie.js") : "";
$.showLog = $.getdata("cfd_showLog") ? $.getdata("cfd_showLog") === "true" : false;
$.notifyTime = $.getdata("cfd_notifyTime");
$.result = [];
let cookiesArr = [], cookie = '', token;

/*
 *Progcessed By JSDec in 3.86s
 *JSDec - JSDec.js.org
 */
const randomCount = $['isNode']() ? 0x14 : 0x5;
if ($['isNode']()) {
    Object['keys'](jdCookieNode)['forEach'](_0x4befff => {
        cookiesArr['push'](jdCookieNode[_0x4befff]);
    });
    if (process['env']['JD_DEBUG'] && process['env']['JD_DEBUG'] === 'false') console['log'] = () => {};
} else {
    cookiesArr = [$['getdata']('CookieJD'), $['getdata']('CookieJD2'), ...jsonParse($['getdata']('CookiesJD') || '[]')['map'](_0x38bd1c => _0x38bd1c['cookie'])]['filter'](_0x5e5b4b => !!_0x5e5b4b);
}!(async () => {
    var _0x126c5f = {
        'gpzcn': function(_0x43ca58) {
            return _0x43ca58();
        },
        'PlLUS': function(_0xe86d93, _0x36e4f7) {
            return _0xe86d93 !== _0x36e4f7;
        },
        'bASHn': 'vNxnI',
        'WYKyH': '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取',
        'hnVgG': 'https://bean.m.jd.com/bean/signIndex.action',
        'ElSaL': function(_0x363302) {
            return _0x363302();
        },
        'IEqgu': function(_0xdf5aa9, _0x55d28d) {
            return _0xdf5aa9(_0x55d28d);
        },
        'EAxnm': 'http://adguard.mseweb.tk/shareCodes/cfd.json',
        'hFsaM': function(_0x3048d6, _0x4b4e6c) {
            return _0x3048d6 < _0x4b4e6c;
        },
        'HCbQY': function(_0x1daab5, _0x116898) {
            return _0x1daab5(_0x116898);
        },
        'KVqaY': function(_0x3ea14d, _0x18c368) {
            return _0x3ea14d + _0x18c368;
        },
        'aCKqW': function(_0x1e944a) {
            return _0x1e944a();
        },
        'euqII': function(_0x1dc89c) {
            return _0x1dc89c();
        }
    };
    await _0x126c5f['gpzcn'](requireConfig);
    if (!cookiesArr[0x0]) {
        if (_0x126c5f['PlLUS'](_0x126c5f['bASHn'], _0x126c5f['bASHn'])) {
            $['log']('\n【🏝寻宝大作战】【' + strBrandName + '】开宝箱：宝箱已开启过！');
        } else {
            $['msg']($['name'], _0x126c5f['WYKyH'], _0x126c5f['hnVgG'], {
                'open-url': _0x126c5f['hnVgG']
            });
            return;
        }
    }
    let _0xf59469 = await _0x126c5f['ElSaL'](getAuthorShareCode),
        _0x5a2efe = await _0x126c5f['IEqgu'](getAuthorShareCode, _0x126c5f['EAxnm']);
    $['strMyShareIds'] = [..._0xf59469 && _0xf59469['shareId'] || [], ..._0x5a2efe && _0x5a2efe['shareId'] || []];
    $['strGroupIds'] = [..._0xf59469 && _0xf59469['strGroupIds'] || [], ..._0x5a2efe && _0x5a2efe['strGroupIds'] || []];
    for (let _0x5b7c69 = 0x0; _0x126c5f['hFsaM'](_0x5b7c69, cookiesArr['length']); _0x5b7c69++) {
        if (cookiesArr[_0x5b7c69]) {
            cookie = cookiesArr[_0x5b7c69];
            $['UserName'] = _0x126c5f['HCbQY'](decodeURIComponent, cookie['match'](/pt_pin=(.+?);/) && cookie['match'](/pt_pin=(.+?);/)[0x1]);
            $['index'] = _0x126c5f['KVqaY'](_0x5b7c69, 0x1);
            $['nickName'] = '';
            $['isLogin'] = !![];
            $['nickName'] = '';
            await _0x126c5f['ElSaL'](TotalBean);
            console['log']('\n开始【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']) + '\x0a');
            if (!$['isLogin']) {
                $['msg']($['name'], '【提示】cookie已失效', '京东账号' + $['index'] + ' ' + ($['nickName'] || $['UserName']) + '\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action', {
                    'open-url': _0x126c5f['hnVgG']
                });
                if ($['isNode']()) {
                    await notify['sendNotify']($['name'] + 'cookie已失效 - ' + $['UserName'], '京东账号' + $['index'] + ' ' + $['UserName'] + '\n请重新登录获取cookie');
                }
                continue;
            }
            token = await _0x126c5f['ElSaL'](getJxToken);
            $['allTask'] = [];
            $['info'] = {};
            await _0x126c5f['ElSaL'](shareCodesFormat);
            await _0x126c5f['aCKqW'](cfd);
            await _0x126c5f['aCKqW'](helpFriend);
        }
    }
    await $['wait'](0x1f4);
    await _0x126c5f['euqII'](showMsg);
})()['catch'](_0x138f05 => $['logErr'](_0x138f05))['finally'](() => $['done']());

function helpFriend() {
    var _0xbec143 = {
        'KvNgW': function(_0x2826c7) {
            return _0x2826c7();
        },
        'KKHCL': function(_0x473331, _0xc6e047) {
            return _0x473331 !== _0xc6e047;
        },
        'XVOUA': 'hcysE',
        'HyAeJ': function(_0x566881, _0x407806) {
            return _0x566881(_0x407806);
        },
        'PmuLC': function(_0x2242ec, _0x5b5193) {
            return _0x2242ec === _0x5b5193;
        },
        'sKdUA': 'ihzJO',
        'rqftD': function(_0x24b4a4, _0x59e713) {
            return _0x24b4a4(_0x59e713);
        },
        'osZtF': function(_0x2e89b1, _0x57acd1) {
            return _0x2e89b1 !== _0x57acd1;
        },
        'CUDMZ': 'vgmGz'
    };
    return new Promise(async _0x27c0e7 => {
        if (_0xbec143['KKHCL'](_0xbec143['XVOUA'], _0xbec143['XVOUA'])) {
            $['logErr'](e, resp);
        } else {
            $['canHelp'] = !![];
            for (let _0x23ee51 of $['newShareCodes']['filter'](_0x430d88 => !_0x430d88['includes']('GroupId'))) {
                console['log']('去助力好友 ' + _0x23ee51);
                if (token) {
                    await _0xbec143['HyAeJ'](createSuperAssistUser, _0x23ee51);
                } else {
                    if (_0xbec143['PmuLC'](_0xbec143['sKdUA'], _0xbec143['sKdUA'])) {
                        console['log']('此账号的用户名为中文,暂不能进行超级主力\n');
                    } else {
                        _0xbec143['KvNgW'](_0x27c0e7);
                    }
                }
                await _0xbec143['rqftD'](createAssistUser, _0x23ee51);
                await $['wait'](0x7d0);
                if (!$['canHelp']) break;
            }
            if (token) {
                $['canHelp'] = !![];
                for (let _0x1444d4 of $['strGroupIds']) {
                    if (_0xbec143['osZtF'](_0xbec143['CUDMZ'], _0xbec143['CUDMZ'])) {
                        $['msg']($['name'], '', '' + $['result']['join']('\x0a'));
                    } else {
                        console['log']('去参加寻宝大作战' + _0x1444d4);
                        await _0xbec143['rqftD'](joinGroup, _0x1444d4);
                        await $['wait'](0x7d0);
                        if (!$['canHelp']) break;
                    }
                }
            }
            _0xbec143['KvNgW'](_0x27c0e7);
        }
    });
}
async function cfd() {
    var _0x342fb7 = {
        'eDIgs': function(_0x4606c9) {
            return _0x4606c9();
        },
        'uiYCI': function(_0x5dd4e0) {
            return _0x5dd4e0();
        },
        'UpNcV': function(_0x58ae93, _0x33d707) {
            return _0x58ae93(_0x33d707);
        },
        'xiTEu': function(_0x41d661, _0x4e34cf) {
            return _0x41d661(_0x4e34cf);
        },
        'qPMwJ': function(_0x4a89f9) {
            return _0x4a89f9();
        },
        'VeJFj': function(_0x25e848, _0x1bd441) {
            return _0x25e848(_0x1bd441);
        },
        'EaLEi': function(_0x12271f, _0x47a77c) {
            return _0x12271f(_0x47a77c);
        },
        'ogVWe': function(_0x26e5b6, _0x171596) {
            return _0x26e5b6 - _0x171596;
        },
        'wPLwW': function(_0x2c27eb, _0xef182e) {
            return _0x2c27eb !== _0xef182e;
        },
        'KrGMf': 'Zklur',
        'CLPYG': 'rOYDr'
    };
    try {
        const _0x3bbfcc = await _0x342fb7['eDIgs'](getUserInfo);
        await $['wait'](0x1f4);
        await _0x342fb7['eDIgs'](querySignList);
        await $['wait'](0x1f4);
        await _0x342fb7['uiYCI'](getMoney);
        await $['wait'](0x1f4);
        await _0x342fb7['UpNcV'](getTaskList, 0x0);
        await $['wait'](0x1f4);
        await _0x342fb7['xiTEu'](browserTask, 0x0);
        await $['wait'](0x1f4);
        await _0x342fb7['uiYCI'](treasureHunt);
        await $['wait'](0x1f4);
        await _0x342fb7['qPMwJ'](friendCircle);
        await $['wait'](0x1f4);
        await _0x342fb7['VeJFj'](getTaskList, 0x1);
        await $['wait'](0x1f4);
        await _0x342fb7['VeJFj'](browserTask, 0x1);
        await $['wait'](0x1f4);
        await _0x342fb7['qPMwJ'](funCenterState);
        await $['wait'](0x1f4);
        await _0x342fb7['qPMwJ'](openPeriodBox);
        await $['wait'](0x1f4);
        await _0x342fb7['qPMwJ'](submitGroupId);
        await $['wait'](0x1f4);
        const _0x227058 = await _0x342fb7['EaLEi'](getUserInfo, ![]);
        $['result']['push']('【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']), '【💵财富值】任务前: ' + _0x3bbfcc['ddwMoney'] + '\n【💵财富值】任务后: ' + _0x227058['ddwMoney'], '【💵财富值】净增值: ' + _0x342fb7['ogVWe'](_0x227058['ddwMoney'], _0x3bbfcc['ddwMoney']) + '\x0a');
    } catch (_0x33983f) {
        if (_0x342fb7['wPLwW'](_0x342fb7['KrGMf'], _0x342fb7['CLPYG'])) {
            $['logErr'](_0x33983f);
        } else {
            _0x342fb7['eDIgs'](resolve);
        }
    }
}

function getAuthorShareCode(_0x28dae5 = 'http://adguard.mseweb.tk/shareCodes/cfd.json') {
    var _0x225c35 = {
        'DhyKw': function(_0x487439, _0x186397) {
            return _0x487439 !== _0x186397;
        },
        'GlLdh': 'VwThe',
        'TJOeW': function(_0x33c4a9, _0x29ad40) {
            return _0x33c4a9 !== _0x29ad40;
        },
        'jxzCy': 'StRPj',
        'oeIkx': function(_0x41c5fd, _0x379980) {
            return _0x41c5fd(_0x379980);
        },
        'OxzZo': function(_0x111b95) {
            return _0x111b95();
        },
        'Bjtkz': function(_0x37b884, _0xb9c4d0) {
            return _0x37b884 + _0xb9c4d0;
        },
        'pdrSF': '你的【🏝寻宝大作战】互助码: ',
        'UktOr': '(每天都变化,旧的不可用)',
        'wDZKg': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/87.0.4280.88'
    };
    return new Promise(_0x15b7f1 => {
        var _0x140393 = {
            'WZHJG': function(_0x2cd2ca, _0xe074f1) {
                return _0x225c35['Bjtkz'](_0x2cd2ca, _0xe074f1);
            },
            'kEzIq': _0x225c35['pdrSF'],
            'hTnae': _0x225c35['UktOr']
        };
        $['get']({
            'url': _0x28dae5,
            'headers': {
                'User-Agent': _0x225c35['wDZKg']
            }
        }, async (_0x39cc37, _0x419b0b, _0x4da4fb) => {
            if (_0x225c35['DhyKw'](_0x225c35['GlLdh'], _0x225c35['GlLdh'])) {
                $['log'](_0x140393['WZHJG'](_0x140393['WZHJG'](_0x140393['kEzIq'], strGroupId), _0x140393['hTnae']));
                $['strGroupIds']['push'](strGroupId);
            } else {
                try {
                    if (_0x225c35['TJOeW'](_0x225c35['jxzCy'], _0x225c35['jxzCy'])) {
                        if (_0x39cc37) {
                            console['log']('' + JSON['stringify'](_0x39cc37));
                            console['log']($['name'] + ' API请求失败，请检查网路重试');
                        } else {
                            if (_0x4da4fb) {
                                console['log']('随机取' + randomCount + '个码放到您固定的互助码后面(不影响已有固定互助)');
                                _0x4da4fb = JSON['parse'](_0x4da4fb);
                            }
                        }
                    } else {
                        _0x225c35['oeIkx'](_0x15b7f1, JSON['parse'](_0x4da4fb));
                    }
                } catch (_0x56a4a4) {} finally {
                    _0x225c35['OxzZo'](_0x15b7f1);
                }
            }
        });
    });
}

function getJxToken() {
    var _0x1fa24a = {
        'olDgV': 'abcdefghijklmnopqrstuvwxyz1234567890',
        'BeGOO': function(_0x33a69d, _0x4960fd) {
            return _0x33a69d < _0x4960fd;
        },
        'FexlO': function(_0x5032c9, _0x2b4b33) {
            return _0x5032c9(_0x2b4b33);
        },
        'uyQRc': function(_0x3dc755, _0x44f03e) {
            return _0x3dc755 * _0x44f03e;
        },
        'hDeeS': function(_0x564d90, _0x176f9a) {
            return _0x564d90 !== _0x176f9a;
        },
        'tFfcr': '活动太火爆了',
        'Tovrl': '任务为成就任务或者未到任务时间',
        'GKtSL': function(_0x267ea6, _0xe1c044) {
            return _0x267ea6 + _0xe1c044;
        },
        'hxOcm': function(_0x245cc8, _0x5d9034) {
            return _0x245cc8 === _0x5d9034;
        },
        'YFhMC': function(_0x471ccb, _0x1f1b5c) {
            return _0x471ccb === _0x1f1b5c;
        },
        'UqWBq': 'qOGSD',
        'JPbzm': function(_0x45bd56, _0x450863) {
            return _0x45bd56(_0x450863);
        },
        'ZEUEl': function(_0x3bc76d, _0x3096db) {
            return _0x3bc76d(_0x3096db);
        }
    };

    function _0x31e9a4(_0x472eeb) {
        let _0x343e8d = _0x1fa24a['olDgV'];
        let _0x4a563b = '';
        for (let _0x2962a6 = 0x0; _0x1fa24a['BeGOO'](_0x2962a6, _0x472eeb); _0x2962a6++) {
            _0x4a563b += _0x343e8d[_0x1fa24a['FexlO'](parseInt, _0x1fa24a['uyQRc'](Math['random'](), _0x343e8d['length']))];
        }
        return _0x4a563b;
    }
    return new Promise(_0x4428d2 => {
        if (_0x1fa24a['YFhMC'](_0x1fa24a['UqWBq'], _0x1fa24a['UqWBq'])) {
            let _0x38b444 = _0x1fa24a['JPbzm'](_0x31e9a4, 0x28);
            let _0x40d679 = (+new Date())['toString']();
            if (!cookie['match'](/pt_pin=(.+?);/)) {
                console['log']('此账号cookie填写不规范,你的pt_pin=xxx后面没分号(;)\n');
                _0x1fa24a['JPbzm'](_0x4428d2, null);
            }
            let _0x51d675 = cookie['match'](/pt_pin=(.+?);/)[0x1];
            let _0x3e6439 = $['md5']('' + _0x1fa24a['ZEUEl'](decodeURIComponent, _0x51d675) + _0x40d679 + _0x38b444 + 'tPOamqCuk9NLgVPAljUyIHcPRmKlVxDy')['toString']();
            _0x1fa24a['ZEUEl'](_0x4428d2, {
                'timestamp': _0x40d679,
                'phoneid': _0x38b444,
                'farm_jstoken': _0x3e6439
            });
        } else {
            const {
                msg,
                ret,
                data: {
                    prizeInfo = ''
                } = {}
            } = JSON['parse'](data);
            let _0x484cc3 = '';
            if (_0x1fa24a['hDeeS'](msg['indexOf'](_0x1fa24a['tFfcr']), -0x1)) {
                _0x484cc3 = _0x1fa24a['Tovrl'];
            } else {
                _0x484cc3 = _0x1fa24a['GKtSL'](msg, prizeInfo) ? ' 获得财富值 ¥ ' + JSON['parse'](prizeInfo)['ddwMoney'] : '';
            }
            $['log']('\x0a' + taskName + '【领日常奖励】：' + _0x484cc3 + '\x0a' + ($['showLog'] ? data : ''));
            _0x1fa24a['FexlO'](_0x4428d2, _0x1fa24a['hxOcm'](ret, 0x0));
        }
    });
}

function getUserInfo(_0xabce02 = !![]) {
    var _0x4958bd = {
        'HpzcH': 'ddwMoney',
        'iKbbx': function(_0x3ee709, _0x189702) {
            return _0x3ee709 === _0x189702;
        },
        'RJjZs': 'jSsQY',
        'MxGrP': 'DPGIC',
        'VWZjd': function(_0x1c7135, _0x43873d) {
            return _0x1c7135(_0x43873d);
        },
        'iFXbe': function(_0x28c8b9) {
            return _0x28c8b9();
        },
        'TLEHm': function(_0x42940b, _0x26d729) {
            return _0x42940b !== _0x26d729;
        },
        'dXFLi': '活动太火爆了',
        'BwOGn': '任务进行中或者未到任务时间',
        'csyfY': function(_0x2a7897, _0x58dcb0) {
            return _0x2a7897 !== _0x58dcb0;
        },
        'UESOL': 'bHbwU',
        'XCpjr': 'JCulf',
        'uLwdo': function(_0x54cd58, _0x42a768) {
            return _0x54cd58(_0x42a768);
        }
    };
    return new Promise(async _0x2b4886 => {
        var _0x2df785 = {
            'LZTeu': _0x4958bd['HpzcH'],
            'BPfNq': function(_0xbeaaf8, _0x269371) {
                return _0x4958bd['iKbbx'](_0xbeaaf8, _0x269371);
            },
            'luULT': _0x4958bd['RJjZs'],
            'dkHgR': _0x4958bd['MxGrP'],
            'hWRNj': function(_0x3173bd, _0x975441) {
                return _0x4958bd['VWZjd'](_0x3173bd, _0x975441);
            },
            'dCPGp': function(_0x55197c) {
                return _0x4958bd['iFXbe'](_0x55197c);
            },
            'FnkPG': function(_0x34be94, _0x3fb588) {
                return _0x4958bd['TLEHm'](_0x34be94, _0x3fb588);
            },
            'eLiJk': _0x4958bd['dXFLi'],
            'coAfb': _0x4958bd['BwOGn']
        };
        if (_0x4958bd['csyfY'](_0x4958bd['UESOL'], _0x4958bd['XCpjr'])) {
            $['get'](_0x4958bd['uLwdo'](taskUrl, 'user/QueryUserInfo'), (_0x2a1aa4, _0xf03e41, _0x3e0306) => {
                try {
                    _0x3e0306 = JSON['parse'](_0x3e0306);
                    const {
                        iret,
                        SceneList = {},
                        XbStatus: {
                            XBDetail = [],
                            dwXBRemainCnt
                        } = {},
                        ddwMoney,
                        dwIsNewUser,
                        sErrMsg,
                        strMyShareId,
                        strPin,
                        dwLevel
                    } = _0x3e0306;
                    $['log']('\n获取用户信息：' + sErrMsg + '\x0a' + ($['showLog'] ? _0x3e0306 : ''));
                    $['log']('\n当前等级:' + dwLevel + ',财富值:' + _0x3e0306[_0x2df785['LZTeu']] + '\x0a');
                    if (_0xabce02) {
                        if (_0x2df785['BPfNq'](_0x2df785['luULT'], _0x2df785['dkHgR'])) {
                            $['logErr'](e, _0xf03e41);
                        } else {
                            console['log']('财富岛好友互助码每次运行都变化,旧的可继续使用');
                            $['log']('\n【京东账号' + $['index'] + '（' + $['nickName'] + '）的' + $['name'] + '好友互助码】' + strMyShareId + '\x0a\x0a');
                        }
                    }
                    $['info'] = {
                        ...$['info'],
                        'SceneList': SceneList,
                        'XBDetail': XBDetail,
                        'dwXBRemainCnt': dwXBRemainCnt,
                        'ddwMoney': ddwMoney,
                        'dwIsNewUser': dwIsNewUser,
                        'strMyShareId': strMyShareId,
                        'strPin': strPin,
                        'dwLevel': dwLevel
                    };
                    _0x2df785['hWRNj'](_0x2b4886, {
                        'SceneList': SceneList,
                        'XBDetail': XBDetail,
                        'dwXBRemainCnt': dwXBRemainCnt,
                        'ddwMoney': ddwMoney,
                        'dwIsNewUser': dwIsNewUser,
                        'strMyShareId': strMyShareId,
                        'strPin': strPin
                    });
                } catch (_0x3aa34f) {
                    $['logErr'](_0x3aa34f, _0xf03e41);
                } finally {
                    _0x2df785['dCPGp'](_0x2b4886);
                }
            });
        } else {
            const {
                msg,
                ret
            } = JSON['parse'](data);
            $['log']('\x0a' + taskName + '【做日常任务】：' + (_0x2df785['FnkPG'](msg['indexOf'](_0x2df785['eLiJk']), -0x1) ? _0x2df785['coAfb'] : msg) + '\x0a' + ($['showLog'] ? data : ''));
            _0x2df785['hWRNj'](_0x2b4886, _0x2df785['BPfNq'](ret, 0x0));
        }
    });
}

function querySignList() {
    var _0x5f3d46 = {
        'QUgpi': function(_0x14124a, _0x457e5e) {
            return _0x14124a === _0x457e5e;
        },
        'kZoSZ': 'GcRKn',
        'hQTPl': function(_0x7bbdb9, _0x23ce3a, _0x2141ed) {
            return _0x7bbdb9(_0x23ce3a, _0x2141ed);
        },
        'AUuaj': function(_0x4cb01c) {
            return _0x4cb01c();
        },
        'pFgGK': function(_0x278fa2, _0x98d4c) {
            return _0x278fa2 || _0x98d4c;
        },
        'mopAy': function(_0x4c6d35, _0x4a0ae8) {
            return _0x4c6d35 !== _0x4a0ae8;
        },
        'WLppT': 'QvIAy',
        'PwEPc': 'VLDhH',
        'zHMRP': function(_0x404484, _0x12fbf8) {
            return _0x404484(_0x12fbf8);
        }
    };
    return new Promise(async _0x35129a => {
        if (_0x5f3d46['mopAy'](_0x5f3d46['WLppT'], _0x5f3d46['PwEPc'])) {
            $['get'](_0x5f3d46['zHMRP'](taskUrl, 'task/QuerySignListV2'), async (_0x28d924, _0x305ea8, _0x594feb) => {
                try {
                    if (_0x5f3d46['QUgpi'](_0x5f3d46['kZoSZ'], _0x5f3d46['kZoSZ'])) {
                        const {
                            iRet,
                            sData: {
                                Sign = [{}],
                                dwUserFlag
                            },
                            sErrMsg
                        } = JSON['parse'](_0x594feb);
                        $['log']('\n签到列表：' + sErrMsg + '\x0a' + ($['showLog'] ? _0x594feb : ''));
                        const [{
                            dwStatus,
                            ddwMoney
                        }] = Sign['filter'](_0x1afbe9 => _0x1afbe9['dwShowFlag'] === 0x1);
                        if (_0x5f3d46['QUgpi'](dwStatus, 0x0)) {
                            await _0x5f3d46['hQTPl'](userSignReward, dwUserFlag, ddwMoney);
                        } else {
                            $['log']('\n📌签到：你今日已签到过啦，请明天再来');
                        }
                    } else {
                        $['logErr'](e, _0x305ea8);
                    }
                } catch (_0x207fae) {
                    $['logErr'](_0x207fae, _0x305ea8);
                } finally {
                    _0x5f3d46['AUuaj'](_0x35129a);
                }
            });
        } else {
            try {
                const {
                    iRet,
                    sData: {
                        ddwMoney
                    },
                    sErrMsg
                } = JSON['parse'](data);
                $['log']('\n📌签到：' + sErrMsg + '，获得财富 ¥ ' + _0x5f3d46['pFgGK'](ddwMoney, 0x0) + '\x0a' + ($['showLog'] ? data : ''));
            } catch (_0x15e5e9) {
                $['logErr'](_0x15e5e9, resp);
            } finally {
                _0x5f3d46['AUuaj'](_0x35129a);
            }
        }
    });
}
async function userSignReward(_0x26ff2d, _0x4f4462) {
    var _0x525e4e = {
        'TwjQN': function(_0xedc731) {
            return _0xedc731();
        },
        'gnZtN': function(_0x21f3c8, _0x190563) {
            return _0x21f3c8 !== _0x190563;
        },
        'xrbcN': 'Eirdf',
        'EqpJI': 'oviFz',
        'HQHbg': function(_0x3994ed, _0x21573c) {
            return _0x3994ed || _0x21573c;
        },
        'NIRrJ': function(_0x261bc6, _0x50b9a8) {
            return _0x261bc6 !== _0x50b9a8;
        },
        'dODKe': 'uHhLp',
        'einVD': 'ccJYM',
        'gWBWA': function(_0x3ce9ea) {
            return _0x3ce9ea();
        },
        'KmWyM': 'tdTFO',
        'SNqjk': 'DBqnK',
        'pXJnN': function(_0x4c8adb, _0x2826cc, _0x38cf7f) {
            return _0x4c8adb(_0x2826cc, _0x38cf7f);
        }
    };
    return new Promise(async _0x238fed => {
        if (_0x525e4e['NIRrJ'](_0x525e4e['KmWyM'], _0x525e4e['SNqjk'])) {
            $['get'](_0x525e4e['pXJnN'](taskUrl, 'task/UserSignRewardV2', 'dwReqUserFlag=' + _0x26ff2d + '&ddwMoney=' + _0x4f4462), async (_0x39e0b4, _0x2763af, _0xc14c87) => {
                var _0x5531db = {
                    'xLHPR': function(_0x4bccbe) {
                        return _0x525e4e['TwjQN'](_0x4bccbe);
                    }
                };
                try {
                    if (_0x525e4e['gnZtN'](_0x525e4e['xrbcN'], _0x525e4e['EqpJI'])) {
                        const {
                            iRet,
                            sData: {
                                ddwMoney
                            },
                            sErrMsg
                        } = JSON['parse'](_0xc14c87);
                        $['log']('\n📌签到：' + sErrMsg + '，获得财富 ¥ ' + _0x525e4e['HQHbg'](ddwMoney, 0x0) + '\x0a' + ($['showLog'] ? _0xc14c87 : ''));
                    } else {
                        $['logErr'](e, _0x2763af);
                    }
                } catch (_0x2e19b3) {
                    if (_0x525e4e['NIRrJ'](_0x525e4e['dODKe'], _0x525e4e['einVD'])) {
                        $['logErr'](_0x2e19b3, _0x2763af);
                    } else {
                        _0x5531db['xLHPR'](_0x238fed);
                    }
                } finally {
                    _0x525e4e['gWBWA'](_0x238fed);
                }
            });
        } else {
            $['logErr'](e, resp);
        }
    });
}

function getMoney() {
    var _0x5cd380 = {
        'Envkq': 'CookieJD',
        'Cmjfj': 'CookieJD2',
        'LEPka': function(_0x2dfc72, _0x1f196f) {
            return _0x2dfc72(_0x1f196f);
        },
        'nXiRN': 'CookiesJD',
        'SJpVC': function(_0x523cf7, _0x4e394b) {
            return _0x523cf7 === _0x4e394b;
        },
        'FXtAj': 'QFWlJ',
        'yawuE': 'bCDSs',
        'DHmDV': '1001',
        'TbhKk': '1002',
        'TmQFo': '1003',
        'WPlme': function(_0x267acb, _0x1649a4) {
            return _0x267acb >= _0x1649a4;
        },
        'ybPpE': function(_0x4cd790, _0x3bb24) {
            return _0x4cd790(_0x3bb24);
        },
        'bLizP': function(_0x15653c, _0x46d824) {
            return _0x15653c !== _0x46d824;
        },
        'vRjtQ': 'KsoAe',
        'Uvlsd': function(_0x8ee02b, _0x5620be, _0x4ef410) {
            return _0x8ee02b(_0x5620be, _0x4ef410);
        },
        'FuBDX': function(_0x1cf425, _0x146e48) {
            return _0x1cf425(_0x146e48);
        },
        'LwmYr': function(_0x125ef7, _0x190815) {
            return _0x125ef7 + _0x190815;
        },
        'VpgYZ': function(_0x165654, _0x416e19) {
            return _0x165654 + _0x416e19;
        },
        'oYeXk': function(_0x29c67c, _0x517e31) {
            return _0x29c67c !== _0x517e31;
        },
        'cuUoO': 'piBZp',
        'lYRbV': 'JmXxM',
        'XORry': 'kqiwT',
        'jpZqd': 'TTsfZ',
        'BFwRm': function(_0x45e816, _0xd39abc, _0x4cf3dc, _0x47afb0) {
            return _0x45e816(_0xd39abc, _0x4cf3dc, _0x47afb0);
        },
        'ezLCg': 'nqjmI',
        'xwzpx': function(_0x529701) {
            return _0x529701();
        }
    };
    return new Promise(async _0x1822ed => {
        if (_0x5cd380['SJpVC'](_0x5cd380['FXtAj'], _0x5cd380['yawuE'])) {
            const {
                iRet,
                sErrMsg,
                taskinfo = []
            } = JSON['parse'](data);
            $['allTask'] = taskinfo['filter'](_0x3a5a07 => _0x3a5a07['dwAwardStatus'] === 0x1);
            $['log']('\n获取【🎖成就任务】列表 ' + sErrMsg + '，总共' + $['allTask']['length'] + '个任务！\n' + ($['showLog'] ? data : ''));
        } else {
            let _0x1853c5 = $['info']['SceneList'];
            let _0x42ac55 = [],
                _0x140be1 = [_0x5cd380['DHmDV'], _0x5cd380['TbhKk'], _0x5cd380['TmQFo']];
            _0x42ac55 = Object['keys'](_0x1853c5);
            _0x42ac55 = _0x140be1['filter'](_0x3b4e0f => _0x42ac55['every'](_0x419b15 => _0x3b4e0f !== _0x419b15));
            console['log']('待开通场景ID列表sceneList;' + JSON['stringify'](_0x42ac55));
            for (let _0xd04ed5 of _0x42ac55) {
                if (_0x5cd380['SJpVC'](_0xd04ed5, _0x5cd380['TbhKk']) && _0x5cd380['WPlme']($['info']['dwLevel'], 0xb)) await _0x5cd380['ybPpE'](activeScene, _0xd04ed5);
                if (_0x5cd380['SJpVC'](_0xd04ed5, _0x5cd380['TmQFo']) && _0x5cd380['WPlme']($['info']['dwLevel'], 0x1a)) await _0x5cd380['ybPpE'](activeScene, _0xd04ed5);
            }
            for (var _0x543b70 of Object['keys']($['info']['SceneList'])) {
                try {
                    if (_0x5cd380['bLizP'](_0x5cd380['vRjtQ'], _0x5cd380['vRjtQ'])) {
                        return JSON['parse'](str);
                    } else {
                        await $['wait'](0x1f4);
                        await _0x5cd380['Uvlsd'](getMoney_dwSource_1, _0x543b70, _0x1853c5);
                        const _0x1c4925 = _0x5cd380['FuBDX'](eval, _0x5cd380['LwmYr'](_0x5cd380['VpgYZ']('(', JSON['stringify'](_0x1853c5[_0x543b70]['EmployeeList'])), ')'));
                        if (_0x5cd380['bLizP'](_0x1c4925, '')) {
                            if (_0x5cd380['oYeXk'](_0x5cd380['cuUoO'], _0x5cd380['lYRbV'])) {
                                for (var _0x28406e of Object['keys'](_0x1c4925)) {
                                    if (_0x5cd380['SJpVC'](_0x5cd380['XORry'], _0x5cd380['jpZqd'])) {
                                        console['log']('财富岛好友互助码每次运行都变化,旧的可继续使用');
                                        $['log']('\n【京东账号' + $['index'] + '（' + $['nickName'] + '）的' + $['name'] + '好友互助码】' + strMyShareId + '\x0a\x0a');
                                    } else {
                                        await $['wait'](0x1f4);
                                        await _0x5cd380['BFwRm'](getMoney_dwSource_2, _0x543b70, _0x1853c5, _0x28406e);
                                    }
                                }
                            } else {
                                cookiesArr = [$['getdata'](_0x5cd380['Envkq']), $['getdata'](_0x5cd380['Cmjfj']), ..._0x5cd380['LEPka'](jsonParse, $['getdata'](_0x5cd380['nXiRN']) || '[]')['map'](_0x54072e => _0x54072e['cookie'])]['filter'](_0x2eb84e => !!_0x2eb84e);
                            }
                        }
                        await $['wait'](0x1f4);
                        if (token) await _0x5cd380['Uvlsd'](getMoney_dwSource_3, _0x543b70, _0x1853c5);
                        await _0x5cd380['FuBDX'](employeeAward, _0x543b70);
                    }
                } catch (_0x576334) {
                    $['logErr'](_0x576334, resp);
                } finally {
                    if (_0x5cd380['oYeXk'](_0x5cd380['ezLCg'], _0x5cd380['ezLCg'])) {
                        console['log']('随机取' + randomCount + '个码放到您固定的互助码后面(不影响已有固定互助)');
                        data = JSON['parse'](data);
                    } else {
                        _0x5cd380['xwzpx'](_0x1822ed);
                    }
                }
            }
        }
    });
}

function getMoney_dwSource_1(_0x576fc6, _0x24b985) {
    var _0x4197b9 = {
        'ebMIq': '*/*',
        'ZVvgD': 'keep-alive',
        'VuRex': 'https://st.jingxi.com/fortune_island/index.html?ptag=138631.26.55',
        'OZSmq': 'gzip, deflate, br',
        'WYyeQ': 'm.jingxi.com',
        'YzeCk': function(_0x402629, _0x44504a) {
            return _0x402629 + _0x44504a;
        },
        'adNVl': function(_0xe9a136, _0x1816c6) {
            return _0xe9a136 * _0x1816c6;
        },
        'MpQcT': 'zh-cn',
        'jxsWG': function(_0x5c573f, _0x594101) {
            return _0x5c573f !== _0x594101;
        },
        'jarDP': 'wTSqM',
        'BkcHE': function(_0x30d929, _0x59b7de) {
            return _0x30d929 === _0x59b7de;
        },
        'iNYDY': 'lnoPh',
        'GlcXR': function(_0x1c1316, _0x2b9343) {
            return _0x1c1316 == _0x2b9343;
        },
        'CshSo': 'success',
        'OWhhC': function(_0x32a3c2, _0xf8cd00) {
            return _0x32a3c2 || _0xf8cd00;
        },
        'lHraQ': 'RlnTY',
        'expMa': function(_0x3e3204) {
            return _0x3e3204();
        },
        'aWDty': function(_0x35bb06, _0x1f6942, _0x2cd626) {
            return _0x35bb06(_0x1f6942, _0x2cd626);
        }
    };
    return new Promise(async _0x2029af => {
        $['get'](_0x4197b9['aWDty'](taskUrl, 'user/GetMoney', 'dwSceneId=' + _0x576fc6 + '&strEmployeeId=undefined&dwSource=1'), async (_0x31d8d6, _0xe064ad, _0xb8fec8) => {
            var _0x5e731f = {
                'GPUMz': _0x4197b9['ebMIq'],
                'occDE': _0x4197b9['ZVvgD'],
                'lxKjm': _0x4197b9['VuRex'],
                'oXzkT': _0x4197b9['OZSmq'],
                'ORbdi': _0x4197b9['WYyeQ'],
                'RbJFV': function(_0x5d24de, _0x4bd6cc) {
                    return _0x4197b9['YzeCk'](_0x5d24de, _0x4bd6cc);
                },
                'LgOhK': function(_0x32a233, _0x5874b0) {
                    return _0x4197b9['adNVl'](_0x32a233, _0x5874b0);
                },
                'IDlYC': _0x4197b9['MpQcT']
            };
            if (_0x4197b9['jxsWG'](_0x4197b9['jarDP'], _0x4197b9['jarDP'])) {
                $['logErr'](e, _0xe064ad);
            } else {
                try {
                    if (_0x4197b9['BkcHE'](_0x4197b9['iNYDY'], _0x4197b9['iNYDY'])) {
                        const {
                            iRet,
                            dwMoney,
                            sErrMsg
                        } = JSON['parse'](_0xb8fec8);
                        $['log']('\x0a【' + _0x24b985[_0x576fc6]['strSceneName'] + '】🏝岛主 : ' + (_0x4197b9['GlcXR'](sErrMsg, _0x4197b9['CshSo']) ? '获取财富值：¥ ' + _0x4197b9['OWhhC'](dwMoney, 0x0) : sErrMsg) + ' \x0a' + ($['showLog'] ? _0xb8fec8 : ''));
                    } else {
                        const {
                            ret,
                            data: {
                                userTaskStatusList = []
                            } = {},
                            msg
                        } = JSON['parse'](_0xb8fec8);
                        $['allTask'] = userTaskStatusList['filter'](_0x2d6461 => _0x2d6461['awardStatus'] !== 0x1);
                        $['log']('\n获取【📆日常任务】列表 ' + msg + '，总共' + $['allTask']['length'] + '个任务！\n' + ($['showLog'] ? _0xb8fec8 : ''));
                    }
                } catch (_0x3f3bc1) {
                    if (_0x4197b9['jxsWG'](_0x4197b9['lHraQ'], _0x4197b9['lHraQ'])) {
                        return {
                            'url': JD_API_HOST + 'newtasksys/newtasksys_front/' + function_path + '?strZone=jxcfd&bizCode=jxcfd&source=jxcfd&dwEnv=7&_cfd_t=' + Date['now']() + '&ptag=138631.26.55&' + body + '&_ste=1&_=' + Date['now']() + '&sceneval=2&g_login_type=1&g_ty=ls',
                            'headers': {
                                'Cookie': cookie,
                                'Accept': _0x5e731f['GPUMz'],
                                'Connection': _0x5e731f['occDE'],
                                'Referer': _0x5e731f['lxKjm'],
                                'Accept-Encoding': _0x5e731f['oXzkT'],
                                'Host': _0x5e731f['ORbdi'],
                                'User-Agent': 'jdpingou;iPhone;3.15.2;14.2.1;ea00763447803eb0f32045dcba629c248ea53bb3;network/wifi;model/iPhone13,2;appBuild/100365;ADID/00000000-0000-0000-0000-000000000000;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/0;hasOCPay/0;supportBestPay/0;session/' + _0x5e731f['RbJFV'](_0x5e731f['LgOhK'](Math['random'], 0x62), 0x1) + ';pap/JA2015_311210;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
                                'Accept-Language': _0x5e731f['IDlYC']
                            }
                        };
                    } else {
                        $['logErr'](_0x3f3bc1, _0xe064ad);
                    }
                } finally {
                    _0x4197b9['expMa'](_0x2029af);
                }
            }
        });
    });
}

function getMoney_dwSource_2(_0x357f64, _0x53b7bc, _0x2c0d74) {
    var _0x21074c = {
        'qKkEX': function(_0x262d2f, _0x53f5b0) {
            return _0x262d2f || _0x53f5b0;
        },
        'OrGmo': function(_0x1be5d1, _0x2dc0ee) {
            return _0x1be5d1(_0x2dc0ee);
        },
        'Evtia': function(_0x275e61) {
            return _0x275e61();
        },
        'jfNed': function(_0x47353f, _0x343ba8) {
            return _0x47353f !== _0x343ba8;
        },
        'kaHsB': 'hMSJH',
        'HoyLg': 'aYCDw',
        'GPzAQ': function(_0x11ceb0, _0x4bd043) {
            return _0x11ceb0 == _0x4bd043;
        },
        'ccdLH': 'success',
        'jIPFh': function(_0xcd28b1) {
            return _0xcd28b1();
        },
        'UdTvd': function(_0x17057b, _0x2d7a01, _0x3dfccc) {
            return _0x17057b(_0x2d7a01, _0x3dfccc);
        }
    };
    return new Promise(async _0x450f66 => {
        var _0x198ad6 = {
            'dTDze': function(_0x328d9b, _0x5380ff) {
                return _0x21074c['qKkEX'](_0x328d9b, _0x5380ff);
            },
            'xndbX': function(_0x3cd27a, _0x15e381) {
                return _0x21074c['OrGmo'](_0x3cd27a, _0x15e381);
            },
            'piWbe': function(_0x5bae44) {
                return _0x21074c['Evtia'](_0x5bae44);
            },
            'TQerH': function(_0x40c5f1, _0x48198a) {
                return _0x21074c['jfNed'](_0x40c5f1, _0x48198a);
            },
            'ULIgV': _0x21074c['kaHsB'],
            'eLZXW': _0x21074c['HoyLg'],
            'mwuIj': function(_0x1783be, _0x1d2b51) {
                return _0x21074c['GPzAQ'](_0x1783be, _0x1d2b51);
            },
            'VUpSe': _0x21074c['ccdLH'],
            'QcKSa': function(_0x341bad) {
                return _0x21074c['jIPFh'](_0x341bad);
            }
        };
        $['get'](_0x21074c['UdTvd'](taskUrl, 'user/GetMoney', 'dwSceneId=' + _0x357f64 + '&strEmployeeId=' + _0x2c0d74 + '&dwSource=2'), async (_0x1f90f6, _0x66c36c, _0x5b2ebd) => {
            var _0x263b13 = {
                'oourB': function(_0xecf202, _0x17b33b) {
                    return _0x198ad6['dTDze'](_0xecf202, _0x17b33b);
                },
                'FIbxB': function(_0x3dc156, _0x217b0d) {
                    return _0x198ad6['xndbX'](_0x3dc156, _0x217b0d);
                },
                'VygCr': function(_0x3958dd) {
                    return _0x198ad6['piWbe'](_0x3958dd);
                }
            };
            try {
                if (_0x198ad6['TQerH'](_0x198ad6['ULIgV'], _0x198ad6['eLZXW'])) {
                    const {
                        dwMoney,
                        iRet,
                        sErrMsg,
                        strPin
                    } = JSON['parse'](_0x5b2ebd);
                    $['log']('\x0a【' + _0x53b7bc[_0x357f64]['strSceneName'] + '】👬好友: ' + (_0x198ad6['mwuIj'](sErrMsg, _0x198ad6['VUpSe']) ? '获取普通助力财富值：¥ ' + _0x198ad6['dTDze'](dwMoney, 0x0) : sErrMsg) + ' \x0a' + ($['showLog'] ? _0x5b2ebd : ''));
                } else {
                    try {
                        const {
                            iRet,
                            dwExpericnce,
                            sErrMsg
                        } = JSON['parse'](_0x5b2ebd);
                        $['log']('\x0a【' + place + '】🎁寻宝：' + sErrMsg + ' ，获取随机奖励：¥ ' + _0x263b13['oourB'](dwExpericnce, 0x0) + ' \x0a' + ($['showLog'] ? _0x5b2ebd : ''));
                        _0x263b13['FIbxB'](_0x450f66, iRet);
                    } catch (_0xf61858) {
                        $['logErr'](_0xf61858, _0x66c36c);
                    } finally {
                        _0x263b13['VygCr'](_0x450f66);
                    }
                }
            } catch (_0x49abef) {
                $['logErr'](_0x49abef, _0x66c36c);
            } finally {
                _0x198ad6['QcKSa'](_0x450f66);
            }
        });
    });
}

function getMoney_dwSource_3(_0x19a0c5, _0x2f9766) {
    var _0x5bfc7e = {
        'gROHS': function(_0x167020, _0xdf300e) {
            return _0x167020 == _0xdf300e;
        },
        'oDQwY': 'success',
        'vySUG': function(_0x1e1fe5, _0x2b779b) {
            return _0x1e1fe5 || _0x2b779b;
        },
        'zWBLB': function(_0x2eddd4, _0x32a433) {
            return _0x2eddd4 !== _0x32a433;
        },
        'BNtXQ': 'TLzpw',
        'ANPds': function(_0x1605a2) {
            return _0x1605a2();
        },
        'oBVbw': function(_0x4a01c2, _0x502e92, _0x15ab4b) {
            return _0x4a01c2(_0x502e92, _0x15ab4b);
        },
        'FBKxW': 'timestamp',
        'eZyfC': 'phoneid',
        'sOrBt': 'farm_jstoken'
    };
    return new Promise(async _0x4c9a47 => {
        $['get'](_0x5bfc7e['oBVbw'](taskUrl, 'user/GetMoney', 'dwSceneId=' + _0x19a0c5 + '&strEmployeeId=&dwSource=3&strPgtimestamp=' + token[_0x5bfc7e['FBKxW']] + '&strPhoneID=' + token[_0x5bfc7e['eZyfC']] + '&strPgUUNum=' + token[_0x5bfc7e['sOrBt']]), async (_0x46b39b, _0x2dbb2c, _0x413f44) => {
            try {
                const {
                    iRet,
                    dwMoney,
                    sErrMsg,
                    strPin
                } = JSON['parse'](_0x413f44);
                $['log']('\x0a【' + _0x2f9766[_0x19a0c5]['strSceneName'] + '】👬好友: ' + (_0x5bfc7e['gROHS'](sErrMsg, _0x5bfc7e['oDQwY']) ? '获取超级助力财富值：¥ ' + _0x5bfc7e['vySUG'](dwMoney, 0x0) : sErrMsg) + ' \x0a' + ($['showLog'] ? _0x413f44 : ''));
            } catch (_0x8665e9) {
                if (_0x5bfc7e['zWBLB'](_0x5bfc7e['BNtXQ'], _0x5bfc7e['BNtXQ'])) {
                    shareCodes = process['env']['JDCFD_SHARECODES']['split']('\x0a');
                } else {
                    $['logErr'](_0x8665e9, _0x2dbb2c);
                }
            } finally {
                _0x5bfc7e['ANPds'](_0x4c9a47);
            }
        });
    });
}

function employeeAward(_0x394de9) {
    var _0x3008f2 = {
        'aMuZM': function(_0x3e098f, _0x5b071d) {
            return _0x3e098f === _0x5b071d;
        },
        'qhNJA': function(_0x412987, _0x9afb18) {
            return _0x412987 === _0x9afb18;
        },
        'qSkkz': function(_0x131cd4) {
            return _0x131cd4();
        },
        'UBExE': function(_0x3285be, _0x597667) {
            return _0x3285be == _0x597667;
        },
        'NXnPg': 'success',
        'CoblA': function(_0x1fa983, _0xae7de6) {
            return _0x1fa983 || _0xae7de6;
        },
        'bOgSW': '1001',
        'lYQxJ': 'strName',
        'ynaAt': '1002',
        'ghYmI': '1003',
        'HzbaW': function(_0x57c5c9, _0x1ee3c6) {
            return _0x57c5c9 !== _0x1ee3c6;
        },
        'qADnQ': 'peFSz',
        'cJpro': 'YGNgR',
        'EebWA': function(_0x1aa133, _0x2f6457) {
            return _0x1aa133 !== _0x2f6457;
        },
        'eeQop': function(_0x3c8ff0, _0x57eb53) {
            return _0x3c8ff0 * _0x57eb53;
        },
        'MFaRt': function(_0x2654a3, _0x232ffb) {
            return _0x2654a3(_0x232ffb);
        },
        'GTcwH': 'HHfKF',
        'ABtIh': 'YmVFl',
        'mTAWG': 'm.jingxi.com',
        'Ekfsu': '*/*',
        'bPecn': 'jdpingou;iPad;4.2.2;14.4;network/wifi;Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
        'UxIGJ': 'zh-cn',
        'pEVdx': 'https://st.jingxi.com/fortune_island/index.html?ptag=7155.9.47'
    };
    return new Promise(async _0xb6aa18 => {
        var _0xf51db9 = {
            'KvQIN': function(_0x190cfd, _0x6fc06c) {
                return _0x3008f2['aMuZM'](_0x190cfd, _0x6fc06c);
            },
            'ZMuer': function(_0x5ac602, _0x280aab) {
                return _0x3008f2['qhNJA'](_0x5ac602, _0x280aab);
            },
            'jddMe': function(_0x1c95de) {
                return _0x3008f2['qSkkz'](_0x1c95de);
            },
            'JuZan': function(_0x232635, _0x37aa34) {
                return _0x3008f2['UBExE'](_0x232635, _0x37aa34);
            },
            'Rnzky': _0x3008f2['NXnPg'],
            'XgxZH': function(_0x4fcb49, _0x3d788a) {
                return _0x3008f2['CoblA'](_0x4fcb49, _0x3d788a);
            },
            'ddCYh': function(_0x35fd5f, _0x316909) {
                return _0x3008f2['qhNJA'](_0x35fd5f, _0x316909);
            },
            'ATCvJ': _0x3008f2['bOgSW'],
            'AFDAo': _0x3008f2['lYQxJ'],
            'Yitce': _0x3008f2['ynaAt'],
            'ibdEx': _0x3008f2['ghYmI'],
            'snmbO': function(_0x21f8da, _0x16894c) {
                return _0x3008f2['HzbaW'](_0x21f8da, _0x16894c);
            },
            'hRrhG': _0x3008f2['qADnQ'],
            'zJxfD': _0x3008f2['cJpro'],
            'MBXBM': function(_0x3934b0, _0x460585) {
                return _0x3008f2['EebWA'](_0x3934b0, _0x460585);
            },
            'Bsoar': function(_0x379400, _0x17dd74) {
                return _0x3008f2['eeQop'](_0x379400, _0x17dd74);
            },
            'zRnaZ': function(_0x2b71f0, _0x4adc98) {
                return _0x3008f2['MFaRt'](_0x2b71f0, _0x4adc98);
            },
            'Ydswa': _0x3008f2['GTcwH'],
            'yiPWN': _0x3008f2['ABtIh']
        };
        const _0x2e369f = {
            'url': 'https://m.jingxi.com/jxcfd/user/AdvEmployeeAward?strZone=jxcfd&bizCode=jxcfd&source=jxcfd&dwEnv=7&_cfd_t=' + +new Date() + '&ptag=138631.26.55&dwSenceId=' + _0x394de9 + '&_=' + +new Date() + '&_stk=_cfd_t,bizCode,dwEnv,dwSenceId,ptag,source,strZone&h5st=20210304120622242;6980827292145544;10009;tk01wb8321c0ea8nNjg0a1JqVUlvqre776hbVd8Unm3xaodPUoxF6qk2nu5+3BL0+M/NCPfMBRDekvWYG0otooxd4ZA9;3a499b12485ae55f84ace34682b6bececd1e74be6ae82d880877f9e1c861d7d9&sceneval=2&g_login_type=1',
            'headers': {
                'Host': _0x3008f2['mTAWG'],
                'accept': _0x3008f2['Ekfsu'],
                'user-agent': _0x3008f2['bPecn'],
                'accept-language': _0x3008f2['UxIGJ'],
                'referer': _0x3008f2['pEVdx'],
                'Cookie': cookie
            }
        };
        $['get'](_0x2e369f, async (_0x8d0f58, _0x808585, _0x16982f) => {
            var _0x18aec1 = {
                'gjjXc': function(_0x163a3b, _0x5474a6) {
                    return _0xf51db9['JuZan'](_0x163a3b, _0x5474a6);
                },
                'gJfYi': _0xf51db9['Rnzky'],
                'zwOEn': function(_0x53f94b, _0x11eaac) {
                    return _0xf51db9['XgxZH'](_0x53f94b, _0x11eaac);
                }
            };
            try {
                const {
                    iRet,
                    sErrMsg,
                    strAwardDetail
                } = JSON['parse'](_0x16982f);
                if (_0xf51db9['ddCYh'](iRet, 0x0)) {
                    switch (_0x394de9) {
                        case _0xf51db9['ATCvJ']:
                            console['log']('【欢乐牧场】获得 ' + strAwardDetail[_0xf51db9['AFDAo']] + ' 红包');
                            break;
                        case _0xf51db9['Yitce']:
                            console['log']('【便利店】获得 ' + strAwardDetail[_0xf51db9['AFDAo']] + ' 红包');
                            break;
                        case _0xf51db9['ibdEx']:
                            console['log']('【京喜餐厅】获得 ' + strAwardDetail[_0xf51db9['AFDAo']] + ' 红包');
                            break;
                        default:
                            console['log']('【未知场景】获得 ' + strAwardDetail[_0xf51db9['AFDAo']] + ' 红包');
                    }
                } else {
                    if (_0xf51db9['snmbO'](_0xf51db9['hRrhG'], _0xf51db9['zJxfD'])) {
                        switch (_0x394de9) {
                            case _0xf51db9['ATCvJ']:
                                console['log']('【欢乐牧场领取红包】 ' + sErrMsg);
                                break;
                            case _0xf51db9['Yitce']:
                                console['log']('【便利店领取红包】' + sErrMsg);
                                break;
                            case _0xf51db9['ibdEx']:
                                console['log']('【京喜餐厅领取红包】' + sErrMsg);
                                break;
                            default:
                                console['log']('【未知场景领取红包】' + sErrMsg);
                        }
                    } else {
                        try {
                            console['log']('\n普通助力(招工)结果:' + _0x16982f);
                            const {
                                iRet
                            } = JSON['parse'](_0x16982f);
                            if (_0xf51db9['KvQIN'](iRet, 0x7d5) || _0xf51db9['ZMuer'](iRet, 0x270f)) $['canHelp'] = ![];
                        } catch (_0x2c26fb) {} finally {
                            _0xf51db9['jddMe'](_0xb6aa18);
                        }
                    }
                }
                if (_0xf51db9['MBXBM'](iRet, 0x0)) {
                    console['log'](JSON['stringify'](_0x16982f) + ',退出');
                    return;
                }
                await $['wait'](_0xf51db9['Bsoar'](0x2, 0x3e8));
                await _0xf51db9['zRnaZ'](employeeAward, _0x394de9);
            } catch (_0x198e51) {
                if (_0xf51db9['ddCYh'](_0xf51db9['Ydswa'], _0xf51db9['yiPWN'])) {
                    const {
                        dwMoney,
                        iRet,
                        sErrMsg,
                        strPin
                    } = JSON['parse'](_0x16982f);
                    $['log']('\x0a【' + sceneList[_0x394de9]['strSceneName'] + '】👬好友: ' + (_0x18aec1['gjjXc'](sErrMsg, _0x18aec1['gJfYi']) ? '获取普通助力财富值：¥ ' + _0x18aec1['zwOEn'](dwMoney, 0x0) : sErrMsg) + ' \x0a' + ($['showLog'] ? _0x16982f : ''));
                } else {
                    $['logErr'](_0x198e51, _0x808585);
                }
            } finally {
                _0xf51db9['jddMe'](_0xb6aa18);
            }
        });
    });
}

function friendCircle() {
    var _0x1c8e63 = {
        'CpjQr': 'HH:mm',
        'svwGs': function(_0x1acb3f, _0x162e5b) {
            return _0x1acb3f !== _0x162e5b;
        },
        'ymrfN': 'MZkIh',
        'ruNyG': 'zUJbK',
        'ssEIi': function(_0x39f41b, _0x36f609) {
            return _0x39f41b > _0x36f609;
        },
        'hlqFz': function(_0x2f0022, _0x296df8) {
            return _0x2f0022(_0x296df8);
        },
        'UCQts': function(_0x32df99, _0x3f224a) {
            return _0x32df99 === _0x3f224a;
        },
        'RDICJ': 'ybXYv',
        'Dsful': 'MeIXk',
        'LDRvO': 'phiEw',
        'Jihcg': function(_0x25f111) {
            return _0x25f111();
        },
        'XKvbM': function(_0x5344d8, _0x2d895d) {
            return _0x5344d8 === _0x2d895d;
        },
        'FMzOP': function(_0x372ed2) {
            return _0x372ed2();
        },
        'cNkMD': function(_0x4dbb2d, _0x5e96b6) {
            return _0x4dbb2d !== _0x5e96b6;
        },
        'QysSr': 'vzfZU',
        'TdzHv': function(_0x1d4563, _0x2af901, _0x394ad4) {
            return _0x1d4563(_0x2af901, _0x394ad4);
        }
    };
    return new Promise(async _0x13b82a => {
        var _0x504c4f = {
            'KJbfh': function(_0x2303af, _0xe367e1) {
                return _0x1c8e63['XKvbM'](_0x2303af, _0xe367e1);
            },
            'XfvVW': function(_0x40837b) {
                return _0x1c8e63['FMzOP'](_0x40837b);
            }
        };
        if (_0x1c8e63['cNkMD'](_0x1c8e63['QysSr'], _0x1c8e63['QysSr'])) {
            $['shareCodesArr']['push'](shareCodes[item]);
        } else {
            $['get'](_0x1c8e63['TdzHv'](taskUrl, 'user/FriendCircle', 'dwPageIndex=1&dwPageSize=20'), async (_0x14615b, _0x8b6d2a, _0x977af5) => {
                var _0x165fd5 = {
                    'XsqPs': _0x1c8e63['CpjQr']
                };
                try {
                    if (_0x1c8e63['svwGs'](_0x1c8e63['ymrfN'], _0x1c8e63['ruNyG'])) {
                        const {
                            MomentList = [], iRet, sErrMsg, strShareId
                        } = JSON['parse'](_0x977af5);
                        for (moment of MomentList) {
                            if (_0x1c8e63['svwGs'](moment['strShareId'], strShareId) && _0x1c8e63['ssEIi'](moment['dwAccessMoney'], 0x0)) {
                                await _0x1c8e63['hlqFz'](queryFriendIsland, moment['strShareId']);
                                await $['wait'](0x1f4);
                            }
                        }
                    } else {
                        const _0x45f1f1 = $['notifyTime']['split'](',')['map'](_0x1c897f => _0x1c897f['split'](':'));
                        const _0x59979c = $['time'](_0x165fd5['XsqPs'])['split'](':');
                        $['log']('\x0a' + JSON['stringify'](_0x45f1f1));
                        $['log']('\x0a' + JSON['stringify'](_0x59979c));
                        if (_0x45f1f1['some'](_0x315bde => _0x315bde[0x0] === _0x59979c[0x0] && (!_0x315bde[0x1] || _0x315bde[0x1] === _0x59979c[0x1]))) {
                            $['msg']($['name'], '', '' + $['result']['join']('\x0a'));
                        }
                    }
                } catch (_0x591442) {
                    if (_0x1c8e63['UCQts'](_0x1c8e63['RDICJ'], _0x1c8e63['RDICJ'])) {
                        $['logErr'](_0x591442, _0x8b6d2a);
                    } else {
                        console['log']('\n普通助力(招工)结果:' + _0x977af5);
                        const {
                            iRet
                        } = JSON['parse'](_0x977af5);
                        if (_0x504c4f['KJbfh'](iRet, 0x7d5) || _0x504c4f['KJbfh'](iRet, 0x270f)) $['canHelp'] = ![];
                    }
                } finally {
                    if (_0x1c8e63['svwGs'](_0x1c8e63['Dsful'], _0x1c8e63['LDRvO'])) {
                        _0x1c8e63['Jihcg'](_0x13b82a);
                    } else {
                        $['log']('\n【🏝寻宝大作战】【' + strBrandName + '】开宝箱：未达到宝箱开启条件，快去邀请好友助力吧！');
                        _0x504c4f['XfvVW'](_0x13b82a);
                    }
                }
            });
        }
    });
}

function queryFriendIsland(_0x1fffdd) {
    var _0x14b505 = {
        'trZlx': function(_0x4142e6) {
            return _0x4142e6();
        },
        'kBEsS': '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取',
        'Angui': 'https://bean.m.jd.com/bean/signIndex.action',
        'fdDgv': '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie',
        'LCVdW': function(_0x4d48f6, _0x569651) {
            return _0x4d48f6 == _0x569651;
        },
        'gQXik': 'success',
        'oqMio': function(_0xb12153, _0x1eb191) {
            return _0xb12153 || _0x1eb191;
        },
        'eNBEa': function(_0x27ecce, _0x11141c) {
            return _0x27ecce !== _0x11141c;
        },
        'LFICH': 'xaAFP',
        'flcFt': function(_0xc3898b, _0x1e35d3) {
            return _0xc3898b === _0x1e35d3;
        },
        'dtjrP': function(_0x3350be, _0x1b6050) {
            return _0x3350be(_0x1b6050);
        },
        'inPAp': function(_0x42000e, _0x2aea1c) {
            return _0x42000e + _0x2aea1c;
        },
        'TZlFs': function(_0x6c2a6c, _0x158bf0) {
            return _0x6c2a6c + _0x158bf0;
        },
        'TMjdy': 'nGPQt',
        'CocwH': function(_0x5bd4bc, _0x5f2d6f, _0x13e48c, _0x22e959, _0x2d60f3) {
            return _0x5bd4bc(_0x5f2d6f, _0x13e48c, _0x22e959, _0x2d60f3);
        },
        'AmytY': 'LNPDv',
        'qelQL': function(_0xf6c0c4) {
            return _0xf6c0c4();
        },
        'PMqKQ': function(_0x3d1acf, _0x2562f7) {
            return _0x3d1acf === _0x2562f7;
        },
        'WmODu': 'TopYK',
        'WFbnh': function(_0xc0e74b, _0xefec1f, _0x1d560e) {
            return _0xc0e74b(_0xefec1f, _0x1d560e);
        }
    };
    return new Promise(async _0x34e41a => {
        var _0xb71d48 = {
            'vDAPt': _0x14b505['kBEsS'],
            'BlTTK': _0x14b505['Angui'],
            'xTrIX': _0x14b505['fdDgv'],
            'SEEoc': function(_0x936517, _0x1c8eca) {
                return _0x14b505['LCVdW'](_0x936517, _0x1c8eca);
            },
            'gxHGT': _0x14b505['gQXik'],
            'cMWId': function(_0x5d60b1, _0x416f58) {
                return _0x14b505['oqMio'](_0x5d60b1, _0x416f58);
            },
            'OGvaT': function(_0x2eb47b, _0x6d5e22) {
                return _0x14b505['eNBEa'](_0x2eb47b, _0x6d5e22);
            },
            'fsgQm': _0x14b505['LFICH'],
            'eFSgC': function(_0x3edfa6, _0x57217b) {
                return _0x14b505['flcFt'](_0x3edfa6, _0x57217b);
            },
            'jSDQp': function(_0x1948ac, _0xf97409) {
                return _0x14b505['dtjrP'](_0x1948ac, _0xf97409);
            },
            'dtlsv': function(_0xb7aa4f, _0x1e980f) {
                return _0x14b505['inPAp'](_0xb7aa4f, _0x1e980f);
            },
            'mInpG': function(_0x5d416c, _0x310dd1) {
                return _0x14b505['TZlFs'](_0x5d416c, _0x310dd1);
            },
            'iiEob': function(_0x4d0006, _0x3a4ccd) {
                return _0x14b505['flcFt'](_0x4d0006, _0x3a4ccd);
            },
            'NHEhQ': _0x14b505['TMjdy'],
            'hqZuM': function(_0x26a6df, _0x108388, _0xc0eae2, _0x5537d5, _0x2c6385) {
                return _0x14b505['CocwH'](_0x26a6df, _0x108388, _0xc0eae2, _0x5537d5, _0x2c6385);
            },
            'HQLwb': _0x14b505['AmytY'],
            'XyZMh': function(_0x11c93c) {
                return _0x14b505['qelQL'](_0x11c93c);
            }
        };
        if (_0x14b505['PMqKQ'](_0x14b505['WmODu'], _0x14b505['WmODu'])) {
            $['get'](_0x14b505['WFbnh'](taskUrl, 'user/QueryFriendIsland', 'strShareId=' + _0x1fffdd + '&sceneval=2'), async (_0x5ede8f, _0xcbe9cd, _0x493cd1) => {
                var _0x1ec709 = {
                    'lbzrA': function(_0x4627a4, _0x3752cd) {
                        return _0xb71d48['SEEoc'](_0x4627a4, _0x3752cd);
                    },
                    'qByZC': _0xb71d48['gxHGT'],
                    'CmdLK': function(_0xa68909, _0x1ea8bd) {
                        return _0xb71d48['cMWId'](_0xa68909, _0x1ea8bd);
                    }
                };
                if (_0xb71d48['OGvaT'](_0xb71d48['fsgQm'], _0xb71d48['fsgQm'])) {
                    $['msg']($['name'], _0xb71d48['vDAPt'], _0xb71d48['BlTTK'], {
                        'open-url': _0xb71d48['BlTTK']
                    });
                    return;
                } else {
                    try {
                        const {
                            SceneList = {}, dwStealMoney, sErrMsg, strFriendNick
                        } = JSON['parse'](_0x493cd1);
                        if (_0xb71d48['eFSgC'](sErrMsg, _0xb71d48['gxHGT'])) {
                            const _0x53b317 = _0xb71d48['jSDQp'](eval, _0xb71d48['dtlsv'](_0xb71d48['mInpG']('(', JSON['stringify'](SceneList)), ')'));
                            const _0x40fe65 = Object['keys'](SceneList);
                            for (sceneId of _0x40fe65) {
                                if (_0xb71d48['iiEob'](_0xb71d48['NHEhQ'], _0xb71d48['NHEhQ'])) {
                                    await _0xb71d48['hqZuM'](stealMoney, _0x1fffdd, sceneId, strFriendNick, _0x53b317[sceneId]['strSceneName']);
                                    await $['wait'](0x1f4);
                                } else {
                                    console['log'](e);
                                    $['msg']($['name'], '', _0xb71d48['xTrIX']);
                                    return [];
                                }
                            }
                        }
                    } catch (_0x3c5446) {
                        $['logErr'](_0x3c5446, _0xcbe9cd);
                    } finally {
                        if (_0xb71d48['iiEob'](_0xb71d48['HQLwb'], _0xb71d48['HQLwb'])) {
                            _0xb71d48['XyZMh'](_0x34e41a);
                        } else {
                            const {
                                iRet,
                                dwMoney,
                                sErrMsg,
                                strPin
                            } = JSON['parse'](_0x493cd1);
                            $['log']('\x0a【' + sceneList[_key]['strSceneName'] + '】👬好友: ' + (_0x1ec709['lbzrA'](sErrMsg, _0x1ec709['qByZC']) ? '获取超级助力财富值：¥ ' + _0x1ec709['CmdLK'](dwMoney, 0x0) : sErrMsg) + ' \x0a' + ($['showLog'] ? _0x493cd1 : ''));
                        }
                    }
                }
            });
        } else {
            _0x14b505['trZlx'](_0x34e41a);
        }
    });
}

function stealMoney(_0x254976, _0x590608, _0x16098a, _0x32887c) {
    var _0x2a636f = {
        'ZSBwv': function(_0x115782, _0x187036) {
            return _0x115782 !== _0x187036;
        },
        'ImexN': 'IwwBv',
        'xoWIV': 'xrrhh',
        'ygAFb': 'wgaKf',
        'wzgwg': 'RqlDX',
        'obJUN': function(_0x3dddcb, _0x306b63) {
            return _0x3dddcb !== _0x306b63;
        },
        'mjGJX': 'kYDRw',
        'CilPJ': function(_0x158fa2) {
            return _0x158fa2();
        },
        'gvMnx': function(_0x39f702, _0x3662af) {
            return _0x39f702 == _0x3662af;
        },
        'KJdwZ': 'success',
        'lOJAV': function(_0x946bda, _0xeebe4) {
            return _0x946bda || _0xeebe4;
        },
        'WLGbs': function(_0xf499d7, _0x234a06, _0x19d6b3) {
            return _0xf499d7(_0x234a06, _0x19d6b3);
        }
    };
    return new Promise(async _0x22d2f6 => {
        var _0x4258a8 = {
            'CdnPa': function(_0x189c44) {
                return _0x2a636f['CilPJ'](_0x189c44);
            },
            'mFDrX': function(_0x517fa2, _0x2b3287) {
                return _0x2a636f['gvMnx'](_0x517fa2, _0x2b3287);
            },
            'wAxjU': _0x2a636f['KJdwZ'],
            'mPNKi': function(_0x2aaad2, _0x99d7af) {
                return _0x2a636f['lOJAV'](_0x2aaad2, _0x99d7af);
            }
        };
        $['get'](_0x2a636f['WLGbs'](taskUrl, 'user/StealMoney', 'strFriendId=' + _0x254976 + '&dwSceneId=' + _0x590608 + '&sceneval=2'), async (_0x16781b, _0x10c1e5, _0x3eb31a) => {
            if (_0x2a636f['ZSBwv'](_0x2a636f['ImexN'], _0x2a636f['xoWIV'])) {
                try {
                    const {
                        dwGetMoney,
                        iRet,
                        sErrMsg
                    } = JSON['parse'](_0x3eb31a);
                    $['log']('\n🤏偷取好友【' + _0x16098a + '】【' + _0x32887c + '】财富值：¥ ' + (dwGetMoney ? dwGetMoney : sErrMsg) + '\x0a' + ($['showLog'] ? _0x3eb31a : ''));
                } catch (_0x3d7681) {
                    if (_0x2a636f['ZSBwv'](_0x2a636f['ygAFb'], _0x2a636f['wzgwg'])) {
                        $['logErr'](_0x3d7681, _0x10c1e5);
                    } else {
                        $['log']('\x0a' + taskinfo['strTaskDescr'] + '【领成就奖励】：该成就任务未达到门槛}');
                    }
                } finally {
                    if (_0x2a636f['obJUN'](_0x2a636f['mjGJX'], _0x2a636f['mjGJX'])) {
                        _0x4258a8['CdnPa'](_0x22d2f6);
                    } else {
                        _0x2a636f['CilPJ'](_0x22d2f6);
                    }
                }
            } else {
                try {
                    const {
                        iRet,
                        dwMoney,
                        sErrMsg,
                        strPin
                    } = JSON['parse'](_0x3eb31a);
                    $['log']('\x0a【' + sceneList[_key]['strSceneName'] + '】👬好友: ' + (_0x4258a8['mFDrX'](sErrMsg, _0x4258a8['wAxjU']) ? '获取超级助力财富值：¥ ' + _0x4258a8['mPNKi'](dwMoney, 0x0) : sErrMsg) + ' \x0a' + ($['showLog'] ? _0x3eb31a : ''));
                } catch (_0x58df69) {
                    $['logErr'](_0x58df69, _0x10c1e5);
                } finally {
                    _0x4258a8['CdnPa'](_0x22d2f6);
                }
            }
        });
    });
}
async function treasureHunt() {
    var _0x2b8217 = {
        'zOWVs': function(_0x70b1e5) {
            return _0x70b1e5();
        },
        'nezWD': function(_0x3c7eb4, _0x12f7e3) {
            return _0x3c7eb4 > _0x12f7e3;
        },
        'oGhyB': function(_0xe938cc, _0x594703) {
            return _0xe938cc === _0x594703;
        },
        'oHXel': 'pdCPI',
        'sjMdP': 'lmmTn',
        'wJhIN': function(_0x225f1b, _0x56a56e) {
            return _0x225f1b < _0x56a56e;
        },
        'tvSBo': function(_0x342dbd, _0x5989b5) {
            return _0x342dbd !== _0x5989b5;
        },
        'NBzlo': 'nFaEd',
        'OSQZJ': function(_0x4d55f6, _0x183d01) {
            return _0x4d55f6 / _0x183d01;
        },
        'EpjSi': function(_0x53f961, _0x31ade9) {
            return _0x53f961(_0x31ade9);
        },
        'dKCPA': 'GCAoU',
        'zsaeA': 'fnqmk'
    };
    if (_0x2b8217['nezWD']($['info']['dwXBRemainCnt'], 0x0)) {
        if (_0x2b8217['oGhyB'](_0x2b8217['oHXel'], _0x2b8217['sjMdP'])) {
            _0x2b8217['zOWVs'](resolve);
        } else {
            const _0x5900e4 = $['info']['XBDetail'];
            for (let _0x201bdd = 0x0; _0x2b8217['wJhIN'](_0x201bdd, _0x5900e4['length']); _0x201bdd++) {
                if (_0x2b8217['tvSBo'](_0x2b8217['NBzlo'], _0x2b8217['NBzlo'])) {
                    if (_0x2b8217['nezWD'](process['env']['JDCFD_SHARECODES']['indexOf']('\x0a'), -0x1)) {
                        shareCodes = process['env']['JDCFD_SHARECODES']['split']('\x0a');
                    } else {
                        shareCodes = process['env']['JDCFD_SHARECODES']['split']('&');
                    }
                } else {
                    const {
                        ddwColdEndTm,
                        strIndex
                    } = _0x5900e4[_0x201bdd];
                    const _0x404a3c = Math['round'](_0x2b8217['OSQZJ'](new Date(), 0x3e8));
                    if (_0x2b8217['nezWD'](_0x404a3c, ddwColdEndTm)) {
                        await _0x2b8217['EpjSi'](doTreasureHunt, strIndex);
                        await $['wait'](0xbb8);
                    } else {
                        $['log']('\n🎁寻宝：宝藏冷却中，请等待冷却完毕');
                    }
                }
            }
        }
    } else {
        if (_0x2b8217['tvSBo'](_0x2b8217['dKCPA'], _0x2b8217['zsaeA'])) {
            $['log']('\n🎁寻宝：寻宝次数不足');
        } else {
            $['logErr'](e, resp);
        }
    }
}

function doTreasureHunt(_0x155762) {
    var _0x485550 = {
        'qxjfJ': function(_0x46097a, _0x4ed54f) {
            return _0x46097a || _0x4ed54f;
        },
        'kFAHk': function(_0x5028e7, _0x44710f) {
            return _0x5028e7(_0x44710f);
        },
        'xGIsI': function(_0xa7c9f3, _0x3d1eb0) {
            return _0xa7c9f3 === _0x3d1eb0;
        },
        'Kxnev': 'Aqelr',
        'TJPJS': 'ZlDJO',
        'oiLMK': function(_0x4183b0) {
            return _0x4183b0();
        },
        'sfneE': function(_0x52eaa0, _0x5d030d, _0x44920b) {
            return _0x52eaa0(_0x5d030d, _0x44920b);
        }
    };
    return new Promise(async _0x6b9bfb => {
        $['get'](_0x485550['sfneE'](taskUrl, 'consume/TreasureHunt', 'strIndex=' + _0x155762 + '&dwIsShare=0'), async (_0x556203, _0x531e32, _0x1e7062) => {
            try {
                const {
                    iRet,
                    dwExpericnce,
                    sErrMsg
                } = JSON['parse'](_0x1e7062);
                $['log']('\x0a【' + _0x155762 + '】🎁寻宝：' + sErrMsg + ' ，获取随机奖励：¥ ' + _0x485550['qxjfJ'](dwExpericnce, 0x0) + ' \x0a' + ($['showLog'] ? _0x1e7062 : ''));
                _0x485550['kFAHk'](_0x6b9bfb, iRet);
            } catch (_0x56efaf) {
                $['logErr'](_0x56efaf, _0x531e32);
            } finally {
                if (_0x485550['xGIsI'](_0x485550['Kxnev'], _0x485550['TJPJS'])) {
                    console['log']('' + JSON['stringify'](_0x556203));
                    console['log']($['name'] + ' API请求失败，请检查网路重试');
                } else {
                    _0x485550['oiLMK'](_0x6b9bfb);
                }
            }
        });
    });
}

function getTaskList(_0x448565) {
    var _0x19efc6 = {
        'vKJuJ': function(_0x16f90f, _0x345373) {
            return _0x16f90f(_0x345373);
        },
        'jLprz': function(_0x4d2023) {
            return _0x4d2023();
        },
        'fRzVE': function(_0x385fd5, _0x2a4f30) {
            return _0x385fd5 !== _0x2a4f30;
        },
        'hLRiv': 'kURTY',
        'SsHzm': 'xIiWc',
        'XEdMn': function(_0x1f5a12, _0x127313) {
            return _0x1f5a12 === _0x127313;
        },
        'FTTWG': 'retcode',
        'vaVMs': function(_0x5ad444, _0x386f75) {
            return _0x5ad444 === _0x386f75;
        },
        'wUORi': 'base',
        'qwOmI': 'uxBTS',
        'bylSl': 'QJYJf',
        'GGroG': 'GetUserTaskStatusList',
        'YuShV': 'consume/AchieveInfo'
    };
    return new Promise(async _0x2cfe37 => {
        var _0x5c3c33 = {
            'KQKdw': function(_0x576ce0, _0x2fddad) {
                return _0x19efc6['XEdMn'](_0x576ce0, _0x2fddad);
            },
            'uFNNs': _0x19efc6['FTTWG'],
            'BNMci': function(_0x24f016, _0x52caf7) {
                return _0x19efc6['vaVMs'](_0x24f016, _0x52caf7);
            },
            'hSgNB': _0x19efc6['wUORi'],
            'hsTAk': function(_0x3b0f57, _0xbb0a30) {
                return _0x19efc6['fRzVE'](_0x3b0f57, _0xbb0a30);
            },
            'MICUh': _0x19efc6['qwOmI'],
            'erFjc': function(_0x2ca3b4) {
                return _0x19efc6['jLprz'](_0x2ca3b4);
            }
        };
        if (_0x19efc6['fRzVE'](_0x19efc6['bylSl'], _0x19efc6['bylSl'])) {
            try {
                const {
                    sErrMsg
                } = JSON['parse'](data);
                $['log']('\n【🏝寻宝大作战】' + sErrMsg + '\x0a' + ($['showLog'] ? data : ''));
                _0x19efc6['vKJuJ'](_0x2cfe37, 0x0);
            } catch (_0x54e541) {
                $['logErr'](_0x54e541, resp);
            } finally {
                _0x19efc6['jLprz'](_0x2cfe37);
            }
        } else {
            switch (_0x448565) {
                case 0x0:
                    $['get'](_0x19efc6['vKJuJ'](taskListUrl, _0x19efc6['GGroG']), async (_0x5bba85, _0x141893, _0x332a7c) => {
                        try {
                            const {
                                ret,
                                data: {
                                    userTaskStatusList = []
                                } = {},
                                msg
                            } = JSON['parse'](_0x332a7c);
                            $['allTask'] = userTaskStatusList['filter'](_0x1ffdb8 => _0x1ffdb8['awardStatus'] !== 0x1);
                            $['log']('\n获取【📆日常任务】列表 ' + msg + '，总共' + $['allTask']['length'] + '个任务！\n' + ($['showLog'] ? _0x332a7c : ''));
                        } catch (_0x5c5cc1) {
                            if (_0x19efc6['fRzVE'](_0x19efc6['hLRiv'], _0x19efc6['SsHzm'])) {
                                $['logErr'](_0x5c5cc1, _0x141893);
                            } else {
                                $['logErr'](_0x5c5cc1, _0x141893);
                            }
                        } finally {
                            _0x19efc6['jLprz'](_0x2cfe37);
                        }
                    });
                    break;
                case 0x1:
                    $['get'](_0x19efc6['vKJuJ'](taskUrl, _0x19efc6['YuShV']), async (_0x43ea3e, _0x1adc2d, _0x36e614) => {
                        var _0x53b484 = {
                            'sjcAu': function(_0xd1acb1, _0x144c56) {
                                return _0x5c3c33['KQKdw'](_0xd1acb1, _0x144c56);
                            },
                            'DJVjr': _0x5c3c33['uFNNs'],
                            'CpsMm': function(_0xa629e8, _0x350919) {
                                return _0x5c3c33['BNMci'](_0xa629e8, _0x350919);
                            },
                            'gWJlL': _0x5c3c33['hSgNB']
                        };
                        try {
                            const {
                                iRet,
                                sErrMsg,
                                taskinfo = []
                            } = JSON['parse'](_0x36e614);
                            $['allTask'] = taskinfo['filter'](_0x479416 => _0x479416['dwAwardStatus'] === 0x1);
                            $['log']('\n获取【🎖成就任务】列表 ' + sErrMsg + '，总共' + $['allTask']['length'] + '个任务！\n' + ($['showLog'] ? _0x36e614 : ''));
                        } catch (_0x386e24) {
                            $['logErr'](_0x386e24, _0x1adc2d);
                        } finally {
                            if (_0x5c3c33['hsTAk'](_0x5c3c33['MICUh'], _0x5c3c33['MICUh'])) {
                                _0x36e614 = JSON['parse'](_0x36e614);
                                if (_0x53b484['sjcAu'](_0x36e614[_0x53b484['DJVjr']], 0xd)) {
                                    $['isLogin'] = ![];
                                    return;
                                }
                                if (_0x53b484['CpsMm'](_0x36e614[_0x53b484['DJVjr']], 0x0)) {
                                    $['nickName'] = _0x36e614[_0x53b484['gWJlL']]['nickname'];
                                } else {
                                    $['nickName'] = $['UserName'];
                                }
                            } else {
                                _0x5c3c33['erFjc'](_0x2cfe37);
                            }
                        }
                    });
                    break;
                default:
                    break;
            }
        }
    });
}

function browserTask(_0x570209) {
    var _0x4df6c3 = {
        'VlnWL': function(_0x2b9569) {
            return _0x2b9569();
        },
        'UolQy': function(_0x430436, _0x129be1) {
            return _0x430436(_0x129be1);
        },
        'NUnSp': function(_0x3a089b, _0x2330e5) {
            return _0x3a089b < _0x2330e5;
        },
        'XbtnK': function(_0x3e76b9, _0x19cf62) {
            return _0x3e76b9 + _0x19cf62;
        },
        'VnrsW': function(_0x44c0f0, _0xa331b6) {
            return _0x44c0f0 < _0xa331b6;
        },
        'KWdOz': function(_0x47bc80, _0x5a8ad0) {
            return _0x47bc80 === _0x5a8ad0;
        },
        'XqrKN': 'BRWTY',
        'NpAfH': function(_0x1e43a6, _0x41d5c8, _0x23f6c8) {
            return _0x1e43a6(_0x41d5c8, _0x23f6c8);
        },
        'vjUER': function(_0x336ac5, _0x155527) {
            return _0x336ac5 === _0x155527;
        },
        'Axtbb': 'YIWKE',
        'NvSrT': 'lBFzI',
        'NNAeD': function(_0x3f08aa, _0x426987) {
            return _0x3f08aa < _0x426987;
        },
        'GlJlR': function(_0x339127, _0x301fcd) {
            return _0x339127 !== _0x301fcd;
        },
        'enCda': 'dYADn',
        'fJhon': 'HZPYI',
        'PXwFp': function(_0x1c7452, _0x459906) {
            return _0x1c7452 !== _0x459906;
        },
        'wKosW': 'jnqkY',
        'iNIiW': 'fioLV',
        'QcarR': function(_0x48a0bb) {
            return _0x48a0bb();
        }
    };
    return new Promise(async _0xd6f7cd => {
        var _0x39cf13 = {
            'SnbDk': function(_0x2b86c4) {
                return _0x4df6c3['VlnWL'](_0x2b86c4);
            },
            'HYBqp': function(_0x26f843, _0x139e5b) {
                return _0x4df6c3['UolQy'](_0x26f843, _0x139e5b);
            }
        };
        switch (_0x570209) {
            case 0x0:
                const _0x56d17e = Math['max'](...[...$['allTask']]['map'](_0x598e07 => _0x598e07['configTargetTimes']));
                for (let _0x3a6ff7 = 0x0; _0x4df6c3['NUnSp'](_0x3a6ff7, $['allTask']['length']); _0x3a6ff7++) {
                    const _0x3beba = $['allTask'][_0x3a6ff7];
                    $['log']('\n开始第' + _0x4df6c3['XbtnK'](_0x3a6ff7, 0x1) + '个【📆日常任务】：' + _0x3beba['taskName']);
                    const _0x1bd49c = [!![], !![]];
                    for (let _0x3a6ff7 = 0x0; _0x4df6c3['VnrsW'](_0x3a6ff7, _0x56d17e); _0x3a6ff7++) {
                        await $['wait'](0x1f4);
                        if (_0x1bd49c[0x0]) {
                            if (_0x4df6c3['KWdOz'](_0x4df6c3['XqrKN'], _0x4df6c3['XqrKN'])) {
                                _0x1bd49c[0x0] = await _0x4df6c3['UolQy'](doTask, _0x3beba);
                            } else {
                                _0x39cf13['SnbDk'](_0xd6f7cd);
                            }
                        }
                        await $['wait'](0x1f4);
                        if (_0x1bd49c[0x1]) {
                            _0x1bd49c[0x1] = await _0x4df6c3['NpAfH'](awardTask, 0x0, _0x3beba);
                        }
                        if (!_0x1bd49c[0x0] && !_0x1bd49c[0x1]) {
                            if (_0x4df6c3['vjUER'](_0x4df6c3['Axtbb'], _0x4df6c3['NvSrT'])) {
                                $['log']('\n🎁寻宝：寻宝次数不足');
                            } else {
                                break;
                            }
                        }
                    }
                    $['log']('\n结束第' + _0x4df6c3['XbtnK'](_0x3a6ff7, 0x1) + '个【📆日常任务】：' + _0x3beba['taskName'] + '\x0a');
                }
                break;
            case 0x1:
                for (let _0x2ec2cb = 0x0; _0x4df6c3['NNAeD'](_0x2ec2cb, $['allTask']['length']); _0x2ec2cb++) {
                    if (_0x4df6c3['GlJlR'](_0x4df6c3['enCda'], _0x4df6c3['fJhon'])) {
                        const _0x3beba = $['allTask'][_0x2ec2cb];
                        $['log']('\n开始第' + _0x4df6c3['XbtnK'](_0x2ec2cb, 0x1) + '个【🎖成就任务】：' + _0x3beba['strTaskDescr']);
                        if (_0x4df6c3['vjUER'](_0x3beba['dwAwardStatus'], '0')) {
                            if (_0x4df6c3['PXwFp'](_0x4df6c3['wKosW'], _0x4df6c3['wKosW'])) {
                                _0x39cf13['HYBqp'](_0xd6f7cd, JSON['parse'](data));
                            } else {
                                $['log']('\x0a' + _0x3beba['strTaskDescr'] + '【领成就奖励】：该成就任务未达到门槛}');
                            }
                        } else {
                            if (_0x4df6c3['vjUER'](_0x4df6c3['iNIiW'], _0x4df6c3['iNIiW'])) {
                                await $['wait'](0x1f4);
                                await _0x4df6c3['NpAfH'](awardTask, 0x1, _0x3beba);
                            } else {
                                const {
                                    dwGetMoney,
                                    iRet,
                                    sErrMsg
                                } = JSON['parse'](data);
                                $['log']('\n🤏偷取好友【' + strFriendNick + '】【' + strSceneName + '】财富值：¥ ' + (dwGetMoney ? dwGetMoney : sErrMsg) + '\x0a' + ($['showLog'] ? data : ''));
                            }
                        }
                        $['log']('\n结束第' + _0x4df6c3['XbtnK'](_0x2ec2cb, 0x1) + '个【🎖成就任务】：' + _0x3beba['strTaskDescr'] + '\x0a');
                    } else {
                        $['logErr'](e, resp);
                    }
                }
                break;
            default:
                break;
        }
        _0x4df6c3['QcarR'](_0xd6f7cd);
    });
}

function doTask(_0x471107) {
    var _0x4023de = {
        'hotyM': function(_0x221956, _0x48c4ed) {
            return _0x221956 === _0x48c4ed;
        },
        'WzWOj': 'fIaai',
        'LKEBg': 'SKEWS',
        'NJFzO': function(_0x337e8f, _0x3c395a) {
            return _0x337e8f !== _0x3c395a;
        },
        'FAyET': '活动太火爆了',
        'yAIIa': '任务进行中或者未到任务时间',
        'mLpKp': function(_0x3d4d8d, _0x2116c4) {
            return _0x3d4d8d(_0x2116c4);
        },
        'VvgPf': function(_0x10d1e6) {
            return _0x10d1e6();
        },
        'hVJZb': 'dfMOb',
        'xotEu': 'BxdFH',
        'qWSpD': function(_0x847048, _0x2986f0) {
            return _0x847048 >= _0x2986f0;
        },
        'cwzdO': function(_0x3b6744, _0x48791e) {
            return _0x3b6744(_0x48791e);
        },
        'nTMmE': function(_0x2be88e, _0x6da0c1) {
            return _0x2be88e(_0x6da0c1);
        },
        'WDdkd': function(_0x7d418e, _0x1e69ea) {
            return _0x7d418e(_0x1e69ea);
        },
        'gKJJD': function(_0x3c54e5, _0x58520d, _0xe70fd6) {
            return _0x3c54e5(_0x58520d, _0xe70fd6);
        }
    };
    return new Promise(async _0x5bacbd => {
        var _0x4f8720 = {
            'fpAWL': function(_0xfb943b, _0x182838) {
                return _0x4023de['mLpKp'](_0xfb943b, _0x182838);
            }
        };
        if (_0x4023de['NJFzO'](_0x4023de['hVJZb'], _0x4023de['xotEu'])) {
            const {
                taskId,
                completedTimes,
                configTargetTimes,
                taskName
            } = _0x471107;
            if (_0x4023de['qWSpD'](_0x4023de['cwzdO'](parseInt, completedTimes), _0x4023de['nTMmE'](parseInt, configTargetTimes))) {
                _0x4023de['WDdkd'](_0x5bacbd, ![]);
                $['log']('\x0a' + taskName + '【做日常任务】： mission success');
                return;
            }
            $['get'](_0x4023de['gKJJD'](taskListUrl, 'DoTask', 'taskId=' + taskId), (_0x5c6248, _0x48a313, _0x5e1fbc) => {
                try {
                    if (_0x4023de['hotyM'](_0x4023de['WzWOj'], _0x4023de['LKEBg'])) {
                        _0x4f8720['fpAWL'](_0x5bacbd, ![]);
                        $['log']('\x0a' + taskName + '【做日常任务】： mission success');
                        return;
                    } else {
                        const {
                            msg,
                            ret
                        } = JSON['parse'](_0x5e1fbc);
                        $['log']('\x0a' + taskName + '【做日常任务】：' + (_0x4023de['NJFzO'](msg['indexOf'](_0x4023de['FAyET']), -0x1) ? _0x4023de['yAIIa'] : msg) + '\x0a' + ($['showLog'] ? _0x5e1fbc : ''));
                        _0x4023de['mLpKp'](_0x5bacbd, _0x4023de['hotyM'](ret, 0x0));
                    }
                } catch (_0x3dac36) {
                    $['logErr'](_0x3dac36, _0x48a313);
                } finally {
                    _0x4023de['VvgPf'](_0x5bacbd);
                }
            });
        } else {
            $['isLogin'] = ![];
            return;
        }
    });
}

function awardTask(_0x475cdf, _0x50c153) {
    var _0x4a0452 = {
        'QevJT': function(_0x2757a6, _0x5a760a) {
            return _0x2757a6(_0x5a760a);
        },
        'aCDnv': function(_0x3a698d) {
            return _0x3a698d();
        },
        'uBGfu': function(_0x87364, _0x21c0d2) {
            return _0x87364 !== _0x21c0d2;
        },
        'eUfNF': 'LrxCb',
        'GWgAM': function(_0x483663) {
            return _0x483663();
        },
        'xMPRe': function(_0x2522f3, _0x1e39a2) {
            return _0x2522f3 !== _0x1e39a2;
        },
        'SmTNp': 'aXHbH',
        'LTYcI': '活动太火爆了',
        'WDIzo': '任务为成就任务或者未到任务时间',
        'pKLBf': function(_0x22ff0b, _0x3822bb) {
            return _0x22ff0b !== _0x3822bb;
        },
        'rGnvO': 'TVrnV',
        'iXKbV': function(_0x2d7b01, _0x41857d) {
            return _0x2d7b01 + _0x41857d;
        },
        'WWSQd': function(_0x104f58, _0x3c7b1c) {
            return _0x104f58 === _0x3c7b1c;
        },
        'KtArg': 'geevy',
        'uFfOG': function(_0x4a5f0c, _0x18e98a, _0x582927) {
            return _0x4a5f0c(_0x18e98a, _0x582927);
        },
        'iQSwe': function(_0x5ab4e6, _0x57dfa5, _0x5e9592) {
            return _0x5ab4e6(_0x57dfa5, _0x5e9592);
        }
    };
    return new Promise(_0x53f09f => {
        var _0x201e2b = {
            'rQiua': function(_0xb395ae) {
                return _0x4a0452['GWgAM'](_0xb395ae);
            },
            'svQrU': function(_0x56452c, _0x37c1df) {
                return _0x4a0452['xMPRe'](_0x56452c, _0x37c1df);
            },
            'DtKnu': _0x4a0452['SmTNp'],
            'ZdAlp': function(_0x4670d9, _0x482d0d) {
                return _0x4a0452['xMPRe'](_0x4670d9, _0x482d0d);
            },
            'DBqMw': _0x4a0452['LTYcI'],
            'zKXcT': _0x4a0452['WDIzo'],
            'boVIP': function(_0x4281f1, _0x20cfa1) {
                return _0x4a0452['pKLBf'](_0x4281f1, _0x20cfa1);
            },
            'hrXlk': _0x4a0452['rGnvO'],
            'cVSHQ': function(_0x12addc, _0x3501c6) {
                return _0x4a0452['iXKbV'](_0x12addc, _0x3501c6);
            },
            'NbbTu': function(_0x5b8c6c, _0x2a87e4) {
                return _0x4a0452['QevJT'](_0x5b8c6c, _0x2a87e4);
            },
            'FFcbI': function(_0x305516, _0x1aa169) {
                return _0x4a0452['WWSQd'](_0x305516, _0x1aa169);
            },
            'DFRiC': function(_0x3a8a4b, _0x26747e) {
                return _0x4a0452['pKLBf'](_0x3a8a4b, _0x26747e);
            },
            'lDqWx': _0x4a0452['KtArg']
        };
        switch (_0x475cdf) {
            case 0x0:
                const {
                    taskId, taskName
                } = _0x50c153;
                $['get'](_0x4a0452['uFfOG'](taskListUrl, 'Award', 'taskId=' + taskId), (_0x5b2baa, _0x1d6973, _0xadec78) => {
                    var _0x5ebdcb = {
                        'GENZQ': function(_0x1f6ce8) {
                            return _0x201e2b['rQiua'](_0x1f6ce8);
                        }
                    };
                    if (_0x201e2b['svQrU'](_0x201e2b['DtKnu'], _0x201e2b['DtKnu'])) {
                        $['logErr'](e);
                    } else {
                        try {
                            const {
                                msg,
                                ret,
                                data: {
                                    prizeInfo = ''
                                } = {}
                            } = JSON['parse'](_0xadec78);
                            let _0x2638e0 = '';
                            if (_0x201e2b['ZdAlp'](msg['indexOf'](_0x201e2b['DBqMw']), -0x1)) {
                                _0x2638e0 = _0x201e2b['zKXcT'];
                            } else {
                                if (_0x201e2b['boVIP'](_0x201e2b['hrXlk'], _0x201e2b['hrXlk'])) {
                                    try {
                                        const {
                                            iRet,
                                            sErrMsg,
                                            taskinfo = []
                                        } = JSON['parse'](_0xadec78);
                                        $['allTask'] = taskinfo['filter'](_0x2673be => _0x2673be['dwAwardStatus'] === 0x1);
                                        $['log']('\n获取【🎖成就任务】列表 ' + sErrMsg + '，总共' + $['allTask']['length'] + '个任务！\n' + ($['showLog'] ? _0xadec78 : ''));
                                    } catch (_0x5f0660) {
                                        $['logErr'](_0x5f0660, _0x1d6973);
                                    } finally {
                                        _0x5ebdcb['GENZQ'](_0x53f09f);
                                    }
                                } else {
                                    _0x2638e0 = _0x201e2b['cVSHQ'](msg, prizeInfo) ? ' 获得财富值 ¥ ' + JSON['parse'](prizeInfo)['ddwMoney'] : '';
                                }
                            }
                            $['log']('\x0a' + taskName + '【领日常奖励】：' + _0x2638e0 + '\x0a' + ($['showLog'] ? _0xadec78 : ''));
                            _0x201e2b['NbbTu'](_0x53f09f, _0x201e2b['FFcbI'](ret, 0x0));
                        } catch (_0x3895d4) {
                            $['logErr'](_0x3895d4, _0x1d6973);
                        } finally {
                            if (_0x201e2b['DFRiC'](_0x201e2b['lDqWx'], _0x201e2b['lDqWx'])) {
                                $['logErr'](e, _0x1d6973);
                            } else {
                                _0x201e2b['rQiua'](_0x53f09f);
                            }
                        }
                    }
                });
                break;
            case 0x1:
                const {
                    strTaskIndex, strTaskDescr
                } = _0x50c153;
                $['get'](_0x4a0452['iQSwe'](taskUrl, 'consume/AchieveAward', 'strTaskIndex=' + strTaskIndex), (_0x2d83b5, _0x5e80f2, _0x576329) => {
                    var _0x208b93 = {
                        'NnlWG': function(_0x1385a7, _0x481064) {
                            return _0x4a0452['QevJT'](_0x1385a7, _0x481064);
                        },
                        'YkONE': function(_0x5f0e39) {
                            return _0x4a0452['aCDnv'](_0x5f0e39);
                        }
                    };
                    try {
                        const {
                            iRet,
                            sErrMsg,
                            dwExpericnce
                        } = JSON['parse'](_0x576329);
                        $['log']('\x0a' + strTaskDescr + '【领成就奖励】： success 获得财富值：¥ ' + dwExpericnce + '\x0a' + ($['showLog'] ? _0x576329 : ''));
                    } catch (_0x55fa4f) {
                        $['logErr'](_0x55fa4f, _0x5e80f2);
                    } finally {
                        if (_0x4a0452['uBGfu'](_0x4a0452['eUfNF'], _0x4a0452['eUfNF'])) {
                            try {
                                _0x208b93['NnlWG'](_0x53f09f, JSON['parse'](_0x576329));
                            } catch (_0x5afeed) {} finally {
                                _0x208b93['YkONE'](_0x53f09f);
                            }
                        } else {
                            _0x4a0452['GWgAM'](_0x53f09f);
                        }
                    }
                });
                break;
            default:
                break;
        }
    });
}

function funCenterState() {
    var _0x1583bd = {
        'XVKgM': function(_0x535129, _0x48bf1d) {
            return _0x535129 !== _0x48bf1d;
        },
        'YqZVp': '活动太火爆了',
        'gmGvz': '任务进行中或者未到任务时间',
        'gKXsY': function(_0x3219da, _0x299b06) {
            return _0x3219da(_0x299b06);
        },
        'ABzyB': function(_0xe35570, _0x5d950e) {
            return _0xe35570 === _0x5d950e;
        },
        'TTqHl': function(_0x144568) {
            return _0x144568();
        },
        'ipPUT': 'xkQKw',
        'LAPlN': function(_0x36a92e, _0x201196) {
            return _0x36a92e == _0x201196;
        },
        'FHdUS': 'MMujg',
        'nPUVn': 'aymtA',
        'hAeii': function(_0x573b05, _0x9777f1, _0x20c419, _0x136db2) {
            return _0x573b05(_0x9777f1, _0x20c419, _0x136db2);
        },
        'gxNAd': function(_0x417992, _0x5d3570, _0x3f4db9) {
            return _0x417992(_0x5d3570, _0x3f4db9);
        }
    };
    return new Promise(_0x2509b2 => {
        var _0x44684f = {
            'GPYBs': function(_0x37bfc0, _0x1b0acd) {
                return _0x1583bd['XVKgM'](_0x37bfc0, _0x1b0acd);
            },
            'sGGkf': _0x1583bd['YqZVp'],
            'FzpSr': _0x1583bd['gmGvz'],
            'xRwJA': function(_0x33a2fc, _0x28dfb8) {
                return _0x1583bd['gKXsY'](_0x33a2fc, _0x28dfb8);
            },
            'PkgRA': function(_0x385ef0, _0x31ab95) {
                return _0x1583bd['ABzyB'](_0x385ef0, _0x31ab95);
            },
            'Uyptn': function(_0x210854) {
                return _0x1583bd['TTqHl'](_0x210854);
            },
            'ctiEh': _0x1583bd['ipPUT'],
            'NPTjA': function(_0x474860, _0xfd9dcc) {
                return _0x1583bd['LAPlN'](_0x474860, _0xfd9dcc);
            },
            'pweXj': _0x1583bd['FHdUS'],
            'DdLrH': _0x1583bd['nPUVn'],
            'iUniZ': function(_0x5c5c4f, _0x29f8ff, _0x2d5c20, _0x2072fe) {
                return _0x1583bd['hAeii'](_0x5c5c4f, _0x29f8ff, _0x2d5c20, _0x2072fe);
            }
        };
        $['get'](_0x1583bd['gxNAd'](taskUrl, 'consume/FunCenterState', 'strType=1'), async (_0x5a5af9, _0x1335c1, _0x36f6cd) => {
            var _0x28713c = {
                'AeYIH': function(_0x13f9cf, _0x33bf51) {
                    return _0x44684f['GPYBs'](_0x13f9cf, _0x33bf51);
                },
                'wzlAS': _0x44684f['sGGkf'],
                'iwodC': _0x44684f['FzpSr'],
                'JIHlh': function(_0x5a7fa8, _0x133b93) {
                    return _0x44684f['xRwJA'](_0x5a7fa8, _0x133b93);
                },
                'HeQfN': function(_0x5c4de3, _0x5c1adf) {
                    return _0x44684f['PkgRA'](_0x5c4de3, _0x5c1adf);
                },
                'xPFME': function(_0x49f78d) {
                    return _0x44684f['Uyptn'](_0x49f78d);
                }
            };
            try {
                if (_0x44684f['PkgRA'](_0x44684f['ctiEh'], _0x44684f['ctiEh'])) {
                    const {
                        SlotMachine: {
                            ddwConfVersion,
                            dwFreeCount,
                            strCouponPool,
                            strGoodsPool
                        } = {},
                        iRet,
                        sErrMsg
                    } = JSON['parse'](_0x36f6cd);
                    if (_0x44684f['NPTjA'](dwFreeCount, 0x1)) {
                        if (_0x44684f['GPYBs'](_0x44684f['pweXj'], _0x44684f['DdLrH'])) {
                            await $['wait'](0x1f4);
                            await _0x44684f['iUniZ'](soltMachine, strCouponPool, strGoodsPool, ddwConfVersion);
                        } else {
                            $['log']('\n📌签到：你今日已签到过啦，请明天再来');
                        }
                    }
                } else {
                    try {
                        const {
                            msg,
                            ret
                        } = JSON['parse'](_0x36f6cd);
                        $['log']('\x0a' + taskName + '【做日常任务】：' + (_0x28713c['AeYIH'](msg['indexOf'](_0x28713c['wzlAS']), -0x1) ? _0x28713c['iwodC'] : msg) + '\x0a' + ($['showLog'] ? _0x36f6cd : ''));
                        _0x28713c['JIHlh'](_0x2509b2, _0x28713c['HeQfN'](ret, 0x0));
                    } catch (_0xd45d5) {
                        $['logErr'](_0xd45d5, _0x1335c1);
                    } finally {
                        _0x28713c['xPFME'](_0x2509b2);
                    }
                }
            } catch (_0x10238b) {
                $['logErr'](_0x10238b, _0x1335c1);
            } finally {
                _0x44684f['Uyptn'](_0x2509b2);
            }
        });
    });
}

function soltMachine(_0x46a451, _0x139e7b, _0x397253) {
    var _0x2b3b1b = {
        'NctHM': function(_0x364b0b, _0x55b4b0) {
            return _0x364b0b != _0x55b4b0;
        },
        'Zudkv': '未中奖',
        'QvivX': function(_0x35131c, _0x39acc5) {
            return _0x35131c !== _0x39acc5;
        },
        'OVYjx': 'tZnem',
        'IrbBI': 'vUnqT',
        'utQRO': 'tQEAf',
        'ZrCRl': function(_0x1b95ec) {
            return _0x1b95ec();
        },
        'sfxwM': function(_0xfd0a3d, _0x43039e) {
            return _0xfd0a3d !== _0x43039e;
        },
        'zPipq': 'cwUKk',
        'BndrN': 'mDsAe',
        'cVpnK': function(_0x2ac12a, _0x38c185, _0x166c4e) {
            return _0x2ac12a(_0x38c185, _0x166c4e);
        }
    };
    return new Promise(_0x9fa084 => {
        var _0x1a470a = {
            'VsOXO': function(_0xaf1388) {
                return _0x2b3b1b['ZrCRl'](_0xaf1388);
            }
        };
        if (_0x2b3b1b['sfxwM'](_0x2b3b1b['zPipq'], _0x2b3b1b['BndrN'])) {
            $['get'](_0x2b3b1b['cVpnK'](taskUrl, 'consume/SlotMachine', 'strCouponPool=' + _0x46a451 + '&strGoodsPool=' + _0x139e7b + '&ddwConfVersion=' + _0x397253), async (_0x483e0e, _0x2bbc92, _0x1d35b3) => {
                try {
                    const {
                        iRet,
                        sErrMsg,
                        strAwardPoolName
                    } = JSON['parse'](_0x1d35b3);
                    $['log']('\n【抽奖结果】🎰 ' + (_0x2b3b1b['NctHM'](strAwardPoolName, '') ? _0x2b3b1b['Zudkv'] : strAwardPoolName) + ' \x0a' + ($['showLog'] ? _0x1d35b3 : ''));
                } catch (_0xf18845) {
                    if (_0x2b3b1b['QvivX'](_0x2b3b1b['OVYjx'], _0x2b3b1b['OVYjx'])) {
                        _0x1a470a['VsOXO'](_0x9fa084);
                    } else {
                        $['logErr'](_0xf18845, _0x2bbc92);
                    }
                } finally {
                    if (_0x2b3b1b['QvivX'](_0x2b3b1b['IrbBI'], _0x2b3b1b['utQRO'])) {
                        _0x2b3b1b['ZrCRl'](_0x9fa084);
                    } else {
                        console['log']('京东服务器返回空数据');
                    }
                }
            });
        } else {
            _0x2b3b1b['ZrCRl'](_0x9fa084);
        }
    });
}

function createAssistUser(_0x2c67a8) {
    var _0x2db846 = {
        'xekso': function(_0x56819d) {
            return _0x56819d();
        },
        'yhPmt': function(_0x49b0b8, _0x14332c) {
            return _0x49b0b8 !== _0x14332c;
        },
        'cjMzV': 'jPlMX',
        'XQbrB': 'urjyn',
        'csdfx': function(_0xf3af0c, _0x306ba6) {
            return _0xf3af0c === _0x306ba6;
        },
        'Qmpuw': function(_0x1b2690, _0x17b71a) {
            return _0x1b2690 === _0x17b71a;
        },
        'APugF': function(_0x46a549) {
            return _0x46a549();
        },
        'WjuDI': function(_0x3611fb) {
            return _0x3611fb();
        },
        'uxRjL': 'aFbNR',
        'fvtPa': function(_0x4e3921, _0xd92da2, _0x33fc23) {
            return _0x4e3921(_0xd92da2, _0x33fc23);
        },
        'RGloi': 'user/JoinScene',
        'QwrrQ': function(_0x44839a, _0x4d2ea0) {
            return _0x44839a(_0x4d2ea0);
        }
    };
    return new Promise(_0x3eb87b => {
        var _0x46d734 = {
            'txmXv': function(_0x4b7b45) {
                return _0x2db846['WjuDI'](_0x4b7b45);
            }
        };
        if (_0x2db846['Qmpuw'](_0x2db846['uxRjL'], _0x2db846['uxRjL'])) {
            $['get'](_0x2db846['fvtPa'](taskUrl, _0x2db846['RGloi'], 'strShareId=' + _0x2db846['QwrrQ'](escape, _0x2c67a8) + '&dwSceneId=1001'), async (_0x59ff89, _0x33935c, _0x4d1096) => {
                var _0x284901 = {
                    'pULbA': function(_0xe6db0) {
                        return _0x2db846['xekso'](_0xe6db0);
                    }
                };
                if (_0x2db846['yhPmt'](_0x2db846['cjMzV'], _0x2db846['XQbrB'])) {
                    try {
                        console['log']('\n普通助力(招工)结果:' + _0x4d1096);
                        const {
                            iRet
                        } = JSON['parse'](_0x4d1096);
                        if (_0x2db846['csdfx'](iRet, 0x7d5) || _0x2db846['Qmpuw'](iRet, 0x270f)) $['canHelp'] = ![];
                    } catch (_0x48e382) {} finally {
                        _0x2db846['APugF'](_0x3eb87b);
                    }
                } else {
                    _0x284901['pULbA'](_0x3eb87b);
                }
            });
        } else {
            _0x46d734['txmXv'](_0x3eb87b);
        }
    });
}

function createSuperAssistUser(_0x565d1d) {
    var _0x211ff8 = {
        'UkWgC': function(_0x29c988, _0x6ec365) {
            return _0x29c988 === _0x6ec365;
        },
        'emzyE': function(_0x474c64, _0xf7e5ca) {
            return _0x474c64 === _0xf7e5ca;
        },
        'AFJDU': function(_0xb3c606, _0x46ce51) {
            return _0xb3c606 === _0x46ce51;
        },
        'uphTv': 'TwkYR',
        'YrFNL': 'Ajovw',
        'geJwk': function(_0x28af3a, _0x168b34) {
            return _0x28af3a === _0x168b34;
        },
        'hRmSk': 'zkGvf',
        'ndbAJ': 'fDHBj',
        'Bamiw': function(_0x416ca4) {
            return _0x416ca4();
        },
        'KYicQ': function(_0x45c8c1, _0x1be0e0, _0x1b2c0a) {
            return _0x45c8c1(_0x1be0e0, _0x1b2c0a);
        },
        'NNyWt': 'user/JoinScene',
        'AIJyp': 'timestamp',
        'nkkxL': 'phoneid',
        'RJUNJ': 'farm_jstoken',
        'RxXAk': function(_0x391bee, _0x157287) {
            return _0x391bee(_0x157287);
        }
    };
    return new Promise(_0x2891dd => {
        $['get'](_0x211ff8['KYicQ'](taskUrl, _0x211ff8['NNyWt'], 'strPgtimestamp=' + token[_0x211ff8['AIJyp']] + '&strPhoneID=' + token[_0x211ff8['nkkxL']] + '&strPgUUNum=' + token[_0x211ff8['RJUNJ']] + '&strShareId=' + _0x211ff8['RxXAk'](escape, _0x565d1d) + '&dwSceneId=1001&dwType=2'), async (_0x466b37, _0x1f1e59, _0x3417d3) => {
            try {
                console['log']('\n超级助力(超级工人)结果:' + _0x3417d3);
                const {
                    sErrMsg,
                    iRet
                } = JSON['parse'](_0x3417d3);
                if (_0x211ff8['UkWgC'](iRet, 0x7d5) || _0x211ff8['emzyE'](iRet, 0x270f)) $['canHelp'] = ![];
                console['log'](sErrMsg);
            } catch (_0x28ac15) {
                if (_0x211ff8['AFJDU'](_0x211ff8['uphTv'], _0x211ff8['YrFNL'])) {
                    Object['keys'](shareCodes)['forEach'](_0x459326 => {
                        if (shareCodes[_0x459326]) {
                            $['shareCodesArr']['push'](shareCodes[_0x459326]);
                        }
                    });
                } else {
                    $['logErr'](_0x28ac15, _0x1f1e59);
                }
            } finally {
                if (_0x211ff8['geJwk'](_0x211ff8['hRmSk'], _0x211ff8['ndbAJ'])) {
                    console['log']('开通场景结果:' + _0x3417d3 + '\x0a');
                } else {
                    _0x211ff8['Bamiw'](_0x2891dd);
                }
            }
        });
    });
}

function joinGroup(_0xaafd97) {
    var _0x3b7b6e = {
        'YHeMT': function(_0x56ec34) {
            return _0x56ec34();
        },
        'bMXxj': function(_0x3d3dd5, _0x2709c5) {
            return _0x3d3dd5 !== _0x2709c5;
        },
        'QwuQL': 'eYPrX',
        'qIjrd': function(_0x27284f, _0xafda8) {
            return _0x27284f === _0xafda8;
        },
        'Afpxe': function(_0x56e0a0, _0x4ee19b) {
            return _0x56e0a0 === _0x4ee19b;
        },
        'gOAcd': function(_0x5158b0, _0x5301e7, _0x2888e1) {
            return _0x5158b0(_0x5301e7, _0x2888e1);
        },
        'zPABE': 'timestamp',
        'mBjHI': 'phoneid',
        'jJVMh': 'farm_jstoken'
    };
    return new Promise(async _0x6c71d8 => {
        $['get'](_0x3b7b6e['gOAcd'](taskUrl, 'user/JoinGroup', 'strGroupId=' + _0xaafd97 + '&dwIsNewUser=0&pgtimestamp=' + token[_0x3b7b6e['zPABE']] + '&phoneID=' + token[_0x3b7b6e['mBjHI']] + '&pgUUNum=' + token[_0x3b7b6e['jJVMh']]), (_0x48636c, _0x5baa63, _0x40592b) => {
            var _0x1ef8d8 = {
                'GRvQs': function(_0x46cdff) {
                    return _0x3b7b6e['YHeMT'](_0x46cdff);
                }
            };
            try {
                if (_0x3b7b6e['bMXxj'](_0x3b7b6e['QwuQL'], _0x3b7b6e['QwuQL'])) {
                    try {
                        const {
                            dwGetMoney,
                            iRet,
                            sErrMsg
                        } = JSON['parse'](_0x40592b);
                        $['log']('\n🤏偷取好友【' + strFriendNick + '】【' + strSceneName + '】财富值：¥ ' + (dwGetMoney ? dwGetMoney : sErrMsg) + '\x0a' + ($['showLog'] ? _0x40592b : ''));
                    } catch (_0x4f3707) {
                        $['logErr'](_0x4f3707, _0x5baa63);
                    } finally {
                        _0x1ef8d8['GRvQs'](_0x6c71d8);
                    }
                } else {
                    const {
                        sErrMsg,
                        iRet
                    } = JSON['parse'](_0x40592b);
                    if (_0x3b7b6e['qIjrd'](iRet, 0x7d5) || _0x3b7b6e['Afpxe'](iRet, 0x270f)) $['canHelp'] = ![];
                    $['log']('' + sErrMsg);
                }
            } catch (_0x3236d1) {
                $['logErr'](_0x3236d1, _0x5baa63);
            } finally {
                _0x3b7b6e['YHeMT'](_0x6c71d8);
            }
        });
    });
}

function submitGroupId() {
    var _0x4a5dc7 = {
        'TpnWb': function(_0x5de394, _0x157cbf) {
            return _0x5de394(_0x157cbf);
        },
        'LyBTL': function(_0x3d9400) {
            return _0x3d9400();
        },
        'PDWVe': function(_0x4eabab, _0x9557a9) {
            return _0x4eabab === _0x9557a9;
        },
        'jeNfh': function(_0x576fd2, _0x4d2df1) {
            return _0x576fd2 !== _0x4d2df1;
        },
        'exmiT': 'SEPXg',
        'gOmny': 'kVoan',
        'IGWrR': function(_0x17e265, _0x2055d8) {
            return _0x17e265 + _0x2055d8;
        },
        'lPTUE': '你的【🏝寻宝大作战】互助码: ',
        'JUYpP': '(每天都变化,旧的不可用)',
        'DPLDA': 'lIkOh'
    };
    return new Promise(_0x325186 => {
        var _0x279880 = {
            'JXHEG': function(_0x5a5d98, _0x4ef7c2) {
                return _0x4a5dc7['TpnWb'](_0x5a5d98, _0x4ef7c2);
            },
            'XARdP': function(_0xf9908f) {
                return _0x4a5dc7['LyBTL'](_0xf9908f);
            },
            'vZhPa': function(_0x431385) {
                return _0x4a5dc7['LyBTL'](_0x431385);
            },
            'GLUad': function(_0x506169, _0x323464) {
                return _0x4a5dc7['PDWVe'](_0x506169, _0x323464);
            },
            'JjHei': function(_0x5607f6, _0x4a503d) {
                return _0x4a5dc7['jeNfh'](_0x5607f6, _0x4a503d);
            },
            'cIJMK': _0x4a5dc7['exmiT'],
            'lGJGI': function(_0x244e5a) {
                return _0x4a5dc7['LyBTL'](_0x244e5a);
            },
            'FatJQ': _0x4a5dc7['gOmny'],
            'vkHZp': function(_0x4cabe3, _0x5dcc83) {
                return _0x4a5dc7['IGWrR'](_0x4cabe3, _0x5dcc83);
            },
            'ZXgOI': _0x4a5dc7['lPTUE'],
            'xdZAV': _0x4a5dc7['JUYpP'],
            'qRTkS': function(_0x3a1d60, _0x349554) {
                return _0x4a5dc7['PDWVe'](_0x3a1d60, _0x349554);
            },
            'jxMty': _0x4a5dc7['DPLDA']
        };
        $['get'](_0x4a5dc7['TpnWb'](taskUrl, 'user/GatherForture'), async (_0xc889b1, _0x3a3504, _0x133259) => {
            var _0x538537 = {
                'bMoaP': function(_0x555179) {
                    return _0x279880['XARdP'](_0x555179);
                }
            };
            try {
                const {
                    GroupInfo: {
                        strGroupId
                    },
                    strPin
                } = JSON['parse'](_0x133259);
                if (!strGroupId) {
                    const _0x47e10b = await _0x279880['vZhPa'](openGroup);
                    if (_0x279880['GLUad'](_0x47e10b, 0x0)) {
                        if (_0x279880['JjHei'](_0x279880['cIJMK'], _0x279880['cIJMK'])) {
                            $['logErr'](e, _0x3a3504);
                        } else {
                            await _0x279880['lGJGI'](submitGroupId);
                        }
                    } else {
                        _0x279880['lGJGI'](_0x325186);
                    }
                } else {
                    if (_0x279880['JjHei'](_0x279880['FatJQ'], _0x279880['FatJQ'])) {
                        _0x538537['bMoaP'](_0x325186);
                    } else {
                        $['log'](_0x279880['vkHZp'](_0x279880['vkHZp'](_0x279880['ZXgOI'], strGroupId), _0x279880['xdZAV']));
                        $['strGroupIds']['push'](strGroupId);
                    }
                }
            } catch (_0x416db1) {
                $['logErr'](_0x416db1, _0x3a3504);
            } finally {
                if (_0x279880['qRTkS'](_0x279880['jxMty'], _0x279880['jxMty'])) {
                    _0x279880['lGJGI'](_0x325186);
                } else {
                    console['log']('此账号cookie填写不规范,你的pt_pin=xxx后面没分号(;)\n');
                    _0x279880['JXHEG'](_0x325186, null);
                }
            }
        });
    });
}

function openGroup() {
    var _0x15fc68 = {
        'UeTCd': function(_0x28f237, _0x43dde7) {
            return _0x28f237(_0x43dde7);
        },
        'ZXvJW': function(_0x1f356c) {
            return _0x1f356c();
        },
        'rBdcP': function(_0x526d26, _0x199222, _0x1106e6) {
            return _0x526d26(_0x199222, _0x1106e6);
        }
    };
    return new Promise(async _0x5276f9 => {
        $['get'](_0x15fc68['rBdcP'](taskUrl, 'user/OpenGroup', 'dwIsNewUser=' + $['info']['dwIsNewUser']), async (_0x3b4aef, _0x1f2f49, _0x38dc7b) => {
            try {
                const {
                    sErrMsg
                } = JSON['parse'](_0x38dc7b);
                $['log']('\n【🏝寻宝大作战】' + sErrMsg + '\x0a' + ($['showLog'] ? _0x38dc7b : ''));
                _0x15fc68['UeTCd'](_0x5276f9, 0x0);
            } catch (_0x25f319) {
                $['logErr'](_0x25f319, _0x1f2f49);
            } finally {
                _0x15fc68['ZXvJW'](_0x5276f9);
            }
        });
    });
}

function openPeriodBox() {
    var _0x5d1a00 = {
        'MxqUe': function(_0x33cc6c, _0x4a01a9) {
            return _0x33cc6c === _0x4a01a9;
        },
        'THbUT': function(_0x46c9ba) {
            return _0x46c9ba();
        },
        'rhmSU': function(_0x442c4a, _0x1d5ed0) {
            return _0x442c4a !== _0x1d5ed0;
        },
        'kVdyh': 'qCgAl',
        'nEOjS': function(_0x1d63dd, _0x35739c) {
            return _0x1d63dd == _0x35739c;
        },
        'SbjKK': 'success',
        'RnCFV': 'umiya',
        'HbCIi': 'qdgDF',
        'bsCjs': function(_0x3660c1, _0x458509) {
            return _0x3660c1 !== _0x458509;
        },
        'LiXJj': 'LQgjQ',
        'AmZzx': 'haURX',
        'PDLhw': function(_0x1b422e, _0x244251) {
            return _0x1b422e < _0x244251;
        },
        'ClNwA': function(_0x8be274, _0x2948a1, _0x1bf571) {
            return _0x8be274(_0x2948a1, _0x1bf571);
        },
        'DDuSc': function(_0xdb588b, _0x36c776) {
            return _0xdb588b === _0x36c776;
        },
        'FFCss': 'BnnOo',
        'wgPLA': function(_0x5165f4, _0x3a9737) {
            return _0x5165f4(_0x3a9737);
        }
    };
    return new Promise(async _0x1703bf => {
        var _0x33c077 = {
            'RWTMa': function(_0x1927a3, _0x4ef6e2) {
                return _0x5d1a00['MxqUe'](_0x1927a3, _0x4ef6e2);
            },
            'KaKXs': function(_0x21d0eb, _0x2d05e9) {
                return _0x5d1a00['MxqUe'](_0x21d0eb, _0x2d05e9);
            },
            'BecJr': function(_0x22b831) {
                return _0x5d1a00['THbUT'](_0x22b831);
            },
            'tPkjI': function(_0x188979, _0x23a858) {
                return _0x5d1a00['rhmSU'](_0x188979, _0x23a858);
            },
            'zsrGC': _0x5d1a00['kVdyh'],
            'QeQzc': function(_0x563627, _0x20f7e2) {
                return _0x5d1a00['nEOjS'](_0x563627, _0x20f7e2);
            },
            'QacUw': _0x5d1a00['SbjKK'],
            'xBwvS': function(_0x421079, _0x140d5c) {
                return _0x5d1a00['MxqUe'](_0x421079, _0x140d5c);
            },
            'mIenn': _0x5d1a00['RnCFV'],
            'GKDDV': _0x5d1a00['HbCIi'],
            'frMBn': function(_0x10a494, _0x1cc98d) {
                return _0x5d1a00['bsCjs'](_0x10a494, _0x1cc98d);
            },
            'ZnNpU': _0x5d1a00['LiXJj'],
            'oUuGM': _0x5d1a00['AmZzx'],
            'ogSQj': function(_0x4b8080, _0x21e12a) {
                return _0x5d1a00['PDLhw'](_0x4b8080, _0x21e12a);
            },
            'orrYa': function(_0x91bed1, _0x50a8af, _0x314966) {
                return _0x5d1a00['ClNwA'](_0x91bed1, _0x50a8af, _0x314966);
            },
            'eHOUn': function(_0x4b2fce) {
                return _0x5d1a00['THbUT'](_0x4b2fce);
            },
            'haFjQ': function(_0x15a76d, _0x13e9ad) {
                return _0x5d1a00['DDuSc'](_0x15a76d, _0x13e9ad);
            },
            'lxBzY': _0x5d1a00['FFCss']
        };
        $['get'](_0x5d1a00['wgPLA'](taskUrl, 'user/GatherForture'), async (_0x1cf3c1, _0xdab3a2, _0x5e0e18) => {
            var _0x56eea7 = {
                'UKHyz': function(_0xb7dbc4) {
                    return _0x33c077['BecJr'](_0xb7dbc4);
                },
                'yfZOA': function(_0x490cb1, _0x4daef9) {
                    return _0x33c077['tPkjI'](_0x490cb1, _0x4daef9);
                },
                'yufIz': _0x33c077['zsrGC'],
                'SKxMx': function(_0x40207c, _0x3f0ce0) {
                    return _0x33c077['QeQzc'](_0x40207c, _0x3f0ce0);
                },
                'ZNZXO': _0x33c077['QacUw'],
                'ItoAB': function(_0x42109a, _0x2b556f) {
                    return _0x33c077['xBwvS'](_0x42109a, _0x2b556f);
                },
                'UFbCL': _0x33c077['mIenn'],
                'KrVBr': _0x33c077['GKDDV'],
                'NLFGh': function(_0x5809d8) {
                    return _0x33c077['BecJr'](_0x5809d8);
                }
            };
            if (_0x33c077['frMBn'](_0x33c077['ZnNpU'], _0x33c077['ZnNpU'])) {
                $['logErr'](e, _0xdab3a2);
            } else {
                try {
                    if (_0x33c077['frMBn'](_0x33c077['oUuGM'], _0x33c077['oUuGM'])) {
                        try {
                            console['log']('\n超级助力(超级工人)结果:' + _0x5e0e18);
                            const {
                                sErrMsg,
                                iRet
                            } = JSON['parse'](_0x5e0e18);
                            if (_0x33c077['RWTMa'](iRet, 0x7d5) || _0x33c077['KaKXs'](iRet, 0x270f)) $['canHelp'] = ![];
                            console['log'](sErrMsg);
                        } catch (_0x2eabd9) {
                            $['logErr'](_0x2eabd9, _0xdab3a2);
                        } finally {
                            _0x33c077['BecJr'](_0x1703bf);
                        }
                    } else {
                        const {
                            PeriodBox = [{}]
                        } = JSON['parse'](_0x5e0e18);
                        for (var _0x1dc80f = 0x0; _0x33c077['ogSQj'](_0x1dc80f, PeriodBox['length']); _0x1dc80f++) {
                            const {
                                dwStatus,
                                dwSeq,
                                strBrandName
                            } = PeriodBox[_0x1dc80f];
                            if (_0x33c077['QeQzc'](dwStatus, 0x2)) {
                                await $['wait'](0x3e8);
                                await $['get'](_0x33c077['orrYa'](taskUrl, 'user/OpenPeriodBox', 'dwSeq=' + dwSeq), async (_0x1cf3c1, _0xdab3a2, _0x5e0e18) => {
                                    try {
                                        if (_0x56eea7['yfZOA'](_0x56eea7['yufIz'], _0x56eea7['yufIz'])) {
                                            $['logErr'](e, _0xdab3a2);
                                        } else {
                                            const {
                                                dwMoney,
                                                iRet,
                                                sErrMsg
                                            } = JSON['parse'](_0x5e0e18);
                                            $['log']('\n【🏝寻宝大作战】【' + strBrandName + '】开宝箱：' + (_0x56eea7['SKxMx'](sErrMsg, _0x56eea7['ZNZXO']) ? ' 获得财富值 ¥ ' + dwMoney : sErrMsg) + '\x0a' + ($['showLog'] ? _0x5e0e18 : ''));
                                        }
                                    } catch (_0x2b0d8d) {
                                        $['logErr'](_0x2b0d8d, _0xdab3a2);
                                    } finally {
                                        if (_0x56eea7['ItoAB'](_0x56eea7['UFbCL'], _0x56eea7['KrVBr'])) {
                                            _0x56eea7['UKHyz'](_0x1703bf);
                                        } else {
                                            _0x56eea7['NLFGh'](_0x1703bf);
                                        }
                                    }
                                });
                            } else if (_0x33c077['QeQzc'](dwStatus, 0x3)) {
                                $['log']('\n【🏝寻宝大作战】【' + strBrandName + '】开宝箱：宝箱已开启过！');
                            } else {
                                $['log']('\n【🏝寻宝大作战】【' + strBrandName + '】开宝箱：未达到宝箱开启条件，快去邀请好友助力吧！');
                                _0x33c077['eHOUn'](_0x1703bf);
                            }
                        }
                    }
                } catch (_0x14527d) {
                    if (_0x33c077['haFjQ'](_0x33c077['lxBzY'], _0x33c077['lxBzY'])) {
                        $['logErr'](_0x14527d, _0xdab3a2);
                    } else {
                        $['logErr'](_0x14527d, _0xdab3a2);
                    }
                } finally {
                    _0x33c077['eHOUn'](_0x1703bf);
                }
            }
        });
    });
}

function activeScene(_0x5d5bd5) {
    var _0x245137 = {
        'CjUFN': function(_0x5371d8, _0x7b7a0c) {
            return _0x5371d8 === _0x7b7a0c;
        },
        'ECODR': 'ekDsa',
        'urIaw': function(_0x14173b) {
            return _0x14173b();
        },
        'zAMVU': function(_0x166b9d, _0x1b520e) {
            return _0x166b9d(_0x1b520e);
        },
        'GBnDN': 'RWTHt',
        'EYpJd': '*/*',
        'iSOLk': 'keep-alive',
        'AFSIt': 'https://st.jingxi.com/fortune_island/index.html',
        'wGAdE': 'gzip, deflate, br',
        'qqNDa': 'm.jingxi.com',
        'QPwdX': function(_0x4538bc, _0x2ceb90) {
            return _0x4538bc + _0x2ceb90;
        },
        'jEfna': function(_0x2f7f97, _0x5ba2db) {
            return _0x2f7f97 * _0x5ba2db;
        },
        'DGcem': 'zh-cn'
    };
    return new Promise(_0x286d79 => {
        var _0x1a9dd7 = {
            'OyCuA': function(_0x4b5f28, _0x16048e) {
                return _0x245137['zAMVU'](_0x4b5f28, _0x16048e);
            },
            'VJiwp': function(_0x223aba) {
                return _0x245137['urIaw'](_0x223aba);
            }
        };
        if (_0x245137['CjUFN'](_0x245137['GBnDN'], _0x245137['GBnDN'])) {
            const _0x5a4c72 = {
                'url': JD_API_HOST + 'jxcfd/user/ActiveScene?strZone=jxcfd&bizCode=jxcfd&source=jxcfd&dwEnv=7&_cfd_t=' + Date['now']() + '&ptag=&dwSceneId=' + _0x245137['zAMVU'](Number, _0x5d5bd5) + '&_stk=_cfd_t,bizCode,dwEnv,dwSceneId,ptag,source,strZone&_ste=1&h5st=20210304125239873;1540797227618115;10009;tk01we7831daaa8nRzRiUm4rZjRynBiuCHXtzWJmGCtVH2P+YnfnjoIsTWS87p85/fH4kcisjwWpqa10pRs3zMclNzix;5a9afbeb82bbb4e5e62cfe4b72965b5a2bf12cc3c56817b53e93a1cead562dc4&_=' + Date['now']() + '&sceneval=2&g_login_type=1',
                'headers': {
                    'Cookie': cookie,
                    'Accept': _0x245137['EYpJd'],
                    'Connection': _0x245137['iSOLk'],
                    'Referer': _0x245137['AFSIt'],
                    'Accept-Encoding': _0x245137['wGAdE'],
                    'Host': _0x245137['qqNDa'],
                    'User-Agent': 'jdpingou;iPhone;3.15.2;14.2.1;ea00763447803eb0f32045dcba629c248ea53bb3;network/wifi;model/iPhone13,2;appBuild/100365;ADID/00000000-0000-0000-0000-000000000000;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/0;hasOCPay/0;supportBestPay/0;session/' + _0x245137['QPwdX'](_0x245137['jEfna'](Math['random'], 0x62), 0x1) + ';pap/JA2015_311210;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
                    'Accept-Language': _0x245137['DGcem']
                }
            };
            $['get'](_0x5a4c72, (_0x46ce2e, _0x53849, _0x251b8b) => {
                try {
                    if (_0x251b8b) {
                        if (_0x245137['CjUFN'](_0x245137['ECODR'], _0x245137['ECODR'])) {
                            console['log']('开通场景结果:' + _0x251b8b + '\x0a');
                        } else {
                            const {
                                sErrMsg
                            } = JSON['parse'](_0x251b8b);
                            $['log']('\n【🏝寻宝大作战】' + sErrMsg + '\x0a' + ($['showLog'] ? _0x251b8b : ''));
                            _0x1a9dd7['OyCuA'](_0x286d79, 0x0);
                        }
                    }
                } catch (_0x842a7d) {
                    $['logErr'](_0x842a7d, _0x53849);
                } finally {
                    _0x245137['urIaw'](_0x286d79);
                }
            });
        } else {
            _0x1a9dd7['VJiwp'](_0x286d79);
        }
    });
}

function taskUrl(_0x458e68, _0x14474c) {
    var _0x11e58b = {
        'jtriP': '*/*',
        'vHbvD': 'keep-alive',
        'cdnvN': 'https://st.jingxi.com/fortune_island/index.html?ptag=138631.26.55',
        'jzzAR': 'gzip, deflate, br',
        'gRqWU': 'm.jingxi.com',
        'necSc': function(_0x146d61, _0x212683) {
            return _0x146d61 + _0x212683;
        },
        'dYfVH': function(_0x52c009, _0x8a196d) {
            return _0x52c009 * _0x8a196d;
        },
        'kLrBr': 'zh-cn'
    };
    return {
        'url': JD_API_HOST + 'jxcfd/' + _0x458e68 + '?strZone=jxcfd&bizCode=jxcfd&source=jxcfd&dwEnv=7&_cfd_t=' + Date['now']() + '&ptag=138631.26.55&' + _0x14474c + '&_ste=1&_=' + Date['now']() + '&sceneval=2&g_login_type=1&g_ty=ls',
        'headers': {
            'Cookie': cookie,
            'Accept': _0x11e58b['jtriP'],
            'Connection': _0x11e58b['vHbvD'],
            'Referer': _0x11e58b['cdnvN'],
            'Accept-Encoding': _0x11e58b['jzzAR'],
            'Host': _0x11e58b['gRqWU'],
            'User-Agent': 'jdpingou;iPhone;3.15.2;14.2.1;ea00763447803eb0f32045dcba629c248ea53bb3;network/wifi;model/iPhone13,2;appBuild/100365;ADID/00000000-0000-0000-0000-000000000000;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/0;hasOCPay/0;supportBestPay/0;session/' + _0x11e58b['necSc'](_0x11e58b['dYfVH'](Math['random'], 0x62), 0x1) + ';pap/JA2015_311210;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
            'Accept-Language': _0x11e58b['kLrBr']
        }
    };
}

function taskListUrl(_0x44e567, _0xa3a701) {
    var _0x188cce = {
        'nzggP': '*/*',
        'JgLcT': 'keep-alive',
        'MOFyt': 'https://st.jingxi.com/fortune_island/index.html?ptag=138631.26.55',
        'zpiuG': 'gzip, deflate, br',
        'asKhZ': 'm.jingxi.com',
        'qcHeO': function(_0x789847, _0x11a5e4) {
            return _0x789847 + _0x11a5e4;
        },
        'HVULU': function(_0x149cf8, _0x387a8f) {
            return _0x149cf8 * _0x387a8f;
        },
        'fdwPF': 'zh-cn'
    };
    return {
        'url': JD_API_HOST + 'newtasksys/newtasksys_front/' + _0x44e567 + '?strZone=jxcfd&bizCode=jxcfd&source=jxcfd&dwEnv=7&_cfd_t=' + Date['now']() + '&ptag=138631.26.55&' + _0xa3a701 + '&_ste=1&_=' + Date['now']() + '&sceneval=2&g_login_type=1&g_ty=ls',
        'headers': {
            'Cookie': cookie,
            'Accept': _0x188cce['nzggP'],
            'Connection': _0x188cce['JgLcT'],
            'Referer': _0x188cce['MOFyt'],
            'Accept-Encoding': _0x188cce['zpiuG'],
            'Host': _0x188cce['asKhZ'],
            'User-Agent': 'jdpingou;iPhone;3.15.2;14.2.1;ea00763447803eb0f32045dcba629c248ea53bb3;network/wifi;model/iPhone13,2;appBuild/100365;ADID/00000000-0000-0000-0000-000000000000;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/0;hasOCPay/0;supportBestPay/0;session/' + _0x188cce['qcHeO'](_0x188cce['HVULU'](Math['random'], 0x62), 0x1) + ';pap/JA2015_311210;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
            'Accept-Language': _0x188cce['fdwPF']
        }
    };
}

function showMsg() {
    var _0x2c2cb8 = {
        'hIshw': function(_0x702168, _0x484c3d) {
            return _0x702168 === _0x484c3d;
        },
        'jEqPo': 'jtJmx',
        'kbtZc': 'pxGgn',
        'LXKrs': 'chzyX',
        'pOhUr': 'MZvqP',
        'sXbii': 'HH:mm',
        'VKfKU': function(_0x3f60b7) {
            return _0x3f60b7();
        }
    };
    return new Promise(async _0x558b27 => {
        if (_0x2c2cb8['hIshw'](_0x2c2cb8['jEqPo'], _0x2c2cb8['kbtZc'])) {
            cookiesArr['push'](jdCookieNode[item]);
        } else {
            if ($['result']['length']) {
                if ($['notifyTime']) {
                    if (_0x2c2cb8['hIshw'](_0x2c2cb8['LXKrs'], _0x2c2cb8['pOhUr'])) {
                        $['logErr'](e, resp);
                    } else {
                        const _0x46b85b = $['notifyTime']['split'](',')['map'](_0x110039 => _0x110039['split'](':'));
                        const _0x1e65a6 = $['time'](_0x2c2cb8['sXbii'])['split'](':');
                        $['log']('\x0a' + JSON['stringify'](_0x46b85b));
                        $['log']('\x0a' + JSON['stringify'](_0x1e65a6));
                        if (_0x46b85b['some'](_0x53d787 => _0x53d787[0x0] === _0x1e65a6[0x0] && (!_0x53d787[0x1] || _0x53d787[0x1] === _0x1e65a6[0x1]))) {
                            $['msg']($['name'], '', '' + $['result']['join']('\x0a'));
                        }
                    }
                } else {
                    $['msg']($['name'], '', '' + $['result']['join']('\x0a'));
                }
                if ($['isNode']() && process['env']['CFD_NOTIFY_CONTROL']) await notify['sendNotify']($['name'] + ' - 账号' + $['index'] + ' - ' + $['nickName'], '' + $['result']['join']('\x0a'));
            }
            _0x2c2cb8['VKfKU'](_0x558b27);
        }
    });
}

function TotalBean() {
    var _0xf19519 = {
        'FKtPY': function(_0x10b76a, _0x21dd7a) {
            return _0x10b76a != _0x21dd7a;
        },
        'bqaVs': '未中奖',
        'CqtzR': function(_0x3a02ef) {
            return _0x3a02ef();
        },
        'TOABm': 'base',
        'bAgZr': function(_0x153e04) {
            return _0x153e04();
        },
        'aXBub': function(_0x15fdfe, _0x56f07d) {
            return _0x15fdfe == _0x56f07d;
        },
        'dGPuf': 'success',
        'RaGRi': function(_0xdf3af, _0x34a008) {
            return _0xdf3af || _0x34a008;
        },
        'qnxxY': function(_0x4f97a3, _0x102b0b) {
            return _0x4f97a3 !== _0x102b0b;
        },
        'CAPWk': 'wUrzf',
        'VnGpA': function(_0x15c4f2, _0x211b9f) {
            return _0x15c4f2 === _0x211b9f;
        },
        'ouDDH': 'bWmNr',
        'zqspk': 'uVpZH',
        'IPYUK': function(_0x430b9c, _0x53b49e) {
            return _0x430b9c === _0x53b49e;
        },
        'lMoVl': 'retcode',
        'rwWeZ': function(_0xa09d59, _0x2b73f8) {
            return _0xa09d59 !== _0x2b73f8;
        },
        'KXZVr': 'dwXaE',
        'VilAc': 'WlEpY',
        'Xmojm': 'iuwmk',
        'Fahbk': 'dAsQy',
        'CrcDs': 'EqbXd',
        'LHJYt': 'application/json,text/plain, */*',
        'DzGVc': 'application/x-www-form-urlencoded',
        'UdIey': 'gzip, deflate, br',
        'zEWBj': 'zh-cn',
        'ygeHT': 'keep-alive',
        'WrCQz': 'https://wqs.jd.com/my/jingdou/my.shtml?sceneval=2',
        'ZXwLM': function(_0x5aec74, _0x12f82d) {
            return _0x5aec74(_0x12f82d);
        },
        'ibKoK': './USER_AGENTS',
        'ANPon': 'JDUA',
        'fiTjC': 'jdapp;iPhone;9.2.2;14.2;%E4%BA%AC%E4%B8%9C/9.2.2 CFNetwork/1206 Darwin/20.1.0'
    };
    return new Promise(async _0x5183ab => {
        var _0x58c503 = {
            'rVizg': _0xf19519['TOABm'],
            'ALGYC': function(_0x36663f) {
                return _0xf19519['bAgZr'](_0x36663f);
            },
            'LbWfk': function(_0x210807, _0x1389fa) {
                return _0xf19519['aXBub'](_0x210807, _0x1389fa);
            },
            'BrARK': _0xf19519['dGPuf'],
            'iuPvQ': function(_0x50ddd2, _0x4e9b38) {
                return _0xf19519['RaGRi'](_0x50ddd2, _0x4e9b38);
            },
            'HdXMq': function(_0x51ae9c) {
                return _0xf19519['bAgZr'](_0x51ae9c);
            },
            'QNMoW': function(_0x308cd8, _0x1e88c2) {
                return _0xf19519['qnxxY'](_0x308cd8, _0x1e88c2);
            },
            'GkDcg': _0xf19519['CAPWk'],
            'RezLg': function(_0xcc645a, _0x5f1e4a) {
                return _0xf19519['VnGpA'](_0xcc645a, _0x5f1e4a);
            },
            'MGqLq': _0xf19519['ouDDH'],
            'XQDry': _0xf19519['zqspk'],
            'vTNZG': function(_0x114484, _0x4f229e) {
                return _0xf19519['IPYUK'](_0x114484, _0x4f229e);
            },
            'RiuDt': _0xf19519['lMoVl'],
            'BzlJW': function(_0x56346a, _0x16a7ed) {
                return _0xf19519['rwWeZ'](_0x56346a, _0x16a7ed);
            },
            'yQPTr': _0xf19519['KXZVr'],
            'ZMVDG': _0xf19519['VilAc'],
            'RHIis': _0xf19519['Xmojm'],
            'kLzZS': function(_0x58f5b3) {
                return _0xf19519['bAgZr'](_0x58f5b3);
            }
        };
        if (_0xf19519['rwWeZ'](_0xf19519['Fahbk'], _0xf19519['CrcDs'])) {
            const _0x1faa28 = {
                'url': 'https://wq.jd.com/user/info/QueryJDUserInfo?sceneval=2',
                'headers': {
                    'Accept': _0xf19519['LHJYt'],
                    'Content-Type': _0xf19519['DzGVc'],
                    'Accept-Encoding': _0xf19519['UdIey'],
                    'Accept-Language': _0xf19519['zEWBj'],
                    'Connection': _0xf19519['ygeHT'],
                    'Cookie': cookie,
                    'Referer': _0xf19519['WrCQz'],
                    'User-Agent': $['isNode']() ? process['env']['JD_USER_AGENT'] ? process['env']['JD_USER_AGENT'] : _0xf19519['ZXwLM'](require, _0xf19519['ibKoK'])['USER_AGENT'] : $['getdata'](_0xf19519['ANPon']) ? $['getdata'](_0xf19519['ANPon']) : _0xf19519['fiTjC']
                }
            };
            $['post'](_0x1faa28, (_0x581ea2, _0x4c4023, _0x4f847a) => {
                var _0x9073d8 = {
                    'DWKio': function(_0xf3e603, _0x30bcaf) {
                        return _0x58c503['LbWfk'](_0xf3e603, _0x30bcaf);
                    },
                    'KHTyL': _0x58c503['BrARK'],
                    'svTYr': function(_0x53911e, _0x46ff18) {
                        return _0x58c503['iuPvQ'](_0x53911e, _0x46ff18);
                    },
                    'dAxuQ': function(_0x2bed35) {
                        return _0x58c503['HdXMq'](_0x2bed35);
                    }
                };
                try {
                    if (_0x58c503['QNMoW'](_0x58c503['GkDcg'], _0x58c503['GkDcg'])) {
                        $['nickName'] = _0x4f847a[_0x58c503['rVizg']]['nickname'];
                    } else {
                        if (_0x581ea2) {
                            console['log']('' + JSON['stringify'](_0x581ea2));
                            console['log']($['name'] + ' API请求失败，请检查网路重试');
                        } else {
                            if (_0x58c503['RezLg'](_0x58c503['MGqLq'], _0x58c503['XQDry'])) {
                                _0x58c503['ALGYC'](_0x5183ab);
                            } else {
                                if (_0x4f847a) {
                                    _0x4f847a = JSON['parse'](_0x4f847a);
                                    if (_0x58c503['vTNZG'](_0x4f847a[_0x58c503['RiuDt']], 0xd)) {
                                        $['isLogin'] = ![];
                                        return;
                                    }
                                    if (_0x58c503['vTNZG'](_0x4f847a[_0x58c503['RiuDt']], 0x0)) {
                                        $['nickName'] = _0x4f847a[_0x58c503['rVizg']]['nickname'];
                                    } else {
                                        if (_0x58c503['BzlJW'](_0x58c503['yQPTr'], _0x58c503['ZMVDG'])) {
                                            $['nickName'] = $['UserName'];
                                        } else {
                                            try {
                                                const {
                                                    iRet,
                                                    dwMoney,
                                                    sErrMsg
                                                } = JSON['parse'](_0x4f847a);
                                                $['log']('\x0a【' + sceneList[_key]['strSceneName'] + '】🏝岛主 : ' + (_0x9073d8['DWKio'](sErrMsg, _0x9073d8['KHTyL']) ? '获取财富值：¥ ' + _0x9073d8['svTYr'](dwMoney, 0x0) : sErrMsg) + ' \x0a' + ($['showLog'] ? _0x4f847a : ''));
                                            } catch (_0x422f1a) {
                                                $['logErr'](_0x422f1a, _0x4c4023);
                                            } finally {
                                                _0x9073d8['dAxuQ'](_0x5183ab);
                                            }
                                        }
                                    }
                                } else {
                                    console['log']('京东服务器返回空数据');
                                }
                            }
                        }
                    }
                } catch (_0x15c45d) {
                    $['logErr'](_0x15c45d, _0x4c4023);
                } finally {
                    if (_0x58c503['BzlJW'](_0x58c503['RHIis'], _0x58c503['RHIis'])) {
                        const {
                            iRet,
                            sErrMsg,
                            dwExpericnce
                        } = JSON['parse'](_0x4f847a);
                        $['log']('\x0a' + strTaskDescr + '【领成就奖励】： success 获得财富值：¥ ' + dwExpericnce + '\x0a' + ($['showLog'] ? _0x4f847a : ''));
                    } else {
                        _0x58c503['kLzZS'](_0x5183ab);
                    }
                }
            });
        } else {
            try {
                const {
                    iRet,
                    sErrMsg,
                    strAwardPoolName
                } = JSON['parse'](data);
                $['log']('\n【抽奖结果】🎰 ' + (_0xf19519['FKtPY'](strAwardPoolName, '') ? _0xf19519['bqaVs'] : strAwardPoolName) + ' \x0a' + ($['showLog'] ? data : ''));
            } catch (_0x34eb03) {
                $['logErr'](_0x34eb03, resp);
            } finally {
                _0xf19519['CqtzR'](_0x5183ab);
            }
        }
    });
}

function readShareCode() {
    var _0x2e11c4 = {
        'pPYyV': function(_0x3f8384, _0x29e911) {
            return _0x3f8384 !== _0x29e911;
        },
        'EIMuY': 'mRbbR',
        'RIICQ': 'HSZaD',
        'FsnFr': function(_0x548b3c, _0x4412e8) {
            return _0x548b3c(_0x4412e8);
        },
        'qrAXM': function(_0x6c6a31, _0x3318c7) {
            return _0x6c6a31 || _0x3318c7;
        },
        'gNVLG': 'fwnwR',
        'eYeHa': function(_0x4f9b4e) {
            return _0x4f9b4e();
        }
    };
    console['log']('开始');
    return new Promise(async _0x1ba70a => {
        var _0x43f002 = {
            'SPAPd': function(_0x235370, _0x300bdb) {
                return _0x2e11c4['qrAXM'](_0x235370, _0x300bdb);
            }
        };
        if (_0x2e11c4['pPYyV'](_0x2e11c4['gNVLG'], _0x2e11c4['gNVLG'])) {
            $['logErr'](e, resp);
        } else {
            $['get']({
                'url': 'http://jd.turinglabs.net/api/v2/jd/jxcfd/read/0/',
                'timeout': 0x2710
            }, (_0x44b642, _0x5adc1c, _0x7a0fc3) => {
                try {
                    if (_0x44b642) {
                        console['log']('' + JSON['stringify'](_0x44b642));
                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                    } else {
                        if (_0x7a0fc3) {
                            console['log']('随机取0个码放到您固定的互助码后面(不影响已有固定互助)');
                            _0x7a0fc3 = JSON['parse'](_0x7a0fc3);
                        }
                    }
                } catch (_0x112b88) {
                    if (_0x2e11c4['pPYyV'](_0x2e11c4['EIMuY'], _0x2e11c4['RIICQ'])) {
                        $['logErr'](_0x112b88, _0x5adc1c);
                    } else {
                        const {
                            iRet,
                            sData: {
                                ddwMoney
                            },
                            sErrMsg
                        } = JSON['parse'](_0x7a0fc3);
                        $['log']('\n📌签到：' + sErrMsg + '，获得财富 ¥ ' + _0x43f002['SPAPd'](ddwMoney, 0x0) + '\x0a' + ($['showLog'] ? _0x7a0fc3 : ''));
                    }
                } finally {
                    _0x2e11c4['FsnFr'](_0x1ba70a, _0x7a0fc3);
                }
            });
            await $['wait'](0x2710);
            _0x2e11c4['eYeHa'](_0x1ba70a);
        }
    });
}

function shareCodesFormat() {
    var _0x2a1783 = {
        'dxeRs': function(_0x46574a, _0x110e69) {
            return _0x46574a === _0x110e69;
        },
        'nEjaC': function(_0x4a78f0, _0x2c8ecd) {
            return _0x4a78f0 - _0x2c8ecd;
        },
        'IYhYd': function(_0x2bcfa8, _0xcc1011) {
            return _0x2bcfa8 - _0xcc1011;
        },
        'DPfHM': function(_0x23dfb0, _0x12dbee) {
            return _0x23dfb0 === _0x12dbee;
        },
        'iAbhD': 'pWUBg',
        'QaLHV': function(_0x26f82d) {
            return _0x26f82d();
        },
        'HTrWy': 'F45CB4F07997DFE748E5656521A9034446A1568F6950206B0D44A5664662275D'
    };
    return new Promise(async _0x46a004 => {
        var _0x4cca53 = {
            'yJHoB': function(_0x244b96, _0x777993) {
                return _0x2a1783['dxeRs'](_0x244b96, _0x777993);
            },
            'xmJPR': function(_0x1337ef, _0x44ef13) {
                return _0x2a1783['dxeRs'](_0x1337ef, _0x44ef13);
            }
        };
        $['newShareCodes'] = [];
        if ($['shareCodesArr'][_0x2a1783['nEjaC']($['index'], 0x1)]) {
            $['newShareCodes'] = $['shareCodesArr'][_0x2a1783['IYhYd']($['index'], 0x1)]['split']('@');
        } else {
            if (_0x2a1783['DPfHM'](_0x2a1783['iAbhD'], _0x2a1783['iAbhD'])) {
                console['log']('由于您第' + $['index'] + '个京东账号未提供shareCode,将采纳本脚本自带的助力码\n');
                $['newShareCodes'] = $['strMyShareIds'];
            } else {
                console['log']('\n超级助力(超级工人)结果:' + data);
                const {
                    sErrMsg,
                    iRet
                } = JSON['parse'](data);
                if (_0x4cca53['yJHoB'](iRet, 0x7d5) || _0x4cca53['xmJPR'](iRet, 0x270f)) $['canHelp'] = ![];
                console['log'](sErrMsg);
            }
        }
        const _0x57348c = await _0x2a1783['QaLHV'](readShareCode);
        if (_0x57348c && _0x2a1783['DPfHM'](_0x57348c['code'], 0xc8)) {
            $['newShareCodes'] = [...new Set([...$['newShareCodes'], ...$['strMyShareIds'], _0x2a1783['HTrWy'], ..._0x57348c['data'] || []])];
        }
        console['log']('第' + $['index'] + '个京东账号将要助力的好友' + JSON['stringify']($['newShareCodes']));
        _0x2a1783['QaLHV'](_0x46a004);
    });
}

function requireConfig() {
    var _0x924dd0 = {
        'iCZfp': '任务为成就任务或者未到任务时间',
        'YvVaD': function(_0x2b8526, _0x28e896) {
            return _0x2b8526 === _0x28e896;
        },
        'lvDBt': 'false',
        'cyeqk': function(_0x25a88f) {
            return _0x25a88f();
        },
        'IyrvI': function(_0x1169ec) {
            return _0x1169ec();
        },
        'JXXwO': function(_0x9fa173) {
            return _0x9fa173();
        },
        'FefHl': function(_0x87cb81, _0x1120cd) {
            return _0x87cb81 !== _0x1120cd;
        },
        'iwmsx': 'dCbKk',
        'iTfwu': 'OwnXm',
        'bVixQ': function(_0x56bb92, _0xa0ee4a) {
            return _0x56bb92 === _0xa0ee4a;
        },
        'RjENV': function(_0x1aa135, _0x1a0752) {
            return _0x1aa135 === _0x1a0752;
        },
        'tHjDc': 'HXqfX',
        'eJxDa': 'OBPbW',
        'sFwrv': function(_0xa92718, _0x3e515f) {
            return _0xa92718 !== _0x3e515f;
        },
        'MtuEV': 'qinAv',
        'KGrPy': function(_0x3678cc, _0x1cc2a4) {
            return _0x3678cc > _0x1cc2a4;
        },
        'RtIys': 'YpNdx',
        'PpnQe': 'EGzXm',
        'VgHlz': 'etZZm',
        'lNUof': function(_0x18b3f5, _0x32390c) {
            return _0x18b3f5 === _0x32390c;
        },
        'cDvZK': 'GfLyA',
        'HxJpB': 'ldhMw',
        'yGMHp': function(_0x849e25, _0xffe4e8) {
            return _0x849e25 === _0xffe4e8;
        },
        'nazDw': 'XgILe',
        'ongEx': 'jd_jxCFD'
    };
    return new Promise(_0x509700 => {
        var _0x5002f5 = {
            'esnrS': function(_0x5bce38) {
                return _0x924dd0['cyeqk'](_0x5bce38);
            },
            'VqjVA': function(_0x406dc3) {
                return _0x924dd0['IyrvI'](_0x406dc3);
            },
            'oHpmP': function(_0x5e280f) {
                return _0x924dd0['JXXwO'](_0x5e280f);
            },
            'cLckJ': function(_0xa40405, _0x25948f) {
                return _0x924dd0['FefHl'](_0xa40405, _0x25948f);
            },
            'PHogF': _0x924dd0['iwmsx'],
            'MaFgI': _0x924dd0['iTfwu'],
            'pyFmg': function(_0x216299, _0x2c1e3c) {
                return _0x924dd0['bVixQ'](_0x216299, _0x2c1e3c);
            },
            'PcXXl': function(_0x62ed51, _0x198bd1) {
                return _0x924dd0['RjENV'](_0x62ed51, _0x198bd1);
            }
        };
        if (_0x924dd0['FefHl'](_0x924dd0['tHjDc'], _0x924dd0['eJxDa'])) {
            console['log']('开始获取' + $['name'] + '配置文件\n');
            let _0x1ce55c = [];
            if ($['isNode']() && process['env']['JDCFD_SHARECODES']) {
                if (_0x924dd0['sFwrv'](_0x924dd0['MtuEV'], _0x924dd0['MtuEV'])) {
                    if (data) {
                        console['log']('随机取0个码放到您固定的互助码后面(不影响已有固定互助)');
                        data = JSON['parse'](data);
                    }
                } else {
                    if (_0x924dd0['KGrPy'](process['env']['JDCFD_SHARECODES']['indexOf']('\x0a'), -0x1)) {
                        if (_0x924dd0['sFwrv'](_0x924dd0['RtIys'], _0x924dd0['PpnQe'])) {
                            _0x1ce55c = process['env']['JDCFD_SHARECODES']['split']('\x0a');
                        } else {
                            str = _0x924dd0['iCZfp'];
                        }
                    } else {
                        if (_0x924dd0['sFwrv'](_0x924dd0['VgHlz'], _0x924dd0['VgHlz'])) {
                            _0x5002f5['esnrS'](_0x509700);
                        } else {
                            _0x1ce55c = process['env']['JDCFD_SHARECODES']['split']('&');
                        }
                    }
                }
            }
            $['shareCodesArr'] = [];
            if ($['isNode']()) {
                if (_0x924dd0['lNUof'](_0x924dd0['cDvZK'], _0x924dd0['HxJpB'])) {
                    try {
                        const {
                            iRet,
                            sErrMsg,
                            dwExpericnce
                        } = JSON['parse'](data);
                        $['log']('\x0a' + strTaskDescr + '【领成就奖励】： success 获得财富值：¥ ' + dwExpericnce + '\x0a' + ($['showLog'] ? data : ''));
                    } catch (_0x1a5f28) {
                        $['logErr'](_0x1a5f28, resp);
                    } finally {
                        _0x5002f5['VqjVA'](_0x509700);
                    }
                } else {
                    Object['keys'](_0x1ce55c)['forEach'](_0x439133 => {
                        var _0x1fe6f5 = {
                            'etVWW': function(_0x35838c) {
                                return _0x5002f5['oHpmP'](_0x35838c);
                            }
                        };
                        if (_0x5002f5['cLckJ'](_0x5002f5['PHogF'], _0x5002f5['MaFgI'])) {
                            if (_0x1ce55c[_0x439133]) {
                                $['shareCodesArr']['push'](_0x1ce55c[_0x439133]);
                            }
                        } else {
                            _0x1fe6f5['etVWW'](_0x509700);
                        }
                    });
                }
            } else {
                if (_0x924dd0['yGMHp'](_0x924dd0['nazDw'], _0x924dd0['nazDw'])) {
                    if ($['getdata'](_0x924dd0['ongEx'])) $['shareCodesArr'] = $['getdata'](_0x924dd0['ongEx'])['split']('\x0a')['filter'](_0x4042e0 => !!_0x4042e0);
                    console['log']('\nBoxJs设置的京喜财富岛邀请码:' + $['getdata'](_0x924dd0['ongEx']) + '\x0a');
                } else {
                    const {
                        sErrMsg,
                        iRet
                    } = JSON['parse'](data);
                    if (_0x5002f5['pyFmg'](iRet, 0x7d5) || _0x5002f5['PcXXl'](iRet, 0x270f)) $['canHelp'] = ![];
                    $['log']('' + sErrMsg);
                }
            }
            console['log']('您提供了' + $['shareCodesArr']['length'] + '个账号的' + $['name'] + '助力码\n');
            _0x924dd0['JXXwO'](_0x509700);
        } else {
            Object['keys'](jdCookieNode)['forEach'](_0x24d1c4 => {
                cookiesArr['push'](jdCookieNode[_0x24d1c4]);
            });
            if (process['env']['JD_DEBUG'] && _0x924dd0['YvVaD'](process['env']['JD_DEBUG'], _0x924dd0['lvDBt'])) console['log'] = () => {};
        }
    });
}

function jsonParse(_0xd5b739) {
    var _0x3ff58f = {
        'VZVyo': function(_0x36ab8f) {
            return _0x36ab8f();
        },
        'PRtSI': function(_0x42a7ad, _0x434736) {
            return _0x42a7ad == _0x434736;
        },
        'SiLmD': 'string',
        'WoSZT': function(_0x3bec96, _0x16ba79) {
            return _0x3bec96 === _0x16ba79;
        },
        'mPLUL': 'oNumo',
        'XzDBz': '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie'
    };
    if (_0x3ff58f['PRtSI'](typeof _0xd5b739, _0x3ff58f['SiLmD'])) {
        try {
            return JSON['parse'](_0xd5b739);
        } catch (_0x3bbbda) {
            if (_0x3ff58f['WoSZT'](_0x3ff58f['mPLUL'], _0x3ff58f['mPLUL'])) {
                console['log'](_0x3bbbda);
                $['msg']($['name'], '', _0x3ff58f['XzDBz']);
                return [];
            } else {
                _0x3ff58f['VZVyo'](resolve);
            }
        }
    }
};
_0xodu = 'jsjiami.com.v6'

!function(n){"use strict";function t(n,t){var r=(65535&n)+(65535&t);return(n>>16)+(t>>16)+(r>>16)<<16|65535&r}function r(n,t){return n<<t|n>>>32-t}function e(n,e,o,u,c,f){return t(r(t(t(e,n),t(u,f)),c),o)}function o(n,t,r,o,u,c,f){return e(t&r|~t&o,n,t,u,c,f)}function u(n,t,r,o,u,c,f){return e(t&o|r&~o,n,t,u,c,f)}function c(n,t,r,o,u,c,f){return e(t^r^o,n,t,u,c,f)}function f(n,t,r,o,u,c,f){return e(r^(t|~o),n,t,u,c,f)}function i(n,r){n[r>>5]|=128<<r%32,n[14+(r+64>>>9<<4)]=r;var e,i,a,d,h,l=1732584193,g=-271733879,v=-1732584194,m=271733878;for(e=0;e<n.length;e+=16)i=l,a=g,d=v,h=m,g=f(g=f(g=f(g=f(g=c(g=c(g=c(g=c(g=u(g=u(g=u(g=u(g=o(g=o(g=o(g=o(g,v=o(v,m=o(m,l=o(l,g,v,m,n[e],7,-680876936),g,v,n[e+1],12,-389564586),l,g,n[e+2],17,606105819),m,l,n[e+3],22,-1044525330),v=o(v,m=o(m,l=o(l,g,v,m,n[e+4],7,-176418897),g,v,n[e+5],12,1200080426),l,g,n[e+6],17,-1473231341),m,l,n[e+7],22,-45705983),v=o(v,m=o(m,l=o(l,g,v,m,n[e+8],7,1770035416),g,v,n[e+9],12,-1958414417),l,g,n[e+10],17,-42063),m,l,n[e+11],22,-1990404162),v=o(v,m=o(m,l=o(l,g,v,m,n[e+12],7,1804603682),g,v,n[e+13],12,-40341101),l,g,n[e+14],17,-1502002290),m,l,n[e+15],22,1236535329),v=u(v,m=u(m,l=u(l,g,v,m,n[e+1],5,-165796510),g,v,n[e+6],9,-1069501632),l,g,n[e+11],14,643717713),m,l,n[e],20,-373897302),v=u(v,m=u(m,l=u(l,g,v,m,n[e+5],5,-701558691),g,v,n[e+10],9,38016083),l,g,n[e+15],14,-660478335),m,l,n[e+4],20,-405537848),v=u(v,m=u(m,l=u(l,g,v,m,n[e+9],5,568446438),g,v,n[e+14],9,-1019803690),l,g,n[e+3],14,-187363961),m,l,n[e+8],20,1163531501),v=u(v,m=u(m,l=u(l,g,v,m,n[e+13],5,-1444681467),g,v,n[e+2],9,-51403784),l,g,n[e+7],14,1735328473),m,l,n[e+12],20,-1926607734),v=c(v,m=c(m,l=c(l,g,v,m,n[e+5],4,-378558),g,v,n[e+8],11,-2022574463),l,g,n[e+11],16,1839030562),m,l,n[e+14],23,-35309556),v=c(v,m=c(m,l=c(l,g,v,m,n[e+1],4,-1530992060),g,v,n[e+4],11,1272893353),l,g,n[e+7],16,-155497632),m,l,n[e+10],23,-1094730640),v=c(v,m=c(m,l=c(l,g,v,m,n[e+13],4,681279174),g,v,n[e],11,-358537222),l,g,n[e+3],16,-722521979),m,l,n[e+6],23,76029189),v=c(v,m=c(m,l=c(l,g,v,m,n[e+9],4,-640364487),g,v,n[e+12],11,-421815835),l,g,n[e+15],16,530742520),m,l,n[e+2],23,-995338651),v=f(v,m=f(m,l=f(l,g,v,m,n[e],6,-198630844),g,v,n[e+7],10,1126891415),l,g,n[e+14],15,-1416354905),m,l,n[e+5],21,-57434055),v=f(v,m=f(m,l=f(l,g,v,m,n[e+12],6,1700485571),g,v,n[e+3],10,-1894986606),l,g,n[e+10],15,-1051523),m,l,n[e+1],21,-2054922799),v=f(v,m=f(m,l=f(l,g,v,m,n[e+8],6,1873313359),g,v,n[e+15],10,-30611744),l,g,n[e+6],15,-1560198380),m,l,n[e+13],21,1309151649),v=f(v,m=f(m,l=f(l,g,v,m,n[e+4],6,-145523070),g,v,n[e+11],10,-1120210379),l,g,n[e+2],15,718787259),m,l,n[e+9],21,-343485551),l=t(l,i),g=t(g,a),v=t(v,d),m=t(m,h);return[l,g,v,m]}function a(n){var t,r="",e=32*n.length;for(t=0;t<e;t+=8)r+=String.fromCharCode(n[t>>5]>>>t%32&255);return r}function d(n){var t,r=[];for(r[(n.length>>2)-1]=void 0,t=0;t<r.length;t+=1)r[t]=0;var e=8*n.length;for(t=0;t<e;t+=8)r[t>>5]|=(255&n.charCodeAt(t/8))<<t%32;return r}function h(n){return a(i(d(n),8*n.length))}function l(n,t){var r,e,o=d(n),u=[],c=[];for(u[15]=c[15]=void 0,o.length>16&&(o=i(o,8*n.length)),r=0;r<16;r+=1)u[r]=909522486^o[r],c[r]=1549556828^o[r];return e=i(u.concat(d(t)),512+8*t.length),a(i(c.concat(e),640))}function g(n){var t,r,e="";for(r=0;r<n.length;r+=1)t=n.charCodeAt(r),e+="0123456789abcdef".charAt(t>>>4&15)+"0123456789abcdef".charAt(15&t);return e}function v(n){return unescape(encodeURIComponent(n))}function m(n){return h(v(n))}function p(n){return g(m(n))}function s(n,t){return l(v(n),v(t))}function C(n,t){return g(s(n,t))}function A(n,t,r){return t?r?s(t,n):C(t,n):r?m(n):p(n)}$.md5=A}(this);
// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
