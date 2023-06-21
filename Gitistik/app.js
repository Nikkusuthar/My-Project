let dropdown = document.querySelector(".drop-down")
dropdown.addEventListener('click', () => {
 dropdown.classList.toggle('active')
} );

$('.lip-slide-one').slick({
    autoplay: true,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,

    responsive: [
        {
            breakpoint: 767,
            settings: {
                arrows: false,
            }
        }
    ]
});

$('.lips-slider').slick({
    autoplaySpeed: 1000,
    autoplay: true,
    Infinite: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToscroll: 1,
    centerPadding: "0",
    responsive: [
        {
            breakpoint: 995,
            settings: {
                arrows: true,
                centerMode: false,
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 767,
            settings: {
                arrows: false,
                dots: true,
                centerMode: true,
                slidesToShow: 1
            }
        }
    ]
});
