const $ = new Env('超级品牌日');
const notify = $.isNode() ? require('./sendNotify') : '';
//Node.js用户请在jdCookie.js处填写京东ck;
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
//IOS等用户直接用NobyDa的jd cookie
let cookiesArr = [], cookie = '',message='';
const act_ID = "d7f06345-50db-4ad7-9ddc-d1626b79362a";
if ($.isNode()) {
    Object.keys(jdCookieNode).forEach((item) => {
        cookiesArr.push(jdCookieNode[item])
    })
    if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => { };
} else {
    let cookiesData = $.getdata('CookiesJD') || "[]";
    cookiesData = JSON.parse(cookiesData);
    cookiesArr = cookiesData.map(item => item.cookie);
    cookiesArr.reverse();
    cookiesArr.push(...[$.getdata('CookieJD2'), $.getdata('CookieJD')]);
    cookiesArr.reverse();
    cookiesArr = cookiesArr.filter(item => item !== "" && item !== null && item !== undefined);
}
 /*
 *Progcessed By JSDec in 0.21s
 *JSDec - JSDec.js.org
 */
!(async () => {
    var _0x3cce58 = {
        'kdVoy': '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取',
        'YbMuN': 'https://bean.m.jd.com/bean/signIndex.action',
        'WYHZx': function(_0xe1a0cf, _0x2685d3) {
            return _0xe1a0cf < _0x2685d3;
        },
        'KHhpg': function(_0xe3e76c, _0x216928) {
            return _0xe3e76c === _0x216928;
        },
        'mKZiX': 'Tlzdf',
        'PWSeH': function(_0x866102, _0x337a6b) {
            return _0x866102(_0x337a6b);
        },
        'IDPvp': function(_0xfd09d6, _0x2c03fc) {
            return _0xfd09d6 + _0x2c03fc;
        },
        'xMstX': function(_0x1b779c) {
            return _0x1b779c();
        },
        'gEcjK': 'KuDjs',
        'FebZx': function(_0xff2376, _0x462352) {
            return _0xff2376 !== _0x462352;
        },
        'EcElY': 'ywGIQ'
    };
    if (!cookiesArr[0x0]) {
        $['msg']($['name'], _0x3cce58['kdVoy'], _0x3cce58['YbMuN'], {
            'open-url': 'https://bean.m.jd.com/bean/signIndex.action'
        });
        return;
    }
    for (let _0x3734ff = 0x0; _0x3cce58['WYHZx'](_0x3734ff, cookiesArr['length']); _0x3734ff++) {
        if (cookiesArr[_0x3734ff]) {
            if (_0x3cce58['KHhpg'](_0x3cce58['mKZiX'], _0x3cce58['mKZiX'])) {
                cookie = cookiesArr[_0x3734ff];
                $['UserName'] = _0x3cce58['PWSeH'](decodeURIComponent, cookie['match'](/pt_pin=(.+?);/) && cookie['match'](/pt_pin=(.+?);/)[0x1]);
                $['index'] = _0x3cce58['IDPvp'](_0x3734ff, 0x1);
                $['isLogin'] = !![];
                $['nickName'] = '';
                $['beans'] = 0x0;
                message = '';
                await _0x3cce58['xMstX'](TotalBean);
                console['log']('\x0a******开始【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']) + '*********\x0a');
                if (!$['isLogin']) {
                    $['msg']($['name'], '【提示】cookie已失效', '京东账号' + $['index'] + ' ' + ($['nickName'] || $['UserName']) + '\x0a请重新登录获取\x0ahttps://bean.m.jd.com/bean/signIndex.action', {
                        'open-url': _0x3cce58['YbMuN']
                    });
                    if ($['isNode']()) {
                        await notify['sendNotify']($['name'] + 'cookie已失效 - ' + $['UserName'], '京东账号' + $['index'] + ' ' + $['UserName'] + '\x0a请重新登录获取cookie');
                    } else {
                        $['setdata']('', 'CookieJD' + (_0x3734ff ? _0x3cce58['IDPvp'](_0x3734ff, 0x1) : ''));
                    }
                    continue;
                }
                await _0x3cce58['xMstX'](superBrand);
                if ($['isNode']()) {
                    if (_0x3cce58['KHhpg']('KuDjs', _0x3cce58['gEcjK'])) {
                        if (message !== '') {
                            if (_0x3cce58['FebZx'](_0x3cce58['EcElY'], 'ywGIQ')) {
                                $['bean'] += vo['quantity'];
                            } else {
                                await notify['sendNotify']($['name'], message);
                            }
                        }
                    } else {
                        $['tasks0'] = data['data']['Tasks0'];
                    }
                }
            } else {
                for (const _0x13abf3 of data['data']['result']['jpeasList']) {
                    $['bean'] += _0x13abf3['quantity'];
                }
            }
        }
    }
})()['catch'](_0x4a9ce1 => {
    $['log']('', '❌ ' + $['name'] + ', 失败! 原因: ' + _0x4a9ce1 + '!', '');
})['finally'](() => {
    $['done']();
});
async function superBrand() {
    var _0x448959 = {
        'YNHep': function(_0x320458, _0x477ccf) {
            return _0x320458 === _0x477ccf;
        },
        'vQIVZ': '任务完成',
        'uiLgc': '京东返回了空数据',
        'SQRKj': function(_0x4400c0) {
            return _0x4400c0();
        },
        'BRhiN': function(_0x3229c4, _0x9a24d6) {
            return _0x3229c4(_0x9a24d6);
        },
        'efxMA': function(_0x2b4ad7, _0x1c9021) {
            return _0x2b4ad7(_0x1c9021);
        },
        'llyKi': function(_0x412d8c, _0x43abc9) {
            return _0x412d8c !== _0x43abc9;
        },
        'beHkq': function(_0x23e739, _0x155a3b) {
            return _0x23e739 > _0x155a3b;
        },
        'YqRpB': 'wWikP',
        'Hcsdg': 'aKxVn'
    };
    $['bean'] = 0x0;
    await getMaterial();
    await $['wait'](0x3e8);
    await _0x448959['SQRKj'](qryCompositeMaterials);
    await $['wait'](0x3e8);
    await _0x448959['BRhiN'](doTask, {
        'brandActivityId': act_ID,
        'taskType': '1',
        'taskId': $['actInfo']['cmsTaskShopId']
    });
    await $['wait'](0x3e8);
    await _0x448959['efxMA'](doTask, {
        'brandActivityId': act_ID,
        'taskType': '2',
        'taskId': $['actInfo']['cmsTaskLink']
    });
    await $['wait'](0x3e8);
    for (const _0x7479c4 of $['tasks0']['list']) {
        if (_0x448959['llyKi']('eFyLw', 'eFyLw')) {
            if (_0x448959['YNHep'](data['data']['result']['taskStatus'], 0x1)) {
                $['log'](_0x448959['vQIVZ']);
            }
        } else {
            await _0x448959['efxMA'](doTask, {
                'brandActivityId': act_ID,
                'taskType': '3',
                'taskId': _0x7479c4['skuId']
            });
            await $['wait'](0x3e8);
        }
    }
    await getGift();
    $['log']($['bean']);
    if (_0x448959['beHkq']($['bean'], 0x0)) {
        if (_0x448959['YqRpB'] !== 'zQHXE') {
            if ($['isNode']()) {
                if (_0x448959['YNHep']('bUkYa', 'bdAoe')) {
                    $['logErr'](err);
                } else {
                    message += '\n账号 ' + $['index'] + ' - ' + ($['nickName'] || $['UserName']) + '\x0a获得' + $['bean'] + '个京豆\n';
                }
            } else {
                if (_0x448959['Hcsdg'] !== _0x448959['Hcsdg']) {
                    $['done']();
                } else {
                    $['msg']($['name'], '恭喜', 'Yooho~,' + $['bean'] + '个京豆进账');
                }
            }
        } else {
            $['log'](_0x448959['uiLgc']);
        }
    }
}

