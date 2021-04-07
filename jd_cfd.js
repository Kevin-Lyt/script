/*
京喜财富岛
根据github@MoPoQAQ 财富岛脚本修改而来。无需京喜token,只需京东cookie即可.
cron 5 0,8,13,19 * * * jd_cfd.js
更新时间：2021-3-29
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
 *Progcessed By JSDec in 5.03s
 *JSDec - JSDec.js.org
 */
const randomCount = $['isNode']() ? 0x14 : 0x5;
if ($['isNode']()) {
    Object['keys'](jdCookieNode)['forEach'](_0x51942e => {
        cookiesArr['push'](jdCookieNode[_0x51942e]);
    });
    if (process['env']['JD_DEBUG'] && process['env']['JD_DEBUG'] === 'false') console['log'] = () => {};
    if (JSON['stringify'](process['env'])['indexOf']('GITHUB') > -0x1) process['exit'](0x0);
} else {
    cookiesArr = [$['getdata']('CookieJD'), $['getdata']('CookieJD2'), ...jsonParse($['getdata']('CookiesJD') || '[]')['map'](_0xedee30 => _0xedee30['cookie'])]['filter'](_0x35a183 => !!_0x35a183);
}!(async () => {
    var _0x1cb9df = {
        'JHOWZ': function(_0x25347a, _0x17b248) {
            return _0x25347a !== _0x17b248;
        },
        'fLBpD': '活动太火爆了',
        'GMDLa': '任务进行中或者未到任务时间',
        'HEbQT': function(_0x73f94f, _0x47a8f2) {
            return _0x73f94f(_0x47a8f2);
        },
        'Ufsji': function(_0x28e716, _0x31aae6) {
            return _0x28e716 === _0x31aae6;
        },
        'IREaI': function(_0x4c3252) {
            return _0x4c3252();
        },
        'wBtND': function(_0x42f8f3) {
            return _0x42f8f3();
        },
        'rXgnF': function(_0x2b95fe, _0x4ed3be) {
            return _0x2b95fe === _0x4ed3be;
        },
        'PLiVA': 'IgABA',
        'oCcai': '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取',
        'PBVJq': 'https://bean.m.jd.com/bean/signIndex.action',
        'RifPP': function(_0x1ba1d6, _0x52b91f) {
            return _0x1ba1d6(_0x52b91f);
        },
        'Dpccj': 'http://adguard.b.freefrp.net/cfd.json',
        'WCBxu': 'http://adguard.b.freefrp.net/cfd.json',
        'ZUoJJ': function(_0x352aae, _0x5bd888) {
            return _0x352aae < _0x5bd888;
        },
        'XlywL': 'HBNee',
        'XIxzH': function(_0x4f1163, _0x579fb1) {
            return _0x4f1163(_0x579fb1);
        },
        'cDtaC': function(_0x2df9f0, _0x5b4dd6) {
            return _0x2df9f0 + _0x5b4dd6;
        },
        'CdaLI': function(_0x3f5b14, _0x58628a) {
            return _0x3f5b14 === _0x58628a;
        },
        'jULbn': 'sToMV',
        'TdHGM': function(_0x3fdfe8, _0x54aa51) {
            return _0x3fdfe8 !== _0x54aa51;
        },
        'yOvvg': 'SALGQ',
        'WyhjA': function(_0x676175) {
            return _0x676175();
        },
        'EkxwY': function(_0x56eee3, _0x5675e6) {
            return _0x56eee3 === _0x5675e6;
        },
        'CkCTl': 'qVayI',
        'NGYFH': function(_0x1e99a1, _0x367699) {
            return _0x1e99a1(_0x367699);
        }
    };
    await _0x1cb9df['wBtND'](requireConfig);
    if (!cookiesArr[0x0]) {
        if (_0x1cb9df['rXgnF'](_0x1cb9df['PLiVA'], _0x1cb9df['PLiVA'])) {
            $['msg']($['name'], _0x1cb9df['oCcai'], _0x1cb9df['PBVJq'], {
                'open-url': _0x1cb9df['PBVJq']
            });
            return;
        } else {
            $['logErr'](e, resp);
        }
    }
    let _0x1cf0bb = await _0x1cb9df['RifPP'](getAuthorShareCode, _0x1cb9df['Dpccj']),
        _0x173a5f = await _0x1cb9df['RifPP'](getAuthorShareCode, _0x1cb9df['WCBxu']);
    $['strMyShareIds'] = [..._0x1cf0bb && _0x1cf0bb['shareId'] || [], ..._0x173a5f && _0x173a5f['shareId'] || []];
    $['strGroupIds'] = [..._0x1cf0bb && _0x1cf0bb['strGroupIds'] || [], ..._0x173a5f && _0x173a5f['strGroupIds'] || []];
    for (let _0x5bce9b = 0x0; _0x1cb9df['ZUoJJ'](_0x5bce9b, cookiesArr['length']); _0x5bce9b++) {
        if (cookiesArr[_0x5bce9b]) {
            if (_0x1cb9df['JHOWZ'](_0x1cb9df['XlywL'], _0x1cb9df['XlywL'])) {
                const {
                    msg,
                    ret
                } = JSON['parse'](data);
                $['log']('\x0a' + taskName + '【做日常任务】：' + (_0x1cb9df['JHOWZ'](msg['indexOf'](_0x1cb9df['fLBpD']), -0x1) ? _0x1cb9df['GMDLa'] : msg) + '\x0a' + ($['showLog'] ? data : ''));
                _0x1cb9df['HEbQT'](resolve, _0x1cb9df['Ufsji'](ret, 0x0));
            } else {
                cookie = cookiesArr[_0x5bce9b];
                $['UserName'] = _0x1cb9df['XIxzH'](decodeURIComponent, cookie['match'](/pt_pin=([^; ]+)(?=;?)/) && cookie['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1]);
                $['index'] = _0x1cb9df['cDtaC'](_0x5bce9b, 0x1);
                $['nickName'] = '';
                $['isLogin'] = !![];
                $['nickName'] = '';
                await _0x1cb9df['wBtND'](TotalBean);
                console['log']('\n开始【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']) + '\x0a');
                if (!$['isLogin']) {
                    if (_0x1cb9df['CdaLI'](_0x1cb9df['jULbn'], _0x1cb9df['jULbn'])) {
                        $['msg']($['name'], '【提示】cookie已失效', '京东账号' + $['index'] + ' ' + ($['nickName'] || $['UserName']) + '\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action', {
                            'open-url': _0x1cb9df['PBVJq']
                        });
                        if ($['isNode']()) {
                            if (_0x1cb9df['TdHGM'](_0x1cb9df['yOvvg'], _0x1cb9df['yOvvg'])) {
                                _0x1cb9df['IREaI'](resolve);
                            } else {
                                await notify['sendNotify']($['name'] + 'cookie已失效 - ' + $['UserName'], '京东账号' + $['index'] + ' ' + $['UserName'] + '\n请重新登录获取cookie');
                            }
                        }
                        continue;
                    } else {
                        console['log']('由于您第' + $['index'] + '个京东账号未提供shareCode,将采纳本脚本自带的助力码\n');
                        $['newShareCodes'] = $['strMyShareIds'];
                    }
                }
                token = await _0x1cb9df['wBtND'](getJxToken);
                $['allTask'] = [];
                $['info'] = {};
                await _0x1cb9df['WyhjA'](shareCodesFormat);
                await _0x1cb9df['WyhjA'](cfd);
            }
        }
    }
    for (let _0x28fa9d = 0x0; _0x1cb9df['ZUoJJ'](_0x28fa9d, cookiesArr['length']); _0x28fa9d++) {
        cookie = cookiesArr[_0x28fa9d];
        $['UserName'] = _0x1cb9df['XIxzH'](decodeURIComponent, cookie['match'](/pt_pin=([^; ]+)(?=;?)/) && cookie['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1]);
        token = await _0x1cb9df['WyhjA'](getJxToken);
        $['canHelp'] = !![];
        if ($['shareCodes'] && $['shareCodes']['length']) console['log']('\n\n寻宝大作战，自己账号内部循环互助\n\n');
        for (let _0x349e4e of $['shareCodes']) {
            if (_0x1cb9df['EkxwY'](_0x1cb9df['CkCTl'], _0x1cb9df['CkCTl'])) {
                console['log']('账号' + $['UserName'] + ' 去参加 ' + _0x349e4e + ' 寻宝大作战');
                await _0x1cb9df['NGYFH'](joinGroup, _0x349e4e);
                await $['wait'](0x7d0);
                if (!$['canHelp']) break;
            } else {
                $['logErr'](e, resp);
            }
        }
    }
    await $['wait'](0x1f4);
    await _0x1cb9df['WyhjA'](showMsg);
})()['catch'](_0x1fad80 => $['logErr'](_0x1fad80))['finally'](() => $['done']());

function helpFriend() {
    var _0x390cd6 = {
        'gGvmd': function(_0x587536, _0x1ea85d) {
            return _0x587536(_0x1ea85d);
        },
        'KyKEm': function(_0x4a2565) {
            return _0x4a2565();
        }
    };
    return new Promise(async _0x207f74 => {
        $['canHelp'] = !![];
        for (let _0x5c2211 of $['newShareCodes']['filter'](_0x1d71bb => !!_0x1d71bb && !_0x1d71bb['includes']('GroupId'))) {
            console['log']('去助力好友 ' + _0x5c2211);
            if (token) {
                await _0x390cd6['gGvmd'](createSuperAssistUser, _0x5c2211);
            }
            await _0x390cd6['gGvmd'](createAssistUser, _0x5c2211);
            await $['wait'](0xbb8);
            if (!$['canHelp']) break;
        }
        if (token) {
            $['canHelp'] = !![];
            for (let _0x447de1 of $['strGroupIds']) {
                console['log']('去参加寻宝大作战' + _0x447de1);
                await _0x390cd6['gGvmd'](joinGroup, _0x447de1);
                await $['wait'](0x7d0);
                if (!$['canHelp']) break;
            }
        }
        _0x390cd6['KyKEm'](_0x207f74);
    });
}
async function cfd() {
    var _0x244fa5 = {
        'GWYbj': function(_0x589bc1) {
            return _0x589bc1();
        },
        'pNvhm': function(_0x25e7e4) {
            return _0x25e7e4();
        },
        'LgWKp': function(_0x49ddbe, _0x1cfe2f) {
            return _0x49ddbe(_0x1cfe2f);
        },
        'Dcaap': function(_0x1b6cd) {
            return _0x1b6cd();
        },
        'LKRyf': function(_0x5cb673, _0x3daa6b) {
            return _0x5cb673(_0x3daa6b);
        },
        'hcoEV': function(_0x19beac) {
            return _0x19beac();
        },
        'oIefD': function(_0x202d2e) {
            return _0x202d2e();
        },
        'CtGyJ': function(_0x5045c9, _0x5062f9) {
            return _0x5045c9(_0x5062f9);
        },
        'njAGz': function(_0x2f8a31) {
            return _0x2f8a31();
        },
        'dwSwU': function(_0x3bedd1, _0x426d14) {
            return _0x3bedd1 - _0x426d14;
        }
    };
    try {
        const _0x44aef5 = await _0x244fa5['GWYbj'](getUserInfo);
        await $['wait'](0x1f4);
        await _0x244fa5['GWYbj'](querySignList);
        await $['wait'](0x1f4);
        await _0x244fa5['pNvhm'](getMoney);
        await $['wait'](0x1f4);
        await _0x244fa5['LgWKp'](getTaskList, 0x0);
        await $['wait'](0x1f4);
        await _0x244fa5['LgWKp'](browserTask, 0x0);
        await $['wait'](0x1f4);
        await _0x244fa5['Dcaap'](treasureHunt);
        await $['wait'](0x1f4);
        await _0x244fa5['Dcaap'](friendCircle);
        await $['wait'](0x1f4);
        await _0x244fa5['LKRyf'](getTaskList, 0x1);
        await $['wait'](0x1f4);
        await _0x244fa5['LKRyf'](browserTask, 0x1);
        await $['wait'](0x1f4);
        await _0x244fa5['hcoEV'](funCenterState);
        await $['wait'](0x1f4);
        await _0x244fa5['hcoEV'](openPeriodBox);
        await $['wait'](0x1f4);
        await _0x244fa5['oIefD'](submitGroupId);
        await $['wait'](0x1f4);
        const _0x398767 = await _0x244fa5['CtGyJ'](getUserInfo, ![]);
        console['log']('debug: 开始助力');
        await _0x244fa5['njAGz'](helpFriend);
        $['result']['push']('【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']), '【💵财富值】任务前: ' + _0x44aef5['ddwMoney'] + '\n【💵财富值】任务后: ' + _0x398767['ddwMoney'], '【💵财富值】净增值: ' + _0x244fa5['dwSwU'](_0x398767['ddwMoney'], _0x44aef5['ddwMoney']) + '\x0a');
        await _0x244fa5['njAGz'](helpAuthor3);
    } catch (_0x32001d) {
        $['logErr'](_0x32001d);
    }
}

function getAuthorShareCode(_0x3d2f20 = 'http://adguard.b.freefrp.net/cfd.json') {
    var _0x2cf5fb = {
        'MlVmM': function(_0x2fe09c, _0x221c9d) {
            return _0x2fe09c !== _0x221c9d;
        },
        'lGjuY': 'scoYy',
        'SdLSq': function(_0x4a9bbc, _0x5bf31e) {
            return _0x4a9bbc(_0x5bf31e);
        },
        'pZsVS': function(_0x42b818) {
            return _0x42b818();
        },
        'SBxPs': function(_0x13949f) {
            return _0x13949f();
        },
        'NgQkU': function(_0x456131, _0x2fed7e) {
            return _0x456131 === _0x2fed7e;
        },
        'IkAzu': 'vcmAu',
        'qyygK': 'mvQuv',
        'VVKZv': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/87.0.4280.88',
        'lpvMU': function(_0x462de8) {
            return _0x462de8();
        }
    };
    return new Promise(async _0x4ff094 => {
        var _0x130468 = {
            'izZtI': function(_0x46f0af) {
                return _0x2cf5fb['SBxPs'](_0x46f0af);
            }
        };
        if (_0x2cf5fb['NgQkU'](_0x2cf5fb['IkAzu'], _0x2cf5fb['qyygK'])) {
            _0x130468['izZtI'](_0x4ff094);
        } else {
            $['get']({
                'url': _0x3d2f20,
                'headers': {
                    'User-Agent': _0x2cf5fb['VVKZv']
                },
                'timeout': 0x2710
            }, async (_0x3a3b17, _0x43e121, _0x4c7d58) => {
                if (_0x2cf5fb['MlVmM'](_0x2cf5fb['lGjuY'], _0x2cf5fb['lGjuY'])) {
                    $['logErr'](e, _0x43e121);
                } else {
                    try {
                        _0x2cf5fb['SdLSq'](_0x4ff094, JSON['parse'](_0x4c7d58));
                    } catch (_0xa547d6) {} finally {
                        _0x2cf5fb['pZsVS'](_0x4ff094);
                    }
                }
            });
            await $['wait'](0x2710);
            _0x2cf5fb['lpvMU'](_0x4ff094);
        }
    });
}

function getRandomArrayElements(_0x56acf3, _0x346765) {
    var _0x7f6405 = {
        'TmUyO': function(_0x7a4725, _0x32f1d1) {
            return _0x7a4725 - _0x32f1d1;
        },
        'BSiKC': function(_0x1db05d, _0x132efe) {
            return _0x1db05d > _0x132efe;
        },
        'ZHurG': function(_0xde2b72, _0x3ad03c) {
            return _0xde2b72 * _0x3ad03c;
        },
        'zMUwE': function(_0x268ff0, _0x374579) {
            return _0x268ff0 + _0x374579;
        }
    };
    let _0x342d49 = _0x56acf3['slice'](0x0),
        _0x1ab84a = _0x56acf3['length'],
        _0x4a1537 = _0x7f6405['TmUyO'](_0x1ab84a, _0x346765),
        _0x3abcb5, _0x388f47;
    while (_0x7f6405['BSiKC'](_0x1ab84a--, _0x4a1537)) {
        _0x388f47 = Math['floor'](_0x7f6405['ZHurG'](_0x7f6405['zMUwE'](_0x1ab84a, 0x1), Math['random']()));
        _0x3abcb5 = _0x342d49[_0x388f47];
        _0x342d49[_0x388f47] = _0x342d49[_0x1ab84a];
        _0x342d49[_0x1ab84a] = _0x3abcb5;
    }
    return _0x342d49['slice'](_0x4a1537);
}
async function helpAuthor3() {
    var _0x51c767 = {
        'wIBuS': function(_0xfa0bdf) {
            return _0xfa0bdf();
        },
        'PGKFi': function(_0x41d95b, _0x185336) {
            return _0x41d95b(_0x185336);
        },
        'gtCnB': 'http://adguard.b.freefrp.net/jd_super.json',
        'ZKJsS': function(_0xa44af2, _0x15bd98, _0x3d90ce) {
            return _0xa44af2(_0x15bd98, _0x3d90ce);
        },
        'giizm': function(_0x2f7586, _0x5469d5) {
            return _0x2f7586 > _0x5469d5;
        },
        'UYaFr': 'api.m.jd.com',
        'mMzNv': 'application/json, text/plain, */*',
        'tQvmH': 'https://h5.m.jd.com',
        'NvbXU': 'jdapp;iPhone;9.3.5;14.2;53f4d9c70c1c81f1c8769d2fe2fef0190a3f60d2;network/wifi;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone10,2;addressid/137923973;supportBestPay/0;appBuild/167515;jdSupportDarkMode/0;pv/2217.74;apprpd/MyJD_PersonalSpace;ref/MySpace;psq/8;ads/;psn/53f4d9c70c1c81f1c8769d2fe2fef0190a3f60d2|8703;jdv/0|kong|t_1000170135|tuiguang|notset|1610674234917|1610674234;adk/;app_device/IOS;pap/JA2015_311210|9.3.5|IOS 14.2;Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
        'QYHNE': 'zh-cn',
        'ZATrz': 'https://h5.m.jd.com/babelDiy/Zeus/25C6dc6HY6if6DT7e58A1pi2Vxe4/index.html?activityId=73cf1fe89d33433d9cc8688d1892d432&assistId=R2u2OCB9eEbcCVB_CiVKhg'
    };
    let _0x28ea4f = await _0x51c767['wIBuS'](getAuthorShareCode2),
        _0x43507b = await _0x51c767['PGKFi'](getAuthorShareCode2, _0x51c767['gtCnB']);
    $['MyShareIds'] = [..._0x28ea4f || [], ..._0x43507b || []];
    $['MyShareIds'] = _0x51c767['ZKJsS'](getRandomArrayElements, $['MyShareIds'], _0x51c767['giizm']($['MyShareIds']['length'], 0x3) ? 0x6 : $['MyShareIds']['length']);
    for (let _0x325c39 of $['MyShareIds'] || []) {
        const _0x6e6a80 = {
            'url': 'https://api.m.jd.com/client.action?clientVersion=9.3.5&client=wh5&functionId=smtfission_assist&appid=smtFission&body=' + _0x51c767['PGKFi'](escape, JSON['stringify'](_0x325c39)),
            'headers': {
                'Host': _0x51c767['UYaFr'],
                'accept': _0x51c767['mMzNv'],
                'origin': _0x51c767['tQvmH'],
                'user-agent': _0x51c767['NvbXU'],
                'accept-language': _0x51c767['QYHNE'],
                'referer': _0x51c767['ZATrz'],
                'Cookie': cookie
            },
            'timeout': 0x2710
        };
        $['get'](_0x6e6a80);
    }
}

function getAuthorShareCode2(_0x106814 = 'http://adguard.b.freefrp.net/jd_super.json') {
    var _0x435113 = {
        'YNIqw': function(_0x196dd0, _0x19ecf0) {
            return _0x196dd0 + _0x19ecf0;
        },
        'VFjog': function(_0x528291, _0x2a5089) {
            return _0x528291 === _0x2a5089;
        },
        'tpBNa': 'vsunP',
        'cqGYN': 'ihGiT',
        'NSSAE': function(_0x1cf555, _0xb33dbc) {
            return _0x1cf555(_0xb33dbc);
        },
        'ThzCA': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/87.0.4280.88'
    };
    return new Promise(_0x11107c => {
        $['get']({
            'url': _0x106814,
            'headers': {
                'User-Agent': _0x435113['ThzCA']
            },
            'timeout': 0x2710
        }, async (_0x8d3403, _0x1a910a, _0x2a68f9) => {
            var _0x42979b = {
                'WymPB': function(_0x40dde8, _0x2bb134) {
                    return _0x435113['YNIqw'](_0x40dde8, _0x2bb134);
                }
            };
            try {
                if (_0x435113['VFjog'](_0x435113['tpBNa'], _0x435113['cqGYN'])) {
                    str = _0x42979b['WymPB'](msg, prizeInfo) ? ' 获得财富值 ¥ ' + JSON['parse'](prizeInfo)['ddwMoney'] : '';
                } else {
                    if (_0x8d3403) {} else {
                        if (_0x2a68f9) _0x2a68f9 = JSON['parse'](_0x2a68f9);
                    }
                }
            } catch (_0x1089aa) {} finally {
                _0x435113['NSSAE'](_0x11107c, _0x2a68f9 || []);
            }
        });
    });
}

