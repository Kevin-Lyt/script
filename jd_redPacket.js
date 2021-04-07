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
 *Progcessed By JSDec in 1.44s
 *JSDec - JSDec.js.org
 */
if ($['isNode']()) {
    Object['keys'](jdCookieNode)['forEach'](_0x51e4e3 => {
        cookiesArr['push'](jdCookieNode[_0x51e4e3]);
    });
    if (process['env']['JD_DEBUG'] && process['env']['JD_DEBUG'] === 'false') console['log'] = () => {};
    if (JSON['stringify'](process['env'])['indexOf']('GITHUB') > -0x1) process['exit'](0x0);
} else {
    cookiesArr = [$['getdata']('CookieJD'), $['getdata']('CookieJD2'), ...jsonParse($['getdata']('CookiesJD') || '[]')['map'](_0x2ca67f => _0x2ca67f['cookie'])]['filter'](_0x471e9a => !!_0x471e9a);
}
const JD_API_HOST = 'https://api.m.jd.com/api';
!(async () => {
    var _0xa164d5 = {
        'CQwxH': 'data',
        'ICUNF': 'result',
        'qHWmi': 'rewards',
        'RPgDG': 'hasSendNumber',
        'GfuZT': 'assistants',
        'EqLji': '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取',
        'vVMbm': 'https://bean.m.jd.com/bean/signIndex.action',
        'UxYGf': function(_0x230e50) {
            return _0x230e50();
        },
        'bIPFH': function(_0x1d29b9, _0x1d5b89) {
            return _0x1d29b9(_0x1d5b89);
        },
        'dalwW': 'http://adguard.b.freefrp.net/jd_red.json',
        'IsWns': function(_0x592eb9, _0x1c18a8) {
            return _0x592eb9 < _0x1c18a8;
        },
        'WpeFv': function(_0x313e34, _0x2c802e) {
            return _0x313e34 !== _0x2c802e;
        },
        'NHMjd': 'AZRwk',
        'lEAtA': 'Rmgaw',
        'FduxF': function(_0x501fad, _0xbb566a) {
            return _0x501fad + _0xbb566a;
        },
        'VYYwz': function(_0x793217) {
            return _0x793217();
        },
        'jZZCh': function(_0x7de00e) {
            return _0x7de00e();
        },
        'xCGAI': function(_0x296300) {
            return _0x296300();
        },
        'JFXOz': 'jGaDP',
        'Ymjsk': function(_0x584cf0, _0x1840af) {
            return _0x584cf0(_0x1840af);
        },
        'UxvaL': function(_0x1d88d9, _0x44796d) {
            return _0x1d88d9 > _0x44796d;
        },
        'jJJKB': function(_0x47fb37, _0x573939) {
            return _0x47fb37 === _0x573939;
        },
        'eNYxd': 'LsEYe',
        'KsGBA': 'mrMDS',
        'ljMIz': function(_0x5d0e42, _0x3b4593) {
            return _0x5d0e42 !== _0x3b4593;
        },
        'UtRpe': 'IDdMv',
        'nloUF': function(_0x2695c2, _0x33d6a5) {
            return _0x2695c2(_0x33d6a5);
        }
    };
    if (!cookiesArr[0x0]) {
        $['msg']($['name'], _0xa164d5['EqLji'], _0xa164d5['vVMbm'], {
            'open-url': _0xa164d5['vVMbm']
        });
        return;
    }
    let _0x547dd4 = await _0xa164d5['UxYGf'](getAuthorShareCode),
        _0x2549ec = await _0xa164d5['bIPFH'](getAuthorShareCode, _0xa164d5['dalwW']);
    $['authorMyShareIds'] = [..._0x547dd4 || [], ..._0x2549ec || []];
    for (let _0x26be52 = 0x0; _0xa164d5['IsWns'](_0x26be52, cookiesArr['length']); _0x26be52++) {
        if (_0xa164d5['WpeFv'](_0xa164d5['NHMjd'], _0xa164d5['lEAtA'])) {
            if (cookiesArr[_0x26be52]) {
                cookie = cookiesArr[_0x26be52];
                $['UserName'] = _0xa164d5['bIPFH'](decodeURIComponent, cookie['match'](/pt_pin=([^; ]+)(?=;?)/) && cookie['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1]);
                $['index'] = _0xa164d5['FduxF'](_0x26be52, 0x1);
                $['isLogin'] = !![];
                $['nickName'] = '';
                await _0xa164d5['VYYwz'](TotalBean);
                console['log']('\n****开始【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']) + '****\n');
                if (!$['isLogin']) {
                    $['msg']($['name'], '【提示】cookie已失效', '京东账号' + $['index'] + ' ' + ($['nickName'] || $['UserName']) + '\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action', {
                        'open-url': _0xa164d5['vVMbm']
                    });
                    if ($['isNode']()) {
                        await notify['sendNotify']($['name'] + 'cookie已失效 - ' + $['UserName'], '京东账号' + $['index'] + ' ' + $['UserName'] + '\n请重新登录获取cookie');
                    }
                    continue;
                }
                $['discount'] = 0x0;
                await _0xa164d5['jZZCh'](redPacket);
                await _0xa164d5['xCGAI'](showMsg);
            }
        } else {
            $['taskHomePageData'] = JSON['parse'](data);
        }
    }
    for (let _0x5a78b9 = 0x0; _0xa164d5['IsWns'](_0x5a78b9, cookiesArr['length']); _0x5a78b9++) {
        if (_0xa164d5['WpeFv'](_0xa164d5['JFXOz'], _0xa164d5['JFXOz'])) {
            if (err) {
                console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                console['log'](JSON['stringify'](err));
            } else {
                data = JSON['parse'](data);
            }
        } else {
            cookie = cookiesArr[_0x5a78b9];
            $['index'] = _0xa164d5['FduxF'](_0x5a78b9, 0x1);
            $['UserName'] = _0xa164d5['Ymjsk'](decodeURIComponent, cookie['match'](/pt_pin=([^; ]+)(?=;?)/) && cookie['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1]);
            $['canHelp'] = !![];
            $['redPacketId'] = [...new Set($['redPacketId'])];
            if (cookiesArr && _0xa164d5['UxvaL'](cookiesArr['length'], 0x2)) {
                console['log']('\n\n自己账号内部互助');
                for (let _0x14d9c1 of $['redPacketId']) {
                    if (_0xa164d5['jJJKB'](_0xa164d5['eNYxd'], _0xa164d5['KsGBA'])) {
                        console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                        console['log'](JSON['stringify'](err));
                    } else {
                        console['log']('账号 ' + $['index'] + ' ' + $['UserName'] + ' 开始给 ' + _0x14d9c1 + ' 进行助力');
                        await _0xa164d5['Ymjsk'](jinli_h5assist, _0x14d9c1);
                        if (!$['canHelp']) {
                            console['log']('次数已用完，跳出助力');
                            break;
                        }
                    }
                }
            }
            if ($['canHelp']) {
                if (_0xa164d5['ljMIz'](_0xa164d5['UtRpe'], _0xa164d5['UtRpe'])) {
                    const _0x43dc00 = $['h5activityIndex'][_0xa164d5['CQwxH']][_0xa164d5['ICUNF']][_0xa164d5['qHWmi']] || [];
                    $['hasSendNumber'] = $['h5activityIndex'][_0xa164d5['CQwxH']][_0xa164d5['ICUNF']][_0xa164d5['RPgDG']];
                    if ($['h5activityIndex'][_0xa164d5['CQwxH']][_0xa164d5['ICUNF']][_0xa164d5['GfuZT']]) {
                        $['assistants'] = $['h5activityIndex'][_0xa164d5['CQwxH']][_0xa164d5['ICUNF']][_0xa164d5['GfuZT']]['length'] || 0x0;
                    }
                } else {
                    console['log']('\n\n有剩余助力机会则给作者lxk0301进行助力');
                    for (let _0x52e094 of $['authorMyShareIds'] || []) {
                        console['log']('\n账号 ' + $['index'] + ' ' + $['UserName'] + ' 开始给作者lxk0301 ' + _0x52e094 + ' 进行助力');
                        await _0xa164d5['nloUF'](jinli_h5assist, _0x52e094);
                        if (!$['canHelp']) {
                            console['log']('次数已用完，跳出助力');
                            break;
                        }
                    }
                }
            }
        }
    }
})()['catch'](_0x59b9fd => {
    $['log']('', '❌ ' + $['name'] + ', 失败! 原因: ' + _0x59b9fd + '!', '');
})['finally'](() => {
    $['done']();
});
async function redPacket() {
    var _0x3a1a49 = {
        'QdDpm': '2|4|1|3|0',
        'XYvFJ': function(_0x5a3c21) {
            return _0x5a3c21();
        },
        'gWqNS': function(_0x480cf4) {
            return _0x480cf4();
        },
        'pQEiK': function(_0x2adbe9) {
            return _0x2adbe9();
        }
    };
    try {
        var _0x31e25c = _0x3a1a49['QdDpm']['split']('|'),
            _0x212d8c = 0x0;
        while (!![]) {
            switch (_0x31e25c[_0x212d8c++]) {
                case '0':
                    await _0x3a1a49['XYvFJ'](h5activityIndex);
                    continue;
                case '1':
                    await _0x3a1a49['XYvFJ'](h5activityIndex);
                    continue;
                case '2':
                    await _0x3a1a49['gWqNS'](taskHomePage);
                    continue;
                case '3':
                    await _0x3a1a49['pQEiK'](red);
                    continue;
                case '4':
                    await _0x3a1a49['pQEiK'](doTask);
                    continue;
            }
            break;
        }
    } catch (_0x3cdfeb) {
        $['logErr'](_0x3cdfeb);
    }
}

function showMsg() {
    console['log']('\x0a\x0a' + $['name'] + '获得红包：' + $['discount'] + '元\n\n');
}
async function doTask() {
    var _0x284a03 = {
        'iTBnk': 'data',
        'iWnuh': 'result',
        'SDUSu': 'statusDesc',
        'vVNTU': function(_0x443b80, _0x461c68) {
            return _0x443b80 === _0x461c68;
        },
        'zmsTT': 'biz_code',
        'vYGyi': 'discount',
        'rihbm': 'DzleI',
        'MBpgq': function(_0xadaf4a, _0x4b30f0) {
            return _0xadaf4a > _0x4b30f0;
        },
        'CtCfv': function(_0x1b2ca4, _0x33dfed) {
            return _0x1b2ca4 !== _0x33dfed;
        },
        'VXwQd': 'XRTIc',
        'xRNfP': 'IjozR',
        'ZpCDW': function(_0x36d510, _0xac9b2c) {
            return _0x36d510 === _0xac9b2c;
        },
        'uqgdd': 'jBckg',
        'Lacoh': function(_0x43899c, _0x151904) {
            return _0x43899c === _0x151904;
        },
        'FKTZV': 'uutnQ',
        'dNsAo': 'GqOUN',
        'OuwAy': function(_0x35995a, _0xb3027a) {
            return _0x35995a(_0xb3027a);
        },
        'bTIBN': function(_0x3ce464, _0x4ad8e2) {
            return _0x3ce464 === _0x4ad8e2;
        },
        'ayEyI': 'IOZYK',
        'zcgMH': 'qhxWw',
        'vyKAH': function(_0x319f25, _0x3faea7) {
            return _0x319f25(_0x3faea7);
        },
        'NWOQC': function(_0x4ffd2f) {
            return _0x4ffd2f();
        },
        'bVSvU': 'uxGTb',
        'Hrrkr': 'whPwf',
        'AaCGk': 'VERUv',
        'IrEdp': function(_0xc9155a, _0x3559ba) {
            return _0xc9155a(_0x3559ba);
        },
        'HpBVq': function(_0x401560, _0x5eae0e) {
            return _0x401560(_0x5eae0e);
        },
        'JetIO': function(_0x401d4b, _0x10304d) {
            return _0x401d4b === _0x10304d;
        },
        'qgSuP': function(_0x5adec9, _0x18b4cf) {
            return _0x5adec9 !== _0x18b4cf;
        },
        'OdTbv': 'CDXzg',
        'xFaoO': 'pbJHI',
        'svbxv': function(_0x49a8f1) {
            return _0x49a8f1();
        }
    };
    if ($['taskHomePageData'] && _0x284a03['vVNTU']($['taskHomePageData']['code'], 0x0)) {
        if (_0x284a03['vVNTU'](_0x284a03['rihbm'], _0x284a03['rihbm'])) {
            $['taskInfo'] = $['taskHomePageData']['data']['result']['taskInfos'];
            if ($['taskInfo'] && _0x284a03['MBpgq']($['taskInfo']['length'], 0x0)) {
                console['log']('    任务     状态  红包是否领取');
                for (let _0x420527 of $['taskInfo']) {
                    console['log'](_0x420527['title']['slice'](-0x6) + '   ' + (_0x420527['alreadyReceivedCount'] ? _0x420527['alreadyReceivedCount'] : 0x0) + '/' + _0x420527['requireCount'] + '      ' + (_0x284a03['vVNTU'](_0x420527['innerStatus'], 0x4) ? '是' : '否'));
                }
                for (let _0xadd13e of $['taskInfo']) {
                    if (_0x284a03['CtCfv'](_0x284a03['VXwQd'], _0x284a03['xRNfP'])) {
                        if (_0x284a03['ZpCDW'](_0xadd13e['innerStatus'], 0x4)) {
                            if (_0x284a03['ZpCDW'](_0x284a03['uqgdd'], _0x284a03['uqgdd'])) {
                                console['log']('[' + _0xadd13e['title'] + '] 已经领取奖励');
                            } else {
                                console['log']('\n\n发起助力红包 失败：' + data[_0x284a03['iTBnk']][_0x284a03['iWnuh']][_0x284a03['SDUSu']]);
                            }
                        } else if (_0x284a03['Lacoh'](_0xadd13e['innerStatus'], 0x3)) {
                            if (_0x284a03['CtCfv'](_0x284a03['FKTZV'], _0x284a03['dNsAo'])) {
                                await _0x284a03['OuwAy'](receiveTaskRedpacket, _0xadd13e['taskType']);
                            } else {
                                console['log']('助力异常：' + JSON['stringify'](data));
                            }
                        } else if (_0x284a03['bTIBN'](_0xadd13e['innerStatus'], 0x2)) {
                            if (_0x284a03['CtCfv'](_0xadd13e['taskType'], 0x0) && _0x284a03['CtCfv'](_0xadd13e['taskType'], 0x1)) {
                                if (_0x284a03['bTIBN'](_0x284a03['ayEyI'], _0x284a03['zcgMH'])) {
                                    data = JSON['parse'](data);
                                } else {
                                    console['log']('开始做【' + _0xadd13e['title'] + '】任务');
                                    await _0x284a03['OuwAy'](active, _0xadd13e['taskType']);
                                    console['log']('开始领取【' + _0xadd13e['title'] + '】任务所得红包奖励');
                                    await _0x284a03['vyKAH'](receiveTaskRedpacket, _0xadd13e['taskType']);
                                }
                            } else if (_0x284a03['bTIBN'](_0xadd13e['taskType'], 0x1)) {
                                console['log']('开始做【' + _0xadd13e['title'] + '】任务');
                                await _0x284a03['NWOQC'](doAppTask);
                            } else {
                                console['log']('[' + _0xadd13e['title'] + '] 功能未开发');
                            }
                        } else if (_0x284a03['CtCfv'](_0xadd13e['innerStatus'], 0x4)) {
                            if (_0x284a03['bTIBN'](_0x284a03['bVSvU'], _0x284a03['Hrrkr'])) {
                                data = JSON['parse'](data);
                            } else {
                                console['log']('\n开始领取【' + _0xadd13e['title'] + '】任务');
                                await _0x284a03['vyKAH'](startTask, _0xadd13e['taskType']);
                                if (_0x284a03['CtCfv'](_0xadd13e['taskType'], 0x0) && _0x284a03['CtCfv'](_0xadd13e['taskType'], 0x1)) {
                                    if (_0x284a03['bTIBN'](_0x284a03['AaCGk'], _0x284a03['AaCGk'])) {
                                        console['log']('开始做【' + _0xadd13e['title'] + '】任务');
                                        await _0x284a03['IrEdp'](active, _0xadd13e['taskType']);
                                        console['log']('开始领取【' + _0xadd13e['title'] + '】任务所得红包奖励');
                                        await _0x284a03['HpBVq'](receiveTaskRedpacket, _0xadd13e['taskType']);
                                    } else {
                                        console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                                        console['log'](JSON['stringify'](err));
                                    }
                                } else if (_0x284a03['JetIO'](_0xadd13e['taskType'], 0x1)) {
                                    if (_0x284a03['qgSuP'](_0x284a03['OdTbv'], _0x284a03['xFaoO'])) {
                                        console['log']('开始做【' + _0xadd13e['title'] + '】任务');
                                        await _0x284a03['svbxv'](doAppTask);
                                    } else {
                                        console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                                        console['log'](JSON['stringify'](err));
                                    }
                                } else {
                                    console['log']('[' + _0xadd13e['title'] + '] 功能未开发');
                                }
                            }
                        }
                    } else {
                        console['log']('\n获取任务列表异常：' + JSON['stringify']($['taskHomePageData']) + '\x0a');
                    }
                }
            }
        } else {
            data = JSON['parse'](data);
            if (data && data['data'] && _0x284a03['vVNTU'](data['data'][_0x284a03['zmsTT']], 0x0)) {
                console['log']('拆红包获得：' + data[_0x284a03['iTBnk']][_0x284a03['iWnuh']][_0x284a03['vYGyi']] + '元');
            } else {
                console['log']('领红包失败：' + JSON['stringify'](data));
            }
        }
    } else {
        console['log']('\n获取任务列表异常：' + JSON['stringify']($['taskHomePageData']) + '\x0a');
    }
}
async function red() {
    var _0x359c56 = {
        'NtRHF': 'packetSum',
        'qQlGj': 'data',
        'aCoDp': 'result',
        'gOrPj': 'discount',
        'nuTsu': 'rewards',
        'keJbP': 'hasSendNumber',
        'yOaas': 'assistants',
        'YKTdp': function(_0x4b4a56, _0x492dfa) {
            return _0x4b4a56 === _0x492dfa;
        },
        'zsWXd': 'csDPB',
        'hLXmj': 'biz_code',
        'yEjuE': function(_0x2a6590, _0x5e69dc) {
            return _0x2a6590 !== _0x5e69dc;
        },
        'MXKZN': 'XINBI',
        'ylpnH': 'PIrGX',
        'hKTEC': function(_0x1c8788) {
            return _0x1c8788();
        },
        'WOuxC': function(_0x24cb8a, _0x38b272) {
            return _0x24cb8a === _0x38b272;
        },
        'qkhIT': 'HTSRw',
        'gaCSu': 'WGHRf',
        'oIPda': 'redpacketInfo',
        'rtZqz': 'requireAssistNum',
        'lhQnf': function(_0x5a8bcf, _0x3c1892) {
            return _0x5a8bcf + _0x3c1892;
        },
        'zdxnS': 'remainRedpacketNumber',
        'rpmij': 'waitOpenTimes',
        'rHykm': function(_0x3cc975, _0x11d1bd) {
            return _0x3cc975 > _0x11d1bd;
        },
        'nHjoY': 'VSBfP',
        'xdMvB': function(_0x59337b, _0x3114ea) {
            return _0x59337b < _0x3114ea;
        },
        'bWunD': function(_0x3743c7, _0x18f6e4) {
            return _0x3743c7 !== _0x18f6e4;
        },
        'HZQZC': 'WChUU',
        'CKLrI': 'JRYEv',
        'JVZfb': function(_0x55e3c3, _0x457276) {
            return _0x55e3c3(_0x457276);
        },
        'jaHdi': function(_0x48f7a7, _0x4abba3) {
            return _0x48f7a7 === _0x4abba3;
        },
        'urXHm': 'biz_msg'
    };
    $['hasSendNumber'] = 0x0;
    $['assistants'] = 0x0;
    if ($['h5activityIndex'] && $['h5activityIndex']['data'] && $['h5activityIndex']['data'][_0x359c56['aCoDp']]) {
        const _0x5e3dc4 = $['h5activityIndex'][_0x359c56['qQlGj']][_0x359c56['aCoDp']][_0x359c56['nuTsu']] || [];
        $['hasSendNumber'] = $['h5activityIndex'][_0x359c56['qQlGj']][_0x359c56['aCoDp']][_0x359c56['keJbP']];
        if ($['h5activityIndex'][_0x359c56['qQlGj']][_0x359c56['aCoDp']][_0x359c56['yOaas']]) {
            if (_0x359c56['YKTdp'](_0x359c56['zsWXd'], _0x359c56['zsWXd'])) {
                $['assistants'] = $['h5activityIndex'][_0x359c56['qQlGj']][_0x359c56['aCoDp']][_0x359c56['yOaas']]['length'] || 0x0;
            } else {
                $['logErr'](e, resp);
            }
        }
    }
    if ($['h5activityIndex'] && $['h5activityIndex']['data'] && _0x359c56['YKTdp']($['h5activityIndex']['data'][_0x359c56['hLXmj']], 0x2712)) {
        if (_0x359c56['yEjuE'](_0x359c56['MXKZN'], _0x359c56['ylpnH'])) {
            await _0x359c56['hKTEC'](h5launch);
        } else {
            $['discount'] += item[_0x359c56['NtRHF']];
        }
    } else if ($['h5activityIndex'] && $['h5activityIndex']['data'] && _0x359c56['WOuxC']($['h5activityIndex']['data'][_0x359c56['hLXmj']], 0x4e21)) {
        if (_0x359c56['yEjuE'](_0x359c56['qkhIT'], _0x359c56['gaCSu'])) {
            const _0x4f5e47 = $['h5activityIndex'][_0x359c56['qQlGj']][_0x359c56['aCoDp']][_0x359c56['oIPda']]['id'];
            if (_0x4f5e47) $['redPacketId']['push'](_0x4f5e47);
            console['log']('\n\n当前待拆红包ID:' + $['h5activityIndex'][_0x359c56['qQlGj']][_0x359c56['aCoDp']][_0x359c56['oIPda']]['id'] + '，进度：再邀' + $['h5activityIndex'][_0x359c56['qQlGj']][_0x359c56['aCoDp']][_0x359c56['rtZqz']] + '个好友，开第' + _0x359c56['lhQnf']($['hasSendNumber'], 0x1) + '个红包。当前已拆红包：' + $['hasSendNumber'] + '个，剩余' + $['h5activityIndex'][_0x359c56['qQlGj']][_0x359c56['aCoDp']][_0x359c56['zdxnS']] + '个红包待开，已有' + $['assistants'] + '好友助力\n\n');
            const _0xb5a511 = $['h5activityIndex'][_0x359c56['qQlGj']][_0x359c56['aCoDp']][_0x359c56['oIPda']][_0x359c56['rpmij']] || 0x0;
            console['log']('当前可拆红包个数：' + _0xb5a511);
            if (_0x359c56['rHykm'](_0xb5a511, 0x0)) {
                if (_0x359c56['yEjuE'](_0x359c56['nHjoY'], _0x359c56['nHjoY'])) {
                    $['log']('', '❌ ' + $['name'] + ', 失败! 原因: ' + e + '!', '');
                } else {
                    for (let _0x1e95ab = 0x0; _0x359c56['xdMvB'](_0x1e95ab, new Array(_0xb5a511)['fill']('')['length']); _0x1e95ab++) {
                        if (_0x359c56['bWunD'](_0x359c56['HZQZC'], _0x359c56['CKLrI'])) {
                            if (!_0x4f5e47) break;
                            await _0x359c56['JVZfb'](h5receiveRedpacket, _0x4f5e47);
                            await $['wait'](0x1f4);
                        } else {
                            console['log']('拆红包获得：' + data[_0x359c56['qQlGj']][_0x359c56['aCoDp']][_0x359c56['gOrPj']] + '元');
                        }
                    }
                }
            }
        } else {
            data = JSON['parse'](data);
            $['h5activityIndex'] = data;
            $['discount'] = 0x0;
            if ($['h5activityIndex'] && $['h5activityIndex']['data'] && $['h5activityIndex']['data'][_0x359c56['aCoDp']]) {
                const _0x4fd43b = $['h5activityIndex'][_0x359c56['qQlGj']][_0x359c56['aCoDp']][_0x359c56['nuTsu']] || [];
                for (let _0x277a4 of _0x4fd43b) {
                    $['discount'] += _0x277a4[_0x359c56['NtRHF']];
                }
                if ($['discount']) $['discount'] = $['discount']['toFixed'](0x2);
            }
        }
    } else if ($['h5activityIndex'] && $['h5activityIndex']['data'] && _0x359c56['jaHdi']($['h5activityIndex']['data'][_0x359c56['hLXmj']], 0x4e22)) {
        console['log']('\x0a' + $['h5activityIndex']['data'][_0x359c56['urXHm']] + '\x0a');
    }
}

function taskHomePage() {
    var _0x506240 = {
        'qxUcN': function(_0x4d8d1a, _0x89702b) {
            return _0x4d8d1a === _0x89702b;
        },
        'uedwY': function(_0x3f1d60, _0x244639) {
            return _0x3f1d60 === _0x244639;
        },
        'ilOLY': 'reportCcTask',
        'ubscx': function(_0x518e24, _0x374b12) {
            return _0x518e24 !== _0x374b12;
        },
        'AnhQa': 'kwcHw',
        'UvmIi': 'utruM',
        'HPiQx': function(_0x40aacb, _0x443b6c) {
            return _0x40aacb === _0x443b6c;
        },
        'PWWwF': 'bdHCl',
        'jPwoH': function(_0x84c2ad, _0x1ebcad) {
            return _0x84c2ad(_0x1ebcad);
        },
        'CeGLN': function(_0x49b37b, _0x2f5dec) {
            return _0x49b37b(_0x2f5dec);
        },
        'hYHIV': function(_0x4f62d4, _0x287cf6, _0x24f729) {
            return _0x4f62d4(_0x287cf6, _0x24f729);
        }
    };
    return new Promise(_0x29e2c4 => {
        var _0x11f7d6 = {
            'yPUIS': function(_0x42c905, _0x3a80f0) {
                return _0x506240['CeGLN'](_0x42c905, _0x3a80f0);
            }
        };
        $['post'](_0x506240['hYHIV'](taskUrl, arguments['callee']['name']['toString'](), {
            'clientInfo': {}
        }), (_0x536d4a, _0x5e24f9, _0x25830a) => {
            var _0x17660e = {
                'zxnWF': function(_0x226e3a, _0x267303) {
                    return _0x506240['qxUcN'](_0x226e3a, _0x267303);
                },
                'Ljppq': function(_0x38a4b5, _0x4638a3) {
                    return _0x506240['uedwY'](_0x38a4b5, _0x4638a3);
                },
                'uBlej': _0x506240['ilOLY']
            };
            if (_0x506240['ubscx'](_0x506240['AnhQa'], _0x506240['UvmIi'])) {
                try {
                    if (_0x536d4a) {
                        console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                        console['log'](JSON['stringify'](_0x536d4a));
                    } else {
                        if (_0x506240['HPiQx'](_0x506240['PWWwF'], _0x506240['PWWwF'])) {
                            $['taskHomePageData'] = JSON['parse'](_0x25830a);
                        } else {
                            _0x11f7d6['yPUIS'](_0x29e2c4, _0x25830a);
                        }
                    }
                } catch (_0x3f0abb) {
                    $['logErr'](_0x3f0abb, _0x5e24f9);
                } finally {
                    _0x506240['jPwoH'](_0x29e2c4, _0x25830a);
                }
            } else {
                if (_0x17660e['zxnWF'](type, '1') && _0x17660e['Ljppq'](functionId, _0x17660e['uBlej'])) console['log']('京东首页点击“领券”逛10s任务:' + _0x25830a);
            }
        });
    });
}

function startTask(_0x4df6e1) {
    var _0x50fb4f = {
        'fnYdo': 'data',
        'nUkoM': 'result',
        'zgPiZ': 'redPacketId',
        'wcItv': 'statusDesc',
        'siXpb': function(_0x332f6c, _0x2a2bc1) {
            return _0x332f6c !== _0x2a2bc1;
        },
        'ffdrk': 'CjIxx',
        'vVCOw': 'Mwoqf',
        'bUnUN': function(_0x1c4edf, _0x1296ce) {
            return _0x1c4edf(_0x1296ce);
        },
        'siTXn': function(_0x49dfdb, _0x52677c, _0x2fcbb4) {
            return _0x49dfdb(_0x52677c, _0x2fcbb4);
        },
        'VcaCU': 'token',
        'wRsat': function(_0x250e67, _0x5b575f) {
            return _0x250e67 + _0x5b575f;
        },
        'dSaBB': function(_0xc8304d, _0x11f7a0) {
            return _0xc8304d + _0x11f7a0;
        }
    };
    let _0x50b77e = {
        'taskType': _0x4df6e1
    };
    _0x50b77e[_0x50fb4f['VcaCU']] = $['md5']($['md5'](_0x50fb4f['wRsat'](_0x50fb4f['dSaBB']('j', JSON['stringify'](_0x50b77e)), 'D')));
    return new Promise(_0x2890b9 => {
        var _0x4ff2f0 = {
            'BjsVA': _0x50fb4f['fnYdo'],
            'HqJAj': _0x50fb4f['nUkoM'],
            'atjMz': _0x50fb4f['zgPiZ'],
            'UTcdj': _0x50fb4f['wcItv'],
            'Jzxie': function(_0x4fe755, _0xfa2d29) {
                return _0x50fb4f['siXpb'](_0x4fe755, _0xfa2d29);
            },
            'nitOJ': _0x50fb4f['ffdrk'],
            'XrgKE': function(_0x1d867f, _0xd3faa2) {
                return _0x50fb4f['siXpb'](_0x1d867f, _0xd3faa2);
            },
            'ioBNn': _0x50fb4f['vVCOw'],
            'aTXJu': function(_0x402115, _0x1b1bf0) {
                return _0x50fb4f['bUnUN'](_0x402115, _0x1b1bf0);
            }
        };
        $['post'](_0x50fb4f['siTXn'](taskUrl, arguments['callee']['name']['toString'](), _0x50b77e), (_0x24564d, _0x448529, _0x50b77e) => {
            if (_0x4ff2f0['Jzxie'](_0x4ff2f0['nitOJ'], _0x4ff2f0['nitOJ'])) {
                console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                console['log'](JSON['stringify'](_0x24564d));
            } else {
                try {
                    if (_0x24564d) {
                        console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                        console['log'](JSON['stringify'](_0x24564d));
                    } else {
                        if (_0x4ff2f0['XrgKE'](_0x4ff2f0['ioBNn'], _0x4ff2f0['ioBNn'])) {
                            if (_0x50b77e[_0x4ff2f0['BjsVA']][_0x4ff2f0['HqJAj']][_0x4ff2f0['atjMz']]) {
                                console['log']('\n\n发起助力红包 成功：红包ID ' + _0x50b77e[_0x4ff2f0['BjsVA']][_0x4ff2f0['HqJAj']][_0x4ff2f0['atjMz']]);
                                $['redPacketId']['push'](_0x50b77e[_0x4ff2f0['BjsVA']][_0x4ff2f0['HqJAj']][_0x4ff2f0['atjMz']]);
                            } else {
                                console['log']('\n\n发起助力红包 失败：' + _0x50b77e[_0x4ff2f0['BjsVA']][_0x4ff2f0['HqJAj']][_0x4ff2f0['UTcdj']]);
                            }
                        } else {
                            console['log']('领取任务：' + _0x50b77e);
                            _0x50b77e = JSON['parse'](_0x50b77e);
                        }
                    }
                } catch (_0xef57a3) {
                    $['logErr'](_0xef57a3, _0x448529);
                } finally {
                    _0x4ff2f0['aTXJu'](_0x2890b9, _0x50b77e);
                }
            }
        });
    });
}
async function active(_0x3559a3) {
    var _0xdc4a0f = {
        'oXInV': function(_0x59189d, _0x3e8c3b) {
            return _0x59189d(_0x3e8c3b);
        },
        'TThJo': function(_0x5dc9f5) {
            return _0x5dc9f5();
        },
        'sqLFe': 'data',
        'HTicr': 'result',
        'QOBJU': 'assistants',
        'QnVMD': function(_0x6fbaf2, _0x124da8) {
            return _0x6fbaf2(_0x124da8);
        },
        'gSFig': function(_0xa66f92, _0x36ebc0) {
            return _0xa66f92 === _0x36ebc0;
        },
        'hCiqr': function(_0x2f448d, _0x44851a) {
            return _0x2f448d === _0x44851a;
        },
        'XBQPE': 'kYckW',
        'LRgIe': 'ZiQGT',
        'kGuqd': 'nGmnd',
        'PdzBo': 'qZCsg',
        'NGxmw': function(_0x46d3d8, _0x5e132a, _0x4e471f) {
            return _0x46d3d8(_0x5e132a, _0x4e471f);
        },
        'QfcRe': '手动进入app内检查\n是否存在[从京豆首页进领券中心逛30秒]的任务\n如存在,请手动完成再运行脚本'
    };
    const _0x446513 = await _0xdc4a0f['QnVMD'](getTaskDetailForColor, _0x3559a3);
    if (_0x446513 && _0xdc4a0f['gSFig'](_0x446513['code'], 0x0)) {
        if (_0xdc4a0f['hCiqr'](_0xdc4a0f['XBQPE'], _0xdc4a0f['XBQPE'])) {
            if (_0x446513['data'] && _0x446513['data']['result']) {
                if (_0xdc4a0f['hCiqr'](_0xdc4a0f['LRgIe'], _0xdc4a0f['LRgIe'])) {
                    const {
                        advertDetails
                    } = _0x446513['data']['result'];
                    for (let _0x4fbb01 of advertDetails) {
                        await $['wait'](0x3e8);
                        if (_0x4fbb01['id'] && _0xdc4a0f['hCiqr'](_0x4fbb01['status'], 0x0)) {
                            if (_0xdc4a0f['hCiqr'](_0xdc4a0f['kGuqd'], _0xdc4a0f['PdzBo'])) {
                                _0xdc4a0f['oXInV'](resolve, data || []);
                            } else {
                                await _0xdc4a0f['NGxmw'](taskReportForColor, _0x3559a3, _0x4fbb01['id']);
                            }
                        }
                    }
                } else {
                    _0xdc4a0f['TThJo'](resolve);
                }
            } else {
                console['log']('任务列表为空,手动进入app内检查 是否存在[从京豆首页进领券中心逛30秒]的任务,如存在,请手动完成再运行脚本');
                $['msg']('' + $['name'], '', _0xdc4a0f['QfcRe']);
                if ($['isNode']()) await notify['sendNotify']($['name'] + ' - 账号' + $['index'] + ' - ' + $['nickName'], '执行脚本出现异常\n请手动进入app内检查\n是否存在[从京豆首页进领券中心逛30秒]的任务\n如存在,请手动完成再运行脚本');
            }
        } else {
            $['assistants'] = $['h5activityIndex'][_0xdc4a0f['sqLFe']][_0xdc4a0f['HTicr']][_0xdc4a0f['QOBJU']]['length'] || 0x0;
        }
    } else {
        console['log']('---具体任务详情---' + JSON['stringify'](_0x446513));
    }
}

function getTaskDetailForColor(_0x295344) {
    var _0x4b0b53 = {
        'GfLUs': function(_0x1374b0, _0x3b90be) {
            return _0x1374b0 === _0x3b90be;
        },
        'ipPDg': function(_0x407a4e, _0x321606) {
            return _0x407a4e(_0x321606);
        },
        'ertXu': 'IPIrb',
        'XEwHI': 'PhBfm',
        'LGGjF': function(_0x548c14, _0x8e8c0f) {
            return _0x548c14 === _0x8e8c0f;
        },
        'vRnXe': 'gREpd',
        'YsNsY': 'wRYBr',
        'IOZoW': 'rfIBz',
        'rvhTq': function(_0x4dbd1d, _0x1df4a1) {
            return _0x4dbd1d === _0x1df4a1;
        },
        'Icyjq': 'ZBwzw',
        'vrbKx': function(_0x49e149, _0xdde228, _0x52e342) {
            return _0x49e149(_0xdde228, _0x52e342);
        }
    };
    const _0xad2993 = {
        'clientInfo': {},
        'taskType': _0x295344
    };
    return new Promise(_0x5f0740 => {
        var _0x59dd50 = {
            'xtgmL': function(_0x4c8c28, _0x56617e) {
                return _0x4b0b53['GfLUs'](_0x4c8c28, _0x56617e);
            },
            'bMWnL': function(_0x35bb2f, _0x3bf869) {
                return _0x4b0b53['ipPDg'](_0x35bb2f, _0x3bf869);
            },
            'mNGpJ': function(_0x587570, _0x45ff99) {
                return _0x4b0b53['GfLUs'](_0x587570, _0x45ff99);
            },
            'xnmUH': _0x4b0b53['ertXu'],
            'PQNFk': _0x4b0b53['XEwHI'],
            'Cafwz': function(_0x45769e, _0x4e45dc) {
                return _0x4b0b53['LGGjF'](_0x45769e, _0x4e45dc);
            },
            'PyHLL': _0x4b0b53['vRnXe'],
            'IPFQW': _0x4b0b53['YsNsY'],
            'Xfpom': _0x4b0b53['IOZoW'],
            'DFONv': function(_0x150fea, _0x54a4d4) {
                return _0x4b0b53['ipPDg'](_0x150fea, _0x54a4d4);
            }
        };
        if (_0x4b0b53['rvhTq'](_0x4b0b53['Icyjq'], _0x4b0b53['Icyjq'])) {
            $['post'](_0x4b0b53['vrbKx'](taskUrl, arguments['callee']['name']['toString'](), _0xad2993), (_0xe51423, _0xfd9bc, _0xad2993) => {
                try {
                    if (_0xe51423) {
                        if (_0x59dd50['mNGpJ'](_0x59dd50['xnmUH'], _0x59dd50['PQNFk'])) {
                            console['log'](item['title']['slice'](-0x6) + '   ' + (item['alreadyReceivedCount'] ? item['alreadyReceivedCount'] : 0x0) + '/' + item['requireCount'] + '      ' + (_0x59dd50['xtgmL'](item['innerStatus'], 0x4) ? '是' : '否'));
                        } else {
                            console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                            console['log'](JSON['stringify'](_0xe51423));
                        }
                    } else {
                        _0xad2993 = JSON['parse'](_0xad2993);
                    }
                } catch (_0x2f3867) {
                    if (_0x59dd50['Cafwz'](_0x59dd50['PyHLL'], _0x59dd50['PyHLL'])) {
                        $['logErr'](_0x2f3867, _0xfd9bc);
                    } else {
                        url = 'https://api.m.jd.com/client.action?functionId=' + functionId + '&body=' + _0x59dd50['bMWnL'](escape, JSON['stringify'](body)) + '&uuid=8888888&client=apple&clientVersion=9.4.1&st=1617158358007&sign=a15f78e5846f9b0178dcabb1093a6a7f&sv=100';
                    }
                } finally {
                    if (_0x59dd50['Cafwz'](_0x59dd50['IPFQW'], _0x59dd50['Xfpom'])) {
                        console['log']('领取任务：' + _0xad2993);
                        _0xad2993 = JSON['parse'](_0xad2993);
                    } else {
                        _0x59dd50['DFONv'](_0x5f0740, _0xad2993);
                    }
                }
            });
        } else {
            $['logErr'](e, resp);
        }
    });
}

function taskReportForColor(_0x5d8881, _0x64dcc2) {
    var _0x3afaa9 = {
        'xMHFf': function(_0x1ab8af, _0x21f920) {
            return _0x1ab8af === _0x21f920;
        },
        'OdWeS': 'OzIDz',
        'PFFKI': 'CyefL',
        'OFhkU': function(_0x395eeb, _0x44f3f2) {
            return _0x395eeb === _0x44f3f2;
        },
        'VEXuF': 'QqGXK',
        'ommGx': function(_0xb9ba12, _0x11db19) {
            return _0xb9ba12 !== _0x11db19;
        },
        'XJOmh': 'RHBIj',
        'qQUKo': function(_0x4c9306, _0x194a38) {
            return _0x4c9306(_0x194a38);
        },
        'cBjIb': 'reportCcTask',
        'owtIU': function(_0x520f62, _0x382865, _0x2594d8) {
            return _0x520f62(_0x382865, _0x2594d8);
        },
        'XSiXl': 'token',
        'wMPHA': function(_0x46ad5d, _0x2bd5f0) {
            return _0x46ad5d + _0x2bd5f0;
        },
        'nfPZY': function(_0x5c3d40, _0x370fed) {
            return _0x5c3d40 + _0x370fed;
        }
    };
    const _0x44b697 = {
        'taskType': _0x5d8881,
        'detailId': _0x64dcc2
    };
    _0x44b697[_0x3afaa9['XSiXl']] = $['md5']($['md5'](_0x3afaa9['wMPHA'](_0x3afaa9['nfPZY']('j', JSON['stringify'](_0x44b697)), 'D')));
    return new Promise(_0x288fc3 => {
        var _0x2aa24c = {
            'KinBA': function(_0x2ed8e9, _0x480cc7) {
                return _0x3afaa9['OFhkU'](_0x2ed8e9, _0x480cc7);
            },
            'jLBaF': function(_0x857cd7, _0x220dd9) {
                return _0x3afaa9['OFhkU'](_0x857cd7, _0x220dd9);
            },
            'afRkX': _0x3afaa9['cBjIb']
        };
        $['post'](_0x3afaa9['owtIU'](taskUrl, arguments['callee']['name']['toString'](), _0x44b697), (_0x574c4a, _0x5cc71a, _0x44b697) => {
            if (_0x3afaa9['xMHFf'](_0x3afaa9['OdWeS'], _0x3afaa9['PFFKI'])) {
                $['logErr'](e, _0x5cc71a);
            } else {
                try {
                    if (_0x574c4a) {
                        console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                        console['log'](JSON['stringify'](_0x574c4a));
                    } else {
                        if (_0x3afaa9['OFhkU'](_0x3afaa9['VEXuF'], _0x3afaa9['VEXuF'])) {
                            _0x44b697 = JSON['parse'](_0x44b697);
                        } else {
                            if (_0x44b697) {
                                if (_0x2aa24c['KinBA'](type, '1') && _0x2aa24c['jLBaF'](functionId, _0x2aa24c['afRkX'])) console['log']('京东首页点击“领券”逛10s任务:' + _0x44b697);
                            }
                        }
                    }
                } catch (_0x279fd7) {
                    if (_0x3afaa9['ommGx'](_0x3afaa9['XJOmh'], _0x3afaa9['XJOmh'])) {
                        $['logErr'](_0x279fd7, _0x5cc71a);
                    } else {
                        $['logErr'](_0x279fd7, _0x5cc71a);
                    }
                } finally {
                    _0x3afaa9['qQUKo'](_0x288fc3, _0x44b697);
                }
            }
        });
    });
}

function receiveTaskRedpacket(_0x591060) {
    var _0x32ad1d = {
        'trhzX': '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取',
        'cAnFa': 'https://bean.m.jd.com/bean/signIndex.action',
        'CaRim': function(_0x329590, _0x42a464) {
            return _0x329590 !== _0x42a464;
        },
        'jVagH': 'oRSXh',
        'wGAhH': 'vjutX',
        'lhfod': function(_0x443838, _0x276b68) {
            return _0x443838 === _0x276b68;
        },
        'ndFFJ': function(_0x2e0b42, _0x2f7b13) {
            return _0x2e0b42 === _0x2f7b13;
        },
        'HDToh': 'THKxf',
        'HWAzf': 'UdXDD',
        'pRSxK': function(_0x323712, _0x775d20) {
            return _0x323712(_0x775d20);
        },
        'enZcS': 'ySGMp',
        'cCVbJ': 'pRjQI',
        'DGkIi': function(_0x3d0276, _0x3f60d0, _0x177514) {
            return _0x3d0276(_0x3f60d0, _0x177514);
        }
    };
    const _0x95af44 = {
        'clientInfo': {},
        'taskType': _0x591060
    };
    return new Promise(_0x488a67 => {
        var _0x41d92a = {
            'xyUVE': function(_0x135ab6, _0x3278b1) {
                return _0x32ad1d['pRSxK'](_0x135ab6, _0x3278b1);
            }
        };
        if (_0x32ad1d['CaRim'](_0x32ad1d['enZcS'], _0x32ad1d['cCVbJ'])) {
            $['post'](_0x32ad1d['DGkIi'](taskUrl, arguments['callee']['name']['toString'](), _0x95af44), (_0x15a8ce, _0x3c7a66, _0x1849ab) => {
                var _0x18dec9 = {
                    'LMnJj': _0x32ad1d['trhzX'],
                    'AqbLM': _0x32ad1d['cAnFa']
                };
                try {
                    if (_0x15a8ce) {
                        console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                        console['log'](JSON['stringify'](_0x15a8ce));
                    } else {
                        if (_0x32ad1d['CaRim'](_0x32ad1d['jVagH'], _0x32ad1d['wGAhH'])) {
                            _0x1849ab = JSON['parse'](_0x1849ab);
                            if (_0x1849ab['data']['success'] && _0x32ad1d['lhfod'](_0x1849ab['data']['biz_code'], 0x0)) {
                                if (_0x32ad1d['ndFFJ'](_0x32ad1d['HDToh'], _0x32ad1d['HWAzf'])) {
                                    $['msg']($['name'], _0x18dec9['LMnJj'], _0x18dec9['AqbLM'], {
                                        'open-url': _0x18dec9['AqbLM']
                                    });
                                    return;
                                } else {
                                    console['log']('红包领取成功，获得' + _0x1849ab['data']['result']['discount'] + '元\x0a');
                                    $['discount'] += _0x32ad1d['pRSxK'](Number, _0x1849ab['data']['result']['discount']);
                                }
                            }
                        } else {
                            _0x41d92a['xyUVE'](_0x488a67, _0x1849ab);
                        }
                    }
                } catch (_0x22be08) {
                    $['logErr'](_0x22be08, _0x3c7a66);
                } finally {
                    _0x32ad1d['pRSxK'](_0x488a67, _0x1849ab);
                }
            });
        } else {
            $['logErr'](e, resp);
        }
    });
}

function jinli_h5assist(_0x965ed3) {
    var _0x46999a = {
        'GotFc': function(_0x40227f, _0x120749) {
            return _0x40227f !== _0x120749;
        },
        'aBjfj': 'yGkJM',
        'EUlgg': 'ICOUD',
        'rrIMq': 'DXKZt',
        'VGLCX': 'nTDDw',
        'chpWs': function(_0x175e82, _0x3e61c2) {
            return _0x175e82 === _0x3e61c2;
        },
        'KSvOF': 'ZZmGU',
        'UPeYE': 'ufctU',
        'vsLrF': 'biz_code',
        'VDsvA': 'data',
        'HqvcI': 'result',
        'muFAl': 'statusDesc',
        'Bitng': 'status',
        'JzWQX': function(_0x1675b4) {
            return _0x1675b4();
        },
        'MDwye': function(_0x5edb93, _0x14dbf6) {
            return _0x5edb93(_0x14dbf6);
        },
        'GINzq': function(_0x2c0df9, _0x4e42f5, _0x1bd481) {
            return _0x2c0df9(_0x4e42f5, _0x1bd481);
        }
    };
    const _0x22cff1 = {
        'clientInfo': {},
        'redPacketId': _0x965ed3,
        'followShop': 0x0,
        'promUserState': ''
    };
    const _0x664e48 = _0x46999a['GINzq'](taskUrl, arguments['callee']['name']['toString'](), _0x22cff1);
    return new Promise(_0x42e313 => {
        var _0x98faf2 = {
            'nCcjX': function(_0x413a61, _0x5c3b20) {
                return _0x46999a['MDwye'](_0x413a61, _0x5c3b20);
            }
        };
        $['post'](_0x664e48, (_0x3a8601, _0x5da0af, _0x168779) => {
            if (_0x46999a['GotFc'](_0x46999a['aBjfj'], _0x46999a['EUlgg'])) {
                try {
                    if (_0x46999a['GotFc'](_0x46999a['rrIMq'], _0x46999a['VGLCX'])) {
                        if (_0x3a8601) {
                            if (_0x46999a['chpWs'](_0x46999a['KSvOF'], _0x46999a['UPeYE'])) {
                                url = 'https://api.m.jd.com/client.action?functionId=' + functionId + '&body=' + _0x98faf2['nCcjX'](escape, JSON['stringify'](_0x22cff1)) + '&uuid=8888888&client=apple&clientVersion=9.4.1&st=1617158435079&sign=7eff07437dd817dbfa348c209fd5c129&sv=120';
                            } else {
                                console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                                console['log'](JSON['stringify'](_0x3a8601));
                            }
                        } else {
                            _0x168779 = JSON['parse'](_0x168779);
                            if (_0x168779 && _0x168779['data'] && _0x46999a['chpWs'](_0x168779['data'][_0x46999a['vsLrF']], 0x0)) {
                                console['log']('助力结果：' + _0x168779[_0x46999a['VDsvA']][_0x46999a['HqvcI']][_0x46999a['muFAl']]);
                                if (_0x46999a['chpWs'](_0x168779[_0x46999a['VDsvA']][_0x46999a['HqvcI']][_0x46999a['Bitng']], 0x3)) $['canHelp'] = ![];
                            } else {
                                console['log']('助力异常：' + JSON['stringify'](_0x168779));
                            }
                        }
                    } else {
                        console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                        console['log'](JSON['stringify'](_0x3a8601));
                    }
                } catch (_0x23b57f) {
                    $['logErr'](_0x23b57f, _0x5da0af);
                } finally {
                    _0x46999a['JzWQX'](_0x42e313);
                }
            } else {
                $['logErr'](e, _0x5da0af);
            }
        });
    });
}

function h5receiveRedpacket(_0x481bb8) {
    var _0x4e21e4 = {
        'qTxlb': function(_0x1ab49c, _0x267552) {
            return _0x1ab49c(_0x267552);
        },
        'ImnFf': function(_0x33d211, _0x547ae4) {
            return _0x33d211 !== _0x547ae4;
        },
        'NWSEU': 'PKJVZ',
        'YCuYm': function(_0x5e265a, _0x42a54e) {
            return _0x5e265a === _0x42a54e;
        },
        'EIMzt': 'biz_code',
        'vtgAr': function(_0x3dc244, _0x63e91d) {
            return _0x3dc244 !== _0x63e91d;
        },
        'IdcUY': 'tayXh',
        'zyScz': 'data',
        'USJTz': 'result',
        'yZrVu': 'discount',
        'HDEqw': 'xnUQa',
        'lYTpd': 'jsCro',
        'zyZfd': function(_0x3c7e31, _0x404af1) {
            return _0x3c7e31(_0x404af1);
        },
        'VuscA': 'token',
        'DEyaS': function(_0x35d1f5, _0x2c8ae2) {
            return _0x35d1f5 + _0x2c8ae2;
        },
        'wBvFL': function(_0x16c890, _0x93c0f1, _0x3c7483) {
            return _0x16c890(_0x93c0f1, _0x3c7483);
        }
    };
    const _0x14e4db = {
        'redPacketId': _0x481bb8
    };
    _0x14e4db[_0x4e21e4['VuscA']] = $['md5']($['md5'](_0x4e21e4['DEyaS'](_0x4e21e4['DEyaS']('j', JSON['stringify'](_0x14e4db)), 'D')));
    const _0x2967f2 = _0x4e21e4['wBvFL'](taskUrl, arguments['callee']['name']['toString'](), _0x14e4db);
    return new Promise(_0x304fe5 => {
        $['post'](_0x2967f2, (_0x6f43ad, _0x3f509d, _0x14e4db) => {
            var _0x11af3e = {
                'WoFrT': function(_0x5b1985, _0x2ea2fa) {
                    return _0x4e21e4['qTxlb'](_0x5b1985, _0x2ea2fa);
                }
            };
            if (_0x4e21e4['ImnFf'](_0x4e21e4['NWSEU'], _0x4e21e4['NWSEU'])) {
                $['logErr'](e, _0x3f509d);
            } else {
                try {
                    if (_0x6f43ad) {
                        console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                        console['log'](JSON['stringify'](_0x6f43ad));
                    } else {
                        _0x14e4db = JSON['parse'](_0x14e4db);
                        if (_0x14e4db && _0x14e4db['data'] && _0x4e21e4['YCuYm'](_0x14e4db['data'][_0x4e21e4['EIMzt']], 0x0)) {
                            if (_0x4e21e4['vtgAr'](_0x4e21e4['IdcUY'], _0x4e21e4['IdcUY'])) {
                                _0x11af3e['WoFrT'](_0x304fe5, _0x14e4db);
                            } else {
                                console['log']('拆红包获得：' + _0x14e4db[_0x4e21e4['zyScz']][_0x4e21e4['USJTz']][_0x4e21e4['yZrVu']] + '元');
                            }
                        } else {
                            console['log']('领红包失败：' + JSON['stringify'](_0x14e4db));
                        }
                    }
                } catch (_0x50e132) {
                    if (_0x4e21e4['vtgAr'](_0x4e21e4['HDEqw'], _0x4e21e4['lYTpd'])) {
                        $['logErr'](_0x50e132, _0x3f509d);
                    } else {
                        if (_0x14e4db) _0x14e4db = JSON['parse'](_0x14e4db);
                    }
                } finally {
                    _0x4e21e4['zyZfd'](_0x304fe5, _0x14e4db);
                }
            }
        });
    });
}

function h5launch() {
    var _0x36a8d0 = {
        'HBCnk': function(_0x3bce73, _0x597d6) {
            return _0x3bce73 === _0x597d6;
        },
        'kWODl': 'biz_code',
        'ZnkPR': 'data',
        'NiDxh': 'result',
        'ukPdb': 'statusDesc',
        'dZRze': function(_0x152e7c, _0x428eff) {
            return _0x152e7c === _0x428eff;
        },
        'GycTI': 'status',
        'tUXDv': function(_0x17b743, _0x4fa7f0) {
            return _0x17b743 !== _0x4fa7f0;
        },
        'lgLaq': 'uvAFF',
        'BAHEF': function(_0x142dfa, _0x30d879) {
            return _0x142dfa === _0x30d879;
        },
        'VndFO': 'redPacketId',
        'WdJTt': 'DpmHo',
        'GWfLZ': 'iwYhG',
        'OJWeW': function(_0xe14491, _0x15b7e5) {
            return _0xe14491(_0x15b7e5);
        },
        'ZkfNt': 'HpvMG',
        'ylzHc': function(_0xfc1089, _0x3baf8a, _0x560068) {
            return _0xfc1089(_0x3baf8a, _0x560068);
        }
    };
    const _0x4b4162 = {
        'clientInfo': {},
        'followShop': 0x0,
        'promUserState': ''
    };
    const _0x28bf30 = _0x36a8d0['ylzHc'](taskUrl, arguments['callee']['name']['toString'](), _0x4b4162);
    return new Promise(_0x37d435 => {
        var _0x1d5597 = {
            'FPmPa': function(_0x43769e, _0x3cb0ae) {
                return _0x36a8d0['tUXDv'](_0x43769e, _0x3cb0ae);
            },
            'TLqMy': _0x36a8d0['lgLaq'],
            'hBuvP': function(_0x5d8cff, _0x31b5e4) {
                return _0x36a8d0['BAHEF'](_0x5d8cff, _0x31b5e4);
            },
            'XRkoW': _0x36a8d0['kWODl'],
            'PkpVF': _0x36a8d0['ZnkPR'],
            'qbCIe': _0x36a8d0['NiDxh'],
            'GRYcB': _0x36a8d0['VndFO'],
            'sHuJj': _0x36a8d0['ukPdb'],
            'wRQrH': function(_0x352a6d, _0x2313df) {
                return _0x36a8d0['tUXDv'](_0x352a6d, _0x2313df);
            },
            'PYukS': _0x36a8d0['WdJTt'],
            'lShws': _0x36a8d0['GWfLZ'],
            'hHnoK': function(_0x4507a6, _0x41aad8) {
                return _0x36a8d0['OJWeW'](_0x4507a6, _0x41aad8);
            }
        };
        if (_0x36a8d0['BAHEF'](_0x36a8d0['ZkfNt'], _0x36a8d0['ZkfNt'])) {
            $['post'](_0x28bf30, (_0x5ad950, _0x3de3b7, _0x25d602) => {
                try {
                    if (_0x5ad950) {
                        console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                        console['log'](JSON['stringify'](_0x5ad950));
                    } else {
                        if (_0x1d5597['FPmPa'](_0x1d5597['TLqMy'], _0x1d5597['TLqMy'])) {
                            $['logErr'](e, _0x3de3b7);
                        } else {
                            _0x25d602 = JSON['parse'](_0x25d602);
                            if (_0x25d602 && _0x25d602['data'] && _0x1d5597['hBuvP'](_0x25d602['data'][_0x1d5597['XRkoW']], 0x0)) {
                                if (_0x25d602[_0x1d5597['PkpVF']][_0x1d5597['qbCIe']][_0x1d5597['GRYcB']]) {
                                    console['log']('\n\n发起助力红包 成功：红包ID ' + _0x25d602[_0x1d5597['PkpVF']][_0x1d5597['qbCIe']][_0x1d5597['GRYcB']]);
                                    $['redPacketId']['push'](_0x25d602[_0x1d5597['PkpVF']][_0x1d5597['qbCIe']][_0x1d5597['GRYcB']]);
                                } else {
                                    console['log']('\n\n发起助力红包 失败：' + _0x25d602[_0x1d5597['PkpVF']][_0x1d5597['qbCIe']][_0x1d5597['sHuJj']]);
                                }
                            } else {
                                if (_0x1d5597['wRQrH'](_0x1d5597['PYukS'], _0x1d5597['lShws'])) {
                                    console['log']('发起助力红包 失败：' + JSON['stringify'](_0x25d602));
                                } else {
                                    console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                                    console['log'](JSON['stringify'](_0x5ad950));
                                }
                            }
                        }
                    }
                } catch (_0x145275) {
                    $['logErr'](_0x145275, _0x3de3b7);
                } finally {
                    _0x1d5597['hHnoK'](_0x37d435, _0x25d602);
                }
            });
        } else {
            data = JSON['parse'](data);
            if (data && data['data'] && _0x36a8d0['HBCnk'](data['data'][_0x36a8d0['kWODl']], 0x0)) {
                console['log']('助力结果：' + data[_0x36a8d0['ZnkPR']][_0x36a8d0['NiDxh']][_0x36a8d0['ukPdb']]);
                if (_0x36a8d0['dZRze'](data[_0x36a8d0['ZnkPR']][_0x36a8d0['NiDxh']][_0x36a8d0['GycTI']], 0x3)) $['canHelp'] = ![];
            } else {
                console['log']('助力异常：' + JSON['stringify'](data));
            }
        }
    });
}

function h5activityIndex() {
    var _0x59012f = {
        'hZCxj': 'result',
        'mSehi': function(_0x46a7cc, _0x3f6b77) {
            return _0x46a7cc === _0x3f6b77;
        },
        'mCsGX': 'QKLIY',
        'aXxDh': 'tTrGy',
        'YMeYU': 'data',
        'IjQtv': 'rewards',
        'JvENQ': function(_0x5a59d1, _0x4ec5d9) {
            return _0x5a59d1 !== _0x4ec5d9;
        },
        'BEtKT': 'WkMiQ',
        'OWxWN': 'YNESU',
        'ddfGd': 'packetSum',
        'tEzcv': function(_0x264a4e, _0x183658) {
            return _0x264a4e !== _0x183658;
        },
        'yBlCn': 'RgaER',
        'zfUYa': 'diddF',
        'ruDEI': function(_0x5bde63) {
            return _0x5bde63();
        },
        'tjkXF': function(_0x5f5c6c) {
            return _0x5f5c6c();
        },
        'KwEPo': function(_0x59098e, _0x388a06) {
            return _0x59098e(_0x388a06);
        },
        'EGMHP': function(_0x10bc4d, _0x23b1cc) {
            return _0x10bc4d === _0x23b1cc;
        },
        'eOCMV': 'reportCcTask',
        'gWefD': function(_0xb6b83a, _0x324139) {
            return _0xb6b83a !== _0x324139;
        },
        'TALOm': 'LCBYG',
        'npTmp': function(_0x453734, _0x1afaeb, _0x1909e1) {
            return _0x453734(_0x1afaeb, _0x1909e1);
        }
    };
    const _0x44ff4a = {
        'clientInfo': {},
        'isjdapp': 0x1
    };
    const _0x3c3731 = _0x59012f['npTmp'](taskUrl, arguments['callee']['name']['toString'](), _0x44ff4a);
    return new Promise(_0x35a2f9 => {
        var _0x19c8ae = {
            'ZToug': function(_0x24d714) {
                return _0x59012f['tjkXF'](_0x24d714);
            },
            'hjrCr': function(_0x36ec51, _0x5d087c) {
                return _0x59012f['KwEPo'](_0x36ec51, _0x5d087c);
            },
            'wxdHe': _0x59012f['YMeYU'],
            'IgYDi': _0x59012f['hZCxj'],
            'oSPYT': _0x59012f['IjQtv'],
            'vwbpO': _0x59012f['ddfGd'],
            'iXyBV': function(_0x4e82a5, _0x39fa10) {
                return _0x59012f['mSehi'](_0x4e82a5, _0x39fa10);
            },
            'nPKpf': function(_0x5a5c6b, _0x56bf4a) {
                return _0x59012f['EGMHP'](_0x5a5c6b, _0x56bf4a);
            },
            'hUIfl': _0x59012f['eOCMV']
        };
        if (_0x59012f['gWefD'](_0x59012f['TALOm'], _0x59012f['TALOm'])) {
            _0x19c8ae['ZToug'](_0x35a2f9);
        } else {
            $['post'](_0x3c3731, async (_0x8cc239, _0x3a431e, _0x2aade2) => {
                try {
                    if (_0x8cc239) {
                        console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                        console['log'](JSON['stringify'](_0x8cc239));
                    } else {
                        _0x2aade2 = JSON['parse'](_0x2aade2);
                        $['h5activityIndex'] = _0x2aade2;
                        $['discount'] = 0x0;
                        if ($['h5activityIndex'] && $['h5activityIndex']['data'] && $['h5activityIndex']['data'][_0x59012f['hZCxj']]) {
                            if (_0x59012f['mSehi'](_0x59012f['mCsGX'], _0x59012f['aXxDh'])) {
                                _0x19c8ae['hjrCr'](_0x35a2f9, _0x2aade2);
                            } else {
                                const _0x8c5fa9 = $['h5activityIndex'][_0x59012f['YMeYU']][_0x59012f['hZCxj']][_0x59012f['IjQtv']] || [];
                                for (let _0x8ad7f9 of _0x8c5fa9) {
                                    if (_0x59012f['JvENQ'](_0x59012f['BEtKT'], _0x59012f['OWxWN'])) {
                                        $['discount'] += _0x8ad7f9[_0x59012f['ddfGd']];
                                    } else {
                                        const _0x14f85a = $['h5activityIndex'][_0x19c8ae['wxdHe']][_0x19c8ae['IgYDi']][_0x19c8ae['oSPYT']] || [];
                                        for (let _0x54ad55 of _0x14f85a) {
                                            $['discount'] += _0x54ad55[_0x19c8ae['vwbpO']];
                                        }
                                        if ($['discount']) $['discount'] = $['discount']['toFixed'](0x2);
                                    }
                                }
                                if ($['discount']) $['discount'] = $['discount']['toFixed'](0x2);
                            }
                        }
                    }
                } catch (_0x172bec) {
                    $['logErr'](_0x172bec, _0x3a431e);
                } finally {
                    if (_0x59012f['tEzcv'](_0x59012f['yBlCn'], _0x59012f['zfUYa'])) {
                        _0x59012f['ruDEI'](_0x35a2f9);
                    } else {
                        if (_0x8cc239) {
                            console['log']('' + JSON['stringify'](_0x8cc239));
                            console['log']($['name'] + ' API请求失败，请检查网路重试');
                        } else {
                            if (_0x2aade2) {
                                if (_0x19c8ae['iXyBV'](type, '1') && _0x19c8ae['nPKpf'](functionId, _0x19c8ae['hUIfl'])) console['log']('京东首页点击“领券”逛10s任务:' + _0x2aade2);
                            }
                        }
                    }
                }
            });
        }
    });
}
async function doAppTask(_0xe2b260 = '1') {
    var _0x360720 = {
        'GJHym': 'CouponCenter',
        'svPbc': 'openapp.jdmobile%3a%2f%2fvirtual%3fparams%3d%7b%5c%22category%5c%22%3a%5c%22jump%5c%22%2c%5c%22des%5c%22%3a%5c%22couponCenter%5c%22%7d',
        'txnpd': function(_0x6b08ff, _0x4fb6ce, _0x1cc6e5, _0x59c1af) {
            return _0x6b08ff(_0x4fb6ce, _0x1cc6e5, _0x59c1af);
        },
        'TWftj': 'getCcTaskList',
        'xviPp': 'ccgroup_ios_index_task',
        'yxDIY': '727',
        'QtLPh': function(_0x57ce87, _0x257227, _0x188fdc, _0x51ea34) {
            return _0x57ce87(_0x257227, _0x188fdc, _0x51ea34);
        },
        'WBlLK': 'reportCcTask'
    };
    let _0x7e04c1 = {
        'pageClickKey': _0x360720['GJHym'],
        'childActivityUrl': _0x360720['svPbc'],
        'lat': '',
        'globalLat': '',
        'lng': '',
        'globalLng': ''
    };
    await _0x360720['txnpd'](getCcTaskList, _0x360720['TWftj'], _0x7e04c1, _0xe2b260);
    _0x7e04c1 = {
        'globalLng': '',
        'globalLat': '',
        'monitorSource': _0x360720['xviPp'],
        'monitorRefer': '',
        'taskType': '1',
        'childActivityUrl': _0x360720['svPbc'],
        'pageClickKey': _0x360720['GJHym'],
        'lat': '',
        'taskId': _0x360720['yxDIY'],
        'lng': ''
    };
    await $['wait'](0x2904);
    await _0x360720['QtLPh'](getCcTaskList, _0x360720['WBlLK'], _0x7e04c1, _0xe2b260);
}

function getCcTaskList(_0xab80eb, _0x4c8ac0, _0x3b92a5 = '1') {
    var _0x1bc875 = {
        'MQcmH': 'CookieJD',
        'Oajee': 'CookieJD2',
        'ZicOJ': function(_0x4507a9, _0x17b02d) {
            return _0x4507a9(_0x17b02d);
        },
        'VlSIR': 'CookiesJD',
        'QYlbQ': function(_0x2fb0c9, _0x57f1ac) {
            return _0x2fb0c9 === _0x57f1ac;
        },
        'ECsZl': 'reportCcTask',
        'dHuKy': function(_0x269ac7) {
            return _0x269ac7();
        },
        'Noqap': function(_0x54a7bc, _0x510af4) {
            return _0x54a7bc !== _0x510af4;
        },
        'Uvnac': 'tjJCL',
        'dbMeA': 'getCcTaskList',
        'BNeHg': function(_0x46a148, _0x4c35f1) {
            return _0x46a148 !== _0x4c35f1;
        },
        'BqxXP': 'luGpH',
        'ApGrr': function(_0x38572b, _0x178b06) {
            return _0x38572b(_0x178b06);
        },
        'dyNHZ': function(_0x497838, _0x56089b) {
            return _0x497838 === _0x56089b;
        },
        'ZIVMQ': 'application/json, text/plain, */*',
        'HhiHb': 'gzip, deflate, br',
        'kFrdD': 'zh-cn',
        'BnFEL': 'keep-alive',
        'GesEK': 'application/x-www-form-urlencoded',
        'wnTaD': 'api.m.jd.com',
        'AEgMZ': 'https://h5.m.jd.com',
        'ennTp': 'https://h5.m.jd.com/babelDiy/Zeus/4ZK4ZpvoSreRB92RRo8bpJAQNoTq/index.html',
        'OWUKI': function(_0x13739f, _0x737b43) {
            return _0x13739f(_0x737b43);
        },
        'cTbzm': './USER_AGENTS',
        'FkwkI': 'JDUA',
        'sKkuD': 'jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1'
    };
    let _0x508ee4 = '';
    return new Promise(_0xdbb34a => {
        var _0x2ac318 = {
            'fiRxw': function(_0x2c0446, _0xb61c0c) {
                return _0x1bc875['QYlbQ'](_0x2c0446, _0xb61c0c);
            },
            'uJcmc': _0x1bc875['ECsZl'],
            'cRYZD': function(_0x2f16db) {
                return _0x1bc875['dHuKy'](_0x2f16db);
            }
        };
        if (_0x1bc875['Noqap'](_0x1bc875['Uvnac'], _0x1bc875['Uvnac'])) {
            $['done']();
        } else {
            if (_0x1bc875['QYlbQ'](_0xab80eb, _0x1bc875['dbMeA'])) {
                if (_0x1bc875['BNeHg'](_0x1bc875['BqxXP'], _0x1bc875['BqxXP'])) {
                    cookiesArr = [$['getdata'](_0x1bc875['MQcmH']), $['getdata'](_0x1bc875['Oajee']), ..._0x1bc875['ZicOJ'](jsonParse, $['getdata'](_0x1bc875['VlSIR']) || '[]')['map'](_0x2bb357 => _0x2bb357['cookie'])]['filter'](_0x5d0a5a => !!_0x5d0a5a);
                } else {
                    _0x508ee4 = 'https://api.m.jd.com/client.action?functionId=' + _0xab80eb + '&body=' + _0x1bc875['ApGrr'](escape, JSON['stringify'](_0x4c8ac0)) + '&uuid=8888888&client=apple&clientVersion=9.4.1&st=1617158358007&sign=a15f78e5846f9b0178dcabb1093a6a7f&sv=100';
                }
            } else if (_0x1bc875['dyNHZ'](_0xab80eb, _0x1bc875['ECsZl'])) {
                _0x508ee4 = 'https://api.m.jd.com/client.action?functionId=' + _0xab80eb + '&body=' + _0x1bc875['ApGrr'](escape, JSON['stringify'](_0x4c8ac0)) + '&uuid=8888888&client=apple&clientVersion=9.4.1&st=1617158435079&sign=7eff07437dd817dbfa348c209fd5c129&sv=120';
            }
            const _0x437ae4 = {
                'url': _0x508ee4,
                'body': 'body=' + _0x1bc875['ApGrr'](escape, JSON['stringify'](_0x4c8ac0)),
                'headers': {
                    'Accept': _0x1bc875['ZIVMQ'],
                    'Accept-Encoding': _0x1bc875['HhiHb'],
                    'Accept-Language': _0x1bc875['kFrdD'],
                    'Connection': _0x1bc875['BnFEL'],
                    'Content-Length': '63',
                    'Content-Type': _0x1bc875['GesEK'],
                    'Host': _0x1bc875['wnTaD'],
                    'Origin': _0x1bc875['AEgMZ'],
                    'Cookie': cookie,
                    'Referer': _0x1bc875['ennTp'],
                    'User-Agent': $['isNode']() ? process['env']['JD_USER_AGENT'] ? process['env']['JD_USER_AGENT'] : _0x1bc875['OWUKI'](require, _0x1bc875['cTbzm'])['USER_AGENT'] : $['getdata'](_0x1bc875['FkwkI']) ? $['getdata'](_0x1bc875['FkwkI']) : _0x1bc875['sKkuD']
                }
            };
            $['post'](_0x437ae4, async (_0x6a8274, _0x4592ec, _0x3ff4c2) => {
                try {
                    if (_0x6a8274) {
                        console['log']('' + JSON['stringify'](_0x6a8274));
                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                    } else {
                        if (_0x3ff4c2) {
                            if (_0x2ac318['fiRxw'](_0x3b92a5, '1') && _0x2ac318['fiRxw'](_0xab80eb, _0x2ac318['uJcmc'])) console['log']('京东首页点击“领券”逛10s任务:' + _0x3ff4c2);
                        }
                    }
                } catch (_0x1dab2f) {
                    $['logErr'](_0x1dab2f, _0x4592ec);
                } finally {
                    _0x2ac318['cRYZD'](_0xdbb34a);
                }
            });
        }
    });
}

function getAuthorShareCode(_0x5cf3e4 = 'http://adguard.b.freefrp.net/jd_red.json') {
    var _0x457743 = {
        'UiFFa': function(_0x19bb64, _0x213589) {
            return _0x19bb64(_0x213589);
        },
        'nCZnI': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/87.0.4280.88'
    };
    return new Promise(_0x40889e => {
        var _0xbb3632 = {
            'uaOVO': function(_0x45289e, _0x4ea26b) {
                return _0x457743['UiFFa'](_0x45289e, _0x4ea26b);
            }
        };
        $['get']({
            'url': _0x5cf3e4,
            'headers': {
                'User-Agent': _0x457743['nCZnI']
            },
            'timeout': 0x3e8
        }, async (_0x85ad04, _0x2f2fa2, _0x514c1b) => {
            try {
                if (_0x85ad04) {} else {
                    if (_0x514c1b) _0x514c1b = JSON['parse'](_0x514c1b);
                }
            } catch (_0x2130d1) {} finally {
                _0xbb3632['uaOVO'](_0x40889e, _0x514c1b || []);
            }
        });
    });
}

function taskUrl(_0x8c9e99, _0x55b97d) {
    var _0x7cc191 = {
        'EWGtG': function(_0x3a2675, _0x5f4049) {
            return _0x3a2675 * _0x5f4049;
        },
        'Ocqgo': 'api.m.jd.com',
        'jdPPl': 'application/x-www-form-urlencoded',
        'QNris': 'https://happy.m.jd.com',
        'HrARk': 'gzip, deflate, br',
        'KcHYE': 'keep-alive',
        'mYLjY': '*/*',
        'uuxsb': function(_0x275144, _0x2e1910) {
            return _0x275144(_0x2e1910);
        },
        'icqSy': './USER_AGENTS',
        'Nruqv': 'JDUA',
        'FhGyq': 'jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
        'dpHDv': 'https://happy.m.jd.com/babelDiy/zjyw/3ugedFa7yA6NhxLN5gw2L3PF9sQC/index.html',
        'TXIUu': 'zh-cn'
    };
    return {
        'url': JD_API_HOST + '?appid=jd_mp_h5&functionId=' + _0x8c9e99 + '&loginType=2&client=jd_mp_h5&t=' + _0x7cc191['EWGtG'](new Date()['getTime'](), 0x3e8),
        'body': 'body=' + JSON['stringify'](_0x55b97d),
        'headers': {
            'Host': _0x7cc191['Ocqgo'],
            'Content-Type': _0x7cc191['jdPPl'],
            'Origin': _0x7cc191['QNris'],
            'Accept-Encoding': _0x7cc191['HrARk'],
            'Cookie': cookie,
            'Connection': _0x7cc191['KcHYE'],
            'Accept': _0x7cc191['mYLjY'],
            'User-Agent': $['isNode']() ? process['env']['JD_USER_AGENT'] ? process['env']['JD_USER_AGENT'] : _0x7cc191['uuxsb'](require, _0x7cc191['icqSy'])['USER_AGENT'] : $['getdata'](_0x7cc191['Nruqv']) ? $['getdata'](_0x7cc191['Nruqv']) : _0x7cc191['FhGyq'],
            'Referer': _0x7cc191['dpHDv'],
            'Content-Length': '36',
            'Accept-Language': _0x7cc191['TXIUu']
        }
    };
};
_0xodz = 'jsjiami.com.v6'

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
