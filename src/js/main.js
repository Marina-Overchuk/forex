//wow-animate

new WOW().init();

$(document).ready( function() {


 //header-burger
  
 $('.header__burger').on('click', function () {
  
  if($(this).hasClass('active')){
    $(this).toggleClass("active");
    $('body').css('overflow', 'auto');
    $('header').addClass('header_right');
  }
  
  else{
    $('header').removeClass('header_right')
    $(this).toggleClass("active");
    $('body').css('overflow', 'hidden');
  }
  
  });


 // header-scroll

  let scrollChange = 50;
  
  function headerScroll(params) {
    
    let scroll = $(window).scrollTop();
    
    if (scroll >= scrollChange) {
      $('header').addClass('header_scroll');

    } else {
      $('header').removeClass('header_scroll');

    }
  }

  $(document).on('scroll', ()=>{
    headerScroll();  
  })

  headerScroll();
  

///Services-Slider

const partnersSlider = new Swiper('.partners-slider', {

  slidesPerView: 3,
  speed: 800,
  spaceBetween: 30,
  loop: true,
  // autoplay: true,
 
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
       
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 40
    }
  },
  pagination: {
    el: '.partners__pagination',
    type: 'bullets',
    clickable: true,
  },
});


})


