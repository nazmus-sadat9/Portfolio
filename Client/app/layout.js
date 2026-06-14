import { Space_Grotesk } from "next/font/google";
import NextTopLoader from 'nextjs-toploader';
import Navbar from './Components/Navbar';
import Footer from "./Components/Footer"
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio",
  description: "This is a animated portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        <NextTopLoader className="next-loader" color="#000000" speed={100} showSpinner={false} shadow={false}/>

        <Navbar />

        {children}

        
      </body>
    </html>
  );
}
