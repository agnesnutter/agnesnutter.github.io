// ==UserScript==
// @name         YouTube Sidebar Hider
// @namespace    agnesnutter
// @version      1.1
// @description  Hides the suggested videos sidebar and centers the content column.
// @author       Timothy
// @match        *://www.youtube.com/*
// @grant        none
// @homepage     https://agnesnutter.github.io/
// @updateURL    https://agnesnutter.github.io/ytsidebarhider.user.js
// @downloadURL  https://agnesnutter.github.io/ytsidebarhider.user.js
// ==/UserScript==

var css = document.createElement("style");
css.type = "text/css";
if (window.location.href.indexOf("list") == -1) {
    css.innerHTML = "#watch7-sidebar {display: none !important;}" +
    "#watch7-content { margin: auto !important; float: none !important;}";
} else {
    css.innerHTML = "#watch7-sidebar-contents {display: none !important;}";
}
document.body.appendChild(css);
