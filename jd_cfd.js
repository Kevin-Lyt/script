/*
京喜财富岛
根据github@MoPoQAQ 财富岛脚本修改而来。无需京喜token,只需京东cookie即可.
cron 5 0,8,13,19 * * * jd_cfd.js
更新时间：2021-4-15
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
$.result = [];$.shareCodes = [];
let cookiesArr = [], cookie = '', token;


/*
 *Progcessed By JSDec in 10.75s
 *JSDec - JSDec.js.org
 */
const randomCount = $['isNode']() ? 0x14 : 0x5;
if ($['isNode']()) {
    Object['keys'](jdCookieNode)['forEach'](_0xf2292a => {
        cookiesArr['push'](jdCookieNode[_0xf2292a]);
    });
    if (process['env']['JD_DEBUG'] && process['env']['JD_DEBUG'] === 'false') console['log'] = () => {};
    if (JSON['stringify'](process['env'])['indexOf']('GITHUB') > -0x1) process['exit'](0x0);
} else {
    cookiesArr = [$['getdata']('CookieJD'), $['getdata']('CookieJD2'), ...jsonParse($['getdata']('CookiesJD') || '[]')['map'](_0x1bee3d => _0x1bee3d['cookie'])]['filter'](_0x2cb5 => !!_0x2cb5);
}!(async () => {
    var _0x397e7c = {
        'sstvA': function(_0x48fdf4) {
            return _0x48fdf4();
        },
        'sQIMJ': '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取',
        'PzCje': 'https://bean.m.jd.com/bean/signIndex.action',
        'MknOM': function(_0x997985, _0x138a5a) {
            return _0x997985(_0x138a5a);
        },
        'RGVrN': 'http://adguard.b.freefrp.net/cfd.json',
        'Zxosf': function(_0x5b129c, _0xa751f9) {
            return _0x5b129c(_0xa751f9);
        },
        'uoCZH': 'http://adguard.b.freefrp.net/cfd.json',
        'oXJwK': 'http://adguard.b.freefrp.net/cfd.json',
        'ncdCC': function(_0x5f0015, _0x3b8edb) {
            return _0x5f0015 < _0x3b8edb;
        },
        'AfWDj': function(_0x419f7e, _0xffe669) {
            return _0x419f7e !== _0xffe669;
        },
        'iPAUG': 'dbUPv',
        'eoyHw': function(_0x28f7f8, _0x153ab5) {
            return _0x28f7f8(_0x153ab5);
        },
        'CuBjQ': function(_0x5ec7a3, _0x241bb7) {
            return _0x5ec7a3 + _0x241bb7;
        },
        'MJiWx': function(_0x59ba59, _0x532114) {
            return _0x59ba59 !== _0x532114;
        },
        'lDEbH': 'ieOmA',
        'CRkaX': 'CmKAI',
        'txiGJ': 'WIUwo',
        'vihPU': 'mEksX',
        'eaNJr': function(_0xaadc74) {
            return _0xaadc74();
        },
        'fMJBw': function(_0x36ff28, _0x5b9d5b) {
            return _0x36ff28 === _0x5b9d5b;
        },
        'Fdroq': 'EJhEo',
        'NYxui': 'xBwbr',
        'qkuwP': function(_0x4354dd) {
            return _0x4354dd();
        }
    };
    await _0x397e7c['sstvA'](requireConfig);
    if (!cookiesArr[0x0]) {
        $['msg']($['name'], _0x397e7c['sQIMJ'], _0x397e7c['PzCje'], {
            'open-url': _0x397e7c['PzCje']
        });
        return;
    }
    let _0x3a1500 = await _0x397e7c['MknOM'](getAuthorShareCode, _0x397e7c['RGVrN']),
        _0x26db76 = await _0x397e7c['Zxosf'](getAuthorShareCode, _0x397e7c['uoCZH']);
    if (!_0x26db76) _0x26db76 = await _0x397e7c['Zxosf'](getAuthorShareCode, _0x397e7c['oXJwK']);
    $['strMyShareIds'] = [..._0x3a1500 && _0x3a1500['shareId'] || [], ..._0x26db76 && _0x26db76['shareId'] || []];
    $['strGroupIds'] = [..._0x3a1500 && _0x3a1500['strGroupIds'] || [], ..._0x26db76 && _0x26db76['strGroupIds'] || []];
    for (let _0x3af91e = 0x0; _0x397e7c['ncdCC'](_0x3af91e, cookiesArr['length']); _0x3af91e++) {
        if (_0x397e7c['AfWDj'](_0x397e7c['iPAUG'], _0x397e7c['iPAUG'])) {
            console['log']('' + JSON['stringify'](err));
            console['log']($['name'] + ' QueryFriendIsland API请求失败，请检查网路重试');
        } else {
            if (cookiesArr[_0x3af91e]) {
                cookie = cookiesArr[_0x3af91e];
                $['UserName'] = _0x397e7c['eoyHw'](decodeURIComponent, cookie['match'](/pt_pin=([^; ]+)(?=;?)/) && cookie['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1]);
                $['index'] = _0x397e7c['CuBjQ'](_0x3af91e, 0x1);
                $['nickName'] = '';
                $['isLogin'] = !![];
                $['nickName'] = '';
                await _0x397e7c['sstvA'](TotalBean);
                console['log']('\n开始【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']) + '\x0a');
                if (!$['isLogin']) {
                    if (_0x397e7c['MJiWx'](_0x397e7c['lDEbH'], _0x397e7c['CRkaX'])) {
                        $['msg']($['name'], '【提示】cookie已失效', '京东账号' + $['index'] + ' ' + ($['nickName'] || $['UserName']) + '\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action', {
                            'open-url': _0x397e7c['PzCje']
                        });
                        if ($['isNode']()) {
                            if (_0x397e7c['MJiWx'](_0x397e7c['txiGJ'], _0x397e7c['vihPU'])) {
                                await notify['sendNotify']($['name'] + 'cookie已失效 - ' + $['UserName'], '京东账号' + $['index'] + ' ' + $['UserName'] + '\n请重新登录获取cookie');
                            } else {
                                const {
                                    dwGetMoney,
                                    iRet,
                                    sErrMsg
                                } = JSON['parse'](data);
                                $['log']('\n🤏偷取好友【' + strFriendNick + '】【' + strSceneName + '】财富值：¥ ' + (dwGetMoney ? dwGetMoney : sErrMsg) + '\x0a' + ($['showLog'] ? data : ''));
                            }
                        }
                        continue;
                    } else {
                        console['log']('' + JSON['stringify'](err));
                        console['log']($['name'] + ' AchieveAward API请求失败，请检查网路重试');
                    }
                }
                token = await _0x397e7c['sstvA'](getJxToken);
                $['allTask'] = [];
                $['info'] = {};
                await _0x397e7c['sstvA'](shareCodesFormat);
                await _0x397e7c['eaNJr'](cfd);
            }
        }
    }
    for (let _0x59fe66 = 0x0; _0x397e7c['ncdCC'](_0x59fe66, cookiesArr['length']); _0x59fe66++) {
        if (_0x397e7c['fMJBw'](_0x397e7c['Fdroq'], _0x397e7c['NYxui'])) {
            console['log']('' + JSON['stringify'](err));
            console['log']($['name'] + ' QuerySignListV2 API请求失败，请检查网路重试');
        } else {
            cookie = cookiesArr[_0x59fe66];
            $['UserName'] = _0x397e7c['eoyHw'](decodeURIComponent, cookie['match'](/pt_pin=([^; ]+)(?=;?)/) && cookie['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1]);
            token = await _0x397e7c['eaNJr'](getJxToken);
            $['canHelp'] = !![];
            if ($['shareCodes'] && $['shareCodes']['length']) console['log']('\n\n寻宝大作战，自己账号内部循环互助\n\n');
            for (let _0x45197d of $['shareCodes']) {
                console['log']('账号' + $['UserName'] + ' 去参加 ' + _0x45197d + ' 寻宝大作战');
                await _0x397e7c['eoyHw'](joinGroup, _0x45197d);
                await $['wait'](0x1f40);
                if (!$['canHelp']) break;
            }
        }
    }
    await $['wait'](0x1f4);
    await _0x397e7c['qkuwP'](showMsg);
})()['catch'](_0x5adebe => $['logErr'](_0x5adebe))['finally'](() => $['done']());

function helpFriend() {
    var _0x30a425 = {
        'lkoFD': function(_0x4917b2, _0x115f4d) {
            return _0x4917b2 - _0x115f4d;
        },
        'JFEel': function(_0x35b517, _0x4f1347) {
            return _0x35b517 > _0x4f1347;
        },
        'Vuvan': function(_0x190af7, _0x4d2ff7) {
            return _0x190af7 * _0x4d2ff7;
        },
        'ZOFLr': function(_0x5b7155, _0xde5689) {
            return _0x5b7155 + _0xde5689;
        },
        'XhIme': function(_0x3eb599, _0x2e5999) {
            return _0x3eb599 === _0x2e5999;
        },
        'BUYcx': 'ZxFig',
        'NijWZ': 'KiTNl',
        'sdOmX': function(_0x188be1, _0x2a67f6) {
            return _0x188be1(_0x2a67f6);
        },
        'aNcSH': function(_0x45784e, _0x15976b) {
            return _0x45784e !== _0x15976b;
        },
        'dclYv': 'ytudj',
        'GYmOn': 'jDquB',
        'FaOCp': function(_0x12d86b) {
            return _0x12d86b();
        }
    };
    return new Promise(async _0x2df945 => {
        var _0x442098 = {
            'dKNlY': function(_0x41a63f, _0x24d01e) {
                return _0x30a425['lkoFD'](_0x41a63f, _0x24d01e);
            },
            'qaASS': function(_0x257aaa, _0x3e5970) {
                return _0x30a425['JFEel'](_0x257aaa, _0x3e5970);
            },
            'LyMZt': function(_0xc27a95, _0x5c81a4) {
                return _0x30a425['Vuvan'](_0xc27a95, _0x5c81a4);
            },
            'jOjhV': function(_0x3b1ed0, _0x3d9a27) {
                return _0x30a425['ZOFLr'](_0x3b1ed0, _0x3d9a27);
            }
        };
        if (_0x30a425['XhIme'](_0x30a425['BUYcx'], _0x30a425['NijWZ'])) {
            $['logErr'](e, resp);
        } else {
            $['canHelp'] = !![];
            for (let _0x1c2f4b of $['newShareCodes']['filter'](_0x3c2846 => !!_0x3c2846 && !_0x3c2846['includes']('GroupId'))) {
                console['log']('去助力好友 【' + _0x1c2f4b + '】');
                if (token) await _0x30a425['sdOmX'](createSuperAssistUser, _0x1c2f4b);
                await $['wait'](0x2710);
                await _0x30a425['sdOmX'](createAssistUser, _0x1c2f4b);
                if (!$['canHelp']) break;
                await $['wait'](0x2ee0);
            }
            if (token) {
                if (_0x30a425['aNcSH'](_0x30a425['dclYv'], _0x30a425['dclYv'])) {
                    $['logErr'](e, resp);
                } else {
                    $['canHelp'] = !![];
                    for (let _0x1d2756 of $['strGroupIds']) {
                        if (_0x30a425['aNcSH'](_0x30a425['GYmOn'], _0x30a425['GYmOn'])) {
                            let _0x327abe = arr['slice'](0x0),
                                _0x35ff35 = arr['length'],
                                _0x193425 = _0x442098['dKNlY'](_0x35ff35, count),
                                _0x135a27, _0x36bcff;
                            while (_0x442098['qaASS'](_0x35ff35--, _0x193425)) {
                                _0x36bcff = Math['floor'](_0x442098['LyMZt'](_0x442098['jOjhV'](_0x35ff35, 0x1), Math['random']()));
                                _0x135a27 = _0x327abe[_0x36bcff];
                                _0x327abe[_0x36bcff] = _0x327abe[_0x35ff35];
                                _0x327abe[_0x35ff35] = _0x135a27;
                            }
                            return _0x327abe['slice'](_0x193425);
                        } else {
                            console['log']('去参加寻宝大作战 ' + _0x1d2756 + ' 等待10秒');
                            await _0x30a425['sdOmX'](joinGroup, _0x1d2756);
                            if (!$['canHelp']) break;
                            await $['wait'](0x2710);
                        }
                    }
                }
            }
            _0x30a425['FaOCp'](_0x2df945);
        }
    });
}
async function cfd() {
    var _0xaceb61 = {
        'NbyVU': function(_0x13121c) {
            return _0x13121c();
        },
        'VwXVa': function(_0x1ed565) {
            return _0x1ed565();
        },
        'lrNSH': function(_0xd44511, _0x391996) {
            return _0xd44511(_0x391996);
        },
        'Trjbc': function(_0x1d8481) {
            return _0x1d8481();
        },
        'qOYYj': function(_0x30b056) {
            return _0x30b056();
        },
        'ebAgg': function(_0x3af722, _0x54cc43) {
            return _0x3af722(_0x54cc43);
        },
        'jzYJX': function(_0x3f7582, _0x532bcb) {
            return _0x3f7582 - _0x532bcb;
        }
    };
    try {
        const _0x26dc09 = await _0xaceb61['NbyVU'](getUserInfo);
        await $['wait'](0x1f4);
        await _0xaceb61['NbyVU'](querySignList);
        await $['wait'](0x1f4);
        await _0xaceb61['VwXVa'](getMoney);
        await $['wait'](0x1f4);
        await _0xaceb61['lrNSH'](getTaskList, 0x0);
        await $['wait'](0x1f4);
        await _0xaceb61['lrNSH'](browserTask, 0x0);
        await $['wait'](0x1f4);
        await _0xaceb61['Trjbc'](treasureHunt);
        await $['wait'](0x1f4);
        await _0xaceb61['qOYYj'](friendCircle);
        await $['wait'](0x1f4);
        await _0xaceb61['ebAgg'](getTaskList, 0x1);
        await $['wait'](0x1f4);
        await _0xaceb61['ebAgg'](browserTask, 0x1);
        await $['wait'](0x1f4);
        await _0xaceb61['qOYYj'](funCenterState);
        await $['wait'](0x1f4);
        await _0xaceb61['qOYYj'](openPeriodBox);
        await $['wait'](0x1f4);
        await _0xaceb61['qOYYj'](submitGroupId);
        await $['wait'](0x1f4);
        const _0x9a8e1d = await _0xaceb61['ebAgg'](getUserInfo, ![]);
        await _0xaceb61['qOYYj'](helpFriend);
        $['result']['push']('【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']), '【💵财富值】任务前: ' + _0x26dc09['ddwMoney'] + '\n【💵财富值】任务后: ' + _0x9a8e1d['ddwMoney'], '【💵财富值】净增值: ' + _0xaceb61['jzYJX'](_0x9a8e1d['ddwMoney'], _0x26dc09['ddwMoney']) + '\x0a');
        await _0xaceb61['qOYYj'](helpAuthor3);
    } catch (_0x1176f9) {
        $['logErr'](_0x1176f9);
    }
}

function getAuthorShareCode(_0x5b400e) {
    var _0x300542 = {
        'kOrEx': function(_0x5edb10) {
            return _0x5edb10();
        },
        'tWPAa': function(_0x5177cd, _0x474617) {
            return _0x5177cd !== _0x474617;
        },
        'zzJSO': 'quBzb',
        'jqaxj': 'YkAmV',
        'kJxtR': function(_0x1e3e82, _0x2ee92a) {
            return _0x1e3e82(_0x2ee92a);
        },
        'wBgAG': 'UJoef',
        'FrWvz': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/87.0.4280.88',
        'xCoWC': function(_0x1184aa, _0x1eae15) {
            return _0x1184aa === _0x1eae15;
        },
        'iuqWA': 'PdISl',
        'HEqgK': 'FlPDQ',
        'iscrh': function(_0x4be783, _0x8d06e0) {
            return _0x4be783(_0x8d06e0);
        },
        'eHNhg': 'tunnel',
        'OewqJ': function(_0x145a15, _0x21dad0) {
            return _0x145a15 * _0x21dad0;
        }
    };
    return new Promise(async _0x281796 => {
        var _0x390599 = {
            'PbLcR': function(_0x170a20) {
                return _0x300542['kOrEx'](_0x170a20);
            },
            'ZKkrl': function(_0x4c5e00, _0xca2a6) {
                return _0x300542['tWPAa'](_0x4c5e00, _0xca2a6);
            },
            'lMJJy': _0x300542['zzJSO'],
            'eqCbe': _0x300542['jqaxj'],
            'MkFjG': function(_0x5f1405, _0x1bcba1) {
                return _0x300542['kJxtR'](_0x5f1405, _0x1bcba1);
            },
            'lVZCU': function(_0x16a8a3, _0x2a845a) {
                return _0x300542['tWPAa'](_0x16a8a3, _0x2a845a);
            },
            'WNjMa': _0x300542['wBgAG']
        };
        const _0x50b8b0 = {
            'url': _0x5b400e + '?' + new Date(),
            'timeout': 0x2710,
            'headers': {
                'User-Agent': _0x300542['FrWvz']
            }
        };
        if ($['isNode']() && process['env']['TG_PROXY_HOST'] && process['env']['TG_PROXY_PORT']) {
            if (_0x300542['xCoWC'](_0x300542['iuqWA'], _0x300542['HEqgK'])) {
                $['log']('\n【🏝寻宝大作战】【' + strBrandName + '】开宝箱：宝箱已开启过！');
            } else {
                const _0x20ec67 = _0x300542['iscrh'](require, _0x300542['eHNhg']);
                const _0x45afed = {
                    'https': _0x20ec67['httpsOverHttp']({
                        'proxy': {
                            'host': process['env']['TG_PROXY_HOST'],
                            'port': _0x300542['OewqJ'](process['env']['TG_PROXY_PORT'], 0x1)
                        }
                    })
                };
                Object['assign'](_0x50b8b0, {
                    'agent': _0x45afed
                });
            }
        }
        $['get'](_0x50b8b0, async (_0x4ee90e, _0xd35db3, _0x326963) => {
            try {
                if (_0x390599['ZKkrl'](_0x390599['lMJJy'], _0x390599['eqCbe'])) {
                    _0x390599['MkFjG'](_0x281796, JSON['parse'](_0x326963));
                } else {
                    _0x390599['PbLcR'](_0x281796);
                }
            } catch (_0x1ac011) {} finally {
                if (_0x390599['lVZCU'](_0x390599['WNjMa'], _0x390599['WNjMa'])) {
                    $['log']('\n📌签到：你今日已签到过啦，请明天再来');
                } else {
                    _0x390599['PbLcR'](_0x281796);
                }
            }
        });
        await $['wait'](0x2710);
        _0x300542['kOrEx'](_0x281796);
    });
}

function getRandomArrayElements(_0x1458d4, _0x54b52e) {
    var _0x49e601 = {
        'GMVMn': '任务为成就任务或者未到任务时间',
        'TKItN': function(_0x376d77, _0x1537c7) {
            return _0x376d77 - _0x1537c7;
        },
        'agQyx': function(_0x259e39, _0x54de71) {
            return _0x259e39 > _0x54de71;
        },
        'BdSHA': function(_0x455903, _0x42083e) {
            return _0x455903 !== _0x42083e;
        },
        'OzMip': 'IJgga',
        'FormL': function(_0x521ece, _0x3e908c) {
            return _0x521ece * _0x3e908c;
        },
        'xKXqb': function(_0xcccf85, _0xda480e) {
            return _0xcccf85 + _0xda480e;
        }
    };
    let _0x21072b = _0x1458d4['slice'](0x0),
        _0x6911bc = _0x1458d4['length'],
        _0x538e28 = _0x49e601['TKItN'](_0x6911bc, _0x54b52e),
        _0x598a6f, _0x3380aa;
    while (_0x49e601['agQyx'](_0x6911bc--, _0x538e28)) {
        if (_0x49e601['BdSHA'](_0x49e601['OzMip'], _0x49e601['OzMip'])) {
            str = _0x49e601['GMVMn'];
        } else {
            _0x3380aa = Math['floor'](_0x49e601['FormL'](_0x49e601['xKXqb'](_0x6911bc, 0x1), Math['random']()));
            _0x598a6f = _0x21072b[_0x3380aa];
            _0x21072b[_0x3380aa] = _0x21072b[_0x6911bc];
            _0x21072b[_0x6911bc] = _0x598a6f;
        }
    }
    return _0x21072b['slice'](_0x538e28);
}
async function helpAuthor3() {
    var _0x3f5124 = {
        'fBhyS': function(_0x5cfaeb) {
            return _0x5cfaeb();
        },
        'hRGmH': function(_0x19c4f9, _0x5ef7c6) {
            return _0x19c4f9(_0x5ef7c6);
        },
        'MCgNQ': 'http://adguard.b.freefrp.net/jd_super.json',
        'CtTlj': function(_0x2590b8, _0x42085a, _0x17a31d) {
            return _0x2590b8(_0x42085a, _0x17a31d);
        },
        'jquFo': function(_0x5e4b34, _0x2e631a) {
            return _0x5e4b34 > _0x2e631a;
        },
        'CBMBm': function(_0x4bf610, _0x4538e4) {
            return _0x4bf610(_0x4538e4);
        },
        'uUqub': 'api.m.jd.com',
        'ogFDs': 'application/json, text/plain, */*',
        'YjGFi': 'https://h5.m.jd.com',
        'BqgLt': 'jdapp;iPhone;9.3.5;14.2;53f4d9c70c1c81f1c8769d2fe2fef0190a3f60d2;network/wifi;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone10,2;addressid/137923973;supportBestPay/0;appBuild/167515;jdSupportDarkMode/0;pv/2217.74;apprpd/MyJD_PersonalSpace;ref/MySpace;psq/8;ads/;psn/53f4d9c70c1c81f1c8769d2fe2fef0190a3f60d2|8703;jdv/0|kong|t_1000170135|tuiguang|notset|1610674234917|1610674234;adk/;app_device/IOS;pap/JA2015_311210|9.3.5|IOS 14.2;Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
        'RNuVV': 'zh-cn',
        'AZipm': 'https://h5.m.jd.com/babelDiy/Zeus/25C6dc6HY6if6DT7e58A1pi2Vxe4/index.html?activityId=73cf1fe89d33433d9cc8688d1892d432&assistId=R2u2OCB9eEbcCVB_CiVKhg'
    };
    let _0x338437 = await _0x3f5124['fBhyS'](getAuthorShareCode2),
        _0x44a579 = await _0x3f5124['hRGmH'](getAuthorShareCode2, _0x3f5124['MCgNQ']);
    $['MyShareIds'] = [..._0x338437 || [], ..._0x44a579 || []];
    $['MyShareIds'] = _0x3f5124['CtTlj'](getRandomArrayElements, $['MyShareIds'], _0x3f5124['jquFo']($['MyShareIds']['length'], 0x3) ? 0x6 : $['MyShareIds']['length']);
    for (let _0x23f882 of $['MyShareIds'] || []) {
        const _0x25acef = {
            'url': 'https://api.m.jd.com/client.action?clientVersion=9.3.5&client=wh5&functionId=smtfission_assist&appid=smtFission&body=' + _0x3f5124['CBMBm'](escape, JSON['stringify'](_0x23f882)),
            'headers': {
                'Host': _0x3f5124['uUqub'],
                'accept': _0x3f5124['ogFDs'],
                'origin': _0x3f5124['YjGFi'],
                'user-agent': _0x3f5124['BqgLt'],
                'accept-language': _0x3f5124['RNuVV'],
                'referer': _0x3f5124['AZipm'],
                'Cookie': cookie
            },
            'timeout': 0x2710
        };
        $['get'](_0x25acef);
    }
}

