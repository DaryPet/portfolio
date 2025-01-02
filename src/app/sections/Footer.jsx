import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import NavItems from "../components/NavItems";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="c-space pt-8 pb-10 border-t bg-black text-white w-full">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center flex-wrap gap-5">
        <div className="w-full sm:w-auto">
          <NavItems />
        </div>
        <div className="text-gray-500 flex gap-2">
          <Link
            href="/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 focus:outline-none"
          >
            Terms & Conditions
          </Link>
          <span>|</span>
          <Link
            href="/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 focus:outline-none"
          >
            Privacy Policy
          </Link>
        </div>
        <div className="flex gap-3">
          <div className="social-icon">
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                size={30}
                className="text-gray-500 hover:text-gray-400"
              />
            </a>
          </div>
          <div className="social-icon">
            <a
              href="https://www.linkedin.com/in/darya-petrenko/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={30}
                className="text-gray-500 hover:text-gray-400"
              />
            </a>
          </div>
          <div className="social-icon">
            <a
              href="https://www.instagram.com/daryaperelay"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                size={30}
                className="text-gray-500 hover:text-gray-400"
              />
            </a>
          </div>
        </div>
        <p className="text-gray-500">
          © 2024 Darya Petrenko. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
