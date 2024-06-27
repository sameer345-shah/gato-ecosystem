import React from "react";
import Image from "next/image";
import Rowbreak from "./row-break";
const GatoSection = () => {
  return (
    <div className="mt-8 mb-5 w-[90%] md:w-[80%] text-center">
      <div className="flex justify-center items-center space-x-4 mb-4">
        <Image
          src="/assests/gato-ecosystem.png"
          alt="Logo 1"
          width={300}
          height={300}
        />
        <Rowbreak />
        <Image src="/assests/gusd.png" alt="Logo 2" width={150} height={150} />
        <Rowbreak />
        <Image
          src="/assests/gato-scan.png"
          alt="Logo 3"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};

export default GatoSection;
