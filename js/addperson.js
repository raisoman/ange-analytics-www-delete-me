var addPerson = function(title, description, webprofile, phone, email, imageFile, targetDivId) {
    document.getElementById(targetDivId).innerHTML +=
    '<div class="mdl-cell mdl-cell--4-col mdl-card mdl-shadow--2dp is-relative">\
        <div class="portrait-container mdl-card__supporting-text"><img src="images/portraits/' + imageFile + '"></div>\
        <div class="mdl-card__supporting-text profile-text">\
            <p><strong>' + title + '</strong>, ' + description + '.</p>\
            <p>Phone: ' + phone + '</p>\
        </div>\
        <div class="mdl-card__supporting-text in-bottom">\
            <ul class="icons-row">\
                <li><a href="https://' + webprofile + '" target="_blank" class="mdl-color-text--grey-600"><i class="fa fa-linkedin-square fa-2x"></i></a></li>\
                <li><a href="mailto:' + email + '" class="mdl-color-text--grey-600"><i class="fa fa-envelope fa-2x"></i></a></li>\
            </ul>\
        </div>\
    </div>'
}