function getGift() {
    var _0x1a2cd8 = {
        'ufsNd': '获取活动信息成功',
        'Utmjc': 'https://h5.m.jd.com/babelDiy/Zeus/2PTXhrEmiMEL3mD419b8Gn9bUBiJ/index.html?lng=0.000000&lat=0.000000&sid=&un_area=',
        'lUUjT': 'text/plain',
        'oTvkA': 'KsvxN',
        'VLfLK': 'zMVRM',
        'Nogji': '京东返回了空数据',
        'THJzs': function(_0x5f20b3, _0x1e3b55) {
            return _0x5f20b3 !== _0x1e3b55;
        },
        'DLJSr': 'knbqH',
        'atoXO': 'HFDZC',
        'PIfaw': 'vuXTh',
        'ELXnV': function(_0x341866, _0x4496fe, _0x4b5679) {
            return _0x341866(_0x4496fe, _0x4b5679);
        },
        'mVisr': 'superbrand_getGift'
    };
    return new Promise(_0xc8c0f5 => {
        var _0x4da8ac = {
            'AQUgP': function(_0x470f17) {
                return _0x470f17();
            },
            'jlNbu': function(_0x5ea600, _0x37a901) {
                return _0x5ea600 === _0x37a901;
            },
            'cgnap': _0x1a2cd8['ufsNd'],
            'ZKkar': '*/*',
            'laqbb': 'jdapp;iPhone;9.4.2;14.3;network/wifi;ADID/;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone12,1;supportBestPay/0;appBuild/167568;jdSupportDarkMode/0;addressid/;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
            'YzlQN': _0x1a2cd8['Utmjc'],
            'fovHj': _0x1a2cd8['lUUjT'],
            'jfMSK': 'hgKfW',
            'FzvFj': _0x1a2cd8['oTvkA'],
            'Mbdhn': _0x1a2cd8['VLfLK'],
            'lbViG': _0x1a2cd8['Nogji'],
            'RUVRR': function(_0x15e6cd, _0x27f5bc) {
                return _0x1a2cd8['THJzs'](_0x15e6cd, _0x27f5bc);
            },
            'osUBu': _0x1a2cd8['DLJSr'],
            'vHWys': _0x1a2cd8['atoXO'],
            'PhFss': _0x1a2cd8['PIfaw']
        };
        $['get'](_0x1a2cd8['ELXnV'](taskUrl, _0x1a2cd8['mVisr'], {
            'brandActivityId': act_ID
        }), (_0xad37e0, _0x3256fd, _0x376ebb) => {
            var _0x5ad35f = {
                'OoJOB': _0x4da8ac['ZKkar'],
                'WRgmu': 'keep-alive',
                'NKMPv': _0x4da8ac['laqbb'],
                'pUYVW': _0x4da8ac['YzlQN'],
                'PLPyJ': 'gzip, deflate, br',
                'GGmdV': _0x4da8ac['fovHj']
            };
            if (_0x4da8ac['jlNbu']('xRGHr', 'eVgYN')) {
                _0x4da8ac['AQUgP'](_0xc8c0f5);
            } else {
                try {
                    if (_0x4da8ac['jlNbu']('hgKfW', _0x4da8ac['jfMSK'])) {
                        if (_0xad37e0) {
                            $['logErr'](_0xad37e0);
                        } else {
                            if (_0x376ebb) {
                                if (_0x4da8ac['jlNbu'](_0x4da8ac['FzvFj'], 'KsvxN')) {
                                    _0x376ebb = JSON['parse'](_0x376ebb);
                                    if (_0x376ebb['data']['success']) {
                                        if (_0x376ebb['data']['result']['hasOwnProperty']('jpeasList')) {
                                            if (_0x4da8ac['jlNbu'](_0x4da8ac['Mbdhn'], 'bhnUY')) {
                                                $['logErr'](e);
                                            } else {
                                                for (const _0x3189fd of _0x376ebb['data']['result']['jpeasList']) {
                                                    $['bean'] += _0x3189fd['quantity'];
                                                }
                                            }
                                        }
                                    }
                                } else {
                                    console['log']('' + JSON['stringify'](_0xad37e0));
                                    console['log']($['name'] + ' API请求失败，请检查网路重试');
                                }
                            } else {
                                $['log'](_0x4da8ac['lbViG']);
                            }
                        }
                    } else {
                        _0x376ebb = JSON['parse'](_0x376ebb);
                        if (_0x4da8ac['jlNbu'](_0x376ebb['code'], 0x0) && _0x376ebb['data']['success']) {
                            $['actInfo'] = _0x376ebb['data']['result'];
                            $['log'](_0x4da8ac['cgnap']);
                        }
                    }
                } catch (_0x331455) {
                    if (_0x4da8ac['RUVRR'](_0x4da8ac['osUBu'], _0x4da8ac['vHWys'])) {
                        $['logErr'](_0x331455);
                    } else {
                        if (_0x376ebb) {
                            _0x376ebb = JSON['parse'](_0x376ebb);
                            if (_0x4da8ac['jlNbu'](_0x376ebb['code'], 0x0) && _0x376ebb['data']['success']) {
                                $['actInfo'] = _0x376ebb['data']['result'];
                                $['log']('获取活动信息成功');
                            }
                        } else {
                            $['log']('京东返回了空数据');
                        }
                    }
                } finally {
                    if ('GWAUu' === _0x4da8ac['PhFss']) {
                        return {
                            'url': 'https://api.m.jd.com/client.action?functionId=' + function_id + '&body=' + encodeURIComponent(JSON['stringify'](body)) + '&appid=content_ecology&clientVersion=1.0.0&client=wh5',
                            'headers': {
                                'Host': 'api.m.jd.com',
                                'Accept': _0x5ad35f['OoJOB'],
                                'Connection': _0x5ad35f['WRgmu'],
                                'Cookie': cookie,
                                'User-Agent': _0x5ad35f['NKMPv'],
                                'Accept-Language': 'zh-cn',
                                'Referer': _0x5ad35f['pUYVW'],
                                'Accept-Encoding': _0x5ad35f['PLPyJ'],
                                'Content-Type': _0x5ad35f['GGmdV']
                            }
                        };
                    } else {
                        _0xc8c0f5();
                    }
                }
            }
        });
    });
}