function getJxToken() {
    var _0x136d9c = {
        'iVdQO': 'abcdefghijklmnopqrstuvwxyz1234567890',
        'WLkLd': function(_0x4d9846, _0x46b157) {
            return _0x4d9846 < _0x46b157;
        },
        'Prkng': function(_0x28fffc, _0x485c01) {
            return _0x28fffc(_0x485c01);
        },
        'oLZgd': function(_0x3c37f0, _0x548b47) {
            return _0x3c37f0 * _0x548b47;
        },
        'Ffbsc': function(_0x37eea2, _0x49a647) {
            return _0x37eea2(_0x49a647);
        },
        'LfWBZ': function(_0x31eedb, _0xf2edd8) {
            return _0x31eedb(_0xf2edd8);
        }
    };

    function _0x1f6481(_0x15d0dd) {
        let _0x1cedd1 = _0x136d9c['iVdQO'];
        let _0x1937e1 = '';
        for (let _0x3c5e2f = 0x0; _0x136d9c['WLkLd'](_0x3c5e2f, _0x15d0dd); _0x3c5e2f++) {
            _0x1937e1 += _0x1cedd1[_0x136d9c['Prkng'](parseInt, _0x136d9c['oLZgd'](Math['random'](), _0x1cedd1['length']))];
        }
        return _0x1937e1;
    }
    return new Promise(_0x58ec40 => {
        let _0x36f1d6 = _0x136d9c['Ffbsc'](_0x1f6481, 0x28);
        let _0x409765 = (+new Date())['toString']();
        if (!cookie['match'](/pt_pin=([^; ]+)(?=;?)/)) {
            console['log']('此账号cookie填写不规范,你的pt_pin=xxx后面没分号(;)\n');
            _0x136d9c['Ffbsc'](_0x58ec40, null);
        }
        let _0x31fc67 = cookie['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1];
        let _0x36264e = $['md5']('' + _0x136d9c['LfWBZ'](decodeURIComponent, _0x31fc67) + _0x409765 + _0x36f1d6 + 'tPOamqCuk9NLgVPAljUyIHcPRmKlVxDy')['toString']();
        _0x136d9c['LfWBZ'](_0x58ec40, {
            'timestamp': _0x409765,
            'phoneid': _0x36f1d6,
            'farm_jstoken': _0x36264e
        });
    });
}

function getUserInfo(_0x3c3982 = !![]) {
    var _0x4d6ca5 = {
        'LYEZP': function(_0x4f2d8f, _0x555b6f) {
            return _0x4f2d8f === _0x555b6f;
        },
        'AaKPY': 'PgCci',
        'JLYal': 'jwFyy',
        'NZHnu': 'ddwMoney',
        'hvZss': function(_0x3c0c5d, _0xbe5d78) {
            return _0x3c0c5d(_0xbe5d78);
        },
        'ErDnZ': function(_0x3bafbd) {
            return _0x3bafbd();
        }
    };
    return new Promise(async _0x380ae => {
        $['get'](_0x4d6ca5['hvZss'](taskUrl, 'user/QueryUserInfo'), (_0x27523e, _0x51af19, _0x23aac8) => {
            try {
                if (_0x4d6ca5['LYEZP'](_0x4d6ca5['AaKPY'], _0x4d6ca5['JLYal'])) {
                    const {
                        iRet,
                        sErrMsg,
                        dwExpericnce
                    } = JSON['parse'](_0x23aac8);
                    $['log']('\x0a' + strTaskDescr + '【领成就奖励】： success 获得财富值：¥ ' + dwExpericnce + '\x0a' + ($['showLog'] ? _0x23aac8 : ''));
                } else {
                    _0x23aac8 = JSON['parse'](_0x23aac8);
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
                    } = _0x23aac8;
                    $['log']('\n获取用户信息：' + sErrMsg + '\x0a' + ($['showLog'] ? _0x23aac8 : ''));
                    $['log']('\n当前等级:' + dwLevel + ',财富值:' + _0x23aac8[_0x4d6ca5['NZHnu']] + '\x0a');
                    if (_0x3c3982) {
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
                    _0x4d6ca5['hvZss'](_0x380ae, {
                        'SceneList': SceneList,
                        'XBDetail': XBDetail,
                        'dwXBRemainCnt': dwXBRemainCnt,
                        'ddwMoney': ddwMoney,
                        'dwIsNewUser': dwIsNewUser,
                        'strMyShareId': strMyShareId,
                        'strPin': strPin
                    });
                }
            } catch (_0x309961) {
                $['logErr'](_0x309961, _0x51af19);
            } finally {
                _0x4d6ca5['ErDnZ'](_0x380ae);
            }
        });
    });
}

function querySignList() {
    var _0x2c02b0 = {
        'ygSJE': function(_0x1a7a6a, _0x243b4e) {
            return _0x1a7a6a === _0x243b4e;
        },
        'plKnC': function(_0x5e673e, _0x50face, _0xc26e42) {
            return _0x5e673e(_0x50face, _0xc26e42);
        },
        'OPrph': function(_0x1a2c1c) {
            return _0x1a2c1c();
        },
        'szIAB': function(_0x4bd2c8, _0x664492) {
            return _0x4bd2c8 !== _0x664492;
        },
        'Qjxpq': 'mqtji',
        'ssJXr': 'vEPyv',
        'FbkqF': function(_0x26c365, _0x2f0245) {
            return _0x26c365(_0x2f0245);
        }
    };
    return new Promise(async _0x75b379 => {
        var _0x1f3d88 = {
            'oPnQB': function(_0x1f03f2, _0x59e867) {
                return _0x2c02b0['ygSJE'](_0x1f03f2, _0x59e867);
            },
            'qvKFx': function(_0x1c539d, _0x5de789, _0xe3e2ac) {
                return _0x2c02b0['plKnC'](_0x1c539d, _0x5de789, _0xe3e2ac);
            },
            'YpCCe': function(_0x4ce993) {
                return _0x2c02b0['OPrph'](_0x4ce993);
            }
        };
        if (_0x2c02b0['szIAB'](_0x2c02b0['Qjxpq'], _0x2c02b0['ssJXr'])) {
            $['get'](_0x2c02b0['FbkqF'](taskUrl, 'task/QuerySignListV2'), async (_0x5a4453, _0x1cf27a, _0x393e8b) => {
                try {
                    const {
                        iRet,
                        sData: {
                            Sign = [{}],
                            dwUserFlag
                        },
                        sErrMsg
                    } = JSON['parse'](_0x393e8b);
                    $['log']('\n签到列表：' + sErrMsg + '\x0a' + ($['showLog'] ? _0x393e8b : ''));
                    const [{
                        dwStatus,
                        ddwMoney
                    }] = Sign['filter'](_0x48b3db => _0x48b3db['dwShowFlag'] === 0x1);
                    if (_0x1f3d88['oPnQB'](dwStatus, 0x0)) {
                        await _0x1f3d88['qvKFx'](userSignReward, dwUserFlag, ddwMoney);
                    } else {
                        $['log']('\n📌签到：你今日已签到过啦，请明天再来');
                    }
                } catch (_0x3e9a56) {
                    $['logErr'](_0x3e9a56, _0x1cf27a);
                } finally {
                    _0x1f3d88['YpCCe'](_0x75b379);
                }
            });
        } else {
            console['log']('开通场景结果:' + data + '\x0a');
        }
    });
}
async function userSignReward(_0x4c106b, _0x9a42b3) {
    var _0x5bea46 = {
        'TLqFG': function(_0x2245a9, _0x2211c4) {
            return _0x2245a9 == _0x2211c4;
        },
        'KNpmx': 'success',
        'hXHVw': function(_0x26327d, _0x54d339) {
            return _0x26327d || _0x54d339;
        },
        'ytYfW': function(_0x4f57d3, _0x2d50e4) {
            return _0x4f57d3 !== _0x2d50e4;
        },
        'cjGIq': 'ZXYLA',
        'dZsgD': 'PUEIz',
        'psrXY': function(_0x2113ae, _0x54e9ff) {
            return _0x2113ae === _0x54e9ff;
        },
        'MTnIL': 'VtdqE',
        'Wpesh': 'BfsPI',
        'pyKCZ': function(_0x11f212) {
            return _0x11f212();
        },
        'SvHfW': function(_0x2513cc, _0x3b22be, _0x52c1d5) {
            return _0x2513cc(_0x3b22be, _0x52c1d5);
        }
    };
    return new Promise(async _0x3084cf => {
        var _0x262c78 = {
            'hsGHs': function(_0x21330c, _0x147b65) {
                return _0x5bea46['TLqFG'](_0x21330c, _0x147b65);
            },
            'BwyGc': _0x5bea46['KNpmx'],
            'CtIPn': function(_0xb95829, _0x506c9e) {
                return _0x5bea46['hXHVw'](_0xb95829, _0x506c9e);
            },
            'SPRRw': function(_0x2759fe, _0x12f1d5) {
                return _0x5bea46['ytYfW'](_0x2759fe, _0x12f1d5);
            },
            'NVKhx': _0x5bea46['cjGIq'],
            'gsuFV': _0x5bea46['dZsgD'],
            'zvTOS': function(_0x5c776a, _0x15079f) {
                return _0x5bea46['psrXY'](_0x5c776a, _0x15079f);
            },
            'nLpZc': _0x5bea46['MTnIL'],
            'ORYKj': _0x5bea46['Wpesh'],
            'qeZuj': function(_0x49137e) {
                return _0x5bea46['pyKCZ'](_0x49137e);
            }
        };
        $['get'](_0x5bea46['SvHfW'](taskUrl, 'task/UserSignRewardV2', 'dwReqUserFlag=' + _0x4c106b + '&ddwMoney=' + _0x9a42b3), async (_0x5461fb, _0x3a9433, _0xe3f179) => {
            try {
                const {
                    iRet,
                    sData: {
                        ddwMoney
                    },
                    sErrMsg
                } = JSON['parse'](_0xe3f179);
                $['log']('\n📌签到：' + sErrMsg + '，获得财富 ¥ ' + _0x262c78['CtIPn'](ddwMoney, 0x0) + '\x0a' + ($['showLog'] ? _0xe3f179 : ''));
            } catch (_0x219bee) {
                if (_0x262c78['SPRRw'](_0x262c78['NVKhx'], _0x262c78['gsuFV'])) {
                    $['logErr'](_0x219bee, _0x3a9433);
                } else {
                    const {
                        iRet,
                        dwMoney,
                        sErrMsg,
                        strPin
                    } = JSON['parse'](_0xe3f179);
                    $['log']('\x0a【' + sceneList[_key]['strSceneName'] + '】👬好友: ' + (_0x262c78['hsGHs'](sErrMsg, _0x262c78['BwyGc']) ? '获取超级助力财富值：¥ ' + _0x262c78['CtIPn'](dwMoney, 0x0) : sErrMsg) + ' \x0a' + ($['showLog'] ? _0xe3f179 : ''));
                }
            } finally {
                if (_0x262c78['zvTOS'](_0x262c78['nLpZc'], _0x262c78['ORYKj'])) {
                    $['logErr'](e, _0x3a9433);
                } else {
                    _0x262c78['qeZuj'](_0x3084cf);
                }
            }
        });
    });
}

function getMoney() {
    var _0xb7da32 = {
        'PBatV': function(_0x4dd5df) {
            return _0x4dd5df();
        },
        'iJAJz': '*/*',
        'nPMky': 'keep-alive',
        'CfYJi': 'https://st.jingxi.com/fortune_island/index.html?ptag=138631.26.55',
        'qwydP': 'gzip, deflate, br',
        'jGuAN': 'm.jingxi.com',
        'ZDZhv': function(_0x58463e, _0x278261) {
            return _0x58463e + _0x278261;
        },
        'opqYv': function(_0x401ae0, _0x138095) {
            return _0x401ae0 * _0x138095;
        },
        'zftAi': 'zh-cn',
        'FqGGw': function(_0xfaa26f, _0x12d857) {
            return _0xfaa26f === _0x12d857;
        },
        'DGcih': 'WHdhe',
        'DAGlA': '1001',
        'wjTQI': '1002',
        'fNgMs': '1003',
        'JuyIf': function(_0x27a923, _0x2d3c80) {
            return _0x27a923 !== _0x2d3c80;
        },
        'umJdD': 'ZrUZY',
        'TzmIT': function(_0x501a5b, _0x503fd9) {
            return _0x501a5b >= _0x503fd9;
        },
        'MMSwA': function(_0x2b250b, _0x437488) {
            return _0x2b250b(_0x437488);
        },
        'eBjqB': function(_0x250563, _0x398b40) {
            return _0x250563 >= _0x398b40;
        },
        'kRLgL': function(_0x360e42, _0x16eec5) {
            return _0x360e42(_0x16eec5);
        },
        'kZfkA': function(_0x15eef8, _0x4edad9, _0x3750c4) {
            return _0x15eef8(_0x4edad9, _0x3750c4);
        },
        'PIcem': function(_0x655df5, _0x739acf) {
            return _0x655df5(_0x739acf);
        },
        'EupjA': function(_0x8a3b9, _0x2f2d10) {
            return _0x8a3b9 + _0x2f2d10;
        },
        'ycUAF': function(_0x69b07c, _0x4df3f8) {
            return _0x69b07c + _0x4df3f8;
        },
        'HmoEw': function(_0x6db33d, _0x49931e, _0x2ac551, _0x1070a4) {
            return _0x6db33d(_0x49931e, _0x2ac551, _0x1070a4);
        },
        'zcIQB': function(_0x258314, _0x3cad96, _0x248ec9) {
            return _0x258314(_0x3cad96, _0x248ec9);
        }
    };
    return new Promise(async _0x30a761 => {
        if (_0xb7da32['FqGGw'](_0xb7da32['DGcih'], _0xb7da32['DGcih'])) {
            let _0xac4283 = $['info']['SceneList'];
            let _0x2343e6 = [],
                _0x28e776 = [_0xb7da32['DAGlA'], _0xb7da32['wjTQI'], _0xb7da32['fNgMs']];
            _0x2343e6 = Object['keys'](_0xac4283);
            _0x2343e6 = _0x28e776['filter'](_0xf3fc16 => _0x2343e6['every'](_0x443f38 => _0xf3fc16 !== _0x443f38));
            console['log']('待开通场景ID列表sceneList;' + JSON['stringify'](_0x2343e6));
            for (let _0x7a3ed5 of _0x2343e6) {
                if (_0xb7da32['JuyIf'](_0xb7da32['umJdD'], _0xb7da32['umJdD'])) {
                    _0xb7da32['PBatV'](_0x30a761);
                } else {
                    if (_0xb7da32['FqGGw'](_0x7a3ed5, _0xb7da32['wjTQI']) && _0xb7da32['TzmIT']($['info']['dwLevel'], 0xb)) await _0xb7da32['MMSwA'](activeScene, _0x7a3ed5);
                    if (_0xb7da32['FqGGw'](_0x7a3ed5, _0xb7da32['fNgMs']) && _0xb7da32['eBjqB']($['info']['dwLevel'], 0x1a)) await _0xb7da32['kRLgL'](activeScene, _0x7a3ed5);
                }
            }
            for (var _0x593364 of Object['keys']($['info']['SceneList'])) {
                try {
                    await $['wait'](0x1f4);
                    await _0xb7da32['kZfkA'](getMoney_dwSource_1, _0x593364, _0xac4283);
                    const _0x1fe8c2 = _0xb7da32['PIcem'](eval, _0xb7da32['EupjA'](_0xb7da32['ycUAF']('(', JSON['stringify'](_0xac4283[_0x593364]['EmployeeList'])), ')'));
                    if (_0xb7da32['JuyIf'](_0x1fe8c2, '')) {
                        for (var _0x539c8b of Object['keys'](_0x1fe8c2)) {
                            await $['wait'](0x1f4);
                            await _0xb7da32['HmoEw'](getMoney_dwSource_2, _0x593364, _0xac4283, _0x539c8b);
                        }
                    }
                    await $['wait'](0x1f4);
                    if (token) await _0xb7da32['zcIQB'](getMoney_dwSource_3, _0x593364, _0xac4283);
                    await _0xb7da32['PIcem'](employeeAward, _0x593364);
                } catch (_0x45b0ed) {
                    $['logErr'](_0x45b0ed, resp);
                } finally {
                    _0xb7da32['PBatV'](_0x30a761);
                }
            }
        } else {
            return {
                'url': JD_API_HOST + 'jxcfd/' + function_path + '?strZone=jxcfd&bizCode=jxcfd&source=jxcfd&dwEnv=7&_cfd_t=' + Date['now']() + '&ptag=138631.26.55&' + body + '&_ste=1&_=' + Date['now']() + '&sceneval=2&g_login_type=1&g_ty=ls',
                'headers': {
                    'Cookie': cookie,
                    'Accept': _0xb7da32['iJAJz'],
                    'Connection': _0xb7da32['nPMky'],
                    'Referer': _0xb7da32['CfYJi'],
                    'Accept-Encoding': _0xb7da32['qwydP'],
                    'Host': _0xb7da32['jGuAN'],
                    'User-Agent': 'jdpingou;iPhone;3.15.2;14.2.1;ea00763447803eb0f32045dcba629c248ea53bb3;network/wifi;model/iPhone13,2;appBuild/100365;ADID/00000000-0000-0000-0000-000000000000;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/0;hasOCPay/0;supportBestPay/0;session/' + _0xb7da32['ZDZhv'](_0xb7da32['opqYv'](Math['random'], 0x62), 0x1) + ';pap/JA2015_311210;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
                    'Accept-Language': _0xb7da32['zftAi']
                },
                'timeout': 0x2710
            };
        }
    });
}

function getMoney_dwSource_1(_0x1d33f9, _0x438c5c) {
    var _0xfc1240 = {
        'ZUswT': function(_0x1cace7) {
            return _0x1cace7();
        },
        'ttPcs': function(_0x2eef01, _0x53ae63) {
            return _0x2eef01 === _0x53ae63;
        },
        'AkKSA': 'iuWrY',
        'YgDIR': 'QZOFY',
        'RSBVZ': 'bhPNB',
        'DvqFR': 'UqjuV',
        'fZmQO': function(_0x1de5ff, _0x225c6c) {
            return _0x1de5ff == _0x225c6c;
        },
        'SPdPg': 'success',
        'SuUyc': function(_0x33f5c7, _0x3c3350) {
            return _0x33f5c7 || _0x3c3350;
        },
        'FsRZT': function(_0x148adb, _0x313c40) {
            return _0x148adb !== _0x313c40;
        },
        'fFYAf': 'kcGQB',
        'bXyFN': function(_0x5e0828, _0x58e400) {
            return _0x5e0828 !== _0x58e400;
        },
        'qkgae': 'vvaES',
        'lWtrf': 'EEhzZ',
        'sPkMR': function(_0x140856, _0x37b9db, _0x2efa53) {
            return _0x140856(_0x37b9db, _0x2efa53);
        }
    };
    return new Promise(async _0x1d37c9 => {
        var _0x29d7f1 = {
            'EGGBe': function(_0x2fae8c) {
                return _0xfc1240['ZUswT'](_0x2fae8c);
            },
            'TKLpn': function(_0x481914, _0x33c9f0) {
                return _0xfc1240['ttPcs'](_0x481914, _0x33c9f0);
            },
            'quevd': _0xfc1240['AkKSA'],
            'bUGOH': _0xfc1240['YgDIR'],
            'aWZxj': _0xfc1240['RSBVZ'],
            'JOWVd': _0xfc1240['DvqFR'],
            'uEolg': function(_0x1cf7ef, _0x264543) {
                return _0xfc1240['fZmQO'](_0x1cf7ef, _0x264543);
            },
            'JaZrM': _0xfc1240['SPdPg'],
            'ughGW': function(_0x45aa83, _0x4a0f57) {
                return _0xfc1240['SuUyc'](_0x45aa83, _0x4a0f57);
            },
            'WmPFk': function(_0x2df89f, _0x427a21) {
                return _0xfc1240['FsRZT'](_0x2df89f, _0x427a21);
            },
            'scxuv': _0xfc1240['fFYAf'],
            'FFRHt': function(_0x36429d, _0x3bdec3) {
                return _0xfc1240['bXyFN'](_0x36429d, _0x3bdec3);
            },
            'KpZUx': _0xfc1240['qkgae'],
            'IvmlF': _0xfc1240['lWtrf'],
            'AWqHM': function(_0x4efcec) {
                return _0xfc1240['ZUswT'](_0x4efcec);
            }
        };
        $['get'](_0xfc1240['sPkMR'](taskUrl, 'user/GetMoney', 'dwSceneId=' + _0x1d33f9 + '&strEmployeeId=undefined&dwSource=1'), async (_0x298399, _0x3e6209, _0xd2009a) => {
            var _0x206025 = {
                'xpfNs': function(_0x43fe71) {
                    return _0x29d7f1['EGGBe'](_0x43fe71);
                }
            };
            if (_0x29d7f1['TKLpn'](_0x29d7f1['quevd'], _0x29d7f1['bUGOH'])) {
                $['isLogin'] = ![];
                return;
            } else {
                try {
                    if (_0x29d7f1['TKLpn'](_0x29d7f1['aWZxj'], _0x29d7f1['JOWVd'])) {
                        try {
                            const {
                                iRet,
                                sErrMsg,
                                taskinfo = []
                            } = JSON['parse'](_0xd2009a);
                            $['allTask'] = taskinfo['filter'](_0x5bfa97 => _0x5bfa97['dwAwardStatus'] === 0x1);
                            $['log']('\n获取【🎖成就任务】列表 ' + sErrMsg + '，总共' + $['allTask']['length'] + '个任务！\n' + ($['showLog'] ? _0xd2009a : ''));
                        } catch (_0x3425bf) {
                            $['logErr'](_0x3425bf, _0x3e6209);
                        } finally {
                            _0x206025['xpfNs'](_0x1d37c9);
                        }
                    } else {
                        const {
                            iRet,
                            dwMoney,
                            sErrMsg
                        } = JSON['parse'](_0xd2009a);
                        $['log']('\x0a【' + _0x438c5c[_0x1d33f9]['strSceneName'] + '】🏝岛主 : ' + (_0x29d7f1['uEolg'](sErrMsg, _0x29d7f1['JaZrM']) ? '获取财富值：¥ ' + _0x29d7f1['ughGW'](dwMoney, 0x0) : sErrMsg) + ' \x0a' + ($['showLog'] ? _0xd2009a : ''));
                    }
                } catch (_0x4610bc) {
                    if (_0x29d7f1['WmPFk'](_0x29d7f1['scxuv'], _0x29d7f1['scxuv'])) {
                        $['logErr'](_0x4610bc, _0x3e6209);
                    } else {
                        $['logErr'](_0x4610bc, _0x3e6209);
                    }
                } finally {
                    if (_0x29d7f1['FFRHt'](_0x29d7f1['KpZUx'], _0x29d7f1['IvmlF'])) {
                        _0x29d7f1['AWqHM'](_0x1d37c9);
                    } else {
                        return JSON['parse'](str);
                    }
                }
            }
        });
    });
}

function getMoney_dwSource_2(_0x2dfd2f, _0x15fb42, _0x45a6f2) {
    var _0x5f46e8 = {
        'WaEXX': function(_0x152ba5, _0x33fa30) {
            return _0x152ba5 == _0x33fa30;
        },
        'haTcH': 'success',
        'LzRZS': function(_0x222314, _0x35b19e) {
            return _0x222314 || _0x35b19e;
        },
        'pjYdp': function(_0x1c82ac) {
            return _0x1c82ac();
        },
        'dckMp': function(_0x483ebf, _0x43ec99, _0x3ddd73) {
            return _0x483ebf(_0x43ec99, _0x3ddd73);
        }
    };
    return new Promise(async _0x5a4e52 => {
        var _0x10a723 = {
            'SkPYg': function(_0x341e13, _0x4b97bd) {
                return _0x5f46e8['WaEXX'](_0x341e13, _0x4b97bd);
            },
            'kxsRM': _0x5f46e8['haTcH'],
            'vLZgH': function(_0x2ba400, _0xe7f964) {
                return _0x5f46e8['LzRZS'](_0x2ba400, _0xe7f964);
            },
            'BwAeM': function(_0x18a86f) {
                return _0x5f46e8['pjYdp'](_0x18a86f);
            }
        };
        $['get'](_0x5f46e8['dckMp'](taskUrl, 'user/GetMoney', 'dwSceneId=' + _0x2dfd2f + '&strEmployeeId=' + _0x45a6f2 + '&dwSource=2'), async (_0x592376, _0x1a5c3c, _0x5781d6) => {
            try {
                const {
                    dwMoney,
                    iRet,
                    sErrMsg,
                    strPin
                } = JSON['parse'](_0x5781d6);
                $['log']('\x0a【' + _0x15fb42[_0x2dfd2f]['strSceneName'] + '】👬好友: ' + (_0x10a723['SkPYg'](sErrMsg, _0x10a723['kxsRM']) ? '获取普通助力财富值：¥ ' + _0x10a723['vLZgH'](dwMoney, 0x0) : sErrMsg) + ' \x0a' + ($['showLog'] ? _0x5781d6 : ''));
            } catch (_0x75eb5c) {
                $['logErr'](_0x75eb5c, _0x1a5c3c);
            } finally {
                _0x10a723['BwAeM'](_0x5a4e52);
            }
        });
    });
}

function getMoney_dwSource_3(_0x328e3f, _0x4c5e71) {
    var _0x414022 = {
        'xcaNA': function(_0x2cfe2f, _0x364563) {
            return _0x2cfe2f == _0x364563;
        },
        'mvcUE': 'success',
        'QGvug': function(_0x3972e0, _0xd89e6b) {
            return _0x3972e0 || _0xd89e6b;
        },
        'tiCfI': function(_0x560538) {
            return _0x560538();
        },
        'ogEfm': function(_0x51a9e8, _0x4579e6, _0x157ff8) {
            return _0x51a9e8(_0x4579e6, _0x157ff8);
        },
        'NtvTE': 'timestamp',
        'sNEUJ': 'phoneid',
        'nqhYK': 'farm_jstoken'
    };
    return new Promise(async _0x49abfc => {
        $['get'](_0x414022['ogEfm'](taskUrl, 'user/GetMoney', 'dwSceneId=' + _0x328e3f + '&strEmployeeId=&dwSource=3&strPgtimestamp=' + token[_0x414022['NtvTE']] + '&strPhoneID=' + token[_0x414022['sNEUJ']] + '&strPgUUNum=' + token[_0x414022['nqhYK']]), async (_0x1e37be, _0x2bd5a2, _0x4bb972) => {
            try {
                const {
                    iRet,
                    dwMoney,
                    sErrMsg,
                    strPin
                } = JSON['parse'](_0x4bb972);
                $['log']('\x0a【' + _0x4c5e71[_0x328e3f]['strSceneName'] + '】👬好友: ' + (_0x414022['xcaNA'](sErrMsg, _0x414022['mvcUE']) ? '获取超级助力财富值：¥ ' + _0x414022['QGvug'](dwMoney, 0x0) : sErrMsg) + ' \x0a' + ($['showLog'] ? _0x4bb972 : ''));
            } catch (_0x10b7e5) {
                $['logErr'](_0x10b7e5, _0x2bd5a2);
            } finally {
                _0x414022['tiCfI'](_0x49abfc);
            }
        });
    });
}

function employeeAward(_0x419a00) {
    var _0x4fbea7 = {
        'DgoTv': function(_0x3b195f, _0x206eec) {
            return _0x3b195f !== _0x206eec;
        },
        'sAXlX': 'LPNHo',
        'JqRnT': function(_0x152852, _0x182dec) {
            return _0x152852 === _0x182dec;
        },
        'MaCFb': '1001',
        'jHQqX': 'strName',
        'iOUgh': '1002',
        'LOOdE': '1003',
        'XerLg': 'yuaQs',
        'NTltd': 'eqYKj',
        'TOPuF': function(_0x4a53b7, _0x16c3dc) {
            return _0x4a53b7 * _0x16c3dc;
        },
        'mNTcs': function(_0x3029de, _0x1d961e) {
            return _0x3029de(_0x1d961e);
        },
        'rUqjZ': function(_0x81c892) {
            return _0x81c892();
        },
        'SIaDj': function(_0x1dc8b7, _0x5c56ea) {
            return _0x1dc8b7 === _0x5c56ea;
        },
        'ovvKC': function(_0x31a746, _0x16ec8e) {
            return _0x31a746 === _0x16ec8e;
        },
        'LVCVb': 'm.jingxi.com',
        'tYGgq': '*/*',
        'NqBzD': 'jdpingou;iPad;4.2.2;14.4;network/wifi;Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
        'RRymj': 'zh-cn',
        'HDSBj': 'https://st.jingxi.com/fortune_island/index.html?ptag=7155.9.47'
    };
    return new Promise(async _0x3c2461 => {
        var _0x439ad1 = {
            'XFJdk': function(_0x302f27, _0x2d406c) {
                return _0x4fbea7['SIaDj'](_0x302f27, _0x2d406c);
            },
            'wrOaJ': function(_0x1de702, _0x37c18a) {
                return _0x4fbea7['ovvKC'](_0x1de702, _0x37c18a);
            },
            'sIoQK': function(_0x83e336, _0x56bf6d) {
                return _0x4fbea7['mNTcs'](_0x83e336, _0x56bf6d);
            }
        };
        const _0x112fd5 = {
            'url': 'https://m.jingxi.com/jxcfd/user/AdvEmployeeAward?strZone=jxcfd&bizCode=jxcfd&source=jxcfd&dwEnv=7&_cfd_t=' + +new Date() + '&ptag=138631.26.55&dwSenceId=' + _0x419a00 + '&_=' + +new Date() + '&_stk=_cfd_t,bizCode,dwEnv,dwSenceId,ptag,source,strZone&h5st=20210304120622242;6980827292145544;10009;tk01wb8321c0ea8nNjg0a1JqVUlvqre776hbVd8Unm3xaodPUoxF6qk2nu5+3BL0+M/NCPfMBRDekvWYG0otooxd4ZA9;3a499b12485ae55f84ace34682b6bececd1e74be6ae82d880877f9e1c861d7d9&sceneval=2&g_login_type=1',
            'headers': {
                'Host': _0x4fbea7['LVCVb'],
                'accept': _0x4fbea7['tYGgq'],
                'user-agent': _0x4fbea7['NqBzD'],
                'accept-language': _0x4fbea7['RRymj'],
                'referer': _0x4fbea7['HDSBj'],
                'Cookie': cookie
            }
        };
        $['get'](_0x112fd5, async (_0x5294af, _0x4515a8, _0x510dc4) => {
            if (_0x4fbea7['DgoTv'](_0x4fbea7['sAXlX'], _0x4fbea7['sAXlX'])) {
                try {
                    const {
                        sErrMsg,
                        iRet
                    } = JSON['parse'](_0x510dc4);
                    if (_0x439ad1['XFJdk'](iRet, 0x7d5) || _0x439ad1['wrOaJ'](iRet, 0x270f)) $['canHelp'] = ![];
                    $['log']('iRet:' + iRet + ' ' + sErrMsg);
                } catch (_0x484661) {
                    $['logErr'](_0x484661, _0x4515a8);
                } finally {
                    _0x439ad1['sIoQK'](_0x3c2461, JSON['parse'](_0x510dc4) || {});
                }
            } else {
                try {
                    const {
                        iRet,
                        sErrMsg,
                        strAwardDetail
                    } = JSON['parse'](_0x510dc4);
                    if (_0x4fbea7['JqRnT'](iRet, 0x0)) {
                        switch (_0x419a00) {
                            case _0x4fbea7['MaCFb']:
                                console['log']('【欢乐牧场】获得 ' + strAwardDetail[_0x4fbea7['jHQqX']] + ' 红包');
                                break;
                            case _0x4fbea7['iOUgh']:
                                console['log']('【便利店】获得 ' + strAwardDetail[_0x4fbea7['jHQqX']] + ' 红包');
                                break;
                            case _0x4fbea7['LOOdE']:
                                console['log']('【京喜餐厅】获得 ' + strAwardDetail[_0x4fbea7['jHQqX']] + ' 红包');
                                break;
                            default:
                                console['log']('【未知场景】获得 ' + strAwardDetail[_0x4fbea7['jHQqX']] + ' 红包');
                        }
                    } else {
                        switch (_0x419a00) {
                            case _0x4fbea7['MaCFb']:
                                console['log']('【欢乐牧场领取红包】 ' + sErrMsg);
                                break;
                            case _0x4fbea7['iOUgh']:
                                console['log']('【便利店领取红包】' + sErrMsg);
                                break;
                            case _0x4fbea7['LOOdE']:
                                console['log']('【京喜餐厅领取红包】' + sErrMsg);
                                break;
                            default:
                                console['log']('【未知场景领取红包】' + sErrMsg);
                        }
                    }
                    if (_0x4fbea7['DgoTv'](iRet, 0x0)) {
                        if (_0x4fbea7['JqRnT'](_0x4fbea7['XerLg'], _0x4fbea7['NTltd'])) {
                            $['logErr'](e, _0x4515a8);
                        } else {
                            console['log'](JSON['stringify'](_0x510dc4) + ',退出');
                            return;
                        }
                    }
                    await $['wait'](_0x4fbea7['TOPuF'](0x2, 0x3e8));
                    await _0x4fbea7['mNTcs'](employeeAward, _0x419a00);
                } catch (_0x1091a2) {
                    $['logErr'](_0x1091a2, _0x4515a8);
                } finally {
                    _0x4fbea7['rUqjZ'](_0x3c2461);
                }
            }
        });
    });
}

function friendCircle() {
    var _0x1acfce = {
        'tpzEG': function(_0x2a68d0) {
            return _0x2a68d0();
        },
        'PaWgk': function(_0x45bc5d, _0x327bab) {
            return _0x45bc5d === _0x327bab;
        },
        'ZVJDF': 'UnWEL',
        'aEDHl': function(_0x1d1528, _0x4ddac5) {
            return _0x1d1528 !== _0x4ddac5;
        },
        'nzzkB': function(_0x14f2b9, _0x314c19) {
            return _0x14f2b9 > _0x314c19;
        },
        'rMKyo': 'TMfko',
        'PBpVG': function(_0x2b9298, _0x295cd1) {
            return _0x2b9298(_0x295cd1);
        },
        'dnibI': 'kxMmN',
        'iWKtq': function(_0x63f77) {
            return _0x63f77();
        },
        'FZovp': function(_0x115de2, _0x59f10f, _0x55e553) {
            return _0x115de2(_0x59f10f, _0x55e553);
        }
    };
    return new Promise(async _0x5570d9 => {
        var _0x15fc83 = {
            'mCCgz': function(_0x2f05a0) {
                return _0x1acfce['tpzEG'](_0x2f05a0);
            },
            'rvphZ': function(_0x476479, _0x361f16) {
                return _0x1acfce['PaWgk'](_0x476479, _0x361f16);
            },
            'EstSX': _0x1acfce['ZVJDF'],
            'WvKIk': function(_0x247710, _0x18dd65) {
                return _0x1acfce['aEDHl'](_0x247710, _0x18dd65);
            },
            'pAJUp': function(_0x5553df, _0x1f7161) {
                return _0x1acfce['nzzkB'](_0x5553df, _0x1f7161);
            },
            'WMRGy': _0x1acfce['rMKyo'],
            'LCINJ': function(_0x3e6658, _0x2b8ef9) {
                return _0x1acfce['PBpVG'](_0x3e6658, _0x2b8ef9);
            },
            'KSgLO': _0x1acfce['dnibI'],
            'DfnOj': function(_0x2071de) {
                return _0x1acfce['iWKtq'](_0x2071de);
            }
        };
        $['get'](_0x1acfce['FZovp'](taskUrl, 'user/FriendCircle', 'dwPageIndex=1&dwPageSize=20'), async (_0x297a3c, _0x575325, _0x1ba90f) => {
            var _0x41024a = {
                'QInGi': function(_0x2ed166) {
                    return _0x15fc83['mCCgz'](_0x2ed166);
                }
            };
            if (_0x15fc83['rvphZ'](_0x15fc83['EstSX'], _0x15fc83['EstSX'])) {
                try {
                    const {
                        MomentList = [], iRet, sErrMsg, strShareId
                    } = JSON['parse'](_0x1ba90f);
                    for (moment of MomentList) {
                        if (_0x15fc83['WvKIk'](moment['strShareId'], strShareId) && _0x15fc83['pAJUp'](moment['dwAccessMoney'], 0x0)) {
                            if (_0x15fc83['rvphZ'](_0x15fc83['WMRGy'], _0x15fc83['WMRGy'])) {
                                await _0x15fc83['LCINJ'](queryFriendIsland, moment['strShareId']);
                                await $['wait'](0x1f4);
                            } else {
                                $['logErr'](e);
                            }
                        }
                    }
                } catch (_0xab322f) {
                    $['logErr'](_0xab322f, _0x575325);
                } finally {
                    if (_0x15fc83['WvKIk'](_0x15fc83['KSgLO'], _0x15fc83['KSgLO'])) {
                        _0x41024a['QInGi'](_0x5570d9);
                    } else {
                        _0x15fc83['DfnOj'](_0x5570d9);
                    }
                }
            } else {
                $['log']('\n🎁寻宝：寻宝次数不足');
            }
        });
    });
}

function queryFriendIsland(_0x586f23) {
    var _0x52ce3b = {
        'VDyWY': function(_0x1b87b8, _0x511e4c) {
            return _0x1b87b8 === _0x511e4c;
        },
        'BWVbQ': 'success',
        'bZKza': function(_0x102929, _0x1e343d) {
            return _0x102929(_0x1e343d);
        },
        'VPsnB': function(_0x4e901e, _0x2bba5e) {
            return _0x4e901e + _0x2bba5e;
        },
        'aMXUF': function(_0x2ee4a4, _0x498d2d) {
            return _0x2ee4a4 + _0x498d2d;
        },
        'FhTez': function(_0xe5c6e6, _0x14e4f5) {
            return _0xe5c6e6 !== _0x14e4f5;
        },
        'yHwog': 'TdIwb',
        'TcwfK': 'dnJyQ',
        'aKhRq': function(_0x20f3ae, _0x497e6f, _0x26188c, _0x5952e2, _0x19d612) {
            return _0x20f3ae(_0x497e6f, _0x26188c, _0x5952e2, _0x19d612);
        },
        'CfZla': function(_0x5c2116) {
            return _0x5c2116();
        },
        'bdnGB': function(_0x8c5757, _0x5512d7) {
            return _0x8c5757 !== _0x5512d7;
        },
        'KIoPz': 'eBpUX',
        'cLuxy': 'MVRFp',
        'WySQr': function(_0x276c75, _0x1c8f1c, _0x429830) {
            return _0x276c75(_0x1c8f1c, _0x429830);
        }
    };
    return new Promise(async _0x5ebe8a => {
        if (_0x52ce3b['bdnGB'](_0x52ce3b['KIoPz'], _0x52ce3b['cLuxy'])) {
            $['get'](_0x52ce3b['WySQr'](taskUrl, 'user/QueryFriendIsland', 'strShareId=' + _0x586f23 + '&sceneval=2'), async (_0x109035, _0x1d1f76, _0x338462) => {
                try {
                    const {
                        SceneList = {}, dwStealMoney, sErrMsg, strFriendNick
                    } = JSON['parse'](_0x338462);
                    if (_0x52ce3b['VDyWY'](sErrMsg, _0x52ce3b['BWVbQ'])) {
                        const _0x19775b = _0x52ce3b['bZKza'](eval, _0x52ce3b['VPsnB'](_0x52ce3b['aMXUF']('(', JSON['stringify'](SceneList)), ')'));
                        const _0x4d9583 = Object['keys'](SceneList);
                        for (sceneId of _0x4d9583) {
                            if (_0x52ce3b['FhTez'](_0x52ce3b['yHwog'], _0x52ce3b['TcwfK'])) {
                                await _0x52ce3b['aKhRq'](stealMoney, _0x586f23, sceneId, strFriendNick, _0x19775b[sceneId]['strSceneName']);
                                await $['wait'](0x1f4);
                            } else {
                                $['nickName'] = $['UserName'];
                            }
                        }
                    }
                } catch (_0x31129f) {
                    $['logErr'](_0x31129f, _0x1d1f76);
                } finally {
                    _0x52ce3b['CfZla'](_0x5ebe8a);
                }
            });
        } else {
            try {
                console['log']('\n超级助力(超级工人)结果:' + data);
                const {
                    sErrMsg,
                    iRet
                } = JSON['parse'](data);
                if (_0x52ce3b['VDyWY'](iRet, 0x7d5) || _0x52ce3b['VDyWY'](iRet, 0x270f)) $['canHelp'] = ![];
                console['log'](sErrMsg);
            } catch (_0x1bed8c) {
                $['logErr'](_0x1bed8c, resp);
            } finally {
                _0x52ce3b['CfZla'](_0x5ebe8a);
            }
        }
    });
}

function stealMoney(_0x3c9d4e, _0x3db5dc, _0x5207f9, _0x46fdf1) {
    var _0xecfd4d = {
        'uWjYa': function(_0xab0053) {
            return _0xab0053();
        },
        'uXEJn': function(_0x264088, _0x3ba8e8, _0x5b6160) {
            return _0x264088(_0x3ba8e8, _0x5b6160);
        }
    };
    return new Promise(async _0x5c031b => {
        $['get'](_0xecfd4d['uXEJn'](taskUrl, 'user/StealMoney', 'strFriendId=' + _0x3c9d4e + '&dwSceneId=' + _0x3db5dc + '&sceneval=2'), async (_0x5313df, _0x4e362d, _0x37fe8a) => {
            try {
                const {
                    dwGetMoney,
                    iRet,
                    sErrMsg
                } = JSON['parse'](_0x37fe8a);
                $['log']('\n🤏偷取好友【' + _0x5207f9 + '】【' + _0x46fdf1 + '】财富值：¥ ' + (dwGetMoney ? dwGetMoney : sErrMsg) + '\x0a' + ($['showLog'] ? _0x37fe8a : ''));
            } catch (_0x24db20) {
                $['logErr'](_0x24db20, _0x4e362d);
            } finally {
                _0xecfd4d['uWjYa'](_0x5c031b);
            }
        });
    });
}
async function treasureHunt() {
    var _0x71fa61 = {
        'RwDCx': function(_0x280cab, _0x386c2a) {
            return _0x280cab > _0x386c2a;
        },
        'RUDbH': function(_0x239cbe, _0x19e0d3) {
            return _0x239cbe < _0x19e0d3;
        },
        'RPzlE': function(_0x387bc3, _0x2a12d7) {
            return _0x387bc3 / _0x2a12d7;
        },
        'eSGzV': function(_0x232113, _0x65a776) {
            return _0x232113 > _0x65a776;
        },
        'uZEXJ': function(_0x32e227, _0x36524f) {
            return _0x32e227 !== _0x36524f;
        },
        'Qrdfd': 'ehqDf',
        'SbPWD': function(_0x6f3c70, _0xd12520) {
            return _0x6f3c70(_0xd12520);
        },
        'cmZXv': 'cmYah',
        'gWAJt': 'lJxLp'
    };
    if (_0x71fa61['RwDCx']($['info']['dwXBRemainCnt'], 0x0)) {
        const _0x5ba339 = $['info']['XBDetail'];
        for (let _0x3923f9 = 0x0; _0x71fa61['RUDbH'](_0x3923f9, _0x5ba339['length']); _0x3923f9++) {
            const {
                ddwColdEndTm,
                strIndex
            } = _0x5ba339[_0x3923f9];
            const _0x4479c3 = Math['round'](_0x71fa61['RPzlE'](new Date(), 0x3e8));
            if (_0x71fa61['eSGzV'](_0x4479c3, ddwColdEndTm)) {
                if (_0x71fa61['uZEXJ'](_0x71fa61['Qrdfd'], _0x71fa61['Qrdfd'])) {
                    $['msg']($['name'], '', '' + $['result']['join']('\x0a'));
                } else {
                    await _0x71fa61['SbPWD'](doTreasureHunt, strIndex);
                    await $['wait'](0xbb8);
                }
            } else {
                if (_0x71fa61['uZEXJ'](_0x71fa61['cmZXv'], _0x71fa61['gWAJt'])) {
                    $['log']('\n🎁寻宝：宝藏冷却中，请等待冷却完毕');
                } else {
                    shareCodes = process['env']['JDCFD_SHARECODES']['split']('\x0a');
                }
            }
        }
    } else {
        $['log']('\n🎁寻宝：寻宝次数不足');
    }
}

function doTreasureHunt(_0x7c59b5) {
    var _0x323654 = {
        'AggQY': function(_0x114847) {
            return _0x114847();
        },
        'YYGHJ': 'ddwMoney',
        'dPlXM': function(_0x2b873c, _0x132b84) {
            return _0x2b873c(_0x132b84);
        },
        'rnobY': function(_0xe9049c, _0x53ac30) {
            return _0xe9049c === _0x53ac30;
        },
        'ipmNf': 'aLSWp',
        'EuneF': function(_0x3f0dfc, _0x3e2bdc) {
            return _0x3f0dfc || _0x3e2bdc;
        },
        'pvlyk': function(_0x100087, _0x566ed5) {
            return _0x100087 !== _0x566ed5;
        },
        'AhcQC': 'omoym',
        'xlOSD': 'hNEhK',
        'yawkL': 'EHNGz',
        'PYeeK': function(_0x207b9d, _0x53067a, _0x3da18f) {
            return _0x207b9d(_0x53067a, _0x3da18f);
        }
    };
    return new Promise(async _0x196eab => {
        var _0x205860 = {
            'crpXX': function(_0x268e55) {
                return _0x323654['AggQY'](_0x268e55);
            },
            'RUMZW': _0x323654['YYGHJ'],
            'maoLq': function(_0x179165, _0x4b1055) {
                return _0x323654['dPlXM'](_0x179165, _0x4b1055);
            },
            'WgzwG': function(_0x3ea8bb, _0x517a48) {
                return _0x323654['rnobY'](_0x3ea8bb, _0x517a48);
            },
            'iNLpW': _0x323654['ipmNf'],
            'vEgCy': function(_0x4bf83a, _0xbd7e40) {
                return _0x323654['EuneF'](_0x4bf83a, _0xbd7e40);
            },
            'aPeTR': function(_0x3f8db6, _0x5bc34d) {
                return _0x323654['pvlyk'](_0x3f8db6, _0x5bc34d);
            },
            'FMxms': _0x323654['AhcQC']
        };
        if (_0x323654['rnobY'](_0x323654['xlOSD'], _0x323654['yawkL'])) {
            _0x205860['crpXX'](_0x196eab);
        } else {
            $['get'](_0x323654['PYeeK'](taskUrl, 'consume/TreasureHunt', 'strIndex=' + _0x7c59b5 + '&dwIsShare=0'), async (_0x355ae8, _0x5c3a1a, _0x541b32) => {
                var _0x4f2eab = {
                    'NAfzS': _0x205860['RUMZW'],
                    'TMONZ': function(_0x37a768, _0x68d1a) {
                        return _0x205860['maoLq'](_0x37a768, _0x68d1a);
                    }
                };
                if (_0x205860['WgzwG'](_0x205860['iNLpW'], _0x205860['iNLpW'])) {
                    try {
                        const {
                            iRet,
                            dwExpericnce,
                            sErrMsg
                        } = JSON['parse'](_0x541b32);
                        $['log']('\x0a【' + _0x7c59b5 + '】🎁寻宝：' + sErrMsg + ' ，获取随机奖励：¥ ' + _0x205860['vEgCy'](dwExpericnce, 0x0) + ' \x0a' + ($['showLog'] ? _0x541b32 : ''));
                        _0x205860['maoLq'](_0x196eab, iRet);
                    } catch (_0x5f3fe8) {
                        if (_0x205860['aPeTR'](_0x205860['FMxms'], _0x205860['FMxms'])) {
                            _0x541b32 = JSON['parse'](_0x541b32);
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
                            } = _0x541b32;
                            $['log']('\n获取用户信息：' + sErrMsg + '\x0a' + ($['showLog'] ? _0x541b32 : ''));
                            $['log']('\n当前等级:' + dwLevel + ',财富值:' + _0x541b32[_0x4f2eab['NAfzS']] + '\x0a');
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
                            _0x4f2eab['TMONZ'](_0x196eab, {
                                'SceneList': SceneList,
                                'XBDetail': XBDetail,
                                'dwXBRemainCnt': dwXBRemainCnt,
                                'ddwMoney': ddwMoney,
                                'dwIsNewUser': dwIsNewUser,
                                'strMyShareId': strMyShareId,
                                'strPin': strPin
                            });
                        } else {
                            $['logErr'](_0x5f3fe8, _0x5c3a1a);
                        }
                    } finally {
                        _0x205860['crpXX'](_0x196eab);
                    }
                } else {
                    _0x4f2eab['TMONZ'](_0x196eab, JSON['parse'](_0x541b32));
                }
            });
        }
    });
}

