"use client"

import {useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Scrollbar } from "swiper/modules"
import "swiper/css"
import "swiper/css/scrollbar"
import "swiper/css/autoplay"



export default function DealerTabSection() {
    const [activeTab, setActiveTab] = useState(0);

    

    const dealerData = [
        {
            title: "Maruti Suziki Cars",
            logo: "/assets/img/marutisuzuki.svg",
            heading: "Oldest dealer",
            description:
                "Kiran Motors Ltd being the oldest and one of the largest dealers of Maruti Suzuki India Limited has its presence in the state of Gujarat since 1986 and has earned the reputation of being one of the most trustworthy dealership having a motivated workforce.",
            buttonText: "See models",
            image: "/assets/img/swift_angularleft.webp",
            bgClass: "dark_bg",
        },
        {
            title: "Maruti Suzuki NEXA Cars",
            logo: "/assets/img/nexa-logo.svg",
            heading: "Largest and Oldest Dealer",
            description:
                "Kiran Motors Ltd being the oldest and one of the largest dealers of Maruti Suzuki India Limited has its presence in the state of Gujarat since 1986 and has earned the reputation of being one of the most trustworthy dealership having a motivated workforce.",
            buttonText: "See models",
            image: "/assets/img/Maruti-Suzuki.png",
            bgClass: "gray_dark_bg",
        },
        {
            title: "Suzuki Motorcycle",
            logo: "/assets/img/Suzuki-Motorcycle.svg",
            heading: "Biggest Dealer",
            description:
                "Kiran Motors Ltd being the oldest and one of the largest dealers of Maruti Suzuki India Limited has its presence in the state of Gujarat since 1986 and has earned the reputation of being one of the most trustworthy dealership having a motivated workforce.",
            buttonText: "See models",
            image: "/assets/img/Suzuki_Motorcycle.png",
            bgClass: "dark_green_bg",
        },
        {
            title: "Our Businesses",
            logo: "/assets/img/ather-logo.svg",
            heading: "EV dealer",
            description:
                "Now, as Jaipur’s proud Ather EV dealer, we’re charging into the future with electrifying style! From the sleek Ather 450X to the vibrant Rizta, discover smart, eco-friendly rides that match your vibe. Join our legacy of trust and zoom into tomorrow’s adventures with us!",
            buttonText: "See all EVs",
            image: "/assets/img/pangong-blue.png",
            bgClass: "dark_blue_bg",
        },
        {
            title: "True Value",
            logo: "/assets/img/true-value-logo.svg",
            heading: "Used Cars Dealer",
            description:
                "Kiran Motors Ltd being the oldest and one of the largest dealers of Maruti Suzuki India Limited has its presence in the state of Gujarat since 1986 and has earned the reputation of being one of the most trustworthy dealership having a motivated workforce.",
            buttonText: "Car options",
            image: "/assets/img/abc.webp",
            bgClass: "dark_red_bg",
        },
    ]

    const tabLabels = ["SUZUKI CARS", "NEXA CARS", "SUZUKI MOTORCYCLE", "ATHER EV", "USED CARS"]


    return (
        <section className="dealer_tab_section">
            <div className="container">
                <div className="dealer_card_wrapper">
                    <div className={`dealer_card ${dealerData[activeTab].bgClass}`}>
                        <div className="row d-flex align-items-center">
                            <div className="col-lg-6">
                                <div className="card_dealer_info">
                                    <h3>{dealerData[activeTab].title}</h3>
                                    <div className="car_dealer_logo">
                                        <Image
                                            src={dealerData[activeTab].logo || "/placeholder.svg"}
                                            alt="logo"
                                            width={180}
                                            height={40}
                                        />
                                    </div>
                                    <h2>{dealerData[activeTab].heading}</h2>
                                    <p>{dealerData[activeTab].description}</p>
                                    <Link href="#" className="theme_btn_primary text-decoration-none">
                                        <span className="thm_btn_text">{dealerData[activeTab].buttonText}</span>
                                        <span className="arrow_icon"></span>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="dealer_img">
                                    <Image
                                        className="dealercar"

                                        src={dealerData[activeTab].image || "/placeholder.svg"}
                                        alt="dealer"
                                        width={550}
                                        height={450}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tab buttons using Swiper with scrollbar */}
                <Swiper
                    modules={[Scrollbar, Autoplay]}
                    slidesPerView="auto"
                    spaceBetween={10}
                    scrollbar={{ draggable: true }}
                    autoplay={{
                        delay: 1000, // delay between slides in ms
                        disableOnInteraction: false, // keep autoplay running after user interacts
                    }}
                    loop={false}
                    className="tabs-buttons"
                >
                    {tabLabels.map((label, index) => (
                        <SwiperSlide
                            key={index}
                            className={`swiper-tab ${index === activeTab ? "active-tab" : ""}`}
                            onClick={() => setActiveTab(index)}
                        >
                            {label}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}
