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
    Object['keys'](jdCookieNode)['forEach'](_0x4bd51b => {
        cookiesArr['push'](jdCookieNode[_0x4bd51b]);
    });
    if (process['env']['JD_DEBUG'] && process['env']['JD_DEBUG'] === 'false') console['log'] = () => {};
} else {
    cookiesArr = [$['getdata']('CookieJD'), $['getdata']('CookieJD2'), ...jsonParse($['getdata']('CookiesJD') || '[]')['map'](_0x10d14e => _0x10d14e['cookie'])]['filter'](_0x5bea71 => !!_0x5bea71);
}!(async () => {
    var _0x275b73 = {
        'NReue': function(_0x2a5061, _0x197130) {
            return _0x2a5061(_0x197130);
        },
        'zjVFw': function(_0x49a1c9, _0x5d986a) {
            return _0x49a1c9 * _0x5d986a;
        },
        'HhTOp': function(_0x5417bf) {
            return _0x5417bf();
        },
        'gzZtQ': function(_0x16e260, _0x2fe5b4) {
            return _0x16e260 === _0x2fe5b4;
        },
        'ZYVnI': 'lwjPt',
        'KFJGt': 'GRMbl',
        'mmBGx': '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取',
        'yebfS': 'https://bean.m.jd.com/bean/signIndex.action',
        'ZqDJP': function(_0x3709a2) {
            return _0x3709a2();
        },
        'OJlZv': 'http://adguard.b.freefrp.net/cfd.json',
        'zhZvA': function(_0xbbdbfc, _0x2df754) {
            return _0xbbdbfc < _0x2df754;
        },
        'uodqr': function(_0x27abc0, _0x236068) {
            return _0x27abc0 === _0x236068;
        },
        'qmKhy': 'jgIEP',
        'IzXvB': function(_0xf59b5c, _0x19cdd0) {
            return _0xf59b5c !== _0x19cdd0;
        },
        'xDhoR': 'CqkKu',
        'orbsw': function(_0x710a12, _0x2d5447) {
            return _0x710a12 + _0x2d5447;
        },
        'Aajfc': function(_0xcb7c65) {
            return _0xcb7c65();
        },
        'acdJG': function(_0x1dc2cc) {
            return _0x1dc2cc();
        },
        'DZWQx': function(_0x1c6b12) {
            return _0x1c6b12();
        },
        'UGhNB': function(_0x394cbb) {
            return _0x394cbb();
        },
        'QLCuU': function(_0x4745cb) {
            return _0x4745cb();
        }
    };
    await _0x275b73['HhTOp'](requireConfig);
    if (!cookiesArr[0x0]) {
        if (_0x275b73['gzZtQ'](_0x275b73['ZYVnI'], _0x275b73['KFJGt'])) {
            str += _sym[_0x275b73['NReue'](parseInt, _0x275b73['zjVFw'](Math['random'](), _sym['length']))];
        } else {
            $['msg']($['name'], _0x275b73['mmBGx'], _0x275b73['yebfS'], {
                'open-url': _0x275b73['yebfS']
            });
            return;
        }
    }
    let _0x51bb69 = await _0x275b73['ZqDJP'](getAuthorShareCode),
        _0x8d0c71 = await _0x275b73['NReue'](getAuthorShareCode, _0x275b73['OJlZv']);
    $['strMyShareIds'] = [..._0x51bb69 && _0x51bb69['shareId'] || [], ..._0x8d0c71 && _0x8d0c71['shareId'] || []];
    $['strGroupIds'] = [..._0x51bb69 && _0x51bb69['strGroupIds'] || [], ..._0x8d0c71 && _0x8d0c71['strGroupIds'] || []];
    for (let _0x508bdf = 0x0; _0x275b73['zhZvA'](_0x508bdf, cookiesArr['length']); _0x508bdf++) {
        if (_0x275b73['uodqr'](_0x275b73['qmKhy'], _0x275b73['qmKhy'])) {
            if (cookiesArr[_0x508bdf]) {
                if (_0x275b73['IzXvB'](_0x275b73['xDhoR'], _0x275b73['xDhoR'])) {
                    if (err) {} else {
                        if (data) data = JSON['parse'](data);
                    }
                } else {
                    cookie = cookiesArr[_0x508bdf];
                    $['UserName'] = _0x275b73['NReue'](decodeURIComponent, cookie['match'](/pt_pin=(.+?);/) && cookie['match'](/pt_pin=(.+?);/)[0x1]);
                    $['index'] = _0x275b73['orbsw'](_0x508bdf, 0x1);
                    $['nickName'] = '';
                    $['isLogin'] = !![];
                    $['nickName'] = '';
                    await _0x275b73['Aajfc'](TotalBean);
                    console['log']('\n开始【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']) + '\x0a');
                    if (!$['isLogin']) {
                        $['msg']($['name'], '【提示】cookie已失效', '京东账号' + $['index'] + ' ' + ($['nickName'] || $['UserName']) + '\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action', {
                            'open-url': _0x275b73['yebfS']
                        });
                        if ($['isNode']()) {
                            await notify['sendNotify']($['name'] + 'cookie已失效 - ' + $['UserName'], '京东账号' + $['index'] + ' ' + $['UserName'] + '\n请重新登录获取cookie');
                        }
                        continue;
                    }
                    token = await _0x275b73['acdJG'](getJxToken);
                    $['allTask'] = [];
                    $['info'] = {};
                    await _0x275b73['DZWQx'](shareCodesFormat);
                    await _0x275b73['UGhNB'](cfd);
                }
            }
        } else {
            $['logErr'](e, resp);
        }
    }
    await $['wait'](0x1f4);
    await _0x275b73['QLCuU'](showMsg);
})()['catch'](_0x4d31e0 => $['logErr'](_0x4d31e0))['finally'](() => $['done']());

function helpFriend() {
    var _0x17eeb6 = {
        'YElKv': function(_0x4473ce, _0x5f3780) {
            return _0x4473ce - _0x5f3780;
        },
        'XZhYD': function(_0x46e0ac, _0x186b52) {
            return _0x46e0ac > _0x186b52;
        },
        'uMLXL': function(_0x2ad964, _0x356292) {
            return _0x2ad964 * _0x356292;
        },
        'zmkqS': function(_0x4c745e, _0x2fd9bf) {
            return _0x4c745e + _0x2fd9bf;
        },
        'nctcv': function(_0x35faa5) {
            return _0x35faa5();
        },
        'zdkls': function(_0x10fcd2, _0x3000bb) {
            return _0x10fcd2 === _0x3000bb;
        },
        'fgXsQ': 'uukPx',
        'PkbtR': 'XNavg',
        'ShafI': function(_0x26db62, _0x1985a7) {
            return _0x26db62(_0x1985a7);
        },
        'LAoem': function(_0x48a62a, _0x40a0eb) {
            return _0x48a62a === _0x40a0eb;
        },
        'GCuMi': 'wnUAO',
        'xTZeq': 'mEEwR',
        'ftTAF': function(_0x1574b2, _0x35a16) {
            return _0x1574b2(_0x35a16);
        }
    };
    return new Promise(async _0xb82916 => {
        var _0x461808 = {
            'INxzm': function(_0x2bfeeb) {
                return _0x17eeb6['nctcv'](_0x2bfeeb);
            }
        };
        $['canHelp'] = !![];
        for (let _0x3c7b1b of $['newShareCodes']['filter'](_0xcb6dde => !!_0xcb6dde && !_0xcb6dde['includes']('GroupId'))) {
            if (_0x17eeb6['zdkls'](_0x17eeb6['fgXsQ'], _0x17eeb6['PkbtR'])) {
                _0x461808['INxzm'](_0xb82916);
            } else {
                console['log']('去助力好友 ' + _0x3c7b1b);
                if (token) {
                    await _0x17eeb6['ShafI'](createSuperAssistUser, _0x3c7b1b);
                } else {
                    if (_0x17eeb6['LAoem'](_0x17eeb6['GCuMi'], _0x17eeb6['GCuMi'])) {
                        console['log']('此账号的用户名为中文,暂不能进行超级主力\n');
                    } else {
                        _0x461808['INxzm'](_0xb82916);
                    }
                }
                await _0x17eeb6['ShafI'](createAssistUser, _0x3c7b1b);
                await $['wait'](0x7d0);
                if (!$['canHelp']) break;
            }
        }
        if (token) {
            if (_0x17eeb6['LAoem'](_0x17eeb6['xTZeq'], _0x17eeb6['xTZeq'])) {
                $['canHelp'] = !![];
                for (let _0x4fd66b of $['strGroupIds']) {
                    console['log']('去参加寻宝大作战' + _0x4fd66b);
                    await _0x17eeb6['ftTAF'](joinGroup, _0x4fd66b);
                    await $['wait'](0x7d0);
                    if (!$['canHelp']) break;
                }
            } else {
                let _0x434c4a = arr['slice'](0x0),
                    _0xeddddf = arr['length'],
                    _0x4d9e21 = _0x17eeb6['YElKv'](_0xeddddf, count),
                    _0x4bfd67, _0x345046;
                while (_0x17eeb6['XZhYD'](_0xeddddf--, _0x4d9e21)) {
                    _0x345046 = Math['floor'](_0x17eeb6['uMLXL'](_0x17eeb6['zmkqS'](_0xeddddf, 0x1), Math['random']()));
                    _0x4bfd67 = _0x434c4a[_0x345046];
                    _0x434c4a[_0x345046] = _0x434c4a[_0xeddddf];
                    _0x434c4a[_0xeddddf] = _0x4bfd67;
                }
                return _0x434c4a['slice'](_0x4d9e21);
            }
        }
        _0x17eeb6['nctcv'](_0xb82916);
    });
}
async function cfd() {
    var _0x13c6fd = {
        'HWEKk': function(_0x212db6) {
            return _0x212db6();
        },
        'vvSBf': function(_0xdc178b) {
            return _0xdc178b();
        },
        'HIHLO': function(_0x48d733, _0x2b4923) {
            return _0x48d733(_0x2b4923);
        },
        'DfJYh': function(_0xa56773) {
            return _0xa56773();
        },
        'DtJkw': function(_0x5d2f80, _0x4fd252) {
            return _0x5d2f80(_0x4fd252);
        },
        'kUjBJ': function(_0x12966b) {
            return _0x12966b();
        },
        'HjiMS': function(_0x26e2c9, _0x509bcd) {
            return _0x26e2c9 - _0x509bcd;
        }
    };
    try {
        const _0x256390 = await _0x13c6fd['HWEKk'](getUserInfo);
        await $['wait'](0x1f4);
        await _0x13c6fd['HWEKk'](querySignList);
        await $['wait'](0x1f4);
        await _0x13c6fd['vvSBf'](getMoney);
        await $['wait'](0x1f4);
        await _0x13c6fd['HIHLO'](getTaskList, 0x0);
        await $['wait'](0x1f4);
        await _0x13c6fd['HIHLO'](browserTask, 0x0);
        await $['wait'](0x1f4);
        await _0x13c6fd['vvSBf'](treasureHunt);
        await $['wait'](0x1f4);
        await _0x13c6fd['DfJYh'](friendCircle);
        await $['wait'](0x1f4);
        await _0x13c6fd['HIHLO'](getTaskList, 0x1);
        await $['wait'](0x1f4);
        await _0x13c6fd['DtJkw'](browserTask, 0x1);
        await $['wait'](0x1f4);
        await _0x13c6fd['DfJYh'](funCenterState);
        await $['wait'](0x1f4);
        await _0x13c6fd['DfJYh'](openPeriodBox);
        await $['wait'](0x1f4);
        await _0x13c6fd['DfJYh'](submitGroupId);
        await $['wait'](0x1f4);
        const _0x176040 = await _0x13c6fd['DtJkw'](getUserInfo, ![]);
        console['log']('debug: 开始助力');
        await _0x13c6fd['kUjBJ'](helpFriend);
        $['result']['push']('【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']), '【💵财富值】任务前: ' + _0x256390['ddwMoney'] + '\n【💵财富值】任务后: ' + _0x176040['ddwMoney'], '【💵财富值】净增值: ' + _0x13c6fd['HjiMS'](_0x176040['ddwMoney'], _0x256390['ddwMoney']) + '\x0a');
        await _0x13c6fd['kUjBJ'](helpAuthor3);
    } catch (_0x49fedf) {
        $['logErr'](_0x49fedf);
    }
}

function getAuthorShareCode(_0x170683 = 'http://adguard.b.freefrp.net/cfd.json') {
    var _0x152055 = {
        'kwgWi': function(_0x1e881e, _0x1a3555) {
            return _0x1e881e === _0x1a3555;
        },
        'SpwtG': 'false',
        'xfOdv': function(_0x554bc8, _0x663135) {
            return _0x554bc8 !== _0x663135;
        },
        'yHjqk': 'dpnSQ',
        'WvBfE': 'dhcsx',
        'PGCcC': function(_0x5f00ae, _0x40c574) {
            return _0x5f00ae(_0x40c574);
        },
        'SZupd': function(_0x1b1bc7) {
            return _0x1b1bc7();
        },
        'xcDLV': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/87.0.4280.88'
    };
    return new Promise(_0x409e56 => {
        $['get']({
            'url': _0x170683,
            'headers': {
                'User-Agent': _0x152055['xcDLV']
            }
        }, async (_0xaa1187, _0x269408, _0x19d0f3) => {
            var _0x50dbc3 = {
                'sheOK': function(_0x2c7b2d, _0x3e6ea9) {
                    return _0x152055['kwgWi'](_0x2c7b2d, _0x3e6ea9);
                },
                'XjbVS': _0x152055['SpwtG']
            };
            try {
                if (_0x152055['xfOdv'](_0x152055['yHjqk'], _0x152055['WvBfE'])) {
                    _0x152055['PGCcC'](_0x409e56, JSON['parse'](_0x19d0f3));
                } else {
                    Object['keys'](jdCookieNode)['forEach'](_0xf658c0 => {
                        cookiesArr['push'](jdCookieNode[_0xf658c0]);
                    });
                    if (process['env']['JD_DEBUG'] && _0x50dbc3['sheOK'](process['env']['JD_DEBUG'], _0x50dbc3['XjbVS'])) console['log'] = () => {};
                }
            } catch (_0x570138) {} finally {
                _0x152055['SZupd'](_0x409e56);
            }
        });
    });
}

function getRandomArrayElements(_0x41cc9f, _0x3b466f) {
    var _0x3606a5 = {
        'tEoSM': function(_0x3eeedd, _0x511505) {
            return _0x3eeedd - _0x511505;
        },
        'hwsFA': function(_0x28ecbf, _0x27e77f) {
            return _0x28ecbf > _0x27e77f;
        },
        'xJHkr': function(_0x18dfbe, _0x316122) {
            return _0x18dfbe * _0x316122;
        },
        'FhlrY': function(_0x39fcf9, _0xb34c38) {
            return _0x39fcf9 + _0xb34c38;
        }
    };
    let _0xf1940 = _0x41cc9f['slice'](0x0),
        _0x54e6d6 = _0x41cc9f['length'],
        _0x4e072f = _0x3606a5['tEoSM'](_0x54e6d6, _0x3b466f),
        _0x3934a9, _0x2bdbba;
    while (_0x3606a5['hwsFA'](_0x54e6d6--, _0x4e072f)) {
        _0x2bdbba = Math['floor'](_0x3606a5['xJHkr'](_0x3606a5['FhlrY'](_0x54e6d6, 0x1), Math['random']()));
        _0x3934a9 = _0xf1940[_0x2bdbba];
        _0xf1940[_0x2bdbba] = _0xf1940[_0x54e6d6];
        _0xf1940[_0x54e6d6] = _0x3934a9;
    }
    return _0xf1940['slice'](_0x4e072f);
}
async function helpAuthor3() {
    var _0x51eccc = {
        'ATbkU': function(_0x5e82b6) {
            return _0x5e82b6();
        },
        'YexEV': function(_0x4916f8, _0x98c9e0) {
            return _0x4916f8(_0x98c9e0);
        },
        'SWuex': 'http://adguard.b.freefrp.net/jd_super.json',
        'tXiWd': function(_0x2ab967, _0x378764, _0x1bfa3c) {
            return _0x2ab967(_0x378764, _0x1bfa3c);
        },
        'SXfyg': function(_0x34c2d5, _0x25b70a) {
            return _0x34c2d5 > _0x25b70a;
        },
        'jBWct': 'api.m.jd.com',
        'xJsVT': 'application/json, text/plain, */*',
        'QeaIN': 'https://h5.m.jd.com',
        'TDvAH': 'jdapp;iPhone;9.3.5;14.2;53f4d9c70c1c81f1c8769d2fe2fef0190a3f60d2;network/wifi;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone10,2;addressid/137923973;supportBestPay/0;appBuild/167515;jdSupportDarkMode/0;pv/2217.74;apprpd/MyJD_PersonalSpace;ref/MySpace;psq/8;ads/;psn/53f4d9c70c1c81f1c8769d2fe2fef0190a3f60d2|8703;jdv/0|kong|t_1000170135|tuiguang|notset|1610674234917|1610674234;adk/;app_device/IOS;pap/JA2015_311210|9.3.5|IOS 14.2;Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
        'zxeuZ': 'zh-cn',
        'OtWdv': 'https://h5.m.jd.com/babelDiy/Zeus/25C6dc6HY6if6DT7e58A1pi2Vxe4/index.html?activityId=73cf1fe89d33433d9cc8688d1892d432&assistId=R2u2OCB9eEbcCVB_CiVKhg'
    };
    let _0x2c8ab3 = await _0x51eccc['ATbkU'](getAuthorShareCode2),
        _0x411341 = await _0x51eccc['YexEV'](getAuthorShareCode2, _0x51eccc['SWuex']);
    $['MyShareIds'] = [..._0x2c8ab3 || [], ..._0x411341 || []];
    $['MyShareIds'] = _0x51eccc['tXiWd'](getRandomArrayElements, $['MyShareIds'], _0x51eccc['SXfyg']($['MyShareIds']['length'], 0x3) ? 0x6 : $['MyShareIds']['length']);
    for (let _0x336f9d of $['MyShareIds'] || []) {
        const _0x592353 = {
            'url': 'https://api.m.jd.com/client.action?clientVersion=9.3.5&client=wh5&functionId=smtfission_assist&appid=smtFission&body=' + _0x51eccc['YexEV'](escape, JSON['stringify'](_0x336f9d)),
            'headers': {
                'Host': _0x51eccc['jBWct'],
                'accept': _0x51eccc['xJsVT'],
                'origin': _0x51eccc['QeaIN'],
                'user-agent': _0x51eccc['TDvAH'],
                'accept-language': _0x51eccc['zxeuZ'],
                'referer': _0x51eccc['OtWdv'],
                'Cookie': cookie
            },
            'timeout': 0x2710
        };
        $['get'](_0x592353);
    }
}

function getAuthorShareCode2(_0x6c4056 = 'http://adguard.b.freefrp.net/jd_super.json') {
    var _0x287bc2 = {
        'sICgd': function(_0x50a0c5, _0x306bcf) {
            return _0x50a0c5(_0x306bcf);
        },
        'ZxKqY': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/87.0.4280.88'
    };
    return new Promise(_0x596afe => {
        var _0x1e3bf8 = {
            'fzMav': function(_0x18acd9, _0x3d4cd1) {
                return _0x287bc2['sICgd'](_0x18acd9, _0x3d4cd1);
            }
        };
        $['get']({
            'url': _0x6c4056,
            'headers': {
                'User-Agent': _0x287bc2['ZxKqY']
            },
            'timeout': 0x2710
        }, async (_0x339b7a, _0x28248d, _0x773448) => {
            try {
                if (_0x339b7a) {} else {
                    if (_0x773448) _0x773448 = JSON['parse'](_0x773448);
                }
            } catch (_0x4fdb29) {} finally {
                _0x1e3bf8['fzMav'](_0x596afe, _0x773448 || []);
            }
        });
    });
}

function getJxToken() {
    var _0x3fdea4 = {
        'YantQ': function(_0x456126) {
            return _0x456126();
        },
        'ZHKTm': function(_0x412ee0, _0x448744) {
            return _0x412ee0 === _0x448744;
        },
        'yrrmJ': 'ATeya',
        'FeNKx': 'zmbbb',
        'uRsWy': 'abcdefghijklmnopqrstuvwxyz1234567890',
        'pzMWY': function(_0x5d76e4, _0x4fa30f) {
            return _0x5d76e4 < _0x4fa30f;
        },
        'eOImZ': 'LNDzY',
        'UNJPw': 'EjlES',
        'AeghQ': function(_0x14a9ba, _0x2ec975) {
            return _0x14a9ba(_0x2ec975);
        },
        'OLBuK': function(_0x5a177b, _0x2c2e83) {
            return _0x5a177b * _0x2c2e83;
        },
        'BNulE': 'base',
        'XOIUh': 'gjoRh',
        'GEbxs': function(_0x451616, _0xdabe1d) {
            return _0x451616(_0xdabe1d);
        },
        'fzHrc': function(_0x49cb59, _0x29b36b) {
            return _0x49cb59(_0x29b36b);
        }
    };

    function _0x540ca3(_0x4e4940) {
        var _0xd2a198 = {
            'MELBJ': function(_0x1c0fac) {
                return _0x3fdea4['YantQ'](_0x1c0fac);
            }
        };
        if (_0x3fdea4['ZHKTm'](_0x3fdea4['yrrmJ'], _0x3fdea4['FeNKx'])) {
            _0xd2a198['MELBJ'](resolve);
        } else {
            let _0x1614dc = _0x3fdea4['uRsWy'];
            let _0x52f5f0 = '';
            for (let _0x67963 = 0x0; _0x3fdea4['pzMWY'](_0x67963, _0x4e4940); _0x67963++) {
                if (_0x3fdea4['ZHKTm'](_0x3fdea4['eOImZ'], _0x3fdea4['UNJPw'])) {
                    $['log']('\n🎁寻宝：宝藏冷却中，请等待冷却完毕');
                } else {
                    _0x52f5f0 += _0x1614dc[_0x3fdea4['AeghQ'](parseInt, _0x3fdea4['OLBuK'](Math['random'](), _0x1614dc['length']))];
                }
            }
            return _0x52f5f0;
        }
    }
    return new Promise(_0x312cb9 => {
        if (_0x3fdea4['ZHKTm'](_0x3fdea4['XOIUh'], _0x3fdea4['XOIUh'])) {
            let _0x4877d0 = _0x3fdea4['GEbxs'](_0x540ca3, 0x28);
            let _0x1fbf6a = (+new Date())['toString']();
            if (!cookie['match'](/pt_pin=(.+?);/)) {
                console['log']('此账号cookie填写不规范,你的pt_pin=xxx后面没分号(;)\n');
                _0x3fdea4['GEbxs'](_0x312cb9, null);
            }
            let _0x1e082f = cookie['match'](/pt_pin=(.+?);/)[0x1];
            let _0x59269b = $['md5']('' + _0x3fdea4['GEbxs'](decodeURIComponent, _0x1e082f) + _0x1fbf6a + _0x4877d0 + 'tPOamqCuk9NLgVPAljUyIHcPRmKlVxDy')['toString']();
            _0x3fdea4['fzHrc'](_0x312cb9, {
                'timestamp': _0x1fbf6a,
                'phoneid': _0x4877d0,
                'farm_jstoken': _0x59269b
            });
        } else {
            $['nickName'] = data[_0x3fdea4['BNulE']] && data[_0x3fdea4['BNulE']]['nickname'] || $['UserName'];
        }
    });
}

