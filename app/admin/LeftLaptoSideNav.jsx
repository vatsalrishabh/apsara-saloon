"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import ListAltIcon from "@mui/icons-material/ListAlt";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import PaymentIcon from "@mui/icons-material/Payment";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const LeftLaptoSideNav = () => {
  const router = useRouter();

  const adminLogout = () => {
    localStorage.removeItem("adminDetails");
    window.location.reload();
  };

  const navLinks = [
    { label: "Members History", href: "/admin/membersHistory", icon: <ListAltIcon /> },
  
  ];

  return (
    <div className="lg:block w-[20%] h-screen bg-gray-900 text-white p-4  left-0 top-0">
      <h2 className="text-xl font-semibold mb-6 text-center">Admin Panel</h2>

      <nav>
        <ul className="space-y-4">
          {navLinks.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition duration-300"
              >
                {item.icon}
                {item.label}
              </Link>
            </li>
          ))}

          <li>
            <button
              onClick={adminLogout}
              className="flex items-center gap-3 p-3 w-full text-left rounded-lg hover:bg-gray-700 transition duration-300"
            >
              <ExitToAppIcon />
              Log Out
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default LeftLaptoSideNav;
