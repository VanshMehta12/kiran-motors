"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function InsightsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const counters = gsap.utils.toArray<HTMLElement>(".count");

      counters.forEach((el) => {
        const endValue = parseInt(el.dataset.number || "0");

        gsap.fromTo(
          el,
          { innerText: 0 },
          {
            innerText: endValue,
            duration: 2,
            scrollTrigger: {
              trigger: el,
              start: "top 50%",
              once: true,
            },
            snap: { innerText: 1 },
            ease: "power1.out",
            onUpdate: function () {
              el.innerText = Math.floor(Number(el.innerText)).toString();
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="insights_section pattern" ref={sectionRef}>
      <div className="container">
        <div className="title">
          <h2>Kiran Motors Insights</h2>
        </div>

        <div className="row mt-71">
          <div className="col-lg-4">
            <div className="insights_img mt-3">
              <Image src="/assets/img/Insights.png" alt="" width={350} height={450} />
            </div>
          </div>

          <div className="col-lg-8">
            <div className="insights_card_grid">
              <div className="insights_counter mt-3">
                <div className="item_counter">
                  <h2 className="count" data-number="50">0</h2>
                  <h3 className="text">Showrooms</h3>
                </div>
                <div className="item_counter">
                  <h2 className="count" data-number="2500">0</h2>
                  <h3 className="text">Employees</h3>
                </div>
                <div className="item_counter">
                  <h2 className="count" data-number="20">0</h2>
                  <h3 className="text">Cities</h3>
                </div>
                <div className="item_counter">
                  <h2 className="count" data-number="100">0</h2>
                  <h3 className="text">State of the Art Facilities</h3>
                </div>
                <div className="item_counter">
                  <h2 className="count" data-number="4">0</h2>
                  <h3 className="text">States</h3>
                </div>
              </div>
              <Link href="#" className="theme_btn mt-3 text-decoration-none">
                Book Test Drive
                <span className="arrow_icon"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
