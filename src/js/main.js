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

  slidesPerView: 1,
  speed: 800,
  spaceBetween: 30,
  loop: true,
  // autoplay: true,
 
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 30
    },   
    // when window width is >= 991px
    991: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  },
  pagination: {
    el: '.partners__pagination',
    type: 'bullets',
    clickable: true,
  },
  navigation: {
    nextEl: '.home-button-next',
    prevEl: '.home-button-prev',
  }
});


  //tabs
  $(function() {
    
    $('.tabs__caption').on('click', 'li:not(.active)', function() {
      $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });
    
  });
  
 //close broker-block

  $('.broker-block__close').on('click', function() {
    $(this).parent().hide();
    // $(p).filter(".broker-comparison__row").eq($(this).index()).hide();
    $('p').eq(2).hide()

  });

})


