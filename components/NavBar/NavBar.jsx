"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import LRFButton from "../reduxLogin/LRFButton";
import LogoutAvtar from "../reduxLogin/LogoutAvtar";

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

// Smooth scroll utility
const smoothScroll = (target) => {
  if (target === "#home" || target === "#top" || target === "/") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else if (target && target.startsWith("#")) {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const pathname = usePathname();
  const router = useRouter();
  const [loggedInUser, setLoggedInuser] = useState(null);

  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem("userDetails"));
    if (userDetails) setLoggedInuser(userDetails);
  }, []);

  // Scroll to hash if it exists (used after redirecting to homepage)
  useEffect(() => {
    if (pathname === "/") {
      const scrollTarget = sessionStorage.getItem("scrollTarget");
      if (scrollTarget) {
        sessionStorage.removeItem("scrollTarget");
        smoothScroll(scrollTarget);
        setActiveLink(scrollTarget.replace("#", ""));
      }
    }

    if (pathname === "/") {
      setActiveLink("home");
    } else {
      const currentPath = pathname.split("/")[1];
      if (currentPath) setActiveLink(currentPath);
    }

    if (window.location.hash && pathname === "/") {
      smoothScroll(window.location.hash);
    }
  }, [pathname]);

  const handleLinkClick = (href, activeKey) => {
    setIsOpen(false);
    setActiveLink(activeKey);

    if (href.startsWith("#")) {
      if (pathname !== "/") {
        sessionStorage.setItem("scrollTarget", href);
        router.push("/");
      } else {
        smoothScroll(href);
      }
    } else {
      router.push(href);
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    smoothScroll("#top");
    setActiveLink("home");
    window.history.pushState(null, "", "/");
  };

  const handleLogout = () => {
    setLoggedInuser(null);
  };

  return (
    <nav className="flex justify-between items-center px-4 md:px-20 bg-white sticky top-0 z-10 w-full h-[80px] font-poppins uppercase text-primary py-4 md:py-12">
      {/* Logo */}
      <div className="logo">
        <a href="/" onClick={handleLogoClick}>
          <Image
            src="/images/apsaralogo.jpeg"
            alt="logo"
            width={150}
            height={100}
            priority
          />
        </a>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-primary text-2xl"
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </button>
      </div>

      {/* Desktop Navigation */}
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

      {/* Desktop Auth Buttons */}
      <div className="hidden md:flex buttons">
        <div className="flex items-center">
          {loggedInUser ? (
            <LogoutAvtar onLogout={handleLogout} />
          ) : (
            <LRFButton
              displayLogin={true}
              displayRegister={false}
              displayForgot={false}
            />
          )}
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
          <div className="mt-4 flex justify-center items-center">
            {loggedInUser ? (
              <LogoutAvtar onLogout={handleLogout} />
            ) : (
              <LRFButton
                displayLogin={true}
                displayRegister={false}
                displayForgot={false}
              />
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

// Nav item for desktop
const NavItem = ({ icon, name, href, isActive, onClick }) => (
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

// Nav item for mobile
const MobileNavItem = ({ icon, name, href, isActive, onClick }) => (
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

// Navigation items
const navItems = [
  { icon: faHome, name: "Home", href: "#home", activeKey: "home" },
  { icon: faScissors, name: "Services", href: "#services", activeKey: "services" },
  { icon: faBuilding, name: "About Us", href: "/about", activeKey: "about" },
  { icon: faIdBadge, name: "Contact Us", href: "#contact", activeKey: "contact" },
  { icon: faIdBadge, name: "Booking", href: "#book", activeKey: "booking" },
];

export default NavBar;
