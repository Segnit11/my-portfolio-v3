
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Import Inter and set it as the default font
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], 
  variable: "--font-inter",
});
export const metadata: Metadata = {
  title: "An :-)",
  
  description: "Thai An's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
