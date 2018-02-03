var mn = $(".main-nav");

$(window).scroll(function() {
   if( $(this).scrollTop () > 250px ) {
    mn.addClass("main.nav.scrolled")
   } 
    else {
        mn.removeClass("main.nav.scrolled");
    } 
});