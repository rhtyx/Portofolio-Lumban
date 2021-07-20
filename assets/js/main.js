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
    })
    // Menu Button toggle
    if(media){
        $('.menu-btn').click(function () {
            $('.navbar .menu').toggleClass('active');
            $('.media1').toggleClass('change');
            $('.media1 i').toggleClass('active');
        })
    }
})