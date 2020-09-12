/*
 * @ pwidth 设计稿的宽度
 * @ prem 你要1rem比多少px  我的是1rem比100px
 * */
(function (doc, win, pwidth, prem) {
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
})(document, window, 750, 200);