/*
京喜财富岛
根据github@MoPoQAQ 财富岛脚本修改而来。无需京喜token,只需京东cookie即可.
cron 5 0,8,13,19 * * * jd_cfd.js
更新时间：2021-3-4
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

const randomCount = $['isNode']() ? 0x14 : 0x5;
if ($['isNode']()) {
    Object['keys'](jdCookieNode)['forEach'](_0x451b19 => {
        cookiesArr['push'](jdCookieNode[_0x451b19]);
    });
    if (process['env']['JD_DEBUG'] && process['env']['JD_DEBUG'] === 'false') console['log'] = () => {};
} else {
    cookiesArr = [$['getdata']('CookieJD'), $['getdata']('CookieJD2'), ...jsonParse($['getdata']('CookiesJD') || '[]')['map'](_0x575d75 => _0x575d75['cookie'])]['filter'](_0x189921 => !!_0x189921);
}!(async () => {
    var _0x7471e0 = {
        'BTLhA': function(_0x39d050, _0x4fda11) {
            return _0x39d050 === _0x4fda11;
        },
        'yHetu': function(_0x4dc6e2, _0x1dfc9d) {
            return _0x4dc6e2 === _0x1dfc9d;
        },
        'uYwat': function(_0xb66d6c) {
            return _0xb66d6c();
        },
        'SbZMJ': function(_0x4fe12c, _0x581922) {
            return _0x4fe12c !== _0x581922;
        },
        'WaIVq': 'UDUil',
        'mzphU': '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取',
        'Xqhcu': 'https://bean.m.jd.com/bean/signIndex.action',
        'pUxYL': function(_0x1dd2a8) {
            return _0x1dd2a8();
        },
        'rXOtL': function(_0x386b66, _0x1ba628) {
            return _0x386b66(_0x1ba628);
        },
        'qBDbx': 'http://adguard.mseweb.tk/shareCodes/cfd.json',
        'IOoJy': function(_0x501907, _0x3fc72d) {
            return _0x501907 < _0x3fc72d;
        },
        'wzRlp': function(_0xe2ebb0, _0x1970b3) {
            return _0xe2ebb0(_0x1970b3);
        },
        'fejwp': function(_0x55a3ef, _0x322cda) {
            return _0x55a3ef + _0x322cda;
        },
        'zMtZl': function(_0x46115f) {
            return _0x46115f();
        },
        'CwDDW': function(_0x40f26a) {
            return _0x40f26a();
        },
        'BIJMJ': function(_0xc2ac57) {
            return _0xc2ac57();
        },
        'jsgUY': function(_0x179fa0) {
            return _0x179fa0();
        }
    };
    await _0x7471e0['uYwat'](requireConfig);
    if (!cookiesArr[0x0]) {
        if (_0x7471e0['SbZMJ'](_0x7471e0['WaIVq'], _0x7471e0['WaIVq'])) {
            try {
                const {
                    sErrMsg,
                    iRet
                } = JSON['parse'](data);
                if (_0x7471e0['BTLhA'](iRet, 0x7d5) || _0x7471e0['yHetu'](iRet, 0x270f)) $['canHelp'] = ![];
                $['log']('' + sErrMsg);
            } catch (_0x5c3682) {
                $['logErr'](_0x5c3682, resp);
            } finally {
                _0x7471e0['uYwat'](resolve);
            }
        } else {
            $['msg']($['name'], _0x7471e0['mzphU'], _0x7471e0['Xqhcu'], {
                'open-url': _0x7471e0['Xqhcu']
            });
            return;
        }
    }
    let _0x5aeae7 = await _0x7471e0['pUxYL'](getAuthorShareCode),
        _0x1ba73e = await _0x7471e0['rXOtL'](getAuthorShareCode, _0x7471e0['qBDbx']);
    $['strMyShareIds'] = [..._0x5aeae7 && _0x5aeae7['shareId'] || [], ..._0x1ba73e && _0x1ba73e['shareId'] || []];
    $['strGroupIds'] = [..._0x5aeae7['strGroupIds'], ..._0x1ba73e['strGroupIds']];
    $['strGroupIds'] = [..._0x5aeae7 && _0x5aeae7['strGroupIds'] || [], ..._0x1ba73e && _0x1ba73e['strGroupIds'] || []];
    for (let _0x5f5b46 = 0x0; _0x7471e0['IOoJy'](_0x5f5b46, cookiesArr['length']); _0x5f5b46++) {
        if (cookiesArr[_0x5f5b46]) {
            cookie = cookiesArr[_0x5f5b46];
            $['UserName'] = _0x7471e0['wzRlp'](decodeURIComponent, cookie['match'](/pt_pin=(.+?);/) && cookie['match'](/pt_pin=(.+?);/)[0x1]);
            $['index'] = _0x7471e0['fejwp'](_0x5f5b46, 0x1);
            $['nickName'] = '';
            $['isLogin'] = !![];
            $['nickName'] = '';
            await _0x7471e0['pUxYL'](TotalBean);
            console['log']('\n开始【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']) + '\x0a');
            if (!$['isLogin']) {
                $['msg']($['name'], '【提示】cookie已失效', '京东账号' + $['index'] + ' ' + ($['nickName'] || $['UserName']) + '\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action', {
                    'open-url': _0x7471e0['Xqhcu']
                });
                if ($['isNode']()) {
                    await notify['sendNotify']($['name'] + 'cookie已失效 - ' + $['UserName'], '京东账号' + $['index'] + ' ' + $['UserName'] + '\n请重新登录获取cookie');
                }
                continue;
            }
            token = await _0x7471e0['zMtZl'](getJxToken);
            $['allTask'] = [];
            $['info'] = {};
            await _0x7471e0['CwDDW'](shareCodesFormat);
            await _0x7471e0['BIJMJ'](cfd);
            await _0x7471e0['jsgUY'](helpFriend);
        }
    }
    await $['wait'](0x1f4);
    await _0x7471e0['jsgUY'](showMsg);
})()['catch'](_0x15f864 => $['logErr'](_0x15f864))['finally'](() => $['done']());

function helpFriend() {
    var _0x59b8b3 = {
        'rntkO': function(_0x5155bb) {
            return _0x5155bb();
        },
        'CvzeR': function(_0x27b58c, _0x56400c) {
            return _0x27b58c === _0x56400c;
        },
        'CUMNU': 'CmHoR',
        'UAZak': 'UZLBV',
        'TfbCx': function(_0x33eb18, _0x26d2fe) {
            return _0x33eb18(_0x26d2fe);
        },
        'kxAtg': function(_0x42c435, _0x9d5028) {
            return _0x42c435(_0x9d5028);
        },
        'HSTWG': function(_0x1b9f30, _0x38d8c3) {
            return _0x1b9f30(_0x38d8c3);
        },
        'EpPkt': function(_0x567c77) {
            return _0x567c77();
        }
    };
    return new Promise(async _0x2416e4 => {
        var _0x64fed3 = {
            'WqcRj': function(_0x13e273) {
                return _0x59b8b3['rntkO'](_0x13e273);
            }
        };
        $['canHelp'] = !![];
        for (let _0xb5db3a of $['newShareCodes']['filter'](_0x4fedd7 => !_0x4fedd7['includes']('GroupId'))) {
            if (_0x59b8b3['CvzeR'](_0x59b8b3['CUMNU'], _0x59b8b3['UAZak'])) {
                _0x64fed3['WqcRj'](_0x2416e4);
            } else {
                console['log']('去助力好友 ' + _0xb5db3a);
                if (token) {
                    await _0x59b8b3['TfbCx'](createSuperAssistUser, _0xb5db3a);
                } else {
                    console['log']('此账号的用户名为中文,暂不能进行超级主力\n');
                }
                await _0x59b8b3['kxAtg'](createAssistUser, _0xb5db3a);
                await $['wait'](0x7d0);
                if (!$['canHelp']) break;
            }
        }
        if (token) {
            $['canHelp'] = !![];
            for (let _0x15c68e of $['strGroupIds']) {
                console['log']('去参加寻宝大作战' + _0x15c68e);
                await _0x59b8b3['HSTWG'](joinGroup, _0x15c68e);
                await $['wait'](0x7d0);
                if (!$['canHelp']) break;
            }
        }
        _0x59b8b3['EpPkt'](_0x2416e4);
    });
}
async function cfd() {
    var _0x332ea0 = {
        'YwVtO': function(_0x33778b) {
            return _0x33778b();
        },
        'BuyJf': function(_0xe159a6) {
            return _0xe159a6();
        },
        'FBTTS': function(_0x47c2f3, _0x2b6b69) {
            return _0x47c2f3(_0x2b6b69);
        },
        'KSSPB': function(_0x43c1d8, _0x3eec85) {
            return _0x43c1d8(_0x3eec85);
        },
        'hgQoD': function(_0x2b03b5, _0x309c0a) {
            return _0x2b03b5(_0x309c0a);
        },
        'eFPEu': function(_0x467b78) {
            return _0x467b78();
        },
        'PxVeR': function(_0x3500f5) {
            return _0x3500f5();
        },
        'xsVPK': function(_0x281dc3) {
            return _0x281dc3();
        },
        'qLPrA': function(_0x5ac574, _0x2a77c8) {
            return _0x5ac574 - _0x2a77c8;
        }
    };
    try {
        const _0x251fd3 = await _0x332ea0['YwVtO'](getUserInfo);
        await $['wait'](0x1f4);
        await _0x332ea0['YwVtO'](querySignList);
        await $['wait'](0x1f4);
        await _0x332ea0['BuyJf'](getMoney);
        await $['wait'](0x1f4);
        await _0x332ea0['FBTTS'](getTaskList, 0x0);
        await $['wait'](0x1f4);
        await _0x332ea0['KSSPB'](browserTask, 0x0);
        await $['wait'](0x1f4);
        await _0x332ea0['BuyJf'](treasureHunt);
        await $['wait'](0x1f4);
        await _0x332ea0['BuyJf'](friendCircle);
        await $['wait'](0x1f4);
        await _0x332ea0['hgQoD'](getTaskList, 0x1);
        await $['wait'](0x1f4);
        await _0x332ea0['hgQoD'](browserTask, 0x1);
        await $['wait'](0x1f4);
        await _0x332ea0['eFPEu'](funCenterState);
        await $['wait'](0x1f4);
        await _0x332ea0['PxVeR'](openPeriodBox);
        await $['wait'](0x1f4);
        await _0x332ea0['xsVPK'](submitGroupId);
        await $['wait'](0x1f4);
        const _0x9ba77d = await _0x332ea0['hgQoD'](getUserInfo, ![]);
        $['result']['push']('【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']), '【💵财富值】任务前: ' + _0x251fd3['ddwMoney'] + '\n【💵财富值】任务后: ' + _0x9ba77d['ddwMoney'], '【💵财富值】净增值: ' + _0x332ea0['qLPrA'](_0x9ba77d['ddwMoney'], _0x251fd3['ddwMoney']) + '\x0a');
    } catch (_0x33ca11) {
        $['logErr'](_0x33ca11);
    }
}

function getAuthorShareCode(_0x2208af = 'http://adguard.mseweb.tk/shareCodes/cfd.json') {
    var _0x141812 = {
        'nzxKX': function(_0x45d965, _0x39ec82) {
            return _0x45d965 !== _0x39ec82;
        },
        'ebdIT': 'YaOCn',
        'QAHuH': 'UeCfQ',
        'ZHMcJ': function(_0x51540e, _0x2f784d) {
            return _0x51540e(_0x2f784d);
        },
        'mEHpM': 'pmGTZ',
        'YXXIT': function(_0xfe19bc) {
            return _0xfe19bc();
        },
        'fplVi': '任务为成就任务或者未到任务时间',
        'RQmOC': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/87.0.4280.88'
    };
    return new Promise(_0x3e1c6 => {
        var _0x34dd74 = {
            'GVRFR': _0x141812['fplVi']
        };
        $['get']({
            'url': _0x2208af,
            'headers': {
                'User-Agent': _0x141812['RQmOC']
            }
        }, async (_0x519154, _0x493839, _0x58febc) => {
            if (_0x141812['nzxKX'](_0x141812['ebdIT'], _0x141812['QAHuH'])) {
                try {
                    _0x141812['ZHMcJ'](_0x3e1c6, JSON['parse'](_0x58febc));
                } catch (_0x15305e) {} finally {
                    if (_0x141812['nzxKX'](_0x141812['mEHpM'], _0x141812['mEHpM'])) {
                        $['logErr'](e, _0x493839);
                    } else {
                        _0x141812['YXXIT'](_0x3e1c6);
                    }
                }
            } else {
                str = _0x34dd74['GVRFR'];
            }
        });
    });
}

function getJxToken() {
    var _0x2f63fd = {
        'iyDdg': 'abcdefghijklmnopqrstuvwxyz1234567890',
        'RRVoj': function(_0x1b089e, _0x3fdf4b) {
            return _0x1b089e < _0x3fdf4b;
        },
        'ZQhlO': function(_0x3a8bb9, _0x1e827a) {
            return _0x3a8bb9(_0x1e827a);
        },
        'RzLhK': function(_0x520676, _0x2d12bd) {
            return _0x520676 * _0x2d12bd;
        },
        'fVEjJ': function(_0x27d6d5, _0x378d7a) {
            return _0x27d6d5(_0x378d7a);
        },
        'XmCUm': function(_0x5ba813, _0x3fe09f) {
            return _0x5ba813(_0x3fe09f);
        },
        'SpAnj': function(_0x3ddb75, _0x7d42a3) {
            return _0x3ddb75(_0x7d42a3);
        }
    };

    function _0x2f447e(_0x3e0970) {
        let _0xa3d605 = _0x2f63fd['iyDdg'];
        let _0x3bf369 = '';
        for (let _0x2eb78a = 0x0; _0x2f63fd['RRVoj'](_0x2eb78a, _0x3e0970); _0x2eb78a++) {
            _0x3bf369 += _0xa3d605[_0x2f63fd['ZQhlO'](parseInt, _0x2f63fd['RzLhK'](Math['random'](), _0xa3d605['length']))];
        }
        return _0x3bf369;
    }
    return new Promise(_0xe130f7 => {
        let _0x45480f = _0x2f63fd['fVEjJ'](_0x2f447e, 0x28);
        let _0x1633ef = (+new Date())['toString']();
        if (!cookie['match'](/pt_pin=(.+?);/)) {
            console['log']('此账号cookie填写不规范,你的pt_pin=xxx后面没分号(;)\n');
            _0x2f63fd['fVEjJ'](_0xe130f7, null);
        }
        let _0x18f7f8 = cookie['match'](/pt_pin=(.+?);/)[0x1];
        let _0x1986d5 = $['md5']('' + _0x2f63fd['XmCUm'](decodeURIComponent, _0x18f7f8) + _0x1633ef + _0x45480f + 'tPOamqCuk9NLgVPAljUyIHcPRmKlVxDy')['toString']();
        _0x2f63fd['SpAnj'](_0xe130f7, {
            'timestamp': _0x1633ef,
            'phoneid': _0x45480f,
            'farm_jstoken': _0x1986d5
        });
    });
}

function getUserInfo(_0x239fce = !![]) {
    var _0x566ba7 = {
        'WBfbd': function(_0x386f18, _0x76753a) {
            return _0x386f18 === _0x76753a;
        },
        'MDdWi': function(_0x13d588) {
            return _0x13d588();
        },
        'rdpbr': function(_0x38c315, _0x390c8e) {
            return _0x38c315 !== _0x390c8e;
        },
        'iohwF': 'iOeWQ',
        'OwMrb': 'cpwtA',
        'EaqBx': 'ddwMoney',
        'dkZfs': function(_0xa4910b, _0x2605e8) {
            return _0xa4910b + _0x2605e8;
        },
        'MDvJQ': function(_0x25ed02, _0x4dd601) {
            return _0x25ed02 + _0x4dd601;
        },
        'WfSDK': '\n【🏖岛主】你的互助码: ',
        'bSrjV': '(每次运行都变化,旧的可继续使用)',
        'RhsLl': function(_0x5af23b, _0x381000) {
            return _0x5af23b(_0x381000);
        },
        'lgzVF': function(_0x25db57, _0x54186f) {
            return _0x25db57 === _0x54186f;
        },
        'YtRbo': 'AhIlH',
        'Mtaaq': 'XbcXm',
        'Hbffc': 'UCBtH',
        'YZzGw': function(_0x28300c, _0x4f61fc) {
            return _0x28300c(_0x4f61fc);
        }
    };
    return new Promise(async _0x3526ef => {
        if (_0x566ba7['rdpbr'](_0x566ba7['Mtaaq'], _0x566ba7['Hbffc'])) {
            $['get'](_0x566ba7['YZzGw'](taskUrl, 'user/QueryUserInfo'), (_0x4b060f, _0x58b351, _0x4f3c5a) => {
                var _0x6b0938 = {
                    'pdDOZ': function(_0x31bcdb, _0x3cb855) {
                        return _0x566ba7['WBfbd'](_0x31bcdb, _0x3cb855);
                    },
                    'bYBad': function(_0x57aa36) {
                        return _0x566ba7['MDdWi'](_0x57aa36);
                    }
                };
                try {
                    if (_0x566ba7['rdpbr'](_0x566ba7['iohwF'], _0x566ba7['OwMrb'])) {
                        _0x4f3c5a = JSON['parse'](_0x4f3c5a);
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
                        } = _0x4f3c5a;
                        $['log']('\n获取用户信息：' + sErrMsg + '\x0a' + ($['showLog'] ? _0x4f3c5a : ''));
                        $['log']('\n当前等级:' + dwLevel + ',财富值:' + _0x4f3c5a[_0x566ba7['EaqBx']] + '\x0a');
                        if (_0x239fce) $['log'](_0x566ba7['dkZfs'](_0x566ba7['MDvJQ'](_0x566ba7['WfSDK'], strMyShareId), _0x566ba7['bSrjV']));
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
                        _0x566ba7['RhsLl'](_0x3526ef, {
                            'SceneList': SceneList,
                            'XBDetail': XBDetail,
                            'dwXBRemainCnt': dwXBRemainCnt,
                            'ddwMoney': ddwMoney,
                            'dwIsNewUser': dwIsNewUser,
                            'strMyShareId': strMyShareId,
                            'strPin': strPin
                        });
                    } else {
                        try {
                            console['log']('\n普通助力(招工)结果:' + _0x4f3c5a);
                            const {
                                iRet
                            } = JSON['parse'](_0x4f3c5a);
                            if (_0x6b0938['pdDOZ'](iRet, 0x7d5) || _0x6b0938['pdDOZ'](iRet, 0x270f)) $['canHelp'] = ![];
                        } catch (_0x1d2fe5) {} finally {
                            _0x6b0938['bYBad'](_0x3526ef);
                        }
                    }
                } catch (_0x242b55) {
                    $['logErr'](_0x242b55, _0x58b351);
                } finally {
                    if (_0x566ba7['lgzVF'](_0x566ba7['YtRbo'], _0x566ba7['YtRbo'])) {
                        _0x566ba7['MDdWi'](_0x3526ef);
                    } else {
                        $['nickName'] = $['UserName'];
                    }
                }
            });
        } else {
            $['msg']($['name'], '', '' + $['result']['join']('\x0a'));
        }
    });
}

function querySignList() {
    var _0x561427 = {
        'fhmRV': function(_0x4bf6a9) {
            return _0x4bf6a9();
        },
        'xpfFn': function(_0x2cbc6c, _0x5d66a4) {
            return _0x2cbc6c(_0x5d66a4);
        },
        'Gycei': function(_0x3616ce, _0x1471dd) {
            return _0x3616ce === _0x1471dd;
        },
        'aPJEO': 'rYRij',
        'UGtJa': function(_0xa41875, _0x26712c, _0x142963) {
            return _0xa41875(_0x26712c, _0x142963);
        },
        'rPCig': 'azeJt',
        'obadr': function(_0x5b7e40) {
            return _0x5b7e40();
        },
        'ICWNW': function(_0x1b0fbf, _0x90b3f7) {
            return _0x1b0fbf !== _0x90b3f7;
        },
        'PzBhu': 'DMupl',
        'wrswT': function(_0x5ccabf, _0x2ee94f) {
            return _0x5ccabf(_0x2ee94f);
        }
    };
    return new Promise(async _0x208825 => {
        var _0x5875d8 = {
            'bQxXj': function(_0x4b91bd, _0x534a6c) {
                return _0x561427['xpfFn'](_0x4b91bd, _0x534a6c);
            },
            'AuBFm': function(_0xf561a2, _0x4dfcd5) {
                return _0x561427['Gycei'](_0xf561a2, _0x4dfcd5);
            },
            'hXVFc': _0x561427['aPJEO'],
            'Lzche': function(_0x131f22, _0x25314e, _0x2a03f5) {
                return _0x561427['UGtJa'](_0x131f22, _0x25314e, _0x2a03f5);
            },
            'xjihK': function(_0x237af8, _0x319ade) {
                return _0x561427['Gycei'](_0x237af8, _0x319ade);
            },
            'jnPUo': _0x561427['rPCig'],
            'WBpow': function(_0x309227) {
                return _0x561427['obadr'](_0x309227);
            }
        };
        if (_0x561427['ICWNW'](_0x561427['PzBhu'], _0x561427['PzBhu'])) {
            _0x561427['fhmRV'](_0x208825);
        } else {
            $['get'](_0x561427['wrswT'](taskUrl, 'task/QuerySignListV2'), async (_0x91531f, _0x48ea7b, _0x518cdf) => {
                if (_0x5875d8['AuBFm'](_0x5875d8['hXVFc'], _0x5875d8['hXVFc'])) {
                    try {
                        const {
                            iRet,
                            sData: {
                                Sign = [{}],
                                dwUserFlag
                            },
                            sErrMsg
                        } = JSON['parse'](_0x518cdf);
                        $['log']('\n签到列表：' + sErrMsg + '\x0a' + ($['showLog'] ? _0x518cdf : ''));
                        const [{
                            dwStatus,
                            ddwMoney
                        }] = Sign['filter'](_0xb09b12 => _0xb09b12['dwShowFlag'] === 0x1);
                        if (_0x5875d8['AuBFm'](dwStatus, 0x0)) {
                            await _0x5875d8['Lzche'](userSignReward, dwUserFlag, ddwMoney);
                        } else {
                            if (_0x5875d8['xjihK'](_0x5875d8['jnPUo'], _0x5875d8['jnPUo'])) {
                                $['log']('\n📌签到：你今日已签到过啦，请明天再来');
                            } else {
                                console['log']('此账号的用户名为中文,暂不能进行超级主力\n');
                            }
                        }
                    } catch (_0x470276) {
                        $['logErr'](_0x470276, _0x48ea7b);
                    } finally {
                        _0x5875d8['WBpow'](_0x208825);
                    }
                } else {
                    _0x5875d8['bQxXj'](_0x208825, JSON['parse'](_0x518cdf));
                }
            });
        }
    });
}
async function userSignReward(_0x565630, _0xd7b53c) {
    var _0x439a28 = {
        'AKLTG': function(_0x555690, _0x5342de) {
            return _0x555690 || _0x5342de;
        },
        'QBOYv': function(_0x5405a9) {
            return _0x5405a9();
        },
        'kedZR': function(_0x3b095c, _0x4d50a9, _0x3c805d) {
            return _0x3b095c(_0x4d50a9, _0x3c805d);
        }
    };
    return new Promise(async _0x40ded8 => {
        $['get'](_0x439a28['kedZR'](taskUrl, 'task/UserSignRewardV2', 'dwReqUserFlag=' + _0x565630 + '&ddwMoney=' + _0xd7b53c), async (_0x2220a5, _0x503f3d, _0x406ec5) => {
            try {
                const {
                    iRet,
                    sData: {
                        ddwMoney
                    },
                    sErrMsg
                } = JSON['parse'](_0x406ec5);
                $['log']('\n📌签到：' + sErrMsg + '，获得财富 ¥ ' + _0x439a28['AKLTG'](ddwMoney, 0x0) + '\x0a' + ($['showLog'] ? _0x406ec5 : ''));
            } catch (_0x177544) {
                $['logErr'](_0x177544, _0x503f3d);
            } finally {
                _0x439a28['QBOYv'](_0x40ded8);
            }
        });
    });
}

function getMoney() {
    var _0x5fd877 = {
        'zbPjf': function(_0x5be0f2) {
            return _0x5be0f2();
        },
        'crzOj': function(_0x55fc62) {
            return _0x55fc62();
        },
        'qqBuH': function(_0x38c3f8, _0x78f0c6) {
            return _0x38c3f8 || _0x78f0c6;
        },
        'qdFTt': function(_0x4f825b, _0x28b33a) {
            return _0x4f825b(_0x28b33a);
        },
        'EdhfH': function(_0x3bdcfd) {
            return _0x3bdcfd();
        },
        'hrpqX': '1001',
        'whZni': '1002',
        'fIDkV': '1003',
        'RxTWu': function(_0x279e34, _0x2b4152) {
            return _0x279e34 === _0x2b4152;
        },
        'ktDPo': 'JYjKj',
        'fFkJv': function(_0x5a2c14, _0x1c4f85) {
            return _0x5a2c14 === _0x1c4f85;
        },
        'svkjR': function(_0x27e8be, _0x3af375) {
            return _0x27e8be >= _0x3af375;
        },
        'ZVkfp': function(_0x2e7e49, _0x25686c) {
            return _0x2e7e49 >= _0x25686c;
        },
        'QPmWK': function(_0x53aef0, _0x3d9ae5) {
            return _0x53aef0 !== _0x3d9ae5;
        },
        'GiABh': 'kFhye',
        'TsCNz': function(_0x520c45, _0x144fa7, _0x269b4f) {
            return _0x520c45(_0x144fa7, _0x269b4f);
        },
        'mITlu': function(_0x4e6dac, _0xda06af) {
            return _0x4e6dac(_0xda06af);
        },
        'BbUzf': function(_0x2e2229, _0x33c313) {
            return _0x2e2229 + _0x33c313;
        },
        'Yrzex': function(_0x1ffb3a, _0x5dd33d) {
            return _0x1ffb3a + _0x5dd33d;
        },
        'yMYtf': function(_0x9ae24c, _0xb56c07) {
            return _0x9ae24c !== _0xb56c07;
        },
        'MqJCa': function(_0xed473e, _0x86a745) {
            return _0xed473e === _0x86a745;
        },
        'AfGmZ': 'gBMKk',
        'mzvhJ': function(_0x2a695e, _0x163f24) {
            return _0x2a695e !== _0x163f24;
        },
        'OujIb': 'UAiQq',
        'FLkAY': 'lPUFg',
        'astYY': function(_0x3a0c83, _0x4234d0, _0x51160a, _0x16d561) {
            return _0x3a0c83(_0x4234d0, _0x51160a, _0x16d561);
        },
        'gCCGb': 'kvJPF',
        'TsXjc': function(_0x5b4fb2, _0x19880f) {
            return _0x5b4fb2 !== _0x19880f;
        },
        'bBFmN': 'zzOYC',
        'DjzOj': function(_0x536fe5) {
            return _0x536fe5();
        }
    };
    return new Promise(async _0x4b7486 => {
        var _0x52df30 = {
            'DNroL': function(_0x22a666, _0x15cd31) {
                return _0x5fd877['qqBuH'](_0x22a666, _0x15cd31);
            },
            'GVSAd': function(_0x117546, _0x44d711) {
                return _0x5fd877['qdFTt'](_0x117546, _0x44d711);
            },
            'LpXsD': function(_0x442105) {
                return _0x5fd877['EdhfH'](_0x442105);
            }
        };
        let _0x30a87a = $['info']['SceneList'];
        let _0x47ee9d = [],
            _0x5884f3 = [_0x5fd877['hrpqX'], _0x5fd877['whZni'], _0x5fd877['fIDkV']];
        _0x47ee9d = Object['keys'](_0x30a87a);
        _0x47ee9d = _0x5884f3['filter'](_0x2c41e3 => _0x47ee9d['every'](_0x461ec4 => _0x2c41e3 !== _0x461ec4));
        console['log']('待开通场景ID列表sceneList;' + JSON['stringify'](_0x47ee9d));
        for (let _0x20486a of _0x47ee9d) {
            if (_0x5fd877['RxTWu'](_0x5fd877['ktDPo'], _0x5fd877['ktDPo'])) {
                if (_0x5fd877['fFkJv'](_0x20486a, _0x5fd877['whZni']) && _0x5fd877['svkjR']($['info']['dwLevel'], 0xb)) await _0x5fd877['qdFTt'](activeScene, _0x20486a);
                if (_0x5fd877['fFkJv'](_0x20486a, _0x5fd877['fIDkV']) && _0x5fd877['ZVkfp']($['info']['dwLevel'], 0x1a)) await _0x5fd877['qdFTt'](activeScene, _0x20486a);
            } else {
                $['logErr'](e, resp);
            }
        }
        for (var _0x49d302 of Object['keys']($['info']['SceneList'])) {
            try {
                if (_0x5fd877['QPmWK'](_0x5fd877['GiABh'], _0x5fd877['GiABh'])) {
                    Object['keys'](shareCodes)['forEach'](_0x1a78b5 => {
                        if (shareCodes[_0x1a78b5]) {
                            $['shareCodesArr']['push'](shareCodes[_0x1a78b5]);
                        }
                    });
                } else {
                    await $['wait'](0x1f4);
                    await _0x5fd877['TsCNz'](getMoney_dwSource_1, _0x49d302, _0x30a87a);
                    const _0x500bda = _0x5fd877['mITlu'](eval, _0x5fd877['BbUzf'](_0x5fd877['Yrzex']('(', JSON['stringify'](_0x30a87a[_0x49d302]['EmployeeList'])), ')'));
                    if (_0x5fd877['yMYtf'](_0x500bda, '')) {
                        if (_0x5fd877['MqJCa'](_0x5fd877['AfGmZ'], _0x5fd877['AfGmZ'])) {
                            for (var _0x4361cb of Object['keys'](_0x500bda)) {
                                if (_0x5fd877['mzvhJ'](_0x5fd877['OujIb'], _0x5fd877['FLkAY'])) {
                                    await $['wait'](0x1f4);
                                    await _0x5fd877['astYY'](getMoney_dwSource_2, _0x49d302, _0x30a87a, _0x4361cb);
                                } else {
                                    _0x5fd877['zbPjf'](_0x4b7486);
                                }
                            }
                        } else {
                            try {
                                const {
                                    iRet,
                                    dwExpericnce,
                                    sErrMsg
                                } = JSON['parse'](data);
                                $['log']('\x0a【' + place + '】🎁寻宝：' + sErrMsg + ' ，获取随机奖励：¥ ' + _0x52df30['DNroL'](dwExpericnce, 0x0) + ' \x0a' + ($['showLog'] ? data : ''));
                                _0x52df30['GVSAd'](_0x4b7486, iRet);
                            } catch (_0x4f4ea0) {
                                $['logErr'](_0x4f4ea0, resp);
                            } finally {
                                _0x52df30['LpXsD'](_0x4b7486);
                            }
                        }
                    }
                    await $['wait'](0x1f4);
                    if (token) await _0x5fd877['TsCNz'](getMoney_dwSource_3, _0x49d302, _0x30a87a);
                }
            } catch (_0x5e5046) {
                if (_0x5fd877['MqJCa'](_0x5fd877['gCCGb'], _0x5fd877['gCCGb'])) {
                    $['logErr'](_0x5e5046, resp);
                } else {
                    _0x5fd877['crzOj'](_0x4b7486);
                }
            } finally {
                if (_0x5fd877['TsXjc'](_0x5fd877['bBFmN'], _0x5fd877['bBFmN'])) {
                    if (data) {
                        console['log']('随机取0个码放到您固定的互助码后面(不影响已有固定互助)');
                        data = JSON['parse'](data);
                    }
                } else {
                    _0x5fd877['DjzOj'](_0x4b7486);
                }
            }
        }
    });
}

function getMoney_dwSource_1(_0x253e23, _0x3b48b3) {
    var _0x43b5ee = {
        'FrSmJ': function(_0x1e9374) {
            return _0x1e9374();
        },
        'Vqlpq': function(_0xd5a68b, _0x43edc8) {
            return _0xd5a68b !== _0x43edc8;
        },
        'ZOGfM': 'Fcndh',
        'hRwDd': function(_0x9101d2, _0x38676e) {
            return _0x9101d2 == _0x38676e;
        },
        'eIgyS': 'success',
        'DjzdW': function(_0x57322e, _0x4cda85) {
            return _0x57322e || _0x4cda85;
        },
        'SYUsq': function(_0x2657fb, _0x3f453e) {
            return _0x2657fb === _0x3f453e;
        },
        'OKHzI': 'aplPc',
        'eItFD': function(_0x1b5e9e, _0x5b707) {
            return _0x1b5e9e === _0x5b707;
        },
        'BXdqP': 'Lolsp',
        'QqoZp': '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie',
        'qTtGF': function(_0x337d44) {
            return _0x337d44();
        },
        'GDSGm': 'qFlXl',
        'cDuJh': function(_0x5a7c83, _0x3e2a59, _0x372c4b) {
            return _0x5a7c83(_0x3e2a59, _0x372c4b);
        }
    };
    return new Promise(async _0x474f2d => {
        var _0x44e927 = {
            'zljNe': _0x43b5ee['QqoZp'],
            'dbtjC': function(_0xb82de3) {
                return _0x43b5ee['qTtGF'](_0xb82de3);
            }
        };
        if (_0x43b5ee['eItFD'](_0x43b5ee['GDSGm'], _0x43b5ee['GDSGm'])) {
            $['get'](_0x43b5ee['cDuJh'](taskUrl, 'user/GetMoney', 'dwSceneId=' + _0x253e23 + '&strEmployeeId=undefined&dwSource=1'), async (_0x50b984, _0x121054, _0xcf0e5) => {
                var _0x16ce69 = {
                    'gWZjo': function(_0x36c15f) {
                        return _0x43b5ee['FrSmJ'](_0x36c15f);
                    }
                };
                if (_0x43b5ee['Vqlpq'](_0x43b5ee['ZOGfM'], _0x43b5ee['ZOGfM'])) {
                    _0x16ce69['gWZjo'](_0x474f2d);
                } else {
                    try {
                        const {
                            iRet,
                            dwMoney,
                            sErrMsg
                        } = JSON['parse'](_0xcf0e5);
                        $['log']('\x0a【' + _0x3b48b3[_0x253e23]['strSceneName'] + '】🏝岛主 : ' + (_0x43b5ee['hRwDd'](sErrMsg, _0x43b5ee['eIgyS']) ? '获取财富值：¥ ' + _0x43b5ee['DjzdW'](dwMoney, 0x0) : sErrMsg) + ' \x0a' + ($['showLog'] ? _0xcf0e5 : ''));
                    } catch (_0x4d55e7) {
                        if (_0x43b5ee['SYUsq'](_0x43b5ee['OKHzI'], _0x43b5ee['OKHzI'])) {
                            $['logErr'](_0x4d55e7, _0x121054);
                        } else {
                            try {
                                return JSON['parse'](str);
                            } catch (_0x33ec1b) {
                                console['log'](_0x33ec1b);
                                $['msg']($['name'], '', _0x44e927['zljNe']);
                                return [];
                            }
                        }
                    } finally {
                        if (_0x43b5ee['eItFD'](_0x43b5ee['BXdqP'], _0x43b5ee['BXdqP'])) {
                            _0x43b5ee['FrSmJ'](_0x474f2d);
                        } else {
                            $['logErr'](e, _0x121054);
                        }
                    }
                }
            });
        } else {
            _0x44e927['dbtjC'](_0x474f2d);
        }
    });
}

function getMoney_dwSource_2(_0x263d8f, _0x505b02, _0x201b0b) {
    var _0x26b6e2 = {
        'lzZtV': function(_0xe63fd1, _0x22246d) {
            return _0xe63fd1(_0x22246d);
        },
        'MDXZf': function(_0x419c52, _0x690516) {
            return _0x419c52 === _0x690516;
        },
        'pzSeB': 'hloHF',
        'BjvPi': 'ijsug',
        'mldUQ': function(_0x261124, _0x5d5773) {
            return _0x261124 == _0x5d5773;
        },
        'gnlNi': 'success',
        'kedCr': function(_0x5aa7bc, _0x1847c7) {
            return _0x5aa7bc || _0x1847c7;
        },
        'ckFaZ': function(_0x304533) {
            return _0x304533();
        },
        'BohOZ': function(_0x42cd9b, _0x4db5be, _0xc2cfc) {
            return _0x42cd9b(_0x4db5be, _0xc2cfc);
        }
    };
    return new Promise(async _0x3f75b0 => {
        $['get'](_0x26b6e2['BohOZ'](taskUrl, 'user/GetMoney', 'dwSceneId=' + _0x263d8f + '&strEmployeeId=' + _0x201b0b + '&dwSource=2'), async (_0xd8b690, _0x5b9de5, _0x111575) => {
            var _0x1a465d = {
                'AHdZt': function(_0x58a06d, _0x199c48) {
                    return _0x26b6e2['lzZtV'](_0x58a06d, _0x199c48);
                }
            };
            if (_0x26b6e2['MDXZf'](_0x26b6e2['pzSeB'], _0x26b6e2['BjvPi'])) {
                console['log']('此账号cookie填写不规范,你的pt_pin=xxx后面没分号(;)\n');
                _0x1a465d['AHdZt'](_0x3f75b0, null);
            } else {
                try {
                    const {
                        dwMoney,
                        iRet,
                        sErrMsg,
                        strPin
                    } = JSON['parse'](_0x111575);
                    $['log']('\x0a【' + _0x505b02[_0x263d8f]['strSceneName'] + '】👬好友: ' + (_0x26b6e2['mldUQ'](sErrMsg, _0x26b6e2['gnlNi']) ? '获取普通助力财富值：¥ ' + _0x26b6e2['kedCr'](dwMoney, 0x0) : sErrMsg) + ' \x0a' + ($['showLog'] ? _0x111575 : ''));
                } catch (_0x1385be) {
                    $['logErr'](_0x1385be, _0x5b9de5);
                } finally {
                    _0x26b6e2['ckFaZ'](_0x3f75b0);
                }
            }
        });
    });
}

function getMoney_dwSource_3(_0x449c2a, _0x33b2de) {
    var _0x3f38d1 = {
        'LKvAU': function(_0x5ab216, _0x13eaf6) {
            return _0x5ab216 !== _0x13eaf6;
        },
        'PcTCT': 'WjRYe',
        'uqZFF': function(_0x2e59dd, _0x16cb63) {
            return _0x2e59dd == _0x16cb63;
        },
        'GbRqm': 'success',
        'ArbaR': function(_0x131e3a, _0x4964ce) {
            return _0x131e3a || _0x4964ce;
        },
        'jsBZY': function(_0x491320, _0x4323d5) {
            return _0x491320 === _0x4323d5;
        },
        'mtEVH': 'sEzcn',
        'Hhulx': 'tsbYt',
        'XdXUF': function(_0x2b90b3) {
            return _0x2b90b3();
        },
        'OzuKF': function(_0x2b3c11, _0x18a0cb) {
            return _0x2b3c11 != _0x18a0cb;
        },
        'RofYZ': '未中奖',
        'gPfDv': function(_0x42daca, _0x459aae) {
            return _0x42daca == _0x459aae;
        },
        'mbTAo': function(_0x257deb) {
            return _0x257deb();
        },
        'RZzQq': function(_0x2c00f7, _0x27d591) {
            return _0x2c00f7 || _0x27d591;
        },
        'Ornhs': 'kibds',
        'UQjnf': 'XOCNX',
        'DoiUY': function(_0x3ec353, _0x387b89, _0xe05f5e) {
            return _0x3ec353(_0x387b89, _0xe05f5e);
        },
        'KMsCq': 'timestamp',
        'Kbuex': 'phoneid',
        'qQTGE': 'farm_jstoken'
    };
    return new Promise(async _0x1e3c60 => {
        var _0x10354e = {
            'ylKWn': function(_0x2c1bf3, _0x689df3) {
                return _0x3f38d1['gPfDv'](_0x2c1bf3, _0x689df3);
            },
            'KOJFc': _0x3f38d1['GbRqm'],
            'qnZoT': function(_0x5ff102) {
                return _0x3f38d1['mbTAo'](_0x5ff102);
            },
            'REDrx': function(_0x354e85, _0x51f481) {
                return _0x3f38d1['RZzQq'](_0x354e85, _0x51f481);
            }
        };
        if (_0x3f38d1['LKvAU'](_0x3f38d1['Ornhs'], _0x3f38d1['UQjnf'])) {
            $['get'](_0x3f38d1['DoiUY'](taskUrl, 'user/GetMoney', 'dwSceneId=' + _0x449c2a + '&strEmployeeId=&dwSource=3&strPgtimestamp=' + token[_0x3f38d1['KMsCq']] + '&strPhoneID=' + token[_0x3f38d1['Kbuex']] + '&strPgUUNum=' + token[_0x3f38d1['qQTGE']]), async (_0x5c8c8c, _0x55db2c, _0x4209cd) => {
                try {
                    if (_0x3f38d1['LKvAU'](_0x3f38d1['PcTCT'], _0x3f38d1['PcTCT'])) {
                        try {
                            const {
                                dwMoney,
                                iRet,
                                sErrMsg
                            } = JSON['parse'](_0x4209cd);
                            $['log']('\n【🏝寻宝大作战】【' + strBrandName + '】开宝箱：' + (_0x10354e['ylKWn'](sErrMsg, _0x10354e['KOJFc']) ? ' 获得财富值 ¥ ' + dwMoney : sErrMsg) + '\x0a' + ($['showLog'] ? _0x4209cd : ''));
                        } catch (_0x58dbd6) {
                            $['logErr'](_0x58dbd6, _0x55db2c);
                        } finally {
                            _0x10354e['qnZoT'](_0x1e3c60);
                        }
                    } else {
                        const {
                            iRet,
                            dwMoney,
                            sErrMsg,
                            strPin
                        } = JSON['parse'](_0x4209cd);
                        $['log']('\x0a【' + _0x33b2de[_0x449c2a]['strSceneName'] + '】👬好友: ' + (_0x3f38d1['uqZFF'](sErrMsg, _0x3f38d1['GbRqm']) ? '获取超级助力财富值：¥ ' + _0x3f38d1['ArbaR'](dwMoney, 0x0) : sErrMsg) + ' \x0a' + ($['showLog'] ? _0x4209cd : ''));
                    }
                } catch (_0x4921cf) {
                    $['logErr'](_0x4921cf, _0x55db2c);
                } finally {
                    if (_0x3f38d1['jsBZY'](_0x3f38d1['mtEVH'], _0x3f38d1['Hhulx'])) {
                        try {
                            const {
                                iRet,
                                sData: {
                                    ddwMoney
                                },
                                sErrMsg
                            } = JSON['parse'](_0x4209cd);
                            $['log']('\n📌签到：' + sErrMsg + '，获得财富 ¥ ' + _0x10354e['REDrx'](ddwMoney, 0x0) + '\x0a' + ($['showLog'] ? _0x4209cd : ''));
                        } catch (_0x280b17) {
                            $['logErr'](_0x280b17, _0x55db2c);
                        } finally {
                            _0x10354e['qnZoT'](_0x1e3c60);
                        }
                    } else {
                        _0x3f38d1['XdXUF'](_0x1e3c60);
                    }
                }
            });
        } else {
            const {
                iRet,
                sErrMsg,
                strAwardPoolName
            } = JSON['parse'](data);
            $['log']('\n【抽奖结果】🎰 ' + (_0x3f38d1['OzuKF'](strAwardPoolName, '') ? _0x3f38d1['RofYZ'] : strAwardPoolName) + ' \x0a' + ($['showLog'] ? data : ''));
        }
    });
}

function friendCircle() {
    var _0x2d218a = {
        'AxuDo': function(_0xebb7e9, _0x276050) {
            return _0xebb7e9 - _0x276050;
        },
        'FizIV': function(_0x38f577) {
            return _0x38f577();
        },
        'csTMQ': function(_0x188fa3, _0x3832e4) {
            return _0x188fa3 !== _0x3832e4;
        },
        'uSONA': function(_0x2d4bc4, _0x10f9e6) {
            return _0x2d4bc4 > _0x10f9e6;
        },
        'fPOhv': function(_0x3502f5, _0x39f895) {
            return _0x3502f5 === _0x39f895;
        },
        'rFPgK': 'QHmpf',
        'WqFfP': 'devml',
        'ABDdc': function(_0x9a5fa8, _0x48e206) {
            return _0x9a5fa8(_0x48e206);
        },
        'FpGki': 'TAyOZ',
        'YVQRg': 'VXGPf',
        'aJZqw': function(_0x3fe176, _0x3ab392, _0x510945) {
            return _0x3fe176(_0x3ab392, _0x510945);
        }
    };
    return new Promise(async _0x1f9e7f => {
        if (_0x2d218a['fPOhv'](_0x2d218a['FpGki'], _0x2d218a['YVQRg'])) {
            $['newShareCodes'] = $['shareCodesArr'][_0x2d218a['AxuDo']($['index'], 0x1)]['split']('@');
        } else {
            $['get'](_0x2d218a['aJZqw'](taskUrl, 'user/FriendCircle', 'dwPageIndex=1&dwPageSize=20'), async (_0x40332e, _0x4e561e, _0x19e2c1) => {
                var _0x5d3424 = {
                    'QICar': function(_0x56c08a) {
                        return _0x2d218a['FizIV'](_0x56c08a);
                    }
                };
                try {
                    const {
                        MomentList = [], iRet, sErrMsg, strShareId
                    } = JSON['parse'](_0x19e2c1);
                    for (moment of MomentList) {
                        if (_0x2d218a['csTMQ'](moment['strShareId'], strShareId) && _0x2d218a['uSONA'](moment['dwAccessMoney'], 0x0)) {
                            if (_0x2d218a['fPOhv'](_0x2d218a['rFPgK'], _0x2d218a['WqFfP'])) {
                                _0x5d3424['QICar'](_0x1f9e7f);
                            } else {
                                await _0x2d218a['ABDdc'](queryFriendIsland, moment['strShareId']);
                                await $['wait'](0x1f4);
                            }
                        }
                    }
                } catch (_0x2ed5e6) {
                    $['logErr'](_0x2ed5e6, _0x4e561e);
                } finally {
                    _0x2d218a['FizIV'](_0x1f9e7f);
                }
            });
        }
    });
}

function queryFriendIsland(_0x2fda0c) {
    var _0x15d482 = {
        'BavcN': function(_0x1d667a, _0x363954) {
            return _0x1d667a === _0x363954;
        },
        'cZDIS': 'success',
        'tnbYY': function(_0x24edc7, _0x28f85d) {
            return _0x24edc7 !== _0x28f85d;
        },
        'jmcgR': 'ostPH',
        'gAiSN': function(_0x3675cc, _0x379555) {
            return _0x3675cc(_0x379555);
        },
        'ckfSK': function(_0x1dc7db, _0x3a8296) {
            return _0x1dc7db + _0x3a8296;
        },
        'aFSWr': function(_0x46c075, _0x599324) {
            return _0x46c075 + _0x599324;
        },
        'pTRnt': function(_0x2b67b6, _0x401f92, _0x6e9147, _0x56721c, _0x5a3069) {
            return _0x2b67b6(_0x401f92, _0x6e9147, _0x56721c, _0x5a3069);
        },
        'PyEqh': 'uOeCX',
        'sXQjX': 'dzSEV',
        'ydeLx': function(_0x1ea5bb) {
            return _0x1ea5bb();
        },
        'IceTJ': function(_0x502697) {
            return _0x502697();
        },
        'dELzM': function(_0x28bfe8, _0x205093) {
            return _0x28bfe8 == _0x205093;
        },
        'QwDeD': function(_0x3560ee, _0x127080) {
            return _0x3560ee || _0x127080;
        },
        'UgYvH': 'vDDSp',
        'GGVMf': function(_0xa542f7, _0x28846a, _0x478f6b) {
            return _0xa542f7(_0x28846a, _0x478f6b);
        }
    };
    return new Promise(async _0x146c72 => {
        var _0x4afba9 = {
            'pmcTQ': function(_0x4c6f42) {
                return _0x15d482['IceTJ'](_0x4c6f42);
            },
            'bKbTp': function(_0x411113, _0x243c8b) {
                return _0x15d482['dELzM'](_0x411113, _0x243c8b);
            },
            'RVPaM': _0x15d482['cZDIS'],
            'edKzI': function(_0x454c1a, _0x41a573) {
                return _0x15d482['QwDeD'](_0x454c1a, _0x41a573);
            },
            'RylVr': function(_0x1e1b34) {
                return _0x15d482['IceTJ'](_0x1e1b34);
            }
        };
        if (_0x15d482['tnbYY'](_0x15d482['UgYvH'], _0x15d482['UgYvH'])) {
            _0x4afba9['pmcTQ'](_0x146c72);
        } else {
            $['get'](_0x15d482['GGVMf'](taskUrl, 'user/QueryFriendIsland', 'strShareId=' + _0x2fda0c + '&sceneval=2'), async (_0x26b370, _0x3bc887, _0x207095) => {
                try {
                    const {
                        SceneList = {}, dwStealMoney, sErrMsg, strFriendNick
                    } = JSON['parse'](_0x207095);
                    if (_0x15d482['BavcN'](sErrMsg, _0x15d482['cZDIS'])) {
                        if (_0x15d482['tnbYY'](_0x15d482['jmcgR'], _0x15d482['jmcgR'])) {
                            $['logErr'](e, _0x3bc887);
                        } else {
                            const _0x273033 = _0x15d482['gAiSN'](eval, _0x15d482['ckfSK'](_0x15d482['aFSWr']('(', JSON['stringify'](SceneList)), ')'));
                            const _0x5aa623 = Object['keys'](SceneList);
                            for (sceneId of _0x5aa623) {
                                await _0x15d482['pTRnt'](stealMoney, _0x2fda0c, sceneId, strFriendNick, _0x273033[sceneId]['strSceneName']);
                                await $['wait'](0x1f4);
                            }
                        }
                    }
                } catch (_0x15f9be) {
                    $['logErr'](_0x15f9be, _0x3bc887);
                } finally {
                    if (_0x15d482['tnbYY'](_0x15d482['PyEqh'], _0x15d482['sXQjX'])) {
                        _0x15d482['ydeLx'](_0x146c72);
                    } else {
                        try {
                            const {
                                iRet,
                                dwMoney,
                                sErrMsg,
                                strPin
                            } = JSON['parse'](_0x207095);
                            $['log']('\x0a【' + sceneList[_key]['strSceneName'] + '】👬好友: ' + (_0x4afba9['bKbTp'](sErrMsg, _0x4afba9['RVPaM']) ? '获取超级助力财富值：¥ ' + _0x4afba9['edKzI'](dwMoney, 0x0) : sErrMsg) + ' \x0a' + ($['showLog'] ? _0x207095 : ''));
                        } catch (_0x8644a4) {
                            $['logErr'](_0x8644a4, _0x3bc887);
                        } finally {
                            _0x4afba9['RylVr'](_0x146c72);
                        }
                    }
                }
            });
        }
    });
}

function stealMoney(_0x4d1b1c, _0x459f1f, _0x2fab7d, _0x69de80) {
    var _0x283ed6 = {
        'XjRlh': function(_0xf87ab6) {
            return _0xf87ab6();
        },
        'iHSuW': function(_0x8c244c, _0x36a407) {
            return _0x8c244c !== _0x36a407;
        },
        'cMzrT': 'AtYkM',
        'ifqYb': function(_0x34924e) {
            return _0x34924e();
        },
        'gIxWe': function(_0x53e5dd, _0x5ef069, _0x193b12) {
            return _0x53e5dd(_0x5ef069, _0x193b12);
        }
    };
    return new Promise(async _0x3af89e => {
        var _0x5c5d93 = {
            'AgwYF': function(_0x1a8887) {
                return _0x283ed6['XjRlh'](_0x1a8887);
            },
            'gTshu': function(_0x5bf902, _0x56dea4) {
                return _0x283ed6['iHSuW'](_0x5bf902, _0x56dea4);
            },
            'rKaLW': _0x283ed6['cMzrT'],
            'CUoGF': function(_0x382827) {
                return _0x283ed6['ifqYb'](_0x382827);
            }
        };
        $['get'](_0x283ed6['gIxWe'](taskUrl, 'user/StealMoney', 'strFriendId=' + _0x4d1b1c + '&dwSceneId=' + _0x459f1f + '&sceneval=2'), async (_0x1b385c, _0x4a9669, _0x2fd7ab) => {
            var _0x5a5422 = {
                'fJadW': function(_0x58e663) {
                    return _0x5c5d93['AgwYF'](_0x58e663);
                }
            };
            try {
                const {
                    dwGetMoney,
                    iRet,
                    sErrMsg
                } = JSON['parse'](_0x2fd7ab);
                $['log']('\n🤏偷取好友【' + _0x2fab7d + '】【' + _0x69de80 + '】财富值：¥ ' + (dwGetMoney ? dwGetMoney : sErrMsg) + '\x0a' + ($['showLog'] ? _0x2fd7ab : ''));
            } catch (_0x728363) {
                if (_0x5c5d93['gTshu'](_0x5c5d93['rKaLW'], _0x5c5d93['rKaLW'])) {
                    _0x5a5422['fJadW'](_0x3af89e);
                } else {
                    $['logErr'](_0x728363, _0x4a9669);
                }
            } finally {
                _0x5c5d93['CUoGF'](_0x3af89e);
            }
        });
    });
}
async function treasureHunt() {
    var _0x2b8e43 = {
        'ZKflC': function(_0x26f36e, _0xdc2020) {
            return _0x26f36e > _0xdc2020;
        },
        'PGNCP': function(_0xe29b7, _0x47da96) {
            return _0xe29b7 < _0x47da96;
        },
        'odsng': function(_0x2e82b5, _0x32ec4a) {
            return _0x2e82b5 / _0x32ec4a;
        },
        'VFvYm': function(_0x369f03, _0x20efdb) {
            return _0x369f03 > _0x20efdb;
        },
        'aivwr': function(_0xfe7f75, _0x547c3f) {
            return _0xfe7f75 !== _0x547c3f;
        },
        'NAAsC': 'wZAsE',
        'iXhBT': 'DnFHR',
        'DTEIj': function(_0x2eff7e, _0x3e3af5) {
            return _0x2eff7e(_0x3e3af5);
        },
        'QzLwX': function(_0x3ea2ae, _0x57f07f) {
            return _0x3ea2ae === _0x57f07f;
        },
        'oiqbq': 'BUGwy'
    };
    if (_0x2b8e43['ZKflC']($['info']['dwXBRemainCnt'], 0x0)) {
        const _0x5b9104 = $['info']['XBDetail'];
        for (let _0x1d9888 = 0x0; _0x2b8e43['PGNCP'](_0x1d9888, _0x5b9104['length']); _0x1d9888++) {
            const {
                ddwColdEndTm,
                strIndex
            } = _0x5b9104[_0x1d9888];
            const _0x6512c8 = Math['round'](_0x2b8e43['odsng'](new Date(), 0x3e8));
            if (_0x2b8e43['VFvYm'](_0x6512c8, ddwColdEndTm)) {
                if (_0x2b8e43['aivwr'](_0x2b8e43['NAAsC'], _0x2b8e43['iXhBT'])) {
                    await _0x2b8e43['DTEIj'](doTreasureHunt, strIndex);
                    await $['wait'](0xbb8);
                } else {
                    console['log']('随机取0个码放到您固定的互助码后面(不影响已有固定互助)');
                    data = JSON['parse'](data);
                }
            } else {
                if (_0x2b8e43['QzLwX'](_0x2b8e43['oiqbq'], _0x2b8e43['oiqbq'])) {
                    $['log']('\n🎁寻宝：宝藏冷却中，请等待冷却完毕');
                } else {
                    $['log']('\n【🏝寻宝大作战】【' + strBrandName + '】开宝箱：宝箱已开启过！');
                }
            }
        }
    } else {
        $['log']('\n🎁寻宝：寻宝次数不足');
    }
}

function doTreasureHunt(_0x3cb10b) {
    var _0x530100 = {
        'FbZoR': function(_0x253122, _0x515614) {
            return _0x253122 === _0x515614;
        },
        'wmchY': 'wfQWR',
        'noRuS': function(_0xd6b7d3, _0x557906) {
            return _0xd6b7d3 || _0x557906;
        },
        'atbXF': function(_0x43a9ab, _0x46c6b7) {
            return _0x43a9ab(_0x46c6b7);
        },
        'QWqSA': 'TUWXe',
        'mBBBQ': 'aXMfF',
        'DcKdw': function(_0x4d5857) {
            return _0x4d5857();
        },
        'QJBQd': function(_0x47025d, _0xce2dbd, _0x507631) {
            return _0x47025d(_0xce2dbd, _0x507631);
        }
    };
    return new Promise(async _0x2e2bde => {
        $['get'](_0x530100['QJBQd'](taskUrl, 'consume/TreasureHunt', 'strIndex=' + _0x3cb10b + '&dwIsShare=0'), async (_0x3a99ae, _0x14c1cb, _0x180959) => {
            if (_0x530100['FbZoR'](_0x530100['wmchY'], _0x530100['wmchY'])) {
                try {
                    const {
                        iRet,
                        dwExpericnce,
                        sErrMsg
                    } = JSON['parse'](_0x180959);
                    $['log']('\x0a【' + _0x3cb10b + '】🎁寻宝：' + sErrMsg + ' ，获取随机奖励：¥ ' + _0x530100['noRuS'](dwExpericnce, 0x0) + ' \x0a' + ($['showLog'] ? _0x180959 : ''));
                    _0x530100['atbXF'](_0x2e2bde, iRet);
                } catch (_0x1e6ba4) {
                    if (_0x530100['FbZoR'](_0x530100['QWqSA'], _0x530100['mBBBQ'])) {
                        $['logErr'](_0x1e6ba4);
                    } else {
                        $['logErr'](_0x1e6ba4, _0x14c1cb);
                    }
                } finally {
                    _0x530100['DcKdw'](_0x2e2bde);
                }
            } else {
                cookiesArr['push'](jdCookieNode[item]);
            }
        });
    });
}

function getTaskList(_0x913fe0) {
    var _0x2b5f17 = {
        'fhEqG': function(_0x4c2488, _0x6ec3a0) {
            return _0x4c2488 !== _0x6ec3a0;
        },
        'ctNOp': 'IYYTo',
        'GlaQg': function(_0x48835e, _0x5366c0) {
            return _0x48835e === _0x5366c0;
        },
        'GWQHm': 'hYlWJ',
        'pqaak': function(_0x4b3b6c) {
            return _0x4b3b6c();
        },
        'kLuHj': function(_0x2d98c3, _0x27e0fa) {
            return _0x2d98c3 !== _0x27e0fa;
        },
        'iYuPm': 'VoDIS',
        'eplcR': function(_0x127a16) {
            return _0x127a16();
        },
        'xtLlp': function(_0x2ac571, _0x279343) {
            return _0x2ac571 == _0x279343;
        },
        'xOOou': 'success',
        'KKqnS': function(_0x54cf54, _0x309d46) {
            return _0x54cf54 || _0x309d46;
        },
        'BcUMB': function(_0x2481f8, _0x54a3ad) {
            return _0x2481f8(_0x54a3ad);
        },
        'PfhGA': 'GetUserTaskStatusList',
        'NUlFL': 'consume/AchieveInfo'
    };
    return new Promise(async _0x5cf132 => {
        var _0x33da3f = {
            'fpKqF': function(_0x574419, _0x3a48a4) {
                return _0x2b5f17['kLuHj'](_0x574419, _0x3a48a4);
            },
            'SjluE': _0x2b5f17['iYuPm'],
            'PcuCi': function(_0x2fed4c) {
                return _0x2b5f17['eplcR'](_0x2fed4c);
            },
            'RuHoT': function(_0xbb4a51, _0x30f415) {
                return _0x2b5f17['xtLlp'](_0xbb4a51, _0x30f415);
            },
            'XEprs': _0x2b5f17['xOOou'],
            'mkkls': function(_0x3f79f4, _0xd1b46) {
                return _0x2b5f17['KKqnS'](_0x3f79f4, _0xd1b46);
            }
        };
        switch (_0x913fe0) {
            case 0x0:
                $['get'](_0x2b5f17['BcUMB'](taskListUrl, _0x2b5f17['PfhGA']), async (_0x566441, _0x151d02, _0x5e141d) => {
                    if (_0x33da3f['fpKqF'](_0x33da3f['SjluE'], _0x33da3f['SjluE'])) {
                        shareCodes = process['env']['JDCFD_SHARECODES']['split']('&');
                    } else {
                        try {
                            const {
                                ret,
                                data: {
                                    userTaskStatusList = []
                                } = {},
                                msg
                            } = JSON['parse'](_0x5e141d);
                            $['allTask'] = userTaskStatusList['filter'](_0x305682 => _0x305682['awardStatus'] !== 0x1);
                            $['log']('\n获取【📆日常任务】列表 ' + msg + '，总共' + $['allTask']['length'] + '个任务！\n' + ($['showLog'] ? _0x5e141d : ''));
                        } catch (_0x29dd0b) {
                            $['logErr'](_0x29dd0b, _0x151d02);
                        } finally {
                            _0x33da3f['PcuCi'](_0x5cf132);
                        }
                    }
                });
                break;
            case 0x1:
                $['get'](_0x2b5f17['BcUMB'](taskUrl, _0x2b5f17['NUlFL']), async (_0x2475ac, _0x1e4690, _0x4878e1) => {
                    if (_0x2b5f17['fhEqG'](_0x2b5f17['ctNOp'], _0x2b5f17['ctNOp'])) {
                        const {
                            dwGetMoney,
                            iRet,
                            sErrMsg
                        } = JSON['parse'](_0x4878e1);
                        $['log']('\n🤏偷取好友【' + strFriendNick + '】【' + strSceneName + '】财富值：¥ ' + (dwGetMoney ? dwGetMoney : sErrMsg) + '\x0a' + ($['showLog'] ? _0x4878e1 : ''));
                    } else {
                        try {
                            if (_0x2b5f17['GlaQg'](_0x2b5f17['GWQHm'], _0x2b5f17['GWQHm'])) {
                                const {
                                    iRet,
                                    sErrMsg,
                                    taskinfo = []
                                } = JSON['parse'](_0x4878e1);
                                $['allTask'] = taskinfo['filter'](_0x3168b5 => _0x3168b5['dwAwardStatus'] === 0x1);
                                $['log']('\n获取【🎖成就任务】列表 ' + sErrMsg + '，总共' + $['allTask']['length'] + '个任务！\n' + ($['showLog'] ? _0x4878e1 : ''));
                            } else {
                                const {
                                    iRet,
                                    dwMoney,
                                    sErrMsg,
                                    strPin
                                } = JSON['parse'](_0x4878e1);
                                $['log']('\x0a【' + sceneList[_key]['strSceneName'] + '】👬好友: ' + (_0x33da3f['RuHoT'](sErrMsg, _0x33da3f['XEprs']) ? '获取超级助力财富值：¥ ' + _0x33da3f['mkkls'](dwMoney, 0x0) : sErrMsg) + ' \x0a' + ($['showLog'] ? _0x4878e1 : ''));
                            }
                        } catch (_0xbf1cc4) {
                            $['logErr'](_0xbf1cc4, _0x1e4690);
                        } finally {
                            _0x2b5f17['pqaak'](_0x5cf132);
                        }
                    }
                });
                break;
            default:
                break;
        }
    });
}

function browserTask(_0x46c3a4) {
    var _0x18a840 = {
        'uZRfN': function(_0x3bb54f, _0x3fcd83) {
            return _0x3bb54f(_0x3fcd83);
        },
        'ehZPw': function(_0x13e2da, _0x4270ce) {
            return _0x13e2da == _0x4270ce;
        },
        'OlMaD': 'string',
        'rgcQX': '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie',
        'icwxg': function(_0x1d3e2e, _0x3b3c78) {
            return _0x1d3e2e < _0x3b3c78;
        },
        'vtoSr': function(_0x41cd8e, _0x357651) {
            return _0x41cd8e + _0x357651;
        },
        'meqxr': function(_0x5b051b, _0x50969) {
            return _0x5b051b < _0x50969;
        },
        'cbLtV': function(_0x54e6eb, _0x2dcef6, _0x4e576d) {
            return _0x54e6eb(_0x2dcef6, _0x4e576d);
        },
        'ZyJJd': function(_0x14c5b1, _0x52954e) {
            return _0x14c5b1 === _0x52954e;
        },
        'iqpcg': 'qhtsU',
        'oANdH': function(_0x3c471a, _0x32e058) {
            return _0x3c471a < _0x32e058;
        },
        'KqmSG': function(_0x115859, _0xdca1f6) {
            return _0x115859 !== _0xdca1f6;
        },
        'fBzaX': 'BFFxL',
        'qdZQI': 'hClIz',
        'yKaJP': 'CrabF',
        'XKpvY': function(_0x4d8dc4, _0x5729c6) {
            return _0x4d8dc4 + _0x5729c6;
        },
        'dqjxu': function(_0x3345cb) {
            return _0x3345cb();
        }
    };
    return new Promise(async _0x5dbc61 => {
        var _0x296ffe = {
            'fRWsB': function(_0x254066, _0x340a84) {
                return _0x18a840['ehZPw'](_0x254066, _0x340a84);
            },
            'bbIAC': _0x18a840['OlMaD'],
            'vHqXC': _0x18a840['rgcQX']
        };
        switch (_0x46c3a4) {
            case 0x0:
                const _0x506433 = Math['max'](...[...$['allTask']]['map'](_0x56cada => _0x56cada['configTargetTimes']));
                for (let _0x4c36d9 = 0x0; _0x18a840['icwxg'](_0x4c36d9, $['allTask']['length']); _0x4c36d9++) {
                    const _0x53b95e = $['allTask'][_0x4c36d9];
                    $['log']('\n开始第' + _0x18a840['vtoSr'](_0x4c36d9, 0x1) + '个【📆日常任务】：' + _0x53b95e['taskName']);
                    const _0x3b8bbe = [!![], !![]];
                    for (let _0x4c36d9 = 0x0; _0x18a840['meqxr'](_0x4c36d9, _0x506433); _0x4c36d9++) {
                        await $['wait'](0x1f4);
                        if (_0x3b8bbe[0x0]) {
                            _0x3b8bbe[0x0] = await _0x18a840['uZRfN'](doTask, _0x53b95e);
                        }
                        await $['wait'](0x1f4);
                        if (_0x3b8bbe[0x1]) {
                            _0x3b8bbe[0x1] = await _0x18a840['cbLtV'](awardTask, 0x0, _0x53b95e);
                        }
                        if (!_0x3b8bbe[0x0] && !_0x3b8bbe[0x1]) {
                            if (_0x18a840['ZyJJd'](_0x18a840['iqpcg'], _0x18a840['iqpcg'])) {
                                break;
                            } else {
                                _0x18a840['uZRfN'](_0x5dbc61, ![]);
                                $['log']('\x0a' + taskName + '【做日常任务】： mission success');
                                return;
                            }
                        }
                    }
                    $['log']('\n结束第' + _0x18a840['vtoSr'](_0x4c36d9, 0x1) + '个【📆日常任务】：' + _0x53b95e['taskName'] + '\x0a');
                }
                break;
            case 0x1:
                for (let _0x1c42ee = 0x0; _0x18a840['oANdH'](_0x1c42ee, $['allTask']['length']); _0x1c42ee++) {
                    if (_0x18a840['KqmSG'](_0x18a840['fBzaX'], _0x18a840['fBzaX'])) {
                        $['logErr'](e, resp);
                    } else {
                        const _0x53b95e = $['allTask'][_0x1c42ee];
                        $['log']('\n开始第' + _0x18a840['vtoSr'](_0x1c42ee, 0x1) + '个【🎖成就任务】：' + _0x53b95e['strTaskDescr']);
                        if (_0x18a840['ZyJJd'](_0x53b95e['dwAwardStatus'], '0')) {
                            if (_0x18a840['ZyJJd'](_0x18a840['qdZQI'], _0x18a840['yKaJP'])) {
                                if (_0x296ffe['fRWsB'](typeof str, _0x296ffe['bbIAC'])) {
                                    try {
                                        return JSON['parse'](str);
                                    } catch (_0x1f638a) {
                                        console['log'](_0x1f638a);
                                        $['msg']($['name'], '', _0x296ffe['vHqXC']);
                                        return [];
                                    }
                                }
                            } else {
                                $['log']('\x0a' + _0x53b95e['strTaskDescr'] + '【领成就奖励】：该成就任务未达到门槛}');
                            }
                        } else {
                            await $['wait'](0x1f4);
                            await _0x18a840['cbLtV'](awardTask, 0x1, _0x53b95e);
                        }
                        $['log']('\n结束第' + _0x18a840['XKpvY'](_0x1c42ee, 0x1) + '个【🎖成就任务】：' + _0x53b95e['strTaskDescr'] + '\x0a');
                    }
                }
                break;
            default:
                break;
        }
        _0x18a840['dqjxu'](_0x5dbc61);
    });
}

function doTask(_0x161b09) {
    var _0xf182b9 = {
        'tYBwC': function(_0x4d3427, _0x523bc4) {
            return _0x4d3427 !== _0x523bc4;
        },
        'cNGdQ': '活动太火爆了',
        'KIaNu': '任务进行中或者未到任务时间',
        'RTnWP': function(_0x590076, _0x2f7c11) {
            return _0x590076(_0x2f7c11);
        },
        'FZCSh': function(_0x5eb4d2, _0x1f80f6) {
            return _0x5eb4d2 === _0x1f80f6;
        },
        'JCsGP': function(_0x4d2447) {
            return _0x4d2447();
        },
        'OEjNX': function(_0x5dc04a, _0x40dd81) {
            return _0x5dc04a !== _0x40dd81;
        },
        'HCrNI': 'bPRlP',
        'qbCQt': 'bqyJI',
        'FvZXx': function(_0x2cf1eb, _0x5baf98) {
            return _0x2cf1eb !== _0x5baf98;
        },
        'apcpM': 'PcHsV',
        'tYtEx': function(_0x57dead, _0x5dddf0) {
            return _0x57dead >= _0x5dddf0;
        },
        'wVuVB': function(_0x19032d, _0x4b16db, _0x35702c) {
            return _0x19032d(_0x4b16db, _0x35702c);
        }
    };
    return new Promise(async _0x58b4af => {
        const {
            taskId,
            completedTimes,
            configTargetTimes,
            taskName
        } = _0x161b09;
        if (_0xf182b9['tYtEx'](_0xf182b9['RTnWP'](parseInt, completedTimes), _0xf182b9['RTnWP'](parseInt, configTargetTimes))) {
            _0xf182b9['RTnWP'](_0x58b4af, ![]);
            $['log']('\x0a' + taskName + '【做日常任务】： mission success');
            return;
        }
        $['get'](_0xf182b9['wVuVB'](taskListUrl, 'DoTask', 'taskId=' + taskId), (_0x5c07eb, _0x2145e0, _0x31c5eb) => {
            var _0x595ae5 = {
                'rvPOZ': function(_0x5764be, _0x378271) {
                    return _0xf182b9['tYBwC'](_0x5764be, _0x378271);
                },
                'CTDbj': _0xf182b9['cNGdQ'],
                'AkpZZ': _0xf182b9['KIaNu'],
                'zRaOk': function(_0x5cb88f, _0x2f4e8b) {
                    return _0xf182b9['RTnWP'](_0x5cb88f, _0x2f4e8b);
                },
                'nsyKu': function(_0x1bf1fc, _0x4bf255) {
                    return _0xf182b9['FZCSh'](_0x1bf1fc, _0x4bf255);
                },
                'tRSrS': function(_0x56aaf7) {
                    return _0xf182b9['JCsGP'](_0x56aaf7);
                }
            };
            try {
                const {
                    msg,
                    ret
                } = JSON['parse'](_0x31c5eb);
                $['log']('\x0a' + taskName + '【做日常任务】：' + (_0xf182b9['OEjNX'](msg['indexOf'](_0xf182b9['cNGdQ']), -0x1) ? _0xf182b9['KIaNu'] : msg) + '\x0a' + ($['showLog'] ? _0x31c5eb : ''));
                _0xf182b9['RTnWP'](_0x58b4af, _0xf182b9['FZCSh'](ret, 0x0));
            } catch (_0x5ef9c6) {
                if (_0xf182b9['OEjNX'](_0xf182b9['HCrNI'], _0xf182b9['qbCQt'])) {
                    $['logErr'](_0x5ef9c6, _0x2145e0);
                } else {
                    try {
                        const {
                            msg,
                            ret
                        } = JSON['parse'](_0x31c5eb);
                        $['log']('\x0a' + taskName + '【做日常任务】：' + (_0x595ae5['rvPOZ'](msg['indexOf'](_0x595ae5['CTDbj']), -0x1) ? _0x595ae5['AkpZZ'] : msg) + '\x0a' + ($['showLog'] ? _0x31c5eb : ''));
                        _0x595ae5['zRaOk'](_0x58b4af, _0x595ae5['nsyKu'](ret, 0x0));
                    } catch (_0x518345) {
                        $['logErr'](_0x518345, _0x2145e0);
                    } finally {
                        _0x595ae5['tRSrS'](_0x58b4af);
                    }
                }
            } finally {
                if (_0xf182b9['FvZXx'](_0xf182b9['apcpM'], _0xf182b9['apcpM'])) {
                    _0x595ae5['tRSrS'](_0x58b4af);
                } else {
                    _0xf182b9['JCsGP'](_0x58b4af);
                }
            }
        });
    });
}

function awardTask(_0x3d760e, _0x97245b) {
    var _0x527368 = {
        'QnaZs': function(_0x38745a, _0x554c7d) {
            return _0x38745a !== _0x554c7d;
        },
        'JMGIC': 'YdhVm',
        'gVmqd': function(_0x1fca7d) {
            return _0x1fca7d();
        },
        'yCtLU': function(_0x2662cb, _0x3c0972) {
            return _0x2662cb == _0x3c0972;
        },
        'IXOGL': 'success',
        'OFPQL': function(_0x20af6d, _0x3bff4d) {
            return _0x20af6d || _0x3bff4d;
        },
        'dNIff': function(_0x4eef62) {
            return _0x4eef62();
        },
        'kFbKY': function(_0x3afe45, _0x4cfa92) {
            return _0x3afe45 === _0x4cfa92;
        },
        'ATMao': 'gyamG',
        'YgcqI': 'PberT',
        'vcRbo': function(_0x5e55b5, _0x389167) {
            return _0x5e55b5 !== _0x389167;
        },
        'UHmtQ': '活动太火爆了',
        'GZfcL': '任务为成就任务或者未到任务时间',
        'PMqvV': function(_0x3389e0, _0x3cbcaa) {
            return _0x3389e0 + _0x3cbcaa;
        },
        'NJuhc': function(_0xee01b4, _0x654ac1) {
            return _0xee01b4(_0x654ac1);
        },
        'YkuMo': function(_0x40530e, _0x4b9d4a) {
            return _0x40530e === _0x4b9d4a;
        },
        'bOJgG': 'srOxS',
        'RVDyY': 'gTSES',
        'eeldY': function(_0x265a05, _0x169abc, _0x25dbac) {
            return _0x265a05(_0x169abc, _0x25dbac);
        }
    };
    return new Promise(_0x2e2728 => {
        var _0x459fbd = {
            'dKsuu': function(_0x59c3a6, _0x501fa2) {
                return _0x527368['yCtLU'](_0x59c3a6, _0x501fa2);
            },
            'qQdAf': _0x527368['IXOGL'],
            'JTUjR': function(_0x2f6333, _0x2ca049) {
                return _0x527368['OFPQL'](_0x2f6333, _0x2ca049);
            },
            'fVYig': function(_0x16db92) {
                return _0x527368['dNIff'](_0x16db92);
            },
            'MtGed': function(_0x312807, _0x384633) {
                return _0x527368['kFbKY'](_0x312807, _0x384633);
            },
            'eqvoS': _0x527368['ATMao'],
            'haptp': _0x527368['YgcqI'],
            'VDXwL': function(_0x3cc0b1, _0x5485a5) {
                return _0x527368['vcRbo'](_0x3cc0b1, _0x5485a5);
            },
            'vhuBJ': _0x527368['UHmtQ'],
            'OUCex': _0x527368['GZfcL'],
            'YHBKC': function(_0x36accc, _0x25ac04) {
                return _0x527368['PMqvV'](_0x36accc, _0x25ac04);
            },
            'RHcIh': function(_0x2be206, _0x3e84d8) {
                return _0x527368['NJuhc'](_0x2be206, _0x3e84d8);
            },
            'IhEgh': function(_0x294dd4, _0x549978) {
                return _0x527368['YkuMo'](_0x294dd4, _0x549978);
            },
            'aKtcQ': _0x527368['bOJgG'],
            'OGGIE': function(_0x48934c) {
                return _0x527368['dNIff'](_0x48934c);
            }
        };
        if (_0x527368['YkuMo'](_0x527368['RVDyY'], _0x527368['RVDyY'])) {
            switch (_0x3d760e) {
                case 0x0:
                    const {
                        taskId, taskName
                    } = _0x97245b;
                    $['get'](_0x527368['eeldY'](taskListUrl, 'Award', 'taskId=' + taskId), (_0x171b89, _0x5988d0, _0x5e057e) => {
                        try {
                            if (_0x459fbd['MtGed'](_0x459fbd['eqvoS'], _0x459fbd['haptp'])) {
                                $['shareCodesArr']['push'](shareCodes[item]);
                            } else {
                                const {
                                    msg,
                                    ret,
                                    data: {
                                        prizeInfo = ''
                                    } = {}
                                } = JSON['parse'](_0x5e057e);
                                let _0x2215c5 = '';
                                if (_0x459fbd['VDXwL'](msg['indexOf'](_0x459fbd['vhuBJ']), -0x1)) {
                                    _0x2215c5 = _0x459fbd['OUCex'];
                                } else {
                                    _0x2215c5 = _0x459fbd['YHBKC'](msg, prizeInfo) ? ' 获得财富值 ¥ ' + JSON['parse'](prizeInfo)['ddwMoney'] : '';
                                }
                                $['log']('\x0a' + taskName + '【领日常奖励】：' + _0x2215c5 + '\x0a' + ($['showLog'] ? _0x5e057e : ''));
                                _0x459fbd['RHcIh'](_0x2e2728, _0x459fbd['IhEgh'](ret, 0x0));
                            }
                        } catch (_0x30e272) {
                            if (_0x459fbd['VDXwL'](_0x459fbd['aKtcQ'], _0x459fbd['aKtcQ'])) {
                                try {
                                    const {
                                        dwMoney,
                                        iRet,
                                        sErrMsg,
                                        strPin
                                    } = JSON['parse'](_0x5e057e);
                                    $['log']('\x0a【' + sceneList[_key]['strSceneName'] + '】👬好友: ' + (_0x459fbd['dKsuu'](sErrMsg, _0x459fbd['qQdAf']) ? '获取普通助力财富值：¥ ' + _0x459fbd['JTUjR'](dwMoney, 0x0) : sErrMsg) + ' \x0a' + ($['showLog'] ? _0x5e057e : ''));
                                } catch (_0x5ccc1b) {
                                    $['logErr'](_0x5ccc1b, _0x5988d0);
                                } finally {
                                    _0x459fbd['fVYig'](_0x2e2728);
                                }
                            } else {
                                $['logErr'](_0x30e272, _0x5988d0);
                            }
                        } finally {
                            _0x459fbd['OGGIE'](_0x2e2728);
                        }
                    });
                    break;
                case 0x1:
                    const {
                        strTaskIndex, strTaskDescr
                    } = _0x97245b;
                    $['get'](_0x527368['eeldY'](taskUrl, 'consume/AchieveAward', 'strTaskIndex=' + strTaskIndex), (_0x4b6790, _0x179a57, _0x55ee27) => {
                        try {
                            if (_0x527368['QnaZs'](_0x527368['JMGIC'], _0x527368['JMGIC'])) {
                                console['log']('' + JSON['stringify'](_0x4b6790));
                                console['log']($['name'] + ' API请求失败，请检查网路重试');
                            } else {
                                const {
                                    iRet,
                                    sErrMsg,
                                    dwExpericnce
                                } = JSON['parse'](_0x55ee27);
                                $['log']('\x0a' + strTaskDescr + '【领成就奖励】： success 获得财富值：¥ ' + dwExpericnce + '\x0a' + ($['showLog'] ? _0x55ee27 : ''));
                            }
                        } catch (_0x2f1470) {
                            $['logErr'](_0x2f1470, _0x179a57);
                        } finally {
                            _0x527368['gVmqd'](_0x2e2728);
                        }
                    });
                    break;
                default:
                    break;
            }
        } else {
            console['log']('由于您第' + $['index'] + '个京东账号未提供shareCode,将采纳本脚本自带的助力码\n');
            $['newShareCodes'] = $['strMyShareIds'];
        }
    });
}

function funCenterState() {
    var _0x4d7010 = {
        'wiaLF': function(_0x5c97f9) {
            return _0x5c97f9();
        },
        'nKQQE': 'F45CB4F07997DFE748E5656521A9034446A1568F6950206B0D44A5664662275D',
        'AFyfY': function(_0x40be9e, _0x22f867) {
            return _0x40be9e == _0x22f867;
        },
        'aQcCx': function(_0x58a569, _0x2de4d0) {
            return _0x58a569 === _0x2de4d0;
        },
        'wdxvJ': 'XvRMw',
        'Asunz': 'dvgys',
        'eobnt': function(_0xcd1806, _0x5449f4, _0x1b452d, _0xdb2e22) {
            return _0xcd1806(_0x5449f4, _0x1b452d, _0xdb2e22);
        },
        'tQZjw': 'CgaZT',
        'JgaFu': function(_0x7ffd93) {
            return _0x7ffd93();
        },
        'fxzyW': function(_0x3b95e0, _0x295c6b, _0x297b8a) {
            return _0x3b95e0(_0x295c6b, _0x297b8a);
        }
    };
    return new Promise(_0x490330 => {
        var _0x9525b9 = {
            'dNuNu': function(_0x5a64ff) {
                return _0x4d7010['wiaLF'](_0x5a64ff);
            },
            'WPheH': _0x4d7010['nKQQE'],
            'qEcaE': function(_0x41d583, _0x4cd191) {
                return _0x4d7010['AFyfY'](_0x41d583, _0x4cd191);
            },
            'qzqOg': function(_0x2ca9ff, _0x77decc) {
                return _0x4d7010['aQcCx'](_0x2ca9ff, _0x77decc);
            },
            'xfsdU': _0x4d7010['wdxvJ'],
            'tZmPD': _0x4d7010['Asunz'],
            'ZVDly': function(_0x37d37a, _0x51797f, _0x3508b5, _0x16775e) {
                return _0x4d7010['eobnt'](_0x37d37a, _0x51797f, _0x3508b5, _0x16775e);
            },
            'cdgEe': _0x4d7010['tQZjw'],
            'RcUyl': function(_0x13be92) {
                return _0x4d7010['JgaFu'](_0x13be92);
            }
        };
        $['get'](_0x4d7010['fxzyW'](taskUrl, 'consume/FunCenterState', 'strType=1'), async (_0x1aafeb, _0x34738d, _0x261f3) => {
            var _0xddd603 = {
                'iNFVH': function(_0x207698) {
                    return _0x9525b9['dNuNu'](_0x207698);
                },
                'CkogF': _0x9525b9['WPheH']
            };
            try {
                const {
                    SlotMachine: {
                        ddwConfVersion,
                        dwFreeCount,
                        strCouponPool,
                        strGoodsPool
                    } = {},
                    iRet,
                    sErrMsg
                } = JSON['parse'](_0x261f3);
                if (_0x9525b9['qEcaE'](dwFreeCount, 0x1)) {
                    if (_0x9525b9['qzqOg'](_0x9525b9['xfsdU'], _0x9525b9['tZmPD'])) {
                        _0xddd603['iNFVH'](_0x490330);
                    } else {
                        await $['wait'](0x1f4);
                        await _0x9525b9['ZVDly'](soltMachine, strCouponPool, strGoodsPool, ddwConfVersion);
                    }
                }
            } catch (_0x4b2cfa) {
                if (_0x9525b9['qzqOg'](_0x9525b9['cdgEe'], _0x9525b9['cdgEe'])) {
                    $['logErr'](_0x4b2cfa, _0x34738d);
                } else {
                    $['newShareCodes'] = [...new Set([...$['newShareCodes'], ...$['strMyShareIds'], _0xddd603['CkogF'], ...readShareCodeRes['data'] || []])];
                }
            } finally {
                _0x9525b9['RcUyl'](_0x490330);
            }
        });
    });
}

function soltMachine(_0x2923ab, _0x1cdb3a, _0x5461ca) {
    var _0x37f6cd = {
        'PPJeU': function(_0x3d90c4, _0x272345) {
            return _0x3d90c4 != _0x272345;
        },
        'soWlS': '未中奖',
        'kKlLV': function(_0x50bacc) {
            return _0x50bacc();
        },
        'GyrRv': function(_0x2cb301, _0x233a87, _0x11f6a2) {
            return _0x2cb301(_0x233a87, _0x11f6a2);
        }
    };
    return new Promise(_0xde5cff => {
        $['get'](_0x37f6cd['GyrRv'](taskUrl, 'consume/SlotMachine', 'strCouponPool=' + _0x2923ab + '&strGoodsPool=' + _0x1cdb3a + '&ddwConfVersion=' + _0x5461ca), async (_0xae09c3, _0x70f8a0, _0x1103b3) => {
            try {
                const {
                    iRet,
                    sErrMsg,
                    strAwardPoolName
                } = JSON['parse'](_0x1103b3);
                $['log']('\n【抽奖结果】🎰 ' + (_0x37f6cd['PPJeU'](strAwardPoolName, '') ? _0x37f6cd['soWlS'] : strAwardPoolName) + ' \x0a' + ($['showLog'] ? _0x1103b3 : ''));
            } catch (_0x55518d) {
                $['logErr'](_0x55518d, _0x70f8a0);
            } finally {
                _0x37f6cd['kKlLV'](_0xde5cff);
            }
        });
    });
}

function createAssistUser(_0x37a04a) {
    var _0x5ab258 = {
        'AIiJy': function(_0xae03d2) {
            return _0xae03d2();
        },
        'KHqKr': 'jd_jxCFD',
        'dUVqB': function(_0x5641db, _0x6656fa) {
            return _0x5641db !== _0x6656fa;
        },
        'OyGzA': 'qHwku',
        'LHQkP': function(_0x296b17, _0x144a96) {
            return _0x296b17 === _0x144a96;
        },
        'mJGZu': 'Flzqj',
        'kCETm': function(_0x3fe53b, _0x1d2cfc, _0x1fb37f) {
            return _0x3fe53b(_0x1d2cfc, _0x1fb37f);
        },
        'QqKac': 'user/JoinScene',
        'WoQBU': function(_0x4fb7a2, _0x4b7153) {
            return _0x4fb7a2(_0x4b7153);
        }
    };
    return new Promise(_0x231764 => {
        var _0x244e07 = {
            'NITqk': _0x5ab258['KHqKr'],
            'uXWLR': function(_0x368f7c, _0x78fc56) {
                return _0x5ab258['dUVqB'](_0x368f7c, _0x78fc56);
            },
            'ALvye': _0x5ab258['OyGzA'],
            'ImFYO': function(_0x526396, _0x282c77) {
                return _0x5ab258['LHQkP'](_0x526396, _0x282c77);
            },
            'vEjOS': function(_0x438543) {
                return _0x5ab258['AIiJy'](_0x438543);
            }
        };
        if (_0x5ab258['dUVqB'](_0x5ab258['mJGZu'], _0x5ab258['mJGZu'])) {
            _0x5ab258['AIiJy'](_0x231764);
        } else {
            $['get'](_0x5ab258['kCETm'](taskUrl, _0x5ab258['QqKac'], 'strShareId=' + _0x5ab258['WoQBU'](escape, _0x37a04a) + '&dwSceneId=1001'), async (_0x129041, _0x16c5bf, _0x1ddf9f) => {
                var _0x5479ff = {
                    'QNTYN': _0x244e07['NITqk']
                };
                if (_0x244e07['uXWLR'](_0x244e07['ALvye'], _0x244e07['ALvye'])) {
                    if ($['getdata'](_0x5479ff['QNTYN'])) $['shareCodesArr'] = $['getdata'](_0x5479ff['QNTYN'])['split']('\x0a')['filter'](_0x11cc41 => !!_0x11cc41);
                    console['log']('\nBoxJs设置的京喜财富岛邀请码:' + $['getdata'](_0x5479ff['QNTYN']) + '\x0a');
                } else {
                    try {
                        console['log']('\n普通助力(招工)结果:' + _0x1ddf9f);
                        const {
                            iRet
                        } = JSON['parse'](_0x1ddf9f);
                        if (_0x244e07['ImFYO'](iRet, 0x7d5) || _0x244e07['ImFYO'](iRet, 0x270f)) $['canHelp'] = ![];
                    } catch (_0x2fc53c) {} finally {
                        _0x244e07['vEjOS'](_0x231764);
                    }
                }
            });
        }
    });
}

function createSuperAssistUser(_0x5659d4) {
    var _0xedceb = {
        'xPtRX': function(_0x1e9907, _0x4231d4) {
            return _0x1e9907 === _0x4231d4;
        },
        'ldqCj': function(_0x4c9047, _0x4bd9ca) {
            return _0x4c9047 !== _0x4bd9ca;
        },
        'rYzuO': 'NlqUg',
        'sVsEJ': 'zUdIm',
        'KMXpz': function(_0x261955) {
            return _0x261955();
        },
        'ptNch': function(_0x4166eb, _0x147777, _0x4c2334) {
            return _0x4166eb(_0x147777, _0x4c2334);
        },
        'PqaVa': 'user/JoinScene',
        'yMnbE': 'timestamp',
        'ogfLJ': 'phoneid',
        'FROST': 'farm_jstoken',
        'ONmJJ': function(_0x38c361, _0x327b8b) {
            return _0x38c361(_0x327b8b);
        }
    };
    return new Promise(_0x156b4b => {
        var _0x2210d4 = {
            'Gtxpv': function(_0x532eea, _0xcc5c74) {
                return _0xedceb['xPtRX'](_0x532eea, _0xcc5c74);
            },
            'uzFci': function(_0x587332, _0x496871) {
                return _0xedceb['ldqCj'](_0x587332, _0x496871);
            },
            'rDLyQ': _0xedceb['rYzuO'],
            'FEEir': _0xedceb['sVsEJ'],
            'hOgpp': function(_0x3d9938) {
                return _0xedceb['KMXpz'](_0x3d9938);
            }
        };
        $['get'](_0xedceb['ptNch'](taskUrl, _0xedceb['PqaVa'], 'strPgtimestamp=' + token[_0xedceb['yMnbE']] + '&strPhoneID=' + token[_0xedceb['ogfLJ']] + '&strPgUUNum=' + token[_0xedceb['FROST']] + '&strShareId=' + _0xedceb['ONmJJ'](escape, _0x5659d4) + '&dwSceneId=1001&dwType=2'), async (_0xc14743, _0x5be4de, _0x1b9e68) => {
            try {
                console['log']('\n超级助力(超级工人)结果:' + _0x1b9e68);
                const {
                    sErrMsg,
                    iRet
                } = JSON['parse'](_0x1b9e68);
                if (_0x2210d4['Gtxpv'](iRet, 0x7d5) || _0x2210d4['Gtxpv'](iRet, 0x270f)) $['canHelp'] = ![];
                console['log'](sErrMsg);
            } catch (_0x5b31c2) {
                $['logErr'](_0x5b31c2, _0x5be4de);
            } finally {
                if (_0x2210d4['uzFci'](_0x2210d4['rDLyQ'], _0x2210d4['FEEir'])) {
                    _0x2210d4['hOgpp'](_0x156b4b);
                } else {
                    $['logErr'](e, _0x5be4de);
                }
            }
        });
    });
}

function joinGroup(_0x18855d) {
    var _0x1a220c = {
        'DCvxG': '*/*',
        'rZHQV': 'keep-alive',
        'FgAXE': 'https://st.jingxi.com/fortune_island/index.html?ptag=138631.26.55',
        'VeLqK': 'gzip, deflate, br',
        'ZQEEC': 'm.jingxi.com',
        'bXqvz': function(_0x5cd30b, _0x3e290e) {
            return _0x5cd30b + _0x3e290e;
        },
        'NVZTx': function(_0x1811b4, _0x59d8d7) {
            return _0x1811b4 * _0x59d8d7;
        },
        'TwqPY': 'zh-cn',
        'owsit': function(_0x2b941, _0x3acb94) {
            return _0x2b941 !== _0x3acb94;
        },
        'dQhto': 'gyfAC',
        'ECMFc': function(_0x12af13, _0x397458) {
            return _0x12af13 === _0x397458;
        },
        'KitFk': 'FnrAG',
        'LiIXW': 'cJHGG',
        'kHLOd': function(_0x3ee9d0) {
            return _0x3ee9d0();
        },
        'XxSwK': function(_0x3890f0, _0x290b35, _0x4b8db9) {
            return _0x3890f0(_0x290b35, _0x4b8db9);
        },
        'Csxtl': 'timestamp',
        'IzLls': 'phoneid',
        'uokXF': 'farm_jstoken'
    };
    return new Promise(async _0x17ffad => {
        $['get'](_0x1a220c['XxSwK'](taskUrl, 'user/JoinGroup', 'strGroupId=' + _0x18855d + '&dwIsNewUser=0&pgtimestamp=' + token[_0x1a220c['Csxtl']] + '&phoneID=' + token[_0x1a220c['IzLls']] + '&pgUUNum=' + token[_0x1a220c['uokXF']]), (_0x409a1d, _0x3c4682, _0x96be6f) => {
            var _0x53f773 = {
                'YdIyJ': _0x1a220c['DCvxG'],
                'vhqyl': _0x1a220c['rZHQV'],
                'DAyvV': _0x1a220c['FgAXE'],
                'duFMx': _0x1a220c['VeLqK'],
                'WrwfR': _0x1a220c['ZQEEC'],
                'WWsFi': function(_0x519688, _0x3b973b) {
                    return _0x1a220c['bXqvz'](_0x519688, _0x3b973b);
                },
                'tWDiw': function(_0xc9b871, _0x2a937c) {
                    return _0x1a220c['NVZTx'](_0xc9b871, _0x2a937c);
                },
                'eKwUW': _0x1a220c['TwqPY']
            };
            if (_0x1a220c['owsit'](_0x1a220c['dQhto'], _0x1a220c['dQhto'])) {
                const {
                    iRet,
                    sErrMsg,
                    taskinfo = []
                } = JSON['parse'](_0x96be6f);
                $['allTask'] = taskinfo['filter'](_0x420336 => _0x420336['dwAwardStatus'] === 0x1);
                $['log']('\n获取【🎖成就任务】列表 ' + sErrMsg + '，总共' + $['allTask']['length'] + '个任务！\n' + ($['showLog'] ? _0x96be6f : ''));
            } else {
                try {
                    if (_0x1a220c['ECMFc'](_0x1a220c['KitFk'], _0x1a220c['LiIXW'])) {
                        return {
                            'url': JD_API_HOST + 'newtasksys/newtasksys_front/' + function_path + '?strZone=jxcfd&bizCode=jxcfd&source=jxcfd&dwEnv=7&_cfd_t=' + Date['now']() + '&ptag=138631.26.55&' + body + '&_ste=1&_=' + Date['now']() + '&sceneval=2&g_login_type=1&g_ty=ls',
                            'headers': {
                                'Cookie': cookie,
                                'Accept': _0x53f773['YdIyJ'],
                                'Connection': _0x53f773['vhqyl'],
                                'Referer': _0x53f773['DAyvV'],
                                'Accept-Encoding': _0x53f773['duFMx'],
                                'Host': _0x53f773['WrwfR'],
                                'User-Agent': 'jdpingou;iPhone;3.15.2;14.2.1;ea00763447803eb0f32045dcba629c248ea53bb3;network/wifi;model/iPhone13,2;appBuild/100365;ADID/00000000-0000-0000-0000-000000000000;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/0;hasOCPay/0;supportBestPay/0;session/' + _0x53f773['WWsFi'](_0x53f773['tWDiw'](Math['random'], 0x62), 0x1) + ';pap/JA2015_311210;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
                                'Accept-Language': _0x53f773['eKwUW']
                            }
                        };
                    } else {
                        const {
                            sErrMsg,
                            iRet
                        } = JSON['parse'](_0x96be6f);
                        if (_0x1a220c['ECMFc'](iRet, 0x7d5) || _0x1a220c['ECMFc'](iRet, 0x270f)) $['canHelp'] = ![];
                        $['log']('' + sErrMsg);
                    }
                } catch (_0x310f9d) {
                    $['logErr'](_0x310f9d, _0x3c4682);
                } finally {
                    _0x1a220c['kHLOd'](_0x17ffad);
                }
            }
        });
    });
}

