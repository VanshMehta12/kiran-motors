"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"

export default function Header() {
    const [isFixed, setIsFixed] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [mobileDropdowns, setMobileDropdowns] = useState<{ [key: string]: boolean }>({
        services: false,
        about: false,
    })

    useEffect(() => {
        const handleScroll = () => {
            const scroll = window.scrollY
            if (scroll >= 60) {
                setIsFixed(true)
            } else {
                setIsFixed(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
        setMobileDropdowns({ services: false, about: false }) // close dropdowns on mobile menu close
    }

    // Toggle mobile dropdown menu open/close
    const toggleMobileDropdown = (key: string) => {
        setMobileDropdowns((prev) => ({
            ...prev,
            [key]: !prev[key],
        }))
    }

    return (
        <header className="main_header">
            <div className="container">
                <div className="km_top_header">
                    <div className="row">
                        <div className="col-lg-8">
                            <ul className="km_left_bar px-0">
                                <li className="text-decoration-none">
                                    <Image src="/assets/img/nexa-logo.svg" alt="" width={50} height={20} />
                                    <Link href="tel:+91-9714755588" className="text-decoration-none">
                                        +91-9714755588
                                    </Link>
                                </li>
                                <li className="text-decoration-none">
                                    <Image src="/assets/img/maruti.svg" alt="" width={20} height={20} />
                                    <Link href="tel:+91-7211119828" className="text-decoration-none">
                                        +91-72111 19828
                                    </Link>
                                </li>
                                <li className="text-decoration-none">
                                    <Image src="/assets/img/car-repair.svg" alt="" width={20} height={20} />
                                    <Link href="tel:+91-7359966615" className="text-decoration-none">
                                        +91-73599 66615
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-4">
                            <ul className="km_left_bar right_bar">
                                <li className="text-decoration-none">
                                    <Image src="/assets/img/steering.svg" alt="" width={20} height={20} />
                                    <Link href="#" className="text-decoration-none">
                                        Book Test Drive
                                    </Link>
                                </li>
                                <li className="text-decoration-none">
                                    <Link href="#" className="text-decoration-none">
                                        Quick Inquiry
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`km_bottom_header ${isFixed ? "fixed" : ""}`}>
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-6 col-lg-3">
                            <div className="km_logo">
                                <Link href="/">
                                    <Image src="/assets/img/kiran-motors.svg" alt="" width={200} height={60} />
                                </Link>
                            </div>
                        </div>

                        <div className="col-6 d-lg-none text-end">
                            <button className="menu-toggle-btn" onClick={toggleMenu}>
                                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                            </button>
                        </div>

                        {/* Desktop Menu */}
                        <div className="col-lg-9 d-none d-lg-block">
                            <nav className="navigation_menu">
                                <ul className="primary_menu">
                                    <li>
                                        <Link href="#" className="text-decoration-none">
                                            Home
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="#" className="text-decoration-none">
                                            New Cars
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="#" className="text-decoration-none">
                                            Used-cars
                                        </Link>
                                    </li>

                                    {/* Services with dropdown */}
                                    <li className="has-dropdown">
                                        <Link href="#" className="text-decoration-none">
                                            Services <ChevronDown size={14} />
                                        </Link>
                                        <ul className="dropdown_menu">
                                            <li>
                                                <Link href="#" className="text-decoration-none">
                                                    Service 1
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#" className="text-decoration-none">
                                                    Service 2
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#" className="text-decoration-none">
                                                    Service 3
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li>
                                        <Link href="#" className="text-decoration-none">
                                            Finance and Insurance
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="#" className="text-decoration-none">
                                            Offers
                                        </Link>
                                    </li>

                                    {/* About Us with dropdown */}
                                    <li className="has-dropdown">
                                        <Link href="#" className="text-decoration-none">
                                            About Us <ChevronDown size={14} />
                                        </Link>
                                        <ul className="dropdown_menu py-0">
                                            <li>
                                                <Link href="#" className="text-decoration-none">
                                                    Our Story
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#" className="text-decoration-none">
                                                    Team
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#" className="text-decoration-none">
                                                    Careers
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li>
                                        <Link href="#" className="text-decoration-none">
                                            Showrooms and Workshops
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="#" className="text-decoration-none">
                                            Contact Us
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="mobile_menu d-lg-none">
                            <ul className="primary_menu" onClick={closeMenu}>
                                <li>
                                    <Link href="#" className="text-decoration-none">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-decoration-none">
                                        New Cars
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-decoration-none">
                                        Used-cars
                                    </Link>
                                </li>

                                {/* Mobile Services dropdown */}
                                <li>
                                    <button
                                        type="button"
                                        className="dropdown_toggle_btn"
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            toggleMobileDropdown("services")
                                        }}
                                    >
                                        Services <ChevronDown size={14} />
                                    </button>
                                    {mobileDropdowns.services && (
                                        <ul className="dropdown_menu_mobile">
                                            <li>
                                                <Link href="#" className="text-decoration-none">
                                                    Service 1
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#" className="text-decoration-none">
                                                    Service 2
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#" className="text-decoration-none">
                                                    Service 3
                                                </Link>
                                            </li>
                                        </ul>
                                    )}
                                </li>

                                <li>
                                    <Link href="#" className="text-decoration-none">
                                        Finance and Insurance
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-decoration-none">
                                        Offers
                                    </Link>
                                </li>

                                {/* Mobile About Us dropdown */}
                                <li>
                                    <button
                                        type="button"
                                        className="dropdown_toggle_btn"
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            toggleMobileDropdown("about")
                                        }}
                                    >
                                        About Us <ChevronDown size={14} />
                                    </button>
                                    {mobileDropdowns.about && (
                                        <ul className="dropdown_menu_mobile">
                                            <li>
                                                <Link href="#" className="text-decoration-none">
                                                    Our Story
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#" className="text-decoration-none">
                                                    Team
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#" className="text-decoration-none">
                                                    Careers
                                                </Link>
                                            </li>
                                        </ul>
                                    )}
                                </li>

                                <li>
                                    <Link href="#" className="text-decoration-none">
                                        Showrooms and Workshops
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-decoration-none">
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            <style jsx>{`
        /* Desktop dropdown styles */
        .primary_menu {
          list-style: none;
          padding-left: 0;
          margin: 0;
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }
        .primary_menu li {
          position: relative;
        }
        .primary_menu li.has-dropdown > ul.dropdown_menu {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          background: white;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          list-style: none;
        //   padding: 0.5rem 0;
          min-width: 150px;
          z-index: 1000;
        }
        .primary_menu li.has-dropdown:hover > ul.dropdown_menu {
          display: block;
        }
        .dropdown_menu li {
          padding: 0.5rem 1rem;
          background-color: #020254;
          
        }
        .dropdown_menu li:hover {
          background-color: #020254;
        }
        .primary_menu li a .dropdown_menu li a,
        .primary_menu li a.dropdown_menu_mobile li a {
        color: black !important;
        }

        /* Mobile dropdown styles */
        .mobile_menu ul.primary_menu {
          list-style: none;
          padding-left: 0;
          margin: 0;
        }
        .mobile_menu ul.primary_menu > li {
          margin-bottom: 0.75rem;
        }
        .dropdown_toggle_btn {
          background: none;
          border: none;
          font-size: 1rem;
          font-weight: 600;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          padding: 0;
          cursor: pointer;
          color: inherit;
        }
        .dropdown_menu_mobile {
          list-style: none;
          padding-left: 1.25rem;
          margin-top: 0.25rem;
        }
        .dropdown_menu_mobile li {
          margin-bottom: 0.5rem;
        }
      `}</style>
        </header>
    )
}
