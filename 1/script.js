function blink_text() {
    $("p").css({"margin":"300px 42%" , "width":"200px"})
    $('.blink').fadeOut(500);
    $('.blink').fadeIn(500);
}
setInterval(blink_text, 1000);
