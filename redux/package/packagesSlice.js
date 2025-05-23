import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  packages: [
    {
      id: 1,
      title: "Gold Glow Facial",
      category: "package",
      price: 1499,
      duration: "60 mins",
      services: ["Cleansing", "Exfoliation", "Face Massage", "Glow Pack"],
    },
    {
      id: 2,
      title: "Full Body Wax",
      category: "package",
      price: 1199,
      duration: "90 mins",
      services: ["Arms", "Legs", "Underarms", "Back"],
    },
    {
      id: 3,
      title: "Bridal Package",
      category: "package",
      price: 5999,
      duration: "180 mins",
      services: ["HD Makeup", "Hair Styling", "Facial", "Draping"],
    },
    {
      id: 4,
      title: "Hair Spa + Trim",
      category: "package",
      price: 899,
      duration: "45 mins",
      services: ["Hair Wash", "Spa Massage", "Steam", "Trimming"],
    },
    {
      id: 5,
      title: "Party Makeup",
      category: "package",
      price: 2499,
      duration: "90 mins",
      services: ["Foundation", "Eye Makeup", "Lipstick", "Hair Do"],
    },
    {
      id: 6,
      title: "HairCut",
      category: "single",
      price: 250,
      duration: "90 mins",
      services: ["Haircut"],
    },
  ],
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
