
(function ($) {
  "use strict";
  
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 400) {
      $("#sticky-header").removeClass("sticky");
      $('#back-top').fadeIn(500);
    } else {
      $("#sticky-header").addClass("sticky");
      $('#back-top').fadeIn(500);
    }
  });

  $(document).ready(function () {
    var menu = $('ul#navigation');
    if (menu.length) {
      menu.slicknav({
        prependTo: ".mobile_menu",
        closedSymbol: '+',
        openedSymbol: '-'
      });
    };

    $('.slider_active').owlCarousel({
      loop: true,
      margin: 0,
      items: 1,
      autoplay: true,
      nav: false,
      dots: true,
      autoplayHoverPause: true,
      autoplaySpeed: 800,
      responsive: {
        0: {items: 1},
        767: {items: 1},
        992: {items: 1}
      }
    });

    $('.textmonial_active').owlCarousel({
      loop: true,
      margin: 100,
      items: 1,
      autoplay: true,
      navText: ['<i class="Flaticon flaticon-left"></i>', '<i class="Flaticon flaticon-right"></i>'],
      nav: true,
      dots: false,
      autoplayHoverPause: true,
      autoplaySpeed: 800,
      responsive: {
        0: {items: 1, nav: false,},
        767: {items: 1, nav: true,},
        992: {items: 1}
      }
    });

    $('.about_active').owlCarousel({
      loop: true,
      margin: 0,
      items: 1,
      autoplay: true,
      navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
      nav: true,
      dots: false,
      autoplayHoverPause: true,
      autoplaySpeed: 800,
      responsive: {
        0: {items: 1, nav: false,},
        767: {items: 1, nav: false,},
        992: {items: 1}
      }
    });

    $('.testmonial_active').owlCarousel({
      loop: true,
      margin: 0,
      items: 1,
      autoplay: true,
      navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
      nav: true,
      dots: false,
      autoplayHoverPause: true,
      autoplaySpeed: 800,
      responsive: {
        0: {items: 1, dots: false, nav: false,},
        767: {items: 1, dots: false, nav: false,},
        992: {items: 1, nav: false},
        1200: {items: 1, nav: false},
        1500: {items: 1}
      }
    });

    $('.brand-active').owlCarousel({
      loop: true,
      margin: 30,
      items: 1,
      autoplay: true,
      nav: false,
      dots: false,
      autoplayHoverPause: true,
      autoplaySpeed: 800,
      responsive: {
        0: {items: 1, nav: false},
        767: {items: 4},
        992: {items: 7}
      }
    });

    $('.project-active').owlCarousel({
      loop: true,
      margin: 30,
      items: 1,
      navText: ['<i class="Flaticon flaticon-left-arrow"></i>', '<i class="Flaticon flaticon-right-arrow"></i>'],
      nav: true,
      dots: false,
      responsive: {
        0: {items: 1, nav: false},
        767: {items: 1, nav: false},
        992: {items: 2, nav: false},
        1200: {items: 1,},
        1501: {items: 2,}
      }
    });

    if (document.getElementById('default-select')) {
      $('select').niceSelect();
    }

    $('.details_active').owlCarousel({
      loop: true,
      margin: 0,
      items: 1,
      navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
      nav: true,
      dots: false,
      responsive: {
        0: {items: 1, nav: false},
        767: {items: 1, nav: false},
        992: {items: 1, nav: false},
        1200: {items: 1,}
      }
    });
  });
})(jQuery);