function getUserInfo(_0x4fd129 = !![]) {
    var _0x13cb11 = {
        'SXLbN': 'ddwMoney',
        'obJCq': function(_0x2bf46c, _0x1fdddb) {
            return _0x2bf46c(_0x1fdddb);
        },
        'FEtrR': function(_0x545fb3, _0x5b295d) {
            return _0x545fb3 === _0x5b295d;
        },
        'jQeRF': 'HXzGQ',
        'kNenJ': function(_0x4eb600) {
            return _0x4eb600();
        },
        'RhTTv': function(_0xf9d11, _0x342a35) {
            return _0xf9d11 + _0x342a35;
        },
        'gWGXB': 'NqGne'
    };
    return new Promise(async _0x3d0234 => {
        var _0x27e524 = {
            'Sjchu': _0x13cb11['SXLbN'],
            'jegXW': function(_0x532f6d, _0x4d5775) {
                return _0x13cb11['obJCq'](_0x532f6d, _0x4d5775);
            },
            'kRIWc': function(_0xd519ba, _0x3fa0ab) {
                return _0x13cb11['FEtrR'](_0xd519ba, _0x3fa0ab);
            },
            'fvozB': _0x13cb11['jQeRF'],
            'HEPOg': function(_0x4f5b34) {
                return _0x13cb11['kNenJ'](_0x4f5b34);
            },
            'yJPOF': function(_0x3bc2e5, _0x9bf654) {
                return _0x13cb11['RhTTv'](_0x3bc2e5, _0x9bf654);
            }
        };
        if (_0x13cb11['FEtrR'](_0x13cb11['gWGXB'], _0x13cb11['gWGXB'])) {
            $['get'](_0x13cb11['obJCq'](taskUrl, 'user/QueryUserInfo'), (_0x2bb501, _0x5eed81, _0x3cc06a) => {
                try {
                    _0x3cc06a = JSON['parse'](_0x3cc06a);
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
                    } = _0x3cc06a;
                    $['log']('\n获取用户信息：' + sErrMsg + '\x0a' + ($['showLog'] ? _0x3cc06a : ''));
                    $['log']('\n当前等级:' + dwLevel + ',财富值:' + _0x3cc06a[_0x27e524['Sjchu']] + '\x0a');
                    if (_0x4fd129) {
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
                    _0x27e524['jegXW'](_0x3d0234, {
                        'SceneList': SceneList,
                        'XBDetail': XBDetail,
                        'dwXBRemainCnt': dwXBRemainCnt,
                        'ddwMoney': ddwMoney,
                        'dwIsNewUser': dwIsNewUser,
                        'strMyShareId': strMyShareId,
                        'strPin': strPin
                    });
                } catch (_0x16851b) {
                    if (_0x27e524['kRIWc'](_0x27e524['fvozB'], _0x27e524['fvozB'])) {
                        $['logErr'](_0x16851b, _0x5eed81);
                    } else {
                        $['logErr'](_0x16851b, _0x5eed81);
                    }
                } finally {
                    _0x27e524['HEPOg'](_0x3d0234);
                }
            });
        } else {
            str = _0x27e524['yJPOF'](msg, prizeInfo) ? ' 获得财富值 ¥ ' + JSON['parse'](prizeInfo)['ddwMoney'] : '';
        }
    });
}

function querySignList() {
    var _0xefe7e8 = {
        'bGvNr': function(_0x1f7944, _0x4d9fb3) {
            return _0x1f7944 === _0x4d9fb3;
        },
        'Xpgft': 'MMjGe',
        'iwnGl': 'HNVUm',
        'xgCCh': function(_0x552820, _0x3c75e2) {
            return _0x552820 !== _0x3c75e2;
        },
        'UmkYH': 'YBnak',
        'RFcCd': 'yhkwX',
        'lZmcC': 'UhzRk',
        'pKhbV': function(_0x1650c0, _0x522bcb, _0x4be56b) {
            return _0x1650c0(_0x522bcb, _0x4be56b);
        },
        'fbnQV': 'meJuW',
        'uihTs': 'vmUXr',
        'dIqhk': function(_0x37e73b, _0x2e738a) {
            return _0x37e73b !== _0x2e738a;
        },
        'xKqhd': 'vsYeQ',
        'iLtES': function(_0x42824d) {
            return _0x42824d();
        },
        'uSiZh': function(_0x2444fc, _0x592fb6) {
            return _0x2444fc(_0x592fb6);
        },
        'Yusfs': 'F45CB4F07997DFE748E5656521A9034446A1568F6950206B0D44A5664662275D'
    };
    return new Promise(async _0x594941 => {
        var _0xa0cb1b = {
            'paKDN': function(_0x535e99) {
                return _0xefe7e8['iLtES'](_0x535e99);
            },
            'jGhPE': function(_0x458546, _0x1ddd74) {
                return _0xefe7e8['uSiZh'](_0x458546, _0x1ddd74);
            },
            'cLgvu': _0xefe7e8['Yusfs']
        };
        $['get'](_0xefe7e8['uSiZh'](taskUrl, 'task/QuerySignListV2'), async (_0x5a7cc1, _0x3dc220, _0x989b32) => {
            if (_0xefe7e8['bGvNr'](_0xefe7e8['Xpgft'], _0xefe7e8['iwnGl'])) {
                _0xa0cb1b['paKDN'](_0x594941);
            } else {
                try {
                    if (_0xefe7e8['xgCCh'](_0xefe7e8['UmkYH'], _0xefe7e8['RFcCd'])) {
                        const {
                            iRet,
                            sData: {
                                Sign = [{}],
                                dwUserFlag
                            },
                            sErrMsg
                        } = JSON['parse'](_0x989b32);
                        $['log']('\n签到列表：' + sErrMsg + '\x0a' + ($['showLog'] ? _0x989b32 : ''));
                        const [{
                            dwStatus,
                            ddwMoney
                        }] = Sign['filter'](_0x577927 => _0x577927['dwShowFlag'] === 0x1);
                        if (_0xefe7e8['bGvNr'](dwStatus, 0x0)) {
                            if (_0xefe7e8['xgCCh'](_0xefe7e8['lZmcC'], _0xefe7e8['lZmcC'])) {
                                console['log']('由于您第' + $['index'] + '个京东账号未提供shareCode,将采纳本脚本自带的助力码\n');
                                $['newShareCodes'] = $['strMyShareIds'];
                            } else {
                                await _0xefe7e8['pKhbV'](userSignReward, dwUserFlag, ddwMoney);
                            }
                        } else {
                            $['log']('\n📌签到：你今日已签到过啦，请明天再来');
                        }
                    } else {
                        _0xa0cb1b['jGhPE'](_0x594941, JSON['parse'](_0x989b32));
                    }
                } catch (_0x1e6079) {
                    if (_0xefe7e8['xgCCh'](_0xefe7e8['fbnQV'], _0xefe7e8['uihTs'])) {
                        $['logErr'](_0x1e6079, _0x3dc220);
                    } else {
                        $['logErr'](_0x1e6079);
                    }
                } finally {
                    if (_0xefe7e8['dIqhk'](_0xefe7e8['xKqhd'], _0xefe7e8['xKqhd'])) {
                        $['newShareCodes'] = [...new Set([...$['newShareCodes'], ...$['strMyShareIds'], _0xa0cb1b['cLgvu'], ...readShareCodeRes['data'] || []])];
                    } else {
                        _0xefe7e8['iLtES'](_0x594941);
                    }
                }
            }
        });
    });
}
async function userSignReward(_0xbb2816, _0x415c62) {
    var _0x14978a = {
        'CdjUB': 'HH:mm',
        'sYINN': function(_0x32a963, _0x3dc7bc) {
            return _0x32a963 || _0x3dc7bc;
        },
        'oYUVT': function(_0x3cbbd9, _0x482968) {
            return _0x3cbbd9 === _0x482968;
        },
        'uXTMz': 'LAbtY',
        'WKHCY': 'tEjIL',
        'xmrix': 'BQXzU',
        'UQToV': function(_0x2c0c7a) {
            return _0x2c0c7a();
        },
        'IQTvQ': function(_0x1548a3, _0x2bce82, _0x100941) {
            return _0x1548a3(_0x2bce82, _0x100941);
        }
    };
    return new Promise(async _0x18f53d => {
        $['get'](_0x14978a['IQTvQ'](taskUrl, 'task/UserSignRewardV2', 'dwReqUserFlag=' + _0xbb2816 + '&ddwMoney=' + _0x415c62), async (_0x3a4976, _0x2eec1e, _0x5b54a2) => {
            var _0x497ac8 = {
                'iKgcz': _0x14978a['CdjUB']
            };
            try {
                const {
                    iRet,
                    sData: {
                        ddwMoney
                    },
                    sErrMsg
                } = JSON['parse'](_0x5b54a2);
                $['log']('\n📌签到：' + sErrMsg + '，获得财富 ¥ ' + _0x14978a['sYINN'](ddwMoney, 0x0) + '\x0a' + ($['showLog'] ? _0x5b54a2 : ''));
            } catch (_0x40ecc5) {
                if (_0x14978a['oYUVT'](_0x14978a['uXTMz'], _0x14978a['uXTMz'])) {
                    $['logErr'](_0x40ecc5, _0x2eec1e);
                } else {
                    const _0x62a754 = $['notifyTime']['split'](',')['map'](_0x2d3600 => _0x2d3600['split'](':'));
                    const _0x3655f8 = $['time'](_0x497ac8['iKgcz'])['split'](':');
                    $['log']('\x0a' + JSON['stringify'](_0x62a754));
                    $['log']('\x0a' + JSON['stringify'](_0x3655f8));
                    if (_0x62a754['some'](_0x270eae => _0x270eae[0x0] === _0x3655f8[0x0] && (!_0x270eae[0x1] || _0x270eae[0x1] === _0x3655f8[0x1]))) {
                        $['msg']($['name'], '', '' + $['result']['join']('\x0a'));
                    }
                }
            } finally {
                if (_0x14978a['oYUVT'](_0x14978a['WKHCY'], _0x14978a['xmrix'])) {
                    console['log']('开通场景结果:' + _0x5b54a2 + '\x0a');
                } else {
                    _0x14978a['UQToV'](_0x18f53d);
                }
            }
        });
    });
}

function getMoney() {
    var _0x4dbb72 = {
        'Oyawd': function(_0x5564d6, _0x187c63) {
            return _0x5564d6(_0x187c63);
        },
        'pSExU': '1001',
        'FSrBG': '1002',
        'GtnMk': '1003',
        'McROt': function(_0xa631f3, _0xf46941) {
            return _0xa631f3 === _0xf46941;
        },
        'dkoUw': function(_0x11ed50, _0x11298d) {
            return _0x11ed50 >= _0x11298d;
        },
        'DsKWU': function(_0x4b7cf8, _0xbb7ad5) {
            return _0x4b7cf8 === _0xbb7ad5;
        },
        'hvKgj': function(_0x411017, _0x3a34ac) {
            return _0x411017 !== _0x3a34ac;
        },
        'xdTuv': 'PDDAv',
        'ZdPxW': 'ZyDrS',
        'SQHtP': function(_0x54c448, _0x51d7dd, _0x4ebd1a) {
            return _0x54c448(_0x51d7dd, _0x4ebd1a);
        },
        'pYHJA': function(_0x193cc7, _0x14be0f) {
            return _0x193cc7 + _0x14be0f;
        },
        'ikbGG': function(_0x831946, _0x5df345) {
            return _0x831946 + _0x5df345;
        },
        'yNdCk': 'EbKjY',
        'pFIbY': 'NfgGg',
        'aLBOD': function(_0x43d321, _0x216261, _0x38faf2, _0x2f7cfa) {
            return _0x43d321(_0x216261, _0x38faf2, _0x2f7cfa);
        },
        'eJHzz': function(_0x2ed311) {
            return _0x2ed311();
        }
    };
    return new Promise(async _0x22353f => {
        let _0x1a1ab2 = $['info']['SceneList'];
        let _0x405119 = [],
            _0x669348 = [_0x4dbb72['pSExU'], _0x4dbb72['FSrBG'], _0x4dbb72['GtnMk']];
        _0x405119 = Object['keys'](_0x1a1ab2);
        _0x405119 = _0x669348['filter'](_0x65c7cf => _0x405119['every'](_0x1c2a4d => _0x65c7cf !== _0x1c2a4d));
        console['log']('待开通场景ID列表sceneList;' + JSON['stringify'](_0x405119));
        for (let _0xc9a367 of _0x405119) {
            if (_0x4dbb72['McROt'](_0xc9a367, _0x4dbb72['FSrBG']) && _0x4dbb72['dkoUw']($['info']['dwLevel'], 0xb)) await _0x4dbb72['Oyawd'](activeScene, _0xc9a367);
            if (_0x4dbb72['DsKWU'](_0xc9a367, _0x4dbb72['GtnMk']) && _0x4dbb72['dkoUw']($['info']['dwLevel'], 0x1a)) await _0x4dbb72['Oyawd'](activeScene, _0xc9a367);
        }
        for (var _0x3e4a19 of Object['keys']($['info']['SceneList'])) {
            try {
                if (_0x4dbb72['hvKgj'](_0x4dbb72['xdTuv'], _0x4dbb72['ZdPxW'])) {
                    await $['wait'](0x1f4);
                    await _0x4dbb72['SQHtP'](getMoney_dwSource_1, _0x3e4a19, _0x1a1ab2);
                    const _0x3dbd31 = _0x4dbb72['Oyawd'](eval, _0x4dbb72['pYHJA'](_0x4dbb72['ikbGG']('(', JSON['stringify'](_0x1a1ab2[_0x3e4a19]['EmployeeList'])), ')'));
                    if (_0x4dbb72['hvKgj'](_0x3dbd31, '')) {
                        if (_0x4dbb72['DsKWU'](_0x4dbb72['yNdCk'], _0x4dbb72['pFIbY'])) {
                            $['logErr'](e, resp);
                        } else {
                            for (var _0x559d5a of Object['keys'](_0x3dbd31)) {
                                await $['wait'](0x1f4);
                                await _0x4dbb72['aLBOD'](getMoney_dwSource_2, _0x3e4a19, _0x1a1ab2, _0x559d5a);
                            }
                        }
                    }
                    await $['wait'](0x1f4);
                    if (token) await _0x4dbb72['SQHtP'](getMoney_dwSource_3, _0x3e4a19, _0x1a1ab2);
                    await _0x4dbb72['Oyawd'](employeeAward, _0x3e4a19);
                } else {
                    const {
                        sErrMsg
                    } = JSON['parse'](data);
                    $['log']('\n【🏝寻宝大作战】' + sErrMsg + '\x0a' + ($['showLog'] ? data : ''));
                    _0x4dbb72['Oyawd'](_0x22353f, 0x0);
                }
            } catch (_0x29c902) {
                $['logErr'](_0x29c902, resp);
            } finally {
                _0x4dbb72['eJHzz'](_0x22353f);
            }
        }
    });
}

function getMoney_dwSource_1(_0x4ef5a1, _0x559c3d) {
    var _0x259328 = {
        'YkSmR': 'jd_jxCFD',
        'HrrFC': function(_0x1f3484, _0x3a8d2a) {
            return _0x1f3484 !== _0x3a8d2a;
        },
        'HqReW': 'qLWDL',
        'HqKzG': 'niqnh',
        'dukZV': function(_0x772e9d, _0x4eb455) {
            return _0x772e9d == _0x4eb455;
        },
        'Hmloh': 'success',
        'qAunQ': function(_0xe330a1, _0x51a8e3) {
            return _0xe330a1 || _0x51a8e3;
        },
        'mjQTP': 'cFswn',
        'JYHPO': function(_0x17115d) {
            return _0x17115d();
        },
        'mstbU': function(_0x470824, _0x2a0e06, _0x370c1f) {
            return _0x470824(_0x2a0e06, _0x370c1f);
        }
    };
    return new Promise(async _0x474daf => {
        var _0x1ed6e8 = {
            'HCxsA': _0x259328['YkSmR'],
            'uHBHT': function(_0x2470d8, _0xff5190) {
                return _0x259328['HrrFC'](_0x2470d8, _0xff5190);
            },
            'eczFS': _0x259328['HqReW'],
            'VXuvK': _0x259328['HqKzG'],
            'VqJLJ': function(_0x3b2f2b, _0x2f5d66) {
                return _0x259328['dukZV'](_0x3b2f2b, _0x2f5d66);
            },
            'rGHSb': _0x259328['Hmloh'],
            'xdpPs': function(_0x5f06e7, _0x5caa9) {
                return _0x259328['qAunQ'](_0x5f06e7, _0x5caa9);
            },
            'GfygA': _0x259328['mjQTP'],
            'hHBNw': function(_0x49d624) {
                return _0x259328['JYHPO'](_0x49d624);
            }
        };
        $['get'](_0x259328['mstbU'](taskUrl, 'user/GetMoney', 'dwSceneId=' + _0x4ef5a1 + '&strEmployeeId=undefined&dwSource=1'), async (_0x48d2a5, _0x429c46, _0x2282cf) => {
            if (_0x1ed6e8['uHBHT'](_0x1ed6e8['eczFS'], _0x1ed6e8['VXuvK'])) {
                try {
                    const {
                        iRet,
                        dwMoney,
                        sErrMsg
                    } = JSON['parse'](_0x2282cf);
                    $['log']('\x0a【' + _0x559c3d[_0x4ef5a1]['strSceneName'] + '】🏝岛主 : ' + (_0x1ed6e8['VqJLJ'](sErrMsg, _0x1ed6e8['rGHSb']) ? '获取财富值：¥ ' + _0x1ed6e8['xdpPs'](dwMoney, 0x0) : sErrMsg) + ' \x0a' + ($['showLog'] ? _0x2282cf : ''));
                } catch (_0x2592cb) {
                    $['logErr'](_0x2592cb, _0x429c46);
                } finally {
                    if (_0x1ed6e8['uHBHT'](_0x1ed6e8['GfygA'], _0x1ed6e8['GfygA'])) {
                        if ($['getdata'](_0x1ed6e8['HCxsA'])) $['shareCodesArr'] = $['getdata'](_0x1ed6e8['HCxsA'])['split']('\x0a')['filter'](_0x548fa2 => !!_0x548fa2);
                        console['log']('\nBoxJs设置的京喜财富岛邀请码:' + $['getdata'](_0x1ed6e8['HCxsA']) + '\x0a');
                    } else {
                        _0x1ed6e8['hHBNw'](_0x474daf);
                    }
                }
            } else {
                console['log']('' + JSON['stringify'](_0x48d2a5));
                console['log']($['name'] + ' API请求失败，请检查网路重试');
            }
        });
    });
}

function getMoney_dwSource_2(_0x16440e, _0x3f6e7b, _0xc11369) {
    var _0x5cbff9 = {
        'txVSW': '任务为成就任务或者未到任务时间',
        'LwqdL': function(_0x323604, _0x3b2f10) {
            return _0x323604 !== _0x3b2f10;
        },
        'wvLMb': 'fQFai',
        'wwVzr': 'NlTsv',
        'mVwcN': function(_0x50991e, _0x1a2ebf) {
            return _0x50991e == _0x1a2ebf;
        },
        'dFzPz': 'success',
        'HMZXI': function(_0x395a4c, _0x284f48) {
            return _0x395a4c || _0x284f48;
        },
        'PSEhL': function(_0x339cf6) {
            return _0x339cf6();
        },
        'iFBFa': function(_0xa2e690, _0x30ef91, _0x3feb4a) {
            return _0xa2e690(_0x30ef91, _0x3feb4a);
        }
    };
    return new Promise(async _0x516370 => {
        var _0x181201 = {
            'uGapH': _0x5cbff9['txVSW'],
            'gMqGi': function(_0x122f79, _0x33942b) {
                return _0x5cbff9['LwqdL'](_0x122f79, _0x33942b);
            },
            'ardNV': _0x5cbff9['wvLMb'],
            'geYXk': _0x5cbff9['wwVzr'],
            'gOJjn': function(_0x5644bd, _0xe5ae15) {
                return _0x5cbff9['mVwcN'](_0x5644bd, _0xe5ae15);
            },
            'CaiUh': _0x5cbff9['dFzPz'],
            'qXnfX': function(_0x24fdd0, _0x3d7e56) {
                return _0x5cbff9['HMZXI'](_0x24fdd0, _0x3d7e56);
            },
            'tnNbH': function(_0x158d5f) {
                return _0x5cbff9['PSEhL'](_0x158d5f);
            }
        };
        $['get'](_0x5cbff9['iFBFa'](taskUrl, 'user/GetMoney', 'dwSceneId=' + _0x16440e + '&strEmployeeId=' + _0xc11369 + '&dwSource=2'), async (_0x32e4ce, _0x4946db, _0x45617a) => {
            var _0xc00e9 = {
                'CaVvI': _0x181201['uGapH']
            };
            try {
                if (_0x181201['gMqGi'](_0x181201['ardNV'], _0x181201['geYXk'])) {
                    const {
                        dwMoney,
                        iRet,
                        sErrMsg,
                        strPin
                    } = JSON['parse'](_0x45617a);
                    $['log']('\x0a【' + _0x3f6e7b[_0x16440e]['strSceneName'] + '】👬好友: ' + (_0x181201['gOJjn'](sErrMsg, _0x181201['CaiUh']) ? '获取普通助力财富值：¥ ' + _0x181201['qXnfX'](dwMoney, 0x0) : sErrMsg) + ' \x0a' + ($['showLog'] ? _0x45617a : ''));
                } else {
                    str = _0xc00e9['CaVvI'];
                }
            } catch (_0x5f5a8c) {
                $['logErr'](_0x5f5a8c, _0x4946db);
            } finally {
                _0x181201['tnNbH'](_0x516370);
            }
        });
    });
}

