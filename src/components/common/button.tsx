import React from "react";
import { useRouter } from "next/navigation";
interface ButtonProps {
  route: string;
  buttonRoute: string;
  buttonLabel: string;
}
const button: React.FC<ButtonProps> = ({ buttonRoute, buttonLabel, route }) => {
  const router = useRouter();

  const style =
    route != "2fa"
      ? "bg-[#335BE9] text-white py-2 px-8 rounded-[50px] hover:bg-blue-600"
      : "bg-[#EFF3FF] rounded-[10px] py-2 px-8  font-semibold ";
  return (
    <button className={style} onClick={() => router.push(buttonRoute)}>
      {buttonLabel}
    </button>
  );
};

export default button;
