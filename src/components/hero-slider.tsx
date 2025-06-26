"use client";

import { useEffect, useRef } from "react";
import { Swiper } from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import gsap from "gsap";

export default function HeroSlider() {
    const swiperRef = useRef<HTMLDivElement>(null);
    const swiperInstance = useRef<Swiper | null>(null);

    useEffect(() => {
        if (swiperRef.current) {
            swiperInstance.current = new Swiper(swiperRef.current, {
                modules: [Navigation, Pagination, Autoplay],
                loop: true,
                spaceBetween: 50,
                speed: 1000,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                on: {
                    init(swiper) {
                        animateSlide(swiper.slides[swiper.activeIndex]);
                    },
                    slideChangeTransitionStart(swiper) {
                        animateSlide(swiper.slides[swiper.activeIndex]);
                    },
                },
            });
        }

        function animateSlide(slideEl: HTMLElement) {
            if (!slideEl) return;

            const title = slideEl.querySelector<HTMLElement>(".slider-title");
            if (!title) return;

            // Reset state instantly
            gsap.set(title, { opacity: 0, y: 30 });

            // Animate fade-in + slide-up
            gsap.to(title, { opacity: 1, y: 0, duration: 1, ease: "power3.out" });
        }

        return () => {
            swiperInstance.current?.destroy(true, true);
            swiperInstance.current = null;
        };
    }, []);

    return (
        <section className="km_hero_slider">
            <div className="hero_banner" ref={swiperRef}>
                <div className="swiper-wrapper">
                    <div
                        className="swiper-slide slide-1"
                        style={{ background: "url(/assets/img/slider.jpg) no-repeat" }}
                    >
                        <div className="container">
                            <div className="slider-container">
                                <div className="animated-area">
                                    <h1 className="slider-title">
                                        India&apos;s Largest Cars Dealers and Maruti Authorized Dealer
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="swiper-slide slide-1"
                        style={{ background: "url(/assets/img/slider.jpg) no-repeat" }}
                    >
                        <div className="container">
                            <div className="slider-container">
                                <div className="animated-area">
                                    <h1 className="slider-title">
                                        India&apos;s Largest Cars Dealers and Maruti Authorized Dealer
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
                <div className="swiper-pagination"></div>
            </div>
        </section>
    );
}
