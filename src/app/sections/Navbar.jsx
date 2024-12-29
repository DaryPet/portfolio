"use client";
import { useState } from "react";
import { navLinks } from "../constants/index";
import Link from "next/link";
import Image from "next/image";

const NavItems = ({ onClick = () => {} }) => (
  <ul className="nav-ul">
    {navLinks.map((item) => (
      <li key={item.id} className="nav-li">
        <a
          href={item.href}
          className="nav-li_a"
          onClick={(e) => {
            e.preventDefault();
            setTimeout(() => {
              const element = document.querySelector(item.href);
              if (element) {
                window.scrollTo({
                  top: element.offsetTop - 80,
                  behavior: "smooth",
                });
              }
              onClick();
            }, 100);
          }}
        >
          {item.name}
        </a>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-red bg-white-500">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <Link
            href="/"
            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
          >
            Darya Petrenko
          </Link>

          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu"
          >
            <Image
              src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"} // Убедитесь, что пути правильные
              alt="toggle"
              className="w-6 h-6"
              width={25}
              height={25}
            />
          </button>

          <nav className="sm:flex hidden text-white-800">
            <NavItems />
          </nav>
        </div>
      </div>

      <div
        className={`nav-sidebar ${
          isOpen ? "max-h-full" : "max-h-0"
        } overflow-hidden transition-all duration-300 ease-in-out sm:hidden`}
        style={{ maxHeight: isOpen ? "500px" : "0px" }}
      >
        <nav className="p-5 text-white">
          <NavItems onClick={closeMenu} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
