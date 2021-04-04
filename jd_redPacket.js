/*
 * @Author: LXK9301
 * @Date: 2020-11-03 18:12:38
 * @Last Modified by: LXK9301
 * @Last Modified time: 2021-04-3 10:27:18
*/
/*
京东全民开红包
活动入口：京东APP首页-领券-锦鲤红包。[活动地址](https://happy.m.jd.com/babelDiy/zjyw/3ugedFa7yA6NhxLN5gw2L3PF9sQC/index.html)
未实现功能：领3张券功能

脚本兼容: QuantumultX, Surge, Loon, JSBox, Node.js
================QuantumultX==================
[task_local]
#京东全民开红包
1 1,2,23 * * * https://gitee.com/lxk0301/jd_scripts/raw/master/jd_redPacket.js, tag=京东全民开红包, img-url=https://raw.githubusercontent.com/58xinian/icon/master/jd_redPacket.png, enabled=true
===================Loon==============
[Script]
cron "1 1,2,23 * * *" script-path=https://gitee.com/lxk0301/jd_scripts/raw/master/jd_redPacket.js, tag=京东全民开红包
===============Surge===============
[Script]
京东全民开红包 = type=cron,cronexp=1 1,2,23 * * *,wake-system=1,timeout=3600,script-path=https://gitee.com/lxk0301/jd_scripts/raw/master/jd_redPacket.js
====================================小火箭=============================
京东全民开红包 = type=cron,script-path=https://gitee.com/lxk0301/jd_scripts/raw/master/jd_redPacket.js, cronexpr="1 1,2,23 * * *", timeout=3600, enable=true
 */
const $ = new Env('京东全民开红包');
const notify = $.isNode() ? require('./sendNotify') : '';
//Node.js用户请在jdCookie.js处填写京东ck;
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';

//IOS等用户直接用NobyDa的jd cookie
let cookiesArr = [], cookie = '';
$.redPacketId = [];


/*
 *Progcessed By JSDec in 1.58s
 *JSDec - JSDec.js.org
 */