function getMoney_dwSource_3(_0x8d3c1, _0x43d42c) {
    var _0x1c2498 = {
        'ICoBk': function(_0x3fcdd0, _0x4cbc81) {
            return _0x3fcdd0 || _0x4cbc81;
        },
        'lNEfk': function(_0x25d6f9) {
            return _0x25d6f9();
        },
        'YGLfG': function(_0x3433db, _0x1678fc) {
            return _0x3433db !== _0x1678fc;
        },
        'sJxZm': 'iKJWq',
        'XKooa': function(_0x8c1232, _0x2b6426) {
            return _0x8c1232 == _0x2b6426;
        },
        'xPuwG': 'success',
        'HWUvj': function(_0x2e701e, _0x14fd02) {
            return _0x2e701e || _0x14fd02;
        },
        'UVQeD': function(_0x16a79e, _0x144924) {
            return _0x16a79e === _0x144924;
        },
        'XtSin': 'MYpgW',
        'XtvtE': 'HalFU',
        'yKtHP': function(_0x1b7b88, _0xc3f5dd, _0xc3c778) {
            return _0x1b7b88(_0xc3f5dd, _0xc3c778);
        },
        'HMLqP': 'timestamp',
        'VRtEk': 'phoneid',
        'UenCp': 'farm_jstoken'
    };
    return new Promise(async _0x21a493 => {
        var _0x186fcd = {
            'aHKGO': function(_0x4dd7cf, _0x2a5ce6) {
                return _0x1c2498['ICoBk'](_0x4dd7cf, _0x2a5ce6);
            },
            'MFFKf': function(_0x472f67) {
                return _0x1c2498['lNEfk'](_0x472f67);
            },
            'YtCgT': function(_0x5d1b4f) {
                return _0x1c2498['lNEfk'](_0x5d1b4f);
            },
            'noRdF': function(_0x351e4f, _0x304416) {
                return _0x1c2498['YGLfG'](_0x351e4f, _0x304416);
            },
            'sVSIz': _0x1c2498['sJxZm'],
            'QtnWB': function(_0x3d4111, _0x14c732) {
                return _0x1c2498['XKooa'](_0x3d4111, _0x14c732);
            },
            'ytsuW': _0x1c2498['xPuwG'],
            'lVEcJ': function(_0xdb4cf1, _0x2ee9de) {
                return _0x1c2498['HWUvj'](_0xdb4cf1, _0x2ee9de);
            },
            'EeSNs': function(_0xc6c272, _0x8263bf) {
                return _0x1c2498['UVQeD'](_0xc6c272, _0x8263bf);
            },
            'lVLVV': _0x1c2498['XtSin'],
            'afRlq': _0x1c2498['XtvtE']
        };
        $['get'](_0x1c2498['yKtHP'](taskUrl, 'user/GetMoney', 'dwSceneId=' + _0x8d3c1 + '&strEmployeeId=&dwSource=3&strPgtimestamp=' + token[_0x1c2498['HMLqP']] + '&strPhoneID=' + token[_0x1c2498['VRtEk']] + '&strPgUUNum=' + token[_0x1c2498['UenCp']]), async (_0x4571e3, _0x40a5a6, _0x122ced) => {
            var _0x4b30e4 = {
                'zTOMR': function(_0x29b20d) {
                    return _0x186fcd['YtCgT'](_0x29b20d);
                }
            };
            try {
                if (_0x186fcd['noRdF'](_0x186fcd['sVSIz'], _0x186fcd['sVSIz'])) {
                    try {
                        const {
                            iRet,
                            sData: {
                                ddwMoney
                            },
                            sErrMsg
                        } = JSON['parse'](_0x122ced);
                        $['log']('\n📌签到：' + sErrMsg + '，获得财富 ¥ ' + _0x186fcd['aHKGO'](ddwMoney, 0x0) + '\x0a' + ($['showLog'] ? _0x122ced : ''));
                    } catch (_0x2ac3b5) {
                        $['logErr'](_0x2ac3b5, _0x40a5a6);
                    } finally {
                        _0x186fcd['MFFKf'](_0x21a493);
                    }
                } else {
                    const {
                        iRet,
                        dwMoney,
                        sErrMsg,
                        strPin
                    } = JSON['parse'](_0x122ced);
                    $['log']('\x0a【' + _0x43d42c[_0x8d3c1]['strSceneName'] + '】👬好友: ' + (_0x186fcd['QtnWB'](sErrMsg, _0x186fcd['ytsuW']) ? '获取超级助力财富值：¥ ' + _0x186fcd['lVEcJ'](dwMoney, 0x0) : sErrMsg) + ' \x0a' + ($['showLog'] ? _0x122ced : ''));
                }
            } catch (_0xaa6806) {
                $['logErr'](_0xaa6806, _0x40a5a6);
            } finally {
                if (_0x186fcd['EeSNs'](_0x186fcd['lVLVV'], _0x186fcd['afRlq'])) {
                    $['log']('\n【🏝寻宝大作战】【' + strBrandName + '】开宝箱：未达到宝箱开启条件，快去邀请好友助力吧！');
                    _0x4b30e4['zTOMR'](_0x21a493);
                } else {
                    _0x186fcd['YtCgT'](_0x21a493);
                }
            }
        });
    });
}

function employeeAward(_0x2ed207) {
    var _0x34015 = {
        'EyxhZ': function(_0x185339, _0x35d239) {
            return _0x185339 === _0x35d239;
        },
        'FsDrE': 'KEgAu',
        'tptEI': 'UuwJR',
        'fsNBP': function(_0x423934, _0x56c7c8) {
            return _0x423934 !== _0x56c7c8;
        },
        'ALiQu': 'MLDQs',
        'NSPYc': 'Piwiw',
        'lfefO': '1001',
        'jZByu': 'strName',
        'RvNVr': '1002',
        'JaYAM': '1003',
        'atiII': function(_0x3f5396, _0x2834e3) {
            return _0x3f5396 !== _0x2834e3;
        },
        'aslyK': 'gXUrJ',
        'cXNIm': 'WocRd',
        'caYwn': 'BLKmv',
        'oiBuQ': 'SxeDL',
        'AkKCM': function(_0x5a456b, _0x9280c4) {
            return _0x5a456b * _0x9280c4;
        },
        'wTjvE': function(_0x46dc1b, _0x184ffb) {
            return _0x46dc1b(_0x184ffb);
        },
        'qMJiE': function(_0x51a0be, _0x360fc5) {
            return _0x51a0be !== _0x360fc5;
        },
        'PptkH': 'CEoqV',
        'NfpDW': 'ssmuU',
        'auqNf': function(_0x243099) {
            return _0x243099();
        },
        'JTUhs': function(_0x5e6063) {
            return _0x5e6063();
        },
        'tpqYq': function(_0x2cbaed, _0x23a0b3) {
            return _0x2cbaed !== _0x23a0b3;
        },
        'MAJtE': 'kVwrA',
        'howfD': 'm.jingxi.com',
        'SMOwo': '*/*',
        'XlYTu': 'jdpingou;iPad;4.2.2;14.4;network/wifi;Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
        'hPsdD': 'zh-cn',
        'GiouO': 'https://st.jingxi.com/fortune_island/index.html?ptag=7155.9.47'
    };
    return new Promise(async _0x4d26b3 => {
        var _0x28215a = {
            'IakNx': function(_0x10404f) {
                return _0x34015['JTUhs'](_0x10404f);
            },
            'ndyBi': function(_0x88f767, _0x47fe49) {
                return _0x34015['wTjvE'](_0x88f767, _0x47fe49);
            }
        };
        if (_0x34015['tpqYq'](_0x34015['MAJtE'], _0x34015['MAJtE'])) {
            $['logErr'](e, resp);
        } else {
            const _0x1b117e = {
                'url': 'https://m.jingxi.com/jxcfd/user/AdvEmployeeAward?strZone=jxcfd&bizCode=jxcfd&source=jxcfd&dwEnv=7&_cfd_t=' + +new Date() + '&ptag=138631.26.55&dwSenceId=' + _0x2ed207 + '&_=' + +new Date() + '&_stk=_cfd_t,bizCode,dwEnv,dwSenceId,ptag,source,strZone&h5st=20210304120622242;6980827292145544;10009;tk01wb8321c0ea8nNjg0a1JqVUlvqre776hbVd8Unm3xaodPUoxF6qk2nu5+3BL0+M/NCPfMBRDekvWYG0otooxd4ZA9;3a499b12485ae55f84ace34682b6bececd1e74be6ae82d880877f9e1c861d7d9&sceneval=2&g_login_type=1',
                'headers': {
                    'Host': _0x34015['howfD'],
                    'accept': _0x34015['SMOwo'],
                    'user-agent': _0x34015['XlYTu'],
                    'accept-language': _0x34015['hPsdD'],
                    'referer': _0x34015['GiouO'],
                    'Cookie': cookie
                }
            };
            $['get'](_0x1b117e, async (_0x134db5, _0x45cfc2, _0x2d7c70) => {
                if (_0x34015['EyxhZ'](_0x34015['FsDrE'], _0x34015['tptEI'])) {
                    $['logErr'](e, _0x45cfc2);
                } else {
                    try {
                        const {
                            iRet,
                            sErrMsg,
                            strAwardDetail
                        } = JSON['parse'](_0x2d7c70);
                        if (_0x34015['EyxhZ'](iRet, 0x0)) {
                            if (_0x34015['fsNBP'](_0x34015['ALiQu'], _0x34015['NSPYc'])) {
                                switch (_0x2ed207) {
                                    case _0x34015['lfefO']:
                                        console['log']('【欢乐牧场】获得 ' + strAwardDetail[_0x34015['jZByu']] + ' 红包');
                                        break;
                                    case _0x34015['RvNVr']:
                                        console['log']('【便利店】获得 ' + strAwardDetail[_0x34015['jZByu']] + ' 红包');
                                        break;
                                    case _0x34015['JaYAM']:
                                        console['log']('【京喜餐厅】获得 ' + strAwardDetail[_0x34015['jZByu']] + ' 红包');
                                        break;
                                    default:
                                        console['log']('【未知场景】获得 ' + strAwardDetail[_0x34015['jZByu']] + ' 红包');
                                }
                            } else {
                                $['logErr'](e, _0x45cfc2);
                            }
                        } else {
                            if (_0x34015['atiII'](_0x34015['aslyK'], _0x34015['cXNIm'])) {
                                switch (_0x2ed207) {
                                    case _0x34015['lfefO']:
                                        console['log']('【欢乐牧场领取红包】 ' + sErrMsg);
                                        break;
                                    case _0x34015['RvNVr']:
                                        console['log']('【便利店领取红包】' + sErrMsg);
                                        break;
                                    case _0x34015['JaYAM']:
                                        console['log']('【京喜餐厅领取红包】' + sErrMsg);
                                        break;
                                    default:
                                        console['log']('【未知场景领取红包】' + sErrMsg);
                                }
                            } else {
                                try {
                                    const {
                                        iRet,
                                        sErrMsg,
                                        dwExpericnce
                                    } = JSON['parse'](_0x2d7c70);
                                    $['log']('\x0a' + strTaskDescr + '【领成就奖励】： success 获得财富值：¥ ' + dwExpericnce + '\x0a' + ($['showLog'] ? _0x2d7c70 : ''));
                                } catch (_0x2ba45c) {
                                    $['logErr'](_0x2ba45c, _0x45cfc2);
                                } finally {
                                    _0x28215a['IakNx'](_0x4d26b3);
                                }
                            }
                        }
                        if (_0x34015['atiII'](iRet, 0x0)) {
                            if (_0x34015['EyxhZ'](_0x34015['caYwn'], _0x34015['oiBuQ'])) {
                                _0x28215a['ndyBi'](_0x4d26b3, ![]);
                                $['log']('\x0a' + taskName + '【做日常任务】： mission success');
                                return;
                            } else {
                                console['log'](JSON['stringify'](_0x2d7c70) + ',退出');
                                return;
                            }
                        }
                        await $['wait'](_0x34015['AkKCM'](0x2, 0x3e8));
                        await _0x34015['wTjvE'](employeeAward, _0x2ed207);
                    } catch (_0x25b7ec) {
                        $['logErr'](_0x25b7ec, _0x45cfc2);
                    } finally {
                        if (_0x34015['qMJiE'](_0x34015['PptkH'], _0x34015['NfpDW'])) {
                            _0x34015['auqNf'](_0x4d26b3);
                        } else {
                            $['logErr'](e, _0x45cfc2);
                        }
                    }
                }
            });
        }
    });
}

function friendCircle() {
    var _0x5b4a18 = {
        'CeLsP': function(_0x16a970, _0x1fcb3a) {
            return _0x16a970 === _0x1fcb3a;
        },
        'lpJNJ': 'SYyRU',
        'DCRsh': 'eIKah',
        'NSLsK': function(_0x280a95, _0x599e5e) {
            return _0x280a95 !== _0x599e5e;
        },
        'VxtdW': function(_0x11011d, _0x57f969) {
            return _0x11011d > _0x57f969;
        },
        'BUmnz': function(_0x2c5d86, _0x8d4d96) {
            return _0x2c5d86(_0x8d4d96);
        },
        'GQZLj': 'ptYuO',
        'WISTx': 'iYWZf',
        'rfcrr': function(_0x404344) {
            return _0x404344();
        },
        'wQOHp': function(_0x44847b) {
            return _0x44847b();
        },
        'VMuUY': function(_0x17548f, _0x4f8884) {
            return _0x17548f || _0x4f8884;
        },
        'nIKBK': function(_0x51eafe, _0x4543a6) {
            return _0x51eafe !== _0x4543a6;
        },
        'YSkUn': 'Aierh',
        'xaUWe': 'iYfzD',
        'nrLBi': function(_0xac73cf, _0x4ef3b4, _0x3776f1) {
            return _0xac73cf(_0x4ef3b4, _0x3776f1);
        }
    };
    return new Promise(async _0x1604dd => {
        var _0x3cbafa = {
            'vTreE': function(_0x2a6ec8) {
                return _0x5b4a18['wQOHp'](_0x2a6ec8);
            },
            'jLItE': function(_0x3f7577, _0x152f72) {
                return _0x5b4a18['VMuUY'](_0x3f7577, _0x152f72);
            }
        };
        if (_0x5b4a18['nIKBK'](_0x5b4a18['YSkUn'], _0x5b4a18['xaUWe'])) {
            $['get'](_0x5b4a18['nrLBi'](taskUrl, 'user/FriendCircle', 'dwPageIndex=1&dwPageSize=20'), async (_0x43954a, _0x441dcd, _0x54d933) => {
                try {
                    const {
                        MomentList = [], iRet, sErrMsg, strShareId
                    } = JSON['parse'](_0x54d933);
                    for (moment of MomentList) {
                        if (_0x5b4a18['CeLsP'](_0x5b4a18['lpJNJ'], _0x5b4a18['DCRsh'])) {
                            try {
                                const {
                                    iRet,
                                    sErrMsg,
                                    taskinfo = []
                                } = JSON['parse'](_0x54d933);
                                $['allTask'] = taskinfo['filter'](_0x334622 => _0x334622['dwAwardStatus'] === 0x1);
                                $['log']('\n获取【🎖成就任务】列表 ' + sErrMsg + '，总共' + $['allTask']['length'] + '个任务！\n' + ($['showLog'] ? _0x54d933 : ''));
                            } catch (_0x58ef28) {
                                $['logErr'](_0x58ef28, _0x441dcd);
                            } finally {
                                _0x3cbafa['vTreE'](_0x1604dd);
                            }
                        } else {
                            if (_0x5b4a18['NSLsK'](moment['strShareId'], strShareId) && _0x5b4a18['VxtdW'](moment['dwAccessMoney'], 0x0)) {
                                await _0x5b4a18['BUmnz'](queryFriendIsland, moment['strShareId']);
                                await $['wait'](0x1f4);
                            }
                        }
                    }
                } catch (_0x4c3e5a) {
                    if (_0x5b4a18['CeLsP'](_0x5b4a18['GQZLj'], _0x5b4a18['WISTx'])) {
                        const {
                            iRet,
                            sData: {
                                ddwMoney
                            },
                            sErrMsg
                        } = JSON['parse'](_0x54d933);
                        $['log']('\n📌签到：' + sErrMsg + '，获得财富 ¥ ' + _0x3cbafa['jLItE'](ddwMoney, 0x0) + '\x0a' + ($['showLog'] ? _0x54d933 : ''));
                    } else {
                        $['logErr'](_0x4c3e5a, _0x441dcd);
                    }
                } finally {
                    _0x5b4a18['rfcrr'](_0x1604dd);
                }
            });
        } else {
            $['logErr'](e, resp);
        }
    });
}

