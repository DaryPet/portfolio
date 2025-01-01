"use client";

import { navLinks } from "../constants/index";
import Link from "next/link";
import { useState } from "react";

const NavItems = ({ onClick = () => {} }) => {
  const [activeLink, setActiveLink] = useState(null);

  return (
    <ul className="flex flex-col sm:flex-row sm:space-x-4">
      {navLinks.map((item) => (
        <li key={item.id} className="nav-li">
          <Link
            href={item.href}
            className={`nav-li_a ${
              activeLink === item.id ? "text-white" : "text-neutral-400"
            }`}
            onClick={(e) => {
              e.preventDefault();
              setActiveLink(item.id);
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
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
