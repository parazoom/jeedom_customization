// v=d&p=plan&plan_id=1

//$.getScript( "ADMIN.js", function( data, textStatus, jqxhr ) {
//    console.log("ADMIN.js is loaded"); // Success
//});



function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}

console.log(getUrlVars()["p"]);