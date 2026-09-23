import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import NextTopLoader from 'nextjs-toploader';
import Navbar from './components/Navbar';
import Footer from "./components/Footer"
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono", // Defines the CSS variable name
  display: "swap",
});

export const metadata = {
  title: "Nazmus Sadat",
  description: "This is a portfolio website.",
  icons: {
    icon: "/favicon.png?v=1",
    apple: "/favicon.png?v=1",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        <NextTopLoader className="next-loader" color="#000000" speed={100} showSpinner={false} shadow={false}/>

        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
