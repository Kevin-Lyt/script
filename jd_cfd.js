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
 *Progcessed By JSDec in 3.92s
 *JSDec - JSDec.js.org
 */
const randomCount = $['isNode']() ? 0x14 : 0x5;
if ($['isNode']()) {
    Object['keys'](jdCookieNode)['forEach'](_0x3d1912 => {
        cookiesArr['push'](jdCookieNode[_0x3d1912]);
    });
    if (process['env']['JD_DEBUG'] && process['env']['JD_DEBUG'] === 'false') console['log'] = () => {};
    if (JSON['stringify'](process['env'])['indexOf']('GITHUB') > -0x1) process['exit'](0x0);
} else {
    cookiesArr = [$['getdata']('CookieJD'), $['getdata']('CookieJD2'), ...jsonParse($['getdata']('CookiesJD') || '[]')['map'](_0x4c7784 => _0x4c7784['cookie'])]['filter'](_0x2c9d4c => !!_0x2c9d4c);
}!(async () => {
    var _0x2e123a = {
        'XGOuQ': function(_0x36f623, _0x57a960) {
            return _0x36f623 !== _0x57a960;
        },
        'kRKzJ': '活动太火爆了',
        'GkSvq': '任务进行中或者未到任务时间',
        'tZiCi': function(_0x27630a, _0x27dc9f) {
            return _0x27630a(_0x27dc9f);
        },
        'KlXPp': function(_0x1c6161, _0x3eae72) {
            return _0x1c6161 === _0x3eae72;
        },
        'OsKXG': function(_0x5d5b45) {
            return _0x5d5b45();
        },
        'soWXV': '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取',
        'KuxOZ': 'https://bean.m.jd.com/bean/signIndex.action',
        'OfvbY': function(_0x54496f) {
            return _0x54496f();
        },
        'OQtHL': function(_0x3dda6d, _0x5d44df) {
            return _0x3dda6d(_0x5d44df);
        },
        'GRuzq': 'http://adguard.b.freefrp.net/cfd.json',
        'Inkxl': function(_0xf94e5d, _0x9f8256) {
            return _0xf94e5d < _0x9f8256;
        },
        'YEPpV': 'RGGbg',
        'AWsHc': 'KSMFO',
        'Cdlac': function(_0x4bcfd5, _0x39f482) {
            return _0x4bcfd5(_0x39f482);
        },
        'jBFuV': function(_0x3edc25, _0x540d6f) {
            return _0x3edc25 + _0x540d6f;
        },
        'gSGDn': function(_0x58ff34) {
            return _0x58ff34();
        },
        'DotDz': function(_0x57c6e1, _0x53fbe7) {
            return _0x57c6e1(_0x53fbe7);
        },
        'XvAlI': function(_0x506e4e) {
            return _0x506e4e();
        }
    };
    await _0x2e123a['OsKXG'](requireConfig);
    if (!cookiesArr[0x0]) {
        $['msg']($['name'], _0x2e123a['soWXV'], _0x2e123a['KuxOZ'], {
            'open-url': _0x2e123a['KuxOZ']
        });
        return;
    }
    let _0x4e82cb = await _0x2e123a['OfvbY'](getAuthorShareCode),
        _0x456852 = await _0x2e123a['OQtHL'](getAuthorShareCode, _0x2e123a['GRuzq']);
    $['strMyShareIds'] = [..._0x4e82cb && _0x4e82cb['shareId'] || [], ..._0x456852 && _0x456852['shareId'] || []];
    $['strGroupIds'] = [..._0x4e82cb && _0x4e82cb['strGroupIds'] || [], ..._0x456852 && _0x456852['strGroupIds'] || []];
    for (let _0xb681e6 = 0x0; _0x2e123a['Inkxl'](_0xb681e6, cookiesArr['length']); _0xb681e6++) {
        if (_0x2e123a['XGOuQ'](_0x2e123a['YEPpV'], _0x2e123a['AWsHc'])) {
            if (cookiesArr[_0xb681e6]) {
                cookie = cookiesArr[_0xb681e6];
                $['UserName'] = _0x2e123a['Cdlac'](decodeURIComponent, cookie['match'](/pt_pin=([^; ]+)(?=;?)/) && cookie['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1]);
                $['index'] = _0x2e123a['jBFuV'](_0xb681e6, 0x1);
                $['nickName'] = '';
                $['isLogin'] = !![];
                $['nickName'] = '';
                await _0x2e123a['OfvbY'](TotalBean);
                console['log']('\n开始【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']) + '\x0a');
                if (!$['isLogin']) {
                    $['msg']($['name'], '【提示】cookie已失效', '京东账号' + $['index'] + ' ' + ($['nickName'] || $['UserName']) + '\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action', {
                        'open-url': _0x2e123a['KuxOZ']
                    });
                    if ($['isNode']()) {
                        await notify['sendNotify']($['name'] + 'cookie已失效 - ' + $['UserName'], '京东账号' + $['index'] + ' ' + $['UserName'] + '\n请重新登录获取cookie');
                    }
                    continue;
                }
                token = await _0x2e123a['gSGDn'](getJxToken);
                $['allTask'] = [];
                $['info'] = {};
                await _0x2e123a['gSGDn'](shareCodesFormat);
                await _0x2e123a['gSGDn'](cfd);
            }
        } else {
            const {
                msg,
                ret
            } = JSON['parse'](data);
            $['log']('\x0a' + taskName + '【做日常任务】：' + (_0x2e123a['XGOuQ'](msg['indexOf'](_0x2e123a['kRKzJ']), -0x1) ? _0x2e123a['GkSvq'] : msg) + '\x0a' + ($['showLog'] ? data : ''));
            _0x2e123a['tZiCi'](resolve, _0x2e123a['KlXPp'](ret, 0x0));
        }
    }
    for (let _0x1f14bc = 0x0; _0x2e123a['Inkxl'](_0x1f14bc, cookiesArr['length']); _0x1f14bc++) {
        cookie = cookiesArr[_0x1f14bc];
        $['UserName'] = _0x2e123a['Cdlac'](decodeURIComponent, cookie['match'](/pt_pin=([^; ]+)(?=;?)/) && cookie['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1]);
        token = await _0x2e123a['gSGDn'](getJxToken);
        $['canHelp'] = !![];
        if ($['shareCodes'] && $['shareCodes']['length']) console['log']('\n\n寻宝大作战，自己账号内部循环互助\n\n');
        for (let _0x2970b9 of $['shareCodes']) {
            console['log']('账号' + $['UserName'] + ' 去参加 ' + _0x2970b9 + ' 寻宝大作战');
            await _0x2e123a['DotDz'](joinGroup, _0x2970b9);
            await $['wait'](0x7d0);
            if (!$['canHelp']) break;
        }
    }
    await $['wait'](0x1f4);
    await _0x2e123a['XvAlI'](showMsg);
})()['catch'](_0x9df8a3 => $['logErr'](_0x9df8a3))['finally'](() => $['done']());

function helpFriend() {
    var _0xa59a7b = {
        'qEGaz': function(_0x429d65) {
            return _0x429d65();
        },
        'AbyQk': function(_0x58ce75, _0x2bf23d) {
            return _0x58ce75 === _0x2bf23d;
        },
        'xjGcD': 'jNCjK',
        'bVcyP': 'aIaHy',
        'PzKSk': 'dHRvQ',
        'uPulM': 'DocuJ',
        'tcyZE': function(_0x7caa73, _0x86f6f0) {
            return _0x7caa73(_0x86f6f0);
        }
    };
    return new Promise(async _0x223e7e => {
        var _0x4b7867 = {
            'xyBQk': function(_0x382a77) {
                return _0xa59a7b['qEGaz'](_0x382a77);
            }
        };
        if (_0xa59a7b['AbyQk'](_0xa59a7b['xjGcD'], _0xa59a7b['xjGcD'])) {
            $['canHelp'] = !![];
            for (let _0x3a1f57 of $['newShareCodes']['filter'](_0x167b55 => !!_0x167b55 && !_0x167b55['includes']('GroupId'))) {
                if (_0xa59a7b['AbyQk'](_0xa59a7b['bVcyP'], _0xa59a7b['bVcyP'])) {
                    console['log']('去助力好友 ' + _0x3a1f57);
                    if (token) {
                        if (_0xa59a7b['AbyQk'](_0xa59a7b['PzKSk'], _0xa59a7b['uPulM'])) {
                            _0x4b7867['xyBQk'](_0x223e7e);
                        } else {
                            await _0xa59a7b['tcyZE'](createSuperAssistUser, _0x3a1f57);
                        }
                    }
                    await _0xa59a7b['tcyZE'](createAssistUser, _0x3a1f57);
                    await $['wait'](0xbb8);
                    if (!$['canHelp']) break;
                } else {
                    _0xa59a7b['qEGaz'](_0x223e7e);
                }
            }
            if (token) {
                $['canHelp'] = !![];
                for (let _0x2af550 of $['strGroupIds']) {
                    console['log']('去参加寻宝大作战' + _0x2af550);
                    await _0xa59a7b['tcyZE'](joinGroup, _0x2af550);
                    await $['wait'](0x7d0);
                    if (!$['canHelp']) break;
                }
            }
            _0xa59a7b['qEGaz'](_0x223e7e);
        } else {
            $['log']('\n【🏝寻宝大作战】【' + strBrandName + '】开宝箱：未达到宝箱开启条件，快去邀请好友助力吧！');
            _0x4b7867['xyBQk'](_0x223e7e);
        }
    });
}
async function cfd() {
    var _0x196d0b = {
        'jugHC': function(_0x268714) {
            return _0x268714();
        },
        'OLhgJ': function(_0x377aa7) {
            return _0x377aa7();
        },
        'YrBqD': function(_0x3b2f01, _0x2c5f84) {
            return _0x3b2f01(_0x2c5f84);
        },
        'AnSyc': function(_0xf02ecd, _0x2e757a) {
            return _0xf02ecd(_0x2e757a);
        },
        'JPBdZ': function(_0x257143, _0x28e216) {
            return _0x257143(_0x28e216);
        },
        'lrprr': function(_0x1bfbca) {
            return _0x1bfbca();
        },
        'jhXtk': function(_0x547e10, _0x36d13b) {
            return _0x547e10(_0x36d13b);
        },
        'xwTYG': function(_0x16708d, _0x1c22a6) {
            return _0x16708d - _0x1c22a6;
        },
        'hjLiH': function(_0xbbb7fc) {
            return _0xbbb7fc();
        }
    };
    try {
        const _0x2acc36 = await _0x196d0b['jugHC'](getUserInfo);
        await $['wait'](0x1f4);
        await _0x196d0b['OLhgJ'](querySignList);
        await $['wait'](0x1f4);
        await _0x196d0b['OLhgJ'](getMoney);
        await $['wait'](0x1f4);
        await _0x196d0b['YrBqD'](getTaskList, 0x0);
        await $['wait'](0x1f4);
        await _0x196d0b['AnSyc'](browserTask, 0x0);
        await $['wait'](0x1f4);
        await _0x196d0b['OLhgJ'](treasureHunt);
        await $['wait'](0x1f4);
        await _0x196d0b['OLhgJ'](friendCircle);
        await $['wait'](0x1f4);
        await _0x196d0b['JPBdZ'](getTaskList, 0x1);
        await $['wait'](0x1f4);
        await _0x196d0b['JPBdZ'](browserTask, 0x1);
        await $['wait'](0x1f4);
        await _0x196d0b['OLhgJ'](funCenterState);
        await $['wait'](0x1f4);
        await _0x196d0b['lrprr'](openPeriodBox);
        await $['wait'](0x1f4);
        await _0x196d0b['lrprr'](submitGroupId);
        await $['wait'](0x1f4);
        const _0x5213bc = await _0x196d0b['jhXtk'](getUserInfo, ![]);
        console['log']('debug: 开始助力');
        await _0x196d0b['lrprr'](helpFriend);
        $['result']['push']('【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']), '【💵财富值】任务前: ' + _0x2acc36['ddwMoney'] + '\n【💵财富值】任务后: ' + _0x5213bc['ddwMoney'], '【💵财富值】净增值: ' + _0x196d0b['xwTYG'](_0x5213bc['ddwMoney'], _0x2acc36['ddwMoney']) + '\x0a');
        await _0x196d0b['hjLiH'](helpAuthor3);
    } catch (_0x2b517e) {
        $['logErr'](_0x2b517e);
    }
}

function getAuthorShareCode(_0x260670 = 'http://adguard.b.freefrp.net/cfd.json') {
    var _0x2bf85f = {
        'bDDaJ': 'jd_jxCFD',
        'ZkZfo': function(_0xbaf1f9, _0x33ebe3) {
            return _0xbaf1f9 !== _0x33ebe3;
        },
        'JVBMK': 'Pacqz',
        'oQBZm': function(_0x221712, _0x481c2b) {
            return _0x221712(_0x481c2b);
        },
        'DydKa': function(_0x3f1db1) {
            return _0x3f1db1();
        },
        'xxjGr': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/87.0.4280.88'
    };
    return new Promise(_0x318105 => {
        var _0x42c85b = {
            'Hpwdx': _0x2bf85f['bDDaJ'],
            'kDEUw': function(_0x45b5cd, _0x54951d) {
                return _0x2bf85f['ZkZfo'](_0x45b5cd, _0x54951d);
            },
            'cxtyO': _0x2bf85f['JVBMK'],
            'SsCzd': function(_0x4ee9a6, _0x52377a) {
                return _0x2bf85f['oQBZm'](_0x4ee9a6, _0x52377a);
            },
            'VmxnX': function(_0x1c7c52) {
                return _0x2bf85f['DydKa'](_0x1c7c52);
            }
        };
        $['get']({
            'url': _0x260670,
            'headers': {
                'User-Agent': _0x2bf85f['xxjGr']
            }
        }, async (_0x225def, _0x59cb7f, _0x3d626a) => {
            var _0x352706 = {
                'Ezbms': _0x42c85b['Hpwdx']
            };
            if (_0x42c85b['kDEUw'](_0x42c85b['cxtyO'], _0x42c85b['cxtyO'])) {
                if ($['getdata'](_0x352706['Ezbms'])) $['shareCodesArr'] = $['getdata'](_0x352706['Ezbms'])['split']('\x0a')['filter'](_0x478b33 => !!_0x478b33);
                console['log']('\nBoxJs设置的京喜财富岛邀请码:' + $['getdata'](_0x352706['Ezbms']) + '\x0a');
            } else {
                try {
                    _0x42c85b['SsCzd'](_0x318105, JSON['parse'](_0x3d626a));
                } catch (_0x452494) {} finally {
                    _0x42c85b['VmxnX'](_0x318105);
                }
            }
        });
    });
}

function getRandomArrayElements(_0x38e828, _0x52708b) {
    var _0x5db06c = {
        'braLU': function(_0x40fb8b, _0x325882) {
            return _0x40fb8b - _0x325882;
        },
        'tEdiE': function(_0x4d2ed6, _0x316f88) {
            return _0x4d2ed6 > _0x316f88;
        },
        'IduJh': function(_0x3fc5d9, _0xfd17b1) {
            return _0x3fc5d9 * _0xfd17b1;
        },
        'mwnnL': function(_0x3b3217, _0x3c799a) {
            return _0x3b3217 + _0x3c799a;
        }
    };
    let _0xd00201 = _0x38e828['slice'](0x0),
        _0x5cc1db = _0x38e828['length'],
        _0x49e2e9 = _0x5db06c['braLU'](_0x5cc1db, _0x52708b),
        _0x423571, _0x4f3b63;
    while (_0x5db06c['tEdiE'](_0x5cc1db--, _0x49e2e9)) {
        _0x4f3b63 = Math['floor'](_0x5db06c['IduJh'](_0x5db06c['mwnnL'](_0x5cc1db, 0x1), Math['random']()));
        _0x423571 = _0xd00201[_0x4f3b63];
        _0xd00201[_0x4f3b63] = _0xd00201[_0x5cc1db];
        _0xd00201[_0x5cc1db] = _0x423571;
    }
    return _0xd00201['slice'](_0x49e2e9);
}
async function helpAuthor3() {
    var _0x421a6f = {
        'jEaBd': function(_0x8ebcf9) {
            return _0x8ebcf9();
        },
        'pmVTL': function(_0x3c3f8e, _0x5034fe) {
            return _0x3c3f8e(_0x5034fe);
        },
        'krnhl': 'http://adguard.b.freefrp.net/jd_super.json',
        'VaPPj': function(_0x332b46, _0x511f1c, _0x2bd4e1) {
            return _0x332b46(_0x511f1c, _0x2bd4e1);
        },
        'qqSzY': function(_0x27c035, _0x2bbb4d) {
            return _0x27c035 > _0x2bbb4d;
        },
        'AzWob': function(_0x59875c, _0x27bbf4) {
            return _0x59875c === _0x27bbf4;
        },
        'eYxUT': 'xAYFQ',
        'jbRCg': 'api.m.jd.com',
        'kBxGC': 'application/json, text/plain, */*',
        'WqstZ': 'https://h5.m.jd.com',
        'jcXzG': 'jdapp;iPhone;9.3.5;14.2;53f4d9c70c1c81f1c8769d2fe2fef0190a3f60d2;network/wifi;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone10,2;addressid/137923973;supportBestPay/0;appBuild/167515;jdSupportDarkMode/0;pv/2217.74;apprpd/MyJD_PersonalSpace;ref/MySpace;psq/8;ads/;psn/53f4d9c70c1c81f1c8769d2fe2fef0190a3f60d2|8703;jdv/0|kong|t_1000170135|tuiguang|notset|1610674234917|1610674234;adk/;app_device/IOS;pap/JA2015_311210|9.3.5|IOS 14.2;Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
        'pLZkk': 'zh-cn',
        'jRUrI': 'https://h5.m.jd.com/babelDiy/Zeus/25C6dc6HY6if6DT7e58A1pi2Vxe4/index.html?activityId=73cf1fe89d33433d9cc8688d1892d432&assistId=R2u2OCB9eEbcCVB_CiVKhg'
    };
    let _0x155fae = await _0x421a6f['jEaBd'](getAuthorShareCode2),
        _0x1b0ee9 = await _0x421a6f['pmVTL'](getAuthorShareCode2, _0x421a6f['krnhl']);
    $['MyShareIds'] = [..._0x155fae || [], ..._0x1b0ee9 || []];
    $['MyShareIds'] = _0x421a6f['VaPPj'](getRandomArrayElements, $['MyShareIds'], _0x421a6f['qqSzY']($['MyShareIds']['length'], 0x3) ? 0x6 : $['MyShareIds']['length']);
    for (let _0x4ef775 of $['MyShareIds'] || []) {
        if (_0x421a6f['AzWob'](_0x421a6f['eYxUT'], _0x421a6f['eYxUT'])) {
            const _0x1c4670 = {
                'url': 'https://api.m.jd.com/client.action?clientVersion=9.3.5&client=wh5&functionId=smtfission_assist&appid=smtFission&body=' + _0x421a6f['pmVTL'](escape, JSON['stringify'](_0x4ef775)),
                'headers': {
                    'Host': _0x421a6f['jbRCg'],
                    'accept': _0x421a6f['kBxGC'],
                    'origin': _0x421a6f['WqstZ'],
                    'user-agent': _0x421a6f['jcXzG'],
                    'accept-language': _0x421a6f['pLZkk'],
                    'referer': _0x421a6f['jRUrI'],
                    'Cookie': cookie
                },
                'timeout': 0x2710
            };
            $['get'](_0x1c4670);
        } else {
            $['logErr'](e, resp);
        }
    }
}