function submitGroupId() {
    var _0x5b5df8 = {
        'POnyn': function(_0x249554, _0x4b99ba) {
            return _0x249554(_0x4b99ba);
        },
        'XOiFd': function(_0x1b0375) {
            return _0x1b0375();
        },
        'UrmmU': function(_0x2861e1, _0x1f0bd0) {
            return _0x2861e1 === _0x1f0bd0;
        },
        'WzwUz': function(_0x577b05, _0xf49371) {
            return _0x577b05 !== _0xf49371;
        },
        'bgUBu': 'Kspwd',
        'kNZLq': 'pNpax',
        'DsuTh': function(_0x28892a, _0x1def06) {
            return _0x28892a === _0x1def06;
        },
        'ghegt': 'zregD',
        'AUeTE': 'hdBxe',
        'XBVhD': function(_0x465d9c, _0x4c6eca) {
            return _0x465d9c + _0x4c6eca;
        },
        'QqrJE': function(_0x5de4a8, _0x20b2ed) {
            return _0x5de4a8 + _0x20b2ed;
        },
        'UFbdp': '你的【🏝寻宝大作战】互助码: ',
        'AQGjo': '(每天都变化,旧的不可用)',
        'WKeUw': function(_0x22ddb2) {
            return _0x22ddb2();
        }
    };
    return new Promise(_0x162439 => {
        var _0xaf93e7 = {
            'xZukY': function(_0x408426) {
                return _0x5b5df8['WKeUw'](_0x408426);
            }
        };
        $['get'](_0x5b5df8['POnyn'](taskUrl, 'user/GatherForture'), async (_0x4df356, _0x53069c, _0x4de724) => {
            var _0x5ccf26 = {
                'rlwDz': function(_0x9f143d, _0x78f08f) {
                    return _0x5b5df8['POnyn'](_0x9f143d, _0x78f08f);
                },
                'HLCdz': function(_0x1f2c77) {
                    return _0x5b5df8['XOiFd'](_0x1f2c77);
                }
            };
            try {
                const {
                    GroupInfo: {
                        strGroupId
                    },
                    strPin
                } = JSON['parse'](_0x4de724);
                if (!strGroupId) {
                    const _0x386e49 = await _0x5b5df8['XOiFd'](openGroup);
                    if (_0x5b5df8['UrmmU'](_0x386e49, 0x0)) {
                        if (_0x5b5df8['WzwUz'](_0x5b5df8['bgUBu'], _0x5b5df8['kNZLq'])) {
                            await _0x5b5df8['XOiFd'](submitGroupId);
                        } else {
                            _0xaf93e7['xZukY'](_0x162439);
                        }
                    } else {
                        _0x5b5df8['XOiFd'](_0x162439);
                    }
                } else {
                    if (_0x5b5df8['DsuTh'](_0x5b5df8['ghegt'], _0x5b5df8['AUeTE'])) {
                        try {
                            const {
                                sErrMsg
                            } = JSON['parse'](data);
                            $['log']('\n【🏝寻宝大作战】' + sErrMsg + '\x0a' + ($['showLog'] ? data : ''));
                            _0x5ccf26['rlwDz'](_0x162439, 0x0);
                        } catch (_0x15050b) {
                            $['logErr'](_0x15050b, _0x53069c);
                        } finally {
                            _0x5ccf26['HLCdz'](_0x162439);
                        }
                    } else {
                        $['log'](_0x5b5df8['XBVhD'](_0x5b5df8['QqrJE'](_0x5b5df8['UFbdp'], strGroupId), _0x5b5df8['AQGjo']));
                        $['strGroupIds']['push'](strGroupId);
                    }
                }
            } catch (_0x5c3295) {
                $['logErr'](_0x5c3295, _0x53069c);
            } finally {
                _0x5b5df8['XOiFd'](_0x162439);
            }
        });
    });
}

