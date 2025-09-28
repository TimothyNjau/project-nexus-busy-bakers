import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faFacebook, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";


const Footer: React.FC = () => {
  return (
    <footer className="bg-amber-400 border-t border-black mt-8">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center sm:items-start">
          <span className="font-semibold text-lg text-gray-900 mb-2 sm:mb-0">
            Busy Bakers &copy; {new Date().getFullYear()}
          </span>
          <Link
            href="/contact"
            className="text-blue-700 hover:underline text-sm mt-1"
          >
            Contact Us
          </Link>
        </div>
        <div className="flex gap-4 mt-2 sm:mt-0">
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-blue-500 transition-colors"
          > 
            <FontAwesomeIcon icon={faXTwitter} className="sm:text-xl md:text-2xl lg:text-3xl transition-all duration-300 " />
          </a>
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-blue-700 transition-colors"
          >
            <FontAwesomeIcon icon={faFacebook} className="sm:text-xl md:text-2xl lg:text-3xl transition-all duration-300 "  />
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-500 transition-colors"
          >
           <FontAwesomeIcon icon={faInstagram} className="sm:text-xl md:text-2xl lg:text-3xl transition-all duration-300 "  />
          </a>
          <a
            href="https://tiktok.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="hover:text-black transition-colors"
          >
            <FontAwesomeIcon icon={faTiktok} className="sm:text-xl md:text-2xl lg:text-3xl transition-all duration-300 " />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
