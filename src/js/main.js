//wow-animate

new WOW().init();

$(document).ready(function () {


  //header-burger

  $('.header__burger').on('click', function () {

    if ($(this).hasClass('active')) {
      $(this).toggleClass("active");
      $('body').css('overflow', 'auto');
      $('header').addClass('header_right');
    } else {
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

  $(document).on('scroll', () => {
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
  $(function () {

    $('.tabs__caption').on('click', 'li:not(.active)', function () {
      $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });

  });

  //close broker-block

  $('.broker__block .broker-block__close').on('click', function () {
    $(this).parent().hide();
    const ind = $('.broker-block__close').index(this);
    $('.broker-comparison-row__wrapper .broker-comparison__row').each((i, e) => {
      const $ths = $(e)
      $ths.find('p').eq(ind).hide()
    })

  });

//calculate

let select = document.getElementById('selectFee');
let sharest;
select.addEventListener('change', function(){  
  sharest = this.value;
  document.querySelector('.stock__price').innerHTML = Number(sharest).toFixed(2);
});

$('.calculate').on('click', function () {

  let val = document.getElementById('amount').value;
  
  let number = document.getElementById('number__shares')
  .innerHTML = Math.round(+val / sharest);

  let netInvestment = document.getElementById('net__investment');
  netInvestment.innerHTML = (Number(Math.round(number * sharest)).toFixed(2));

  let feeConst = Number(document.getElementById('fee__const').innerText);

  document.getElementById('fee__1').innerHTML = (Number(netInvestment.innerText) * feeConst) / 100;

});


//popover
$(function() {
	$('[data-toggle="popover"]').popover()
})

})