function getTaskList(_0xa9a83e) {
    var _0x975545 = {
        'igyER': function(_0x334690, _0x290fd8) {
            return _0x334690 === _0x290fd8;
        },
        'wvEIR': 'bOUKJ',
        'QrGhB': function(_0xe134ac) {
            return _0xe134ac();
        },
        'Bbksz': function(_0xa65b46, _0x566aa1) {
            return _0xa65b46(_0x566aa1);
        },
        'erhmm': function(_0x42ca85, _0x1eafe4) {
            return _0x42ca85 !== _0x1eafe4;
        },
        'zPqmp': 'ilvSU',
        'DLGbR': 'JeHKh',
        'RjjfX': function(_0x2f998f, _0x1482f4) {
            return _0x2f998f !== _0x1482f4;
        },
        'vVuhD': 'qSkuv',
        'dPwai': 'gYssI',
        'ChfdM': function(_0x329b06) {
            return _0x329b06();
        },
        'Ekteb': '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取',
        'zkYFs': 'https://bean.m.jd.com/bean/signIndex.action',
        'yftBH': 'GetUserTaskStatusList',
        'UeskD': function(_0x517709, _0x513861) {
            return _0x517709(_0x513861);
        },
        'qUfrH': 'consume/AchieveInfo'
    };
    return new Promise(async _0x135329 => {
        var _0x4460ad = {
            'mHrZq': function(_0x194e65, _0x48ecb8) {
                return _0x975545['Bbksz'](_0x194e65, _0x48ecb8);
            },
            'lYKDK': function(_0x8bc870) {
                return _0x975545['QrGhB'](_0x8bc870);
            },
            'FRulY': function(_0x2d402f, _0x41c37a) {
                return _0x975545['erhmm'](_0x2d402f, _0x41c37a);
            },
            'MdnBw': _0x975545['zPqmp'],
            'EHIwr': _0x975545['DLGbR'],
            'soOgY': function(_0x2dd491, _0x4b9803) {
                return _0x975545['RjjfX'](_0x2dd491, _0x4b9803);
            },
            'haYbP': _0x975545['vVuhD'],
            'bbnjw': _0x975545['dPwai'],
            'cgsoP': function(_0x712eb2) {
                return _0x975545['ChfdM'](_0x712eb2);
            },
            'QJpIX': _0x975545['Ekteb'],
            'uIdni': _0x975545['zkYFs']
        };
        switch (_0xa9a83e) {
            case 0x0:
                $['get'](_0x975545['Bbksz'](taskListUrl, _0x975545['yftBH']), async (_0x3b36ec, _0x34dfd0, _0x4fb22a) => {
                    try {
                        if (_0x4460ad['FRulY'](_0x4460ad['MdnBw'], _0x4460ad['EHIwr'])) {
                            const {
                                ret,
                                data: {
                                    userTaskStatusList = []
                                } = {},
                                msg
                            } = JSON['parse'](_0x4fb22a);
                            $['allTask'] = userTaskStatusList['filter'](_0x57dcb6 => _0x57dcb6['awardStatus'] !== 0x1);
                            $['log']('\n获取【📆日常任务】列表 ' + msg + '，总共' + $['allTask']['length'] + '个任务！\n' + ($['showLog'] ? _0x4fb22a : ''));
                        } else {
                            $['logErr'](e, _0x34dfd0);
                        }
                    } catch (_0x10e503) {
                        if (_0x4460ad['soOgY'](_0x4460ad['haYbP'], _0x4460ad['bbnjw'])) {
                            $['logErr'](_0x10e503, _0x34dfd0);
                        } else {
                            try {
                                const {
                                    sErrMsg
                                } = JSON['parse'](_0x4fb22a);
                                $['log']('\n【🏝寻宝大作战】' + sErrMsg + '\x0a' + ($['showLog'] ? _0x4fb22a : ''));
                                _0x4460ad['mHrZq'](_0x135329, 0x0);
                            } catch (_0x3d396e) {
                                $['logErr'](_0x3d396e, _0x34dfd0);
                            } finally {
                                _0x4460ad['lYKDK'](_0x135329);
                            }
                        }
                    } finally {
                        _0x4460ad['cgsoP'](_0x135329);
                    }
                });
                break;
            case 0x1:
                $['get'](_0x975545['UeskD'](taskUrl, _0x975545['qUfrH']), async (_0x2735f5, _0x1162ed, _0x57d4fc) => {
                    try {
                        const {
                            iRet,
                            sErrMsg,
                            taskinfo = []
                        } = JSON['parse'](_0x57d4fc);
                        $['allTask'] = taskinfo['filter'](_0x62f256 => _0x62f256['dwAwardStatus'] === 0x1);
                        $['log']('\n获取【🎖成就任务】列表 ' + sErrMsg + '，总共' + $['allTask']['length'] + '个任务！\n' + ($['showLog'] ? _0x57d4fc : ''));
                    } catch (_0xeca263) {
                        $['logErr'](_0xeca263, _0x1162ed);
                    } finally {
                        if (_0x975545['igyER'](_0x975545['wvEIR'], _0x975545['wvEIR'])) {
                            _0x975545['QrGhB'](_0x135329);
                        } else {
                            $['msg']($['name'], _0x4460ad['QJpIX'], _0x4460ad['uIdni'], {
                                'open-url': _0x4460ad['uIdni']
                            });
                            return;
                        }
                    }
                });
                break;
            default:
                break;
        }
    });
}

