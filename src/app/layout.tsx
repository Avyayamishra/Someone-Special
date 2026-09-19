import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope, Caveat } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const hand = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

const heartIcon = encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 20.5C7.2 16.2 3.8 13.1 3.8 9.6 3.8 6.9 6 4.7 8.7 4.7c1.3 0 2.5.6 3.3 1.6.8-1 2-1.6 3.3-1.6 2.7 0 4.9 2.2 4.9 4.9 0 3.5-3.4 6.6-8.2 10.9Z" fill="#A9C7E8"/></svg>`
);

export const metadata: Metadata = {
  title: "a little something for Jyoti ♡",
  description:
    "a small, soft corner of the internet — a few feelings, written down just for you.",
  icons: { icon: `data:image/svg+xml,${heartIcon}` },
};

export const viewport: Viewport = {
  themeColor: "#08090D",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${serif.variable} ${sans.variable} ${hand.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
