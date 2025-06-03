"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer";
import DesktopWallet from "./DesktopWallet";
import SmartPhoneWallet from "./SmartPhoneWallet";
import LRFButton from "@/components/reduxLogin/LRFButton";

const Page = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem("userDetails"));
    if (userDetails) {
      setLoggedInUser(userDetails);
    }
  }, []);

  useEffect(() => {
    if (loggedInUser) {
      console.log("Logged-in user:", loggedInUser);
    }
  }, [loggedInUser]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-white via-slate-100 to-gray-200 pt-20 px-4 md:px-8">
        {loggedInUser ? (
          <div className="max-w-4xl mx-auto p-4 rounded-xl shadow-md bg-white">
            {/* <DesktopWallet /> */}
            <SmartPhoneWallet loggedInUser={loggedInUser} />
          </div>
        ) : (
          <div className="flex justify-center items-center min-h-[60vh]">
            <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
              <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800">
                Welcome! Please Login to Continue
              </h2>
              <LRFButton
                displayLogin={true}
                displayRegister={false}
                displayForgot={false}
              />
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Page;
