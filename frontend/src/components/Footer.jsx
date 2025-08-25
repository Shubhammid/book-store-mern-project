import footerLogo from "../assets/footer-logo.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12"> 
        <div>
          <img src={footerLogo} alt="Company Logo" className="mb-6 w-40" />
          <nav>
            <ul className="flex flex-col md:flex-row gap-4 text-sm font-medium">
              <li>
                <a href="#home" className="hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-primary transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-primary transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <section>
          <p className="mb-4 text-sm md:text-base">
            Subscribe to our newsletter to receive the latest updates, news, and
            offers!
          </p>
          <form className="flex max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email Address"
              className="w-full px-4 py-2 rounded-l-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="bg-primary px-6 py-2 rounded-r-md text-white hover:bg-primary-dark transition-colors"
            >
              Subscribe
            </button>
          </form>
        </section>
      </div>

      
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mt-12 border-t border-gray-700 pt-6">
        
        <ul className="flex gap-6 text-sm mb-4 md:mb-0">
          <li>
            <a href="#privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#terms" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </li>
        </ul>

        <div className="flex gap-6">
          <a
            href="https://facebook.com"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <FaFacebook size={22} />
          </a>
          <a
            href="https://twitter.com"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <FaTwitter size={22} />
          </a>
          <a
            href="https://instagram.com"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <FaInstagram size={22} />
          </a>
        </div>
      </div>

      <div className="container mx-auto text-center mt-6 text-xs text-gray-500">
        © {new Date().getFullYear()} Book Store. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