function openGroup() {
    var _0xdc3da5 = {
        'ZjrVf': function(_0x5ba4f4) {
            return _0x5ba4f4();
        },
        'QKokH': function(_0x366c1d, _0x577880) {
            return _0x366c1d(_0x577880);
        },
        'DniTa': function(_0x3ef988, _0x5e2bc3) {
            return _0x3ef988 === _0x5e2bc3;
        },
        'NAbMq': 'nwJLY',
        'rLmUP': function(_0xf6016e, _0x1df250) {
            return _0xf6016e(_0x1df250);
        },
        'NevuJ': function(_0x29bbfe, _0x184fbf) {
            return _0x29bbfe !== _0x184fbf;
        },
        'ghmRw': 'zFBEc',
        'Ggcas': function(_0xc6d257) {
            return _0xc6d257();
        },
        'UgatC': function(_0xd13e50, _0x20f089, _0x2722e4) {
            return _0xd13e50(_0x20f089, _0x2722e4);
        }
    };
    return new Promise(async _0x5caaeb => {
        $['get'](_0xdc3da5['UgatC'](taskUrl, 'user/OpenGroup', 'dwIsNewUser=' + $['info']['dwIsNewUser']), async (_0x3a4261, _0x27228f, _0x53291e) => {
            var _0x1eff6d = {
                'hhzxR': function(_0x2ed322) {
                    return _0xdc3da5['ZjrVf'](_0x2ed322);
                },
                'XhmnO': function(_0x47dac7, _0x44ad8f) {
                    return _0xdc3da5['QKokH'](_0x47dac7, _0x44ad8f);
                }
            };
            if (_0xdc3da5['DniTa'](_0xdc3da5['NAbMq'], _0xdc3da5['NAbMq'])) {
                try {
                    const {
                        sErrMsg
                    } = JSON['parse'](_0x53291e);
                    $['log']('\n【🏝寻宝大作战】' + sErrMsg + '\x0a' + ($['showLog'] ? _0x53291e : ''));
                    _0xdc3da5['rLmUP'](_0x5caaeb, 0x0);
                } catch (_0x4ab343) {
                    $['logErr'](_0x4ab343, _0x27228f);
                } finally {
                    if (_0xdc3da5['NevuJ'](_0xdc3da5['ghmRw'], _0xdc3da5['ghmRw'])) {
                        try {
                            const {
                                iRet,
                                sErrMsg,
                                taskinfo = []
                            } = JSON['parse'](_0x53291e);
                            $['allTask'] = taskinfo['filter'](_0x347b12 => _0x347b12['dwAwardStatus'] === 0x1);
                            $['log']('\n获取【🎖成就任务】列表 ' + sErrMsg + '，总共' + $['allTask']['length'] + '个任务！\n' + ($['showLog'] ? _0x53291e : ''));
                        } catch (_0x3ff009) {
                            $['logErr'](_0x3ff009, _0x27228f);
                        } finally {
                            _0x1eff6d['hhzxR'](_0x5caaeb);
                        }
                    } else {
                        _0xdc3da5['Ggcas'](_0x5caaeb);
                    }
                }
            } else {
                const {
                    sErrMsg
                } = JSON['parse'](_0x53291e);
                $['log']('\n【🏝寻宝大作战】' + sErrMsg + '\x0a' + ($['showLog'] ? _0x53291e : ''));
                _0x1eff6d['XhmnO'](_0x5caaeb, 0x0);
            }
        });
    });
}

