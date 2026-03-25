const swiper = new Swiper('.swiper',{
    centeredSlides: true,
    loop: true,
    pagination: { el: '.swiper-pagination'},
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'},

});

$(function(){
    $(window).scroll(function(){
        $(".fade-in").each(function(){
            const elemPos = $(this).offset().top;
            const scroll = $(window).scrollTop();
            const windowHeight = $(window).height();
            if(scroll > elemPos - windowHeight){
                $(this).addClass("scroll-in");
            }
        });
    });
    jQuery(window).scroll()
});

$(function () {
  $('#js-hamburger-menu, .navigation').on('click', function () {
    $('.navigation').slideToggle(500)
    $('.hamburger-menu').toggleClass('hamburger-menu--open')
  });
});

$(function() {
  let index = 0;
  const slides = $(".topmove");

  slides.hide();
  slides.eq(index).show();

  setInterval(function() {
    slides.eq(index).fadeOut(500);

    index = (index + 1) % slides.length;

    slides.eq(index).fadeIn(500);
  }, 2000);
});

