import React from "react";
import Image from "next/image";
const footer = () => {
  return (
    <footer
      className="bg-gray-800 w-full text-white  bg-cover  bg-center py-4"
      style={{ backgroundImage: "url('assests/footer-bg.png')" }}
    >
      <div className="container  h-[350px]  sm:h[200px] flex flex-col items-center justify-center w-[80%] md:w-[50%] mx-auto text-center">
        {/* Add your footer content here */}
        <Image
          src="/assests/gato-ecosystem.png"
          alt="Gato Ecosystem"
          width={400}
          height={400}
        />
        <p className="text-lg my-8 text-gray-500">
          Gato Ecosystem use gato gate, as the central hub, offering a fast
          track to efficient operations on Gatochain, turning ideas and startups
          into a dynamic Web 3 Space for ReFi, wealth management & endless
          legacy building.
        </p>
        <p className="text-xs text-gray-500 mt-2">
          © Copyright 2024 | Nebula Foundation | Saint Kitts and Nevis
        </p>
      </div>
    </footer>
  );
};

export default footer;