function openPeriodBox() {
    var _0x17594b = {
        'tuMTM': function(_0x13ba22, _0xf9b38b) {
            return _0x13ba22 == _0xf9b38b;
        },
        'ovJAO': 'success',
        'shtXq': function(_0x34a6cb, _0x4f476a) {
            return _0x34a6cb || _0x4f476a;
        },
        'WiFbR': function(_0x31815c) {
            return _0x31815c();
        },
        'uaPaG': function(_0x4d0047, _0x6ff09d) {
            return _0x4d0047 === _0x6ff09d;
        },
        'uwCOf': 'mmogG',
        'ITuKJ': function(_0x3574cb, _0x518be1) {
            return _0x3574cb < _0x518be1;
        },
        'PpEpM': function(_0x22f4eb, _0x5317b2) {
            return _0x22f4eb === _0x5317b2;
        },
        'tnuNb': 'gzeUd',
        'Mvkso': function(_0x55d60b, _0x35437c) {
            return _0x55d60b !== _0x35437c;
        },
        'lMEJs': 'wUMdv',
        'exdUF': 'ERMrS',
        'LBllG': function(_0x77fac2, _0x3f3ae3, _0x1aca2a) {
            return _0x77fac2(_0x3f3ae3, _0x1aca2a);
        },
        'JOsiw': function(_0x233ff8) {
            return _0x233ff8();
        },
        'QfNlM': 'ASdqq',
        'AtyGf': 'DMtvS',
        'WEKLJ': function(_0x3ebb48) {
            return _0x3ebb48();
        },
        'MXWgH': function(_0x4b0f9f, _0x1a2e1e) {
            return _0x4b0f9f(_0x1a2e1e);
        }
    };
    return new Promise(async _0x2e8782 => {
        var _0x507d3d = {
            'yfkLi': function(_0x281fde, _0x2a7ee9) {
                return _0x17594b['tuMTM'](_0x281fde, _0x2a7ee9);
            },
            'QGInj': _0x17594b['ovJAO'],
            'GQOLj': function(_0x5320ce, _0x3627bc) {
                return _0x17594b['PpEpM'](_0x5320ce, _0x3627bc);
            },
            'gAaVJ': _0x17594b['QfNlM'],
            'QBYgn': _0x17594b['AtyGf'],
            'gSjSG': function(_0x465c57) {
                return _0x17594b['WEKLJ'](_0x465c57);
            },
            'OBjiN': function(_0x2b80ef) {
                return _0x17594b['WEKLJ'](_0x2b80ef);
            }
        };
        $['get'](_0x17594b['MXWgH'](taskUrl, 'user/GatherForture'), async (_0x2775ca, _0x3c84fa, _0x2459ce) => {
            var _0x3d94a5 = {
                'EECvC': function(_0x1fa4d0, _0x43852b) {
                    return _0x17594b['tuMTM'](_0x1fa4d0, _0x43852b);
                },
                'RfBsM': _0x17594b['ovJAO'],
                'wwyto': function(_0x165e36, _0x1182f0) {
                    return _0x17594b['shtXq'](_0x165e36, _0x1182f0);
                },
                'XmtvZ': function(_0x2c466c) {
                    return _0x17594b['WiFbR'](_0x2c466c);
                }
            };
            try {
                if (_0x17594b['uaPaG'](_0x17594b['uwCOf'], _0x17594b['uwCOf'])) {
                    const {
                        PeriodBox = [{}]
                    } = JSON['parse'](_0x2459ce);
                    for (var _0x4d47e0 = 0x0; _0x17594b['ITuKJ'](_0x4d47e0, PeriodBox['length']); _0x4d47e0++) {
                        if (_0x17594b['PpEpM'](_0x17594b['tnuNb'], _0x17594b['tnuNb'])) {
                            const {
                                dwStatus,
                                dwSeq,
                                strBrandName
                            } = PeriodBox[_0x4d47e0];
                            if (_0x17594b['tuMTM'](dwStatus, 0x2)) {
                                if (_0x17594b['Mvkso'](_0x17594b['lMEJs'], _0x17594b['exdUF'])) {
                                    await $['wait'](0x3e8);
                                    await $['get'](_0x17594b['LBllG'](taskUrl, 'user/OpenPeriodBox', 'dwSeq=' + dwSeq), async (_0x2775ca, _0x3c84fa, _0x2459ce) => {
                                        try {
                                            const {
                                                dwMoney,
                                                iRet,
                                                sErrMsg
                                            } = JSON['parse'](_0x2459ce);
                                            $['log']('\n【🏝寻宝大作战】【' + strBrandName + '】开宝箱：' + (_0x507d3d['yfkLi'](sErrMsg, _0x507d3d['QGInj']) ? ' 获得财富值 ¥ ' + dwMoney : sErrMsg) + '\x0a' + ($['showLog'] ? _0x2459ce : ''));
                                        } catch (_0x41a639) {
                                            if (_0x507d3d['GQOLj'](_0x507d3d['gAaVJ'], _0x507d3d['QBYgn'])) {
                                                const {
                                                    dwMoney,
                                                    iRet,
                                                    sErrMsg,
                                                    strPin
                                                } = JSON['parse'](_0x2459ce);
                                                $['log']('\x0a【' + sceneList[_key]['strSceneName'] + '】👬好友: ' + (_0x3d94a5['EECvC'](sErrMsg, _0x3d94a5['RfBsM']) ? '获取普通助力财富值：¥ ' + _0x3d94a5['wwyto'](dwMoney, 0x0) : sErrMsg) + ' \x0a' + ($['showLog'] ? _0x2459ce : ''));
                                            } else {
                                                $['logErr'](_0x41a639, _0x3c84fa);
                                            }
                                        } finally {
                                            _0x507d3d['gSjSG'](_0x2e8782);
                                        }
                                    });
                                } else {
                                    try {
                                        const {
                                            iRet,
                                            sErrMsg,
                                            dwExpericnce
                                        } = JSON['parse'](_0x2459ce);
                                        $['log']('\x0a' + strTaskDescr + '【领成就奖励】： success 获得财富值：¥ ' + dwExpericnce + '\x0a' + ($['showLog'] ? _0x2459ce : ''));
                                    } catch (_0x580e2e) {
                                        $['logErr'](_0x580e2e, _0x3c84fa);
                                    } finally {
                                        _0x507d3d['OBjiN'](_0x2e8782);
                                    }
                                }
                            } else if (_0x17594b['tuMTM'](dwStatus, 0x3)) {
                                $['log']('\n【🏝寻宝大作战】【' + strBrandName + '】开宝箱：宝箱已开启过！');
                            } else {
                                $['log']('\n【🏝寻宝大作战】【' + strBrandName + '】开宝箱：未达到宝箱开启条件，快去邀请好友助力吧！');
                                _0x17594b['WiFbR'](_0x2e8782);
                            }
                        } else {
                            const {
                                ret,
                                data: {
                                    userTaskStatusList = []
                                } = {},
                                msg
                            } = JSON['parse'](_0x2459ce);
                            $['allTask'] = userTaskStatusList['filter'](_0x556158 => _0x556158['awardStatus'] !== 0x1);
                            $['log']('\n获取【📆日常任务】列表 ' + msg + '，总共' + $['allTask']['length'] + '个任务！\n' + ($['showLog'] ? _0x2459ce : ''));
                        }
                    }
                } else {
                    _0x3d94a5['XmtvZ'](_0x2e8782);
                }
            } catch (_0x46b15d) {
                $['logErr'](_0x46b15d, _0x3c84fa);
            } finally {
                _0x17594b['JOsiw'](_0x2e8782);
            }
        });
    });
}

