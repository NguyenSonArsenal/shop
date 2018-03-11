$(document).ready(function(){
    $('.category_recommened_search__list').slick({
        slidesToShow: 5,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        variableWidth:true,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});