if ($['isNode']()) {
    Object['keys'](jdCookieNode)['forEach'](_0x2caede => {
        cookiesArr['push'](jdCookieNode[_0x2caede]);
    });
    if (process['env']['JD_DEBUG'] && process['env']['JD_DEBUG'] === 'false') console['log'] = () => {};
    if (JSON['stringify'](process['env'])['indexOf']('GITHUB') > -0x1) process['exit'](0x0);
} else {
    cookiesArr = [$['getdata']('CookieJD'), $['getdata']('CookieJD2'), ...jsonParse($['getdata']('CookiesJD') || '[]')['map'](_0x2c43ff => _0x2c43ff['cookie'])]['filter'](_0x31cf5f => !!_0x31cf5f);
}
const JD_API_HOST = 'https://api.m.jd.com/api';
!(async () => {
    var _0x5da229 = {
        'lRafd': function(_0x173299, _0x4039d2) {
            return _0x173299 === _0x4039d2;
        },
        'OqwMP': function(_0x4ca92f, _0x2d6e7f) {
            return _0x4ca92f === _0x2d6e7f;
        },
        'AOYPf': 'reportCcTask',
        'cXUIQ': '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取',
        'ygNuT': 'https://bean.m.jd.com/bean/signIndex.action',
        'xKFnj': function(_0x546842) {
            return _0x546842();
        },
        'GSUsu': function(_0x133eef, _0x257977) {
            return _0x133eef(_0x257977);
        },
        'qxRMX': 'http://adguard.b.freefrp.net/jd_red.json',
        'ZNFVa': function(_0x5c3e86, _0x117f7f) {
            return _0x5c3e86 < _0x117f7f;
        },
        'Tqyxz': 'CKoZd',
        'ITJXo': function(_0x6645f3, _0x1d0a06) {
            return _0x6645f3(_0x1d0a06);
        },
        'kEuhV': function(_0x5a30ef, _0x59806f) {
            return _0x5a30ef + _0x59806f;
        },
        'hpGyt': function(_0x457bc2) {
            return _0x457bc2();
        },
        'lgPvI': 'XPGDB',
        'mKJBv': function(_0x16e8a7, _0x43d7f1) {
            return _0x16e8a7 !== _0x43d7f1;
        },
        'xmysY': 'apGFS',
        'xFQdC': function(_0x4aed04) {
            return _0x4aed04();
        },
        'azfii': function(_0x123393, _0x4e5acf) {
            return _0x123393 > _0x4e5acf;
        },
        'bTggj': function(_0x4d93a8, _0x5f2032) {
            return _0x4d93a8 !== _0x5f2032;
        },
        'yLSyE': 'aHHxB',
        'JjCzU': 'uukSe'
    };
    if (!cookiesArr[0x0]) {
        $['msg']($['name'], _0x5da229['cXUIQ'], _0x5da229['ygNuT'], {
            'open-url': _0x5da229['ygNuT']
        });
        return;
    }
    let _0x498e30 = await _0x5da229['xKFnj'](getAuthorShareCode),
        _0x4c4e03 = await _0x5da229['GSUsu'](getAuthorShareCode, _0x5da229['qxRMX']);
    $['authorMyShareIds'] = [..._0x498e30 || [], ..._0x4c4e03 || []];
    for (let _0x42b56c = 0x0; _0x5da229['ZNFVa'](_0x42b56c, cookiesArr['length']); _0x42b56c++) {
        if (_0x5da229['OqwMP'](_0x5da229['Tqyxz'], _0x5da229['Tqyxz'])) {
            if (cookiesArr[_0x42b56c]) {
                cookie = cookiesArr[_0x42b56c];
                $['UserName'] = _0x5da229['ITJXo'](decodeURIComponent, cookie['match'](/pt_pin=([^; ]+)(?=;?)/) && cookie['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1]);
                $['index'] = _0x5da229['kEuhV'](_0x42b56c, 0x1);
                $['isLogin'] = !![];
                $['nickName'] = '';
                await _0x5da229['hpGyt'](TotalBean);
                console['log']('\n****开始【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']) + '****\n');
                if (!$['isLogin']) {
                    if (_0x5da229['OqwMP'](_0x5da229['lgPvI'], _0x5da229['lgPvI'])) {
                        $['msg']($['name'], '【提示】cookie已失效', '京东账号' + $['index'] + ' ' + ($['nickName'] || $['UserName']) + '\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action', {
                            'open-url': _0x5da229['ygNuT']
                        });
                        if ($['isNode']()) {
                            if (_0x5da229['mKJBv'](_0x5da229['xmysY'], _0x5da229['xmysY'])) {
                                console['log']('[' + item['title'] + '] 已经领取奖励');
                            } else {
                                await notify['sendNotify']($['name'] + 'cookie已失效 - ' + $['UserName'], '京东账号' + $['index'] + ' ' + $['UserName'] + '\n请重新登录获取cookie');
                            }
                        }
                        continue;
                    } else {
                        $['logErr'](e, resp);
                    }
                }
                $['discount'] = 0x0;
                await _0x5da229['xFQdC'](redPacket);
                await _0x5da229['xFQdC'](showMsg);
            }
        } else {
            if (data) {
                if (_0x5da229['lRafd'](type, '1') && _0x5da229['OqwMP'](functionId, _0x5da229['AOYPf'])) console['log']('京东首页点击“领券”逛10s任务:' + data);
            }
        }
    }
    for (let _0x41b0f2 = 0x0; _0x5da229['ZNFVa'](_0x41b0f2, cookiesArr['length']); _0x41b0f2++) {
        cookie = cookiesArr[_0x41b0f2];
        $['index'] = _0x5da229['kEuhV'](_0x41b0f2, 0x1);
        $['UserName'] = _0x5da229['ITJXo'](decodeURIComponent, cookie['match'](/pt_pin=([^; ]+)(?=;?)/) && cookie['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1]);
        $['canHelp'] = !![];
        $['redPacketId'] = [...new Set($['redPacketId'])];
        if (cookiesArr && _0x5da229['azfii'](cookiesArr['length'], 0x2)) {
            if (_0x5da229['bTggj'](_0x5da229['yLSyE'], _0x5da229['JjCzU'])) {
                console['log']('\n\n自己账号内部互助');
                for (let _0x2c7413 of $['redPacketId']) {
                    console['log']('账号 ' + $['index'] + ' ' + $['UserName'] + ' 开始给 ' + _0x2c7413 + ' 进行助力');
                    await _0x5da229['ITJXo'](jinli_h5assist, _0x2c7413);
                    if (!$['canHelp']) {
                        console['log']('次数已用完，跳出助力');
                        break;
                    }
                }
            } else {
                $['logErr'](e, resp);
            }
        }
        if ($['canHelp']) {
            console['log']('\n\n有剩余助力机会则给作者lxk0301进行助力');
            for (let _0x5ca927 of $['authorMyShareIds'] || []) {
                console['log']('\n账号 ' + $['index'] + ' ' + $['UserName'] + ' 开始给作者lxk0301 ' + _0x5ca927 + ' 进行助力');
                await _0x5da229['ITJXo'](jinli_h5assist, _0x5ca927);
                if (!$['canHelp']) {
                    console['log']('次数已用完，跳出助力');
                    break;
                }
            }
        }
    }
})()['catch'](_0x3d0f12 => {
    $['log']('', '❌ ' + $['name'] + ', 失败! 原因: ' + _0x3d0f12 + '!', '');
})['finally'](() => {
    $['done']();
});
async function redPacket() {
    var _0x6c0441 = {
        'nWVKE': '1|0|4|3|2',
        'KSIkO': function(_0x14b468) {
            return _0x14b468();
        },
        'ZZtcI': function(_0xa4b548) {
            return _0xa4b548();
        },
        'OujuG': function(_0x1dcc3e, _0x28616a) {
            return _0x1dcc3e !== _0x28616a;
        },
        'XVWgQ': 'Lpesi',
        'HwXbq': 'ugbDW'
    };
    try {
        var _0x371887 = _0x6c0441['nWVKE']['split']('|'),
            _0x50535e = 0x0;
        while (!![]) {
            switch (_0x371887[_0x50535e++]) {
                case '0':
                    await _0x6c0441['KSIkO'](doTask);
                    continue;
                case '1':
                    await _0x6c0441['KSIkO'](taskHomePage);
                    continue;
                case '2':
                    await _0x6c0441['ZZtcI'](h5activityIndex);
                    continue;
                case '3':
                    await _0x6c0441['ZZtcI'](red);
                    continue;
                case '4':
                    await _0x6c0441['ZZtcI'](h5activityIndex);
                    continue;
            }
            break;
        }
    } catch (_0xbdd313) {
        if (_0x6c0441['OujuG'](_0x6c0441['XVWgQ'], _0x6c0441['HwXbq'])) {
            $['logErr'](_0xbdd313);
        } else {
            console['log']('发起助力红包 失败：' + JSON['stringify'](data));
        }
    }
}

function showMsg() {
    console['log']('\x0a\x0a' + $['name'] + '获得红包：' + $['discount'] + '元\n\n');
}
async function doTask() {
    var _0x479a69 = {
        'EmmNX': 'data',
        'xkPfT': 'result',
        'swVVM': 'rewards',
        'oREjK': 'packetSum',
        'TVBIq': function(_0x30a246, _0x5c05cc) {
            return _0x30a246(_0x5c05cc);
        },
        'zNisS': function(_0x165e61, _0x3826a4) {
            return _0x165e61 === _0x3826a4;
        },
        'RoAqU': function(_0x1f913a, _0x4dbfb7) {
            return _0x1f913a > _0x4dbfb7;
        },
        'YBYoD': function(_0x19965d, _0x4d786e) {
            return _0x19965d !== _0x4d786e;
        },
        'NoqPt': 'ASyil',
        'Kyhbv': function(_0x31661f, _0x419bbf) {
            return _0x31661f === _0x419bbf;
        },
        'ejwtv': 'TOgtt',
        'RgfNV': function(_0x2c9d16, _0x1c5e48) {
            return _0x2c9d16 === _0x1c5e48;
        },
        'aiQmN': function(_0x2d43e4, _0x105d10) {
            return _0x2d43e4 !== _0x105d10;
        },
        'spscD': 'swLrt',
        'NxoMW': 'lGLuZ',
        'JUFDY': function(_0x50dc1d, _0x4f7fc0) {
            return _0x50dc1d === _0x4f7fc0;
        },
        'gUTzJ': function(_0x25dc93, _0x5be25c) {
            return _0x25dc93 !== _0x5be25c;
        },
        'fgOFF': 'lILmD',
        'mCQPv': 'ZPhdv',
        'CSEgB': function(_0x44a885, _0x217a65) {
            return _0x44a885 !== _0x217a65;
        },
        'wOCBC': function(_0x176678, _0x2a79c6) {
            return _0x176678 !== _0x2a79c6;
        },
        'mxwBD': function(_0x348775, _0x338a66) {
            return _0x348775 === _0x338a66;
        },
        'HMBUJ': 'hrTQK',
        'mswVg': function(_0x2c23dc, _0x1abfb4) {
            return _0x2c23dc(_0x1abfb4);
        },
        'ZOqFi': function(_0x59a2f3) {
            return _0x59a2f3();
        },
        'fYeQQ': function(_0x5ab858, _0x555e6d) {
            return _0x5ab858 !== _0x555e6d;
        },
        'wsvum': function(_0x1ee9de, _0x10bb05) {
            return _0x1ee9de(_0x10bb05);
        },
        'GxXjc': function(_0x3c1879, _0x122725) {
            return _0x3c1879 !== _0x122725;
        },
        'cphiW': function(_0x29ecc6, _0x161f4f) {
            return _0x29ecc6 !== _0x161f4f;
        },
        'zVJhs': 'mNlOI',
        'yLnup': 'ayeIO',
        'Qqtmz': function(_0x5c9722, _0x32a1d0) {
            return _0x5c9722(_0x32a1d0);
        },
        'dzBkr': function(_0x515325, _0x4aa1d2) {
            return _0x515325(_0x4aa1d2);
        },
        'PubPl': function(_0x40a45c, _0x292b4a) {
            return _0x40a45c === _0x292b4a;
        }
    };
    if ($['taskHomePageData'] && _0x479a69['zNisS']($['taskHomePageData']['code'], 0x0)) {
        $['taskInfo'] = $['taskHomePageData']['data']['result']['taskInfos'];
        if ($['taskInfo'] && _0x479a69['RoAqU']($['taskInfo']['length'], 0x0)) {
            if (_0x479a69['YBYoD'](_0x479a69['NoqPt'], _0x479a69['NoqPt'])) {
                if (data) data = JSON['parse'](data);
            } else {
                console['log']('    任务     状态  红包是否领取');
                for (let _0x449e53 of $['taskInfo']) {
                    console['log'](_0x449e53['title']['slice'](-0x6) + '   ' + (_0x449e53['alreadyReceivedCount'] ? _0x449e53['alreadyReceivedCount'] : 0x0) + '/' + _0x449e53['requireCount'] + '      ' + (_0x479a69['Kyhbv'](_0x449e53['innerStatus'], 0x4) ? '是' : '否'));
                }
                for (let _0x37e169 of $['taskInfo']) {
                    if (_0x479a69['YBYoD'](_0x479a69['ejwtv'], _0x479a69['ejwtv'])) {
                        const _0x299fd4 = $['h5activityIndex'][_0x479a69['EmmNX']][_0x479a69['xkPfT']][_0x479a69['swVVM']] || [];
                        for (let _0xc5e737 of _0x299fd4) {
                            $['discount'] += _0xc5e737[_0x479a69['oREjK']];
                        }
                        if ($['discount']) $['discount'] = $['discount']['toFixed'](0x2);
                    } else {
                        if (_0x479a69['RgfNV'](_0x37e169['innerStatus'], 0x4)) {
                            if (_0x479a69['aiQmN'](_0x479a69['spscD'], _0x479a69['NxoMW'])) {
                                console['log']('[' + _0x37e169['title'] + '] 已经领取奖励');
                            } else {
                                console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                                console['log'](JSON['stringify'](err));
                            }
                        } else if (_0x479a69['RgfNV'](_0x37e169['innerStatus'], 0x3)) {
                            await _0x479a69['TVBIq'](receiveTaskRedpacket, _0x37e169['taskType']);
                        } else if (_0x479a69['JUFDY'](_0x37e169['innerStatus'], 0x2)) {
                            if (_0x479a69['gUTzJ'](_0x479a69['fgOFF'], _0x479a69['mCQPv'])) {
                                if (_0x479a69['CSEgB'](_0x37e169['taskType'], 0x0) && _0x479a69['wOCBC'](_0x37e169['taskType'], 0x1)) {
                                    if (_0x479a69['mxwBD'](_0x479a69['HMBUJ'], _0x479a69['HMBUJ'])) {
                                        console['log']('开始做【' + _0x37e169['title'] + '】任务');
                                        await _0x479a69['mswVg'](active, _0x37e169['taskType']);
                                        console['log']('开始领取【' + _0x37e169['title'] + '】任务所得红包奖励');
                                        await _0x479a69['mswVg'](receiveTaskRedpacket, _0x37e169['taskType']);
                                    } else {
                                        _0x479a69['TVBIq'](resolve, data);
                                    }
                                } else if (_0x479a69['mxwBD'](_0x37e169['taskType'], 0x1)) {
                                    console['log']('开始做【' + _0x37e169['title'] + '】任务');
                                    await _0x479a69['ZOqFi'](doAppTask);
                                } else {
                                    console['log']('[' + _0x37e169['title'] + '] 功能未开发');
                                }
                            } else {
                                if (err) {
                                    console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                                    console['log'](JSON['stringify'](err));
                                } else {
                                    data = JSON['parse'](data);
                                }
                            }
                        } else if (_0x479a69['fYeQQ'](_0x37e169['innerStatus'], 0x4)) {
                            console['log']('\n开始领取【' + _0x37e169['title'] + '】任务');
                            await _0x479a69['wsvum'](startTask, _0x37e169['taskType']);
                            if (_0x479a69['GxXjc'](_0x37e169['taskType'], 0x0) && _0x479a69['GxXjc'](_0x37e169['taskType'], 0x1)) {
                                if (_0x479a69['cphiW'](_0x479a69['zVJhs'], _0x479a69['yLnup'])) {
                                    console['log']('开始做【' + _0x37e169['title'] + '】任务');
                                    await _0x479a69['Qqtmz'](active, _0x37e169['taskType']);
                                    console['log']('开始领取【' + _0x37e169['title'] + '】任务所得红包奖励');
                                    await _0x479a69['dzBkr'](receiveTaskRedpacket, _0x37e169['taskType']);
                                } else {
                                    $['logErr'](e, resp);
                                }
                            } else if (_0x479a69['PubPl'](_0x37e169['taskType'], 0x1)) {
                                console['log']('开始做【' + _0x37e169['title'] + '】任务');
                                await _0x479a69['ZOqFi'](doAppTask);
                            } else {
                                console['log']('[' + _0x37e169['title'] + '] 功能未开发');
                            }
                        }
                    }
                }
            }
        }
    } else {
        console['log']('\n获取任务列表异常：' + JSON['stringify']($['taskHomePageData']) + '\x0a');
    }
}
async function red() {
    var _0x13f651 = {
        'WjTYF': function(_0x4c52e5, _0x5c08ae) {
            return _0x4c52e5(_0x5c08ae);
        },
        'OipcX': 'result',
        'BGZDt': 'data',
        'Nztyv': 'rewards',
        'WRkIX': 'hasSendNumber',
        'KJyAG': 'assistants',
        'UjjpT': function(_0x2c37cc, _0x323878) {
            return _0x2c37cc !== _0x323878;
        },
        'KluEH': 'zJWeQ',
        'DTaBe': function(_0x375b51, _0x5e69c6) {
            return _0x375b51 === _0x5e69c6;
        },
        'ZAbfd': 'biz_code',
        'wUEel': function(_0x5a75cd) {
            return _0x5a75cd();
        },
        'wdPfn': function(_0x6cdcd8, _0xd60c74) {
            return _0x6cdcd8 === _0xd60c74;
        },
        'JeVXY': 'redpacketInfo',
        'ecGAc': 'requireAssistNum',
        'EcebG': function(_0x12fdfe, _0x8acb00) {
            return _0x12fdfe + _0x8acb00;
        },
        'OcgMK': 'remainRedpacketNumber',
        'wuUNJ': 'waitOpenTimes',
        'PwoXX': function(_0x2299bd, _0x55a8de) {
            return _0x2299bd > _0x55a8de;
        },
        'RlCxn': function(_0x390ede, _0x51e522) {
            return _0x390ede < _0x51e522;
        },
        'XAQXp': function(_0xc9a19c, _0x54b4ae) {
            return _0xc9a19c(_0x54b4ae);
        },
        'sorbN': 'mTNgJ',
        'XEAtU': 'biz_msg'
    };
    $['hasSendNumber'] = 0x0;
    $['assistants'] = 0x0;
    if ($['h5activityIndex'] && $['h5activityIndex']['data'] && $['h5activityIndex']['data'][_0x13f651['OipcX']]) {
        const _0x409bb4 = $['h5activityIndex'][_0x13f651['BGZDt']][_0x13f651['OipcX']][_0x13f651['Nztyv']] || [];
        $['hasSendNumber'] = $['h5activityIndex'][_0x13f651['BGZDt']][_0x13f651['OipcX']][_0x13f651['WRkIX']];
        if ($['h5activityIndex'][_0x13f651['BGZDt']][_0x13f651['OipcX']][_0x13f651['KJyAG']]) {
            if (_0x13f651['UjjpT'](_0x13f651['KluEH'], _0x13f651['KluEH'])) {
                url = 'https://api.m.jd.com/client.action?functionId=' + functionId + '&body=' + _0x13f651['WjTYF'](escape, JSON['stringify'](body)) + '&uuid=8888888&client=apple&clientVersion=9.4.1&st=1617158358007&sign=a15f78e5846f9b0178dcabb1093a6a7f&sv=100';
            } else {
                $['assistants'] = $['h5activityIndex'][_0x13f651['BGZDt']][_0x13f651['OipcX']][_0x13f651['KJyAG']]['length'] || 0x0;
            }
        }
    }
    if ($['h5activityIndex'] && $['h5activityIndex']['data'] && _0x13f651['DTaBe']($['h5activityIndex']['data'][_0x13f651['ZAbfd']], 0x2712)) {
        await _0x13f651['wUEel'](h5launch);
    } else if ($['h5activityIndex'] && $['h5activityIndex']['data'] && _0x13f651['wdPfn']($['h5activityIndex']['data'][_0x13f651['ZAbfd']], 0x4e21)) {
        const _0x4b7289 = $['h5activityIndex'][_0x13f651['BGZDt']][_0x13f651['OipcX']][_0x13f651['JeVXY']]['id'];
        if (_0x4b7289) $['redPacketId']['push'](_0x4b7289);
        console['log']('\n\n当前待拆红包ID:' + $['h5activityIndex'][_0x13f651['BGZDt']][_0x13f651['OipcX']][_0x13f651['JeVXY']]['id'] + '，进度：再邀' + $['h5activityIndex'][_0x13f651['BGZDt']][_0x13f651['OipcX']][_0x13f651['ecGAc']] + '个好友，开第' + _0x13f651['EcebG']($['hasSendNumber'], 0x1) + '个红包。当前已拆红包：' + $['hasSendNumber'] + '个，剩余' + $['h5activityIndex'][_0x13f651['BGZDt']][_0x13f651['OipcX']][_0x13f651['OcgMK']] + '个红包待开，已有' + $['assistants'] + '好友助力\n\n');
        const _0x45c04f = $['h5activityIndex'][_0x13f651['BGZDt']][_0x13f651['OipcX']][_0x13f651['JeVXY']][_0x13f651['wuUNJ']] || 0x0;
        console['log']('当前可拆红包个数：' + _0x45c04f);
        if (_0x13f651['PwoXX'](_0x45c04f, 0x0)) {
            for (let _0x33ddfe = 0x0; _0x13f651['RlCxn'](_0x33ddfe, new Array(_0x45c04f)['fill']('')['length']); _0x33ddfe++) {
                if (!_0x4b7289) break;
                await _0x13f651['XAQXp'](h5receiveRedpacket, _0x4b7289);
                await $['wait'](0x1f4);
            }
        }
    } else if ($['h5activityIndex'] && $['h5activityIndex']['data'] && _0x13f651['wdPfn']($['h5activityIndex']['data'][_0x13f651['ZAbfd']], 0x4e22)) {
        if (_0x13f651['wdPfn'](_0x13f651['sorbN'], _0x13f651['sorbN'])) {
            console['log']('\x0a' + $['h5activityIndex']['data'][_0x13f651['XEAtU']] + '\x0a');
        } else {
            _0x13f651['WjTYF'](resolve, data);
        }
    }
}

function taskHomePage() {
    var _0x1517c4 = {
        'QoEoA': function(_0x332072, _0x191b3e) {
            return _0x332072(_0x191b3e);
        },
        'UTNQU': function(_0x126bd7, _0x28a5c4) {
            return _0x126bd7 !== _0x28a5c4;
        },
        'JncKk': 'NTBoW',
        'xyZyR': function(_0x351627, _0xae717b) {
            return _0x351627 === _0xae717b;
        },
        'Lqpog': 'WMohZ',
        'PDrFe': function(_0x12ea09, _0x4c79ac) {
            return _0x12ea09(_0x4c79ac);
        },
        'DeEEM': 'reportCcTask',
        'slVxY': 'yNAEU',
        'CyLDs': function(_0x336cad, _0x1c6846, _0x2b6bed) {
            return _0x336cad(_0x1c6846, _0x2b6bed);
        }
    };
    return new Promise(_0x4630a7 => {
        var _0x54160a = {
            'lFXez': function(_0x4fb2ce, _0x3f5b28) {
                return _0x1517c4['PDrFe'](_0x4fb2ce, _0x3f5b28);
            },
            'sQZOj': function(_0x7da317, _0x9969cd) {
                return _0x1517c4['xyZyR'](_0x7da317, _0x9969cd);
            },
            'GWUSq': _0x1517c4['DeEEM']
        };
        if (_0x1517c4['xyZyR'](_0x1517c4['slVxY'], _0x1517c4['slVxY'])) {
            $['post'](_0x1517c4['CyLDs'](taskUrl, arguments['callee']['name']['toString'](), {
                'clientInfo': {}
            }), (_0x395529, _0xfd105b, _0x1d2674) => {
                var _0x222f97 = {
                    'tqjxT': function(_0x4de286, _0x2df3e9) {
                        return _0x1517c4['QoEoA'](_0x4de286, _0x2df3e9);
                    }
                };
                if (_0x1517c4['UTNQU'](_0x1517c4['JncKk'], _0x1517c4['JncKk'])) {
                    _0x222f97['tqjxT'](_0x4630a7, _0x1d2674);
                } else {
                    try {
                        if (_0x1517c4['xyZyR'](_0x1517c4['Lqpog'], _0x1517c4['Lqpog'])) {
                            if (_0x395529) {
                                console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                                console['log'](JSON['stringify'](_0x395529));
                            } else {
                                $['taskHomePageData'] = JSON['parse'](_0x1d2674);
                            }
                        } else {
                            _0x54160a['lFXez'](_0x4630a7, _0x1d2674);
                        }
                    } catch (_0x25e591) {
                        $['logErr'](_0x25e591, _0xfd105b);
                    } finally {
                        _0x1517c4['QoEoA'](_0x4630a7, _0x1d2674);
                    }
                }
            });
        } else {
            if (_0x54160a['sQZOj'](type, '1') && _0x54160a['sQZOj'](functionId, _0x54160a['GWUSq'])) console['log']('京东首页点击“领券”逛10s任务:' + data);
        }
    });
}

function startTask(_0xac2c5b) {
    var _0x487938 = {
        'mSPdj': function(_0x374798, _0x263b9c) {
            return _0x374798 === _0x263b9c;
        },
        'ASnlY': 'wswkn',
        'JeCFh': 'rNSFS',
        'Asrmm': 'kwcjT',
        'BahjD': function(_0x1d90d0, _0x5c13ee) {
            return _0x1d90d0 !== _0x5c13ee;
        },
        'lvyrn': 'QFBpk',
        'iaFEQ': function(_0x57af6a, _0x4a25ac) {
            return _0x57af6a(_0x4a25ac);
        },
        'TiopG': 'data',
        'QSkAi': 'result',
        'Kuqha': 'statusDesc',
        'gWbye': function(_0x3fe040, _0xfbb42e) {
            return _0x3fe040 === _0xfbb42e;
        },
        'BTPxm': 'status',
        'PrAln': function(_0x4d9ea5, _0x731e0) {
            return _0x4d9ea5 !== _0x731e0;
        },
        'VNoMX': 'VnGPY',
        'JzgEx': function(_0x450fbb, _0x84e47e, _0x44eaaf) {
            return _0x450fbb(_0x84e47e, _0x44eaaf);
        },
        'xYJql': 'token',
        'KwOdU': function(_0x4f64d4, _0x21eae3) {
            return _0x4f64d4 + _0x21eae3;
        },
        'QiMbC': function(_0x56d264, _0x1ce430) {
            return _0x56d264 + _0x1ce430;
        }
    };
    let _0x1d1b98 = {
        'taskType': _0xac2c5b
    };
    _0x1d1b98[_0x487938['xYJql']] = $['md5']($['md5'](_0x487938['KwOdU'](_0x487938['QiMbC']('j', JSON['stringify'](_0x1d1b98)), 'D')));
    return new Promise(_0xc1d956 => {
        var _0x4385f0 = {
            'rHxkM': _0x487938['TiopG'],
            'iAOGW': _0x487938['QSkAi'],
            'GOCsZ': _0x487938['Kuqha'],
            'dWdxO': function(_0x119666, _0x358466) {
                return _0x487938['gWbye'](_0x119666, _0x358466);
            },
            'YLpvj': _0x487938['BTPxm']
        };
        if (_0x487938['PrAln'](_0x487938['VNoMX'], _0x487938['VNoMX'])) {
            if (err) {
                console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                console['log'](JSON['stringify'](err));
            } else {
                $['taskHomePageData'] = JSON['parse'](_0x1d1b98);
            }
        } else {
            $['post'](_0x487938['JzgEx'](taskUrl, arguments['callee']['name']['toString'](), _0x1d1b98), (_0x18bc72, _0x1fe1bf, _0x1d1b98) => {
                try {
                    if (_0x18bc72) {
                        if (_0x487938['mSPdj'](_0x487938['ASnlY'], _0x487938['ASnlY'])) {
                            console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                            console['log'](JSON['stringify'](_0x18bc72));
                        } else {
                            console['log']('助力结果：' + _0x1d1b98[_0x4385f0['rHxkM']][_0x4385f0['iAOGW']][_0x4385f0['GOCsZ']]);
                            if (_0x4385f0['dWdxO'](_0x1d1b98[_0x4385f0['rHxkM']][_0x4385f0['iAOGW']][_0x4385f0['YLpvj']], 0x3)) $['canHelp'] = ![];
                        }
                    } else {
                        if (_0x487938['mSPdj'](_0x487938['JeCFh'], _0x487938['Asrmm'])) {
                            console['log']('\n获取任务列表异常：' + JSON['stringify']($['taskHomePageData']) + '\x0a');
                        } else {
                            console['log']('领取任务：' + _0x1d1b98);
                            _0x1d1b98 = JSON['parse'](_0x1d1b98);
                        }
                    }
                } catch (_0x420715) {
                    $['logErr'](_0x420715, _0x1fe1bf);
                } finally {
                    if (_0x487938['BahjD'](_0x487938['lvyrn'], _0x487938['lvyrn'])) {
                        console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                        console['log'](JSON['stringify'](_0x18bc72));
                    } else {
                        _0x487938['iaFEQ'](_0xc1d956, _0x1d1b98);
                    }
                }
            });
        }
    });
}
async function active(_0x478645) {
    var _0x460850 = {
        'kfocP': function(_0x1dedbe, _0x2bee26) {
            return _0x1dedbe === _0x2bee26;
        },
        'tcoPU': function(_0x3ce257, _0x1d7be1) {
            return _0x3ce257(_0x1d7be1);
        },
        'jgXEo': function(_0x32fff8, _0x4e34f6) {
            return _0x32fff8(_0x4e34f6);
        },
        'roCos': function(_0x576b94, _0x52840c) {
            return _0x576b94 !== _0x52840c;
        },
        'VssIu': 'EokCd',
        'ScPFd': function(_0x315188, _0x5e2e1a) {
            return _0x315188 === _0x5e2e1a;
        },
        'indGJ': function(_0x98825, _0x39049f, _0xad0123) {
            return _0x98825(_0x39049f, _0xad0123);
        },
        'NwcEB': 'FpARu',
        'itkBp': 'AvPEW',
        'yhPjf': '手动进入app内检查\n是否存在[从京豆首页进领券中心逛30秒]的任务\n如存在,请手动完成再运行脚本',
        'zhTqs': 'EzCOG'
    };
    const _0x2a3eaf = await _0x460850['jgXEo'](getTaskDetailForColor, _0x478645);
    if (_0x2a3eaf && _0x460850['kfocP'](_0x2a3eaf['code'], 0x0)) {
        if (_0x460850['roCos'](_0x460850['VssIu'], _0x460850['VssIu'])) {
            console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
            console['log'](JSON['stringify'](err));
        } else {
            if (_0x2a3eaf['data'] && _0x2a3eaf['data']['result']) {
                const {
                    advertDetails
                } = _0x2a3eaf['data']['result'];
                for (let _0x725ad5 of advertDetails) {
                    await $['wait'](0x3e8);
                    if (_0x725ad5['id'] && _0x460850['ScPFd'](_0x725ad5['status'], 0x0)) {
                        await _0x460850['indGJ'](taskReportForColor, _0x478645, _0x725ad5['id']);
                    }
                }
            } else {
                if (_0x460850['ScPFd'](_0x460850['NwcEB'], _0x460850['itkBp'])) {
                    $['logErr'](e, resp);
                } else {
                    console['log']('任务列表为空,手动进入app内检查 是否存在[从京豆首页进领券中心逛30秒]的任务,如存在,请手动完成再运行脚本');
                    $['msg']('' + $['name'], '', _0x460850['yhPjf']);
                    if ($['isNode']()) await notify['sendNotify']($['name'] + ' - 账号' + $['index'] + ' - ' + $['nickName'], '执行脚本出现异常\n请手动进入app内检查\n是否存在[从京豆首页进领券中心逛30秒]的任务\n如存在,请手动完成再运行脚本');
                }
            }
        }
    } else {
        if (_0x460850['roCos'](_0x460850['zhTqs'], _0x460850['zhTqs'])) {
            if (err) {
                console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                console['log'](JSON['stringify'](err));
            } else {
                data = JSON['parse'](data);
                if (data['data']['success'] && _0x460850['kfocP'](data['data']['biz_code'], 0x0)) {
                    console['log']('红包领取成功，获得' + data['data']['result']['discount'] + '元\x0a');
                    $['discount'] += _0x460850['tcoPU'](Number, data['data']['result']['discount']);
                }
            }
        } else {
            console['log']('---具体任务详情---' + JSON['stringify'](_0x2a3eaf));
        }
    }
}

function getTaskDetailForColor(_0x52cd29) {
    var _0x451b37 = {
        'kQFSx': function(_0x3bac35, _0x36a651) {
            return _0x3bac35(_0x36a651);
        },
        'ygxtT': function(_0x4355c1, _0x4c4af3) {
            return _0x4355c1 === _0x4c4af3;
        },
        'rsFjn': 'YUkLR',
        'BQicI': 'ttNol',
        'opdgP': 'PhgnT',
        'vpkMV': 'lKfwG',
        'kolva': function(_0xd9c321, _0x442a03) {
            return _0xd9c321 !== _0x442a03;
        },
        'oZDJt': 'XzciI',
        'PqMwj': function(_0x131a05, _0x21d944, _0x23e0c1) {
            return _0x131a05(_0x21d944, _0x23e0c1);
        }
    };
    const _0x1ab972 = {
        'clientInfo': {},
        'taskType': _0x52cd29
    };
    return new Promise(_0x16dfda => {
        var _0x4fff6d = {
            'USTLx': function(_0x50258b, _0x541fc7) {
                return _0x451b37['kQFSx'](_0x50258b, _0x541fc7);
            },
            'MlRHg': function(_0x3b5eb6, _0x5bc2d9) {
                return _0x451b37['ygxtT'](_0x3b5eb6, _0x5bc2d9);
            },
            'YgWcC': _0x451b37['rsFjn'],
            'GSicg': _0x451b37['BQicI'],
            'KZimf': _0x451b37['opdgP'],
            'erIWu': _0x451b37['vpkMV'],
            'bHUqJ': function(_0x488c15, _0x1929c7) {
                return _0x451b37['kQFSx'](_0x488c15, _0x1929c7);
            }
        };
        if (_0x451b37['kolva'](_0x451b37['oZDJt'], _0x451b37['oZDJt'])) {
            $['logErr'](e, resp);
        } else {
            $['post'](_0x451b37['PqMwj'](taskUrl, arguments['callee']['name']['toString'](), _0x1ab972), (_0x384aad, _0xcd66c6, _0x1ab972) => {
                try {
                    if (_0x4fff6d['MlRHg'](_0x4fff6d['YgWcC'], _0x4fff6d['GSicg'])) {
                        console['log']('红包领取成功，获得' + _0x1ab972['data']['result']['discount'] + '元\x0a');
                        $['discount'] += _0x4fff6d['USTLx'](Number, _0x1ab972['data']['result']['discount']);
                    } else {
                        if (_0x384aad) {
                            console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                            console['log'](JSON['stringify'](_0x384aad));
                        } else {
                            if (_0x4fff6d['MlRHg'](_0x4fff6d['KZimf'], _0x4fff6d['erIWu'])) {
                                console['log']('助力异常：' + JSON['stringify'](_0x1ab972));
                            } else {
                                _0x1ab972 = JSON['parse'](_0x1ab972);
                            }
                        }
                    }
                } catch (_0xa717bc) {
                    $['logErr'](_0xa717bc, _0xcd66c6);
                } finally {
                    _0x4fff6d['bHUqJ'](_0x16dfda, _0x1ab972);
                }
            });
        }
    });
}

function taskReportForColor(_0x172be9, _0x1d9c3c) {
    var _0x595b82 = {
        'dhFIT': function(_0xd98d60, _0xd06bb6) {
            return _0xd98d60(_0xd06bb6);
        },
        'fqUOY': function(_0x1aac2f, _0x208e15, _0x36b805) {
            return _0x1aac2f(_0x208e15, _0x36b805);
        },
        'sJznv': 'token',
        'ZcgNz': function(_0x2fab23, _0x137e15) {
            return _0x2fab23 + _0x137e15;
        },
        'IIEIm': function(_0x5f1066, _0x3b7186) {
            return _0x5f1066 + _0x3b7186;
        }
    };
    const _0x171739 = {
        'taskType': _0x172be9,
        'detailId': _0x1d9c3c
    };
    _0x171739[_0x595b82['sJznv']] = $['md5']($['md5'](_0x595b82['ZcgNz'](_0x595b82['IIEIm']('j', JSON['stringify'](_0x171739)), 'D')));
    return new Promise(_0x116c3a => {
        var _0x4e8e27 = {
            'kRhXA': function(_0x2382ba, _0x279697) {
                return _0x595b82['dhFIT'](_0x2382ba, _0x279697);
            }
        };
        $['post'](_0x595b82['fqUOY'](taskUrl, arguments['callee']['name']['toString'](), _0x171739), (_0x1981b9, _0x3033ed, _0x171739) => {
            try {
                if (_0x1981b9) {
                    console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                    console['log'](JSON['stringify'](_0x1981b9));
                } else {
                    _0x171739 = JSON['parse'](_0x171739);
                }
            } catch (_0x49ada0) {
                $['logErr'](_0x49ada0, _0x3033ed);
            } finally {
                _0x4e8e27['kRhXA'](_0x116c3a, _0x171739);
            }
        });
    });
}

function receiveTaskRedpacket(_0x337811) {
    var _0x1850fc = {
        'LSrDr': 'data',
        'syxRh': 'result',
        'ZXLUa': 'rewards',
        'blEQK': 'hasSendNumber',
        'WUVWG': 'assistants',
        'cTGRe': function(_0x47b809, _0x3b4add) {
            return _0x47b809 === _0x3b4add;
        },
        'akxfQ': 'fFKSb',
        'ZZgaB': 'iyAzS',
        'tAiXr': function(_0x4a7637, _0x1378ea) {
            return _0x4a7637(_0x1378ea);
        },
        'qHMTD': function(_0x38ca53, _0x3a6d31, _0x2cb12e) {
            return _0x38ca53(_0x3a6d31, _0x2cb12e);
        }
    };
    const _0x5bf8fc = {
        'clientInfo': {},
        'taskType': _0x337811
    };
    return new Promise(_0x26bdd6 => {
        var _0x4e1a3e = {
            'Ugwvk': _0x1850fc['LSrDr'],
            'DKPjo': _0x1850fc['syxRh'],
            'TnHFb': _0x1850fc['ZXLUa'],
            'eXFYa': _0x1850fc['blEQK'],
            'EyIBS': _0x1850fc['WUVWG'],
            'PWLCI': function(_0x29f9f6, _0x154f26) {
                return _0x1850fc['cTGRe'](_0x29f9f6, _0x154f26);
            },
            'VUGBj': _0x1850fc['akxfQ'],
            'bbQww': _0x1850fc['ZZgaB'],
            'ZQsVV': function(_0x6eca0b, _0x47c78e) {
                return _0x1850fc['cTGRe'](_0x6eca0b, _0x47c78e);
            },
            'fgxBJ': function(_0x421895, _0x347e62) {
                return _0x1850fc['tAiXr'](_0x421895, _0x347e62);
            }
        };
        $['post'](_0x1850fc['qHMTD'](taskUrl, arguments['callee']['name']['toString'](), _0x5bf8fc), (_0x406cfa, _0x38dede, _0x13220f) => {
            var _0x3f7f1 = {
                'yvROa': _0x4e1a3e['Ugwvk'],
                'wfzDu': _0x4e1a3e['DKPjo'],
                'TugMe': _0x4e1a3e['TnHFb'],
                'rXqpT': _0x4e1a3e['eXFYa'],
                'gUNGk': _0x4e1a3e['EyIBS']
            };
            try {
                if (_0x4e1a3e['PWLCI'](_0x4e1a3e['VUGBj'], _0x4e1a3e['bbQww'])) {
                    const _0x59fd1d = $['h5activityIndex'][_0x3f7f1['yvROa']][_0x3f7f1['wfzDu']][_0x3f7f1['TugMe']] || [];
                    $['hasSendNumber'] = $['h5activityIndex'][_0x3f7f1['yvROa']][_0x3f7f1['wfzDu']][_0x3f7f1['rXqpT']];
                    if ($['h5activityIndex'][_0x3f7f1['yvROa']][_0x3f7f1['wfzDu']][_0x3f7f1['gUNGk']]) {
                        $['assistants'] = $['h5activityIndex'][_0x3f7f1['yvROa']][_0x3f7f1['wfzDu']][_0x3f7f1['gUNGk']]['length'] || 0x0;
                    }
                } else {
                    if (_0x406cfa) {
                        console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                        console['log'](JSON['stringify'](_0x406cfa));
                    } else {
                        _0x13220f = JSON['parse'](_0x13220f);
                        if (_0x13220f['data']['success'] && _0x4e1a3e['ZQsVV'](_0x13220f['data']['biz_code'], 0x0)) {
                            console['log']('红包领取成功，获得' + _0x13220f['data']['result']['discount'] + '元\x0a');
                            $['discount'] += _0x4e1a3e['fgxBJ'](Number, _0x13220f['data']['result']['discount']);
                        }
                    }
                }
            } catch (_0x1d3762) {
                $['logErr'](_0x1d3762, _0x38dede);
            } finally {
                _0x4e1a3e['fgxBJ'](_0x26bdd6, _0x13220f);
            }
        });
    });
}

function jinli_h5assist(_0x384003) {
    var _0x1ddf23 = {
        'sBUgq': function(_0x8c435d, _0x1c4cb0) {
            return _0x8c435d !== _0x1c4cb0;
        },
        'NKfdB': 'UhcEo',
        'jmOig': function(_0x259321, _0xf5434b) {
            return _0x259321 === _0xf5434b;
        },
        'CJXZI': 'biz_code',
        'MjQvd': function(_0x38ce4f, _0x3f0964) {
            return _0x38ce4f !== _0x3f0964;
        },
        'zxPXM': 'DpvEI',
        'ZkxMl': 'data',
        'kTtIy': 'result',
        'wWGPR': 'statusDesc',
        'TklwC': function(_0x334581, _0x1af495) {
            return _0x334581 === _0x1af495;
        },
        'VtWlc': 'status',
        'ZwHce': function(_0x3d5644) {
            return _0x3d5644();
        },
        'mGASs': 'assistants',
        'dhBcZ': function(_0x27e0ab, _0x4d7145) {
            return _0x27e0ab !== _0x4d7145;
        },
        'zcyPD': 'jfZYv',
        'nLKOJ': 'xuUzF',
        'OQRRe': function(_0x180bf7, _0x5e6e08, _0xce9dff) {
            return _0x180bf7(_0x5e6e08, _0xce9dff);
        }
    };
    const _0x30c67a = {
        'clientInfo': {},
        'redPacketId': _0x384003,
        'followShop': 0x0,
        'promUserState': ''
    };
    const _0x4476c3 = _0x1ddf23['OQRRe'](taskUrl, arguments['callee']['name']['toString'](), _0x30c67a);
    return new Promise(_0x558ff2 => {
        var _0x13f45a = {
            'QYvnh': _0x1ddf23['ZkxMl'],
            'adtda': _0x1ddf23['kTtIy'],
            'zyMOz': _0x1ddf23['mGASs']
        };
        if (_0x1ddf23['dhBcZ'](_0x1ddf23['zcyPD'], _0x1ddf23['nLKOJ'])) {
            $['post'](_0x4476c3, (_0xae21aa, _0x3516d8, _0x49f161) => {
                try {
                    if (_0xae21aa) {
                        console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                        console['log'](JSON['stringify'](_0xae21aa));
                    } else {
                        if (_0x1ddf23['sBUgq'](_0x1ddf23['NKfdB'], _0x1ddf23['NKfdB'])) {
                            $['assistants'] = $['h5activityIndex'][_0x13f45a['QYvnh']][_0x13f45a['adtda']][_0x13f45a['zyMOz']]['length'] || 0x0;
                        } else {
                            _0x49f161 = JSON['parse'](_0x49f161);
                            if (_0x49f161 && _0x49f161['data'] && _0x1ddf23['jmOig'](_0x49f161['data'][_0x1ddf23['CJXZI']], 0x0)) {
                                if (_0x1ddf23['MjQvd'](_0x1ddf23['zxPXM'], _0x1ddf23['zxPXM'])) {
                                    if (_0xae21aa) {
                                        console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                                        console['log'](JSON['stringify'](_0xae21aa));
                                    } else {
                                        console['log']('领取任务：' + _0x49f161);
                                        _0x49f161 = JSON['parse'](_0x49f161);
                                    }
                                } else {
                                    console['log']('助力结果：' + _0x49f161[_0x1ddf23['ZkxMl']][_0x1ddf23['kTtIy']][_0x1ddf23['wWGPR']]);
                                    if (_0x1ddf23['TklwC'](_0x49f161[_0x1ddf23['ZkxMl']][_0x1ddf23['kTtIy']][_0x1ddf23['VtWlc']], 0x3)) $['canHelp'] = ![];
                                }
                            } else {
                                console['log']('助力异常：' + JSON['stringify'](_0x49f161));
                            }
                        }
                    }
                } catch (_0x445740) {
                    $['logErr'](_0x445740, _0x3516d8);
                } finally {
                    _0x1ddf23['ZwHce'](_0x558ff2);
                }
            });
        } else {
            console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
            console['log'](JSON['stringify'](err));
        }
    });
}

function h5receiveRedpacket(_0x26b689) {
    var _0x534505 = {
        'QUDKz': function(_0x399dbb, _0x35ea03) {
            return _0x399dbb === _0x35ea03;
        },
        'wyxYm': 'PoVAT',
        'rsQRc': 'VArab',
        'dTTUb': 'biz_code',
        'cNYAF': 'data',
        'uSyqV': 'result',
        'VDkqC': 'discount',
        'yFpvb': function(_0x111cc9, _0x20c18f) {
            return _0x111cc9(_0x20c18f);
        },
        'ZktPX': 'rewards',
        'PoJPB': 'packetSum',
        'waNKH': function(_0x162704, _0x137370) {
            return _0x162704 !== _0x137370;
        },
        'eroMJ': 'EPJju',
        'qtMeb': 'NAXAc',
        'XXUYq': 'token',
        'bjwqn': function(_0x21979f, _0x124fa8) {
            return _0x21979f + _0x124fa8;
        },
        'tDtih': function(_0x4df0f8, _0x40230b, _0x3c2f68) {
            return _0x4df0f8(_0x40230b, _0x3c2f68);
        }
    };
    const _0x49cc95 = {
        'redPacketId': _0x26b689
    };
    _0x49cc95[_0x534505['XXUYq']] = $['md5']($['md5'](_0x534505['bjwqn'](_0x534505['bjwqn']('j', JSON['stringify'](_0x49cc95)), 'D')));
    const _0x172c34 = _0x534505['tDtih'](taskUrl, arguments['callee']['name']['toString'](), _0x49cc95);
    return new Promise(_0x262d14 => {
        var _0x1325c1 = {
            'VNnDL': _0x534505['uSyqV'],
            'gZLtD': _0x534505['cNYAF'],
            'wBhTl': _0x534505['ZktPX'],
            'NKiCo': _0x534505['PoJPB']
        };
        if (_0x534505['waNKH'](_0x534505['eroMJ'], _0x534505['qtMeb'])) {
            $['post'](_0x172c34, (_0x4289fa, _0x4af8d6, _0x49cc95) => {
                if (_0x534505['QUDKz'](_0x534505['wyxYm'], _0x534505['rsQRc'])) {
                    _0x49cc95 = JSON['parse'](_0x49cc95);
                    $['h5activityIndex'] = _0x49cc95;
                    $['discount'] = 0x0;
                    if ($['h5activityIndex'] && $['h5activityIndex']['data'] && $['h5activityIndex']['data'][_0x1325c1['VNnDL']]) {
                        const _0x98291c = $['h5activityIndex'][_0x1325c1['gZLtD']][_0x1325c1['VNnDL']][_0x1325c1['wBhTl']] || [];
                        for (let _0x92809d of _0x98291c) {
                            $['discount'] += _0x92809d[_0x1325c1['NKiCo']];
                        }
                        if ($['discount']) $['discount'] = $['discount']['toFixed'](0x2);
                    }
                } else {
                    try {
                        if (_0x4289fa) {
                            console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                            console['log'](JSON['stringify'](_0x4289fa));
                        } else {
                            _0x49cc95 = JSON['parse'](_0x49cc95);
                            if (_0x49cc95 && _0x49cc95['data'] && _0x534505['QUDKz'](_0x49cc95['data'][_0x534505['dTTUb']], 0x0)) {
                                console['log']('拆红包获得：' + _0x49cc95[_0x534505['cNYAF']][_0x534505['uSyqV']][_0x534505['VDkqC']] + '元');
                            } else {
                                console['log']('领红包失败：' + JSON['stringify'](_0x49cc95));
                            }
                        }
                    } catch (_0x3d4979) {
                        $['logErr'](_0x3d4979, _0x4af8d6);
                    } finally {
                        _0x534505['yFpvb'](_0x262d14, _0x49cc95);
                    }
                }
            });
        } else {
            $['logErr'](e, resp);
        }
    });
}

function h5launch() {
    var _0x3fde93 = {
        'fAUxg': 'data',
        'KSNxm': 'result',
        'hTgNG': 'redPacketId',
        'ktzyz': function(_0x28c535, _0x350af6) {
            return _0x28c535(_0x350af6);
        },
        'DEKVG': function(_0x566a6f, _0x4d3f16) {
            return _0x566a6f === _0x4d3f16;
        },
        'uFcHm': 'GMygL',
        'SkKuH': function(_0x1b6b7c, _0x3ab17d) {
            return _0x1b6b7c !== _0x3ab17d;
        },
        'DPjnV': 'sXLTz',
        'uzZCb': 'SbtGD',
        'tBDra': 'biz_code',
        'rsEiL': 'aIBhn',
        'zuzop': 'TIsYR',
        'hqAkg': 'statusDesc',
        'OVHlI': 'EoFDg',
        'kpWxp': function(_0x5b0b1b, _0x7b3072, _0x29eb6a) {
            return _0x5b0b1b(_0x7b3072, _0x29eb6a);
        }
    };
    const _0x6b93a6 = {
        'clientInfo': {},
        'followShop': 0x0,
        'promUserState': ''
    };
    const _0x1c03b5 = _0x3fde93['kpWxp'](taskUrl, arguments['callee']['name']['toString'](), _0x6b93a6);
    return new Promise(_0x13ca89 => {
        var _0x1d9a04 = {
            'zZbZd': _0x3fde93['fAUxg'],
            'GFGVv': _0x3fde93['KSNxm'],
            'vaIQP': _0x3fde93['hTgNG'],
            'sNewX': function(_0x3a9453, _0x1dfa51) {
                return _0x3fde93['ktzyz'](_0x3a9453, _0x1dfa51);
            },
            'QOgwP': function(_0x140b9c, _0x19fc5f) {
                return _0x3fde93['DEKVG'](_0x140b9c, _0x19fc5f);
            },
            'CUdiK': _0x3fde93['uFcHm'],
            'WNMJO': function(_0x2133c7, _0x37a89f) {
                return _0x3fde93['SkKuH'](_0x2133c7, _0x37a89f);
            },
            'CeLsJ': _0x3fde93['DPjnV'],
            'Hxcyg': _0x3fde93['uzZCb'],
            'NyYNd': function(_0x2c6be4, _0x11344d) {
                return _0x3fde93['DEKVG'](_0x2c6be4, _0x11344d);
            },
            'HhLIc': _0x3fde93['tBDra'],
            'kQNeI': _0x3fde93['rsEiL'],
            'Sdadk': _0x3fde93['zuzop'],
            'SqbnP': _0x3fde93['hqAkg'],
            'WJiIc': function(_0x1b0127, _0xcf6195) {
                return _0x3fde93['DEKVG'](_0x1b0127, _0xcf6195);
            },
            'Tkevq': _0x3fde93['OVHlI']
        };
        $['post'](_0x1c03b5, (_0x229fc3, _0x3ec21a, _0x58dada) => {
            var _0x5c5762 = {
                'urNUN': function(_0x2bc54c, _0x2f9408) {
                    return _0x1d9a04['sNewX'](_0x2bc54c, _0x2f9408);
                }
            };
            try {
                if (_0x1d9a04['QOgwP'](_0x1d9a04['CUdiK'], _0x1d9a04['CUdiK'])) {
                    if (_0x229fc3) {
                        if (_0x1d9a04['WNMJO'](_0x1d9a04['CeLsJ'], _0x1d9a04['Hxcyg'])) {
                            console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                            console['log'](JSON['stringify'](_0x229fc3));
                        } else {
                            url = 'https://api.m.jd.com/client.action?functionId=' + functionId + '&body=' + _0x5c5762['urNUN'](escape, JSON['stringify'](_0x6b93a6)) + '&uuid=8888888&client=apple&clientVersion=9.4.1&st=1617158435079&sign=7eff07437dd817dbfa348c209fd5c129&sv=120';
                        }
                    } else {
                        _0x58dada = JSON['parse'](_0x58dada);
                        if (_0x58dada && _0x58dada['data'] && _0x1d9a04['NyYNd'](_0x58dada['data'][_0x1d9a04['HhLIc']], 0x0)) {
                            if (_0x58dada[_0x1d9a04['zZbZd']][_0x1d9a04['GFGVv']][_0x1d9a04['vaIQP']]) {
                                if (_0x1d9a04['WNMJO'](_0x1d9a04['kQNeI'], _0x1d9a04['kQNeI'])) {
                                    if (_0x229fc3) {} else {
                                        if (_0x58dada) _0x58dada = JSON['parse'](_0x58dada);
                                    }
                                } else {
                                    console['log']('\n\n发起助力红包 成功：红包ID ' + _0x58dada[_0x1d9a04['zZbZd']][_0x1d9a04['GFGVv']][_0x1d9a04['vaIQP']]);
                                    $['redPacketId']['push'](_0x58dada[_0x1d9a04['zZbZd']][_0x1d9a04['GFGVv']][_0x1d9a04['vaIQP']]);
                                }
                            } else {
                                if (_0x1d9a04['NyYNd'](_0x1d9a04['Sdadk'], _0x1d9a04['Sdadk'])) {
                                    console['log']('\n\n发起助力红包 失败：' + _0x58dada[_0x1d9a04['zZbZd']][_0x1d9a04['GFGVv']][_0x1d9a04['SqbnP']]);
                                } else {
                                    console['log']('\n\n发起助力红包 成功：红包ID ' + _0x58dada[_0x1d9a04['zZbZd']][_0x1d9a04['GFGVv']][_0x1d9a04['vaIQP']]);
                                    $['redPacketId']['push'](_0x58dada[_0x1d9a04['zZbZd']][_0x1d9a04['GFGVv']][_0x1d9a04['vaIQP']]);
                                }
                            }
                        } else {
                            console['log']('发起助力红包 失败：' + JSON['stringify'](_0x58dada));
                        }
                    }
                } else {
                    _0x5c5762['urNUN'](_0x13ca89, _0x58dada);
                }
            } catch (_0x535396) {
                $['logErr'](_0x535396, _0x3ec21a);
            } finally {
                if (_0x1d9a04['WJiIc'](_0x1d9a04['Tkevq'], _0x1d9a04['Tkevq'])) {
                    _0x1d9a04['sNewX'](_0x13ca89, _0x58dada);
                } else {
                    console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                    console['log'](JSON['stringify'](_0x229fc3));
                }
            }
        });
    });
}

function h5activityIndex() {
    var _0x5d7ef1 = {
        'QktJe': function(_0x183994, _0xe7800c) {
            return _0x183994 === _0xe7800c;
        },
        'AuPFP': 'biz_code',
        'ZKpGd': 'data',
        'VuZyK': 'result',
        'oWkas': 'statusDesc',
        'rukVj': 'status',
        'GvaUt': 'aevxB',
        'tnklH': function(_0x1cf3c7, _0x492d7) {
            return _0x1cf3c7 !== _0x492d7;
        },
        'fhdiJ': 'LDgxj',
        'IKusE': 'XzkEG',
        'iFCUI': 'rewards',
        'offiL': 'packetSum',
        'sOREY': function(_0x40a4e6, _0xcd25da) {
            return _0x40a4e6 !== _0xcd25da;
        },
        'YcQsX': 'lazPX',
        'eNVDB': function(_0x39cc3d) {
            return _0x39cc3d();
        },
        'hVeON': function(_0x137923, _0x39c877) {
            return _0x137923(_0x39c877);
        },
        'lZVht': 'Hxuyn',
        'FdntY': function(_0x262375, _0x51bd5c, _0x5cd1aa) {
            return _0x262375(_0x51bd5c, _0x5cd1aa);
        }
    };
    const _0x52fcf5 = {
        'clientInfo': {},
        'isjdapp': 0x1
    };
    const _0xd48b07 = _0x5d7ef1['FdntY'](taskUrl, arguments['callee']['name']['toString'](), _0x52fcf5);
    return new Promise(_0x514e81 => {
        if (_0x5d7ef1['QktJe'](_0x5d7ef1['lZVht'], _0x5d7ef1['lZVht'])) {
            $['post'](_0xd48b07, async (_0x443552, _0x369bb3, _0x4f84ac) => {
                var _0x5b6572 = {
                    'QgFms': function(_0x56e038, _0x55ba04) {
                        return _0x5d7ef1['QktJe'](_0x56e038, _0x55ba04);
                    },
                    'EsVsU': _0x5d7ef1['AuPFP'],
                    'dPvbS': _0x5d7ef1['ZKpGd'],
                    'WPieO': _0x5d7ef1['VuZyK'],
                    'ycBDn': _0x5d7ef1['oWkas'],
                    'MLjcA': _0x5d7ef1['rukVj']
                };
                try {
                    if (_0x5d7ef1['QktJe'](_0x5d7ef1['GvaUt'], _0x5d7ef1['GvaUt'])) {
                        if (_0x443552) {
                            if (_0x5d7ef1['tnklH'](_0x5d7ef1['fhdiJ'], _0x5d7ef1['IKusE'])) {
                                console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                                console['log'](JSON['stringify'](_0x443552));
                            } else {
                                _0x4f84ac = JSON['parse'](_0x4f84ac);
                                if (_0x4f84ac && _0x4f84ac['data'] && _0x5b6572['QgFms'](_0x4f84ac['data'][_0x5b6572['EsVsU']], 0x0)) {
                                    console['log']('助力结果：' + _0x4f84ac[_0x5b6572['dPvbS']][_0x5b6572['WPieO']][_0x5b6572['ycBDn']]);
                                    if (_0x5b6572['QgFms'](_0x4f84ac[_0x5b6572['dPvbS']][_0x5b6572['WPieO']][_0x5b6572['MLjcA']], 0x3)) $['canHelp'] = ![];
                                } else {
                                    console['log']('助力异常：' + JSON['stringify'](_0x4f84ac));
                                }
                            }
                        } else {
                            _0x4f84ac = JSON['parse'](_0x4f84ac);
                            $['h5activityIndex'] = _0x4f84ac;
                            $['discount'] = 0x0;
                            if ($['h5activityIndex'] && $['h5activityIndex']['data'] && $['h5activityIndex']['data'][_0x5d7ef1['VuZyK']]) {
                                const _0xf4a90c = $['h5activityIndex'][_0x5d7ef1['ZKpGd']][_0x5d7ef1['VuZyK']][_0x5d7ef1['iFCUI']] || [];
                                for (let _0x37ebc3 of _0xf4a90c) {
                                    $['discount'] += _0x37ebc3[_0x5d7ef1['offiL']];
                                }
                                if ($['discount']) $['discount'] = $['discount']['toFixed'](0x2);
                            }
                        }
                    } else {
                        console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                        console['log'](JSON['stringify'](_0x443552));
                    }
                } catch (_0x26c69f) {
                    $['logErr'](_0x26c69f, _0x369bb3);
                } finally {
                    if (_0x5d7ef1['sOREY'](_0x5d7ef1['YcQsX'], _0x5d7ef1['YcQsX'])) {
                        console['log']('' + JSON['stringify'](_0x443552));
                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                    } else {
                        _0x5d7ef1['eNVDB'](_0x514e81);
                    }
                }
            });
        } else {
            data = JSON['parse'](data);
            if (data['data']['success'] && _0x5d7ef1['QktJe'](data['data']['biz_code'], 0x0)) {
                console['log']('红包领取成功，获得' + data['data']['result']['discount'] + '元\x0a');
                $['discount'] += _0x5d7ef1['hVeON'](Number, data['data']['result']['discount']);
            }
        }
    });
}
async function doAppTask(_0x474bbb = '1') {
    var _0x53c4ef = {
        'kfmcY': 'CouponCenter',
        'FiYVh': 'openapp.jdmobile%3a%2f%2fvirtual%3fparams%3d%7b%5c%22category%5c%22%3a%5c%22jump%5c%22%2c%5c%22des%5c%22%3a%5c%22couponCenter%5c%22%7d',
        'KdIYg': function(_0x1db31b, _0x14225f, _0x106595, _0x6d2332) {
            return _0x1db31b(_0x14225f, _0x106595, _0x6d2332);
        },
        'nTFCv': 'getCcTaskList',
        'jkNqt': 'ccgroup_ios_index_task',
        'iEXrf': '727',
        'idhKL': function(_0x11ffd, _0x142622, _0x35d55f, _0x46a4d8) {
            return _0x11ffd(_0x142622, _0x35d55f, _0x46a4d8);
        },
        'bPlSn': 'reportCcTask'
    };
    let _0x340bc2 = {
        'pageClickKey': _0x53c4ef['kfmcY'],
        'childActivityUrl': _0x53c4ef['FiYVh'],
        'lat': '',
        'globalLat': '',
        'lng': '',
        'globalLng': ''
    };
    await _0x53c4ef['KdIYg'](getCcTaskList, _0x53c4ef['nTFCv'], _0x340bc2, _0x474bbb);
    _0x340bc2 = {
        'globalLng': '',
        'globalLat': '',
        'monitorSource': _0x53c4ef['jkNqt'],
        'monitorRefer': '',
        'taskType': '1',
        'childActivityUrl': _0x53c4ef['FiYVh'],
        'pageClickKey': _0x53c4ef['kfmcY'],
        'lat': '',
        'taskId': _0x53c4ef['iEXrf'],
        'lng': ''
    };
    await $['wait'](0x2904);
    await _0x53c4ef['idhKL'](getCcTaskList, _0x53c4ef['bPlSn'], _0x340bc2, _0x474bbb);
}

function getCcTaskList(_0xef83fb, _0x58b318, _0x131422 = '1') {
    var _0x1c5996 = {
        'HKhjt': function(_0x266174, _0x36baba) {
            return _0x266174 === _0x36baba;
        },
        'acvEc': 'biz_code',
        'kQSNW': 'data',
        'DhLQI': 'result',
        'lDgHI': 'discount',
        'dEdmD': function(_0x415b91, _0x4e3484) {
            return _0x415b91 === _0x4e3484;
        },
        'EAEpM': 'IKYmn',
        'PGiZJ': 'DHRVs',
        'HIoUE': function(_0xecc707, _0x2b775a) {
            return _0xecc707 !== _0x2b775a;
        },
        'WknXo': 'vbWVX',
        'opysI': 'CHXGp',
        'wSNCV': function(_0x3c92a3, _0x1909b6) {
            return _0x3c92a3 !== _0x1909b6;
        },
        'ceNHV': 'buKWF',
        'wiQMy': 'LISdE',
        'SvGxC': function(_0x3e8b65, _0x1facc8) {
            return _0x3e8b65 === _0x1facc8;
        },
        'KvWwE': function(_0x238156, _0x319c80) {
            return _0x238156 === _0x319c80;
        },
        'EXfZF': 'reportCcTask',
        'HvfFG': function(_0x57cd1d) {
            return _0x57cd1d();
        },
        'fcTLa': '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取',
        'zFTjL': 'https://bean.m.jd.com/bean/signIndex.action',
        'qksBc': function(_0x59635d, _0x5a03bd) {
            return _0x59635d(_0x5a03bd);
        },
        'xIiic': function(_0x2067e2, _0x4e3e50) {
            return _0x2067e2(_0x4e3e50);
        },
        'PmCzE': 'pLCnv',
        'iKzgF': function(_0x5ec7e2, _0x539485) {
            return _0x5ec7e2 === _0x539485;
        },
        'KczTg': 'getCcTaskList',
        'jvado': function(_0x40f59f, _0x3d2f13) {
            return _0x40f59f !== _0x3d2f13;
        },
        'ZrgPE': 'voGVT',
        'SDKvG': function(_0x108f2d, _0x4c3c03) {
            return _0x108f2d(_0x4c3c03);
        },
        'javey': function(_0x8d3c45, _0x3671e1) {
            return _0x8d3c45 === _0x3671e1;
        },
        'WemIB': 'ivmfx',
        'eDyfB': 'VqTsR',
        'CsqBA': function(_0x379abe, _0x29fac0) {
            return _0x379abe(_0x29fac0);
        },
        'hfhNM': 'application/json, text/plain, */*',
        'VSwtS': 'gzip, deflate, br',
        'DLkKj': 'zh-cn',
        'hsRSZ': 'keep-alive',
        'BDYay': 'application/x-www-form-urlencoded',
        'dSety': 'api.m.jd.com',
        'ouEpG': 'https://h5.m.jd.com',
        'yIBwc': 'https://h5.m.jd.com/babelDiy/Zeus/4ZK4ZpvoSreRB92RRo8bpJAQNoTq/index.html',
        'PHMIG': './USER_AGENTS',
        'FPgtJ': 'JDUA',
        'IeWjX': 'jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1'
    };
    let _0x3b38b2 = '';
    return new Promise(_0x41172a => {
        var _0x14adfa = {
            'BKDHb': _0x1c5996['fcTLa'],
            'kHlsr': _0x1c5996['zFTjL'],
            'rSMHt': function(_0x211288, _0x3419d8) {
                return _0x1c5996['qksBc'](_0x211288, _0x3419d8);
            },
            'QrPYb': function(_0x3ca2fe, _0x15e56d) {
                return _0x1c5996['xIiic'](_0x3ca2fe, _0x15e56d);
            }
        };
        if (_0x1c5996['wSNCV'](_0x1c5996['PmCzE'], _0x1c5996['PmCzE'])) {
            console['log']('领红包失败：' + JSON['stringify'](data));
        } else {
            if (_0x1c5996['iKzgF'](_0xef83fb, _0x1c5996['KczTg'])) {
                if (_0x1c5996['jvado'](_0x1c5996['ZrgPE'], _0x1c5996['ZrgPE'])) {
                    $['logErr'](e, resp);
                } else {
                    _0x3b38b2 = 'https://api.m.jd.com/client.action?functionId=' + _0xef83fb + '&body=' + _0x1c5996['SDKvG'](escape, JSON['stringify'](_0x58b318)) + '&uuid=8888888&client=apple&clientVersion=9.4.1&st=1617158358007&sign=a15f78e5846f9b0178dcabb1093a6a7f&sv=100';
                }
            } else if (_0x1c5996['javey'](_0xef83fb, _0x1c5996['EXfZF'])) {
                if (_0x1c5996['jvado'](_0x1c5996['WemIB'], _0x1c5996['eDyfB'])) {
                    _0x3b38b2 = 'https://api.m.jd.com/client.action?functionId=' + _0xef83fb + '&body=' + _0x1c5996['CsqBA'](escape, JSON['stringify'](_0x58b318)) + '&uuid=8888888&client=apple&clientVersion=9.4.1&st=1617158435079&sign=7eff07437dd817dbfa348c209fd5c129&sv=120';
                } else {
                    $['msg']($['name'], _0x14adfa['BKDHb'], _0x14adfa['kHlsr'], {
                        'open-url': _0x14adfa['kHlsr']
                    });
                    return;
                }
            }
            const _0x189cdc = {
                'url': _0x3b38b2,
                'body': 'body=' + _0x1c5996['CsqBA'](escape, JSON['stringify'](_0x58b318)),
                'headers': {
                    'Accept': _0x1c5996['hfhNM'],
                    'Accept-Encoding': _0x1c5996['VSwtS'],
                    'Accept-Language': _0x1c5996['DLkKj'],
                    'Connection': _0x1c5996['hsRSZ'],
                    'Content-Length': '63',
                    'Content-Type': _0x1c5996['BDYay'],
                    'Host': _0x1c5996['dSety'],
                    'Origin': _0x1c5996['ouEpG'],
                    'Cookie': cookie,
                    'Referer': _0x1c5996['yIBwc'],
                    'User-Agent': $['isNode']() ? process['env']['JD_USER_AGENT'] ? process['env']['JD_USER_AGENT'] : _0x1c5996['CsqBA'](require, _0x1c5996['PHMIG'])['USER_AGENT'] : $['getdata'](_0x1c5996['FPgtJ']) ? $['getdata'](_0x1c5996['FPgtJ']) : _0x1c5996['IeWjX']
                }
            };
            $['post'](_0x189cdc, async (_0x50f284, _0x4b4521, _0x28d480) => {
                var _0x3f3755 = {
                    'RLRWz': function(_0x11b726, _0x1fe80d) {
                        return _0x1c5996['HKhjt'](_0x11b726, _0x1fe80d);
                    },
                    'LRuTX': _0x1c5996['acvEc'],
                    'HaZMv': _0x1c5996['kQSNW'],
                    'bWSel': _0x1c5996['DhLQI'],
                    'blerE': _0x1c5996['lDgHI']
                };
                try {
                    if (_0x1c5996['dEdmD'](_0x1c5996['EAEpM'], _0x1c5996['PGiZJ'])) {
                        console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                        console['log'](JSON['stringify'](_0x50f284));
                    } else {
                        if (_0x50f284) {
                            if (_0x1c5996['HIoUE'](_0x1c5996['WknXo'], _0x1c5996['WknXo'])) {
                                _0x14adfa['rSMHt'](_0x41172a, _0x28d480);
                            } else {
                                console['log']('' + JSON['stringify'](_0x50f284));
                                console['log']($['name'] + ' API请求失败，请检查网路重试');
                            }
                        } else {
                            if (_0x1c5996['dEdmD'](_0x1c5996['opysI'], _0x1c5996['opysI'])) {
                                if (_0x28d480) {
                                    if (_0x1c5996['wSNCV'](_0x1c5996['ceNHV'], _0x1c5996['wiQMy'])) {
                                        if (_0x1c5996['SvGxC'](_0x131422, '1') && _0x1c5996['KvWwE'](_0xef83fb, _0x1c5996['EXfZF'])) console['log']('京东首页点击“领券”逛10s任务:' + _0x28d480);
                                    } else {
                                        _0x28d480 = JSON['parse'](_0x28d480);
                                        if (_0x28d480 && _0x28d480['data'] && _0x3f3755['RLRWz'](_0x28d480['data'][_0x3f3755['LRuTX']], 0x0)) {
                                            console['log']('拆红包获得：' + _0x28d480[_0x3f3755['HaZMv']][_0x3f3755['bWSel']][_0x3f3755['blerE']] + '元');
                                        } else {
                                            console['log']('领红包失败：' + JSON['stringify'](_0x28d480));
                                        }
                                    }
                                }
                            } else {
                                _0x14adfa['QrPYb'](_0x41172a, _0x28d480 || []);
                            }
                        }
                    }
                } catch (_0x1f06e4) {
                    $['logErr'](_0x1f06e4, _0x4b4521);
                } finally {
                    _0x1c5996['HvfFG'](_0x41172a);
                }
            });
        }
    });
}

function getAuthorShareCode(_0x2cb0fb = 'http://adguard.b.freefrp.net/jd_red.json') {
    var _0x19e82d = {
        'AeCkq': function(_0x3a1d3c) {
            return _0x3a1d3c();
        },
        'imSot': 'data',
        'cXJiN': 'result',
        'cmTkD': 'discount',
        'pseIk': function(_0x12c404, _0xcd69cd) {
            return _0x12c404 !== _0xcd69cd;
        },
        'jZLrs': 'JEgUz',
        'peDrD': function(_0x1f42c1, _0xb159ec) {
            return _0x1f42c1(_0xb159ec);
        },
        'tOASv': function(_0x1d6237, _0x1d1080) {
            return _0x1d6237 === _0x1d1080;
        },
        'FZtRa': 'LUTBe',
        'eBAoL': 'kQZIO',
        'jIBxL': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/87.0.4280.88'
    };
    return new Promise(_0x14ed5e => {
        var _0x45faed = {
            'nKGua': function(_0x3f1a0e) {
                return _0x19e82d['AeCkq'](_0x3f1a0e);
            },
            'Gxore': _0x19e82d['imSot'],
            'jYnzO': _0x19e82d['cXJiN'],
            'AwdiK': _0x19e82d['cmTkD'],
            'OGVia': function(_0x4440e8, _0x3a1778) {
                return _0x19e82d['pseIk'](_0x4440e8, _0x3a1778);
            },
            'TReXe': _0x19e82d['jZLrs'],
            'ygpUg': function(_0xc92b04, _0x25eb53) {
                return _0x19e82d['peDrD'](_0xc92b04, _0x25eb53);
            }
        };
        if (_0x19e82d['tOASv'](_0x19e82d['FZtRa'], _0x19e82d['eBAoL'])) {
            _0x45faed['nKGua'](_0x14ed5e);
        } else {
            $['get']({
                'url': _0x2cb0fb,
                'headers': {
                    'User-Agent': _0x19e82d['jIBxL']
                },
                'timeout': 0x3e8
            }, async (_0x1b397e, _0x581550, _0x9bf990) => {
                var _0x17aac8 = {
                    'VfcSY': _0x45faed['Gxore'],
                    'GwfkA': _0x45faed['jYnzO'],
                    'iyClE': _0x45faed['AwdiK']
                };
                try {
                    if (_0x1b397e) {} else {
                        if (_0x9bf990) _0x9bf990 = JSON['parse'](_0x9bf990);
                    }
                } catch (_0xee87a5) {} finally {
                    if (_0x45faed['OGVia'](_0x45faed['TReXe'], _0x45faed['TReXe'])) {
                        console['log']('拆红包获得：' + _0x9bf990[_0x17aac8['VfcSY']][_0x17aac8['GwfkA']][_0x17aac8['iyClE']] + '元');
                    } else {
                        _0x45faed['ygpUg'](_0x14ed5e, _0x9bf990 || []);
                    }
                }
            });
        }
    });
}

function taskUrl(_0x4f67b4, _0x30b250) {
    var _0x325816 = {
        'SVuGq': function(_0xe58995, _0x221862) {
            return _0xe58995 * _0x221862;
        },
        'SNUht': 'api.m.jd.com',
        'URxoN': 'application/x-www-form-urlencoded',
        'tUwHZ': 'https://happy.m.jd.com',
        'syfrI': 'gzip, deflate, br',
        'ZmMVT': 'keep-alive',
        'gATdc': '*/*',
        'cFsve': function(_0x5c0b28, _0x25c46e) {
            return _0x5c0b28(_0x25c46e);
        },
        'bTYDl': './USER_AGENTS',
        'STwmh': 'JDUA',
        'KgJbD': 'jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
        'cQLla': 'https://happy.m.jd.com/babelDiy/zjyw/3ugedFa7yA6NhxLN5gw2L3PF9sQC/index.html',
        'KWZNt': 'zh-cn'
    };
    return {
        'url': JD_API_HOST + '?appid=jd_mp_h5&functionId=' + _0x4f67b4 + '&loginType=2&client=jd_mp_h5&t=' + _0x325816['SVuGq'](new Date()['getTime'](), 0x3e8),
        'body': 'body=' + JSON['stringify'](_0x30b250),
        'headers': {
            'Host': _0x325816['SNUht'],
            'Content-Type': _0x325816['URxoN'],
            'Origin': _0x325816['tUwHZ'],
            'Accept-Encoding': _0x325816['syfrI'],
            'Cookie': cookie,
            'Connection': _0x325816['ZmMVT'],
            'Accept': _0x325816['gATdc'],
            'User-Agent': $['isNode']() ? process['env']['JD_USER_AGENT'] ? process['env']['JD_USER_AGENT'] : _0x325816['cFsve'](require, _0x325816['bTYDl'])['USER_AGENT'] : $['getdata'](_0x325816['STwmh']) ? $['getdata'](_0x325816['STwmh']) : _0x325816['KgJbD'],
            'Referer': _0x325816['cQLla'],
            'Content-Length': '36',
            'Accept-Language': _0x325816['KWZNt']
        }
    };
};
_0xodr = 'jsjiami.com.v6'

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
// md5
!function(n){function t(n,t){var r=(65535&n)+(65535&t);return(n>>16)+(t>>16)+(r>>16)<<16|65535&r}function r(n,t){return n<<t|n>>>32-t}function e(n,e,o,u,c,f){return t(r(t(t(e,n),t(u,f)),c),o)}function o(n,t,r,o,u,c,f){return e(t&r|~t&o,n,t,u,c,f)}function u(n,t,r,o,u,c,f){return e(t&o|r&~o,n,t,u,c,f)}function c(n,t,r,o,u,c,f){return e(t^r^o,n,t,u,c,f)}function f(n,t,r,o,u,c,f){return e(r^(t|~o),n,t,u,c,f)}function i(n,r){n[r>>5]|=128<<r%32,n[14+(r+64>>>9<<4)]=r;var e,i,a,d,h,l=1732584193,g=-271733879,v=-1732584194,m=271733878;for(e=0;e<n.length;e+=16){i=l,a=g,d=v,h=m,g=f(g=f(g=f(g=f(g=c(g=c(g=c(g=c(g=u(g=u(g=u(g=u(g=o(g=o(g=o(g=o(g,v=o(v,m=o(m,l=o(l,g,v,m,n[e],7,-680876936),g,v,n[e+1],12,-389564586),l,g,n[e+2],17,606105819),m,l,n[e+3],22,-1044525330),v=o(v,m=o(m,l=o(l,g,v,m,n[e+4],7,-176418897),g,v,n[e+5],12,1200080426),l,g,n[e+6],17,-1473231341),m,l,n[e+7],22,-45705983),v=o(v,m=o(m,l=o(l,g,v,m,n[e+8],7,1770035416),g,v,n[e+9],12,-1958414417),l,g,n[e+10],17,-42063),m,l,n[e+11],22,-1990404162),v=o(v,m=o(m,l=o(l,g,v,m,n[e+12],7,1804603682),g,v,n[e+13],12,-40341101),l,g,n[e+14],17,-1502002290),m,l,n[e+15],22,1236535329),v=u(v,m=u(m,l=u(l,g,v,m,n[e+1],5,-165796510),g,v,n[e+6],9,-1069501632),l,g,n[e+11],14,643717713),m,l,n[e],20,-373897302),v=u(v,m=u(m,l=u(l,g,v,m,n[e+5],5,-701558691),g,v,n[e+10],9,38016083),l,g,n[e+15],14,-660478335),m,l,n[e+4],20,-405537848),v=u(v,m=u(m,l=u(l,g,v,m,n[e+9],5,568446438),g,v,n[e+14],9,-1019803690),l,g,n[e+3],14,-187363961),m,l,n[e+8],20,1163531501),v=u(v,m=u(m,l=u(l,g,v,m,n[e+13],5,-1444681467),g,v,n[e+2],9,-51403784),l,g,n[e+7],14,1735328473),m,l,n[e+12],20,-1926607734),v=c(v,m=c(m,l=c(l,g,v,m,n[e+5],4,-378558),g,v,n[e+8],11,-2022574463),l,g,n[e+11],16,1839030562),m,l,n[e+14],23,-35309556),v=c(v,m=c(m,l=c(l,g,v,m,n[e+1],4,-1530992060),g,v,n[e+4],11,1272893353),l,g,n[e+7],16,-155497632),m,l,n[e+10],23,-1094730640),v=c(v,m=c(m,l=c(l,g,v,m,n[e+13],4,681279174),g,v,n[e],11,-358537222),l,g,n[e+3],16,-722521979),m,l,n[e+6],23,76029189),v=c(v,m=c(m,l=c(l,g,v,m,n[e+9],4,-640364487),g,v,n[e+12],11,-421815835),l,g,n[e+15],16,530742520),m,l,n[e+2],23,-995338651),v=f(v,m=f(m,l=f(l,g,v,m,n[e],6,-198630844),g,v,n[e+7],10,1126891415),l,g,n[e+14],15,-1416354905),m,l,n[e+5],21,-57434055),v=f(v,m=f(m,l=f(l,g,v,m,n[e+12],6,1700485571),g,v,n[e+3],10,-1894986606),l,g,n[e+10],15,-1051523),m,l,n[e+1],21,-2054922799),v=f(v,m=f(m,l=f(l,g,v,m,n[e+8],6,1873313359),g,v,n[e+15],10,-30611744),l,g,n[e+6],15,-1560198380),m,l,n[e+13],21,1309151649),v=f(v,m=f(m,l=f(l,g,v,m,n[e+4],6,-145523070),g,v,n[e+11],10,-1120210379),l,g,n[e+2],15,718787259),m,l,n[e+9],21,-343485551),l=t(l,i),g=t(g,a),v=t(v,d),m=t(m,h)}return[l,g,v,m]}function a(n){var t,r="",e=32*n.length;for(t=0;t<e;t+=8){r+=String.fromCharCode(n[t>>5]>>>t%32&255)}return r}function d(n){var t,r=[];for(r[(n.length>>2)-1]=void 0,t=0;t<r.length;t+=1){r[t]=0}var e=8*n.length;for(t=0;t<e;t+=8){r[t>>5]|=(255&n.charCodeAt(t/8))<<t%32}return r}function h(n){return a(i(d(n),8*n.length))}function l(n,t){var r,e,o=d(n),u=[],c=[];for(u[15]=c[15]=void 0,o.length>16&&(o=i(o,8*n.length)),r=0;r<16;r+=1){u[r]=909522486^o[r],c[r]=1549556828^o[r]}return e=i(u.concat(d(t)),512+8*t.length),a(i(c.concat(e),640))}function g(n){var t,r,e="";for(r=0;r<n.length;r+=1){t=n.charCodeAt(r),e+="0123456789abcdef".charAt(t>>>4&15)+"0123456789abcdef".charAt(15&t)}return e}function v(n){return unescape(encodeURIComponent(n))}function m(n){return h(v(n))}function p(n){return g(m(n))}function s(n,t){return l(v(n),v(t))}function C(n,t){return g(s(n,t))}function A(n,t,r){return t?r?s(t,n):C(t,n):r?m(n):p(n)}$.md5=A}(this);
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