function activeScene(_0x4feb25) {
    var _0x4bd90d = {
        'RxHlk': function(_0x420808) {
            return _0x420808();
        },
        'rZttW': function(_0xdbe910, _0x27cb98) {
            return _0xdbe910 !== _0x27cb98;
        },
        'tCpKz': 'tpkUy',
        'KkedQ': function(_0x11a138, _0x8ca36a) {
            return _0x11a138 !== _0x8ca36a;
        },
        'mQKCO': 'FLYzW',
        'jbiBH': 'mDuDp',
        'cHtVT': function(_0x597e5f, _0x5e2de6) {
            return _0x597e5f(_0x5e2de6);
        },
        'Clfdk': '*/*',
        'HGzwi': 'keep-alive',
        'TNFRx': 'https://st.jingxi.com/fortune_island/index.html',
        'HJtMF': 'gzip, deflate, br',
        'otArQ': 'm.jingxi.com',
        'gJdHp': function(_0x2b92da, _0x323aaa) {
            return _0x2b92da + _0x323aaa;
        },
        'pazcp': function(_0x50fc8a, _0x2d1ccf) {
            return _0x50fc8a * _0x2d1ccf;
        },
        'NdTNg': 'zh-cn'
    };
    return new Promise(_0x52f3f9 => {
        var _0x177e58 = {
            'ExPtt': function(_0xc38b15, _0x210cfd) {
                return _0x4bd90d['rZttW'](_0xc38b15, _0x210cfd);
            },
            'foqwq': _0x4bd90d['tCpKz'],
            'FsPDb': function(_0x4ffcdc) {
                return _0x4bd90d['RxHlk'](_0x4ffcdc);
            }
        };
        if (_0x4bd90d['KkedQ'](_0x4bd90d['mQKCO'], _0x4bd90d['jbiBH'])) {
            const _0x187de7 = {
                'url': JD_API_HOST + 'jxcfd/user/ActiveScene?strZone=jxcfd&bizCode=jxcfd&source=jxcfd&dwEnv=7&_cfd_t=' + Date['now']() + '&ptag=&dwSceneId=' + _0x4bd90d['cHtVT'](Number, _0x4feb25) + '&_stk=_cfd_t,bizCode,dwEnv,dwSceneId,ptag,source,strZone&_ste=1&h5st=20210304125239873;1540797227618115;10009;tk01we7831daaa8nRzRiUm4rZjRynBiuCHXtzWJmGCtVH2P+YnfnjoIsTWS87p85/fH4kcisjwWpqa10pRs3zMclNzix;5a9afbeb82bbb4e5e62cfe4b72965b5a2bf12cc3c56817b53e93a1cead562dc4&_=' + Date['now']() + '&sceneval=2&g_login_type=1',
                'headers': {
                    'Cookie': cookie,
                    'Accept': _0x4bd90d['Clfdk'],
                    'Connection': _0x4bd90d['HGzwi'],
                    'Referer': _0x4bd90d['TNFRx'],
                    'Accept-Encoding': _0x4bd90d['HJtMF'],
                    'Host': _0x4bd90d['otArQ'],
                    'User-Agent': 'jdpingou;iPhone;3.15.2;14.2.1;ea00763447803eb0f32045dcba629c248ea53bb3;network/wifi;model/iPhone13,2;appBuild/100365;ADID/00000000-0000-0000-0000-000000000000;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/0;hasOCPay/0;supportBestPay/0;session/' + _0x4bd90d['gJdHp'](_0x4bd90d['pazcp'](Math['random'], 0x62), 0x1) + ';pap/JA2015_311210;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
                    'Accept-Language': _0x4bd90d['NdTNg']
                }
            };
            $['get'](_0x187de7, (_0xb5a6ca, _0x32b163, _0x4dc308) => {
                if (_0x177e58['ExPtt'](_0x177e58['foqwq'], _0x177e58['foqwq'])) {
                    $['logErr'](e, _0x32b163);
                } else {
                    try {
                        if (_0x4dc308) {
                            console['log']('开通场景结果:' + _0x4dc308 + '\x0a');
                        }
                    } catch (_0x4f2e7e) {
                        $['logErr'](_0x4f2e7e, _0x32b163);
                    } finally {
                        _0x177e58['FsPDb'](_0x52f3f9);
                    }
                }
            });
        } else {
            _0x4bd90d['RxHlk'](_0x52f3f9);
        }
    });
}

