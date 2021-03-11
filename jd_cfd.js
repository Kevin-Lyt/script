/*
京喜财富岛
根据github@MoPoQAQ 财富岛脚本修改而来。无需京喜token,只需京东cookie即可.
cron 5 0,8,13,19 * * * jd_cfd.js
更新时间：2021-3-8
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
    Object['keys'](jdCookieNode)['forEach'](_0x182e7e => {
        cookiesArr['push'](jdCookieNode[_0x182e7e]);
    });
    if (process['env']['JD_DEBUG'] && process['env']['JD_DEBUG'] === 'false') console['log'] = () => {};
} else {
    cookiesArr = [$['getdata']('CookieJD'), $['getdata']('CookieJD2'), ...jsonParse($['getdata']('CookiesJD') || '[]')['map'](_0x57e0e9 => _0x57e0e9['cookie'])]['filter'](_0x6c7028 => !!_0x6c7028);
}!(async () => {
    var _0x4912ab = {
        'kJmQe': function(_0x4ae922) {
            return _0x4ae922();
        },
        'tuHzj': '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取',
        'vIuem': 'https://bean.m.jd.com/bean/signIndex.action',
        'sSicL': function(_0x43a0b1, _0x146998) {
            return _0x43a0b1(_0x146998);
        },
        'uCngS': 'http://adguard.mseweb.tk/shareCodes/cfd.json',
        'iLTxY': function(_0x284a4b, _0xade5f7) {
            return _0x284a4b < _0xade5f7;
        },
        'nEclZ': function(_0x28952a, _0x2245e5) {
            return _0x28952a(_0x2245e5);
        },
        'BeWhW': function(_0x1c16c7, _0xbe3278) {
            return _0x1c16c7 + _0xbe3278;
        },
        'lBkTF': function(_0x32ce6b) {
            return _0x32ce6b();
        },
        'qxeNL': function(_0x31e041) {
            return _0x31e041();
        },
        'bSmWU': function(_0x259387) {
            return _0x259387();
        }
    };
    await _0x4912ab['kJmQe'](requireConfig);
    if (!cookiesArr[0x0]) {
        $['msg']($['name'], _0x4912ab['tuHzj'], _0x4912ab['vIuem'], {
            'open-url': _0x4912ab['vIuem']
        });
        return;
    }
    let _0x24e973 = await _0x4912ab['kJmQe'](getAuthorShareCode),
        _0x6e554 = await _0x4912ab['sSicL'](getAuthorShareCode, _0x4912ab['uCngS']);
    $['strMyShareIds'] = [..._0x24e973 && _0x24e973['shareId'] || [], ..._0x6e554 && _0x6e554['shareId'] || []];
    $['strGroupIds'] = [..._0x24e973 && _0x24e973['strGroupIds'] || [], ..._0x6e554 && _0x6e554['strGroupIds'] || []];
    for (let _0x5f231b = 0x0; _0x4912ab['iLTxY'](_0x5f231b, cookiesArr['length']); _0x5f231b++) {
        if (cookiesArr[_0x5f231b]) {
            cookie = cookiesArr[_0x5f231b];
            $['UserName'] = _0x4912ab['nEclZ'](decodeURIComponent, cookie['match'](/pt_pin=(.+?);/) && cookie['match'](/pt_pin=(.+?);/)[0x1]);
            $['index'] = _0x4912ab['BeWhW'](_0x5f231b, 0x1);
            $['nickName'] = '';
            $['isLogin'] = !![];
            $['nickName'] = '';
            await _0x4912ab['kJmQe'](TotalBean);
            console['log']('\n开始【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']) + '\x0a');
            if (!$['isLogin']) {
                $['msg']($['name'], '【提示】cookie已失效', '京东账号' + $['index'] + ' ' + ($['nickName'] || $['UserName']) + '\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action', {
                    'open-url': _0x4912ab['vIuem']
                });
                if ($['isNode']()) {
                    await notify['sendNotify']($['name'] + 'cookie已失效 - ' + $['UserName'], '京东账号' + $['index'] + ' ' + $['UserName'] + '\n请重新登录获取cookie');
                }
                continue;
            }
            token = await _0x4912ab['lBkTF'](getJxToken);
            $['allTask'] = [];
            $['info'] = {};
            await _0x4912ab['qxeNL'](shareCodesFormat);
            await _0x4912ab['bSmWU'](cfd);
        }
    }
    await $['wait'](0x1f4);
    await _0x4912ab['bSmWU'](showMsg);
})()['catch'](_0x4e7b31 => $['logErr'](_0x4e7b31))['finally'](() => $['done']());

function helpFriend() {
    var _0x1c2790 = {
        'BZihj': function(_0x1bc57d) {
            return _0x1bc57d();
        },
        'ApbOq': function(_0xeadc6, _0x55a058) {
            return _0xeadc6(_0x55a058);
        },
        'sLMXw': function(_0x1ce64a, _0x3da1eb) {
            return _0x1ce64a !== _0x3da1eb;
        },
        'ibhAE': 'UYunS',
        'PzdXR': function(_0x48fde1, _0x123728) {
            return _0x48fde1 === _0x123728;
        },
        'aojcB': 'Lrspe',
        'DeVFE': function(_0x150cb5, _0x46f744) {
            return _0x150cb5(_0x46f744);
        },
        'irNtC': 'ajOjW',
        'eHFdW': function(_0x1bfa2c, _0x25bda4) {
            return _0x1bfa2c(_0x25bda4);
        },
        'FTsbp': function(_0xced039) {
            return _0xced039();
        }
    };
    return new Promise(async _0x4c33be => {
        var _0x13cd2e = {
            'MIMUA': function(_0x28d9dc) {
                return _0x1c2790['BZihj'](_0x28d9dc);
            },
            'FgofX': function(_0x3640c6, _0x37296a) {
                return _0x1c2790['ApbOq'](_0x3640c6, _0x37296a);
            }
        };
        if (_0x1c2790['sLMXw'](_0x1c2790['ibhAE'], _0x1c2790['ibhAE'])) {
            try {
                const {
                    ret,
                    data: {
                        userTaskStatusList = []
                    } = {},
                    msg
                } = JSON['parse'](data);
                $['allTask'] = userTaskStatusList['filter'](_0x18664a => _0x18664a['awardStatus'] !== 0x1);
                $['log']('\n获取【📆日常任务】列表 ' + msg + '，总共' + $['allTask']['length'] + '个任务！\n' + ($['showLog'] ? data : ''));
            } catch (_0x3bb573) {
                $['logErr'](_0x3bb573, resp);
            } finally {
                _0x13cd2e['MIMUA'](_0x4c33be);
            }
        } else {
            $['canHelp'] = !![];
            for (let _0x2928d of $['newShareCodes']['filter'](_0x473df9 => !!_0x473df9 && !_0x473df9['includes']('GroupId'))) {
                console['log']('去助力好友 ' + _0x2928d);
                if (token) {
                    if (_0x1c2790['PzdXR'](_0x1c2790['aojcB'], _0x1c2790['aojcB'])) {
                        await _0x1c2790['DeVFE'](createSuperAssistUser, _0x2928d);
                    } else {
                        $['logErr'](e, resp);
                    }
                } else {
                    if (_0x1c2790['PzdXR'](_0x1c2790['irNtC'], _0x1c2790['irNtC'])) {
                        console['log']('此账号的用户名为中文,暂不能进行超级主力\n');
                    } else {
                        _0x13cd2e['FgofX'](_0x4c33be, data);
                    }
                }
                await _0x1c2790['eHFdW'](createAssistUser, _0x2928d);
                await $['wait'](0x7d0);
                if (!$['canHelp']) break;
            }
            if (token) {
                $['canHelp'] = !![];
                for (let _0x1af420 of $['strGroupIds']) {
                    console['log']('去参加寻宝大作战' + _0x1af420);
                    await _0x1c2790['eHFdW'](joinGroup, _0x1af420);
                    await $['wait'](0x7d0);
                    if (!$['canHelp']) break;
                }
            }
            _0x1c2790['FTsbp'](_0x4c33be);
        }
    });
}
async function cfd() {
    var _0x2873a2 = {
        'cFakJ': function(_0x4330a3) {
            return _0x4330a3();
        },
        'SbXGP': function(_0x56750f, _0x4b0780) {
            return _0x56750f === _0x4b0780;
        },
        'MOcFU': 'JIBca',
        'dDmVm': 'ZjvPg',
        'MnSNg': function(_0x5337f9) {
            return _0x5337f9();
        },
        'krIvq': function(_0x5aac06, _0x1a882d) {
            return _0x5aac06(_0x1a882d);
        },
        'jbhnQ': function(_0x4942df) {
            return _0x4942df();
        },
        'rjFVX': function(_0x2a816e) {
            return _0x2a816e();
        },
        'PGgfM': function(_0x4b5a0b, _0x261bb6) {
            return _0x4b5a0b(_0x261bb6);
        },
        'jlAsX': function(_0x4a0c1d, _0x496329) {
            return _0x4a0c1d(_0x496329);
        },
        'INGmK': function(_0x32f237) {
            return _0x32f237();
        },
        'ILCHy': function(_0x5133c3, _0x45c32f) {
            return _0x5133c3(_0x45c32f);
        },
        'oDWtG': function(_0x140835, _0x3afcb3) {
            return _0x140835 - _0x3afcb3;
        },
        'nGQBV': function(_0x353923, _0x53e595) {
            return _0x353923 !== _0x53e595;
        },
        'jNBHa': 'LqrMP',
        'bxBMN': 'KMCGv'
    };
    try {
        if (_0x2873a2['SbXGP'](_0x2873a2['MOcFU'], _0x2873a2['dDmVm'])) {
            $['logErr'](e, resp);
        } else {
            const _0x1eefd7 = await _0x2873a2['cFakJ'](getUserInfo);
            await $['wait'](0x1f4);
            await _0x2873a2['cFakJ'](querySignList);
            await $['wait'](0x1f4);
            await _0x2873a2['MnSNg'](getMoney);
            await $['wait'](0x1f4);
            await _0x2873a2['krIvq'](getTaskList, 0x0);
            await $['wait'](0x1f4);
            await _0x2873a2['krIvq'](browserTask, 0x0);
            await $['wait'](0x1f4);
            await _0x2873a2['jbhnQ'](treasureHunt);
            await $['wait'](0x1f4);
            await _0x2873a2['rjFVX'](friendCircle);
            await $['wait'](0x1f4);
            await _0x2873a2['PGgfM'](getTaskList, 0x1);
            await $['wait'](0x1f4);
            await _0x2873a2['jlAsX'](browserTask, 0x1);
            await $['wait'](0x1f4);
            await _0x2873a2['rjFVX'](funCenterState);
            await $['wait'](0x1f4);
            await _0x2873a2['rjFVX'](openPeriodBox);
            await $['wait'](0x1f4);
            await _0x2873a2['INGmK'](submitGroupId);
            await $['wait'](0x1f4);
            const _0x7865cd = await _0x2873a2['ILCHy'](getUserInfo, ![]);
            console['log']('debug: 开始助力');
            await _0x2873a2['INGmK'](helpFriend);
            $['result']['push']('【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']), '【💵财富值】任务前: ' + _0x1eefd7['ddwMoney'] + '\n【💵财富值】任务后: ' + _0x7865cd['ddwMoney'], '【💵财富值】净增值: ' + _0x2873a2['oDWtG'](_0x7865cd['ddwMoney'], _0x1eefd7['ddwMoney']) + '\x0a');
        }
    } catch (_0xc67b0) {
        if (_0x2873a2['nGQBV'](_0x2873a2['jNBHa'], _0x2873a2['bxBMN'])) {
            $['logErr'](_0xc67b0);
        } else {
            _0x2873a2['cFakJ'](resolve);
        }
    }
}

function getAuthorShareCode(_0x3b8e2f = 'http://adguard.mseweb.tk/shareCodes/cfd.json') {
    var _0x3418e0 = {
        'cvgmg': function(_0x7be74c, _0x20a16d) {
            return _0x7be74c || _0x20a16d;
        },
        'NfIzU': function(_0x46a79f, _0x38b00b) {
            return _0x46a79f(_0x38b00b);
        },
        'PGkvx': function(_0x251a5f) {
            return _0x251a5f();
        },
        'BLJPE': function(_0x37a653, _0x8bc67c) {
            return _0x37a653 !== _0x8bc67c;
        },
        'KWncH': 'HbtHC',
        'GFUdt': 'ZzGeD',
        'LSeal': 'umBmj',
        'eiNVj': function(_0x250afb, _0x50a526) {
            return _0x250afb === _0x50a526;
        },
        'JZJNm': 'XJcoN',
        'TkzXc': 'vdBri',
        'vutiU': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/87.0.4280.88'
    };
    return new Promise(_0x5d04e7 => {
        if (_0x3418e0['eiNVj'](_0x3418e0['JZJNm'], _0x3418e0['TkzXc'])) {
            if (shareCodes[item]) {
                $['shareCodesArr']['push'](shareCodes[item]);
            }
        } else {
            $['get']({
                'url': _0x3b8e2f,
                'headers': {
                    'User-Agent': _0x3418e0['vutiU']
                }
            }, async (_0x5e0b62, _0x495c7d, _0x24e1a6) => {
                var _0x4c7633 = {
                    'qpLlF': function(_0x15b50b, _0x3a4a4c) {
                        return _0x3418e0['cvgmg'](_0x15b50b, _0x3a4a4c);
                    },
                    'EGLKx': function(_0x45efc7, _0x4940e4) {
                        return _0x3418e0['NfIzU'](_0x45efc7, _0x4940e4);
                    },
                    'fxKjC': function(_0x4df0e6) {
                        return _0x3418e0['PGkvx'](_0x4df0e6);
                    }
                };
                try {
                    if (_0x3418e0['BLJPE'](_0x3418e0['KWncH'], _0x3418e0['GFUdt'])) {
                        _0x3418e0['NfIzU'](_0x5d04e7, JSON['parse'](_0x24e1a6));
                    } else {
                        $['logErr'](e);
                    }
                } catch (_0x28f382) {} finally {
                    if (_0x3418e0['BLJPE'](_0x3418e0['LSeal'], _0x3418e0['LSeal'])) {
                        try {
                            const {
                                iRet,
                                dwExpericnce,
                                sErrMsg
                            } = JSON['parse'](_0x24e1a6);
                            $['log']('\x0a【' + place + '】🎁寻宝：' + sErrMsg + ' ，获取随机奖励：¥ ' + _0x4c7633['qpLlF'](dwExpericnce, 0x0) + ' \x0a' + ($['showLog'] ? _0x24e1a6 : ''));
                            _0x4c7633['EGLKx'](_0x5d04e7, iRet);
                        } catch (_0x11d102) {
                            $['logErr'](_0x11d102, _0x495c7d);
                        } finally {
                            _0x4c7633['fxKjC'](_0x5d04e7);
                        }
                    } else {
                        _0x3418e0['PGkvx'](_0x5d04e7);
                    }
                }
            });
        }
    });
}

function getJxToken() {
    var _0x2daf2b = {
        'gvGlW': function(_0x568b5b) {
            return _0x568b5b();
        },
        'WvjDJ': function(_0x363ec3, _0x38f23b) {
            return _0x363ec3 === _0x38f23b;
        },
        'lhZlY': 'TuDAL',
        'udoFT': 'aJhVp',
        'mlsww': 'abcdefghijklmnopqrstuvwxyz1234567890',
        'zlTON': function(_0x34ff19, _0x590711) {
            return _0x34ff19 < _0x590711;
        },
        'MynUY': function(_0xda761b, _0x213e7c) {
            return _0xda761b !== _0x213e7c;
        },
        'BlkkH': 'OMuDV',
        'tEndS': function(_0x55588c, _0x59b28b) {
            return _0x55588c(_0x59b28b);
        },
        'dahoB': function(_0x303bb4, _0x4ecef4) {
            return _0x303bb4 * _0x4ecef4;
        },
        'yqDxw': function(_0x2a37f8, _0x314ab3) {
            return _0x2a37f8(_0x314ab3);
        },
        'LcDpF': function(_0x5e4d3c, _0x298a03) {
            return _0x5e4d3c(_0x298a03);
        }
    };

    function _0x4fe0e5(_0x333cb3) {
        var _0xfb9a71 = {
            'vQMSA': function(_0x4fd1ad) {
                return _0x2daf2b['gvGlW'](_0x4fd1ad);
            }
        };
        if (_0x2daf2b['WvjDJ'](_0x2daf2b['lhZlY'], _0x2daf2b['udoFT'])) {
            _0xfb9a71['vQMSA'](resolve);
        } else {
            let _0x330bd7 = _0x2daf2b['mlsww'];
            let _0x5824ed = '';
            for (let _0x110063 = 0x0; _0x2daf2b['zlTON'](_0x110063, _0x333cb3); _0x110063++) {
                if (_0x2daf2b['MynUY'](_0x2daf2b['BlkkH'], _0x2daf2b['BlkkH'])) {
                    $['shareCodesArr']['push'](shareCodes[item]);
                } else {
                    _0x5824ed += _0x330bd7[_0x2daf2b['tEndS'](parseInt, _0x2daf2b['dahoB'](Math['random'](), _0x330bd7['length']))];
                }
            }
            return _0x5824ed;
        }
    }
    return new Promise(_0x33b730 => {
        let _0x3ad40f = _0x2daf2b['yqDxw'](_0x4fe0e5, 0x28);
        let _0x4057b2 = (+new Date())['toString']();
        if (!cookie['match'](/pt_pin=(.+?);/)) {
            console['log']('此账号cookie填写不规范,你的pt_pin=xxx后面没分号(;)\n');
            _0x2daf2b['LcDpF'](_0x33b730, null);
        }
        let _0xb607b = cookie['match'](/pt_pin=(.+?);/)[0x1];
        let _0xfee764 = $['md5']('' + _0x2daf2b['LcDpF'](decodeURIComponent, _0xb607b) + _0x4057b2 + _0x3ad40f + 'tPOamqCuk9NLgVPAljUyIHcPRmKlVxDy')['toString']();
        _0x2daf2b['LcDpF'](_0x33b730, {
            'timestamp': _0x4057b2,
            'phoneid': _0x3ad40f,
            'farm_jstoken': _0xfee764
        });
    });
}

function getUserInfo(_0x4590cb = !![]) {
    var _0x15f108 = {
        'hIHjV': function(_0x3589a1, _0x2773eb) {
            return _0x3589a1 !== _0x2773eb;
        },
        'vpxul': 'WZmPg',
        'DuDMq': 'ddwMoney',
        'nYIJF': function(_0x5c19b, _0x54ae53) {
            return _0x5c19b(_0x54ae53);
        },
        'diaBM': function(_0x2b7c5d, _0x41b909) {
            return _0x2b7c5d === _0x41b909;
        },
        'NFyaW': 'wBZIY',
        'GwkJX': 'cwkNQ',
        'BFWQq': function(_0x465257) {
            return _0x465257();
        },
        'msiAe': function(_0x2cd93e, _0x15a36b) {
            return _0x2cd93e(_0x15a36b);
        }
    };
    return new Promise(async _0x5cebf4 => {
        var _0x55a415 = {
            'BFsmq': function(_0x410b5a, _0x4d83ec) {
                return _0x15f108['hIHjV'](_0x410b5a, _0x4d83ec);
            },
            'IDlsd': _0x15f108['vpxul'],
            'qTTjH': _0x15f108['DuDMq'],
            'TEFTF': function(_0x4bc5f4, _0x398996) {
                return _0x15f108['nYIJF'](_0x4bc5f4, _0x398996);
            },
            'WvdTF': function(_0x2a6a20, _0x554b72) {
                return _0x15f108['diaBM'](_0x2a6a20, _0x554b72);
            },
            'Fnmma': _0x15f108['NFyaW'],
            'ZNQEp': _0x15f108['GwkJX'],
            'JLxgW': function(_0x23cc7f) {
                return _0x15f108['BFWQq'](_0x23cc7f);
            }
        };
        $['get'](_0x15f108['msiAe'](taskUrl, 'user/QueryUserInfo'), (_0xad816d, _0x26e387, _0x215404) => {
            if (_0x55a415['BFsmq'](_0x55a415['IDlsd'], _0x55a415['IDlsd'])) {
                $['logErr'](e, _0x26e387);
            } else {
                try {
                    _0x215404 = JSON['parse'](_0x215404);
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
                    } = _0x215404;
                    $['log']('\n获取用户信息：' + sErrMsg + '\x0a' + ($['showLog'] ? _0x215404 : ''));
                    $['log']('\n当前等级:' + dwLevel + ',财富值:' + _0x215404[_0x55a415['qTTjH']] + '\x0a');
                    if (_0x4590cb) {
                        console['log']('财富岛好友互助码每次运行都变化,旧的可继续使用');
                        $['log']('\n【京东账号' + $['index'] + '（' + $['nickName'] + '）的' + $['name'] + '好友互助码】' + strMyShareId + '\x0a\x0a');
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
                    _0x55a415['TEFTF'](_0x5cebf4, {
                        'SceneList': SceneList,
                        'XBDetail': XBDetail,
                        'dwXBRemainCnt': dwXBRemainCnt,
                        'ddwMoney': ddwMoney,
                        'dwIsNewUser': dwIsNewUser,
                        'strMyShareId': strMyShareId,
                        'strPin': strPin
                    });
                } catch (_0x3eb35e) {
                    $['logErr'](_0x3eb35e, _0x26e387);
                } finally {
                    if (_0x55a415['WvdTF'](_0x55a415['Fnmma'], _0x55a415['ZNQEp'])) {
                        $['logErr'](e, _0x26e387);
                    } else {
                        _0x55a415['JLxgW'](_0x5cebf4);
                    }
                }
            }
        });
    });
}

function querySignList() {
    var _0x18e61d = {
        'DFSDU': function(_0x2d7c91) {
            return _0x2d7c91();
        },
        'QEiMZ': function(_0x36ac22) {
            return _0x36ac22();
        },
        'NIxAf': function(_0x2bf468, _0x14c3ec) {
            return _0x2bf468 || _0x14c3ec;
        },
        'cMNAo': function(_0x4cab6b, _0x30408d) {
            return _0x4cab6b === _0x30408d;
        },
        'ZIDKI': function(_0x27d5ea, _0x2302a1) {
            return _0x27d5ea !== _0x2302a1;
        },
        'VyLNd': 'ydHet',
        'Yhjkm': 'TvRjK',
        'gPact': function(_0x4a8255, _0x41bc5a, _0x1b12d9) {
            return _0x4a8255(_0x41bc5a, _0x1b12d9);
        },
        'dEsvV': function(_0x560344, _0x94d9e0) {
            return _0x560344 === _0x94d9e0;
        },
        'hLFcH': 'Fzpbd',
        'IpByC': function(_0x276135, _0x4cbf70) {
            return _0x276135 === _0x4cbf70;
        },
        'kPtYz': 'ChzDc',
        'jQYUN': function(_0x22cf13, _0x435c96) {
            return _0x22cf13 === _0x435c96;
        },
        'yejCh': 'WdwRH',
        'SNGzC': function(_0x53e481, _0x350645) {
            return _0x53e481(_0x350645);
        }
    };
    return new Promise(async _0x51e7ff => {
        var _0x2e626d = {
            'uxMbi': function(_0x2f6850) {
                return _0x18e61d['QEiMZ'](_0x2f6850);
            },
            'dtUcz': function(_0x33fae2, _0x4a3831) {
                return _0x18e61d['NIxAf'](_0x33fae2, _0x4a3831);
            },
            'dFQAk': function(_0x3d1fe9, _0x22a236) {
                return _0x18e61d['cMNAo'](_0x3d1fe9, _0x22a236);
            },
            'ahQJM': function(_0x103e4d, _0x47cc0a) {
                return _0x18e61d['ZIDKI'](_0x103e4d, _0x47cc0a);
            },
            'aItyg': _0x18e61d['VyLNd'],
            'JEsBN': _0x18e61d['Yhjkm'],
            'jlRYL': function(_0x552605, _0x3765b9, _0x5099ac) {
                return _0x18e61d['gPact'](_0x552605, _0x3765b9, _0x5099ac);
            },
            'zLvYA': function(_0x4e3cab, _0x1de41a) {
                return _0x18e61d['dEsvV'](_0x4e3cab, _0x1de41a);
            },
            'zqnbA': _0x18e61d['hLFcH'],
            'zyszt': function(_0x5baae8, _0xfc393d) {
                return _0x18e61d['IpByC'](_0x5baae8, _0xfc393d);
            },
            'lQNca': _0x18e61d['kPtYz'],
            'zjums': function(_0x27c42c) {
                return _0x18e61d['QEiMZ'](_0x27c42c);
            }
        };
        if (_0x18e61d['jQYUN'](_0x18e61d['yejCh'], _0x18e61d['yejCh'])) {
            $['get'](_0x18e61d['SNGzC'](taskUrl, 'task/QuerySignListV2'), async (_0x337c5d, _0x540c31, _0x5ade34) => {
                try {
                    const {
                        iRet,
                        sData: {
                            Sign = [{}],
                            dwUserFlag
                        },
                        sErrMsg
                    } = JSON['parse'](_0x5ade34);
                    $['log']('\n签到列表：' + sErrMsg + '\x0a' + ($['showLog'] ? _0x5ade34 : ''));
                    const [{
                        dwStatus,
                        ddwMoney
                    }] = Sign['filter'](_0x3dbb27 => _0x3dbb27['dwShowFlag'] === 0x1);
                    if (_0x2e626d['dFQAk'](dwStatus, 0x0)) {
                        if (_0x2e626d['ahQJM'](_0x2e626d['aItyg'], _0x2e626d['JEsBN'])) {
                            await _0x2e626d['jlRYL'](userSignReward, dwUserFlag, ddwMoney);
                        } else {
                            $['logErr'](e, _0x540c31);
                        }
                    } else {
                        if (_0x2e626d['zLvYA'](_0x2e626d['zqnbA'], _0x2e626d['zqnbA'])) {
                            $['log']('\n📌签到：你今日已签到过啦，请明天再来');
                        } else {
                            _0x2e626d['uxMbi'](_0x51e7ff);
                        }
                    }
                } catch (_0x53317c) {
                    $['logErr'](_0x53317c, _0x540c31);
                } finally {
                    if (_0x2e626d['zyszt'](_0x2e626d['lQNca'], _0x2e626d['lQNca'])) {
                        _0x2e626d['zjums'](_0x51e7ff);
                    } else {
                        const {
                            iRet,
                            sData: {
                                ddwMoney
                            },
                            sErrMsg
                        } = JSON['parse'](_0x5ade34);
                        $['log']('\n📌签到：' + sErrMsg + '，获得财富 ¥ ' + _0x2e626d['dtUcz'](ddwMoney, 0x0) + '\x0a' + ($['showLog'] ? _0x5ade34 : ''));
                    }
                }
            });
        } else {
            _0x18e61d['DFSDU'](_0x51e7ff);
        }
    });
}
async function userSignReward(_0xe4ff5a, _0x264253) {
    var _0x2a7eef = {
        'pCAJP': function(_0x874df3) {
            return _0x874df3();
        },
        'nRsqe': function(_0x503ded, _0x5c9657) {
            return _0x503ded !== _0x5c9657;
        },
        'Gbzsz': 'EUGbA',
        'MTQDE': function(_0x5c8361, _0x50ed66) {
            return _0x5c8361 || _0x50ed66;
        },
        'pGeqK': function(_0x2d81fa, _0x4d3f48, _0x7bc25b) {
            return _0x2d81fa(_0x4d3f48, _0x7bc25b);
        }
    };
    return new Promise(async _0x43143f => {
        var _0x1124c0 = {
            'ZpiIc': function(_0x4710e9) {
                return _0x2a7eef['pCAJP'](_0x4710e9);
            },
            'RUJSK': function(_0x7720ab, _0x2eab46) {
                return _0x2a7eef['nRsqe'](_0x7720ab, _0x2eab46);
            },
            'IBHAo': _0x2a7eef['Gbzsz'],
            'kDjFt': function(_0x155611, _0x10fb54) {
                return _0x2a7eef['MTQDE'](_0x155611, _0x10fb54);
            }
        };
        $['get'](_0x2a7eef['pGeqK'](taskUrl, 'task/UserSignRewardV2', 'dwReqUserFlag=' + _0xe4ff5a + '&ddwMoney=' + _0x264253), async (_0x1a81cd, _0x5a98d9, _0x4dbcfb) => {
            var _0x771820 = {
                'HZPru': function(_0x3b86ab) {
                    return _0x1124c0['ZpiIc'](_0x3b86ab);
                }
            };
            try {
                if (_0x1124c0['RUJSK'](_0x1124c0['IBHAo'], _0x1124c0['IBHAo'])) {
                    _0x771820['HZPru'](_0x43143f);
                } else {
                    const {
                        iRet,
                        sData: {
                            ddwMoney
                        },
                        sErrMsg
                    } = JSON['parse'](_0x4dbcfb);
                    $['log']('\n📌签到：' + sErrMsg + '，获得财富 ¥ ' + _0x1124c0['kDjFt'](ddwMoney, 0x0) + '\x0a' + ($['showLog'] ? _0x4dbcfb : ''));
                }
            } catch (_0x38ab90) {
                $['logErr'](_0x38ab90, _0x5a98d9);
            } finally {
                _0x1124c0['ZpiIc'](_0x43143f);
            }
        });
    });
}

function getMoney() {
    var _0x3b2fbc = {
        'wIXvU': function(_0xd6aa2f) {
            return _0xd6aa2f();
        },
        'icYQN': '1001',
        'JBUXn': '1002',
        'MFfgF': '1003',
        'iLmum': function(_0x387c5e, _0x162473) {
            return _0x387c5e === _0x162473;
        },
        'VCpFR': function(_0x49ae82, _0x520e7b) {
            return _0x49ae82 >= _0x520e7b;
        },
        'dujlp': function(_0x108ea2, _0x121642) {
            return _0x108ea2(_0x121642);
        },
        'TCcdq': function(_0x19bfef, _0xd29563) {
            return _0x19bfef(_0xd29563);
        },
        'oQcfb': function(_0x21e63e, _0x502d3b, _0x25c1fa) {
            return _0x21e63e(_0x502d3b, _0x25c1fa);
        },
        'yTeMP': function(_0x3a7d5f, _0x1269cb) {
            return _0x3a7d5f + _0x1269cb;
        },
        'IPArZ': function(_0x124c3a, _0x2ed4f7) {
            return _0x124c3a + _0x2ed4f7;
        },
        'AmJTW': function(_0x149dd4, _0x386b48) {
            return _0x149dd4 !== _0x386b48;
        },
        'bqNkd': function(_0x549414, _0x2426f0) {
            return _0x549414 === _0x2426f0;
        },
        'xJRZG': 'qSWdv',
        'CeGrA': 'LICKL',
        'tfhGN': function(_0x5202ea, _0x7df544, _0x4b9e43, _0x557ec0) {
            return _0x5202ea(_0x7df544, _0x4b9e43, _0x557ec0);
        },
        'OMWIy': function(_0x598bb8, _0x36926b) {
            return _0x598bb8(_0x36926b);
        },
        'MxdoG': function(_0x274e5e) {
            return _0x274e5e();
        }
    };
    return new Promise(async _0x17f2d8 => {
        let _0x469e30 = $['info']['SceneList'];
        let _0x1744af = [],
            _0x45a5fb = [_0x3b2fbc['icYQN'], _0x3b2fbc['JBUXn'], _0x3b2fbc['MFfgF']];
        _0x1744af = Object['keys'](_0x469e30);
        _0x1744af = _0x45a5fb['filter'](_0x34b99d => _0x1744af['every'](_0x5e607d => _0x34b99d !== _0x5e607d));
        console['log']('待开通场景ID列表sceneList;' + JSON['stringify'](_0x1744af));
        for (let _0x91ddc7 of _0x1744af) {
            if (_0x3b2fbc['iLmum'](_0x91ddc7, _0x3b2fbc['JBUXn']) && _0x3b2fbc['VCpFR']($['info']['dwLevel'], 0xb)) await _0x3b2fbc['dujlp'](activeScene, _0x91ddc7);
            if (_0x3b2fbc['iLmum'](_0x91ddc7, _0x3b2fbc['MFfgF']) && _0x3b2fbc['VCpFR']($['info']['dwLevel'], 0x1a)) await _0x3b2fbc['TCcdq'](activeScene, _0x91ddc7);
        }
        for (var _0x3fefb5 of Object['keys']($['info']['SceneList'])) {
            try {
                await $['wait'](0x1f4);
                await _0x3b2fbc['oQcfb'](getMoney_dwSource_1, _0x3fefb5, _0x469e30);
                const _0x16aa2c = _0x3b2fbc['TCcdq'](eval, _0x3b2fbc['yTeMP'](_0x3b2fbc['IPArZ']('(', JSON['stringify'](_0x469e30[_0x3fefb5]['EmployeeList'])), ')'));
                if (_0x3b2fbc['AmJTW'](_0x16aa2c, '')) {
                    if (_0x3b2fbc['bqNkd'](_0x3b2fbc['xJRZG'], _0x3b2fbc['xJRZG'])) {
                        for (var _0x40519 of Object['keys'](_0x16aa2c)) {
                            if (_0x3b2fbc['bqNkd'](_0x3b2fbc['CeGrA'], _0x3b2fbc['CeGrA'])) {
                                await $['wait'](0x1f4);
                                await _0x3b2fbc['tfhGN'](getMoney_dwSource_2, _0x3fefb5, _0x469e30, _0x40519);
                            } else {
                                _0x3b2fbc['wIXvU'](_0x17f2d8);
                            }
                        }
                    } else {
                        $['logErr'](e, resp);
                    }
                }
                await $['wait'](0x1f4);
                if (token) await _0x3b2fbc['oQcfb'](getMoney_dwSource_3, _0x3fefb5, _0x469e30);
                await _0x3b2fbc['OMWIy'](employeeAward, _0x3fefb5);
            } catch (_0x4b0560) {
                $['logErr'](_0x4b0560, resp);
            } finally {
                _0x3b2fbc['MxdoG'](_0x17f2d8);
            }
        }
    });
}

function getMoney_dwSource_1(_0x13f712, _0x2f6090) {
    var _0x52891a = {
        'WxGpS': function(_0x2d237a, _0x4ea575) {
            return _0x2d237a === _0x4ea575;
        },
        'yziSG': 'KELij',
        'ZksHC': 'wNfHz',
        'STqAl': function(_0x24be27, _0xcaf879) {
            return _0x24be27 == _0xcaf879;
        },
        'cMsMs': 'success',
        'JIUaW': function(_0x410be6, _0x1e654c) {
            return _0x410be6 || _0x1e654c;
        },
        'fXTdf': function(_0xfcc4bb, _0x39ebd4) {
            return _0xfcc4bb === _0x39ebd4;
        },
        'Zfpmq': 'VIrAQ',
        'milyZ': function(_0x132faf) {
            return _0x132faf();
        },
        'jTSlG': function(_0xe74139, _0x29ccef, _0x203f3d) {
            return _0xe74139(_0x29ccef, _0x203f3d);
        }
    };
    return new Promise(async _0x298c31 => {
        var _0x78a0b6 = {
            'wMTYc': function(_0x114c30, _0x3d84f6) {
                return _0x52891a['WxGpS'](_0x114c30, _0x3d84f6);
            },
            'ChutC': _0x52891a['yziSG'],
            'qBKNA': _0x52891a['ZksHC'],
            'zTTkS': function(_0x227834, _0x597030) {
                return _0x52891a['STqAl'](_0x227834, _0x597030);
            },
            'xBmDs': _0x52891a['cMsMs'],
            'CGknw': function(_0x97bb83, _0xadd1b8) {
                return _0x52891a['JIUaW'](_0x97bb83, _0xadd1b8);
            },
            'XouGy': function(_0x28d473, _0xdaa929) {
                return _0x52891a['fXTdf'](_0x28d473, _0xdaa929);
            },
            'vltjC': _0x52891a['Zfpmq'],
            'mmxmW': function(_0x813a4e) {
                return _0x52891a['milyZ'](_0x813a4e);
            }
        };
        $['get'](_0x52891a['jTSlG'](taskUrl, 'user/GetMoney', 'dwSceneId=' + _0x13f712 + '&strEmployeeId=undefined&dwSource=1'), async (_0x55a7ed, _0x4c08ef, _0x881c5f) => {
            if (_0x78a0b6['wMTYc'](_0x78a0b6['ChutC'], _0x78a0b6['qBKNA'])) {
                console['log']('开通场景结果:' + _0x881c5f + '\x0a');
            } else {
                try {
                    const {
                        iRet,
                        dwMoney,
                        sErrMsg
                    } = JSON['parse'](_0x881c5f);
                    $['log']('\x0a【' + _0x2f6090[_0x13f712]['strSceneName'] + '】🏝岛主 : ' + (_0x78a0b6['zTTkS'](sErrMsg, _0x78a0b6['xBmDs']) ? '获取财富值：¥ ' + _0x78a0b6['CGknw'](dwMoney, 0x0) : sErrMsg) + ' \x0a' + ($['showLog'] ? _0x881c5f : ''));
                } catch (_0x5ee291) {
                    if (_0x78a0b6['XouGy'](_0x78a0b6['vltjC'], _0x78a0b6['vltjC'])) {
                        $['logErr'](_0x5ee291, _0x4c08ef);
                    } else {
                        $['logErr'](_0x5ee291, _0x4c08ef);
                    }
                } finally {
                    _0x78a0b6['mmxmW'](_0x298c31);
                }
            }
        });
    });
}

function getMoney_dwSource_2(_0x42cd94, _0x3856b7, _0x3e06cc) {
    var _0x1c1e85 = {
        'QfHTC': function(_0x168757, _0x5658d4) {
            return _0x168757 == _0x5658d4;
        },
        'vkzzu': 'success',
        'ijhXi': function(_0x27afcc, _0x56c26a) {
            return _0x27afcc || _0x56c26a;
        },
        'vJKnm': function(_0x28ecab, _0x44a019) {
            return _0x28ecab !== _0x44a019;
        },
        'zQtAE': 'CYTLG',
        'GAIar': function(_0x4f3ce2, _0x1bf145) {
            return _0x4f3ce2 === _0x1bf145;
        },
        'ygSIE': 'TBNKt',
        'rgISV': function(_0x45bc73) {
            return _0x45bc73();
        },
        'zBOwW': function(_0x1d5e89, _0x3093c4, _0x4d8cca) {
            return _0x1d5e89(_0x3093c4, _0x4d8cca);
        }
    };
    return new Promise(async _0x1cf41d => {
        var _0x130d05 = {
            'hWxlP': function(_0x2e534e, _0x1a1979) {
                return _0x1c1e85['QfHTC'](_0x2e534e, _0x1a1979);
            },
            'CwQnb': _0x1c1e85['vkzzu'],
            'TJNOi': function(_0x2d27e5, _0x3d649a) {
                return _0x1c1e85['ijhXi'](_0x2d27e5, _0x3d649a);
            },
            'cwTkE': function(_0x525a15, _0x2606a9) {
                return _0x1c1e85['vJKnm'](_0x525a15, _0x2606a9);
            },
            'gWjXg': _0x1c1e85['zQtAE'],
            'kvGdW': function(_0x10cee9, _0xfe8fb1) {
                return _0x1c1e85['GAIar'](_0x10cee9, _0xfe8fb1);
            },
            'WMdmf': _0x1c1e85['ygSIE'],
            'wpSgA': function(_0x54d28a) {
                return _0x1c1e85['rgISV'](_0x54d28a);
            }
        };
        $['get'](_0x1c1e85['zBOwW'](taskUrl, 'user/GetMoney', 'dwSceneId=' + _0x42cd94 + '&strEmployeeId=' + _0x3e06cc + '&dwSource=2'), async (_0x394297, _0x1e9790, _0x3141ce) => {
            try {
                const {
                    dwMoney,
                    iRet,
                    sErrMsg,
                    strPin
                } = JSON['parse'](_0x3141ce);
                $['log']('\x0a【' + _0x3856b7[_0x42cd94]['strSceneName'] + '】👬好友: ' + (_0x130d05['hWxlP'](sErrMsg, _0x130d05['CwQnb']) ? '获取普通助力财富值：¥ ' + _0x130d05['TJNOi'](dwMoney, 0x0) : sErrMsg) + ' \x0a' + ($['showLog'] ? _0x3141ce : ''));
            } catch (_0x3b5e89) {
                if (_0x130d05['cwTkE'](_0x130d05['gWjXg'], _0x130d05['gWjXg'])) {
                    return JSON['parse'](str);
                } else {
                    $['logErr'](_0x3b5e89, _0x1e9790);
                }
            } finally {
                if (_0x130d05['kvGdW'](_0x130d05['WMdmf'], _0x130d05['WMdmf'])) {
                    _0x130d05['wpSgA'](_0x1cf41d);
                } else {
                    console['log'](JSON['stringify'](_0x3141ce) + ',退出');
                    return;
                }
            }
        });
    });
}

function getMoney_dwSource_3(_0x5f24ec, _0x1ecdde) {
    var _0x2ca7f3 = {
        'skyCo': function(_0x3e63d7, _0x634349) {
            return _0x3e63d7 !== _0x634349;
        },
        'kjanp': 'VrlUd',
        'wFsmc': 'CTrOt',
        'xYXlA': function(_0x26dc79, _0x5b598b) {
            return _0x26dc79 == _0x5b598b;
        },
        'gxrBV': 'success',
        'vbCan': function(_0x51a0d3, _0x117b2e) {
            return _0x51a0d3 || _0x117b2e;
        },
        'TnjvE': function(_0x5ef410) {
            return _0x5ef410();
        },
        'rhYPQ': function(_0x239f2b, _0x302320, _0x325ddd) {
            return _0x239f2b(_0x302320, _0x325ddd);
        },
        'RYRAK': 'timestamp',
        'RJBXd': 'phoneid',
        'lnLxy': 'farm_jstoken'
    };
    return new Promise(async _0x3b47df => {
        $['get'](_0x2ca7f3['rhYPQ'](taskUrl, 'user/GetMoney', 'dwSceneId=' + _0x5f24ec + '&strEmployeeId=&dwSource=3&strPgtimestamp=' + token[_0x2ca7f3['RYRAK']] + '&strPhoneID=' + token[_0x2ca7f3['RJBXd']] + '&strPgUUNum=' + token[_0x2ca7f3['lnLxy']]), async (_0x66b35c, _0x43591d, _0x563123) => {
            try {
                if (_0x2ca7f3['skyCo'](_0x2ca7f3['kjanp'], _0x2ca7f3['wFsmc'])) {
                    const {
                        iRet,
                        dwMoney,
                        sErrMsg,
                        strPin
                    } = JSON['parse'](_0x563123);
                    $['log']('\x0a【' + _0x1ecdde[_0x5f24ec]['strSceneName'] + '】👬好友: ' + (_0x2ca7f3['xYXlA'](sErrMsg, _0x2ca7f3['gxrBV']) ? '获取超级助力财富值：¥ ' + _0x2ca7f3['vbCan'](dwMoney, 0x0) : sErrMsg) + ' \x0a' + ($['showLog'] ? _0x563123 : ''));
                } else {
                    $['logErr'](e, _0x43591d);
                }
            } catch (_0x2cf1b1) {
                $['logErr'](_0x2cf1b1, _0x43591d);
            } finally {
                _0x2ca7f3['TnjvE'](_0x3b47df);
            }
        });
    });
}

function employeeAward(_0x41e9e3) {
    var _0x4f72e9 = {
        'cctWX': function(_0xc5fff, _0x4a78ad) {
            return _0xc5fff === _0x4a78ad;
        },
        'ZpVUb': '1001',
        'bMOIG': 'strName',
        'OxCUv': '1002',
        'Ibrdj': '1003',
        'JOeBF': function(_0x483cb6, _0x10d8ba) {
            return _0x483cb6 !== _0x10d8ba;
        },
        'AgVbV': function(_0x46d888, _0x968e94) {
            return _0x46d888 * _0x968e94;
        },
        'mvySG': function(_0x526679, _0x18ef79) {
            return _0x526679(_0x18ef79);
        },
        'zsHGC': function(_0x44c538, _0x2f3fc9) {
            return _0x44c538 === _0x2f3fc9;
        },
        'UfDod': 'EjKat',
        'IwSKI': 'wDEnn',
        'jxYqQ': function(_0xe3e01) {
            return _0xe3e01();
        },
        'FmbdQ': function(_0x391096) {
            return _0x391096();
        },
        'loWRr': function(_0x3c3e2f, _0x1d75d7) {
            return _0x3c3e2f === _0x1d75d7;
        },
        'fMBoG': 'IerON',
        'zLuCb': 'm.jingxi.com',
        'SZgmM': '*/*',
        'ZVDEd': 'jdpingou;iPad;4.2.2;14.4;network/wifi;Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
        'kjaWG': 'zh-cn',
        'nUFjl': 'https://st.jingxi.com/fortune_island/index.html?ptag=7155.9.47'
    };
    return new Promise(async _0x2aa663 => {
        var _0x408a06 = {
            'VTXiv': function(_0x15a522) {
                return _0x4f72e9['FmbdQ'](_0x15a522);
            }
        };
        if (_0x4f72e9['loWRr'](_0x4f72e9['fMBoG'], _0x4f72e9['fMBoG'])) {
            const _0x4c0fd9 = {
                'url': 'https://m.jingxi.com/jxcfd/user/AdvEmployeeAward?strZone=jxcfd&bizCode=jxcfd&source=jxcfd&dwEnv=7&_cfd_t=' + +new Date() + '&ptag=138631.26.55&dwSenceId=' + _0x41e9e3 + '&_=' + +new Date() + '&_stk=_cfd_t,bizCode,dwEnv,dwSenceId,ptag,source,strZone&h5st=20210304120622242;6980827292145544;10009;tk01wb8321c0ea8nNjg0a1JqVUlvqre776hbVd8Unm3xaodPUoxF6qk2nu5+3BL0+M/NCPfMBRDekvWYG0otooxd4ZA9;3a499b12485ae55f84ace34682b6bececd1e74be6ae82d880877f9e1c861d7d9&sceneval=2&g_login_type=1',
                'headers': {
                    'Host': _0x4f72e9['zLuCb'],
                    'accept': _0x4f72e9['SZgmM'],
                    'user-agent': _0x4f72e9['ZVDEd'],
                    'accept-language': _0x4f72e9['kjaWG'],
                    'referer': _0x4f72e9['nUFjl'],
                    'Cookie': cookie
                }
            };
            $['get'](_0x4c0fd9, async (_0x590f7b, _0x343ee8, _0x18ad23) => {
                try {
                    const {
                        iRet,
                        sErrMsg,
                        strAwardDetail
                    } = JSON['parse'](_0x18ad23);
                    if (_0x4f72e9['cctWX'](iRet, 0x0)) {
                        switch (_0x41e9e3) {
                            case _0x4f72e9['ZpVUb']:
                                console['log']('【欢乐牧场】获得 ' + strAwardDetail[_0x4f72e9['bMOIG']] + ' 红包');
                                break;
                            case _0x4f72e9['OxCUv']:
                                console['log']('【便利店】获得 ' + strAwardDetail[_0x4f72e9['bMOIG']] + ' 红包');
                                break;
                            case _0x4f72e9['Ibrdj']:
                                console['log']('【京喜餐厅】获得 ' + strAwardDetail[_0x4f72e9['bMOIG']] + ' 红包');
                                break;
                            default:
                                console['log']('【未知场景】获得 ' + strAwardDetail[_0x4f72e9['bMOIG']] + ' 红包');
                        }
                    } else {
                        switch (_0x41e9e3) {
                            case _0x4f72e9['ZpVUb']:
                                console['log']('【欢乐牧场领取红包】 ' + sErrMsg);
                                break;
                            case _0x4f72e9['OxCUv']:
                                console['log']('【便利店领取红包】' + sErrMsg);
                                break;
                            case _0x4f72e9['Ibrdj']:
                                console['log']('【京喜餐厅领取红包】' + sErrMsg);
                                break;
                            default:
                                console['log']('【未知场景领取红包】' + sErrMsg);
                        }
                    }
                    if (_0x4f72e9['JOeBF'](iRet, 0x0)) {
                        console['log'](JSON['stringify'](_0x18ad23) + ',退出');
                        return;
                    }
                    await $['wait'](_0x4f72e9['AgVbV'](0x2, 0x3e8));
                    await _0x4f72e9['mvySG'](employeeAward, _0x41e9e3);
                } catch (_0x2733f6) {
                    if (_0x4f72e9['zsHGC'](_0x4f72e9['UfDod'], _0x4f72e9['IwSKI'])) {
                        $['logErr'](_0x2733f6, _0x343ee8);
                    } else {
                        $['logErr'](_0x2733f6, _0x343ee8);
                    }
                } finally {
                    _0x4f72e9['jxYqQ'](_0x2aa663);
                }
            });
        } else {
            _0x408a06['VTXiv'](_0x2aa663);
        }
    });
}

