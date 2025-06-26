import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="top_footer">
          <div className="row">
            <div className="col-lg-3">
              <div className="footer_widget">
                <h4 className="footer_title">New Cars</h4>
                <div className="footer_widget_content">
                  <ul className="px-0">
                    <li>
                      <Link href="#" className="text-decoration-none">Select a Model</Link>
                    </li>
                    <li>
                      <Link href="#" className="text-decoration-none">Quick Quote</Link>
                    </li>
                    <li>
                      <Link href="#" className="text-decoration-none">Schedule Test Drive</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="footer_widget">
                <h4 className="footer_title">Ather EV</h4>
                <div className="footer_widget_content">
                  <ul className="px-0">
                    <li>
                      <Link href="#" className="text-decoration-none">Select a Model</Link>
                    </li>
                    <li>
                      <Link href="#" className="text-decoration-none">Quick Quote</Link>
                    </li>
                    <li>
                      <Link href="#" className="text-decoration-none">Book Ride</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="footer_widget">
                <h4 className="footer_title">About us</h4>
                <div className="footer_widget_content">
                  <ul className="px-0">
                    <li>
                      <Link href="#" className="text-decoration-none">Company Profile</Link>
                    </li>
                    <li>
                      <Link href="#" className="text-decoration-none">Customers feedback</Link>
                    </li>
                    <li>
                      <Link href="#" className="text-decoration-none">Company working hours</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="footer_widget">
                <h4 className="footer_title">Get in touch</h4>
                <div className="footer_widget_content">
                  <ul className="px-0">
                    <li>
                      <Link href="#" className="text-decoration-none">Contact us</Link>
                    </li>
                    <li>
                      <Link href="#" className="text-decoration-none">Career</Link>
                    </li>
                    <li>
                      <Link href="#" className="text-decoration-none">Our Showroom locations</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="vehicle_info">
          <h3 className="vihicle_title">Kiran Motors Limited</h3>
          <ul className="vihicle_address_list">
            <li>
              Kiran Motors Limited. - Navrangpura : Narnarayan Complex, Navrangpura Rd, Swastik Society, Navrangpura,
              Ahmedabad - 380009.
            </li>
            <li>
              Kiran Motors Limited. - Motera : Plot No 82/1/1, Nikol Gam Rd, near Shyam Pooja Bunglows, Motera,
              Ahmedabad - 380005.
            </li>
            <li>
              Kiran Motors Limited. - Sarkhej – Sanand True Value : Sanand - Sarkhej Road Circle, Nr, Shantipura,
              Sarkhej-Okaf, Gujarat - 380054.
            </li>
            <li>
              Kiran Motors Limited. - Baroda True Value : E-58, Rd Number 2, Sardar Estate, Sayaji Park Society,
              Vadodara - 390019.
            </li>
            <li>Kiran Motors Limited : - Surat True Value : Udhana Village, Udhna, Surat - 394210.</li>
            <li>Kiran Motors Limited. - Himatnagar True Value : Nr. Sabar Dairy, Boriya, Himatnagar - 383001.</li>
            <li>
              Nexa Kiran Motors -SG Highway(Kiran Motors Pvt. Ltd) : Ground Floor, Venus Benecia, Opposite Rajpath Club,
              S.G Highway, Bodakdev, Ahmedabad, - 380015.
            </li>
            <li>
              Nexa Kiran Motors -Akshar Chowk (Kiran Motors Pvt. Ltd) : The Park, Opposite Blue lagoons Hotel, Akshar
              Chowk, Old Padra Road, , Vadodara - 390020.
            </li>
          </ul>
        </div>
      </div>

      <div className="bottom_footer">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-4">
              <div className="copy_right">
                <p>Copyright @ Kiran Motors Ltd</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="footer_logo text-center">
                <Link href="#">
                  <Image src="/assets/img/footer_logo.svg" alt="" width={200} height={60} />
                </Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="menu_copyright_container">
                <ul className="menu_copyright">
                  <li>
                    <Link href="#" className="text-decoration-none">Sitemap</Link>
                  </li>
                  <li>
                    <Link href="#" className="text-decoration-none">Location</Link>
                  </li>
                  <li>
                    <Link href="#" className="text-decoration-none">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