function taskUrl(_0x5cf7b4, _0x409526) {
    var _0x933264 = {
        'yhjhP': '*/*',
        'lPrHR': 'keep-alive',
        'REXTL': 'https://st.jingxi.com/fortune_island/index.html?ptag=138631.26.55',
        'NbtqJ': 'gzip, deflate, br',
        'ZhCBt': 'm.jingxi.com',
        'Gpmlt': function(_0x1e4b86, _0x22208f) {
            return _0x1e4b86 + _0x22208f;
        },
        'JOyqy': function(_0x39cf30, _0x545f05) {
            return _0x39cf30 * _0x545f05;
        },
        'KtNUR': 'zh-cn'
    };
    return {
        'url': JD_API_HOST + 'jxcfd/' + _0x5cf7b4 + '?strZone=jxcfd&bizCode=jxcfd&source=jxcfd&dwEnv=7&_cfd_t=' + Date['now']() + '&ptag=138631.26.55&' + _0x409526 + '&_ste=1&_=' + Date['now']() + '&sceneval=2&g_login_type=1&g_ty=ls',
        'headers': {
            'Cookie': cookie,
            'Accept': _0x933264['yhjhP'],
            'Connection': _0x933264['lPrHR'],
            'Referer': _0x933264['REXTL'],
            'Accept-Encoding': _0x933264['NbtqJ'],
            'Host': _0x933264['ZhCBt'],
            'User-Agent': 'jdpingou;iPhone;3.15.2;14.2.1;ea00763447803eb0f32045dcba629c248ea53bb3;network/wifi;model/iPhone13,2;appBuild/100365;ADID/00000000-0000-0000-0000-000000000000;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/0;hasOCPay/0;supportBestPay/0;session/' + _0x933264['Gpmlt'](_0x933264['JOyqy'](Math['random'], 0x62), 0x1) + ';pap/JA2015_311210;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
            'Accept-Language': _0x933264['KtNUR']
        }
    };
}

