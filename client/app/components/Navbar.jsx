"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Routes } from "../routes/routes";
import Navigation from "./Navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="flex justify-between items-center h-20 p-4 bg-green-200 overflow-hidden">
      <Link href={Routes.HOME.path}>
        <Image
          src="/assets/dolarslogo.png"
          alt="LogoDolars"
          className="object-contain"
          height={30}
          width={40}
        />
      </Link>

      <Navigation
        pathnames={[Routes.HOME, Routes.BANCOS, Routes.CALCULADORA]}
      />
    </nav>
  );
}
