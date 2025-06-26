//Header Sticky
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll >= 60) {
        $('.km_bottom_header').addClass("fixed");
      } else {
        $('.km_bottom_header').removeClass("fixed");
      }
    });



    // Hero Slider Start
    jQuery(document).ready(function ($) {
      //initialize swiper when document ready
      var mySwiper = new Swiper('.hero_banner', {
        loop: true,
        spaceBetween: 50,
        speed: 1000,
        //effect: 'fade',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: {
          delay: 50000,
          disableOnInteraction: false,
        }
      })

    });

    //counter start

    let count = document.querySelectorAll(".count")
    let arr = Array.from(count)



    arr.map(function (item) {
      let startnumber = 0

      function counterup() {
        startnumber++
        item.innerHTML = startnumber

        if (startnumber == item.dataset.number) {
          clearInterval(stop)
        }
      }

      let stop = setInterval(function () {
        counterup()
      }, 50)

    })

    //slider start


    $(document).ready(function () {
      // Assign some jquery elements we'll need
      var $swiper = $(".delivering_happiness_section_slide");
      var $bottomSlide = null; // Slide whose content gets 'extracted' and placed
      // into a fixed position for animation purposes
      var $bottomSlideContent = null; // Slide content that gets passed between the
      // panning slide stack and the position 'behind'
      // the stack, needed for correct animation style

      var mySwiper = new Swiper(".delivering_happiness_section_slide", {
        spaceBetween: 1,
        slidesPerView: 3,
        centeredSlides: true,
        roundLengths: true,
        loop: true,
        loopAdditionalSlides: 30,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    });




    // Brand Dealer Tab Start

// Cache the tabs wrapper
var tabs = document.querySelector('.tabs-buttons .swiper-wrapper');
var tabSlides = document.querySelectorAll('.tabs-buttons .swiper-slide');

// Initialize tab content swiper
var tabContent = new Swiper('.tabs-content', {
  on: {
    slideChangeStart: function(swiper) {
      // Remove previous active tab
      document.querySelector('.tabs-buttons .active-tab')?.classList.remove('active-tab');

      // Add active class to tab corresponding to the current content slide
      tabSlides[swiper.activeIndex]?.classList.add('active-tab');

      // Scroll tab buttons to the active one
      tabButtons.slideTo(swiper.activeIndex);
    }
  }
});

// Initialize tab buttons swiper
var tabButtons = new Swiper('.tabs-buttons', {
  slidesPerView: 'auto',
  freeMode: true,
  scrollbar: {
    el: '.swiper-scrollbar'
  },
  mousewheelControl: true
});

// Attach manual click event on each tab button
tabSlides.forEach(function(tab, index) {
  tab.addEventListener('click', function () {
    // Only change if not already active
    if (!this.classList.contains('active-tab')) {
      document.querySelector('.tabs-buttons .active-tab')?.classList.remove('active-tab');
      this.classList.add('active-tab');
      tabContent.slideTo(index);
    }
  });
});
