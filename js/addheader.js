var addHeader = function() {
    document.getElementsByClassName('mdl-layout')[0].innerHTML +=
    '<header class="mdl-layout__header">\
        <div class="mdl-layout__header-row">\
            <span class="mdl-layout-title"><a href="index.html"><img src="images/ange-logo.png" alt="Ange"></a></span>\
        </div>\
    </header>\
    <div class="mdl-layout__drawer">\
        <span class="mdl-layout-title">Ange</span>\
        <nav class="mdl-navigation">\
            <a class="mdl-navigation__link" href="index.html">Home</a>\
            <a class="mdl-navigation__link" href="about.html">About us</a>\
            <div class="drawer-separator"></div>\
            <span class="mdl-navigation__link mdl-color-text--cyan-400" href="">Stories</span>\
            <a class="mdl-navigation__link" href="business-intelligence.html">Business Intelligence</a>\
            <a class="mdl-navigation__link" href="analytics.html">Analytics</a>\
            <a class="mdl-navigation__link" href="software-development.html">Software Development</a>\
            <a class="mdl-navigation__link" href="process-improvement.html">Process Improvement</a>\
            <a class="mdl-navigation__link" href="linova.html">Network Optimization</a>\
            <a class="mdl-navigation__link" href="stowage.html">Stowage</a>\
        </nav>\
    </div>';
}