function doTask(_0x3cf8de) {
    var _0x131625 = {
        'ntGWa': '任务完成',
        'aznFj': 'coVzM',
        'AqIgM': 'lcTAY',
        'ImlCV': function(_0x2e3805, _0x1a9a18) {
            return _0x2e3805 === _0x1a9a18;
        },
        'qQeAo': function(_0x3597be, _0x4a9547) {
            return _0x3597be === _0x4a9547;
        },
        'UMutt': 'JBSyX',
        'RcpgA': function(_0x57f57f) {
            return _0x57f57f();
        },
        'NQjGX': function(_0x34ada9, _0x3065f4, _0x2f26b2) {
            return _0x34ada9(_0x3065f4, _0x2f26b2);
        },
        'VPaVj': 'superbrand_doMyTask'
    };
    return new Promise(_0x281c3a => {
        var _0x314543 = {
            'hmQSF': _0x131625['ntGWa'],
            'ZObuo': _0x131625['aznFj'],
            'kXXZZ': 'lwDCc',
            'YGwAO': function(_0x4a2d39, _0x2b571e) {
                return _0x4a2d39 !== _0x2b571e;
            },
            'tFYBQ': _0x131625['AqIgM'],
            'WZwVK': function(_0x29d10c, _0x5f4c9b) {
                return _0x131625['ImlCV'](_0x29d10c, _0x5f4c9b);
            },
            'lqYEZ': function(_0x2a0800, _0x547609) {
                return _0x131625['qQeAo'](_0x2a0800, _0x547609);
            },
            'tSHOr': '京东返回了空数据',
            'GOHaU': 'MXMbC',
            'UpFPq': _0x131625['UMutt'],
            'CXsHF': function(_0x3d2041) {
                return _0x131625['RcpgA'](_0x3d2041);
            }
        };
        $['get'](_0x131625['NQjGX'](taskUrl, _0x131625['VPaVj'], _0x3cf8de), (_0x4a5872, _0x1dc5c4, _0x16a21b) => {
            var _0x4aee7a = {
                'CSGGn': function(_0x58165b, _0x340839) {
                    return _0x58165b === _0x340839;
                },
                'DnxtN': _0x314543['hmQSF']
            };
            if (_0x314543['ZObuo'] !== _0x314543['kXXZZ']) {
                try {
                    if (_0x314543['YGwAO'](_0x314543['tFYBQ'], 'lcTAY')) {
                        _0x16a21b = JSON['parse'](_0x16a21b);
                        if (_0x16a21b['data']['success']) {
                            if (_0x4aee7a['CSGGn'](_0x16a21b['data']['result']['taskStatus'], 0x1)) {
                                $['log'](_0x4aee7a['DnxtN']);
                            }
                        }
                    } else {
                        if (_0x4a5872) {
                            $['logErr'](_0x4a5872);
                        } else {
                            if (_0x16a21b) {
                                _0x16a21b = JSON['parse'](_0x16a21b);
                                if (_0x16a21b['data']['success']) {
                                    if (_0x314543['WZwVK']('WfiYK', 'sGGUW')) {
                                        $['logErr'](_0x4a5872);
                                    } else {
                                        if (_0x314543['lqYEZ'](_0x16a21b['data']['result']['taskStatus'], 0x1)) {
                                            $['log']('任务完成');
                                        }
                                    }
                                }
                            } else {
                                $['log'](_0x314543['tSHOr']);
                            }
                        }
                    }
                } catch (_0x28d98d) {
                    if (_0x314543['GOHaU'] === _0x314543['UpFPq']) {
                        console['log']('京东服务器返回空数据');
                    } else {
                        $['logErr'](_0x28d98d);
                    }
                } finally {
                    _0x314543['CXsHF'](_0x281c3a);
                }
            } else {
                $['log']('京东返回了空数据');
            }
        });
    });
}

