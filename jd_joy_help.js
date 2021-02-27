/*
宠汪汪强制为别人助力（助力一个好友你自己可以获得30积分，一天上限是帮助3个好友，自己获得90积分，不管助力是否成功，对方都会成为你的好友）
更新地址：https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_joy_help.js
更新时间：2021-1-21
目前提供了304位好友的friendPin供使用。脚本随机从里面获取一个，助力成功后，退出小程序重新点击进去开始助力新的好友
欢迎大家使用 https://jdjoy.jd.com/pet/getFriends?itemsPerPage=20&currentPage=1 (currentPage=1表示第一页好友，=2表示第二页好友)
提供各自账号列表的friendPin给我
如果想设置固定好友，那下载下来放到本地使用，可以修改friendPin换好友(助力一好友后，更换一次friendPin里面的内容)
感谢github @Zero-S1提供
使用方法：
①设置好相应软件的重写
②从京东APP宠汪汪->领狗粮->邀请好友助力，分享给你小号微信或者微信的文件传输助手。 自己再打开刚才的分享，助力成功后，返回到此小程序首页重新进去宠汪汪即可助力下一位好友
③如提示好友人气旺，说明此好友已满了三人助力，需重新进出小程序，重新进入来客有礼-宠汪汪。
new Env('宠汪汪强制为别人助力');//此处忽略即可，为自动生成iOS端软件配置文件所需
[MITM]
hostname = draw.jdfcloud.com
======================Surge=====================
[Script]
宠汪汪强制为别人助力= type=http-request,pattern=^https:\/\/draw\.jdfcloud\.com\/\/pet\/enterRoom\/h5\?invitePin=.*(&inviteSource=task_invite&shareSource=\w+&inviteTimeStamp=\d+&openId=\w+)?&reqSource=weapp|^https:\/\/draw\.jdfcloud\.com(\/mirror)?\/\/pet\/helpFriend\?friendPin,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_joy_help.js

===================Quantumult X=====================
[rewrite_local]
^https:\/\/draw\.jdfcloud\.com\/\/pet\/enterRoom\/h5\?invitePin=.*(&inviteSource=task_invite&shareSource=\w+&inviteTimeStamp=\d+&openId=\w+)?&reqSource=weapp|^https:\/\/draw\.jdfcloud\.com(\/mirror)?\/\/pet\/helpFriend\?friendPin url script-request-header https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_joy_help.js

=====================Loon=====================
[Script]
http-request ^https:\/\/draw\.jdfcloud\.com\/\/pet\/enterRoom\/h5\?invitePin=.*(&inviteSource=task_invite&shareSource=\w+&inviteTimeStamp=\d+&openId=\w+)?&reqSource=weapp|^https:\/\/draw\.jdfcloud\.com(\/mirror)?\/\/pet\/helpFriend\?friendPin script-path=https://raw.githubusercontent.com/LXK9301/jd_scripts/master/jd_joy_help.js, requires-body=true, timeout=3600, tag=宠汪汪强制为别人助力


你也可从下面链接拿好友的friendPin(复制链接到有京东ck的浏览器打开即可)

https://jdjoy.jd.com/pet/getFriends?itemsPerPage=20&currentPage=1
*/
let url = $request.url
const friendsArr = ["mseweb","jd_5a0e621a9977c","953612885","jd_7bd4110aa0242","jd_502c5b4ce4c90","13560369433_p","jd_6fe504e3141a0","jd_4d3b1771732cb","15989103915_p","gd0909","jd_7f3995efc0c66","jd_vLbZxUqSjQbu","jd_42c628b83512a","%E9%95%BF%E5%9F%8E%E4%BA%8C%E5%8F%B7","187057875_m","jd_5984665327845","wdIdDrlKOhRhVR","%E6%A2%81%E5%8A%B2%E4%B9%89","jd_79f7c1646f8be","15591393802_p","13670188908_p","weekcup","13421805174_p","jd_4801a6c6ccca9","cheche1161","jd_7448b82b4bcde","%E9%93%B6%E6%B5%B7%E6%95%8F","778674939_m","like123like1234","jd_5742eaf352355","18612100029_p"];
/**
 * 生成随机数字
 * @param {number} min 最小值（包含）
 * @param {number} max 最大值（不包含）
 */
function randomNumber(min = 0, max = 100) {
  return Math.min(Math.floor(min + Math.random() * (max - min)), max);
}
let friendPin = encodeURI(friendsArr[randomNumber(0, friendsArr.length)]) //强制为对方助力,可成为好友关系
const timestamp = new Date().getTime()
newUrl = url.replace(/friendPin=.*?$/i, "friendPin=" + friendPin).replace(/invitePin=.*?$/i, "invitePin=" + friendPin).replace(/inviteTimeStamp=.*?$/i, "inviteTimeStamp=" + timestamp + "&")
console.log(newUrl)
$done({ url: newUrl })