function taskListUrl(_0x49d1bc, _0x1ca0c9) {
    var _0x10122d = {
        'tVbiP': '*/*',
        'oOAvj': 'keep-alive',
        'KSOFN': 'https://st.jingxi.com/fortune_island/index.html?ptag=138631.26.55',
        'Zjjdg': 'gzip, deflate, br',
        'HYVGC': 'm.jingxi.com',
        'unGTl': function(_0x5a3b05, _0xb3db2d) {
            return _0x5a3b05 + _0xb3db2d;
        },
        'Eyuzk': function(_0x176a57, _0x2abe25) {
            return _0x176a57 * _0x2abe25;
        },
        'jISCF': 'zh-cn'
    };
    return {
        'url': JD_API_HOST + 'newtasksys/newtasksys_front/' + _0x49d1bc + '?strZone=jxcfd&bizCode=jxcfd&source=jxcfd&dwEnv=7&_cfd_t=' + Date['now']() + '&ptag=138631.26.55&' + _0x1ca0c9 + '&_ste=1&_=' + Date['now']() + '&sceneval=2&g_login_type=1&g_ty=ls',
        'headers': {
            'Cookie': cookie,
            'Accept': _0x10122d['tVbiP'],
            'Connection': _0x10122d['oOAvj'],
            'Referer': _0x10122d['KSOFN'],
            'Accept-Encoding': _0x10122d['Zjjdg'],
            'Host': _0x10122d['HYVGC'],
            'User-Agent': 'jdpingou;iPhone;3.15.2;14.2.1;ea00763447803eb0f32045dcba629c248ea53bb3;network/wifi;model/iPhone13,2;appBuild/100365;ADID/00000000-0000-0000-0000-000000000000;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/0;hasOCPay/0;supportBestPay/0;session/' + _0x10122d['unGTl'](_0x10122d['Eyuzk'](Math['random'], 0x62), 0x1) + ';pap/JA2015_311210;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
            'Accept-Language': _0x10122d['jISCF']
        }
    };
}

function showMsg() {
    var _0x20634d = {
        'DdnUl': function(_0x3fa3f3) {
            return _0x3fa3f3();
        },
        'zXXPA': function(_0x4031d3, _0x39d345) {
            return _0x4031d3 !== _0x39d345;
        },
        'HmqTa': 'SQzKn',
        'hZOwT': 'nYglx',
        'Krdzm': 'HH:mm',
        'eLgHJ': function(_0x578132, _0xdd4d53) {
            return _0x578132 !== _0xdd4d53;
        },
        'OowaC': 'UwFBv',
        'jQKqu': 'OmXWg'
    };
    return new Promise(async _0x413fd0 => {
        if ($['notifyTime']) {
            if (_0x20634d['zXXPA'](_0x20634d['HmqTa'], _0x20634d['hZOwT'])) {
                const _0x19928c = $['notifyTime']['split'](',')['map'](_0x508b3b => _0x508b3b['split'](':'));
                const _0xe355cc = $['time'](_0x20634d['Krdzm'])['split'](':');
                $['log']('\x0a' + JSON['stringify'](_0x19928c));
                $['log']('\x0a' + JSON['stringify'](_0xe355cc));
                if (_0x19928c['some'](_0x2d5246 => _0x2d5246[0x0] === _0xe355cc[0x0] && (!_0x2d5246[0x1] || _0x2d5246[0x1] === _0xe355cc[0x1]))) {
                    if (_0x20634d['eLgHJ'](_0x20634d['OowaC'], _0x20634d['jQKqu'])) {
                        $['msg']($['name'], '', '' + $['result']['join']('\x0a'));
                    } else {
                        return JSON['parse'](str);
                    }
                }
            } else {
                _0x20634d['DdnUl'](_0x413fd0);
            }
        } else {
            $['msg']($['name'], '', '' + $['result']['join']('\x0a'));
        }
        if ($['isNode']() && process['env']['CFD_NOTIFY_CONTROL']) await notify['sendNotify']($['name'] + ' - 账号' + $['index'] + ' - ' + $['nickName'], '' + $['result']['join']('\x0a'));
        _0x20634d['DdnUl'](_0x413fd0);
    });
}

