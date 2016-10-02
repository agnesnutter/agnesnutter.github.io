// ==UserScript==
// @name         Fix YT centering
// @namespace    timothymh
// @version      0.1
// @description  Hides the suggested videos sidebar and centers the content column.
// @author       Timothy
// @match        *://www.youtube.com/*
// @grant        none
// ==/UserScript==

var css = document.createElement("style");
css.type = "text/css";
css.innerHTML = "#watch7-sidebar {display: none !important;}" +
    "#watch7-content { margin: auto !important; float: none !important;}";

var playcss = document.createElement("style");
playcss.type = "text/css";
playcss.innerHTML = "#watch7-sidebar-contents {display: none !important;}";

if (window.location.href.indexOf("list") == -1) {
    document.body.appendChild(css);
} else {
    document.body.appendChild(playcss);
}
