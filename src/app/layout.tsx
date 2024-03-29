import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers";
import Navbar from "@/components/modules/landing/navbar/navbar";
import Footer from "@/components/modules/landing/footer/footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Silver Oak Study Material",
  description: "Silver Oak Study Materia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-B3WRLMME0D"
        ></Script>
        <Script id="google-analytics">
          {`
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
           gtag('config', 'G-B3WRLMME0D');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <Providers>
          {/* <Navbar /> */}
          <main>{children}</main>
          {/* <Footer /> */}
        </Providers>
      </body>
    </html>
  );
}
