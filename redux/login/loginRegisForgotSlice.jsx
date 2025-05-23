"use client";
import { createSlice } from "@reduxjs/toolkit";

const loginRegisForgotSlice = createSlice({
  name: "loginRegisForgot",
  initialState: {
    loginForm: false,
    registerForm: false,
    forgotPassForm: false,
  },
  reducers: {
    showLoginForm: (state) => {
      state.loginForm = true;
      state.registerForm = false;
      state.forgotPassForm = false;
    },
    showRegisterForm: (state) => {
      state.loginForm = false;
      state.registerForm = true;
      state.forgotPassForm = false;
    },
    showForgotPassForm: (state) => {
      state.loginForm = false;
      state.registerForm = false;
      state.forgotPassForm = true;
    },
    hideAllForms: (state) => {
      state.loginForm = false;
      state.registerForm = false;
      state.forgotPassForm = false;
    },
  },
});

export const {
  showLoginForm,
  showRegisterForm,
  showForgotPassForm,
  hideAllForms,
} = loginRegisForgotSlice.actions;

export default loginRegisForgotSlice.reducer;
