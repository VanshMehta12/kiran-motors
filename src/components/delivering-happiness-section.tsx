"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function DeliveringHappinessSection() {
    const slides = [
        "/assets/img/slide1.png",
        "/assets/img/slide2.png",
        "/assets/img/slide3.png",
        "/assets/img/slide1.png",
        "/assets/img/slide2.png",
        "/assets/img/slide3.png",
    ];

    return (
        <section className="delivering_happiness_section">
            <div className="container">
                <div className="title">
                    <h2 className="text-white">Delivering Happiness</h2>
                </div>
                <div className="delivering_slider mt-71">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={1}
                        slidesPerView={3}
                        centeredSlides={true}
                        roundLengths={true}
                        loop={true}
                        navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        initialSlide={0}
                        onSwiper={(swiper) => {
                            setTimeout(() => {
                                swiper.slideToLoop(0, 0);
                            }, 0);
                        }}
                        autoplay={{
                            delay: 1000, // delay between slides in ms
                            disableOnInteraction: false, // keep autoplay running after user interacts
                        }}
                        className="delivering_happiness_section_slide"
                    >
                        {slides.map((src, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="swiper-image">
                                    <div className="image">
                                        <img src={src} alt={`Slide ${idx + 1}`} />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* ✅ These should be outside the <Swiper> tag */}
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        </section>
    );
}
