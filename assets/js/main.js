$(document).ready(function () {

    // Show up navbar
    const media = $('#media').children('div').hasClass('media1');
    $(window).scroll(function () {
        if(this.scrollY > 20){
            $('.navbar').addClass('sticky');
            $('.menu-btn').addClass('sticky');
        }else{
            $('.navbar').removeClass('sticky');
            $('.menu-btn').removeClass('sticky');
        }
    });
    // Menu Button toggle
    if(media){
        $('.menu-btn').click(function () {
            $('.navbar .menu').toggleClass('active');
            $('.media1').toggleClass('change');
            $('.media1 i').toggleClass('active');
            
            const active = $('.navbar .menu').hasClass('active')
            if (active){
                // Menu Button Item Toggle
                $('.menu .a').click(function () {
                    $('.navbar .menu').removeClass('active');
                    $('.media1').removeClass('change');
                    $('.media1 i').removeClass('active');
                })
            }
        })   
    };
    // Card button
    $('.hand').click(function () {
        window.location = $(this).find("a").attr("href");
        return false;
    })
    $('.face-mask').click(function () {
        window.location = $(this).find("a").attr("href");
        return false;
    })
    $('.bookshelf').click(function () {
        window.location = $(this).find("a").attr("href");
        return false;
    })

    // Typing Animation
    let typed1 = new Typed(".typing1",{
        strings: ["Developer", "Student", "Engineer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })
    let typed2 = new Typed(".typing2",{
        strings: ["Engineer", "Developer", "Student"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    // Owl Carousel
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            730:{
                items: 2,
                nav: false
            },
            908:{
                items: 3,
                nav: false
            }
        }
    })
})