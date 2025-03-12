import { useEffect, useState } from "react";
// import Category from "../Components/Category";
// import ShoesCard from "../Components/ShoesCard";
import Sliders from "../Components/Sliders.jsx";
import Slider from "react-slick";

// Import slick-carousel styles (required for proper styling)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { detailpic, logoBrand, productCart } from "../Constants";
import { CustomNextArrow, CustomPrevArrow } from "../Components/Arrow.jsx";
import ShoesCard from "../Components/ShoesCard.jsx";
import Sliders2 from "../Components/Sliders2.jsx";
import DiscountSlider from "../Components/DiscountSlider.jsx";

const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1400, // Tablets & small laptops
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          // dots: true,
          arrows: true, // Optional: hide arrows on small screens
        }
      },
      {
        breakpoint: 1024, // Tablets & small laptops
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          // dots: true,
          arrows: true, // Optional: hide arrows on small screens
        }
      },
      {
        breakpoint: 768, // Small tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          // dots: true,
          arrows: true
        }
      },
      {
        breakpoint: 600, // Large phones
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          // dots: true,
          arrows: true
        }
      }
    ]
  };

  return (
    <main className="flex flex-col flex-1 ">
      <section>
        <Sliders />
      </section>
      <div className="flex flex-col mt-8">
        <h2 className="text-xl font-bold ">New Arrivals</h2>
        <div className="slider-container w-full max-w-full  overflow-hidden relative">
          <section className="py-4 ">
            <Slider key={windowWidth} {...settings}>
              {productCart.map((element, index) => (
                <div key={index} className="py-3">
                  <ShoesCard productId={element.id} productName={element.name} productPrice={element.price} productImage={element.pic} />
                </div>
              ))}
            </Slider>
          </section>
        </div>
      </div>
      <section >
        <Sliders2 />
      </section>
      <div className="flex flex-col mt-8">
        <h2 className="text-xl font-bold ">Trending Sneaker</h2>
        <div className="slider-container w-full max-w-full  overflow-hidden relative">
          <section className="py-4 ">
            <Slider key={windowWidth} {...settings}>
              {productCart.map((element) => (
                <div key={element.id} className="py-3">
                  <ShoesCard productId={element.id} productName={element.name} productPrice={element.price} productImage={element.pic} />
                </div>
              ))}
            </Slider>
          </section>
        </div>
      </div>
      <section className="pt-5">
        <h1 className="text-xl font-bold ">Our Trending Brand</h1>
        <div className="slider-container w-full max-w-full py-10  overflow-hidden relative">
          <Slider key={windowWidth} {...settings}>
            {logoBrand.map((element, index) => (
              <div key={index} className="py-14 px-2 hover:scale-105 transition-transform duration-300 ">
                <div className="flex justify-center items-center px-5 py-10 rounded-xl bg-gray-100"><img src={element} alt="" /></div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </main>
  );
};

export default Home;
