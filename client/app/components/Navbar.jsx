import Link from "next/link";
import Image from "next/image";
import { Routes } from "../routes/routes";
import Navigation from "./Navigation";

export default function Navbar({ refNav }) {
  return (
    <nav
      ref={refNav}
      className="flex justify-between items-center h-20 p-4 bg-green-200 overflow-hidden"
    >
      <Link href={Routes.INICIO.path}>
        <Image
          src="/assets/dolarslogo.png"
          alt="LogoDolars"
          className="object-contain"
          height={30}
          width={40}
        />
      </Link>

      <Navigation
        pathnames={[
          Routes.INICIO,
          Routes.BANCOS,
          Routes.CALCULADORA,
          // Routes.CASAS,
        ]}
      />
    </nav>
  );
}
