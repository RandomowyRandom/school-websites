'use strict'

// get all checkboxes with class "auto-uncheck"
var checkboxes = document.getElementsByClassName("auto-uncheck");

function uncheckAll(checkbox) {
    console.log("checkbox");
    for (var i = 0; i < checkboxes.length; i++) {
        if(checkboxes[i] !== checkbox) {
            checkboxes[i].checked = false;
        }
    }
}