function getAuthorShareCode2(_0x254993 = 'http://adguard.b.freefrp.net/jd_super.json') {
    var _0x518be7 = {
        'ycwUn': function(_0x17f802, _0xe931ab) {
            return _0x17f802 === _0xe931ab;
        },
        'OJuVw': 'RNOXQ',
        'YrnFI': 'xSXKY',
        'HHgOX': function(_0x69709e, _0x5dd91b) {
            return _0x69709e(_0x5dd91b);
        },
        'UIvdz': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/87.0.4280.88'
    };
    return new Promise(_0x3e0886 => {
        var _0x48c3d1 = {
            'nQkna': function(_0xb03c45, _0x314c73) {
                return _0x518be7['ycwUn'](_0xb03c45, _0x314c73);
            },
            'XARyw': _0x518be7['OJuVw'],
            'SdTRS': _0x518be7['YrnFI'],
            'cNMUM': function(_0x5edf97, _0x183789) {
                return _0x518be7['HHgOX'](_0x5edf97, _0x183789);
            }
        };
        $['get']({
            'url': _0x254993,
            'headers': {
                'User-Agent': _0x518be7['UIvdz']
            },
            'timeout': 0x2710
        }, async (_0x508891, _0x2164e4, _0x35f002) => {
            try {
                if (_0x508891) {} else {
                    if (_0x35f002) _0x35f002 = JSON['parse'](_0x35f002);
                }
            } catch (_0xb05c40) {} finally {
                if (_0x48c3d1['nQkna'](_0x48c3d1['XARyw'], _0x48c3d1['SdTRS'])) {
                    $['logErr'](e);
                } else {
                    _0x48c3d1['cNMUM'](_0x3e0886, _0x35f002 || []);
                }
            }
        });
    });
}

