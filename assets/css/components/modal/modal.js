! function() {
    "use strict";
    $("[video-button]").each(function() {
        var a = $(this).attr("video-data"),
            t = '<button data-video-id="' + a + '" class="play-button"><span class="play-button-inner"><i class="fa fa-play"></i></span></button>';
        "" != a && $(this).append(t), $(this).css("display", "block");      
    });
    // $(".play-button").click(function() {
    //     var temp = $(this).attr("data-href").split("https://vimeo.com/")[1];
    //     $("body").append('<div data-vimeo-url="https://vimeo.com/'+temp+'" id="playertwo"></div>');
    // });      
}();