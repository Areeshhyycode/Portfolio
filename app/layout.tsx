import type { Metadata } from "next";
import localFont from "next/font/local";
// @ts-ignore
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Areesha Rafiq — MERN Stack & AI Developer",
  description:
    "Self-taught full-stack developer building AI-powered platforms with the MERN stack, Next.js, and React Native.",
  keywords: [
    "Areesha Rafiq",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Native Developer",
    "AI Developer",
    "Full Stack Developer",
    "Pakistan",
  ],
  authors: [{ name: "Areesha Rafiq" }],
  openGraph: {
    title: "Areesha Rafiq — MERN Stack & AI Developer",
    description:
      "Self-taught full-stack developer building AI-powered platforms with MERN, Next.js, and React Native.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-neutral-900 font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
