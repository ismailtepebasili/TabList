function openTabLondon() {
   document.getElementById("tab1-content").classList.remove("tabInactive");
   document.getElementById("tab2-content").classList.add("tabInactive");
   document.getElementById("tab3-content").classList.add("tabInactive");
   document.getElementById("tab1-button").classList.add("btnColor");
   document.getElementById("tab2-button").classList.remove("btnColor");
   document.getElementById("tab3-button").classList.remove("btnColor");
}

function openTabParis() {
    document.getElementById("tab2-content").classList.remove("tabInactive");
    document.getElementById("tab1-content").classList.add("tabInactive");
    document.getElementById("tab3-content").classList.add("tabInactive");
    document.getElementById("tab2-button").classList.add("btnColor");
    document.getElementById("tab1-button").classList.remove("btnColor");
    document.getElementById("tab3-button").classList.remove("btnColor");
}

function openTabTokyo() {
    document.getElementById("tab3-content").classList.remove("tabInactive");
    document.getElementById("tab1-content").classList.add("tabInactive");
    document.getElementById("tab2-content").classList.add("tabInactive");
    document.getElementById("tab3-button").classList.add("btnColor");
    document.getElementById("tab1-button").classList.remove("btnColor");
    document.getElementById("tab2-button").classList.remove("btnColor");
}



