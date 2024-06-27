import React from "react";
import Image from "next/image";
import Rowbreak from "./row-break";
import useWidth from "../../utils/useWidth"; // Import the custom hook

const GatoSection = () => {
  const width = useWidth();

  return (
    <div className="mt-8 mb-5 w-[90%] md:w-[80%] text-center">
      <div className="flex justify-center items-center space-x-4 mb-4">
        <Image
          src="/assests/gato-ecosystem.png"
          alt="Logo 1"
          width={width > 768 ? 300 : 150} // Adjust width based on screen size
          height={width > 768 ? 300 : 150}
        />
        <Rowbreak />
        <Image
          src="/assests/gusd.png"
          alt="Logo 2"
          width={width > 768 ? 150 : 75} // Adjust width based on screen size
          height={width > 768 ? 150 : 75}
        />
        <Rowbreak />
        <Image
          src="/assests/gato-scan.png"
          alt="Logo 3"
          width={width > 768 ? 200 : 100} // Adjust width based on screen size
          height={width > 768 ? 200 : 100}
        />
      </div>
    </div>
  );
};

export default GatoSection;
