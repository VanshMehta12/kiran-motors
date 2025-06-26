"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function QuickSection() {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    cardsRef.current.forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 65%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        delay: i * 0.1,
        ease: "power3.out",
      });
    });
  }, []);

  return (
    <section className="quick_section pattern">
      <div className="container">
        <div className="title mb-3">
          <h2>Quick Inquiry</h2>
        </div>

        <div className="row mt-71">
          {[
            {
              title: "Test Drive",
              img: "/assets/img/test_drive.svg",
              btnText: "Book test drive",
            },
            {
              title: "Accessories and Parts",
              img: "/assets/img/Accessories_and_Parts_icon.svg",
              btnText: "Submit a request",
            },
            {
              title: "Car Service",
              img: "/assets/img/Car_Service_icon.svg",
              btnText: "Book Appointment",
            },
            {
              title: "Get Quotation?",
              img: "/assets/img/Get_Quotation_icon.svg",
              btnText: "Send Request Now",
            },
          ].map((item, i) => (
            <div className="col-lg-3 mt-3" key={i} ref={(el) => { if (el) cardsRef.current[i] = el; }}>
              <div className="quick_inqury_card h-100">
                <div className="quick_inqury_icon">
                  <Image src={item.img} alt="" width={60} height={60} />
                </div>
                <div className="quick_inqury_con">
                  <h4>{item.title}</h4>
                  <Link href="#" className="quick_btn text-decoration-none">
                    <span className="quick_btn_text">{item.btnText}</span>
                    <span className="quick_btn_icon_wrap">
                      <span className="quick_btn_icon"></span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