function friendCircle() {
    var _0x5c7b92 = {
        'sVBqG': function(_0x5b3cb5, _0xb839e9) {
            return _0x5b3cb5 === _0xb839e9;
        },
        'IzweM': function(_0x2dfadf) {
            return _0x2dfadf();
        },
        'RAnlL': function(_0x24bb3b, _0x887ff3) {
            return _0x24bb3b(_0x887ff3);
        },
        'ynibi': function(_0x1ed1c2, _0x4b55a0) {
            return _0x1ed1c2 != _0x4b55a0;
        },
        'ojqzx': '未中奖',
        'mAMtE': function(_0x407831, _0x5737d1) {
            return _0x407831 !== _0x5737d1;
        },
        'BmVWk': 'TXScv',
        'QiTmI': function(_0x4ec744, _0x5e387b) {
            return _0x4ec744 > _0x5e387b;
        },
        'CKrXB': function(_0x1427bb, _0x33cf69) {
            return _0x1427bb(_0x33cf69);
        },
        'SAGGV': 'RdpKm',
        'jMjNn': 'naFED',
        'McQHW': 'siwpP',
        'RdTNL': function(_0x3f93e6) {
            return _0x3f93e6();
        },
        'ivGBP': function(_0x4e9694, _0x38d6b9, _0x35dc0e) {
            return _0x4e9694(_0x38d6b9, _0x35dc0e);
        }
    };
    return new Promise(async _0x1d3b98 => {
        var _0x14fc95 = {
            'thiQx': function(_0xd297b0, _0x82e197) {
                return _0x5c7b92['sVBqG'](_0xd297b0, _0x82e197);
            },
            'xTSTB': function(_0x909dda) {
                return _0x5c7b92['IzweM'](_0x909dda);
            },
            'VJNbK': function(_0x261951, _0x2cd737) {
                return _0x5c7b92['RAnlL'](_0x261951, _0x2cd737);
            },
            'Fthxf': function(_0x1b61c0, _0x24f027) {
                return _0x5c7b92['ynibi'](_0x1b61c0, _0x24f027);
            },
            'XDdHU': _0x5c7b92['ojqzx'],
            'qGwYA': function(_0x3b7183, _0x316ad1) {
                return _0x5c7b92['mAMtE'](_0x3b7183, _0x316ad1);
            },
            'DBsDA': _0x5c7b92['BmVWk'],
            'Eemex': function(_0x2e8229, _0x4e0f5c) {
                return _0x5c7b92['QiTmI'](_0x2e8229, _0x4e0f5c);
            },
            'CBPUZ': function(_0x2076c6, _0x35eab6) {
                return _0x5c7b92['CKrXB'](_0x2076c6, _0x35eab6);
            },
            'rLBGY': function(_0x5e0bba, _0xd46e03) {
                return _0x5c7b92['mAMtE'](_0x5e0bba, _0xd46e03);
            },
            'ZhsbX': _0x5c7b92['SAGGV'],
            'NRMjU': _0x5c7b92['jMjNn'],
            'GRdyf': _0x5c7b92['McQHW'],
            'JUiJk': function(_0xadd319) {
                return _0x5c7b92['RdTNL'](_0xadd319);
            }
        };
        $['get'](_0x5c7b92['ivGBP'](taskUrl, 'user/FriendCircle', 'dwPageIndex=1&dwPageSize=20'), async (_0x3599c8, _0x37687c, _0x7f8b47) => {
            var _0x3ae878 = {
                'JIQrN': function(_0x3dbb63, _0x2b744a) {
                    return _0x14fc95['Fthxf'](_0x3dbb63, _0x2b744a);
                },
                'sMyHF': _0x14fc95['XDdHU']
            };
            try {
                if (_0x14fc95['qGwYA'](_0x14fc95['DBsDA'], _0x14fc95['DBsDA'])) {
                    try {
                        const {
                            sErrMsg,
                            iRet
                        } = JSON['parse'](_0x7f8b47);
                        if (_0x14fc95['thiQx'](iRet, 0x7d5) || _0x14fc95['thiQx'](iRet, 0x270f)) $['canHelp'] = ![];
                        $['log']('' + sErrMsg);
                    } catch (_0x9b003d) {
                        $['logErr'](_0x9b003d, _0x37687c);
                    } finally {
                        _0x14fc95['xTSTB'](_0x1d3b98);
                    }
                } else {
                    const {
                        MomentList = [], iRet, sErrMsg, strShareId
                    } = JSON['parse'](_0x7f8b47);
                    for (moment of MomentList) {
                        if (_0x14fc95['qGwYA'](moment['strShareId'], strShareId) && _0x14fc95['Eemex'](moment['dwAccessMoney'], 0x0)) {
                            await _0x14fc95['CBPUZ'](queryFriendIsland, moment['strShareId']);
                            await $['wait'](0x1f4);
                        }
                    }
                }
            } catch (_0x2d0c10) {
                if (_0x14fc95['rLBGY'](_0x14fc95['ZhsbX'], _0x14fc95['ZhsbX'])) {
                    const {
                        iRet,
                        sErrMsg,
                        strAwardPoolName
                    } = JSON['parse'](_0x7f8b47);
                    $['log']('\n【抽奖结果】🎰 ' + (_0x3ae878['JIQrN'](strAwardPoolName, '') ? _0x3ae878['sMyHF'] : strAwardPoolName) + ' \x0a' + ($['showLog'] ? _0x7f8b47 : ''));
                } else {
                    $['logErr'](_0x2d0c10, _0x37687c);
                }
            } finally {
                if (_0x14fc95['thiQx'](_0x14fc95['NRMjU'], _0x14fc95['GRdyf'])) {
                    _0x14fc95['VJNbK'](_0x1d3b98, ![]);
                    $['log']('\x0a' + taskName + '【做日常任务】： mission success');
                    return;
                } else {
                    _0x14fc95['JUiJk'](_0x1d3b98);
                }
            }
        });
    });
}

