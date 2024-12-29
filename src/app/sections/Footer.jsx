import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="c-space pt-8 pb-4 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <a
          href="/terms"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 focus:outline-none"
        >
          <p>Terms & Conditions</p>
        </a>
        <p>|</p>
        <a
          href="/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 focus:outline-none"
        >
          <p>Privacy Policy</p>
        </a>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} className="text-white-500" />
          </a>
        </div>
        <div className="social-icon">
          <a
            href="https://www.linkedin.com/in/darya-petrenko/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} className="text-white-500" />
          </a>
        </div>
        <div className="social-icon">
          <a
            href="https://www.instagram.com/daryaperelay"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={30} className="text-white-500" />
          </a>
        </div>
      </div>

      <p className="text-white-500">
        © 2024 Darya Petrenko. All rights reserved.
      </p>
    </section>
  );
};
export default Footer;
