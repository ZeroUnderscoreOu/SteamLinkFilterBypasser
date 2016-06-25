// ==UserScript==
// @name        Steam Link Filter Bypasser
// @author      ZeroUnderscoreOu
// @version     1.0.1
// @icon        https://raw.githubusercontent.com/ZeroUnderscoreOu/SteamLinkFilterBypasser/master/Logo128.png
// @downloadURL https://raw.githubusercontent.com/ZeroUnderscoreOu/SteamLinkFilterBypasser/master/Greasemonkey/SteamLinkFilterBypasser.user.js
// @updateURL   https://raw.githubusercontent.com/ZeroUnderscoreOu/SteamLinkFilterBypasser/master/Greasemonkey/SteamLinkFilterBypasser.user.js
// @namespace   https://github.com/ZeroUnderscoreOu/
// @include     *://steamcommunity.com/linkfilter/?url=*
// @run-at      document-start
// @grant       none
// ==/UserScript==

document.location.href = document.location.search.match(/\?url=(.*)/)[1];