function queryFriendIsland(_0x5eef24) {
    var _0x50fbc2 = {
        'esihB': function(_0x2ade05, _0x58e79a) {
            return _0x2ade05 !== _0x58e79a;
        },
        'bqfOp': 'pMvHp',
        'AQjCU': 'MqijF',
        'wUjzF': function(_0x4628cb, _0xfbc024) {
            return _0x4628cb === _0xfbc024;
        },
        'ggzhz': 'ENLfM',
        'dTNXX': function(_0xe0c213, _0x381f69) {
            return _0xe0c213 === _0x381f69;
        },
        'mhSCT': 'success',
        'vbXND': 'KvFmb',
        'DmOaY': 'yNkXb',
        'pWtXM': function(_0x3439f3, _0x4f5e99) {
            return _0x3439f3(_0x4f5e99);
        },
        'ZTSFS': function(_0x5edb66, _0x30ec27) {
            return _0x5edb66 + _0x30ec27;
        },
        'jXblH': function(_0x3118eb, _0x2f5b00) {
            return _0x3118eb + _0x2f5b00;
        },
        'bTONR': function(_0x1d5f29, _0x429bcc, _0x1e3175, _0x20e2f2, _0x178236) {
            return _0x1d5f29(_0x429bcc, _0x1e3175, _0x20e2f2, _0x178236);
        },
        'CtnMH': function(_0x277109, _0x2056d0) {
            return _0x277109 !== _0x2056d0;
        },
        'pcEcM': 'hffcp',
        'WmOdt': 'ZZjvY',
        'APCvW': 'NEZOR',
        'niaIZ': function(_0x17733a) {
            return _0x17733a();
        },
        'zvKcY': function(_0x41338c) {
            return _0x41338c();
        },
        'iObPX': function(_0x325678, _0xbb157a) {
            return _0x325678(_0xbb157a);
        },
        'jBCnt': function(_0x1db13c) {
            return _0x1db13c();
        },
        'vVvKh': function(_0x5c2e79, _0x4942b7) {
            return _0x5c2e79 != _0x4942b7;
        },
        'sFlYS': '未中奖',
        'exNRD': 'BuRjj',
        'nxsol': 'VdlNV',
        'sIKNC': function(_0x342e1e, _0x1f0dac, _0x3dbd7a) {
            return _0x342e1e(_0x1f0dac, _0x3dbd7a);
        }
    };
    return new Promise(async _0x47a931 => {
        var _0x2f1c26 = {
            'wvwLV': function(_0x50b1ae) {
                return _0x50fbc2['zvKcY'](_0x50b1ae);
            },
            'mGKYt': function(_0x53ef81) {
                return _0x50fbc2['zvKcY'](_0x53ef81);
            },
            'XybGE': function(_0x4feb95, _0x5cf263) {
                return _0x50fbc2['iObPX'](_0x4feb95, _0x5cf263);
            },
            'iFxqI': function(_0x4e59e5) {
                return _0x50fbc2['jBCnt'](_0x4e59e5);
            },
            'XYdWd': function(_0x4664ee, _0x2ee2ca) {
                return _0x50fbc2['vVvKh'](_0x4664ee, _0x2ee2ca);
            },
            'UJmmA': _0x50fbc2['sFlYS']
        };
        if (_0x50fbc2['CtnMH'](_0x50fbc2['exNRD'], _0x50fbc2['nxsol'])) {
            $['get'](_0x50fbc2['sIKNC'](taskUrl, 'user/QueryFriendIsland', 'strShareId=' + _0x5eef24 + '&sceneval=2'), async (_0xadc9a7, _0x558551, _0x2e6593) => {
                if (_0x50fbc2['esihB'](_0x50fbc2['bqfOp'], _0x50fbc2['AQjCU'])) {
                    try {
                        if (_0x50fbc2['wUjzF'](_0x50fbc2['ggzhz'], _0x50fbc2['ggzhz'])) {
                            const {
                                SceneList = {}, dwStealMoney, sErrMsg, strFriendNick
                            } = JSON['parse'](_0x2e6593);
                            if (_0x50fbc2['dTNXX'](sErrMsg, _0x50fbc2['mhSCT'])) {
                                if (_0x50fbc2['dTNXX'](_0x50fbc2['vbXND'], _0x50fbc2['DmOaY'])) {
                                    shareCodes = process['env']['JDCFD_SHARECODES']['split']('&');
                                } else {
                                    const _0x417fc6 = _0x50fbc2['pWtXM'](eval, _0x50fbc2['ZTSFS'](_0x50fbc2['jXblH']('(', JSON['stringify'](SceneList)), ')'));
                                    const _0x31af72 = Object['keys'](SceneList);
                                    for (sceneId of _0x31af72) {
                                        await _0x50fbc2['bTONR'](stealMoney, _0x5eef24, sceneId, strFriendNick, _0x417fc6[sceneId]['strSceneName']);
                                        await $['wait'](0x1f4);
                                    }
                                }
                            }
                        } else {
                            _0x2f1c26['wvwLV'](_0x47a931);
                        }
                    } catch (_0x592f8b) {
                        if (_0x50fbc2['CtnMH'](_0x50fbc2['pcEcM'], _0x50fbc2['WmOdt'])) {
                            $['logErr'](_0x592f8b, _0x558551);
                        } else {
                            _0x2f1c26['mGKYt'](_0x47a931);
                        }
                    } finally {
                        if (_0x50fbc2['dTNXX'](_0x50fbc2['APCvW'], _0x50fbc2['APCvW'])) {
                            _0x50fbc2['niaIZ'](_0x47a931);
                        } else {
                            try {
                                _0x2f1c26['XybGE'](_0x47a931, JSON['parse'](_0x2e6593));
                            } catch (_0x39e07e) {} finally {
                                _0x2f1c26['iFxqI'](_0x47a931);
                            }
                        }
                    }
                } else {
                    try {
                        const {
                            iRet,
                            sErrMsg,
                            strAwardPoolName
                        } = JSON['parse'](_0x2e6593);
                        $['log']('\n【抽奖结果】🎰 ' + (_0x2f1c26['XYdWd'](strAwardPoolName, '') ? _0x2f1c26['UJmmA'] : strAwardPoolName) + ' \x0a' + ($['showLog'] ? _0x2e6593 : ''));
                    } catch (_0x5362b9) {
                        $['logErr'](_0x5362b9, _0x558551);
                    } finally {
                        _0x2f1c26['iFxqI'](_0x47a931);
                    }
                }
            });
        } else {
            $['logErr'](e, resp);
        }
    });
}