function TotalBean() {
    var _0x218eed = {
        'VfEEX': function(_0x2af58a, _0x250084) {
            return _0x2af58a === _0x250084;
        },
        'GXpgS': 'false',
        'AVXVm': function(_0x5c6db1, _0x3429e4) {
            return _0x5c6db1 !== _0x3429e4;
        },
        'aOhKw': 'pwdfE',
        'iYCHi': function(_0x2f7a68, _0x4f80f1) {
            return _0x2f7a68 === _0x4f80f1;
        },
        'AQuOu': 'retcode',
        'jtLGQ': 'GtYtR',
        'FrwzI': 'base',
        'cfWwp': 'nkLco',
        'nvKVg': 'RLgQW',
        'maiCy': function(_0x50b446) {
            return _0x50b446();
        },
        'Mryyv': function(_0x5700d1) {
            return _0x5700d1();
        },
        'xqnmb': function(_0xcde70, _0x1f7b0f) {
            return _0xcde70 === _0x1f7b0f;
        },
        'SLQvF': 'vpOlw',
        'dEqtK': 'application/json,text/plain, */*',
        'gveXz': 'application/x-www-form-urlencoded',
        'lFKEB': 'gzip, deflate, br',
        'FXOAC': 'zh-cn',
        'eqkgJ': 'keep-alive',
        'KFHXE': 'https://wqs.jd.com/my/jingdou/my.shtml?sceneval=2',
        'juvnx': function(_0xf4d53e, _0x5106a5) {
            return _0xf4d53e(_0x5106a5);
        },
        'quIBa': './USER_AGENTS',
        'EvOWn': 'JDUA',
        'XtdXm': 'jdapp;iPhone;9.2.2;14.2;%E4%BA%AC%E4%B8%9C/9.2.2 CFNetwork/1206 Darwin/20.1.0'
    };
    return new Promise(async _0x2efecc => {
        var _0x2563d6 = {
            'RvIlv': function(_0x1e9d8d, _0x5b9360) {
                return _0x218eed['VfEEX'](_0x1e9d8d, _0x5b9360);
            },
            'EdBXp': _0x218eed['GXpgS'],
            'NUepf': function(_0x48775e, _0x5116c8) {
                return _0x218eed['AVXVm'](_0x48775e, _0x5116c8);
            },
            'IPFDx': _0x218eed['aOhKw'],
            'XDpUH': function(_0x4c6a80, _0x548a0a) {
                return _0x218eed['iYCHi'](_0x4c6a80, _0x548a0a);
            },
            'SdYfE': _0x218eed['AQuOu'],
            'uxrIN': _0x218eed['jtLGQ'],
            'vessi': _0x218eed['FrwzI'],
            'FlEan': _0x218eed['cfWwp'],
            'dyHmc': _0x218eed['nvKVg'],
            'MaFBq': function(_0x4a7901) {
                return _0x218eed['maiCy'](_0x4a7901);
            },
            'zgdTA': function(_0x3f9b1c) {
                return _0x218eed['Mryyv'](_0x3f9b1c);
            }
        };
        if (_0x218eed['xqnmb'](_0x218eed['SLQvF'], _0x218eed['SLQvF'])) {
            const _0x2986d5 = {
                'url': 'https://wq.jd.com/user/info/QueryJDUserInfo?sceneval=2',
                'headers': {
                    'Accept': _0x218eed['dEqtK'],
                    'Content-Type': _0x218eed['gveXz'],
                    'Accept-Encoding': _0x218eed['lFKEB'],
                    'Accept-Language': _0x218eed['FXOAC'],
                    'Connection': _0x218eed['eqkgJ'],
                    'Cookie': cookie,
                    'Referer': _0x218eed['KFHXE'],
                    'User-Agent': $['isNode']() ? process['env']['JD_USER_AGENT'] ? process['env']['JD_USER_AGENT'] : _0x218eed['juvnx'](require, _0x218eed['quIBa'])['USER_AGENT'] : $['getdata'](_0x218eed['EvOWn']) ? $['getdata'](_0x218eed['EvOWn']) : _0x218eed['XtdXm']
                }
            };
            $['post'](_0x2986d5, (_0x2a7e1c, _0x40ad10, _0x4b98fe) => {
                try {
                    if (_0x2a7e1c) {
                        console['log']('' + JSON['stringify'](_0x2a7e1c));
                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                    } else {
                        if (_0x4b98fe) {
                            if (_0x2563d6['NUepf'](_0x2563d6['IPFDx'], _0x2563d6['IPFDx'])) {
                                Object['keys'](jdCookieNode)['forEach'](_0x9dfb22 => {
                                    cookiesArr['push'](jdCookieNode[_0x9dfb22]);
                                });
                                if (process['env']['JD_DEBUG'] && _0x2563d6['RvIlv'](process['env']['JD_DEBUG'], _0x2563d6['EdBXp'])) console['log'] = () => {};
                            } else {
                                _0x4b98fe = JSON['parse'](_0x4b98fe);
                                if (_0x2563d6['XDpUH'](_0x4b98fe[_0x2563d6['SdYfE']], 0xd)) {
                                    if (_0x2563d6['NUepf'](_0x2563d6['uxrIN'], _0x2563d6['uxrIN'])) {
                                        $['logErr'](e, _0x40ad10);
                                    } else {
                                        $['isLogin'] = ![];
                                        return;
                                    }
                                }
                                if (_0x2563d6['XDpUH'](_0x4b98fe[_0x2563d6['SdYfE']], 0x0)) {
                                    $['nickName'] = _0x4b98fe[_0x2563d6['vessi']]['nickname'];
                                } else {
                                    if (_0x2563d6['XDpUH'](_0x2563d6['FlEan'], _0x2563d6['dyHmc'])) {
                                        $['isLogin'] = ![];
                                        return;
                                    } else {
                                        $['nickName'] = $['UserName'];
                                    }
                                }
                            }
                        } else {
                            console['log']('京东服务器返回空数据');
                        }
                    }
                } catch (_0x1993d) {
                    $['logErr'](_0x1993d, _0x40ad10);
                } finally {
                    _0x2563d6['MaFBq'](_0x2efecc);
                }
            });
        } else {
            $['log']('\n【🏝寻宝大作战】【' + strBrandName + '】开宝箱：未达到宝箱开启条件，快去邀请好友助力吧！');
            _0x2563d6['zgdTA'](_0x2efecc);
        }
    });
}

function readShareCode() {
    var _0x23238f = {
        'mDkdY': function(_0x329e17, _0x3a9ccd) {
            return _0x329e17 === _0x3a9ccd;
        },
        'afcNS': 'VBiKN',
        'XPaqb': function(_0x2b06c3, _0x57b2a2) {
            return _0x2b06c3(_0x57b2a2);
        },
        'NQkoS': function(_0x25b476, _0x58fe0e) {
            return _0x25b476 === _0x58fe0e;
        },
        'FXWUD': function(_0x249a60) {
            return _0x249a60();
        }
    };
    console['log']('开始');
    return new Promise(async _0x30f25d => {
        var _0x4e7c1f = {
            'rypVW': function(_0x425ccd, _0x44eafb) {
                return _0x23238f['NQkoS'](_0x425ccd, _0x44eafb);
            },
            'XJcZs': function(_0x4c0a59) {
                return _0x23238f['FXWUD'](_0x4c0a59);
            }
        };
        $['get']({
            'url': 'http://jd.turinglabs.net/api/v2/jd/jxcfd/read/0/',
            'timeout': 0x2710
        }, (_0x5251db, _0x379b39, _0x3f93dd) => {
            try {
                if (_0x5251db) {
                    if (_0x23238f['mDkdY'](_0x23238f['afcNS'], _0x23238f['afcNS'])) {
                        console['log']('' + JSON['stringify'](_0x5251db));
                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                    } else {
                        try {
                            console['log']('\n超级助力(超级工人)结果:' + _0x3f93dd);
                            const {
                                sErrMsg,
                                iRet
                            } = JSON['parse'](_0x3f93dd);
                            if (_0x4e7c1f['rypVW'](iRet, 0x7d5) || _0x4e7c1f['rypVW'](iRet, 0x270f)) $['canHelp'] = ![];
                            console['log'](sErrMsg);
                        } catch (_0x457c10) {
                            $['logErr'](_0x457c10, _0x379b39);
                        } finally {
                            _0x4e7c1f['XJcZs'](_0x30f25d);
                        }
                    }
                } else {
                    if (_0x3f93dd) {
                        console['log']('随机取0个码放到您固定的互助码后面(不影响已有固定互助)');
                        _0x3f93dd = JSON['parse'](_0x3f93dd);
                    }
                }
            } catch (_0x2af4eb) {
                $['logErr'](_0x2af4eb, _0x379b39);
            } finally {
                _0x23238f['XPaqb'](_0x30f25d, _0x3f93dd);
            }
        });
        await $['wait'](0x2710);
        _0x23238f['FXWUD'](_0x30f25d);
    });
}

function shareCodesFormat() {
    var _0x52edf7 = {
        'eEOcl': function(_0x209c30, _0x2727fe) {
            return _0x209c30 - _0x2727fe;
        },
        'lWdAX': function(_0x1fa98d, _0x52e350) {
            return _0x1fa98d === _0x52e350;
        },
        'YABoo': 'FOzzE',
        'whnwB': function(_0x3f7e9f) {
            return _0x3f7e9f();
        },
        'ajdNL': function(_0x3e1ada, _0x249f05) {
            return _0x3e1ada === _0x249f05;
        },
        'kwCFs': 'F45CB4F07997DFE748E5656521A9034446A1568F6950206B0D44A5664662275D'
    };
    return new Promise(async _0x23f09c => {
        $['newShareCodes'] = [];
        if ($['shareCodesArr'][_0x52edf7['eEOcl']($['index'], 0x1)]) {
            $['newShareCodes'] = $['shareCodesArr'][_0x52edf7['eEOcl']($['index'], 0x1)]['split']('@');
        } else {
            if (_0x52edf7['lWdAX'](_0x52edf7['YABoo'], _0x52edf7['YABoo'])) {
                console['log']('由于您第' + $['index'] + '个京东账号未提供shareCode,将采纳本脚本自带的助力码\n');
                $['newShareCodes'] = $['strMyShareIds'];
            } else {
                console['log']('' + JSON['stringify'](err));
                console['log']($['name'] + ' API请求失败，请检查网路重试');
            }
        }
        const _0x4a0afc = await _0x52edf7['whnwB'](readShareCode);
        if (_0x4a0afc && _0x52edf7['ajdNL'](_0x4a0afc['code'], 0xc8)) {
            $['newShareCodes'] = [...new Set([...$['newShareCodes'], ...$['strMyShareIds'], _0x52edf7['kwCFs'], ..._0x4a0afc['data'] || []])];
        }
        console['log']('第' + $['index'] + '个京东账号将要助力的好友' + JSON['stringify']($['newShareCodes']));
        _0x52edf7['whnwB'](_0x23f09c);
    });
}

function requireConfig() {
    var _0x5228a5 = {
        'mJxMh': function(_0x68538a, _0x26deac) {
            return _0x68538a === _0x26deac;
        },
        'fFKzJ': 'GgWYG',
        'dlmTv': function(_0x24dd21, _0x25755d) {
            return _0x24dd21 !== _0x25755d;
        },
        'iffYe': 'AUwmi',
        'PnnML': 'OqGdk',
        'JIycC': function(_0x5eaa5f, _0xff9e67) {
            return _0x5eaa5f > _0xff9e67;
        },
        'JobSA': 'jd_jxCFD',
        'nUblT': function(_0x2a30d2) {
            return _0x2a30d2();
        }
    };
    return new Promise(_0x4edde4 => {
        console['log']('开始获取' + $['name'] + '配置文件\n');
        let _0x4a68d2 = [];
        if ($['isNode']() && process['env']['JDCFD_SHARECODES']) {
            if (_0x5228a5['dlmTv'](_0x5228a5['iffYe'], _0x5228a5['PnnML'])) {
                if (_0x5228a5['JIycC'](process['env']['JDCFD_SHARECODES']['indexOf']('\x0a'), -0x1)) {
                    _0x4a68d2 = process['env']['JDCFD_SHARECODES']['split']('\x0a');
                } else {
                    _0x4a68d2 = process['env']['JDCFD_SHARECODES']['split']('&');
                }
            } else {
                if (_0x4a68d2[item]) {
                    $['shareCodesArr']['push'](_0x4a68d2[item]);
                }
            }
        }
        $['shareCodesArr'] = [];
        if ($['isNode']()) {
            Object['keys'](_0x4a68d2)['forEach'](_0x1ec81f => {
                if (_0x5228a5['mJxMh'](_0x5228a5['fFKzJ'], _0x5228a5['fFKzJ'])) {
                    if (_0x4a68d2[_0x1ec81f]) {
                        $['shareCodesArr']['push'](_0x4a68d2[_0x1ec81f]);
                    }
                } else {
                    $['logErr'](e, resp);
                }
            });
        } else {
            if ($['getdata'](_0x5228a5['JobSA'])) $['shareCodesArr'] = $['getdata'](_0x5228a5['JobSA'])['split']('\x0a')['filter'](_0x46f19e => !!_0x46f19e);
            console['log']('\nBoxJs设置的京喜财富岛邀请码:' + $['getdata'](_0x5228a5['JobSA']) + '\x0a');
        }
        console['log']('您提供了' + $['shareCodesArr']['length'] + '个账号的' + $['name'] + '助力码\n');
        _0x5228a5['nUblT'](_0x4edde4);
    });
}

function jsonParse(_0x395531) {
    var _0x42f7c9 = {
        'EFQXL': function(_0x316618, _0x22884d) {
            return _0x316618(_0x22884d);
        },
        'MOUwy': function(_0x3498fc) {
            return _0x3498fc();
        },
        'HfyLY': function(_0x2ac16b, _0x15c8e9) {
            return _0x2ac16b == _0x15c8e9;
        },
        'NUNyu': 'string',
        'PwRTQ': function(_0xcecb98, _0xff015d) {
            return _0xcecb98 === _0xff015d;
        },
        'afHzi': 'ATzMa',
        'wlPvQ': 'jhVNO',
        'vFZDP': '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie'
    };
    if (_0x42f7c9['HfyLY'](typeof _0x395531, _0x42f7c9['NUNyu'])) {
        try {
            if (_0x42f7c9['PwRTQ'](_0x42f7c9['afHzi'], _0x42f7c9['wlPvQ'])) {
                try {
                    _0x42f7c9['EFQXL'](resolve, JSON['parse'](data));
                } catch (_0x2885ad) {} finally {
                    _0x42f7c9['MOUwy'](resolve);
                }
            } else {
                return JSON['parse'](_0x395531);
            }
        } catch (_0x410b3a) {
            console['log'](_0x410b3a);
            $['msg']($['name'], '', _0x42f7c9['vFZDP']);
            return [];
        }
    }
};
_0xodY = 'jsjiami.com.v6'
!function(n){"use strict";function t(n,t){var r=(65535&n)+(65535&t);return(n>>16)+(t>>16)+(r>>16)<<16|65535&r}function r(n,t){return n<<t|n>>>32-t}function e(n,e,o,u,c,f){return t(r(t(t(e,n),t(u,f)),c),o)}function o(n,t,r,o,u,c,f){return e(t&r|~t&o,n,t,u,c,f)}function u(n,t,r,o,u,c,f){return e(t&o|r&~o,n,t,u,c,f)}function c(n,t,r,o,u,c,f){return e(t^r^o,n,t,u,c,f)}function f(n,t,r,o,u,c,f){return e(r^(t|~o),n,t,u,c,f)}function i(n,r){n[r>>5]|=128<<r%32,n[14+(r+64>>>9<<4)]=r;var e,i,a,d,h,l=1732584193,g=-271733879,v=-1732584194,m=271733878;for(e=0;e<n.length;e+=16)i=l,a=g,d=v,h=m,g=f(g=f(g=f(g=f(g=c(g=c(g=c(g=c(g=u(g=u(g=u(g=u(g=o(g=o(g=o(g=o(g,v=o(v,m=o(m,l=o(l,g,v,m,n[e],7,-680876936),g,v,n[e+1],12,-389564586),l,g,n[e+2],17,606105819),m,l,n[e+3],22,-1044525330),v=o(v,m=o(m,l=o(l,g,v,m,n[e+4],7,-176418897),g,v,n[e+5],12,1200080426),l,g,n[e+6],17,-1473231341),m,l,n[e+7],22,-45705983),v=o(v,m=o(m,l=o(l,g,v,m,n[e+8],7,1770035416),g,v,n[e+9],12,-1958414417),l,g,n[e+10],17,-42063),m,l,n[e+11],22,-1990404162),v=o(v,m=o(m,l=o(l,g,v,m,n[e+12],7,1804603682),g,v,n[e+13],12,-40341101),l,g,n[e+14],17,-1502002290),m,l,n[e+15],22,1236535329),v=u(v,m=u(m,l=u(l,g,v,m,n[e+1],5,-165796510),g,v,n[e+6],9,-1069501632),l,g,n[e+11],14,643717713),m,l,n[e],20,-373897302),v=u(v,m=u(m,l=u(l,g,v,m,n[e+5],5,-701558691),g,v,n[e+10],9,38016083),l,g,n[e+15],14,-660478335),m,l,n[e+4],20,-405537848),v=u(v,m=u(m,l=u(l,g,v,m,n[e+9],5,568446438),g,v,n[e+14],9,-1019803690),l,g,n[e+3],14,-187363961),m,l,n[e+8],20,1163531501),v=u(v,m=u(m,l=u(l,g,v,m,n[e+13],5,-1444681467),g,v,n[e+2],9,-51403784),l,g,n[e+7],14,1735328473),m,l,n[e+12],20,-1926607734),v=c(v,m=c(m,l=c(l,g,v,m,n[e+5],4,-378558),g,v,n[e+8],11,-2022574463),l,g,n[e+11],16,1839030562),m,l,n[e+14],23,-35309556),v=c(v,m=c(m,l=c(l,g,v,m,n[e+1],4,-1530992060),g,v,n[e+4],11,1272893353),l,g,n[e+7],16,-155497632),m,l,n[e+10],23,-1094730640),v=c(v,m=c(m,l=c(l,g,v,m,n[e+13],4,681279174),g,v,n[e],11,-358537222),l,g,n[e+3],16,-722521979),m,l,n[e+6],23,76029189),v=c(v,m=c(m,l=c(l,g,v,m,n[e+9],4,-640364487),g,v,n[e+12],11,-421815835),l,g,n[e+15],16,530742520),m,l,n[e+2],23,-995338651),v=f(v,m=f(m,l=f(l,g,v,m,n[e],6,-198630844),g,v,n[e+7],10,1126891415),l,g,n[e+14],15,-1416354905),m,l,n[e+5],21,-57434055),v=f(v,m=f(m,l=f(l,g,v,m,n[e+12],6,1700485571),g,v,n[e+3],10,-1894986606),l,g,n[e+10],15,-1051523),m,l,n[e+1],21,-2054922799),v=f(v,m=f(m,l=f(l,g,v,m,n[e+8],6,1873313359),g,v,n[e+15],10,-30611744),l,g,n[e+6],15,-1560198380),m,l,n[e+13],21,1309151649),v=f(v,m=f(m,l=f(l,g,v,m,n[e+4],6,-145523070),g,v,n[e+11],10,-1120210379),l,g,n[e+2],15,718787259),m,l,n[e+9],21,-343485551),l=t(l,i),g=t(g,a),v=t(v,d),m=t(m,h);return[l,g,v,m]}function a(n){var t,r="",e=32*n.length;for(t=0;t<e;t+=8)r+=String.fromCharCode(n[t>>5]>>>t%32&255);return r}function d(n){var t,r=[];for(r[(n.length>>2)-1]=void 0,t=0;t<r.length;t+=1)r[t]=0;var e=8*n.length;for(t=0;t<e;t+=8)r[t>>5]|=(255&n.charCodeAt(t/8))<<t%32;return r}function h(n){return a(i(d(n),8*n.length))}function l(n,t){var r,e,o=d(n),u=[],c=[];for(u[15]=c[15]=void 0,o.length>16&&(o=i(o,8*n.length)),r=0;r<16;r+=1)u[r]=909522486^o[r],c[r]=1549556828^o[r];return e=i(u.concat(d(t)),512+8*t.length),a(i(c.concat(e),640))}function g(n){var t,r,e="";for(r=0;r<n.length;r+=1)t=n.charCodeAt(r),e+="0123456789abcdef".charAt(t>>>4&15)+"0123456789abcdef".charAt(15&t);return e}function v(n){return unescape(encodeURIComponent(n))}function m(n){return h(v(n))}function p(n){return g(m(n))}function s(n,t){return l(v(n),v(t))}function C(n,t){return g(s(n,t))}function A(n,t,r){return t?r?s(t,n):C(t,n):r?m(n):p(n)}$.md5=A}(this);
// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
