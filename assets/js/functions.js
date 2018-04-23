function _mobileNavigation() {
    $(".navigation.-mobile").toggleClass("-on"), $(".navigation:not(.-mobile) li:last-child").css("z-index", 1e3)
}

function _stickyHeader() {
    var e = $(".header").outerHeight();
    $(".header.-sticky").length || $("#wrap").is(".-pg-home") || $(".header").before($(".header").clone().addClass("-sticky")), $(window).width() >= 1024 && !$("#wrap").is(".-pg-home") && $(window).scroll(function() {
        $(this).scrollTop() > e ? $(".header.-sticky").addClass("-stuck") : $(".header.-sticky").removeClass("-stuck")
    }), $(window).resize(function() {
        $(window).width() >= 1024 && !$(".header.-sticky").length && !$("#wrap").is(".-pg-home") ? $(".header").before($(".header").clone().addClass("-sticky")) : $(".header.-sticky").remove()
    })
}

function _hideMenuOnScroll() {
    $(window).scroll(function() {
        $(this).scrollTop() > 0 && ($(".navigation.-on").removeClass("-on"), $(".tcon-transform").removeClass("tcon-transform"))
    })
}

$(document).mouseup(function(e) {
    var o = $(".navigation.-mobile ul li");
    o.is(e.target) || 0 !== o.has(e.target).length || ($(".navigation:not(.-mobile) li:last-child").css("z-index", 1), $(".navigation.-on").removeClass("-on"), $(".tcon-transform").removeClass("tcon-transform"))
}), _hideMenuOnScroll(), _stickyHeader();