function qryCompositeMaterials() {
    var _0x34c8d1 = {
        'tHFHQ': function(_0x3a4769, _0x3a20f9) {
            return _0x3a4769 === _0x3a20f9;
        },
        'nFBDX': 'success',
        'xhueS': '京东返回了空数据',
        'cbevg': 'xNzIr',
        'AmjZm': function(_0x13d93e) {
            return _0x13d93e();
        },
        'pHhMN': 'CLVgd',
        'RZZpr': function(_0xe48ed, _0xb14aac, _0x24f589) {
            return _0xe48ed(_0xb14aac, _0x24f589);
        },
        'ieZhB': '[{"type":"productGroup","id":"12335418","mapTo":"Tasks0"},{"type":"productGroup","id":"12335423","mapTo":"Feeds0"}]',
        'sntPb': '2vSNXCeVuBy8mXTL2hhG3mwSysoL',
        'jZhrB': 'jmfe',
        'UGdYl': '0.000000'
    };
    return new Promise(_0x1ec2e4 => {
        var _0x31a4e3 = {
            'sogYx': function(_0x4ebc1f, _0xacc7bd) {
                return _0x34c8d1['tHFHQ'](_0x4ebc1f, _0xacc7bd);
            },
            'sExNi': 'hpoBC',
            'ipazq': function(_0x3efc3a, _0x320b28) {
                return _0x34c8d1['tHFHQ'](_0x3efc3a, _0x320b28);
            },
            'yoRHg': _0x34c8d1['nFBDX'],
            'JGOaX': _0x34c8d1['xhueS'],
            'ljJwv': _0x34c8d1['cbevg'],
            'lcfkC': 'eRuCT',
            'LtWHR': function(_0x2b2d46) {
                return _0x34c8d1['AmjZm'](_0x2b2d46);
            }
        };
        if (_0x34c8d1['pHhMN'] === _0x34c8d1['pHhMN']) {
            $['post'](_0x34c8d1['RZZpr'](postUrl, 'qryCompositeMaterials', {
                'qryParam': _0x34c8d1['ieZhB'],
                'activityId': _0x34c8d1['sntPb'],
                'pageId': '1411763',
                'reqSrc': _0x34c8d1['jZhrB'],
                'geo': {
                    'lng': _0x34c8d1['UGdYl'],
                    'lat': '0.000000'
                }
            }), (_0x44c872, _0x420908, _0x4aba32) => {
                var _0x117b1b = {
                    'PcPHg': '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取'
                };
                try {
                    if (_0x31a4e3['sogYx'](_0x31a4e3['sExNi'], 'MgoBC')) {
                        _0x1ec2e4();
                    } else {
                        if (_0x44c872) {
                            $['logErr'](_0x44c872);
                        } else {
                            if (_0x4aba32) {
                                _0x4aba32 = JSON['parse'](_0x4aba32);
                                if (_0x31a4e3['ipazq'](_0x4aba32['msg'], _0x31a4e3['yoRHg'])) {
                                    $['tasks0'] = _0x4aba32['data']['Tasks0'];
                                }
                            } else {
                                $['log'](_0x31a4e3['JGOaX']);
                            }
                        }
                    }
                } catch (_0x284756) {
                    $['logErr'](_0x284756);
                } finally {
                    if (_0x31a4e3['ipazq'](_0x31a4e3['ljJwv'], _0x31a4e3['lcfkC'])) {
                        $['msg']($['name'], _0x117b1b['PcPHg'], 'https://bean.m.jd.com/bean/signIndex.action', {
                            'open-url': 'https://bean.m.jd.com/bean/signIndex.action'
                        });
                        return;
                    } else {
                        _0x31a4e3['LtWHR'](_0x1ec2e4);
                    }
                }
            });
        } else {
            $['logErr'](e);
        }
    });
}

