import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./Homepage/NavBar";
import Footer from "./Homepage/Footer";
import TopBar from "./Homepage/TopBar";
import fav from '../../public/smallwgs.png'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WHY Global sevices",
  description: "WHY Global sevices",
 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <head>
        <link
  rel="icon"
  href="/smallwgs.png?<generated>"
  type="image/<generated>"
  sizes="<generated>"
/>
  </head>
 
  
      <body className={inter.className}>
   
        <TopBar />
        <NavBar />
        <div className="pt-[66px] sm:pt-[72px] md:pt-[90px]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
