// import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "./_components/SmoothScrolling.jsx";
import Navbar from "./_components/Navbar";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      
      <head>
        <link rel="icon" type="image/svg+xml" href="portfolio/public/assets/images/apple.svg" />
        <title>staicu, viviana</title>
      </head>
      <body className="">
        <SmoothScrolling>
          <Navbar />
          {children}
        </SmoothScrolling>
      </body>
      
    </html>

  );
}
