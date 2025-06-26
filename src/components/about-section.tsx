"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (sectionRef.current && imgRef.current && contentRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",    // when top of section hits 80% viewport height
          end: "bottom 80%",
          toggleActions: "play none none reverse",
          // markers: true, // uncomment to debug start/end points
        },
      });

      tl.from(imgRef.current, { opacity: 0, x: -50, duration: 1 })
        .from(contentRef.current, { opacity: 0, x: 50, duration: 1 }, "<0.5");
    }
  }, []);

  return (
    <section className="about_section" ref={sectionRef}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6" ref={imgRef}>
            <div className="about_img">
              <Image src="/assets/img/trust_no.png" alt="" width={500} height={400} />
            </div>
            <p className="small_text">Trusted since 1986 | Gujarat&apos;s No.1 Maruti Suzuki Dealer</p>
          </div>

          <div className="col-lg-6" ref={contentRef}>
            <div className="about_content">
              <h2 className="title_2 pb_30">Million Smiles Driven, Countless More to Go!</h2>
              <p>
                1 million cars, four decades, and countless dreams brought to life. At Kiran Motors, we&apos;ve been igniting
                journeys with trust, passion, and the thrill of the open road since 1986. From the iconic Maruti Swift
                to the bold Grand Vitara, our legacy fuels your drive. Join the revolution, embrace your vibe, and let&apos;s
                create your next adventure together!
              </p>
              <p>Join the Kiran Motors family and zoom into your dream ride today.</p>

              <Link href="#" className="theme_btn mt-10 text-decoration-none">
                Know more
                <span className="arrow_icon"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
