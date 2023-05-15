import React from "react";
import Link from "next/link";
import logo from "../app/assets/images/logo/DolArs.png";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-200">
      <Link href="/">
        <img src={logo} alt="LogoDolars" className="" />
      </Link>

      <ul className="flex list-none">
        <li className="ml-4">
          <Link href="/">Inicio</Link>
        </li>
        <li className="ml-4">
          <Link href="/bancos">Bancos</Link>
        </li>
      </ul>
    </nav>
  );
}
