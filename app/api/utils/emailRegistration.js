// File: /utils/emailRegistration.js
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.Nodemailer_Email,
    pass: process.env.Nodemailer_Pass,
  },
});

const verifyTransporter = () => {
  return new Promise((resolve, reject) => {
    transporter.verify((error, success) => {
      if (error) {
        console.error("Transporter verification failed:", error);
        reject(error);
      } else {
        console.log("Email transporter verified.");
        resolve(success);
      }
    });
  });
};

verifyTransporter().catch(err => console.error("Transporter Error:", err));

export const emailRegistration = (to, otp, subject) => {
  const mailOptions = {
    from: process.env.Nodemailer_Email,
    to,
    subject,
    html: `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <h2 style="color: #FF4081; text-align: center;">Welcome to Apsara Unisex Salon!</h2>
        <p>Dear Customer,</p>
        <p>Thank you for choosing Apsara. Use the OTP below to verify your registration:</p>
        <div style="text-align: center; margin: 20px 0;">
          <span style="font-size: 24px; font-weight: bold;">${otp}</span>
        </div>
        <p>This OTP is valid for 10 minutes. Please do not share it with anyone.</p>
        <p style="color: #555;">— The Apsara Unisex Salon Team</p>
      </div>
    `,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        reject(error);
      } else {
        console.log("Email sent:", info.response);
        resolve(info);
      }
    });
  });
};
