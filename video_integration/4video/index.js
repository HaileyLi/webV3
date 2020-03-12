
$(document).ready(function () {
    $('video').each(function () {
        $(this).hover(function () {
            console.log("hi")
        }, function () {
            $(this)[0].removeClass("module")
        });
    })

});