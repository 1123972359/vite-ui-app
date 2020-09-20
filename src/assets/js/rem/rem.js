/*
 * @ pwidth 设计稿的宽度
 * @ prem 你要1rem比多少px  我的是1rem比100px
 * */


let pwidth = 750;
let prem = 200;
let clientWidth = document.documentElement.clientWidth;
pwidth = clientWidth > 500 ? 1920 : 750;
prem = clientWidth > 500 ? 128 : 200;

const recRem = (function (doc, win, pwidth, prem) {
    var docEl = doc.documentElement,
        resizeEvt = "orientationchange" in window ? "orientationchange" : "resize",
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = (clientWidth / pwidth) * prem + "px";
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener("DOMContentLoaded", recalc, false);
    recalc();
})(document, window, pwidth, prem);