function getMaterial() {
    var _0xe72861 = {
        'tfNyY': function(_0x3fbf72, _0x5dc957) {
            return _0x3fbf72 + _0x5dc957;
        },
        'fxEzY': 'uREoR',
        'tsiDE': 'zcqvX',
        'Huvlb': 'DqNCk',
        'mFqdv': function(_0x32fa1e, _0x135141) {
            return _0x32fa1e === _0x135141;
        },
        'JVpoK': function(_0x4b38f2, _0x5dac64) {
            return _0x4b38f2 !== _0x5dac64;
        },
        'KzTEM': 'frzKa',
        'QzhbN': '获取活动信息成功',
        'ceWkm': 'ctftx',
        'mcCVR': 'fOpeP',
        'aVeVJ': '京东返回了空数据',
        'ASHJt': function(_0x344605) {
            return _0x344605();
        },
        'ZIbeJ': 'api.m.jd.com',
        'yPeZg': 'application/x-www-form-urlencoded',
        'rBYAh': 'https://h5.m.jd.com',
        'kehmX': 'zh-cn',
        'baLfR': function(_0x105143, _0x1e6b1d) {
            return _0x105143(_0x1e6b1d);
        },
        'McZuv': function(_0x3af4fa, _0x46f9da, _0x3aaf99) {
            return _0x3af4fa(_0x46f9da, _0x3aaf99);
        },
        'xDrMd': 'superbrand_getMaterial'
    };
    return new Promise(_0x3402fe => {
        var _0x45d459 = {
            'VNafb': _0xe72861['ZIbeJ'],
            'MNwOo': _0xe72861['yPeZg'],
            'tgXym': _0xe72861['rBYAh'],
            'pIgoi': 'gzip, deflate, br',
            'aXbGt': '*/*',
            'DsGFL': 'jdapp;iPhone;9.4.2;14.3;network/wifi;ADID/;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone12,1;supportBestPay/0;appBuild/167568;jdSupportDarkMode/0;addressid/;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
            'XAivR': 'https://h5.m.jd.com/babelDiy/Zeus/2PTXhrEmiMEL3mD419b8Gn9bUBiJ/index.html?lng=0.000000&lat=0.000000&sid=&un_area=',
            'nlOyF': _0xe72861['kehmX'],
            'tTchY': function(_0x127140, _0xb9a363) {
                return _0xe72861['baLfR'](_0x127140, _0xb9a363);
            }
        };
        $['get'](_0xe72861['McZuv'](taskUrl, _0xe72861['xDrMd'], {
            'brandActivityId': act_ID
        }), (_0x151b6e, _0x4aef0d, _0x3489b6) => {
            var _0x2a222a = {
                'xAowE': function(_0x2091ba, _0x61259c) {
                    return _0xe72861['tfNyY'](_0x2091ba, _0x61259c);
                }
            };
            if (_0xe72861['fxEzY'] !== 'ylmxI') {
                try {
                    if (_0x151b6e) {
                        if ('zcqvX' === _0xe72861['tsiDE']) {
                            $['logErr'](_0x151b6e);
                        } else {
                            return {
                                'url': 'https://api.m.jd.com/client.action',
                                'headers': {
                                    'Host': _0x45d459['VNafb'],
                                    'Content-Type': _0x45d459['MNwOo'],
                                    'Origin': _0x45d459['tgXym'],
                                    'Accept-Encoding': _0x45d459['pIgoi'],
                                    'Connection': 'keep-alive',
                                    'Accept': _0x45d459['aXbGt'],
                                    'User-Agent': _0x45d459['DsGFL'],
                                    'Referer': _0x45d459['XAivR'],
                                    'Accept-Language': _0x45d459['nlOyF']
                                },
                                'body': 'functionId=' + function_id + '&body=' + _0x45d459['tTchY'](encodeURIComponent, JSON['stringify'](body)) + '&client=wh5&area='
                            };
                        }
                    } else {
                        if (_0xe72861['Huvlb'] !== _0xe72861['Huvlb']) {
                            message += '\x0a账号 ' + $['index'] + ' - ' + ($['nickName'] || $['UserName']) + '\n获得' + $['bean'] + '个京豆\x0a';
                        } else {
                            if (_0x3489b6) {
                                _0x3489b6 = JSON['parse'](_0x3489b6);
                                if (_0xe72861['mFqdv'](_0x3489b6['code'], 0x0) && _0x3489b6['data']['success']) {
                                    if (_0xe72861['JVpoK'](_0xe72861['KzTEM'], _0xe72861['KzTEM'])) {
                                        $['setdata']('', 'CookieJD' + (i ? _0x2a222a['xAowE'](i, 0x1) : ''));
                                    } else {
                                        $['actInfo'] = _0x3489b6['data']['result'];
                                        $['log'](_0xe72861['QzhbN']);
                                    }
                                }
                            } else {
                                if (_0xe72861['JVpoK'](_0xe72861['ceWkm'], _0xe72861['mcCVR'])) {
                                    $['log'](_0xe72861['aVeVJ']);
                                } else {
                                    $['logErr'](_0x151b6e);
                                }
                            }
                        }
                    }
                } catch (_0x1f4641) {
                    $['logErr'](_0x1f4641);
                } finally {
                    _0xe72861['ASHJt'](_0x3402fe);
                }
            } else {
                $['log']('京东返回了空数据');
            }
        });
    });
}

