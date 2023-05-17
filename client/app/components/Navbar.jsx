"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="flex justify-between items-center h-20 p-4 bg-green-200 overflow-hidden">
      <Link href="/">
        <Image
          src="/assets/dolarslogo.png"
          alt="LogoDolars"
          className="object-contain"
          height={30}
          width={40}
        />
      </Link>

      <ul className="flex list-none relative">
        <li className="group transition duration-300 ml-4">
          <Link href="/">Inicio</Link>
          <span
            className={`block max-w-0 ${
              pathname === "/" && `max-w-full `
            } group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600`}
          ></span>
        </li>
        <li className="group transition duration-300 ml-4">
          <Link href="/bancos">Bancos</Link>
          <span
            className={`block max-w-0 ${
              pathname === "/bancos" && `max-w-full `
            } group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600`}
          ></span>
        </li>
        <li className="group transition duration-300 ml-4">
          <Link href="/calculadora">Calculadora</Link>
          <span
            className={`block max-w-0 ${
              pathname === "/calculadora" && `max-w-full `
            } group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600`}
          ></span>
        </li>
      </ul>
    </nav>
  );
}
