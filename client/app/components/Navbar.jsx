import Link from "next/link";
import Image from "next/image";
import { Routes } from "../routes/routes";
import Navigation from "./Navigation";
import logoDolars from "../../public/images/dolarslogo.png";

export default function Navbar({ refNav }) {
  return (
    <nav
      ref={refNav}
      className="flex justify-between items-center h-20 p-4 bg-green-200 overflow-hidden"
    >
      <Link href={Routes.INICIO.path}>
        <Image
          src={logoDolars}
          alt="LogoDolars"
          className="object-cover"
          height={40}
          width={60}
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
