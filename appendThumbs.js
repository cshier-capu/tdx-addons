// ==UserScript==
// @name         Add thumbnails
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Adds images next to View links in Attachment panel
// @author       You
// @match        https://service.capilanou.ca/TDNext/Apps/72/Tickets/TicketDet?TicketID=*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=capilanou.ca
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/cshier-capu/tdx-addons/main/appendThumbs.js
// ==/UserScript==
(function() {
    'use strict';

    function appendThumbs() {
        let view_links = document.querySelectorAll("a[title='View file']")
        for (let i = 0; i < view_links.length; i++) {
            let thumb = document.createElement('img');
            thumb.src = view_links[i].href;
            thumb.maxWidth = thumb.maxHeight = 300
            view_links[i].appendChild(thumb);
        }
    }
    window.addEventListener('load', appendThumbs, false)
})();
