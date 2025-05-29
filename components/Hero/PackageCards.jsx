"use client";
import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectPackages,
  setSelectedService,
} from "../../redux/package/packagesSlice"; // Adjust path as needed

const PackageCards = () => {
  const dispatch = useDispatch();
  const salonPackages = useSelector(selectPackages);
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [priceFilter, setPriceFilter] = useState(Infinity);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const filteredPackages = salonPackages.filter(
    (pkg) =>
      (categoryFilter === "all" || pkg.category === categoryFilter) &&
      pkg.price <= priceFilter
  );

  return (
    <div className="px-4 py-8" id="cards">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#a10550]">
        Our Salon Packages
      </h2>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
     <select
  onChange={(e) => setCategoryFilter(e.target.value)}
  className="border p-2 rounded-lg shadow"
>
  <option value="all">All Categories</option>
  <option value="Hair Cut">Hair Cut</option>
  <option value="Hair Spa">Hair Spa</option>
  <option value="Hair Colour">Hair Colour</option>
  <option value="Hair Styling">Hair Styling</option>
  <option value="Hair Treatment">Hair Treatment</option>
</select>


        <select
          onChange={(e) => setPriceFilter(Number(e.target.value))}
          className="border p-2 rounded-lg shadow"
        >
          <option value={Infinity}>All Prices</option>
          <option value={500}>Up to ₹500</option>
          <option value={1000}>Up to ₹1000</option>
          <option value={2000}>Up to ₹2000</option>
          <option value={5000}>Up to ₹5000</option>
        </select>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPackages.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white border border-gray-200 rounded-xl shadow-md p-4 hover:shadow-xl transition duration-300 flex flex-col justify-between h-[260px] text-sm"
          >
            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold text-[#a10550]">
                  {pkg.title}
                </h3>
                <span
                  className={`text-xs px-2 py-1 rounded-full font-semibold text-white ${
                    pkg.category === "package" ? "bg-[#a10550]" : "bg-green-600"
                  }`}
                >
                  {pkg.category === "package" ? "Package" : "Single"}
                </span>
              </div>
              <p className="text-gray-700 font-medium mb-1">₹{pkg.price}</p>
              <p className="text-gray-500 text-xs mb-3">{pkg.duration}</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4 overflow-hidden text-ellipsis h-[72px]">
                {pkg.services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>
            <div className="flex gap-2">
              <button
                className="w-1/2 bg-[#a10550] text-white font-bold py-1.5 rounded hover:bg-[#870442] transition text-xs"
                onClick={() => setSelectedPackage(pkg)}
              >
                Read More
              </button>
              <button
                className="w-1/2 bg-[#a10550] text-white font-bold py-1.5 rounded hover:bg-[#870442] transition text-xs"
                onClick={() => {
                  dispatch(setSelectedService(pkg));
                  document
                    .getElementById("book")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Book
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Dialog */}
      <Dialog
        open={!!selectedPackage}
        onClose={() => setSelectedPackage(null)}
        className="fixed z-50 inset-0 overflow-y-auto"
      >
        <div className="flex items-center justify-center min-h-screen px-4">
          <div className="fixed inset-0 bg-black opacity-30" />
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 z-10">
            {selectedPackage && (
              <>
                <Dialog.Title className="text-xl font-bold text-[#a10550] mb-4">
                  {selectedPackage.title}
                </Dialog.Title>
                <p className="mb-2 font-semibold">
                  Price: ₹{selectedPackage.price}
                </p>
                <p className="mb-2 text-sm text-gray-600">
                  Duration: {selectedPackage.duration}
                </p>
                <ul className="list-disc list-inside mb-4 text-gray-700">
                  {selectedPackage.services.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
                <button
                  onClick={() => setSelectedPackage(null)}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-1 px-4 rounded"
                >
                  Close
                </button>
              </>
            )}
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default PackageCards;
