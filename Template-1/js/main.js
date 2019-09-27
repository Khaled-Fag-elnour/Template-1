
new WOW().init();

$(document).ready(function() {
    
    $(".loading").delay(1000).fadeOut(700, function() {
        $("body").css('overflow', 'auto')
    });
    
})

$(window).scroll(function() {
    let navbarHeight = $(".navbar").outerHeight(),
        scrollTop = $(window).scrollTop();
    
    if (scrollTop > navbarHeight + 50) {
        
        $(".navbar").css({"backgroundColor": "#f9f9f9", border: "none"});
        $(".navbar .navbar-brand img").attr("src", "images/logo-dark.png")
        $(".navbar .nav-link").css("color", "#000")
    } else {
        
         $(".navbar").css('backgroundColor', 'transparent')
        $(".navbar .navbar-brand img").attr("src", "images/logo-light.png")
        $(".navbar .nav-link").css("color", "#FFF")
    }
    
    if (scrollTop > 1200) {
        
        $('#upBtn').fadeIn(500)
    } else {
        
        $('#upBtn').fadeOut(500);
    }
})

$('#upBtn').click(function() {
    
    $('body', 'html').animate({scrollTop: 0}, 1000)
})

$('.navbar a').click(function() {
    
    let href = $(this).attr('href'),
        linkOffset = $(href).offset().top;
    
    $('body').animate({scrollTop: linkOffset}, 500)
})















