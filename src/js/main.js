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
  




})