function taskUrl(_0x46888b, _0xba2b90 = {}) {
    var _0x43248a = {
        'mKKBK': function(_0x471fe0, _0xb7322c) {
            return _0x471fe0(_0xb7322c);
        },
        'qLXZC': 'keep-alive',
        'OBzFX': 'jdapp;iPhone;9.4.2;14.3;network/wifi;ADID/;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone12,1;supportBestPay/0;appBuild/167568;jdSupportDarkMode/0;addressid/;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
        'OBlFM': 'zh-cn',
        'SffOh': 'https://h5.m.jd.com/babelDiy/Zeus/2PTXhrEmiMEL3mD419b8Gn9bUBiJ/index.html?lng=0.000000&lat=0.000000&sid=&un_area=',
        'CwMxS': 'gzip, deflate, br'
    };
    return {
        'url': 'https://api.m.jd.com/client.action?functionId=' + _0x46888b + '&body=' + _0x43248a['mKKBK'](encodeURIComponent, JSON['stringify'](_0xba2b90)) + '&appid=content_ecology&clientVersion=1.0.0&client=wh5',
        'headers': {
            'Host': 'api.m.jd.com',
            'Accept': '*/*',
            'Connection': _0x43248a['qLXZC'],
            'Cookie': cookie,
            'User-Agent': _0x43248a['OBzFX'],
            'Accept-Language': _0x43248a['OBlFM'],
            'Referer': _0x43248a['SffOh'],
            'Accept-Encoding': _0x43248a['CwMxS'],
            'Content-Type': 'text/plain'
        }
    };
}

