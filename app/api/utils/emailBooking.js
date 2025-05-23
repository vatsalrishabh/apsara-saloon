// File: /utils/emailBooking.js
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

/**
 * Send booking details to customer (and optionally CC).
 * @param {string} to - Recipient email
 * @param {string} subject - Email subject
 * @param {string} name - Customer name
 * @param {string} phone - Customer phone
 * @param {string} email - Customer email
 * @param {string} date - Booking date
 * @param {string} time - Booking time
 * @param {string} serviceName - Service booked
 * @param {string|number} servicePrice - Price of service
 * @param {string} [cc] - Optional CC email address
 */
export const sendBookingDetailsEmail = (
  to,
  subject,
  name,
  phone,
  email,
  date,
  time,
  serviceName,
  servicePrice,
  cc = '' //enter the salon admin email
) => {
  const mailOptions = {
    from: process.env.Nodemailer_Email,
    to,
    cc: cc || undefined,
    subject,
    html: `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <h2 style="color: #FF4081; text-align: center;">Booking Confirmation - Apsara Unisex Salon</h2>
        <p>Dear ${name},</p>
        <p>Thank you for booking with us! Here are your appointment details:</p>
        <ul style="list-style: none; padding: 0;">
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Date:</strong> ${date}</li>
          <li><strong>Time:</strong> ${time}</li>
          <li><strong>Service:</strong> ${serviceName}</li>
          <li><strong>Price:</strong> ₹${servicePrice}</li>
        </ul>
        <p>We look forward to serving you at Apsara Unisex Salon.</p>
        <p style="color: #555;">— The Apsara Unisex Salon Team</p>
      </div>
    `,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending booking email:", error);
        reject(error);
      } else {
        console.log("Booking confirmation email sent:", info.response);
        resolve(info);
      }
    });
  });
};
