$(document).ready(function () {
    $("#p").toggle(
        function () { $("#p").css({ "background-color": "blue" }).text("logoute"); },
        function () { $("#p").css({ "background-color": "green" }).text("login"); }
        );
        
    $("#p").css({ "font-size": "40px", "background-color": "green","width":"140px" })
});