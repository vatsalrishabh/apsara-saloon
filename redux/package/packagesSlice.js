import { createSlice } from "@reduxjs/toolkit";

const initialState = {
packages: [
  {
    id: 1,
    title: "Straight Cut",
    category: "Hair Cut",
    price: 350,
    duration: "30 mins",
    services: ["Straight Cut"]
  },
  {
    id: 2,
    title: "U Cut",
    category: "Hair Cut",
    price: 500,
    duration: "30 mins",
    services: ["U Cut"]
  },
  {
    id: 3,
    title: "V Cut",
    category: "Hair Cut",
    price: 600,
    duration: "30 mins",
    services: ["V Cut"]
  },
  {
    id: 4,
    title: "Bob Cut",
    category: "Hair Cut",
    price: 500,
    duration: "30 mins",
    services: ["Bob Cut"]
  },
  {
    id: 5,
    title: "Blunt Cut",
    category: "Hair Cut",
    price: 600,
    duration: "30 mins",
    services: ["Blunt Cut"]
  },
  {
    id: 6,
    title: "Layers Cut",
    category: "Hair Cut",
    price: 1500,
    duration: "40 mins",
    services: ["Layers Cut"]
  },
  {
    id: 7,
    title: "U Layers Cut",
    category: "Hair Cut",
    price: 1600,
    duration: "40 mins",
    services: ["U Layers Cut"]
  },
  {
    id: 8,
    title: "Boy Cut",
    category: "Hair Cut",
    price: 500,
    duration: "30 mins",
    services: ["Boy Cut"]
  },
  {
    id: 9,
    title: "Step Cut",
    category: "Hair Cut",
    price: 1250,
    duration: "35 mins",
    services: ["Step Cut"]
  },
  {
    id: 10,
    title: "Front Bangs",
    category: "Hair Cut",
    price: 500,
    duration: "25 mins",
    services: ["Front Bangs"]
  },
  {
    id: 11,
    title: "Angled Bob",
    category: "Hair Cut",
    price: 600,
    duration: "30 mins",
    services: ["Angled Bob"]
  },
  {
    id: 12,
    title: "French Cut",
    category: "Hair Cut",
    price: 300,
    duration: "25 mins",
    services: ["French Cut"]
  },
  {
    id: 13,
    title: "Layers with Curtain Bangs",
    category: "Hair Cut",
    price: 1800,
    duration: "45 mins",
    services: ["Layers", "Curtain Bangs"]
  },
  {
    id: 14,
    title: "Basic Hair Spa",
    category: "Hair Spa",
    price: 1200,
    duration: "45 mins",
    services: ["Basic Hair Spa"]
  },
  {
    id: 15,
    title: "Premium Hair Spa",
    category: "Hair Spa",
    price: 2600,
    duration: "60 mins",
    services: ["Premium Hair Spa"]
  },
  {
    id: 16,
    title: "Hair Spa Anti Dandruff/Hair Fall",
    category: "Hair Spa",
    price: 2800,
    duration: "60 mins",
    services: ["Anti Dandruff", "Hair Fall Treatment"]
  },
  {
    id: 17,
    title: "Hair Spa Combination Treatment",
    category: "Hair Spa",
    price: 1500,
    duration: "60 mins",
    services: ["Combination Spa Treatment"]
  },
  {
    id: 18,
    title: "Keratin Treatment",
    category: "Hair Treatment",
    price: 2800,
    duration: "90 mins",
    services: ["Keratin"]
  },
  {
    id: 19,
    title: "Root Touch Up",
    category: "Hair Colour",
    price: 1200,
    duration: "45 mins",
    services: ["Root Touch Up"]
  },
  {
    id: 20,
    title: "Global Colour",
    category: "Hair Colour",
    price: 3000,
    duration: "60 mins",
    services: ["Global Hair Colour"]
  },
  {
    id: 21,
    title: "Balayage",
    category: "Hair Colour",
    price: 6500,
    duration: "90 mins",
    services: ["Balayage"]
  },
  {
    id: 22,
    title: "High Lights",
    category: "Hair Colour",
    price: 3500,
    duration: "60 mins",
    services: ["Hair Highlights"]
  },
  {
    id: 23,
    title: "Blow Dry",
    category: "Hair Styling",
    price: 600,
    duration: "30 mins",
    services: ["Blow Dry"]
  },
  {
    id: 24,
    title: "Straightening",
    category: "Hair Styling",
    price: 700,
    duration: "30 mins",
    services: ["Hair Straightening"]
  },
  {
    id: 25,
    title: "Curling",
    category: "Hair Styling",
    price: 1500,
    duration: "40 mins",
    services: ["Curling"]
  },
  {
    id: 26,
    title: "Tongs Hairstyle",
    category: "Hair Styling",
    price: 1500,
    duration: "45 mins",
    services: ["Tongs Styling"]
  },
  {
    id: 27,
    title: "Crimping",
    category: "Hair Styling",
    price: 1000,
    duration: "30 mins",
    services: ["Crimping"]
  },
  {
    id: 28,
    title: "Keratin",
    category: "Hair Treatment",
    price: 3999,
    duration: "90 mins",
    services: ["Keratin"]
  },
  {
    id: 29,
    title: "Botox",
    category: "Hair Treatment",
    price: 4999,
    duration: "90 mins",
    services: ["Botox Treatment"]
  },
  {
    id: 30,
    title: "Smoothing",
    category: "Hair Treatment",
    price: 4000,
    duration: "90 mins",
    services: ["Hair Smoothing"]
  },
  {
    id: 31,
    title: "Straighting",
    category: "Hair Treatment",
    price: 4000,
    duration: "90 mins",
    services: ["Hair Straightening"]
  },
  {
    id: 32,
    title: "Hair Wash",
    category: "Hair Treatment",
    price: 500,
    duration: "15 mins",
    services: ["Hair Wash"]
  },
  {
    id: 33,
    title: "Head Massage",
    category: "Hair Treatment",
    price: 500,
    duration: "20 mins",
    services: ["Head Massage"]
  }
]
,
  selectedService: null, // ✅ new state
};

const packagesSlice = createSlice({
  name: "packages",
  initialState,
  reducers: {
    setSelectedService: (state, action) => {
      state.selectedService = action.payload;
    },
  },
});

export const { setSelectedService } = packagesSlice.actions;
export const selectPackages = (state) => state.packages.packages;
export const selectSelectedService = (state) => state.packages.selectedService;
export default packagesSlice.reducer;
