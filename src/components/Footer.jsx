import Link from "next/link";
import { navLinks } from "@/variables";

import { Logo } from "@/assets/icons/Logo";

// Import the FontAwesomeIcon component

// import the icons you need

export const Footer = () => {
  return (
    <footer>
      <div className="footer_layout">
        <div className="footer_nav_section">
          <Link href="/">
            <Logo color="white" />
          </Link>

          <nav>
            {navLinks.map((link, index) => {
              return <Link href={link?.path}>{link.name}</Link>;
            })}
          </nav>
        </div>
        <div className="footer_contact_section">
          <p>
            <strong>Designo Central Office</strong>
            <br />
            3886 Wellington Street Toronto, <br />
            Ontario M9C 3J5
          </p>
          <p>
            <strong>Contact Us {`(Central Office)`}</strong>
            <br />
            <strong>P : +1 253-863-8967</strong>
            <br />
            <strong>M : contact@designo.co</strong>
          </p>
          <div className="footer_socialMedia_container">
            <button className="socialMedia_btn">
              <i className="fa-brands fa-facebook"></i>
            </button>
            <button className="socialMedia_btn">
              <i className="fa-brands fa-youtube"></i>
            </button>
            <button className="socialMedia_btn">
              <i className="fa-brands fa-twitter"></i>
            </button>
            <button className="socialMedia_btn">
              <i className="fa-brands fa-pinterest"></i>
            </button>
            <button className="socialMedia_btn">
              <i className="fa-brands fa-instagram"></i>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
