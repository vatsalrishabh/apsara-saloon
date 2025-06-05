"use client";
import React from "react";
import DashboardCard from "./DashboardCard";

// Import Icons
import ListAltIcon from "@mui/icons-material/ListAlt";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import PaymentIcon from "@mui/icons-material/Payment";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import AdminBreadCrumbs from "../components/Admin/AdminBreadCrumbs";
// import { useSelector } from "react-redux";

// Data Array for Cards

const cardData = [
  { heading: "Manage History", number: 1250, Icon: ListAltIcon, bgColor: "#4A90E2", link:"/admin/membersHistory" },

];

const breadcrumbLinks = [
    { label: "Admin", href: "/admin" },
    // { label: "Manage Orders", href: "/admin/manageorder" },
  ];
const RLaptopSideNav = () => {
  // const products = useSelector((state) => state.allProducts.products);
  // console.log(products);
  return (
    <div className="w-full  right-0 h-[100vh] bg-red-700 p-6">
      {/* Grid Layout: 3 Columns on Large Screens, 1 Column on Small Screens */}
      <div className="p-4">
      <AdminBreadCrumbs links={breadcrumbLinks} name="Admin Dashboard" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cardData.map((card, index) => (
          <DashboardCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default RLaptopSideNav;
