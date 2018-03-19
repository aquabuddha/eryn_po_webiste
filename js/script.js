// --------Variable declorations--------
var mn = $(".main-nav");
var $window = $(window);
var mobile = $("#mobile-nav");


// --------Open Mobile Nav--------
function openNav() {
    document.getElementById("mobile-nav").style.width = "100%";
    //adds slide effect when opened
    document.getElementById("mobile-nav").classList.add("slide");
}

// --------Close Mobile Nav--------
function closeNav() {
    document.getElementById("mobile-nav").style.width = "0%";
}

// --------Check window width for Mobile Nav--------
// need to wait for document to finish loading before implimenting
$(document).ready(function() {
    // JQuery for Mobile Nav
    function checkWidth() {
        var windowsize = $window.width();
        //If window's width is more than 440px, then add .sidenav class to mobile-nav ID
        if (windowsize < 769 ) {
            mobile.width("0%");
            mobile.addClass("sidenav");
        }
        //If window's width is less than 440px, then remove .sidenav and .slide classes from mobile-nav ID
        else {
            mobile.removeClass("sidenav slide");
            mobile.width("100%");
        }
    };
    
    //Check width on load
    checkWidth();
    
    //Check width on resize
    $window.resize(checkWidth);
});
    

// -----JQuery Sticky Nav for non-mobile--------
$window.scroll(function() {
    //if window is scrolled 225px, then add class to main-nav
    if( $(this).scrollTop() > 225 ) {
        mn.addClass("main-nav-scrolled");
    } 
    //if window is not scrolled 225px, then remove class from main-nav
    else {
        mn.removeClass("main-nav-scrolled");
    } 
});

// Lightbox code
// Open the Modal
function openModal() {
  document.getElementById('myModal').style.display = "block";
  document.getElementById('navId').style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById('myModal').style.display = "none";
  document.getElementById('navId').style.display = "block";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