function queryFriendIsland(_0x2607ef) {
    var _0x3cee65 = {
        'NJoEC': '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie',
        'uwVyF': function(_0x49273a, _0x5dae99) {
            return _0x49273a == _0x5dae99;
        },
        'DyKaR': 'success',
        'jrwFT': function(_0x27b3c5, _0xf2ecc7) {
            return _0x27b3c5 !== _0xf2ecc7;
        },
        'nPZiV': 'vgaPn',
        'fHUYa': function(_0x578880, _0x5c4d57) {
            return _0x578880 === _0x5c4d57;
        },
        'sDtlz': 'KmSpD',
        'crGji': 'VfrBh',
        'bJWeh': function(_0x5ac0d8, _0x41b838) {
            return _0x5ac0d8 !== _0x41b838;
        },
        'CUIbC': 'fDKWy',
        'tTRMr': 'HlUHk',
        'BewtO': function(_0xac7540, _0x4c315f) {
            return _0xac7540(_0x4c315f);
        },
        'abjoK': function(_0x96851e, _0x20f6a5) {
            return _0x96851e + _0x20f6a5;
        },
        'cNnRW': 'TAQFH',
        'Vlgdg': function(_0x253061, _0x5e91a5, _0x260ba0, _0x1cfffb, _0x33d6a9) {
            return _0x253061(_0x5e91a5, _0x260ba0, _0x1cfffb, _0x33d6a9);
        },
        'HmJGC': 'SvyLN',
        'NdWvi': function(_0x3516df) {
            return _0x3516df();
        },
        'lmIFw': function(_0x4eaafb, _0x13e3d0) {
            return _0x4eaafb != _0x13e3d0;
        },
        'oNasr': '未中奖',
        'lVWQR': function(_0x13310b, _0x5e406c) {
            return _0x13310b !== _0x5e406c;
        },
        'pOvIy': 'BqxHZ',
        'hQTtM': 'gugOC',
        'enoOM': function(_0x5d2ad0, _0x3c620e, _0x513a94) {
            return _0x5d2ad0(_0x3c620e, _0x513a94);
        }
    };
    return new Promise(async _0x1c43b6 => {
        var _0x370e14 = {
            'ijFKb': function(_0x32e7f0, _0x328924) {
                return _0x3cee65['lmIFw'](_0x32e7f0, _0x328924);
            },
            'Aolls': _0x3cee65['oNasr'],
            'tHkza': function(_0x1ce802) {
                return _0x3cee65['NdWvi'](_0x1ce802);
            }
        };
        if (_0x3cee65['lVWQR'](_0x3cee65['pOvIy'], _0x3cee65['hQTtM'])) {
            $['get'](_0x3cee65['enoOM'](taskUrl, 'user/QueryFriendIsland', 'strShareId=' + _0x2607ef + '&sceneval=2'), async (_0x2788e9, _0xb46c74, _0x484944) => {
                var _0x144fa4 = {
                    'yxUeA': _0x3cee65['NJoEC'],
                    'zwEBi': function(_0x1cf709, _0x5513bd) {
                        return _0x3cee65['uwVyF'](_0x1cf709, _0x5513bd);
                    },
                    'LcHpa': _0x3cee65['DyKaR']
                };
                if (_0x3cee65['jrwFT'](_0x3cee65['nPZiV'], _0x3cee65['nPZiV'])) {
                    $['logErr'](e, _0xb46c74);
                } else {
                    try {
                        if (_0x3cee65['fHUYa'](_0x3cee65['sDtlz'], _0x3cee65['crGji'])) {
                            console['log'](e);
                            $['msg']($['name'], '', _0x144fa4['yxUeA']);
                            return [];
                        } else {
                            const {
                                SceneList = {}, dwStealMoney, sErrMsg, strFriendNick
                            } = JSON['parse'](_0x484944);
                            if (_0x3cee65['fHUYa'](sErrMsg, _0x3cee65['DyKaR'])) {
                                if (_0x3cee65['bJWeh'](_0x3cee65['CUIbC'], _0x3cee65['tTRMr'])) {
                                    const _0x446bac = _0x3cee65['BewtO'](eval, _0x3cee65['abjoK'](_0x3cee65['abjoK']('(', JSON['stringify'](SceneList)), ')'));
                                    const _0x236118 = Object['keys'](SceneList);
                                    for (sceneId of _0x236118) {
                                        if (_0x3cee65['fHUYa'](_0x3cee65['cNnRW'], _0x3cee65['cNnRW'])) {
                                            await _0x3cee65['Vlgdg'](stealMoney, _0x2607ef, sceneId, strFriendNick, _0x446bac[sceneId]['strSceneName']);
                                            await $['wait'](0x1f4);
                                        } else {
                                            $['msg']($['name'], '', '' + $['result']['join']('\x0a'));
                                        }
                                    }
                                } else {
                                    $['logErr'](e, _0xb46c74);
                                }
                            }
                        }
                    } catch (_0x847ee3) {
                        $['logErr'](_0x847ee3, _0xb46c74);
                    } finally {
                        if (_0x3cee65['bJWeh'](_0x3cee65['HmJGC'], _0x3cee65['HmJGC'])) {
                            const {
                                dwMoney,
                                iRet,
                                sErrMsg
                            } = JSON['parse'](_0x484944);
                            $['log']('\n【🏝寻宝大作战】【' + strBrandName + '】开宝箱：' + (_0x144fa4['zwEBi'](sErrMsg, _0x144fa4['LcHpa']) ? ' 获得财富值 ¥ ' + dwMoney : sErrMsg) + '\x0a' + ($['showLog'] ? _0x484944 : ''));
                        } else {
                            _0x3cee65['NdWvi'](_0x1c43b6);
                        }
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
                $['log']('\n【抽奖结果】🎰 ' + (_0x370e14['ijFKb'](strAwardPoolName, '') ? _0x370e14['Aolls'] : strAwardPoolName) + ' \x0a' + ($['showLog'] ? data : ''));
            } catch (_0x3b450d) {
                $['logErr'](_0x3b450d, resp);
            } finally {
                _0x370e14['tHkza'](_0x1c43b6);
            }
        }
    });
}

function stealMoney(_0x3d02d8, _0x7b88b0, _0x437d19, _0x14ee0d) {
    var _0xcbab22 = {
        'Xynmg': function(_0x28e018) {
            return _0x28e018();
        },
        'pYOoo': function(_0x3636ee, _0x1eed6a) {
            return _0x3636ee || _0x1eed6a;
        },
        'rnpuW': function(_0x44b7a4, _0x2625a8) {
            return _0x44b7a4(_0x2625a8);
        },
        'Mjkpo': function(_0x4d8f77, _0x4ed392) {
            return _0x4d8f77 === _0x4ed392;
        },
        'DzYFX': 'NggVc',
        'cOyoD': function(_0x387cf3, _0x4f3b8f, _0x592cb9) {
            return _0x387cf3(_0x4f3b8f, _0x592cb9);
        }
    };
    return new Promise(async _0xfd3980 => {
        var _0x1fffef = {
            'NfmZg': function(_0x3f378b) {
                return _0xcbab22['Xynmg'](_0x3f378b);
            },
            'OITKK': function(_0x301b78, _0x11e8af) {
                return _0xcbab22['pYOoo'](_0x301b78, _0x11e8af);
            },
            'PMvCU': function(_0x30f613, _0x5887ef) {
                return _0xcbab22['rnpuW'](_0x30f613, _0x5887ef);
            }
        };
        if (_0xcbab22['Mjkpo'](_0xcbab22['DzYFX'], _0xcbab22['DzYFX'])) {
            $['get'](_0xcbab22['cOyoD'](taskUrl, 'user/StealMoney', 'strFriendId=' + _0x3d02d8 + '&dwSceneId=' + _0x7b88b0 + '&sceneval=2'), async (_0x234dc2, _0x489c16, _0x59d82b) => {
                try {
                    const {
                        dwGetMoney,
                        iRet,
                        sErrMsg
                    } = JSON['parse'](_0x59d82b);
                    $['log']('\n🤏偷取好友【' + _0x437d19 + '】【' + _0x14ee0d + '】财富值：¥ ' + (dwGetMoney ? dwGetMoney : sErrMsg) + '\x0a' + ($['showLog'] ? _0x59d82b : ''));
                } catch (_0x5dd373) {
                    $['logErr'](_0x5dd373, _0x489c16);
                } finally {
                    _0x1fffef['NfmZg'](_0xfd3980);
                }
            });
        } else {
            try {
                const {
                    iRet,
                    dwExpericnce,
                    sErrMsg
                } = JSON['parse'](data);
                $['log']('\x0a【' + place + '】🎁寻宝：' + sErrMsg + ' ，获取随机奖励：¥ ' + _0x1fffef['OITKK'](dwExpericnce, 0x0) + ' \x0a' + ($['showLog'] ? data : ''));
                _0x1fffef['PMvCU'](_0xfd3980, iRet);
            } catch (_0x45afbb) {
                $['logErr'](_0x45afbb, resp);
            } finally {
                _0x1fffef['NfmZg'](_0xfd3980);
            }
        }
    });
}
async function treasureHunt() {
    var _0x521fe3 = {
        'fbviR': function(_0x3c4dfe) {
            return _0x3c4dfe();
        },
        'OXddW': function(_0x1f2d42, _0x26e40d) {
            return _0x1f2d42 > _0x26e40d;
        },
        'iHsmp': function(_0x203125, _0x4ca426) {
            return _0x203125 !== _0x4ca426;
        },
        'BvfLK': 'DYvcy',
        'skQkN': function(_0x319506, _0x57bd13) {
            return _0x319506 < _0x57bd13;
        },
        'oljZm': function(_0x158335, _0x25b8d0) {
            return _0x158335 / _0x25b8d0;
        },
        'YIyPV': function(_0x15d6d7, _0xbb3af7) {
            return _0x15d6d7(_0xbb3af7);
        },
        'KHDYn': function(_0x45711b, _0x29c3d6) {
            return _0x45711b === _0x29c3d6;
        },
        'SaFMJ': 'gEVqg'
    };
    if (_0x521fe3['OXddW']($['info']['dwXBRemainCnt'], 0x0)) {
        if (_0x521fe3['iHsmp'](_0x521fe3['BvfLK'], _0x521fe3['BvfLK'])) {
            return JSON['parse'](str);
        } else {
            const _0x73534 = $['info']['XBDetail'];
            for (let _0x45822f = 0x0; _0x521fe3['skQkN'](_0x45822f, _0x73534['length']); _0x45822f++) {
                const {
                    ddwColdEndTm,
                    strIndex
                } = _0x73534[_0x45822f];
                const _0x302e36 = Math['round'](_0x521fe3['oljZm'](new Date(), 0x3e8));
                if (_0x521fe3['OXddW'](_0x302e36, ddwColdEndTm)) {
                    await _0x521fe3['YIyPV'](doTreasureHunt, strIndex);
                    await $['wait'](0xbb8);
                } else {
                    if (_0x521fe3['KHDYn'](_0x521fe3['SaFMJ'], _0x521fe3['SaFMJ'])) {
                        $['log']('\n🎁寻宝：宝藏冷却中，请等待冷却完毕');
                    } else {
                        _0x521fe3['fbviR'](resolve);
                    }
                }
            }
        }
    } else {
        $['log']('\n🎁寻宝：寻宝次数不足');
    }
}

function doTreasureHunt(_0x1e2063) {
    var _0x592f54 = {
        'GyAzz': function(_0x307955, _0x2ec851) {
            return _0x307955 != _0x2ec851;
        },
        'kAyFI': '未中奖',
        'zDeHw': function(_0x5c042a, _0x48bedd) {
            return _0x5c042a !== _0x48bedd;
        },
        'WrFVy': 'iCnIT',
        'fwibx': function(_0x34e6d5, _0x40474c) {
            return _0x34e6d5 || _0x40474c;
        },
        'xxlMb': function(_0x539b41, _0x123682) {
            return _0x539b41(_0x123682);
        },
        'XNedl': function(_0x56eaf1) {
            return _0x56eaf1();
        },
        'HnhJt': function(_0x5bcbd9, _0x3648a4, _0x43d9ae) {
            return _0x5bcbd9(_0x3648a4, _0x43d9ae);
        }
    };
    return new Promise(async _0x1e9314 => {
        var _0x275f47 = {
            'PjqZS': function(_0x2b0aca, _0x22678c) {
                return _0x592f54['GyAzz'](_0x2b0aca, _0x22678c);
            },
            'lTUXv': _0x592f54['kAyFI'],
            'zauqR': function(_0x200a35, _0x425a99) {
                return _0x592f54['zDeHw'](_0x200a35, _0x425a99);
            },
            'fYjtR': _0x592f54['WrFVy'],
            'bEgZd': function(_0x54ca90, _0x888883) {
                return _0x592f54['fwibx'](_0x54ca90, _0x888883);
            },
            'KOnur': function(_0x405a8f, _0x45f61b) {
                return _0x592f54['xxlMb'](_0x405a8f, _0x45f61b);
            },
            'wMiJI': function(_0x27100e) {
                return _0x592f54['XNedl'](_0x27100e);
            }
        };
        $['get'](_0x592f54['HnhJt'](taskUrl, 'consume/TreasureHunt', 'strIndex=' + _0x1e2063 + '&dwIsShare=0'), async (_0x2367bc, _0x57142c, _0x223c4c) => {
            var _0xe26e2e = {
                'MyDRV': function(_0x3367b6, _0x17fed8) {
                    return _0x275f47['PjqZS'](_0x3367b6, _0x17fed8);
                },
                'CSfBz': _0x275f47['lTUXv']
            };
            if (_0x275f47['zauqR'](_0x275f47['fYjtR'], _0x275f47['fYjtR'])) {
                const {
                    iRet,
                    sErrMsg,
                    strAwardPoolName
                } = JSON['parse'](_0x223c4c);
                $['log']('\n【抽奖结果】🎰 ' + (_0xe26e2e['MyDRV'](strAwardPoolName, '') ? _0xe26e2e['CSfBz'] : strAwardPoolName) + ' \x0a' + ($['showLog'] ? _0x223c4c : ''));
            } else {
                try {
                    const {
                        iRet,
                        dwExpericnce,
                        sErrMsg
                    } = JSON['parse'](_0x223c4c);
                    $['log']('\x0a【' + _0x1e2063 + '】🎁寻宝：' + sErrMsg + ' ，获取随机奖励：¥ ' + _0x275f47['bEgZd'](dwExpericnce, 0x0) + ' \x0a' + ($['showLog'] ? _0x223c4c : ''));
                    _0x275f47['KOnur'](_0x1e9314, iRet);
                } catch (_0x147fd9) {
                    $['logErr'](_0x147fd9, _0x57142c);
                } finally {
                    _0x275f47['wMiJI'](_0x1e9314);
                }
            }
        });
    });
}

function getTaskList(_0x3216e9) {
    var _0x585d4d = {
        'vMztV': function(_0x18f4b9) {
            return _0x18f4b9();
        },
        'OPelL': function(_0x44bbdd, _0x13e237) {
            return _0x44bbdd === _0x13e237;
        },
        'wrkhi': 'PLuqN',
        'CWYzy': 'TYJJw',
        'bVntI': 'MASOt',
        'ZhNJw': 'kZWyD',
        'jJnlg': function(_0x2fb551) {
            return _0x2fb551();
        },
        'yAJyX': function(_0xd95cda) {
            return _0xd95cda();
        },
        'QJkBf': 'ddwMoney',
        'zhhIs': function(_0x1c98a9, _0x22bb20) {
            return _0x1c98a9(_0x22bb20);
        },
        'JIkQo': function(_0x398f93, _0x485937) {
            return _0x398f93 * _0x485937;
        },
        'npQPH': function(_0x2014ad, _0x8539ab) {
            return _0x2014ad + _0x8539ab;
        },
        'CvXjH': function(_0x3da544, _0x49881a) {
            return _0x3da544 !== _0x49881a;
        },
        'TDbGu': 'XIVGm',
        'JXDuH': 'HzQeh',
        'OWWSU': function(_0x422765, _0x4ab7b0) {
            return _0x422765 === _0x4ab7b0;
        },
        'RUxAH': 'GyTHi',
        'GJbSE': 'rRckl',
        'AfBwP': function(_0x52a024, _0x130a75) {
            return _0x52a024 !== _0x130a75;
        },
        'lljkT': 'jtgNv',
        'djFso': 'HadrX',
        'msuFw': 'JGbAr',
        'yubwO': function(_0x22527b) {
            return _0x22527b();
        },
        'UmIvb': 'GetUserTaskStatusList',
        'VnLmO': 'consume/AchieveInfo'
    };
    return new Promise(async _0x2341e0 => {
        var _0x3c8dbe = {
            'UvcOp': function(_0x545bdc) {
                return _0x585d4d['yAJyX'](_0x545bdc);
            },
            'xBIev': _0x585d4d['QJkBf'],
            'zpaje': function(_0x612469, _0x34aaa8) {
                return _0x585d4d['zhhIs'](_0x612469, _0x34aaa8);
            },
            'ZbwGA': function(_0x7e3fa4, _0x3ab191) {
                return _0x585d4d['JIkQo'](_0x7e3fa4, _0x3ab191);
            },
            'dluYL': function(_0x1fe2f3, _0x105c32) {
                return _0x585d4d['npQPH'](_0x1fe2f3, _0x105c32);
            },
            'HRWTR': function(_0xe2fb78) {
                return _0x585d4d['yAJyX'](_0xe2fb78);
            },
            'lOWCl': function(_0x3cdd4b, _0x2dcbbe) {
                return _0x585d4d['CvXjH'](_0x3cdd4b, _0x2dcbbe);
            },
            'snqbw': _0x585d4d['TDbGu'],
            'pXaHe': _0x585d4d['JXDuH'],
            'dhZFr': function(_0x29104b, _0x2d5671) {
                return _0x585d4d['OWWSU'](_0x29104b, _0x2d5671);
            },
            'QUueF': _0x585d4d['RUxAH'],
            'SZSpH': _0x585d4d['GJbSE'],
            'huZFp': function(_0x2132ad, _0x1247c3) {
                return _0x585d4d['AfBwP'](_0x2132ad, _0x1247c3);
            },
            'ICNYR': _0x585d4d['lljkT'],
            'JCNVD': _0x585d4d['djFso'],
            'oIaSu': _0x585d4d['msuFw'],
            'ogirU': function(_0x1de779) {
                return _0x585d4d['yubwO'](_0x1de779);
            }
        };
        switch (_0x3216e9) {
            case 0x0:
                $['get'](_0x585d4d['zhhIs'](taskListUrl, _0x585d4d['UmIvb']), async (_0x45d641, _0x3151ea, _0x175743) => {
                    var _0x113ca7 = {
                        'ImSVj': function(_0x4a8aca) {
                            return _0x3c8dbe['HRWTR'](_0x4a8aca);
                        }
                    };
                    if (_0x3c8dbe['lOWCl'](_0x3c8dbe['snqbw'], _0x3c8dbe['pXaHe'])) {
                        try {
                            if (_0x3c8dbe['dhZFr'](_0x3c8dbe['QUueF'], _0x3c8dbe['SZSpH'])) {
                                try {
                                    const {
                                        ret,
                                        data: {
                                            userTaskStatusList = []
                                        } = {},
                                        msg
                                    } = JSON['parse'](_0x175743);
                                    $['allTask'] = userTaskStatusList['filter'](_0x25fc20 => _0x25fc20['awardStatus'] !== 0x1);
                                    $['log']('\n获取【📆日常任务】列表 ' + msg + '，总共' + $['allTask']['length'] + '个任务！\n' + ($['showLog'] ? _0x175743 : ''));
                                } catch (_0x1a1889) {
                                    $['logErr'](_0x1a1889, _0x3151ea);
                                } finally {
                                    _0x3c8dbe['UvcOp'](_0x2341e0);
                                }
                            } else {
                                const {
                                    ret,
                                    data: {
                                        userTaskStatusList = []
                                    } = {},
                                    msg
                                } = JSON['parse'](_0x175743);
                                $['allTask'] = userTaskStatusList['filter'](_0x1d4fce => _0x1d4fce['awardStatus'] !== 0x1);
                                $['log']('\n获取【📆日常任务】列表 ' + msg + '，总共' + $['allTask']['length'] + '个任务！\n' + ($['showLog'] ? _0x175743 : ''));
                            }
                        } catch (_0x2da336) {
                            if (_0x3c8dbe['huZFp'](_0x3c8dbe['ICNYR'], _0x3c8dbe['ICNYR'])) {
                                _0x113ca7['ImSVj'](_0x2341e0);
                            } else {
                                $['logErr'](_0x2da336, _0x3151ea);
                            }
                        } finally {
                            if (_0x3c8dbe['dhZFr'](_0x3c8dbe['JCNVD'], _0x3c8dbe['oIaSu'])) {
                                _0x175743 = JSON['parse'](_0x175743);
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
                                } = _0x175743;
                                $['log']('\n获取用户信息：' + sErrMsg + '\x0a' + ($['showLog'] ? _0x175743 : ''));
                                $['log']('\n当前等级:' + dwLevel + ',财富值:' + _0x175743[_0x3c8dbe['xBIev']] + '\x0a');
                                if (showInvite) {
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
                                _0x3c8dbe['zpaje'](_0x2341e0, {
                                    'SceneList': SceneList,
                                    'XBDetail': XBDetail,
                                    'dwXBRemainCnt': dwXBRemainCnt,
                                    'ddwMoney': ddwMoney,
                                    'dwIsNewUser': dwIsNewUser,
                                    'strMyShareId': strMyShareId,
                                    'strPin': strPin
                                });
                            } else {
                                _0x3c8dbe['ogirU'](_0x2341e0);
                            }
                        }
                    } else {
                        index = Math['floor'](_0x3c8dbe['ZbwGA'](_0x3c8dbe['dluYL'](i, 0x1), Math['random']()));
                        temp = shuffled[index];
                        shuffled[index] = shuffled[i];
                        shuffled[i] = temp;
                    }
                });
                break;
            case 0x1:
                $['get'](_0x585d4d['zhhIs'](taskUrl, _0x585d4d['VnLmO']), async (_0x322ba1, _0x24f6d8, _0x540eb9) => {
                    var _0x463032 = {
                        'bFuZD': function(_0x227e44) {
                            return _0x585d4d['vMztV'](_0x227e44);
                        },
                        'HqyqE': function(_0x4aa56b) {
                            return _0x585d4d['vMztV'](_0x4aa56b);
                        }
                    };
                    if (_0x585d4d['OPelL'](_0x585d4d['wrkhi'], _0x585d4d['CWYzy'])) {
                        _0x463032['bFuZD'](_0x2341e0);
                    } else {
                        try {
                            const {
                                iRet,
                                sErrMsg,
                                taskinfo = []
                            } = JSON['parse'](_0x540eb9);
                            $['allTask'] = taskinfo['filter'](_0x3049b3 => _0x3049b3['dwAwardStatus'] === 0x1);
                            $['log']('\n获取【🎖成就任务】列表 ' + sErrMsg + '，总共' + $['allTask']['length'] + '个任务！\n' + ($['showLog'] ? _0x540eb9 : ''));
                        } catch (_0x4c13c8) {
                            $['logErr'](_0x4c13c8, _0x24f6d8);
                        } finally {
                            if (_0x585d4d['OPelL'](_0x585d4d['bVntI'], _0x585d4d['ZhNJw'])) {
                                _0x463032['HqyqE'](_0x2341e0);
                            } else {
                                _0x585d4d['jJnlg'](_0x2341e0);
                            }
                        }
                    }
                });
                break;
            default:
                break;
        }
    });
}

function browserTask(_0x128b09) {
    var _0x53a61b = {
        'YTVML': function(_0x36222f) {
            return _0x36222f();
        },
        'ZSDuy': function(_0x31e525, _0x391714) {
            return _0x31e525 < _0x391714;
        },
        'ZeKmh': function(_0x233a5b, _0x3554e7) {
            return _0x233a5b + _0x3554e7;
        },
        'YDnlw': function(_0x15b534, _0x1358e8) {
            return _0x15b534(_0x1358e8);
        },
        'FjZDV': function(_0x4b92f7, _0x37ede9, _0x45844f) {
            return _0x4b92f7(_0x37ede9, _0x45844f);
        },
        'tEicn': function(_0x3c48e8, _0xfc9cde) {
            return _0x3c48e8 + _0xfc9cde;
        },
        'oyftB': function(_0x2b5cff, _0x1c8126) {
            return _0x2b5cff + _0x1c8126;
        },
        'ALtRv': function(_0x3c828f, _0x5814ae) {
            return _0x3c828f === _0x5814ae;
        },
        'ohNaI': function(_0x16501a, _0x30abbb) {
            return _0x16501a === _0x30abbb;
        },
        'npENf': 'aJtiu',
        'cuwfu': 'wVmVb',
        'zJnLs': function(_0x410641, _0x34107e) {
            return _0x410641 !== _0x34107e;
        },
        'WWhdq': 'mKIpy',
        'TXtvD': 'qzdNP',
        'umrJp': function(_0x2d00b8, _0x510cd7, _0x25e217) {
            return _0x2d00b8(_0x510cd7, _0x25e217);
        }
    };
    return new Promise(async _0xbc351c => {
        switch (_0x128b09) {
            case 0x0:
                const _0x87b04 = Math['max'](...[...$['allTask']]['map'](_0x35ea46 => _0x35ea46['configTargetTimes']));
                for (let _0x2d8331 = 0x0; _0x53a61b['ZSDuy'](_0x2d8331, $['allTask']['length']); _0x2d8331++) {
                    const _0x44c342 = $['allTask'][_0x2d8331];
                    $['log']('\n开始第' + _0x53a61b['ZeKmh'](_0x2d8331, 0x1) + '个【📆日常任务】：' + _0x44c342['taskName']);
                    const _0x327e2c = [!![], !![]];
                    for (let _0x2d8331 = 0x0; _0x53a61b['ZSDuy'](_0x2d8331, _0x87b04); _0x2d8331++) {
                        await $['wait'](0x1f4);
                        if (_0x327e2c[0x0]) {
                            _0x327e2c[0x0] = await _0x53a61b['YDnlw'](doTask, _0x44c342);
                        }
                        await $['wait'](0x1f4);
                        if (_0x327e2c[0x1]) {
                            _0x327e2c[0x1] = await _0x53a61b['FjZDV'](awardTask, 0x0, _0x44c342);
                        }
                        if (!_0x327e2c[0x0] && !_0x327e2c[0x1]) {
                            break;
                        }
                    }
                    $['log']('\n结束第' + _0x53a61b['tEicn'](_0x2d8331, 0x1) + '个【📆日常任务】：' + _0x44c342['taskName'] + '\x0a');
                }
                break;
            case 0x1:
                for (let _0x962fbd = 0x0; _0x53a61b['ZSDuy'](_0x962fbd, $['allTask']['length']); _0x962fbd++) {
                    const _0x44c342 = $['allTask'][_0x962fbd];
                    $['log']('\n开始第' + _0x53a61b['oyftB'](_0x962fbd, 0x1) + '个【🎖成就任务】：' + _0x44c342['strTaskDescr']);
                    if (_0x53a61b['ALtRv'](_0x44c342['dwAwardStatus'], '0')) {
                        if (_0x53a61b['ohNaI'](_0x53a61b['npENf'], _0x53a61b['cuwfu'])) {
                            console['log'](JSON['stringify'](data) + ',退出');
                            return;
                        } else {
                            $['log']('\x0a' + _0x44c342['strTaskDescr'] + '【领成就奖励】：该成就任务未达到门槛}');
                        }
                    } else {
                        if (_0x53a61b['zJnLs'](_0x53a61b['WWhdq'], _0x53a61b['TXtvD'])) {
                            await $['wait'](0x1f4);
                            await _0x53a61b['umrJp'](awardTask, 0x1, _0x44c342);
                        } else {
                            _0x53a61b['YTVML'](_0xbc351c);
                        }
                    }
                    $['log']('\n结束第' + _0x53a61b['oyftB'](_0x962fbd, 0x1) + '个【🎖成就任务】：' + _0x44c342['strTaskDescr'] + '\x0a');
                }
                break;
            default:
                break;
        }
        _0x53a61b['YTVML'](_0xbc351c);
    });
}

function doTask(_0x292272) {
    var _0x2afbaa = {
        'nRXRI': function(_0x12dcfd, _0x360d78) {
            return _0x12dcfd(_0x360d78);
        },
        'fkOlV': function(_0x150c28) {
            return _0x150c28();
        },
        'aFArV': function(_0x47d4d6, _0x998376) {
            return _0x47d4d6 === _0x998376;
        },
        'zKtoJ': 'BESrM',
        'xzqKl': 'LUlXP',
        'bvmjw': function(_0x2f65e1, _0x417947) {
            return _0x2f65e1 !== _0x417947;
        },
        'qTkwr': '活动太火爆了',
        'zoKZV': '任务进行中或者未到任务时间',
        'VjDdJ': function(_0x15f823, _0x33d7cf) {
            return _0x15f823(_0x33d7cf);
        },
        'JctKB': function(_0x1ef38b, _0x1d00f6) {
            return _0x1ef38b === _0x1d00f6;
        },
        'aAHlp': 'besLp',
        'vmxOb': function(_0x394b9b, _0x3e32d8) {
            return _0x394b9b === _0x3e32d8;
        },
        'kYOGF': 'rIOFE',
        'NeYTh': function(_0x31973b, _0x2f1e6e) {
            return _0x31973b >= _0x2f1e6e;
        },
        'bzDdd': function(_0x558f02, _0xa51183) {
            return _0x558f02(_0xa51183);
        },
        'JYYUK': function(_0x37a1c0, _0x2966c2) {
            return _0x37a1c0 !== _0x2966c2;
        },
        'kaPns': 'lYNQL',
        'WPnDQ': function(_0x4b26aa, _0x486546, _0x450a8b) {
            return _0x4b26aa(_0x486546, _0x450a8b);
        }
    };
    return new Promise(async _0x890cdf => {
        if (_0x2afbaa['vmxOb'](_0x2afbaa['kYOGF'], _0x2afbaa['kYOGF'])) {
            const {
                taskId,
                completedTimes,
                configTargetTimes,
                taskName
            } = _0x292272;
            if (_0x2afbaa['NeYTh'](_0x2afbaa['bzDdd'](parseInt, completedTimes), _0x2afbaa['bzDdd'](parseInt, configTargetTimes))) {
                if (_0x2afbaa['JYYUK'](_0x2afbaa['kaPns'], _0x2afbaa['kaPns'])) {
                    const {
                        iRet,
                        sErrMsg,
                        dwExpericnce
                    } = JSON['parse'](data);
                    $['log']('\x0a' + strTaskDescr + '【领成就奖励】： success 获得财富值：¥ ' + dwExpericnce + '\x0a' + ($['showLog'] ? data : ''));
                } else {
                    _0x2afbaa['bzDdd'](_0x890cdf, ![]);
                    $['log']('\x0a' + taskName + '【做日常任务】： mission success');
                    return;
                }
            }
            $['get'](_0x2afbaa['WPnDQ'](taskListUrl, 'DoTask', 'taskId=' + taskId), (_0x1802e6, _0x3c766a, _0x5e85de) => {
                var _0x431778 = {
                    'GjDNN': function(_0x252597, _0x1c6237) {
                        return _0x2afbaa['nRXRI'](_0x252597, _0x1c6237);
                    },
                    'xZkVb': function(_0x477b4e) {
                        return _0x2afbaa['fkOlV'](_0x477b4e);
                    }
                };
                try {
                    if (_0x2afbaa['aFArV'](_0x2afbaa['zKtoJ'], _0x2afbaa['xzqKl'])) {
                        try {
                            _0x431778['GjDNN'](_0x890cdf, JSON['parse'](_0x5e85de));
                        } catch (_0x7257f5) {} finally {
                            _0x431778['xZkVb'](_0x890cdf);
                        }
                    } else {
                        const {
                            msg,
                            ret
                        } = JSON['parse'](_0x5e85de);
                        $['log']('\x0a' + taskName + '【做日常任务】：' + (_0x2afbaa['bvmjw'](msg['indexOf'](_0x2afbaa['qTkwr']), -0x1) ? _0x2afbaa['zoKZV'] : msg) + '\x0a' + ($['showLog'] ? _0x5e85de : ''));
                        _0x2afbaa['VjDdJ'](_0x890cdf, _0x2afbaa['JctKB'](ret, 0x0));
                    }
                } catch (_0x141c8c) {
                    $['logErr'](_0x141c8c, _0x3c766a);
                } finally {
                    if (_0x2afbaa['bvmjw'](_0x2afbaa['aAHlp'], _0x2afbaa['aAHlp'])) {
                        $['logErr'](e, _0x3c766a);
                    } else {
                        _0x2afbaa['fkOlV'](_0x890cdf);
                    }
                }
            });
        } else {
            $['log']('\n🎁寻宝：寻宝次数不足');
        }
    });
}

function awardTask(_0x4f2ea2, _0x4bfe94) {
    var _0x45228f = {
        'NCeEc': function(_0x2bcd92, _0x511af6) {
            return _0x2bcd92 !== _0x511af6;
        },
        'KslTK': 'KVfLG',
        'rvluo': function(_0x41e696) {
            return _0x41e696();
        },
        'IWfko': function(_0x1a129a) {
            return _0x1a129a();
        },
        'eTKni': function(_0x8740cf) {
            return _0x8740cf();
        },
        'morIU': function(_0x19c548, _0x216aac) {
            return _0x19c548 === _0x216aac;
        },
        'USlBx': function(_0x5bb37d, _0x44c9d3) {
            return _0x5bb37d === _0x44c9d3;
        },
        'gsKak': function(_0x5d7b6a) {
            return _0x5d7b6a();
        },
        'FBOTx': 'lrrFZ',
        'OHweX': function(_0x16f57a, _0x2aee72) {
            return _0x16f57a !== _0x2aee72;
        },
        'iHfWd': '活动太火爆了',
        'vuQMm': '任务为成就任务或者未到任务时间',
        'jBHEf': function(_0x3e0ee1, _0x43be1e) {
            return _0x3e0ee1 + _0x43be1e;
        },
        'Edewf': function(_0x58cf41, _0x56dcfe) {
            return _0x58cf41(_0x56dcfe);
        },
        'DonhA': function(_0x5f7dbd, _0x47f19e) {
            return _0x5f7dbd === _0x47f19e;
        },
        'yxIec': 'eIGgr',
        'SkPVy': 'EzakG',
        'RRcGy': function(_0x1f065c) {
            return _0x1f065c();
        },
        'rimHs': function(_0x2804f9, _0xd28452) {
            return _0x2804f9 !== _0xd28452;
        },
        'sAovl': 'ovpLu',
        'UGUSy': function(_0x134a1e, _0x5b9f60, _0x3c2fa3) {
            return _0x134a1e(_0x5b9f60, _0x3c2fa3);
        }
    };
    return new Promise(_0x359c02 => {
        var _0x23c924 = {
            'oqoqZ': function(_0x4b8a44) {
                return _0x45228f['IWfko'](_0x4b8a44);
            },
            'ASKef': function(_0x2ed771) {
                return _0x45228f['eTKni'](_0x2ed771);
            },
            'zHVer': function(_0x29154f, _0x350013) {
                return _0x45228f['morIU'](_0x29154f, _0x350013);
            },
            'AgfAx': function(_0x53f6b0, _0x5dc967) {
                return _0x45228f['USlBx'](_0x53f6b0, _0x5dc967);
            },
            'uiTNV': function(_0x111a0c) {
                return _0x45228f['gsKak'](_0x111a0c);
            },
            'zKnqO': _0x45228f['FBOTx'],
            'HRTqA': function(_0x48b1ee, _0x275ed9) {
                return _0x45228f['OHweX'](_0x48b1ee, _0x275ed9);
            },
            'PeHFY': _0x45228f['iHfWd'],
            'TXGnP': _0x45228f['vuQMm'],
            'wSmBT': function(_0xdba77a, _0x8b137a) {
                return _0x45228f['jBHEf'](_0xdba77a, _0x8b137a);
            },
            'FHdPL': function(_0x191489, _0x355875) {
                return _0x45228f['Edewf'](_0x191489, _0x355875);
            },
            'gczCO': function(_0x192bd4, _0x3a562c) {
                return _0x45228f['DonhA'](_0x192bd4, _0x3a562c);
            },
            'bZqkj': function(_0x41232e, _0x27ee05) {
                return _0x45228f['DonhA'](_0x41232e, _0x27ee05);
            },
            'MbfoE': _0x45228f['yxIec'],
            'XuaeZ': _0x45228f['SkPVy'],
            'yAOsN': function(_0x357626) {
                return _0x45228f['RRcGy'](_0x357626);
            }
        };
        if (_0x45228f['rimHs'](_0x45228f['sAovl'], _0x45228f['sAovl'])) {
            _0x23c924['oqoqZ'](_0x359c02);
        } else {
            switch (_0x4f2ea2) {
                case 0x0:
                    const {
                        taskId, taskName
                    } = _0x4bfe94;
                    $['get'](_0x45228f['UGUSy'](taskListUrl, 'Award', 'taskId=' + taskId), (_0x2608d7, _0x3febbd, _0x110e44) => {
                        if (_0x23c924['AgfAx'](_0x23c924['zKnqO'], _0x23c924['zKnqO'])) {
                            try {
                                const {
                                    msg,
                                    ret,
                                    data: {
                                        prizeInfo = ''
                                    } = {}
                                } = JSON['parse'](_0x110e44);
                                let _0x1e91cc = '';
                                if (_0x23c924['HRTqA'](msg['indexOf'](_0x23c924['PeHFY']), -0x1)) {
                                    _0x1e91cc = _0x23c924['TXGnP'];
                                } else {
                                    _0x1e91cc = _0x23c924['wSmBT'](msg, prizeInfo) ? ' 获得财富值 ¥ ' + JSON['parse'](prizeInfo)['ddwMoney'] : '';
                                }
                                $['log']('\x0a' + taskName + '【领日常奖励】：' + _0x1e91cc + '\x0a' + ($['showLog'] ? _0x110e44 : ''));
                                _0x23c924['FHdPL'](_0x359c02, _0x23c924['gczCO'](ret, 0x0));
                            } catch (_0x2e0228) {
                                $['logErr'](_0x2e0228, _0x3febbd);
                            } finally {
                                if (_0x23c924['bZqkj'](_0x23c924['MbfoE'], _0x23c924['XuaeZ'])) {
                                    _0x23c924['ASKef'](_0x359c02);
                                } else {
                                    _0x23c924['yAOsN'](_0x359c02);
                                }
                            }
                        } else {
                            try {
                                console['log']('\n超级助力(超级工人)结果:' + _0x110e44);
                                const {
                                    sErrMsg,
                                    iRet
                                } = JSON['parse'](_0x110e44);
                                if (_0x23c924['zHVer'](iRet, 0x7d5) || _0x23c924['AgfAx'](iRet, 0x270f)) $['canHelp'] = ![];
                                console['log'](sErrMsg);
                            } catch (_0x3c17f7) {
                                $['logErr'](_0x3c17f7, _0x3febbd);
                            } finally {
                                _0x23c924['uiTNV'](_0x359c02);
                            }
                        }
                    });
                    break;
                case 0x1:
                    const {
                        strTaskIndex, strTaskDescr
                    } = _0x4bfe94;
                    $['get'](_0x45228f['UGUSy'](taskUrl, 'consume/AchieveAward', 'strTaskIndex=' + strTaskIndex), (_0x597d37, _0x355b88, _0x546ae1) => {
                        try {
                            if (_0x45228f['NCeEc'](_0x45228f['KslTK'], _0x45228f['KslTK'])) {
                                $['log']('\x0a' + _0x4bfe94['strTaskDescr'] + '【领成就奖励】：该成就任务未达到门槛}');
                            } else {
                                const {
                                    iRet,
                                    sErrMsg,
                                    dwExpericnce
                                } = JSON['parse'](_0x546ae1);
                                $['log']('\x0a' + strTaskDescr + '【领成就奖励】： success 获得财富值：¥ ' + dwExpericnce + '\x0a' + ($['showLog'] ? _0x546ae1 : ''));
                            }
                        } catch (_0x59a26f) {
                            $['logErr'](_0x59a26f, _0x355b88);
                        } finally {
                            _0x45228f['rvluo'](_0x359c02);
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
    var _0x2dceb5 = {
        'wCflR': function(_0x14d789, _0x4736af) {
            return _0x14d789 !== _0x4736af;
        },
        'CCHGo': 'cPpzI',
        'TTjvl': function(_0x13f9c4, _0x3ad05e) {
            return _0x13f9c4 == _0x3ad05e;
        },
        'oGqcr': function(_0x363f70, _0x51dd2d, _0x2c486f, _0x5fd1a8) {
            return _0x363f70(_0x51dd2d, _0x2c486f, _0x5fd1a8);
        },
        'wGVqV': function(_0x38fa90) {
            return _0x38fa90();
        },
        'XyOqY': function(_0x418251) {
            return _0x418251();
        },
        'hVFQj': 'SWigL',
        'XFAIz': 'BYwVX',
        'DgsUj': function(_0x163e01, _0x24f8cf, _0xe57a20) {
            return _0x163e01(_0x24f8cf, _0xe57a20);
        }
    };
    return new Promise(_0x1393a5 => {
        var _0x54221d = {
            'QMGmP': function(_0x16537b) {
                return _0x2dceb5['XyOqY'](_0x16537b);
            }
        };
        if (_0x2dceb5['wCflR'](_0x2dceb5['hVFQj'], _0x2dceb5['XFAIz'])) {
            $['get'](_0x2dceb5['DgsUj'](taskUrl, 'consume/FunCenterState', 'strType=1'), async (_0x439780, _0x504c30, _0x2354a5) => {
                if (_0x2dceb5['wCflR'](_0x2dceb5['CCHGo'], _0x2dceb5['CCHGo'])) {
                    _0x54221d['QMGmP'](_0x1393a5);
                } else {
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
                        } = JSON['parse'](_0x2354a5);
                        if (_0x2dceb5['TTjvl'](dwFreeCount, 0x1)) {
                            await $['wait'](0x1f4);
                            await _0x2dceb5['oGqcr'](soltMachine, strCouponPool, strGoodsPool, ddwConfVersion);
                        }
                    } catch (_0x15e2bb) {
                        $['logErr'](_0x15e2bb, _0x504c30);
                    } finally {
                        _0x2dceb5['wGVqV'](_0x1393a5);
                    }
                }
            });
        } else {
            _0x2dceb5['wGVqV'](_0x1393a5);
        }
    });
}

function soltMachine(_0x37d78a, _0x43fea7, _0xba9098) {
    var _0xb02f0a = {
        'VTUnc': function(_0x29cc0d) {
            return _0x29cc0d();
        },
        'gMLIH': function(_0x458253, _0x3df513) {
            return _0x458253 !== _0x3df513;
        },
        'rkBmV': 'DTewu',
        'AdyjT': 'bgakX',
        'EfrgE': 'WPoiu',
        'MqfDd': 'GAGLX',
        'hazwW': function(_0x21c2c6, _0xa26bbc) {
            return _0x21c2c6 != _0xa26bbc;
        },
        'xirJs': '未中奖',
        'lTMeV': function(_0x177699, _0x17cc4c) {
            return _0x177699 === _0x17cc4c;
        },
        'EuBXm': 'PKKyg',
        'oprYJ': 'Qijjy',
        'nuMtk': function(_0x4fd912, _0x3da75f, _0x296e42) {
            return _0x4fd912(_0x3da75f, _0x296e42);
        }
    };
    return new Promise(_0x5d0c56 => {
        var _0x4650bc = {
            'LZxOY': function(_0x1b4559) {
                return _0xb02f0a['VTUnc'](_0x1b4559);
            },
            'jmInZ': function(_0x532a41, _0x33eeb1) {
                return _0xb02f0a['gMLIH'](_0x532a41, _0x33eeb1);
            },
            'bMoKb': _0xb02f0a['rkBmV'],
            'noqZj': _0xb02f0a['AdyjT'],
            'NWSTa': function(_0x1417aa, _0x4a8855) {
                return _0xb02f0a['gMLIH'](_0x1417aa, _0x4a8855);
            },
            'WZVdG': _0xb02f0a['EfrgE'],
            'MWGmD': _0xb02f0a['MqfDd'],
            'RdWzi': function(_0x46f701, _0x41e108) {
                return _0xb02f0a['hazwW'](_0x46f701, _0x41e108);
            },
            'NjpSW': _0xb02f0a['xirJs']
        };
        if (_0xb02f0a['lTMeV'](_0xb02f0a['EuBXm'], _0xb02f0a['oprYJ'])) {
            $['logErr'](e, resp);
        } else {
            $['get'](_0xb02f0a['nuMtk'](taskUrl, 'consume/SlotMachine', 'strCouponPool=' + _0x37d78a + '&strGoodsPool=' + _0x43fea7 + '&ddwConfVersion=' + _0xba9098), async (_0x3c7b8e, _0x469834, _0x5b89e6) => {
                if (_0x4650bc['jmInZ'](_0x4650bc['bMoKb'], _0x4650bc['noqZj'])) {
                    try {
                        if (_0x4650bc['NWSTa'](_0x4650bc['WZVdG'], _0x4650bc['MWGmD'])) {
                            const {
                                iRet,
                                sErrMsg,
                                strAwardPoolName
                            } = JSON['parse'](_0x5b89e6);
                            $['log']('\n【抽奖结果】🎰 ' + (_0x4650bc['RdWzi'](strAwardPoolName, '') ? _0x4650bc['NjpSW'] : strAwardPoolName) + ' \x0a' + ($['showLog'] ? _0x5b89e6 : ''));
                        } else {
                            $['msg']($['name'], '', '' + $['result']['join']('\x0a'));
                        }
                    } catch (_0x36cdab) {
                        $['logErr'](_0x36cdab, _0x469834);
                    } finally {
                        _0x4650bc['LZxOY'](_0x5d0c56);
                    }
                } else {
                    _0x4650bc['LZxOY'](_0x5d0c56);
                }
            });
        }
    });
}

function createAssistUser(_0x14e113) {
    var _0x7b55e1 = {
        'BjGYU': 'CookieJD',
        'EBBuN': 'CookieJD2',
        'nmCDU': function(_0xebd61, _0x2ca6bd) {
            return _0xebd61(_0x2ca6bd);
        },
        'QYSZx': 'CookiesJD',
        'CeNrA': function(_0x2c2c4b, _0x2aff5c) {
            return _0x2c2c4b === _0x2aff5c;
        },
        'lJeax': function(_0x118dff) {
            return _0x118dff();
        },
        'CaWIy': function(_0x21e53d, _0x24a1a6) {
            return _0x21e53d !== _0x24a1a6;
        },
        'tQzJO': 'YFcgN',
        'gEWdG': function(_0x37dbb5, _0x356e94, _0x557d90) {
            return _0x37dbb5(_0x356e94, _0x557d90);
        },
        'NDeFq': 'user/JoinScene'
    };
    return new Promise(_0x517e82 => {
        var _0x20ddc7 = {
            'bXoyX': _0x7b55e1['BjGYU'],
            'fHxjR': _0x7b55e1['EBBuN'],
            'zfNBF': function(_0x227d9b, _0x5b02fd) {
                return _0x7b55e1['nmCDU'](_0x227d9b, _0x5b02fd);
            },
            'FJMqa': _0x7b55e1['QYSZx'],
            'AQrWu': function(_0xa3f6c1, _0x1289c4) {
                return _0x7b55e1['CeNrA'](_0xa3f6c1, _0x1289c4);
            },
            'yspDz': function(_0x228e75, _0x1e9e8e) {
                return _0x7b55e1['CeNrA'](_0x228e75, _0x1e9e8e);
            },
            'HeBBC': function(_0x511b2b) {
                return _0x7b55e1['lJeax'](_0x511b2b);
            }
        };
        if (_0x7b55e1['CaWIy'](_0x7b55e1['tQzJO'], _0x7b55e1['tQzJO'])) {
            cookiesArr = [$['getdata'](_0x20ddc7['bXoyX']), $['getdata'](_0x20ddc7['fHxjR']), ..._0x20ddc7['zfNBF'](jsonParse, $['getdata'](_0x20ddc7['FJMqa']) || '[]')['map'](_0x1fcb28 => _0x1fcb28['cookie'])]['filter'](_0x488dfd => !!_0x488dfd);
        } else {
            $['get'](_0x7b55e1['gEWdG'](taskUrl, _0x7b55e1['NDeFq'], 'strShareId=' + _0x7b55e1['nmCDU'](escape, _0x14e113) + '&dwSceneId=1001'), async (_0x54447c, _0x159518, _0x47264e) => {
                try {
                    console['log']('\n普通助力(招工)结果:' + _0x47264e);
                    const {
                        iRet
                    } = JSON['parse'](_0x47264e);
                    if (_0x20ddc7['AQrWu'](iRet, 0x7d5) || _0x20ddc7['yspDz'](iRet, 0x270f)) $['canHelp'] = ![];
                } catch (_0xa220ae) {} finally {
                    _0x20ddc7['HeBBC'](_0x517e82);
                }
            });
        }
    });
}

function createSuperAssistUser(_0x3c1df2) {
    var _0x56c6ee = {
        'wDkeM': '*/*',
        'ppRgp': 'keep-alive',
        'LGmdq': 'https://st.jingxi.com/fortune_island/index.html?ptag=138631.26.55',
        'MCyrd': 'gzip, deflate, br',
        'OOyYn': 'm.jingxi.com',
        'PMIIu': function(_0x4a65e0, _0x4d7263) {
            return _0x4a65e0 + _0x4d7263;
        },
        'WRnwC': function(_0x4bf79c, _0x277c9c) {
            return _0x4bf79c * _0x277c9c;
        },
        'jySaj': 'zh-cn',
        'bGjnZ': function(_0x56e427) {
            return _0x56e427();
        },
        'UWcMU': function(_0x290cf7, _0x2a3c6f) {
            return _0x290cf7 === _0x2a3c6f;
        },
        'cUdie': 'LTlys',
        'ydXFe': function(_0x2b5268, _0x13b351) {
            return _0x2b5268 === _0x13b351;
        },
        'YyZUd': 'qZOyl',
        'HPjTY': 'fmNtz',
        'fwrgT': 'rdyJo',
        'gqwTJ': 'JSmEA',
        'koPoC': function(_0x1495a1) {
            return _0x1495a1();
        },
        'ehMaI': function(_0x35746a, _0x1dd001) {
            return _0x35746a + _0x1dd001;
        },
        'tFTPY': '你的【🏝寻宝大作战】互助码: ',
        'CNCWf': '(每天都变化,旧的不可用)',
        'mYfSB': function(_0x1f6d9d, _0x54b47f) {
            return _0x1f6d9d !== _0x54b47f;
        },
        'UwPys': 'gOSJi',
        'nFGqu': function(_0x46a1a5, _0x2e6bef, _0x1c0a6e) {
            return _0x46a1a5(_0x2e6bef, _0x1c0a6e);
        },
        'lXkdk': 'user/JoinScene',
        'vPawg': 'timestamp',
        'gyWeG': 'phoneid',
        'gEIVS': 'farm_jstoken',
        'yTlag': function(_0xcf6a57, _0x5e5f3c) {
            return _0xcf6a57(_0x5e5f3c);
        }
    };
    return new Promise(_0x5a9df2 => {
        var _0x160554 = {
            'JwMOr': function(_0x327174, _0x8f43de) {
                return _0x56c6ee['ehMaI'](_0x327174, _0x8f43de);
            },
            'UDPTA': function(_0x27a2ff, _0x23c057) {
                return _0x56c6ee['ehMaI'](_0x27a2ff, _0x23c057);
            },
            'kpMJU': _0x56c6ee['tFTPY'],
            'HbwdG': _0x56c6ee['CNCWf']
        };
        if (_0x56c6ee['mYfSB'](_0x56c6ee['UwPys'], _0x56c6ee['UwPys'])) {
            return {
                'url': JD_API_HOST + 'jxcfd/' + function_path + '?strZone=jxcfd&bizCode=jxcfd&source=jxcfd&dwEnv=7&_cfd_t=' + Date['now']() + '&ptag=138631.26.55&' + body + '&_ste=1&_=' + Date['now']() + '&sceneval=2&g_login_type=1&g_ty=ls',
                'headers': {
                    'Cookie': cookie,
                    'Accept': _0x56c6ee['wDkeM'],
                    'Connection': _0x56c6ee['ppRgp'],
                    'Referer': _0x56c6ee['LGmdq'],
                    'Accept-Encoding': _0x56c6ee['MCyrd'],
                    'Host': _0x56c6ee['OOyYn'],
                    'User-Agent': 'jdpingou;iPhone;3.15.2;14.2.1;ea00763447803eb0f32045dcba629c248ea53bb3;network/wifi;model/iPhone13,2;appBuild/100365;ADID/00000000-0000-0000-0000-000000000000;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/0;hasOCPay/0;supportBestPay/0;session/' + _0x56c6ee['PMIIu'](_0x56c6ee['WRnwC'](Math['random'], 0x62), 0x1) + ';pap/JA2015_311210;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
                    'Accept-Language': _0x56c6ee['jySaj']
                },
                'timeout': 0x2710
            };
        } else {
            $['get'](_0x56c6ee['nFGqu'](taskUrl, _0x56c6ee['lXkdk'], 'strPgtimestamp=' + token[_0x56c6ee['vPawg']] + '&strPhoneID=' + token[_0x56c6ee['gyWeG']] + '&strPgUUNum=' + token[_0x56c6ee['gEIVS']] + '&strShareId=' + _0x56c6ee['yTlag'](escape, _0x3c1df2) + '&dwSceneId=1001&dwType=2'), async (_0x5aed75, _0x5512b4, _0x215c2d) => {
                var _0x22414a = {
                    'AkUhg': function(_0x11faa7) {
                        return _0x56c6ee['bGjnZ'](_0x11faa7);
                    }
                };
                if (_0x56c6ee['UWcMU'](_0x56c6ee['cUdie'], _0x56c6ee['cUdie'])) {
                    try {
                        if (_0x56c6ee['ydXFe'](_0x56c6ee['YyZUd'], _0x56c6ee['YyZUd'])) {
                            console['log']('\n超级助力(超级工人)结果:' + _0x215c2d);
                            const {
                                sErrMsg,
                                iRet
                            } = JSON['parse'](_0x215c2d);
                            if (_0x56c6ee['ydXFe'](iRet, 0x7d5) || _0x56c6ee['ydXFe'](iRet, 0x270f)) $['canHelp'] = ![];
                            console['log'](sErrMsg);
                        } else {
                            _0x22414a['AkUhg'](_0x5a9df2);
                        }
                    } catch (_0x2d1c92) {
                        if (_0x56c6ee['ydXFe'](_0x56c6ee['HPjTY'], _0x56c6ee['HPjTY'])) {
                            $['logErr'](_0x2d1c92, _0x5512b4);
                        } else {
                            $['log'](_0x160554['JwMOr'](_0x160554['UDPTA'](_0x160554['kpMJU'], strGroupId), _0x160554['HbwdG']));
                            $['strGroupIds']['push'](strGroupId);
                        }
                    } finally {
                        if (_0x56c6ee['ydXFe'](_0x56c6ee['fwrgT'], _0x56c6ee['gqwTJ'])) {
                            $['log']('\n📌签到：你今日已签到过啦，请明天再来');
                        } else {
                            _0x56c6ee['koPoC'](_0x5a9df2);
                        }
                    }
                } else {
                    $['logErr'](e, _0x5512b4);
                }
            });
        }
    });
}

function joinGroup(_0x2f7754) {
    var _0x14e230 = {
        'LLmlH': 'abcdefghijklmnopqrstuvwxyz1234567890',
        'Iamre': function(_0x5ebe09, _0x208639) {
            return _0x5ebe09 < _0x208639;
        },
        'DAbFn': function(_0x6f0c70, _0x3ae541) {
            return _0x6f0c70(_0x3ae541);
        },
        'EVXbU': function(_0x570f1a, _0xbe52c9) {
            return _0x570f1a * _0xbe52c9;
        },
        'GBVsS': function(_0x4b6f2e, _0x37c817) {
            return _0x4b6f2e === _0x37c817;
        },
        'IHznS': function(_0x12fef1, _0x4ac5d8) {
            return _0x12fef1 === _0x4ac5d8;
        },
        'reulI': function(_0x3328d6, _0x2cfc1b) {
            return _0x3328d6 !== _0x2cfc1b;
        },
        'pNAPl': 'XZgRH',
        'lxnqJ': 'TtJXf',
        'IPaEv': function(_0x9c811d) {
            return _0x9c811d();
        },
        'qcumu': function(_0x3539ac, _0x29082d) {
            return _0x3539ac === _0x29082d;
        },
        'buPGQ': 'acUvA',
        'FJbPW': 'kwfjT',
        'VYyvc': function(_0x3f7b66, _0x1d5c02, _0x1471be) {
            return _0x3f7b66(_0x1d5c02, _0x1471be);
        },
        'yTDnF': 'timestamp',
        'Xtcim': 'phoneid',
        'SNwKs': 'farm_jstoken'
    };
    return new Promise(async _0x5e6c2f => {
        if (_0x14e230['qcumu'](_0x14e230['buPGQ'], _0x14e230['FJbPW'])) {
            let _0x413f98 = _0x14e230['LLmlH'];
            let _0xd9b74e = '';
            for (let _0x4dbe19 = 0x0; _0x14e230['Iamre'](_0x4dbe19, count); _0x4dbe19++) {
                _0xd9b74e += _0x413f98[_0x14e230['DAbFn'](parseInt, _0x14e230['EVXbU'](Math['random'](), _0x413f98['length']))];
            }
            return _0xd9b74e;
        } else {
            $['get'](_0x14e230['VYyvc'](taskUrl, 'user/JoinGroup', 'strGroupId=' + _0x2f7754 + '&dwIsNewUser=0&pgtimestamp=' + token[_0x14e230['yTDnF']] + '&phoneID=' + token[_0x14e230['Xtcim']] + '&pgUUNum=' + token[_0x14e230['SNwKs']]), (_0x2c28e8, _0x323665, _0x53494e) => {
                try {
                    const {
                        sErrMsg,
                        iRet
                    } = JSON['parse'](_0x53494e);
                    if (_0x14e230['GBVsS'](iRet, 0x7d5) || _0x14e230['IHznS'](iRet, 0x270f)) $['canHelp'] = ![];
                    $['log']('' + sErrMsg);
                } catch (_0x418c04) {
                    $['logErr'](_0x418c04, _0x323665);
                } finally {
                    if (_0x14e230['reulI'](_0x14e230['pNAPl'], _0x14e230['lxnqJ'])) {
                        _0x14e230['IPaEv'](_0x5e6c2f);
                    } else {
                        cookiesArr['push'](jdCookieNode[item]);
                    }
                }
            });
        }
    });
}

function submitGroupId() {
    var _0x2ddb96 = {
        'NYLxN': function(_0x2e4081, _0x3bc074) {
            return _0x2e4081 !== _0x3bc074;
        },
        'WiJCE': '活动太火爆了',
        'IqMfI': '任务为成就任务或者未到任务时间',
        'mDAbT': function(_0x110ee3, _0x3ef22e) {
            return _0x110ee3 + _0x3ef22e;
        },
        'hkciP': function(_0x2e648b, _0x286f15) {
            return _0x2e648b(_0x286f15);
        },
        'ehEql': function(_0x555d78, _0x1cfe1b) {
            return _0x555d78 === _0x1cfe1b;
        },
        'VBtId': function(_0x390f84, _0x257ba3) {
            return _0x390f84 === _0x257ba3;
        },
        'HGrnf': 'Swsgt',
        'GSKsT': 'bffka',
        'HQfup': function(_0x2a8d0f) {
            return _0x2a8d0f();
        },
        'bLvSp': function(_0x266df2, _0x89707) {
            return _0x266df2 === _0x89707;
        },
        'jafcA': function(_0x5b59d0) {
            return _0x5b59d0();
        },
        'mTMIq': function(_0xcc6d2c, _0x4bddba) {
            return _0xcc6d2c === _0x4bddba;
        },
        'wKduI': 'GvEhT',
        'cwpDk': function(_0x224a41, _0xce0099) {
            return _0x224a41 + _0xce0099;
        },
        'XiZRK': function(_0x1c0fb6, _0x4a2906) {
            return _0x1c0fb6 + _0x4a2906;
        },
        'yQSjg': '你的【🏝寻宝大作战】互助码: ',
        'GyroH': '(每天都变化,旧的不可用)',
        'YRrTf': 'LmQQv',
        'VHUiR': function(_0x15fc35) {
            return _0x15fc35();
        },
        'qRpex': '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie',
        'ucaIr': function(_0x2b273d, _0x22daac) {
            return _0x2b273d(_0x22daac);
        }
    };
    return new Promise(_0x49ec26 => {
        var _0x1f8a63 = {
            'CzYMy': _0x2ddb96['qRpex']
        };
        $['get'](_0x2ddb96['ucaIr'](taskUrl, 'user/GatherForture'), async (_0x242fbd, _0x4a8813, _0x7bd5ac) => {
            var _0x1dc9ce = {
                'aPjvD': function(_0x5642e0, _0x3c509c) {
                    return _0x2ddb96['NYLxN'](_0x5642e0, _0x3c509c);
                },
                'evFqJ': _0x2ddb96['WiJCE'],
                'cIgQF': _0x2ddb96['IqMfI'],
                'iERLZ': function(_0x3d9632, _0x1cb72f) {
                    return _0x2ddb96['mDAbT'](_0x3d9632, _0x1cb72f);
                },
                'tJyRC': function(_0x21fc49, _0x496623) {
                    return _0x2ddb96['hkciP'](_0x21fc49, _0x496623);
                },
                'nEUrx': function(_0x50d2c2, _0x632bd5) {
                    return _0x2ddb96['ehEql'](_0x50d2c2, _0x632bd5);
                }
            };
            try {
                if (_0x2ddb96['VBtId'](_0x2ddb96['HGrnf'], _0x2ddb96['HGrnf'])) {
                    const {
                        GroupInfo: {
                            strGroupId
                        },
                        strPin
                    } = JSON['parse'](_0x7bd5ac);
                    if (!strGroupId) {
                        if (_0x2ddb96['VBtId'](_0x2ddb96['GSKsT'], _0x2ddb96['GSKsT'])) {
                            const _0x95cb36 = await _0x2ddb96['HQfup'](openGroup);
                            if (_0x2ddb96['bLvSp'](_0x95cb36, 0x0)) {
                                await _0x2ddb96['HQfup'](submitGroupId);
                            } else {
                                _0x2ddb96['jafcA'](_0x49ec26);
                            }
                        } else {
                            try {
                                return JSON['parse'](str);
                            } catch (_0x539e2b) {
                                console['log'](_0x539e2b);
                                $['msg']($['name'], '', _0x1f8a63['CzYMy']);
                                return [];
                            }
                        }
                    } else {
                        if (_0x2ddb96['mTMIq'](_0x2ddb96['wKduI'], _0x2ddb96['wKduI'])) {
                            $['log'](_0x2ddb96['cwpDk'](_0x2ddb96['XiZRK'](_0x2ddb96['yQSjg'], strGroupId), _0x2ddb96['GyroH']));
                            $['strGroupIds']['push'](strGroupId);
                        } else {
                            console['log']('此账号的用户名为中文,暂不能进行超级主力\n');
                        }
                    }
                } else {
                    const {
                        msg,
                        ret,
                        data: {
                            prizeInfo = ''
                        } = {}
                    } = JSON['parse'](data);
                    let _0xb6c25 = '';
                    if (_0x1dc9ce['aPjvD'](msg['indexOf'](_0x1dc9ce['evFqJ']), -0x1)) {
                        _0xb6c25 = _0x1dc9ce['cIgQF'];
                    } else {
                        _0xb6c25 = _0x1dc9ce['iERLZ'](msg, prizeInfo) ? ' 获得财富值 ¥ ' + JSON['parse'](prizeInfo)['ddwMoney'] : '';
                    }
                    $['log']('\x0a' + taskName + '【领日常奖励】：' + _0xb6c25 + '\x0a' + ($['showLog'] ? data : ''));
                    _0x1dc9ce['tJyRC'](_0x49ec26, _0x1dc9ce['nEUrx'](ret, 0x0));
                }
            } catch (_0x93ffc4) {
                if (_0x2ddb96['mTMIq'](_0x2ddb96['YRrTf'], _0x2ddb96['YRrTf'])) {
                    $['logErr'](_0x93ffc4, _0x4a8813);
                } else {
                    if (data) data = JSON['parse'](data);
                }
            } finally {
                _0x2ddb96['VHUiR'](_0x49ec26);
            }
        });
    });
}

function openGroup() {
    var _0x3a2a08 = {
        'ksQar': function(_0x422a00, _0x209153) {
            return _0x422a00(_0x209153);
        },
        'gnmEa': function(_0x35fb4a) {
            return _0x35fb4a();
        },
        'XYsNx': function(_0x231c09, _0x36cb42) {
            return _0x231c09 === _0x36cb42;
        },
        'zLpGS': 'eKfwa',
        'bwKQK': function(_0x15bd18, _0x467669, _0x2ffc19) {
            return _0x15bd18(_0x467669, _0x2ffc19);
        }
    };
    return new Promise(async _0x355edd => {
        var _0x38214c = {
            'ONwlt': function(_0x3ff9d2, _0x5e2926) {
                return _0x3a2a08['ksQar'](_0x3ff9d2, _0x5e2926);
            },
            'XqjJY': function(_0x53dcca) {
                return _0x3a2a08['gnmEa'](_0x53dcca);
            }
        };
        if (_0x3a2a08['XYsNx'](_0x3a2a08['zLpGS'], _0x3a2a08['zLpGS'])) {
            $['get'](_0x3a2a08['bwKQK'](taskUrl, 'user/OpenGroup', 'dwIsNewUser=' + $['info']['dwIsNewUser']), async (_0x5afc32, _0x314a44, _0x2c3fc4) => {
                try {
                    const {
                        sErrMsg
                    } = JSON['parse'](_0x2c3fc4);
                    $['log']('\n【🏝寻宝大作战】' + sErrMsg + '\x0a' + ($['showLog'] ? _0x2c3fc4 : ''));
                    _0x38214c['ONwlt'](_0x355edd, 0x0);
                } catch (_0x1c2a09) {
                    $['logErr'](_0x1c2a09, _0x314a44);
                } finally {
                    _0x38214c['XqjJY'](_0x355edd);
                }
            });
        } else {
            $['logErr'](e, resp);
        }
    });
}

function openPeriodBox() {
    var _0x2771c6 = {
        'EpTJT': function(_0x54c4be, _0x45619b) {
            return _0x54c4be(_0x45619b);
        },
        'pAkhy': function(_0x23c561) {
            return _0x23c561();
        },
        'QpdcK': function(_0x1e29f3, _0x1fe3bb) {
            return _0x1e29f3 === _0x1fe3bb;
        },
        'Oeeqt': 'SYJmY',
        'WrLjQ': function(_0x20cac5, _0x1a0060) {
            return _0x20cac5 == _0x1a0060;
        },
        'ntwGH': 'success',
        'vfImO': function(_0x1fe7a0) {
            return _0x1fe7a0();
        },
        'NmggW': function(_0x52b664, _0x449e29) {
            return _0x52b664 !== _0x449e29;
        },
        'aCTcC': 'XZKgV',
        'jiNNO': 'iQRpe',
        'NOBZW': function(_0xb72753, _0x44d777) {
            return _0xb72753 < _0x44d777;
        },
        'zvvtg': function(_0x4e0eaa, _0xa272c4) {
            return _0x4e0eaa == _0xa272c4;
        },
        'kpyfT': function(_0x22a904, _0x35004c) {
            return _0x22a904 === _0x35004c;
        },
        'BkCwH': 'nWtWN',
        'eevVl': 'sBcyJ',
        'DBNtv': function(_0x1773ea, _0x5ebae2, _0xf2e5ac) {
            return _0x1773ea(_0x5ebae2, _0xf2e5ac);
        },
        'zWuUH': function(_0x7fc30a, _0x398dc7) {
            return _0x7fc30a == _0x398dc7;
        },
        'MyXgl': function(_0x568a85, _0x4d4847) {
            return _0x568a85 === _0x4d4847;
        },
        'PYavZ': 'ukxgs',
        'zbYTe': 'KQUSC',
        'AxgkM': function(_0xf8807a, _0xeccd38) {
            return _0xf8807a === _0xeccd38;
        },
        'XhBSg': 'rzVAz',
        'PNOXX': 'yCsNz',
        'qpBOp': function(_0x45f6e9) {
            return _0x45f6e9();
        },
        'sPaTH': function(_0x47b978, _0x1d613f) {
            return _0x47b978(_0x1d613f);
        }
    };
    return new Promise(async _0x3094b7 => {
        $['get'](_0x2771c6['sPaTH'](taskUrl, 'user/GatherForture'), async (_0x4c9d2b, _0xb02d19, _0x247c50) => {
            var _0x3d39c9 = {
                'kdyDq': function(_0x12861f, _0x258861) {
                    return _0x2771c6['EpTJT'](_0x12861f, _0x258861);
                },
                'GCrAG': function(_0x43f884) {
                    return _0x2771c6['pAkhy'](_0x43f884);
                },
                'ioteH': function(_0x515baf, _0x19ff9d) {
                    return _0x2771c6['QpdcK'](_0x515baf, _0x19ff9d);
                },
                'jKRPP': _0x2771c6['Oeeqt'],
                'udGDF': function(_0xb53157, _0x573fb7) {
                    return _0x2771c6['WrLjQ'](_0xb53157, _0x573fb7);
                },
                'bJaOh': _0x2771c6['ntwGH'],
                'hufNu': function(_0x2578a5) {
                    return _0x2771c6['vfImO'](_0x2578a5);
                }
            };
            try {
                if (_0x2771c6['NmggW'](_0x2771c6['aCTcC'], _0x2771c6['jiNNO'])) {
                    const {
                        PeriodBox = [{}]
                    } = JSON['parse'](_0x247c50);
                    for (var _0x24ecce = 0x0; _0x2771c6['NOBZW'](_0x24ecce, PeriodBox['length']); _0x24ecce++) {
                        const {
                            dwStatus,
                            dwSeq,
                            strBrandName
                        } = PeriodBox[_0x24ecce];
                        if (_0x2771c6['zvvtg'](dwStatus, 0x2)) {
                            if (_0x2771c6['kpyfT'](_0x2771c6['BkCwH'], _0x2771c6['eevVl'])) {
                                console['log']('此账号cookie填写不规范,你的pt_pin=xxx后面没分号(;)\n');
                                _0x3d39c9['kdyDq'](_0x3094b7, null);
                            } else {
                                await $['wait'](0x3e8);
                                await $['get'](_0x2771c6['DBNtv'](taskUrl, 'user/OpenPeriodBox', 'dwSeq=' + dwSeq), async (_0x4c9d2b, _0xb02d19, _0x247c50) => {
                                    try {
                                        if (_0x3d39c9['ioteH'](_0x3d39c9['jKRPP'], _0x3d39c9['jKRPP'])) {
                                            const {
                                                dwMoney,
                                                iRet,
                                                sErrMsg
                                            } = JSON['parse'](_0x247c50);
                                            $['log']('\n【🏝寻宝大作战】【' + strBrandName + '】开宝箱：' + (_0x3d39c9['udGDF'](sErrMsg, _0x3d39c9['bJaOh']) ? ' 获得财富值 ¥ ' + dwMoney : sErrMsg) + '\x0a' + ($['showLog'] ? _0x247c50 : ''));
                                        } else {
                                            _0x3d39c9['GCrAG'](_0x3094b7);
                                        }
                                    } catch (_0x8d85d0) {
                                        $['logErr'](_0x8d85d0, _0xb02d19);
                                    } finally {
                                        _0x3d39c9['hufNu'](_0x3094b7);
                                    }
                                });
                            }
                        } else if (_0x2771c6['zWuUH'](dwStatus, 0x3)) {
                            $['log']('\n【🏝寻宝大作战】【' + strBrandName + '】开宝箱：宝箱已开启过！');
                        } else {
                            if (_0x2771c6['MyXgl'](_0x2771c6['PYavZ'], _0x2771c6['zbYTe'])) {
                                $['logErr'](e, _0xb02d19);
                            } else {
                                $['log']('\n【🏝寻宝大作战】【' + strBrandName + '】开宝箱：未达到宝箱开启条件，快去邀请好友助力吧！');
                                _0x2771c6['vfImO'](_0x3094b7);
                            }
                        }
                    }
                } else {
                    console['log']('随机取0个码放到您固定的互助码后面(不影响已有固定互助)');
                    _0x247c50 = JSON['parse'](_0x247c50);
                }
            } catch (_0x1bab7d) {
                $['logErr'](_0x1bab7d, _0xb02d19);
            } finally {
                if (_0x2771c6['AxgkM'](_0x2771c6['XhBSg'], _0x2771c6['PNOXX'])) {
                    const {
                        ret,
                        data: {
                            userTaskStatusList = []
                        } = {},
                        msg
                    } = JSON['parse'](_0x247c50);
                    $['allTask'] = userTaskStatusList['filter'](_0xc349b => _0xc349b['awardStatus'] !== 0x1);
                    $['log']('\n获取【📆日常任务】列表 ' + msg + '，总共' + $['allTask']['length'] + '个任务！\n' + ($['showLog'] ? _0x247c50 : ''));
                } else {
                    _0x2771c6['qpBOp'](_0x3094b7);
                }
            }
        });
    });
}

function activeScene(_0x599150) {
    var _0x3e9c5b = {
        'ugrXM': function(_0x59450c) {
            return _0x59450c();
        },
        'niLae': function(_0x155a91, _0x1398a4) {
            return _0x155a91 == _0x1398a4;
        },
        'VHeQn': 'success',
        'lyDvI': function(_0x1c9abd, _0x130fbf) {
            return _0x1c9abd || _0x130fbf;
        },
        'fKxSe': function(_0x1495a5, _0x51325a) {
            return _0x1495a5 !== _0x51325a;
        },
        'HTxqA': 'DFHUQ',
        'SplqW': function(_0x2bdfaf, _0x28cc67) {
            return _0x2bdfaf === _0x28cc67;
        },
        'dkySv': 'gVnhC',
        'wndaF': 'WqGGs',
        'HnSJg': function(_0xc0473) {
            return _0xc0473();
        },
        'DIGHa': 'IgBJF',
        'qVloL': 'oozFw',
        'oPvdH': function(_0x1da2d7, _0x587600) {
            return _0x1da2d7(_0x587600);
        },
        'HhlDW': '*/*',
        'mYGYt': 'keep-alive',
        'tmdRx': 'https://st.jingxi.com/fortune_island/index.html',
        'KwknF': 'gzip, deflate, br',
        'RcLAO': 'm.jingxi.com',
        'UqKJf': function(_0x1136f1, _0x33e04d) {
            return _0x1136f1 + _0x33e04d;
        },
        'zqTMU': function(_0x2f2bc2, _0x7179e1) {
            return _0x2f2bc2 * _0x7179e1;
        },
        'bviRW': 'zh-cn'
    };
    return new Promise(_0x210153 => {
        if (_0x3e9c5b['fKxSe'](_0x3e9c5b['DIGHa'], _0x3e9c5b['qVloL'])) {
            const _0x509cf6 = {
                'url': JD_API_HOST + 'jxcfd/user/ActiveScene?strZone=jxcfd&bizCode=jxcfd&source=jxcfd&dwEnv=7&_cfd_t=' + Date['now']() + '&ptag=&dwSceneId=' + _0x3e9c5b['oPvdH'](Number, _0x599150) + '&_stk=_cfd_t,bizCode,dwEnv,dwSceneId,ptag,source,strZone&_ste=1&h5st=20210304125239873;1540797227618115;10009;tk01we7831daaa8nRzRiUm4rZjRynBiuCHXtzWJmGCtVH2P+YnfnjoIsTWS87p85/fH4kcisjwWpqa10pRs3zMclNzix;5a9afbeb82bbb4e5e62cfe4b72965b5a2bf12cc3c56817b53e93a1cead562dc4&_=' + Date['now']() + '&sceneval=2&g_login_type=1',
                'headers': {
                    'Cookie': cookie,
                    'Accept': _0x3e9c5b['HhlDW'],
                    'Connection': _0x3e9c5b['mYGYt'],
                    'Referer': _0x3e9c5b['tmdRx'],
                    'Accept-Encoding': _0x3e9c5b['KwknF'],
                    'Host': _0x3e9c5b['RcLAO'],
                    'User-Agent': 'jdpingou;iPhone;3.15.2;14.2.1;ea00763447803eb0f32045dcba629c248ea53bb3;network/wifi;model/iPhone13,2;appBuild/100365;ADID/00000000-0000-0000-0000-000000000000;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/0;hasOCPay/0;supportBestPay/0;session/' + _0x3e9c5b['UqKJf'](_0x3e9c5b['zqTMU'](Math['random'], 0x62), 0x1) + ';pap/JA2015_311210;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
                    'Accept-Language': _0x3e9c5b['bviRW']
                }
            };
            $['get'](_0x509cf6, (_0x20ee6b, _0x96748a, _0x348563) => {
                var _0x57c1eb = {
                    'TuUvb': function(_0x394f7b) {
                        return _0x3e9c5b['ugrXM'](_0x394f7b);
                    },
                    'VjeEh': function(_0x26d4ad, _0x11f7e8) {
                        return _0x3e9c5b['niLae'](_0x26d4ad, _0x11f7e8);
                    },
                    'EsbxR': _0x3e9c5b['VHeQn'],
                    'dmUZG': function(_0x48af7e, _0x5b6185) {
                        return _0x3e9c5b['lyDvI'](_0x48af7e, _0x5b6185);
                    }
                };
                try {
                    if (_0x3e9c5b['fKxSe'](_0x3e9c5b['HTxqA'], _0x3e9c5b['HTxqA'])) {
                        $['logErr'](e, _0x96748a);
                    } else {
                        if (_0x348563) {
                            if (_0x3e9c5b['SplqW'](_0x3e9c5b['dkySv'], _0x3e9c5b['dkySv'])) {
                                console['log']('开通场景结果:' + _0x348563 + '\x0a');
                            } else {
                                _0x57c1eb['TuUvb'](_0x210153);
                            }
                        }
                    }
                } catch (_0x5d321d) {
                    $['logErr'](_0x5d321d, _0x96748a);
                } finally {
                    if (_0x3e9c5b['SplqW'](_0x3e9c5b['wndaF'], _0x3e9c5b['wndaF'])) {
                        _0x3e9c5b['HnSJg'](_0x210153);
                    } else {
                        const {
                            iRet,
                            dwMoney,
                            sErrMsg,
                            strPin
                        } = JSON['parse'](_0x348563);
                        $['log']('\x0a【' + sceneList[_key]['strSceneName'] + '】👬好友: ' + (_0x57c1eb['VjeEh'](sErrMsg, _0x57c1eb['EsbxR']) ? '获取超级助力财富值：¥ ' + _0x57c1eb['dmUZG'](dwMoney, 0x0) : sErrMsg) + ' \x0a' + ($['showLog'] ? _0x348563 : ''));
                    }
                }
            });
        } else {
            if (data) {
                console['log']('开通场景结果:' + data + '\x0a');
            }
        }
    });
}

function taskUrl(_0xa89dfb, _0x13a896) {
    var _0x264910 = {
        'MSZPQ': '*/*',
        'eLTMv': 'keep-alive',
        'HOuBz': 'https://st.jingxi.com/fortune_island/index.html?ptag=138631.26.55',
        'RGoln': 'gzip, deflate, br',
        'OtQkN': 'm.jingxi.com',
        'wQUeV': function(_0x589d2f, _0x2d81e6) {
            return _0x589d2f + _0x2d81e6;
        },
        'nmoPt': function(_0x96003, _0x70475a) {
            return _0x96003 * _0x70475a;
        },
        'jeLZo': 'zh-cn'
    };
    return {
        'url': JD_API_HOST + 'jxcfd/' + _0xa89dfb + '?strZone=jxcfd&bizCode=jxcfd&source=jxcfd&dwEnv=7&_cfd_t=' + Date['now']() + '&ptag=138631.26.55&' + _0x13a896 + '&_ste=1&_=' + Date['now']() + '&sceneval=2&g_login_type=1&g_ty=ls',
        'headers': {
            'Cookie': cookie,
            'Accept': _0x264910['MSZPQ'],
            'Connection': _0x264910['eLTMv'],
            'Referer': _0x264910['HOuBz'],
            'Accept-Encoding': _0x264910['RGoln'],
            'Host': _0x264910['OtQkN'],
            'User-Agent': 'jdpingou;iPhone;3.15.2;14.2.1;ea00763447803eb0f32045dcba629c248ea53bb3;network/wifi;model/iPhone13,2;appBuild/100365;ADID/00000000-0000-0000-0000-000000000000;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/0;hasOCPay/0;supportBestPay/0;session/' + _0x264910['wQUeV'](_0x264910['nmoPt'](Math['random'], 0x62), 0x1) + ';pap/JA2015_311210;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
            'Accept-Language': _0x264910['jeLZo']
        },
        'timeout': 0x2710
    };
}

function taskListUrl(_0x41e263, _0xa71514) {
    var _0x3d1a3a = {
        'eBGMT': '*/*',
        'lmgBF': 'keep-alive',
        'btzBi': 'https://st.jingxi.com/fortune_island/index.html?ptag=138631.26.55',
        'WtpUB': 'gzip, deflate, br',
        'BXUQd': 'm.jingxi.com',
        'vkUxE': function(_0x4cc1ec, _0x541af9) {
            return _0x4cc1ec + _0x541af9;
        },
        'iynaE': function(_0x58d94b, _0x1f2537) {
            return _0x58d94b * _0x1f2537;
        },
        'erUmP': 'zh-cn'
    };
    return {
        'url': JD_API_HOST + 'newtasksys/newtasksys_front/' + _0x41e263 + '?strZone=jxcfd&bizCode=jxcfd&source=jxcfd&dwEnv=7&_cfd_t=' + Date['now']() + '&ptag=138631.26.55&' + _0xa71514 + '&_ste=1&_=' + Date['now']() + '&sceneval=2&g_login_type=1&g_ty=ls',
        'headers': {
            'Cookie': cookie,
            'Accept': _0x3d1a3a['eBGMT'],
            'Connection': _0x3d1a3a['lmgBF'],
            'Referer': _0x3d1a3a['btzBi'],
            'Accept-Encoding': _0x3d1a3a['WtpUB'],
            'Host': _0x3d1a3a['BXUQd'],
            'User-Agent': 'jdpingou;iPhone;3.15.2;14.2.1;ea00763447803eb0f32045dcba629c248ea53bb3;network/wifi;model/iPhone13,2;appBuild/100365;ADID/00000000-0000-0000-0000-000000000000;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/0;hasOCPay/0;supportBestPay/0;session/' + _0x3d1a3a['vkUxE'](_0x3d1a3a['iynaE'](Math['random'], 0x62), 0x1) + ';pap/JA2015_311210;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
            'Accept-Language': _0x3d1a3a['erUmP']
        },
        'timeout': 0x2710
    };
}

function showMsg() {
    var _0x4062af = {
        'wETEM': function(_0x40dd04, _0x2a75b2) {
            return _0x40dd04(_0x2a75b2);
        },
        'rWtdk': function(_0x58c441) {
            return _0x58c441();
        },
        'ZqjQX': function(_0x1d8011, _0x14e3cf) {
            return _0x1d8011 == _0x14e3cf;
        },
        'myAmj': 'success',
        'qWMDw': function(_0x381ddf, _0x1b4af4) {
            return _0x381ddf || _0x1b4af4;
        },
        'OPpfU': function(_0x4b16cd, _0x23e522) {
            return _0x4b16cd === _0x23e522;
        },
        'ELmky': function(_0x49adc2, _0x5d892d) {
            return _0x49adc2 === _0x5d892d;
        },
        'TbeFd': 'GwdyA',
        'IoBYV': 'oSrJN',
        'gPGKq': function(_0x447c5e, _0x10fd01) {
            return _0x447c5e !== _0x10fd01;
        },
        'VYMLH': 'ZWMty',
        'TEncl': function(_0x34a2e1, _0x316bac) {
            return _0x34a2e1 === _0x316bac;
        },
        'hMUJj': 'OKxTl',
        'IOhud': 'HH:mm',
        'tTAwI': 'Snjom'
    };
    return new Promise(async _0x48f638 => {
        var _0x520714 = {
            'CGNVo': function(_0xc9ed0, _0x482de0) {
                return _0x4062af['OPpfU'](_0xc9ed0, _0x482de0);
            },
            'XbRXG': function(_0x1190a4, _0x10d044) {
                return _0x4062af['OPpfU'](_0x1190a4, _0x10d044);
            }
        };
        if (_0x4062af['ELmky'](_0x4062af['TbeFd'], _0x4062af['IoBYV'])) {
            try {
                const {
                    sErrMsg
                } = JSON['parse'](data);
                $['log']('\n【🏝寻宝大作战】' + sErrMsg + '\x0a' + ($['showLog'] ? data : ''));
                _0x4062af['wETEM'](_0x48f638, 0x0);
            } catch (_0x119c3a) {
                $['logErr'](_0x119c3a, resp);
            } finally {
                _0x4062af['rWtdk'](_0x48f638);
            }
        } else {
            if ($['result']['length']) {
                if (_0x4062af['gPGKq'](_0x4062af['VYMLH'], _0x4062af['VYMLH'])) {
                    const {
                        dwMoney,
                        iRet,
                        sErrMsg,
                        strPin
                    } = JSON['parse'](data);
                    $['log']('\x0a【' + sceneList[_key]['strSceneName'] + '】👬好友: ' + (_0x4062af['ZqjQX'](sErrMsg, _0x4062af['myAmj']) ? '获取普通助力财富值：¥ ' + _0x4062af['qWMDw'](dwMoney, 0x0) : sErrMsg) + ' \x0a' + ($['showLog'] ? data : ''));
                } else {
                    if ($['notifyTime']) {
                        if (_0x4062af['TEncl'](_0x4062af['hMUJj'], _0x4062af['hMUJj'])) {
                            const _0x829650 = $['notifyTime']['split'](',')['map'](_0x509484 => _0x509484['split'](':'));
                            const _0x147bea = $['time'](_0x4062af['IOhud'])['split'](':');
                            $['log']('\x0a' + JSON['stringify'](_0x829650));
                            $['log']('\x0a' + JSON['stringify'](_0x147bea));
                            if (_0x829650['some'](_0x5e8e1c => _0x5e8e1c[0x0] === _0x147bea[0x0] && (!_0x5e8e1c[0x1] || _0x5e8e1c[0x1] === _0x147bea[0x1]))) {
                                $['msg']($['name'], '', '' + $['result']['join']('\x0a'));
                            }
                        } else {
                            if (data) {
                                console['log']('随机取0个码放到您固定的互助码后面(不影响已有固定互助)');
                                data = JSON['parse'](data);
                            }
                        }
                    } else {
                        if (_0x4062af['TEncl'](_0x4062af['tTAwI'], _0x4062af['tTAwI'])) {
                            $['msg']($['name'], '', '' + $['result']['join']('\x0a'));
                        } else {
                            console['log']('\n普通助力(招工)结果:' + data);
                            const {
                                iRet
                            } = JSON['parse'](data);
                            if (_0x520714['CGNVo'](iRet, 0x7d5) || _0x520714['XbRXG'](iRet, 0x270f)) $['canHelp'] = ![];
                        }
                    }
                    if ($['isNode']() && process['env']['CFD_NOTIFY_CONTROL']) await notify['sendNotify']($['name'] + ' - 账号' + $['index'] + ' - ' + $['nickName'], '' + $['result']['join']('\x0a'));
                }
            }
            _0x4062af['rWtdk'](_0x48f638);
        }
    });
}

function TotalBean() {
    var _0x79a8f1 = {
        'bcRmA': function(_0x50ab28, _0x214920) {
            return _0x50ab28 === _0x214920;
        },
        'FufLK': 'wnwIf',
        'MfGmh': function(_0xf6677, _0x286016) {
            return _0xf6677 === _0x286016;
        },
        'Erboa': 'retcode',
        'qKbby': 'base',
        'bmJLP': 'zIMhY',
        'oOFCC': 'QSvXS',
        'RAOnF': function(_0x55dfa7) {
            return _0x55dfa7();
        },
        'vsUlc': 'application/json,text/plain, */*',
        'dYwzk': 'application/x-www-form-urlencoded',
        'onjDZ': 'gzip, deflate, br',
        'GyOJU': 'zh-cn',
        'cpDRL': 'keep-alive',
        'tkYba': 'https://wqs.jd.com/my/jingdou/my.shtml?sceneval=2',
        'pkTAv': function(_0x1f055c, _0x41de0c) {
            return _0x1f055c(_0x41de0c);
        },
        'BRUiX': './USER_AGENTS',
        'WZihS': 'JDUA',
        'beJQl': 'jdapp;iPhone;9.2.2;14.2;%E4%BA%AC%E4%B8%9C/9.2.2 CFNetwork/1206 Darwin/20.1.0'
    };
    return new Promise(async _0x144d43 => {
        var _0x1afcc8 = {
            'VzJxk': function(_0x56f94f) {
                return _0x79a8f1['RAOnF'](_0x56f94f);
            }
        };
        const _0x48a095 = {
            'url': 'https://wq.jd.com/user/info/QueryJDUserInfo?sceneval=2',
            'headers': {
                'Accept': _0x79a8f1['vsUlc'],
                'Content-Type': _0x79a8f1['dYwzk'],
                'Accept-Encoding': _0x79a8f1['onjDZ'],
                'Accept-Language': _0x79a8f1['GyOJU'],
                'Connection': _0x79a8f1['cpDRL'],
                'Cookie': cookie,
                'Referer': _0x79a8f1['tkYba'],
                'User-Agent': $['isNode']() ? process['env']['JD_USER_AGENT'] ? process['env']['JD_USER_AGENT'] : _0x79a8f1['pkTAv'](require, _0x79a8f1['BRUiX'])['USER_AGENT'] : $['getdata'](_0x79a8f1['WZihS']) ? $['getdata'](_0x79a8f1['WZihS']) : _0x79a8f1['beJQl']
            }
        };
        $['post'](_0x48a095, (_0x5704d9, _0x4b7495, _0x39485c) => {
            try {
                if (_0x79a8f1['bcRmA'](_0x79a8f1['FufLK'], _0x79a8f1['FufLK'])) {
                    if (_0x5704d9) {
                        console['log']('' + JSON['stringify'](_0x5704d9));
                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                    } else {
                        if (_0x39485c) {
                            _0x39485c = JSON['parse'](_0x39485c);
                            if (_0x79a8f1['MfGmh'](_0x39485c[_0x79a8f1['Erboa']], 0xd)) {
                                $['isLogin'] = ![];
                                return;
                            }
                            if (_0x79a8f1['MfGmh'](_0x39485c[_0x79a8f1['Erboa']], 0x0)) {
                                $['nickName'] = _0x39485c[_0x79a8f1['qKbby']] && _0x39485c[_0x79a8f1['qKbby']]['nickname'] || $['UserName'];
                            } else {
                                $['nickName'] = $['UserName'];
                            }
                        } else {
                            if (_0x79a8f1['MfGmh'](_0x79a8f1['bmJLP'], _0x79a8f1['oOFCC'])) {
                                Object['keys'](shareCodes)['forEach'](_0x2c6499 => {
                                    if (shareCodes[_0x2c6499]) {
                                        $['shareCodesArr']['push'](shareCodes[_0x2c6499]);
                                    }
                                });
                            } else {
                                console['log']('京东服务器返回空数据');
                            }
                        }
                    }
                } else {
                    _0x1afcc8['VzJxk'](_0x144d43);
                }
            } catch (_0x2c9795) {
                $['logErr'](_0x2c9795, _0x4b7495);
            } finally {
                _0x79a8f1['RAOnF'](_0x144d43);
            }
        });
    });
}

function readShareCode() {
    var _0x4bfc61 = {
        'vjAlU': function(_0x5bf838) {
            return _0x5bf838();
        },
        'ZtLtH': function(_0x2ba7ea, _0x725345) {
            return _0x2ba7ea == _0x725345;
        },
        'fWXJA': 'string',
        'QBsul': '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie',
        'jxoWx': function(_0x2895fd, _0x5c6017) {
            return _0x2895fd(_0x5c6017);
        },
        'bvSJq': function(_0x5c838b, _0x543a8c) {
            return _0x5c838b !== _0x543a8c;
        },
        'rHLtN': '活动太火爆了',
        'iUKLt': '任务进行中或者未到任务时间',
        'fawYg': function(_0x39cb61, _0x3f28ec) {
            return _0x39cb61 === _0x3f28ec;
        },
        'eGKkI': 'ORquy',
        'URIQC': 'mSlNH',
        'MPTap': 'IZzNl',
        'GpSrE': 'sDkYO',
        'EoUsc': 'tVFaT',
        'ccTrJ': function(_0x51508a, _0x43fa3e) {
            return _0x51508a !== _0x43fa3e;
        },
        'uWkCf': 'KgBRQ',
        'ijmPr': 'KYyxh',
        'xnxvU': function(_0x13c55d, _0x258b83) {
            return _0x13c55d(_0x258b83);
        },
        'fEicn': 'YnfIz',
        'sMaTe': 'jURZm'
    };
    console['log']('开始');
    return new Promise(async _0x3282db => {
        var _0x487e6c = {
            'ZZbiv': function(_0x5d70be) {
                return _0x4bfc61['vjAlU'](_0x5d70be);
            },
            'cHViJ': function(_0x284b44, _0x4c46fb) {
                return _0x4bfc61['ZtLtH'](_0x284b44, _0x4c46fb);
            },
            'YBsaJ': _0x4bfc61['fWXJA'],
            'VKpmM': _0x4bfc61['QBsul'],
            'qysDI': function(_0x20c5f4, _0x297671) {
                return _0x4bfc61['jxoWx'](_0x20c5f4, _0x297671);
            },
            'mxjQk': function(_0x4bd2d4, _0x5c746f) {
                return _0x4bfc61['jxoWx'](_0x4bd2d4, _0x5c746f);
            },
            'anJDK': function(_0x32ece3, _0x312c05) {
                return _0x4bfc61['bvSJq'](_0x32ece3, _0x312c05);
            },
            'xdLsH': _0x4bfc61['rHLtN'],
            'fppNY': _0x4bfc61['iUKLt'],
            'MxINC': function(_0x4e0864, _0x538953) {
                return _0x4bfc61['fawYg'](_0x4e0864, _0x538953);
            },
            'cHLCx': function(_0x16c1b1, _0x19c508) {
                return _0x4bfc61['fawYg'](_0x16c1b1, _0x19c508);
            },
            'ynyGP': _0x4bfc61['eGKkI'],
            'ONHmc': _0x4bfc61['URIQC'],
            'HIftD': _0x4bfc61['MPTap'],
            'eeMoB': _0x4bfc61['GpSrE'],
            'eUswG': _0x4bfc61['EoUsc'],
            'EekeZ': function(_0x1b2282, _0x1c7dde) {
                return _0x4bfc61['ccTrJ'](_0x1b2282, _0x1c7dde);
            },
            'aHuod': _0x4bfc61['uWkCf'],
            'cdHUT': _0x4bfc61['ijmPr'],
            'AYDBc': function(_0x5dd936, _0xb55f7c) {
                return _0x4bfc61['xnxvU'](_0x5dd936, _0xb55f7c);
            }
        };
        if (_0x4bfc61['fawYg'](_0x4bfc61['fEicn'], _0x4bfc61['sMaTe'])) {
            _0x487e6c['ZZbiv'](_0x3282db);
        } else {
            $['get']({
                'url': 'http://jd.turinglabs.net/api/v2/jd/jxcfd/read/0/',
                'timeout': 0x2710
            }, (_0x436d4c, _0x27dcc1, _0x16aebe) => {
                var _0x160f03 = {
                    'dxGHn': function(_0x4e1519, _0x52080e) {
                        return _0x487e6c['anJDK'](_0x4e1519, _0x52080e);
                    },
                    'AucRX': _0x487e6c['xdLsH'],
                    'RcpFI': _0x487e6c['fppNY'],
                    'DVlmA': function(_0x126254, _0x306310) {
                        return _0x487e6c['mxjQk'](_0x126254, _0x306310);
                    },
                    'qZEIb': function(_0x37cefc, _0x3305da) {
                        return _0x487e6c['MxINC'](_0x37cefc, _0x3305da);
                    }
                };
                try {
                    if (_0x436d4c) {
                        if (_0x487e6c['cHLCx'](_0x487e6c['ynyGP'], _0x487e6c['ynyGP'])) {
                            console['log']('' + JSON['stringify'](_0x436d4c));
                            console['log']($['name'] + ' API请求失败，请检查网路重试');
                        } else {
                            if (_0x487e6c['cHViJ'](typeof str, _0x487e6c['YBsaJ'])) {
                                try {
                                    return JSON['parse'](str);
                                } catch (_0x3e88f8) {
                                    console['log'](_0x3e88f8);
                                    $['msg']($['name'], '', _0x487e6c['VKpmM']);
                                    return [];
                                }
                            }
                        }
                    } else {
                        if (_0x487e6c['anJDK'](_0x487e6c['ONHmc'], _0x487e6c['HIftD'])) {
                            if (_0x16aebe) {
                                if (_0x487e6c['cHLCx'](_0x487e6c['eeMoB'], _0x487e6c['eUswG'])) {
                                    let _0x4a6623 = _0x487e6c['qysDI'](uuid, 0x28);
                                    let _0x430fa5 = (+new Date())['toString']();
                                    if (!cookie['match'](/pt_pin=(.+?);/)) {
                                        console['log']('此账号cookie填写不规范,你的pt_pin=xxx后面没分号(;)\n');
                                        _0x487e6c['mxjQk'](_0x3282db, null);
                                    }
                                    let _0x4f0766 = cookie['match'](/pt_pin=(.+?);/)[0x1];
                                    let _0x5b603c = $['md5']('' + _0x487e6c['mxjQk'](decodeURIComponent, _0x4f0766) + _0x430fa5 + _0x4a6623 + 'tPOamqCuk9NLgVPAljUyIHcPRmKlVxDy')['toString']();
                                    _0x487e6c['mxjQk'](_0x3282db, {
                                        'timestamp': _0x430fa5,
                                        'phoneid': _0x4a6623,
                                        'farm_jstoken': _0x5b603c
                                    });
                                } else {
                                    console['log']('随机取0个码放到您固定的互助码后面(不影响已有固定互助)');
                                    _0x16aebe = JSON['parse'](_0x16aebe);
                                }
                            }
                        } else {
                            const {
                                msg,
                                ret
                            } = JSON['parse'](_0x16aebe);
                            $['log']('\x0a' + taskName + '【做日常任务】：' + (_0x160f03['dxGHn'](msg['indexOf'](_0x160f03['AucRX']), -0x1) ? _0x160f03['RcpFI'] : msg) + '\x0a' + ($['showLog'] ? _0x16aebe : ''));
                            _0x160f03['DVlmA'](_0x3282db, _0x160f03['qZEIb'](ret, 0x0));
                        }
                    }
                } catch (_0xdec479) {
                    $['logErr'](_0xdec479, _0x27dcc1);
                } finally {
                    if (_0x487e6c['EekeZ'](_0x487e6c['aHuod'], _0x487e6c['cdHUT'])) {
                        _0x487e6c['AYDBc'](_0x3282db, _0x16aebe);
                    } else {
                        _0x487e6c['ZZbiv'](_0x3282db);
                    }
                }
            });
            await $['wait'](0x2710);
            _0x4bfc61['vjAlU'](_0x3282db);
        }
    });
}

function shareCodesFormat() {
    var _0x56b256 = {
        'xmlSF': '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取',
        'tgdeH': 'https://bean.m.jd.com/bean/signIndex.action',
        'WagQB': function(_0x562014, _0x233061) {
            return _0x562014 !== _0x233061;
        },
        'FphgP': 'BjWMK',
        'iJteQ': function(_0x407100, _0x5a6d21) {
            return _0x407100 - _0x5a6d21;
        },
        'XusZk': function(_0x4eb301, _0x2841a3) {
            return _0x4eb301 - _0x2841a3;
        },
        'DVvKJ': function(_0x4db6fb) {
            return _0x4db6fb();
        },
        'LNssV': function(_0x44d5a8, _0x3c0d6d) {
            return _0x44d5a8 === _0x3c0d6d;
        },
        'PaMGv': function(_0x211927, _0x4e03e0) {
            return _0x211927 !== _0x4e03e0;
        },
        'JEuDM': 'iPOsD',
        'JXWPF': 'sZDwv',
        'fcARV': 'F45CB4F07997DFE748E5656521A9034446A1568F6950206B0D44A5664662275D'
    };
    return new Promise(async _0x428fed => {
        if (_0x56b256['WagQB'](_0x56b256['FphgP'], _0x56b256['FphgP'])) {
            $['msg']($['name'], _0x56b256['xmlSF'], _0x56b256['tgdeH'], {
                'open-url': _0x56b256['tgdeH']
            });
            return;
        } else {
            $['newShareCodes'] = [];
            if ($['shareCodesArr'][_0x56b256['iJteQ']($['index'], 0x1)]) {
                $['newShareCodes'] = $['shareCodesArr'][_0x56b256['XusZk']($['index'], 0x1)]['split']('@');
            } else {
                console['log']('由于您第' + $['index'] + '个京东账号未提供shareCode,将采纳本脚本自带的助力码\n');
                $['newShareCodes'] = $['strMyShareIds'];
            }
            const _0x36f790 = await _0x56b256['DVvKJ'](readShareCode);
            if (_0x36f790 && _0x56b256['LNssV'](_0x36f790['code'], 0xc8)) {
                if (_0x56b256['PaMGv'](_0x56b256['JEuDM'], _0x56b256['JXWPF'])) {
                    $['newShareCodes'] = [...new Set([...$['newShareCodes'], ...$['strMyShareIds'], _0x56b256['fcARV'], ..._0x36f790['data'] || []])];
                } else {
                    $['logErr'](e, resp);
                }
            }
            console['log']('第' + $['index'] + '个京东账号将要助力的好友' + JSON['stringify']($['newShareCodes']));
            _0x56b256['DVvKJ'](_0x428fed);
        }
    });
}

function requireConfig() {
    var _0x30a924 = {
        'nJucb': function(_0x413066, _0x1e68cc) {
            return _0x413066(_0x1e68cc);
        },
        'ZtgNn': 'api.m.jd.com',
        'UPJpv': 'application/json, text/plain, */*',
        'dEdyc': 'https://h5.m.jd.com',
        'ijvvy': 'jdapp;iPhone;9.3.5;14.2;53f4d9c70c1c81f1c8769d2fe2fef0190a3f60d2;network/wifi;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone10,2;addressid/137923973;supportBestPay/0;appBuild/167515;jdSupportDarkMode/0;pv/2217.74;apprpd/MyJD_PersonalSpace;ref/MySpace;psq/8;ads/;psn/53f4d9c70c1c81f1c8769d2fe2fef0190a3f60d2|8703;jdv/0|kong|t_1000170135|tuiguang|notset|1610674234917|1610674234;adk/;app_device/IOS;pap/JA2015_311210|9.3.5|IOS 14.2;Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
        'pPZRu': 'zh-cn',
        'aYGIQ': 'https://h5.m.jd.com/babelDiy/Zeus/25C6dc6HY6if6DT7e58A1pi2Vxe4/index.html?activityId=73cf1fe89d33433d9cc8688d1892d432&assistId=R2u2OCB9eEbcCVB_CiVKhg',
        'KskzI': function(_0xda6b8a, _0x3edb84) {
            return _0xda6b8a || _0x3edb84;
        },
        'rIGGF': function(_0x34bb76, _0x236d81) {
            return _0x34bb76 === _0x236d81;
        },
        'wkpaX': function(_0x1869ac, _0x2e6a73) {
            return _0x1869ac === _0x2e6a73;
        },
        'xtuRi': function(_0x373663) {
            return _0x373663();
        },
        'Icxra': 'astIu',
        'wGowZ': 'FqxTw',
        'CGveg': function(_0x1729ca, _0xff6b6e) {
            return _0x1729ca !== _0xff6b6e;
        },
        'GNPiV': 'HMCAM',
        'TtsUz': 'izBHe',
        'LyWdz': 'FfCuO',
        'GFLNP': 'kuKqO',
        'kwHcT': 'yzmHh',
        'UltRe': function(_0xd74613, _0x23b521) {
            return _0xd74613 > _0x23b521;
        },
        'npfkd': function(_0x53bc7b, _0x54ef72) {
            return _0x53bc7b !== _0x54ef72;
        },
        'khoEr': 'ttxjX',
        'orXyK': 'BnzcP',
        'ICund': 'UVfBp',
        'mZDOx': function(_0x149501, _0x4c643a) {
            return _0x149501 !== _0x4c643a;
        },
        'NOsgU': 'pUkZd',
        'zmAoQ': 'jd_jxCFD'
    };
    return new Promise(_0x467029 => {
        var _0x22f8e1 = {
            'UGAJe': function(_0x2a83f0, _0x5900f7) {
                return _0x30a924['rIGGF'](_0x2a83f0, _0x5900f7);
            },
            'DRLnG': function(_0x548769, _0x1c54c5) {
                return _0x30a924['wkpaX'](_0x548769, _0x1c54c5);
            },
            'xJBFV': function(_0x54f4d1) {
                return _0x30a924['xtuRi'](_0x54f4d1);
            },
            'epOOl': function(_0x1a72f2) {
                return _0x30a924['xtuRi'](_0x1a72f2);
            },
            'UXCsl': _0x30a924['Icxra'],
            'yUqhP': _0x30a924['wGowZ'],
            'sVCHa': function(_0x46f5c3, _0xe10610) {
                return _0x30a924['CGveg'](_0x46f5c3, _0xe10610);
            },
            'WkcYw': _0x30a924['GNPiV'],
            'zYfht': _0x30a924['TtsUz'],
            'vDxMm': function(_0x595bb8, _0x245c20) {
                return _0x30a924['nJucb'](_0x595bb8, _0x245c20);
            }
        };
        if (_0x30a924['wkpaX'](_0x30a924['LyWdz'], _0x30a924['LyWdz'])) {
            console['log']('开始获取' + $['name'] + '配置文件\n');
            let _0x57d69e = [];
            if ($['isNode']() && process['env']['JDCFD_SHARECODES']) {
                if (_0x30a924['wkpaX'](_0x30a924['GFLNP'], _0x30a924['kwHcT'])) {
                    _0x57d69e = process['env']['JDCFD_SHARECODES']['split']('\x0a');
                } else {
                    if (_0x30a924['UltRe'](process['env']['JDCFD_SHARECODES']['indexOf']('\x0a'), -0x1)) {
                        if (_0x30a924['npfkd'](_0x30a924['khoEr'], _0x30a924['khoEr'])) {
                            $['logErr'](e, resp);
                        } else {
                            _0x57d69e = process['env']['JDCFD_SHARECODES']['split']('\x0a');
                        }
                    } else {
                        if (_0x30a924['wkpaX'](_0x30a924['orXyK'], _0x30a924['ICund'])) {
                            const _0x4bd04c = {
                                'url': 'https://api.m.jd.com/client.action?clientVersion=9.3.5&client=wh5&functionId=smtfission_assist&appid=smtFission&body=' + _0x30a924['nJucb'](escape, JSON['stringify'](vo)),
                                'headers': {
                                    'Host': _0x30a924['ZtgNn'],
                                    'accept': _0x30a924['UPJpv'],
                                    'origin': _0x30a924['dEdyc'],
                                    'user-agent': _0x30a924['ijvvy'],
                                    'accept-language': _0x30a924['pPZRu'],
                                    'referer': _0x30a924['aYGIQ'],
                                    'Cookie': cookie
                                },
                                'timeout': 0x2710
                            };
                            $['get'](_0x4bd04c);
                        } else {
                            _0x57d69e = process['env']['JDCFD_SHARECODES']['split']('&');
                        }
                    }
                }
            }
            $['shareCodesArr'] = [];
            if ($['isNode']()) {
                Object['keys'](_0x57d69e)['forEach'](_0x50c49f => {
                    var _0x1c8997 = {
                        'JaklL': function(_0x4022a8) {
                            return _0x22f8e1['epOOl'](_0x4022a8);
                        }
                    };
                    if (_0x22f8e1['DRLnG'](_0x22f8e1['UXCsl'], _0x22f8e1['yUqhP'])) {
                        try {
                            console['log']('\n普通助力(招工)结果:' + data);
                            const {
                                iRet
                            } = JSON['parse'](data);
                            if (_0x22f8e1['UGAJe'](iRet, 0x7d5) || _0x22f8e1['DRLnG'](iRet, 0x270f)) $['canHelp'] = ![];
                        } catch (_0x165fc4) {} finally {
                            _0x22f8e1['xJBFV'](_0x467029);
                        }
                    } else {
                        if (_0x57d69e[_0x50c49f]) {
                            if (_0x22f8e1['sVCHa'](_0x22f8e1['WkcYw'], _0x22f8e1['zYfht'])) {
                                $['shareCodesArr']['push'](_0x57d69e[_0x50c49f]);
                            } else {
                                _0x1c8997['JaklL'](_0x467029);
                            }
                        }
                    }
                });
            } else {
                if (_0x30a924['mZDOx'](_0x30a924['NOsgU'], _0x30a924['NOsgU'])) {
                    _0x22f8e1['vDxMm'](_0x467029, data);
                } else {
                    if ($['getdata'](_0x30a924['zmAoQ'])) $['shareCodesArr'] = $['getdata'](_0x30a924['zmAoQ'])['split']('\x0a')['filter'](_0x4c45b0 => !!_0x4c45b0);
                    console['log']('\nBoxJs设置的京喜财富岛邀请码:' + $['getdata'](_0x30a924['zmAoQ']) + '\x0a');
                }
            }
            console['log']('您提供了' + $['shareCodesArr']['length'] + '个账号的' + $['name'] + '助力码\n');
            _0x30a924['xtuRi'](_0x467029);
        } else {
            const {
                iRet,
                dwExpericnce,
                sErrMsg
            } = JSON['parse'](data);
            $['log']('\x0a【' + place + '】🎁寻宝：' + sErrMsg + ' ，获取随机奖励：¥ ' + _0x30a924['KskzI'](dwExpericnce, 0x0) + ' \x0a' + ($['showLog'] ? data : ''));
            _0x30a924['nJucb'](_0x467029, iRet);
        }
    });
}

function jsonParse(_0x4ac4e9) {
    var _0x1276cc = {
        'ZbLEj': function(_0x71f923, _0xb048a) {
            return _0x71f923 !== _0xb048a;
        },
        'sNMba': '活动太火爆了',
        'XfXaX': '任务进行中或者未到任务时间',
        'lSFvJ': function(_0x20488d, _0x31c638) {
            return _0x20488d(_0x31c638);
        },
        'bVozl': function(_0x24aec9, _0x5491af) {
            return _0x24aec9 === _0x5491af;
        },
        'SDkZm': function(_0x495828) {
            return _0x495828();
        },
        'kKgIq': function(_0x210036, _0x5ac7a8) {
            return _0x210036 == _0x5ac7a8;
        },
        'SPXLY': 'string',
        'rZnOz': function(_0x317456, _0xb65531) {
            return _0x317456 !== _0xb65531;
        },
        'PaEgj': 'VbYLb',
        'IwAJi': '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie'
    };
    if (_0x1276cc['kKgIq'](typeof _0x4ac4e9, _0x1276cc['SPXLY'])) {
        try {
            return JSON['parse'](_0x4ac4e9);
        } catch (_0x3674e2) {
            if (_0x1276cc['rZnOz'](_0x1276cc['PaEgj'], _0x1276cc['PaEgj'])) {
                try {
                    const {
                        msg,
                        ret
                    } = JSON['parse'](data);
                    $['log']('\x0a' + taskName + '【做日常任务】：' + (_0x1276cc['ZbLEj'](msg['indexOf'](_0x1276cc['sNMba']), -0x1) ? _0x1276cc['XfXaX'] : msg) + '\x0a' + ($['showLog'] ? data : ''));
                    _0x1276cc['lSFvJ'](resolve, _0x1276cc['bVozl'](ret, 0x0));
                } catch (_0x1cbaae) {
                    $['logErr'](_0x1cbaae, resp);
                } finally {
                    _0x1276cc['SDkZm'](resolve);
                }
            } else {
                console['log'](_0x3674e2);
                $['msg']($['name'], '', _0x1276cc['IwAJi']);
                return [];
            }
        }
    }
};
_0xodY = 'jsjiami.com.v6'

!function(n){"use strict";function t(n,t){var r=(65535&n)+(65535&t);return(n>>16)+(t>>16)+(r>>16)<<16|65535&r}function r(n,t){return n<<t|n>>>32-t}function e(n,e,o,u,c,f){return t(r(t(t(e,n),t(u,f)),c),o)}function o(n,t,r,o,u,c,f){return e(t&r|~t&o,n,t,u,c,f)}function u(n,t,r,o,u,c,f){return e(t&o|r&~o,n,t,u,c,f)}function c(n,t,r,o,u,c,f){return e(t^r^o,n,t,u,c,f)}function f(n,t,r,o,u,c,f){return e(r^(t|~o),n,t,u,c,f)}function i(n,r){n[r>>5]|=128<<r%32,n[14+(r+64>>>9<<4)]=r;var e,i,a,d,h,l=1732584193,g=-271733879,v=-1732584194,m=271733878;for(e=0;e<n.length;e+=16)i=l,a=g,d=v,h=m,g=f(g=f(g=f(g=f(g=c(g=c(g=c(g=c(g=u(g=u(g=u(g=u(g=o(g=o(g=o(g=o(g,v=o(v,m=o(m,l=o(l,g,v,m,n[e],7,-680876936),g,v,n[e+1],12,-389564586),l,g,n[e+2],17,606105819),m,l,n[e+3],22,-1044525330),v=o(v,m=o(m,l=o(l,g,v,m,n[e+4],7,-176418897),g,v,n[e+5],12,1200080426),l,g,n[e+6],17,-1473231341),m,l,n[e+7],22,-45705983),v=o(v,m=o(m,l=o(l,g,v,m,n[e+8],7,1770035416),g,v,n[e+9],12,-1958414417),l,g,n[e+10],17,-42063),m,l,n[e+11],22,-1990404162),v=o(v,m=o(m,l=o(l,g,v,m,n[e+12],7,1804603682),g,v,n[e+13],12,-40341101),l,g,n[e+14],17,-1502002290),m,l,n[e+15],22,1236535329),v=u(v,m=u(m,l=u(l,g,v,m,n[e+1],5,-165796510),g,v,n[e+6],9,-1069501632),l,g,n[e+11],14,643717713),m,l,n[e],20,-373897302),v=u(v,m=u(m,l=u(l,g,v,m,n[e+5],5,-701558691),g,v,n[e+10],9,38016083),l,g,n[e+15],14,-660478335),m,l,n[e+4],20,-405537848),v=u(v,m=u(m,l=u(l,g,v,m,n[e+9],5,568446438),g,v,n[e+14],9,-1019803690),l,g,n[e+3],14,-187363961),m,l,n[e+8],20,1163531501),v=u(v,m=u(m,l=u(l,g,v,m,n[e+13],5,-1444681467),g,v,n[e+2],9,-51403784),l,g,n[e+7],14,1735328473),m,l,n[e+12],20,-1926607734),v=c(v,m=c(m,l=c(l,g,v,m,n[e+5],4,-378558),g,v,n[e+8],11,-2022574463),l,g,n[e+11],16,1839030562),m,l,n[e+14],23,-35309556),v=c(v,m=c(m,l=c(l,g,v,m,n[e+1],4,-1530992060),g,v,n[e+4],11,1272893353),l,g,n[e+7],16,-155497632),m,l,n[e+10],23,-1094730640),v=c(v,m=c(m,l=c(l,g,v,m,n[e+13],4,681279174),g,v,n[e],11,-358537222),l,g,n[e+3],16,-722521979),m,l,n[e+6],23,76029189),v=c(v,m=c(m,l=c(l,g,v,m,n[e+9],4,-640364487),g,v,n[e+12],11,-421815835),l,g,n[e+15],16,530742520),m,l,n[e+2],23,-995338651),v=f(v,m=f(m,l=f(l,g,v,m,n[e],6,-198630844),g,v,n[e+7],10,1126891415),l,g,n[e+14],15,-1416354905),m,l,n[e+5],21,-57434055),v=f(v,m=f(m,l=f(l,g,v,m,n[e+12],6,1700485571),g,v,n[e+3],10,-1894986606),l,g,n[e+10],15,-1051523),m,l,n[e+1],21,-2054922799),v=f(v,m=f(m,l=f(l,g,v,m,n[e+8],6,1873313359),g,v,n[e+15],10,-30611744),l,g,n[e+6],15,-1560198380),m,l,n[e+13],21,1309151649),v=f(v,m=f(m,l=f(l,g,v,m,n[e+4],6,-145523070),g,v,n[e+11],10,-1120210379),l,g,n[e+2],15,718787259),m,l,n[e+9],21,-343485551),l=t(l,i),g=t(g,a),v=t(v,d),m=t(m,h);return[l,g,v,m]}function a(n){var t,r="",e=32*n.length;for(t=0;t<e;t+=8)r+=String.fromCharCode(n[t>>5]>>>t%32&255);return r}function d(n){var t,r=[];for(r[(n.length>>2)-1]=void 0,t=0;t<r.length;t+=1)r[t]=0;var e=8*n.length;for(t=0;t<e;t+=8)r[t>>5]|=(255&n.charCodeAt(t/8))<<t%32;return r}function h(n){return a(i(d(n),8*n.length))}function l(n,t){var r,e,o=d(n),u=[],c=[];for(u[15]=c[15]=void 0,o.length>16&&(o=i(o,8*n.length)),r=0;r<16;r+=1)u[r]=909522486^o[r],c[r]=1549556828^o[r];return e=i(u.concat(d(t)),512+8*t.length),a(i(c.concat(e),640))}function g(n){var t,r,e="";for(r=0;r<n.length;r+=1)t=n.charCodeAt(r),e+="0123456789abcdef".charAt(t>>>4&15)+"0123456789abcdef".charAt(15&t);return e}function v(n){return unescape(encodeURIComponent(n))}function m(n){return h(v(n))}function p(n){return g(m(n))}function s(n,t){return l(v(n),v(t))}function C(n,t){return g(s(n,t))}function A(n,t,r){return t?r?s(t,n):C(t,n):r?m(n):p(n)}$.md5=A}(this);
// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
