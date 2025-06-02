"use client";

import { Poppins, Montserrat } from 'next/font/google'; // Import the Google fonts you want
import './globals.css';
import '../lib/fontawesome';
import { Provider } from "react-redux";
import { store } from ".././redux/store"
import 'animate.css';


// Configure the fonts
const poppins = Poppins({
  weight: ['400', '500', '600', '700'], // Specify the weights you need
  subsets: ['latin'],
  variable: '--font-poppins',
});

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat',
});

// export const metadata = {
//   title: 'Glam Beauty Store',
//   description: 'We make you more beautiful',
// };

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${poppins.variable} ${montserrat.variable} font-sans antialiased`}>
        <>
         <Provider store={store}>
          {children}
        </Provider>
        </>
      </body>
    </html>
  );
}
