import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/home/nav-bar/ResponsiveNav";
import Provider from "@/components/hoc/Provider";
import Footer from "@/components/home/Footer";
import ScrollToTop from "@/components/helpers/ScrollToTop";
import AOSProvider from "@/components/AOSProvider";
import { Analytics } from "@vercel/analytics/next";

const font = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Developherj | Freelance Web developer",
  description: "I'm J, a freelance Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className} antialiased`}>
        <AOSProvider />
        <Provider>
          <ResponsiveNav />
          {children}
          <Analytics />
          <Footer />
          <ScrollToTop />
        </Provider>
      </body>
    </html>
  );
}