function stealMoney(_0x25a0d0, _0x25bc5e, _0x1c54c4, _0xd5c54) {
    var _0x91272d = {
        'DiLMG': function(_0x1a5885, _0x20c07a) {
            return _0x1a5885 !== _0x20c07a;
        },
        'NBYUk': '活动太火爆了',
        'zVLBM': '任务进行中或者未到任务时间',
        'axmyJ': function(_0x52fdbd, _0x30d333) {
            return _0x52fdbd(_0x30d333);
        },
        'RLzvX': function(_0x2e376c, _0x2b372d) {
            return _0x2e376c === _0x2b372d;
        },
        'HLejB': function(_0x4e175f) {
            return _0x4e175f();
        },
        'LyhuO': 'MlojT',
        'wMgNl': function(_0x17ac38, _0x514eac, _0x1968f1) {
            return _0x17ac38(_0x514eac, _0x1968f1);
        }
    };
    return new Promise(async _0x2b94c4 => {
        var _0x27491e = {
            'DecJM': function(_0x40ace8, _0x127e24) {
                return _0x91272d['DiLMG'](_0x40ace8, _0x127e24);
            },
            'SGzLk': _0x91272d['NBYUk'],
            'GoYUY': _0x91272d['zVLBM'],
            'yvphV': function(_0x88f79f, _0x2b26d3) {
                return _0x91272d['axmyJ'](_0x88f79f, _0x2b26d3);
            },
            'LgoOs': function(_0x228908, _0x1bfb48) {
                return _0x91272d['RLzvX'](_0x228908, _0x1bfb48);
            },
            'pjDUM': function(_0xe8fabc) {
                return _0x91272d['HLejB'](_0xe8fabc);
            },
            'BQdxT': _0x91272d['LyhuO']
        };
        $['get'](_0x91272d['wMgNl'](taskUrl, 'user/StealMoney', 'strFriendId=' + _0x25a0d0 + '&dwSceneId=' + _0x25bc5e + '&sceneval=2'), async (_0x4adb08, _0x289ad0, _0x3739be) => {
            if (_0x27491e['DecJM'](_0x27491e['BQdxT'], _0x27491e['BQdxT'])) {
                try {
                    const {
                        msg,
                        ret
                    } = JSON['parse'](_0x3739be);
                    $['log']('\x0a' + taskName + '【做日常任务】：' + (_0x27491e['DecJM'](msg['indexOf'](_0x27491e['SGzLk']), -0x1) ? _0x27491e['GoYUY'] : msg) + '\x0a' + ($['showLog'] ? _0x3739be : ''));
                    _0x27491e['yvphV'](_0x2b94c4, _0x27491e['LgoOs'](ret, 0x0));
                } catch (_0x5e02ea) {
                    $['logErr'](_0x5e02ea, _0x289ad0);
                } finally {
                    _0x27491e['pjDUM'](_0x2b94c4);
                }
            } else {
                try {
                    const {
                        dwGetMoney,
                        iRet,
                        sErrMsg
                    } = JSON['parse'](_0x3739be);
                    $['log']('\n🤏偷取好友【' + _0x1c54c4 + '】【' + _0xd5c54 + '】财富值：¥ ' + (dwGetMoney ? dwGetMoney : sErrMsg) + '\x0a' + ($['showLog'] ? _0x3739be : ''));
                } catch (_0x195c83) {
                    $['logErr'](_0x195c83, _0x289ad0);
                } finally {
                    _0x27491e['pjDUM'](_0x2b94c4);
                }
            }
        });
    });
}
async function treasureHunt() {
    var _0x3ca3c6 = {
        'dgOAm': function(_0x1faa14) {
            return _0x1faa14();
        },
        'jMVDf': function(_0x1f8e8b, _0x4220e1) {
            return _0x1f8e8b === _0x4220e1;
        },
        'isAzh': function(_0x44e7b7, _0x2a3a0a) {
            return _0x44e7b7 > _0x2a3a0a;
        },
        'UEXvV': function(_0x56de3f, _0x4dbcc6) {
            return _0x56de3f < _0x4dbcc6;
        },
        'jtkYT': function(_0x3a9bc1, _0x206283) {
            return _0x3a9bc1 / _0x206283;
        },
        'yaqpd': 'zBTPc',
        'PshLg': 'RNWDt',
        'iDTEz': function(_0x595cbe, _0x309ec1) {
            return _0x595cbe(_0x309ec1);
        },
        'ITbWR': function(_0x1d9aaa, _0xe4611e) {
            return _0x1d9aaa === _0xe4611e;
        },
        'hFxfD': 'gbggn'
    };
    if (_0x3ca3c6['isAzh']($['info']['dwXBRemainCnt'], 0x0)) {
        const _0x2b5ef7 = $['info']['XBDetail'];
        for (let _0x3350a6 = 0x0; _0x3ca3c6['UEXvV'](_0x3350a6, _0x2b5ef7['length']); _0x3350a6++) {
            const {
                ddwColdEndTm,
                strIndex
            } = _0x2b5ef7[_0x3350a6];
            const _0x55cf43 = Math['round'](_0x3ca3c6['jtkYT'](new Date(), 0x3e8));
            if (_0x3ca3c6['isAzh'](_0x55cf43, ddwColdEndTm)) {
                if (_0x3ca3c6['jMVDf'](_0x3ca3c6['yaqpd'], _0x3ca3c6['PshLg'])) {
                    _0x3ca3c6['dgOAm'](resolve);
                } else {
                    await _0x3ca3c6['iDTEz'](doTreasureHunt, strIndex);
                    await $['wait'](0xbb8);
                }
            } else {
                if (_0x3ca3c6['ITbWR'](_0x3ca3c6['hFxfD'], _0x3ca3c6['hFxfD'])) {
                    $['log']('\n🎁寻宝：宝藏冷却中，请等待冷却完毕');
                } else {
                    console['log']('\n普通助力(招工)结果:' + data);
                    const {
                        iRet
                    } = JSON['parse'](data);
                    if (_0x3ca3c6['jMVDf'](iRet, 0x7d5) || _0x3ca3c6['jMVDf'](iRet, 0x270f)) $['canHelp'] = ![];
                }
            }
        }
    } else {
        $['log']('\n🎁寻宝：寻宝次数不足');
    }
}

function doTreasureHunt(_0x51c8ab) {
    var _0x4920fa = {
        'zeSIH': function(_0x457524, _0x4d6fd7) {
            return _0x457524 == _0x4d6fd7;
        },
        'NmQBV': 'success',
        'AsksN': function(_0x2e230a, _0x2ee4a4) {
            return _0x2e230a || _0x2ee4a4;
        },
        'EhbLW': function(_0x1b3ed4, _0x55405d) {
            return _0x1b3ed4(_0x55405d);
        },
        'UIAqb': function(_0x325cde, _0x5cc0d0) {
            return _0x325cde !== _0x5cc0d0;
        },
        'tCnlP': 'jXPLa',
        'Wsfou': 'yogHD',
        'rVDpn': function(_0x1b9064) {
            return _0x1b9064();
        },
        'WUGXe': function(_0xd92b1c, _0x5b42b0, _0xd05d90) {
            return _0xd92b1c(_0x5b42b0, _0xd05d90);
        }
    };
    return new Promise(async _0x5e53a5 => {
        var _0x3310d2 = {
            'jjyKP': function(_0x2738c0, _0x5e4a33) {
                return _0x4920fa['zeSIH'](_0x2738c0, _0x5e4a33);
            },
            'TGnSO': _0x4920fa['NmQBV'],
            'bvdNS': function(_0x27d363, _0x5811f4) {
                return _0x4920fa['AsksN'](_0x27d363, _0x5811f4);
            },
            'SdLIX': function(_0x164829, _0x5cf0a8) {
                return _0x4920fa['EhbLW'](_0x164829, _0x5cf0a8);
            },
            'GjvoX': function(_0x599a43, _0x3deb83) {
                return _0x4920fa['UIAqb'](_0x599a43, _0x3deb83);
            },
            'WDgRo': _0x4920fa['tCnlP'],
            'fjwto': _0x4920fa['Wsfou'],
            'GmCKz': function(_0x20e589) {
                return _0x4920fa['rVDpn'](_0x20e589);
            }
        };
        $['get'](_0x4920fa['WUGXe'](taskUrl, 'consume/TreasureHunt', 'strIndex=' + _0x51c8ab + '&dwIsShare=0'), async (_0x475aa5, _0x24cedb, _0x36bcf1) => {
            try {
                const {
                    iRet,
                    dwExpericnce,
                    sErrMsg
                } = JSON['parse'](_0x36bcf1);
                $['log']('\x0a【' + _0x51c8ab + '】🎁寻宝：' + sErrMsg + ' ，获取随机奖励：¥ ' + _0x3310d2['bvdNS'](dwExpericnce, 0x0) + ' \x0a' + ($['showLog'] ? _0x36bcf1 : ''));
                _0x3310d2['SdLIX'](_0x5e53a5, iRet);
            } catch (_0x30eb74) {
                if (_0x3310d2['GjvoX'](_0x3310d2['WDgRo'], _0x3310d2['fjwto'])) {
                    $['logErr'](_0x30eb74, _0x24cedb);
                } else {
                    const {
                        dwMoney,
                        iRet,
                        sErrMsg
                    } = JSON['parse'](_0x36bcf1);
                    $['log']('\n【🏝寻宝大作战】【' + strBrandName + '】开宝箱：' + (_0x3310d2['jjyKP'](sErrMsg, _0x3310d2['TGnSO']) ? ' 获得财富值 ¥ ' + dwMoney : sErrMsg) + '\x0a' + ($['showLog'] ? _0x36bcf1 : ''));
                }
            } finally {
                _0x3310d2['GmCKz'](_0x5e53a5);
            }
        });
    });
}

function getTaskList(_0x39a4f8) {
    var _0xea6cc3 = {
        'bIfjG': function(_0x6c6bfa) {
            return _0x6c6bfa();
        },
        'Msgmb': function(_0x6d40d8) {
            return _0x6d40d8();
        },
        'uZcDP': function(_0x1679af, _0x122012) {
            return _0x1679af !== _0x122012;
        },
        'ANxmR': 'tROsH',
        'cBRAB': function(_0x43b5e3, _0x313f7c) {
            return _0x43b5e3(_0x313f7c);
        },
        'YQhnG': 'GetUserTaskStatusList',
        'pEeeP': function(_0x5bd126, _0x1bf9f3) {
            return _0x5bd126(_0x1bf9f3);
        },
        'QgMzr': 'consume/AchieveInfo'
    };
    return new Promise(async _0x9b0388 => {
        var _0x4aca9c = {
            'HpzLa': function(_0x4601a1) {
                return _0xea6cc3['Msgmb'](_0x4601a1);
            }
        };
        if (_0xea6cc3['uZcDP'](_0xea6cc3['ANxmR'], _0xea6cc3['ANxmR'])) {
            $['log']('\x0a' + taskinfo['strTaskDescr'] + '【领成就奖励】：该成就任务未达到门槛}');
        } else {
            switch (_0x39a4f8) {
                case 0x0:
                    $['get'](_0xea6cc3['cBRAB'](taskListUrl, _0xea6cc3['YQhnG']), async (_0x1a1261, _0x4fcbcf, _0x4ba114) => {
                        try {
                            const {
                                ret,
                                data: {
                                    userTaskStatusList = []
                                } = {},
                                msg
                            } = JSON['parse'](_0x4ba114);
                            $['allTask'] = userTaskStatusList['filter'](_0x38f9be => _0x38f9be['awardStatus'] !== 0x1);
                            $['log']('\n获取【📆日常任务】列表 ' + msg + '，总共' + $['allTask']['length'] + '个任务！\n' + ($['showLog'] ? _0x4ba114 : ''));
                        } catch (_0x123cc1) {
                            $['logErr'](_0x123cc1, _0x4fcbcf);
                        } finally {
                            _0xea6cc3['bIfjG'](_0x9b0388);
                        }
                    });
                    break;
                case 0x1:
                    $['get'](_0xea6cc3['pEeeP'](taskUrl, _0xea6cc3['QgMzr']), async (_0x55e4d8, _0x3e70ae, _0xa32aac) => {
                        try {
                            const {
                                iRet,
                                sErrMsg,
                                taskinfo = []
                            } = JSON['parse'](_0xa32aac);
                            $['allTask'] = taskinfo['filter'](_0x57005c => _0x57005c['dwAwardStatus'] === 0x1);
                            $['log']('\n获取【🎖成就任务】列表 ' + sErrMsg + '，总共' + $['allTask']['length'] + '个任务！\n' + ($['showLog'] ? _0xa32aac : ''));
                        } catch (_0xe83b9a) {
                            $['logErr'](_0xe83b9a, _0x3e70ae);
                        } finally {
                            _0x4aca9c['HpzLa'](_0x9b0388);
                        }
                    });
                    break;
                default:
                    break;
            }
        }
    });
}

function browserTask(_0x1c3e32) {
    var _0x1b8e19 = {
        'UqZHW': function(_0x3c237e) {
            return _0x3c237e();
        },
        'Phrtj': function(_0xf598d3, _0x3ad85f) {
            return _0xf598d3 == _0x3ad85f;
        },
        'otagV': 'success',
        'xUcSO': function(_0x11b60f, _0x48a431) {
            return _0x11b60f || _0x48a431;
        },
        'sEdSQ': function(_0x2c7446, _0x464f9e) {
            return _0x2c7446 - _0x464f9e;
        },
        'MEVDC': function(_0x23d4e, _0x4b4235) {
            return _0x23d4e !== _0x4b4235;
        },
        'bfTxX': 'GpTBK',
        'wEMVC': function(_0x1a8090, _0xc55a9c) {
            return _0x1a8090 < _0xc55a9c;
        },
        'eIOJy': function(_0x52b6ea, _0x418575) {
            return _0x52b6ea + _0x418575;
        },
        'owqKV': function(_0x531f3b, _0x3928b5) {
            return _0x531f3b < _0x3928b5;
        },
        'gHONl': function(_0x39f08f, _0x519cb8) {
            return _0x39f08f === _0x519cb8;
        },
        'CclEo': 'LthxG',
        'PQNYr': 'FgUiz',
        'RiwRx': function(_0x4b40d1, _0x2fa84a) {
            return _0x4b40d1(_0x2fa84a);
        },
        'ZTCnI': 'CvKAv',
        'qjQEF': 'DEeuw',
        'pXdoJ': function(_0x206d73, _0x40a71f, _0x4378b3) {
            return _0x206d73(_0x40a71f, _0x4378b3);
        },
        'IYYoz': function(_0x402766, _0x4a6629) {
            return _0x402766 !== _0x4a6629;
        },
        'RVBdJ': 'GHmOD',
        'exQat': 'DgapV',
        'PvJFW': function(_0x1ebddf, _0x593b93) {
            return _0x1ebddf < _0x593b93;
        },
        'JNZGR': 'MzHiU',
        'GlCQO': function(_0x4f5966, _0x5537d1) {
            return _0x4f5966 === _0x5537d1;
        },
        'YHQNb': 'ghpve',
        'EweCq': 'ZtiIO',
        'QJGOX': function(_0x3ec7c7, _0x3c271e, _0x14734f) {
            return _0x3ec7c7(_0x3c271e, _0x14734f);
        }
    };
    return new Promise(async _0x5afcaa => {
        var _0x5dab0e = {
            'PROMn': function(_0x324efa) {
                return _0x1b8e19['UqZHW'](_0x324efa);
            },
            'mMQzI': function(_0x8bf9e4, _0x47982f) {
                return _0x1b8e19['Phrtj'](_0x8bf9e4, _0x47982f);
            },
            'vsJFI': _0x1b8e19['otagV'],
            'qaDPx': function(_0x555fae, _0x3691ff) {
                return _0x1b8e19['xUcSO'](_0x555fae, _0x3691ff);
            },
            'muZZg': function(_0x2f24e7, _0x30f54a) {
                return _0x1b8e19['sEdSQ'](_0x2f24e7, _0x30f54a);
            }
        };
        if (_0x1b8e19['MEVDC'](_0x1b8e19['bfTxX'], _0x1b8e19['bfTxX'])) {
            $['logErr'](e, resp);
        } else {
            switch (_0x1c3e32) {
                case 0x0:
                    const _0x4b5c4f = Math['max'](...[...$['allTask']]['map'](_0x100bf1 => _0x100bf1['configTargetTimes']));
                    for (let _0x16a7a3 = 0x0; _0x1b8e19['wEMVC'](_0x16a7a3, $['allTask']['length']); _0x16a7a3++) {
                        const _0x1815ec = $['allTask'][_0x16a7a3];
                        $['log']('\n开始第' + _0x1b8e19['eIOJy'](_0x16a7a3, 0x1) + '个【📆日常任务】：' + _0x1815ec['taskName']);
                        const _0x1897f9 = [!![], !![]];
                        for (let _0x16a7a3 = 0x0; _0x1b8e19['owqKV'](_0x16a7a3, _0x4b5c4f); _0x16a7a3++) {
                            await $['wait'](0x1f4);
                            if (_0x1897f9[0x0]) {
                                if (_0x1b8e19['gHONl'](_0x1b8e19['CclEo'], _0x1b8e19['PQNYr'])) {
                                    _0x5dab0e['PROMn'](_0x5afcaa);
                                } else {
                                    _0x1897f9[0x0] = await _0x1b8e19['RiwRx'](doTask, _0x1815ec);
                                }
                            }
                            await $['wait'](0x1f4);
                            if (_0x1897f9[0x1]) {
                                if (_0x1b8e19['MEVDC'](_0x1b8e19['ZTCnI'], _0x1b8e19['qjQEF'])) {
                                    _0x1897f9[0x1] = await _0x1b8e19['pXdoJ'](awardTask, 0x0, _0x1815ec);
                                } else {
                                    _0x1b8e19['UqZHW'](_0x5afcaa);
                                }
                            }
                            if (!_0x1897f9[0x0] && !_0x1897f9[0x1]) {
                                if (_0x1b8e19['IYYoz'](_0x1b8e19['RVBdJ'], _0x1b8e19['exQat'])) {
                                    break;
                                } else {
                                    console['log']('京东服务器返回空数据');
                                }
                            }
                        }
                        $['log']('\n结束第' + _0x1b8e19['eIOJy'](_0x16a7a3, 0x1) + '个【📆日常任务】：' + _0x1815ec['taskName'] + '\x0a');
                    }
                    break;
                case 0x1:
                    for (let _0x15117c = 0x0; _0x1b8e19['PvJFW'](_0x15117c, $['allTask']['length']); _0x15117c++) {
                        if (_0x1b8e19['IYYoz'](_0x1b8e19['JNZGR'], _0x1b8e19['JNZGR'])) {
                            console['log']('随机取0个码放到您固定的互助码后面(不影响已有固定互助)');
                            data = JSON['parse'](data);
                        } else {
                            const _0x1815ec = $['allTask'][_0x15117c];
                            $['log']('\n开始第' + _0x1b8e19['eIOJy'](_0x15117c, 0x1) + '个【🎖成就任务】：' + _0x1815ec['strTaskDescr']);
                            if (_0x1b8e19['GlCQO'](_0x1815ec['dwAwardStatus'], '0')) {
                                if (_0x1b8e19['GlCQO'](_0x1b8e19['YHQNb'], _0x1b8e19['YHQNb'])) {
                                    $['log']('\x0a' + _0x1815ec['strTaskDescr'] + '【领成就奖励】：该成就任务未达到门槛}');
                                } else {
                                    try {
                                        const {
                                            iRet,
                                            dwMoney,
                                            sErrMsg,
                                            strPin
                                        } = JSON['parse'](data);
                                        $['log']('\x0a【' + sceneList[_key]['strSceneName'] + '】👬好友: ' + (_0x5dab0e['mMQzI'](sErrMsg, _0x5dab0e['vsJFI']) ? '获取超级助力财富值：¥ ' + _0x5dab0e['qaDPx'](dwMoney, 0x0) : sErrMsg) + ' \x0a' + ($['showLog'] ? data : ''));
                                    } catch (_0x31789c) {
                                        $['logErr'](_0x31789c, resp);
                                    } finally {
                                        _0x5dab0e['PROMn'](_0x5afcaa);
                                    }
                                }
                            } else {
                                if (_0x1b8e19['IYYoz'](_0x1b8e19['EweCq'], _0x1b8e19['EweCq'])) {
                                    $['newShareCodes'] = $['shareCodesArr'][_0x5dab0e['muZZg']($['index'], 0x1)]['split']('@');
                                } else {
                                    await $['wait'](0x1f4);
                                    await _0x1b8e19['QJGOX'](awardTask, 0x1, _0x1815ec);
                                }
                            }
                            $['log']('\n结束第' + _0x1b8e19['eIOJy'](_0x15117c, 0x1) + '个【🎖成就任务】：' + _0x1815ec['strTaskDescr'] + '\x0a');
                        }
                    }
                    break;
                default:
                    break;
            }
            _0x1b8e19['UqZHW'](_0x5afcaa);
        }
    });
}

function doTask(_0x5ceb16) {
    var _0x35b4ff = {
        'TWNjX': function(_0x2de92b, _0xa53b5) {
            return _0x2de92b !== _0xa53b5;
        },
        'hJYql': '活动太火爆了',
        'ZbUPY': '任务进行中或者未到任务时间',
        'ySXrI': function(_0xffe102, _0x41b755) {
            return _0xffe102(_0x41b755);
        },
        'YYaLt': function(_0x43c9b2, _0x26955d) {
            return _0x43c9b2 === _0x26955d;
        },
        'bEmEZ': function(_0x5247c5) {
            return _0x5247c5();
        },
        'vLzQP': function(_0x14a1ce, _0x4e3437) {
            return _0x14a1ce >= _0x4e3437;
        },
        'dbMya': function(_0x19ecd5, _0x10fe89) {
            return _0x19ecd5(_0x10fe89);
        },
        'fUxcT': function(_0x4045cd, _0x148db1) {
            return _0x4045cd(_0x148db1);
        },
        'eKxxu': function(_0x3356b3, _0x10c0fd, _0x558acd) {
            return _0x3356b3(_0x10c0fd, _0x558acd);
        }
    };
    return new Promise(async _0x417e90 => {
        var _0x22ffbc = {
            'bmnmd': function(_0xbca745, _0x47a131) {
                return _0x35b4ff['TWNjX'](_0xbca745, _0x47a131);
            },
            'kcugK': _0x35b4ff['hJYql'],
            'mFNBr': _0x35b4ff['ZbUPY'],
            'LaIvr': function(_0x4b5196, _0x5604db) {
                return _0x35b4ff['ySXrI'](_0x4b5196, _0x5604db);
            },
            'duZdC': function(_0x4c04a9, _0x579a94) {
                return _0x35b4ff['YYaLt'](_0x4c04a9, _0x579a94);
            },
            'pewwV': function(_0x124585) {
                return _0x35b4ff['bEmEZ'](_0x124585);
            }
        };
        const {
            taskId,
            completedTimes,
            configTargetTimes,
            taskName
        } = _0x5ceb16;
        if (_0x35b4ff['vLzQP'](_0x35b4ff['ySXrI'](parseInt, completedTimes), _0x35b4ff['dbMya'](parseInt, configTargetTimes))) {
            _0x35b4ff['fUxcT'](_0x417e90, ![]);
            $['log']('\x0a' + taskName + '【做日常任务】： mission success');
            return;
        }
        $['get'](_0x35b4ff['eKxxu'](taskListUrl, 'DoTask', 'taskId=' + taskId), (_0x44d145, _0x2673e6, _0x1f558a) => {
            try {
                const {
                    msg,
                    ret
                } = JSON['parse'](_0x1f558a);
                $['log']('\x0a' + taskName + '【做日常任务】：' + (_0x22ffbc['bmnmd'](msg['indexOf'](_0x22ffbc['kcugK']), -0x1) ? _0x22ffbc['mFNBr'] : msg) + '\x0a' + ($['showLog'] ? _0x1f558a : ''));
                _0x22ffbc['LaIvr'](_0x417e90, _0x22ffbc['duZdC'](ret, 0x0));
            } catch (_0x2e1a52) {
                $['logErr'](_0x2e1a52, _0x2673e6);
            } finally {
                _0x22ffbc['pewwV'](_0x417e90);
            }
        });
    });
}

