$(document).ready(function() {
    var galleryThumbs = new Swiper(".gallery-thumbs", {
        centeredSlides: true,
        centeredSlidesBounds: true,
        slidesPerView: 4,
        watchOverflow: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        direction: 'vertical'
      });
      
      var galleryMain = new Swiper(".gallery-main", {
        watchOverflow: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        preventInteractionOnTransition: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
        effect: 'fade',
          fadeEffect: {
          crossFade: true
        },
        breakpoints: {
          768: {
            thumbs: {
              swiper: galleryThumbs
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            pagination: false
          }
        }        
      });
      
      galleryMain.on('slideChangeTransitionStart', function() {
        galleryThumbs.slideTo(galleryMain.activeIndex);
      });
      
      galleryThumbs.on('transitionStart', function(){
        galleryMain.slideTo(galleryThumbs.activeIndex);
      });
    let list = $(".list-wrapper");
    $(".toggler").on("click", function() {
        if($(list).hasClass("show")) {
            $(this).addClass("collapsed");
            $(list).removeClass("show");
        } else {
            $(this).removeClass("collapsed");
            $(list).addClass("show");
        }        
    });
    $('.nav-item').on("click", function() {
        $(this).addClass("active");
        $(this).siblings(".nav-item").removeClass("active");
        $(".toggler").click();
    });
});
$(window).on("load", function() {
    AOS.init();
});