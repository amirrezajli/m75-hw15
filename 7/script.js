$(document).ready(function () {
    $("button").click(function () {
        if ($("div").height() === 0) {

            $("div").animate({
                height: '100px',
            });
            $(this).text("close")
        } else {
            $("div").animate({
                height: 0,
            });
            $(this).text("open")
        }
    });
    $("button").css({"width":"100px"})
    $("div").css({"background":"#98bf21","height":"0px","width":"100px","position":"absolute"})
});