function awardTask(_0x4921e3, _0x4717d6) {
    var _0x5b0370 = {
        'JMsjB': function(_0x1c7472, _0xf89ea6) {
            return _0x1c7472 !== _0xf89ea6;
        },
        'gunEp': '活动太火爆了',
        'syIeN': '任务为成就任务或者未到任务时间',
        'DcYLt': function(_0x5e76e9, _0x2c777e) {
            return _0x5e76e9 + _0x2c777e;
        },
        'tPdQX': function(_0x2256f7, _0x2bcd7e) {
            return _0x2256f7(_0x2bcd7e);
        },
        'yFPaM': function(_0x3c76e4, _0x62bf9b) {
            return _0x3c76e4 === _0x62bf9b;
        },
        'QpUMr': function(_0x21a888, _0xfe8cba) {
            return _0x21a888 === _0xfe8cba;
        },
        'ripQo': 'bkgDe',
        'lnJpl': 'luzMr',
        'coVtZ': function(_0x3633c2) {
            return _0x3633c2();
        },
        'vveVa': function(_0x12db1f, _0x57abe0) {
            return _0x12db1f !== _0x57abe0;
        },
        'Zgagh': 'cxpXA',
        'pVeot': 'bHEuk',
        'auYBo': function(_0x409cfb) {
            return _0x409cfb();
        },
        'YLvHI': function(_0x334333, _0x55ebce, _0x427f4b) {
            return _0x334333(_0x55ebce, _0x427f4b);
        },
        'EpvXm': function(_0x11e81b, _0x33c148, _0x1d55f9) {
            return _0x11e81b(_0x33c148, _0x1d55f9);
        }
    };
    return new Promise(_0x238bb0 => {
        var _0x4571a1 = {
            'EmAxQ': function(_0x3d7f36, _0x533197) {
                return _0x5b0370['vveVa'](_0x3d7f36, _0x533197);
            },
            'lPjqj': _0x5b0370['Zgagh'],
            'siOXX': _0x5b0370['pVeot'],
            'npbxV': function(_0x1b43de) {
                return _0x5b0370['auYBo'](_0x1b43de);
            }
        };
        switch (_0x4921e3) {
            case 0x0:
                const {
                    taskId, taskName
                } = _0x4717d6;
                $['get'](_0x5b0370['YLvHI'](taskListUrl, 'Award', 'taskId=' + taskId), (_0x319461, _0x3e58d0, _0x3919a0) => {
                    try {
                        const {
                            msg,
                            ret,
                            data: {
                                prizeInfo = ''
                            } = {}
                        } = JSON['parse'](_0x3919a0);
                        let _0x18a1b0 = '';
                        if (_0x5b0370['JMsjB'](msg['indexOf'](_0x5b0370['gunEp']), -0x1)) {
                            _0x18a1b0 = _0x5b0370['syIeN'];
                        } else {
                            _0x18a1b0 = _0x5b0370['DcYLt'](msg, prizeInfo) ? ' 获得财富值 ¥ ' + JSON['parse'](prizeInfo)['ddwMoney'] : '';
                        }
                        $['log']('\x0a' + taskName + '【领日常奖励】：' + _0x18a1b0 + '\x0a' + ($['showLog'] ? _0x3919a0 : ''));
                        _0x5b0370['tPdQX'](_0x238bb0, _0x5b0370['yFPaM'](ret, 0x0));
                    } catch (_0x150139) {
                        $['logErr'](_0x150139, _0x3e58d0);
                    } finally {
                        if (_0x5b0370['QpUMr'](_0x5b0370['ripQo'], _0x5b0370['lnJpl'])) {
                            console['log']('财富岛好友互助码每次运行都变化,旧的可继续使用');
                            $['log']('\n【京东账号' + $['index'] + '（' + $['nickName'] + '）的' + $['name'] + '好友互助码】' + strMyShareId + '\x0a\x0a');
                        } else {
                            _0x5b0370['coVtZ'](_0x238bb0);
                        }
                    }
                });
                break;
            case 0x1:
                const {
                    strTaskIndex, strTaskDescr
                } = _0x4717d6;
                $['get'](_0x5b0370['EpvXm'](taskUrl, 'consume/AchieveAward', 'strTaskIndex=' + strTaskIndex), (_0x35619e, _0x45757b, _0x3e123e) => {
                    if (_0x4571a1['EmAxQ'](_0x4571a1['lPjqj'], _0x4571a1['siOXX'])) {
                        try {
                            const {
                                iRet,
                                sErrMsg,
                                dwExpericnce
                            } = JSON['parse'](_0x3e123e);
                            $['log']('\x0a' + strTaskDescr + '【领成就奖励】： success 获得财富值：¥ ' + dwExpericnce + '\x0a' + ($['showLog'] ? _0x3e123e : ''));
                        } catch (_0x1dfce1) {
                            $['logErr'](_0x1dfce1, _0x45757b);
                        } finally {
                            _0x4571a1['npbxV'](_0x238bb0);
                        }
                    } else {
                        $['logErr'](e, _0x45757b);
                    }
                });
                break;
            default:
                break;
        }
    });
}

function funCenterState() {
    var _0x11b7fd = {
        'HpHJi': '任务为成就任务或者未到任务时间',
        'jsrQR': function(_0x3717f3, _0x2cc2f5) {
            return _0x3717f3 === _0x2cc2f5;
        },
        'HlaOQ': 'fasIP',
        'kGpMA': function(_0x1a7fc5, _0x826027) {
            return _0x1a7fc5 == _0x826027;
        },
        'ysRsO': function(_0x37cc2e, _0x184000) {
            return _0x37cc2e !== _0x184000;
        },
        'bEINX': 'pnBCh',
        'jykhI': 'oyEJF',
        'uKzKk': function(_0x4ec734, _0x43b618, _0x36d200, _0x4ec1a8) {
            return _0x4ec734(_0x43b618, _0x36d200, _0x4ec1a8);
        },
        'tcakJ': function(_0x274d68) {
            return _0x274d68();
        },
        'JPyrd': function(_0x5ca3dd, _0xa98038, _0x528604) {
            return _0x5ca3dd(_0xa98038, _0x528604);
        }
    };
    return new Promise(_0x53b2bc => {
        var _0x39ef97 = {
            'Mulfn': _0x11b7fd['HpHJi'],
            'Yoygj': function(_0x5bb80a, _0x2b4250) {
                return _0x11b7fd['jsrQR'](_0x5bb80a, _0x2b4250);
            },
            'lMuUH': _0x11b7fd['HlaOQ'],
            'uiYKC': function(_0x239a62, _0x41bdf9) {
                return _0x11b7fd['kGpMA'](_0x239a62, _0x41bdf9);
            },
            'SNIag': function(_0x5980fd, _0x1790d3) {
                return _0x11b7fd['ysRsO'](_0x5980fd, _0x1790d3);
            },
            'hgATZ': _0x11b7fd['bEINX'],
            'HzdjS': _0x11b7fd['jykhI'],
            'FkFok': function(_0x22229b, _0x510130, _0x535671, _0x58c94c) {
                return _0x11b7fd['uKzKk'](_0x22229b, _0x510130, _0x535671, _0x58c94c);
            },
            'RKHTH': function(_0x47d99e) {
                return _0x11b7fd['tcakJ'](_0x47d99e);
            }
        };
        $['get'](_0x11b7fd['JPyrd'](taskUrl, 'consume/FunCenterState', 'strType=1'), async (_0x49899a, _0x3736fc, _0x38c138) => {
            if (_0x39ef97['Yoygj'](_0x39ef97['lMuUH'], _0x39ef97['lMuUH'])) {
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
                    } = JSON['parse'](_0x38c138);
                    if (_0x39ef97['uiYKC'](dwFreeCount, 0x1)) {
                        if (_0x39ef97['SNIag'](_0x39ef97['hgATZ'], _0x39ef97['HzdjS'])) {
                            await $['wait'](0x1f4);
                            await _0x39ef97['FkFok'](soltMachine, strCouponPool, strGoodsPool, ddwConfVersion);
                        } else {
                            str = _0x39ef97['Mulfn'];
                        }
                    }
                } catch (_0x14403b) {
                    $['logErr'](_0x14403b, _0x3736fc);
                } finally {
                    _0x39ef97['RKHTH'](_0x53b2bc);
                }
            } else {
                $['logErr'](e, _0x3736fc);
            }
        });
    });
}

function soltMachine(_0x55ccea, _0x2219c4, _0x59e099) {
    var _0x2e8782 = {
        'MUYqf': function(_0x17b23c, _0x4e6816) {
            return _0x17b23c === _0x4e6816;
        },
        'oCQmm': 'ErWsE',
        'wmlSp': 'sZVuj',
        'aFFZW': 'zTEwl',
        'YhNQt': function(_0x42e61a, _0x41424f) {
            return _0x42e61a != _0x41424f;
        },
        'gLrEt': '未中奖',
        'pBEJr': function(_0x59b05a, _0x3b18f1) {
            return _0x59b05a === _0x3b18f1;
        },
        'PNlZh': 'NOHLM',
        'oetsg': 'VwDIJ',
        'ZWzxG': function(_0x27bd20) {
            return _0x27bd20();
        },
        'XgZTe': 'HH:mm',
        'wtTQt': function(_0x6d0b84, _0x3e427a) {
            return _0x6d0b84 || _0x3e427a;
        },
        'zofYT': function(_0x5a98ec, _0x2bd41b) {
            return _0x5a98ec(_0x2bd41b);
        },
        'JxXYY': function(_0x165efb, _0x944d97, _0x6c3186) {
            return _0x165efb(_0x944d97, _0x6c3186);
        }
    };
    return new Promise(_0x5e4603 => {
        var _0x5b018b = {
            'HEfDg': _0x2e8782['XgZTe'],
            'FDVdq': function(_0x4e33b6, _0x4b1884) {
                return _0x2e8782['wtTQt'](_0x4e33b6, _0x4b1884);
            },
            'KHTLC': function(_0x44e576, _0x264258) {
                return _0x2e8782['zofYT'](_0x44e576, _0x264258);
            }
        };
        $['get'](_0x2e8782['JxXYY'](taskUrl, 'consume/SlotMachine', 'strCouponPool=' + _0x55ccea + '&strGoodsPool=' + _0x2219c4 + '&ddwConfVersion=' + _0x59e099), async (_0x5875b9, _0x333fce, _0x26e6ae) => {
            if (_0x2e8782['MUYqf'](_0x2e8782['oCQmm'], _0x2e8782['wmlSp'])) {
                const _0x31c785 = $['notifyTime']['split'](',')['map'](_0x2c921e => _0x2c921e['split'](':'));
                const _0x58b1ac = $['time'](_0x5b018b['HEfDg'])['split'](':');
                $['log']('\x0a' + JSON['stringify'](_0x31c785));
                $['log']('\x0a' + JSON['stringify'](_0x58b1ac));
                if (_0x31c785['some'](_0x24b6c3 => _0x24b6c3[0x0] === _0x58b1ac[0x0] && (!_0x24b6c3[0x1] || _0x24b6c3[0x1] === _0x58b1ac[0x1]))) {
                    $['msg']($['name'], '', '' + $['result']['join']('\x0a'));
                }
            } else {
                try {
                    if (_0x2e8782['MUYqf'](_0x2e8782['aFFZW'], _0x2e8782['aFFZW'])) {
                        const {
                            iRet,
                            sErrMsg,
                            strAwardPoolName
                        } = JSON['parse'](_0x26e6ae);
                        $['log']('\n【抽奖结果】🎰 ' + (_0x2e8782['YhNQt'](strAwardPoolName, '') ? _0x2e8782['gLrEt'] : strAwardPoolName) + ' \x0a' + ($['showLog'] ? _0x26e6ae : ''));
                    } else {
                        $['logErr'](e, _0x333fce);
                    }
                } catch (_0x3fc94e) {
                    if (_0x2e8782['pBEJr'](_0x2e8782['PNlZh'], _0x2e8782['oetsg'])) {
                        const {
                            iRet,
                            dwExpericnce,
                            sErrMsg
                        } = JSON['parse'](_0x26e6ae);
                        $['log']('\x0a【' + place + '】🎁寻宝：' + sErrMsg + ' ，获取随机奖励：¥ ' + _0x5b018b['FDVdq'](dwExpericnce, 0x0) + ' \x0a' + ($['showLog'] ? _0x26e6ae : ''));
                        _0x5b018b['KHTLC'](_0x5e4603, iRet);
                    } else {
                        $['logErr'](_0x3fc94e, _0x333fce);
                    }
                } finally {
                    _0x2e8782['ZWzxG'](_0x5e4603);
                }
            }
        });
    });
}

function createAssistUser(_0x3f7da0) {
    var _0x401d14 = {
        'WQFci': function(_0x4b8c6f, _0xdc2479) {
            return _0x4b8c6f === _0xdc2479;
        },
        'uwzVz': function(_0x1e22c1) {
            return _0x1e22c1();
        },
        'ywldU': function(_0x342d57, _0x543cb4, _0x229773) {
            return _0x342d57(_0x543cb4, _0x229773);
        },
        'fxOQL': 'user/JoinScene',
        'eirdX': function(_0x5ef1dd, _0x1000df) {
            return _0x5ef1dd(_0x1000df);
        }
    };
    return new Promise(_0x2f067a => {
        $['get'](_0x401d14['ywldU'](taskUrl, _0x401d14['fxOQL'], 'strShareId=' + _0x401d14['eirdX'](escape, _0x3f7da0) + '&dwSceneId=1001'), async (_0x13dbb2, _0x400d7a, _0x2f9a3d) => {
            try {
                console['log']('\n普通助力(招工)结果:' + _0x2f9a3d);
                const {
                    iRet
                } = JSON['parse'](_0x2f9a3d);
                if (_0x401d14['WQFci'](iRet, 0x7d5) || _0x401d14['WQFci'](iRet, 0x270f)) $['canHelp'] = ![];
            } catch (_0x3cf2f7) {} finally {
                _0x401d14['uwzVz'](_0x2f067a);
            }
        });
    });
}

function createSuperAssistUser(_0x1a5357) {
    var _0x410ca3 = {
        'PIFaC': function(_0x14edc2) {
            return _0x14edc2();
        },
        'tbgRj': function(_0x553130, _0x31dc53) {
            return _0x553130 === _0x31dc53;
        },
        'DphqF': 'retcode',
        'LsaIN': 'base',
        'isSnO': function(_0x364345) {
            return _0x364345();
        },
        'SEKgW': 'pVeJA',
        'frTWs': 'RpYDb',
        'IOhMO': function(_0x24851b, _0xa830b3) {
            return _0x24851b === _0xa830b3;
        },
        'AkLiK': function(_0x4f9b2b, _0x36d31e) {
            return _0x4f9b2b === _0x36d31e;
        },
        'hBhlE': 'IHuMh',
        'jBicK': 'RbEZI',
        'evlIS': function(_0x52d6b9, _0x2e4100) {
            return _0x52d6b9 !== _0x2e4100;
        },
        'gufqk': 'oVqlT',
        'ScdGD': function(_0x998174) {
            return _0x998174();
        },
        'ePLzC': '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取',
        'nrVgF': 'https://bean.m.jd.com/bean/signIndex.action',
        'gszLy': function(_0x5e374a) {
            return _0x5e374a();
        },
        'zRRfT': function(_0x2feca6, _0x261e9c) {
            return _0x2feca6 === _0x261e9c;
        },
        'ETIex': 'dDJtS',
        'CQXOX': function(_0x39e967, _0x5bbf99, _0x1be85c) {
            return _0x39e967(_0x5bbf99, _0x1be85c);
        },
        'pxCPL': 'user/JoinScene',
        'CbIwV': 'timestamp',
        'dIENx': 'phoneid',
        'eaROY': 'farm_jstoken',
        'QTOdv': function(_0x272363, _0x186bbd) {
            return _0x272363(_0x186bbd);
        }
    };
    return new Promise(_0x123a8c => {
        var _0x583659 = {
            'YjvuL': _0x410ca3['ePLzC'],
            'lKQfd': _0x410ca3['nrVgF'],
            'OuhKi': function(_0x1da60c) {
                return _0x410ca3['gszLy'](_0x1da60c);
            }
        };
        if (_0x410ca3['zRRfT'](_0x410ca3['ETIex'], _0x410ca3['ETIex'])) {
            $['get'](_0x410ca3['CQXOX'](taskUrl, _0x410ca3['pxCPL'], 'strPgtimestamp=' + token[_0x410ca3['CbIwV']] + '&strPhoneID=' + token[_0x410ca3['dIENx']] + '&strPgUUNum=' + token[_0x410ca3['eaROY']] + '&strShareId=' + _0x410ca3['QTOdv'](escape, _0x1a5357) + '&dwSceneId=1001&dwType=2'), async (_0x265e18, _0x1c3d39, _0x469138) => {
                var _0x6eb84 = {
                    'XwkDB': function(_0x2db18f) {
                        return _0x410ca3['PIFaC'](_0x2db18f);
                    },
                    'pQhIH': function(_0x1d88ae, _0x377fcd) {
                        return _0x410ca3['tbgRj'](_0x1d88ae, _0x377fcd);
                    },
                    'JLHwF': _0x410ca3['DphqF'],
                    'OvPrG': _0x410ca3['LsaIN'],
                    'MvkBy': function(_0x122b74) {
                        return _0x410ca3['isSnO'](_0x122b74);
                    }
                };
                if (_0x410ca3['tbgRj'](_0x410ca3['SEKgW'], _0x410ca3['SEKgW'])) {
                    try {
                        if (_0x410ca3['tbgRj'](_0x410ca3['frTWs'], _0x410ca3['frTWs'])) {
                            console['log']('\n超级助力(超级工人)结果:' + _0x469138);
                            const {
                                sErrMsg,
                                iRet
                            } = JSON['parse'](_0x469138);
                            if (_0x410ca3['IOhMO'](iRet, 0x7d5) || _0x410ca3['AkLiK'](iRet, 0x270f)) $['canHelp'] = ![];
                            console['log'](sErrMsg);
                        } else {
                            $['msg']($['name'], _0x583659['YjvuL'], _0x583659['lKQfd'], {
                                'open-url': _0x583659['lKQfd']
                            });
                            return;
                        }
                    } catch (_0x10d08f) {
                        if (_0x410ca3['AkLiK'](_0x410ca3['hBhlE'], _0x410ca3['jBicK'])) {
                            try {
                                const {
                                    dwGetMoney,
                                    iRet,
                                    sErrMsg
                                } = JSON['parse'](_0x469138);
                                $['log']('\n🤏偷取好友【' + strFriendNick + '】【' + strSceneName + '】财富值：¥ ' + (dwGetMoney ? dwGetMoney : sErrMsg) + '\x0a' + ($['showLog'] ? _0x469138 : ''));
                            } catch (_0x396505) {
                                $['logErr'](_0x396505, _0x1c3d39);
                            } finally {
                                _0x6eb84['XwkDB'](_0x123a8c);
                            }
                        } else {
                            $['logErr'](_0x10d08f, _0x1c3d39);
                        }
                    } finally {
                        if (_0x410ca3['evlIS'](_0x410ca3['gufqk'], _0x410ca3['gufqk'])) {
                            _0x469138 = JSON['parse'](_0x469138);
                            if (_0x6eb84['pQhIH'](_0x469138[_0x6eb84['JLHwF']], 0xd)) {
                                $['isLogin'] = ![];
                                return;
                            }
                            if (_0x6eb84['pQhIH'](_0x469138[_0x6eb84['JLHwF']], 0x0)) {
                                $['nickName'] = _0x469138[_0x6eb84['OvPrG']] && _0x469138[_0x6eb84['OvPrG']]['nickname'] || $['UserName'];
                            } else {
                                $['nickName'] = $['UserName'];
                            }
                        } else {
                            _0x410ca3['ScdGD'](_0x123a8c);
                        }
                    }
                } else {
                    _0x6eb84['MvkBy'](_0x123a8c);
                }
            });
        } else {
            try {
                const {
                    iRet,
                    sErrMsg,
                    taskinfo = []
                } = JSON['parse'](data);
                $['allTask'] = taskinfo['filter'](_0x84249f => _0x84249f['dwAwardStatus'] === 0x1);
                $['log']('\n获取【🎖成就任务】列表 ' + sErrMsg + '，总共' + $['allTask']['length'] + '个任务！\n' + ($['showLog'] ? data : ''));
            } catch (_0x4ceb84) {
                $['logErr'](_0x4ceb84, resp);
            } finally {
                _0x583659['OuhKi'](_0x123a8c);
            }
        }
    });
}

