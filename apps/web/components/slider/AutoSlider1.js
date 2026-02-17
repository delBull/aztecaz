import Slider from "react-slick";

const AutoSlider1 = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 10000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        vertical: true,
        arrows: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className="autoSlider-container">
            <Slider {...settings}>
                <div>
                    <img src="/assets/images/card1.png" alt="" />
                </div>
                <div>
                    <img src="/assets/images/card2.png" alt="" />
                </div>
            </Slider>
        </div>
    );
};

export default AutoSlider1;
