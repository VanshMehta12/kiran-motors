"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function NewShowroomSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const info = sectionRef.current.querySelector(".showroom_info");
    const video = sectionRef.current.querySelector(".showroom_video");

    if (info) {
      gsap.from(info, {
        scrollTrigger: {
          trigger: info,
          start: "top 35%",
          toggleActions: "play none none reverse",
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }

    if (video) {
      gsap.from(video, {
        scrollTrigger: {
          trigger: video,
          start: "top 35%",
          toggleActions: "play none none reverse",
        },
        x: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }
  }, []);

  return (
    <section className="new_showroom_section" ref={sectionRef}>
      <div className="container">
        <div className="title">
          <h2 className="text-white">See what&apos;s new in our showroom</h2>
        </div>
        <div className="row mt-71 d-flex">
          <div className="col-md-6 col-lg-6 p-0">
            <div className="showroom_info">
              <h4>Suzuki Next Introduced</h4>
              <h2>Grand Vitara EV</h2>
              <p>
                The e Vitara will feature a claimed range of over 500 km and will be available in a front-wheel-drive
                configuration. It will be manufactured in India and exported to international markets
              </p>
              <Link href="#" className="theme_btn mt-3 text-decoration-none">
                Book Test Drive
                <span className="arrow_icon"></span>
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 p-0">
            <div className="showroom_video">
              <iframe width="1296" height="729" src="https://www.youtube.com/embed/5ePVUbDxCyo" title="Maruti Suzuki Grand Vitara Hybrid | Detailed Review- Features, Price, Mileage, etc. | EV Bazaar" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
