"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="flex justify-between items-center h-20 p-4 bg-green-200 overflow-hidden">
      <Link href="/">
        <img
          src="/static/dolarslogo.png"
          alt="LogoDolars"
          className="h-14 object-contain w-40"
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