function browserTask(_0x58896b) {
    var _0x51a617 = {
        'gTMqJ': function(_0x15a98b) {
            return _0x15a98b();
        },
        'wNICJ': function(_0x3b95ed, _0x2b2b31) {
            return _0x3b95ed !== _0x2b2b31;
        },
        'JDOKh': 'GZDxA',
        'VuvXt': 'ILXBT',
        'yEvaa': function(_0x47a721, _0x45b571) {
            return _0x47a721 < _0x45b571;
        },
        'BIWBR': function(_0x23818b, _0xed23cb) {
            return _0x23818b + _0xed23cb;
        },
        'iFDcW': function(_0x25e430, _0x225735) {
            return _0x25e430 < _0x225735;
        },
        'xwhKt': function(_0x3df4cc, _0x10d4f6) {
            return _0x3df4cc(_0x10d4f6);
        },
        'QmgNs': function(_0x1900c0, _0x4e2e0d, _0x1784ca) {
            return _0x1900c0(_0x4e2e0d, _0x1784ca);
        },
        'upMnC': function(_0x3d30f8, _0x4dfe36) {
            return _0x3d30f8 + _0x4dfe36;
        },
        'hwgDc': 'zaXia',
        'zCzNL': 'ptUux',
        'KbTyT': function(_0x399838, _0x57c8b5) {
            return _0x399838 + _0x57c8b5;
        },
        'aguiv': function(_0x5a9c13, _0x3ff7b4) {
            return _0x5a9c13 === _0x3ff7b4;
        },
        'FEVDz': function(_0x324c6d, _0x46e3a3) {
            return _0x324c6d !== _0x46e3a3;
        },
        'YPxxC': 'tJHih',
        'fnFGm': 'YXBbD',
        'AFwde': 'GEVaK',
        'OFumT': function(_0x8f610c, _0x48a2aa, _0x110052) {
            return _0x8f610c(_0x48a2aa, _0x110052);
        },
        'opCkm': function(_0x2a17de) {
            return _0x2a17de();
        }
    };
    return new Promise(async _0x28070d => {
        var _0x59d08c = {
            'SdhLO': function(_0x53febd) {
                return _0x51a617['gTMqJ'](_0x53febd);
            }
        };
        if (_0x51a617['wNICJ'](_0x51a617['JDOKh'], _0x51a617['VuvXt'])) {
            switch (_0x58896b) {
                case 0x0:
                    const _0x316a39 = Math['max'](...[...$['allTask']]['map'](_0x7300a3 => _0x7300a3['configTargetTimes']));
                    for (let _0x13515d = 0x0; _0x51a617['yEvaa'](_0x13515d, $['allTask']['length']); _0x13515d++) {
                        const _0x895939 = $['allTask'][_0x13515d];
                        $['log']('\n开始第' + _0x51a617['BIWBR'](_0x13515d, 0x1) + '个【📆日常任务】：' + _0x895939['taskName']);
                        const _0x1e171a = [!![], !![]];
                        for (let _0x13515d = 0x0; _0x51a617['iFDcW'](_0x13515d, _0x316a39); _0x13515d++) {
                            await $['wait'](0x1f4);
                            if (_0x1e171a[0x0]) {
                                _0x1e171a[0x0] = await _0x51a617['xwhKt'](doTask, _0x895939);
                            }
                            await $['wait'](0x1f4);
                            if (_0x1e171a[0x1]) {
                                _0x1e171a[0x1] = await _0x51a617['QmgNs'](awardTask, 0x0, _0x895939);
                            }
                            if (!_0x1e171a[0x0] && !_0x1e171a[0x1]) {
                                break;
                            }
                        }
                        $['log']('\n结束第' + _0x51a617['upMnC'](_0x13515d, 0x1) + '个【📆日常任务】：' + _0x895939['taskName'] + '\x0a');
                    }
                    break;
                case 0x1:
                    for (let _0x2a8559 = 0x0; _0x51a617['iFDcW'](_0x2a8559, $['allTask']['length']); _0x2a8559++) {
                        if (_0x51a617['wNICJ'](_0x51a617['hwgDc'], _0x51a617['zCzNL'])) {
                            const _0x895939 = $['allTask'][_0x2a8559];
                            $['log']('\n开始第' + _0x51a617['KbTyT'](_0x2a8559, 0x1) + '个【🎖成就任务】：' + _0x895939['strTaskDescr']);
                            if (_0x51a617['aguiv'](_0x895939['dwAwardStatus'], '0')) {
                                if (_0x51a617['FEVDz'](_0x51a617['YPxxC'], _0x51a617['fnFGm'])) {
                                    $['log']('\x0a' + _0x895939['strTaskDescr'] + '【领成就奖励】：该成就任务未达到门槛}');
                                } else {
                                    console['log']('财富岛好友互助码每次运行都变化,旧的可继续使用');
                                    $['log']('\n【京东账号' + $['index'] + '（' + $['UserName'] + '）的' + $['name'] + '好友互助码】' + strMyShareId + '\x0a\x0a');
                                }
                            } else {
                                if (_0x51a617['aguiv'](_0x51a617['AFwde'], _0x51a617['AFwde'])) {
                                    await $['wait'](0x1f4);
                                    await _0x51a617['OFumT'](awardTask, 0x1, _0x895939);
                                } else {
                                    $['logErr'](e, resp);
                                }
                            }
                            $['log']('\n结束第' + _0x51a617['KbTyT'](_0x2a8559, 0x1) + '个【🎖成就任务】：' + _0x895939['strTaskDescr'] + '\x0a');
                        } else {
                            _0x59d08c['SdhLO'](_0x28070d);
                        }
                    }
                    break;
                default:
                    break;
            }
            _0x51a617['opCkm'](_0x28070d);
        } else {
            $['log']('\x0a' + taskinfo['strTaskDescr'] + '【领成就奖励】：该成就任务未达到门槛}');
        }
    });
}

function doTask(_0x29fc0b) {
    var _0x3da4ee = {
        'ajbcm': function(_0x505860, _0x593d2e) {
            return _0x505860 !== _0x593d2e;
        },
        'bJbOF': '活动太火爆了',
        'lsHHp': '任务进行中或者未到任务时间',
        'xOckF': function(_0x34fe31, _0x2d5f6c) {
            return _0x34fe31(_0x2d5f6c);
        },
        'SPerP': function(_0x16580a, _0x310715) {
            return _0x16580a === _0x310715;
        },
        'pJhHn': function(_0xa6d23a) {
            return _0xa6d23a();
        },
        'nTcPO': 'retcode',
        'zETYE': function(_0x24b14d, _0x53285e) {
            return _0x24b14d === _0x53285e;
        },
        'wwGMs': 'base',
        'uVDbd': 'LyjRa',
        'bfaCp': 'UBZsW',
        'gYXfr': function(_0x2c3168, _0x1f5694) {
            return _0x2c3168 >= _0x1f5694;
        },
        'xNvpp': function(_0x1155d9, _0x3fc746) {
            return _0x1155d9(_0x3fc746);
        },
        'HLnna': function(_0x108547, _0x3554ab, _0x23ce94) {
            return _0x108547(_0x3554ab, _0x23ce94);
        }
    };
    return new Promise(async _0x16be0c => {
        var _0x2172ac = {
            'zICzW': function(_0x582983, _0x421135) {
                return _0x3da4ee['ajbcm'](_0x582983, _0x421135);
            },
            'RjJxD': _0x3da4ee['bJbOF'],
            'pbNfR': _0x3da4ee['lsHHp'],
            'aiaFt': function(_0x1c92ef, _0x13060f) {
                return _0x3da4ee['xOckF'](_0x1c92ef, _0x13060f);
            },
            'eWlia': function(_0x239443, _0x39e6d8) {
                return _0x3da4ee['SPerP'](_0x239443, _0x39e6d8);
            },
            'PqEvf': function(_0x2f042e) {
                return _0x3da4ee['pJhHn'](_0x2f042e);
            },
            'zrzRJ': _0x3da4ee['nTcPO'],
            'OQVGe': function(_0x474fea, _0xb364e5) {
                return _0x3da4ee['zETYE'](_0x474fea, _0xb364e5);
            },
            'cGkNP': _0x3da4ee['wwGMs']
        };
        if (_0x3da4ee['ajbcm'](_0x3da4ee['uVDbd'], _0x3da4ee['bfaCp'])) {
            const {
                taskId,
                completedTimes,
                configTargetTimes,
                taskName
            } = _0x29fc0b;
            if (_0x3da4ee['gYXfr'](_0x3da4ee['xOckF'](parseInt, completedTimes), _0x3da4ee['xOckF'](parseInt, configTargetTimes))) {
                _0x3da4ee['xNvpp'](_0x16be0c, ![]);
                $['log']('\x0a' + taskName + '【做日常任务】： mission success');
                return;
            }
            $['get'](_0x3da4ee['HLnna'](taskListUrl, 'DoTask', 'taskId=' + taskId), (_0x142fee, _0x50278f, _0x42a283) => {
                try {
                    const {
                        msg,
                        ret
                    } = JSON['parse'](_0x42a283);
                    $['log']('\x0a' + taskName + '【做日常任务】：' + (_0x2172ac['zICzW'](msg['indexOf'](_0x2172ac['RjJxD']), -0x1) ? _0x2172ac['pbNfR'] : msg) + '\x0a' + ($['showLog'] ? _0x42a283 : ''));
                    _0x2172ac['aiaFt'](_0x16be0c, _0x2172ac['eWlia'](ret, 0x0));
                } catch (_0x258381) {
                    $['logErr'](_0x258381, _0x50278f);
                } finally {
                    _0x2172ac['PqEvf'](_0x16be0c);
                }
            });
        } else {
            data = JSON['parse'](data);
            if (_0x2172ac['eWlia'](data[_0x2172ac['zrzRJ']], 0xd)) {
                $['isLogin'] = ![];
                return;
            }
            if (_0x2172ac['OQVGe'](data[_0x2172ac['zrzRJ']], 0x0)) {
                $['nickName'] = data[_0x2172ac['cGkNP']] && data[_0x2172ac['cGkNP']]['nickname'] || $['UserName'];
            } else {
                $['nickName'] = $['UserName'];
            }
        }
    });
}

