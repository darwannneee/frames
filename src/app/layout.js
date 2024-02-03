import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:image" content="https://i.pinimg.com/564x/a2/63/b3/a263b35837d2204c5a3ddbe5fade0fb7.jpg" />
      <meta property="fc:frame:button:1" content="GM" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
