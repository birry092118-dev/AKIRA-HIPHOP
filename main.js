const swiper = new Swiper('.swiper',{
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
  $('#js-hamburger-menu, .navigation__link').on('click', function () {
    $('.navigation').slideToggle(500)
    $('.hamburger-menu').toggleClass('hamburger-menu--open')
  });
});

