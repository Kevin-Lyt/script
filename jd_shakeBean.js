/*
京东会员-摇京豆
活动入口：京东app-我的-京东会员-摇京豆
脚本功能 本地用户循环助力并抽奖，脚本无任何别的内置助力。
适合node环境多账户使用，如仅一个账户就不需要运行这个脚本了。
每月运行一次即可

新手写脚本，难免有bug，能用且用。
============Quantumultx===============
[task_local]
#京东会员-摇京豆
3 10 1 * * https://raw.githubusercontent.com/i-chenzhe/qx/main/jd_shakeBean.js, tag=京东会员-摇京豆,  enabled=true
*/
const $ = new Env('京东会员-摇一摇');
const jdCookieNode = $.isNode() ? require("./jdCookie.js") : "";
const notify = $.isNode() ? require("./sendNotify") : "";
let cookiesArr = [], cookie = "", message = '', helpList = [];
if ($.isNode()) {
    Object.keys(jdCookieNode).forEach((item) => {
        cookiesArr.push(jdCookieNode[item]);
    });
} else {
    let cookiesData = $.getdata("CookiesJD") || "[]";
    cookiesData = JSON.parse(cookiesData);
    cookiesArr = cookiesData.map((item) => item.cookie);
    cookiesArr.reverse();
    cookiesArr.push(...[$.getdata("CookieJD2"), $.getdata("CookieJD")]);
    cookiesArr.reverse();
    cookiesArr = cookiesArr.filter((item) => !!item);
}
  var _0xodg='jsjiami.com.v6',_0x12e8=[_0xodg,'5rKe5p6Z5oqh5aed5p+55L+e5ZCa77+g','WwEhwrk=','w6U2LMOfw7E=','VMKAw5bDnBE=','w4bDkljCksO/w6vCgho=','UsOxaMOowqs=','w7DCm8O9TMOy','cTHDnFN6','w6vCo8OLaMOj','w4PDgynDisOUwqzChMO7','wrHDsyV6Ig==','RsKOw7I=','DMOkwq3Crl8SDeW/ouWkluOBhuS6reS5iui0qeWNlw==','f8OQXMOqTg==','aMORXxbClsKhZ8OK','dxc3Ik7DnVvDs1gs','fk7DgA==','aMK2L1rCisK0LMOb','c+ivoemHp+aUu+eYgOW8vOiNguWPvR5wwrQLJw3DicOew6/DqTlvwp7Dg1UDcRvCoRk9FcO6wqDCpMKKHsO+N8OwwrXCljPCmMKqRcKAwoNVw4kswoM6wrA=','dcK6IlXCisK6NcOXI8Ox','Y0/DocKr','w4jDnxJfK8OSw7zlt6HlpZXmlKU=','5LqG5Lu96Laz5Yyo','HwQUwozDkz1Jw7M=','w4for6TphpzmlqjnmrTlvaXojbXlj7xAw5lMw53DohU=','GHNNfDA=','wrjDucKqPAQ=','w6ZIF8KxwqXChMOmB8KICWfDlg==','wo3Cq11cw6bCsgY=','w4jCicOsXcOUw6QzIg==','woDDk8KPLhs=','DcKyclgH','ZF3DgMKhK8OSLA==','HxvDmsOxwqECWcOn','w7TDpRLDq8O4','cVTDiF4AWwDjgK7kuKPkuLzotKzljr0=','wo/DsMKKITk=','ShQjw7zDpMOYwrRH','OOW9n+Wls+WKn+WKmSfDusOpMGFcHsOWwqXCsXg=','wqRgHXfCqFnCrA==','chQh','w73DgFDChQ==','44CD5o+t56ad44K9HRUowoPDoMO25ba+5aeJ5pSP','5Lqz5Lm76LWg5Y25','w5oIfkPCkh3DvCg=','TSzDnURMZsK9wqY=','wqforZ3phofmlJHnm6HlvpjojZ7ljYjCphDCjzDDlEzCkMOSbcKQTcKoVcOFwrPCgMKZFTUgYMO5cXV3AMKwPsO1wrbCssKswrQDw4BrSGw3KMOQwrvDpmQ=','w4XDnj7DkcOpw7fDhsKxw44dwpoqwopSwoTClybDnEvCplbDhMK8w4vCkh80MGbDszBefAXCu2nCqMK+wrbCtsKUAsOK','BgPCo8KPw5DCjA==','bcKFw5Ykw7/DiMKZGsK6w7M=','wo7DmMOhwoE=','5LmA5Lqy6Le85Y2r','ZhbCnjzDmA==','w7noraLphp3mlZbnm6HlvpLojpvljoUrw6tVw5TDi2I=','w7/DhFPCh8OFw6I=','f3nCrcK6w6pwXlw=','TA7CiBzDuQ==','bcKCw44tw6Q=','ZMObTsOqRMOxNw==','wpDCg8KoEBLCiw==','e8OfTMOsXg==','HBPDjcO5woc=','w4TDhC7DhMOi','EGVmw6QcAMKb','w79fw5k4wpfDscOKZQ==','Y8K/EMOmwqdqwonjgYLkuZTkuJbot6Llj5Y=','UcO5f8Ogwo3CpcOYw5s=','wrXComJtwr/DrFhj','PuW/oOWls+aLveWnp8KHw4dZw7bCoFLDkwDDmg54','w7g7KF/Dj0jDnQ==','UMORXQ==','HksWw78=','44O85o2+56eg44KNF8OHSMKtdMOl5baO5aWG5pWH','VMOMXgHCoA==','wo/Ds8K8AjhCUkw=','e+iuhemFtOaUquealOW8tuiOg+WNlC9QwpnChiXDgHbCpMKaw55Sw6l9OjzDqh8Tw7XChG/DmsKhY2kVw5fDq8O4w4nDjyMDOMOiwrnDgR1swoDCr1ZVw7E=','w6YvTHDCuA==','w7PDksK+w5bChVA=','wpvDmRNUDsOUw616AhQ=','woLDj8K3w7k=','w5McSsOWKk475bWR5aav5pae','5LiP5Lqf6LaZ5Y21','wrfDqcKxJcOW','ek/DpcK6','Ph4cwpvDrg==','wrl6PH3CvA==','wpfDmMOlwpA=','ZMK6LV8=','IOS5jeS6iei3ueWMmA==','w7PDj8KUw5zCmQ==','M1R+YyrClhzCvA==','S8KTw50yw7/DhsKAFg==','IOiNluW8gsO/','W+S7kuiypA==','GcOXXcK1w4k=','XBMCwrMjKA==','wqXDvsKaKcOSHsOEw7LDhMOD','wpLCh8KrEg==','w78pCVU=','w47Diz7DgsOy','aMKvw6rDoQ==','wr/CgeWkjOi3hcKQwqrljbDlmp90aQ==','wpnCp0VYw7jCrRo=','dWnCp8Kiw7F9U0cawoExw4AYw5LDhjw=','w7JZw48jwrbDvsOubsO7cA==','Kg3Cl8KZTkpz','5rOO5p255omQ5aa25p6O5L+z5LqH','5LmN5LqG6LyL5Zq35Luw56mZ5pWP5o2H','VBAlw7IqY0xhembComE=','w4fDjivDkcOqw7bCgMOOw4QXwpUhwp8GwoTDiWzDghPDuA/DhcOtwpXCnRRvNGDDpjU4ZQjCuHjCvcKewpHCi8K5QsKffUUyJiTDlsKmw4h6ZMOEwrcGYULCpT5ywrF4w4bCsMOZKijCu194w5zCgMOeQsKaw6NVFsO0w5XDu0TDm8KMRDcFLinDsjPDmStbCUtEW8K/wq5zw7vDo8O8wrTCpMOKwo/DkQ7Dj0dGw7TCly/DknHDicKtRCAtwpI/w693wo7CrMKLH8Ogw4Fbw5TDhsKWaFLCscKIwrbChVPDjsOQwrvDtsKXaQ5rPn1aIAlhYcKDw5vDizEtw4xDMXJpw57Co3R/wqLCkAZqQcOywqnDnVoYU2nCoMKraGVfWwNhd2PCuH/DlcKKeMO6QERYw7IpdR/Ctz7DmVg4wofCu2/CgiQhVVXCl8OCa8OzBjjDisOGw7lMVcOgw7Ecw5HCocK5S2rCicK1w6ItacOLfMK4w5oFLCp1F8OeJQ7DsMKrw6pQWSJ2RcKHVw8ywpPCj0ICDDvCoijDpjfDqRoSw6NcwrDDocOgI1kQYiHCg2vChyo=','wo7DqsKaNDJ9UcK/FVFow7BDw6TCisKywo4UYyghKsKSwrTDl8KERsOGETpFMA==','cCvDjEZxPcO/w6x7Ox8awpHCocOxFnfDmSdgbcKjK8O6','wpLCicKx','bR/ClXfDkjN5CsOVw73CnQ5aw5wvwpQJZjDCnzIlZ8ODDGMAcg==','bBUewprDpGE=','Y8KnX8OZcw==','VcOWThTCq8O6JcKAwpPDrQ5kwpLCsMKQaQvCnsOkw4PCsRg=','wqrDpjp1Og==','IBrCv1TDug==','wpbDhsO3w78a','w5UaIEnDog==','f0vDu8KvPsOfAC9Lw5s/SBvCpXPDvw==','wqjDq8OowrBX','KALCi8Kxw7o=','w7vDscOJw4jDlw==','w44RKMOqw48=','w57CgsOaeMOq','w5TCqsOedHN3TQ==','fUTCpsKyw7I=','w6TDucOSw7fDmA==','dQrCqy7DhA==','wofDnMO4','cwghw4vDmMOL','woLDv8KaJQ==','wojCsHRQwobDo2V0EMKrIQrDr8KD','wo3DjcKuw7UCw4FTwr9Uw6Q5GWzDg8OLOcOOesOv','FRPDjcO7','woHDmsO4wo1Cw6YBw7zDlMOsw5rDmcKDcgbCs8OvLcKb','wpceUcOY','AcKgdVIcw5N/Sw7Cv8KFZx0cw5rCmHfDozY+wpUk','bsKNbcOP','TF3Cj8Kkw7U=','wp8QQg==','6I2v5Y6n5Yum5Yu256KX5oqx5YmP','DcO0TsKt','wqVyIlfCuF7CklhMw4ZGw4TDvwk=','fMKuw4XDqsKk','wo3DtcK4','5oGn5ZWw6I6u5by5CQ==','woXDu8KrCA==','5Lqw5LiN6LK2','VwUtwrI=','dMK6O1DCtsKxA8ObJMOmwovChsO1DTYz','OVxpaQ==','wojDmMO/wqtDw6Elw7fDssO4w7rDhcKUeQ==','wpXCgn5MwqE=','wojDj8Kuw70=','DMK2YE88w49NVAbCo8KWehA0w5HCiA==','woDDnQ5/N8OVw4lhCx1cwo7Cg8KP','w5cOaFjCsxLDmCNTeQ==','w5wAbmfCqxLDgT9aZsO/CcKewrA=','w5zDiMKkw47Cuw==','5oCC5Zes6I2a5b23wpQ=','d1zDk8ON','cFLDksOcERQOwobDr8O8','w7nDjsKFw4nCjlvCpMO5WcOFwp8=','woPDlsO5wpRbw6E8w6vDu8On','DB/CmMKQw5vCh0UIwqtZw5dSQyo=','UeS9quaBmeWKouS7r+W9gw==','6KCf5YuI5YqG6ICt5Yyr6bqt5LiX','wpLDusO2wqBn','dDDDnw==','PxrCvMO+fsKLdw==','BcO6XQ==','LSnCsyFe','YMK7w6vDqD1dS8KS','TjfDnntR','U8O/ew==','w6MtF0XDhFXDp8KIwr7Dgw==','w7HClcOu','w5AyO8OVw4E=','Ax/CisKlw4bCmw==','w6XCg8OFf8OW','5Lmf5LqJ6L6E5Zi45Lic56q95pWc5oy9','wrhKMH4ZKMO5AWDDmMOwTMOA','JwHCpg==','w5fDgmfDgsO0','EwrClgRZSwURw6dPZy/Dmh5iIE3Ct8KVw7PDhMKrNsKpw4HClUDDtkzDgcKewozCjEzDvsK/B8OVBUJlAlzCuGkww4XDgFbDlsKcwptUwqV4AHo2','w58MCcO3w6bDmcKaZcOUXBvCisKPccOteljCrg1vaMK1JcKXwrjDusK9b8K8w4LCj8KLw5bCoH7CvgfCknVow6DCqy/CjzDDqsOJwpTDhnXCvAHCncOU','Ox8Zwq/DpA==','w7jDhFjCkMKcw6vCgxY4LA==','w7TDocOGw6fDig==','LBnCrSZt','cXvCpcKfw64=','bRvCvSHDhw==','VMOtfMO/Rg==','WBLCkBHDuQ==','wp8QQsO8M1U=','Ox/Cl3TDng==','cAgJwpoB','dMK6OFLCq8KxJA==','f8Kow7Q3w7s=','wo/DrcKiKyYuEA==','w6NTw44wwrbDtMOC','HXdew6o=','SMORXxbCkcKubMOA','woTCsHN+','f8KffMOcYMKJfgA=','worDnQ5VCcOVw798','STEpw53DmQ==','wozDlsOrwqFGw70=','EWJew7sIU8OaBHZ9wqEReRPDncKbwqTCpT9hwp3DglpIehHCoAk7H8K7wovCr8KPFcKpasO4wrHCjBPCmcKg','aMKWw5Eww5LDi8KYEcKDw6wRwopZwplLHDbDgsKCw4XDmcKEwo3CghfDvgvCicOxw5vDhg==','wonCuEJJw7fCrRZrw5Fkwqk5AsKQw7Q4w6XDgn3CssOsEMOx','fMKacMOeSsKLbQ3CjcKkIh5cJsKbw4bDicOiwq0bTA==','ZUvDjsOcHRYyworDlsOgJMKZLMKyPcK1wpkfw7/CgHbCt0Nn','nFjsjiaxmqlkiq.Gcom.UvB6eNrTEf=='];(function(_0xc76cb7,_0x485fe4,_0x3a6c7f){var _0x555cf7=function(_0x2779f8,_0x5836fe,_0x4244f8,_0x6b0d4e,_0x545288){_0x5836fe=_0x5836fe>>0x8,_0x545288='po';var _0x5b56c4='shift',_0x1ed019='push';if(_0x5836fe<_0x2779f8){while(--_0x2779f8){_0x6b0d4e=_0xc76cb7[_0x5b56c4]();if(_0x5836fe===_0x2779f8){_0x5836fe=_0x6b0d4e;_0x4244f8=_0xc76cb7[_0x545288+'p']();}else if(_0x5836fe&&_0x4244f8['replace'](/[nFxqlkqGUBeNrTEf=]/g,'')===_0x5836fe){_0xc76cb7[_0x1ed019](_0x6b0d4e);}}_0xc76cb7[_0x1ed019](_0xc76cb7[_0x5b56c4]());}return 0x75608;};return _0x555cf7(++_0x485fe4,_0x3a6c7f)>>_0x485fe4^_0x3a6c7f;}(_0x12e8,0xd3,0xd300));var _0x43bb=function(_0x146c74,_0x1d3a8a){_0x146c74=~~'0x'['concat'](_0x146c74);var _0x304945=_0x12e8[_0x146c74];if(_0x43bb['aoxCnG']===undefined){(function(){var _0x11ce06=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x47dd13='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x11ce06['atob']||(_0x11ce06['atob']=function(_0x3c7eef){var _0x138740=String(_0x3c7eef)['replace'](/=+$/,'');for(var _0x2ea10f=0x0,_0x161c0,_0x5eeb78,_0x49feb1=0x0,_0x56a614='';_0x5eeb78=_0x138740['charAt'](_0x49feb1++);~_0x5eeb78&&(_0x161c0=_0x2ea10f%0x4?_0x161c0*0x40+_0x5eeb78:_0x5eeb78,_0x2ea10f++%0x4)?_0x56a614+=String['fromCharCode'](0xff&_0x161c0>>(-0x2*_0x2ea10f&0x6)):0x0){_0x5eeb78=_0x47dd13['indexOf'](_0x5eeb78);}return _0x56a614;});}());var _0x48c4ce=function(_0xbf7d47,_0x1d3a8a){var _0x3a9212=[],_0xabe242=0x0,_0x4f16da,_0x30b37b='',_0x23fede='';_0xbf7d47=atob(_0xbf7d47);for(var _0x5a701c=0x0,_0x194761=_0xbf7d47['length'];_0x5a701c<_0x194761;_0x5a701c++){_0x23fede+='%'+('00'+_0xbf7d47['charCodeAt'](_0x5a701c)['toString'](0x10))['slice'](-0x2);}_0xbf7d47=decodeURIComponent(_0x23fede);for(var _0x5660ee=0x0;_0x5660ee<0x100;_0x5660ee++){_0x3a9212[_0x5660ee]=_0x5660ee;}for(_0x5660ee=0x0;_0x5660ee<0x100;_0x5660ee++){_0xabe242=(_0xabe242+_0x3a9212[_0x5660ee]+_0x1d3a8a['charCodeAt'](_0x5660ee%_0x1d3a8a['length']))%0x100;_0x4f16da=_0x3a9212[_0x5660ee];_0x3a9212[_0x5660ee]=_0x3a9212[_0xabe242];_0x3a9212[_0xabe242]=_0x4f16da;}_0x5660ee=0x0;_0xabe242=0x0;for(var _0x209874=0x0;_0x209874<_0xbf7d47['length'];_0x209874++){_0x5660ee=(_0x5660ee+0x1)%0x100;_0xabe242=(_0xabe242+_0x3a9212[_0x5660ee])%0x100;_0x4f16da=_0x3a9212[_0x5660ee];_0x3a9212[_0x5660ee]=_0x3a9212[_0xabe242];_0x3a9212[_0xabe242]=_0x4f16da;_0x30b37b+=String['fromCharCode'](_0xbf7d47['charCodeAt'](_0x209874)^_0x3a9212[(_0x3a9212[_0x5660ee]+_0x3a9212[_0xabe242])%0x100]);}return _0x30b37b;};_0x43bb['ukSIFk']=_0x48c4ce;_0x43bb['QHmNZM']={};_0x43bb['aoxCnG']=!![];}var _0x258f04=_0x43bb['QHmNZM'][_0x146c74];if(_0x258f04===undefined){if(_0x43bb['SNKiSM']===undefined){_0x43bb['SNKiSM']=!![];}_0x304945=_0x43bb['ukSIFk'](_0x304945,_0x1d3a8a);_0x43bb['QHmNZM'][_0x146c74]=_0x304945;}else{_0x304945=_0x258f04;}return _0x304945;};!(async()=>{var _0x43ee8f={'XQgob':'【提示】请先获取京东账号一cookie\x0a直接使用NobyDa的京东签到获取','RNQXd':_0x43bb('0','&2V('),'FyDWt':function(_0x39bb95,_0x421c93){return _0x39bb95<_0x421c93;},'vYBGy':function(_0x573d1e,_0x5f064b){return _0x573d1e+_0x5f064b;},'YOXJb':function(_0x2c7a4e){return _0x2c7a4e();},'ENPtT':function(_0x4fd31f,_0x14a273,_0x3ab647){return _0x4fd31f(_0x14a273,_0x3ab647);},'YcuUr':_0x43bb('1','dDnL'),'cXPAN':'SHAKING','aIPGm':function(_0x60ee79,_0x2658da){return _0x60ee79(_0x2658da);},'CvrEY':function(_0x59fdb0,_0x27f4e4,_0x48f7cf){return _0x59fdb0(_0x27f4e4,_0x48f7cf);},'sbvmU':_0x43bb('2','w)rS'),'arEhJ':_0x43bb('3','(3)K'),'DJMnb':function(_0x44b084,_0xeb8e32){return _0x44b084>_0xeb8e32;},'kaSPc':_0x43bb('4','Gm2H'),'pBgyD':_0x43bb('5','zd$G')};if(!cookiesArr[0x0]){$['notify']($[_0x43bb('6',')Uok')],_0x43ee8f['XQgob'],_0x43ee8f[_0x43bb('7','*Gwe')],{'open-url':_0x43ee8f[_0x43bb('8','y(zz')]});return;}for(let _0x564b48=0x0;_0x43ee8f['FyDWt'](_0x564b48,cookiesArr['length']);_0x564b48++){if(cookiesArr[_0x564b48]){cookie=cookiesArr[_0x564b48];$[_0x43bb('9','eX&X')]=decodeURIComponent(cookie[_0x43bb('a','zd$G')](/pt_pin=(.+?);/)&&cookie[_0x43bb('b','JByX')](/pt_pin=(.+?);/)[0x1]);$[_0x43bb('c','bel^')]=_0x43ee8f[_0x43bb('d','JByX')](_0x564b48,0x1);$['isLogin']=!![];$[_0x43bb('e','CI51')]='';await _0x43ee8f[_0x43bb('f','lTPM')](checkCookie);console[_0x43bb('10','p)q3')](_0x43bb('11','y(zz')+$[_0x43bb('12','4aeh')]+'】'+($['nickName']||$[_0x43bb('13','DCxg')])+_0x43bb('14','K*08'));if(!$['isLogin']){$[_0x43bb('15','Gm2H')]($['name'],'【提示】cookie已失效','京东账号'+$['index']+'\x20'+($[_0x43bb('16','aYpa')]||$['UserName'])+_0x43bb('17','&2V('),{'open-url':_0x43ee8f['RNQXd']});if($['isNode']()){await notify[_0x43bb('18','aYpa')]($[_0x43bb('19','idzV')]+_0x43bb('1a','lTPM'),_0x43bb('1b','p)q3')+$['index']+'\x20'+$[_0x43bb('1c','jc@Y')]+_0x43bb('1d','t#5G'));}continue;}await _0x43ee8f[_0x43bb('1e','K*08')](doSomething,_0x43ee8f[_0x43bb('1f','dDvO')],{'channel':_0x43ee8f['cXPAN'],'activityIdEncrypted':_0x43bb('20','*Gwe')});await $['wait'](0x7d0);}}cookiesArr[_0x43bb('21','w)rS')]();for(let _0x35993d=0x0;_0x35993d<cookiesArr['length'];_0x35993d++){if(cookiesArr[_0x35993d]){cookie=cookiesArr[_0x35993d];$[_0x43bb('22','JByX')]=_0x43ee8f[_0x43bb('23','dDvO')](decodeURIComponent,cookie['match'](/pt_pin=(.+?);/)&&cookie[_0x43bb('24','PSdo')](/pt_pin=(.+?);/)[0x1]);$['index']=_0x35993d+0x1;$[_0x43bb('25','idzV')]=!![];$[_0x43bb('26','7$gr')]='';await _0x43ee8f[_0x43bb('27','CI51')](checkCookie);console['log'](_0x43bb('28','VXtj')+$[_0x43bb('29','L79N')]+'】'+($['nickName']||$[_0x43bb('2a','[rah')])+_0x43bb('2b','bel^'));if(!$[_0x43bb('2c','t#5G')]){$[_0x43bb('2d','[rah')]($[_0x43bb('2e','eX&X')],_0x43bb('2f','Gm2H'),_0x43bb('30','[rah')+$['index']+'\x20'+($[_0x43bb('31','bAFj')]||$[_0x43bb('32','bel^')])+_0x43bb('33','CI51'),{'open-url':_0x43bb('34','CI51')});if($[_0x43bb('35','T%^(')]()){await notify[_0x43bb('36','dDnL')]($[_0x43bb('37',']Wdx')]+'\x20cookie已失效',_0x43bb('38','VahB')+$[_0x43bb('39','O[4p')]+'\x20'+$['UserName']+_0x43bb('3a','Ev61'));}continue;}$['fullHelp']=![];for(let _0x3ac95b=0x0;_0x43ee8f['FyDWt'](_0x3ac95b,helpList[_0x43bb('3b','eX&X')]);_0x3ac95b++){if(!$[_0x43bb('3c','0g5#')]){await _0x43ee8f[_0x43bb('3d','O[4p')](doSomething,_0x43ee8f[_0x43bb('3e','dDnL')],helpList[_0x3ac95b]);await $['wait'](0x7d0);}}}}cookiesArr[_0x43bb('3f','4aeh')]();for(let _0x3be10b=0x0;_0x3be10b<cookiesArr[_0x43bb('40','OjXs')];_0x3be10b++){if(cookiesArr[_0x3be10b]){cookie=cookiesArr[_0x3be10b];$['UserName']=decodeURIComponent(cookie[_0x43bb('41','4aeh')](/pt_pin=(.+?);/)&&cookie[_0x43bb('42','7$gr')](/pt_pin=(.+?);/)[0x1]);$[_0x43bb('43','CI51')]=_0x3be10b+0x1;$[_0x43bb('44','&2V(')]=!![];$[_0x43bb('45',']lwf')]='';await checkCookie();console['log'](_0x43bb('46','h&xl')+$['index']+'】'+($[_0x43bb('47','zd$G')]||$[_0x43bb('48','Qei!')])+_0x43bb('49','dDnL'));$['bean']=0x0;if(!$[_0x43bb('4a','KKg%')]){$[_0x43bb('4b','DCxg')]($[_0x43bb('4c','Ou)g')],_0x43bb('4d','VahB'),'京东账号'+$[_0x43bb('4e','DCxg')]+'\x20'+($[_0x43bb('4f','dDvO')]||$['UserName'])+_0x43bb('50','7$gr'),{'open-url':_0x43ee8f[_0x43bb('51','bAFj')]});if($[_0x43bb('52','vGuu')]()){await notify[_0x43bb('53','lTPM')]($[_0x43bb('54','VahB')]+_0x43bb('55','MW39'),_0x43bb('56','#yHk')+$['index']+'\x20'+$[_0x43bb('9','eX&X')]+'\x0a请重新登录获取cookie');}continue;}await doSomething(_0x43ee8f[_0x43bb('57','fV%U')]);await $[_0x43bb('58','idzV')](0x7d0);if(_0x43ee8f['DJMnb']($[_0x43bb('59','jc@Y')],0x0)){for(let _0x3be10b=0x0;_0x3be10b<$[_0x43bb('5a','t#5G')];_0x3be10b++){await doSomething(_0x43ee8f['kaSPc']);await $[_0x43bb('5b',']Wdx')](0x7d0);}if($[_0x43bb('5c','aYpa')]>0x0){message+=_0x43bb('5d','p)q3')+$[_0x43bb('5e','vGuu')]+'-'+($[_0x43bb('5f','K*08')]||$[_0x43bb('60','dDnL')])+_0x43bb('61','p)q3')+$['beam']+_0x43bb('62','VXtj');}}else{$['log'](_0x43ee8f[_0x43bb('63','h&xl')]);}}}if(message!==''){if($[_0x43bb('64',')Uok')]()){notify[_0x43bb('65','fV%U')]($[_0x43bb('66','OjXs')],message);}else{$[_0x43bb('4b','DCxg')]($[_0x43bb('67','KKg%')],'',mseeage);}}})()[_0x43bb('68','CI51')](_0x3434bf=>{$['log']('','❌\x20'+$[_0x43bb('69','y(zz')]+_0x43bb('6a','eX&X')+_0x3434bf+'!','');})[_0x43bb('6b','w)rS')](()=>{$['done']();});function doSomething(_0x4e37f9,_0x2af066={}){var _0x5f2dd6={'HRdTc':_0x43bb('6c','0g5#'),'GrfQN':_0x43bb('6d',']lwf'),'XrvJy':'couponDiscount','yiUmZ':_0x43bb('6e','Gm2H'),'CxSWp':_0x43bb('6f','T%^('),'dHgdP':'没有助力机会了','Gzmuv':_0x43bb('70','dDvO'),'zrQwd':function(_0x49eda9){return _0x49eda9();},'iKFwZ':_0x43bb('71',')Uok'),'BZGEz':'keep-alive','kdZSA':'application/json','PCZpg':_0x43bb('72','CI51'),'HksZd':_0x43bb('73','L79N'),'DRDyJ':'gzip,\x20deflate,\x20br'};let _0x7efb83={'url':_0x43bb('74','bel^')+Date[_0x43bb('75','OjXs')]()+_0x43bb('76','IlUq')+_0x4e37f9+_0x43bb('77','jc@Y')+encodeURIComponent(JSON['stringify'](_0x2af066)),'headers':{'Host':_0x5f2dd6[_0x43bb('78','(3)K')],'Origin':_0x43bb('79','DCxg'),'Cookie':cookie,'Connection':_0x5f2dd6[_0x43bb('7a','lTPM')],'Accept':_0x5f2dd6[_0x43bb('7b','IlUq')],'User-Agent':_0x5f2dd6['PCZpg'],'Accept-Language':_0x43bb('7c','VahB'),'Referer':_0x5f2dd6['HksZd'],'Accept-Encoding':_0x5f2dd6[_0x43bb('7d','KKg%')]}};return new Promise(_0x2e2885=>{var _0x2f3127={'UQNrW':'SHAKING','dyoIJ':_0x43bb('7e','idzV'),'uSySP':_0x5f2dd6[_0x43bb('7f',']Wdx')],'ybenF':_0x5f2dd6[_0x43bb('80','T%^(')],'FiTwZ':_0x5f2dd6[_0x43bb('81','#yHk')],'rCzDS':_0x5f2dd6[_0x43bb('82','*Gwe')],'ZwQVR':_0x5f2dd6[_0x43bb('83','JByX')],'VWQUt':_0x43bb('84','L79N'),'VhfMS':_0x5f2dd6[_0x43bb('85','0g5#')],'gJFRT':_0x5f2dd6[_0x43bb('86','#yHk')],'xyLPL':function(_0x408fdc){return _0x5f2dd6[_0x43bb('87','O[4p')](_0x408fdc);}};$[_0x43bb('88',']Wdx')](_0x7efb83,(_0x37fab2,_0x5c620d,_0x525fec)=>{try{if(_0x37fab2){$[_0x43bb('89','[rah')](_0x37fab2);}else{if(_0x525fec){_0x525fec=JSON['parse'](_0x525fec);if(_0x525fec['success']){if(_0x525fec[_0x43bb('8a','L79N')][_0x43bb('8b','Qei!')](_0x43bb('8c','VahB'))){helpBody={'activityIdEncrypted':_0x525fec[_0x43bb('8d','7$gr')][_0x43bb('8e',']Wdx')],'assistStartIdEncrypted':_0x525fec[_0x43bb('8f','MW39')][_0x43bb('90','PSdo')],'assistedPinEncrypted':_0x525fec[_0x43bb('91','(3)K')]['pinEncrypted'],'channel':_0x2f3127[_0x43bb('92','0g5#')],'riskInformation':{'platform':0x1,'pageClickKey':'','eid':'','fp':'','shshshfp':'','shshshfpa':'','shshshfpb':''}};helpList['push'](helpBody);$[_0x43bb('93','MW39')](_0x43bb('94','Ad#e'));}if(_0x525fec[_0x43bb('95','h&xl')][_0x43bb('96','t#5G')](_0x2f3127[_0x43bb('97','vmoU')])){$[_0x43bb('98','dDvO')](_0x43bb('99','(3)K')+_0x525fec[_0x43bb('9a','dDvO')]['rewardBeanAmount']+_0x43bb('9b','vGuu'));$[_0x43bb('9c',')Uok')]+=_0x525fec[_0x43bb('9a','dDvO')][_0x43bb('9d','aYpa')];}if(_0x525fec[_0x43bb('9e','K*08')][_0x43bb('9f',']Wdx')](_0x2f3127[_0x43bb('a0','Qei!')])){$['times']=_0x525fec[_0x43bb('a1','VahB')][_0x43bb('a2','PSdo')];}if(_0x525fec[_0x43bb('8a','L79N')][_0x43bb('a3','lTPM')](_0x2f3127['ybenF'])){if(_0x525fec['data'][_0x43bb('a4','bAFj')][_0x43bb('a5','bAFj')](_0x2f3127[_0x43bb('a6','vGuu')])){$['log'](_0x43bb('a7','T%^(')+_0x525fec[_0x43bb('a8','Gm2H')][_0x43bb('a9','Gm2H')][_0x43bb('aa','vGuu')]+'-'+_0x525fec['data'][_0x43bb('ab',']Wdx')][_0x43bb('ac','T%^(')]+_0x43bb('ad','7$gr'));}}}else{switch(_0x525fec['resultCode']){case'1000001':$['log'](_0x43bb('ae','bAFj'));break;case _0x2f3127[_0x43bb('af',']Wdx')]:$[_0x43bb('b0','bel^')](_0x2f3127['ZwQVR']);break;case _0x43bb('b1','idzV'):$[_0x43bb('b2','h&xl')]('被助力者满助力了');break;case _0x2f3127[_0x43bb('b3','VXtj')]:$[_0x43bb('b4','y(zz')]=!![];$[_0x43bb('98','dDvO')](_0x2f3127[_0x43bb('b5','bel^')]);return;default:$[_0x43bb('b6','zd$G')](_0x525fec[_0x43bb('b7','KKg%')]);break;}}}else{$[_0x43bb('b8','JByX')](_0x2f3127[_0x43bb('b9','*Gwe')]);}}}catch(_0x4faaf2){$[_0x43bb('ba','T%^(')](_0x4faaf2);}finally{_0x2f3127[_0x43bb('bb','JByX')](_0x2e2885);}});});}function checkCookie(){var _0x489aaa={'BSDpp':function(_0x1a4961,_0x5d6700){return _0x1a4961===_0x5d6700;},'WjjHY':'1001','nMrOM':_0x43bb('bc','Ev61'),'Hfbju':_0x43bb('bd','hykQ'),'qhhQy':_0x43bb('be','idzV'),'Wbyed':'Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2014_3\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Version/14.0.2\x20Mobile/15E148\x20Safari/604.1','WgORG':_0x43bb('bf','CI51'),'hwdIL':_0x43bb('c0','VXtj'),'bcGxg':'gzip,\x20deflate,\x20br'};const _0x4e3a1f={'url':_0x43bb('c1','*Gwe'),'headers':{'Host':_0x489aaa['Hfbju'],'Accept':_0x489aaa[_0x43bb('c2','jc@Y')],'Connection':_0x43bb('c3','eX&X'),'Cookie':cookie,'User-Agent':_0x489aaa[_0x43bb('c4','#yHk')],'Accept-Language':_0x489aaa[_0x43bb('c5','VXtj')],'Referer':_0x489aaa[_0x43bb('c6','0g5#')],'Accept-Encoding':_0x489aaa[_0x43bb('c7','O[4p')]}};return new Promise(_0x3801ad=>{var _0x565907={'EhEFF':function(_0x2fa642,_0x57f6f6){return _0x489aaa[_0x43bb('c8','4aeh')](_0x2fa642,_0x57f6f6);},'aHLwJ':_0x489aaa[_0x43bb('c9','O[4p')],'VVoSs':_0x489aaa['nMrOM']};$['get'](_0x4e3a1f,(_0x2d7a2f,_0x4fe242,_0x37104c)=>{try{if(_0x2d7a2f){$[_0x43bb('ca','MW39')](_0x2d7a2f);}else{if(_0x37104c){_0x37104c=JSON[_0x43bb('cb','IlUq')](_0x37104c);if(_0x565907[_0x43bb('cc',')Uok')](_0x37104c[_0x43bb('cd','aYpa')],_0x565907[_0x43bb('ce','dDnL')])){$[_0x43bb('cf','L79N')]=![];return;}if(_0x37104c[_0x43bb('d0',']lwf')]==='0'&&_0x37104c[_0x43bb('d1','&2V(')]['hasOwnProperty'](_0x43bb('d2','DCxg'))){$['nickName']=_0x37104c[_0x43bb('d3','Qei!')][_0x43bb('d4','(3)K')][_0x43bb('d5','lTPM')]['nickname'];}}else{$['log'](_0x565907[_0x43bb('d6','[rah')]);}}}catch(_0x151308){$[_0x43bb('d7',']Wdx')](_0x151308);}finally{_0x3801ad();}});});};_0xodg='jsjiami.com.v6';
// prettier-ignore
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
