// ==UserScript==
// @name        Steam Link Filter Bypasser
// @author      ZeroUnderscoreOu
// @version     1.1.0
// @icon        https://raw.githubusercontent.com/ZeroUnderscoreOu/SteamLinkFilterBypasser/master/Logo128.png
// @namespace   https://github.com/ZeroUnderscoreOu/
// @include     *://steamcommunity.com/linkfilter/?url=*
// @run-at      document-start
// @grant       none
// ==/UserScript==

document.location.href = document.location.search.match(/\?url=(.*)/)[1] + document.location.hash; // preserving possible anchors