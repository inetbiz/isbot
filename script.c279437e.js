parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"zUFA":[function(require,module,exports) {
module.exports=[" Daum/"," DeuSu/"," splash ","(^|\\s)Site","@[a-z]","^&lt;","^12345","^<","^\\[","^Ace Explorer","^acoon","^ActiveBookmark","^ActiveRefresh","^ActiveWorlds","^Ad Muncher","^AHC/","^Apache","^ApplicationHealthService","^asafaweb\\.com","^asynchttp","^AvsDeviceSdk/","^axios/","^Azureus","^biglotron","^Blackboard Safeassign","^BlockNote.Net","^Browsershots","^btwebclient/","^CakePHP","^Camo Asset Proxy","^ClamAV[\\s/]","^Client","^cobweb/","^coccoc","^Custom$","^DAP ","^DavClnt","^Discourse","^Dispatch/\\d","^Disqus/","^DuckDuckGo","^eCatch/","^Evernote Clip Resolver","^facebook","^Faraday","^fasthttp$","^FDM \\d","^FDM/\\d","^FlashGet","^Friendica","^GetRight/","^GigablastOpenSource","^Go \\d.\\d package http","^Go-http-client","^googal","^Goose","^GreenBrowser","^GuzzleHttp","^Hatena","^Hexometer","^Hobbit","^Hotzonu","^http","^HWCDN/","^ICE Browser","^infoX-WISG","^INGRID/\\d","^Integrity/","^java","^Jeode/","^JetBrains","^Jetty/","^Jigsaw","^kube-probe","^libtorrent","^libwww","^linkdex","^lua-resty-http","^lwp-","^LWP::Simple","^MailChimp\\.com$","^MetaURI","^Microsoft BITS","^Microsoft Data","^Microsoft Office Existence","^Microsoft Office Protocol Discovery","^Microsoft Windows Network Diagnostics","^Microsoft-CryptoAPI","^Microsoft-WebDAV-MiniRedir","^Monit","^MovableType","^Mozilla/\\d\\.\\d \\(compatible;?\\)$","^muCommander","^My browser$","^NaverMailApp","^NetSurf","^NING","^node-superagent","^NokiaC3-00/5\\.0","^NoteTextView","^Nuzzel","^Offline Explorer","^okhttp","^OSSProxy","^panscient","^Pcore-HTTP","^photon/","^PHP","^Postman","^postrank","^python","^RamblerMail","^raynette_httprequest","^Ruby$","^Scrapy","^selenium/","^set:","^Shareaza","^ShortLinkTranslate","^SignalR","^Sistrix","^snap$","^Snapchat","^Space Bison","^Spring ","^Sprinklr","^SVN","^swcd ","^T-Online Browser","^Taringa","^Test Certificate Info","^The Knowledge AI","^Thinklab","^thumb","^Traackr.com","^Transmission","^tumblr/","^Ubuntu APT-HTTP","^UCmore","^Upflow/","^USER_AGENT","^utorrent/","^vBulletin","^venus/fedoraplanet","^W3C","^WebCopier","^wget","^whatsapp","^WhatWeb","^WWW-Mechanize","^Xenu Link Sleuth","^Xymon","^Yahoo","^Yandex","^Zabbix","^ZDM/\\d","^Zend_Http_Client","^ZmEu$","adbeat\\.com","amiga","AppInsights","archive","Ask Jeeves/Teoma","Bluecoat DRTR","BorderManager","bot","BrowseX","burpcollaborator","capture","Catchpoint","check","Chrome-Lighthouse","chromeframe","cloud","Commons-HttpClient","crawl","daemon","DareBoost","Datanyze","dataprovider","DejaClick","DMBrowser","download","Email","feed","fetch","finder","FirePHP","FreeSafeIP","fuck","ghost","GomezAgent","google","HeadlessChrome/","https?:","httrack","HubSpot Marketing Grader","Hydra","ibisBrowser","images","index","ips-agent","java/","JavaFX","JavaOs","Jorgee","library","mail\\.ru/","news","nutch","OffByOne","Optimize","org\\.eclipse\\.ui\\.ide\\.workbench","outbrain","parse","perl","phantom","Pingdom","Powermarks","preview","PTST[/ ]\\d","reader","Rigor","rss","scan","scrape","search","server","Sogou","SpeedMode","spider","StatusCake","stumbleupon\\.com","SuperCleaner","synapse","synthetic","toolbar","tracemyfile","TrendsmapResolver","Twingly Recon","url","valid","WAPCHOI","Wappalyzer","Webglance","webkit2png","WinHTTP","WordPress","zgrab"];
},{}],"S3PC":[function(require,module,exports) {
var e,t=require("./list.json");function n(){e=new RegExp("("+t.join("|")+")","i")}function o(e){return-1===t.indexOf(e)}module.exports=function(t){return e.test(t)},module.exports.find=function(t){var n=t.match(e);return n&&n[0]},module.exports.extend=function(e){t=t.concat(e.filter(o)),n()},module.exports.exclude=function(e){for(var o=e.length;o--;){var r=t.lastIndexOf(e[o]);r>-1&&t.splice(r,1)}n()};try{new RegExp("(?<! cu)bot").test("dangerbot"),t.splice(t.lastIndexOf("bot"),1),t.push("(?<! cu)bot"),t.splice(t.lastIndexOf("search"),1),t.push("(?<! (ya|yandex))search")}catch(r){}n();
},{"./list.json":"zUFA"}],"mpVp":[function(require,module,exports) {
"use strict";var e=t(require(".."));function t(e){return e&&e.__esModule?e:{default:e}}!function(){var t,n=document.querySelector("textarea"),r=document.querySelector("output"),i=window.location.search.replace(/\?ua=(.*)$/,"$1");function o(e){var n=e.target.value;clearTimeout(t),t=setTimeout(a,200,n)}function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.innerHTML;if(""!==(t=t.trim())){var i=(0,e.default)(t);r.innerHTML=[i?"I think so, yes":"I don't think so, no",i?"The pattern that I recognise is <kbd>".concat(e.default.find(t),"</kbd>"):"I could not find a pattern I recognise"].join("\n"),r.className="",setTimeout(function(){r.className="highlight"},100)}else r.innerHTML="Insert user agent string in the text box"}n.innerHTML=i?decodeURIComponent(i):navigator.userAgent,n.addEventListener("keyup",o),n.addEventListener("paste",o),n.addEventListener("focus",function(){return n.select()}),a()}();
},{"..":"S3PC"}]},{},["mpVp"], null)
//# sourceMappingURL=script.c279437e.js.map