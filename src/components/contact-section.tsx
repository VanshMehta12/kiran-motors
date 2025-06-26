"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    location: "",
    comment: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section className="contactUs_section">
      <div className="container">
        <div className="title">
          <h2>Contact us now</h2>
        </div>

        <div className="row mt-71">
          <div className="col-lg-7">
            <div className="contact_form">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="form-group col-md-6 mb-4">
                    <label>
                      Name<span className="val">*</span>:
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group col-md-6 mb-4">
                    <label>
                      Phone<span className="val">*</span>:
                    </label>
                    <input
                      type="text"
                      name="phone"
                      className="form-control"
                      placeholder="Enter mobile number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group col-md-6 mb-4">
                    <label>
                      Email ID<span className="val">*</span>:
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter email address"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group col-md-6 mb-4">
                    <label>
                      Service<span className="val">*</span>:
                    </label>
                    <select
                      className="form-control"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select service</option>
                      <option value="service1">Service 1</option>
                      <option value="service2">Service 2</option>
                      <option value="service3">Service 3</option>
                      <option value="service4">Service 4</option>
                    </select>
                  </div>
                  <div className="form-group col-md-12 mb-4">
                    <label>
                      Location<span className="val">*</span>:
                    </label>
                    <input
                      type="text"
                      name="location"
                      className="form-control"
                      placeholder="Choose location"
                      value={formData.location}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group col-md-12 mb-4">
                    <label>
                      Comment<span className="val">*</span>:
                    </label>
                    <textarea
                      name="comment"
                      placeholder="Add comment"
                      className="form-control"
                      value={formData.comment}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group col-md-12 mb-4">
                    <p className="help_desk">
                      <span>*</span> indicates required fields
                    </p>
                  </div>

                  <div className="form-group col-md-12 mb-4">
                    <button type="submit" className="theme_btn_primary">
                      <span className="thm_btn_text">Submit</span>
                      <span className="arrow_icon"></span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="contact_map">
              <div style={{ width: "100%" }}>
                <iframe
                  width="100%"
                  height="400"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=1%20GKiran%20Motors%20Limited.%20-%20Navrangpura:%C2%A0Narnarayan%20Complex,%20Navrangpura%20Rd,%20Swastik%20Society,%20Navrangpura,%20Ahmedabad%20-%20380009rafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                />
              </div>
            </div>

            <div className="contact_info_box">
              <div className="location_head">
                <span>
                  <Image src="/assets/img/map.svg" alt="" width={20} height={20} />
                </span>
                <h2>Locate us</h2>
              </div>
              <p>
                Kiran Motors Limited. - Navrangpura: Narnarayan Complex, Navrangpura Rd, Swastik Society, Navrangpura,
                Ahmedabad - 380009
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
