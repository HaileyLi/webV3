
$(document).ready(function () {
    $('video').each(function () {
        $(this).hover(function () {
            $(this)[0].play()
        }, function () {
            $(this)[0].pause()
        });
    })

});