"use strict"

const dark_mode_mql = window.matchMedia("(prefers-color-scheme: dark)");
const icon_name = "new_page";
const icon_name_white = "new_page_white";

function localize() {
    document.documentElement.setAttribute("lang", chrome.i18n.getUILanguage());
    document.title = chrome.i18n.getMessage("newTabTitle");
}

function switchFavicon(mql) {
    const link = document.getElementById("favicon");
    const dark = mql.matches;

    if (dark) {
        link.href = link.href.replace(icon_name, icon_name_white);
    } else {
        link.href = link.href.replace(icon_name_white, icon_name);
    }
}

switchFavicon(dark_mode_mql);
localize();

dark_mode_mql.addEventListener("change", switchFavicon);
window.addEventListener("languagechange", localize);