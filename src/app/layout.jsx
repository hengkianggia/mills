import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import NavbarBottom from "@/components/navbar/NavbarBottom";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-[100dvh] bg-orange-400 relative top-16">{children}</main>
        <Footer />
        <NavbarBottom />
      </body>
    </html>
  );
}
