var mn = $(".main-nav");


$(window).scroll(function() {
    if( $(this).scrollTop() > 225 ) {
        mn.addClass("main-nav-scrolled");
    } 
    else {
        mn.removeClass("main-nav-scrolled");
    } 
});

