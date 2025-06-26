"use client";

import gsap from "gsap";
import styles from "@/styles/LoadingScreen.module.css"; // CSS Module
import { useGSAP } from "@gsap/react";

export default function LoadingScreen() {
    useGSAP(() => {
        gsap.fromTo(
            `.${styles.loadingPage}`,
            { opacity: 1 },
            {
                opacity: 0,
                display: "none",
                duration: 1.5,
                delay: 3.5,
            }
        );

        gsap.fromTo(
            `.${styles.logoName}`,
            { y: 50, opacity: 0, display: "block" },
            { y: 0, opacity: 1, duration: 2, delay: 0.5 }
        );

        gsap.to(`.${styles.loadingPage}`, {
            yPercent: -100,
            opacity: 0,
            duration: 1.2,
            delay: 3.5,
            ease: "power2.inOut",
            onComplete: () => {
                const el = document.querySelector(`.${styles.loadingPage}`) as HTMLElement;
                if (el) el.style.display = "none";
            },
        });
    }, []);




    return (
        <div className={styles.loadingPage}>
            {/* <svg
                id="svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
            >
                <path d="M415.44 512h-95.11L212.12 357.46v91.1L125.69 512H28V29.82L68.47 0h108.05l123.74 176.13V63.45L386.69 0h97.69v461.5zM38.77 35.27V496l72-52.88V194l215.5 307.64h84.79l52.35-38.17h-78.27L69 13zm82.54 466.61l80-58.78v-101l-79.76-114.4v220.94L49 501.89h72.34zM80.63 10.77l310.6 442.57h82.37V10.77h-79.75v317.56L170.91 10.77zM311 191.65l72 102.81V15.93l-72 53v122.72z" />
            </svg> */}
            <svg
                id="svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 446 512"
                className={styles.svg}
            >
                <path d="M386.5 34h-327C26.8 34 0 60.8 0 93.5v327.1C0 453.2 26.8 480 59.5 480h327.1c33 0 59.5-26.8 59.5-59.5v-327C446 60.8 419.2 34 386.5 34zM87.1 120.8h96v116l61.8-116h110.9l-81.2 132H87.1v-132zm161.8 272.1l-65.7-113.6v113.6h-96V262.1h191.5l88.6 130.8H248.9z" />
            </svg>
            <div className={styles.nameContainer}>
                <div className={styles.logoName}>Kiran Motors Ltd</div>
            </div>
        </div>
    );
}
