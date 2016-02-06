$(function () {

  "use strict";

  var topoffset = 50; //variable for menu height
  var wheight = $(window).height(); //get the height of window browser


  //Activate scrollspy
  $('body').scrollspy({
    target: '.navbar',
    offset: 50
  });

  // Add smooth scrolling to all links inside a navbar
  $("#myNavbar a").on('click', function (event) {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash (#)
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area (the speed of the animation)
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function () {

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  });

  //Use smooth scrolling when clicking on navigation
  // from https://gist.github.com/planetoftheweb/6729f849d7db31061b2e

  $('.navbar a[href*=#]:not([href=#])').click(function () {
    if (location.pathname.replace(/^\//, '') ===
      this.pathname.replace(/^\//, '') &&
      location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - topoffset + 2
        }, 500);
        return false;
      } //target.length
    } //click function
  }); //smooth scrolling


  // adjust height of fullheight elemements on window resize
  $(document).ready(function () {
    var wheight = $(window).height(); //get the height of window browser
    $('.fullheight').css('height', wheight); // set to window target
  });

  $(window).resize(function () {
    var wheight = $(window).height(); //get the height of window browser
    $('.fullheight').css('height', wheight); // set to window target
  });

  // owl carousel
  $(document).ready(function () {
    $("#gal").owlCarousel({
      items: 4,
      loop: true,
      margin: 10,
      autoHeight: true,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      responsiveClass: true,
      responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:false,
            loop:false
        }
      }
    });
  });
  
  $(document).ready(function () {
    $("#cLogo").owlCarousel({
      items: 4,
      loop: true,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      responsiveClass: true,
      responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:false,
            loop:false
        }
      }
    });
  });



});