function joinGroup(_0xfaa388) {
    var _0x3f1baa = {
        'LuAOY': function(_0x25074e) {
            return _0x25074e();
        },
        'tQNUa': function(_0x1d9e2c, _0x12cf3e) {
            return _0x1d9e2c !== _0x12cf3e;
        },
        'PiKLJ': 'RMfPu',
        'VYtla': 'ohegT',
        'SwCqX': function(_0x39983a, _0x516b62) {
            return _0x39983a === _0x516b62;
        },
        'BFWYU': function(_0xf4dc9e, _0x584ed8) {
            return _0xf4dc9e !== _0x584ed8;
        },
        'REGKW': 'JigkD',
        'YdnMq': 'QVrDC',
        'UkynB': function(_0x4afa53) {
            return _0x4afa53();
        },
        'mblmx': 'CookieJD',
        'jevgK': 'CookieJD2',
        'trIaO': function(_0x1deed8, _0x43674a) {
            return _0x1deed8(_0x43674a);
        },
        'nXcqt': 'CookiesJD',
        'fDkxh': function(_0x204c06, _0x75aa73) {
            return _0x204c06 !== _0x75aa73;
        },
        'AEYrx': 'LUATK',
        'GHmov': function(_0x53eb38, _0xcc67d1, _0x3ea6a7) {
            return _0x53eb38(_0xcc67d1, _0x3ea6a7);
        },
        'ROzrH': 'timestamp',
        'AnOQZ': 'phoneid',
        'WrGws': 'farm_jstoken'
    };
    return new Promise(async _0x5d4c6f => {
        var _0x5f131a = {
            'chnWf': _0x3f1baa['mblmx'],
            'UnDlg': _0x3f1baa['jevgK'],
            'ZhYUC': function(_0x476884, _0x57c085) {
                return _0x3f1baa['trIaO'](_0x476884, _0x57c085);
            },
            'SxvYN': _0x3f1baa['nXcqt']
        };
        if (_0x3f1baa['fDkxh'](_0x3f1baa['AEYrx'], _0x3f1baa['AEYrx'])) {
            cookiesArr = [$['getdata'](_0x5f131a['chnWf']), $['getdata'](_0x5f131a['UnDlg']), ..._0x5f131a['ZhYUC'](jsonParse, $['getdata'](_0x5f131a['SxvYN']) || '[]')['map'](_0x421978 => _0x421978['cookie'])]['filter'](_0x2b7ecd => !!_0x2b7ecd);
        } else {
            $['get'](_0x3f1baa['GHmov'](taskUrl, 'user/JoinGroup', 'strGroupId=' + _0xfaa388 + '&dwIsNewUser=0&pgtimestamp=' + token[_0x3f1baa['ROzrH']] + '&phoneID=' + token[_0x3f1baa['AnOQZ']] + '&pgUUNum=' + token[_0x3f1baa['WrGws']]), (_0x439a5f, _0x1d7c62, _0x1ef160) => {
                var _0x3f25e8 = {
                    'vCtYl': function(_0x2b3789) {
                        return _0x3f1baa['LuAOY'](_0x2b3789);
                    }
                };
                try {
                    if (_0x3f1baa['tQNUa'](_0x3f1baa['PiKLJ'], _0x3f1baa['VYtla'])) {
                        const {
                            sErrMsg,
                            iRet
                        } = JSON['parse'](_0x1ef160);
                        if (_0x3f1baa['SwCqX'](iRet, 0x7d5) || _0x3f1baa['SwCqX'](iRet, 0x270f)) $['canHelp'] = ![];
                        $['log']('' + sErrMsg);
                    } else {
                        _0x3f25e8['vCtYl'](_0x5d4c6f);
                    }
                } catch (_0x43558e) {
                    $['logErr'](_0x43558e, _0x1d7c62);
                } finally {
                    if (_0x3f1baa['BFWYU'](_0x3f1baa['REGKW'], _0x3f1baa['YdnMq'])) {
                        _0x3f1baa['UkynB'](_0x5d4c6f);
                    } else {
                        _0x3f25e8['vCtYl'](_0x5d4c6f);
                    }
                }
            });
        }
    });
}

function submitGroupId() {
    var _0x57b71d = {
        'lgRHB': '*/*',
        'hLjcI': 'keep-alive',
        'ewzyX': 'https://st.jingxi.com/fortune_island/index.html?ptag=138631.26.55',
        'lMDev': 'gzip, deflate, br',
        'SgePj': 'm.jingxi.com',
        'GjPDK': function(_0x5df210, _0x3db2d3) {
            return _0x5df210 + _0x3db2d3;
        },
        'jnSrB': function(_0x50456b, _0x2df095) {
            return _0x50456b * _0x2df095;
        },
        'EzIxM': 'zh-cn',
        'gWAyL': function(_0x120e09, _0x21ab8d) {
            return _0x120e09 === _0x21ab8d;
        },
        'OiQTl': 'clAzW',
        'gOjEh': 'ioVZM',
        'PdkiO': function(_0xa9aa14) {
            return _0xa9aa14();
        },
        'iwRxn': function(_0x304c64, _0x1dcb4c) {
            return _0x304c64 === _0x1dcb4c;
        },
        'LQyzN': function(_0x59ec61) {
            return _0x59ec61();
        },
        'ZUOPC': function(_0x582818, _0x2fd6d3) {
            return _0x582818 !== _0x2fd6d3;
        },
        'pOrAf': 'dpYTU',
        'TzFes': 'xSuKU',
        'OPdkr': function(_0x3bfa85) {
            return _0x3bfa85();
        },
        'cFsFn': '你的【🏝寻宝大作战】互助码: ',
        'NaEJp': '(每天都变化,旧的不可用)',
        'BGLUW': 'TpRtq',
        'ZXVJX': 'yLnxK',
        'JLxGF': function(_0x3098e3, _0x455b9a) {
            return _0x3098e3 == _0x455b9a;
        },
        'DknQf': 'success',
        'ZLgVw': function(_0x3c4c3b, _0x4ad60e) {
            return _0x3c4c3b || _0x4ad60e;
        },
        'MrAFr': 'abcdefghijklmnopqrstuvwxyz1234567890',
        'Tkywu': function(_0x167ed8, _0x567f22) {
            return _0x167ed8 < _0x567f22;
        },
        'Hugsc': function(_0xc80647, _0x54ea02) {
            return _0xc80647(_0x54ea02);
        },
        'qksKy': function(_0x367f2b, _0x4509c5) {
            return _0x367f2b * _0x4509c5;
        },
        'fozVl': function(_0x15ef9c, _0x8b27cf) {
            return _0x15ef9c === _0x8b27cf;
        },
        'fKsLK': 'eqLhA',
        'QkfIO': 'EXcQU',
        'NoRfb': function(_0x35f937, _0xa7be31) {
            return _0x35f937(_0xa7be31);
        }
    };
    return new Promise(_0xb850db => {
        var _0x3a39b7 = {
            'pBUiX': function(_0x447789, _0x4dc80c) {
                return _0x57b71d['JLxGF'](_0x447789, _0x4dc80c);
            },
            'emyln': _0x57b71d['DknQf'],
            'clQaI': function(_0x820877, _0x34470e) {
                return _0x57b71d['ZLgVw'](_0x820877, _0x34470e);
            },
            'yuGSV': _0x57b71d['MrAFr'],
            'ZOvin': function(_0x27db94, _0x32e262) {
                return _0x57b71d['Tkywu'](_0x27db94, _0x32e262);
            },
            'XsiIr': function(_0x511aee, _0x484075) {
                return _0x57b71d['Hugsc'](_0x511aee, _0x484075);
            },
            'YZPWX': function(_0x284fe0, _0x473e2d) {
                return _0x57b71d['qksKy'](_0x284fe0, _0x473e2d);
            }
        };
        if (_0x57b71d['fozVl'](_0x57b71d['fKsLK'], _0x57b71d['QkfIO'])) {
            return {
                'url': JD_API_HOST + 'newtasksys/newtasksys_front/' + function_path + '?strZone=jxcfd&bizCode=jxcfd&source=jxcfd&dwEnv=7&_cfd_t=' + Date['now']() + '&ptag=138631.26.55&' + body + '&_ste=1&_=' + Date['now']() + '&sceneval=2&g_login_type=1&g_ty=ls',
                'headers': {
                    'Cookie': cookie,
                    'Accept': _0x57b71d['lgRHB'],
                    'Connection': _0x57b71d['hLjcI'],
                    'Referer': _0x57b71d['ewzyX'],
                    'Accept-Encoding': _0x57b71d['lMDev'],
                    'Host': _0x57b71d['SgePj'],
                    'User-Agent': 'jdpingou;iPhone;3.15.2;14.2.1;ea00763447803eb0f32045dcba629c248ea53bb3;network/wifi;model/iPhone13,2;appBuild/100365;ADID/00000000-0000-0000-0000-000000000000;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/0;hasOCPay/0;supportBestPay/0;session/' + _0x57b71d['GjPDK'](_0x57b71d['jnSrB'](Math['random'], 0x62), 0x1) + ';pap/JA2015_311210;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
                    'Accept-Language': _0x57b71d['EzIxM']
                },
                'timeout': 0x2710
            };
        } else {
            $['get'](_0x57b71d['NoRfb'](taskUrl, 'user/GatherForture'), async (_0x2d9104, _0x407952, _0x13d086) => {
                try {
                    if (_0x57b71d['gWAyL'](_0x57b71d['OiQTl'], _0x57b71d['gOjEh'])) {
                        const {
                            iRet,
                            dwMoney,
                            sErrMsg,
                            strPin
                        } = JSON['parse'](data);
                        $['log']('\x0a【' + sceneList[_key]['strSceneName'] + '】👬好友: ' + (_0x3a39b7['pBUiX'](sErrMsg, _0x3a39b7['emyln']) ? '获取超级助力财富值：¥ ' + _0x3a39b7['clQaI'](dwMoney, 0x0) : sErrMsg) + ' \x0a' + ($['showLog'] ? data : ''));
                    } else {
                        const {
                            GroupInfo: {
                                strGroupId
                            },
                            strPin
                        } = JSON['parse'](_0x13d086);
                        if (!strGroupId) {
                            const _0x51b9e3 = await _0x57b71d['PdkiO'](openGroup);
                            if (_0x57b71d['iwRxn'](_0x51b9e3, 0x0)) {
                                await _0x57b71d['LQyzN'](submitGroupId);
                            } else {
                                if (_0x57b71d['ZUOPC'](_0x57b71d['pOrAf'], _0x57b71d['TzFes'])) {
                                    _0x57b71d['OPdkr'](_0xb850db);
                                } else {
                                    let _0x45c172 = _0x3a39b7['yuGSV'];
                                    let _0x1a15c4 = '';
                                    for (let _0x5caa10 = 0x0; _0x3a39b7['ZOvin'](_0x5caa10, count); _0x5caa10++) {
                                        _0x1a15c4 += _0x45c172[_0x3a39b7['XsiIr'](parseInt, _0x3a39b7['YZPWX'](Math['random'](), _0x45c172['length']))];
                                    }
                                    return _0x1a15c4;
                                }
                            }
                        } else {
                            $['log'](_0x57b71d['GjPDK'](_0x57b71d['GjPDK'](_0x57b71d['cFsFn'], strGroupId), _0x57b71d['NaEJp']));
                            $['strGroupIds']['push'](strGroupId);
                        }
                    }
                } catch (_0x3f844e) {
                    if (_0x57b71d['ZUOPC'](_0x57b71d['BGLUW'], _0x57b71d['BGLUW'])) {
                        cookiesArr['push'](jdCookieNode[item]);
                    } else {
                        $['logErr'](_0x3f844e, _0x407952);
                    }
                } finally {
                    if (_0x57b71d['ZUOPC'](_0x57b71d['ZXVJX'], _0x57b71d['ZXVJX'])) {
                        $['logErr'](e, _0x407952);
                    } else {
                        _0x57b71d['OPdkr'](_0xb850db);
                    }
                }
            });
        }
    });
}

function openGroup() {
    var _0x2b269b = {
        'erEGp': function(_0x54d3af, _0x171cec) {
            return _0x54d3af(_0x171cec);
        },
        'iKUYZ': function(_0x3d83cf, _0x4805a2) {
            return _0x3d83cf === _0x4805a2;
        },
        'AAVOE': 'CqvBF',
        'HsARl': function(_0x4ef2bc) {
            return _0x4ef2bc();
        },
        'Oqibb': function(_0x3748f9, _0x2be7d7, _0x4e9fbc) {
            return _0x3748f9(_0x2be7d7, _0x4e9fbc);
        }
    };
    return new Promise(async _0x543aca => {
        $['get'](_0x2b269b['Oqibb'](taskUrl, 'user/OpenGroup', 'dwIsNewUser=' + $['info']['dwIsNewUser']), async (_0x4d8b0b, _0x4912dc, _0x137fca) => {
            try {
                const {
                    sErrMsg
                } = JSON['parse'](_0x137fca);
                $['log']('\n【🏝寻宝大作战】' + sErrMsg + '\x0a' + ($['showLog'] ? _0x137fca : ''));
                _0x2b269b['erEGp'](_0x543aca, 0x0);
            } catch (_0x42e4e9) {
                $['logErr'](_0x42e4e9, _0x4912dc);
            } finally {
                if (_0x2b269b['iKUYZ'](_0x2b269b['AAVOE'], _0x2b269b['AAVOE'])) {
                    _0x2b269b['HsARl'](_0x543aca);
                } else {
                    $['logErr'](e, _0x4912dc);
                }
            }
        });
    });
}

function openPeriodBox() {
    var _0x301bae = {
        'fXLYH': function(_0x574949, _0x51fa19) {
            return _0x574949 == _0x51fa19;
        },
        'IQiNl': 'success',
        'athtj': function(_0x19f90e, _0x1c94e1) {
            return _0x19f90e || _0x1c94e1;
        },
        'ydGgC': '*/*',
        'fegvl': 'keep-alive',
        'heYte': 'https://st.jingxi.com/fortune_island/index.html?ptag=138631.26.55',
        'EFRkw': 'gzip, deflate, br',
        'cSCJL': 'm.jingxi.com',
        'phnYg': function(_0x1a1306, _0x2c658a) {
            return _0x1a1306 + _0x2c658a;
        },
        'QYcMC': function(_0x4d0ac9, _0x2e073a) {
            return _0x4d0ac9 * _0x2e073a;
        },
        'rovIL': 'zh-cn',
        'NjTob': function(_0x2c55f2, _0xc0c4f3) {
            return _0x2c55f2 === _0xc0c4f3;
        },
        'HodoC': function(_0xa025b2) {
            return _0xa025b2();
        },
        'weSeb': 'ORUop',
        'uDEfA': 'mhdbe',
        'FjweT': function(_0x1b86db, _0x4c0eb8) {
            return _0x1b86db !== _0x4c0eb8;
        },
        'sFlwC': 'GJBVK',
        'AcVVT': function(_0x3342c5, _0x21886b) {
            return _0x3342c5 < _0x21886b;
        },
        'slvVu': function(_0xf945c5, _0xd08248) {
            return _0xf945c5 === _0xd08248;
        },
        'wmWhR': 'clSde',
        'QAbAA': function(_0x4a4a1a, _0x4f5bc5, _0x4d306b) {
            return _0x4a4a1a(_0x4f5bc5, _0x4d306b);
        },
        'rkWdD': function(_0x3bcbf0, _0x36f4ef) {
            return _0x3bcbf0 == _0x36f4ef;
        },
        'ZElfF': function(_0x6fd9e4, _0x3e0ed9) {
            return _0x6fd9e4 !== _0x3e0ed9;
        },
        'StvUd': 'Amotm',
        'aVZcr': 'ZFHPV',
        'yQyFM': function(_0x403799) {
            return _0x403799();
        },
        'ejrmd': function(_0x1084ea, _0x29bc6f) {
            return _0x1084ea !== _0x29bc6f;
        },
        'eeSGs': 'tFfBq',
        'IhDRt': 'vWgqe',
        'WIbEG': function(_0x24c721, _0x5dfdb9) {
            return _0x24c721 == _0x5dfdb9;
        },
        'ntRyL': function(_0x7f7e79, _0x986da7) {
            return _0x7f7e79 !== _0x986da7;
        },
        'ibgvd': 'oIPGL',
        'hsoOK': 'kMWrj',
        'toHfc': 'cgPwy',
        'VFUJf': 'JNifP',
        'kflUL': function(_0x4ab6d2, _0x7314ef) {
            return _0x4ab6d2(_0x7314ef);
        }
    };
    return new Promise(async _0x4a4b45 => {
        var _0xdc12aa = {
            'KdwMH': function(_0x5d46ad, _0x1e6909) {
                return _0x301bae['ejrmd'](_0x5d46ad, _0x1e6909);
            },
            'htUzt': _0x301bae['eeSGs'],
            'tcGMl': _0x301bae['IhDRt'],
            'EKaBl': function(_0x299f13, _0x56c529) {
                return _0x301bae['WIbEG'](_0x299f13, _0x56c529);
            },
            'TNvuK': _0x301bae['IQiNl'],
            'xdQkD': function(_0x35f017, _0x57d19c) {
                return _0x301bae['ntRyL'](_0x35f017, _0x57d19c);
            },
            'UxRjV': _0x301bae['ibgvd'],
            'oTrDw': _0x301bae['hsoOK'],
            'UsVlR': _0x301bae['toHfc'],
            'LMHFs': function(_0x292f45) {
                return _0x301bae['yQyFM'](_0x292f45);
            }
        };
        if (_0x301bae['ntRyL'](_0x301bae['VFUJf'], _0x301bae['VFUJf'])) {
            const {
                iRet,
                dwMoney,
                sErrMsg
            } = JSON['parse'](data);
            $['log']('\x0a【' + sceneList[_key]['strSceneName'] + '】🏝岛主 : ' + (_0x301bae['fXLYH'](sErrMsg, _0x301bae['IQiNl']) ? '获取财富值：¥ ' + _0x301bae['athtj'](dwMoney, 0x0) : sErrMsg) + ' \x0a' + ($['showLog'] ? data : ''));
        } else {
            $['get'](_0x301bae['kflUL'](taskUrl, 'user/GatherForture'), async (_0x572443, _0x5709c8, _0x3aadf4) => {
                var _0x43b84d = {
                    'OHPDu': _0x301bae['ydGgC'],
                    'HfhlN': _0x301bae['fegvl'],
                    'oqhJT': _0x301bae['heYte'],
                    'LVDzj': _0x301bae['EFRkw'],
                    'HmoSp': _0x301bae['cSCJL'],
                    'qFrOx': function(_0x1ac1cd, _0x3170ed) {
                        return _0x301bae['phnYg'](_0x1ac1cd, _0x3170ed);
                    },
                    'olYcf': function(_0x2b15b3, _0x22e233) {
                        return _0x301bae['QYcMC'](_0x2b15b3, _0x22e233);
                    },
                    'tNbog': _0x301bae['rovIL'],
                    'MKMJd': function(_0x476405, _0x286694) {
                        return _0x301bae['NjTob'](_0x476405, _0x286694);
                    },
                    'gqCwe': function(_0x2590a0, _0x175d38) {
                        return _0x301bae['NjTob'](_0x2590a0, _0x175d38);
                    },
                    'JgTSD': function(_0x2a2f8f) {
                        return _0x301bae['HodoC'](_0x2a2f8f);
                    },
                    'yvkvd': function(_0x192576, _0x471302) {
                        return _0x301bae['fXLYH'](_0x192576, _0x471302);
                    },
                    'pzjZK': _0x301bae['IQiNl'],
                    'qfkst': function(_0xd81b39, _0x962eb7) {
                        return _0x301bae['athtj'](_0xd81b39, _0x962eb7);
                    }
                };
                if (_0x301bae['NjTob'](_0x301bae['weSeb'], _0x301bae['uDEfA'])) {
                    console['log']('' + JSON['stringify'](_0x572443));
                    console['log']($['name'] + ' API请求失败，请检查网路重试');
                } else {
                    try {
                        if (_0x301bae['FjweT'](_0x301bae['sFlwC'], _0x301bae['sFlwC'])) {
                            const {
                                iRet,
                                sErrMsg,
                                taskinfo = []
                            } = JSON['parse'](_0x3aadf4);
                            $['allTask'] = taskinfo['filter'](_0x4fc342 => _0x4fc342['dwAwardStatus'] === 0x1);
                            $['log']('\n获取【��成就任务】列表 ' + sErrMsg + '，总共' + $['allTask']['length'] + '个任务！\n' + ($['showLog'] ? _0x3aadf4 : ''));
                        } else {
                            const {
                                PeriodBox = [{}]
                            } = JSON['parse'](_0x3aadf4);
                            for (var _0xe59389 = 0x0; _0x301bae['AcVVT'](_0xe59389, PeriodBox['length']); _0xe59389++) {
                                if (_0x301bae['slvVu'](_0x301bae['wmWhR'], _0x301bae['wmWhR'])) {
                                    const {
                                        dwStatus,
                                        dwSeq,
                                        strBrandName
                                    } = PeriodBox[_0xe59389];
                                    if (_0x301bae['fXLYH'](dwStatus, 0x2)) {
                                        await $['wait'](0x3e8);
                                        await $['get'](_0x301bae['QAbAA'](taskUrl, 'user/OpenPeriodBox', 'dwSeq=' + dwSeq), async (_0x572443, _0x5709c8, _0x3aadf4) => {
                                            try {
                                                if (_0xdc12aa['KdwMH'](_0xdc12aa['htUzt'], _0xdc12aa['tcGMl'])) {
                                                    const {
                                                        dwMoney,
                                                        iRet,
                                                        sErrMsg
                                                    } = JSON['parse'](_0x3aadf4);
                                                    $['log']('\n【🏝寻宝大作战】【' + strBrandName + '】开宝箱：' + (_0xdc12aa['EKaBl'](sErrMsg, _0xdc12aa['TNvuK']) ? ' 获得财富值 ¥ ' + dwMoney : sErrMsg) + '\x0a' + ($['showLog'] ? _0x3aadf4 : ''));
                                                } else {
                                                    return {
                                                        'url': JD_API_HOST + 'jxcfd/' + function_path + '?strZone=jxcfd&bizCode=jxcfd&source=jxcfd&dwEnv=7&_cfd_t=' + Date['now']() + '&ptag=138631.26.55&' + body + '&_ste=1&_=' + Date['now']() + '&sceneval=2&g_login_type=1&g_ty=ls',
                                                        'headers': {
                                                            'Cookie': cookie,
                                                            'Accept': _0x43b84d['OHPDu'],
                                                            'Connection': _0x43b84d['HfhlN'],
                                                            'Referer': _0x43b84d['oqhJT'],
                                                            'Accept-Encoding': _0x43b84d['LVDzj'],
                                                            'Host': _0x43b84d['HmoSp'],
                                                            'User-Agent': 'jdpingou;iPhone;3.15.2;14.2.1;ea00763447803eb0f32045dcba629c248ea53bb3;network/wifi;model/iPhone13,2;appBuild/100365;ADID/00000000-0000-0000-0000-000000000000;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/0;hasOCPay/0;supportBestPay/0;session/' + _0x43b84d['qFrOx'](_0x43b84d['olYcf'](Math['random'], 0x62), 0x1) + ';pap/JA2015_311210;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
                                                            'Accept-Language': _0x43b84d['tNbog']
                                                        },
                                                        'timeout': 0x2710
                                                    };
                                                }
                                            } catch (_0x36c9ca) {
                                                if (_0xdc12aa['xdQkD'](_0xdc12aa['UxRjV'], _0xdc12aa['oTrDw'])) {
                                                    $['logErr'](_0x36c9ca, _0x5709c8);
                                                } else {
                                                    $['logErr'](_0x36c9ca, _0x5709c8);
                                                }
                                            } finally {
                                                if (_0xdc12aa['xdQkD'](_0xdc12aa['UsVlR'], _0xdc12aa['UsVlR'])) {
                                                    $['msg']($['name'], '', '' + $['result']['join']('\x0a'));
                                                } else {
                                                    _0xdc12aa['LMHFs'](_0x4a4b45);
                                                }
                                            }
                                        });
                                    } else if (_0x301bae['rkWdD'](dwStatus, 0x3)) {
                                        $['log']('\n【🏝寻宝大作战】【' + strBrandName + '】开宝箱：宝箱已开启过！');
                                    } else {
                                        if (_0x301bae['ZElfF'](_0x301bae['StvUd'], _0x301bae['aVZcr'])) {
                                            $['log']('\n【🏝寻宝大作战】【' + strBrandName + '】开宝箱：未达到宝箱开启条件，快去邀请好友助力吧！');
                                            _0x301bae['yQyFM'](_0x4a4b45);
                                        } else {
                                            try {
                                                console['log']('\n普通助力(招工)结果:' + _0x3aadf4);
                                                const {
                                                    iRet
                                                } = JSON['parse'](_0x3aadf4);
                                                if (_0x43b84d['MKMJd'](iRet, 0x7d5) || _0x43b84d['gqCwe'](iRet, 0x270f)) $['canHelp'] = ![];
                                            } catch (_0x363a12) {} finally {
                                                _0x43b84d['JgTSD'](_0x4a4b45);
                                            }
                                        }
                                    }
                                } else {
                                    try {
                                        const {
                                            dwMoney,
                                            iRet,
                                            sErrMsg,
                                            strPin
                                        } = JSON['parse'](_0x3aadf4);
                                        $['log']('\x0a【' + sceneList[_key]['strSceneName'] + '】👬好友: ' + (_0x43b84d['yvkvd'](sErrMsg, _0x43b84d['pzjZK']) ? '获取普通助力财富值：¥ ' + _0x43b84d['qfkst'](dwMoney, 0x0) : sErrMsg) + ' \x0a' + ($['showLog'] ? _0x3aadf4 : ''));
                                    } catch (_0x44310f) {
                                        $['logErr'](_0x44310f, _0x5709c8);
                                    } finally {
                                        _0x43b84d['JgTSD'](_0x4a4b45);
                                    }
                                }
                            }
                        }
                    } catch (_0x10a3fd) {
                        $['logErr'](_0x10a3fd, _0x5709c8);
                    } finally {
                        _0x301bae['yQyFM'](_0x4a4b45);
                    }
                }
            });
        }
    });
}

