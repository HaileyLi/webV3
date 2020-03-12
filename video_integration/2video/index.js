// DISPLAY WHILE VISIBLE
$(document).ready(function () {
    $(window).scroll(function () {
        $('video').each(function () {
            if ($(this).visible(true)) {
                $(this)[0].play();
            } else {
                $(this)[0].pause();
            }
        })
    });
});
