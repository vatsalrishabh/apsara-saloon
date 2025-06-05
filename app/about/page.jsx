"use client";
import React from 'react';
import Navbar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer';
import AboutUs from './AboutUs';
import LeftImg from './LeftImg';
import RightImg from './RightImg';
import sampleImg from "@/assets/images/ladies.png";
import mensImg from "@/assets/images/mens.jpg";
import menstwo from "@/assets/images/menstwo.jpg";
import mensthree from "@/assets/images/mensthree.webp";
import facial from "@/assets/images/facial.jpg";
import bridal from "@/assets/images/bridal.png";

const sections = [
  {
    component: "LeftImg",
    heading: "Apsara Unisex Salon",
    description:
      "Discover a new standard of elegance and care at Apsara Unisex Salon. Whether you're looking to revamp your hairstyle, rejuvenate your skin, or simply pamper yourself with our wide array of beauty treatments, we’re here to serve both men and women with unmatched expertise. Our highly trained stylists and aestheticians offer services ranging from advanced skincare and precision haircuts to relaxing spa treatments — all delivered in a welcoming, luxurious environment designed for comfort and confidence. Step into beauty, the Apsara way.",
    sampleImg: sampleImg,
  },
  {
    component: "RightImg",
    heading: "A Vision for Inclusive Beauty",
    description:
      "At Apsara Unisex Salon, we’re more than just a beauty destination — we’re a movement toward inclusivity and self-expression. We proudly serve individuals of all identities and orientations, ensuring every service is personalized to reflect your unique style. From traditional grooming to bold, modern transformations, our team is committed to creating a safe and affirming space where everyone feels celebrated. Beauty knows no boundaries here. Join us in redefining what it means to feel truly seen, valued, and radiant in your own skin.",
    sampleImg: mensImg,
  },
  {
    component: "LeftImg",
    heading: "Premium Hair & Styling Services",
    description:
      "Transform your hair into your best asset with our premium hair styling and treatment services. From precision cuts and color correction to deep conditioning and keratin smoothing, our experienced stylists use cutting-edge techniques and top-of-the-line products to bring your vision to life. Whether you want a bold new look or a subtle refresh, our salon ensures you leave feeling confident, vibrant, and runway-ready. We tailor every session to meet your personal style and hair health goals.",
    sampleImg: menstwo,
  },
  {
    component: "RightImg",
    heading: "Relaxing Spa & Wellness Experience",
    description:
      "Step into a world of serenity with Apsara’s spa and wellness services designed to calm the mind and revitalize the body. Enjoy indulgent massages, detoxifying facials, body wraps, and more in a tranquil, soothing environment. Our expert therapists tailor each treatment to your skin type and relaxation needs. Whether you're escaping the daily grind or preparing for a special occasion, our spa experience leaves you renewed, refreshed, and radiant from head to toe.",
    sampleImg: facial,
  },
  {
    component: "LeftImg",
    heading: "Grooming Essentials for Men",
    description:
      "At Apsara Unisex Salon, we cater to the modern man with grooming services that exude sophistication and care. From stylish haircuts and beard trims to skin treatments and scalp massages, we offer a full grooming experience in a comfortable, masculine environment. Whether you're prepping for an interview, a date, or a regular self-care routine, our services help men look sharp, feel confident, and walk out refreshed and recharged — because self-care isn’t just for women.",
    sampleImg: mensthree,
  },
  {
    component: "RightImg",
    heading: "Bridal & Event Makeup Services",
    description:
      "Make your special day truly unforgettable with Apsara’s bridal and event makeup services. Our talented makeup artists work closely with you to design a look that complements your features, matches your outfit, and lasts through every dance and photo. Whether it’s for a wedding, engagement, or photoshoot, we provide both traditional and airbrush makeup, along with hair styling and draping. At Apsara, every bride and celebrant is treated with the love, care, and glam they deserve.",
    sampleImg: bridal,
  },
  {
    component: "LeftImg",
    heading: "Skincare That Glows With You",
    description:
      "Your skin tells your story — let Apsara help make it a glowing one. Our skin care treatments are designed to address a range of concerns from acne and pigmentation to dullness and aging. Using dermatologist-approved techniques and premium products, we offer facials, peels, dermaplaning, and more. Each service is customized based on your skin type and goals. Walk in for a consultation, and walk out with healthier, radiant skin you’ll love to show off.",
    sampleImg: facial,
  },
];

const page = () => {
  return (
    <div style={{ background: "#fff" }}>
      <Navbar />
      <AboutUs />
      <div style={{ background: "#a10550", height: 2, width: "80%", margin: "0 auto", paddingTop: 40 }} />
      <div style={{ background: "#a10550", color: "#a10550", padding: 80 }}></div>
      {sections.map((section, index) => {
        const Component = section.component === "LeftImg" ? LeftImg : RightImg;
        return (
          <Component
            key={index}
            heading={section.heading}
            description={section.description}
            sampleImg={section.sampleImg}
          />
        );
      })}
      <Footer />
    </div>
  );
};

export default page;
