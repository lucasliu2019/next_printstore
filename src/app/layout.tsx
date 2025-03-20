import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.css";

import Footer from "./components/footer/footer";
import Header from "./components/header/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "3D Print Store",
  description: "Premium 3D printing products, photos, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>

        {/* Background Bubbles */}
        <div className={styles.bubbles}>
          <div className={styles.bubble}></div>
          <div className={styles.bubble}></div>
          <div className={styles.bubble}></div>
          <div className={styles.bubble}></div>
          <div className={styles.bubble}></div>
        </div>

          <Header />

        <main>
          {children}
        </main>

        <Footer />
      </body>


    </html>
  );
}