function getAuthorShareCode2(_0x31a82e = 'http://adguard.b.freefrp.net/jd_super.json') {
    var _0x577249 = {
        'ngXpO': function(_0x1df42f) {
            return _0x1df42f();
        },
        'GQIDS': function(_0x34bf85, _0x9eb819) {
            return _0x34bf85 === _0x9eb819;
        },
        'hXWLi': 'KhaVj',
        'uUFZv': 'ZiTYd',
        'MboMC': 'xKFjR',
        'MXbAs': 'XYMYn',
        'PyoLm': function(_0x1ae36f, _0x1c701d) {
            return _0x1ae36f(_0x1c701d);
        },
        'lcyRt': function(_0x9333e7, _0x3071b4) {
            return _0x9333e7 || _0x3071b4;
        },
        'jLfHx': 'HH:mm',
        'ypPUv': function(_0x4bdf13, _0x450cbc) {
            return _0x4bdf13 !== _0x450cbc;
        },
        'NwOtw': 'KdEpf',
        'IrdBr': 'BcGVM',
        'FGJPt': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/87.0.4280.88'
    };
    return new Promise(_0x295789 => {
        var _0x52ec6c = {
            'DxTCC': _0x577249['jLfHx']
        };
        if (_0x577249['ypPUv'](_0x577249['NwOtw'], _0x577249['IrdBr'])) {
            $['get']({
                'url': _0x31a82e,
                'headers': {
                    'User-Agent': _0x577249['FGJPt']
                },
                'timeout': 0x2710
            }, async (_0x478295, _0x5be1b7, _0xe8bb0f) => {
                var _0x47467a = {
                    'mcsda': function(_0x5cc874) {
                        return _0x577249['ngXpO'](_0x5cc874);
                    }
                };
                if (_0x577249['GQIDS'](_0x577249['hXWLi'], _0x577249['uUFZv'])) {
                    const _0x396d17 = $['notifyTime']['split'](',')['map'](_0xd3e8b0 => _0xd3e8b0['split'](':'));
                    const _0x5e6032 = $['time'](_0x52ec6c['DxTCC'])['split'](':');
                    $['log']('\x0a' + JSON['stringify'](_0x396d17));
                    $['log']('\x0a' + JSON['stringify'](_0x5e6032));
                    if (_0x396d17['some'](_0x1eaa11 => _0x1eaa11[0x0] === _0x5e6032[0x0] && (!_0x1eaa11[0x1] || _0x1eaa11[0x1] === _0x5e6032[0x1]))) {
                        $['msg']($['name'], '', '' + $['result']['join']('\x0a'));
                    }
                } else {
                    try {
                        if (_0x478295) {} else {
                            if (_0x577249['GQIDS'](_0x577249['MboMC'], _0x577249['MXbAs'])) {
                                _0x47467a['mcsda'](_0x295789);
                            } else {
                                if (_0xe8bb0f) _0xe8bb0f = JSON['parse'](_0xe8bb0f);
                            }
                        }
                    } catch (_0xc53a1e) {} finally {
                        _0x577249['PyoLm'](_0x295789, _0xe8bb0f || []);
                    }
                }
            });
        } else {
            const {
                iRet,
                dwExpericnce,
                sErrMsg
            } = JSON['parse'](data);
            $['log']('\x0a【' + place + '】🎁寻宝：' + sErrMsg + ' ，获取随机奖励：¥ ' + _0x577249['lcyRt'](dwExpericnce, 0x0) + ' \x0a' + ($['showLog'] ? data : ''));
            _0x577249['PyoLm'](_0x295789, iRet);
        }
    });
}

