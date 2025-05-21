"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import logo from '@/assets/images/4 1header-log.png';

import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faGlobe,
  faHome,
  faIdBadge,
  faScissors,
  faSearch,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

// Enhanced smooth scroll utility function
const smoothScroll = (target) => {
  if (target === "#home" || target === "#top" || target === "/") {
    // Scroll to top of page
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } else if (target && target.startsWith("#")) {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }
};

const NavBar = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const pathname = usePathname();

  useEffect(() => {
    // Handle initial active link state
    if (pathname === "/") {
      setActiveLink("home");
    } else {
      const currentPath = pathname.split("/")[1];
      if (currentPath) setActiveLink(currentPath);
    }

    // Handle hash-based scrolling when page loads
    if (window.location.hash) {
      smoothScroll(window.location.hash);
    }
  }, [pathname]);

  const handleLinkClick = (href, activeKey) => {
    if (href.startsWith("#")) {
      smoothScroll(href);
      setActiveLink(activeKey);
    } else if (href === "/") {
      smoothScroll("#top");
      setActiveLink("home");
    }
    setIsOpen(false);
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    smoothScroll("#top");
    setActiveLink("home");
    window.history.pushState(null, "", "/");
  };

  return (
    <nav className="flex justify-between items-center px-4 md:px-20 bg-white sticky top-0 z-10 w-full h-[80px] font-poppins uppercase text-primary py-4 md:py-12">
      {/* Logo */}
      <div className="logo">
        <a href="/" onClick={handleLogoClick}>
          <Image
            // src={logo}
            src="/images/apsaralogo.jpeg"
            alt="logo"
            width={150} // or your preferred width
            height={100} // or your preferred height
            priority
          />
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-primary text-2xl"
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </button>
      </div>

      {/* Desktop Menus */}
      <div className="hidden md:flex menus">
        <ul className="flex gap-6 lg:gap-10">
          {navItems.map((item) => (
            <NavItem
              key={item.name}
              {...item}
              isActive={activeLink === item.activeKey}
              onClick={() => handleLinkClick(item.href, item.activeKey)}
            />
          ))}
        </ul>
      </div>

      {/* Desktop Buttons */}
      <div className="hidden md:flex buttons">
        <div className="flex items-center">
          <input
            type="search"
            placeholder="search"
            className="bg-slate-100 rounded-sm outline-none pl-2 py-1 text-sm md:text-base"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="pl-1 text-xl md:text-2xl cursor-pointer text-primary"
          />
          <span className="px-3 md:px-5 text-primary text-sm md:text-base">
            US (EN)
          </span>
          <FontAwesomeIcon
            icon={faGlobe}
            className="cursor-pointer text-primary text-xl md:text-2xl"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-[80px] left-0 right-0 bg-white shadow-lg py-4 px-6">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <MobileNavItem
                key={item.name}
                {...item}
                isActive={activeLink === item.activeKey}
                onClick={() => handleLinkClick(item.href, item.activeKey)}
              />
            ))}
          </ul>
          <div className="mt-4 flex items-center">
            <input
              type="search"
              placeholder="search"
              className="bg-slate-100 rounded-sm outline-none pl-2 py-1 text-sm flex-grow"
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="pl-1 text-xl cursor-pointer text-primary"
            />
          </div>
          <div className="flex items-center mt-4">
            <span className="text-primary text-sm">US (EN)</span>
            <FontAwesomeIcon
              icon={faGlobe}
              className="ml-2 cursor-pointer text-primary text-xl"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

// NavItem component
const NavItem = ({ icon, name, href, isActive, onClick }) => {
  return (
    <li
      className={`transition-all duration-[0.5s] hover:scale-[1.1] ${
        isActive ? "border-b-2 border-primary" : ""
      }`}
    >
      <span className="pr-1">
        <FontAwesomeIcon
          icon={icon}
          className={`cursor-pointer ${
            isActive ? "text-secondary" : "text-primary"
          }`}
        />
      </span>
      <a
        href={href}
        onClick={(e) => {
          e.preventDefault();
          onClick();
        }}
        className={`${
          isActive ? "text-secondary font-semibold" : "text-primary"
        } cursor-pointer`}
      >
        {name}
      </a>
    </li>
  );
};

// MobileNavItem component
const MobileNavItem = ({ icon, name, href, isActive, onClick }) => {
  return (
    <li
      className={`transition-all duration-[0.5s] px-2 py-1 rounded ${
        isActive ? "bg-primary text-white" : "hover:bg-gray-50"
      }`}
    >
      <a
        href={href}
        onClick={(e) => {
          e.preventDefault();
          onClick();
        }}
        className={`flex items-center ${
          isActive ? "text-white" : "text-primary"
        } cursor-pointer`}
      >
        <FontAwesomeIcon icon={icon} className="mr-2" />
        {name}
      </a>
    </li>
  );
};

// Navigation items
const navItems = [
  { icon: faHome, name: "Home", href: "#home", activeKey: "home" },
  {
    icon: faScissors,
    name: "Services",
    href: "#services",
    activeKey: "services",
  },
  { icon: faBuilding, name: "About Us", href: "#about", activeKey: "about" },
  {
    icon: faIdBadge,
    name: "Contact Us",
    href: "#contact",
    activeKey: "contact",
  },
  {
    icon: faIdBadge,
    name: "Booking",
    href: "#book",
    activeKey: "booking",
  },
];

export default NavBar;