function activeScene(_0x301074) {
    var _0xf6e9a5 = {
        'kPFUE': function(_0x572ec0, _0x459110) {
            return _0x572ec0 !== _0x459110;
        },
        'dXnWq': 'tfHxt',
        'oJozY': 'Dcfbh',
        'cIPrL': function(_0x475084, _0x4442a5) {
            return _0x475084 !== _0x4442a5;
        },
        'PdBVf': 'bRNMl',
        'Jlykv': 'catun',
        'RayeM': 'eOSDg',
        'ZMeuP': 'BOszu',
        'CrWXM': function(_0x2b5895) {
            return _0x2b5895();
        },
        'EiOWC': function(_0x45ed1c, _0x5bd869) {
            return _0x45ed1c(_0x5bd869);
        },
        'dRNUB': '活动太火爆了',
        'HkJWp': '任务为成就任务或者未到任务时间',
        'Mvpwj': function(_0x525536, _0x291e6e) {
            return _0x525536 + _0x291e6e;
        },
        'fQjKY': function(_0x56c579, _0x1ef438) {
            return _0x56c579(_0x1ef438);
        },
        'txmVZ': function(_0x501f11, _0x293a30) {
            return _0x501f11 === _0x293a30;
        },
        'xQGjr': 'XpyJh',
        'eQtAq': function(_0x5ae12b, _0x211217) {
            return _0x5ae12b(_0x211217);
        },
        'sjUWz': '*/*',
        'jEHZA': 'keep-alive',
        'OapcN': 'https://st.jingxi.com/fortune_island/index.html',
        'BGUUp': 'gzip, deflate, br',
        'YyzUu': 'm.jingxi.com',
        'zDcwz': function(_0x1ac2ec, _0x2f9a7c) {
            return _0x1ac2ec + _0x2f9a7c;
        },
        'aSojk': function(_0x11eb20, _0x229332) {
            return _0x11eb20 * _0x229332;
        },
        'gFcon': 'zh-cn'
    };
    return new Promise(_0x360dba => {
        var _0x15024a = {
            'xxfEi': function(_0x424e52, _0x4ea903) {
                return _0xf6e9a5['EiOWC'](_0x424e52, _0x4ea903);
            },
            'UuArz': function(_0x4d7835, _0x3ce476) {
                return _0xf6e9a5['cIPrL'](_0x4d7835, _0x3ce476);
            },
            'IGzFz': _0xf6e9a5['dRNUB'],
            'gMDQR': _0xf6e9a5['HkJWp'],
            'GXRIN': function(_0xb62b7, _0x33738e) {
                return _0xf6e9a5['Mvpwj'](_0xb62b7, _0x33738e);
            },
            'paNKC': function(_0x1a7a68, _0x35c72a) {
                return _0xf6e9a5['fQjKY'](_0x1a7a68, _0x35c72a);
            },
            'ADVFh': function(_0x4c7d7c, _0x199338) {
                return _0xf6e9a5['txmVZ'](_0x4c7d7c, _0x199338);
            }
        };
        if (_0xf6e9a5['txmVZ'](_0xf6e9a5['xQGjr'], _0xf6e9a5['xQGjr'])) {
            const _0x3d3167 = {
                'url': JD_API_HOST + 'jxcfd/user/ActiveScene?strZone=jxcfd&bizCode=jxcfd&source=jxcfd&dwEnv=7&_cfd_t=' + Date['now']() + '&ptag=&dwSceneId=' + _0xf6e9a5['eQtAq'](Number, _0x301074) + '&_stk=_cfd_t,bizCode,dwEnv,dwSceneId,ptag,source,strZone&_ste=1&h5st=20210304125239873;1540797227618115;10009;tk01we7831daaa8nRzRiUm4rZjRynBiuCHXtzWJmGCtVH2P+YnfnjoIsTWS87p85/fH4kcisjwWpqa10pRs3zMclNzix;5a9afbeb82bbb4e5e62cfe4b72965b5a2bf12cc3c56817b53e93a1cead562dc4&_=' + Date['now']() + '&sceneval=2&g_login_type=1',
                'headers': {
                    'Cookie': cookie,
                    'Accept': _0xf6e9a5['sjUWz'],
                    'Connection': _0xf6e9a5['jEHZA'],
                    'Referer': _0xf6e9a5['OapcN'],
                    'Accept-Encoding': _0xf6e9a5['BGUUp'],
                    'Host': _0xf6e9a5['YyzUu'],
                    'User-Agent': 'jdpingou;iPhone;3.15.2;14.2.1;ea00763447803eb0f32045dcba629c248ea53bb3;network/wifi;model/iPhone13,2;appBuild/100365;ADID/00000000-0000-0000-0000-000000000000;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/0;hasOCPay/0;supportBestPay/0;session/' + _0xf6e9a5['zDcwz'](_0xf6e9a5['aSojk'](Math['random'], 0x62), 0x1) + ';pap/JA2015_311210;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
                    'Accept-Language': _0xf6e9a5['gFcon']
                }
            };
            $['get'](_0x3d3167, (_0x4f7c9e, _0x181291, _0x43bf87) => {
                try {
                    if (_0xf6e9a5['kPFUE'](_0xf6e9a5['dXnWq'], _0xf6e9a5['oJozY'])) {
                        if (_0x43bf87) {
                            console['log']('开通场景结果:' + _0x43bf87 + '\x0a');
                        }
                    } else {
                        console['log']('此账号的用户名为中文,暂不能进行超级主力\n');
                    }
                } catch (_0x56bb8c) {
                    if (_0xf6e9a5['cIPrL'](_0xf6e9a5['PdBVf'], _0xf6e9a5['Jlykv'])) {
                        $['logErr'](_0x56bb8c, _0x181291);
                    } else {
                        console['log']('此账号cookie填写不规范,你的pt_pin=xxx后面没分号(;)\n');
                        _0x15024a['xxfEi'](_0x360dba, null);
                    }
                } finally {
                    if (_0xf6e9a5['cIPrL'](_0xf6e9a5['RayeM'], _0xf6e9a5['ZMeuP'])) {
                        _0xf6e9a5['CrWXM'](_0x360dba);
                    } else {
                        const {
                            msg,
                            ret,
                            data: {
                                prizeInfo = ''
                            } = {}
                        } = JSON['parse'](_0x43bf87);
                        let _0x35bc8f = '';
                        if (_0x15024a['UuArz'](msg['indexOf'](_0x15024a['IGzFz']), -0x1)) {
                            _0x35bc8f = _0x15024a['gMDQR'];
                        } else {
                            _0x35bc8f = _0x15024a['GXRIN'](msg, prizeInfo) ? ' 获得财富值 ¥ ' + JSON['parse'](prizeInfo)['ddwMoney'] : '';
                        }
                        $['log']('\x0a' + taskName + '【领日常奖励】：' + _0x35bc8f + '\x0a' + ($['showLog'] ? _0x43bf87 : ''));
                        _0x15024a['paNKC'](_0x360dba, _0x15024a['ADVFh'](ret, 0x0));
                    }
                }
            });
        } else {
            $['logErr'](e, resp);
        }
    });
}

function taskUrl(_0x5c72f1, _0x47ac95) {
    var _0x1ba7eb = {
        'jWgWA': '*/*',
        'giJnu': 'keep-alive',
        'uaNup': 'https://st.jingxi.com/fortune_island/index.html?ptag=138631.26.55',
        'UFyIo': 'gzip, deflate, br',
        'HaKzB': 'm.jingxi.com',
        'jllys': function(_0x5af32e, _0x4179ac) {
            return _0x5af32e + _0x4179ac;
        },
        'ckpoy': function(_0x5c0f91, _0x4f7046) {
            return _0x5c0f91 * _0x4f7046;
        },
        'fZXBX': 'zh-cn'
    };
    return {
        'url': JD_API_HOST + 'jxcfd/' + _0x5c72f1 + '?strZone=jxcfd&bizCode=jxcfd&source=jxcfd&dwEnv=7&_cfd_t=' + Date['now']() + '&ptag=138631.26.55&' + _0x47ac95 + '&_ste=1&_=' + Date['now']() + '&sceneval=2&g_login_type=1&g_ty=ls',
        'headers': {
            'Cookie': cookie,
            'Accept': _0x1ba7eb['jWgWA'],
            'Connection': _0x1ba7eb['giJnu'],
            'Referer': _0x1ba7eb['uaNup'],
            'Accept-Encoding': _0x1ba7eb['UFyIo'],
            'Host': _0x1ba7eb['HaKzB'],
            'User-Agent': 'jdpingou;iPhone;3.15.2;14.2.1;ea00763447803eb0f32045dcba629c248ea53bb3;network/wifi;model/iPhone13,2;appBuild/100365;ADID/00000000-0000-0000-0000-000000000000;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/0;hasOCPay/0;supportBestPay/0;session/' + _0x1ba7eb['jllys'](_0x1ba7eb['ckpoy'](Math['random'], 0x62), 0x1) + ';pap/JA2015_311210;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
            'Accept-Language': _0x1ba7eb['fZXBX']
        },
        'timeout': 0x2710
    };
}

function taskListUrl(_0x3123d6, _0x66c22b) {
    var _0x4a351c = {
        'DCjhE': '*/*',
        'vBtaa': 'keep-alive',
        'rCpdf': 'https://st.jingxi.com/fortune_island/index.html?ptag=138631.26.55',
        'pGBBA': 'gzip, deflate, br',
        'Rpntn': 'm.jingxi.com',
        'RDxWj': function(_0x3f783e, _0x168d55) {
            return _0x3f783e + _0x168d55;
        },
        'kSBWP': function(_0x4c97e9, _0x14ec13) {
            return _0x4c97e9 * _0x14ec13;
        },
        'TFRNO': 'zh-cn'
    };
    return {
        'url': JD_API_HOST + 'newtasksys/newtasksys_front/' + _0x3123d6 + '?strZone=jxcfd&bizCode=jxcfd&source=jxcfd&dwEnv=7&_cfd_t=' + Date['now']() + '&ptag=138631.26.55&' + _0x66c22b + '&_ste=1&_=' + Date['now']() + '&sceneval=2&g_login_type=1&g_ty=ls',
        'headers': {
            'Cookie': cookie,
            'Accept': _0x4a351c['DCjhE'],
            'Connection': _0x4a351c['vBtaa'],
            'Referer': _0x4a351c['rCpdf'],
            'Accept-Encoding': _0x4a351c['pGBBA'],
            'Host': _0x4a351c['Rpntn'],
            'User-Agent': 'jdpingou;iPhone;3.15.2;14.2.1;ea00763447803eb0f32045dcba629c248ea53bb3;network/wifi;model/iPhone13,2;appBuild/100365;ADID/00000000-0000-0000-0000-000000000000;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/0;hasOCPay/0;supportBestPay/0;session/' + _0x4a351c['RDxWj'](_0x4a351c['kSBWP'](Math['random'], 0x62), 0x1) + ';pap/JA2015_311210;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
            'Accept-Language': _0x4a351c['TFRNO']
        },
        'timeout': 0x2710
    };
}

function showMsg() {
    var _0x490e63 = {
        'lgpTI': function(_0xb32115) {
            return _0xb32115();
        },
        'zpehI': 'base',
        'OLAcg': function(_0x2832b1, _0x30e91c) {
            return _0x2832b1 === _0x30e91c;
        },
        'feEQx': 'EFrUH',
        'Nrdxj': function(_0x2a9e21, _0x2f55f9) {
            return _0x2a9e21 === _0x2f55f9;
        },
        'WvKAD': 'uWDRT',
        'ullgU': 'HH:mm',
        'zrRoA': function(_0x470a8a, _0x8ddd0d) {
            return _0x470a8a !== _0x8ddd0d;
        },
        'VHZMp': 'OpqzD',
        'curNe': 'IicJP',
        'JOdIR': function(_0x5d9080, _0x2259cd) {
            return _0x5d9080 === _0x2259cd;
        },
        'HlwjW': 'lvrvw',
        'VOKup': 'lOvrM',
        'fdXsD': function(_0x3ff388) {
            return _0x3ff388();
        }
    };
    return new Promise(async _0x4225a9 => {
        var _0x1f842b = {
            'NMAPo': function(_0x57ad30) {
                return _0x490e63['lgpTI'](_0x57ad30);
            }
        };
        if (_0x490e63['OLAcg'](_0x490e63['feEQx'], _0x490e63['feEQx'])) {
            if ($['result']['length']) {
                if ($['notifyTime']) {
                    if (_0x490e63['Nrdxj'](_0x490e63['WvKAD'], _0x490e63['WvKAD'])) {
                        const _0x109279 = $['notifyTime']['split'](',')['map'](_0x4786d6 => _0x4786d6['split'](':'));
                        const _0x11f7a1 = $['time'](_0x490e63['ullgU'])['split'](':');
                        $['log']('\x0a' + JSON['stringify'](_0x109279));
                        $['log']('\x0a' + JSON['stringify'](_0x11f7a1));
                        if (_0x109279['some'](_0x40913b => _0x40913b[0x0] === _0x11f7a1[0x0] && (!_0x40913b[0x1] || _0x40913b[0x1] === _0x11f7a1[0x1]))) {
                            if (_0x490e63['zrRoA'](_0x490e63['VHZMp'], _0x490e63['curNe'])) {
                                $['msg']($['name'], '', '' + $['result']['join']('\x0a'));
                            } else {
                                _0x1f842b['NMAPo'](_0x4225a9);
                            }
                        }
                    } else {
                        _0x490e63['lgpTI'](_0x4225a9);
                    }
                } else {
                    if (_0x490e63['JOdIR'](_0x490e63['HlwjW'], _0x490e63['VOKup'])) {
                        if (data) {
                            console['log']('开通场景结果:' + data + '\x0a');
                        }
                    } else {
                        $['msg']($['name'], '', '' + $['result']['join']('\x0a'));
                    }
                }
                if ($['isNode']() && process['env']['CFD_NOTIFY_CONTROL']) await notify['sendNotify']($['name'] + ' - 账号' + $['index'] + ' - ' + $['nickName'], '' + $['result']['join']('\x0a'));
            }
            _0x490e63['fdXsD'](_0x4225a9);
        } else {
            $['nickName'] = data[_0x490e63['zpehI']] && data[_0x490e63['zpehI']]['nickname'] || $['UserName'];
        }
    });
}