function awardTask(_0x685c9, _0x3b208a) {
    var _0x189105 = {
        'pzKDR': function(_0x1e6ab9, _0x47c70e) {
            return _0x1e6ab9 == _0x47c70e;
        },
        'HvOpq': 'success',
        'NHwqD': function(_0x981301, _0xf5b0d4) {
            return _0x981301 || _0xf5b0d4;
        },
        'JANHy': function(_0x123588) {
            return _0x123588();
        },
        'YGYvo': function(_0x29d914, _0x82651c) {
            return _0x29d914 !== _0x82651c;
        },
        'aKvnj': '活动太火爆了',
        'OfigU': '任务为成就任务或者未到任务时间',
        'JoAgC': function(_0x4e92b3, _0x4c741b) {
            return _0x4e92b3 !== _0x4c741b;
        },
        'sreEA': 'deDGw',
        'fhXoc': 'qdSLj',
        'aGesP': function(_0x28887e, _0x366c69) {
            return _0x28887e + _0x366c69;
        },
        'BNOXu': function(_0x11f250, _0x262a94) {
            return _0x11f250(_0x262a94);
        },
        'oGEof': function(_0x3d77fb, _0x2379dd) {
            return _0x3d77fb === _0x2379dd;
        },
        'zOGni': 'dMlvK',
        'NNOkn': 'SxDeC',
        'DrOdk': function(_0x547150, _0x1498e1) {
            return _0x547150 === _0x1498e1;
        },
        'PssZn': 'kuikz',
        'nzzUS': function(_0x11dbc7) {
            return _0x11dbc7();
        },
        'EklOL': function(_0x5db567, _0x104ad9) {
            return _0x5db567 === _0x104ad9;
        },
        'qedyz': 'ItENq',
        'kVJMA': function(_0x1a6271, _0x20812f, _0x3be1b1) {
            return _0x1a6271(_0x20812f, _0x3be1b1);
        },
        'SGHAt': function(_0x1d916e, _0x4844e4, _0xde9a39) {
            return _0x1d916e(_0x4844e4, _0xde9a39);
        }
    };
    return new Promise(_0x1e5e31 => {
        var _0x4e051f = {
            'WoXVt': function(_0xbcafcf, _0x2c0779) {
                return _0x189105['EklOL'](_0xbcafcf, _0x2c0779);
            },
            'xmrpb': _0x189105['qedyz'],
            'CIXhU': function(_0xc2933f) {
                return _0x189105['nzzUS'](_0xc2933f);
            }
        };
        switch (_0x685c9) {
            case 0x0:
                const {
                    taskId, taskName
                } = _0x3b208a;
                $['get'](_0x189105['kVJMA'](taskListUrl, 'Award', 'taskId=' + taskId), (_0x36102e, _0x21553a, _0x455b80) => {
                    var _0x503a8e = {
                        'DFlYn': function(_0x4157e7, _0x548f6c) {
                            return _0x189105['pzKDR'](_0x4157e7, _0x548f6c);
                        },
                        'uTUcV': _0x189105['HvOpq'],
                        'DkZWS': function(_0x1f3703, _0x5efb4f) {
                            return _0x189105['NHwqD'](_0x1f3703, _0x5efb4f);
                        },
                        'sAEkY': function(_0x5443e5) {
                            return _0x189105['JANHy'](_0x5443e5);
                        }
                    };
                    try {
                        const {
                            msg,
                            ret,
                            data: {
                                prizeInfo = ''
                            } = {}
                        } = JSON['parse'](_0x455b80);
                        let _0x52621a = '';
                        if (_0x189105['YGYvo'](msg['indexOf'](_0x189105['aKvnj']), -0x1)) {
                            _0x52621a = _0x189105['OfigU'];
                        } else {
                            if (_0x189105['JoAgC'](_0x189105['sreEA'], _0x189105['fhXoc'])) {
                                _0x52621a = _0x189105['aGesP'](msg, prizeInfo) ? ' 获得财富值 ¥ ' + JSON['parse'](prizeInfo)['ddwMoney'] : '';
                            } else {
                                $['logErr'](e, _0x21553a);
                            }
                        }
                        $['log']('\x0a' + taskName + '【领日常奖励】：' + _0x52621a + '\x0a' + ($['showLog'] ? _0x455b80 : ''));
                        _0x189105['BNOXu'](_0x1e5e31, _0x189105['oGEof'](ret, 0x0));
                    } catch (_0x481e60) {
                        if (_0x189105['oGEof'](_0x189105['zOGni'], _0x189105['NNOkn'])) {
                            try {
                                const {
                                    iRet,
                                    dwMoney,
                                    sErrMsg,
                                    strPin
                                } = JSON['parse'](_0x455b80);
                                $['log']('\x0a【' + sceneList[_key]['strSceneName'] + '】👬好友: ' + (_0x503a8e['DFlYn'](sErrMsg, _0x503a8e['uTUcV']) ? '获取超级助力财富值：¥ ' + _0x503a8e['DkZWS'](dwMoney, 0x0) : sErrMsg) + ' \x0a' + ($['showLog'] ? _0x455b80 : ''));
                            } catch (_0x12a1f0) {
                                $['logErr'](_0x12a1f0, _0x21553a);
                            } finally {
                                _0x503a8e['sAEkY'](_0x1e5e31);
                            }
                        } else {
                            $['logErr'](_0x481e60, _0x21553a);
                        }
                    } finally {
                        if (_0x189105['DrOdk'](_0x189105['PssZn'], _0x189105['PssZn'])) {
                            _0x189105['nzzUS'](_0x1e5e31);
                        } else {
                            $['logErr'](e, _0x21553a);
                        }
                    }
                });
                break;
            case 0x1:
                const {
                    strTaskIndex, strTaskDescr
                } = _0x3b208a;
                $['get'](_0x189105['SGHAt'](taskUrl, 'consume/AchieveAward', 'strTaskIndex=' + strTaskIndex), (_0x49a6db, _0x5e2d22, _0xfa5e56) => {
                    if (_0x4e051f['WoXVt'](_0x4e051f['xmrpb'], _0x4e051f['xmrpb'])) {
                        try {
                            const {
                                iRet,
                                sErrMsg,
                                dwExpericnce
                            } = JSON['parse'](_0xfa5e56);
                            $['log']('\x0a' + strTaskDescr + '【领成就奖励】： success 获得财富值：¥ ' + dwExpericnce + '\x0a' + ($['showLog'] ? _0xfa5e56 : ''));
                        } catch (_0x7444e3) {
                            $['logErr'](_0x7444e3, _0x5e2d22);
                        } finally {
                            _0x4e051f['CIXhU'](_0x1e5e31);
                        }
                    } else {
                        $['log']('\n🎁寻宝：宝藏冷却中，请等待冷却完毕');
                    }
                });
                break;
            default:
                break;
        }
    });
}

function funCenterState() {
    var _0x1c72c0 = {
        'VzrzZ': function(_0x1ac0ec) {
            return _0x1ac0ec();
        },
        'jlrDE': '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie',
        'ZaNju': function(_0x307513, _0x18ed44) {
            return _0x307513(_0x18ed44);
        },
        'LawMe': 'api.m.jd.com',
        'ikoEl': 'application/json, text/plain, */*',
        'MqoNr': 'https://h5.m.jd.com',
        'UFNue': 'jdapp;iPhone;9.3.5;14.2;53f4d9c70c1c81f1c8769d2fe2fef0190a3f60d2;network/wifi;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone10,2;addressid/137923973;supportBestPay/0;appBuild/167515;jdSupportDarkMode/0;pv/2217.74;apprpd/MyJD_PersonalSpace;ref/MySpace;psq/8;ads/;psn/53f4d9c70c1c81f1c8769d2fe2fef0190a3f60d2|8703;jdv/0|kong|t_1000170135|tuiguang|notset|1610674234917|1610674234;adk/;app_device/IOS;pap/JA2015_311210|9.3.5|IOS 14.2;Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
        'QrvES': 'zh-cn',
        'YSFec': 'https://h5.m.jd.com/babelDiy/Zeus/25C6dc6HY6if6DT7e58A1pi2Vxe4/index.html?activityId=73cf1fe89d33433d9cc8688d1892d432&assistId=R2u2OCB9eEbcCVB_CiVKhg',
        'viiZP': function(_0x345099, _0x16192b) {
            return _0x345099 === _0x16192b;
        },
        'ZZNOP': 'RUIFz',
        'xsdhu': function(_0x283f42, _0x5ada3a) {
            return _0x283f42 == _0x5ada3a;
        },
        'iQSTz': function(_0xfb76b5, _0x567839, _0x38aea7, _0x1e1175) {
            return _0xfb76b5(_0x567839, _0x38aea7, _0x1e1175);
        },
        'NqTOA': function(_0x1d20c2, _0x7dd810) {
            return _0x1d20c2 !== _0x7dd810;
        },
        'sAEEu': 'zIDdp',
        'Xyzrk': function(_0x52f2f1) {
            return _0x52f2f1();
        },
        'aCdyN': 'ynESd',
        'iCxxn': function(_0x31aa80, _0x220690, _0x510d83) {
            return _0x31aa80(_0x220690, _0x510d83);
        }
    };
    return new Promise(_0x3c3ea3 => {
        var _0x2af08c = {
            'hiSfE': _0x1c72c0['jlrDE'],
            'dXQUm': function(_0x59a774, _0x58be78) {
                return _0x1c72c0['ZaNju'](_0x59a774, _0x58be78);
            },
            'AdHZm': _0x1c72c0['LawMe'],
            'BKnoY': _0x1c72c0['ikoEl'],
            'MVOvA': _0x1c72c0['MqoNr'],
            'TaLcY': _0x1c72c0['UFNue'],
            'eFYZt': _0x1c72c0['QrvES'],
            'gcFlK': _0x1c72c0['YSFec'],
            'Haaxk': function(_0x8d4abe, _0x38cbf2) {
                return _0x1c72c0['viiZP'](_0x8d4abe, _0x38cbf2);
            },
            'trtTK': _0x1c72c0['ZZNOP'],
            'Crdsh': function(_0x5b9fe0, _0x4ac117) {
                return _0x1c72c0['xsdhu'](_0x5b9fe0, _0x4ac117);
            },
            'skokL': function(_0x381bd2, _0x5d0583, _0x1d70bd, _0x5be6fe) {
                return _0x1c72c0['iQSTz'](_0x381bd2, _0x5d0583, _0x1d70bd, _0x5be6fe);
            },
            'EkhiR': function(_0x2ef55c, _0x30a2b0) {
                return _0x1c72c0['NqTOA'](_0x2ef55c, _0x30a2b0);
            },
            'VnFfd': _0x1c72c0['sAEEu'],
            'OcKGB': function(_0x31d972) {
                return _0x1c72c0['Xyzrk'](_0x31d972);
            }
        };
        if (_0x1c72c0['viiZP'](_0x1c72c0['aCdyN'], _0x1c72c0['aCdyN'])) {
            $['get'](_0x1c72c0['iCxxn'](taskUrl, 'consume/FunCenterState', 'strType=1'), async (_0x2fdfd3, _0x489ae2, _0x4f6442) => {
                var _0x2ec5bf = {
                    'FrctK': _0x2af08c['hiSfE'],
                    'icpQJ': function(_0x56c74f, _0x29d869) {
                        return _0x2af08c['dXQUm'](_0x56c74f, _0x29d869);
                    },
                    'Uojjk': _0x2af08c['AdHZm'],
                    'stbpO': _0x2af08c['BKnoY'],
                    'qLYoa': _0x2af08c['MVOvA'],
                    'xGtat': _0x2af08c['TaLcY'],
                    'eaYqF': _0x2af08c['eFYZt'],
                    'BZvjn': _0x2af08c['gcFlK']
                };
                try {
                    if (_0x2af08c['Haaxk'](_0x2af08c['trtTK'], _0x2af08c['trtTK'])) {
                        const {
                            SlotMachine: {
                                ddwConfVersion,
                                dwFreeCount,
                                strCouponPool,
                                strGoodsPool
                            } = {},
                            iRet,
                            sErrMsg
                        } = JSON['parse'](_0x4f6442);
                        if (_0x2af08c['Crdsh'](dwFreeCount, 0x1)) {
                            await $['wait'](0x1f4);
                            await _0x2af08c['skokL'](soltMachine, strCouponPool, strGoodsPool, ddwConfVersion);
                        }
                    } else {
                        try {
                            return JSON['parse'](str);
                        } catch (_0x25ebdc) {
                            console['log'](_0x25ebdc);
                            $['msg']($['name'], '', _0x2ec5bf['FrctK']);
                            return [];
                        }
                    }
                } catch (_0x2b03cc) {
                    if (_0x2af08c['EkhiR'](_0x2af08c['VnFfd'], _0x2af08c['VnFfd'])) {
                        const _0x30ff76 = {
                            'url': 'https://api.m.jd.com/client.action?clientVersion=9.3.5&client=wh5&functionId=smtfission_assist&appid=smtFission&body=' + _0x2ec5bf['icpQJ'](escape, JSON['stringify'](vo)),
                            'headers': {
                                'Host': _0x2ec5bf['Uojjk'],
                                'accept': _0x2ec5bf['stbpO'],
                                'origin': _0x2ec5bf['qLYoa'],
                                'user-agent': _0x2ec5bf['xGtat'],
                                'accept-language': _0x2ec5bf['eaYqF'],
                                'referer': _0x2ec5bf['BZvjn'],
                                'Cookie': cookie
                            },
                            'timeout': 0x2710
                        };
                        $['get'](_0x30ff76);
                    } else {
                        $['logErr'](_0x2b03cc, _0x489ae2);
                    }
                } finally {
                    _0x2af08c['OcKGB'](_0x3c3ea3);
                }
            });
        } else {
            _0x1c72c0['VzrzZ'](_0x3c3ea3);
        }
    });
}

function soltMachine(_0x2f0df6, _0x4ac0ac, _0xe41967) {
    var _0x2548ef = {
        'DQUkl': function(_0x2eb6d9, _0x274533) {
            return _0x2eb6d9 * _0x274533;
        },
        'vfvLP': function(_0x4a983a, _0x285c69) {
            return _0x4a983a + _0x285c69;
        },
        'wMiSb': function(_0x4df3e7, _0x1acea0) {
            return _0x4df3e7 !== _0x1acea0;
        },
        'OKQwY': 'FAWmQ',
        'hWjKK': 'PxmRx',
        'Wvglt': 'ZThDd',
        'ACxMs': 'zKzoD',
        'JOZiZ': function(_0x53704d, _0x4fd0df) {
            return _0x53704d != _0x4fd0df;
        },
        'GQbKs': '未中奖',
        'ZmdYZ': function(_0x4a9bd1) {
            return _0x4a9bd1();
        },
        'wZTRk': function(_0x5baf58, _0x2295a3) {
            return _0x5baf58 == _0x2295a3;
        },
        'NHvpM': 'success',
        'KFghT': function(_0x476ca3, _0x58e4bb) {
            return _0x476ca3 || _0x58e4bb;
        },
        'DUHgT': function(_0x409af7, _0x22ac4b, _0x1304fb) {
            return _0x409af7(_0x22ac4b, _0x1304fb);
        }
    };
    return new Promise(_0x2ef2ad => {
        var _0x2065ef = {
            'VoWHX': function(_0x34587e, _0x1ec097) {
                return _0x2548ef['wZTRk'](_0x34587e, _0x1ec097);
            },
            'hNjEJ': _0x2548ef['NHvpM'],
            'EXeUH': function(_0x354d40, _0x5e6cb8) {
                return _0x2548ef['KFghT'](_0x354d40, _0x5e6cb8);
            }
        };
        $['get'](_0x2548ef['DUHgT'](taskUrl, 'consume/SlotMachine', 'strCouponPool=' + _0x2f0df6 + '&strGoodsPool=' + _0x4ac0ac + '&ddwConfVersion=' + _0xe41967), async (_0x469f43, _0x78c339, _0xdfeb45) => {
            var _0x259683 = {
                'Wcksf': function(_0x5b6ba4, _0x5565cf) {
                    return _0x2548ef['DQUkl'](_0x5b6ba4, _0x5565cf);
                },
                'TBKFK': function(_0x30f57c, _0xcf3a8) {
                    return _0x2548ef['vfvLP'](_0x30f57c, _0xcf3a8);
                }
            };
            if (_0x2548ef['wMiSb'](_0x2548ef['OKQwY'], _0x2548ef['hWjKK'])) {
                try {
                    if (_0x2548ef['wMiSb'](_0x2548ef['Wvglt'], _0x2548ef['ACxMs'])) {
                        const {
                            iRet,
                            sErrMsg,
                            strAwardPoolName
                        } = JSON['parse'](_0xdfeb45);
                        $['log']('\n【抽奖结果】🎰 ' + (_0x2548ef['JOZiZ'](strAwardPoolName, '') ? _0x2548ef['GQbKs'] : strAwardPoolName) + ' \x0a' + ($['showLog'] ? _0xdfeb45 : ''));
                    } else {
                        const {
                            iRet,
                            dwMoney,
                            sErrMsg
                        } = JSON['parse'](_0xdfeb45);
                        $['log']('\x0a【' + sceneList[_key]['strSceneName'] + '】🏝岛主 : ' + (_0x2065ef['VoWHX'](sErrMsg, _0x2065ef['hNjEJ']) ? '获取财富值：¥ ' + _0x2065ef['EXeUH'](dwMoney, 0x0) : sErrMsg) + ' \x0a' + ($['showLog'] ? _0xdfeb45 : ''));
                    }
                } catch (_0x4f122e) {
                    $['logErr'](_0x4f122e, _0x78c339);
                } finally {
                    _0x2548ef['ZmdYZ'](_0x2ef2ad);
                }
            } else {
                index = Math['floor'](_0x259683['Wcksf'](_0x259683['TBKFK'](i, 0x1), Math['random']()));
                temp = shuffled[index];
                shuffled[index] = shuffled[i];
                shuffled[i] = temp;
            }
        });
    });
}

function createAssistUser(_0x1b2690) {
    var _0x235534 = {
        'lYWUI': function(_0x4502a6, _0x183ccf) {
            return _0x4502a6 !== _0x183ccf;
        },
        'rJqlF': 'XqKrH',
        'RcUDr': function(_0x291973, _0x2c6522) {
            return _0x291973 === _0x2c6522;
        },
        'TtJUX': function(_0x3ea94d) {
            return _0x3ea94d();
        },
        'MFHKd': function(_0x5d7362) {
            return _0x5d7362();
        },
        'EzsNB': function(_0x406afb, _0x4d22ab, _0x4ff4f4) {
            return _0x406afb(_0x4d22ab, _0x4ff4f4);
        },
        'Hfosa': 'user/JoinScene',
        'mRWoC': function(_0x26caed, _0x1a5f7c) {
            return _0x26caed(_0x1a5f7c);
        }
    };
    return new Promise(_0x194abe => {
        var _0x3e2f52 = {
            'KpWOQ': function(_0x264b79) {
                return _0x235534['MFHKd'](_0x264b79);
            }
        };
        $['get'](_0x235534['EzsNB'](taskUrl, _0x235534['Hfosa'], 'strShareId=' + _0x235534['mRWoC'](escape, _0x1b2690) + '&dwSceneId=1001'), async (_0x4974cf, _0x2ca3ae, _0x3f189a) => {
            if (_0x235534['lYWUI'](_0x235534['rJqlF'], _0x235534['rJqlF'])) {
                _0x3e2f52['KpWOQ'](_0x194abe);
            } else {
                try {
                    console['log']('\n普通助力(招工)结果:' + _0x3f189a);
                    const {
                        iRet
                    } = JSON['parse'](_0x3f189a);
                    if (_0x235534['RcUDr'](iRet, 0x7d5) || _0x235534['RcUDr'](iRet, 0x270f)) $['canHelp'] = ![];
                } catch (_0x1a6818) {} finally {
                    _0x235534['TtJUX'](_0x194abe);
                }
            }
        });
    });
}

