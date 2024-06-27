"use client";
import Image from "next/image";
import React from "react";
interface HeaderProps {
  headerText: string;
}
const header: React.FC<HeaderProps> = ({ headerText }) => {
  return (
    <header
      className="bg-cover h-[200px] w-full flex flex-col items-center justify-center  bg-center text-white py-4"
      style={{ backgroundImage: "url('assests/header-bg.png')" }}
    >
      <div className="container flex flex-col w-full items-center justify-center mx-auto text-center">
        {/* Add your header content here */}
        <Image
          src="/assests/gato-ecosystem.png"
          alt="Gato Ecosystem"
          width={400}
          height={400}
        />
        <h1 className="text-4xl font-bold mb-6">{headerText}</h1>
      </div>
    </header>
  );
};

export default header;
