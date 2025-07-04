import type { Metadata } from "next";
import { Open_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar/Navbar";
import Footer from "@/components/common/Footer/Footer";

const open_sans = Open_Sans({
  weight: "300",
  variable: "--font-open",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  weight: "400",
  variable: "--font-play",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s",
    default: "India’s Top-Rated Ortho Mattress Brand",
  },
  description:
    "Dr. Back is one of India’s fastest-growing and best-reviewed orthopedic mattress brands.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${open_sans.variable} ${playfair.variable}`}>
        <main className="relative flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-grow flex-1">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