function createSuperAssistUser(_0x51c608) {
    var _0x22f4ba = {
        'mQMCd': function(_0x22d728, _0x51db86) {
            return _0x22d728 === _0x51db86;
        },
        'aBmPg': 'oHpor',
        'fyovP': 'bSxTI',
        'WFOoE': function(_0x1e3f56, _0x33d3c0) {
            return _0x1e3f56 === _0x33d3c0;
        },
        'LvIUZ': function(_0x550bd7) {
            return _0x550bd7();
        },
        'wCvES': function(_0x46b7f9, _0x26114, _0x495c04) {
            return _0x46b7f9(_0x26114, _0x495c04);
        },
        'KFMCy': 'user/JoinScene',
        'osRaY': 'timestamp',
        'hlJKV': 'phoneid',
        'HZCSz': 'farm_jstoken',
        'oOygW': function(_0x2ec88b, _0x141d5a) {
            return _0x2ec88b(_0x141d5a);
        }
    };
    return new Promise(_0x5a9645 => {
        var _0x22c7db = {
            'DByuq': function(_0x52717b, _0x184b14) {
                return _0x22f4ba['mQMCd'](_0x52717b, _0x184b14);
            },
            'PeXDi': _0x22f4ba['aBmPg'],
            'uAsCH': _0x22f4ba['fyovP'],
            'UZdvf': function(_0x1748e9, _0x5651b6) {
                return _0x22f4ba['WFOoE'](_0x1748e9, _0x5651b6);
            },
            'bsUhR': function(_0x5e697c) {
                return _0x22f4ba['LvIUZ'](_0x5e697c);
            }
        };
        $['get'](_0x22f4ba['wCvES'](taskUrl, _0x22f4ba['KFMCy'], 'strPgtimestamp=' + token[_0x22f4ba['osRaY']] + '&strPhoneID=' + token[_0x22f4ba['hlJKV']] + '&strPgUUNum=' + token[_0x22f4ba['HZCSz']] + '&strShareId=' + _0x22f4ba['oOygW'](escape, _0x51c608) + '&dwSceneId=1001&dwType=2'), async (_0x548c47, _0x1f7afe, _0x594bdf) => {
            try {
                if (_0x22c7db['DByuq'](_0x22c7db['PeXDi'], _0x22c7db['uAsCH'])) {
                    const {
                        iRet,
                        sErrMsg,
                        taskinfo = []
                    } = JSON['parse'](_0x594bdf);
                    $['allTask'] = taskinfo['filter'](_0x163bca => _0x163bca['dwAwardStatus'] === 0x1);
                    $['log']('\n获取【🎖成就任务】列表 ' + sErrMsg + '，总共' + $['allTask']['length'] + '个任务！\n' + ($['showLog'] ? _0x594bdf : ''));
                } else {
                    console['log']('\n超级助力(超级工人)结果:' + _0x594bdf);
                    const {
                        sErrMsg,
                        iRet
                    } = JSON['parse'](_0x594bdf);
                    if (_0x22c7db['DByuq'](iRet, 0x7d5) || _0x22c7db['UZdvf'](iRet, 0x270f)) $['canHelp'] = ![];
                    console['log'](sErrMsg);
                }
            } catch (_0x4cda16) {
                $['logErr'](_0x4cda16, _0x1f7afe);
            } finally {
                _0x22c7db['bsUhR'](_0x5a9645);
            }
        });
    });
}

function joinGroup(_0x589312) {
    var _0x534c7b = {
        'LXWaU': function(_0x2b1c1e, _0x222e7e) {
            return _0x2b1c1e === _0x222e7e;
        },
        'mOmTE': function(_0xdf4228, _0x5b2f34) {
            return _0xdf4228 !== _0x5b2f34;
        },
        'TeBvp': 'GhKcN',
        'KNvCd': 'TVlfw',
        'PGAKl': 'hQShJ',
        'LnPSn': 'pdOPh',
        'zUDri': 'fBxvp',
        'RcOoR': 'alXAt',
        'iSvVd': function(_0x3d6f91, _0x477e1f) {
            return _0x3d6f91(_0x477e1f);
        },
        'XaPSS': function(_0x269553, _0x239ebc, _0x432128) {
            return _0x269553(_0x239ebc, _0x432128);
        },
        'eEIha': 'timestamp',
        'qZVbt': 'phoneid',
        'rbDrm': 'farm_jstoken'
    };
    return new Promise(async _0x4b8e1c => {
        var _0x5dac49 = {
            'dlLOP': function(_0x3ee1f6, _0x387f3c) {
                return _0x534c7b['LXWaU'](_0x3ee1f6, _0x387f3c);
            },
            'gYQev': function(_0x19d465, _0x2dfdae) {
                return _0x534c7b['mOmTE'](_0x19d465, _0x2dfdae);
            },
            'UAzwZ': _0x534c7b['TeBvp'],
            'umhRi': _0x534c7b['KNvCd'],
            'BVENw': function(_0x5ec0f4, _0x5420b6) {
                return _0x534c7b['LXWaU'](_0x5ec0f4, _0x5420b6);
            },
            'zWzAS': _0x534c7b['PGAKl'],
            'EHYZf': _0x534c7b['LnPSn'],
            'wIkeN': function(_0x56d4c1, _0x33e641) {
                return _0x534c7b['LXWaU'](_0x56d4c1, _0x33e641);
            },
            'nGmUK': _0x534c7b['zUDri'],
            'KEbWi': function(_0x237d4b, _0x451739) {
                return _0x534c7b['mOmTE'](_0x237d4b, _0x451739);
            },
            'dkQHo': _0x534c7b['RcOoR'],
            'YHwrv': function(_0x2ee880, _0xc5164c) {
                return _0x534c7b['iSvVd'](_0x2ee880, _0xc5164c);
            }
        };
        $['get'](_0x534c7b['XaPSS'](taskUrl, 'user/JoinGroup', 'strGroupId=' + _0x589312 + '&dwIsNewUser=0&pgtimestamp=' + token[_0x534c7b['eEIha']] + '&phoneID=' + token[_0x534c7b['qZVbt']] + '&pgUUNum=' + token[_0x534c7b['rbDrm']]), (_0x262f61, _0x3eadfc, _0x42f6a7) => {
            var _0x3e62e0 = {
                'Mhonc': function(_0x1312fa, _0x4ec155) {
                    return _0x5dac49['dlLOP'](_0x1312fa, _0x4ec155);
                }
            };
            if (_0x5dac49['gYQev'](_0x5dac49['UAzwZ'], _0x5dac49['umhRi'])) {
                try {
                    if (_0x5dac49['BVENw'](_0x5dac49['zWzAS'], _0x5dac49['EHYZf'])) {
                        $['logErr'](e, _0x3eadfc);
                    } else {
                        const {
                            sErrMsg,
                            iRet
                        } = JSON['parse'](_0x42f6a7);
                        if (_0x5dac49['BVENw'](iRet, 0x7d5) || _0x5dac49['wIkeN'](iRet, 0x270f)) $['canHelp'] = ![];
                        $['log']('iRet:' + iRet + ' ' + sErrMsg);
                    }
                } catch (_0x3d7662) {
                    if (_0x5dac49['wIkeN'](_0x5dac49['nGmUK'], _0x5dac49['nGmUK'])) {
                        $['logErr'](_0x3d7662, _0x3eadfc);
                    } else {
                        shareCodes = process['env']['JDCFD_SHARECODES']['split']('&');
                    }
                } finally {
                    if (_0x5dac49['KEbWi'](_0x5dac49['dkQHo'], _0x5dac49['dkQHo'])) {
                        Object['keys'](shareCodes)['forEach'](_0x56dd7a => {
                            if (shareCodes[_0x56dd7a]) {
                                $['shareCodesArr']['push'](shareCodes[_0x56dd7a]);
                            }
                        });
                    } else {
                        _0x5dac49['YHwrv'](_0x4b8e1c, JSON['parse'](_0x42f6a7) || {});
                    }
                }
            } else {
                const {
                    sErrMsg,
                    iRet
                } = JSON['parse'](_0x42f6a7);
                if (_0x3e62e0['Mhonc'](iRet, 0x7d5) || _0x3e62e0['Mhonc'](iRet, 0x270f)) $['canHelp'] = ![];
                $['log']('iRet:' + iRet + ' ' + sErrMsg);
            }
        });
    });
}

function submitGroupId() {
    var _0x54bb6c = {
        'nWunU': function(_0x520083) {
            return _0x520083();
        },
        'HJSIa': function(_0x125b99, _0x39f5b9) {
            return _0x125b99 !== _0x39f5b9;
        },
        'CLBzE': 'bFXaM',
        'VWAuN': 'cWfNK',
        'neuHD': function(_0x1b77be, _0x2710da) {
            return _0x1b77be === _0x2710da;
        },
        'YvRCq': 'WXPNW',
        'wSAFl': 'Fjhro',
        'rhnMZ': function(_0x191d68) {
            return _0x191d68();
        },
        'ouZCU': function(_0x42679b, _0x4fab2c) {
            return _0x42679b + _0x4fab2c;
        },
        'ekAGp': '你的【🏝寻宝大作战】互助码: ',
        'FMjnn': '(每天都变化,旧的不可用)',
        'owIIV': 'YHmaZ',
        'DvcUc': 'owrEw',
        'cOvgy': function(_0xe7dec6, _0x2978ab) {
            return _0xe7dec6(_0x2978ab);
        }
    };
    return new Promise(_0x4f6134 => {
        var _0x2087c0 = {
            'lOJxH': function(_0xde02) {
                return _0x54bb6c['nWunU'](_0xde02);
            },
            'ieeNu': function(_0x249672, _0x4a1d9a) {
                return _0x54bb6c['HJSIa'](_0x249672, _0x4a1d9a);
            },
            'nzvsx': _0x54bb6c['CLBzE'],
            'pTctR': _0x54bb6c['VWAuN'],
            'qoFgP': function(_0x3db33b) {
                return _0x54bb6c['nWunU'](_0x3db33b);
            },
            'smrkX': function(_0x330751, _0x5d8216) {
                return _0x54bb6c['neuHD'](_0x330751, _0x5d8216);
            },
            'jynZs': function(_0x3e2f93) {
                return _0x54bb6c['nWunU'](_0x3e2f93);
            },
            'xVEBe': _0x54bb6c['YvRCq'],
            'yfsuS': _0x54bb6c['wSAFl'],
            'ohoAz': function(_0xce5e16) {
                return _0x54bb6c['rhnMZ'](_0xce5e16);
            },
            'MGoPg': function(_0x5024ba, _0x290cfc) {
                return _0x54bb6c['ouZCU'](_0x5024ba, _0x290cfc);
            },
            'HAWaO': _0x54bb6c['ekAGp'],
            'KBOws': _0x54bb6c['FMjnn'],
            'nsOEz': _0x54bb6c['owIIV'],
            'onScd': _0x54bb6c['DvcUc'],
            'LPGSq': function(_0x20501a) {
                return _0x54bb6c['rhnMZ'](_0x20501a);
            }
        };
        $['get'](_0x54bb6c['cOvgy'](taskUrl, 'user/GatherForture'), async (_0x35deda, _0x8fbb51, _0x23b923) => {
            if (_0x2087c0['ieeNu'](_0x2087c0['nzvsx'], _0x2087c0['pTctR'])) {
                try {
                    const {
                        GroupInfo: {
                            strGroupId
                        },
                        strPin
                    } = JSON['parse'](_0x23b923);
                    if (!strGroupId) {
                        const _0x1d0ce4 = await _0x2087c0['qoFgP'](openGroup);
                        if (_0x2087c0['smrkX'](_0x1d0ce4, 0x0)) {
                            await _0x2087c0['jynZs'](submitGroupId);
                        } else {
                            if (_0x2087c0['ieeNu'](_0x2087c0['xVEBe'], _0x2087c0['yfsuS'])) {
                                _0x2087c0['ohoAz'](_0x4f6134);
                            } else {
                                console['log'](JSON['stringify'](data) + ',退出');
                                return;
                            }
                        }
                    } else {
                        $['log'](_0x2087c0['MGoPg'](_0x2087c0['MGoPg'](_0x2087c0['HAWaO'], strGroupId), _0x2087c0['KBOws']));
                        $['shareCodes']['push'](strGroupId);
                    }
                } catch (_0x246128) {
                    if (_0x2087c0['ieeNu'](_0x2087c0['nsOEz'], _0x2087c0['onScd'])) {
                        $['logErr'](_0x246128, _0x8fbb51);
                    } else {
                        const {
                            ret,
                            data: {
                                userTaskStatusList = []
                            } = {},
                            msg
                        } = JSON['parse'](data);
                        $['allTask'] = userTaskStatusList['filter'](_0x1d9ad2 => _0x1d9ad2['awardStatus'] !== 0x1);
                        $['log']('\n获取【📆日常任务】列表 ' + msg + '，总共' + $['allTask']['length'] + '个任务！\n' + ($['showLog'] ? data : ''));
                    }
                } finally {
                    _0x2087c0['LPGSq'](_0x4f6134);
                }
            } else {
                _0x2087c0['lOJxH'](_0x4f6134);
            }
        });
    });
}

function openGroup() {
    var _0x48784c = {
        'aDijc': function(_0x5e6809, _0x303cf4) {
            return _0x5e6809 === _0x303cf4;
        },
        'RHUfK': 'false',
        'ZBvLr': function(_0x17708c, _0x42635e) {
            return _0x17708c > _0x42635e;
        },
        'fgdiX': 'GITHUB',
        'MSfXA': function(_0x371cb6, _0x3e438a) {
            return _0x371cb6(_0x3e438a);
        },
        'PbEsk': 'NDQrX',
        'SrOHh': function(_0x2d0515) {
            return _0x2d0515();
        },
        'iprSv': function(_0x14b079, _0x1746ed, _0x39442a) {
            return _0x14b079(_0x1746ed, _0x39442a);
        }
    };
    return new Promise(async _0x46c960 => {
        var _0x51a569 = {
            'oXqUU': function(_0x40485b, _0x528827) {
                return _0x48784c['aDijc'](_0x40485b, _0x528827);
            },
            'JoQdW': _0x48784c['RHUfK'],
            'tfTqa': function(_0xe4da41, _0x54643a) {
                return _0x48784c['ZBvLr'](_0xe4da41, _0x54643a);
            },
            'wSIPY': _0x48784c['fgdiX'],
            'HHigi': function(_0x2bf730, _0x3872da) {
                return _0x48784c['MSfXA'](_0x2bf730, _0x3872da);
            },
            'IxMwC': function(_0x1fc89e, _0x362d99) {
                return _0x48784c['aDijc'](_0x1fc89e, _0x362d99);
            },
            'aUaMY': _0x48784c['PbEsk'],
            'nsNAZ': function(_0x42ea71) {
                return _0x48784c['SrOHh'](_0x42ea71);
            }
        };
        $['get'](_0x48784c['iprSv'](taskUrl, 'user/OpenGroup', 'dwIsNewUser=' + $['info']['dwIsNewUser']), async (_0x525005, _0x46108b, _0x3af906) => {
            try {
                const {
                    sErrMsg
                } = JSON['parse'](_0x3af906);
                $['log']('\n【🏝寻宝大作战】' + sErrMsg + '\x0a' + ($['showLog'] ? _0x3af906 : ''));
                _0x51a569['HHigi'](_0x46c960, 0x0);
            } catch (_0x1f647c) {
                $['logErr'](_0x1f647c, _0x46108b);
            } finally {
                if (_0x51a569['IxMwC'](_0x51a569['aUaMY'], _0x51a569['aUaMY'])) {
                    _0x51a569['nsNAZ'](_0x46c960);
                } else {
                    Object['keys'](jdCookieNode)['forEach'](_0x314a22 => {
                        cookiesArr['push'](jdCookieNode[_0x314a22]);
                    });
                    if (process['env']['JD_DEBUG'] && _0x51a569['oXqUU'](process['env']['JD_DEBUG'], _0x51a569['JoQdW'])) console['log'] = () => {};
                    if (_0x51a569['tfTqa'](JSON['stringify'](process['env'])['indexOf'](_0x51a569['wSIPY']), -0x1)) process['exit'](0x0);
                }
            }
        });
    });
}

function openPeriodBox() {
    var _0x5e907b = {
        'TIyFF': function(_0x3d71f9, _0x2da937) {
            return _0x3d71f9 > _0x2da937;
        },
        'andsl': '任务为成就任务或者未到任务时间',
        'HYzqS': function(_0x298d22, _0x293fec) {
            return _0x298d22 !== _0x293fec;
        },
        'gmaHW': 'CBDLS',
        'sWqVO': function(_0x27857c, _0x357e6c) {
            return _0x27857c === _0x357e6c;
        },
        'MUzqk': 'mAakA',
        'HouNd': 'FBHgB',
        'npyZo': function(_0x54a8ac, _0x303d6a) {
            return _0x54a8ac == _0x303d6a;
        },
        'QOzCx': 'success',
        'KDRsi': 'JftwH',
        'lMbZe': 'OGFlr',
        'FZyRE': 'VLJRS',
        'Lknfz': function(_0xdbaf67) {
            return _0xdbaf67();
        },
        'YQbmP': 'CookieJD',
        'RTHvz': 'CookieJD2',
        'pKwLn': function(_0x603c09, _0x28a546) {
            return _0x603c09(_0x28a546);
        },
        'rLxRm': 'CookiesJD',
        'TsFAq': function(_0x298d59, _0x27aeb3) {
            return _0x298d59 !== _0x27aeb3;
        },
        'NmMie': 'bLEVA',
        'oVLlM': 'tGKii',
        'VAeea': function(_0x46becc, _0x549219) {
            return _0x46becc < _0x549219;
        },
        'EZfYO': 'TpGyd',
        'HeNFX': function(_0x271d9f, _0xdf2d81, _0x23dbf1) {
            return _0x271d9f(_0xdf2d81, _0x23dbf1);
        },
        'rxJpH': function(_0xbab1b7, _0x24d1f2) {
            return _0xbab1b7(_0x24d1f2);
        }
    };
    return new Promise(async _0x5ce800 => {
        var _0x24862f = {
            'psFuW': function(_0x1ba0a3, _0xe701b0) {
                return _0x5e907b['TIyFF'](_0x1ba0a3, _0xe701b0);
            },
            'zmFlq': _0x5e907b['andsl'],
            'tkuHs': function(_0x41b749, _0x3499e5) {
                return _0x5e907b['HYzqS'](_0x41b749, _0x3499e5);
            },
            'HUdcj': _0x5e907b['gmaHW'],
            'DEAvL': function(_0x24e567, _0x4771de) {
                return _0x5e907b['sWqVO'](_0x24e567, _0x4771de);
            },
            'ZdSRs': _0x5e907b['MUzqk'],
            'AWZws': _0x5e907b['HouNd'],
            'RFVqu': function(_0x531950, _0x23f98a) {
                return _0x5e907b['npyZo'](_0x531950, _0x23f98a);
            },
            'mXkiU': _0x5e907b['QOzCx'],
            'nyPSs': function(_0x5d16a5, _0x486e03) {
                return _0x5e907b['sWqVO'](_0x5d16a5, _0x486e03);
            },
            'zXCWy': _0x5e907b['KDRsi'],
            'xTkzK': _0x5e907b['lMbZe'],
            'jdcQN': _0x5e907b['FZyRE'],
            'hbwJW': function(_0x10b126) {
                return _0x5e907b['Lknfz'](_0x10b126);
            },
            'RKjPv': _0x5e907b['YQbmP'],
            'HOemg': _0x5e907b['RTHvz'],
            'rzHQS': function(_0x10dfe0, _0x2cd658) {
                return _0x5e907b['pKwLn'](_0x10dfe0, _0x2cd658);
            },
            'fhcGt': _0x5e907b['rLxRm'],
            'JAxzk': function(_0x43f696, _0x508259) {
                return _0x5e907b['TsFAq'](_0x43f696, _0x508259);
            },
            'aKCps': _0x5e907b['NmMie'],
            'OSQoQ': _0x5e907b['oVLlM'],
            'KgCjd': function(_0x5c2997, _0x6c0393) {
                return _0x5e907b['VAeea'](_0x5c2997, _0x6c0393);
            },
            'kmqIm': _0x5e907b['EZfYO'],
            'cfDbc': function(_0x33bf5e, _0x4f7b67, _0x4e3c98) {
                return _0x5e907b['HeNFX'](_0x33bf5e, _0x4f7b67, _0x4e3c98);
            }
        };
        $['get'](_0x5e907b['rxJpH'](taskUrl, 'user/GatherForture'), async (_0x46caef, _0x571ce0, _0x508453) => {
            var _0x5d92fd = {
                'XETHb': _0x24862f['zmFlq'],
                'GcJRp': function(_0xd1c4a6, _0x397333) {
                    return _0x24862f['tkuHs'](_0xd1c4a6, _0x397333);
                },
                'bjmhM': _0x24862f['HUdcj'],
                'GzVBZ': function(_0x12360e, _0x24088d) {
                    return _0x24862f['DEAvL'](_0x12360e, _0x24088d);
                },
                'WHnHl': _0x24862f['ZdSRs'],
                'JfUpI': _0x24862f['AWZws'],
                'BmVzO': function(_0x49166f, _0xb7cd6c) {
                    return _0x24862f['RFVqu'](_0x49166f, _0xb7cd6c);
                },
                'ZKmFB': _0x24862f['mXkiU'],
                'vplzj': function(_0x5f0a4c, _0x514725) {
                    return _0x24862f['nyPSs'](_0x5f0a4c, _0x514725);
                },
                'LXjSP': _0x24862f['zXCWy'],
                'CuvLw': _0x24862f['xTkzK'],
                'rxNyh': _0x24862f['jdcQN'],
                'mTNsm': function(_0x5b1c6f) {
                    return _0x24862f['hbwJW'](_0x5b1c6f);
                },
                'RNeUU': _0x24862f['RKjPv'],
                'njYAa': _0x24862f['HOemg'],
                'YWfCT': function(_0x3be139, _0x3e5d9e) {
                    return _0x24862f['rzHQS'](_0x3be139, _0x3e5d9e);
                },
                'ByvkA': _0x24862f['fhcGt']
            };
            if (_0x24862f['JAxzk'](_0x24862f['aKCps'], _0x24862f['OSQoQ'])) {
                try {
                    const {
                        PeriodBox = [{}]
                    } = JSON['parse'](_0x508453);
                    for (var _0x1b48db = 0x0; _0x24862f['KgCjd'](_0x1b48db, PeriodBox['length']); _0x1b48db++) {
                        if (_0x24862f['nyPSs'](_0x24862f['kmqIm'], _0x24862f['kmqIm'])) {
                            const {
                                dwStatus,
                                dwSeq,
                                strBrandName
                            } = PeriodBox[_0x1b48db];
                            if (_0x24862f['RFVqu'](dwStatus, 0x2)) {
                                await $['wait'](0x3e8);
                                await $['get'](_0x24862f['cfDbc'](taskUrl, 'user/OpenPeriodBox', 'dwSeq=' + dwSeq), async (_0x46caef, _0x571ce0, _0x508453) => {
                                    var _0x5ec464 = {
                                        'eJwkm': _0x5d92fd['XETHb']
                                    };
                                    if (_0x5d92fd['GcJRp'](_0x5d92fd['bjmhM'], _0x5d92fd['bjmhM'])) {
                                        if (_0x46caef) {} else {
                                            if (_0x508453) _0x508453 = JSON['parse'](_0x508453);
                                        }
                                    } else {
                                        try {
                                            if (_0x5d92fd['GzVBZ'](_0x5d92fd['WHnHl'], _0x5d92fd['JfUpI'])) {
                                                $['logErr'](e, _0x571ce0);
                                            } else {
                                                const {
                                                    dwMoney,
                                                    iRet,
                                                    sErrMsg
                                                } = JSON['parse'](_0x508453);
                                                $['log']('\n【🏝寻宝大作战】【' + strBrandName + '】开宝箱：' + (_0x5d92fd['BmVzO'](sErrMsg, _0x5d92fd['ZKmFB']) ? ' 获得财富值 ¥ ' + dwMoney : sErrMsg) + '\x0a' + ($['showLog'] ? _0x508453 : ''));
                                            }
                                        } catch (_0x407f22) {
                                            if (_0x5d92fd['vplzj'](_0x5d92fd['LXjSP'], _0x5d92fd['CuvLw'])) {
                                                $['shareCodesArr']['push'](shareCodes[item]);
                                            } else {
                                                $['logErr'](_0x407f22, _0x571ce0);
                                            }
                                        } finally {
                                            if (_0x5d92fd['vplzj'](_0x5d92fd['rxNyh'], _0x5d92fd['rxNyh'])) {
                                                _0x5d92fd['mTNsm'](_0x5ce800);
                                            } else {
                                                str = _0x5ec464['eJwkm'];
                                            }
                                        }
                                    }
                                });
                            } else if (_0x24862f['RFVqu'](dwStatus, 0x3)) {
                                $['log']('\n【🏝寻宝大作战】【' + strBrandName + '】开宝箱：宝箱已开启过！');
                            } else {
                                $['log']('\n【🏝寻宝大作战】【' + strBrandName + '】开宝箱：未达到宝箱开启条件，快去邀请好友助力吧！');
                                _0x24862f['hbwJW'](_0x5ce800);
                            }
                        } else {
                            if (_0x24862f['psFuW'](process['env']['JDCFD_SHARECODES']['indexOf']('\x0a'), -0x1)) {
                                shareCodes = process['env']['JDCFD_SHARECODES']['split']('\x0a');
                            } else {
                                shareCodes = process['env']['JDCFD_SHARECODES']['split']('&');
                            }
                        }
                    }
                } catch (_0x57e390) {
                    $['logErr'](_0x57e390, _0x571ce0);
                } finally {
                    _0x24862f['hbwJW'](_0x5ce800);
                }
            } else {
                cookiesArr = [$['getdata'](_0x5d92fd['RNeUU']), $['getdata'](_0x5d92fd['njYAa']), ..._0x5d92fd['YWfCT'](jsonParse, $['getdata'](_0x5d92fd['ByvkA']) || '[]')['map'](_0x28c12a => _0x28c12a['cookie'])]['filter'](_0x40ae59 => !!_0x40ae59);
            }
        });
    });
}

