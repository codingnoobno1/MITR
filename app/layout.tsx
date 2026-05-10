import type { Metadata } from "next";
import { Roboto, Inter } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MITR | Modular Intelligent Tech Resources",
  description: "Building futuristic AI-powered systems, modular developer tools, and scalable technology experiences.",
  icons: {
    icon: "/MITR.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900 selection:bg-blue-600 selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}
