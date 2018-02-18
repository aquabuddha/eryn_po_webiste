
var mn = $(".main-nav");


// Open mobile nav
function openNav() {
    document.getElementById("mobile-nav").style.width = "100%";
}

// Close mobile nav
function closeNav() {
    document.getElementById("mobile-nav").style.width = "0%";
}

// JQuery Sticky Nav for non-mobile
$(window).scroll(function() {
    if( $(this).scrollTop() > 225 ) {
        mn.addClass("main-nav-scrolled");
    } 
    else {
        mn.removeClass("main-nav-scrolled");
    } 
});