function activeScene(_0x34a8cd) {
    var _0x5a5480 = {
        'pkOEc': function(_0xfb1ccf) {
            return _0xfb1ccf();
        },
        'lMBFS': function(_0x1d756d, _0x53579a) {
            return _0x1d756d(_0x53579a);
        },
        'igMHG': '*/*',
        'AWBQH': 'keep-alive',
        'ENhXw': 'https://st.jingxi.com/fortune_island/index.html',
        'uSqxZ': 'gzip, deflate, br',
        'pbTOR': 'm.jingxi.com',
        'pIpmz': function(_0x1325e8, _0x45144e) {
            return _0x1325e8 + _0x45144e;
        },
        'JpYZd': function(_0x12fc48, _0x19c965) {
            return _0x12fc48 * _0x19c965;
        },
        'Oajxw': 'zh-cn'
    };
    return new Promise(_0x1c590d => {
        var _0x16ceb0 = {
            'uHupe': function(_0x97dd13) {
                return _0x5a5480['pkOEc'](_0x97dd13);
            }
        };
        const _0x2a7d25 = {
            'url': JD_API_HOST + 'jxcfd/user/ActiveScene?strZone=jxcfd&bizCode=jxcfd&source=jxcfd&dwEnv=7&_cfd_t=' + Date['now']() + '&ptag=&dwSceneId=' + _0x5a5480['lMBFS'](Number, _0x34a8cd) + '&_stk=_cfd_t,bizCode,dwEnv,dwSceneId,ptag,source,strZone&_ste=1&h5st=20210304125239873;1540797227618115;10009;tk01we7831daaa8nRzRiUm4rZjRynBiuCHXtzWJmGCtVH2P+YnfnjoIsTWS87p85/fH4kcisjwWpqa10pRs3zMclNzix;5a9afbeb82bbb4e5e62cfe4b72965b5a2bf12cc3c56817b53e93a1cead562dc4&_=' + Date['now']() + '&sceneval=2&g_login_type=1',
            'headers': {
                'Cookie': cookie,
                'Accept': _0x5a5480['igMHG'],
                'Connection': _0x5a5480['AWBQH'],
                'Referer': _0x5a5480['ENhXw'],
                'Accept-Encoding': _0x5a5480['uSqxZ'],
                'Host': _0x5a5480['pbTOR'],
                'User-Agent': 'jdpingou;iPhone;3.15.2;14.2.1;ea00763447803eb0f32045dcba629c248ea53bb3;network/wifi;model/iPhone13,2;appBuild/100365;ADID/00000000-0000-0000-0000-000000000000;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/0;hasOCPay/0;supportBestPay/0;session/' + _0x5a5480['pIpmz'](_0x5a5480['JpYZd'](Math['random'], 0x62), 0x1) + ';pap/JA2015_311210;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
                'Accept-Language': _0x5a5480['Oajxw']
            }
        };
        $['get'](_0x2a7d25, (_0x14f70e, _0x273e0a, _0x3141f0) => {
            try {
                if (_0x3141f0) {
                    console['log']('开通场景结果:' + _0x3141f0 + '\x0a');
                }
            } catch (_0x2a6949) {
                $['logErr'](_0x2a6949, _0x273e0a);
            } finally {
                _0x16ceb0['uHupe'](_0x1c590d);
            }
        });
    });
}

function taskUrl(_0x5abb66, _0x5c4ce6) {
    var _0x398d58 = {
        'XKIvL': '*/*',
        'GYaXh': 'keep-alive',
        'KGcSG': 'https://st.jingxi.com/fortune_island/index.html?ptag=138631.26.55',
        'IPbLX': 'gzip, deflate, br',
        'yjuxS': 'm.jingxi.com',
        'CuqvL': function(_0x55791e, _0x500f93) {
            return _0x55791e + _0x500f93;
        },
        'vQczP': function(_0x4f1903, _0x2e6b3d) {
            return _0x4f1903 * _0x2e6b3d;
        },
        'LLJKh': 'zh-cn'
    };
    return {
        'url': JD_API_HOST + 'jxcfd/' + _0x5abb66 + '?strZone=jxcfd&bizCode=jxcfd&source=jxcfd&dwEnv=7&_cfd_t=' + Date['now']() + '&ptag=138631.26.55&' + _0x5c4ce6 + '&_ste=1&_=' + Date['now']() + '&sceneval=2&g_login_type=1&g_ty=ls',
        'headers': {
            'Cookie': cookie,
            'Accept': _0x398d58['XKIvL'],
            'Connection': _0x398d58['GYaXh'],
            'Referer': _0x398d58['KGcSG'],
            'Accept-Encoding': _0x398d58['IPbLX'],
            'Host': _0x398d58['yjuxS'],
            'User-Agent': 'jdpingou;iPhone;3.15.2;14.2.1;ea00763447803eb0f32045dcba629c248ea53bb3;network/wifi;model/iPhone13,2;appBuild/100365;ADID/00000000-0000-0000-0000-000000000000;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/0;hasOCPay/0;supportBestPay/0;session/' + _0x398d58['CuqvL'](_0x398d58['vQczP'](Math['random'], 0x62), 0x1) + ';pap/JA2015_311210;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
            'Accept-Language': _0x398d58['LLJKh']
        },
        'timeout': 0x2710
    };
}

function taskListUrl(_0x18ffc6, _0xa74e7) {
    var _0x1c987b = {
        'qVkcM': '*/*',
        'PRPFd': 'keep-alive',
        'dwvGM': 'https://st.jingxi.com/fortune_island/index.html?ptag=138631.26.55',
        'rMRFB': 'gzip, deflate, br',
        'QlBLl': 'm.jingxi.com',
        'ZfhCB': function(_0x367e83, _0x2e654a) {
            return _0x367e83 + _0x2e654a;
        },
        'EOicC': function(_0x241bb0, _0x1459a1) {
            return _0x241bb0 * _0x1459a1;
        },
        'BARQv': 'zh-cn'
    };
    return {
        'url': JD_API_HOST + 'newtasksys/newtasksys_front/' + _0x18ffc6 + '?strZone=jxcfd&bizCode=jxcfd&source=jxcfd&dwEnv=7&_cfd_t=' + Date['now']() + '&ptag=138631.26.55&' + _0xa74e7 + '&_ste=1&_=' + Date['now']() + '&sceneval=2&g_login_type=1&g_ty=ls',
        'headers': {
            'Cookie': cookie,
            'Accept': _0x1c987b['qVkcM'],
            'Connection': _0x1c987b['PRPFd'],
            'Referer': _0x1c987b['dwvGM'],
            'Accept-Encoding': _0x1c987b['rMRFB'],
            'Host': _0x1c987b['QlBLl'],
            'User-Agent': 'jdpingou;iPhone;3.15.2;14.2.1;ea00763447803eb0f32045dcba629c248ea53bb3;network/wifi;model/iPhone13,2;appBuild/100365;ADID/00000000-0000-0000-0000-000000000000;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/0;hasOCPay/0;supportBestPay/0;session/' + _0x1c987b['ZfhCB'](_0x1c987b['EOicC'](Math['random'], 0x62), 0x1) + ';pap/JA2015_311210;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
            'Accept-Language': _0x1c987b['BARQv']
        },
        'timeout': 0x2710
    };
}

function showMsg() {
    var _0x4425ab = {
        'ViOEZ': 'HH:mm',
        'HtWir': function(_0x4abd1c) {
            return _0x4abd1c();
        }
    };
    return new Promise(async _0x265077 => {
        if ($['result']['length']) {
            if ($['notifyTime']) {
                const _0x589ce4 = $['notifyTime']['split'](',')['map'](_0x4fbca6 => _0x4fbca6['split'](':'));
                const _0xf259e7 = $['time'](_0x4425ab['ViOEZ'])['split'](':');
                $['log']('\x0a' + JSON['stringify'](_0x589ce4));
                $['log']('\x0a' + JSON['stringify'](_0xf259e7));
                if (_0x589ce4['some'](_0xb5230b => _0xb5230b[0x0] === _0xf259e7[0x0] && (!_0xb5230b[0x1] || _0xb5230b[0x1] === _0xf259e7[0x1]))) {
                    $['msg']($['name'], '', '' + $['result']['join']('\x0a'));
                }
            } else {
                $['msg']($['name'], '', '' + $['result']['join']('\x0a'));
            }
            if ($['isNode']() && process['env']['CFD_NOTIFY_CONTROL']) await notify['sendNotify']($['name'] + ' - 账号' + $['index'] + ' - ' + $['nickName'], '' + $['result']['join']('\x0a'));
        }
        _0x4425ab['HtWir'](_0x265077);
    });
}

function TotalBean() {
    var _0x42e029 = {
        'LHpAS': function(_0x52cfdb) {
            return _0x52cfdb();
        },
        'bSnds': function(_0x14fff6, _0x2b4f5b) {
            return _0x14fff6(_0x2b4f5b);
        },
        'xuQGk': function(_0x34d3c1, _0x29c08a) {
            return _0x34d3c1 === _0x29c08a;
        },
        'aHdTx': 'UnxJd',
        'QKIzj': 'mtnuG',
        'dbbab': 'iuRXK',
        'gPJtz': 'IYEUw',
        'DtKcq': 'retcode',
        'yTLHP': function(_0x23b395, _0x2854c9) {
            return _0x23b395 === _0x2854c9;
        },
        'jpoIf': 'ODpsC',
        'JCoVz': 'HuDtK',
        'MVQhz': 'base',
        'foTYz': function(_0x46c571, _0x2a6a50) {
            return _0x46c571 !== _0x2a6a50;
        },
        'AWYsj': 'pUvom',
        'eNcfM': 'pxfit',
        'JcDfv': 'DmtPV',
        'ZuEAW': 'pqqrQ',
        'wnctR': function(_0x57b8d1) {
            return _0x57b8d1();
        },
        'OIKdX': 'application/json,text/plain, */*',
        'yiZYx': 'application/x-www-form-urlencoded',
        'aKlbn': 'gzip, deflate, br',
        'oPvmT': 'zh-cn',
        'iMuej': 'keep-alive',
        'DbeJa': 'https://wqs.jd.com/my/jingdou/my.shtml?sceneval=2',
        'BkrvD': './USER_AGENTS',
        'jVEnk': 'JDUA',
        'GFaEW': 'jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1'
    };
    return new Promise(async _0x5655ae => {
        var _0x5252b7 = {
            'AqRhD': function(_0x21233b) {
                return _0x42e029['LHpAS'](_0x21233b);
            },
            'tVAtl': function(_0x38fbf2, _0xfc6815) {
                return _0x42e029['bSnds'](_0x38fbf2, _0xfc6815);
            },
            'YMGGk': function(_0x264fea) {
                return _0x42e029['LHpAS'](_0x264fea);
            },
            'DMDog': function(_0x17574f, _0x707002) {
                return _0x42e029['xuQGk'](_0x17574f, _0x707002);
            },
            'pkQIg': _0x42e029['aHdTx'],
            'avOAR': _0x42e029['QKIzj'],
            'zfCEH': _0x42e029['dbbab'],
            'kONPR': _0x42e029['gPJtz'],
            'vFIVD': _0x42e029['DtKcq'],
            'rbdUI': function(_0x48a32d, _0x39073c) {
                return _0x42e029['yTLHP'](_0x48a32d, _0x39073c);
            },
            'Lzflj': _0x42e029['jpoIf'],
            'DzDai': _0x42e029['JCoVz'],
            'Bpnlp': _0x42e029['MVQhz'],
            'hCDDh': function(_0x3dee62, _0x45f99b) {
                return _0x42e029['foTYz'](_0x3dee62, _0x45f99b);
            },
            'JTRax': _0x42e029['AWYsj'],
            'hVcjQ': function(_0x4bcb0c, _0x5ebb2d) {
                return _0x42e029['foTYz'](_0x4bcb0c, _0x5ebb2d);
            },
            'skiLi': _0x42e029['eNcfM'],
            'NZORV': _0x42e029['JcDfv'],
            'JWLhH': _0x42e029['ZuEAW'],
            'mZDoR': function(_0x4e1162) {
                return _0x42e029['wnctR'](_0x4e1162);
            }
        };
        const _0x185671 = {
            'url': 'https://wq.jd.com/user/info/QueryJDUserInfo?sceneval=2',
            'headers': {
                'Accept': _0x42e029['OIKdX'],
                'Content-Type': _0x42e029['yiZYx'],
                'Accept-Encoding': _0x42e029['aKlbn'],
                'Accept-Language': _0x42e029['oPvmT'],
                'Connection': _0x42e029['iMuej'],
                'Cookie': cookie,
                'Referer': _0x42e029['DbeJa'],
                'User-Agent': $['isNode']() ? process['env']['JD_USER_AGENT'] ? process['env']['JD_USER_AGENT'] : _0x42e029['bSnds'](require, _0x42e029['BkrvD'])['USER_AGENT'] : $['getdata'](_0x42e029['jVEnk']) ? $['getdata'](_0x42e029['jVEnk']) : _0x42e029['GFaEW']
            }
        };
        $['post'](_0x185671, (_0xbc6491, _0x1606d4, _0x218e53) => {
            var _0x5396da = {
                'JFyhQ': function(_0x5a09e5) {
                    return _0x5252b7['AqRhD'](_0x5a09e5);
                },
                'xldfL': function(_0x1fcea0, _0xb38570) {
                    return _0x5252b7['tVAtl'](_0x1fcea0, _0xb38570);
                },
                'khAti': function(_0x1315cd) {
                    return _0x5252b7['AqRhD'](_0x1315cd);
                },
                'JzNdi': function(_0x221d3f) {
                    return _0x5252b7['YMGGk'](_0x221d3f);
                }
            };
            if (_0x5252b7['DMDog'](_0x5252b7['pkQIg'], _0x5252b7['pkQIg'])) {
                try {
                    if (_0x5252b7['DMDog'](_0x5252b7['avOAR'], _0x5252b7['zfCEH'])) {
                        _0x5396da['JFyhQ'](_0x5655ae);
                    } else {
                        if (_0xbc6491) {
                            console['log']('' + JSON['stringify'](_0xbc6491));
                            console['log']($['name'] + ' API请求失败，请检查网路重试');
                        } else {
                            if (_0x5252b7['DMDog'](_0x5252b7['kONPR'], _0x5252b7['kONPR'])) {
                                if (_0x218e53) {
                                    _0x218e53 = JSON['parse'](_0x218e53);
                                    if (_0x5252b7['DMDog'](_0x218e53[_0x5252b7['vFIVD']], 0xd)) {
                                        $['isLogin'] = ![];
                                        return;
                                    }
                                    if (_0x5252b7['rbdUI'](_0x218e53[_0x5252b7['vFIVD']], 0x0)) {
                                        if (_0x5252b7['rbdUI'](_0x5252b7['Lzflj'], _0x5252b7['DzDai'])) {
                                            _0x5396da['xldfL'](_0x5655ae, _0x218e53);
                                        } else {
                                            $['nickName'] = _0x218e53[_0x5252b7['Bpnlp']] && _0x218e53[_0x5252b7['Bpnlp']]['nickname'] || $['UserName'];
                                        }
                                    } else {
                                        $['nickName'] = $['UserName'];
                                    }
                                } else {
                                    if (_0x5252b7['hCDDh'](_0x5252b7['JTRax'], _0x5252b7['JTRax'])) {
                                        $['logErr'](e, _0x1606d4);
                                    } else {
                                        console['log']('京东服务器返回空数据');
                                    }
                                }
                            } else {
                                _0x5396da['khAti'](_0x5655ae);
                            }
                        }
                    }
                } catch (_0x5607e4) {
                    if (_0x5252b7['hVcjQ'](_0x5252b7['skiLi'], _0x5252b7['NZORV'])) {
                        $['logErr'](_0x5607e4, _0x1606d4);
                    } else {
                        $['logErr'](_0x5607e4, _0x1606d4);
                    }
                } finally {
                    if (_0x5252b7['rbdUI'](_0x5252b7['JWLhH'], _0x5252b7['JWLhH'])) {
                        _0x5252b7['mZDoR'](_0x5655ae);
                    } else {
                        _0x5396da['JzNdi'](_0x5655ae);
                    }
                }
            } else {
                $['logErr'](e, _0x1606d4);
            }
        });
    });
}

