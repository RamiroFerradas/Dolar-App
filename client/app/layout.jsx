import MarqueeComponent from "./components/Marquee";
import Navbar from "./components/Navbar";
import "./tailwind-global.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dolar App",
  description:
    "Aplicacion que brinda informacion actualizada del cambio dolar / ars",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <Navbar />
        <MarqueeComponent />
        {children}
      </body>
    </html>
  );
}
