$(document).ready(function () {
    $('.your-class').slick({
        arrows: true,
        prevArrow: "<button type='button' class='slick-btn slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-btn slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});