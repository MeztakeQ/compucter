$(function(){
    function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
          total: t,
          days: days,
          hours: hours,
          minutes: minutes,
          seconds: seconds
        };
      }
       
      function initializeClock(id, endtime) {
        var clock = document.getElementById(id);
        var daysSpan = clock.querySelector(".days");
        var hoursSpan = clock.querySelector(".hours");
        var minutesSpan = clock.querySelector(".minutes");
        var secondsSpan = clock.querySelector(".seconds");
       
        function updateClock() {
          var t = getTimeRemaining(endtime);
       
          if (t.total <= 0) {
            clearInterval(timeinterval);
            var deadline = new Date(Date.parse(new Date()) + 5 * 1000);
            initializeClock('countdown', deadline);
          }
       
          daysSpan.innerHTML = t.days;
          hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
          minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
          secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);
        }
       
        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
      }
       
      var deadline = new Date(Date.parse(new Date()) + 18 * 24 * 60 * 60 * 1000);
      initializeClock("countdown", deadline);


      jQuery(document).ready(function(){
        jQuery('.course__rank').each(function(){
          jQuery(this).find('.course__rank-bar').animate({
            width:jQuery(this).attr('data-percent')
          },6000);
        });
      });

      $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.header__top').addClass('fixed');
        } else {
            $('.header__top').removeClass('fixed');
        }
        if($(window).width()<904){
 
          $('.header__top').removeClass('fixed');

      }
  });


  var items = document.querySelectorAll(" .programm__timeline .programm__item");

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }


  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);

  new WOW().init();
  $('.js-menu').on('click', () => {
    $('.js-menu').toggleClass('active');
    $('.js-nav').toggleClass('open');
    $('.js-nav__list').toggleClass('show');
  });




 
    $('.company__line').slick({
    
     
      responsive: [
      {
        breakpoint: 2048,
        settings: "unslick"
    },
    {
      breakpoint: 751,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: false,
        dots: true,
        arrows: false
      }
    },
    {
      breakpoint: 711,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        arrows: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
      }
    }
   
  ]
  });


  $('.teacher__down ').slick({
    responsive: [
    {
      breakpoint: 2048,
      settings: "unslick"
  },
  {
    breakpoint: 751,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      infinite: false,
      dots: true,
      arrows: false
    }
  },
 
  {
    breakpoint: 507,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false
    }
  } 
]


});

$('.parallax-window').parallax({
 
});
  

});



