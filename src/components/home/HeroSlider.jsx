import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const HeroSlider = () => {
  const slides = [
    {
      title: "Share Your Knowledge",
      description:
        "Join our community of passionate learners and share your insights.",
      image:
        "https://images.pexels.com/photos/574087/pexels-photo-574087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Explore New Ideas",
      description:
        "Discover innovative articles and stay updated with the latest trends.",
      image:
        "https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Connect with Experts",
      description:
        "Learn from industry leaders and engage in meaningful discussions.",
      image:
        "https://images.pexels.com/photos/14553704/pexels-photo-14553704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <section className="relative bg-gray-900 text-white">
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        loop
        autoplay={{ delay: 1000 }}
        className="lg:h-screen md:h-100 "
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>

            {/* Overlay Gradient for Text Readability */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10 flex items-center h-full">
              <div className="max-w-2xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-8">
                  {slide.description}
                </p>
                <a
                  href="/articles"
                  className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-md transition-colors"
                >
                  Explore Articles
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
