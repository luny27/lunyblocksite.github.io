$(document).ready(function(){
$('.slider').slick({
  infinite: false,
  speed: 300,
  slidesToShow: 2,
  autoplay:true,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings objec
  ]
});
				
  });

  $('.menu-btn').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('menu-btn_active');
    $('.menu-nav').toggleClass('menu-nav_active');
    $('body').toggleClass('overflow_hidden');
  });

  $('.menu-nav a').on('click', function(e) {
    e.preventDefault();
    $('.menu-btn').toggleClass('menu-btn_active');
    $('.menu-nav').toggleClass('menu-nav_active');
    $('body').toggleClass('overflow_hidden');
    
    var target = $(this).attr('href');
    var top = $(target).offset().top;
    $('html, body').animate({scrollTop : top}, 1500);
    console.log(top);
  });


    

  