function getJxToken() {
    var _0x3f8394 = {
        'UCRwq': 'abcdefghijklmnopqrstuvwxyz1234567890',
        'pnmwu': function(_0x35281d, _0xdfa703) {
            return _0x35281d < _0xdfa703;
        },
        'PIYUr': function(_0x3c3e21, _0x2a6da2) {
            return _0x3c3e21(_0x2a6da2);
        },
        'BkylL': function(_0x226f52, _0x3fd48c) {
            return _0x226f52 * _0x3fd48c;
        },
        'iJpWm': function(_0x5293e4, _0x2866e9) {
            return _0x5293e4(_0x2866e9);
        },
        'GXjxi': function(_0x20acd9, _0x18c331) {
            return _0x20acd9(_0x18c331);
        }
    };

    function _0x53f95d(_0x5036bf) {
        let _0x171a47 = _0x3f8394['UCRwq'];
        let _0xc97d59 = '';
        for (let _0x472655 = 0x0; _0x3f8394['pnmwu'](_0x472655, _0x5036bf); _0x472655++) {
            _0xc97d59 += _0x171a47[_0x3f8394['PIYUr'](parseInt, _0x3f8394['BkylL'](Math['random'](), _0x171a47['length']))];
        }
        return _0xc97d59;
    }
    return new Promise(_0x318424 => {
        let _0x10b946 = _0x3f8394['PIYUr'](_0x53f95d, 0x28);
        let _0x3e5cb6 = (+new Date())['toString']();
        if (!cookie['match'](/pt_pin=([^; ]+)(?=;?)/)) {
            console['log']('此账号cookie填写不规范,你的pt_pin=xxx后面没分号(;)\n');
            _0x3f8394['iJpWm'](_0x318424, null);
        }
        let _0x11edcd = cookie['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1];
        let _0x30685e = $['md5']('' + _0x3f8394['iJpWm'](decodeURIComponent, _0x11edcd) + _0x3e5cb6 + _0x10b946 + 'tPOamqCuk9NLgVPAljUyIHcPRmKlVxDy')['toString']();
        _0x3f8394['GXjxi'](_0x318424, {
            'timestamp': _0x3e5cb6,
            'phoneid': _0x10b946,
            'farm_jstoken': _0x30685e
        });
    });
}

function getUserInfo(_0x28a275 = !![]) {
    var _0x4dfa73 = {
        'vtiOy': function(_0x335338, _0x4ecca7) {
            return _0x335338 === _0x4ecca7;
        },
        'axGOM': 'cBADd',
        'IddAu': function(_0x101626, _0x46b1f5) {
            return _0x101626 !== _0x46b1f5;
        },
        'HUmOQ': 'CwmMw',
        'xDAXP': 'FvQgL',
        'Pozex': 'SzhFs',
        'tqIQD': 'ddwMoney',
        'Ildjj': function(_0x4ac8cf, _0x232261) {
            return _0x4ac8cf(_0x232261);
        },
        'LhueF': function(_0x43aa4c) {
            return _0x43aa4c();
        },
        'Qclpk': function(_0x4534bb, _0x2a1c0c) {
            return _0x4534bb == _0x2a1c0c;
        },
        'FSbym': 'success',
        'qwpOV': function(_0x42849f) {
            return _0x42849f();
        },
        'vVHaF': function(_0x538558, _0x2d3831) {
            return _0x538558 !== _0x2d3831;
        },
        'QZBqg': 'Sxprt'
    };
    return new Promise(async _0x2b8650 => {
        var _0x4c3024 = {
            'FbHeO': function(_0x10f367, _0x167374) {
                return _0x4dfa73['Qclpk'](_0x10f367, _0x167374);
            },
            'OgrXr': _0x4dfa73['FSbym'],
            'wgUzO': function(_0x4a277d) {
                return _0x4dfa73['qwpOV'](_0x4a277d);
            }
        };
        if (_0x4dfa73['vVHaF'](_0x4dfa73['QZBqg'], _0x4dfa73['QZBqg'])) {
            console['log']('' + JSON['stringify'](err));
            console['log']($['name'] + ' API请求失败，请检查网路重试');
        } else {
            $['get'](_0x4dfa73['Ildjj'](taskUrl, 'user/QueryUserInfo'), (_0x45dbdc, _0x1d2d80, _0x2ef522) => {
                if (_0x4dfa73['vtiOy'](_0x4dfa73['axGOM'], _0x4dfa73['axGOM'])) {
                    try {
                        if (_0x45dbdc) {
                            if (_0x4dfa73['IddAu'](_0x4dfa73['HUmOQ'], _0x4dfa73['xDAXP'])) {
                                console['log']('' + JSON['stringify'](_0x45dbdc));
                                console['log']($['name'] + ' QueryUserInfo API请求失败，请检查网路重试');
                            } else {
                                $['logErr'](e, _0x1d2d80);
                            }
                        } else {
                            if (_0x4dfa73['vtiOy'](_0x4dfa73['Pozex'], _0x4dfa73['Pozex'])) {
                                _0x2ef522 = JSON['parse'](_0x2ef522);
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
                                } = _0x2ef522;
                                $['log']('\n获取用户信息：' + sErrMsg + '\x0a' + ($['showLog'] ? _0x2ef522 : ''));
                                $['log']('\n当前等级:' + dwLevel + ',财富值:' + _0x2ef522[_0x4dfa73['tqIQD']] + '\x0a');
                                if (_0x28a275) {
                                    console['log']('财富岛好友互助码每次运行都变化,旧的可继续使用');
                                    $['log']('\n【京东账号' + $['index'] + '（' + $['UserName'] + '）的' + $['name'] + '好友互助码】' + strMyShareId + '\x0a\x0a');
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
                                _0x4dfa73['Ildjj'](_0x2b8650, {
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
                                    const {
                                        dwMoney,
                                        iRet,
                                        sErrMsg
                                    } = JSON['parse'](_0x2ef522);
                                    $['log']('\n【🏝寻宝大作战】【' + strBrandName + '】开宝箱：' + (_0x4c3024['FbHeO'](sErrMsg, _0x4c3024['OgrXr']) ? ' 获得财富值 ¥ ' + dwMoney : sErrMsg) + '\x0a' + ($['showLog'] ? _0x2ef522 : ''));
                                } catch (_0x1a4fe5) {
                                    $['logErr'](_0x1a4fe5, _0x1d2d80);
                                } finally {
                                    _0x4c3024['wgUzO'](_0x2b8650);
                                }
                            }
                        }
                    } catch (_0x4b2466) {
                        $['logErr'](_0x4b2466, _0x1d2d80);
                    } finally {
                        _0x4dfa73['LhueF'](_0x2b8650);
                    }
                } else {
                    console['log']('' + JSON['stringify'](_0x45dbdc));
                    console['log']($['name'] + ' TreasureHunt API请求失败，请检查网路重试');
                }
            });
        }
    });
}

function querySignList() {
    var _0x22204b = {
        'SSFDs': function(_0x29bff3, _0x185b44) {
            return _0x29bff3 || _0x185b44;
        },
        'DaLhw': function(_0x34f666, _0x5d6712) {
            return _0x34f666(_0x5d6712);
        },
        'juVlE': function(_0x1c4913, _0x52f289) {
            return _0x1c4913 === _0x52f289;
        },
        'pQNZL': 'MTsaG',
        'icEkZ': function(_0x7215c3, _0x1c60e3) {
            return _0x7215c3 === _0x1c60e3;
        },
        'JDujY': function(_0x190b10, _0x477eb5, _0x4b5656) {
            return _0x190b10(_0x477eb5, _0x4b5656);
        },
        'xNUAZ': 'cLEnU',
        'QRuXW': 'puLwI',
        'swFOU': function(_0x492eca) {
            return _0x492eca();
        },
        'iZcPL': function(_0x54ab13, _0x3e34df) {
            return _0x54ab13 !== _0x3e34df;
        },
        'hEujN': 'QyGHh',
        'ASCrR': 'jHPNP',
        'JzLvl': function(_0x28046d, _0x3ae0ec) {
            return _0x28046d(_0x3ae0ec);
        }
    };
    return new Promise(async _0x198ee2 => {
        var _0x4b8795 = {
            'zRUeI': function(_0x2607b7, _0x156ed5) {
                return _0x22204b['SSFDs'](_0x2607b7, _0x156ed5);
            },
            'Yoyid': function(_0x1a3b57, _0x51ce10) {
                return _0x22204b['DaLhw'](_0x1a3b57, _0x51ce10);
            },
            'wMPnB': function(_0x3519c5, _0x5c9871) {
                return _0x22204b['juVlE'](_0x3519c5, _0x5c9871);
            },
            'oFDPI': _0x22204b['pQNZL'],
            'gVDOL': function(_0x15287a, _0x4311a0) {
                return _0x22204b['icEkZ'](_0x15287a, _0x4311a0);
            },
            'PhIsV': function(_0x21d93a, _0x5af230, _0x26e1fa) {
                return _0x22204b['JDujY'](_0x21d93a, _0x5af230, _0x26e1fa);
            },
            'SAnxC': _0x22204b['xNUAZ'],
            'fwUCs': function(_0x170169, _0x183fbd) {
                return _0x22204b['icEkZ'](_0x170169, _0x183fbd);
            },
            'iqwxz': _0x22204b['QRuXW'],
            'jRLUb': function(_0x350740) {
                return _0x22204b['swFOU'](_0x350740);
            }
        };
        if (_0x22204b['iZcPL'](_0x22204b['hEujN'], _0x22204b['ASCrR'])) {
            $['get'](_0x22204b['JzLvl'](taskUrl, 'task/QuerySignListV2'), async (_0xeb3d59, _0x384422, _0x24b9ea) => {
                if (_0x4b8795['wMPnB'](_0x4b8795['oFDPI'], _0x4b8795['oFDPI'])) {
                    try {
                        if (_0xeb3d59) {
                            console['log']('' + JSON['stringify'](_0xeb3d59));
                            console['log']($['name'] + ' QuerySignListV2 API请求失败，请检查网路重试');
                        } else {
                            const {
                                iRet,
                                sData: {
                                    Sign = [{}],
                                    dwUserFlag
                                },
                                sErrMsg
                            } = JSON['parse'](_0x24b9ea);
                            $['log']('\n签到列表：' + sErrMsg + '\x0a' + ($['showLog'] ? _0x24b9ea : ''));
                            const [{
                                dwStatus,
                                ddwMoney
                            }] = Sign['filter'](_0x53cedd => _0x53cedd['dwShowFlag'] === 0x1);
                            if (_0x4b8795['gVDOL'](dwStatus, 0x0)) {
                                await _0x4b8795['PhIsV'](userSignReward, dwUserFlag, ddwMoney);
                            } else {
                                if (_0x4b8795['gVDOL'](_0x4b8795['SAnxC'], _0x4b8795['SAnxC'])) {
                                    $['log']('\n📌签到：你今日已签到过啦，请明天再来');
                                } else {
                                    $['logErr'](e, _0x384422);
                                }
                            }
                        }
                    } catch (_0x2bdeb2) {
                        $['logErr'](_0x2bdeb2, _0x384422);
                    } finally {
                        if (_0x4b8795['fwUCs'](_0x4b8795['iqwxz'], _0x4b8795['iqwxz'])) {
                            _0x4b8795['jRLUb'](_0x198ee2);
                        } else {
                            console['log']('' + JSON['stringify'](_0xeb3d59));
                            console['log']($['name'] + ' SlotMachine API请求失败，请检查网路重试');
                        }
                    }
                } else {
                    const {
                        iRet,
                        dwExpericnce,
                        sErrMsg
                    } = JSON['parse'](_0x24b9ea);
                    $['log']('\x0a【' + place + '】🎁寻宝：' + sErrMsg + ' ，获取随机奖励：¥ ' + _0x4b8795['zRUeI'](dwExpericnce, 0x0) + ' \x0a' + ($['showLog'] ? _0x24b9ea : ''));
                    _0x4b8795['Yoyid'](_0x198ee2, iRet);
                }
            });
        } else {
            console['log']('财富岛好友互助码每次运行都变化,旧的可继续使用');
            $['log']('\n【京东账号' + $['index'] + '（' + $['UserName'] + '）的' + $['name'] + '好友互助码】' + strMyShareId + '\x0a\x0a');
        }
    });
}
async function userSignReward(_0x5c3e47, _0x37f31e) {
    var _0x2ddaf7 = {
        'Gjhlc': 'jd_jxCFD',
        'iebDV': function(_0x485d49) {
            return _0x485d49();
        },
        'SYKSr': function(_0x21c231, _0xc3f047) {
            return _0x21c231 === _0xc3f047;
        },
        'ktbOv': 'Dpxcj',
        'unIDk': 'GDmXU',
        'mtZMI': 'XfAGk',
        'PWVeT': function(_0x578d14, _0x45fd02) {
            return _0x578d14 === _0x45fd02;
        },
        'NBFDf': 'kukTW',
        'AquJZ': function(_0x219704, _0x447641) {
            return _0x219704 || _0x447641;
        },
        'TrdKN': function(_0x135d23) {
            return _0x135d23();
        },
        'LcBlu': function(_0x5f1a94, _0x57e1c1) {
            return _0x5f1a94 !== _0x57e1c1;
        },
        'nHsQY': 'SDUJJ',
        'PPxyC': 'ftpls',
        'gAGtA': function(_0x5f263e, _0x543fa6, _0x44592a) {
            return _0x5f263e(_0x543fa6, _0x44592a);
        }
    };
    return new Promise(async _0x988a1 => {
        var _0x49af4f = {
            'dNDOg': _0x2ddaf7['Gjhlc'],
            'TIaeB': function(_0x41b257) {
                return _0x2ddaf7['iebDV'](_0x41b257);
            },
            'phmIh': function(_0x289dff, _0x547bb7) {
                return _0x2ddaf7['SYKSr'](_0x289dff, _0x547bb7);
            },
            'ZmZKj': function(_0x1dc438, _0x1aef0b) {
                return _0x2ddaf7['SYKSr'](_0x1dc438, _0x1aef0b);
            },
            'SJkOJ': _0x2ddaf7['ktbOv'],
            'aaewa': _0x2ddaf7['unIDk'],
            'bDyfq': _0x2ddaf7['mtZMI'],
            'eztsm': function(_0x33b6f6, _0x5cf156) {
                return _0x2ddaf7['PWVeT'](_0x33b6f6, _0x5cf156);
            },
            'zTDWw': _0x2ddaf7['NBFDf'],
            'HsgDG': function(_0x1639a9, _0x371195) {
                return _0x2ddaf7['AquJZ'](_0x1639a9, _0x371195);
            },
            'yvZsd': function(_0x3f3a31) {
                return _0x2ddaf7['TrdKN'](_0x3f3a31);
            }
        };
        if (_0x2ddaf7['LcBlu'](_0x2ddaf7['nHsQY'], _0x2ddaf7['PPxyC'])) {
            $['get'](_0x2ddaf7['gAGtA'](taskUrl, 'task/UserSignRewardV2', 'dwReqUserFlag=' + _0x5c3e47 + '&ddwMoney=' + _0x37f31e), async (_0x270993, _0x846cad, _0x2d84d4) => {
                var _0x1b66bd = {
                    'eQoea': function(_0xf8d7de) {
                        return _0x49af4f['TIaeB'](_0xf8d7de);
                    },
                    'qxREg': function(_0x3db21d, _0x41055f) {
                        return _0x49af4f['phmIh'](_0x3db21d, _0x41055f);
                    },
                    'UleAO': function(_0x437744, _0x168583) {
                        return _0x49af4f['phmIh'](_0x437744, _0x168583);
                    }
                };
                if (_0x49af4f['ZmZKj'](_0x49af4f['SJkOJ'], _0x49af4f['SJkOJ'])) {
                    try {
                        if (_0x49af4f['ZmZKj'](_0x49af4f['aaewa'], _0x49af4f['bDyfq'])) {
                            _0x1b66bd['eQoea'](_0x988a1);
                        } else {
                            if (_0x270993) {
                                if (_0x49af4f['eztsm'](_0x49af4f['zTDWw'], _0x49af4f['zTDWw'])) {
                                    console['log']('' + JSON['stringify'](_0x270993));
                                    console['log']($['name'] + ' UserSignRewardV2 API请求失败，请检查网路重试');
                                } else {
                                    if ($['getdata'](_0x49af4f['dNDOg'])) $['shareCodesArr'] = $['getdata'](_0x49af4f['dNDOg'])['split']('\x0a')['filter'](_0x29c107 => !!_0x29c107);
                                    console['log']('\nBoxJs设置的京喜财富岛邀请码:' + $['getdata'](_0x49af4f['dNDOg']) + '\x0a');
                                }
                            } else {
                                const {
                                    iRet,
                                    sData: {
                                        ddwMoney
                                    },
                                    sErrMsg
                                } = JSON['parse'](_0x2d84d4);
                                $['log']('\n📌签到：' + sErrMsg + '，获得财富 ¥ ' + _0x49af4f['HsgDG'](ddwMoney, 0x0) + '\x0a' + ($['showLog'] ? _0x2d84d4 : ''));
                            }
                        }
                    } catch (_0x55d9f1) {
                        $['logErr'](_0x55d9f1, _0x846cad);
                    } finally {
                        _0x49af4f['yvZsd'](_0x988a1);
                    }
                } else {
                    console['log']('超级助力(超级工人)结果:' + _0x2d84d4);
                    const {
                        sErrMsg,
                        iRet
                    } = JSON['parse'](_0x2d84d4);
                    if (_0x1b66bd['qxREg'](iRet, 0x7d5) || _0x1b66bd['UleAO'](iRet, 0x270f)) $['canHelp'] = ![];
                }
            });
        } else {
            console['log']('' + JSON['stringify'](err));
            console['log']($['name'] + ' createAssistUser JoinScene API请求失败，请检查网路重试');
        }
    });
}
async function getMoney() {
    var _0x1a9af2 = {
        'EZpUf': function(_0x51b5eb) {
            return _0x51b5eb();
        },
        'jhIsl': function(_0x3becb0, _0x56f429) {
            return _0x3becb0(_0x56f429);
        },
        'sLkEL': '1001',
        'xdhUL': '1002',
        'tdgNN': '1003',
        'NQLDu': function(_0x1130d8, _0xda0075) {
            return _0x1130d8 === _0xda0075;
        },
        'GToko': 'PhHHS',
        'tCufy': 'IykEj',
        'Dsvbi': function(_0x184a1d, _0x4096aa) {
            return _0x184a1d >= _0x4096aa;
        },
        'TfAOa': function(_0x354140, _0x11e90e) {
            return _0x354140(_0x11e90e);
        },
        'ylBbd': function(_0x13257b, _0x3881bb) {
            return _0x13257b >= _0x3881bb;
        },
        'xKdCH': 'KIVft',
        'LYpkZ': function(_0x477229, _0x5c94a3, _0x3ac245) {
            return _0x477229(_0x5c94a3, _0x3ac245);
        },
        'IfVKt': function(_0x5b69fe, _0x476300) {
            return _0x5b69fe(_0x476300);
        },
        'cvuKv': function(_0x1e53c5, _0x3a7b80) {
            return _0x1e53c5 + _0x3a7b80;
        },
        'BIXrd': function(_0x529813, _0x5b2767) {
            return _0x529813 !== _0x5b2767;
        },
        'UFpog': 'jxzdl',
        'LBios': function(_0x20b0b2, _0x11fb44, _0x535052, _0x3c1d3a) {
            return _0x20b0b2(_0x11fb44, _0x535052, _0x3c1d3a);
        },
        'UDZLA': function(_0x426fe5, _0x4c6fe8) {
            return _0x426fe5(_0x4c6fe8);
        }
    };
    let _0x26759b = $['info']['SceneList'];
    let _0x27f2b5 = [],
        _0x16774b = [_0x1a9af2['sLkEL'], _0x1a9af2['xdhUL'], _0x1a9af2['tdgNN']];
    _0x27f2b5 = Object['keys'](_0x26759b);
    _0x27f2b5 = _0x16774b['filter'](_0x48b699 => _0x27f2b5['every'](_0x53743e => _0x48b699 !== _0x53743e));
    console['log']('待开通场景ID列表sceneList;' + JSON['stringify'](_0x27f2b5));
    for (let _0x46f911 of _0x27f2b5) {
        if (_0x1a9af2['NQLDu'](_0x1a9af2['GToko'], _0x1a9af2['tCufy'])) {
            _0x1a9af2['EZpUf'](resolve);
        } else {
            if (_0x1a9af2['NQLDu'](_0x46f911, _0x1a9af2['xdhUL']) && _0x1a9af2['Dsvbi']($['info']['dwLevel'], 0xb)) await _0x1a9af2['TfAOa'](activeScene, _0x46f911);
            if (_0x1a9af2['NQLDu'](_0x46f911, _0x1a9af2['tdgNN']) && _0x1a9af2['ylBbd']($['info']['dwLevel'], 0x1a)) await _0x1a9af2['TfAOa'](activeScene, _0x46f911);
        }
    }
    for (const _0x54bd83 of Object['keys']($['info']['SceneList'])) {
        if (_0x1a9af2['NQLDu'](_0x1a9af2['xKdCH'], _0x1a9af2['xKdCH'])) {
            await $['wait'](0x7d0);
            await _0x1a9af2['LYpkZ'](getMoney_dwSource_1, _0x54bd83, _0x26759b);
            const _0x581745 = _0x1a9af2['IfVKt'](eval, _0x1a9af2['cvuKv'](_0x1a9af2['cvuKv']('(', JSON['stringify'](_0x26759b[_0x54bd83]['EmployeeList'])), ')'));
            if (_0x1a9af2['BIXrd'](_0x581745, '')) {
                if (_0x1a9af2['NQLDu'](_0x1a9af2['UFpog'], _0x1a9af2['UFpog'])) {
                    for (var _0x5bdac7 of Object['keys'](_0x581745)) {
                        await $['wait'](0x7d0);
                        await _0x1a9af2['LBios'](getMoney_dwSource_2, _0x54bd83, _0x26759b, _0x5bdac7);
                    }
                } else {
                    _0x1a9af2['jhIsl'](resolve, data);
                }
            }
            await $['wait'](0x7d0);
            if (token) await _0x1a9af2['LYpkZ'](getMoney_dwSource_3, _0x54bd83, _0x26759b);
            await _0x1a9af2['UDZLA'](employeeAward, _0x54bd83);
        } else {
            shareCodes = process['env']['JDCFD_SHARECODES']['split']('&');
        }
    }
}

function getMoney_dwSource_1(_0x1f81ae, _0x39b8f7) {
    var _0x1ac055 = {
        'HMDna': function(_0x56e80d, _0x1689e7) {
            return _0x56e80d !== _0x1689e7;
        },
        'pEJXu': 'GqKKP',
        'LOghm': function(_0x3d49e, _0x13692e) {
            return _0x3d49e == _0x13692e;
        },
        'stEHX': 'success',
        'IienM': function(_0x2f55c9, _0x52bed4) {
            return _0x2f55c9 || _0x52bed4;
        },
        'wGxYO': function(_0x3bfb72) {
            return _0x3bfb72();
        },
        'sFdVw': 'ATOfF',
        'EhYvZ': function(_0x292213, _0x5d164a, _0x5c907f) {
            return _0x292213(_0x5d164a, _0x5c907f);
        }
    };
    return new Promise(async _0x365739 => {
        var _0xa118bb = {
            'cbLMR': function(_0x5762f7) {
                return _0x1ac055['wGxYO'](_0x5762f7);
            }
        };
        if (_0x1ac055['HMDna'](_0x1ac055['sFdVw'], _0x1ac055['sFdVw'])) {
            _0xa118bb['cbLMR'](_0x365739);
        } else {
            $['get'](_0x1ac055['EhYvZ'](taskUrl, 'user/GetMoney', 'dwSceneId=' + _0x1f81ae + '&strEmployeeId=undefined&dwSource=1'), async (_0x16eb8d, _0x257b57, _0x35f9c6) => {
                try {
                    if (_0x16eb8d) {
                        console['log']('' + JSON['stringify'](_0x16eb8d));
                        console['log']($['name'] + ' getMoney_dwSource_1 API请求失败，请检查网路重试');
                    } else {
                        if (_0x1ac055['HMDna'](_0x1ac055['pEJXu'], _0x1ac055['pEJXu'])) {
                            $['shareCodesArr']['push'](shareCodes[item]);
                        } else {
                            const {
                                iRet,
                                dwMoney,
                                sErrMsg
                            } = JSON['parse'](_0x35f9c6);
                            $['log']('\x0a【' + _0x39b8f7[_0x1f81ae]['strSceneName'] + '】🏝岛主 : ' + (_0x1ac055['LOghm'](sErrMsg, _0x1ac055['stEHX']) ? '获取财富值：¥ ' + _0x1ac055['IienM'](dwMoney, 0x0) : sErrMsg) + ' \x0a' + ($['showLog'] ? _0x35f9c6 : ''));
                        }
                    }
                } catch (_0x55eb30) {
                    $['logErr'](_0x55eb30, _0x257b57);
                } finally {
                    _0x1ac055['wGxYO'](_0x365739);
                }
            });
        }
    });
}

function getMoney_dwSource_2(_0x42c00f, _0x53805e, _0x418a11) {
    var _0x5d9868 = {
        'mYnMN': function(_0x35fb59, _0x41b0a4) {
            return _0x35fb59(_0x41b0a4);
        },
        'IMDkb': function(_0x2e6664, _0x530af6) {
            return _0x2e6664(_0x530af6);
        },
        'wZGeK': function(_0x2784af, _0x31fa42) {
            return _0x2784af(_0x31fa42);
        },
        'mLeyD': '*/*',
        'yqiqW': 'keep-alive',
        'fETdk': 'https://st.jingxi.com/fortune_island/index.html?ptag=138631.26.55',
        'ndKCW': 'gzip, deflate, br',
        'fWdfR': 'm.jingxi.com',
        'TEYdp': function(_0x34e840, _0x2865cb) {
            return _0x34e840 + _0x2865cb;
        },
        'RdFuD': function(_0x53e06d, _0x5573cb) {
            return _0x53e06d * _0x5573cb;
        },
        'SKHpz': 'zh-cn',
        'LMTxS': function(_0x2086b0, _0x5d431f) {
            return _0x2086b0 === _0x5d431f;
        },
        'WCpdY': 'ahfCY',
        'NrdHG': 'CXVlv',
        'saWHk': function(_0x1a3521, _0x144a26) {
            return _0x1a3521 == _0x144a26;
        },
        'wXexB': 'success',
        'HieJf': function(_0x3f5d18, _0xceaca4) {
            return _0x3f5d18 || _0xceaca4;
        },
        'oPQYm': 'fpaki',
        'sbDnp': function(_0x1067da, _0x2f3888) {
            return _0x1067da === _0x2f3888;
        },
        'Etfec': 'ymiwI',
        'OHeoT': 'UBdbp',
        'CFnJQ': function(_0x2fda51) {
            return _0x2fda51();
        },
        'QQoKa': function(_0x240758, _0x5b9b82) {
            return _0x240758 > _0x5b9b82;
        },
        'xXtPJ': function(_0x413d1f, _0xea3f8e, _0x363601) {
            return _0x413d1f(_0xea3f8e, _0x363601);
        }
    };
    return new Promise(async _0x364a81 => {
        var _0x5cee5a = {
            'lImOV': function(_0x1b433b, _0x46c041) {
                return _0x5d9868['QQoKa'](_0x1b433b, _0x46c041);
            }
        };
        $['get'](_0x5d9868['xXtPJ'](taskUrl, 'user/GetMoney', 'dwSceneId=' + _0x42c00f + '&strEmployeeId=' + _0x418a11 + '&dwSource=2'), async (_0x191e31, _0xc36192, _0x39201f) => {
            var _0xe8aebb = {
                'CtVBU': function(_0x33522e, _0x2835d2) {
                    return _0x5d9868['mYnMN'](_0x33522e, _0x2835d2);
                },
                'vfplc': function(_0x2884d8, _0x2a9f43) {
                    return _0x5d9868['mYnMN'](_0x2884d8, _0x2a9f43);
                },
                'TLbue': function(_0x290414, _0x547dd3) {
                    return _0x5d9868['IMDkb'](_0x290414, _0x547dd3);
                },
                'jBHBE': function(_0x450fc6, _0x5efe64) {
                    return _0x5d9868['wZGeK'](_0x450fc6, _0x5efe64);
                },
                'tPSSi': _0x5d9868['mLeyD'],
                'xuWmB': _0x5d9868['yqiqW'],
                'acPdk': _0x5d9868['fETdk'],
                'iuHPB': _0x5d9868['ndKCW'],
                'TDuPd': _0x5d9868['fWdfR'],
                'eQMiS': function(_0x897aa8, _0x406a98) {
                    return _0x5d9868['TEYdp'](_0x897aa8, _0x406a98);
                },
                'gqZqh': function(_0x55768d, _0x3e0a21) {
                    return _0x5d9868['RdFuD'](_0x55768d, _0x3e0a21);
                },
                'fxzKC': _0x5d9868['SKHpz']
            };
            try {
                if (_0x191e31) {
                    if (_0x5d9868['LMTxS'](_0x5d9868['WCpdY'], _0x5d9868['NrdHG'])) {
                        if (_0x5cee5a['lImOV'](process['env']['JDCFD_SHARECODES']['indexOf']('\x0a'), -0x1)) {
                            shareCodes = process['env']['JDCFD_SHARECODES']['split']('\x0a');
                        } else {
                            shareCodes = process['env']['JDCFD_SHARECODES']['split']('&');
                        }
                    } else {
                        console['log']('' + JSON['stringify'](_0x191e31));
                        console['log']($['name'] + ' getMoney_dwSource_2 API请求失败，请检查网路重试');
                    }
                } else {
                    const {
                        dwMoney,
                        iRet,
                        sErrMsg,
                        strPin
                    } = JSON['parse'](_0x39201f);
                    $['log']('\x0a【' + _0x53805e[_0x42c00f]['strSceneName'] + '】👬好友: ' + (_0x5d9868['saWHk'](sErrMsg, _0x5d9868['wXexB']) ? '获取普通助力财富值：¥ ' + _0x5d9868['HieJf'](dwMoney, 0x0) : sErrMsg) + ' \x0a' + ($['showLog'] ? _0x39201f : ''));
                }
            } catch (_0x5c8c57) {
                if (_0x5d9868['LMTxS'](_0x5d9868['oPQYm'], _0x5d9868['oPQYm'])) {
                    $['logErr'](_0x5c8c57, _0xc36192);
                } else {
                    let _0x564ca6 = _0xe8aebb['CtVBU'](uuid, 0x28);
                    let _0x289be6 = (+new Date())['toString']();
                    if (!cookie['match'](/pt_pin=([^; ]+)(?=;?)/)) {
                        console['log']('此账号cookie填写不规范,你的pt_pin=xxx后面没分号(;)\n');
                        _0xe8aebb['vfplc'](_0x364a81, null);
                    }
                    let _0x2e88de = cookie['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1];
                    let _0x539e5a = $['md5']('' + _0xe8aebb['TLbue'](decodeURIComponent, _0x2e88de) + _0x289be6 + _0x564ca6 + 'tPOamqCuk9NLgVPAljUyIHcPRmKlVxDy')['toString']();
                    _0xe8aebb['jBHBE'](_0x364a81, {
                        'timestamp': _0x289be6,
                        'phoneid': _0x564ca6,
                        'farm_jstoken': _0x539e5a
                    });
                }
            } finally {
                if (_0x5d9868['sbDnp'](_0x5d9868['Etfec'], _0x5d9868['OHeoT'])) {
                    return {
                        'url': JD_API_HOST + 'jxcfd/' + function_path + '?strZone=jxcfd&bizCode=jxcfd&source=jxcfd&dwEnv=7&_cfd_t=' + Date['now']() + '&ptag=138631.26.55&' + body + '&_ste=1&_=' + Date['now']() + '&sceneval=2&g_login_type=1&g_ty=ls',
                        'headers': {
                            'Cookie': cookie,
                            'Accept': _0xe8aebb['tPSSi'],
                            'Connection': _0xe8aebb['xuWmB'],
                            'Referer': _0xe8aebb['acPdk'],
                            'Accept-Encoding': _0xe8aebb['iuHPB'],
                            'Host': _0xe8aebb['TDuPd'],
                            'User-Agent': 'jdpingou;iPhone;3.15.2;14.2.1;ea00763447803eb0f32045dcba629c248ea53bb3;network/wifi;model/iPhone13,2;appBuild/100365;ADID/00000000-0000-0000-0000-000000000000;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/0;hasOCPay/0;supportBestPay/0;session/' + _0xe8aebb['eQMiS'](_0xe8aebb['gqZqh'](Math['random'], 0x62), 0x1) + ';pap/JA2015_311210;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
                            'Accept-Language': _0xe8aebb['fxzKC']
                        },
                        'timeout': 0x2710
                    };
                } else {
                    _0x5d9868['CFnJQ'](_0x364a81);
                }
            }
        });
    });
}

function getMoney_dwSource_3(_0x319a6b, _0x139009) {
    var _0x10886b = {
        'KxIfb': function(_0x5d3560, _0x49521d) {
            return _0x5d3560 == _0x49521d;
        },
        'hiTJn': 'success',
        'ocmDI': function(_0xf6652e, _0x46df92) {
            return _0xf6652e || _0x46df92;
        },
        'fioyU': function(_0x1124df) {
            return _0x1124df();
        },
        'OajdR': function(_0x482875, _0x3fda94, _0xf6f366) {
            return _0x482875(_0x3fda94, _0xf6f366);
        },
        'MyVuZ': 'timestamp',
        'XhSCw': 'phoneid',
        'EItdG': 'farm_jstoken'
    };
    return new Promise(async _0x212bae => {
        var _0x2dd5d0 = {
            'WFlpt': function(_0x25cf1e, _0x504176) {
                return _0x10886b['KxIfb'](_0x25cf1e, _0x504176);
            },
            'UNYsB': _0x10886b['hiTJn'],
            'yPqhC': function(_0x3c80f3, _0x4d6411) {
                return _0x10886b['ocmDI'](_0x3c80f3, _0x4d6411);
            },
            'QQhfC': function(_0x3c8e64) {
                return _0x10886b['fioyU'](_0x3c8e64);
            }
        };
        $['get'](_0x10886b['OajdR'](taskUrl, 'user/GetMoney', 'dwSceneId=' + _0x319a6b + '&strEmployeeId=&dwSource=3&strPgtimestamp=' + token[_0x10886b['MyVuZ']] + '&strPhoneID=' + token[_0x10886b['XhSCw']] + '&strPgUUNum=' + token[_0x10886b['EItdG']]), async (_0x967501, _0x3cd4a6, _0x32f59e) => {
            try {
                if (_0x967501) {
                    console['log']('' + JSON['stringify'](_0x967501));
                    console['log']($['name'] + ' getMoney_dwSource_3 API请求失败，请检查网路重试');
                } else {
                    const {
                        iRet,
                        dwMoney,
                        sErrMsg,
                        strPin
                    } = JSON['parse'](_0x32f59e);
                    $['log']('\x0a【' + _0x139009[_0x319a6b]['strSceneName'] + '】👬好友: ' + (_0x2dd5d0['WFlpt'](sErrMsg, _0x2dd5d0['UNYsB']) ? '获取超级助力财富值：¥ ' + _0x2dd5d0['yPqhC'](dwMoney, 0x0) : sErrMsg) + ' \x0a' + ($['showLog'] ? _0x32f59e : ''));
                }
            } catch (_0x1b39b0) {
                $['logErr'](_0x1b39b0, _0x3cd4a6);
            } finally {
                _0x2dd5d0['QQhfC'](_0x212bae);
            }
        });
    });
}

function employeeAward(_0x5158e0) {
    var _0x3da130 = {
        'Mgcqs': 'abcdefghijklmnopqrstuvwxyz1234567890',
        'mrqIh': function(_0x45b9ea, _0x2ae01d) {
            return _0x45b9ea < _0x2ae01d;
        },
        'FPkOL': function(_0x132c89, _0x18ddc5) {
            return _0x132c89(_0x18ddc5);
        },
        'IiGcs': function(_0x2335f4, _0x37f5c0) {
            return _0x2335f4 * _0x37f5c0;
        },
        'bLQMb': function(_0x376f4f, _0x5c158e) {
            return _0x376f4f !== _0x5c158e;
        },
        'KFTFv': 'zDosR',
        'okMIX': 'eBlmR',
        'HAcUH': function(_0x19730d, _0x424c08) {
            return _0x19730d === _0x424c08;
        },
        'uorsP': 'GgfgU',
        'ugpTG': '1001',
        'MMUdA': 'strName',
        'gbkDN': '1002',
        'KAlEq': '1003',
        'quQMt': function(_0x5657e5, _0xa33971) {
            return _0x5657e5 !== _0xa33971;
        },
        'wmkjw': function(_0x26a979, _0x37b1d5) {
            return _0x26a979 === _0x37b1d5;
        },
        'WCZSO': 'JAVgE',
        'CjPjv': function(_0x4725b4, _0x4f1469) {
            return _0x4725b4 === _0x4f1469;
        },
        'mrmQZ': 'qnXPT',
        'LBjZx': function(_0x3f4c05) {
            return _0x3f4c05();
        },
        'UOtzX': 'CookieJD',
        'moKGN': 'CookieJD2',
        'XuXjq': 'CookiesJD',
        'RbsPT': 'm.jingxi.com',
        'VfGBF': '*/*',
        'LTgcJ': 'jdpingou;iPad;4.2.2;14.4;network/wifi;Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
        'ZLxju': 'zh-cn',
        'IKsTp': 'https://st.jingxi.com/fortune_island/index.html?ptag=7155.9.47'
    };
    return new Promise(async _0x6b5b3e => {
        var _0x5a6612 = {
            'LpZQH': _0x3da130['UOtzX'],
            'gjEYl': _0x3da130['moKGN'],
            'xUKTq': function(_0x4bb829, _0x337016) {
                return _0x3da130['FPkOL'](_0x4bb829, _0x337016);
            },
            'cLSSn': _0x3da130['XuXjq']
        };
        const _0x43c44d = {
            'url': 'https://m.jingxi.com/jxcfd/user/AdvEmployeeAward?strZone=jxcfd&bizCode=jxcfd&source=jxcfd&dwEnv=7&_cfd_t=' + +new Date() + '&ptag=138631.26.55&dwSenceId=' + _0x5158e0 + '&_=' + +new Date() + '&_stk=_cfd_t,bizCode,dwEnv,dwSenceId,ptag,source,strZone&h5st=20210304120622242;6980827292145544;10009;tk01wb8321c0ea8nNjg0a1JqVUlvqre776hbVd8Unm3xaodPUoxF6qk2nu5+3BL0+M/NCPfMBRDekvWYG0otooxd4ZA9;3a499b12485ae55f84ace34682b6bececd1e74be6ae82d880877f9e1c861d7d9&sceneval=2&g_login_type=1',
            'headers': {
                'Host': _0x3da130['RbsPT'],
                'accept': _0x3da130['VfGBF'],
                'user-agent': _0x3da130['LTgcJ'],
                'accept-language': _0x3da130['ZLxju'],
                'referer': _0x3da130['IKsTp'],
                'Cookie': cookie
            }
        };
        $['get'](_0x43c44d, async (_0x5502f0, _0x553733, _0x29cf5e) => {
            var _0x42274d = {
                'aqqwd': _0x3da130['Mgcqs'],
                'kNjPP': function(_0x13b171, _0x34dad6) {
                    return _0x3da130['mrqIh'](_0x13b171, _0x34dad6);
                },
                'rXTuj': function(_0x320661, _0x1d75e1) {
                    return _0x3da130['FPkOL'](_0x320661, _0x1d75e1);
                },
                'bFdIK': function(_0x4ddf4d, _0x52dbe4) {
                    return _0x3da130['IiGcs'](_0x4ddf4d, _0x52dbe4);
                }
            };
            if (_0x3da130['bLQMb'](_0x3da130['KFTFv'], _0x3da130['KFTFv'])) {
                let _0x1b8428 = _0x42274d['aqqwd'];
                let _0x494424 = '';
                for (let _0x1c3fb2 = 0x0; _0x42274d['kNjPP'](_0x1c3fb2, count); _0x1c3fb2++) {
                    _0x494424 += _0x1b8428[_0x42274d['rXTuj'](parseInt, _0x42274d['bFdIK'](Math['random'](), _0x1b8428['length']))];
                }
                return _0x494424;
            } else {
                try {
                    if (_0x5502f0) {
                        console['log']('' + JSON['stringify'](_0x5502f0));
                        console['log']($['name'] + ' employeeAward API请求失败，请检查网路重试');
                    } else {
                        if (_0x3da130['bLQMb'](_0x3da130['okMIX'], _0x3da130['okMIX'])) {
                            $['logErr'](e, _0x553733);
                        } else {
                            const {
                                iRet,
                                sErrMsg,
                                strAwardDetail
                            } = JSON['parse'](_0x29cf5e);
                            if (_0x3da130['HAcUH'](iRet, 0x0)) {
                                if (_0x3da130['HAcUH'](_0x3da130['uorsP'], _0x3da130['uorsP'])) {
                                    switch (_0x5158e0) {
                                        case _0x3da130['ugpTG']:
                                            console['log']('【欢乐牧场】获得 ' + strAwardDetail[_0x3da130['MMUdA']] + ' 红包');
                                            break;
                                        case _0x3da130['gbkDN']:
                                            console['log']('【便利店】获得 ' + strAwardDetail[_0x3da130['MMUdA']] + ' 红包');
                                            break;
                                        case _0x3da130['KAlEq']:
                                            console['log']('【京喜餐厅】获得 ' + strAwardDetail[_0x3da130['MMUdA']] + ' 红包');
                                            break;
                                        default:
                                            console['log']('【未知场景】获得 ' + strAwardDetail[_0x3da130['MMUdA']] + ' 红包');
                                    }
                                } else {
                                    cookiesArr = [$['getdata'](_0x5a6612['LpZQH']), $['getdata'](_0x5a6612['gjEYl']), ..._0x5a6612['xUKTq'](jsonParse, $['getdata'](_0x5a6612['cLSSn']) || '[]')['map'](_0x3c9446 => _0x3c9446['cookie'])]['filter'](_0xc95a07 => !!_0xc95a07);
                                }
                            } else {
                                switch (_0x5158e0) {
                                    case _0x3da130['ugpTG']:
                                        console['log']('【欢乐牧场领取红包】 ' + sErrMsg);
                                        break;
                                    case _0x3da130['gbkDN']:
                                        console['log']('【便利店领取红包】' + sErrMsg);
                                        break;
                                    case _0x3da130['KAlEq']:
                                        console['log']('【京喜餐厅领取红包】' + sErrMsg);
                                        break;
                                    default:
                                        console['log']('【未知场景领取红包】' + sErrMsg);
                                }
                            }
                            if (_0x3da130['quQMt'](iRet, 0x0)) {
                                if (_0x3da130['wmkjw'](_0x3da130['WCZSO'], _0x3da130['WCZSO'])) {
                                    return;
                                } else {
                                    return;
                                }
                            }
                            await $['wait'](_0x3da130['IiGcs'](0x2, 0x3e8));
                            await _0x3da130['FPkOL'](employeeAward, _0x5158e0);
                        }
                    }
                } catch (_0x1c4379) {
                    $['logErr'](_0x1c4379, _0x553733);
                } finally {
                    if (_0x3da130['CjPjv'](_0x3da130['mrmQZ'], _0x3da130['mrmQZ'])) {
                        _0x3da130['LBjZx'](_0x6b5b3e);
                    } else {
                        $['log']('\x0a' + taskinfo['strTaskDescr'] + '【领成就奖励】：该成就任务未达到门槛}');
                    }
                }
            }
        });
    });
}

function friendCircle() {
    var _0xa9cfea = {
        'jUxXk': function(_0x59c441, _0x32d272) {
            return _0x59c441 === _0x32d272;
        },
        'LjvMC': 'yRvKI',
        'BgGja': function(_0x14a84a, _0x13ec4d) {
            return _0x14a84a !== _0x13ec4d;
        },
        'jvsMa': function(_0x33af0a, _0x333627) {
            return _0x33af0a > _0x333627;
        },
        'BWtbF': function(_0x1ebd11, _0x3a4386) {
            return _0x1ebd11(_0x3a4386);
        },
        'vqvDn': function(_0x4185f4) {
            return _0x4185f4();
        },
        'cBNAE': function(_0xcbf5f8, _0xaf0452) {
            return _0xcbf5f8 === _0xaf0452;
        },
        'SoxcR': function(_0x28d78a, _0x323d02) {
            return _0x28d78a === _0x323d02;
        },
        'ZkXHt': 'VQAxG',
        'htKGe': function(_0x2ff523, _0x4ff0f0, _0x536b45) {
            return _0x2ff523(_0x4ff0f0, _0x536b45);
        }
    };
    return new Promise(async _0x285437 => {
        var _0x329c61 = {
            'zGHQL': function(_0x143fce, _0x3257b) {
                return _0xa9cfea['jUxXk'](_0x143fce, _0x3257b);
            },
            'GAYtT': _0xa9cfea['LjvMC'],
            'iMcgI': function(_0x2c7332, _0x8ff7fb) {
                return _0xa9cfea['BgGja'](_0x2c7332, _0x8ff7fb);
            },
            'xlCWe': function(_0x57d0ba, _0xc3ea38) {
                return _0xa9cfea['jvsMa'](_0x57d0ba, _0xc3ea38);
            },
            'nCZfZ': function(_0x21a1b2, _0x438a7a) {
                return _0xa9cfea['BWtbF'](_0x21a1b2, _0x438a7a);
            },
            'eFwnq': function(_0x2fd2ce) {
                return _0xa9cfea['vqvDn'](_0x2fd2ce);
            },
            'CbzXT': function(_0x140635, _0x19dedb) {
                return _0xa9cfea['cBNAE'](_0x140635, _0x19dedb);
            },
            'KuCAM': function(_0x30214d, _0x3c9559) {
                return _0xa9cfea['cBNAE'](_0x30214d, _0x3c9559);
            }
        };
        if (_0xa9cfea['SoxcR'](_0xa9cfea['ZkXHt'], _0xa9cfea['ZkXHt'])) {
            $['get'](_0xa9cfea['htKGe'](taskUrl, 'user/FriendCircle', 'dwPageIndex=1&dwPageSize=20'), async (_0x2c4b02, _0x5085bc, _0x12bd26) => {
                if (_0x329c61['zGHQL'](_0x329c61['GAYtT'], _0x329c61['GAYtT'])) {
                    try {
                        if (_0x2c4b02) {
                            console['log']('' + JSON['stringify'](_0x2c4b02));
                            console['log']($['name'] + ' FriendCircle API请求失败，请检查网路重试');
                        } else {
                            const {
                                MomentList = [], iRet, sErrMsg, strShareId
                            } = JSON['parse'](_0x12bd26);
                            for (moment of MomentList) {
                                if (_0x329c61['iMcgI'](moment['strShareId'], strShareId) && _0x329c61['xlCWe'](moment['dwAccessMoney'], 0x0)) {
                                    await _0x329c61['nCZfZ'](queryFriendIsland, moment['strShareId']);
                                    await $['wait'](0x1f4);
                                }
                            }
                        }
                    } catch (_0x216a3b) {
                        $['logErr'](_0x216a3b, _0x5085bc);
                    } finally {
                        _0x329c61['eFwnq'](_0x285437);
                    }
                } else {
                    console['log']('由于您第' + $['index'] + '个京东账号未提供shareCode,将采纳本脚本自带的助力码\n');
                    $['newShareCodes'] = $['strMyShareIds'];
                }
            });
        } else {
            if (err) {
                console['log']('' + JSON['stringify'](err));
                console['log']($['name'] + ' joinGroup API请求失败，请检查网路重试');
            } else {
                const {
                    sErrMsg,
                    iRet
                } = data = JSON['parse'](data);
                if (_0x329c61['CbzXT'](iRet, 0x7d5) || _0x329c61['KuCAM'](iRet, 0x270f)) $['canHelp'] = ![];
                $['log']('iRet:' + iRet + ' ' + sErrMsg);
            }
        }
    });
}

function queryFriendIsland(_0x5d7aff) {
    var _0x4722d1 = {
        'OgHWH': function(_0x58db38, _0x49b594) {
            return _0x58db38 !== _0x49b594;
        },
        'yVhmW': 'VNXQl',
        'RQrDr': 'kSBub',
        'RumcN': function(_0x55170c, _0x4c021b) {
            return _0x55170c === _0x4c021b;
        },
        'lmRFz': 'success',
        'sMPKB': function(_0x3f859d, _0x28ddec) {
            return _0x3f859d(_0x28ddec);
        },
        'erspO': function(_0x14b3a2, _0xe1306d) {
            return _0x14b3a2 + _0xe1306d;
        },
        'puwZa': function(_0x234d1b, _0x2113c2, _0x2c168a, _0x2918a0, _0x55eb45) {
            return _0x234d1b(_0x2113c2, _0x2c168a, _0x2918a0, _0x55eb45);
        },
        'Kqafq': 'QwCUB',
        'Rgddt': 'clEge',
        'KiAcn': function(_0x3ff5ea) {
            return _0x3ff5ea();
        },
        'SVDVl': function(_0x3b022e, _0x397f2a, _0x46f8dc) {
            return _0x3b022e(_0x397f2a, _0x46f8dc);
        }
    };
    return new Promise(async _0x16ed10 => {
        $['get'](_0x4722d1['SVDVl'](taskUrl, 'user/QueryFriendIsland', 'strShareId=' + _0x5d7aff + '&sceneval=2'), async (_0x1e1d71, _0x238171, _0x578de1) => {
            if (_0x4722d1['OgHWH'](_0x4722d1['yVhmW'], _0x4722d1['RQrDr'])) {
                try {
                    if (_0x1e1d71) {
                        console['log']('' + JSON['stringify'](_0x1e1d71));
                        console['log']($['name'] + ' QueryFriendIsland API请求失败，请检查网路重试');
                    } else {
                        const {
                            SceneList = {}, dwStealMoney, sErrMsg, strFriendNick
                        } = JSON['parse'](_0x578de1);
                        if (_0x4722d1['RumcN'](sErrMsg, _0x4722d1['lmRFz'])) {
                            const _0x10e607 = _0x4722d1['sMPKB'](eval, _0x4722d1['erspO'](_0x4722d1['erspO']('(', JSON['stringify'](SceneList)), ')'));
                            const _0x452374 = Object['keys'](SceneList);
                            for (sceneId of _0x452374) {
                                await _0x4722d1['puwZa'](stealMoney, _0x5d7aff, sceneId, strFriendNick, _0x10e607[sceneId]['strSceneName']);
                                await $['wait'](0x1f4);
                            }
                        }
                    }
                } catch (_0x1a25e9) {
                    $['logErr'](_0x1a25e9, _0x238171);
                } finally {
                    if (_0x4722d1['OgHWH'](_0x4722d1['Kqafq'], _0x4722d1['Rgddt'])) {
                        _0x4722d1['KiAcn'](_0x16ed10);
                    } else {
                        $['logErr'](e, _0x238171);
                    }
                }
            } else {
                if (_0x1e1d71) {
                    console['log']('' + JSON['stringify'](_0x1e1d71));
                    console['log']($['name'] + ' AchieveInfo API请求失败，请检查网路重试');
                } else {
                    const {
                        iRet,
                        sErrMsg,
                        taskinfo = []
                    } = JSON['parse'](_0x578de1);
                    $['allTask'] = taskinfo['filter'](_0x2e2d02 => _0x2e2d02['dwAwardStatus'] === 0x1);
                    $['log']('\n获取【🎖成就任务】列表 ' + sErrMsg + '，总共' + $['allTask']['length'] + '个任务！\n' + ($['showLog'] ? _0x578de1 : ''));
                }
            }
        });
    });
}

function stealMoney(_0x122b97, _0x2d4a3f, _0x361726, _0x24aaa9) {
    var _0x1cebb6 = {
        'BGQDg': 'F45CB4F07997DFE748E5656521A9034446A1568F6950206B0D44A5664662275D',
        'UwmJx': function(_0x33ed71, _0x5e3aca) {
            return _0x33ed71 === _0x5e3aca;
        },
        'aeSlJ': 'ohyDM',
        'ouVeI': function(_0x15e36f) {
            return _0x15e36f();
        },
        'IwAvz': function(_0x134ef1, _0x55a134, _0x2991f8) {
            return _0x134ef1(_0x55a134, _0x2991f8);
        }
    };
    return new Promise(async _0x30fbb9 => {
        var _0x3b7662 = {
            'iufod': _0x1cebb6['BGQDg'],
            'mqXfy': function(_0x4f678a, _0x3392a3) {
                return _0x1cebb6['UwmJx'](_0x4f678a, _0x3392a3);
            },
            'qGXKa': _0x1cebb6['aeSlJ'],
            'lJVRb': function(_0x520ebb) {
                return _0x1cebb6['ouVeI'](_0x520ebb);
            }
        };
        $['get'](_0x1cebb6['IwAvz'](taskUrl, 'user/StealMoney', 'strFriendId=' + _0x122b97 + '&dwSceneId=' + _0x2d4a3f + '&sceneval=2'), async (_0x30defd, _0xe06bf3, _0x117049) => {
            try {
                if (_0x30defd) {
                    console['log']('' + JSON['stringify'](_0x30defd));
                    console['log']($['name'] + ' StealMoney API请求失败，请检查网路重试');
                } else {
                    const {
                        dwGetMoney,
                        iRet,
                        sErrMsg
                    } = JSON['parse'](_0x117049);
                    $['log']('\n🤏偷取好友【' + _0x361726 + '】【' + _0x24aaa9 + '】财富值：¥ ' + (dwGetMoney ? dwGetMoney : sErrMsg) + '\x0a' + ($['showLog'] ? _0x117049 : ''));
                }
            } catch (_0x2566af) {
                if (_0x3b7662['mqXfy'](_0x3b7662['qGXKa'], _0x3b7662['qGXKa'])) {
                    $['logErr'](_0x2566af, _0xe06bf3);
                } else {
                    $['newShareCodes'] = [...new Set([...$['newShareCodes'], ...$['strMyShareIds'], _0x3b7662['iufod'], ...readShareCodeRes['data'] || []])];
                }
            } finally {
                _0x3b7662['lJVRb'](_0x30fbb9);
            }
        });
    });
}
async function treasureHunt() {
    var _0x2d69fb = {
        'UMIew': function(_0xb58923) {
            return _0xb58923();
        },
        'bjDoY': function(_0x24044a) {
            return _0x24044a();
        },
        'TGjym': function(_0x3c056a, _0x5c3f6b) {
            return _0x3c056a > _0x5c3f6b;
        },
        'cwYGW': function(_0x17fcec, _0x32ee66) {
            return _0x17fcec !== _0x32ee66;
        },
        'DhRTn': 'CqQgl',
        'Panqy': 'ippIe',
        'QAiBT': function(_0x41c8fb, _0x5d3316) {
            return _0x41c8fb < _0x5d3316;
        },
        'xICQI': function(_0x6846a4, _0x51e6dd) {
            return _0x6846a4 / _0x51e6dd;
        },
        'OQcRd': function(_0x4e14b2, _0x40ffce) {
            return _0x4e14b2 > _0x40ffce;
        },
        'YxQBF': function(_0x2f7473, _0x392085) {
            return _0x2f7473 !== _0x392085;
        },
        'hNRmu': 'bLPHo',
        'dUubI': 'KeWyi',
        'tvAcb': function(_0x4dafd1, _0x5af437) {
            return _0x4dafd1(_0x5af437);
        },
        'RZxBv': 'eWecH'
    };
    if (_0x2d69fb['TGjym']($['info']['dwXBRemainCnt'], 0x0)) {
        if (_0x2d69fb['cwYGW'](_0x2d69fb['DhRTn'], _0x2d69fb['Panqy'])) {
            const _0x1f2e0f = $['info']['XBDetail'];
            for (let _0x431e4d = 0x0; _0x2d69fb['QAiBT'](_0x431e4d, _0x1f2e0f['length']); _0x431e4d++) {
                const {
                    ddwColdEndTm,
                    strIndex
                } = _0x1f2e0f[_0x431e4d];
                const _0x4cc760 = Math['round'](_0x2d69fb['xICQI'](new Date(), 0x3e8));
                if (_0x2d69fb['OQcRd'](_0x4cc760, ddwColdEndTm)) {
                    if (_0x2d69fb['YxQBF'](_0x2d69fb['hNRmu'], _0x2d69fb['dUubI'])) {
                        await _0x2d69fb['tvAcb'](doTreasureHunt, strIndex);
                        await $['wait'](0xbb8);
                    } else {
                        _0x2d69fb['UMIew'](resolve);
                    }
                } else {
                    if (_0x2d69fb['YxQBF'](_0x2d69fb['RZxBv'], _0x2d69fb['RZxBv'])) {
                        $['msg']($['name'], '', '' + $['result']['join']('\x0a'));
                    } else {
                        $['log']('\n🎁寻宝：宝藏冷却中，请等待冷却完毕');
                    }
                }
            }
        } else {
            _0x2d69fb['bjDoY'](resolve);
        }
    } else {
        $['log']('\n🎁寻宝：寻宝次数不足');
    }
}

function doTreasureHunt(_0x5da34e) {
    var _0x35a396 = {
        'fHgmE': function(_0x5b7cae) {
            return _0x5b7cae();
        },
        'vrXeI': function(_0x2726c0, _0x20537f) {
            return _0x2726c0(_0x20537f);
        },
        'bYiVr': function(_0x11b016, _0x46eb7c) {
            return _0x11b016 !== _0x46eb7c;
        },
        'wpiMN': 'IeoZy',
        'eFzem': 'rGics',
        'veoDP': 'rQWbW',
        'fRlGT': 'LXSuF',
        'JpKBg': function(_0x264320, _0x4f6b9a) {
            return _0x264320 !== _0x4f6b9a;
        },
        'EYtsu': 'SmGMc',
        'hZdaf': function(_0x1e2449, _0x300d30) {
            return _0x1e2449 || _0x300d30;
        },
        'svGuh': function(_0xeabb5e) {
            return _0xeabb5e();
        },
        'wDneD': 'CQxyz',
        'TlNwJ': function(_0x59bd68, _0x454f20, _0x1286c1) {
            return _0x59bd68(_0x454f20, _0x1286c1);
        }
    };
    return new Promise(async _0x17496e => {
        var _0x22dd7e = {
            'xpTtZ': function(_0x8143e5, _0x314c7d) {
                return _0x35a396['vrXeI'](_0x8143e5, _0x314c7d);
            },
            'cwlQl': function(_0x24b560, _0x14c152) {
                return _0x35a396['bYiVr'](_0x24b560, _0x14c152);
            },
            'HxgRr': _0x35a396['wpiMN'],
            'JBrzg': _0x35a396['eFzem'],
            'cylJD': _0x35a396['veoDP'],
            'WioMa': _0x35a396['fRlGT'],
            'FQuqg': function(_0x2b2dd4, _0x3b2885) {
                return _0x35a396['JpKBg'](_0x2b2dd4, _0x3b2885);
            },
            'CdjmE': _0x35a396['EYtsu'],
            'EUpob': function(_0x4217fa, _0x1d0cb9) {
                return _0x35a396['hZdaf'](_0x4217fa, _0x1d0cb9);
            },
            'KiHEe': function(_0x3d9d7a) {
                return _0x35a396['svGuh'](_0x3d9d7a);
            }
        };
        if (_0x35a396['JpKBg'](_0x35a396['wDneD'], _0x35a396['wDneD'])) {
            _0x35a396['fHgmE'](_0x17496e);
        } else {
            $['get'](_0x35a396['TlNwJ'](taskUrl, 'consume/TreasureHunt', 'strIndex=' + _0x5da34e + '&dwIsShare=0'), async (_0x420fc4, _0x4dae2b, _0x7691fd) => {
                if (_0x22dd7e['cwlQl'](_0x22dd7e['HxgRr'], _0x22dd7e['JBrzg'])) {
                    try {
                        if (_0x22dd7e['cwlQl'](_0x22dd7e['cylJD'], _0x22dd7e['WioMa'])) {
                            if (_0x420fc4) {
                                console['log']('' + JSON['stringify'](_0x420fc4));
                                console['log']($['name'] + ' TreasureHunt API请求失败，请检查网路重试');
                            } else {
                                if (_0x22dd7e['FQuqg'](_0x22dd7e['CdjmE'], _0x22dd7e['CdjmE'])) {
                                    if (_0x420fc4) {
                                        console['log']('' + JSON['stringify'](_0x420fc4));
                                        console['log']($['name'] + ' GetUserTaskStatusList API请求失败，请检查网路重试');
                                    } else {
                                        const {
                                            ret,
                                            data: {
                                                userTaskStatusList = []
                                            } = {},
                                            msg
                                        } = JSON['parse'](_0x7691fd);
                                        $['allTask'] = userTaskStatusList['filter'](_0x18b4ef => _0x18b4ef['awardStatus'] !== 0x1);
                                        $['log']('\n获取【📆日常任务】列表 ' + msg + '，总共' + $['allTask']['length'] + '个任务！\n' + ($['showLog'] ? _0x7691fd : ''));
                                    }
                                } else {
                                    const {
                                        iRet,
                                        dwExpericnce,
                                        sErrMsg
                                    } = JSON['parse'](_0x7691fd);
                                    $['log']('\x0a【' + _0x5da34e + '】🎁寻宝：' + sErrMsg + ' ，获取随机奖励：¥ ' + _0x22dd7e['EUpob'](dwExpericnce, 0x0) + ' \x0a' + ($['showLog'] ? _0x7691fd : ''));
                                    _0x22dd7e['xpTtZ'](_0x17496e, iRet);
                                }
                            }
                        } else {
                            console['log']('' + JSON['stringify'](_0x420fc4));
                            console['log']($['name'] + ' GetUserTaskStatusList API请求失败，请检查网路重试');
                        }
                    } catch (_0x488b78) {
                        $['logErr'](_0x488b78, _0x4dae2b);
                    } finally {
                        _0x22dd7e['KiHEe'](_0x17496e);
                    }
                } else {
                    _0x22dd7e['xpTtZ'](_0x17496e, ![]);
                    $['log']('\x0a' + taskName + '【做日常任务】： mission success');
                    return;
                }
            });
        }
    });
}

function getTaskList(_0x5b0311) {
    var _0x38df54 = {
        'eSMBS': function(_0x17069c, _0x2e653a) {
            return _0x17069c == _0x2e653a;
        },
        'BvkGL': 'success',
        'GEegJ': function(_0x4a9323, _0x3e896e) {
            return _0x4a9323 || _0x3e896e;
        },
        'nMQRU': function(_0x10da6d, _0x54f96f) {
            return _0x10da6d === _0x54f96f;
        },
        'hOZzD': 'XzOJE',
        'RJyHA': function(_0x8547fc, _0x46b923) {
            return _0x8547fc === _0x46b923;
        },
        'imZAb': 'wtnVi',
        'kRwUS': 'bXTDj',
        'yxMJw': function(_0x3c62e1) {
            return _0x3c62e1();
        },
        'DtNYz': 'ddwMoney',
        'INlma': function(_0x151272, _0x19aa47) {
            return _0x151272(_0x19aa47);
        },
        'TmviG': function(_0x5717fd, _0x416b00) {
            return _0x5717fd === _0x416b00;
        },
        'XiolI': 'zxxyE',
        'ICYBX': 'yppLk',
        'jRvcB': 'JMAth',
        'TtSlq': function(_0x1c926b, _0x4c0724) {
            return _0x1c926b === _0x4c0724;
        },
        'XbLUh': 'xOCIJ',
        'AjYeD': 'GeHGm',
        'fUHfy': function(_0x26bd13, _0x42ce3d) {
            return _0x26bd13(_0x42ce3d);
        },
        'FlaAt': 'GetUserTaskStatusList',
        'IaZUp': function(_0x464152, _0x3b75a6) {
            return _0x464152(_0x3b75a6);
        },
        'epPiQ': 'consume/AchieveInfo'
    };
    return new Promise(async _0x8dce3e => {
        var _0x5889ce = {
            'SpnPb': _0x38df54['DtNYz'],
            'kqKSr': function(_0x58df77, _0x160836) {
                return _0x38df54['INlma'](_0x58df77, _0x160836);
            },
            'uiYXy': function(_0xd59901) {
                return _0x38df54['yxMJw'](_0xd59901);
            },
            'uxdMx': function(_0x2401dc, _0x5a4a43) {
                return _0x38df54['RJyHA'](_0x2401dc, _0x5a4a43);
            },
            'XiEMs': function(_0x2f2705, _0x38483a) {
                return _0x38df54['TmviG'](_0x2f2705, _0x38483a);
            },
            'LPWXX': _0x38df54['XiolI'],
            'rsvUF': _0x38df54['ICYBX'],
            'HpEQe': _0x38df54['jRvcB'],
            'Xyvmk': function(_0x1a4525) {
                return _0x38df54['yxMJw'](_0x1a4525);
            }
        };
        if (_0x38df54['TtSlq'](_0x38df54['XbLUh'], _0x38df54['AjYeD'])) {
            data = JSON['parse'](data);
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
            } = data;
            $['log']('\n获取用户信息：' + sErrMsg + '\x0a' + ($['showLog'] ? data : ''));
            $['log']('\n当前等级:' + dwLevel + ',财富值:' + data[_0x5889ce['SpnPb']] + '\x0a');
            if (showInvite) {
                console['log']('财富岛好友互助码每次运行都变化,旧的可继续使用');
                $['log']('\n【京东账号' + $['index'] + '（' + $['UserName'] + '）的' + $['name'] + '好友互助码】' + strMyShareId + '\x0a\x0a');
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
            _0x5889ce['kqKSr'](_0x8dce3e, {
                'SceneList': SceneList,
                'XBDetail': XBDetail,
                'dwXBRemainCnt': dwXBRemainCnt,
                'ddwMoney': ddwMoney,
                'dwIsNewUser': dwIsNewUser,
                'strMyShareId': strMyShareId,
                'strPin': strPin
            });
        } else {
            switch (_0x5b0311) {
                case 0x0:
                    $['get'](_0x38df54['fUHfy'](taskListUrl, _0x38df54['FlaAt']), async (_0x1bb743, _0xf2218, _0x434c7a) => {
                        var _0x914a73 = {
                            'qiHzY': function(_0x52f348, _0x16767f) {
                                return _0x5889ce['uxdMx'](_0x52f348, _0x16767f);
                            },
                            'KFHeE': function(_0x231131, _0xd842d3) {
                                return _0x5889ce['uxdMx'](_0x231131, _0xd842d3);
                            }
                        };
                        try {
                            if (_0x1bb743) {
                                console['log']('' + JSON['stringify'](_0x1bb743));
                                console['log']($['name'] + ' GetUserTaskStatusList API请求失败，请检查网路重试');
                            } else {
                                const {
                                    ret,
                                    data: {
                                        userTaskStatusList = []
                                    } = {},
                                    msg
                                } = JSON['parse'](_0x434c7a);
                                $['allTask'] = userTaskStatusList['filter'](_0x4c2509 => _0x4c2509['awardStatus'] !== 0x1);
                                $['log']('\n获取【📆日常任务】列表 ' + msg + '，总共' + $['allTask']['length'] + '个任务！\n' + ($['showLog'] ? _0x434c7a : ''));
                            }
                        } catch (_0x2d37f2) {
                            if (_0x5889ce['XiEMs'](_0x5889ce['LPWXX'], _0x5889ce['LPWXX'])) {
                                $['logErr'](_0x2d37f2, _0xf2218);
                            } else {
                                if (_0x1bb743) {
                                    console['log']('' + JSON['stringify'](_0x1bb743));
                                    console['log']($['name'] + ' createAssistUser JoinScene API请求失败，请检查网路重试');
                                } else {
                                    console['log']('普通助力(招工)结果:' + _0x434c7a);
                                    const {
                                        iRet
                                    } = JSON['parse'](_0x434c7a);
                                    if (_0x914a73['qiHzY'](iRet, 0x7d5) || _0x914a73['KFHeE'](iRet, 0x270f)) $['canHelp'] = ![];
                                }
                            }
                        } finally {
                            if (_0x5889ce['XiEMs'](_0x5889ce['rsvUF'], _0x5889ce['HpEQe'])) {
                                _0x5889ce['uiYXy'](_0x8dce3e);
                            } else {
                                _0x5889ce['Xyvmk'](_0x8dce3e);
                            }
                        }
                    });
                    break;
                case 0x1:
                    $['get'](_0x38df54['IaZUp'](taskUrl, _0x38df54['epPiQ']), async (_0x4e4fc9, _0x1063f5, _0xb8af43) => {
                        var _0x5c34f6 = {
                            'pmxCA': function(_0xa08cfe, _0x681155) {
                                return _0x38df54['eSMBS'](_0xa08cfe, _0x681155);
                            },
                            'icSSM': _0x38df54['BvkGL'],
                            'Meobm': function(_0x2a5568, _0x9a0f95) {
                                return _0x38df54['GEegJ'](_0x2a5568, _0x9a0f95);
                            }
                        };
                        try {
                            if (_0x38df54['nMQRU'](_0x38df54['hOZzD'], _0x38df54['hOZzD'])) {
                                if (_0x4e4fc9) {
                                    if (_0x38df54['RJyHA'](_0x38df54['imZAb'], _0x38df54['imZAb'])) {
                                        console['log']('' + JSON['stringify'](_0x4e4fc9));
                                        console['log']($['name'] + ' AchieveInfo API请求失败，请检查网路重试');
                                    } else {
                                        $['logErr'](e, _0x1063f5);
                                    }
                                } else {
                                    const {
                                        iRet,
                                        sErrMsg,
                                        taskinfo = []
                                    } = JSON['parse'](_0xb8af43);
                                    $['allTask'] = taskinfo['filter'](_0x130439 => _0x130439['dwAwardStatus'] === 0x1);
                                    $['log']('\n获取【🎖成就任务】列表 ' + sErrMsg + '，总共' + $['allTask']['length'] + '个任务！\n' + ($['showLog'] ? _0xb8af43 : ''));
                                }
                            } else {
                                const {
                                    iRet,
                                    dwMoney,
                                    sErrMsg
                                } = JSON['parse'](_0xb8af43);
                                $['log']('\x0a【' + sceneList[_key]['strSceneName'] + '】🏝岛主 : ' + (_0x5c34f6['pmxCA'](sErrMsg, _0x5c34f6['icSSM']) ? '获取财富值：¥ ' + _0x5c34f6['Meobm'](dwMoney, 0x0) : sErrMsg) + ' \x0a' + ($['showLog'] ? _0xb8af43 : ''));
                            }
                        } catch (_0x2c9291) {
                            $['logErr'](_0x2c9291, _0x1063f5);
                        } finally {
                            if (_0x38df54['RJyHA'](_0x38df54['kRwUS'], _0x38df54['kRwUS'])) {
                                _0x38df54['yxMJw'](_0x8dce3e);
                            } else {
                                _0x5889ce['Xyvmk'](_0x8dce3e);
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

function browserTask(_0x3dbdb3) {
    var _0x45cb0b = {
        'sJreT': function(_0x5dd306, _0x5c27f8) {
            return _0x5dd306 || _0x5c27f8;
        },
        'mhncn': function(_0x5a3f74) {
            return _0x5a3f74();
        },
        'aaqiv': function(_0x30b6c1, _0x617df6) {
            return _0x30b6c1 < _0x617df6;
        },
        'rMSTa': function(_0x510c10, _0x352a90) {
            return _0x510c10 + _0x352a90;
        },
        'fqjFb': function(_0x5c0066, _0x449f45) {
            return _0x5c0066 < _0x449f45;
        },
        'CTNAr': function(_0x3bef49, _0xa48e1d) {
            return _0x3bef49 === _0xa48e1d;
        },
        'kviSJ': 'zoISi',
        'sFPjq': 'nVwhZ',
        'eINyN': function(_0x52dca5, _0x4522ae) {
            return _0x52dca5(_0x4522ae);
        },
        'HMtST': function(_0x374db2, _0x5427a5, _0x17e4c5) {
            return _0x374db2(_0x5427a5, _0x17e4c5);
        },
        'qUGgD': function(_0x689a79, _0x35af7c) {
            return _0x689a79 !== _0x35af7c;
        },
        'cuOqh': 'iIAxz',
        'YeTDD': function(_0x4ccee5, _0x5a4b25) {
            return _0x4ccee5 < _0x5a4b25;
        },
        'ggWBz': function(_0x5a6775, _0x2db4aa) {
            return _0x5a6775 + _0x2db4aa;
        },
        'FGdZR': function(_0x2fc7fa, _0x45aa93) {
            return _0x2fc7fa === _0x45aa93;
        },
        'mTmbN': 'mwXEF',
        'ehWWe': 'HcTRB',
        'KAMBD': function(_0x4ebaf1, _0x4a75f1) {
            return _0x4ebaf1 + _0x4a75f1;
        }
    };
    return new Promise(async _0x57898c => {
        var _0x2670a8 = {
            'bHVge': function(_0x34c59e, _0x4143a5) {
                return _0x45cb0b['sJreT'](_0x34c59e, _0x4143a5);
            },
            'IrmPf': function(_0x23e8e4) {
                return _0x45cb0b['mhncn'](_0x23e8e4);
            }
        };
        switch (_0x3dbdb3) {
            case 0x0:
                const _0xf2202a = Math['max'](...[...$['allTask']]['map'](_0x3dcf11 => _0x3dcf11['configTargetTimes']));
                for (let _0x331a1d = 0x0; _0x45cb0b['aaqiv'](_0x331a1d, $['allTask']['length']); _0x331a1d++) {
                    const _0x9e786 = $['allTask'][_0x331a1d];
                    $['log']('\n开始第' + _0x45cb0b['rMSTa'](_0x331a1d, 0x1) + '个【📆日常任务】：' + _0x9e786['taskName']);
                    const _0x154b5f = [!![], !![]];
                    for (let _0x331a1d = 0x0; _0x45cb0b['fqjFb'](_0x331a1d, _0xf2202a); _0x331a1d++) {
                        await $['wait'](0x1f4);
                        if (_0x154b5f[0x0]) {
                            if (_0x45cb0b['CTNAr'](_0x45cb0b['kviSJ'], _0x45cb0b['sFPjq'])) {
                                $['logErr'](e, resp);
                            } else {
                                _0x154b5f[0x0] = await _0x45cb0b['eINyN'](doTask, _0x9e786);
                            }
                        }
                        await $['wait'](0x1f4);
                        if (_0x154b5f[0x1]) {
                            _0x154b5f[0x1] = await _0x45cb0b['HMtST'](awardTask, 0x0, _0x9e786);
                        }
                        if (!_0x154b5f[0x0] && !_0x154b5f[0x1]) {
                            if (_0x45cb0b['qUGgD'](_0x45cb0b['cuOqh'], _0x45cb0b['cuOqh'])) {
                                if (err) {
                                    console['log']('' + JSON['stringify'](err));
                                    console['log']($['name'] + ' UserSignRewardV2 API请求失败，请检查网路重试');
                                } else {
                                    const {
                                        iRet,
                                        sData: {
                                            ddwMoney
                                        },
                                        sErrMsg
                                    } = JSON['parse'](data);
                                    $['log']('\n📌签到：' + sErrMsg + '，获得财富 ¥ ' + _0x2670a8['bHVge'](ddwMoney, 0x0) + '\x0a' + ($['showLog'] ? data : ''));
                                }
                            } else {
                                break;
                            }
                        }
                    }
                    $['log']('\n结束第' + _0x45cb0b['rMSTa'](_0x331a1d, 0x1) + '个【📆日常任务】：' + _0x9e786['taskName'] + '\x0a');
                }
                break;
            case 0x1:
                for (let _0x4f3841 = 0x0; _0x45cb0b['YeTDD'](_0x4f3841, $['allTask']['length']); _0x4f3841++) {
                    const _0x9e786 = $['allTask'][_0x4f3841];
                    $['log']('\n开始第' + _0x45cb0b['ggWBz'](_0x4f3841, 0x1) + '个【🎖成就任务】：' + _0x9e786['strTaskDescr']);
                    if (_0x45cb0b['FGdZR'](_0x9e786['dwAwardStatus'], '0')) {
                        if (_0x45cb0b['FGdZR'](_0x45cb0b['mTmbN'], _0x45cb0b['ehWWe'])) {
                            _0x2670a8['IrmPf'](_0x57898c);
                        } else {
                            $['log']('\x0a' + _0x9e786['strTaskDescr'] + '【领成就奖励】：该成就任务未达到门槛}');
                        }
                    } else {
                        await $['wait'](0x1f4);
                        await _0x45cb0b['HMtST'](awardTask, 0x1, _0x9e786);
                    }
                    $['log']('\n结束第' + _0x45cb0b['KAMBD'](_0x4f3841, 0x1) + '个【🎖成就任务】：' + _0x9e786['strTaskDescr'] + '\x0a');
                }
                break;
            default:
                break;
        }
        _0x45cb0b['mhncn'](_0x57898c);
    });
}

function doTask(_0x21c170) {
    var _0x3572cc = {
        'boRqJ': function(_0x4b9ce3) {
            return _0x4b9ce3();
        },
        'KoQSh': function(_0x5edda4, _0x49d80a) {
            return _0x5edda4 !== _0x49d80a;
        },
        'mmspY': 'qZvQm',
        'RacNB': function(_0x232136, _0x5bdef4) {
            return _0x232136 === _0x5bdef4;
        },
        'TLeLn': 'wlMjr',
        'TMNHx': 'QJBOt',
        'FopiI': '活动太火爆了',
        'VsEeP': '任务进行中或者未到任务时间',
        'MTFpO': function(_0x181433, _0x3740ca) {
            return _0x181433(_0x3740ca);
        },
        'yDSLu': function(_0x476611, _0x4311af) {
            return _0x476611 === _0x4311af;
        },
        'EIZcM': function(_0x563277, _0x490c89) {
            return _0x563277(_0x490c89);
        },
        'TIVjE': function(_0x3b926b, _0xd51c93) {
            return _0x3b926b * _0xd51c93;
        },
        'TpswY': function(_0x4e3350, _0x5d1e80) {
            return _0x4e3350 >= _0x5d1e80;
        },
        'qNXAR': 'Jegcn',
        'pRBFH': function(_0x24131b, _0x5007cf) {
            return _0x24131b(_0x5007cf);
        },
        'qMpQA': function(_0x41368f, _0x2e34e4, _0x31f98a) {
            return _0x41368f(_0x2e34e4, _0x31f98a);
        }
    };
    return new Promise(async _0x541d5b => {
        var _0x17cfd3 = {
            'GeMxV': function(_0x8c6f6e, _0x760ba8) {
                return _0x3572cc['EIZcM'](_0x8c6f6e, _0x760ba8);
            },
            'OIKyP': function(_0x391c90, _0x1731ec) {
                return _0x3572cc['TIVjE'](_0x391c90, _0x1731ec);
            }
        };
        const {
            taskId,
            completedTimes,
            configTargetTimes,
            taskName
        } = _0x21c170;
        if (_0x3572cc['TpswY'](_0x3572cc['EIZcM'](parseInt, completedTimes), _0x3572cc['EIZcM'](parseInt, configTargetTimes))) {
            if (_0x3572cc['yDSLu'](_0x3572cc['qNXAR'], _0x3572cc['qNXAR'])) {
                _0x3572cc['pRBFH'](_0x541d5b, ![]);
                $['log']('\x0a' + taskName + '【做日常任务】： mission success');
                return;
            } else {
                console['log']('' + JSON['stringify'](err));
                console['log']($['name'] + ' FunCenterState API请求失败，请检查网路重试');
            }
        }
        $['get'](_0x3572cc['qMpQA'](taskListUrl, 'DoTask', 'taskId=' + taskId), (_0x9ccfaa, _0x2dcc46, _0x25d64c) => {
            var _0x51af60 = {
                'PUKSh': function(_0xaf0400) {
                    return _0x3572cc['boRqJ'](_0xaf0400);
                }
            };
            try {
                if (_0x3572cc['KoQSh'](_0x3572cc['mmspY'], _0x3572cc['mmspY'])) {
                    str += _sym[_0x17cfd3['GeMxV'](parseInt, _0x17cfd3['OIKyP'](Math['random'](), _sym['length']))];
                } else {
                    if (_0x9ccfaa) {
                        console['log']('' + JSON['stringify'](_0x9ccfaa));
                        console['log']($['name'] + ' DoTask API请求失败，请检查网路重试');
                    } else {
                        if (_0x3572cc['RacNB'](_0x3572cc['TLeLn'], _0x3572cc['TMNHx'])) {
                            _0x51af60['PUKSh'](_0x541d5b);
                        } else {
                            const {
                                msg,
                                ret
                            } = JSON['parse'](_0x25d64c);
                            $['log']('\x0a' + taskName + '【做日常任务】：' + (_0x3572cc['KoQSh'](msg['indexOf'](_0x3572cc['FopiI']), -0x1) ? _0x3572cc['VsEeP'] : msg) + '\x0a' + ($['showLog'] ? _0x25d64c : ''));
                            _0x3572cc['MTFpO'](_0x541d5b, _0x3572cc['yDSLu'](ret, 0x0));
                        }
                    }
                }
            } catch (_0xc5978b) {
                $['logErr'](_0xc5978b, _0x2dcc46);
            } finally {
                _0x3572cc['boRqJ'](_0x541d5b);
            }
        });
    });
}

function awardTask(_0xc3396e, _0x9148f3) {
    var _0x400558 = {
        'mzqix': function(_0x4133d2) {
            return _0x4133d2();
        },
        'ADvjI': function(_0x14fa9c, _0x63939d) {
            return _0x14fa9c(_0x63939d);
        },
        'yXLdU': function(_0x558843, _0x371780) {
            return _0x558843 === _0x371780;
        },
        'gYyUk': 'luEOa',
        'pvJls': 'kRIfg',
        'OnYqc': function(_0x1ad1b0, _0x32fd79) {
            return _0x1ad1b0 !== _0x32fd79;
        },
        'brfXM': 'kolQA',
        'loPsX': function(_0x475791, _0x5d9897) {
            return _0x475791 !== _0x5d9897;
        },
        'vdebn': 'Tbmjj',
        'aQDmg': 'IjwZN',
        'GrnrX': function(_0x504e12, _0xbc9cb8) {
            return _0x504e12 !== _0xbc9cb8;
        },
        'KSBUp': '活动太火爆了',
        'Ypvvd': 'lbbAQ',
        'ZKmZG': '任务为成就任务或者未到任务时间',
        'OejXT': function(_0x3abfc6, _0x4bc6cf) {
            return _0x3abfc6 + _0x4bc6cf;
        },
        'jgKBV': function(_0x5a0eee, _0x2e11ca) {
            return _0x5a0eee === _0x2e11ca;
        },
        'hxOgA': 'lACHv',
        'QBvvc': 'ykSkH',
        'dMnlS': function(_0x403889, _0x231493) {
            return _0x403889(_0x231493);
        },
        'IlWwN': function(_0x24716d, _0x321fb1) {
            return _0x24716d == _0x321fb1;
        },
        'VIeLu': 'success',
        'FQHft': function(_0x64529e, _0x5d21e4) {
            return _0x64529e || _0x5d21e4;
        },
        'Qjpdm': '任务进行中或者未到任务时间',
        'edaKS': function(_0x310b6f, _0x30ee31) {
            return _0x310b6f !== _0x30ee31;
        },
        'rLhVy': 'uRXvi',
        'mOmRE': 'koNJV',
        'FeNxX': 'ZKnSU',
        'eYHYI': 'lHbaE',
        'iDBFM': 'AjUOc',
        'gslvM': 'BemSW',
        'mLyEw': function(_0x2d7a1e, _0x29241c) {
            return _0x2d7a1e === _0x29241c;
        },
        'BpsII': 'XedNB',
        'vezTd': function(_0x29a3f3, _0x49024f, _0x4f218a) {
            return _0x29a3f3(_0x49024f, _0x4f218a);
        }
    };
    return new Promise(_0x3b0d0d => {
        var _0x39eb6e = {
            'wNnDZ': function(_0x538ae3, _0x4c81c1) {
                return _0x400558['dMnlS'](_0x538ae3, _0x4c81c1);
            },
            'wAClF': function(_0x175220, _0x42f187) {
                return _0x400558['IlWwN'](_0x175220, _0x42f187);
            },
            'gLVmP': _0x400558['VIeLu'],
            'jpaes': function(_0x4e789d, _0x123495) {
                return _0x400558['FQHft'](_0x4e789d, _0x123495);
            },
            'AoeKH': function(_0x4b2daf, _0x758694) {
                return _0x400558['GrnrX'](_0x4b2daf, _0x758694);
            },
            'zcuek': _0x400558['KSBUp'],
            'GgdKZ': _0x400558['Qjpdm'],
            'LGear': function(_0x43b72e, _0x3fa907) {
                return _0x400558['jgKBV'](_0x43b72e, _0x3fa907);
            },
            'rstFy': function(_0x2df573, _0x145dd1) {
                return _0x400558['edaKS'](_0x2df573, _0x145dd1);
            },
            'pgSbE': _0x400558['rLhVy'],
            'aHfYU': _0x400558['mOmRE'],
            'fAYjq': function(_0x41306e, _0x392053) {
                return _0x400558['edaKS'](_0x41306e, _0x392053);
            },
            'UosKX': _0x400558['FeNxX'],
            'ewpRl': _0x400558['eYHYI'],
            'dShmq': _0x400558['iDBFM'],
            'BqYTL': function(_0x11c172, _0x1f48f0) {
                return _0x400558['edaKS'](_0x11c172, _0x1f48f0);
            },
            'QQzwL': _0x400558['gslvM'],
            'ukEYD': function(_0x4c7864) {
                return _0x400558['mzqix'](_0x4c7864);
            }
        };
        if (_0x400558['mLyEw'](_0x400558['BpsII'], _0x400558['BpsII'])) {
            switch (_0xc3396e) {
                case 0x0:
                    const {
                        taskId, taskName
                    } = _0x9148f3;
                    $['get'](_0x400558['vezTd'](taskListUrl, 'Award', 'taskId=' + taskId), (_0x2f28cd, _0x414f65, _0x4651aa) => {
                        var _0x54886e = {
                            'aLNMG': function(_0x263a30) {
                                return _0x400558['mzqix'](_0x263a30);
                            },
                            'btBPb': function(_0x427ef4, _0x3313e1) {
                                return _0x400558['ADvjI'](_0x427ef4, _0x3313e1);
                            }
                        };
                        if (_0x400558['yXLdU'](_0x400558['gYyUk'], _0x400558['pvJls'])) {
                            console['log']('开通场景结果:' + _0x4651aa + '\x0a');
                        } else {
                            try {
                                if (_0x400558['OnYqc'](_0x400558['brfXM'], _0x400558['brfXM'])) {
                                    _0x54886e['aLNMG'](_0x3b0d0d);
                                } else {
                                    if (_0x2f28cd) {
                                        console['log']('' + JSON['stringify'](_0x2f28cd));
                                        console['log']($['name'] + ' Award API请求失败，请检查网路重试');
                                    } else {
                                        if (_0x400558['loPsX'](_0x400558['vdebn'], _0x400558['aQDmg'])) {
                                            const {
                                                msg,
                                                ret,
                                                data: {
                                                    prizeInfo = ''
                                                } = {}
                                            } = JSON['parse'](_0x4651aa);
                                            let _0x24d239 = '';
                                            if (_0x400558['GrnrX'](msg['indexOf'](_0x400558['KSBUp']), -0x1)) {
                                                if (_0x400558['GrnrX'](_0x400558['Ypvvd'], _0x400558['Ypvvd'])) {
                                                    console['log']('此账号cookie填写不规范,你的pt_pin=xxx后面没分号(;)\n');
                                                    _0x54886e['btBPb'](_0x3b0d0d, null);
                                                } else {
                                                    _0x24d239 = _0x400558['ZKmZG'];
                                                }
                                            } else {
                                                _0x24d239 = _0x400558['OejXT'](msg, prizeInfo) ? ' 获得财富值 ¥ ' + JSON['parse'](prizeInfo)['ddwMoney'] : '';
                                            }
                                            $['log']('\x0a' + taskName + '【领日常奖励】：' + _0x24d239 + '\x0a' + ($['showLog'] ? _0x4651aa : ''));
                                            _0x400558['ADvjI'](_0x3b0d0d, _0x400558['jgKBV'](ret, 0x0));
                                        } else {
                                            if (_0x2f28cd) {
                                                console['log']('' + JSON['stringify'](_0x2f28cd));
                                                console['log']($['name'] + ' OpenGroup API请求失败，请检查网路重试');
                                            } else {
                                                const {
                                                    sErrMsg
                                                } = JSON['parse'](_0x4651aa);
                                                $['log']('\n【🏝寻宝大作战】' + sErrMsg + '\x0a' + ($['showLog'] ? _0x4651aa : ''));
                                                _0x39eb6e['wNnDZ'](_0x3b0d0d, 0x0);
                                            }
                                        }
                                    }
                                }
                            } catch (_0x3e03ec) {
                                $['logErr'](_0x3e03ec, _0x414f65);
                            } finally {
                                if (_0x400558['GrnrX'](_0x400558['hxOgA'], _0x400558['QBvvc'])) {
                                    _0x400558['mzqix'](_0x3b0d0d);
                                } else {
                                    if (_0x2f28cd) {
                                        console['log']('' + JSON['stringify'](_0x2f28cd));
                                        console['log']($['name'] + ' StealMoney API请求失败，请检查网路重试');
                                    } else {
                                        const {
                                            dwGetMoney,
                                            iRet,
                                            sErrMsg
                                        } = JSON['parse'](_0x4651aa);
                                        $['log']('\n🤏偷取好友【' + strFriendNick + '】【' + strSceneName + '】财富值：¥ ' + (dwGetMoney ? dwGetMoney : sErrMsg) + '\x0a' + ($['showLog'] ? _0x4651aa : ''));
                                    }
                                }
                            }
                        }
                    });
                    break;
                case 0x1:
                    const {
                        strTaskIndex, strTaskDescr
                    } = _0x9148f3;
                    $['get'](_0x400558['vezTd'](taskUrl, 'consume/AchieveAward', 'strTaskIndex=' + strTaskIndex), (_0x2795c7, _0x4344d7, _0x2fbcd6) => {
                        var _0x88b71e = {
                            'QjJVk': function(_0x44cedb, _0x367eda) {
                                return _0x39eb6e['wNnDZ'](_0x44cedb, _0x367eda);
                            },
                            'euesl': function(_0x46960e, _0xc755a) {
                                return _0x39eb6e['AoeKH'](_0x46960e, _0xc755a);
                            },
                            'ZYHWe': _0x39eb6e['zcuek'],
                            'ChNwL': _0x39eb6e['GgdKZ'],
                            'lIWxy': function(_0x12843c, _0xe0b675) {
                                return _0x39eb6e['LGear'](_0x12843c, _0xe0b675);
                            }
                        };
                        try {
                            if (_0x39eb6e['rstFy'](_0x39eb6e['pgSbE'], _0x39eb6e['aHfYU'])) {
                                if (_0x2795c7) {
                                    if (_0x39eb6e['fAYjq'](_0x39eb6e['UosKX'], _0x39eb6e['ewpRl'])) {
                                        console['log']('' + JSON['stringify'](_0x2795c7));
                                        console['log']($['name'] + ' AchieveAward API请求失败，请检查网路重试');
                                    } else {
                                        if (shareCodes[item]) {
                                            $['shareCodesArr']['push'](shareCodes[item]);
                                        }
                                    }
                                } else {
                                    const {
                                        iRet,
                                        sErrMsg,
                                        dwExpericnce
                                    } = JSON['parse'](_0x2fbcd6);
                                    $['log']('\x0a' + strTaskDescr + '【领成就奖励】： success 获得财富值：¥ ' + dwExpericnce + '\x0a' + ($['showLog'] ? _0x2fbcd6 : ''));
                                }
                            } else {
                                _0x88b71e['QjJVk'](_0x3b0d0d, JSON['parse'](_0x2fbcd6));
                            }
                        } catch (_0x45d2d1) {
                            if (_0x39eb6e['LGear'](_0x39eb6e['dShmq'], _0x39eb6e['dShmq'])) {
                                $['logErr'](_0x45d2d1, _0x4344d7);
                            } else {
                                const {
                                    dwMoney,
                                    iRet,
                                    sErrMsg,
                                    strPin
                                } = JSON['parse'](_0x2fbcd6);
                                $['log']('\x0a【' + sceneList[_key]['strSceneName'] + '】👬好友: ' + (_0x39eb6e['wAClF'](sErrMsg, _0x39eb6e['gLVmP']) ? '获取普通助力财富值：¥ ' + _0x39eb6e['jpaes'](dwMoney, 0x0) : sErrMsg) + ' \x0a' + ($['showLog'] ? _0x2fbcd6 : ''));
                            }
                        } finally {
                            if (_0x39eb6e['BqYTL'](_0x39eb6e['QQzwL'], _0x39eb6e['QQzwL'])) {
                                if (_0x2795c7) {
                                    console['log']('' + JSON['stringify'](_0x2795c7));
                                    console['log']($['name'] + ' DoTask API请求失败，请检查网路重试');
                                } else {
                                    const {
                                        msg,
                                        ret
                                    } = JSON['parse'](_0x2fbcd6);
                                    $['log']('\x0a' + taskName + '【做日常任务】：' + (_0x88b71e['euesl'](msg['indexOf'](_0x88b71e['ZYHWe']), -0x1) ? _0x88b71e['ChNwL'] : msg) + '\x0a' + ($['showLog'] ? _0x2fbcd6 : ''));
                                    _0x88b71e['QjJVk'](_0x3b0d0d, _0x88b71e['lIWxy'](ret, 0x0));
                                }
                            } else {
                                _0x39eb6e['ukEYD'](_0x3b0d0d);
                            }
                        }
                    });
                    break;
                default:
                    break;
            }
        } else {
            console['log']('' + JSON['stringify'](err));
            console['log']($['name'] + ' OpenGroup API请求失败，请检查网路重试');
        }
    });
}

function funCenterState() {
    var _0x5e5130 = {
        'mAMAv': function(_0x30a097) {
            return _0x30a097();
        },
        'STSpX': function(_0x3b70c4, _0x2abc8d) {
            return _0x3b70c4 !== _0x2abc8d;
        },
        'pStwi': 'DqyPf',
        'ZuFyY': 'qLWDT',
        'dqPYr': 'ZDtiN',
        'PuLmx': function(_0x3a927b, _0x269d37) {
            return _0x3a927b == _0x269d37;
        },
        'VUDXA': function(_0x224d6f, _0x32e656, _0x2f5a94, _0x23cb5c) {
            return _0x224d6f(_0x32e656, _0x2f5a94, _0x23cb5c);
        },
        'SCSTr': function(_0x4e863e) {
            return _0x4e863e();
        },
        'KWZMl': function(_0x7796b8, _0x5dc49a, _0x358c3e) {
            return _0x7796b8(_0x5dc49a, _0x358c3e);
        }
    };
    return new Promise(_0x304eeb => {
        $['get'](_0x5e5130['KWZMl'](taskUrl, 'consume/FunCenterState', 'strType=1'), async (_0x5eb156, _0x390a48, _0x5a2785) => {
            var _0x44437b = {
                'bPuEh': function(_0x5876bf) {
                    return _0x5e5130['mAMAv'](_0x5876bf);
                }
            };
            try {
                if (_0x5e5130['STSpX'](_0x5e5130['pStwi'], _0x5e5130['pStwi'])) {
                    _0x44437b['bPuEh'](_0x304eeb);
                } else {
                    if (_0x5eb156) {
                        if (_0x5e5130['STSpX'](_0x5e5130['ZuFyY'], _0x5e5130['dqPYr'])) {
                            console['log']('' + JSON['stringify'](_0x5eb156));
                            console['log']($['name'] + ' FunCenterState API请求失败，请检查网路重试');
                        } else {
                            $['msg']($['name'], '', '' + $['result']['join']('\x0a'));
                        }
                    } else {
                        const {
                            SlotMachine: {
                                ddwConfVersion,
                                dwFreeCount,
                                strCouponPool,
                                strGoodsPool
                            } = {},
                            iRet,
                            sErrMsg
                        } = JSON['parse'](_0x5a2785);
                        if (_0x5e5130['PuLmx'](dwFreeCount, 0x1)) {
                            await $['wait'](0x1f4);
                            await _0x5e5130['VUDXA'](soltMachine, strCouponPool, strGoodsPool, ddwConfVersion);
                        }
                    }
                }
            } catch (_0x1147c5) {
                $['logErr'](_0x1147c5, _0x390a48);
            } finally {
                _0x5e5130['SCSTr'](_0x304eeb);
            }
        });
    });
}

function soltMachine(_0x5bafcd, _0x2496ea, _0x4494e8) {
    var _0x73a3f2 = {
        'zawOJ': function(_0x503ae6) {
            return _0x503ae6();
        },
        'QNBEx': function(_0x50915e, _0x565e03) {
            return _0x50915e === _0x565e03;
        },
        'WqJJg': 'Wlhmr',
        'GNwYV': function(_0x3f9ea1, _0x34e99f) {
            return _0x3f9ea1 === _0x34e99f;
        },
        'ZbTHg': 'kqlBN',
        'PcVFJ': function(_0x5d2c29, _0x2b3ea4) {
            return _0x5d2c29 != _0x2b3ea4;
        },
        'tGibf': '未中奖',
        'ktYZS': function(_0x569e08) {
            return _0x569e08();
        },
        'OhZIV': function(_0x44a79a) {
            return _0x44a79a();
        },
        'qLGGe': function(_0x188c5e, _0x34dac8) {
            return _0x188c5e === _0x34dac8;
        },
        'ZnloO': 'wqvml',
        'YakhR': function(_0xf56482, _0x483412, _0x497c5c) {
            return _0xf56482(_0x483412, _0x497c5c);
        }
    };
    return new Promise(_0x4e9e39 => {
        var _0x1c0452 = {
            'PmYtH': function(_0x4c694a) {
                return _0x73a3f2['OhZIV'](_0x4c694a);
            }
        };
        if (_0x73a3f2['qLGGe'](_0x73a3f2['ZnloO'], _0x73a3f2['ZnloO'])) {
            $['get'](_0x73a3f2['YakhR'](taskUrl, 'consume/SlotMachine', 'strCouponPool=' + _0x5bafcd + '&strGoodsPool=' + _0x2496ea + '&ddwConfVersion=' + _0x4494e8), async (_0x256d5c, _0xc5372d, _0x288d14) => {
                var _0x3cee81 = {
                    'ZYWWF': function(_0x18b333) {
                        return _0x73a3f2['zawOJ'](_0x18b333);
                    }
                };
                if (_0x73a3f2['QNBEx'](_0x73a3f2['WqJJg'], _0x73a3f2['WqJJg'])) {
                    try {
                        if (_0x256d5c) {
                            if (_0x73a3f2['GNwYV'](_0x73a3f2['ZbTHg'], _0x73a3f2['ZbTHg'])) {
                                console['log']('' + JSON['stringify'](_0x256d5c));
                                console['log']($['name'] + ' SlotMachine API请求失败，请检查网路重试');
                            } else {
                                cookiesArr['push'](jdCookieNode[item]);
                            }
                        } else {
                            const {
                                iRet,
                                sErrMsg,
                                strAwardPoolName
                            } = JSON['parse'](_0x288d14);
                            $['log']('\n【抽奖结果】🎰 ' + (_0x73a3f2['PcVFJ'](strAwardPoolName, '') ? _0x73a3f2['tGibf'] : strAwardPoolName) + ' \x0a' + ($['showLog'] ? _0x288d14 : ''));
                        }
                    } catch (_0x29ec3f) {
                        $['logErr'](_0x29ec3f, _0xc5372d);
                    } finally {
                        _0x73a3f2['ktYZS'](_0x4e9e39);
                    }
                } else {
                    _0x3cee81['ZYWWF'](_0x4e9e39);
                }
            });
        } else {
            _0x1c0452['PmYtH'](_0x4e9e39);
        }
    });
}

function createAssistUser(_0x35c2c6) {
    var _0x56894e = {
        'wlzpV': 'ddwMoney',
        'CZqwF': function(_0x24e791, _0x5c1a10) {
            return _0x24e791(_0x5c1a10);
        },
        'WkIqK': function(_0x1619c5, _0x253405) {
            return _0x1619c5 || _0x253405;
        },
        'iNetO': function(_0x5a3a16, _0x41062e) {
            return _0x5a3a16 !== _0x41062e;
        },
        'PoBtM': 'sjyaS',
        'Wjlxe': 'llvoJ',
        'NOkqP': function(_0x536191, _0x3c7dc5) {
            return _0x536191 === _0x3c7dc5;
        },
        'HrqlU': 'fCJPi',
        'VwgZd': function(_0x1a1fea, _0x277e52) {
            return _0x1a1fea === _0x277e52;
        },
        'ecndh': 'iDmsB',
        'wXtnB': 'ESVCU',
        'YBvjd': function(_0x39cfc3, _0x302d31) {
            return _0x39cfc3 === _0x302d31;
        },
        'lWkAp': function(_0x51df10, _0x499473) {
            return _0x51df10 === _0x499473;
        },
        'CyLYK': function(_0x45e023) {
            return _0x45e023();
        },
        'wTDMC': function(_0x7acb0d, _0xf451e7) {
            return _0x7acb0d !== _0xf451e7;
        },
        'aqLHd': 'gNsxd',
        'gzzGY': function(_0x1a0c2a, _0x1e7c69, _0x3a2b89) {
            return _0x1a0c2a(_0x1e7c69, _0x3a2b89);
        },
        'VZuNx': 'user/JoinScene',
        'SwfjU': function(_0x104359, _0x2ebba7) {
            return _0x104359(_0x2ebba7);
        }
    };
    return new Promise(_0x459cea => {
        var _0x1868a2 = {
            'FlJuC': function(_0x4952f8, _0x2087d6) {
                return _0x56894e['CZqwF'](_0x4952f8, _0x2087d6);
            },
            'HeADq': function(_0x44dc71, _0x572268) {
                return _0x56894e['WkIqK'](_0x44dc71, _0x572268);
            },
            'UgXeq': function(_0x1b62e3, _0x3e847d) {
                return _0x56894e['iNetO'](_0x1b62e3, _0x3e847d);
            },
            'aMSMF': _0x56894e['PoBtM'],
            'sLJag': _0x56894e['Wjlxe'],
            'exkBO': function(_0x440888, _0x20f7c7) {
                return _0x56894e['NOkqP'](_0x440888, _0x20f7c7);
            },
            'LiWhR': _0x56894e['HrqlU'],
            'pomjL': function(_0xc2e00c, _0x306f59) {
                return _0x56894e['VwgZd'](_0xc2e00c, _0x306f59);
            },
            'BjSwt': _0x56894e['ecndh'],
            'qzDMm': _0x56894e['wXtnB'],
            'vqMGT': function(_0x51e9a9, _0x1c496a) {
                return _0x56894e['YBvjd'](_0x51e9a9, _0x1c496a);
            },
            'jYtSD': function(_0x27e3e4, _0x544ca8) {
                return _0x56894e['lWkAp'](_0x27e3e4, _0x544ca8);
            },
            'iZkzN': function(_0x176a34) {
                return _0x56894e['CyLYK'](_0x176a34);
            }
        };
        if (_0x56894e['wTDMC'](_0x56894e['aqLHd'], _0x56894e['aqLHd'])) {
            if (err) {
                console['log']('' + JSON['stringify'](err));
                console['log']($['name'] + ' QueryUserInfo API请求失败，请检查网路重试');
            } else {
                data = JSON['parse'](data);
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
                } = data;
                $['log']('\n获取用户信息：' + sErrMsg + '\x0a' + ($['showLog'] ? data : ''));
                $['log']('\n当前等级:' + dwLevel + ',财富值:' + data[_0x56894e['wlzpV']] + '\x0a');
                if (showInvite) {
                    console['log']('财富岛好友互助码每次运行都变化,旧的可继续使用');
                    $['log']('\n【京东账号' + $['index'] + '（' + $['UserName'] + '）的' + $['name'] + '好友互助码】' + strMyShareId + '\x0a\x0a');
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
                _0x56894e['CZqwF'](_0x459cea, {
                    'SceneList': SceneList,
                    'XBDetail': XBDetail,
                    'dwXBRemainCnt': dwXBRemainCnt,
                    'ddwMoney': ddwMoney,
                    'dwIsNewUser': dwIsNewUser,
                    'strMyShareId': strMyShareId,
                    'strPin': strPin
                });
            }
        } else {
            $['get'](_0x56894e['gzzGY'](taskUrl, _0x56894e['VZuNx'], 'strShareId=' + _0x56894e['SwfjU'](escape, _0x35c2c6) + '&dwSceneId=1001'), async (_0x4b231d, _0x287226, _0xc929ab) => {
                if (_0x1868a2['UgXeq'](_0x1868a2['aMSMF'], _0x1868a2['sLJag'])) {
                    try {
                        if (_0x1868a2['exkBO'](_0x1868a2['LiWhR'], _0x1868a2['LiWhR'])) {
                            if (_0x4b231d) {
                                if (_0x1868a2['pomjL'](_0x1868a2['BjSwt'], _0x1868a2['qzDMm'])) {
                                    _0x1868a2['FlJuC'](_0x459cea, _0x1868a2['HeADq'](_0xc929ab, {}));
                                } else {
                                    console['log']('' + JSON['stringify'](_0x4b231d));
                                    console['log']($['name'] + ' createAssistUser JoinScene API请求失败，请检查网路重试');
                                }
                            } else {
                                console['log']('普通助力(招工)结果:' + _0xc929ab);
                                const {
                                    iRet
                                } = JSON['parse'](_0xc929ab);
                                if (_0x1868a2['vqMGT'](iRet, 0x7d5) || _0x1868a2['jYtSD'](iRet, 0x270f)) $['canHelp'] = ![];
                            }
                        } else {
                            if (_0x4b231d) {
                                console['log']('' + JSON['stringify'](_0x4b231d));
                                console['log']($['name'] + ' activeScene API请求失败，请检查网路重试');
                            } else {
                                console['log']('开通场景结果:' + _0xc929ab + '\x0a');
                            }
                        }
                    } catch (_0x29a83f) {} finally {
                        _0x1868a2['iZkzN'](_0x459cea);
                    }
                } else {
                    if (_0x4b231d) {
                        console['log']('' + JSON['stringify'](_0x4b231d));
                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                    } else {
                        if (_0xc929ab) {
                            console['log']('随机取' + randomCount + '个码放到您固定的互助码后面(不影响已有固定互助)');
                            _0xc929ab = JSON['parse'](_0xc929ab);
                        }
                    }
                }
            });
        }
    });
}

function createSuperAssistUser(_0x2c0e69) {
    var _0x506e29 = {
        'RwwCa': function(_0x30c5e5, _0x2fb782) {
            return _0x30c5e5 !== _0x2fb782;
        },
        'eibvo': 'ClDGb',
        'ZgTZC': 'OrxRE',
        'zpWBY': function(_0x224126, _0x5686d3) {
            return _0x224126 === _0x5686d3;
        },
        'tUFem': 'bYjgY',
        'XGlQm': function(_0x1f8891) {
            return _0x1f8891();
        },
        'FoXaO': function(_0x3942ef, _0xf7cd1f, _0x168d36) {
            return _0x3942ef(_0xf7cd1f, _0x168d36);
        },
        'LUhZW': 'user/JoinScene',
        'xIbGk': 'timestamp',
        'ZVuyb': 'phoneid',
        'dRuQi': 'farm_jstoken',
        'oVXlP': function(_0x1a9a46, _0x597a84) {
            return _0x1a9a46(_0x597a84);
        }
    };
    return new Promise(_0x1bce98 => {
        var _0x271410 = {
            'QbLWX': function(_0x14b974, _0x426ee0) {
                return _0x506e29['RwwCa'](_0x14b974, _0x426ee0);
            },
            'HrRZY': _0x506e29['eibvo'],
            'lUTVM': _0x506e29['ZgTZC'],
            'txHPI': function(_0x48627b, _0x53e5eb) {
                return _0x506e29['zpWBY'](_0x48627b, _0x53e5eb);
            },
            'awiwj': _0x506e29['tUFem'],
            'MVeci': function(_0x114708) {
                return _0x506e29['XGlQm'](_0x114708);
            }
        };
        $['get'](_0x506e29['FoXaO'](taskUrl, _0x506e29['LUhZW'], 'strPgtimestamp=' + token[_0x506e29['xIbGk']] + '&strPhoneID=' + token[_0x506e29['ZVuyb']] + '&strPgUUNum=' + token[_0x506e29['dRuQi']] + '&strShareId=' + _0x506e29['oVXlP'](escape, _0x2c0e69) + '&dwSceneId=1001&dwType=2'), async (_0x2b4774, _0x1e260c, _0x260043) => {
            try {
                if (_0x2b4774) {
                    console['log']('' + JSON['stringify'](_0x2b4774));
                    console['log']($['name'] + ' createSuperAssistUser JoinScene API请求失败，请检查网路重试');
                } else {
                    if (_0x271410['QbLWX'](_0x271410['HrRZY'], _0x271410['lUTVM'])) {
                        console['log']('超级助力(超级工人)结果:' + _0x260043);
                        const {
                            sErrMsg,
                            iRet
                        } = JSON['parse'](_0x260043);
                        if (_0x271410['txHPI'](iRet, 0x7d5) || _0x271410['txHPI'](iRet, 0x270f)) $['canHelp'] = ![];
                    } else {
                        $['logErr'](e, _0x1e260c);
                    }
                }
            } catch (_0x1c0b2e) {
                if (_0x271410['txHPI'](_0x271410['awiwj'], _0x271410['awiwj'])) {
                    $['logErr'](_0x1c0b2e, _0x1e260c);
                } else {
                    const {
                        iRet,
                        sErrMsg,
                        dwExpericnce
                    } = JSON['parse'](_0x260043);
                    $['log']('\x0a' + strTaskDescr + '【领成就奖励】： success 获得财富值：¥ ' + dwExpericnce + '\x0a' + ($['showLog'] ? _0x260043 : ''));
                }
            } finally {
                _0x271410['MVeci'](_0x1bce98);
            }
        });
    });
}

function joinGroup(_0xa7ab26) {
    var _0x5702e9 = {
        'SPAdX': function(_0x5a1f51, _0x182816) {
            return _0x5a1f51 !== _0x182816;
        },
        'EzNqW': '活动太火爆了',
        'lLTxq': '任务进行中或者未到任务时间',
        'yRHFE': function(_0x44b522, _0x495161) {
            return _0x44b522(_0x495161);
        },
        'nTFJU': function(_0x3c653c, _0x545211) {
            return _0x3c653c === _0x545211;
        },
        'MQkRo': function(_0x481bc5, _0x3331b0) {
            return _0x481bc5 === _0x3331b0;
        },
        'oEPIE': 'Uizle',
        'DJCdF': 'DaVXl',
        'HvBwT': 'dzntw',
        'cYejD': 'uHmHA',
        'lPYxs': 'fSicG',
        'SKwSx': function(_0x388ae6, _0x675bcd) {
            return _0x388ae6 === _0x675bcd;
        },
        'YLcUr': function(_0x41a56f, _0x1ba37a) {
            return _0x41a56f === _0x1ba37a;
        },
        'PfXEh': function(_0x173358, _0x30cf44) {
            return _0x173358(_0x30cf44);
        },
        'XLbcw': function(_0x3b1191, _0x11706c) {
            return _0x3b1191 || _0x11706c;
        },
        'AWaIr': function(_0x2ec08f, _0x26d409, _0xdaab1d) {
            return _0x2ec08f(_0x26d409, _0xdaab1d);
        },
        'mAhNH': 'timestamp',
        'YuHTa': 'phoneid',
        'JWsHJ': 'farm_jstoken'
    };
    return new Promise(async _0x5488f6 => {
        var _0x1281f2 = {
            'PEkzR': function(_0x41c855, _0x294684) {
                return _0x5702e9['SPAdX'](_0x41c855, _0x294684);
            },
            'kLruZ': _0x5702e9['EzNqW'],
            'Jgiaj': _0x5702e9['lLTxq'],
            'UeMuA': function(_0x581a9b, _0x2323ba) {
                return _0x5702e9['yRHFE'](_0x581a9b, _0x2323ba);
            },
            'LBpdk': function(_0x4b713a, _0x548141) {
                return _0x5702e9['nTFJU'](_0x4b713a, _0x548141);
            },
            'iWLZx': function(_0xef8dec, _0x5d4f99) {
                return _0x5702e9['yRHFE'](_0xef8dec, _0x5d4f99);
            },
            'FWMeA': function(_0x1435b6, _0x3a9459) {
                return _0x5702e9['MQkRo'](_0x1435b6, _0x3a9459);
            },
            'QIiVy': _0x5702e9['oEPIE'],
            'cDMvu': _0x5702e9['DJCdF'],
            'MMLmW': _0x5702e9['HvBwT'],
            'ECkBM': _0x5702e9['cYejD'],
            'HusnN': function(_0x3d8f7b, _0x433183) {
                return _0x5702e9['SPAdX'](_0x3d8f7b, _0x433183);
            },
            'JAjVP': _0x5702e9['lPYxs'],
            'eYeky': function(_0x473f94, _0x447126) {
                return _0x5702e9['SKwSx'](_0x473f94, _0x447126);
            },
            'nANzl': function(_0x3750fe, _0x1b5fdc) {
                return _0x5702e9['YLcUr'](_0x3750fe, _0x1b5fdc);
            },
            'oLuIO': function(_0x74f4bf, _0x3a2071) {
                return _0x5702e9['PfXEh'](_0x74f4bf, _0x3a2071);
            },
            'RjdqX': function(_0xb21ab6, _0x4343ea) {
                return _0x5702e9['XLbcw'](_0xb21ab6, _0x4343ea);
            }
        };
        $['get'](_0x5702e9['AWaIr'](taskUrl, 'user/JoinGroup', 'strGroupId=' + _0xa7ab26 + '&dwIsNewUser=0&pgtimestamp=' + token[_0x5702e9['mAhNH']] + '&phoneID=' + token[_0x5702e9['YuHTa']] + '&pgUUNum=' + token[_0x5702e9['JWsHJ']]), (_0x798534, _0x245748, _0x1acba4) => {
            try {
                if (_0x1281f2['FWMeA'](_0x1281f2['QIiVy'], _0x1281f2['cDMvu'])) {
                    console['log']('' + JSON['stringify'](_0x798534));
                    console['log']($['name'] + ' getMoney_dwSource_2 API请求失败，请检查网路重试');
                } else {
                    if (_0x798534) {
                        if (_0x1281f2['FWMeA'](_0x1281f2['MMLmW'], _0x1281f2['ECkBM'])) {
                            const {
                                msg,
                                ret
                            } = JSON['parse'](_0x1acba4);
                            $['log']('\x0a' + taskName + '【做日常任务】：' + (_0x1281f2['PEkzR'](msg['indexOf'](_0x1281f2['kLruZ']), -0x1) ? _0x1281f2['Jgiaj'] : msg) + '\x0a' + ($['showLog'] ? _0x1acba4 : ''));
                            _0x1281f2['UeMuA'](_0x5488f6, _0x1281f2['LBpdk'](ret, 0x0));
                        } else {
                            console['log']('' + JSON['stringify'](_0x798534));
                            console['log']($['name'] + ' joinGroup API请求失败，请检查网路重试');
                        }
                    } else {
                        if (_0x1281f2['HusnN'](_0x1281f2['JAjVP'], _0x1281f2['JAjVP'])) {
                            const {
                                sErrMsg
                            } = JSON['parse'](_0x1acba4);
                            $['log']('\n【🏝寻宝大作战】' + sErrMsg + '\x0a' + ($['showLog'] ? _0x1acba4 : ''));
                            _0x1281f2['iWLZx'](_0x5488f6, 0x0);
                        } else {
                            const {
                                sErrMsg,
                                iRet
                            } = _0x1acba4 = JSON['parse'](_0x1acba4);
                            if (_0x1281f2['eYeky'](iRet, 0x7d5) || _0x1281f2['nANzl'](iRet, 0x270f)) $['canHelp'] = ![];
                            $['log']('iRet:' + iRet + ' ' + sErrMsg);
                        }
                    }
                }
            } catch (_0x4be868) {
                $['logErr'](_0x4be868, _0x245748);
            } finally {
                _0x1281f2['oLuIO'](_0x5488f6, _0x1281f2['RjdqX'](_0x1acba4, {}));
            }
        });
    });
}

function submitGroupId() {
    var _0x553b8d = {
        'gFmsZ': function(_0x33578d, _0x2852db) {
            return _0x33578d * _0x2852db;
        },
        'DaaRg': function(_0xa8f60f, _0x302007) {
            return _0xa8f60f + _0x302007;
        },
        'BeSrU': function(_0x3424c3, _0xec4c3e) {
            return _0x3424c3 === _0xec4c3e;
        },
        'fZnuI': function(_0x40abb1) {
            return _0x40abb1();
        },
        'UgcNN': function(_0x2a2646, _0x7d8fd1) {
            return _0x2a2646 === _0x7d8fd1;
        },
        'DgvDR': 'ZtKay',
        'kjuIA': '\n\n你的【🏝寻宝大作战】互助码: ',
        'MKWAV': '(每天都变化,旧的不可用)\n\n',
        'aGFyz': function(_0x211913, _0x46a88d) {
            return _0x211913 === _0x46a88d;
        },
        'OpJek': 'fgohW',
        'hCKnj': 'TtszX',
        'yooRd': function(_0x369788) {
            return _0x369788();
        },
        'YcfuA': function(_0x1cb62b, _0x3fb68b) {
            return _0x1cb62b(_0x3fb68b);
        }
    };
    return new Promise(_0x14832c => {
        var _0x3a26e9 = {
            'lARQt': function(_0x174f40, _0x2be6f9) {
                return _0x553b8d['gFmsZ'](_0x174f40, _0x2be6f9);
            },
            'nUrLX': function(_0x34dedd, _0x2df9fb) {
                return _0x553b8d['DaaRg'](_0x34dedd, _0x2df9fb);
            },
            'ukHRT': function(_0xa83ec3, _0x19f09f) {
                return _0x553b8d['BeSrU'](_0xa83ec3, _0x19f09f);
            },
            'vRxwc': function(_0x4c4362) {
                return _0x553b8d['fZnuI'](_0x4c4362);
            },
            'PEzid': function(_0x23070f, _0x39040a) {
                return _0x553b8d['UgcNN'](_0x23070f, _0x39040a);
            },
            'vyStX': _0x553b8d['DgvDR'],
            'QhJLM': function(_0x5512c5, _0x98e328) {
                return _0x553b8d['DaaRg'](_0x5512c5, _0x98e328);
            },
            'RXqdv': _0x553b8d['kjuIA'],
            'iHItV': _0x553b8d['MKWAV'],
            'tpyvs': function(_0x23c485, _0xeb7f8d) {
                return _0x553b8d['aGFyz'](_0x23c485, _0xeb7f8d);
            },
            'dTHTX': _0x553b8d['OpJek'],
            'LpmIo': _0x553b8d['hCKnj'],
            'QclPP': function(_0x410e57) {
                return _0x553b8d['yooRd'](_0x410e57);
            }
        };
        $['get'](_0x553b8d['YcfuA'](taskUrl, 'user/GatherForture'), async (_0x582f50, _0x3bc0be, _0x33de03) => {
            var _0x3e91d0 = {
                'odPSH': function(_0x413bc3, _0x3fa89b) {
                    return _0x3a26e9['ukHRT'](_0x413bc3, _0x3fa89b);
                }
            };
            try {
                if (_0x582f50) {
                    console['log']('' + JSON['stringify'](_0x582f50));
                    console['log']($['name'] + ' GatherForture API请求失败，请检查网路重试');
                } else {
                    const {
                        GroupInfo: {
                            strGroupId
                        },
                        strPin
                    } = JSON['parse'](_0x33de03);
                    if (!strGroupId) {
                        const _0x2b9014 = await _0x3a26e9['vRxwc'](openGroup);
                        if (_0x3a26e9['ukHRT'](_0x2b9014, 0x0)) {
                            if (_0x3a26e9['PEzid'](_0x3a26e9['vyStX'], _0x3a26e9['vyStX'])) {
                                await _0x3a26e9['vRxwc'](submitGroupId);
                            } else {
                                index = Math['floor'](_0x3a26e9['lARQt'](_0x3a26e9['nUrLX'](i, 0x1), Math['random']()));
                                temp = shuffled[index];
                                shuffled[index] = shuffled[i];
                                shuffled[i] = temp;
                            }
                        } else {
                            _0x3a26e9['vRxwc'](_0x14832c);
                        }
                    } else {
                        $['log'](_0x3a26e9['nUrLX'](_0x3a26e9['QhJLM'](_0x3a26e9['RXqdv'], strGroupId), _0x3a26e9['iHItV']));
                        $['shareCodes']['push'](strGroupId);
                    }
                }
            } catch (_0xcf1b0b) {
                $['logErr'](_0xcf1b0b, _0x3bc0be);
            } finally {
                if (_0x3a26e9['tpyvs'](_0x3a26e9['dTHTX'], _0x3a26e9['LpmIo'])) {
                    console['log']('普通助力(招工)结果:' + data);
                    const {
                        iRet
                    } = JSON['parse'](data);
                    if (_0x3e91d0['odPSH'](iRet, 0x7d5) || _0x3e91d0['odPSH'](iRet, 0x270f)) $['canHelp'] = ![];
                } else {
                    _0x3a26e9['QclPP'](_0x14832c);
                }
            }
        });
    });
}

function openGroup() {
    var _0x1e5da1 = {
        'AOxVF': function(_0x39823c) {
            return _0x39823c();
        },
        'CDfoD': function(_0x2e0be6, _0x16942f) {
            return _0x2e0be6 !== _0x16942f;
        },
        'CScuL': 'PInJm',
        'vqTWH': 'MjjsM',
        'RaZcd': 'EMkNt',
        'UksCS': function(_0x174090, _0x5359ab) {
            return _0x174090(_0x5359ab);
        },
        'BQdIl': 'MIHQF',
        'TpDAs': function(_0x1d1f32) {
            return _0x1d1f32();
        },
        'TURdN': function(_0x1d1f88, _0x400c2e) {
            return _0x1d1f88 != _0x400c2e;
        },
        'rSFJP': '未中奖',
        'fcEpg': function(_0x44445f, _0x5d9002, _0x54e455) {
            return _0x44445f(_0x5d9002, _0x54e455);
        }
    };
    return new Promise(async _0x53d647 => {
        var _0x1f9b52 = {
            'FzpSW': function(_0x3df752, _0x1f42c0) {
                return _0x1e5da1['TURdN'](_0x3df752, _0x1f42c0);
            },
            'qUYjA': _0x1e5da1['rSFJP'],
            'LTLWv': function(_0x17e705) {
                return _0x1e5da1['TpDAs'](_0x17e705);
            }
        };
        $['get'](_0x1e5da1['fcEpg'](taskUrl, 'user/OpenGroup', 'dwIsNewUser=' + $['info']['dwIsNewUser']), async (_0x6e5eba, _0x138d85, _0x2c7a62) => {
            var _0x580822 = {
                'BgKsJ': function(_0x36426c) {
                    return _0x1e5da1['AOxVF'](_0x36426c);
                }
            };
            try {
                if (_0x1e5da1['CDfoD'](_0x1e5da1['CScuL'], _0x1e5da1['CScuL'])) {
                    if (_0x6e5eba) {
                        console['log']('' + JSON['stringify'](_0x6e5eba));
                        console['log']($['name'] + ' SlotMachine API请求失败，请检查网路重试');
                    } else {
                        const {
                            iRet,
                            sErrMsg,
                            strAwardPoolName
                        } = JSON['parse'](_0x2c7a62);
                        $['log']('\n【抽奖结果】🎰 ' + (_0x1f9b52['FzpSW'](strAwardPoolName, '') ? _0x1f9b52['qUYjA'] : strAwardPoolName) + ' \x0a' + ($['showLog'] ? _0x2c7a62 : ''));
                    }
                } else {
                    if (_0x6e5eba) {
                        console['log']('' + JSON['stringify'](_0x6e5eba));
                        console['log']($['name'] + ' OpenGroup API请求失败，请检查网路重试');
                    } else {
                        if (_0x1e5da1['CDfoD'](_0x1e5da1['vqTWH'], _0x1e5da1['RaZcd'])) {
                            const {
                                sErrMsg
                            } = JSON['parse'](_0x2c7a62);
                            $['log']('\n【🏝寻宝大作战】' + sErrMsg + '\x0a' + ($['showLog'] ? _0x2c7a62 : ''));
                            _0x1e5da1['UksCS'](_0x53d647, 0x0);
                        } else {
                            _0x1f9b52['LTLWv'](_0x53d647);
                        }
                    }
                }
            } catch (_0x4e9ea6) {
                $['logErr'](_0x4e9ea6, _0x138d85);
            } finally {
                if (_0x1e5da1['CDfoD'](_0x1e5da1['BQdIl'], _0x1e5da1['BQdIl'])) {
                    _0x580822['BgKsJ'](_0x53d647);
                } else {
                    _0x1e5da1['TpDAs'](_0x53d647);
                }
            }
        });
    });
}

function openPeriodBox() {
    var _0x35b5bb = {
        'vzyXk': function(_0x2e3606, _0x3b9d77) {
            return _0x2e3606 - _0x3b9d77;
        },
        'XqkOi': function(_0x439554, _0xb3f943) {
            return _0x439554 !== _0xb3f943;
        },
        'iEMSG': 'sKire',
        'HvmeZ': 'tYEeI',
        'SQusU': function(_0x2b6643, _0x50b437) {
            return _0x2b6643 == _0x50b437;
        },
        'jdZni': 'success',
        'QOFcu': function(_0xa07ff8, _0x43f0d3) {
            return _0xa07ff8 === _0x43f0d3;
        },
        'OfUyO': 'hOXrx',
        'Yxtyj': 'tJWtf',
        'qlbYb': function(_0x22e250) {
            return _0x22e250();
        },
        'pKtRn': function(_0x592dec, _0x493707) {
            return _0x592dec !== _0x493707;
        },
        'fYonb': 'Aygvu',
        'viRci': function(_0x54d572, _0xb330ea) {
            return _0x54d572 < _0xb330ea;
        },
        'vkLMw': function(_0x313efe, _0x1a40db, _0x49fa7c) {
            return _0x313efe(_0x1a40db, _0x49fa7c);
        },
        'IdNxE': function(_0x4c450b, _0x264488) {
            return _0x4c450b == _0x264488;
        },
        'MQbAa': function(_0x59fedf, _0x54a3ac) {
            return _0x59fedf === _0x54a3ac;
        },
        'ioAVp': 'mTdFh',
        'WMFJj': function(_0x1e7a50) {
            return _0x1e7a50();
        },
        'gHiLy': function(_0x56f488, _0x23d528) {
            return _0x56f488 !== _0x23d528;
        },
        'nxfFP': 'scPOE',
        'aRwXn': function(_0x506c39, _0xa43760) {
            return _0x506c39(_0xa43760);
        }
    };
    return new Promise(async _0x39565d => {
        if (_0x35b5bb['gHiLy'](_0x35b5bb['nxfFP'], _0x35b5bb['nxfFP'])) {
            console['log']('' + JSON['stringify'](err));
            console['log']($['name'] + ' GatherForture API请求失败，请检查网路重试');
        } else {
            $['get'](_0x35b5bb['aRwXn'](taskUrl, 'user/GatherForture'), async (_0xf5a38a, _0x5b7aee, _0x4c3dc2) => {
                var _0x2ee1c7 = {
                    'tJHaS': function(_0x49b70f, _0x21950b) {
                        return _0x35b5bb['vzyXk'](_0x49b70f, _0x21950b);
                    },
                    'JhgMZ': function(_0x21ed6f, _0x3cd932) {
                        return _0x35b5bb['XqkOi'](_0x21ed6f, _0x3cd932);
                    },
                    'WzYAH': _0x35b5bb['iEMSG'],
                    'uEmwx': _0x35b5bb['HvmeZ'],
                    'uIlmX': function(_0x5d1126, _0x450b5b) {
                        return _0x35b5bb['SQusU'](_0x5d1126, _0x450b5b);
                    },
                    'QtuHP': _0x35b5bb['jdZni'],
                    'LJdkL': function(_0x2b442e, _0x10c335) {
                        return _0x35b5bb['QOFcu'](_0x2b442e, _0x10c335);
                    },
                    'HECBC': _0x35b5bb['OfUyO'],
                    'jjGGv': _0x35b5bb['Yxtyj'],
                    'YRYhR': function(_0x25de20) {
                        return _0x35b5bb['qlbYb'](_0x25de20);
                    }
                };
                if (_0x35b5bb['pKtRn'](_0x35b5bb['fYonb'], _0x35b5bb['fYonb'])) {
                    const {
                        ret,
                        data: {
                            userTaskStatusList = []
                        } = {},
                        msg
                    } = JSON['parse'](_0x4c3dc2);
                    $['allTask'] = userTaskStatusList['filter'](_0x49234c => _0x49234c['awardStatus'] !== 0x1);
                    $['log']('\n获取【📆日常任务】列表 ' + msg + '，总共' + $['allTask']['length'] + '个任务！\n' + ($['showLog'] ? _0x4c3dc2 : ''));
                } else {
                    try {
                        if (_0xf5a38a) {
                            console['log']('' + JSON['stringify'](_0xf5a38a));
                            console['log']($['name'] + ' GatherForture API请求失败，请检查网路重试');
                        } else {
                            const {
                                PeriodBox = [{}]
                            } = JSON['parse'](_0x4c3dc2);
                            for (var _0x48e29e = 0x0; _0x35b5bb['viRci'](_0x48e29e, PeriodBox['length']); _0x48e29e++) {
                                const {
                                    dwStatus,
                                    dwSeq,
                                    strBrandName
                                } = PeriodBox[_0x48e29e];
                                if (_0x35b5bb['SQusU'](dwStatus, 0x2)) {
                                    await $['wait'](0x3e8);
                                    await $['get'](_0x35b5bb['vkLMw'](taskUrl, 'user/OpenPeriodBox', 'dwSeq=' + dwSeq), async (_0xf5a38a, _0x5b7aee, _0x4c3dc2) => {
                                        if (_0x2ee1c7['JhgMZ'](_0x2ee1c7['WzYAH'], _0x2ee1c7['uEmwx'])) {
                                            try {
                                                const {
                                                    dwMoney,
                                                    iRet,
                                                    sErrMsg
                                                } = JSON['parse'](_0x4c3dc2);
                                                $['log']('\n【🏝寻宝大作战】【' + strBrandName + '】开宝箱：' + (_0x2ee1c7['uIlmX'](sErrMsg, _0x2ee1c7['QtuHP']) ? ' 获得财富值 ¥ ' + dwMoney : sErrMsg) + '\x0a' + ($['showLog'] ? _0x4c3dc2 : ''));
                                            } catch (_0xfb1176) {
                                                $['logErr'](_0xfb1176, _0x5b7aee);
                                            } finally {
                                                if (_0x2ee1c7['LJdkL'](_0x2ee1c7['HECBC'], _0x2ee1c7['jjGGv'])) {
                                                    $['newShareCodes'] = $['shareCodesArr'][_0x2ee1c7['tJHaS']($['index'], 0x1)]['split']('@');
                                                } else {
                                                    _0x2ee1c7['YRYhR'](_0x39565d);
                                                }
                                            }
                                        } else {
                                            console['log']('' + JSON['stringify'](_0xf5a38a));
                                            console['log']($['name'] + ' GatherForture API请求失败，请检查网路重试');
                                        }
                                    });
                                } else if (_0x35b5bb['IdNxE'](dwStatus, 0x3)) {
                                    if (_0x35b5bb['MQbAa'](_0x35b5bb['ioAVp'], _0x35b5bb['ioAVp'])) {
                                        $['log']('\n【🏝寻宝大作战】【' + strBrandName + '】开宝箱：宝箱已开启过！');
                                    } else {
                                        _0x2ee1c7['YRYhR'](_0x39565d);
                                    }
                                } else {
                                    $['log']('\n【🏝寻宝大作战】【' + strBrandName + '】开宝箱：未达到宝箱开启条件，快去邀请好友助力吧！');
                                    _0x35b5bb['WMFJj'](_0x39565d);
                                }
                            }
                        }
                    } catch (_0x34d790) {
                        $['logErr'](_0x34d790, _0x5b7aee);
                    } finally {
                        _0x35b5bb['WMFJj'](_0x39565d);
                    }
                }
            });
        }
    });
}

function activeScene(_0x4c793e) {
    var _0x5c0f34 = {
        'bEajX': function(_0xa3f05c, _0x352ab2) {
            return _0xa3f05c !== _0x352ab2;
        },
        'KygeY': 'XtokJ',
        'ghlfr': 'ZSqhf',
        'fgMoE': function(_0x54135d, _0x31652d) {
            return _0x54135d !== _0x31652d;
        },
        'cyXSt': 'ENVVC',
        'CxGbv': function(_0x30542c) {
            return _0x30542c();
        },
        'Hbqnj': function(_0x203b51, _0x2e0b9b) {
            return _0x203b51 === _0x2e0b9b;
        },
        'TJQoU': function(_0x47f365, _0x51123f) {
            return _0x47f365(_0x51123f);
        },
        'pXGGW': '*/*',
        'IGmGv': 'keep-alive',
        'olSmu': 'https://st.jingxi.com/fortune_island/index.html',
        'SAVFu': 'gzip, deflate, br',
        'ogfEz': 'm.jingxi.com',
        'bDuWm': function(_0x4bfd19, _0x479bf5) {
            return _0x4bfd19 + _0x479bf5;
        },
        'BCFlx': function(_0x228253, _0x1d1d18) {
            return _0x228253 * _0x1d1d18;
        },
        'QaVdx': 'zh-cn'
    };
    return new Promise(_0x13369d => {
        var _0x4633bd = {
            'dTSsj': function(_0x549f0a, _0x17823b) {
                return _0x5c0f34['Hbqnj'](_0x549f0a, _0x17823b);
            }
        };
        const _0x448e29 = {
            'url': JD_API_HOST + 'jxcfd/user/ActiveScene?strZone=jxcfd&bizCode=jxcfd&source=jxcfd&dwEnv=7&_cfd_t=' + Date['now']() + '&ptag=&dwSceneId=' + _0x5c0f34['TJQoU'](Number, _0x4c793e) + '&_stk=_cfd_t,bizCode,dwEnv,dwSceneId,ptag,source,strZone&_ste=1&h5st=20210304125239873;1540797227618115;10009;tk01we7831daaa8nRzRiUm4rZjRynBiuCHXtzWJmGCtVH2P+YnfnjoIsTWS87p85/fH4kcisjwWpqa10pRs3zMclNzix;5a9afbeb82bbb4e5e62cfe4b72965b5a2bf12cc3c56817b53e93a1cead562dc4&_=' + Date['now']() + '&sceneval=2&g_login_type=1',
            'headers': {
                'Cookie': cookie,
                'Accept': _0x5c0f34['pXGGW'],
                'Connection': _0x5c0f34['IGmGv'],
                'Referer': _0x5c0f34['olSmu'],
                'Accept-Encoding': _0x5c0f34['SAVFu'],
                'Host': _0x5c0f34['ogfEz'],
                'User-Agent': 'jdpingou;iPhone;3.15.2;14.2.1;ea00763447803eb0f32045dcba629c248ea53bb3;network/wifi;model/iPhone13,2;appBuild/100365;ADID/00000000-0000-0000-0000-000000000000;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/0;hasOCPay/0;supportBestPay/0;session/' + _0x5c0f34['bDuWm'](_0x5c0f34['BCFlx'](Math['random'], 0x62), 0x1) + ';pap/JA2015_311210;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
                'Accept-Language': _0x5c0f34['QaVdx']
            }
        };
        $['get'](_0x448e29, (_0x4ea311, _0x248401, _0x2575e0) => {
            if (_0x5c0f34['bEajX'](_0x5c0f34['KygeY'], _0x5c0f34['ghlfr'])) {
                try {
                    if (_0x4ea311) {
                        console['log']('' + JSON['stringify'](_0x4ea311));
                        console['log']($['name'] + ' activeScene API请求失败，请检查网路重试');
                    } else {
                        console['log']('开通场景结果:' + _0x2575e0 + '\x0a');
                    }
                } catch (_0x3664d7) {
                    if (_0x5c0f34['fgMoE'](_0x5c0f34['cyXSt'], _0x5c0f34['cyXSt'])) {
                        const {
                            iRet,
                            sErrMsg,
                            taskinfo = []
                        } = JSON['parse'](_0x2575e0);
                        $['allTask'] = taskinfo['filter'](_0x2d721a => _0x2d721a['dwAwardStatus'] === 0x1);
                        $['log']('\n获取【🎖成就任务】列表 ' + sErrMsg + '，总共' + $['allTask']['length'] + '个任务！\n' + ($['showLog'] ? _0x2575e0 : ''));
                    } else {
                        $['logErr'](_0x3664d7, _0x248401);
                    }
                } finally {
                    _0x5c0f34['CxGbv'](_0x13369d);
                }
            } else {
                const {
                    sErrMsg,
                    iRet
                } = _0x2575e0 = JSON['parse'](_0x2575e0);
                if (_0x4633bd['dTSsj'](iRet, 0x7d5) || _0x4633bd['dTSsj'](iRet, 0x270f)) $['canHelp'] = ![];
                $['log']('iRet:' + iRet + ' ' + sErrMsg);
            }
        });
    });
}

function taskUrl(_0x35a894, _0x1ba644) {
    var _0x2ec5e2 = {
        'XtwRi': '*/*',
        'eHAlE': 'keep-alive',
        'rCpRK': 'https://st.jingxi.com/fortune_island/index.html?ptag=138631.26.55',
        'mCTFM': 'gzip, deflate, br',
        'ZLYqs': 'm.jingxi.com',
        'LBToM': function(_0x2ec727, _0x92ed04) {
            return _0x2ec727 + _0x92ed04;
        },
        'ToLYO': function(_0x331c31, _0x32fa61) {
            return _0x331c31 * _0x32fa61;
        },
        'BOSVm': 'zh-cn'
    };
    return {
        'url': JD_API_HOST + 'jxcfd/' + _0x35a894 + '?strZone=jxcfd&bizCode=jxcfd&source=jxcfd&dwEnv=7&_cfd_t=' + Date['now']() + '&ptag=138631.26.55&' + _0x1ba644 + '&_ste=1&_=' + Date['now']() + '&sceneval=2&g_login_type=1&g_ty=ls',
        'headers': {
            'Cookie': cookie,
            'Accept': _0x2ec5e2['XtwRi'],
            'Connection': _0x2ec5e2['eHAlE'],
            'Referer': _0x2ec5e2['rCpRK'],
            'Accept-Encoding': _0x2ec5e2['mCTFM'],
            'Host': _0x2ec5e2['ZLYqs'],
            'User-Agent': 'jdpingou;iPhone;3.15.2;14.2.1;ea00763447803eb0f32045dcba629c248ea53bb3;network/wifi;model/iPhone13,2;appBuild/100365;ADID/00000000-0000-0000-0000-000000000000;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/0;hasOCPay/0;supportBestPay/0;session/' + _0x2ec5e2['LBToM'](_0x2ec5e2['ToLYO'](Math['random'], 0x62), 0x1) + ';pap/JA2015_311210;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
            'Accept-Language': _0x2ec5e2['BOSVm']
        },
        'timeout': 0x2710
    };
}

function taskListUrl(_0x3b1fb1, _0x18fd87) {
    var _0x5ebf72 = {
        'ssLWv': '*/*',
        'sBYSu': 'keep-alive',
        'nIZgo': 'https://st.jingxi.com/fortune_island/index.html?ptag=138631.26.55',
        'SwaVr': 'gzip, deflate, br',
        'GPzHR': 'm.jingxi.com',
        'zKCmm': function(_0x36517f, _0x2f9251) {
            return _0x36517f + _0x2f9251;
        },
        'yGYGn': function(_0x4c8536, _0x5ce8db) {
            return _0x4c8536 * _0x5ce8db;
        },
        'PRpNx': 'zh-cn'
    };
    return {
        'url': JD_API_HOST + 'newtasksys/newtasksys_front/' + _0x3b1fb1 + '?strZone=jxcfd&bizCode=jxcfd&source=jxcfd&dwEnv=7&_cfd_t=' + Date['now']() + '&ptag=138631.26.55&' + _0x18fd87 + '&_ste=1&_=' + Date['now']() + '&sceneval=2&g_login_type=1&g_ty=ls',
        'headers': {
            'Cookie': cookie,
            'Accept': _0x5ebf72['ssLWv'],
            'Connection': _0x5ebf72['sBYSu'],
            'Referer': _0x5ebf72['nIZgo'],
            'Accept-Encoding': _0x5ebf72['SwaVr'],
            'Host': _0x5ebf72['GPzHR'],
            'User-Agent': 'jdpingou;iPhone;3.15.2;14.2.1;ea00763447803eb0f32045dcba629c248ea53bb3;network/wifi;model/iPhone13,2;appBuild/100365;ADID/00000000-0000-0000-0000-000000000000;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/0;hasOCPay/0;supportBestPay/0;session/' + _0x5ebf72['zKCmm'](_0x5ebf72['yGYGn'](Math['random'], 0x62), 0x1) + ';pap/JA2015_311210;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
            'Accept-Language': _0x5ebf72['PRpNx']
        },
        'timeout': 0x2710
    };
}

function showMsg() {
    var _0x3261d1 = {
        'iTSDy': function(_0xd9efc6) {
            return _0xd9efc6();
        },
        'SlZbu': function(_0x5ef73b, _0x98e236) {
            return _0x5ef73b == _0x98e236;
        },
        'eWStX': 'success',
        'UuFzN': function(_0x1a2c3b, _0x40c611) {
            return _0x1a2c3b || _0x40c611;
        },
        'syIXQ': function(_0x571561, _0x3f869e) {
            return _0x571561 === _0x3f869e;
        },
        'iUsnF': 'KWQqu',
        'nBzGh': function(_0x3f764f, _0x23747e) {
            return _0x3f764f !== _0x23747e;
        },
        'mIplc': 'mYjvy',
        'DRNGr': 'HH:mm',
        'HeRQz': 'pniZf',
        'UKAzZ': function(_0x4ab7ee) {
            return _0x4ab7ee();
        }
    };
    return new Promise(async _0x20cf2c => {
        var _0x75efc = {
            'SfPGP': function(_0x578825, _0xc0a479) {
                return _0x3261d1['SlZbu'](_0x578825, _0xc0a479);
            },
            'RQyVs': _0x3261d1['eWStX'],
            'TVQku': function(_0x4b4025, _0x45eda9) {
                return _0x3261d1['UuFzN'](_0x4b4025, _0x45eda9);
            }
        };
        if (_0x3261d1['syIXQ'](_0x3261d1['iUsnF'], _0x3261d1['iUsnF'])) {
            if ($['result']['length']) {
                if ($['notifyTime']) {
                    if (_0x3261d1['nBzGh'](_0x3261d1['mIplc'], _0x3261d1['mIplc'])) {
                        console['log']('' + JSON['stringify'](err));
                        console['log']($['name'] + ' StealMoney API请求失败，请检查网路重试');
                    } else {
                        const _0x431fa2 = $['notifyTime']['split'](',')['map'](_0x2e56e6 => _0x2e56e6['split'](':'));
                        const _0x362644 = $['time'](_0x3261d1['DRNGr'])['split'](':');
                        $['log']('\x0a' + JSON['stringify'](_0x431fa2));
                        $['log']('\x0a' + JSON['stringify'](_0x362644));
                        if (_0x431fa2['some'](_0x25aab6 => _0x25aab6[0x0] === _0x362644[0x0] && (!_0x25aab6[0x1] || _0x25aab6[0x1] === _0x362644[0x1]))) {
                            $['msg']($['name'], '', '' + $['result']['join']('\x0a'));
                        }
                    }
                } else {
                    if (_0x3261d1['syIXQ'](_0x3261d1['HeRQz'], _0x3261d1['HeRQz'])) {
                        $['msg']($['name'], '', '' + $['result']['join']('\x0a'));
                    } else {
                        const {
                            iRet,
                            dwMoney,
                            sErrMsg,
                            strPin
                        } = JSON['parse'](data);
                        $['log']('\x0a【' + sceneList[_key]['strSceneName'] + '】👬好友: ' + (_0x75efc['SfPGP'](sErrMsg, _0x75efc['RQyVs']) ? '获取超级助力财富值：¥ ' + _0x75efc['TVQku'](dwMoney, 0x0) : sErrMsg) + ' \x0a' + ($['showLog'] ? data : ''));
                    }
                }
                if ($['isNode']() && process['env']['CFD_NOTIFY_CONTROL']) await notify['sendNotify']($['name'] + ' - 账号' + $['index'] + ' - ' + $['nickName'], '' + $['result']['join']('\x0a'));
            }
            _0x3261d1['UKAzZ'](_0x20cf2c);
        } else {
            _0x3261d1['iTSDy'](_0x20cf2c);
        }
    });
}

function readShareCode() {
    var _0xe905d9 = {
        'eJxYj': function(_0x58a8fc, _0x2fca91) {
            return _0x58a8fc !== _0x2fca91;
        },
        'oIimj': 'wvTdE',
        'RhMIX': 'zfWyp',
        'RTNJi': function(_0x42f9e1, _0x584370) {
            return _0x42f9e1 === _0x584370;
        },
        'azjYZ': 'DCATV',
        'RrBuq': function(_0x12ab35, _0x5280d2) {
            return _0x12ab35 !== _0x5280d2;
        },
        'uIsYg': 'KpioQ',
        'fQhMd': 'yGlHx',
        'fZVJz': function(_0x2e29f6, _0xc54b89) {
            return _0x2e29f6(_0xc54b89);
        },
        'RitLI': function(_0x4f89ec, _0x3aef59) {
            return _0x4f89ec + _0x3aef59;
        },
        'FgIgp': function(_0x36a397) {
            return _0x36a397();
        }
    };
    console['log']('开始');
    return new Promise(async _0x1eb590 => {
        var _0x4dc5fb = {
            'FKUVX': function(_0x47a85f, _0x9101fe) {
                return _0xe905d9['RitLI'](_0x47a85f, _0x9101fe);
            }
        };
        $['get']({
            'url': 'http://jd.turinglabs.net/api/v2/jd/jxcfd/read/0/',
            'timeout': 0x2710
        }, (_0x3c3723, _0x501577, _0x141b49) => {
            try {
                if (_0x3c3723) {
                    if (_0xe905d9['eJxYj'](_0xe905d9['oIimj'], _0xe905d9['RhMIX'])) {
                        console['log']('' + JSON['stringify'](_0x3c3723));
                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                    } else {
                        $['logErr'](e, _0x501577);
                    }
                } else {
                    if (_0x141b49) {
                        console['log']('随机取0个码放到您固定的互助码后面(不影响已有固定互助)');
                        _0x141b49 = JSON['parse'](_0x141b49);
                    }
                }
            } catch (_0x1708d0) {
                if (_0xe905d9['RTNJi'](_0xe905d9['azjYZ'], _0xe905d9['azjYZ'])) {
                    $['logErr'](_0x1708d0, _0x501577);
                } else {
                    str = _0x4dc5fb['FKUVX'](msg, prizeInfo) ? ' 获得财富值 ¥ ' + JSON['parse'](prizeInfo)['ddwMoney'] : '';
                }
            } finally {
                if (_0xe905d9['RrBuq'](_0xe905d9['uIsYg'], _0xe905d9['fQhMd'])) {
                    _0xe905d9['fZVJz'](_0x1eb590, _0x141b49);
                } else {
                    console['log']('' + JSON['stringify'](_0x3c3723));
                    console['log']($['name'] + ' joinGroup API请求失败，请检查网路重试');
                }
            }
        });
        await $['wait'](0x2710);
        _0xe905d9['FgIgp'](_0x1eb590);
    });
}

function shareCodesFormat() {
    var _0x421ff5 = {
        'dHSYj': function(_0x36fb28, _0x538ee1) {
            return _0x36fb28 - _0x538ee1;
        },
        'MhHQp': function(_0x31c22b, _0x59da7f) {
            return _0x31c22b === _0x59da7f;
        },
        'zshNl': 'Ysqjq',
        'kfSmx': 'bVVqT',
        'MQFHH': function(_0x2a4373) {
            return _0x2a4373();
        },
        'Zxdzf': 'F45CB4F07997DFE748E5656521A9034446A1568F6950206B0D44A5664662275D',
        'CcpsG': function(_0x741ffc) {
            return _0x741ffc();
        }
    };
    return new Promise(async _0xd0e6fb => {
        $['newShareCodes'] = [];
        if ($['shareCodesArr'][_0x421ff5['dHSYj']($['index'], 0x1)]) {
            $['newShareCodes'] = $['shareCodesArr'][_0x421ff5['dHSYj']($['index'], 0x1)]['split']('@');
        } else {
            if (_0x421ff5['MhHQp'](_0x421ff5['zshNl'], _0x421ff5['kfSmx'])) {
                $['logErr'](e, resp);
            } else {
                console['log']('由于您第' + $['index'] + '个京东账号未提供shareCode,将采纳本脚本自带的助力码\n');
                $['newShareCodes'] = $['strMyShareIds'];
            }
        }
        const _0x5dd81e = await _0x421ff5['MQFHH'](readShareCode);
        if (_0x5dd81e && _0x421ff5['MhHQp'](_0x5dd81e['code'], 0xc8)) {
            $['newShareCodes'] = [...new Set([...$['newShareCodes'], ...$['strMyShareIds'], _0x421ff5['Zxdzf'], ..._0x5dd81e['data'] || []])];
        }
        console['log']('第' + $['index'] + '个京东账号将要助力的好友' + JSON['stringify']($['newShareCodes']));
        _0x421ff5['CcpsG'](_0xd0e6fb);
    });
}

function requireConfig() {
    var _0x13ab4d = {
        'cOGwg': function(_0x51d961) {
            return _0x51d961();
        },
        'aaisJ': function(_0x339e30, _0x582f47) {
            return _0x339e30 !== _0x582f47;
        },
        'atErZ': 'SuZSB',
        'FATsg': 'yJpyO',
        'ISQOd': function(_0x10b1e8, _0x1026ee) {
            return _0x10b1e8 > _0x1026ee;
        },
        'ZqIyu': 'EDcuf',
        'NEHZB': 'qSmLx',
        'agLAp': function(_0x372f08, _0x1a4b4b) {
            return _0x372f08 === _0x1a4b4b;
        },
        'SXQXG': 'kZsBA',
        'RKkpr': function(_0x1e91a2, _0x4ea360) {
            return _0x1e91a2 !== _0x4ea360;
        },
        'mFTTz': 'mBGxz',
        'xBOgP': 'jd_jxCFD',
        'DIxmO': function(_0x14b42f) {
            return _0x14b42f();
        }
    };
    return new Promise(_0x3ae883 => {
        var _0x461b2a = {
            'FyqwN': function(_0x548d73) {
                return _0x13ab4d['cOGwg'](_0x548d73);
            }
        };
        if (_0x13ab4d['aaisJ'](_0x13ab4d['atErZ'], _0x13ab4d['FATsg'])) {
            console['log']('开始获取' + $['name'] + '配置文件\n');
            let _0x26fc5c = [];
            if ($['isNode']() && process['env']['JDCFD_SHARECODES']) {
                if (_0x13ab4d['ISQOd'](process['env']['JDCFD_SHARECODES']['indexOf']('\x0a'), -0x1)) {
                    if (_0x13ab4d['aaisJ'](_0x13ab4d['ZqIyu'], _0x13ab4d['ZqIyu'])) {
                        _0x461b2a['FyqwN'](_0x3ae883);
                    } else {
                        _0x26fc5c = process['env']['JDCFD_SHARECODES']['split']('\x0a');
                    }
                } else {
                    if (_0x13ab4d['aaisJ'](_0x13ab4d['NEHZB'], _0x13ab4d['NEHZB'])) {
                        $['log']('\n🎁寻宝：寻宝次数不足');
                    } else {
                        _0x26fc5c = process['env']['JDCFD_SHARECODES']['split']('&');
                    }
                }
            }
            $['shareCodesArr'] = [];
            if ($['isNode']()) {
                if (_0x13ab4d['agLAp'](_0x13ab4d['SXQXG'], _0x13ab4d['SXQXG'])) {
                    Object['keys'](_0x26fc5c)['forEach'](_0x5ebee2 => {
                        if (_0x26fc5c[_0x5ebee2]) {
                            $['shareCodesArr']['push'](_0x26fc5c[_0x5ebee2]);
                        }
                    });
                } else {
                    console['log']('' + JSON['stringify'](err));
                    console['log']($['name'] + ' AchieveInfo API请求失败，请检查网路重试');
                }
            } else {
                if (_0x13ab4d['RKkpr'](_0x13ab4d['mFTTz'], _0x13ab4d['mFTTz'])) {
                    $['log']('\n🎁寻宝：宝藏冷却中，请等待冷却完毕');
                } else {
                    if ($['getdata'](_0x13ab4d['xBOgP'])) $['shareCodesArr'] = $['getdata'](_0x13ab4d['xBOgP'])['split']('\x0a')['filter'](_0x4888f5 => !!_0x4888f5);
                    console['log']('\nBoxJs设置的京喜财富岛邀请码:' + $['getdata'](_0x13ab4d['xBOgP']) + '\x0a');
                }
            }
            console['log']('您提供了' + $['shareCodesArr']['length'] + '个账号的' + $['name'] + '助力码\n');
            _0x13ab4d['DIxmO'](_0x3ae883);
        } else {
            Object['keys'](shareCodes)['forEach'](_0x5ee4a0 => {
                if (shareCodes[_0x5ee4a0]) {
                    $['shareCodesArr']['push'](shareCodes[_0x5ee4a0]);
                }
            });
        }
    });
};
_0xod9 = 'jsjiami.com.v6'


function TotalBean() {
  return new Promise(async resolve => {
    const options = {
      url: "https://me-api.jd.com/user_new/info/GetJDUserInfoUnion",
      headers: {
        Host: "me-api.jd.com",
        Accept: "*/*",
        Connection: "keep-alive",
        Cookie: cookie,
        "User-Agent": $.isNode() ? (process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : (require('./USER_AGENTS').USER_AGENT)) : ($.getdata('JDUA') ? $.getdata('JDUA') : "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1"),
        "Accept-Language": "zh-cn",
        "Referer": "https://home.m.jd.com/myJd/newhome.action?sceneval=2&ufc=&",
        "Accept-Encoding": "gzip, deflate, br"
      }
    }
    $.get(options, (err, resp, data) => {
      try {
        if (err) {
          $.logErr(err)
        } else {
          if (data) {
            data = JSON.parse(data);
            if (data['retcode'] === "1001") {
              $.isLogin = false; //cookie过期
              return;
            }
            if (data['retcode'] === "0" && data.data && data.data.hasOwnProperty("userInfo")) {
              $.nickName = data.data.userInfo.baseInfo.nickname;
            }
          } else {
            $.log('京东服务器返回空数据');
          }
        }
      } catch (e) {
        $.logErr(e)
      } finally {
        resolve();
      }
    })
  })
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


!function(n){"use strict";function t(n,t){var r=(65535&n)+(65535&t);return(n>>16)+(t>>16)+(r>>16)<<16|65535&r}function r(n,t){return n<<t|n>>>32-t}function e(n,e,o,u,c,f){return t(r(t(t(e,n),t(u,f)),c),o)}function o(n,t,r,o,u,c,f){return e(t&r|~t&o,n,t,u,c,f)}function u(n,t,r,o,u,c,f){return e(t&o|r&~o,n,t,u,c,f)}function c(n,t,r,o,u,c,f){return e(t^r^o,n,t,u,c,f)}function f(n,t,r,o,u,c,f){return e(r^(t|~o),n,t,u,c,f)}function i(n,r){n[r>>5]|=128<<r%32,n[14+(r+64>>>9<<4)]=r;var e,i,a,d,h,l=1732584193,g=-271733879,v=-1732584194,m=271733878;for(e=0;e<n.length;e+=16)i=l,a=g,d=v,h=m,g=f(g=f(g=f(g=f(g=c(g=c(g=c(g=c(g=u(g=u(g=u(g=u(g=o(g=o(g=o(g=o(g,v=o(v,m=o(m,l=o(l,g,v,m,n[e],7,-680876936),g,v,n[e+1],12,-389564586),l,g,n[e+2],17,606105819),m,l,n[e+3],22,-1044525330),v=o(v,m=o(m,l=o(l,g,v,m,n[e+4],7,-176418897),g,v,n[e+5],12,1200080426),l,g,n[e+6],17,-1473231341),m,l,n[e+7],22,-45705983),v=o(v,m=o(m,l=o(l,g,v,m,n[e+8],7,1770035416),g,v,n[e+9],12,-1958414417),l,g,n[e+10],17,-42063),m,l,n[e+11],22,-1990404162),v=o(v,m=o(m,l=o(l,g,v,m,n[e+12],7,1804603682),g,v,n[e+13],12,-40341101),l,g,n[e+14],17,-1502002290),m,l,n[e+15],22,1236535329),v=u(v,m=u(m,l=u(l,g,v,m,n[e+1],5,-165796510),g,v,n[e+6],9,-1069501632),l,g,n[e+11],14,643717713),m,l,n[e],20,-373897302),v=u(v,m=u(m,l=u(l,g,v,m,n[e+5],5,-701558691),g,v,n[e+10],9,38016083),l,g,n[e+15],14,-660478335),m,l,n[e+4],20,-405537848),v=u(v,m=u(m,l=u(l,g,v,m,n[e+9],5,568446438),g,v,n[e+14],9,-1019803690),l,g,n[e+3],14,-187363961),m,l,n[e+8],20,1163531501),v=u(v,m=u(m,l=u(l,g,v,m,n[e+13],5,-1444681467),g,v,n[e+2],9,-51403784),l,g,n[e+7],14,1735328473),m,l,n[e+12],20,-1926607734),v=c(v,m=c(m,l=c(l,g,v,m,n[e+5],4,-378558),g,v,n[e+8],11,-2022574463),l,g,n[e+11],16,1839030562),m,l,n[e+14],23,-35309556),v=c(v,m=c(m,l=c(l,g,v,m,n[e+1],4,-1530992060),g,v,n[e+4],11,1272893353),l,g,n[e+7],16,-155497632),m,l,n[e+10],23,-1094730640),v=c(v,m=c(m,l=c(l,g,v,m,n[e+13],4,681279174),g,v,n[e],11,-358537222),l,g,n[e+3],16,-722521979),m,l,n[e+6],23,76029189),v=c(v,m=c(m,l=c(l,g,v,m,n[e+9],4,-640364487),g,v,n[e+12],11,-421815835),l,g,n[e+15],16,530742520),m,l,n[e+2],23,-995338651),v=f(v,m=f(m,l=f(l,g,v,m,n[e],6,-198630844),g,v,n[e+7],10,1126891415),l,g,n[e+14],15,-1416354905),m,l,n[e+5],21,-57434055),v=f(v,m=f(m,l=f(l,g,v,m,n[e+12],6,1700485571),g,v,n[e+3],10,-1894986606),l,g,n[e+10],15,-1051523),m,l,n[e+1],21,-2054922799),v=f(v,m=f(m,l=f(l,g,v,m,n[e+8],6,1873313359),g,v,n[e+15],10,-30611744),l,g,n[e+6],15,-1560198380),m,l,n[e+13],21,1309151649),v=f(v,m=f(m,l=f(l,g,v,m,n[e+4],6,-145523070),g,v,n[e+11],10,-1120210379),l,g,n[e+2],15,718787259),m,l,n[e+9],21,-343485551),l=t(l,i),g=t(g,a),v=t(v,d),m=t(m,h);return[l,g,v,m]}function a(n){var t,r="",e=32*n.length;for(t=0;t<e;t+=8)r+=String.fromCharCode(n[t>>5]>>>t%32&255);return r}function d(n){var t,r=[];for(r[(n.length>>2)-1]=void 0,t=0;t<r.length;t+=1)r[t]=0;var e=8*n.length;for(t=0;t<e;t+=8)r[t>>5]|=(255&n.charCodeAt(t/8))<<t%32;return r}function h(n){return a(i(d(n),8*n.length))}function l(n,t){var r,e,o=d(n),u=[],c=[];for(u[15]=c[15]=void 0,o.length>16&&(o=i(o,8*n.length)),r=0;r<16;r+=1)u[r]=909522486^o[r],c[r]=1549556828^o[r];return e=i(u.concat(d(t)),512+8*t.length),a(i(c.concat(e),640))}function g(n){var t,r,e="";for(r=0;r<n.length;r+=1)t=n.charCodeAt(r),e+="0123456789abcdef".charAt(t>>>4&15)+"0123456789abcdef".charAt(15&t);return e}function v(n){return unescape(encodeURIComponent(n))}function m(n){return h(v(n))}function p(n){return g(m(n))}function s(n,t){return l(v(n),v(t))}function C(n,t){return g(s(n,t))}function A(n,t,r){return t?r?s(t,n):C(t,n):r?m(n):p(n)}$.md5=A}(this);
// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