function postUrl(_0x20c3b1, _0x16e730) {
    var _0x2e5540 = {
        'IBkqw': 'application/x-www-form-urlencoded',
        'Svjdf': 'https://h5.m.jd.com',
        'mDEAi': 'gzip, deflate, br',
        'GjfxN': '*/*',
        'TXrEB': 'jdapp;iPhone;9.4.2;14.3;network/wifi;ADID/;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone12,1;supportBestPay/0;appBuild/167568;jdSupportDarkMode/0;addressid/;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
        'PmYNL': function(_0x448724, _0x4fbb67) {
            return _0x448724(_0x4fbb67);
        }
    };
    return {
        'url': 'https://api.m.jd.com/client.action',
        'headers': {
            'Host': 'api.m.jd.com',
            'Content-Type': _0x2e5540['IBkqw'],
            'Origin': _0x2e5540['Svjdf'],
            'Accept-Encoding': _0x2e5540['mDEAi'],
            'Connection': 'keep-alive',
            'Accept': _0x2e5540['GjfxN'],
            'User-Agent': _0x2e5540['TXrEB'],
            'Referer': 'https://h5.m.jd.com/babelDiy/Zeus/2PTXhrEmiMEL3mD419b8Gn9bUBiJ/index.html?lng=0.000000&lat=0.000000&sid=&un_area=',
            'Accept-Language': 'zh-cn'
        },
        'body': 'functionId=' + _0x20c3b1 + '&body=' + _0x2e5540['PmYNL'](encodeURIComponent, JSON['stringify'](_0x16e730)) + '&client=wh5&area='
    };
}

