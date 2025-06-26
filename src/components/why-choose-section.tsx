"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseSection() {
    const cardsRef = useRef<HTMLDivElement[]>([]);

    useGSAP(() => {
        cardsRef.current.forEach((card) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 40%",
                    once: true
                    // markers: true,
                },
                opacity: 0,
                y: 50,
                duration: 1,
                ease: "power3.out",
            });
        });
    }, []);

    return (
        <section className="why_choose_section">
            <div className="container">
                <div className="title pb-3">
                    <h2 className="text-center">Why Choose Us?</h2>
                </div>

                <div className="row mt-5">
                    {[
                        {
                            title: "Your Trusted Automotive Partner",
                            desc: `At Kiran Motors Group, we're more than just a name — We're a legacy. With over 40 years of experience, we've earned the trust of customers across the country by consistently delivering excellence in every drive.`,
                            img: "/assets/img/front-left-side-47.png",
                            imgFirst: false,
                        },
                        {
                            title: "Major States Presence Across India",
                            desc: `With 138 state-of-the-art facilities across 20 cities in 4 states and union territories, we ensure that expert service, support, and savings are always within your reach — no matter where you are.`,
                            img: "/assets/img/Major_States.png",
                            imgFirst: true,
                        },
                        {
                            title: "A Seamless Car Buying Journey",
                            desc: `From choosing the right car to financing, insurance, aftersales care, and premium accessories — we provide a comprehensive, hassle-free experience one roof. At Kiran Motors, your convenience is our priority.`,
                            img: "/assets/img/Seamless_Car.png",
                            imgFirst: false,
                        },
                    ].map((item, i) => (
                        <div className="col-lg-4 mt-3" key={i}
                            ref={(el) => {
                                if (el) cardsRef.current[i] = el;
                            }}
                        >
                            <div className="choos_card h-100">
                                {item.imgFirst && (
                                    <div className="choose_card_img">
                                        <img src={item.img} alt="" />
                                    </div>
                                )}
                                <div className="choose_card_content text-center">
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                                {!item.imgFirst && (
                                    <div className="choose_card_img">
                                        <img src={item.img} alt="" />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="know_more text-center mt-5">
                    <Link href="#" className="theme_btn_primary text-decoration-none">
                        <span className="thm_btn_text">Know more</span>
                        <span className="arrow_icon"></span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
