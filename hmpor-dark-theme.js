// ==UserScript==
// @name         HPMOR Dark Theme
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://www.hpmor.com/chapter/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.getElementById('invertable').style['background-color'] = 'rgb(42,47,52)';
})();
