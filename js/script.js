$(function(){
    $(window).scroll(function(){
        $('nav.navbar').toggleClass('scrolled', $(this).scrollTop() > 200)
    });
});