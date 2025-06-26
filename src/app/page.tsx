"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

import Header from "@/components/header";
import HeroSlider from "@/components/hero-slider";
import AboutSection from "@/components/about-section";
import DealerTabSection from "@/components/dealer-tab-section";
import WhyChooseSection from "@/components/why-choose-section";
import NewShowroomSection from "@/components/new-showroom-section";
import InsightsSection from "@/components/insights-section";
import DeliveringHappinessSection from "@/components/delivering-happiness-section";
import QuickSection from "@/components/quick-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import LoadingScreen from "@/components/LoadingScreen";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollToPlugin);

export default function Home() {
  const scrollPosition = useRef(0);
  const isAnimating = useRef(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (you can replace this with your actual animation complete callback)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  useGSAP(() => {
    if (!isLoading) {
      const onWheel = (event: WheelEvent) => {
        event.preventDefault();

        if (isAnimating.current) return;

        isAnimating.current = true;

        const direction = event.deltaY > 0 ? 1 : -1;
        scrollPosition.current = window.scrollY + direction * 200;

        const maxScroll = document.body.scrollHeight - window.innerHeight;
        scrollPosition.current = Math.max(0, Math.min(scrollPosition.current, maxScroll));

        gsap.to(window, {
          scrollTo: scrollPosition.current,
          duration: 0,
          ease: "power3.out",
          onComplete: () => {
            isAnimating.current = false;
          },
        });
      };

      window.addEventListener("wheel", onWheel, { passive: false });

      return () => {
        window.removeEventListener("wheel", onWheel);
      };
    }
  }, [isLoading]);

  return (
    <main>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Header />
          <HeroSlider />
          <AboutSection />
          <DealerTabSection />
          <WhyChooseSection />
          <NewShowroomSection />
          <InsightsSection />
          <DeliveringHappinessSection />
          <QuickSection />
          <ContactSection />
          <Footer />
        </>
      )}
    </main>
  );
}
