// ==UserScript==
// @name         Guatemala
// @namespace    http://galileo.edu
// @version      2024-06-08
// @description  Show only groups from Guatemala
// @author       Luis Cu
// @match        https://score.icpcmexico.org/

// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var currentClass = document.getElementById("myscoretable");
    for (var i=1; i<999; i++) {
      modifyClassName(currentClass,true,"sitehide"+i);
    }
    modifyClassName(currentClass,false,"sitehide"+129);
    modifyClassName(currentClass,false,"sitehide"+127);
    modifyClassName(currentClass,false,"sitehide"+122);
    modifyClassName(currentClass,false,"sitehide"+121);

    /*  
        Fecha: Repechaje 5 octubre
        129 UNIS
        127 UGalileo
        122 URL (Quetzaltenango)
        121 URL
        Estos números cambian con cada fecha
    */

})();