function readShareCode() {
    var _0x5da5b2 = {
        'VOiAF': function(_0x2a6431) {
            return _0x2a6431();
        },
        'tyOSo': function(_0x3b947f, _0x2d89f0) {
            return _0x3b947f(_0x2d89f0);
        },
        'YkDnW': function(_0x521d5c, _0x2bd92a) {
            return _0x521d5c * _0x2bd92a;
        },
        'SuJqt': function(_0x53f09c, _0x14d632) {
            return _0x53f09c || _0x14d632;
        },
        'XEVRM': '*/*',
        'DzXTx': 'keep-alive',
        'KZhVg': 'https://st.jingxi.com/fortune_island/index.html?ptag=138631.26.55',
        'hrkIp': 'gzip, deflate, br',
        'fvSXr': 'm.jingxi.com',
        'WGiza': function(_0x136939, _0x3ef70f) {
            return _0x136939 + _0x3ef70f;
        },
        'UiOsl': 'zh-cn',
        'OaptN': function(_0x3d88d3, _0x3261eb) {
            return _0x3d88d3 === _0x3261eb;
        },
        'fJVoM': 'qkgKr',
        'crdsK': 'iPywx',
        'avLbe': 'vILIe',
        'YzWVP': 'ZQpiT',
        'AhAtx': 'qnktT',
        'dkCkh': 'mrUoR',
        'ktcIE': 'QhMno',
        'JTOpE': 'ZpKmY',
        'wzMcB': function(_0x473cb7) {
            return _0x473cb7();
        }
    };
    console['log']('开始');
    return new Promise(async _0x268cee => {
        var _0x4fc7c7 = {
            'NpLcq': function(_0x5b4a33) {
                return _0x5da5b2['VOiAF'](_0x5b4a33);
            },
            'LnpiY': function(_0x6d4aa1, _0x48f511) {
                return _0x5da5b2['tyOSo'](_0x6d4aa1, _0x48f511);
            },
            'vyoBu': function(_0x1e8ff7, _0x1346cd) {
                return _0x5da5b2['YkDnW'](_0x1e8ff7, _0x1346cd);
            },
            'ukZob': function(_0x95f6de, _0x5c7d07) {
                return _0x5da5b2['SuJqt'](_0x95f6de, _0x5c7d07);
            },
            'PJlmb': _0x5da5b2['XEVRM'],
            'zvbBz': _0x5da5b2['DzXTx'],
            'qYhUT': _0x5da5b2['KZhVg'],
            'klktE': _0x5da5b2['hrkIp'],
            'gllwQ': _0x5da5b2['fvSXr'],
            'qryvz': function(_0x2d6431, _0x1cd3b7) {
                return _0x5da5b2['WGiza'](_0x2d6431, _0x1cd3b7);
            },
            'MkpGt': _0x5da5b2['UiOsl'],
            'LbOka': function(_0x484fca, _0x462321) {
                return _0x5da5b2['OaptN'](_0x484fca, _0x462321);
            },
            'wqCOa': _0x5da5b2['fJVoM'],
            'jaWda': _0x5da5b2['crdsK'],
            'naiQr': _0x5da5b2['avLbe'],
            'Uwhee': _0x5da5b2['YzWVP'],
            'dOyDC': _0x5da5b2['AhAtx'],
            'mwIGg': _0x5da5b2['dkCkh']
        };
        if (_0x5da5b2['OaptN'](_0x5da5b2['ktcIE'], _0x5da5b2['JTOpE'])) {
            _0x4fc7c7['NpLcq'](_0x268cee);
        } else {
            $['get']({
                'url': 'http://jd.turinglabs.net/api/v2/jd/jxcfd/read/0/',
                'timeout': 0x2710
            }, (_0x382341, _0xe709c9, _0x65a9af) => {
                var _0x58fe5b = {
                    'lKSIu': _0x4fc7c7['PJlmb'],
                    'MIWNT': _0x4fc7c7['zvbBz'],
                    'bSjBl': _0x4fc7c7['qYhUT'],
                    'NGSFY': _0x4fc7c7['klktE'],
                    'PfWTA': _0x4fc7c7['gllwQ'],
                    'zQibO': function(_0x4fdc0e, _0x6bdbf3) {
                        return _0x4fc7c7['qryvz'](_0x4fdc0e, _0x6bdbf3);
                    },
                    'eFvqo': function(_0x47328e, _0x58232a) {
                        return _0x4fc7c7['vyoBu'](_0x47328e, _0x58232a);
                    },
                    'DRcJm': _0x4fc7c7['MkpGt']
                };
                try {
                    if (_0x382341) {
                        if (_0x4fc7c7['LbOka'](_0x4fc7c7['wqCOa'], _0x4fc7c7['jaWda'])) {
                            str += _sym[_0x4fc7c7['LnpiY'](parseInt, _0x4fc7c7['vyoBu'](Math['random'](), _sym['length']))];
                        } else {
                            console['log']('' + JSON['stringify'](_0x382341));
                            console['log']($['name'] + ' API请求失败，请检查网路重试');
                        }
                    } else {
                        if (_0x4fc7c7['LbOka'](_0x4fc7c7['naiQr'], _0x4fc7c7['Uwhee'])) {
                            return {
                                'url': JD_API_HOST + 'newtasksys/newtasksys_front/' + function_path + '?strZone=jxcfd&bizCode=jxcfd&source=jxcfd&dwEnv=7&_cfd_t=' + Date['now']() + '&ptag=138631.26.55&' + body + '&_ste=1&_=' + Date['now']() + '&sceneval=2&g_login_type=1&g_ty=ls',
                                'headers': {
                                    'Cookie': cookie,
                                    'Accept': _0x58fe5b['lKSIu'],
                                    'Connection': _0x58fe5b['MIWNT'],
                                    'Referer': _0x58fe5b['bSjBl'],
                                    'Accept-Encoding': _0x58fe5b['NGSFY'],
                                    'Host': _0x58fe5b['PfWTA'],
                                    'User-Agent': 'jdpingou;iPhone;3.15.2;14.2.1;ea00763447803eb0f32045dcba629c248ea53bb3;network/wifi;model/iPhone13,2;appBuild/100365;ADID/00000000-0000-0000-0000-000000000000;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/0;hasOCPay/0;supportBestPay/0;session/' + _0x58fe5b['zQibO'](_0x58fe5b['eFvqo'](Math['random'], 0x62), 0x1) + ';pap/JA2015_311210;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
                                    'Accept-Language': _0x58fe5b['DRcJm']
                                },
                                'timeout': 0x2710
                            };
                        } else {
                            if (_0x65a9af) {
                                console['log']('随机取0个码放到您固定的互助码后面(不影响已有固定互助)');
                                _0x65a9af = JSON['parse'](_0x65a9af);
                            }
                        }
                    }
                } catch (_0x4941f9) {
                    $['logErr'](_0x4941f9, _0xe709c9);
                } finally {
                    if (_0x4fc7c7['LbOka'](_0x4fc7c7['dOyDC'], _0x4fc7c7['mwIGg'])) {
                        const {
                            iRet,
                            sData: {
                                ddwMoney
                            },
                            sErrMsg
                        } = JSON['parse'](_0x65a9af);
                        $['log']('\n📌签到：' + sErrMsg + '，获得财富 ¥ ' + _0x4fc7c7['ukZob'](ddwMoney, 0x0) + '\x0a' + ($['showLog'] ? _0x65a9af : ''));
                    } else {
                        _0x4fc7c7['LnpiY'](_0x268cee, _0x65a9af);
                    }
                }
            });
            await $['wait'](0x2710);
            _0x5da5b2['wzMcB'](_0x268cee);
        }
    });
}

function shareCodesFormat() {
    var _0x3e18c6 = {
        'miwID': function(_0x4df53f, _0x482334) {
            return _0x4df53f - _0x482334;
        },
        'VwxEk': function(_0x5cb09a, _0x27c0be) {
            return _0x5cb09a - _0x27c0be;
        },
        'PBJFm': function(_0x1ee092, _0x50f310) {
            return _0x1ee092 === _0x50f310;
        },
        'rHizB': 'nxTip',
        'qPlmF': function(_0xc2e4c5) {
            return _0xc2e4c5();
        },
        'LoOFR': function(_0x13b3b2, _0x3fa567) {
            return _0x13b3b2 === _0x3fa567;
        },
        'SSOLh': 'F45CB4F07997DFE748E5656521A9034446A1568F6950206B0D44A5664662275D'
    };
    return new Promise(async _0x43613c => {
        $['newShareCodes'] = [];
        if ($['shareCodesArr'][_0x3e18c6['miwID']($['index'], 0x1)]) {
            $['newShareCodes'] = $['shareCodesArr'][_0x3e18c6['VwxEk']($['index'], 0x1)]['split']('@');
        } else {
            if (_0x3e18c6['PBJFm'](_0x3e18c6['rHizB'], _0x3e18c6['rHizB'])) {
                console['log']('由于您第' + $['index'] + '个京东账号未提供shareCode,将采纳本脚本自带的助力码\n');
                $['newShareCodes'] = $['strMyShareIds'];
            } else {
                console['log']('随机取0个码放到您固定的互助码后面(不影响已有固定互助)');
                data = JSON['parse'](data);
            }
        }
        const _0x217779 = await _0x3e18c6['qPlmF'](readShareCode);
        if (_0x217779 && _0x3e18c6['LoOFR'](_0x217779['code'], 0xc8)) {
            $['newShareCodes'] = [...new Set([...$['newShareCodes'], ...$['strMyShareIds'], _0x3e18c6['SSOLh'], ..._0x217779['data'] || []])];
        }
        console['log']('第' + $['index'] + '个京东账号将要助力的好友' + JSON['stringify']($['newShareCodes']));
        _0x3e18c6['qPlmF'](_0x43613c);
    });
}

function requireConfig() {
    var _0x3a756b = {
        'WvuOC': 'abcdefghijklmnopqrstuvwxyz1234567890',
        'tAtyZ': function(_0x51e159, _0x3c0a08) {
            return _0x51e159 < _0x3c0a08;
        },
        'AICJo': function(_0x7edb07, _0x20d1bf) {
            return _0x7edb07(_0x20d1bf);
        },
        'qFfoy': function(_0xc1d867, _0x53b9a7) {
            return _0xc1d867 * _0x53b9a7;
        },
        'fwnZK': function(_0x3200f4, _0x208301) {
            return _0x3200f4 || _0x208301;
        },
        'WcdWp': 'HH:mm',
        'WDYNH': function(_0x31c300, _0x32c7e4) {
            return _0x31c300 === _0x32c7e4;
        },
        'KjJjZ': 'aRXth',
        'gJPsr': 'rMLKu',
        'RgApc': 'iGtIH',
        'mVhVg': 'WoQHo',
        'CAvml': function(_0x55d2be, _0x408759) {
            return _0x55d2be > _0x408759;
        },
        'esqJF': function(_0xd9acd6, _0x45b48c) {
            return _0xd9acd6 !== _0x45b48c;
        },
        'BZntD': 'NcEDi',
        'cCqJe': 'mRLXR',
        'uoPTB': 'xcjWz',
        'APZjZ': 'jd_jxCFD',
        'FXzKb': function(_0x28a15c) {
            return _0x28a15c();
        }
    };
    return new Promise(_0x3a7741 => {
        var _0x18d6d0 = {
            'qRclf': _0x3a756b['WvuOC'],
            'dsrZM': function(_0x26966c, _0x121a37) {
                return _0x3a756b['tAtyZ'](_0x26966c, _0x121a37);
            },
            'YlrlH': function(_0xa3c94c, _0x38a1b0) {
                return _0x3a756b['AICJo'](_0xa3c94c, _0x38a1b0);
            },
            'GhOoL': function(_0x3a476b, _0x3f943e) {
                return _0x3a756b['qFfoy'](_0x3a476b, _0x3f943e);
            },
            'JiIxg': function(_0x256c8a, _0x259cbd) {
                return _0x3a756b['fwnZK'](_0x256c8a, _0x259cbd);
            },
            'Gfwkv': function(_0x51cf1e, _0x5e77c5) {
                return _0x3a756b['AICJo'](_0x51cf1e, _0x5e77c5);
            },
            'SfGEs': _0x3a756b['WcdWp']
        };
        if (_0x3a756b['WDYNH'](_0x3a756b['KjJjZ'], _0x3a756b['gJPsr'])) {
            let _0x36048e = _0x18d6d0['qRclf'];
            let _0x57b583 = '';
            for (let _0x50ddba = 0x0; _0x18d6d0['dsrZM'](_0x50ddba, count); _0x50ddba++) {
                _0x57b583 += _0x36048e[_0x18d6d0['YlrlH'](parseInt, _0x18d6d0['GhOoL'](Math['random'](), _0x36048e['length']))];
            }
            return _0x57b583;
        } else {
            console['log']('开始获取' + $['name'] + '配置文件\n');
            let _0x1d5a71 = [];
            if ($['isNode']() && process['env']['JDCFD_SHARECODES']) {
                if (_0x3a756b['WDYNH'](_0x3a756b['RgApc'], _0x3a756b['mVhVg'])) {
                    $['logErr'](e, resp);
                } else {
                    if (_0x3a756b['CAvml'](process['env']['JDCFD_SHARECODES']['indexOf']('\x0a'), -0x1)) {
                        _0x1d5a71 = process['env']['JDCFD_SHARECODES']['split']('\x0a');
                    } else {
                        _0x1d5a71 = process['env']['JDCFD_SHARECODES']['split']('&');
                    }
                }
            }
            $['shareCodesArr'] = [];
            if ($['isNode']()) {
                if (_0x3a756b['esqJF'](_0x3a756b['BZntD'], _0x3a756b['BZntD'])) {
                    const {
                        iRet,
                        dwExpericnce,
                        sErrMsg
                    } = JSON['parse'](data);
                    $['log']('\x0a【' + place + '】🎁寻宝：' + sErrMsg + ' ，获取随机奖励：¥ ' + _0x18d6d0['JiIxg'](dwExpericnce, 0x0) + ' \x0a' + ($['showLog'] ? data : ''));
                    _0x18d6d0['Gfwkv'](_0x3a7741, iRet);
                } else {
                    Object['keys'](_0x1d5a71)['forEach'](_0x2bc246 => {
                        if (_0x1d5a71[_0x2bc246]) {
                            $['shareCodesArr']['push'](_0x1d5a71[_0x2bc246]);
                        }
                    });
                }
            } else {
                if (_0x3a756b['WDYNH'](_0x3a756b['cCqJe'], _0x3a756b['uoPTB'])) {
                    const _0xcf2b13 = $['notifyTime']['split'](',')['map'](_0x4bc5cf => _0x4bc5cf['split'](':'));
                    const _0x4435a6 = $['time'](_0x18d6d0['SfGEs'])['split'](':');
                    $['log']('\x0a' + JSON['stringify'](_0xcf2b13));
                    $['log']('\x0a' + JSON['stringify'](_0x4435a6));
                    if (_0xcf2b13['some'](_0x762391 => _0x762391[0x0] === _0x4435a6[0x0] && (!_0x762391[0x1] || _0x762391[0x1] === _0x4435a6[0x1]))) {
                        $['msg']($['name'], '', '' + $['result']['join']('\x0a'));
                    }
                } else {
                    if ($['getdata'](_0x3a756b['APZjZ'])) $['shareCodesArr'] = $['getdata'](_0x3a756b['APZjZ'])['split']('\x0a')['filter'](_0x4fb878 => !!_0x4fb878);
                    console['log']('\nBoxJs设置的京喜财富岛邀请码:' + $['getdata'](_0x3a756b['APZjZ']) + '\x0a');
                }
            }
            console['log']('您提供了' + $['shareCodesArr']['length'] + '个账号的' + $['name'] + '助力码\n');
            _0x3a756b['FXzKb'](_0x3a7741);
        }
    });
}

function jsonParse(_0x24f2ff) {
    var _0x565731 = {
        'SwMYu': function(_0x2b5a5a) {
            return _0x2b5a5a();
        },
        'DEVSK': function(_0x27e579, _0x1c21b7) {
            return _0x27e579 == _0x1c21b7;
        },
        'YSbkM': 'string',
        'nenlk': function(_0x95378e, _0x483451) {
            return _0x95378e !== _0x483451;
        },
        'dBZAI': 'gSDVx',
        'dVQAW': '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie'
    };
    if (_0x565731['DEVSK'](typeof _0x24f2ff, _0x565731['YSbkM'])) {
        try {
            if (_0x565731['nenlk'](_0x565731['dBZAI'], _0x565731['dBZAI'])) {
                _0x565731['SwMYu'](resolve);
            } else {
                return JSON['parse'](_0x24f2ff);
            }
        } catch (_0x4ee58e) {
            console['log'](_0x4ee58e);
            $['msg']($['name'], '', _0x565731['dVQAW']);
            return [];
        }
    }
};
_0xodd = 'jsjiami.com.v6'

!function(n){"use strict";function t(n,t){var r=(65535&n)+(65535&t);return(n>>16)+(t>>16)+(r>>16)<<16|65535&r}function r(n,t){return n<<t|n>>>32-t}function e(n,e,o,u,c,f){return t(r(t(t(e,n),t(u,f)),c),o)}function o(n,t,r,o,u,c,f){return e(t&r|~t&o,n,t,u,c,f)}function u(n,t,r,o,u,c,f){return e(t&o|r&~o,n,t,u,c,f)}function c(n,t,r,o,u,c,f){return e(t^r^o,n,t,u,c,f)}function f(n,t,r,o,u,c,f){return e(r^(t|~o),n,t,u,c,f)}function i(n,r){n[r>>5]|=128<<r%32,n[14+(r+64>>>9<<4)]=r;var e,i,a,d,h,l=1732584193,g=-271733879,v=-1732584194,m=271733878;for(e=0;e<n.length;e+=16)i=l,a=g,d=v,h=m,g=f(g=f(g=f(g=f(g=c(g=c(g=c(g=c(g=u(g=u(g=u(g=u(g=o(g=o(g=o(g=o(g,v=o(v,m=o(m,l=o(l,g,v,m,n[e],7,-680876936),g,v,n[e+1],12,-389564586),l,g,n[e+2],17,606105819),m,l,n[e+3],22,-1044525330),v=o(v,m=o(m,l=o(l,g,v,m,n[e+4],7,-176418897),g,v,n[e+5],12,1200080426),l,g,n[e+6],17,-1473231341),m,l,n[e+7],22,-45705983),v=o(v,m=o(m,l=o(l,g,v,m,n[e+8],7,1770035416),g,v,n[e+9],12,-1958414417),l,g,n[e+10],17,-42063),m,l,n[e+11],22,-1990404162),v=o(v,m=o(m,l=o(l,g,v,m,n[e+12],7,1804603682),g,v,n[e+13],12,-40341101),l,g,n[e+14],17,-1502002290),m,l,n[e+15],22,1236535329),v=u(v,m=u(m,l=u(l,g,v,m,n[e+1],5,-165796510),g,v,n[e+6],9,-1069501632),l,g,n[e+11],14,643717713),m,l,n[e],20,-373897302),v=u(v,m=u(m,l=u(l,g,v,m,n[e+5],5,-701558691),g,v,n[e+10],9,38016083),l,g,n[e+15],14,-660478335),m,l,n[e+4],20,-405537848),v=u(v,m=u(m,l=u(l,g,v,m,n[e+9],5,568446438),g,v,n[e+14],9,-1019803690),l,g,n[e+3],14,-187363961),m,l,n[e+8],20,1163531501),v=u(v,m=u(m,l=u(l,g,v,m,n[e+13],5,-1444681467),g,v,n[e+2],9,-51403784),l,g,n[e+7],14,1735328473),m,l,n[e+12],20,-1926607734),v=c(v,m=c(m,l=c(l,g,v,m,n[e+5],4,-378558),g,v,n[e+8],11,-2022574463),l,g,n[e+11],16,1839030562),m,l,n[e+14],23,-35309556),v=c(v,m=c(m,l=c(l,g,v,m,n[e+1],4,-1530992060),g,v,n[e+4],11,1272893353),l,g,n[e+7],16,-155497632),m,l,n[e+10],23,-1094730640),v=c(v,m=c(m,l=c(l,g,v,m,n[e+13],4,681279174),g,v,n[e],11,-358537222),l,g,n[e+3],16,-722521979),m,l,n[e+6],23,76029189),v=c(v,m=c(m,l=c(l,g,v,m,n[e+9],4,-640364487),g,v,n[e+12],11,-421815835),l,g,n[e+15],16,530742520),m,l,n[e+2],23,-995338651),v=f(v,m=f(m,l=f(l,g,v,m,n[e],6,-198630844),g,v,n[e+7],10,1126891415),l,g,n[e+14],15,-1416354905),m,l,n[e+5],21,-57434055),v=f(v,m=f(m,l=f(l,g,v,m,n[e+12],6,1700485571),g,v,n[e+3],10,-1894986606),l,g,n[e+10],15,-1051523),m,l,n[e+1],21,-2054922799),v=f(v,m=f(m,l=f(l,g,v,m,n[e+8],6,1873313359),g,v,n[e+15],10,-30611744),l,g,n[e+6],15,-1560198380),m,l,n[e+13],21,1309151649),v=f(v,m=f(m,l=f(l,g,v,m,n[e+4],6,-145523070),g,v,n[e+11],10,-1120210379),l,g,n[e+2],15,718787259),m,l,n[e+9],21,-343485551),l=t(l,i),g=t(g,a),v=t(v,d),m=t(m,h);return[l,g,v,m]}function a(n){var t,r="",e=32*n.length;for(t=0;t<e;t+=8)r+=String.fromCharCode(n[t>>5]>>>t%32&255);return r}function d(n){var t,r=[];for(r[(n.length>>2)-1]=void 0,t=0;t<r.length;t+=1)r[t]=0;var e=8*n.length;for(t=0;t<e;t+=8)r[t>>5]|=(255&n.charCodeAt(t/8))<<t%32;return r}function h(n){return a(i(d(n),8*n.length))}function l(n,t){var r,e,o=d(n),u=[],c=[];for(u[15]=c[15]=void 0,o.length>16&&(o=i(o,8*n.length)),r=0;r<16;r+=1)u[r]=909522486^o[r],c[r]=1549556828^o[r];return e=i(u.concat(d(t)),512+8*t.length),a(i(c.concat(e),640))}function g(n){var t,r,e="";for(r=0;r<n.length;r+=1)t=n.charCodeAt(r),e+="0123456789abcdef".charAt(t>>>4&15)+"0123456789abcdef".charAt(15&t);return e}function v(n){return unescape(encodeURIComponent(n))}function m(n){return h(v(n))}function p(n){return g(m(n))}function s(n,t){return l(v(n),v(t))}function C(n,t){return g(s(n,t))}function A(n,t,r){return t?r?s(t,n):C(t,n):r?m(n):p(n)}$.md5=A}(this);
// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