function TotalBean() {
    var _0x457346 = {
        'DNVpY': function(_0x4ddae4, _0x473f42) {
            return _0x4ddae4 + _0x473f42;
        },
        'LcEDp': function(_0x3d1a1c, _0xbcd3eb) {
            return _0x3d1a1c === _0xbcd3eb;
        },
        'FNdkV': 'retcode',
        'iFDzd': function(_0x401490, _0x545644) {
            return _0x401490 !== _0x545644;
        },
        'UWPHR': 'DzLlL',
        'UQCDM': function(_0x433c2b, _0x222181) {
            return _0x433c2b === _0x222181;
        },
        'NmvNL': 'qWIjz',
        'yiuah': 'base',
        'qpbHU': function(_0x4361f3, _0x5fd6f) {
            return _0x4361f3 === _0x5fd6f;
        },
        'BFjfM': 'orvDH',
        'dhKEH': 'JMuen',
        'gkqxB': function(_0x58770b) {
            return _0x58770b();
        },
        'SGJUe': function(_0x50d072) {
            return _0x50d072();
        },
        'GCIlf': function(_0x465a3e, _0x4a599c) {
            return _0x465a3e !== _0x4a599c;
        },
        'khqtL': 'RsqPx',
        'iGQgl': 'application/json,text/plain, */*',
        'yRMTW': 'application/x-www-form-urlencoded',
        'tmTpD': 'gzip, deflate, br',
        'UmTrO': 'zh-cn',
        'GyXAb': 'keep-alive',
        'PySMV': 'https://wqs.jd.com/my/jingdou/my.shtml?sceneval=2',
        'oFOEf': function(_0x3741dd, _0x5c7ff0) {
            return _0x3741dd(_0x5c7ff0);
        },
        'fYbHK': './USER_AGENTS',
        'VhOKk': 'JDUA',
        'EHguu': 'jdapp;iPhone;9.2.2;14.2;%E4%BA%AC%E4%B8%9C/9.2.2 CFNetwork/1206 Darwin/20.1.0'
    };
    return new Promise(async _0x5dbae5 => {
        var _0x30bcb3 = {
            'warFu': function(_0xb4f4b4) {
                return _0x457346['SGJUe'](_0xb4f4b4);
            }
        };
        if (_0x457346['GCIlf'](_0x457346['khqtL'], _0x457346['khqtL'])) {
            $['logErr'](e, resp);
        } else {
            const _0x2e1557 = {
                'url': 'https://wq.jd.com/user/info/QueryJDUserInfo?sceneval=2',
                'headers': {
                    'Accept': _0x457346['iGQgl'],
                    'Content-Type': _0x457346['yRMTW'],
                    'Accept-Encoding': _0x457346['tmTpD'],
                    'Accept-Language': _0x457346['UmTrO'],
                    'Connection': _0x457346['GyXAb'],
                    'Cookie': cookie,
                    'Referer': _0x457346['PySMV'],
                    'User-Agent': $['isNode']() ? process['env']['JD_USER_AGENT'] ? process['env']['JD_USER_AGENT'] : _0x457346['oFOEf'](require, _0x457346['fYbHK'])['USER_AGENT'] : $['getdata'](_0x457346['VhOKk']) ? $['getdata'](_0x457346['VhOKk']) : _0x457346['EHguu']
                }
            };
            $['post'](_0x2e1557, (_0x111dca, _0x55c1d8, _0xcc4b12) => {
                var _0x4560e8 = {
                    'NPTCX': function(_0x4cc1b7, _0x498300) {
                        return _0x457346['DNVpY'](_0x4cc1b7, _0x498300);
                    }
                };
                try {
                    if (_0x111dca) {
                        console['log']('' + JSON['stringify'](_0x111dca));
                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                    } else {
                        if (_0xcc4b12) {
                            _0xcc4b12 = JSON['parse'](_0xcc4b12);
                            if (_0x457346['LcEDp'](_0xcc4b12[_0x457346['FNdkV']], 0xd)) {
                                if (_0x457346['iFDzd'](_0x457346['UWPHR'], _0x457346['UWPHR'])) {
                                    const {
                                        dwGetMoney,
                                        iRet,
                                        sErrMsg
                                    } = JSON['parse'](_0xcc4b12);
                                    $['log']('\n🤏偷取好友【' + strFriendNick + '】【' + strSceneName + '】财富值：¥ ' + (dwGetMoney ? dwGetMoney : sErrMsg) + '\x0a' + ($['showLog'] ? _0xcc4b12 : ''));
                                } else {
                                    $['isLogin'] = ![];
                                    return;
                                }
                            }
                            if (_0x457346['LcEDp'](_0xcc4b12[_0x457346['FNdkV']], 0x0)) {
                                if (_0x457346['UQCDM'](_0x457346['NmvNL'], _0x457346['NmvNL'])) {
                                    $['nickName'] = _0xcc4b12[_0x457346['yiuah']] && _0xcc4b12[_0x457346['yiuah']]['nickname'] || $['UserName'];
                                } else {
                                    str = _0x4560e8['NPTCX'](msg, prizeInfo) ? ' 获得财富值 ¥ ' + JSON['parse'](prizeInfo)['ddwMoney'] : '';
                                }
                            } else {
                                $['nickName'] = $['UserName'];
                            }
                        } else {
                            console['log']('京东服务器返回空数据');
                        }
                    }
                } catch (_0x27d260) {
                    if (_0x457346['qpbHU'](_0x457346['BFjfM'], _0x457346['dhKEH'])) {
                        try {
                            const {
                                iRet,
                                sErrMsg,
                                dwExpericnce
                            } = JSON['parse'](_0xcc4b12);
                            $['log']('\x0a' + strTaskDescr + '【领成就奖励】： success 获得财富值：¥ ' + dwExpericnce + '\x0a' + ($['showLog'] ? _0xcc4b12 : ''));
                        } catch (_0x17271a) {
                            $['logErr'](_0x17271a, _0x55c1d8);
                        } finally {
                            _0x30bcb3['warFu'](_0x5dbae5);
                        }
                    } else {
                        $['logErr'](_0x27d260, _0x55c1d8);
                    }
                } finally {
                    _0x457346['gkqxB'](_0x5dbae5);
                }
            });
        }
    });
}

function readShareCode() {
    var _0xab7b9b = {
        'cwPfn': function(_0x11e2b3, _0xa514c1) {
            return _0x11e2b3 === _0xa514c1;
        },
        'TSGwV': function(_0xfca8ef, _0x4e8486) {
            return _0xfca8ef === _0x4e8486;
        },
        'BFwum': function(_0x38f8ac) {
            return _0x38f8ac();
        },
        'AbcHO': function(_0x529e47, _0x214ff3) {
            return _0x529e47 > _0x214ff3;
        },
        'tiOPK': function(_0x3363ce, _0x2d5bdd) {
            return _0x3363ce === _0x2d5bdd;
        },
        'igano': 'erYRj',
        'HWeGi': 'GxeuE',
        'BkXaQ': 'vFfpg',
        'MzAIn': 'ImBow',
        'ceQwf': function(_0x4ad29f, _0x2d1b88) {
            return _0x4ad29f(_0x2d1b88);
        },
        'SIsxG': function(_0x2724dd, _0x434864) {
            return _0x2724dd !== _0x434864;
        },
        'yxHOZ': 'JkPAd',
        'oJGBY': function(_0x56ed8b) {
            return _0x56ed8b();
        }
    };
    console['log']('开始');
    return new Promise(async _0x35a09e => {
        var _0x2158f4 = {
            'eXjzm': function(_0x2cc1b3) {
                return _0xab7b9b['BFwum'](_0x2cc1b3);
            },
            'QmThU': function(_0x54d904, _0x57c7ed) {
                return _0xab7b9b['AbcHO'](_0x54d904, _0x57c7ed);
            },
            'SRESi': function(_0x282592, _0x15e9dc) {
                return _0xab7b9b['tiOPK'](_0x282592, _0x15e9dc);
            },
            'toyYv': _0xab7b9b['igano'],
            'liugN': _0xab7b9b['HWeGi'],
            'CLego': _0xab7b9b['BkXaQ'],
            'WCyvW': _0xab7b9b['MzAIn'],
            'RqOsn': function(_0x345780, _0x17183b) {
                return _0xab7b9b['ceQwf'](_0x345780, _0x17183b);
            }
        };
        if (_0xab7b9b['SIsxG'](_0xab7b9b['yxHOZ'], _0xab7b9b['yxHOZ'])) {
            const {
                sErrMsg,
                iRet
            } = JSON['parse'](data);
            if (_0xab7b9b['cwPfn'](iRet, 0x7d5) || _0xab7b9b['TSGwV'](iRet, 0x270f)) $['canHelp'] = ![];
            $['log']('' + sErrMsg);
        } else {
            $['get']({
                'url': 'http://jd.turinglabs.net/api/v2/jd/jxcfd/read/0/',
                'timeout': 0x2710
            }, (_0x96d2fb, _0x1cce22, _0x486839) => {
                var _0x25a24d = {
                    'TkmkH': function(_0x4880a4, _0x324e4b) {
                        return _0x2158f4['QmThU'](_0x4880a4, _0x324e4b);
                    }
                };
                try {
                    if (_0x2158f4['SRESi'](_0x2158f4['toyYv'], _0x2158f4['liugN'])) {
                        _0x2158f4['eXjzm'](_0x35a09e);
                    } else {
                        if (_0x96d2fb) {
                            console['log']('' + JSON['stringify'](_0x96d2fb));
                            console['log']($['name'] + ' API请求失败，请检查网路重试');
                        } else {
                            if (_0x486839) {
                                if (_0x2158f4['SRESi'](_0x2158f4['CLego'], _0x2158f4['WCyvW'])) {
                                    if (_0x25a24d['TkmkH'](process['env']['JDCFD_SHARECODES']['indexOf']('\x0a'), -0x1)) {
                                        shareCodes = process['env']['JDCFD_SHARECODES']['split']('\x0a');
                                    } else {
                                        shareCodes = process['env']['JDCFD_SHARECODES']['split']('&');
                                    }
                                } else {
                                    console['log']('随机取0个码放到您固定的互助码后面(不影响已有固定互助)');
                                    _0x486839 = JSON['parse'](_0x486839);
                                }
                            }
                        }
                    }
                } catch (_0x44d654) {
                    $['logErr'](_0x44d654, _0x1cce22);
                } finally {
                    _0x2158f4['RqOsn'](_0x35a09e, _0x486839);
                }
            });
            await $['wait'](0x2710);
            _0xab7b9b['oJGBY'](_0x35a09e);
        }
    });
}

function shareCodesFormat() {
    var _0x4228b5 = {
        'zmgQu': '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie',
        'Riwai': function(_0x2c769f, _0x322ab9) {
            return _0x2c769f === _0x322ab9;
        },
        'ILbkJ': 'ChqRd',
        'qDiiu': function(_0x26c16f, _0x10b0aa) {
            return _0x26c16f - _0x10b0aa;
        },
        'Vipoh': function(_0x5e650a, _0x49615d) {
            return _0x5e650a === _0x49615d;
        },
        'kiJbj': 'zBbfj',
        'ugsOx': 'piOCI',
        'ppCby': function(_0x55ac6d, _0x31f021) {
            return _0x55ac6d === _0x31f021;
        },
        'AKIFc': 'ylkGc',
        'WMjYq': function(_0x17cd36) {
            return _0x17cd36();
        },
        'GbcOI': function(_0x479aab, _0x159721) {
            return _0x479aab === _0x159721;
        },
        'RHIJs': 'F45CB4F07997DFE748E5656521A9034446A1568F6950206B0D44A5664662275D',
        'zIVzm': function(_0xac841b) {
            return _0xac841b();
        }
    };
    return new Promise(async _0x3cdee2 => {
        var _0x15b5bd = {
            'IpzHC': _0x4228b5['zmgQu']
        };
        if (_0x4228b5['Riwai'](_0x4228b5['ILbkJ'], _0x4228b5['ILbkJ'])) {
            $['newShareCodes'] = [];
            if ($['shareCodesArr'][_0x4228b5['qDiiu']($['index'], 0x1)]) {
                if (_0x4228b5['Vipoh'](_0x4228b5['kiJbj'], _0x4228b5['ugsOx'])) {
                    $['logErr'](e, resp);
                } else {
                    $['newShareCodes'] = $['shareCodesArr'][_0x4228b5['qDiiu']($['index'], 0x1)]['split']('@');
                }
            } else {
                if (_0x4228b5['ppCby'](_0x4228b5['AKIFc'], _0x4228b5['AKIFc'])) {
                    console['log']('由于您第' + $['index'] + '个京东账号未提供shareCode,将采纳本脚本自带的助力码\n');
                    $['newShareCodes'] = $['strMyShareIds'];
                } else {
                    const {
                        ret,
                        data: {
                            userTaskStatusList = []
                        } = {},
                        msg
                    } = JSON['parse'](data);
                    $['allTask'] = userTaskStatusList['filter'](_0x1a2cb7 => _0x1a2cb7['awardStatus'] !== 0x1);
                    $['log']('\n获取【📆日常任务】列表 ' + msg + '，总共' + $['allTask']['length'] + '个任务！\n' + ($['showLog'] ? data : ''));
                }
            }
            const _0x5d5570 = await _0x4228b5['WMjYq'](readShareCode);
            if (_0x5d5570 && _0x4228b5['GbcOI'](_0x5d5570['code'], 0xc8)) {
                $['newShareCodes'] = [...new Set([...$['newShareCodes'], ...$['strMyShareIds'], _0x4228b5['RHIJs'], ..._0x5d5570['data'] || []])];
            }
            console['log']('第' + $['index'] + '个京东账号将要助力的好友' + JSON['stringify']($['newShareCodes']));
            _0x4228b5['zIVzm'](_0x3cdee2);
        } else {
            try {
                return JSON['parse'](str);
            } catch (_0x1c0e55) {
                console['log'](_0x1c0e55);
                $['msg']($['name'], '', _0x15b5bd['IpzHC']);
                return [];
            }
        }
    });
}

function requireConfig() {
    var _0x495fd2 = {
        'Aooeb': function(_0x375965, _0x35b703) {
            return _0x375965 !== _0x35b703;
        },
        'tyDUe': 'jKpVA',
        'nATtw': function(_0x574ea0, _0x5d1400) {
            return _0x574ea0 > _0x5d1400;
        },
        'feXTL': 'jd_jxCFD',
        'WUiNs': function(_0x56993c) {
            return _0x56993c();
        }
    };
    return new Promise(_0x39901c => {
        var _0x3da2b6 = {
            'zwOwU': function(_0x43f238, _0x325c96) {
                return _0x495fd2['Aooeb'](_0x43f238, _0x325c96);
            },
            'VygpQ': _0x495fd2['tyDUe']
        };
        console['log']('开始获取' + $['name'] + '配置文件\n');
        let _0x4b645e = [];
        if ($['isNode']() && process['env']['JDCFD_SHARECODES']) {
            if (_0x495fd2['nATtw'](process['env']['JDCFD_SHARECODES']['indexOf']('\x0a'), -0x1)) {
                _0x4b645e = process['env']['JDCFD_SHARECODES']['split']('\x0a');
            } else {
                _0x4b645e = process['env']['JDCFD_SHARECODES']['split']('&');
            }
        }
        $['shareCodesArr'] = [];
        if ($['isNode']()) {
            Object['keys'](_0x4b645e)['forEach'](_0x269963 => {
                if (_0x3da2b6['zwOwU'](_0x3da2b6['VygpQ'], _0x3da2b6['VygpQ'])) {
                    _0x4b645e = process['env']['JDCFD_SHARECODES']['split']('\x0a');
                } else {
                    if (_0x4b645e[_0x269963]) {
                        $['shareCodesArr']['push'](_0x4b645e[_0x269963]);
                    }
                }
            });
        } else {
            if ($['getdata'](_0x495fd2['feXTL'])) $['shareCodesArr'] = $['getdata'](_0x495fd2['feXTL'])['split']('\x0a')['filter'](_0xaa504c => !!_0xaa504c);
            console['log']('\nBoxJs设置的京喜财富岛邀请码:' + $['getdata'](_0x495fd2['feXTL']) + '\x0a');
        }
        console['log']('您提供了' + $['shareCodesArr']['length'] + '个账号的' + $['name'] + '助力码\n');
        _0x495fd2['WUiNs'](_0x39901c);
    });
}

function jsonParse(_0xaf31f1) {
    var _0x2326e4 = {
        'ObcGh': function(_0x1ab39c, _0xac528) {
            return _0x1ab39c == _0xac528;
        },
        'bMyad': 'string',
        'FFatN': function(_0x44ef88, _0x51193e) {
            return _0x44ef88 !== _0x51193e;
        },
        'fcUar': 'Tekkx',
        'MdGnD': 'AQXuM',
        'GMKBj': '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie'
    };
    if (_0x2326e4['ObcGh'](typeof _0xaf31f1, _0x2326e4['bMyad'])) {
        try {
            if (_0x2326e4['FFatN'](_0x2326e4['fcUar'], _0x2326e4['MdGnD'])) {
                return JSON['parse'](_0xaf31f1);
            } else {
                $['msg']($['name'], '', '' + $['result']['join']('\x0a'));
            }
        } catch (_0x40703c) {
            console['log'](_0x40703c);
            $['msg']($['name'], '', _0x2326e4['GMKBj']);
            return [];
        }
    }
};
_0xodL = 'jsjiami.com.v6'
!function(n){"use strict";function t(n,t){var r=(65535&n)+(65535&t);return(n>>16)+(t>>16)+(r>>16)<<16|65535&r}function r(n,t){return n<<t|n>>>32-t}function e(n,e,o,u,c,f){return t(r(t(t(e,n),t(u,f)),c),o)}function o(n,t,r,o,u,c,f){return e(t&r|~t&o,n,t,u,c,f)}function u(n,t,r,o,u,c,f){return e(t&o|r&~o,n,t,u,c,f)}function c(n,t,r,o,u,c,f){return e(t^r^o,n,t,u,c,f)}function f(n,t,r,o,u,c,f){return e(r^(t|~o),n,t,u,c,f)}function i(n,r){n[r>>5]|=128<<r%32,n[14+(r+64>>>9<<4)]=r;var e,i,a,d,h,l=1732584193,g=-271733879,v=-1732584194,m=271733878;for(e=0;e<n.length;e+=16)i=l,a=g,d=v,h=m,g=f(g=f(g=f(g=f(g=c(g=c(g=c(g=c(g=u(g=u(g=u(g=u(g=o(g=o(g=o(g=o(g,v=o(v,m=o(m,l=o(l,g,v,m,n[e],7,-680876936),g,v,n[e+1],12,-389564586),l,g,n[e+2],17,606105819),m,l,n[e+3],22,-1044525330),v=o(v,m=o(m,l=o(l,g,v,m,n[e+4],7,-176418897),g,v,n[e+5],12,1200080426),l,g,n[e+6],17,-1473231341),m,l,n[e+7],22,-45705983),v=o(v,m=o(m,l=o(l,g,v,m,n[e+8],7,1770035416),g,v,n[e+9],12,-1958414417),l,g,n[e+10],17,-42063),m,l,n[e+11],22,-1990404162),v=o(v,m=o(m,l=o(l,g,v,m,n[e+12],7,1804603682),g,v,n[e+13],12,-40341101),l,g,n[e+14],17,-1502002290),m,l,n[e+15],22,1236535329),v=u(v,m=u(m,l=u(l,g,v,m,n[e+1],5,-165796510),g,v,n[e+6],9,-1069501632),l,g,n[e+11],14,643717713),m,l,n[e],20,-373897302),v=u(v,m=u(m,l=u(l,g,v,m,n[e+5],5,-701558691),g,v,n[e+10],9,38016083),l,g,n[e+15],14,-660478335),m,l,n[e+4],20,-405537848),v=u(v,m=u(m,l=u(l,g,v,m,n[e+9],5,568446438),g,v,n[e+14],9,-1019803690),l,g,n[e+3],14,-187363961),m,l,n[e+8],20,1163531501),v=u(v,m=u(m,l=u(l,g,v,m,n[e+13],5,-1444681467),g,v,n[e+2],9,-51403784),l,g,n[e+7],14,1735328473),m,l,n[e+12],20,-1926607734),v=c(v,m=c(m,l=c(l,g,v,m,n[e+5],4,-378558),g,v,n[e+8],11,-2022574463),l,g,n[e+11],16,1839030562),m,l,n[e+14],23,-35309556),v=c(v,m=c(m,l=c(l,g,v,m,n[e+1],4,-1530992060),g,v,n[e+4],11,1272893353),l,g,n[e+7],16,-155497632),m,l,n[e+10],23,-1094730640),v=c(v,m=c(m,l=c(l,g,v,m,n[e+13],4,681279174),g,v,n[e],11,-358537222),l,g,n[e+3],16,-722521979),m,l,n[e+6],23,76029189),v=c(v,m=c(m,l=c(l,g,v,m,n[e+9],4,-640364487),g,v,n[e+12],11,-421815835),l,g,n[e+15],16,530742520),m,l,n[e+2],23,-995338651),v=f(v,m=f(m,l=f(l,g,v,m,n[e],6,-198630844),g,v,n[e+7],10,1126891415),l,g,n[e+14],15,-1416354905),m,l,n[e+5],21,-57434055),v=f(v,m=f(m,l=f(l,g,v,m,n[e+12],6,1700485571),g,v,n[e+3],10,-1894986606),l,g,n[e+10],15,-1051523),m,l,n[e+1],21,-2054922799),v=f(v,m=f(m,l=f(l,g,v,m,n[e+8],6,1873313359),g,v,n[e+15],10,-30611744),l,g,n[e+6],15,-1560198380),m,l,n[e+13],21,1309151649),v=f(v,m=f(m,l=f(l,g,v,m,n[e+4],6,-145523070),g,v,n[e+11],10,-1120210379),l,g,n[e+2],15,718787259),m,l,n[e+9],21,-343485551),l=t(l,i),g=t(g,a),v=t(v,d),m=t(m,h);return[l,g,v,m]}function a(n){var t,r="",e=32*n.length;for(t=0;t<e;t+=8)r+=String.fromCharCode(n[t>>5]>>>t%32&255);return r}function d(n){var t,r=[];for(r[(n.length>>2)-1]=void 0,t=0;t<r.length;t+=1)r[t]=0;var e=8*n.length;for(t=0;t<e;t+=8)r[t>>5]|=(255&n.charCodeAt(t/8))<<t%32;return r}function h(n){return a(i(d(n),8*n.length))}function l(n,t){var r,e,o=d(n),u=[],c=[];for(u[15]=c[15]=void 0,o.length>16&&(o=i(o,8*n.length)),r=0;r<16;r+=1)u[r]=909522486^o[r],c[r]=1549556828^o[r];return e=i(u.concat(d(t)),512+8*t.length),a(i(c.concat(e),640))}function g(n){var t,r,e="";for(r=0;r<n.length;r+=1)t=n.charCodeAt(r),e+="0123456789abcdef".charAt(t>>>4&15)+"0123456789abcdef".charAt(15&t);return e}function v(n){return unescape(encodeURIComponent(n))}function m(n){return h(v(n))}function p(n){return g(m(n))}function s(n,t){return l(v(n),v(t))}function C(n,t){return g(s(n,t))}function A(n,t,r){return t?r?s(t,n):C(t,n):r?m(n):p(n)}$.md5=A}(this);
// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
