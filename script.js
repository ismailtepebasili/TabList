function openTabLondon() {
   document.getElementById("tab1-content").classList.remove("tabInactive");
   document.getElementById("tab2-content").classList.add("tabInactive");
   document.getElementById("tab3-content").classList.add("tabInactive");
}

function openTabParis() {
    document.getElementById("tab2-content").classList.remove("tabInactive");
    document.getElementById("tab1-content").classList.add("tabInactive");
    document.getElementById("tab3-content").classList.add("tabInactive");
}

function openTabTokyo() {
    document.getElementById("tab3-content").classList.remove("tabInactive");
    document.getElementById("tab1-content").classList.add("tabInactive");
    document.getElementById("tab2-content").classList.add("tabInactive");
}


