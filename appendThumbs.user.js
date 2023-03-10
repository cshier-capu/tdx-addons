// ==UserScript==
// @name         Add thumbnails
// @namespace    https://service.capilanou.ca/
// @version      0.3.6
// @description  Adds images next to View links in Attachment panel
// @author       Chris Shier
// @match        https://*/TDNext/Apps/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=capilanou.ca
// @grant        none
// @updateURL    https://github.com/cshier-capu/tdx-addons/raw/main/appendThumbs.user.js
// @downloadURL  https://github.com/cshier-capu/tdx-addons/raw/main/appendThumbs.user.js
// @run-at       document-end
// ==/UserScript==
(function() {
    'use strict';
    console.log('appendThumbs userscript loaded')
    function appendThumbs() {
        console.log('appendThumbs function fired')
        let view_links = document.querySelectorAll("a[title='View file']")
        for (let i = 0; i < view_links.length; i++) {
            let thumb = document.createElement('img');
            thumb.src = view_links[i].href;
            thumb.style.maxWidth = '300px'
            thumb.style.maxHeight = '300px'
            view_links[i].appendChild(thumb);
            console.dir(thumb)
        }
    }
    window.addEventListener('load', appendThumbs, false)
})();
