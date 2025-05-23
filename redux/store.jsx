'use client';
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";
import allProductReducer from "./cart/allProductSlice"; // ✅ Correct path
import openCartReducer from "./cart/openCartSlice";
import loginRegisForgotReducer from "./login/loginRegisForgotSlice"
import packagesReducer from "./package/packagesSlice"; 
import dateReducer from './booking/dateSlice';

export const store = configureStore({
    reducer:{
        date: dateReducer,
        cart:cartReducer,
        openCart:openCartReducer,
        allProducts: allProductReducer,
        loginRegisForgot:loginRegisForgotReducer,
        packages: packagesReducer,
    },
});
