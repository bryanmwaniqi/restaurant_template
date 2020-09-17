$(function(){
    $(window).scroll(function(){
        $('nav.navbar').toggleClass('scrolled', $(this).scrollTop() > 200)
    });
        $(".owl-carousel").owlCarousel({
        margin:10,
        loop: true,
        stagePadding:10,
        items:2,
        center:true,
        responsive:{
            0:{
                items:1
            },
            900:{
                items:2
            }
        }
    });
});