function TotalBean() {
    var _0x4c7f9e = {
        'tLnxz': function(_0x21108a, _0x3753e2) {
            return _0x21108a === _0x3753e2;
        },
        'EGQDv': 'success',
        'OzKQV': function(_0x44efa7, _0xf254de) {
            return _0x44efa7 !== _0xf254de;
        },
        'shTvn': 'nEskg',
        'yqVFd': 'EsMIg',
        'heOVZ': 'qgnjK',
        'Lhcja': 'yNnci',
        'rVgMH': 'retcode',
        'QloPW': function(_0x26e1cd, _0x2f3c46) {
            return _0x26e1cd === _0x2f3c46;
        },
        'TbXax': 'hVobg',
        'jYcAf': 'base',
        'rQrbR': function(_0x232ed7) {
            return _0x232ed7();
        },
        'QINPB': 'application/json,text/plain, */*',
        'nVaXg': 'application/x-www-form-urlencoded',
        'BDBmN': 'zh-cn',
        'TiDvF': 'keep-alive',
        'FsFki': './USER_AGENTS',
        'cSRjB': 'JDUA',
        'uwHmh': 'jdapp;iPhone;9.2.2;14.2;%E4%BA%AC%E4%B8%9C/9.2.2 CFNetwork/1206 Darwin/20.1.0'
    };
    return new Promise(async _0x12b18d => {
        const _0x14a94c = {
            'url': 'https://wq.jd.com/user/info/QueryJDUserInfo?sceneval=2',
            'headers': {
                'Accept': _0x4c7f9e['QINPB'],
                'Content-Type': _0x4c7f9e['nVaXg'],
                'Accept-Encoding': 'gzip, deflate, br',
                'Accept-Language': _0x4c7f9e['BDBmN'],
                'Connection': _0x4c7f9e['TiDvF'],
                'Cookie': cookie,
                'Referer': 'https://wqs.jd.com/my/jingdou/my.shtml?sceneval=2',
                'User-Agent': $['isNode']() ? process['env']['JD_USER_AGENT'] ? process['env']['JD_USER_AGENT'] : require(_0x4c7f9e['FsFki'])['USER_AGENT'] : $['getdata'](_0x4c7f9e['cSRjB']) ? $['getdata'](_0x4c7f9e['cSRjB']) : _0x4c7f9e['uwHmh']
            }
        };
        $['post'](_0x14a94c, (_0x1b692d, _0x47dac8, _0x1b49b9) => {
            var _0x3822a9 = {
                'FoHNS': function(_0x25cdc2, _0x397fe1) {
                    return _0x4c7f9e['tLnxz'](_0x25cdc2, _0x397fe1);
                },
                'EHTcz': _0x4c7f9e['EGQDv'],
                'ylDFO': '京东返回了空数据'
            };
            try {
                if (_0x4c7f9e['OzKQV'](_0x4c7f9e['shTvn'], _0x4c7f9e['yqVFd'])) {
                    if (_0x1b692d) {
                        console['log']('' + JSON['stringify'](_0x1b692d));
                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                    } else {
                        if ('efOPb' !== _0x4c7f9e['heOVZ']) {
                            if (_0x1b49b9) {
                                if (_0x4c7f9e['tLnxz'](_0x4c7f9e['Lhcja'], _0x4c7f9e['Lhcja'])) {
                                    _0x1b49b9 = JSON['parse'](_0x1b49b9);
                                    if (_0x4c7f9e['tLnxz'](_0x1b49b9[_0x4c7f9e['rVgMH']], 0xd)) {
                                        if (_0x4c7f9e['QloPW'](_0x4c7f9e['TbXax'], _0x4c7f9e['TbXax'])) {
                                            $['isLogin'] = ![];
                                            return;
                                        } else {
                                            if (_0x1b49b9) {
                                                _0x1b49b9 = JSON['parse'](_0x1b49b9);
                                                if (_0x3822a9['FoHNS'](_0x1b49b9['msg'], _0x3822a9['EHTcz'])) {
                                                    $['tasks0'] = _0x1b49b9['data']['Tasks0'];
                                                }
                                            } else {
                                                $['log'](_0x3822a9['ylDFO']);
                                            }
                                        }
                                    }
                                    $['nickName'] = _0x1b49b9[_0x4c7f9e['jYcAf']]['nickname'];
                                } else {
                                    $['logErr'](e, _0x47dac8);
                                }
                            } else {
                                console['log']('京东服务器返回空数据');
                            }
                        } else {
                            $['msg']($['name'], '恭喜', 'Yooho~,' + $['bean'] + '个京豆进账');
                        }
                    }
                } else {
                    $['logErr'](e);
                }
            } catch (_0x114d92) {
                $['logErr'](_0x114d92, _0x47dac8);
            } finally {
                _0x4c7f9e['rQrbR'](_0x12b18d);
            }
        });
    });
};
_0xod9 = 'jsjiami.com.v6'
// prettier-ignore
function Env(t, e) { class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, o) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let o = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); o = o ? 1 * o : 20, o = e && e.timeout ? e.timeout : o; const [r, h] = i.split("@"), a = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: o }, headers: { "X-Key": r, Accept: "*/*" } }; this.post(a, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), o = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, o) : i ? this.fs.writeFileSync(e, o) : this.fs.writeFileSync(t, o) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let o = t; for (const t of i) if (o = Object(o)[t], void 0 === o) return s; return o } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), o = s ? this.getval(s) : ""; if (o) try { const t = JSON.parse(o); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, o] = /^@(.*?)\.(.*?)$/.exec(e), r = this.getval(i), h = i ? "null" === r ? null : r || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, o, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const r = {}; this.lodash_set(r, o, t), s = this.setval(JSON.stringify(r), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }) : this.isQuanX() ? $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: o, body: r } = t; e(null, { status: s, statusCode: i, headers: o, body: r }, r) }, t => e(t)) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: o, body: r } = t; e(null, { status: s, statusCode: i, headers: o, body: r }, r) }, t => e(t))) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: o, body: r } = t; e(null, { status: s, statusCode: i, headers: o, body: r }, r) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: o, body: r } = t; e(null, { status: s, statusCode: i, headers: o, body: r }, r) }, t => e(t)) } } time(t) { let e = { "M+": (new Date).getMonth() + 1, "d+": (new Date).getDate(), "H+": (new Date).getHours(), "m+": (new Date).getMinutes(), "s+": (new Date).getSeconds(), "q+": Math.floor(((new Date).getMonth() + 3) / 3), S: (new Date).getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length))); for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length))); return t } msg(e = t, s = "", i = "", o) { const r = t => { if (!t || !this.isLoon() && this.isSurge()) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } } }; this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, r(o)) : this.isQuanX() && $notify(e, s, i, r(o))); let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="]; h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h) } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }