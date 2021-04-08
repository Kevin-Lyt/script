/*
 * @Author: LXK9301
 * @Date: 2020-11-03 18:12:38
 * @Last Modified by: LXK9301
 * @Last Modified time: 2021-04-8 10:27:18
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
 *Progcessed By JSDec in 1.66s
 *JSDec - JSDec.js.org
 */
if ($['isNode']()) {
    Object['keys'](jdCookieNode)['forEach'](_0x15a5f9 => {
        cookiesArr['push'](jdCookieNode[_0x15a5f9]);
    });
    if (process['env']['JD_DEBUG'] && process['env']['JD_DEBUG'] === 'false') console['log'] = () => {};
    if (JSON['stringify'](process['env'])['indexOf']('GITHUB') > -0x1) process['exit'](0x0);
} else {
    cookiesArr = [$['getdata']('CookieJD'), $['getdata']('CookieJD2'), ...jsonParse($['getdata']('CookiesJD') || '[]')['map'](_0x459154 => _0x459154['cookie'])]['filter'](_0x3ff7e4 => !!_0x3ff7e4);
}
const JD_API_HOST = 'https://api.m.jd.com/api';
!(async () => {
    var _0x4d2f07 = {
        'CscJU': 'biz_msg',
        'lfonL': function(_0x53331e, _0x40bcf9) {
            return _0x53331e !== _0x40bcf9;
        },
        'IoYZB': 'EkVDt',
        'YhuTf': 'euUpi',
        'XeRgM': '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取',
        'CsgRB': 'https://bean.m.jd.com/bean/signIndex.action',
        'qZTaT': function(_0x2d3822, _0x2f747c) {
            return _0x2d3822(_0x2f747c);
        },
        'scZaj': 'http://adguard.b.freefrp.net/jd_red.json',
        'MKkgZ': function(_0x560860, _0x118364) {
            return _0x560860(_0x118364);
        },
        'EetjD': 'http://adguard.b.freefrp.net/jd_red.json',
        'enTIH': function(_0x46ab90) {
            return _0x46ab90();
        },
        'rMeAa': function(_0x31a51f, _0x501e46) {
            return _0x31a51f < _0x501e46;
        },
        'UuciP': function(_0x587f9e, _0x2912f7) {
            return _0x587f9e !== _0x2912f7;
        },
        'dDoqT': 'Awbey',
        'HRHsy': 'RYdEE',
        'FnOyO': function(_0x324d8a, _0x3f6eed) {
            return _0x324d8a(_0x3f6eed);
        },
        'XxRTQ': function(_0x51bca2, _0x4b374e) {
            return _0x51bca2 + _0x4b374e;
        },
        'tytVc': function(_0x36a2a4) {
            return _0x36a2a4();
        },
        'RiZoi': function(_0x164147) {
            return _0x164147();
        },
        'WLDhh': function(_0x5857e6, _0x2b452f) {
            return _0x5857e6 + _0x2b452f;
        },
        'fhTAV': function(_0xe89453, _0x1fec3e) {
            return _0xe89453(_0x1fec3e);
        },
        'HXupQ': function(_0x28e99f, _0x58f86c) {
            return _0x28e99f > _0x58f86c;
        },
        'nFzBW': function(_0x2d191e, _0xac2cd3) {
            return _0x2d191e === _0xac2cd3;
        },
        'nmWTJ': 'hOhJm',
        'XEKnT': 'rXhDe',
        'fBpxz': 'jAHTf',
        'DHqPB': 'dQKgG',
        'PsFNH': function(_0x59a1c0, _0x19921c) {
            return _0x59a1c0(_0x19921c);
        },
        'zvUkn': function(_0x236377, _0x19bb49) {
            return _0x236377 === _0x19bb49;
        },
        'MgNlD': 'lKmzq',
        'TwwNr': 'rMwZK'
    };
    if (!cookiesArr[0x0]) {
        if (_0x4d2f07['lfonL'](_0x4d2f07['IoYZB'], _0x4d2f07['YhuTf'])) {
            $['msg']($['name'], _0x4d2f07['XeRgM'], _0x4d2f07['CsgRB'], {
                'open-url': _0x4d2f07['CsgRB']
            });
            return;
        } else {
            if (err) {
                console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                console['log'](JSON['stringify'](err));
            } else {
                data = JSON['parse'](data);
            }
        }
    }
    let _0x4d6a48 = await _0x4d2f07['qZTaT'](getAuthorShareCode, _0x4d2f07['scZaj']),
        _0x525ffe = await _0x4d2f07['MKkgZ'](getAuthorShareCode, _0x4d2f07['EetjD']);
    if (!_0x4d6a48) _0x4d6a48 = await _0x4d2f07['enTIH'](getAuthorShareCode);
    $['authorMyShareIds'] = [..._0x4d6a48 || [], ..._0x525ffe || []];
    for (let _0x4b4485 = 0x0; _0x4d2f07['rMeAa'](_0x4b4485, cookiesArr['length']); _0x4b4485++) {
        if (cookiesArr[_0x4b4485]) {
            if (_0x4d2f07['UuciP'](_0x4d2f07['dDoqT'], _0x4d2f07['HRHsy'])) {
                cookie = cookiesArr[_0x4b4485];
                $['UserName'] = _0x4d2f07['FnOyO'](decodeURIComponent, cookie['match'](/pt_pin=([^; ]+)(?=;?)/) && cookie['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1]);
                $['index'] = _0x4d2f07['XxRTQ'](_0x4b4485, 0x1);
                $['isLogin'] = !![];
                $['nickName'] = '';
                await _0x4d2f07['tytVc'](TotalBean);
                console['log']('\n****开始【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']) + '****\n');
                if (!$['isLogin']) {
                    $['msg']($['name'], '【提示】cookie已失效', '京东账号' + $['index'] + ' ' + ($['nickName'] || $['UserName']) + '\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action', {
                        'open-url': _0x4d2f07['CsgRB']
                    });
                    if ($['isNode']()) {
                        await notify['sendNotify']($['name'] + 'cookie已失效 - ' + $['UserName'], '京东账号' + $['index'] + ' ' + $['UserName'] + '\n请重新登录获取cookie');
                    }
                    continue;
                }
                $['discount'] = 0x0;
                await _0x4d2f07['RiZoi'](redPacket);
                await _0x4d2f07['RiZoi'](showMsg);
            } else {
                console['log']('\x0a' + $['h5activityIndex']['data'][_0x4d2f07['CscJU']] + '\x0a');
            }
        }
    }
    for (let _0x566935 = 0x0; _0x4d2f07['rMeAa'](_0x566935, cookiesArr['length']); _0x566935++) {
        cookie = cookiesArr[_0x566935];
        $['index'] = _0x4d2f07['WLDhh'](_0x566935, 0x1);
        $['UserName'] = _0x4d2f07['fhTAV'](decodeURIComponent, cookie['match'](/pt_pin=([^; ]+)(?=;?)/) && cookie['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1]);
        $['canHelp'] = !![];
        $['redPacketId'] = [...new Set($['redPacketId'])];
        if (cookiesArr && _0x4d2f07['HXupQ'](cookiesArr['length'], 0x2)) {
            if (_0x4d2f07['nFzBW'](_0x4d2f07['nmWTJ'], _0x4d2f07['XEKnT'])) {
                console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                console['log'](JSON['stringify'](err));
            } else {
                console['log']('\n\n自己账号内部互助');
                for (let _0x1e5a76 of $['redPacketId']) {
                    console['log']('账号 ' + $['index'] + ' ' + $['UserName'] + ' 开始给 ' + _0x1e5a76 + ' 进行助力');
                    await _0x4d2f07['fhTAV'](jinli_h5assist, _0x1e5a76);
                    if (!$['canHelp']) {
                        if (_0x4d2f07['UuciP'](_0x4d2f07['fBpxz'], _0x4d2f07['DHqPB'])) {
                            console['log']('次数已用完或活动火爆，跳出助力');
                            break;
                        } else {
                            console['log']('领取任务：' + data);
                            data = JSON['parse'](data);
                        }
                    }
                }
            }
        }
        if ($['canHelp']) {
            console['log']('\n\n有剩余助力机会则给作者lxk0301进行助力');
            for (let _0x5d8e1a of $['authorMyShareIds'] || []) {
                console['log']('\n账号 ' + $['index'] + ' ' + $['UserName'] + ' 开始给作者lxk0301 ' + _0x5d8e1a + ' 进行助力');
                await _0x4d2f07['PsFNH'](jinli_h5assist, _0x5d8e1a);
                if (!$['canHelp']) {
                    if (_0x4d2f07['zvUkn'](_0x4d2f07['MgNlD'], _0x4d2f07['TwwNr'])) {
                        $['logErr'](e, resp);
                    } else {
                        console['log']('次数已用完，跳出助力');
                        break;
                    }
                }
            }
        }
    }
})()['catch'](_0x507c3f => {
    $['log']('', '❌ ' + $['name'] + ', 失败! 原因: ' + _0x507c3f + '!', '');
})['finally'](() => {
    $['done']();
});
async function redPacket() {
    var _0x3a95bc = {
        'gVZdc': function(_0x5226e1, _0x11d283) {
            return _0x5226e1(_0x11d283);
        },
        'DlTwP': '4|1|2|3|0',
        'JoKht': function(_0x524fd9) {
            return _0x524fd9();
        },
        'XsNak': function(_0x2652e6) {
            return _0x2652e6();
        },
        'UWYgD': function(_0x110aa3) {
            return _0x110aa3();
        },
        'VDApH': function(_0x41b198, _0x13cc36) {
            return _0x41b198 === _0x13cc36;
        },
        'IUpgT': 'GBOBP',
        'cTqJM': 'egTsO'
    };
    try {
        var _0x4ed5f4 = _0x3a95bc['DlTwP']['split']('|'),
            _0xa9e9d5 = 0x0;
        while (!![]) {
            switch (_0x4ed5f4[_0xa9e9d5++]) {
                case '0':
                    await _0x3a95bc['JoKht'](h5activityIndex);
                    continue;
                case '1':
                    await _0x3a95bc['JoKht'](doTask);
                    continue;
                case '2':
                    await _0x3a95bc['XsNak'](h5activityIndex);
                    continue;
                case '3':
                    await _0x3a95bc['XsNak'](red);
                    continue;
                case '4':
                    await _0x3a95bc['UWYgD'](taskHomePage);
                    continue;
            }
            break;
        }
    } catch (_0x359a67) {
        if (_0x3a95bc['VDApH'](_0x3a95bc['IUpgT'], _0x3a95bc['cTqJM'])) {
            url = 'https://api.m.jd.com/client.action?functionId=' + functionId + '&body=' + _0x3a95bc['gVZdc'](escape, JSON['stringify'](body)) + '&uuid=8888888&client=apple&clientVersion=9.4.1&st=1617158435079&sign=7eff07437dd817dbfa348c209fd5c129&sv=120';
        } else {
            $['logErr'](_0x359a67);
        }
    }
}

function showMsg() {
    console['log']('\x0a\x0a' + $['name'] + '获得红包：' + $['discount'] + '元\n\n');
}
async function doTask() {
    var _0x558ece = {
        'SpIWq': 'CookieJD',
        'GcjJW': 'CookieJD2',
        'RNGEs': function(_0xe361e6, _0x4f3de6) {
            return _0xe361e6(_0x4f3de6);
        },
        'bJqOr': 'CookiesJD',
        'Bgexc': function(_0x16801d, _0x2f324b) {
            return _0x16801d === _0x2f324b;
        },
        'FwvzB': function(_0x4c1adf, _0x8169c8) {
            return _0x4c1adf > _0x8169c8;
        },
        'RETMa': function(_0x407324, _0x5534f8) {
            return _0x407324 === _0x5534f8;
        },
        'gUkEy': 'uNrzE',
        'ifOLm': 'vRGqN',
        'dLOGE': function(_0x361804, _0xe25aac) {
            return _0x361804(_0xe25aac);
        },
        'fVHaq': function(_0x1972a5, _0x1db4e8) {
            return _0x1972a5 !== _0x1db4e8;
        },
        'VpgBs': function(_0x1b898d, _0x4178b2) {
            return _0x1b898d(_0x4178b2);
        },
        'OGXEZ': function(_0x468766, _0x515d09) {
            return _0x468766(_0x515d09);
        },
        'cxoVk': function(_0x1c8da3) {
            return _0x1c8da3();
        },
        'zdFjw': function(_0x4aaa7b, _0x5a1bc8) {
            return _0x4aaa7b !== _0x5a1bc8;
        },
        'yQpXl': function(_0x467b57, _0x801497) {
            return _0x467b57 !== _0x801497;
        },
        'ekTjm': 'lcrXX',
        'AnOlg': 'Csyxy',
        'PAsOW': function(_0x3d8c07, _0x114765) {
            return _0x3d8c07(_0x114765);
        },
        'nhTbs': function(_0x2488b1, _0x48ce40) {
            return _0x2488b1(_0x48ce40);
        },
        'YNFnE': 'Tixux'
    };
    if ($['taskHomePageData'] && _0x558ece['Bgexc']($['taskHomePageData']['code'], 0x0)) {
        $['taskInfo'] = $['taskHomePageData']['data']['result']['taskInfos'];
        if ($['taskInfo'] && _0x558ece['FwvzB']($['taskInfo']['length'], 0x0)) {
            console['log']('    任务     状态  红包是否领取');
            for (let _0x632229 of $['taskInfo']) {
                console['log'](_0x632229['title']['slice'](-0x6) + '   ' + (_0x632229['alreadyReceivedCount'] ? _0x632229['alreadyReceivedCount'] : 0x0) + '/' + _0x632229['requireCount'] + '      ' + (_0x558ece['Bgexc'](_0x632229['innerStatus'], 0x4) ? '是' : '否'));
            }
            for (let _0x2c4e15 of $['taskInfo']) {
                if (_0x558ece['RETMa'](_0x558ece['gUkEy'], _0x558ece['ifOLm'])) {
                    cookiesArr = [$['getdata'](_0x558ece['SpIWq']), $['getdata'](_0x558ece['GcjJW']), ..._0x558ece['RNGEs'](jsonParse, $['getdata'](_0x558ece['bJqOr']) || '[]')['map'](_0x4a7091 => _0x4a7091['cookie'])]['filter'](_0xa4c71c => !!_0xa4c71c);
                } else {
                    if (_0x558ece['RETMa'](_0x2c4e15['innerStatus'], 0x4)) {
                        console['log']('[' + _0x2c4e15['title'] + '] 已经领取奖励');
                    } else if (_0x558ece['RETMa'](_0x2c4e15['innerStatus'], 0x3)) {
                        await _0x558ece['dLOGE'](receiveTaskRedpacket, _0x2c4e15['taskType']);
                    } else if (_0x558ece['RETMa'](_0x2c4e15['innerStatus'], 0x2)) {
                        if (_0x558ece['fVHaq'](_0x2c4e15['taskType'], 0x0) && _0x558ece['fVHaq'](_0x2c4e15['taskType'], 0x1)) {
                            console['log']('开始做【' + _0x2c4e15['title'] + '】任务');
                            await _0x558ece['VpgBs'](active, _0x2c4e15['taskType']);
                            console['log']('开始领取【' + _0x2c4e15['title'] + '】任务所得红包奖励');
                            await _0x558ece['OGXEZ'](receiveTaskRedpacket, _0x2c4e15['taskType']);
                        } else if (_0x558ece['RETMa'](_0x2c4e15['taskType'], 0x1)) {
                            console['log']('开始做【' + _0x2c4e15['title'] + '】任务');
                            await _0x558ece['cxoVk'](doAppTask);
                        } else {
                            console['log']('[' + _0x2c4e15['title'] + '] 功能未开发');
                        }
                    } else if (_0x558ece['zdFjw'](_0x2c4e15['innerStatus'], 0x4)) {
                        console['log']('\n开始领取【' + _0x2c4e15['title'] + '】任务');
                        await _0x558ece['OGXEZ'](startTask, _0x2c4e15['taskType']);
                        if (_0x558ece['yQpXl'](_0x2c4e15['taskType'], 0x0) && _0x558ece['yQpXl'](_0x2c4e15['taskType'], 0x1)) {
                            if (_0x558ece['yQpXl'](_0x558ece['ekTjm'], _0x558ece['AnOlg'])) {
                                console['log']('开始做【' + _0x2c4e15['title'] + '】任务');
                                await _0x558ece['PAsOW'](active, _0x2c4e15['taskType']);
                                console['log']('开始领取【' + _0x2c4e15['title'] + '】任务所得红包奖励');
                                await _0x558ece['nhTbs'](receiveTaskRedpacket, _0x2c4e15['taskType']);
                            } else {
                                console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                                console['log'](JSON['stringify'](err));
                            }
                        } else if (_0x558ece['RETMa'](_0x2c4e15['taskType'], 0x1)) {
                            if (_0x558ece['yQpXl'](_0x558ece['YNFnE'], _0x558ece['YNFnE'])) {
                                if (err) {
                                    console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                                    console['log'](JSON['stringify'](err));
                                } else {
                                    console['log']('领取任务：' + data);
                                    data = JSON['parse'](data);
                                }
                            } else {
                                console['log']('开始做【' + _0x2c4e15['title'] + '】任务');
                                await _0x558ece['cxoVk'](doAppTask);
                            }
                        } else {
                            console['log']('[' + _0x2c4e15['title'] + '] 功能未开发');
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
    var _0x1c5692 = {
        'BfByy': 'result',
        'BwdpI': 'data',
        'XXNKS': 'rewards',
        'tRRzw': 'hasSendNumber',
        'OlLaq': 'assistants',
        'uuvta': function(_0x54b0f0, _0x1eb158) {
            return _0x54b0f0 === _0x1eb158;
        },
        'ZSUqz': 'biz_code',
        'TaEzZ': function(_0x436c4c) {
            return _0x436c4c();
        },
        'UhJDx': function(_0x494671, _0x41284c) {
            return _0x494671 === _0x41284c;
        },
        'dLGVd': 'cSOTd',
        'cDSJx': 'redpacketInfo',
        'hDRae': 'requireAssistNum',
        'DotTm': function(_0x2d7aef, _0x2ac989) {
            return _0x2d7aef + _0x2ac989;
        },
        'fQzRr': 'remainRedpacketNumber',
        'SSrIF': 'waitOpenTimes',
        'wCfST': function(_0x103e1a, _0x4e2ea4) {
            return _0x103e1a > _0x4e2ea4;
        },
        'iRKfv': 'UBEss',
        'sXhzP': function(_0x4bdab9, _0x289d3f) {
            return _0x4bdab9 < _0x289d3f;
        },
        'iVlkW': function(_0x287386, _0x2320ab) {
            return _0x287386 === _0x2320ab;
        },
        'ZnKHd': 'KzfHD',
        'FrTIa': function(_0xd1aabc, _0x1c07be) {
            return _0xd1aabc(_0x1c07be);
        },
        'uyMyq': 'biz_msg'
    };
    $['hasSendNumber'] = 0x0;
    $['assistants'] = 0x0;
    if ($['h5activityIndex'] && $['h5activityIndex']['data'] && $['h5activityIndex']['data'][_0x1c5692['BfByy']]) {
        const _0x19cba6 = $['h5activityIndex'][_0x1c5692['BwdpI']][_0x1c5692['BfByy']][_0x1c5692['XXNKS']] || [];
        $['hasSendNumber'] = $['h5activityIndex'][_0x1c5692['BwdpI']][_0x1c5692['BfByy']][_0x1c5692['tRRzw']];
        if ($['h5activityIndex'][_0x1c5692['BwdpI']][_0x1c5692['BfByy']][_0x1c5692['OlLaq']]) {
            $['assistants'] = $['h5activityIndex'][_0x1c5692['BwdpI']][_0x1c5692['BfByy']][_0x1c5692['OlLaq']]['length'] || 0x0;
        }
    }
    if ($['h5activityIndex'] && $['h5activityIndex']['data'] && _0x1c5692['uuvta']($['h5activityIndex']['data'][_0x1c5692['ZSUqz']], 0x2712)) {
        await _0x1c5692['TaEzZ'](h5launch);
    } else if ($['h5activityIndex'] && $['h5activityIndex']['data'] && _0x1c5692['uuvta']($['h5activityIndex']['data'][_0x1c5692['ZSUqz']], 0x4e21)) {
        if (_0x1c5692['UhJDx'](_0x1c5692['dLGVd'], _0x1c5692['dLGVd'])) {
            const _0x1c8688 = $['h5activityIndex'][_0x1c5692['BwdpI']][_0x1c5692['BfByy']][_0x1c5692['cDSJx']]['id'];
            if (_0x1c8688) $['redPacketId']['push'](_0x1c8688);
            console['log']('\n\n当前待拆红包ID:' + $['h5activityIndex'][_0x1c5692['BwdpI']][_0x1c5692['BfByy']][_0x1c5692['cDSJx']]['id'] + '，进度：再邀' + $['h5activityIndex'][_0x1c5692['BwdpI']][_0x1c5692['BfByy']][_0x1c5692['hDRae']] + '个好友，开第' + _0x1c5692['DotTm']($['hasSendNumber'], 0x1) + '个红包。当前已拆红包：' + $['hasSendNumber'] + '个，剩余' + $['h5activityIndex'][_0x1c5692['BwdpI']][_0x1c5692['BfByy']][_0x1c5692['fQzRr']] + '个红包待开，已有' + $['assistants'] + '好友助力\n\n');
            const _0x1dd200 = $['h5activityIndex'][_0x1c5692['BwdpI']][_0x1c5692['BfByy']][_0x1c5692['cDSJx']][_0x1c5692['SSrIF']] || 0x0;
            console['log']('当前可拆红包个数：' + _0x1dd200);
            if (_0x1c5692['wCfST'](_0x1dd200, 0x0)) {
                if (_0x1c5692['UhJDx'](_0x1c5692['iRKfv'], _0x1c5692['iRKfv'])) {
                    for (let _0xe877ad = 0x0; _0x1c5692['sXhzP'](_0xe877ad, new Array(_0x1dd200)['fill']('')['length']); _0xe877ad++) {
                        if (_0x1c5692['iVlkW'](_0x1c5692['ZnKHd'], _0x1c5692['ZnKHd'])) {
                            if (!_0x1c8688) break;
                            await _0x1c5692['FrTIa'](h5receiveRedpacket, _0x1c8688);
                            await $['wait'](0x1f4);
                        } else {
                            console['log']('[' + item['title'] + '] 功能未开发');
                        }
                    }
                } else {
                    if (err) {} else {
                        if (data) data = JSON['parse'](data);
                    }
                }
            }
        } else {
            console['log']('领红包失败：' + JSON['stringify'](data));
        }
    } else if ($['h5activityIndex'] && $['h5activityIndex']['data'] && _0x1c5692['iVlkW']($['h5activityIndex']['data'][_0x1c5692['ZSUqz']], 0x4e22)) {
        console['log']('\x0a' + $['h5activityIndex']['data'][_0x1c5692['uyMyq']] + '\x0a');
    }
}

function taskHomePage() {
    var _0x40ee2c = {
        'HURLu': function(_0x1eac5d, _0x52a612) {
            return _0x1eac5d !== _0x52a612;
        },
        'YlKMy': 'YqNzp',
        'tBArr': 'iXebC',
        'WmPVE': function(_0x493688, _0x2ccd7b) {
            return _0x493688(_0x2ccd7b);
        },
        'TUkFZ': function(_0x5b0014, _0x28b5aa, _0x14f83a) {
            return _0x5b0014(_0x28b5aa, _0x14f83a);
        }
    };
    return new Promise(_0x4426ad => {
        var _0x54bb68 = {
            'cJVdh': function(_0x4171b2, _0x1341a5) {
                return _0x40ee2c['WmPVE'](_0x4171b2, _0x1341a5);
            }
        };
        $['post'](_0x40ee2c['TUkFZ'](taskUrl, arguments['callee']['name']['toString'](), {
            'clientInfo': {}
        }), (_0xabf5d7, _0xba03ae, _0x5d51f9) => {
            try {
                if (_0x40ee2c['HURLu'](_0x40ee2c['YlKMy'], _0x40ee2c['tBArr'])) {
                    if (_0xabf5d7) {
                        console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                        console['log'](JSON['stringify'](_0xabf5d7));
                    } else {
                        $['taskHomePageData'] = JSON['parse'](_0x5d51f9);
                    }
                } else {
                    _0x54bb68['cJVdh'](_0x4426ad, _0x5d51f9);
                }
            } catch (_0x596792) {
                $['logErr'](_0x596792, _0xba03ae);
            } finally {
                _0x40ee2c['WmPVE'](_0x4426ad, _0x5d51f9);
            }
        });
    });
}

function startTask(_0x353f8c) {
    var _0x295d3f = {
        'pdFhY': 'data',
        'ZxARs': 'result',
        'zXeqc': 'statusDesc',
        'OHiNt': 'rewards',
        'PFATv': 'packetSum',
        'yxYkb': function(_0x27c612, _0x374488) {
            return _0x27c612 !== _0x374488;
        },
        'qCrGw': 'YVRAB',
        'PVCYJ': 'XaCuW',
        'WNrZu': 'UWgtY',
        'ERbrL': function(_0xc7963f, _0x3f1c8e) {
            return _0xc7963f(_0x3f1c8e);
        },
        'ppRqC': function(_0x373af2, _0x1a1700) {
            return _0x373af2 === _0x1a1700;
        },
        'nsOfA': 'egdXw',
        'HTxsC': function(_0x93f01b, _0x18d51b, _0x107698) {
            return _0x93f01b(_0x18d51b, _0x107698);
        },
        'vWYdZ': 'token',
        'JSjdV': function(_0x15723e, _0x333bb6) {
            return _0x15723e + _0x333bb6;
        }
    };
    let _0x24ae0b = {
        'taskType': _0x353f8c
    };
    _0x24ae0b[_0x295d3f['vWYdZ']] = $['md5']($['md5'](_0x295d3f['JSjdV'](_0x295d3f['JSjdV']('j', JSON['stringify'](_0x24ae0b)), 'D')));
    return new Promise(_0x3c160d => {
        var _0x2cbbf3 = {
            'FKLfZ': _0x295d3f['pdFhY'],
            'kWAjG': _0x295d3f['ZxARs'],
            'AQCdc': _0x295d3f['zXeqc'],
            'QJaIs': _0x295d3f['OHiNt'],
            'mDLzX': _0x295d3f['PFATv'],
            'fMnuf': function(_0x59cba6, _0x441287) {
                return _0x295d3f['yxYkb'](_0x59cba6, _0x441287);
            },
            'OgtoC': _0x295d3f['qCrGw'],
            'eEcTv': _0x295d3f['PVCYJ'],
            'syQZE': _0x295d3f['WNrZu'],
            'wcltK': function(_0x236b8c, _0x224bd) {
                return _0x295d3f['ERbrL'](_0x236b8c, _0x224bd);
            }
        };
        if (_0x295d3f['ppRqC'](_0x295d3f['nsOfA'], _0x295d3f['nsOfA'])) {
            $['post'](_0x295d3f['HTxsC'](taskUrl, arguments['callee']['name']['toString'](), _0x24ae0b), (_0x6dbde8, _0x25ce1d, _0x24ae0b) => {
                var _0xc30b55 = {
                    'XdOEr': _0x2cbbf3['kWAjG'],
                    'zKzkw': _0x2cbbf3['FKLfZ'],
                    'MzMpE': _0x2cbbf3['QJaIs'],
                    'ichjm': _0x2cbbf3['mDLzX']
                };
                if (_0x2cbbf3['fMnuf'](_0x2cbbf3['OgtoC'], _0x2cbbf3['OgtoC'])) {
                    _0x24ae0b = JSON['parse'](_0x24ae0b);
                    $['h5activityIndex'] = _0x24ae0b;
                    $['discount'] = 0x0;
                    if ($['h5activityIndex'] && $['h5activityIndex']['data'] && $['h5activityIndex']['data'][_0xc30b55['XdOEr']]) {
                        const _0xde3d2e = $['h5activityIndex'][_0xc30b55['zKzkw']][_0xc30b55['XdOEr']][_0xc30b55['MzMpE']] || [];
                        for (let _0x51ab9b of _0xde3d2e) {
                            $['discount'] += _0x51ab9b[_0xc30b55['ichjm']];
                        }
                        if ($['discount']) $['discount'] = $['discount']['toFixed'](0x2);
                    }
                } else {
                    try {
                        if (_0x6dbde8) {
                            console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                            console['log'](JSON['stringify'](_0x6dbde8));
                        } else {
                            if (_0x2cbbf3['fMnuf'](_0x2cbbf3['eEcTv'], _0x2cbbf3['syQZE'])) {
                                console['log']('领取任务：' + _0x24ae0b);
                                _0x24ae0b = JSON['parse'](_0x24ae0b);
                            } else {
                                console['log']('\n\n发起助力红包 失败：' + _0x24ae0b[_0x2cbbf3['FKLfZ']][_0x2cbbf3['kWAjG']][_0x2cbbf3['AQCdc']]);
                            }
                        }
                    } catch (_0x1bb2e8) {
                        $['logErr'](_0x1bb2e8, _0x25ce1d);
                    } finally {
                        _0x2cbbf3['wcltK'](_0x3c160d, _0x24ae0b);
                    }
                }
            });
        } else {
            console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
            console['log'](JSON['stringify'](err));
        }
    });
}
async function active(_0x5a2fec) {
    var _0x491b4f = {
        'tqKYu': 'data',
        'MoRZt': 'result',
        'mJppo': 'redPacketId',
        'qGQVr': function(_0x407fb2, _0x1d9e5f) {
            return _0x407fb2(_0x1d9e5f);
        },
        'njWaE': function(_0x2a27cf, _0x5b473c) {
            return _0x2a27cf === _0x5b473c;
        },
        'bjHxG': function(_0x2e4486, _0x3437f8) {
            return _0x2e4486 !== _0x3437f8;
        },
        'vRxyM': 'pTyKb',
        'aaTZq': 'sUarr',
        'lxIeL': function(_0x28b78c, _0x59c5fc, _0x5b9dd3) {
            return _0x28b78c(_0x59c5fc, _0x5b9dd3);
        },
        'NBbEk': '手动进入app内检查\n是否存在[从京豆首页进领券中心逛30秒]的任务\n如存在,请手动完成再运行脚本',
        'cEMii': function(_0x189c31, _0x108e6b) {
            return _0x189c31 !== _0x108e6b;
        },
        'kGmjx': 'aJKAs',
        'lSwCx': 'sSmci'
    };
    const _0x154426 = await _0x491b4f['qGQVr'](getTaskDetailForColor, _0x5a2fec);
    if (_0x154426 && _0x491b4f['njWaE'](_0x154426['code'], 0x0)) {
        if (_0x491b4f['bjHxG'](_0x491b4f['vRxyM'], _0x491b4f['vRxyM'])) {
            console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
            console['log'](JSON['stringify'](err));
        } else {
            if (_0x154426['data'] && _0x154426['data']['result']) {
                const {
                    advertDetails
                } = _0x154426['data']['result'];
                for (let _0x4d9a7d of advertDetails) {
                    if (_0x491b4f['njWaE'](_0x491b4f['aaTZq'], _0x491b4f['aaTZq'])) {
                        await $['wait'](0x3e8);
                        if (_0x4d9a7d['id'] && _0x491b4f['njWaE'](_0x4d9a7d['status'], 0x0)) {
                            await _0x491b4f['lxIeL'](taskReportForColor, _0x5a2fec, _0x4d9a7d['id']);
                        }
                    } else {
                        console['log']('\n\n发起助力红包 成功：红包ID ' + data[_0x491b4f['tqKYu']][_0x491b4f['MoRZt']][_0x491b4f['mJppo']]);
                        $['redPacketId']['push'](data[_0x491b4f['tqKYu']][_0x491b4f['MoRZt']][_0x491b4f['mJppo']]);
                    }
                }
            } else {
                console['log']('任务列表为空,手动进入app内检查 是否存在[从京豆首页进领券中心逛30秒]的任务,如存在,请手动完成再运行脚本');
                $['msg']('' + $['name'], '', _0x491b4f['NBbEk']);
                if ($['isNode']()) await notify['sendNotify']($['name'] + ' - 账号' + $['index'] + ' - ' + $['nickName'], '执行脚本出现异常\n请手动进入app内检查\n是否存在[从京豆首页进领券中心逛30秒]的任务\n如存在,请手动完成再运行脚本');
            }
        }
    } else {
        if (_0x491b4f['cEMii'](_0x491b4f['kGmjx'], _0x491b4f['lSwCx'])) {
            console['log']('---具体任务详情---' + JSON['stringify'](_0x154426));
        } else {
            console['log']('助力异常：' + JSON['stringify'](data));
        }
    }
}

function getTaskDetailForColor(_0x14fa5a) {
    var _0x462419 = {
        'zSLVO': function(_0x6bbbfd, _0x2c87dd) {
            return _0x6bbbfd(_0x2c87dd);
        },
        'QMKKh': function(_0x196798) {
            return _0x196798();
        },
        'XkgvA': function(_0x48c721, _0x39e60f) {
            return _0x48c721 === _0x39e60f;
        },
        'kynIh': 'xAtpb',
        'jhmzM': function(_0x12b34b, _0x4921bc) {
            return _0x12b34b !== _0x4921bc;
        },
        'jMpnH': 'bYAzZ',
        'GinnV': 'PYfYB',
        'BBgsX': 'plWWT',
        'NwguP': 'TDfcf',
        'gbwQq': function(_0x4ffeb5, _0x1008f2) {
            return _0x4ffeb5(_0x1008f2);
        },
        'Dqqdp': function(_0x1e518e, _0x27491b, _0x1d2e66) {
            return _0x1e518e(_0x27491b, _0x1d2e66);
        }
    };
    const _0x4fbd57 = {
        'clientInfo': {},
        'taskType': _0x14fa5a
    };
    return new Promise(_0x17d666 => {
        var _0x533554 = {
            'NRnJB': function(_0x261363, _0x5acc2f) {
                return _0x462419['zSLVO'](_0x261363, _0x5acc2f);
            },
            'BuwRi': function(_0x32c4b6) {
                return _0x462419['QMKKh'](_0x32c4b6);
            },
            'XNPuB': function(_0x505119, _0x1830c5) {
                return _0x462419['XkgvA'](_0x505119, _0x1830c5);
            },
            'VHCBa': _0x462419['kynIh'],
            'qPley': function(_0x11f20f, _0xab526b) {
                return _0x462419['jhmzM'](_0x11f20f, _0xab526b);
            },
            'WlrQJ': _0x462419['jMpnH'],
            'miPaB': _0x462419['GinnV'],
            'xZbGI': _0x462419['BBgsX'],
            'ZuEZe': _0x462419['NwguP'],
            'tEyrn': function(_0x6329f8, _0x338d30) {
                return _0x462419['gbwQq'](_0x6329f8, _0x338d30);
            }
        };
        $['post'](_0x462419['Dqqdp'](taskUrl, arguments['callee']['name']['toString'](), _0x4fbd57), (_0x238564, _0x3bfc0e, _0x4fbd57) => {
            var _0x90f4e7 = {
                'snbAX': function(_0x531301) {
                    return _0x533554['BuwRi'](_0x531301);
                }
            };
            if (_0x533554['XNPuB'](_0x533554['VHCBa'], _0x533554['VHCBa'])) {
                try {
                    if (_0x238564) {
                        if (_0x533554['qPley'](_0x533554['WlrQJ'], _0x533554['miPaB'])) {
                            console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                            console['log'](JSON['stringify'](_0x238564));
                        } else {
                            _0x533554['NRnJB'](_0x17d666, _0x4fbd57);
                        }
                    } else {
                        if (_0x533554['qPley'](_0x533554['xZbGI'], _0x533554['ZuEZe'])) {
                            _0x4fbd57 = JSON['parse'](_0x4fbd57);
                        } else {
                            $['logErr'](e);
                        }
                    }
                } catch (_0x99d069) {
                    $['logErr'](_0x99d069, _0x3bfc0e);
                } finally {
                    _0x533554['tEyrn'](_0x17d666, _0x4fbd57);
                }
            } else {
                _0x90f4e7['snbAX'](_0x17d666);
            }
        });
    });
}

function taskReportForColor(_0x178de9, _0x40ce70) {
    var _0x34e8ac = {
        'OsXoZ': function(_0x2ce0b3, _0x9bd24c) {
            return _0x2ce0b3 === _0x9bd24c;
        },
        'FvgQq': 'false',
        'TPgub': function(_0x2685dc, _0x3cc078) {
            return _0x2685dc > _0x3cc078;
        },
        'TNRpU': 'GITHUB',
        'DnQIQ': function(_0x753d3, _0x1b21d4) {
            return _0x753d3(_0x1b21d4);
        },
        'WQvmU': function(_0x2a61ba, _0x30252d) {
            return _0x2a61ba !== _0x30252d;
        },
        'vNQyc': 'KFVGk',
        'mBRwO': 'aGSvZ',
        'ksouH': 'Xxslf',
        'fLcfZ': 'Ikvbu',
        'Ylmep': 'PQJfm',
        'LQgtC': 'nDJRr',
        'WqKKh': function(_0x36c2be, _0x367cf9, _0x8b19cd) {
            return _0x36c2be(_0x367cf9, _0x8b19cd);
        },
        'HdTcQ': 'token',
        'cuySd': function(_0x454ce0, _0x75d546) {
            return _0x454ce0 + _0x75d546;
        },
        'ZPKwA': function(_0x15e7a3, _0x204155) {
            return _0x15e7a3 + _0x204155;
        }
    };
    const _0x1fe483 = {
        'taskType': _0x178de9,
        'detailId': _0x40ce70
    };
    _0x1fe483[_0x34e8ac['HdTcQ']] = $['md5']($['md5'](_0x34e8ac['cuySd'](_0x34e8ac['ZPKwA']('j', JSON['stringify'](_0x1fe483)), 'D')));
    return new Promise(_0x510161 => {
        var _0x542662 = {
            'hxPcM': function(_0x553fda, _0x575909) {
                return _0x34e8ac['DnQIQ'](_0x553fda, _0x575909);
            },
            'gisHs': function(_0x5725e4, _0x18ef23) {
                return _0x34e8ac['WQvmU'](_0x5725e4, _0x18ef23);
            },
            'nrYQy': _0x34e8ac['vNQyc'],
            'LQsQf': _0x34e8ac['mBRwO'],
            'QOUMU': function(_0x46cf0d, _0x197042) {
                return _0x34e8ac['OsXoZ'](_0x46cf0d, _0x197042);
            },
            'bvuNo': _0x34e8ac['ksouH'],
            'fXtqI': _0x34e8ac['fLcfZ']
        };
        if (_0x34e8ac['OsXoZ'](_0x34e8ac['Ylmep'], _0x34e8ac['LQgtC'])) {
            Object['keys'](jdCookieNode)['forEach'](_0x4baa96 => {
                cookiesArr['push'](jdCookieNode[_0x4baa96]);
            });
            if (process['env']['JD_DEBUG'] && _0x34e8ac['OsXoZ'](process['env']['JD_DEBUG'], _0x34e8ac['FvgQq'])) console['log'] = () => {};
            if (_0x34e8ac['TPgub'](JSON['stringify'](process['env'])['indexOf'](_0x34e8ac['TNRpU']), -0x1)) process['exit'](0x0);
        } else {
            $['post'](_0x34e8ac['WqKKh'](taskUrl, arguments['callee']['name']['toString'](), _0x1fe483), (_0x10450e, _0x11c86f, _0x1fe483) => {
                var _0x3169e5 = {
                    'fYUfr': function(_0x24a788, _0x3709a5) {
                        return _0x542662['hxPcM'](_0x24a788, _0x3709a5);
                    }
                };
                if (_0x542662['gisHs'](_0x542662['nrYQy'], _0x542662['nrYQy'])) {
                    $['logErr'](e, _0x11c86f);
                } else {
                    try {
                        if (_0x10450e) {
                            console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                            console['log'](JSON['stringify'](_0x10450e));
                        } else {
                            if (_0x542662['gisHs'](_0x542662['LQsQf'], _0x542662['LQsQf'])) {
                                $['taskHomePageData'] = JSON['parse'](_0x1fe483);
                            } else {
                                _0x1fe483 = JSON['parse'](_0x1fe483);
                            }
                        }
                    } catch (_0x379179) {
                        if (_0x542662['QOUMU'](_0x542662['bvuNo'], _0x542662['fXtqI'])) {
                            url = 'https://api.m.jd.com/client.action?functionId=' + functionId + '&body=' + _0x3169e5['fYUfr'](escape, JSON['stringify'](body)) + '&uuid=8888888&client=apple&clientVersion=9.4.1&st=1617158358007&sign=a15f78e5846f9b0178dcabb1093a6a7f&sv=100';
                        } else {
                            $['logErr'](_0x379179, _0x11c86f);
                        }
                    } finally {
                        _0x542662['hxPcM'](_0x510161, _0x1fe483);
                    }
                }
            });
        }
    });
}

function receiveTaskRedpacket(_0x1ee70e) {
    var _0x308b62 = {
        'LDcnM': function(_0x951581, _0xd0de10) {
            return _0x951581 === _0xd0de10;
        },
        'DibPv': 'reportCcTask',
        'MNeND': function(_0x50837e, _0x3d4291) {
            return _0x50837e(_0x3d4291);
        },
        'iWCQI': 'WMzbF',
        'cZwDN': 'hQRAl',
        'JLHOS': function(_0x11d203, _0x38b56d) {
            return _0x11d203 === _0x38b56d;
        },
        'WgBmv': function(_0x3ee48f, _0x326227) {
            return _0x3ee48f !== _0x326227;
        },
        'xucNi': 'PkSMC',
        'xgSXJ': function(_0x47a302, _0x195fa1) {
            return _0x47a302 !== _0x195fa1;
        },
        'Wenik': 'gBkqO',
        'FQhKw': 'CQCbN',
        'wSBYK': function(_0xd7f8cd, _0x2f688a) {
            return _0xd7f8cd(_0x2f688a);
        },
        'aHRAF': 'xXWrB',
        'JumJC': function(_0x386cbb, _0x11c036, _0xa330c3) {
            return _0x386cbb(_0x11c036, _0xa330c3);
        }
    };
    const _0x2c3982 = {
        'clientInfo': {},
        'taskType': _0x1ee70e
    };
    return new Promise(_0x65f494 => {
        if (_0x308b62['JLHOS'](_0x308b62['aHRAF'], _0x308b62['aHRAF'])) {
            $['post'](_0x308b62['JumJC'](taskUrl, arguments['callee']['name']['toString'](), _0x2c3982), (_0x1dd445, _0x1ec400, _0x4c4ebc) => {
                var _0x1cb755 = {
                    'VUzfu': function(_0x2759c9, _0x694d3) {
                        return _0x308b62['LDcnM'](_0x2759c9, _0x694d3);
                    },
                    'jkZrr': _0x308b62['DibPv'],
                    'AiBrm': function(_0x76195b, _0x103bed) {
                        return _0x308b62['MNeND'](_0x76195b, _0x103bed);
                    }
                };
                try {
                    if (_0x1dd445) {
                        console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                        console['log'](JSON['stringify'](_0x1dd445));
                    } else {
                        if (_0x308b62['LDcnM'](_0x308b62['iWCQI'], _0x308b62['cZwDN'])) {
                            if (_0x1dd445) {
                                console['log']('' + JSON['stringify'](_0x1dd445));
                                console['log']($['name'] + ' API请求失败，请检查网路重试');
                            } else {
                                if (_0x4c4ebc) {
                                    if (_0x1cb755['VUzfu'](type, '1') && _0x1cb755['VUzfu'](functionId, _0x1cb755['jkZrr'])) console['log']('京东首页点击“领券”逛10s任务:' + _0x4c4ebc);
                                }
                            }
                        } else {
                            _0x4c4ebc = JSON['parse'](_0x4c4ebc);
                            if (_0x4c4ebc['data']['success'] && _0x308b62['JLHOS'](_0x4c4ebc['data']['biz_code'], 0x0)) {
                                console['log']('红包领取成功，获得' + _0x4c4ebc['data']['result']['discount'] + '元\x0a');
                                $['discount'] += _0x308b62['MNeND'](Number, _0x4c4ebc['data']['result']['discount']);
                            }
                        }
                    }
                } catch (_0x48ff9b) {
                    if (_0x308b62['WgBmv'](_0x308b62['xucNi'], _0x308b62['xucNi'])) {
                        $['logErr'](_0x48ff9b, _0x1ec400);
                    } else {
                        $['logErr'](_0x48ff9b, _0x1ec400);
                    }
                } finally {
                    if (_0x308b62['xgSXJ'](_0x308b62['Wenik'], _0x308b62['FQhKw'])) {
                        _0x308b62['wSBYK'](_0x65f494, _0x4c4ebc);
                    } else {
                        if (_0x1dd445) {
                            console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                            console['log'](JSON['stringify'](_0x1dd445));
                        } else {
                            _0x4c4ebc = JSON['parse'](_0x4c4ebc);
                            if (_0x4c4ebc['data']['success'] && _0x1cb755['VUzfu'](_0x4c4ebc['data']['biz_code'], 0x0)) {
                                console['log']('红包领取成功，获得' + _0x4c4ebc['data']['result']['discount'] + '元\x0a');
                                $['discount'] += _0x1cb755['AiBrm'](Number, _0x4c4ebc['data']['result']['discount']);
                            }
                        }
                    }
                }
            });
        } else {
            console['log'](item['title']['slice'](-0x6) + '   ' + (item['alreadyReceivedCount'] ? item['alreadyReceivedCount'] : 0x0) + '/' + item['requireCount'] + '      ' + (_0x308b62['JLHOS'](item['innerStatus'], 0x4) ? '是' : '否'));
        }
    });
}

function jinli_h5assist(_0x625d8) {
    var _0x4d2dda = {
        'KcvBL': function(_0x2cd42a, _0x4628ae) {
            return _0x2cd42a * _0x4628ae;
        },
        'pNdVS': 'api.m.jd.com',
        'qFSOJ': 'application/x-www-form-urlencoded',
        'WnNAm': 'https://happy.m.jd.com',
        'jfRwa': 'gzip, deflate, br',
        'hVBmz': 'keep-alive',
        'xbcUi': '*/*',
        'tmhZp': function(_0x3b6bc8, _0x5c84df) {
            return _0x3b6bc8(_0x5c84df);
        },
        'Zdhcx': './USER_AGENTS',
        'MLzbG': 'JDUA',
        'eXeQx': 'jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
        'ROeIm': 'https://happy.m.jd.com/babelDiy/zjyw/3ugedFa7yA6NhxLN5gw2L3PF9sQC/index.html',
        'zaEUI': 'zh-cn',
        'gBplM': 'data',
        'mFtBV': 'result',
        'YBecu': 'redPacketId',
        'jcLcW': 'statusDesc',
        'DgIZv': function(_0x8d8226, _0x4e8ce1) {
            return _0x8d8226 !== _0x4e8ce1;
        },
        'qHnCQ': 'iUGxE',
        'gNWKW': 'ZKrUN',
        'FNbcj': function(_0x8f0183, _0x268f17) {
            return _0x8f0183 === _0x268f17;
        },
        'ZiJPc': 'XcFJv',
        'YNWhp': 'MUbrY',
        'nJLOm': 'biz_code',
        'XuxhT': 'status',
        'vcTrl': function(_0x165a6c, _0x1c2e9d) {
            return _0x165a6c !== _0x1c2e9d;
        },
        'ZNRzO': 'QNtQa',
        'EDpkF': 'ZNcuK',
        'nyopL': function(_0x16689e) {
            return _0x16689e();
        },
        'DbJcm': function(_0x408bba, _0x3b5ff5, _0x3e5486) {
            return _0x408bba(_0x3b5ff5, _0x3e5486);
        }
    };
    const _0x14496a = {
        'clientInfo': {},
        'redPacketId': _0x625d8,
        'followShop': 0x0,
        'promUserState': ''
    };
    const _0x2010ec = _0x4d2dda['DbJcm'](taskUrl, arguments['callee']['name']['toString'](), _0x14496a);
    return new Promise(_0x52d95b => {
        var _0x14ea3c = {
            'kBsJd': function(_0x2a33a0, _0x31a17b) {
                return _0x4d2dda['KcvBL'](_0x2a33a0, _0x31a17b);
            },
            'iVTTL': _0x4d2dda['pNdVS'],
            'apZWY': _0x4d2dda['qFSOJ'],
            'pRnuZ': _0x4d2dda['WnNAm'],
            'ECLfs': _0x4d2dda['jfRwa'],
            'RJPBl': _0x4d2dda['hVBmz'],
            'ohFrA': _0x4d2dda['xbcUi'],
            'Rcqml': function(_0x599fea, _0x1aa69f) {
                return _0x4d2dda['tmhZp'](_0x599fea, _0x1aa69f);
            },
            'CWEEo': _0x4d2dda['Zdhcx'],
            'GEqaY': _0x4d2dda['MLzbG'],
            'RNpwb': _0x4d2dda['eXeQx'],
            'jHWCN': _0x4d2dda['ROeIm'],
            'ASjgc': _0x4d2dda['zaEUI'],
            'dIlHw': _0x4d2dda['gBplM'],
            'jgZli': _0x4d2dda['mFtBV'],
            'AmQma': _0x4d2dda['YBecu'],
            'oxefe': _0x4d2dda['jcLcW'],
            'vGxif': function(_0x1e0ff3, _0x4b3e48) {
                return _0x4d2dda['DgIZv'](_0x1e0ff3, _0x4b3e48);
            },
            'kIaTW': _0x4d2dda['qHnCQ'],
            'ZmiOc': _0x4d2dda['gNWKW'],
            'RmquR': function(_0x2ea771, _0x219c9a) {
                return _0x4d2dda['FNbcj'](_0x2ea771, _0x219c9a);
            },
            'BZOch': _0x4d2dda['ZiJPc'],
            'bVLrb': _0x4d2dda['YNWhp'],
            'oPegg': _0x4d2dda['nJLOm'],
            'gGfPx': function(_0x25f8c0, _0x56e130) {
                return _0x4d2dda['FNbcj'](_0x25f8c0, _0x56e130);
            },
            'HQYOf': _0x4d2dda['XuxhT'],
            'YoNRM': function(_0x20df48, _0x5c02ed) {
                return _0x4d2dda['FNbcj'](_0x20df48, _0x5c02ed);
            },
            'ARTxd': function(_0x42ee6c, _0x4b731a) {
                return _0x4d2dda['vcTrl'](_0x42ee6c, _0x4b731a);
            },
            'vdInK': _0x4d2dda['ZNRzO'],
            'NdMRQ': _0x4d2dda['EDpkF'],
            'LdrUA': function(_0x5a9dde) {
                return _0x4d2dda['nyopL'](_0x5a9dde);
            }
        };
        $['post'](_0x2010ec, (_0x418569, _0xc4be6c, _0x34a760) => {
            var _0x31a440 = {
                'alNPd': _0x14ea3c['dIlHw'],
                'uvRqc': _0x14ea3c['jgZli'],
                'uuALr': _0x14ea3c['AmQma'],
                'apZcR': _0x14ea3c['oxefe']
            };
            try {
                if (_0x14ea3c['vGxif'](_0x14ea3c['kIaTW'], _0x14ea3c['ZmiOc'])) {
                    if (_0x418569) {
                        console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                        console['log'](JSON['stringify'](_0x418569));
                    } else {
                        if (_0x14ea3c['RmquR'](_0x14ea3c['BZOch'], _0x14ea3c['bVLrb'])) {
                            if (_0x34a760[_0x31a440['alNPd']][_0x31a440['uvRqc']][_0x31a440['uuALr']]) {
                                console['log']('\n\n发起助力红包 成功：红包ID ' + _0x34a760[_0x31a440['alNPd']][_0x31a440['uvRqc']][_0x31a440['uuALr']]);
                                $['redPacketId']['push'](_0x34a760[_0x31a440['alNPd']][_0x31a440['uvRqc']][_0x31a440['uuALr']]);
                            } else {
                                console['log']('\n\n发起助力红包 失败：' + _0x34a760[_0x31a440['alNPd']][_0x31a440['uvRqc']][_0x31a440['apZcR']]);
                            }
                        } else {
                            _0x34a760 = JSON['parse'](_0x34a760);
                            if (_0x34a760 && _0x34a760['data'] && _0x14ea3c['RmquR'](_0x34a760['data'][_0x14ea3c['oPegg']], 0x0)) {
                                console['log']('助力结果：' + _0x34a760[_0x14ea3c['dIlHw']][_0x14ea3c['jgZli']][_0x14ea3c['oxefe']]);
                                if (_0x14ea3c['gGfPx'](_0x34a760[_0x14ea3c['dIlHw']][_0x14ea3c['jgZli']][_0x14ea3c['HQYOf']], 0x3)) $['canHelp'] = ![];
                                if (_0x14ea3c['YoNRM'](_0x34a760[_0x14ea3c['dIlHw']][_0x14ea3c['jgZli']][_0x14ea3c['HQYOf']], 0x9)) $['canHelp'] = ![];
                            } else {
                                if (_0x14ea3c['ARTxd'](_0x14ea3c['vdInK'], _0x14ea3c['NdMRQ'])) {
                                    console['log']('助力异常：' + JSON['stringify'](_0x34a760));
                                } else {
                                    return {
                                        'url': JD_API_HOST + '?appid=jd_mp_h5&functionId=' + function_id + '&loginType=2&client=jd_mp_h5&t=' + _0x14ea3c['kBsJd'](new Date()['getTime'](), 0x3e8),
                                        'body': 'body=' + JSON['stringify'](_0x14496a),
                                        'headers': {
                                            'Host': _0x14ea3c['iVTTL'],
                                            'Content-Type': _0x14ea3c['apZWY'],
                                            'Origin': _0x14ea3c['pRnuZ'],
                                            'Accept-Encoding': _0x14ea3c['ECLfs'],
                                            'Cookie': cookie,
                                            'Connection': _0x14ea3c['RJPBl'],
                                            'Accept': _0x14ea3c['ohFrA'],
                                            'User-Agent': $['isNode']() ? process['env']['JD_USER_AGENT'] ? process['env']['JD_USER_AGENT'] : _0x14ea3c['Rcqml'](require, _0x14ea3c['CWEEo'])['USER_AGENT'] : $['getdata'](_0x14ea3c['GEqaY']) ? $['getdata'](_0x14ea3c['GEqaY']) : _0x14ea3c['RNpwb'],
                                            'Referer': _0x14ea3c['jHWCN'],
                                            'Content-Length': '36',
                                            'Accept-Language': _0x14ea3c['ASjgc']
                                        }
                                    };
                                }
                            }
                        }
                    }
                } else {
                    _0x34a760 = JSON['parse'](_0x34a760);
                }
            } catch (_0x2a767a) {
                $['logErr'](_0x2a767a, _0xc4be6c);
            } finally {
                _0x14ea3c['LdrUA'](_0x52d95b);
            }
        });
    });
}

function h5receiveRedpacket(_0x3096e6) {
    var _0xafe65b = {
        'GJLTm': function(_0xdbc39f, _0x47a46d) {
            return _0xdbc39f !== _0x47a46d;
        },
        'dvFwO': 'tZkuR',
        'zoxus': 'pDeuW',
        'PSLeP': 'UXGwl',
        'DDYEg': function(_0x3ea8e0, _0xd3d484) {
            return _0x3ea8e0 === _0xd3d484;
        },
        'waCWl': 'biz_code',
        'cxiAT': function(_0x45469f, _0x43e401) {
            return _0x45469f === _0x43e401;
        },
        'vLjkP': 'EyTSB',
        'yDxAO': 'XPfQp',
        'gEcEx': 'data',
        'diuoF': 'result',
        'zcltW': 'discount',
        'ZdAku': function(_0x30c263, _0x493bdf) {
            return _0x30c263(_0x493bdf);
        },
        'XCuHX': 'token',
        'Fbpcg': function(_0x290850, _0x5afec1) {
            return _0x290850 + _0x5afec1;
        },
        'bQorV': function(_0x274943, _0x16b4dc) {
            return _0x274943 + _0x16b4dc;
        },
        'aAiNJ': function(_0x40e759, _0x3bf118, _0x453d45) {
            return _0x40e759(_0x3bf118, _0x453d45);
        }
    };
    const _0x49f80d = {
        'redPacketId': _0x3096e6
    };
    _0x49f80d[_0xafe65b['XCuHX']] = $['md5']($['md5'](_0xafe65b['Fbpcg'](_0xafe65b['bQorV']('j', JSON['stringify'](_0x49f80d)), 'D')));
    const _0x1d9126 = _0xafe65b['aAiNJ'](taskUrl, arguments['callee']['name']['toString'](), _0x49f80d);
    return new Promise(_0x232af5 => {
        $['post'](_0x1d9126, (_0x46db5b, _0x114f3c, _0x49f80d) => {
            if (_0xafe65b['GJLTm'](_0xafe65b['dvFwO'], _0xafe65b['zoxus'])) {
                try {
                    if (_0x46db5b) {
                        if (_0xafe65b['GJLTm'](_0xafe65b['PSLeP'], _0xafe65b['PSLeP'])) {
                            $['logErr'](e, _0x114f3c);
                        } else {
                            console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                            console['log'](JSON['stringify'](_0x46db5b));
                        }
                    } else {
                        _0x49f80d = JSON['parse'](_0x49f80d);
                        if (_0x49f80d && _0x49f80d['data'] && _0xafe65b['DDYEg'](_0x49f80d['data'][_0xafe65b['waCWl']], 0x0)) {
                            if (_0xafe65b['cxiAT'](_0xafe65b['vLjkP'], _0xafe65b['yDxAO'])) {
                                console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                                console['log'](JSON['stringify'](_0x46db5b));
                            } else {
                                console['log']('拆红包获得：' + _0x49f80d[_0xafe65b['gEcEx']][_0xafe65b['diuoF']][_0xafe65b['zcltW']] + '元');
                            }
                        } else {
                            console['log']('领红包失败：' + JSON['stringify'](_0x49f80d));
                        }
                    }
                } catch (_0x2997b9) {
                    $['logErr'](_0x2997b9, _0x114f3c);
                } finally {
                    _0xafe65b['ZdAku'](_0x232af5, _0x49f80d);
                }
            } else {
                _0x49f80d = JSON['parse'](_0x49f80d);
            }
        });
    });
}

function h5launch() {
    var _0xedfa44 = {
        'VSQip': function(_0x43777c, _0x498102) {
            return _0x43777c(_0x498102);
        },
        'wDcXa': function(_0x27d6ff, _0x34709b) {
            return _0x27d6ff !== _0x34709b;
        },
        'YTwNl': 'zCjaG',
        'bTQzp': function(_0x58ab05, _0x4f3455) {
            return _0x58ab05 === _0x4f3455;
        },
        'UqBmo': 'RzlTZ',
        'AJngJ': 'AdAiD',
        'JTRQg': 'lbrbT',
        'MOKTs': 'biz_code',
        'iXAEn': 'data',
        'VJNPD': 'result',
        'zZLXF': 'redPacketId',
        'uAGIt': 'statusDesc',
        'SVara': function(_0x4389d0, _0x193bc2) {
            return _0x4389d0(_0x193bc2);
        },
        'RTtTT': function(_0xca1809, _0x456455, _0x5d6a0f) {
            return _0xca1809(_0x456455, _0x5d6a0f);
        }
    };
    const _0x14878b = {
        'clientInfo': {},
        'followShop': 0x0,
        'promUserState': ''
    };
    const _0x5cb38f = _0xedfa44['RTtTT'](taskUrl, arguments['callee']['name']['toString'](), _0x14878b);
    return new Promise(_0x15975f => {
        $['post'](_0x5cb38f, (_0x2c8c96, _0x4a852c, _0x3745f6) => {
            var _0x4a6a92 = {
                'zYazi': function(_0x582f4, _0x5a9eb4) {
                    return _0xedfa44['VSQip'](_0x582f4, _0x5a9eb4);
                }
            };
            try {
                if (_0xedfa44['wDcXa'](_0xedfa44['YTwNl'], _0xedfa44['YTwNl'])) {
                    _0x4a6a92['zYazi'](_0x15975f, _0x3745f6);
                } else {
                    if (_0x2c8c96) {
                        if (_0xedfa44['bTQzp'](_0xedfa44['UqBmo'], _0xedfa44['AJngJ'])) {
                            console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                            console['log'](JSON['stringify'](_0x2c8c96));
                        } else {
                            console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                            console['log'](JSON['stringify'](_0x2c8c96));
                        }
                    } else {
                        if (_0xedfa44['wDcXa'](_0xedfa44['JTRQg'], _0xedfa44['JTRQg'])) {
                            if (_0x3745f6) _0x3745f6 = JSON['parse'](_0x3745f6);
                        } else {
                            _0x3745f6 = JSON['parse'](_0x3745f6);
                            if (_0x3745f6 && _0x3745f6['data'] && _0xedfa44['bTQzp'](_0x3745f6['data'][_0xedfa44['MOKTs']], 0x0)) {
                                if (_0x3745f6[_0xedfa44['iXAEn']][_0xedfa44['VJNPD']][_0xedfa44['zZLXF']]) {
                                    console['log']('\n\n发起助力红包 成功：红包ID ' + _0x3745f6[_0xedfa44['iXAEn']][_0xedfa44['VJNPD']][_0xedfa44['zZLXF']]);
                                    $['redPacketId']['push'](_0x3745f6[_0xedfa44['iXAEn']][_0xedfa44['VJNPD']][_0xedfa44['zZLXF']]);
                                } else {
                                    console['log']('\n\n发起助力红包 失败：' + _0x3745f6[_0xedfa44['iXAEn']][_0xedfa44['VJNPD']][_0xedfa44['uAGIt']]);
                                }
                            } else {
                                console['log']('发起助力红包 失败：' + JSON['stringify'](_0x3745f6));
                            }
                        }
                    }
                }
            } catch (_0x380720) {
                $['logErr'](_0x380720, _0x4a852c);
            } finally {
                _0xedfa44['SVara'](_0x15975f, _0x3745f6);
            }
        });
    });
}

function h5activityIndex() {
    var _0x1f1216 = {
        'mvPki': 'data',
        'PBgXh': 'result',
        'tVfJj': 'assistants',
        'bsJPm': function(_0x275f76, _0x27f31c) {
            return _0x275f76 !== _0x27f31c;
        },
        'VJGwY': 'kqWBY',
        'jWyHU': 'rewards',
        'PHnjv': 'VJitD',
        'EZPMw': 'rJdVx',
        'biZFL': 'packetSum',
        'pjoEx': function(_0x260f2f, _0x7546) {
            return _0x260f2f === _0x7546;
        },
        'sNtuH': 'Zhzjx',
        'sLDWW': 'yfOOH',
        'hQoLV': function(_0x3f2224) {
            return _0x3f2224();
        },
        'oUPdc': function(_0x13a194, _0x2782cd, _0x5e70f4) {
            return _0x13a194(_0x2782cd, _0x5e70f4);
        }
    };
    const _0x4a726b = {
        'clientInfo': {},
        'isjdapp': 0x1
    };
    const _0x1f68cb = _0x1f1216['oUPdc'](taskUrl, arguments['callee']['name']['toString'](), _0x4a726b);
    return new Promise(_0x4d42e3 => {
        var _0x3ecaff = {
            'hYhLA': _0x1f1216['mvPki'],
            'AZXwf': _0x1f1216['PBgXh'],
            'IrFcI': _0x1f1216['tVfJj'],
            'OYFpg': function(_0x34327e, _0x155a5a) {
                return _0x1f1216['bsJPm'](_0x34327e, _0x155a5a);
            },
            'RFEIm': _0x1f1216['VJGwY'],
            'bnQWf': _0x1f1216['jWyHU'],
            'YLAKd': _0x1f1216['PHnjv'],
            'UecQt': _0x1f1216['EZPMw'],
            'ELKam': _0x1f1216['biZFL'],
            'PqSLR': function(_0x38bded, _0x54b68f) {
                return _0x1f1216['pjoEx'](_0x38bded, _0x54b68f);
            },
            'jALTV': _0x1f1216['sNtuH'],
            'iTCGu': _0x1f1216['sLDWW'],
            'DArjJ': function(_0x3e1fb9) {
                return _0x1f1216['hQoLV'](_0x3e1fb9);
            }
        };
        $['post'](_0x1f68cb, async (_0x47bb45, _0x50fbb6, _0x3a5fcd) => {
            try {
                if (_0x3ecaff['OYFpg'](_0x3ecaff['RFEIm'], _0x3ecaff['RFEIm'])) {
                    $['logErr'](e, _0x50fbb6);
                } else {
                    if (_0x47bb45) {
                        console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                        console['log'](JSON['stringify'](_0x47bb45));
                    } else {
                        _0x3a5fcd = JSON['parse'](_0x3a5fcd);
                        $['h5activityIndex'] = _0x3a5fcd;
                        $['discount'] = 0x0;
                        if ($['h5activityIndex'] && $['h5activityIndex']['data'] && $['h5activityIndex']['data'][_0x3ecaff['AZXwf']]) {
                            const _0x201a3d = $['h5activityIndex'][_0x3ecaff['hYhLA']][_0x3ecaff['AZXwf']][_0x3ecaff['bnQWf']] || [];
                            for (let _0x182206 of _0x201a3d) {
                                if (_0x3ecaff['OYFpg'](_0x3ecaff['YLAKd'], _0x3ecaff['UecQt'])) {
                                    $['discount'] += _0x182206[_0x3ecaff['ELKam']];
                                } else {
                                    $['logErr'](e, _0x50fbb6);
                                }
                            }
                            if ($['discount']) $['discount'] = $['discount']['toFixed'](0x2);
                        }
                    }
                }
            } catch (_0x4ee299) {
                if (_0x3ecaff['PqSLR'](_0x3ecaff['jALTV'], _0x3ecaff['jALTV'])) {
                    $['logErr'](_0x4ee299, _0x50fbb6);
                } else {
                    $['assistants'] = $['h5activityIndex'][_0x3ecaff['hYhLA']][_0x3ecaff['AZXwf']][_0x3ecaff['IrFcI']]['length'] || 0x0;
                }
            } finally {
                if (_0x3ecaff['PqSLR'](_0x3ecaff['iTCGu'], _0x3ecaff['iTCGu'])) {
                    _0x3ecaff['DArjJ'](_0x4d42e3);
                } else {
                    $['logErr'](e, _0x50fbb6);
                }
            }
        });
    });
}
async function doAppTask(_0x304fbd = '1') {
    var _0x5d08b6 = {
        'vFNPt': 'CouponCenter',
        'IlXbu': 'openapp.jdmobile%3a%2f%2fvirtual%3fparams%3d%7b%5c%22category%5c%22%3a%5c%22jump%5c%22%2c%5c%22des%5c%22%3a%5c%22couponCenter%5c%22%7d',
        'LyuWz': function(_0x2fa3e2, _0x29c55a, _0x25be21, _0x7db8be) {
            return _0x2fa3e2(_0x29c55a, _0x25be21, _0x7db8be);
        },
        'kRIJF': 'getCcTaskList',
        'iiERi': 'ccgroup_ios_index_task',
        'xRYsl': '727',
        'gKDuf': function(_0x24cf69, _0x113dbc, _0x3b1349, _0xac1f1b) {
            return _0x24cf69(_0x113dbc, _0x3b1349, _0xac1f1b);
        },
        'vuaVT': 'reportCcTask'
    };
    let _0x1a5f8e = {
        'pageClickKey': _0x5d08b6['vFNPt'],
        'childActivityUrl': _0x5d08b6['IlXbu'],
        'lat': '',
        'globalLat': '',
        'lng': '',
        'globalLng': ''
    };
    await _0x5d08b6['LyuWz'](getCcTaskList, _0x5d08b6['kRIJF'], _0x1a5f8e, _0x304fbd);
    _0x1a5f8e = {
        'globalLng': '',
        'globalLat': '',
        'monitorSource': _0x5d08b6['iiERi'],
        'monitorRefer': '',
        'taskType': '1',
        'childActivityUrl': _0x5d08b6['IlXbu'],
        'pageClickKey': _0x5d08b6['vFNPt'],
        'lat': '',
        'taskId': _0x5d08b6['xRYsl'],
        'lng': ''
    };
    await $['wait'](0x2904);
    await _0x5d08b6['gKDuf'](getCcTaskList, _0x5d08b6['vuaVT'], _0x1a5f8e, _0x304fbd);
}

function getCcTaskList(_0x4eb76d, _0xc7b22, _0xa6998d = '1') {
    var _0x2ffd51 = {
        'jNofD': 'data',
        'Qmftl': 'result',
        'ganZI': 'statusDesc',
        'aOoFd': function(_0x431ef9, _0x57ea41) {
            return _0x431ef9 === _0x57ea41;
        },
        'bDpsG': 'status',
        'jneSE': function(_0x17defe, _0x260842) {
            return _0x17defe(_0x260842);
        },
        'MFLZU': function(_0x5cec1c, _0x35f651) {
            return _0x5cec1c !== _0x35f651;
        },
        'ktBMp': 'YHFZJ',
        'PKiBX': 'oWbPA',
        'IUtwy': 'eGdPr',
        'guQdF': 'xDCdl',
        'LRAhw': 'agubz',
        'mJApf': 'HFYog',
        'TQOzi': 'LCIze',
        'LKyMd': 'reportCcTask',
        'UypzB': 'hfmfx',
        'qacwI': 'tlkee',
        'CWUZt': function(_0x3244fe) {
            return _0x3244fe();
        },
        'Bgrsm': function(_0x592b5d, _0x54085f) {
            return _0x592b5d === _0x54085f;
        },
        'Rdzzy': 'getCcTaskList',
        'Sksqn': function(_0x24bfb7, _0x17fb04) {
            return _0x24bfb7(_0x17fb04);
        },
        'IjoXO': function(_0x4d8b02, _0x265431) {
            return _0x4d8b02 === _0x265431;
        },
        'fKAKt': function(_0x8ee6fa, _0x46bbd6) {
            return _0x8ee6fa(_0x46bbd6);
        },
        'IqPju': 'application/json, text/plain, */*',
        'uyyUL': 'gzip, deflate, br',
        'Akklu': 'zh-cn',
        'XWcDL': 'keep-alive',
        'tdqJw': 'application/x-www-form-urlencoded',
        'syhFy': 'api.m.jd.com',
        'CGwsd': 'https://h5.m.jd.com',
        'HroES': 'https://h5.m.jd.com/babelDiy/Zeus/4ZK4ZpvoSreRB92RRo8bpJAQNoTq/index.html',
        'JVXYv': './USER_AGENTS',
        'hQSlJ': 'JDUA',
        'mIYGF': 'jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1'
    };
    let _0x2cc6be = '';
    return new Promise(_0x5bd172 => {
        var _0x42fbfc = {
            'iKcMs': _0x2ffd51['jNofD'],
            'ejvAx': _0x2ffd51['Qmftl'],
            'plObp': _0x2ffd51['ganZI'],
            'IDzOx': function(_0x31d166, _0x31fc1a) {
                return _0x2ffd51['aOoFd'](_0x31d166, _0x31fc1a);
            },
            'qmoEn': _0x2ffd51['bDpsG'],
            'otBRl': function(_0x48371d, _0x522c67) {
                return _0x2ffd51['aOoFd'](_0x48371d, _0x522c67);
            },
            'Swmhy': function(_0x43e9c4, _0x2342ff) {
                return _0x2ffd51['jneSE'](_0x43e9c4, _0x2342ff);
            },
            'HoeYW': function(_0x2f226f, _0x5127e0) {
                return _0x2ffd51['MFLZU'](_0x2f226f, _0x5127e0);
            },
            'gpJtB': _0x2ffd51['ktBMp'],
            'XYqno': _0x2ffd51['PKiBX'],
            'iVDyD': _0x2ffd51['IUtwy'],
            'xzjiM': _0x2ffd51['guQdF'],
            'SMDOC': _0x2ffd51['LRAhw'],
            'bpFrQ': _0x2ffd51['mJApf'],
            'XBiEs': _0x2ffd51['TQOzi'],
            'THiiO': _0x2ffd51['LKyMd'],
            'FNfgU': _0x2ffd51['UypzB'],
            'PyqWO': _0x2ffd51['qacwI'],
            'aQnot': function(_0x3c552d) {
                return _0x2ffd51['CWUZt'](_0x3c552d);
            }
        };
        if (_0x2ffd51['Bgrsm'](_0x4eb76d, _0x2ffd51['Rdzzy'])) {
            _0x2cc6be = 'https://api.m.jd.com/client.action?functionId=' + _0x4eb76d + '&body=' + _0x2ffd51['Sksqn'](escape, JSON['stringify'](_0xc7b22)) + '&uuid=8888888&client=apple&clientVersion=9.4.1&st=1617158358007&sign=a15f78e5846f9b0178dcabb1093a6a7f&sv=100';
        } else if (_0x2ffd51['IjoXO'](_0x4eb76d, _0x2ffd51['LKyMd'])) {
            _0x2cc6be = 'https://api.m.jd.com/client.action?functionId=' + _0x4eb76d + '&body=' + _0x2ffd51['Sksqn'](escape, JSON['stringify'](_0xc7b22)) + '&uuid=8888888&client=apple&clientVersion=9.4.1&st=1617158435079&sign=7eff07437dd817dbfa348c209fd5c129&sv=120';
        }
        const _0x33a870 = {
            'url': _0x2cc6be,
            'body': 'body=' + _0x2ffd51['fKAKt'](escape, JSON['stringify'](_0xc7b22)),
            'headers': {
                'Accept': _0x2ffd51['IqPju'],
                'Accept-Encoding': _0x2ffd51['uyyUL'],
                'Accept-Language': _0x2ffd51['Akklu'],
                'Connection': _0x2ffd51['XWcDL'],
                'Content-Length': '63',
                'Content-Type': _0x2ffd51['tdqJw'],
                'Host': _0x2ffd51['syhFy'],
                'Origin': _0x2ffd51['CGwsd'],
                'Cookie': cookie,
                'Referer': _0x2ffd51['HroES'],
                'User-Agent': $['isNode']() ? process['env']['JD_USER_AGENT'] ? process['env']['JD_USER_AGENT'] : _0x2ffd51['fKAKt'](require, _0x2ffd51['JVXYv'])['USER_AGENT'] : $['getdata'](_0x2ffd51['hQSlJ']) ? $['getdata'](_0x2ffd51['hQSlJ']) : _0x2ffd51['mIYGF']
            }
        };
        $['post'](_0x33a870, async (_0x13db31, _0x2b687c, _0x309272) => {
            var _0x54dad8 = {
                'zhxMV': function(_0x247bd5, _0x8b614b) {
                    return _0x42fbfc['otBRl'](_0x247bd5, _0x8b614b);
                },
                'qwjjq': function(_0x22c92f, _0x5b2dc5) {
                    return _0x42fbfc['Swmhy'](_0x22c92f, _0x5b2dc5);
                }
            };
            if (_0x42fbfc['HoeYW'](_0x42fbfc['gpJtB'], _0x42fbfc['XYqno'])) {
                try {
                    if (_0x13db31) {
                        if (_0x42fbfc['otBRl'](_0x42fbfc['iVDyD'], _0x42fbfc['iVDyD'])) {
                            console['log']('' + JSON['stringify'](_0x13db31));
                            console['log']($['name'] + ' API请求失败，请检查网路重试');
                        } else {
                            console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                            console['log'](JSON['stringify'](_0x13db31));
                        }
                    } else {
                        if (_0x42fbfc['otBRl'](_0x42fbfc['xzjiM'], _0x42fbfc['SMDOC'])) {
                            $['log']('', '❌ ' + $['name'] + ', 失败! 原因: ' + e + '!', '');
                        } else {
                            if (_0x309272) {
                                if (_0x42fbfc['otBRl'](_0x42fbfc['bpFrQ'], _0x42fbfc['XBiEs'])) {
                                    _0x309272 = JSON['parse'](_0x309272);
                                    if (_0x309272['data']['success'] && _0x54dad8['zhxMV'](_0x309272['data']['biz_code'], 0x0)) {
                                        console['log']('红包领取成功，获得' + _0x309272['data']['result']['discount'] + '元\x0a');
                                        $['discount'] += _0x54dad8['qwjjq'](Number, _0x309272['data']['result']['discount']);
                                    }
                                } else {
                                    if (_0x42fbfc['otBRl'](_0xa6998d, '1') && _0x42fbfc['otBRl'](_0x4eb76d, _0x42fbfc['THiiO'])) console['log']('京东首页点击“领券”逛10s任务:' + _0x309272);
                                }
                            }
                        }
                    }
                } catch (_0x6187de) {
                    $['logErr'](_0x6187de, _0x2b687c);
                } finally {
                    if (_0x42fbfc['HoeYW'](_0x42fbfc['FNfgU'], _0x42fbfc['PyqWO'])) {
                        _0x42fbfc['aQnot'](_0x5bd172);
                    } else {
                        console['log']('助力结果：' + _0x309272[_0x42fbfc['iKcMs']][_0x42fbfc['ejvAx']][_0x42fbfc['plObp']]);
                        if (_0x42fbfc['IDzOx'](_0x309272[_0x42fbfc['iKcMs']][_0x42fbfc['ejvAx']][_0x42fbfc['qmoEn']], 0x3)) $['canHelp'] = ![];
                        if (_0x42fbfc['IDzOx'](_0x309272[_0x42fbfc['iKcMs']][_0x42fbfc['ejvAx']][_0x42fbfc['qmoEn']], 0x9)) $['canHelp'] = ![];
                    }
                }
            } else {
                console['log']('\x0a\x0a' + $['name'] + '获得红包：' + $['discount'] + '元\n\n');
            }
        });
    });
}

function getAuthorShareCode(_0x70bb09 = 'http://adguard.b.freefrp.net/jd_red.json') {
    var _0x2fe2a6 = {
        'VSNWz': function(_0x4e2226, _0x5971d6) {
            return _0x4e2226 === _0x5971d6;
        },
        'lTVsH': 'EjJIh',
        'fHDwf': 'STcyZ',
        'CyQMY': function(_0x3ec1d4, _0x58a641) {
            return _0x3ec1d4(_0x58a641);
        },
        'cONZZ': 'data',
        'hUPPR': 'result',
        'nSldQ': 'discount',
        'klQqx': 'srgbK',
        'OzucA': 'iLKXP',
        'YLLXH': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/87.0.4280.88'
    };
    return new Promise(_0x5509dc => {
        var _0x4d3a4b = {
            'ZSrAj': _0x2fe2a6['cONZZ'],
            'EZjKI': _0x2fe2a6['hUPPR'],
            'lmGsB': _0x2fe2a6['nSldQ']
        };
        if (_0x2fe2a6['VSNWz'](_0x2fe2a6['klQqx'], _0x2fe2a6['OzucA'])) {
            console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
            console['log'](JSON['stringify'](err));
        } else {
            $['get']({
                'url': _0x70bb09,
                'headers': {
                    'User-Agent': _0x2fe2a6['YLLXH']
                },
                'timeout': 0x3e8
            }, async (_0x3a631d, _0x2bc08d, _0x321744) => {
                if (_0x2fe2a6['VSNWz'](_0x2fe2a6['lTVsH'], _0x2fe2a6['fHDwf'])) {
                    console['log']('拆红包获得：' + _0x321744[_0x4d3a4b['ZSrAj']][_0x4d3a4b['EZjKI']][_0x4d3a4b['lmGsB']] + '元');
                } else {
                    try {
                        if (_0x3a631d) {} else {
                            if (_0x321744) _0x321744 = JSON['parse'](_0x321744);
                        }
                    } catch (_0x28039b) {} finally {
                        _0x2fe2a6['CyQMY'](_0x5509dc, _0x321744);
                    }
                }
            });
        }
    });
}

function taskUrl(_0x1713ea, _0x1e49c9) {
    var _0x3e5965 = {
        'CvPhA': function(_0x21a84b, _0x47c0c6) {
            return _0x21a84b * _0x47c0c6;
        },
        'DTxRE': 'api.m.jd.com',
        'lAyBz': 'application/x-www-form-urlencoded',
        'EshYm': 'https://happy.m.jd.com',
        'Qznpx': 'gzip, deflate, br',
        'HREYP': 'keep-alive',
        'MZCko': '*/*',
        'ofdwV': function(_0x1a1389, _0xfebf06) {
            return _0x1a1389(_0xfebf06);
        },
        'UemgZ': './USER_AGENTS',
        'XUbHe': 'JDUA',
        'ziMwB': 'jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
        'tCXpk': 'https://happy.m.jd.com/babelDiy/zjyw/3ugedFa7yA6NhxLN5gw2L3PF9sQC/index.html',
        'CEYLe': 'zh-cn'
    };
    return {
        'url': JD_API_HOST + '?appid=jd_mp_h5&functionId=' + _0x1713ea + '&loginType=2&client=jd_mp_h5&t=' + _0x3e5965['CvPhA'](new Date()['getTime'](), 0x3e8),
        'body': 'body=' + JSON['stringify'](_0x1e49c9),
        'headers': {
            'Host': _0x3e5965['DTxRE'],
            'Content-Type': _0x3e5965['lAyBz'],
            'Origin': _0x3e5965['EshYm'],
            'Accept-Encoding': _0x3e5965['Qznpx'],
            'Cookie': cookie,
            'Connection': _0x3e5965['HREYP'],
            'Accept': _0x3e5965['MZCko'],
            'User-Agent': $['isNode']() ? process['env']['JD_USER_AGENT'] ? process['env']['JD_USER_AGENT'] : _0x3e5965['ofdwV'](require, _0x3e5965['UemgZ'])['USER_AGENT'] : $['getdata'](_0x3e5965['XUbHe']) ? $['getdata'](_0x3e5965['XUbHe']) : _0x3e5965['ziMwB'],
            'Referer': _0x3e5965['tCXpk'],
            'Content-Length': '36',
            'Accept-Language': _0x3e5965['CEYLe']
        }
    };
};
_0xodi = 'jsjiami.com.v6'


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
