$(function(){
    console.log(1234);
    $('#slide_banner_Carousel').carousel({
        interval: 1000
    });

    $('.carousel-control.right').trigger('click');
});