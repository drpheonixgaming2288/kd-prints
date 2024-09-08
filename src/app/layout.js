import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "KDPrints",
  description:
    "KDPrints was founded by Korbin Coffelt and Dylan Rogers, two friends passionate about 3D printing technology and its potential to create unique, useful items. Our mission is to provide high-quality 3D printed products and custom solutions to our customers, bringing creativity and functionality together."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