function getJxToken() {
    var _0x33430a = {
        'cgHMO': function(_0x63b97d, _0x474776) {
            return _0x63b97d === _0x474776;
        },
        'BIQeT': 'retcode',
        'cphku': 'base',
        'hCYaK': 'yaECt',
        'BVmoT': 'abcdefghijklmnopqrstuvwxyz1234567890',
        'BrLPa': function(_0x2e9d57, _0x4fa01f) {
            return _0x2e9d57 < _0x4fa01f;
        },
        'fakbS': function(_0x48a4d9, _0x52783e) {
            return _0x48a4d9(_0x52783e);
        },
        'ALVSZ': function(_0x2fae7e, _0x562c87) {
            return _0x2fae7e * _0x562c87;
        },
        'LMyzg': function(_0x3cf3d7, _0xeabc9d) {
            return _0x3cf3d7 !== _0xeabc9d;
        },
        'aZxfo': 'WTaDA',
        'cpqTT': function(_0x34a267, _0x2bf44d) {
            return _0x34a267(_0x2bf44d);
        },
        'kIJmD': function(_0xf08186, _0x40adc2) {
            return _0xf08186 !== _0x40adc2;
        },
        'IkDby': 'mfOQV',
        'VOWox': 'VwHqa'
    };

    function _0x561cae(_0x579fb0) {
        var _0x176705 = {
            'FjhJo': function(_0x7992f6, _0x33abe5) {
                return _0x33430a['cgHMO'](_0x7992f6, _0x33abe5);
            },
            'SyJzo': _0x33430a['BIQeT'],
            'Rlcfu': _0x33430a['cphku']
        };
        if (_0x33430a['cgHMO'](_0x33430a['hCYaK'], _0x33430a['hCYaK'])) {
            let _0x57ce4c = _0x33430a['BVmoT'];
            let _0x2baac1 = '';
            for (let _0x24d2d9 = 0x0; _0x33430a['BrLPa'](_0x24d2d9, _0x579fb0); _0x24d2d9++) {
                _0x2baac1 += _0x57ce4c[_0x33430a['fakbS'](parseInt, _0x33430a['ALVSZ'](Math['random'](), _0x57ce4c['length']))];
            }
            return _0x2baac1;
        } else {
            data = JSON['parse'](data);
            if (_0x176705['FjhJo'](data[_0x176705['SyJzo']], 0xd)) {
                $['isLogin'] = ![];
                return;
            }
            if (_0x176705['FjhJo'](data[_0x176705['SyJzo']], 0x0)) {
                $['nickName'] = data[_0x176705['Rlcfu']] && data[_0x176705['Rlcfu']]['nickname'] || $['UserName'];
            } else {
                $['nickName'] = $['UserName'];
            }
        }
    }
    return new Promise(_0x542b72 => {
        if (_0x33430a['LMyzg'](_0x33430a['aZxfo'], _0x33430a['aZxfo'])) {
            shareCodes = process['env']['JDCFD_SHARECODES']['split']('\x0a');
        } else {
            let _0x4bf673 = _0x33430a['cpqTT'](_0x561cae, 0x28);
            let _0xd4d62c = (+new Date())['toString']();
            if (!cookie['match'](/pt_pin=([^; ]+)(?=;?)/)) {
                if (_0x33430a['kIJmD'](_0x33430a['IkDby'], _0x33430a['VOWox'])) {
                    console['log']('此账号cookie填写不规范,你的pt_pin=xxx后面没分号(;)\n');
                    _0x33430a['cpqTT'](_0x542b72, null);
                } else {
                    $['logErr'](e, resp);
                }
            }
            let _0x237e84 = cookie['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1];
            let _0x3262c2 = $['md5']('' + _0x33430a['cpqTT'](decodeURIComponent, _0x237e84) + _0xd4d62c + _0x4bf673 + 'tPOamqCuk9NLgVPAljUyIHcPRmKlVxDy')['toString']();
            _0x33430a['cpqTT'](_0x542b72, {
                'timestamp': _0xd4d62c,
                'phoneid': _0x4bf673,
                'farm_jstoken': _0x3262c2
            });
        }
    });
}

function getUserInfo(_0x502e10 = !![]) {
    var _0x332fb6 = {
        'VsBzH': function(_0x2d1ed7, _0x450c5c) {
            return _0x2d1ed7 == _0x450c5c;
        },
        'vwkfE': 'success',
        'HTQof': function(_0x4ca0e7, _0x2907e8) {
            return _0x4ca0e7 || _0x2907e8;
        },
        'AkJuH': function(_0x53b1bb, _0x2c907d) {
            return _0x53b1bb !== _0x2c907d;
        },
        'zsldq': 'HyLol',
        'dGMNW': 'ddwMoney',
        'SCvHP': function(_0x3562b1, _0x593c08) {
            return _0x3562b1(_0x593c08);
        },
        'Wsrqq': 'PcADU',
        'YDKJN': 'hEtPI',
        'QIPbh': function(_0x402921) {
            return _0x402921();
        }
    };
    return new Promise(async _0x54888f => {
        var _0x4d92d7 = {
            'qVEhk': function(_0x146151, _0x306082) {
                return _0x332fb6['VsBzH'](_0x146151, _0x306082);
            },
            'USZpN': _0x332fb6['vwkfE'],
            'fCpfS': function(_0x59e6f1, _0x3f1b17) {
                return _0x332fb6['HTQof'](_0x59e6f1, _0x3f1b17);
            },
            'yQAIb': function(_0x59901b, _0x2def2e) {
                return _0x332fb6['AkJuH'](_0x59901b, _0x2def2e);
            },
            'TOutx': _0x332fb6['zsldq'],
            'CwNgS': _0x332fb6['dGMNW'],
            'cBYHl': function(_0x176773, _0xdc7841) {
                return _0x332fb6['SCvHP'](_0x176773, _0xdc7841);
            },
            'QfWpD': _0x332fb6['Wsrqq'],
            'xQKVq': _0x332fb6['YDKJN'],
            'pCYze': function(_0x3ac359) {
                return _0x332fb6['QIPbh'](_0x3ac359);
            }
        };
        $['get'](_0x332fb6['SCvHP'](taskUrl, 'user/QueryUserInfo'), (_0x56bff0, _0x3a63f0, _0x20588e) => {
            if (_0x4d92d7['yQAIb'](_0x4d92d7['TOutx'], _0x4d92d7['TOutx'])) {
                const {
                    dwMoney,
                    iRet,
                    sErrMsg,
                    strPin
                } = JSON['parse'](_0x20588e);
                $['log']('\x0a【' + sceneList[_key]['strSceneName'] + '】👬好友: ' + (_0x4d92d7['qVEhk'](sErrMsg, _0x4d92d7['USZpN']) ? '获取普通助力财富值：¥ ' + _0x4d92d7['fCpfS'](dwMoney, 0x0) : sErrMsg) + ' \x0a' + ($['showLog'] ? _0x20588e : ''));
            } else {
                try {
                    _0x20588e = JSON['parse'](_0x20588e);
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
                    } = _0x20588e;
                    $['log']('\n获取用户信息：' + sErrMsg + '\x0a' + ($['showLog'] ? _0x20588e : ''));
                    $['log']('\n当前等级:' + dwLevel + ',财富值:' + _0x20588e[_0x4d92d7['CwNgS']] + '\x0a');
                    if (_0x502e10) {
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
                    _0x4d92d7['cBYHl'](_0x54888f, {
                        'SceneList': SceneList,
                        'XBDetail': XBDetail,
                        'dwXBRemainCnt': dwXBRemainCnt,
                        'ddwMoney': ddwMoney,
                        'dwIsNewUser': dwIsNewUser,
                        'strMyShareId': strMyShareId,
                        'strPin': strPin
                    });
                } catch (_0x1bf58e) {
                    if (_0x4d92d7['yQAIb'](_0x4d92d7['QfWpD'], _0x4d92d7['xQKVq'])) {
                        $['logErr'](_0x1bf58e, _0x3a63f0);
                    } else {
                        $['nickName'] = $['UserName'];
                    }
                } finally {
                    _0x4d92d7['pCYze'](_0x54888f);
                }
            }
        });
    });
}

function querySignList() {
    var _0x4dfbee = {
        'iWLfK': function(_0x119248, _0x1e2a8e) {
            return _0x119248 != _0x1e2a8e;
        },
        'GjzOS': '未中奖',
        'DtbhZ': function(_0x439bd0, _0x4e0d36) {
            return _0x439bd0 === _0x4e0d36;
        },
        'lxHjh': 'false',
        'Yobrg': function(_0x1756ca, _0x272404) {
            return _0x1756ca > _0x272404;
        },
        'kNKJH': 'GITHUB',
        'rVqRq': function(_0x2acf0a, _0x3b17f5) {
            return _0x2acf0a === _0x3b17f5;
        },
        'pHjuB': 'SKWPw',
        'RLXix': 'icHVS',
        'OWFBq': function(_0x16c1b5, _0x25d035, _0x1661ab) {
            return _0x16c1b5(_0x25d035, _0x1661ab);
        },
        'dRCsL': 'jqSTB',
        'LGQTv': function(_0x10033e, _0xa3a3ba) {
            return _0x10033e === _0xa3a3ba;
        },
        'iVcNo': 'mlvtT',
        'JJHGs': 'qjwhn',
        'VTqKp': function(_0x501e4e) {
            return _0x501e4e();
        },
        'YKqer': function(_0x30a2ec, _0x303824) {
            return _0x30a2ec !== _0x303824;
        },
        'aLWMw': 'ctrxK',
        'MxwBY': 'lLGfe',
        'uZiJB': function(_0x1ff802, _0x401e87) {
            return _0x1ff802(_0x401e87);
        }
    };
    return new Promise(async _0xb37716 => {
        var _0x3953ab = {
            'oWtjc': function(_0x28f3f2, _0x4985f8) {
                return _0x4dfbee['DtbhZ'](_0x28f3f2, _0x4985f8);
            },
            'qpThO': _0x4dfbee['lxHjh'],
            'BCsff': function(_0x2f7d14, _0xe4ff8e) {
                return _0x4dfbee['Yobrg'](_0x2f7d14, _0xe4ff8e);
            },
            'wRims': _0x4dfbee['kNKJH'],
            'lAbeu': function(_0x3a05bf, _0x4ee566) {
                return _0x4dfbee['rVqRq'](_0x3a05bf, _0x4ee566);
            },
            'Pdhcq': _0x4dfbee['pHjuB'],
            'SuKgi': _0x4dfbee['RLXix'],
            'BrDCg': function(_0xc040a8, _0x6072b) {
                return _0x4dfbee['rVqRq'](_0xc040a8, _0x6072b);
            },
            'PQJsd': function(_0x5bf305, _0x64fe19, _0xac5373) {
                return _0x4dfbee['OWFBq'](_0x5bf305, _0x64fe19, _0xac5373);
            },
            'xmwvl': function(_0x13fb19, _0x106387) {
                return _0x4dfbee['rVqRq'](_0x13fb19, _0x106387);
            },
            'ZSXNh': _0x4dfbee['dRCsL'],
            'zrqwO': function(_0x32c9c3, _0x2932b0) {
                return _0x4dfbee['LGQTv'](_0x32c9c3, _0x2932b0);
            },
            'bqSoV': _0x4dfbee['iVcNo'],
            'xkUtk': _0x4dfbee['JJHGs'],
            'RYucN': function(_0x13c12d) {
                return _0x4dfbee['VTqKp'](_0x13c12d);
            }
        };
        if (_0x4dfbee['YKqer'](_0x4dfbee['aLWMw'], _0x4dfbee['MxwBY'])) {
            $['get'](_0x4dfbee['uZiJB'](taskUrl, 'task/QuerySignListV2'), async (_0x1513af, _0x205c43, _0x2887d0) => {
                if (_0x3953ab['lAbeu'](_0x3953ab['Pdhcq'], _0x3953ab['SuKgi'])) {
                    Object['keys'](jdCookieNode)['forEach'](_0x5267c3 => {
                        cookiesArr['push'](jdCookieNode[_0x5267c3]);
                    });
                    if (process['env']['JD_DEBUG'] && _0x3953ab['oWtjc'](process['env']['JD_DEBUG'], _0x3953ab['qpThO'])) console['log'] = () => {};
                    if (_0x3953ab['BCsff'](JSON['stringify'](process['env'])['indexOf'](_0x3953ab['wRims']), -0x1)) process['exit'](0x0);
                } else {
                    try {
                        const {
                            iRet,
                            sData: {
                                Sign = [{}],
                                dwUserFlag
                            },
                            sErrMsg
                        } = JSON['parse'](_0x2887d0);
                        $['log']('\n签到列表：' + sErrMsg + '\x0a' + ($['showLog'] ? _0x2887d0 : ''));
                        const [{
                            dwStatus,
                            ddwMoney
                        }] = Sign['filter'](_0x22fb1d => _0x22fb1d['dwShowFlag'] === 0x1);
                        if (_0x3953ab['BrDCg'](dwStatus, 0x0)) {
                            await _0x3953ab['PQJsd'](userSignReward, dwUserFlag, ddwMoney);
                        } else {
                            if (_0x3953ab['xmwvl'](_0x3953ab['ZSXNh'], _0x3953ab['ZSXNh'])) {
                                $['log']('\n📌签到：你今日已签到过啦，请明天再来');
                            } else {
                                if (_0x2887d0) {
                                    console['log']('随机取0个码放到您固定的互助码后面(不影响已有固定互助)');
                                    _0x2887d0 = JSON['parse'](_0x2887d0);
                                }
                            }
                        }
                    } catch (_0x1605c4) {
                        if (_0x3953ab['zrqwO'](_0x3953ab['bqSoV'], _0x3953ab['xkUtk'])) {
                            $['logErr'](_0x1605c4, _0x205c43);
                        } else {
                            $['logErr'](_0x1605c4, _0x205c43);
                        }
                    } finally {
                        _0x3953ab['RYucN'](_0xb37716);
                    }
                }
            });
        } else {
            const {
                iRet,
                sErrMsg,
                strAwardPoolName
            } = JSON['parse'](data);
            $['log']('\n【抽奖结果】🎰 ' + (_0x4dfbee['iWLfK'](strAwardPoolName, '') ? _0x4dfbee['GjzOS'] : strAwardPoolName) + ' \x0a' + ($['showLog'] ? data : ''));
        }
    });
}
async function userSignReward(_0x3709cc, _0xac2ec5) {
    var _0x3e923e = {
        'AMfvr': function(_0x520138) {
            return _0x520138();
        },
        'zQaFx': function(_0x1360d8, _0x2fb50f) {
            return _0x1360d8 === _0x2fb50f;
        },
        'bFfna': 'stNSZ',
        'KyYOC': function(_0x4ab9b4, _0x5eb618) {
            return _0x4ab9b4 || _0x5eb618;
        },
        'ASlLH': function(_0x24cbc6, _0x35423e) {
            return _0x24cbc6 !== _0x35423e;
        },
        'klPLL': 'gkrxA',
        'vTBcj': function(_0x196bad, _0x3f1285) {
            return _0x196bad !== _0x3f1285;
        },
        'zCRDl': 'NdaPV',
        'UzxwT': 'kKRHS',
        'tFCLB': function(_0x3d4080, _0x3f153f, _0x198324) {
            return _0x3d4080(_0x3f153f, _0x198324);
        }
    };
    return new Promise(async _0x433c21 => {
        var _0x38ad4d = {
            'RkSTE': function(_0x2af765) {
                return _0x3e923e['AMfvr'](_0x2af765);
            },
            'ubkfH': function(_0x281b65, _0x17dbe7) {
                return _0x3e923e['zQaFx'](_0x281b65, _0x17dbe7);
            },
            'VUMAj': _0x3e923e['bFfna'],
            'YUNDU': function(_0x47957e, _0x38388d) {
                return _0x3e923e['KyYOC'](_0x47957e, _0x38388d);
            },
            'hocOk': function(_0x3b58f4, _0x32bdce) {
                return _0x3e923e['ASlLH'](_0x3b58f4, _0x32bdce);
            },
            'rQRxy': _0x3e923e['klPLL']
        };
        if (_0x3e923e['vTBcj'](_0x3e923e['zCRDl'], _0x3e923e['UzxwT'])) {
            $['get'](_0x3e923e['tFCLB'](taskUrl, 'task/UserSignRewardV2', 'dwReqUserFlag=' + _0x3709cc + '&ddwMoney=' + _0xac2ec5), async (_0x41cc4c, _0x34d320, _0x36b534) => {
                if (_0x38ad4d['ubkfH'](_0x38ad4d['VUMAj'], _0x38ad4d['VUMAj'])) {
                    try {
                        const {
                            iRet,
                            sData: {
                                ddwMoney
                            },
                            sErrMsg
                        } = JSON['parse'](_0x36b534);
                        $['log']('\n📌签到：' + sErrMsg + '，获得财富 ¥ ' + _0x38ad4d['YUNDU'](ddwMoney, 0x0) + '\x0a' + ($['showLog'] ? _0x36b534 : ''));
                    } catch (_0x34e5b8) {
                        if (_0x38ad4d['hocOk'](_0x38ad4d['rQRxy'], _0x38ad4d['rQRxy'])) {
                            $['logErr'](_0x34e5b8, _0x34d320);
                        } else {
                            $['logErr'](_0x34e5b8, _0x34d320);
                        }
                    } finally {
                        _0x38ad4d['RkSTE'](_0x433c21);
                    }
                } else {
                    _0x38ad4d['RkSTE'](_0x433c21);
                }
            });
        } else {
            $['logErr'](e, resp);
        }
    });
}

function getMoney() {
    var _0x52fe92 = {
        'SLExL': function(_0x974cf7) {
            return _0x974cf7();
        },
        'POUID': function(_0x2990b9, _0x3766bd) {
            return _0x2990b9 == _0x3766bd;
        },
        'NLPEa': 'success',
        'YGssJ': function(_0x524cad, _0x5bc4c2) {
            return _0x524cad || _0x5bc4c2;
        },
        'IaROB': function(_0x345131) {
            return _0x345131();
        },
        'PqEHg': function(_0x5b7639, _0x382a29) {
            return _0x5b7639 !== _0x382a29;
        },
        'OacVR': 'lgtDe',
        'ShnPR': '1001',
        'ynOre': '1002',
        'AoyoO': '1003',
        'TcLSn': function(_0x261491, _0x447ed8) {
            return _0x261491 === _0x447ed8;
        },
        'zJSPq': 'DBbVJ',
        'hFPuN': function(_0x466e2d, _0x266a19) {
            return _0x466e2d >= _0x266a19;
        },
        'FlnGA': function(_0x2b07e7, _0x4a35b8) {
            return _0x2b07e7(_0x4a35b8);
        },
        'wUVcp': function(_0x3b55b2, _0x48568d, _0x292d7c) {
            return _0x3b55b2(_0x48568d, _0x292d7c);
        },
        'EGzCU': function(_0x3e7386, _0x3e021f) {
            return _0x3e7386 + _0x3e021f;
        },
        'tdGIp': function(_0x19f31a, _0x45f480) {
            return _0x19f31a !== _0x45f480;
        },
        'JMHwd': function(_0x463903, _0x3b6c6c) {
            return _0x463903 === _0x3b6c6c;
        },
        'UkKBh': 'twPSi',
        'IBZlB': 'ZFxyN',
        'ShVHn': function(_0x67919e, _0x4b83ab, _0x17d2b7, _0x4227dc) {
            return _0x67919e(_0x4b83ab, _0x17d2b7, _0x4227dc);
        },
        'lJjIz': function(_0x569cad, _0x220597, _0x27c04e) {
            return _0x569cad(_0x220597, _0x27c04e);
        },
        'zsqMk': function(_0xadc71c, _0x4311f4) {
            return _0xadc71c(_0x4311f4);
        },
        'SWdvo': 'IrLFh',
        'mxkmp': function(_0x5721a6) {
            return _0x5721a6();
        }
    };
    return new Promise(async _0x363222 => {
        var _0x528cee = {
            'Eqpou': function(_0x5afd5c) {
                return _0x52fe92['IaROB'](_0x5afd5c);
            }
        };
        if (_0x52fe92['PqEHg'](_0x52fe92['OacVR'], _0x52fe92['OacVR'])) {
            _0x528cee['Eqpou'](_0x363222);
        } else {
            let _0x253f0c = $['info']['SceneList'];
            let _0x219a1d = [],
                _0x45177b = [_0x52fe92['ShnPR'], _0x52fe92['ynOre'], _0x52fe92['AoyoO']];
            _0x219a1d = Object['keys'](_0x253f0c);
            _0x219a1d = _0x45177b['filter'](_0x53aa9a => _0x219a1d['every'](_0x47ad36 => _0x53aa9a !== _0x47ad36));
            console['log']('待开通场景ID列表sceneList;' + JSON['stringify'](_0x219a1d));
            for (let _0x1c91ea of _0x219a1d) {
                if (_0x52fe92['TcLSn'](_0x52fe92['zJSPq'], _0x52fe92['zJSPq'])) {
                    if (_0x52fe92['TcLSn'](_0x1c91ea, _0x52fe92['ynOre']) && _0x52fe92['hFPuN']($['info']['dwLevel'], 0xb)) await _0x52fe92['FlnGA'](activeScene, _0x1c91ea);
                    if (_0x52fe92['TcLSn'](_0x1c91ea, _0x52fe92['AoyoO']) && _0x52fe92['hFPuN']($['info']['dwLevel'], 0x1a)) await _0x52fe92['FlnGA'](activeScene, _0x1c91ea);
                } else {
                    const {
                        ret,
                        data: {
                            userTaskStatusList = []
                        } = {},
                        msg
                    } = JSON['parse'](data);
                    $['allTask'] = userTaskStatusList['filter'](_0x460c75 => _0x460c75['awardStatus'] !== 0x1);
                    $['log']('\n获取【📆日常任务】列表 ' + msg + '，总共' + $['allTask']['length'] + '个任务！\n' + ($['showLog'] ? data : ''));
                }
            }
            for (var _0x243a9c of Object['keys']($['info']['SceneList'])) {
                try {
                    await $['wait'](0x1f4);
                    await _0x52fe92['wUVcp'](getMoney_dwSource_1, _0x243a9c, _0x253f0c);
                    const _0x332f58 = _0x52fe92['FlnGA'](eval, _0x52fe92['EGzCU'](_0x52fe92['EGzCU']('(', JSON['stringify'](_0x253f0c[_0x243a9c]['EmployeeList'])), ')'));
                    if (_0x52fe92['tdGIp'](_0x332f58, '')) {
                        if (_0x52fe92['JMHwd'](_0x52fe92['UkKBh'], _0x52fe92['IBZlB'])) {
                            _0x52fe92['SLExL'](_0x363222);
                        } else {
                            for (var _0x5b100f of Object['keys'](_0x332f58)) {
                                await $['wait'](0x1f4);
                                await _0x52fe92['ShVHn'](getMoney_dwSource_2, _0x243a9c, _0x253f0c, _0x5b100f);
                            }
                        }
                    }
                    await $['wait'](0x1f4);
                    if (token) await _0x52fe92['lJjIz'](getMoney_dwSource_3, _0x243a9c, _0x253f0c);
                    await _0x52fe92['zsqMk'](employeeAward, _0x243a9c);
                } catch (_0x452d28) {
                    if (_0x52fe92['tdGIp'](_0x52fe92['SWdvo'], _0x52fe92['SWdvo'])) {
                        try {
                            const {
                                dwMoney,
                                iRet,
                                sErrMsg,
                                strPin
                            } = JSON['parse'](data);
                            $['log']('\x0a【' + _0x253f0c[_0x243a9c]['strSceneName'] + '】👬好友: ' + (_0x52fe92['POUID'](sErrMsg, _0x52fe92['NLPEa']) ? '获取普通助力财富值：¥ ' + _0x52fe92['YGssJ'](dwMoney, 0x0) : sErrMsg) + ' \x0a' + ($['showLog'] ? data : ''));
                        } catch (_0x462bf5) {
                            $['logErr'](_0x462bf5, resp);
                        } finally {
                            _0x52fe92['IaROB'](_0x363222);
                        }
                    } else {
                        $['logErr'](_0x452d28, resp);
                    }
                } finally {
                    _0x52fe92['mxkmp'](_0x363222);
                }
            }
        }
    });
}

function getMoney_dwSource_1(_0x57dadd, _0x21cbf7) {
    var _0x2ccc1d = {
        'gZaYi': function(_0x5ab401) {
            return _0x5ab401();
        },
        'ODNQZ': function(_0x3cd5c3, _0x43c3b9) {
            return _0x3cd5c3 !== _0x43c3b9;
        },
        'fOqQY': 'rspXv',
        'cVWhD': function(_0x4e6427, _0x1d55e1) {
            return _0x4e6427 == _0x1d55e1;
        },
        'LzwIW': 'success',
        'sBnJP': function(_0x397a5a, _0x4346cc) {
            return _0x397a5a || _0x4346cc;
        },
        'wkxjm': function(_0x4c3803) {
            return _0x4c3803();
        },
        'rzxig': function(_0x430acd, _0x4d14fc, _0x488742) {
            return _0x430acd(_0x4d14fc, _0x488742);
        }
    };
    return new Promise(async _0x3547c0 => {
        $['get'](_0x2ccc1d['rzxig'](taskUrl, 'user/GetMoney', 'dwSceneId=' + _0x57dadd + '&strEmployeeId=undefined&dwSource=1'), async (_0xfa1d01, _0x318c1f, _0x2f039a) => {
            var _0xe79bc0 = {
                'PYrGJ': function(_0x2b3bab) {
                    return _0x2ccc1d['gZaYi'](_0x2b3bab);
                }
            };
            try {
                if (_0x2ccc1d['ODNQZ'](_0x2ccc1d['fOqQY'], _0x2ccc1d['fOqQY'])) {
                    _0xe79bc0['PYrGJ'](_0x3547c0);
                } else {
                    const {
                        iRet,
                        dwMoney,
                        sErrMsg
                    } = JSON['parse'](_0x2f039a);
                    $['log']('\x0a【' + _0x21cbf7[_0x57dadd]['strSceneName'] + '】🏝岛主 : ' + (_0x2ccc1d['cVWhD'](sErrMsg, _0x2ccc1d['LzwIW']) ? '获取财富值：¥ ' + _0x2ccc1d['sBnJP'](dwMoney, 0x0) : sErrMsg) + ' \x0a' + ($['showLog'] ? _0x2f039a : ''));
                }
            } catch (_0xabf471) {
                $['logErr'](_0xabf471, _0x318c1f);
            } finally {
                _0x2ccc1d['wkxjm'](_0x3547c0);
            }
        });
    });
}

function getMoney_dwSource_2(_0x33e44c, _0x1848d1, _0x23f8b2) {
    var _0x4f96c7 = {
        'HrKdc': function(_0x1b6240, _0x42430f) {
            return _0x1b6240 == _0x42430f;
        },
        'DxdHl': 'success',
        'MwBzW': function(_0x2c15b0, _0x43fa9a) {
            return _0x2c15b0 || _0x43fa9a;
        },
        'StgiT': function(_0x325243) {
            return _0x325243();
        },
        'GiDcU': function(_0x4ef988, _0x28c82f) {
            return _0x4ef988 !== _0x28c82f;
        },
        'MOwIU': 'KgqlS',
        'LcZia': 'uUJZN',
        'lwARA': function(_0x13cd47, _0x1f4c6a, _0x4e705a) {
            return _0x13cd47(_0x1f4c6a, _0x4e705a);
        }
    };
    return new Promise(async _0x1fe441 => {
        var _0x1875e7 = {
            'CNfOu': function(_0x532bbd, _0x2a8574) {
                return _0x4f96c7['HrKdc'](_0x532bbd, _0x2a8574);
            },
            'zTTgm': _0x4f96c7['DxdHl'],
            'TBtHA': function(_0x687b34, _0x193025) {
                return _0x4f96c7['MwBzW'](_0x687b34, _0x193025);
            },
            'kyoGb': function(_0x1f291e) {
                return _0x4f96c7['StgiT'](_0x1f291e);
            }
        };
        if (_0x4f96c7['GiDcU'](_0x4f96c7['MOwIU'], _0x4f96c7['LcZia'])) {
            $['get'](_0x4f96c7['lwARA'](taskUrl, 'user/GetMoney', 'dwSceneId=' + _0x33e44c + '&strEmployeeId=' + _0x23f8b2 + '&dwSource=2'), async (_0x2a6e34, _0x5a677c, _0x375d37) => {
                try {
                    const {
                        dwMoney,
                        iRet,
                        sErrMsg,
                        strPin
                    } = JSON['parse'](_0x375d37);
                    $['log']('\x0a【' + _0x1848d1[_0x33e44c]['strSceneName'] + '】👬好友: ' + (_0x1875e7['CNfOu'](sErrMsg, _0x1875e7['zTTgm']) ? '获取普通助力财富值：¥ ' + _0x1875e7['TBtHA'](dwMoney, 0x0) : sErrMsg) + ' \x0a' + ($['showLog'] ? _0x375d37 : ''));
                } catch (_0x17dec2) {
                    $['logErr'](_0x17dec2, _0x5a677c);
                } finally {
                    _0x1875e7['kyoGb'](_0x1fe441);
                }
            });
        } else {
            const {
                dwGetMoney,
                iRet,
                sErrMsg
            } = JSON['parse'](data);
            $['log']('\n🤏偷取好友【' + strFriendNick + '】【' + strSceneName + '】财富值：¥ ' + (dwGetMoney ? dwGetMoney : sErrMsg) + '\x0a' + ($['showLog'] ? data : ''));
        }
    });
}

function getMoney_dwSource_3(_0x15a723, _0x2dbe5b) {
    var _0x74b917 = {
        'guvjk': function(_0x51e95b, _0x35a2b6) {
            return _0x51e95b(_0x35a2b6);
        },
        'ecekk': function(_0x342609, _0x3340f9) {
            return _0x342609 !== _0x3340f9;
        },
        'CNncU': 'qibEH',
        'LtkaK': 'ZNWgD',
        'ReoFI': function(_0x39b741, _0x39c9cc) {
            return _0x39b741 == _0x39c9cc;
        },
        'aQges': 'success',
        'AviAu': function(_0x56c349, _0x35b708) {
            return _0x56c349 || _0x35b708;
        },
        'XwgVl': function(_0x4eed62) {
            return _0x4eed62();
        },
        'HwkkG': function(_0x2fde9f, _0x59732b, _0x534f51) {
            return _0x2fde9f(_0x59732b, _0x534f51);
        },
        'DwBig': 'timestamp',
        'PNids': 'phoneid',
        'mOUND': 'farm_jstoken'
    };
    return new Promise(async _0x387dce => {
        var _0x2908cf = {
            'QxcFw': function(_0x1310ed, _0x3c90b4) {
                return _0x74b917['guvjk'](_0x1310ed, _0x3c90b4);
            },
            'XiQsF': function(_0x210a4e, _0x1e2e7f) {
                return _0x74b917['ecekk'](_0x210a4e, _0x1e2e7f);
            },
            'yDDTS': _0x74b917['CNncU'],
            'TmMye': _0x74b917['LtkaK'],
            'sXOqt': function(_0x3906d2, _0x52c3d3) {
                return _0x74b917['ReoFI'](_0x3906d2, _0x52c3d3);
            },
            'CKGUN': _0x74b917['aQges'],
            'ugkLq': function(_0x1e42cb, _0x339e89) {
                return _0x74b917['AviAu'](_0x1e42cb, _0x339e89);
            },
            'fVWfz': function(_0x186050) {
                return _0x74b917['XwgVl'](_0x186050);
            }
        };
        $['get'](_0x74b917['HwkkG'](taskUrl, 'user/GetMoney', 'dwSceneId=' + _0x15a723 + '&strEmployeeId=&dwSource=3&strPgtimestamp=' + token[_0x74b917['DwBig']] + '&strPhoneID=' + token[_0x74b917['PNids']] + '&strPgUUNum=' + token[_0x74b917['mOUND']]), async (_0xebb8a9, _0x368bc0, _0x323f8c) => {
            if (_0x2908cf['XiQsF'](_0x2908cf['yDDTS'], _0x2908cf['TmMye'])) {
                try {
                    const {
                        iRet,
                        dwMoney,
                        sErrMsg,
                        strPin
                    } = JSON['parse'](_0x323f8c);
                    $['log']('\x0a【' + _0x2dbe5b[_0x15a723]['strSceneName'] + '】👬好友: ' + (_0x2908cf['sXOqt'](sErrMsg, _0x2908cf['CKGUN']) ? '获取超级助力财富值：¥ ' + _0x2908cf['ugkLq'](dwMoney, 0x0) : sErrMsg) + ' \x0a' + ($['showLog'] ? _0x323f8c : ''));
                } catch (_0x30591b) {
                    $['logErr'](_0x30591b, _0x368bc0);
                } finally {
                    _0x2908cf['fVWfz'](_0x387dce);
                }
            } else {
                _0x2908cf['QxcFw'](_0x387dce, JSON['parse'](_0x323f8c) || {});
            }
        });
    });
}

function employeeAward(_0x3a9dbc) {
    var _0x17762a = {
        'CWpeg': function(_0x2f2cd5, _0x4b97b1) {
            return _0x2f2cd5(_0x4b97b1);
        },
        'dVkOO': function(_0x1e0e8b, _0x20d249) {
            return _0x1e0e8b === _0x20d249;
        },
        'QrHTA': '1001',
        'NJcjh': 'strName',
        'vQIDk': '1002',
        'VstwF': '1003',
        'VHJEO': function(_0x3456a3, _0x2cb1fa) {
            return _0x3456a3 !== _0x2cb1fa;
        },
        'NEstu': function(_0x3b4ff5, _0x561441) {
            return _0x3b4ff5 * _0x561441;
        },
        'tfzLK': function(_0x92b287, _0x4366bc) {
            return _0x92b287(_0x4366bc);
        },
        'pJeKO': function(_0x43f694) {
            return _0x43f694();
        },
        'jkxtq': 'gWuPI',
        'PsyPe': 'm.jingxi.com',
        'sToeA': '*/*',
        'IMbTq': 'jdpingou;iPad;4.2.2;14.4;network/wifi;Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
        'CYqef': 'zh-cn',
        'yzFKF': 'https://st.jingxi.com/fortune_island/index.html?ptag=7155.9.47'
    };
    return new Promise(async _0x509f8a => {
        var _0x46b9a6 = {
            'XynMc': function(_0x45e7f4, _0x5167d1) {
                return _0x17762a['CWpeg'](_0x45e7f4, _0x5167d1);
            },
            'MjFtb': function(_0x1d7c97, _0x43b4f7) {
                return _0x17762a['dVkOO'](_0x1d7c97, _0x43b4f7);
            },
            'xGgJE': _0x17762a['QrHTA'],
            'yNCNg': _0x17762a['NJcjh'],
            'lbIId': _0x17762a['vQIDk'],
            'gVlgm': _0x17762a['VstwF'],
            'ycIRT': function(_0x1b7344, _0x41df60) {
                return _0x17762a['VHJEO'](_0x1b7344, _0x41df60);
            },
            'mbVbg': function(_0x2db14c, _0x151958) {
                return _0x17762a['NEstu'](_0x2db14c, _0x151958);
            },
            'BIDIZ': function(_0x2d5053, _0x5f3c77) {
                return _0x17762a['tfzLK'](_0x2d5053, _0x5f3c77);
            },
            'eapbr': function(_0x3c42f7) {
                return _0x17762a['pJeKO'](_0x3c42f7);
            }
        };
        if (_0x17762a['VHJEO'](_0x17762a['jkxtq'], _0x17762a['jkxtq'])) {
            console['log']('此账号cookie填写不规范,你的pt_pin=xxx后面没分号(;)\n');
            _0x46b9a6['XynMc'](_0x509f8a, null);
        } else {
            const _0x298b8e = {
                'url': 'https://m.jingxi.com/jxcfd/user/AdvEmployeeAward?strZone=jxcfd&bizCode=jxcfd&source=jxcfd&dwEnv=7&_cfd_t=' + +new Date() + '&ptag=138631.26.55&dwSenceId=' + _0x3a9dbc + '&_=' + +new Date() + '&_stk=_cfd_t,bizCode,dwEnv,dwSenceId,ptag,source,strZone&h5st=20210304120622242;6980827292145544;10009;tk01wb8321c0ea8nNjg0a1JqVUlvqre776hbVd8Unm3xaodPUoxF6qk2nu5+3BL0+M/NCPfMBRDekvWYG0otooxd4ZA9;3a499b12485ae55f84ace34682b6bececd1e74be6ae82d880877f9e1c861d7d9&sceneval=2&g_login_type=1',
                'headers': {
                    'Host': _0x17762a['PsyPe'],
                    'accept': _0x17762a['sToeA'],
                    'user-agent': _0x17762a['IMbTq'],
                    'accept-language': _0x17762a['CYqef'],
                    'referer': _0x17762a['yzFKF'],
                    'Cookie': cookie
                }
            };
            $['get'](_0x298b8e, async (_0x240a95, _0x36768e, _0x1334fd) => {
                try {
                    const {
                        iRet,
                        sErrMsg,
                        strAwardDetail
                    } = JSON['parse'](_0x1334fd);
                    if (_0x46b9a6['MjFtb'](iRet, 0x0)) {
                        switch (_0x3a9dbc) {
                            case _0x46b9a6['xGgJE']:
                                console['log']('【欢乐牧场】获得 ' + strAwardDetail[_0x46b9a6['yNCNg']] + ' 红包');
                                break;
                            case _0x46b9a6['lbIId']:
                                console['log']('【便利店】获得 ' + strAwardDetail[_0x46b9a6['yNCNg']] + ' 红包');
                                break;
                            case _0x46b9a6['gVlgm']:
                                console['log']('【京喜餐厅】获得 ' + strAwardDetail[_0x46b9a6['yNCNg']] + ' 红包');
                                break;
                            default:
                                console['log']('【未知场景】获得 ' + strAwardDetail[_0x46b9a6['yNCNg']] + ' 红包');
                        }
                    } else {
                        switch (_0x3a9dbc) {
                            case _0x46b9a6['xGgJE']:
                                console['log']('【欢乐牧场领取红包】 ' + sErrMsg);
                                break;
                            case _0x46b9a6['lbIId']:
                                console['log']('【便利店领取红包】' + sErrMsg);
                                break;
                            case _0x46b9a6['gVlgm']:
                                console['log']('【京喜餐厅领取红包】' + sErrMsg);
                                break;
                            default:
                                console['log']('【未知场景领取红包】' + sErrMsg);
                        }
                    }
                    if (_0x46b9a6['ycIRT'](iRet, 0x0)) {
                        console['log'](JSON['stringify'](_0x1334fd) + ',退出');
                        return;
                    }
                    await $['wait'](_0x46b9a6['mbVbg'](0x2, 0x3e8));
                    await _0x46b9a6['BIDIZ'](employeeAward, _0x3a9dbc);
                } catch (_0x23a2ad) {
                    $['logErr'](_0x23a2ad, _0x36768e);
                } finally {
                    _0x46b9a6['eapbr'](_0x509f8a);
                }
            });
        }
    });
}

function friendCircle() {
    var _0x5e72a6 = {
        'LdsiP': function(_0x34bca8, _0xbb2b4f) {
            return _0x34bca8 === _0xbb2b4f;
        },
        'qioAw': 'meVDL',
        'CDjas': 'BrYkb',
        'Egoki': 'gcXqw',
        'AaLYK': function(_0x30f064, _0x49f3aa) {
            return _0x30f064 !== _0x49f3aa;
        },
        'JKIna': function(_0x433cb8, _0x5f0a35) {
            return _0x433cb8 > _0x5f0a35;
        },
        'kaxgj': function(_0x809517, _0x3515b1) {
            return _0x809517(_0x3515b1);
        },
        'bDXye': function(_0x52036c) {
            return _0x52036c();
        },
        'mYlJK': 'ZgIft',
        'QaXEJ': function(_0x58520b, _0x37800b, _0x10899d) {
            return _0x58520b(_0x37800b, _0x10899d);
        }
    };
    return new Promise(async _0x2a3821 => {
        var _0x44a1f6 = {
            'QIjVu': function(_0x2944a3, _0x18ebc9) {
                return _0x5e72a6['JKIna'](_0x2944a3, _0x18ebc9);
            }
        };
        if (_0x5e72a6['LdsiP'](_0x5e72a6['mYlJK'], _0x5e72a6['mYlJK'])) {
            $['get'](_0x5e72a6['QaXEJ'](taskUrl, 'user/FriendCircle', 'dwPageIndex=1&dwPageSize=20'), async (_0x3fab12, _0x181888, _0x36394e) => {
                if (_0x5e72a6['LdsiP'](_0x5e72a6['qioAw'], _0x5e72a6['qioAw'])) {
                    try {
                        const {
                            MomentList = [], iRet, sErrMsg, strShareId
                        } = JSON['parse'](_0x36394e);
                        for (moment of MomentList) {
                            if (_0x5e72a6['LdsiP'](_0x5e72a6['CDjas'], _0x5e72a6['Egoki'])) {
                                if (_0x44a1f6['QIjVu'](process['env']['JDCFD_SHARECODES']['indexOf']('\x0a'), -0x1)) {
                                    shareCodes = process['env']['JDCFD_SHARECODES']['split']('\x0a');
                                } else {
                                    shareCodes = process['env']['JDCFD_SHARECODES']['split']('&');
                                }
                            } else {
                                if (_0x5e72a6['AaLYK'](moment['strShareId'], strShareId) && _0x5e72a6['JKIna'](moment['dwAccessMoney'], 0x0)) {
                                    await _0x5e72a6['kaxgj'](queryFriendIsland, moment['strShareId']);
                                    await $['wait'](0x1f4);
                                }
                            }
                        }
                    } catch (_0x5361a6) {
                        $['logErr'](_0x5361a6, _0x181888);
                    } finally {
                        _0x5e72a6['bDXye'](_0x2a3821);
                    }
                } else {
                    $['log']('\n🎁寻宝：宝藏冷却中，请等待冷却完毕');
                }
            });
        } else {
            console['log']('\n超级助力(超级工人)结果:' + data);
            const {
                sErrMsg,
                iRet
            } = JSON['parse'](data);
            if (_0x5e72a6['LdsiP'](iRet, 0x7d5) || _0x5e72a6['LdsiP'](iRet, 0x270f)) $['canHelp'] = ![];
            console['log'](sErrMsg);
        }
    });
}

function queryFriendIsland(_0xb0c44f) {
    var _0xc265ed = {
        'yLgGK': '*/*',
        'ESzlK': 'keep-alive',
        'ZaDcF': 'https://st.jingxi.com/fortune_island/index.html?ptag=138631.26.55',
        'ZcXQX': 'gzip, deflate, br',
        'RzwDr': 'm.jingxi.com',
        'VbtQX': function(_0x4378d6, _0x50276a) {
            return _0x4378d6 + _0x50276a;
        },
        'vgfnK': function(_0x3bf5a2, _0x3e979f) {
            return _0x3bf5a2 * _0x3e979f;
        },
        'nNrqw': 'zh-cn',
        'SxOcb': function(_0x42f907) {
            return _0x42f907();
        },
        'upEcl': function(_0x4ef052, _0x43b91b) {
            return _0x4ef052 !== _0x43b91b;
        },
        'oImak': 'DFRig',
        'XxaFc': function(_0x1c21b4, _0x1dc4bc) {
            return _0x1c21b4 === _0x1dc4bc;
        },
        'yQUVi': 'success',
        'tBONg': function(_0x1f3fc6, _0xe8f415) {
            return _0x1f3fc6(_0xe8f415);
        },
        'RiUKA': function(_0x17f280, _0x591efc, _0x429091, _0x1a91e3, _0x572349) {
            return _0x17f280(_0x591efc, _0x429091, _0x1a91e3, _0x572349);
        },
        'cCcyN': function(_0x1866f7) {
            return _0x1866f7();
        },
        'rmgEt': 'uJAFb',
        'AzYYz': function(_0x400675, _0x1c6fc4, _0x55f532) {
            return _0x400675(_0x1c6fc4, _0x55f532);
        }
    };
    return new Promise(async _0x4d0d61 => {
        if (_0xc265ed['upEcl'](_0xc265ed['rmgEt'], _0xc265ed['rmgEt'])) {
            return {
                'url': JD_API_HOST + 'newtasksys/newtasksys_front/' + function_path + '?strZone=jxcfd&bizCode=jxcfd&source=jxcfd&dwEnv=7&_cfd_t=' + Date['now']() + '&ptag=138631.26.55&' + body + '&_ste=1&_=' + Date['now']() + '&sceneval=2&g_login_type=1&g_ty=ls',
                'headers': {
                    'Cookie': cookie,
                    'Accept': _0xc265ed['yLgGK'],
                    'Connection': _0xc265ed['ESzlK'],
                    'Referer': _0xc265ed['ZaDcF'],
                    'Accept-Encoding': _0xc265ed['ZcXQX'],
                    'Host': _0xc265ed['RzwDr'],
                    'User-Agent': 'jdpingou;iPhone;3.15.2;14.2.1;ea00763447803eb0f32045dcba629c248ea53bb3;network/wifi;model/iPhone13,2;appBuild/100365;ADID/00000000-0000-0000-0000-000000000000;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/0;hasOCPay/0;supportBestPay/0;session/' + _0xc265ed['VbtQX'](_0xc265ed['vgfnK'](Math['random'], 0x62), 0x1) + ';pap/JA2015_311210;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
                    'Accept-Language': _0xc265ed['nNrqw']
                },
                'timeout': 0x2710
            };
        } else {
            $['get'](_0xc265ed['AzYYz'](taskUrl, 'user/QueryFriendIsland', 'strShareId=' + _0xb0c44f + '&sceneval=2'), async (_0x5748c9, _0x3c25d1, _0x291904) => {
                var _0x1a4c84 = {
                    'Ibfzk': function(_0xfa7452) {
                        return _0xc265ed['SxOcb'](_0xfa7452);
                    }
                };
                try {
                    if (_0xc265ed['upEcl'](_0xc265ed['oImak'], _0xc265ed['oImak'])) {
                        _0x1a4c84['Ibfzk'](_0x4d0d61);
                    } else {
                        const {
                            SceneList = {}, dwStealMoney, sErrMsg, strFriendNick
                        } = JSON['parse'](_0x291904);
                        if (_0xc265ed['XxaFc'](sErrMsg, _0xc265ed['yQUVi'])) {
                            const _0x222d34 = _0xc265ed['tBONg'](eval, _0xc265ed['VbtQX'](_0xc265ed['VbtQX']('(', JSON['stringify'](SceneList)), ')'));
                            const _0x51192e = Object['keys'](SceneList);
                            for (sceneId of _0x51192e) {
                                await _0xc265ed['RiUKA'](stealMoney, _0xb0c44f, sceneId, strFriendNick, _0x222d34[sceneId]['strSceneName']);
                                await $['wait'](0x1f4);
                            }
                        }
                    }
                } catch (_0x2204f4) {
                    $['logErr'](_0x2204f4, _0x3c25d1);
                } finally {
                    _0xc265ed['cCcyN'](_0x4d0d61);
                }
            });
        }
    });
}

function stealMoney(_0x22c02d, _0x531c8e, _0x26d94a, _0x353eba) {
    var _0x401211 = {
        'inBDc': function(_0xf42c17) {
            return _0xf42c17();
        },
        'WhEpB': 'base',
        'bieTr': function(_0x2d3b20, _0x1102c0) {
            return _0x2d3b20 === _0x1102c0;
        },
        'IDdHD': 'beyat',
        'aYxsH': 'DkXnZ',
        'igGKY': function(_0x5cc32b, _0x2446a6) {
            return _0x5cc32b !== _0x2446a6;
        },
        'eiolf': 'XmRcr',
        'fMFYv': 'wGUyD',
        'DsqWz': function(_0x31c97d, _0x2c0d59, _0x2e7207) {
            return _0x31c97d(_0x2c0d59, _0x2e7207);
        }
    };
    return new Promise(async _0x21a16f => {
        var _0x3d19b2 = {
            'rqBtk': function(_0x2711d8) {
                return _0x401211['inBDc'](_0x2711d8);
            },
            'REJGg': _0x401211['WhEpB'],
            'tbZXy': function(_0x13ace0, _0x55802a) {
                return _0x401211['bieTr'](_0x13ace0, _0x55802a);
            },
            'qGper': _0x401211['IDdHD'],
            'iTZiK': _0x401211['aYxsH'],
            'lENuw': function(_0x4fa8c3, _0x2ae6cd) {
                return _0x401211['igGKY'](_0x4fa8c3, _0x2ae6cd);
            },
            'NbZAL': _0x401211['eiolf'],
            'wtpov': _0x401211['fMFYv']
        };
        $['get'](_0x401211['DsqWz'](taskUrl, 'user/StealMoney', 'strFriendId=' + _0x22c02d + '&dwSceneId=' + _0x531c8e + '&sceneval=2'), async (_0x384d3e, _0xf0f82d, _0x26beea) => {
            var _0x38020a = {
                'zEOZR': function(_0xf181bb) {
                    return _0x3d19b2['rqBtk'](_0xf181bb);
                },
                'tMMNU': _0x3d19b2['REJGg']
            };
            if (_0x3d19b2['tbZXy'](_0x3d19b2['qGper'], _0x3d19b2['iTZiK'])) {
                _0x38020a['zEOZR'](_0x21a16f);
            } else {
                try {
                    const {
                        dwGetMoney,
                        iRet,
                        sErrMsg
                    } = JSON['parse'](_0x26beea);
                    $['log']('\n🤏偷取好友【' + _0x26d94a + '】【' + _0x353eba + '】财富值：¥ ' + (dwGetMoney ? dwGetMoney : sErrMsg) + '\x0a' + ($['showLog'] ? _0x26beea : ''));
                } catch (_0x4aa123) {
                    $['logErr'](_0x4aa123, _0xf0f82d);
                } finally {
                    if (_0x3d19b2['lENuw'](_0x3d19b2['NbZAL'], _0x3d19b2['wtpov'])) {
                        _0x3d19b2['rqBtk'](_0x21a16f);
                    } else {
                        $['nickName'] = _0x26beea[_0x38020a['tMMNU']] && _0x26beea[_0x38020a['tMMNU']]['nickname'] || $['UserName'];
                    }
                }
            }
        });
    });
}
async function treasureHunt() {
    var _0x5580fd = {
        'QdFKs': '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取',
        'yTYMw': 'https://bean.m.jd.com/bean/signIndex.action',
        'rdyHo': function(_0x9b78d1, _0x23653b) {
            return _0x9b78d1 > _0x23653b;
        },
        'pycCm': function(_0x7dba38, _0xfa47e6) {
            return _0x7dba38 < _0xfa47e6;
        },
        'oGLyy': function(_0x38e716, _0x12f8d4) {
            return _0x38e716 === _0x12f8d4;
        },
        'NlouP': 'cOGlP',
        'HeXih': function(_0x3b7e4b, _0x3a9441) {
            return _0x3b7e4b / _0x3a9441;
        },
        'rWUQs': function(_0x581dbb, _0x41b3b1) {
            return _0x581dbb > _0x41b3b1;
        },
        'tVahJ': 'MIHmb',
        'UthPk': function(_0xa95fc2, _0x2263cb) {
            return _0xa95fc2(_0x2263cb);
        }
    };
    if (_0x5580fd['rdyHo']($['info']['dwXBRemainCnt'], 0x0)) {
        const _0x416819 = $['info']['XBDetail'];
        for (let _0x37aa2d = 0x0; _0x5580fd['pycCm'](_0x37aa2d, _0x416819['length']); _0x37aa2d++) {
            if (_0x5580fd['oGLyy'](_0x5580fd['NlouP'], _0x5580fd['NlouP'])) {
                const {
                    ddwColdEndTm,
                    strIndex
                } = _0x416819[_0x37aa2d];
                const _0x1e5e87 = Math['round'](_0x5580fd['HeXih'](new Date(), 0x3e8));
                if (_0x5580fd['rWUQs'](_0x1e5e87, ddwColdEndTm)) {
                    if (_0x5580fd['oGLyy'](_0x5580fd['tVahJ'], _0x5580fd['tVahJ'])) {
                        await _0x5580fd['UthPk'](doTreasureHunt, strIndex);
                        await $['wait'](0xbb8);
                    } else {
                        $['msg']($['name'], _0x5580fd['QdFKs'], _0x5580fd['yTYMw'], {
                            'open-url': _0x5580fd['yTYMw']
                        });
                        return;
                    }
                } else {
                    $['log']('\n🎁寻宝：宝藏冷却中，请等待冷却完毕');
                }
            } else {
                $['logErr'](e, resp);
            }
        }
    } else {
        $['log']('\n🎁寻宝：寻宝次数不足');
    }
}

function doTreasureHunt(_0x1f220d) {
    var _0x467007 = {
        'IDjED': function(_0xdcb11e, _0x390e3b) {
            return _0xdcb11e !== _0x390e3b;
        },
        'ybNhl': 'cEYwx',
        'ifUxK': 'seILa',
        'xceOQ': function(_0x58b245, _0xcb7ecd) {
            return _0x58b245 || _0xcb7ecd;
        },
        'gXLfB': function(_0x2721b1, _0xd34fb6) {
            return _0x2721b1(_0xd34fb6);
        },
        'ioQMm': function(_0x23ceac) {
            return _0x23ceac();
        },
        'aGvcy': function(_0x1efe04, _0x127113, _0x141330) {
            return _0x1efe04(_0x127113, _0x141330);
        }
    };
    return new Promise(async _0x185240 => {
        var _0x3486d3 = {
            'TakBj': function(_0xa3325) {
                return _0x467007['ioQMm'](_0xa3325);
            }
        };
        $['get'](_0x467007['aGvcy'](taskUrl, 'consume/TreasureHunt', 'strIndex=' + _0x1f220d + '&dwIsShare=0'), async (_0x580b87, _0x489661, _0x448d0e) => {
            if (_0x467007['IDjED'](_0x467007['ybNhl'], _0x467007['ybNhl'])) {
                $['logErr'](e, _0x489661);
            } else {
                try {
                    if (_0x467007['IDjED'](_0x467007['ifUxK'], _0x467007['ifUxK'])) {
                        _0x3486d3['TakBj'](_0x185240);
                    } else {
                        const {
                            iRet,
                            dwExpericnce,
                            sErrMsg
                        } = JSON['parse'](_0x448d0e);
                        $['log']('\x0a【' + _0x1f220d + '】🎁寻宝：' + sErrMsg + ' ，获取随机奖励：¥ ' + _0x467007['xceOQ'](dwExpericnce, 0x0) + ' \x0a' + ($['showLog'] ? _0x448d0e : ''));
                        _0x467007['gXLfB'](_0x185240, iRet);
                    }
                } catch (_0x5323f8) {
                    $['logErr'](_0x5323f8, _0x489661);
                } finally {
                    _0x467007['ioQMm'](_0x185240);
                }
            }
        });
    });
}

function getTaskList(_0x8c6ec0) {
    var _0x4fd8c4 = {
        'ZyGfW': function(_0x5dda28) {
            return _0x5dda28();
        },
        'nKGpR': function(_0x42fe97, _0x2e1dac) {
            return _0x42fe97 === _0x2e1dac;
        },
        'ZYdQy': 'ikpay',
        'PtSKt': 'iWsmq',
        'jsmue': function(_0x26d8da) {
            return _0x26d8da();
        },
        'zZeJn': function(_0x575b49) {
            return _0x575b49();
        },
        'RwlRL': 'YOXFe',
        'Sjbdh': function(_0x282d57, _0x244e64) {
            return _0x282d57(_0x244e64);
        },
        'tqQIk': 'GetUserTaskStatusList',
        'szDJT': 'consume/AchieveInfo'
    };
    return new Promise(async _0xc84ea4 => {
        var _0x2b4f4c = {
            'gGMts': function(_0x31d3e2) {
                return _0x4fd8c4['jsmue'](_0x31d3e2);
            },
            'wcgmJ': function(_0x3884d8) {
                return _0x4fd8c4['zZeJn'](_0x3884d8);
            }
        };
        if (_0x4fd8c4['nKGpR'](_0x4fd8c4['RwlRL'], _0x4fd8c4['RwlRL'])) {
            switch (_0x8c6ec0) {
                case 0x0:
                    $['get'](_0x4fd8c4['Sjbdh'](taskListUrl, _0x4fd8c4['tqQIk']), async (_0x58fe8b, _0x373f05, _0x4a3ccf) => {
                        try {
                            const {
                                ret,
                                data: {
                                    userTaskStatusList = []
                                } = {},
                                msg
                            } = JSON['parse'](_0x4a3ccf);
                            $['allTask'] = userTaskStatusList['filter'](_0x3b45ab => _0x3b45ab['awardStatus'] !== 0x1);
                            $['log']('\n获取【📆日常任务】列表 ' + msg + '，总共' + $['allTask']['length'] + '个任务！\n' + ($['showLog'] ? _0x4a3ccf : ''));
                        } catch (_0x540b82) {
                            $['logErr'](_0x540b82, _0x373f05);
                        } finally {
                            _0x2b4f4c['gGMts'](_0xc84ea4);
                        }
                    });
                    break;
                case 0x1:
                    $['get'](_0x4fd8c4['Sjbdh'](taskUrl, _0x4fd8c4['szDJT']), async (_0x3da81e, _0x46a5e2, _0x37dbb8) => {
                        var _0x524f13 = {
                            'rkXQl': function(_0x1ac961) {
                                return _0x4fd8c4['ZyGfW'](_0x1ac961);
                            }
                        };
                        try {
                            const {
                                iRet,
                                sErrMsg,
                                taskinfo = []
                            } = JSON['parse'](_0x37dbb8);
                            $['allTask'] = taskinfo['filter'](_0x5671ae => _0x5671ae['dwAwardStatus'] === 0x1);
                            $['log']('\n获取【🎖成就任务】列表 ' + sErrMsg + '，总共' + $['allTask']['length'] + '个任务！\n' + ($['showLog'] ? _0x37dbb8 : ''));
                        } catch (_0x4442d4) {
                            $['logErr'](_0x4442d4, _0x46a5e2);
                        } finally {
                            if (_0x4fd8c4['nKGpR'](_0x4fd8c4['ZYdQy'], _0x4fd8c4['PtSKt'])) {
                                _0x524f13['rkXQl'](_0xc84ea4);
                            } else {
                                _0x4fd8c4['ZyGfW'](_0xc84ea4);
                            }
                        }
                    });
                    break;
                default:
                    break;
            }
        } else {
            _0x2b4f4c['wcgmJ'](_0xc84ea4);
        }
    });
}

function browserTask(_0x77a7ca) {
    var _0x2aca5d = {
        'PQYKo': function(_0x558813, _0x58588d) {
            return _0x558813 || _0x58588d;
        },
        'jvwWb': function(_0x53939c, _0x5cc2ce) {
            return _0x53939c(_0x5cc2ce);
        },
        'HXMyd': function(_0x24033c) {
            return _0x24033c();
        },
        'cKRAW': function(_0x51a6ad, _0x3d1eb3) {
            return _0x51a6ad === _0x3d1eb3;
        },
        'GkGeK': 'FwVIB',
        'ktBST': 'fjAxZ',
        'EWdvk': function(_0x59ebc2, _0x261b6e) {
            return _0x59ebc2 < _0x261b6e;
        },
        'BuFFv': function(_0x558068, _0x39f5b2) {
            return _0x558068 + _0x39f5b2;
        },
        'EzJKo': function(_0xba0b84, _0x5a48ae) {
            return _0xba0b84 !== _0x5a48ae;
        },
        'VLTie': 'ztzyE',
        'yzRHa': function(_0x124d52, _0x174a19, _0x425e6e) {
            return _0x124d52(_0x174a19, _0x425e6e);
        },
        'PfnZy': function(_0x2bb5b4, _0x104022) {
            return _0x2bb5b4 === _0x104022;
        },
        'sfNPA': 'jCTAJ',
        'pSQpL': 'uRQxW',
        'RMedK': function(_0x30dd01, _0x534da1) {
            return _0x30dd01 + _0x534da1;
        },
        'CNsuX': function(_0x2acc88, _0xa61ba5) {
            return _0x2acc88 < _0xa61ba5;
        },
        'LeZDP': function(_0x4c7a7a, _0x3163fd) {
            return _0x4c7a7a + _0x3163fd;
        },
        'xJWgz': function(_0x521611, _0x2cc763) {
            return _0x521611 + _0x2cc763;
        }
    };
    return new Promise(async _0x445621 => {
        var _0x22d38b = {
            'jIfYp': function(_0x22f19c, _0x3fbe34) {
                return _0x2aca5d['jvwWb'](_0x22f19c, _0x3fbe34);
            },
            'ovtxm': function(_0x1f3cf9) {
                return _0x2aca5d['HXMyd'](_0x1f3cf9);
            }
        };
        if (_0x2aca5d['cKRAW'](_0x2aca5d['GkGeK'], _0x2aca5d['ktBST'])) {
            const {
                iRet,
                sData: {
                    ddwMoney
                },
                sErrMsg
            } = JSON['parse'](data);
            $['log']('\n📌签到：' + sErrMsg + '，获得财富 ¥ ' + _0x2aca5d['PQYKo'](ddwMoney, 0x0) + '\x0a' + ($['showLog'] ? data : ''));
        } else {
            switch (_0x77a7ca) {
                case 0x0:
                    const _0x3034f4 = Math['max'](...[...$['allTask']]['map'](_0x548c29 => _0x548c29['configTargetTimes']));
                    for (let _0x5e44b3 = 0x0; _0x2aca5d['EWdvk'](_0x5e44b3, $['allTask']['length']); _0x5e44b3++) {
                        const _0x4d0982 = $['allTask'][_0x5e44b3];
                        $['log']('\n开始第' + _0x2aca5d['BuFFv'](_0x5e44b3, 0x1) + '个【📆日常任务】：' + _0x4d0982['taskName']);
                        const _0x1b0192 = [!![], !![]];
                        for (let _0x5e44b3 = 0x0; _0x2aca5d['EWdvk'](_0x5e44b3, _0x3034f4); _0x5e44b3++) {
                            if (_0x2aca5d['EzJKo'](_0x2aca5d['VLTie'], _0x2aca5d['VLTie'])) {
                                try {
                                    const {
                                        sErrMsg
                                    } = JSON['parse'](data);
                                    $['log']('\n【🏝寻宝大作战】' + sErrMsg + '\x0a' + ($['showLog'] ? data : ''));
                                    _0x22d38b['jIfYp'](_0x445621, 0x0);
                                } catch (_0x27c3cb) {
                                    $['logErr'](_0x27c3cb, resp);
                                } finally {
                                    _0x22d38b['ovtxm'](_0x445621);
                                }
                            } else {
                                await $['wait'](0x1f4);
                                if (_0x1b0192[0x0]) {
                                    _0x1b0192[0x0] = await _0x2aca5d['jvwWb'](doTask, _0x4d0982);
                                }
                                await $['wait'](0x1f4);
                                if (_0x1b0192[0x1]) {
                                    _0x1b0192[0x1] = await _0x2aca5d['yzRHa'](awardTask, 0x0, _0x4d0982);
                                }
                                if (!_0x1b0192[0x0] && !_0x1b0192[0x1]) {
                                    if (_0x2aca5d['PfnZy'](_0x2aca5d['sfNPA'], _0x2aca5d['pSQpL'])) {
                                        $['logErr'](e, resp);
                                    } else {
                                        break;
                                    }
                                }
                            }
                        }
                        $['log']('\n结束第' + _0x2aca5d['RMedK'](_0x5e44b3, 0x1) + '个【📆日常任务】：' + _0x4d0982['taskName'] + '\x0a');
                    }
                    break;
                case 0x1:
                    for (let _0x134e17 = 0x0; _0x2aca5d['CNsuX'](_0x134e17, $['allTask']['length']); _0x134e17++) {
                        const _0x4d0982 = $['allTask'][_0x134e17];
                        $['log']('\n开始第' + _0x2aca5d['LeZDP'](_0x134e17, 0x1) + '个【🎖成就任务】：' + _0x4d0982['strTaskDescr']);
                        if (_0x2aca5d['PfnZy'](_0x4d0982['dwAwardStatus'], '0')) {
                            $['log']('\x0a' + _0x4d0982['strTaskDescr'] + '【领成就奖励】：该成就任务未达到门槛}');
                        } else {
                            await $['wait'](0x1f4);
                            await _0x2aca5d['yzRHa'](awardTask, 0x1, _0x4d0982);
                        }
                        $['log']('\n结束第' + _0x2aca5d['xJWgz'](_0x134e17, 0x1) + '个【🎖成就任务】：' + _0x4d0982['strTaskDescr'] + '\x0a');
                    }
                    break;
                default:
                    break;
            }
            _0x2aca5d['HXMyd'](_0x445621);
        }
    });
}

function doTask(_0x3c4766) {
    var _0x52d9c3 = {
        'eMCmZ': function(_0x46d8db) {
            return _0x46d8db();
        },
        'LLRsS': function(_0x5a766a, _0x298c0f) {
            return _0x5a766a !== _0x298c0f;
        },
        'wtpyn': 'RbZlh',
        'weNuD': 'dFwBI',
        'HYHOR': '活动太火爆了',
        'oZnEC': '任务进行中或者未到任务时间',
        'KmiPW': function(_0x5b8719, _0x40c8e8) {
            return _0x5b8719(_0x40c8e8);
        },
        'knMso': function(_0x49cfc9, _0x1668a2) {
            return _0x49cfc9 === _0x1668a2;
        },
        'aaUuw': 'leaBb',
        'rVpUl': 'hePvh',
        'TbXXD': function(_0x59e346, _0x4ccccd) {
            return _0x59e346 >= _0x4ccccd;
        },
        'gCChH': function(_0x1901bd, _0x5190b7) {
            return _0x1901bd(_0x5190b7);
        },
        'RPGhm': function(_0xe6ea1, _0x33cf34) {
            return _0xe6ea1(_0x33cf34);
        },
        'VFMoD': function(_0x2ff174, _0x732ecd) {
            return _0x2ff174(_0x732ecd);
        },
        'fLLmg': function(_0x41045c, _0x1bc163, _0x5029b5) {
            return _0x41045c(_0x1bc163, _0x5029b5);
        }
    };
    return new Promise(async _0x220287 => {
        var _0x2b9f7a = {
            'BBnZb': function(_0x116587) {
                return _0x52d9c3['eMCmZ'](_0x116587);
            },
            'uUkyt': function(_0x1f047c, _0x74dbca) {
                return _0x52d9c3['LLRsS'](_0x1f047c, _0x74dbca);
            },
            'jLxnW': _0x52d9c3['wtpyn'],
            'pBCGC': _0x52d9c3['weNuD'],
            'eXcYG': _0x52d9c3['HYHOR'],
            'LjqlK': _0x52d9c3['oZnEC'],
            'njutD': function(_0x2b28fe, _0x1b9551) {
                return _0x52d9c3['KmiPW'](_0x2b28fe, _0x1b9551);
            },
            'DdxdB': function(_0x18f1ba, _0x12ab67) {
                return _0x52d9c3['knMso'](_0x18f1ba, _0x12ab67);
            },
            'qtSkN': _0x52d9c3['aaUuw'],
            'gkVfb': _0x52d9c3['rVpUl']
        };
        const {
            taskId,
            completedTimes,
            configTargetTimes,
            taskName
        } = _0x3c4766;
        if (_0x52d9c3['TbXXD'](_0x52d9c3['gCChH'](parseInt, completedTimes), _0x52d9c3['RPGhm'](parseInt, configTargetTimes))) {
            _0x52d9c3['VFMoD'](_0x220287, ![]);
            $['log']('\x0a' + taskName + '【做日常任务】： mission success');
            return;
        }
        $['get'](_0x52d9c3['fLLmg'](taskListUrl, 'DoTask', 'taskId=' + taskId), (_0x5503f3, _0x13896f, _0x40cd26) => {
            if (_0x2b9f7a['uUkyt'](_0x2b9f7a['jLxnW'], _0x2b9f7a['pBCGC'])) {
                try {
                    const {
                        msg,
                        ret
                    } = JSON['parse'](_0x40cd26);
                    $['log']('\x0a' + taskName + '【做日常任务】：' + (_0x2b9f7a['uUkyt'](msg['indexOf'](_0x2b9f7a['eXcYG']), -0x1) ? _0x2b9f7a['LjqlK'] : msg) + '\x0a' + ($['showLog'] ? _0x40cd26 : ''));
                    _0x2b9f7a['njutD'](_0x220287, _0x2b9f7a['DdxdB'](ret, 0x0));
                } catch (_0x14e4d1) {
                    $['logErr'](_0x14e4d1, _0x13896f);
                } finally {
                    if (_0x2b9f7a['DdxdB'](_0x2b9f7a['qtSkN'], _0x2b9f7a['gkVfb'])) {
                        $['logErr'](e, _0x13896f);
                    } else {
                        _0x2b9f7a['BBnZb'](_0x220287);
                    }
                }
            } else {
                _0x2b9f7a['BBnZb'](_0x220287);
            }
        });
    });
}

function awardTask(_0x49265b, _0xa6cefd) {
    var _0x5304bc = {
        'gUzRY': function(_0x417766) {
            return _0x417766();
        },
        'PfakQ': function(_0x41a821, _0x33fb17) {
            return _0x41a821 !== _0x33fb17;
        },
        'MjOLz': 'dflJf',
        'EslTR': 'gYuqL',
        'PWuwv': 'jGgVc',
        'czPAw': '活动太火爆了',
        'aGzZV': '任务为成就任务或者未到任务时间',
        'ajutQ': function(_0x49944f, _0x1d302f) {
            return _0x49944f + _0x1d302f;
        },
        'BcUKt': function(_0x508ed8, _0x15ec1f) {
            return _0x508ed8(_0x15ec1f);
        },
        'eiWVm': function(_0x593286, _0x50aaab) {
            return _0x593286 === _0x50aaab;
        },
        'RIaKi': function(_0x108432, _0x3bae4f) {
            return _0x108432 - _0x3bae4f;
        },
        'PMTLz': function(_0x2b578a, _0x1f31e5) {
            return _0x2b578a > _0x1f31e5;
        },
        'Tyzhr': function(_0x4cf85d, _0x294e68) {
            return _0x4cf85d * _0x294e68;
        },
        'OrmOm': function(_0x2505b4, _0x4b4007) {
            return _0x2505b4 + _0x4b4007;
        },
        'BAbyS': 'jFLqD',
        'rVVYj': 'OvfYb',
        'ivyXz': 'aTDdx',
        'HwVMt': 'qEyic',
        'Zzequ': function(_0x11764b, _0xc40acb, _0x57c349) {
            return _0x11764b(_0xc40acb, _0x57c349);
        },
        'LSkFU': function(_0x596ea8, _0x21991b, _0x127880) {
            return _0x596ea8(_0x21991b, _0x127880);
        }
    };
    return new Promise(_0x4db6d6 => {
        var _0x4355bb = {
            'YZSGo': _0x5304bc['aGzZV'],
            'AxWDt': function(_0x3ef2fc, _0xea6f0) {
                return _0x5304bc['RIaKi'](_0x3ef2fc, _0xea6f0);
            },
            'PrLhB': function(_0x21ec6a, _0x300002) {
                return _0x5304bc['PMTLz'](_0x21ec6a, _0x300002);
            },
            'TdSNN': function(_0x30b660, _0x5f1ec3) {
                return _0x5304bc['Tyzhr'](_0x30b660, _0x5f1ec3);
            },
            'owUuJ': function(_0x23e288, _0x3b1b30) {
                return _0x5304bc['OrmOm'](_0x23e288, _0x3b1b30);
            },
            'dmoxR': function(_0x4528f0, _0x5d548d) {
                return _0x5304bc['eiWVm'](_0x4528f0, _0x5d548d);
            },
            'RXyxY': _0x5304bc['BAbyS'],
            'oMaem': _0x5304bc['rVVYj'],
            'yUEhZ': function(_0x412357) {
                return _0x5304bc['gUzRY'](_0x412357);
            }
        };
        if (_0x5304bc['eiWVm'](_0x5304bc['ivyXz'], _0x5304bc['HwVMt'])) {
            console['log']('随机取0个码放到您固定的互助码后面(不影响已有固定互助)');
            data = JSON['parse'](data);
        } else {
            switch (_0x49265b) {
                case 0x0:
                    const {
                        taskId, taskName
                    } = _0xa6cefd;
                    $['get'](_0x5304bc['Zzequ'](taskListUrl, 'Award', 'taskId=' + taskId), (_0x22c8ee, _0x248da7, _0x23e92e) => {
                        var _0x5d49e3 = {
                            'QDzLh': function(_0x322474) {
                                return _0x5304bc['gUzRY'](_0x322474);
                            }
                        };
                        if (_0x5304bc['PfakQ'](_0x5304bc['MjOLz'], _0x5304bc['MjOLz'])) {
                            _0x5d49e3['QDzLh'](_0x4db6d6);
                        } else {
                            try {
                                if (_0x5304bc['PfakQ'](_0x5304bc['EslTR'], _0x5304bc['PWuwv'])) {
                                    const {
                                        msg,
                                        ret,
                                        data: {
                                            prizeInfo = ''
                                        } = {}
                                    } = JSON['parse'](_0x23e92e);
                                    let _0xf9d2d6 = '';
                                    if (_0x5304bc['PfakQ'](msg['indexOf'](_0x5304bc['czPAw']), -0x1)) {
                                        _0xf9d2d6 = _0x5304bc['aGzZV'];
                                    } else {
                                        _0xf9d2d6 = _0x5304bc['ajutQ'](msg, prizeInfo) ? ' 获得财富值 ¥ ' + JSON['parse'](prizeInfo)['ddwMoney'] : '';
                                    }
                                    $['log']('\x0a' + taskName + '【领日常奖励】：' + _0xf9d2d6 + '\x0a' + ($['showLog'] ? _0x23e92e : ''));
                                    _0x5304bc['BcUKt'](_0x4db6d6, _0x5304bc['eiWVm'](ret, 0x0));
                                } else {
                                    str = _0x4355bb['YZSGo'];
                                }
                            } catch (_0x570299) {
                                $['logErr'](_0x570299, _0x248da7);
                            } finally {
                                _0x5304bc['gUzRY'](_0x4db6d6);
                            }
                        }
                    });
                    break;
                case 0x1:
                    const {
                        strTaskIndex, strTaskDescr
                    } = _0xa6cefd;
                    $['get'](_0x5304bc['LSkFU'](taskUrl, 'consume/AchieveAward', 'strTaskIndex=' + strTaskIndex), (_0x4567ae, _0x359ff2, _0x37e358) => {
                        var _0x587e07 = {
                            'ZoszH': function(_0x42b000, _0x1fd55d) {
                                return _0x4355bb['AxWDt'](_0x42b000, _0x1fd55d);
                            },
                            'IFWLX': function(_0x3c4273, _0x44e0b9) {
                                return _0x4355bb['PrLhB'](_0x3c4273, _0x44e0b9);
                            },
                            'NwZek': function(_0x512998, _0x5c802e) {
                                return _0x4355bb['TdSNN'](_0x512998, _0x5c802e);
                            },
                            'abWmK': function(_0x3eb454, _0x3d903d) {
                                return _0x4355bb['owUuJ'](_0x3eb454, _0x3d903d);
                            }
                        };
                        try {
                            const {
                                iRet,
                                sErrMsg,
                                dwExpericnce
                            } = JSON['parse'](_0x37e358);
                            $['log']('\x0a' + strTaskDescr + '【领成就奖励】： success 获得财富值：¥ ' + dwExpericnce + '\x0a' + ($['showLog'] ? _0x37e358 : ''));
                        } catch (_0x3ce07e) {
                            if (_0x4355bb['dmoxR'](_0x4355bb['RXyxY'], _0x4355bb['oMaem'])) {
                                let _0x2a2af7 = arr['slice'](0x0),
                                    _0x49ff78 = arr['length'],
                                    _0x19dbdb = _0x587e07['ZoszH'](_0x49ff78, count),
                                    _0x48e387, _0x1d2c4f;
                                while (_0x587e07['IFWLX'](_0x49ff78--, _0x19dbdb)) {
                                    _0x1d2c4f = Math['floor'](_0x587e07['NwZek'](_0x587e07['abWmK'](_0x49ff78, 0x1), Math['random']()));
                                    _0x48e387 = _0x2a2af7[_0x1d2c4f];
                                    _0x2a2af7[_0x1d2c4f] = _0x2a2af7[_0x49ff78];
                                    _0x2a2af7[_0x49ff78] = _0x48e387;
                                }
                                return _0x2a2af7['slice'](_0x19dbdb);
                            } else {
                                $['logErr'](_0x3ce07e, _0x359ff2);
                            }
                        } finally {
                            _0x4355bb['yUEhZ'](_0x4db6d6);
                        }
                    });
                    break;
                default:
                    break;
            }
        }
    });
}

function funCenterState() {
    var _0x368093 = {
        'JxehO': function(_0x3d01a3) {
            return _0x3d01a3();
        },
        'RGWwI': function(_0x532543, _0x37021a) {
            return _0x532543 === _0x37021a;
        },
        'yyMLV': 'YHSPp',
        'QCjfV': function(_0x48167c, _0x12b08e) {
            return _0x48167c == _0x12b08e;
        },
        'gkoWw': function(_0x4de145, _0x28e865, _0x42b283, _0x14bbf6) {
            return _0x4de145(_0x28e865, _0x42b283, _0x14bbf6);
        },
        'YWCGB': 'dizdz',
        'WzRWM': function(_0x227580) {
            return _0x227580();
        },
        'xMPUM': function(_0x3457e5, _0x2200bb) {
            return _0x3457e5(_0x2200bb);
        },
        'eDfvc': 'CookieJD',
        'GHNsC': 'CookieJD2',
        'lRCKo': function(_0x559cbf, _0x1ad86d) {
            return _0x559cbf(_0x1ad86d);
        },
        'qjrWD': 'CookiesJD',
        'AvXbH': 'fokiu',
        'kTChE': 'uzmQN',
        'EQxAO': function(_0x4556bb, _0x5beedb, _0x43de86) {
            return _0x4556bb(_0x5beedb, _0x43de86);
        }
    };
    return new Promise(_0x3e0f79 => {
        var _0x550b89 = {
            'ZnYPF': function(_0x4d0ac7, _0x494fdb) {
                return _0x368093['xMPUM'](_0x4d0ac7, _0x494fdb);
            },
            'ScxsQ': _0x368093['eDfvc'],
            'OdICA': _0x368093['GHNsC'],
            'pszLA': function(_0x4a5442, _0x50d8c8) {
                return _0x368093['lRCKo'](_0x4a5442, _0x50d8c8);
            },
            'QFpjL': _0x368093['qjrWD']
        };
        if (_0x368093['RGWwI'](_0x368093['AvXbH'], _0x368093['kTChE'])) {
            _0x550b89['ZnYPF'](_0x3e0f79, data);
        } else {
            $['get'](_0x368093['EQxAO'](taskUrl, 'consume/FunCenterState', 'strType=1'), async (_0x419c18, _0x4bbb81, _0x48380a) => {
                var _0x2ba967 = {
                    'cOHSh': function(_0x27fbd7) {
                        return _0x368093['JxehO'](_0x27fbd7);
                    }
                };
                try {
                    if (_0x368093['RGWwI'](_0x368093['yyMLV'], _0x368093['yyMLV'])) {
                        const {
                            SlotMachine: {
                                ddwConfVersion,
                                dwFreeCount,
                                strCouponPool,
                                strGoodsPool
                            } = {},
                            iRet,
                            sErrMsg
                        } = JSON['parse'](_0x48380a);
                        if (_0x368093['QCjfV'](dwFreeCount, 0x1)) {
                            await $['wait'](0x1f4);
                            await _0x368093['gkoWw'](soltMachine, strCouponPool, strGoodsPool, ddwConfVersion);
                        }
                    } else {
                        cookiesArr = [$['getdata'](_0x550b89['ScxsQ']), $['getdata'](_0x550b89['OdICA']), ..._0x550b89['pszLA'](jsonParse, $['getdata'](_0x550b89['QFpjL']) || '[]')['map'](_0x228c42 => _0x228c42['cookie'])]['filter'](_0x247644 => !!_0x247644);
                    }
                } catch (_0xe680c) {
                    if (_0x368093['RGWwI'](_0x368093['YWCGB'], _0x368093['YWCGB'])) {
                        $['logErr'](_0xe680c, _0x4bbb81);
                    } else {
                        _0x2ba967['cOHSh'](_0x3e0f79);
                    }
                } finally {
                    _0x368093['WzRWM'](_0x3e0f79);
                }
            });
        }
    });
}

function soltMachine(_0x11c05d, _0x4a13e4, _0x3a816d) {
    var _0x347349 = {
        'oXQSA': function(_0x37a427, _0x4542d8) {
            return _0x37a427 === _0x4542d8;
        },
        'usZPT': 'yjteq',
        'UpgpS': 'REUex',
        'IAQQk': function(_0x18e38f, _0xb0df4b) {
            return _0x18e38f != _0xb0df4b;
        },
        'Xrluf': '未中奖',
        'nnSTv': function(_0x40c8d0) {
            return _0x40c8d0();
        },
        'WdyAS': function(_0x2bf4c5, _0x292610, _0x8bf161) {
            return _0x2bf4c5(_0x292610, _0x8bf161);
        }
    };
    return new Promise(_0x34ea7b => {
        $['get'](_0x347349['WdyAS'](taskUrl, 'consume/SlotMachine', 'strCouponPool=' + _0x11c05d + '&strGoodsPool=' + _0x4a13e4 + '&ddwConfVersion=' + _0x3a816d), async (_0x166796, _0x2849c0, _0x2525cd) => {
            try {
                if (_0x347349['oXQSA'](_0x347349['usZPT'], _0x347349['UpgpS'])) {
                    $['logErr'](e, _0x2849c0);
                } else {
                    const {
                        iRet,
                        sErrMsg,
                        strAwardPoolName
                    } = JSON['parse'](_0x2525cd);
                    $['log']('\n【抽奖结果】🎰 ' + (_0x347349['IAQQk'](strAwardPoolName, '') ? _0x347349['Xrluf'] : strAwardPoolName) + ' \x0a' + ($['showLog'] ? _0x2525cd : ''));
                }
            } catch (_0x32d953) {
                $['logErr'](_0x32d953, _0x2849c0);
            } finally {
                _0x347349['nnSTv'](_0x34ea7b);
            }
        });
    });
}

function createAssistUser(_0x479695) {
    var _0x119bea = {
        'LBoBn': function(_0x1969e1, _0x4d98d6) {
            return _0x1969e1 !== _0x4d98d6;
        },
        'ouhEZ': 'bEnum',
        'rhPch': 'siihS',
        'iPEkF': function(_0x25523d, _0x4ef871) {
            return _0x25523d === _0x4ef871;
        },
        'KVQPX': function(_0x41853f, _0x9715c2) {
            return _0x41853f === _0x9715c2;
        },
        'OHmjL': 'KgvCb',
        'ZGXJq': 'bADqB',
        'WAlRA': function(_0x3c6f8e) {
            return _0x3c6f8e();
        },
        'PImLU': function(_0x5703ed, _0xf8e518) {
            return _0x5703ed + _0xf8e518;
        },
        'EesqZ': '你的【🏝寻宝大作战】互助码: ',
        'udVOA': '(每天都变化,旧的不可用)',
        'KddbC': function(_0x235283) {
            return _0x235283();
        },
        'yLDkc': 'wsjEy',
        'MpGQy': 'hQNPf',
        'CXldQ': function(_0x506b8b, _0x4d20ab, _0x5c0beb) {
            return _0x506b8b(_0x4d20ab, _0x5c0beb);
        },
        'hFWIE': 'user/JoinScene',
        'mfMLn': function(_0x5b9081, _0x125dfd) {
            return _0x5b9081(_0x125dfd);
        }
    };
    return new Promise(_0x293103 => {
        var _0x238285 = {
            'KiYEg': function(_0x221906, _0x2c9924) {
                return _0x119bea['PImLU'](_0x221906, _0x2c9924);
            },
            'xHKpn': _0x119bea['EesqZ'],
            'FMyVx': _0x119bea['udVOA'],
            'IvpvN': function(_0x2df60d) {
                return _0x119bea['KddbC'](_0x2df60d);
            }
        };
        if (_0x119bea['KVQPX'](_0x119bea['yLDkc'], _0x119bea['MpGQy'])) {
            $['log'](_0x238285['KiYEg'](_0x238285['KiYEg'](_0x238285['xHKpn'], strGroupId), _0x238285['FMyVx']));
            $['shareCodes']['push'](strGroupId);
        } else {
            $['get'](_0x119bea['CXldQ'](taskUrl, _0x119bea['hFWIE'], 'strShareId=' + _0x119bea['mfMLn'](escape, _0x479695) + '&dwSceneId=1001'), async (_0x10c97d, _0x30c228, _0x1413b5) => {
                try {
                    if (_0x119bea['LBoBn'](_0x119bea['ouhEZ'], _0x119bea['rhPch'])) {
                        console['log']('\n普通助力(招工)结果:' + _0x1413b5);
                        const {
                            iRet
                        } = JSON['parse'](_0x1413b5);
                        if (_0x119bea['iPEkF'](iRet, 0x7d5) || _0x119bea['KVQPX'](iRet, 0x270f)) $['canHelp'] = ![];
                    } else {
                        $['logErr'](e, _0x30c228);
                    }
                } catch (_0x4f341e) {} finally {
                    if (_0x119bea['KVQPX'](_0x119bea['OHmjL'], _0x119bea['ZGXJq'])) {
                        _0x238285['IvpvN'](_0x293103);
                    } else {
                        _0x119bea['WAlRA'](_0x293103);
                    }
                }
            });
        }
    });
}

function createSuperAssistUser(_0x33cb68) {
    var _0x55e775 = {
        'nDTKE': function(_0x3d1db3) {
            return _0x3d1db3();
        },
        'LBBin': function(_0x5b896a, _0x109db4) {
            return _0x5b896a === _0x109db4;
        },
        'dCHNw': 'VuWQg',
        'mrnYN': 'HNXLd',
        'ZVyAE': function(_0x4b99e8, _0x5c26ab) {
            return _0x4b99e8 === _0x5c26ab;
        },
        'SxnAv': function(_0x508708) {
            return _0x508708();
        },
        'cHdNP': function(_0x2387d9, _0x1b6033, _0x499785) {
            return _0x2387d9(_0x1b6033, _0x499785);
        },
        'MzPfI': 'user/JoinScene',
        'dnoyn': 'timestamp',
        'ifsAx': 'phoneid',
        'kHKFl': 'farm_jstoken',
        'senCl': function(_0xeb8bec, _0x54f48f) {
            return _0xeb8bec(_0x54f48f);
        }
    };
    return new Promise(_0x22f037 => {
        $['get'](_0x55e775['cHdNP'](taskUrl, _0x55e775['MzPfI'], 'strPgtimestamp=' + token[_0x55e775['dnoyn']] + '&strPhoneID=' + token[_0x55e775['ifsAx']] + '&strPgUUNum=' + token[_0x55e775['kHKFl']] + '&strShareId=' + _0x55e775['senCl'](escape, _0x33cb68) + '&dwSceneId=1001&dwType=2'), async (_0x2ea8e2, _0x37ebc6, _0x14db2d) => {
            var _0x351568 = {
                'UzVTL': function(_0x3163dc) {
                    return _0x55e775['nDTKE'](_0x3163dc);
                }
            };
            if (_0x55e775['LBBin'](_0x55e775['dCHNw'], _0x55e775['mrnYN'])) {
                _0x351568['UzVTL'](_0x22f037);
            } else {
                try {
                    console['log']('\n超级助力(超级工人)结果:' + _0x14db2d);
                    const {
                        sErrMsg,
                        iRet
                    } = JSON['parse'](_0x14db2d);
                    if (_0x55e775['ZVyAE'](iRet, 0x7d5) || _0x55e775['ZVyAE'](iRet, 0x270f)) $['canHelp'] = ![];
                    console['log'](sErrMsg);
                } catch (_0x1d3e18) {
                    $['logErr'](_0x1d3e18, _0x37ebc6);
                } finally {
                    _0x55e775['SxnAv'](_0x22f037);
                }
            }
        });
    });
}

function joinGroup(_0x40313e) {
    var _0x1e3b67 = {
        'dkxRJ': function(_0x558861, _0x3291c0) {
            return _0x558861 === _0x3291c0;
        },
        'znPaQ': 'SrQLM',
        'wcHsd': 'FgQCs',
        'eaHXw': function(_0x8bc43e, _0x5b5c31) {
            return _0x8bc43e(_0x5b5c31);
        },
        'wJAQe': function(_0x566b6b) {
            return _0x566b6b();
        },
        'msJeY': function(_0x334262, _0x18ac40) {
            return _0x334262 === _0x18ac40;
        },
        'nQUfL': 'esgFc',
        'ssSva': 'yHtPq',
        'xGPVa': function(_0x250383, _0x19a4b4, _0x26be59) {
            return _0x250383(_0x19a4b4, _0x26be59);
        },
        'dITNn': 'timestamp',
        'LMezi': 'phoneid',
        'NwrhK': 'farm_jstoken'
    };
    return new Promise(async _0x62d3df => {
        var _0x594bca = {
            'RDVhK': function(_0x6e4fbd) {
                return _0x1e3b67['wJAQe'](_0x6e4fbd);
            }
        };
        if (_0x1e3b67['msJeY'](_0x1e3b67['nQUfL'], _0x1e3b67['ssSva'])) {
            console['log'](JSON['stringify'](data) + ',退出');
            return;
        } else {
            $['get'](_0x1e3b67['xGPVa'](taskUrl, 'user/JoinGroup', 'strGroupId=' + _0x40313e + '&dwIsNewUser=0&pgtimestamp=' + token[_0x1e3b67['dITNn']] + '&phoneID=' + token[_0x1e3b67['LMezi']] + '&pgUUNum=' + token[_0x1e3b67['NwrhK']]), (_0x55a25f, _0x44ae86, _0x5529e0) => {
                try {
                    if (_0x1e3b67['dkxRJ'](_0x1e3b67['znPaQ'], _0x1e3b67['wcHsd'])) {
                        _0x594bca['RDVhK'](_0x62d3df);
                    } else {
                        const {
                            sErrMsg,
                            iRet
                        } = JSON['parse'](_0x5529e0);
                        if (_0x1e3b67['dkxRJ'](iRet, 0x7d5) || _0x1e3b67['dkxRJ'](iRet, 0x270f)) $['canHelp'] = ![];
                        $['log']('iRet:' + iRet + ' ' + sErrMsg);
                    }
                } catch (_0x31a72f) {
                    $['logErr'](_0x31a72f, _0x44ae86);
                } finally {
                    _0x1e3b67['eaHXw'](_0x62d3df, JSON['parse'](_0x5529e0) || {});
                }
            });
        }
    });
}

function submitGroupId() {
    var _0x1db823 = {
        'WiCJB': function(_0x19f76c, _0x10a077) {
            return _0x19f76c(_0x10a077);
        },
        'atZpa': function(_0x2fa757) {
            return _0x2fa757();
        },
        'jpKDT': function(_0x27ea18, _0x41e3a7) {
            return _0x27ea18 !== _0x41e3a7;
        },
        'WHJAe': 'TpGVE',
        'FRwzV': 'RUpua',
        'KZqZj': function(_0x4edb59, _0x337fd3) {
            return _0x4edb59 === _0x337fd3;
        },
        'mUhmD': 'LHVwk',
        'FwPAB': function(_0x5011c8) {
            return _0x5011c8();
        },
        'NWmgz': 'ReLMI',
        'onDEW': 'vmvFv',
        'YAoBG': 'iXXbm',
        'odEwB': function(_0x4a18af, _0x1be46e) {
            return _0x4a18af + _0x1be46e;
        },
        'mxnIe': '你的【🏝寻宝大作战】互助码: ',
        'iyRSs': '(每天都变化,旧的不可用)',
        'VbnCs': 'aOadE'
    };
    return new Promise(_0x577122 => {
        var _0x7374e5 = {
            'DZMff': function(_0x18f403, _0x46b15e) {
                return _0x1db823['WiCJB'](_0x18f403, _0x46b15e);
            },
            'HdZkq': function(_0x19f58f) {
                return _0x1db823['atZpa'](_0x19f58f);
            },
            'WXMss': function(_0x3b45a9, _0x5d12a6) {
                return _0x1db823['jpKDT'](_0x3b45a9, _0x5d12a6);
            },
            'cIyMZ': _0x1db823['WHJAe'],
            'hvjGV': _0x1db823['FRwzV'],
            'QQben': function(_0x5d11e2, _0x2769e1) {
                return _0x1db823['KZqZj'](_0x5d11e2, _0x2769e1);
            },
            'ogRzs': _0x1db823['mUhmD'],
            'cwRQX': function(_0x2be22f, _0x25ca0b) {
                return _0x1db823['KZqZj'](_0x2be22f, _0x25ca0b);
            },
            'oFYFV': function(_0x31a0cc) {
                return _0x1db823['FwPAB'](_0x31a0cc);
            },
            'sXPgd': _0x1db823['NWmgz'],
            'lnreM': _0x1db823['onDEW'],
            'OMsAy': _0x1db823['YAoBG'],
            'JkLyJ': function(_0x2a51a4, _0x402cd1) {
                return _0x1db823['odEwB'](_0x2a51a4, _0x402cd1);
            },
            'VVVHd': _0x1db823['mxnIe'],
            'WVqlT': _0x1db823['iyRSs'],
            'AkBQF': function(_0x163078, _0x30d293) {
                return _0x1db823['KZqZj'](_0x163078, _0x30d293);
            },
            'ZpnDT': _0x1db823['VbnCs'],
            'phufN': function(_0x592444) {
                return _0x1db823['FwPAB'](_0x592444);
            }
        };
        $['get'](_0x1db823['WiCJB'](taskUrl, 'user/GatherForture'), async (_0x4109cc, _0x16c018, _0x14b965) => {
            var _0x432b31 = {
                'nlKPB': function(_0xa4c4db, _0x41f2de) {
                    return _0x7374e5['DZMff'](_0xa4c4db, _0x41f2de);
                },
                'KJVWt': function(_0x991b8f) {
                    return _0x7374e5['HdZkq'](_0x991b8f);
                }
            };
            if (_0x7374e5['WXMss'](_0x7374e5['cIyMZ'], _0x7374e5['hvjGV'])) {
                try {
                    if (_0x7374e5['QQben'](_0x7374e5['ogRzs'], _0x7374e5['ogRzs'])) {
                        const {
                            GroupInfo: {
                                strGroupId
                            },
                            strPin
                        } = JSON['parse'](_0x14b965);
                        if (!strGroupId) {
                            const _0x2cd3e0 = await _0x7374e5['HdZkq'](openGroup);
                            if (_0x7374e5['cwRQX'](_0x2cd3e0, 0x0)) {
                                await _0x7374e5['oFYFV'](submitGroupId);
                            } else {
                                if (_0x7374e5['cwRQX'](_0x7374e5['sXPgd'], _0x7374e5['lnreM'])) {
                                    $['logErr'](e, _0x16c018);
                                } else {
                                    _0x7374e5['oFYFV'](_0x577122);
                                }
                            }
                        } else {
                            if (_0x7374e5['cwRQX'](_0x7374e5['OMsAy'], _0x7374e5['OMsAy'])) {
                                $['log'](_0x7374e5['JkLyJ'](_0x7374e5['JkLyJ'](_0x7374e5['VVVHd'], strGroupId), _0x7374e5['WVqlT']));
                                $['shareCodes']['push'](strGroupId);
                            } else {
                                try {
                                    _0x432b31['nlKPB'](_0x577122, JSON['parse'](data));
                                } catch (_0x416bb3) {} finally {
                                    _0x432b31['KJVWt'](_0x577122);
                                }
                            }
                        }
                    } else {
                        $['msg']($['name'], '', '' + $['result']['join']('\x0a'));
                    }
                } catch (_0x34e8b7) {
                    $['logErr'](_0x34e8b7, _0x16c018);
                } finally {
                    if (_0x7374e5['AkBQF'](_0x7374e5['ZpnDT'], _0x7374e5['ZpnDT'])) {
                        _0x7374e5['phufN'](_0x577122);
                    } else {
                        $['logErr'](e, _0x16c018);
                    }
                }
            } else {
                $['log']('\n📌签到：你今日已签到过啦，请明天再来');
            }
        });
    });
}

function openGroup() {
    var _0x5402f7 = {
        'CahcG': function(_0x4921dc, _0xfdc82c) {
            return _0x4921dc(_0xfdc82c);
        },
        'LvtJr': function(_0x35b6aa, _0x3a8c21) {
            return _0x35b6aa !== _0x3a8c21;
        },
        'HQRkK': 'cidRQ',
        'TIooa': function(_0x3f14e9) {
            return _0x3f14e9();
        },
        'gHxbN': function(_0x4cf55b, _0x5e39ab, _0x1713d8) {
            return _0x4cf55b(_0x5e39ab, _0x1713d8);
        }
    };
    return new Promise(async _0x2c650a => {
        $['get'](_0x5402f7['gHxbN'](taskUrl, 'user/OpenGroup', 'dwIsNewUser=' + $['info']['dwIsNewUser']), async (_0x97add1, _0x1b95ff, _0x5e0104) => {
            try {
                const {
                    sErrMsg
                } = JSON['parse'](_0x5e0104);
                $['log']('\n【🏝寻宝大作战】' + sErrMsg + '\x0a' + ($['showLog'] ? _0x5e0104 : ''));
                _0x5402f7['CahcG'](_0x2c650a, 0x0);
            } catch (_0x12b96a) {
                if (_0x5402f7['LvtJr'](_0x5402f7['HQRkK'], _0x5402f7['HQRkK'])) {
                    $['logErr'](_0x12b96a, _0x1b95ff);
                } else {
                    $['logErr'](_0x12b96a, _0x1b95ff);
                }
            } finally {
                _0x5402f7['TIooa'](_0x2c650a);
            }
        });
    });
}

function openPeriodBox() {
    var _0x426852 = {
        'ZHvsR': function(_0x264d79, _0xa582c7) {
            return _0x264d79(_0xa582c7);
        },
        'TcwiK': 'api.m.jd.com',
        'fReRw': 'application/json, text/plain, */*',
        'BLCTm': 'https://h5.m.jd.com',
        'Aowve': 'jdapp;iPhone;9.3.5;14.2;53f4d9c70c1c81f1c8769d2fe2fef0190a3f60d2;network/wifi;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone10,2;addressid/137923973;supportBestPay/0;appBuild/167515;jdSupportDarkMode/0;pv/2217.74;apprpd/MyJD_PersonalSpace;ref/MySpace;psq/8;ads/;psn/53f4d9c70c1c81f1c8769d2fe2fef0190a3f60d2|8703;jdv/0|kong|t_1000170135|tuiguang|notset|1610674234917|1610674234;adk/;app_device/IOS;pap/JA2015_311210|9.3.5|IOS 14.2;Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
        'DgPmy': 'zh-cn',
        'TQwpM': 'https://h5.m.jd.com/babelDiy/Zeus/25C6dc6HY6if6DT7e58A1pi2Vxe4/index.html?activityId=73cf1fe89d33433d9cc8688d1892d432&assistId=R2u2OCB9eEbcCVB_CiVKhg',
        'RgSlO': function(_0x18f608, _0x264d2b) {
            return _0x18f608 === _0x264d2b;
        },
        'GOWmH': 'FLjtp',
        'NpRtu': 'ZjKkN',
        'TYsHK': 'tsLbm',
        'Qeuah': 'kVPRK',
        'qFrqk': function(_0x5ed020, _0x1694eb) {
            return _0x5ed020 < _0x1694eb;
        },
        'qyOpI': function(_0x39b76c, _0x357f5c) {
            return _0x39b76c !== _0x357f5c;
        },
        'wSpHu': 'EDFAp',
        'KEJhF': function(_0x1b6ac0, _0x27ed5e) {
            return _0x1b6ac0 == _0x27ed5e;
        },
        'JAhHu': function(_0x5571d8, _0x2572c6) {
            return _0x5571d8 !== _0x2572c6;
        },
        'bHtjD': 'UgmeG',
        'sePuD': function(_0x2865d5, _0x4b6f39, _0x5485ec) {
            return _0x2865d5(_0x4b6f39, _0x5485ec);
        },
        'UkWSW': function(_0x11c963, _0x59ec43) {
            return _0x11c963 == _0x59ec43;
        },
        'ZOgxy': 'SLWbh',
        'LTwxU': function(_0x31a9c8) {
            return _0x31a9c8();
        },
        'gUAZi': 'VGtom',
        'ZSPqZ': function(_0x4da6ef) {
            return _0x4da6ef();
        },
        'ILvBw': function(_0x39a6aa) {
            return _0x39a6aa();
        },
        'aLtLi': '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie',
        'QIzwO': function(_0x5bc75f, _0x34ba77) {
            return _0x5bc75f === _0x34ba77;
        },
        'Bmxrm': 'jHLdF',
        'xiVFZ': 'RSEFa',
        'rZTOL': function(_0xbec88a, _0x587fd4) {
            return _0xbec88a == _0x587fd4;
        },
        'FGvpP': 'success',
        'EOkrd': function(_0x2c0cf8, _0x6b3516) {
            return _0x2c0cf8 !== _0x6b3516;
        },
        'xpcjG': 'tXEom',
        'mMosC': 'nVMHK',
        'bUOxw': 'ccULi',
        'AXVPM': 'bwiua',
        'egFQv': function(_0xd9fc79, _0x4449b5) {
            return _0xd9fc79(_0x4449b5);
        }
    };
    return new Promise(async _0x537a00 => {
        var _0x35da19 = {
            'yjOsY': function(_0x576aed) {
                return _0x426852['ILvBw'](_0x576aed);
            },
            'RyYrT': _0x426852['aLtLi'],
            'JgHNK': function(_0x3cc9a8, _0x21c00e) {
                return _0x426852['QIzwO'](_0x3cc9a8, _0x21c00e);
            },
            'wkcqJ': _0x426852['Bmxrm'],
            'pNCye': _0x426852['xiVFZ'],
            'UDTgD': function(_0x236842, _0x5447d6) {
                return _0x426852['rZTOL'](_0x236842, _0x5447d6);
            },
            'KVOde': _0x426852['FGvpP'],
            'PwMAk': function(_0x1bbc04, _0x14a5fb) {
                return _0x426852['EOkrd'](_0x1bbc04, _0x14a5fb);
            },
            'vmAPx': _0x426852['xpcjG'],
            'dYLUA': _0x426852['mMosC'],
            'PVoSN': _0x426852['bUOxw'],
            'QuLhJ': _0x426852['AXVPM'],
            'lJAEe': function(_0x49643a) {
                return _0x426852['ILvBw'](_0x49643a);
            },
            'FNOMu': function(_0x42f8fa, _0x3fe80e) {
                return _0x426852['QIzwO'](_0x42f8fa, _0x3fe80e);
            },
            'qpnhm': function(_0x20b904, _0x2b2bdd) {
                return _0x426852['egFQv'](_0x20b904, _0x2b2bdd);
            }
        };
        $['get'](_0x426852['egFQv'](taskUrl, 'user/GatherForture'), async (_0x59538a, _0x3e1e96, _0x5cd4d3) => {
            var _0x21965f = {
                'dEXRN': function(_0xc0ef71, _0x5a6359) {
                    return _0x426852['ZHvsR'](_0xc0ef71, _0x5a6359);
                },
                'XvuQI': _0x426852['TcwiK'],
                'jdsZt': _0x426852['fReRw'],
                'bnxMK': _0x426852['BLCTm'],
                'Todep': _0x426852['Aowve'],
                'WYOGf': _0x426852['DgPmy'],
                'vyhHA': _0x426852['TQwpM']
            };
            if (_0x426852['RgSlO'](_0x426852['GOWmH'], _0x426852['NpRtu'])) {
                $['logErr'](e, _0x3e1e96);
            } else {
                try {
                    if (_0x426852['RgSlO'](_0x426852['TYsHK'], _0x426852['Qeuah'])) {
                        _0x35da19['yjOsY'](_0x537a00);
                    } else {
                        const {
                            PeriodBox = [{}]
                        } = JSON['parse'](_0x5cd4d3);
                        for (var _0x214aec = 0x0; _0x426852['qFrqk'](_0x214aec, PeriodBox['length']); _0x214aec++) {
                            if (_0x426852['qyOpI'](_0x426852['wSpHu'], _0x426852['wSpHu'])) {
                                $['logErr'](e, _0x3e1e96);
                            } else {
                                const {
                                    dwStatus,
                                    dwSeq,
                                    strBrandName
                                } = PeriodBox[_0x214aec];
                                if (_0x426852['KEJhF'](dwStatus, 0x2)) {
                                    if (_0x426852['JAhHu'](_0x426852['bHtjD'], _0x426852['bHtjD'])) {
                                        const _0x49cd3d = {
                                            'url': 'https://api.m.jd.com/client.action?clientVersion=9.3.5&client=wh5&functionId=smtfission_assist&appid=smtFission&body=' + _0x21965f['dEXRN'](escape, JSON['stringify'](vo)),
                                            'headers': {
                                                'Host': _0x21965f['XvuQI'],
                                                'accept': _0x21965f['jdsZt'],
                                                'origin': _0x21965f['bnxMK'],
                                                'user-agent': _0x21965f['Todep'],
                                                'accept-language': _0x21965f['WYOGf'],
                                                'referer': _0x21965f['vyhHA'],
                                                'Cookie': cookie
                                            },
                                            'timeout': 0x2710
                                        };
                                        $['get'](_0x49cd3d);
                                    } else {
                                        await $['wait'](0x3e8);
                                        await $['get'](_0x426852['sePuD'](taskUrl, 'user/OpenPeriodBox', 'dwSeq=' + dwSeq), async (_0x59538a, _0x3e1e96, _0x5cd4d3) => {
                                            var _0x47179d = {
                                                'zqECL': function(_0x28e53e) {
                                                    return _0x35da19['yjOsY'](_0x28e53e);
                                                },
                                                'YbIvC': _0x35da19['RyYrT']
                                            };
                                            try {
                                                if (_0x35da19['JgHNK'](_0x35da19['wkcqJ'], _0x35da19['pNCye'])) {
                                                    $['logErr'](e, _0x3e1e96);
                                                } else {
                                                    const {
                                                        dwMoney,
                                                        iRet,
                                                        sErrMsg
                                                    } = JSON['parse'](_0x5cd4d3);
                                                    $['log']('\n【🏝寻宝大作战】【' + strBrandName + '】开宝箱：' + (_0x35da19['UDTgD'](sErrMsg, _0x35da19['KVOde']) ? ' 获得财富值 ¥ ' + dwMoney : sErrMsg) + '\x0a' + ($['showLog'] ? _0x5cd4d3 : ''));
                                                }
                                            } catch (_0x6745a8) {
                                                if (_0x35da19['PwMAk'](_0x35da19['vmAPx'], _0x35da19['dYLUA'])) {
                                                    $['logErr'](_0x6745a8, _0x3e1e96);
                                                } else {
                                                    _0x47179d['zqECL'](_0x537a00);
                                                }
                                            } finally {
                                                if (_0x35da19['JgHNK'](_0x35da19['PVoSN'], _0x35da19['QuLhJ'])) {
                                                    console['log'](e);
                                                    $['msg']($['name'], '', _0x47179d['YbIvC']);
                                                    return [];
                                                } else {
                                                    _0x35da19['lJAEe'](_0x537a00);
                                                }
                                            }
                                        });
                                    }
                                } else if (_0x426852['UkWSW'](dwStatus, 0x3)) {
                                    $['log']('\n【🏝寻宝大作战】【' + strBrandName + '】开宝箱：宝箱已开启过！');
                                } else {
                                    if (_0x426852['JAhHu'](_0x426852['ZOgxy'], _0x426852['ZOgxy'])) {
                                        try {
                                            const {
                                                sErrMsg,
                                                iRet
                                            } = JSON['parse'](_0x5cd4d3);
                                            if (_0x35da19['FNOMu'](iRet, 0x7d5) || _0x35da19['FNOMu'](iRet, 0x270f)) $['canHelp'] = ![];
                                            $['log']('iRet:' + iRet + ' ' + sErrMsg);
                                        } catch (_0xcc365c) {
                                            $['logErr'](_0xcc365c, _0x3e1e96);
                                        } finally {
                                            _0x35da19['qpnhm'](_0x537a00, JSON['parse'](_0x5cd4d3) || {});
                                        }
                                    } else {
                                        $['log']('\n【🏝寻宝大作战】【' + strBrandName + '】开宝箱：未达到宝箱开启条件，快去邀请好友助力吧！');
                                        _0x426852['LTwxU'](_0x537a00);
                                    }
                                }
                            }
                        }
                    }
                } catch (_0x445b95) {
                    $['logErr'](_0x445b95, _0x3e1e96);
                } finally {
                    if (_0x426852['JAhHu'](_0x426852['gUAZi'], _0x426852['gUAZi'])) {
                        $['logErr'](e, _0x3e1e96);
                    } else {
                        _0x426852['ZSPqZ'](_0x537a00);
                    }
                }
            }
        });
    });
}

function activeScene(_0x59685b) {
    var _0x4772f4 = {
        'edDMA': function(_0x1f80c1, _0x522320) {
            return _0x1f80c1 === _0x522320;
        },
        'Oeacu': 'SdiFe',
        'loqbZ': function(_0x4bd962) {
            return _0x4bd962();
        },
        'TItxC': function(_0x44c041, _0x20606d) {
            return _0x44c041(_0x20606d);
        },
        'fRelL': '*/*',
        'GOEmH': 'keep-alive',
        'LbUgz': 'https://st.jingxi.com/fortune_island/index.html',
        'dzBFm': 'gzip, deflate, br',
        'PrwgF': 'm.jingxi.com',
        'slfFD': function(_0x45cdac, _0x3c125e) {
            return _0x45cdac + _0x3c125e;
        },
        'wyDjP': function(_0x5edd1e, _0x58eca0) {
            return _0x5edd1e * _0x58eca0;
        },
        'hnIwE': 'zh-cn'
    };
    return new Promise(_0x265d93 => {
        const _0x3fd0bd = {
            'url': JD_API_HOST + 'jxcfd/user/ActiveScene?strZone=jxcfd&bizCode=jxcfd&source=jxcfd&dwEnv=7&_cfd_t=' + Date['now']() + '&ptag=&dwSceneId=' + _0x4772f4['TItxC'](Number, _0x59685b) + '&_stk=_cfd_t,bizCode,dwEnv,dwSceneId,ptag,source,strZone&_ste=1&h5st=20210304125239873;1540797227618115;10009;tk01we7831daaa8nRzRiUm4rZjRynBiuCHXtzWJmGCtVH2P+YnfnjoIsTWS87p85/fH4kcisjwWpqa10pRs3zMclNzix;5a9afbeb82bbb4e5e62cfe4b72965b5a2bf12cc3c56817b53e93a1cead562dc4&_=' + Date['now']() + '&sceneval=2&g_login_type=1',
            'headers': {
                'Cookie': cookie,
                'Accept': _0x4772f4['fRelL'],
                'Connection': _0x4772f4['GOEmH'],
                'Referer': _0x4772f4['LbUgz'],
                'Accept-Encoding': _0x4772f4['dzBFm'],
                'Host': _0x4772f4['PrwgF'],
                'User-Agent': 'jdpingou;iPhone;3.15.2;14.2.1;ea00763447803eb0f32045dcba629c248ea53bb3;network/wifi;model/iPhone13,2;appBuild/100365;ADID/00000000-0000-0000-0000-000000000000;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/0;hasOCPay/0;supportBestPay/0;session/' + _0x4772f4['slfFD'](_0x4772f4['wyDjP'](Math['random'], 0x62), 0x1) + ';pap/JA2015_311210;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
                'Accept-Language': _0x4772f4['hnIwE']
            }
        };
        $['get'](_0x3fd0bd, (_0x1c8709, _0x32b7b5, _0x285647) => {
            try {
                if (_0x285647) {
                    if (_0x4772f4['edDMA'](_0x4772f4['Oeacu'], _0x4772f4['Oeacu'])) {
                        console['log']('开通场景结果:' + _0x285647 + '\x0a');
                    } else {
                        $['logErr'](e, _0x32b7b5);
                    }
                }
            } catch (_0x3f3d77) {
                $['logErr'](_0x3f3d77, _0x32b7b5);
            } finally {
                _0x4772f4['loqbZ'](_0x265d93);
            }
        });
    });
}

function taskUrl(_0x26e8d7, _0x2f44d8) {
    var _0x1387b9 = {
        'LozAa': '*/*',
        'oHYDz': 'keep-alive',
        'NdOwI': 'https://st.jingxi.com/fortune_island/index.html?ptag=138631.26.55',
        'tTfHB': 'gzip, deflate, br',
        'OjIeV': 'm.jingxi.com',
        'VEife': function(_0x5b84b4, _0x36ee83) {
            return _0x5b84b4 + _0x36ee83;
        },
        'TegQy': function(_0x20e148, _0x3e76ee) {
            return _0x20e148 * _0x3e76ee;
        },
        'XdwTL': 'zh-cn'
    };
    return {
        'url': JD_API_HOST + 'jxcfd/' + _0x26e8d7 + '?strZone=jxcfd&bizCode=jxcfd&source=jxcfd&dwEnv=7&_cfd_t=' + Date['now']() + '&ptag=138631.26.55&' + _0x2f44d8 + '&_ste=1&_=' + Date['now']() + '&sceneval=2&g_login_type=1&g_ty=ls',
        'headers': {
            'Cookie': cookie,
            'Accept': _0x1387b9['LozAa'],
            'Connection': _0x1387b9['oHYDz'],
            'Referer': _0x1387b9['NdOwI'],
            'Accept-Encoding': _0x1387b9['tTfHB'],
            'Host': _0x1387b9['OjIeV'],
            'User-Agent': 'jdpingou;iPhone;3.15.2;14.2.1;ea00763447803eb0f32045dcba629c248ea53bb3;network/wifi;model/iPhone13,2;appBuild/100365;ADID/00000000-0000-0000-0000-000000000000;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/0;hasOCPay/0;supportBestPay/0;session/' + _0x1387b9['VEife'](_0x1387b9['TegQy'](Math['random'], 0x62), 0x1) + ';pap/JA2015_311210;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
            'Accept-Language': _0x1387b9['XdwTL']
        },
        'timeout': 0x2710
    };
}

function taskListUrl(_0x5a57bd, _0x4bac1b) {
    var _0x44d4a5 = {
        'vlTlL': '*/*',
        'zILik': 'keep-alive',
        'zEMlt': 'https://st.jingxi.com/fortune_island/index.html?ptag=138631.26.55',
        'nppdV': 'gzip, deflate, br',
        'WbOYe': 'm.jingxi.com',
        'MxiZx': function(_0x284198, _0x3cf8ab) {
            return _0x284198 + _0x3cf8ab;
        },
        'nbmtU': function(_0x550c23, _0x13607f) {
            return _0x550c23 * _0x13607f;
        },
        'NpErT': 'zh-cn'
    };
    return {
        'url': JD_API_HOST + 'newtasksys/newtasksys_front/' + _0x5a57bd + '?strZone=jxcfd&bizCode=jxcfd&source=jxcfd&dwEnv=7&_cfd_t=' + Date['now']() + '&ptag=138631.26.55&' + _0x4bac1b + '&_ste=1&_=' + Date['now']() + '&sceneval=2&g_login_type=1&g_ty=ls',
        'headers': {
            'Cookie': cookie,
            'Accept': _0x44d4a5['vlTlL'],
            'Connection': _0x44d4a5['zILik'],
            'Referer': _0x44d4a5['zEMlt'],
            'Accept-Encoding': _0x44d4a5['nppdV'],
            'Host': _0x44d4a5['WbOYe'],
            'User-Agent': 'jdpingou;iPhone;3.15.2;14.2.1;ea00763447803eb0f32045dcba629c248ea53bb3;network/wifi;model/iPhone13,2;appBuild/100365;ADID/00000000-0000-0000-0000-000000000000;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/0;hasOCPay/0;supportBestPay/0;session/' + _0x44d4a5['MxiZx'](_0x44d4a5['nbmtU'](Math['random'], 0x62), 0x1) + ';pap/JA2015_311210;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
            'Accept-Language': _0x44d4a5['NpErT']
        },
        'timeout': 0x2710
    };
}

function showMsg() {
    var _0x5dea29 = {
        'nRifU': function(_0x2200ba, _0x3a3eb8) {
            return _0x2200ba === _0x3a3eb8;
        },
        'Zhldp': function(_0x2065e5) {
            return _0x2065e5();
        },
        'wByGS': function(_0x34c26c) {
            return _0x34c26c();
        },
        'ZJRcj': function(_0x20f711, _0x1c51fb) {
            return _0x20f711 === _0x1c51fb;
        },
        'GqHqq': 'jcyvY',
        'wmlNY': 'XKSJo',
        'dRaXg': 'HH:mm',
        'fEiIO': function(_0x56866f, _0x23a016) {
            return _0x56866f === _0x23a016;
        },
        'TxEOt': 'HvQed',
        'xxMUD': 'wmqET'
    };
    return new Promise(async _0x3519ba => {
        var _0x5b4ff5 = {
            'togjB': function(_0x4e7823) {
                return _0x5dea29['wByGS'](_0x4e7823);
            }
        };
        if ($['result']['length']) {
            if ($['notifyTime']) {
                if (_0x5dea29['ZJRcj'](_0x5dea29['GqHqq'], _0x5dea29['wmlNY'])) {
                    try {
                        const {
                            iRet,
                            sErrMsg,
                            taskinfo = []
                        } = JSON['parse'](data);
                        $['allTask'] = taskinfo['filter'](_0x95f20a => _0x95f20a['dwAwardStatus'] === 0x1);
                        $['log']('\n获取【🎖成就任务】列表 ' + sErrMsg + '，总共' + $['allTask']['length'] + '个任务！\n' + ($['showLog'] ? data : ''));
                    } catch (_0x1d9fdd) {
                        $['logErr'](_0x1d9fdd, resp);
                    } finally {
                        _0x5b4ff5['togjB'](_0x3519ba);
                    }
                } else {
                    const _0x403ea0 = $['notifyTime']['split'](',')['map'](_0x44034e => _0x44034e['split'](':'));
                    const _0x2f04b1 = $['time'](_0x5dea29['dRaXg'])['split'](':');
                    $['log']('\x0a' + JSON['stringify'](_0x403ea0));
                    $['log']('\x0a' + JSON['stringify'](_0x2f04b1));
                    if (_0x403ea0['some'](_0x28ca8d => _0x28ca8d[0x0] === _0x2f04b1[0x0] && (!_0x28ca8d[0x1] || _0x28ca8d[0x1] === _0x2f04b1[0x1]))) {
                        if (_0x5dea29['fEiIO'](_0x5dea29['TxEOt'], _0x5dea29['xxMUD'])) {
                            try {
                                console['log']('\n超级助力(超级工人)结果:' + data);
                                const {
                                    sErrMsg,
                                    iRet
                                } = JSON['parse'](data);
                                if (_0x5dea29['nRifU'](iRet, 0x7d5) || _0x5dea29['nRifU'](iRet, 0x270f)) $['canHelp'] = ![];
                                console['log'](sErrMsg);
                            } catch (_0x714688) {
                                $['logErr'](_0x714688, resp);
                            } finally {
                                _0x5dea29['Zhldp'](_0x3519ba);
                            }
                        } else {
                            $['msg']($['name'], '', '' + $['result']['join']('\x0a'));
                        }
                    }
                }
            } else {
                $['msg']($['name'], '', '' + $['result']['join']('\x0a'));
            }
            if ($['isNode']() && process['env']['CFD_NOTIFY_CONTROL']) await notify['sendNotify']($['name'] + ' - 账号' + $['index'] + ' - ' + $['nickName'], '' + $['result']['join']('\x0a'));
        }
        _0x5dea29['wByGS'](_0x3519ba);
    });
}

function TotalBean() {
    var _0x494d37 = {
        'doytC': function(_0x1ce723, _0x3e8adf) {
            return _0x1ce723(_0x3e8adf);
        },
        'TDbjA': function(_0x34316b, _0x52e918) {
            return _0x34316b * _0x52e918;
        },
        'dLCjy': function(_0x560fc4, _0x4a0d9d) {
            return _0x560fc4 + _0x4a0d9d;
        },
        'ILTjP': function(_0x103801, _0x5bccab) {
            return _0x103801 !== _0x5bccab;
        },
        'wlQeP': 'fWbOh',
        'RTDHw': 'vjUtY',
        'uEyev': 'hKDtu',
        'eGvFA': function(_0x5b62ac, _0x3eb741) {
            return _0x5b62ac === _0x3eb741;
        },
        'NLaUU': 'retcode',
        'gKHNk': 'base',
        'NjbWE': 'CGAGu',
        'RHUnY': 'QZOOU',
        'VyHzk': 'lFMlP',
        'OXwWH': function(_0x1fc686) {
            return _0x1fc686();
        },
        'cUTJw': 'application/json,text/plain, */*',
        'uoOmy': 'application/x-www-form-urlencoded',
        'wYFAi': 'gzip, deflate, br',
        'MtHfp': 'zh-cn',
        'KGTnL': 'keep-alive',
        'Vybex': 'https://wqs.jd.com/my/jingdou/my.shtml?sceneval=2',
        'JGBOp': './USER_AGENTS',
        'VlJNL': 'JDUA',
        'WDZiU': 'jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1'
    };
    return new Promise(async _0x456089 => {
        var _0x57d8e5 = {
            'TPhMl': function(_0x344596, _0x1444f0) {
                return _0x494d37['doytC'](_0x344596, _0x1444f0);
            },
            'GxjQb': function(_0x5e61f8, _0xc05680) {
                return _0x494d37['TDbjA'](_0x5e61f8, _0xc05680);
            },
            'VgiOP': function(_0x2cbb4a, _0x204926) {
                return _0x494d37['dLCjy'](_0x2cbb4a, _0x204926);
            },
            'hnpTT': function(_0x351c51, _0x514bf3) {
                return _0x494d37['ILTjP'](_0x351c51, _0x514bf3);
            },
            'RGLxa': _0x494d37['wlQeP'],
            'rytSN': _0x494d37['RTDHw'],
            'pKbRd': _0x494d37['uEyev'],
            'VmDzu': function(_0x4976c5, _0x44e8ae) {
                return _0x494d37['eGvFA'](_0x4976c5, _0x44e8ae);
            },
            'TdAmo': _0x494d37['NLaUU'],
            'wgwcQ': _0x494d37['gKHNk'],
            'UrqYn': function(_0x2cd9c3, _0x442e28) {
                return _0x494d37['eGvFA'](_0x2cd9c3, _0x442e28);
            },
            'UJWys': _0x494d37['NjbWE'],
            'HKvlF': function(_0x5ca72d, _0x3df6f8) {
                return _0x494d37['ILTjP'](_0x5ca72d, _0x3df6f8);
            },
            'FPjDE': _0x494d37['RHUnY'],
            'PInXE': _0x494d37['VyHzk'],
            'BhyAh': function(_0x54f02a) {
                return _0x494d37['OXwWH'](_0x54f02a);
            }
        };
        const _0x29685b = {
            'url': 'https://wq.jd.com/user/info/QueryJDUserInfo?sceneval=2',
            'headers': {
                'Accept': _0x494d37['cUTJw'],
                'Content-Type': _0x494d37['uoOmy'],
                'Accept-Encoding': _0x494d37['wYFAi'],
                'Accept-Language': _0x494d37['MtHfp'],
                'Connection': _0x494d37['KGTnL'],
                'Cookie': cookie,
                'Referer': _0x494d37['Vybex'],
                'User-Agent': $['isNode']() ? process['env']['JD_USER_AGENT'] ? process['env']['JD_USER_AGENT'] : _0x494d37['doytC'](require, _0x494d37['JGBOp'])['USER_AGENT'] : $['getdata'](_0x494d37['VlJNL']) ? $['getdata'](_0x494d37['VlJNL']) : _0x494d37['WDZiU']
            }
        };
        $['post'](_0x29685b, (_0x1a3fd2, _0xb717b1, _0x23c23a) => {
            var _0x1c87b1 = {
                'UOaBz': function(_0x5732b3, _0xd67573) {
                    return _0x57d8e5['GxjQb'](_0x5732b3, _0xd67573);
                },
                'zDPNG': function(_0x584297, _0x12c9c4) {
                    return _0x57d8e5['VgiOP'](_0x584297, _0x12c9c4);
                }
            };
            try {
                if (_0x57d8e5['hnpTT'](_0x57d8e5['RGLxa'], _0x57d8e5['rytSN'])) {
                    if (_0x1a3fd2) {
                        console['log']('' + JSON['stringify'](_0x1a3fd2));
                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                    } else {
                        if (_0x57d8e5['hnpTT'](_0x57d8e5['pKbRd'], _0x57d8e5['pKbRd'])) {
                            $['logErr'](e, _0xb717b1);
                        } else {
                            if (_0x23c23a) {
                                _0x23c23a = JSON['parse'](_0x23c23a);
                                if (_0x57d8e5['VmDzu'](_0x23c23a[_0x57d8e5['TdAmo']], 0xd)) {
                                    $['isLogin'] = ![];
                                    return;
                                }
                                if (_0x57d8e5['VmDzu'](_0x23c23a[_0x57d8e5['TdAmo']], 0x0)) {
                                    $['nickName'] = _0x23c23a[_0x57d8e5['wgwcQ']] && _0x23c23a[_0x57d8e5['wgwcQ']]['nickname'] || $['UserName'];
                                } else {
                                    $['nickName'] = $['UserName'];
                                }
                            } else {
                                console['log']('京东服务器返回空数据');
                            }
                        }
                    }
                } else {
                    str += _sym[_0x57d8e5['TPhMl'](parseInt, _0x57d8e5['GxjQb'](Math['random'](), _sym['length']))];
                }
            } catch (_0x35ea5e) {
                if (_0x57d8e5['UrqYn'](_0x57d8e5['UJWys'], _0x57d8e5['UJWys'])) {
                    $['logErr'](_0x35ea5e, _0xb717b1);
                } else {
                    console['log']('' + JSON['stringify'](_0x1a3fd2));
                    console['log']($['name'] + ' API请求失败，请检查网路重试');
                }
            } finally {
                if (_0x57d8e5['HKvlF'](_0x57d8e5['FPjDE'], _0x57d8e5['PInXE'])) {
                    _0x57d8e5['BhyAh'](_0x456089);
                } else {
                    index = Math['floor'](_0x1c87b1['UOaBz'](_0x1c87b1['zDPNG'](i, 0x1), Math['random']()));
                    temp = shuffled[index];
                    shuffled[index] = shuffled[i];
                    shuffled[i] = temp;
                }
            }
        });
    });
}

function readShareCode() {
    var _0x2e8900 = {
        'rMKGp': function(_0x475506, _0x2cb9b7) {
            return _0x475506(_0x2cb9b7);
        },
        'hEeCy': function(_0x151d98, _0x2314a9) {
            return _0x151d98 !== _0x2314a9;
        },
        'SRzlI': 'qUBON',
        'pWOJA': 'ayzJq',
        'sNuhQ': function(_0x951ac0) {
            return _0x951ac0();
        }
    };
    console['log']('开始');
    return new Promise(async _0x5eb691 => {
        var _0x380b8c = {
            'DPDqR': function(_0x2be443, _0x5eb2e8) {
                return _0x2e8900['rMKGp'](_0x2be443, _0x5eb2e8);
            },
            'JNfBM': function(_0x182426, _0x6c0e73) {
                return _0x2e8900['hEeCy'](_0x182426, _0x6c0e73);
            },
            'LtIOg': _0x2e8900['SRzlI'],
            'JSeKO': _0x2e8900['pWOJA'],
            'XwcNL': function(_0x2d3436, _0xdfb177) {
                return _0x2e8900['rMKGp'](_0x2d3436, _0xdfb177);
            }
        };
        $['get']({
            'url': 'http://jd.turinglabs.net/api/v2/jd/jxcfd/read/0/',
            'timeout': 0x2710
        }, (_0x3eca58, _0x1f374f, _0x27f883) => {
            try {
                if (_0x3eca58) {
                    console['log']('' + JSON['stringify'](_0x3eca58));
                    console['log']($['name'] + ' API请求失败，请检查网路重试');
                } else {
                    if (_0x380b8c['JNfBM'](_0x380b8c['LtIOg'], _0x380b8c['JSeKO'])) {
                        if (_0x27f883) {
                            console['log']('随机取0个码放到您固定的互助码后面(不影响已有固定互助)');
                            _0x27f883 = JSON['parse'](_0x27f883);
                        }
                    } else {
                        const {
                            sErrMsg
                        } = JSON['parse'](_0x27f883);
                        $['log']('\n【🏝寻宝大作战】' + sErrMsg + '\x0a' + ($['showLog'] ? _0x27f883 : ''));
                        _0x380b8c['DPDqR'](_0x5eb691, 0x0);
                    }
                }
            } catch (_0x5e5c53) {
                $['logErr'](_0x5e5c53, _0x1f374f);
            } finally {
                _0x380b8c['XwcNL'](_0x5eb691, _0x27f883);
            }
        });
        await $['wait'](0x2710);
        _0x2e8900['sNuhQ'](_0x5eb691);
    });
}

function shareCodesFormat() {
    var _0x15da77 = {
        'yeKSv': 'ddwMoney',
        'sTLTS': function(_0xd5cbcf, _0x334a28) {
            return _0xd5cbcf(_0x334a28);
        },
        'JcFuj': function(_0x126fc3, _0x329a9b) {
            return _0x126fc3 - _0x329a9b;
        },
        'rPUwf': function(_0x188d05) {
            return _0x188d05();
        },
        'CMmOa': function(_0x41dcf4, _0x5a400d) {
            return _0x41dcf4 === _0x5a400d;
        },
        'BIXSJ': 'bostZ',
        'dBydj': 'F45CB4F07997DFE748E5656521A9034446A1568F6950206B0D44A5664662275D',
        'kdkYp': function(_0x10d148) {
            return _0x10d148();
        }
    };
    return new Promise(async _0x6e0238 => {
        var _0x481271 = {
            'REbZK': _0x15da77['yeKSv'],
            'pCVqk': function(_0x1c07f5, _0x34e3ff) {
                return _0x15da77['sTLTS'](_0x1c07f5, _0x34e3ff);
            }
        };
        $['newShareCodes'] = [];
        if ($['shareCodesArr'][_0x15da77['JcFuj']($['index'], 0x1)]) {
            $['newShareCodes'] = $['shareCodesArr'][_0x15da77['JcFuj']($['index'], 0x1)]['split']('@');
        } else {
            console['log']('由于您第' + $['index'] + '个京东账号未提供shareCode,将采纳本脚本自带的助力码\n');
            $['newShareCodes'] = $['strMyShareIds'];
        }
        const _0x3fbcff = await _0x15da77['rPUwf'](readShareCode);
        if (_0x3fbcff && _0x15da77['CMmOa'](_0x3fbcff['code'], 0xc8)) {
            if (_0x15da77['CMmOa'](_0x15da77['BIXSJ'], _0x15da77['BIXSJ'])) {
                $['newShareCodes'] = [...new Set([...$['newShareCodes'], ...$['strMyShareIds'], _0x15da77['dBydj'], ..._0x3fbcff['data'] || []])];
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
                $['log']('\n当前等级:' + dwLevel + ',财富值:' + data[_0x481271['REbZK']] + '\x0a');
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
                _0x481271['pCVqk'](_0x6e0238, {
                    'SceneList': SceneList,
                    'XBDetail': XBDetail,
                    'dwXBRemainCnt': dwXBRemainCnt,
                    'ddwMoney': ddwMoney,
                    'dwIsNewUser': dwIsNewUser,
                    'strMyShareId': strMyShareId,
                    'strPin': strPin
                });
            }
        }
        console['log']('第' + $['index'] + '个京东账号将要助力的好友' + JSON['stringify']($['newShareCodes']));
        _0x15da77['kdkYp'](_0x6e0238);
    });
}

function requireConfig() {
    var _0x348ae6 = {
        'GIZQY': function(_0x28b470) {
            return _0x28b470();
        },
        'wfwfT': function(_0x155c30, _0x103a81) {
            return _0x155c30 !== _0x103a81;
        },
        'naPVO': 'gAVYx',
        'DmtNp': 'tPsQw',
        'giEqv': function(_0x237e13, _0x5b3674) {
            return _0x237e13 - _0x5b3674;
        },
        'nhLzN': function(_0x2f1401, _0x1430d8) {
            return _0x2f1401 === _0x1430d8;
        },
        'Zaidz': 'ZgsEM',
        'XOlgL': function(_0x591775, _0x27004a) {
            return _0x591775 > _0x27004a;
        },
        'GASVj': function(_0x290bbb, _0x1e7a8b) {
            return _0x290bbb !== _0x1e7a8b;
        },
        'BYapq': 'wBUbv',
        'FQWQS': 'jd_jxCFD',
        'WpZwR': function(_0x326f2a) {
            return _0x326f2a();
        }
    };
    return new Promise(_0x1bcc0e => {
        var _0x288bb6 = {
            'Lmoif': function(_0x24e032) {
                return _0x348ae6['GIZQY'](_0x24e032);
            },
            'VHeoY': function(_0x5c2f44, _0x27c625) {
                return _0x348ae6['wfwfT'](_0x5c2f44, _0x27c625);
            },
            'Kwsqg': _0x348ae6['naPVO'],
            'AKjLR': _0x348ae6['DmtNp'],
            'gElhX': function(_0x5b52a7, _0x42ea3d) {
                return _0x348ae6['giEqv'](_0x5b52a7, _0x42ea3d);
            }
        };
        if (_0x348ae6['nhLzN'](_0x348ae6['Zaidz'], _0x348ae6['Zaidz'])) {
            console['log']('开始获取' + $['name'] + '配置文件\n');
            let _0x5d8336 = [];
            if ($['isNode']() && process['env']['JDCFD_SHARECODES']) {
                if (_0x348ae6['XOlgL'](process['env']['JDCFD_SHARECODES']['indexOf']('\x0a'), -0x1)) {
                    if (_0x348ae6['GASVj'](_0x348ae6['BYapq'], _0x348ae6['BYapq'])) {
                        _0x288bb6['Lmoif'](_0x1bcc0e);
                    } else {
                        _0x5d8336 = process['env']['JDCFD_SHARECODES']['split']('\x0a');
                    }
                } else {
                    _0x5d8336 = process['env']['JDCFD_SHARECODES']['split']('&');
                }
            }
            $['shareCodesArr'] = [];
            if ($['isNode']()) {
                Object['keys'](_0x5d8336)['forEach'](_0x463e4c => {
                    if (_0x288bb6['VHeoY'](_0x288bb6['Kwsqg'], _0x288bb6['AKjLR'])) {
                        if (_0x5d8336[_0x463e4c]) {
                            $['shareCodesArr']['push'](_0x5d8336[_0x463e4c]);
                        }
                    } else {
                        $['msg']($['name'], '', '' + $['result']['join']('\x0a'));
                    }
                });
            } else {
                if ($['getdata'](_0x348ae6['FQWQS'])) $['shareCodesArr'] = $['getdata'](_0x348ae6['FQWQS'])['split']('\x0a')['filter'](_0x115ccc => !!_0x115ccc);
                console['log']('\nBoxJs设置的京喜财富岛邀请码:' + $['getdata'](_0x348ae6['FQWQS']) + '\x0a');
            }
            console['log']('您提供了' + $['shareCodesArr']['length'] + '个账号的' + $['name'] + '助力码\n');
            _0x348ae6['WpZwR'](_0x1bcc0e);
        } else {
            $['newShareCodes'] = $['shareCodesArr'][_0x288bb6['gElhX']($['index'], 0x1)]['split']('@');
        }
    });
}

function jsonParse(_0xf78b6a) {
    var _0x33b7bc = {
        'QHVWG': function(_0x1abf3c, _0x739de8) {
            return _0x1abf3c == _0x739de8;
        },
        'hcxDQ': 'string',
        'rpRpS': '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie'
    };
    if (_0x33b7bc['QHVWG'](typeof _0xf78b6a, _0x33b7bc['hcxDQ'])) {
        try {
            return JSON['parse'](_0xf78b6a);
        } catch (_0x3ca124) {
            console['log'](_0x3ca124);
            $['msg']($['name'], '', _0x33b7bc['rpRpS']);
            return [];
        }
    }
};
_0xodV = 'jsjiami.com.v6'


!function(n){"use strict";function t(n,t){var r=(65535&n)+(65535&t);return(n>>16)+(t>>16)+(r>>16)<<16|65535&r}function r(n,t){return n<<t|n>>>32-t}function e(n,e,o,u,c,f){return t(r(t(t(e,n),t(u,f)),c),o)}function o(n,t,r,o,u,c,f){return e(t&r|~t&o,n,t,u,c,f)}function u(n,t,r,o,u,c,f){return e(t&o|r&~o,n,t,u,c,f)}function c(n,t,r,o,u,c,f){return e(t^r^o,n,t,u,c,f)}function f(n,t,r,o,u,c,f){return e(r^(t|~o),n,t,u,c,f)}function i(n,r){n[r>>5]|=128<<r%32,n[14+(r+64>>>9<<4)]=r;var e,i,a,d,h,l=1732584193,g=-271733879,v=-1732584194,m=271733878;for(e=0;e<n.length;e+=16)i=l,a=g,d=v,h=m,g=f(g=f(g=f(g=f(g=c(g=c(g=c(g=c(g=u(g=u(g=u(g=u(g=o(g=o(g=o(g=o(g,v=o(v,m=o(m,l=o(l,g,v,m,n[e],7,-680876936),g,v,n[e+1],12,-389564586),l,g,n[e+2],17,606105819),m,l,n[e+3],22,-1044525330),v=o(v,m=o(m,l=o(l,g,v,m,n[e+4],7,-176418897),g,v,n[e+5],12,1200080426),l,g,n[e+6],17,-1473231341),m,l,n[e+7],22,-45705983),v=o(v,m=o(m,l=o(l,g,v,m,n[e+8],7,1770035416),g,v,n[e+9],12,-1958414417),l,g,n[e+10],17,-42063),m,l,n[e+11],22,-1990404162),v=o(v,m=o(m,l=o(l,g,v,m,n[e+12],7,1804603682),g,v,n[e+13],12,-40341101),l,g,n[e+14],17,-1502002290),m,l,n[e+15],22,1236535329),v=u(v,m=u(m,l=u(l,g,v,m,n[e+1],5,-165796510),g,v,n[e+6],9,-1069501632),l,g,n[e+11],14,643717713),m,l,n[e],20,-373897302),v=u(v,m=u(m,l=u(l,g,v,m,n[e+5],5,-701558691),g,v,n[e+10],9,38016083),l,g,n[e+15],14,-660478335),m,l,n[e+4],20,-405537848),v=u(v,m=u(m,l=u(l,g,v,m,n[e+9],5,568446438),g,v,n[e+14],9,-1019803690),l,g,n[e+3],14,-187363961),m,l,n[e+8],20,1163531501),v=u(v,m=u(m,l=u(l,g,v,m,n[e+13],5,-1444681467),g,v,n[e+2],9,-51403784),l,g,n[e+7],14,1735328473),m,l,n[e+12],20,-1926607734),v=c(v,m=c(m,l=c(l,g,v,m,n[e+5],4,-378558),g,v,n[e+8],11,-2022574463),l,g,n[e+11],16,1839030562),m,l,n[e+14],23,-35309556),v=c(v,m=c(m,l=c(l,g,v,m,n[e+1],4,-1530992060),g,v,n[e+4],11,1272893353),l,g,n[e+7],16,-155497632),m,l,n[e+10],23,-1094730640),v=c(v,m=c(m,l=c(l,g,v,m,n[e+13],4,681279174),g,v,n[e],11,-358537222),l,g,n[e+3],16,-722521979),m,l,n[e+6],23,76029189),v=c(v,m=c(m,l=c(l,g,v,m,n[e+9],4,-640364487),g,v,n[e+12],11,-421815835),l,g,n[e+15],16,530742520),m,l,n[e+2],23,-995338651),v=f(v,m=f(m,l=f(l,g,v,m,n[e],6,-198630844),g,v,n[e+7],10,1126891415),l,g,n[e+14],15,-1416354905),m,l,n[e+5],21,-57434055),v=f(v,m=f(m,l=f(l,g,v,m,n[e+12],6,1700485571),g,v,n[e+3],10,-1894986606),l,g,n[e+10],15,-1051523),m,l,n[e+1],21,-2054922799),v=f(v,m=f(m,l=f(l,g,v,m,n[e+8],6,1873313359),g,v,n[e+15],10,-30611744),l,g,n[e+6],15,-1560198380),m,l,n[e+13],21,1309151649),v=f(v,m=f(m,l=f(l,g,v,m,n[e+4],6,-145523070),g,v,n[e+11],10,-1120210379),l,g,n[e+2],15,718787259),m,l,n[e+9],21,-343485551),l=t(l,i),g=t(g,a),v=t(v,d),m=t(m,h);return[l,g,v,m]}function a(n){var t,r="",e=32*n.length;for(t=0;t<e;t+=8)r+=String.fromCharCode(n[t>>5]>>>t%32&255);return r}function d(n){var t,r=[];for(r[(n.length>>2)-1]=void 0,t=0;t<r.length;t+=1)r[t]=0;var e=8*n.length;for(t=0;t<e;t+=8)r[t>>5]|=(255&n.charCodeAt(t/8))<<t%32;return r}function h(n){return a(i(d(n),8*n.length))}function l(n,t){var r,e,o=d(n),u=[],c=[];for(u[15]=c[15]=void 0,o.length>16&&(o=i(o,8*n.length)),r=0;r<16;r+=1)u[r]=909522486^o[r],c[r]=1549556828^o[r];return e=i(u.concat(d(t)),512+8*t.length),a(i(c.concat(e),640))}function g(n){var t,r,e="";for(r=0;r<n.length;r+=1)t=n.charCodeAt(r),e+="0123456789abcdef".charAt(t>>>4&15)+"0123456789abcdef".charAt(15&t);return e}function v(n){return unescape(encodeURIComponent(n))}function m(n){return h(v(n))}function p(n){return g(m(n))}function s(n,t){return l(v(n),v(t))}function C(n,t){return g(s(n,t))}function A(n,t,r){return t?r?s(t,n):C(t,n):r?m(n):p(n)}$.md5=A}(this);
// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
