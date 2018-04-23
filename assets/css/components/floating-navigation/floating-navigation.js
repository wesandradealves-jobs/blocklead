

(function() {
    'use strict';
    function _floatingNavigation() {
        var s = $("[floating-navigation]"), // Base Selector
            o = s.children().not("[hidden]").length, // Qt of sections
            hdr = $(".header").outerHeight(), 
            elementTemplate, // element template declaring
            titles = [], // titles array of the elements group wich will be navigated
            count = 0, // counting to declaring the indexes of the floating navigation
            tmp,
            template = "<nav class='navigation floating-navigation'><ul></ul></nav>"; // basic structure of the floating navigation
            if(o>=1){
                $("body").append(template);
                for(var i = 0; i < o; i++) { 
                    count+=1; // counting for declaring the indexes
                    titles.push($("[floating-navigation] > *").eq(i).find(".title").text()); // array containing the titles of the sections
                    elementTemplate = "<li>" + "<a href='javascript:void(0)' title='"+titles[i]+"'>" + count + "</a>" + '</li>'; // element templat of the floating navigation
                    $(".floating-navigation").find("ul").append(elementTemplate); // appending the elements of the floating navigation
                }
                function _floatScroll(o,s) {
                    $(window).scroll(function() {
                        var t = $(this).scrollTop();
                        for(var i = 0; i < o; i++) { 
                            $(s).children().each(function() {
                                if($(window).width() >= 1024){
                                    (t >= $(this).offset().top - hdr - 70) ? $(this).addClass("-active") : $(this).removeClass("-active");  
                                } else {
                                    (t >= $(this).offset().top - 40) ? $(this).addClass("-active") : $(this).removeClass("-active");         
                                }                                
                            }); 
                            $(s).children().eq(i).is(".-active") ? ($(".floating-navigation").find("ul").children().removeClass("-active"), $(".floating-navigation").find("ul").children().eq(i).addClass("-active")) : $(".floating-navigation").find("ul").children().eq(i).removeClass("-active")
                        }
                    })     
                    function _autoScroll(i){
                        $(window).resize(function() {
                            if($(window).width() >= 1024){
                                $('html, body').stop(true, false).animate({
                                    scrollTop: $(s).children().eq(i).offset().top - hdr - 60
                                }, 500);  
                            } else {
                                $('html, body').stop(true, false).animate({
                                    scrollTop: $(s).children().eq(i).offset().top - 30
                                }, 500);           
                            }                         
                        });  
                    }                     
                    $(".floating-navigation").find("a").click(function() {
                            var i = $(this).parent().index();
                            _autoScroll(i);
                            if($(window).width() >= 1024){
                                $('html, body').stop(true, false).animate({
                                    scrollTop: $(s).children().eq(i).offset().top - hdr - 60
                                }, 500);  
                            } else {
                                $('html, body').stop(true, false).animate({
                                    scrollTop: $(s).children().eq(i).offset().top - 30
                                }, 500);           
                            }
                    });        
                    function _autoHeight(){
                        var height = $(".floating-navigation").outerHeight();
                        if($(window).width() >= 1024){
                            $(".floating-navigation").css("margin-top",-height/2 + hdr/2);     
                        } else {
                            $(".floating-navigation").css("margin-top",-height/2);     
                        }                                          
                    }                   
                    _autoHeight();
                    $(window).resize(function() {
                        _autoHeight();
                    });                    
                }                
                _floatScroll(o,s);
            }
    }
    _floatingNavigation()
})();