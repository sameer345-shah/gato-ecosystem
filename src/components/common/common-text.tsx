import React from "react";
interface TextProps {
  route: string;
}
const Commontext: React.FC<TextProps> = ({ route }) => {
  return (
    <>
      {route == "hello" ? (
        <div className="  py-8 w-full border-y-gray-300 border-y my-5 ">
          <p className="mt-2 mb-2 text-gray-500 text-md">
            If this activity is not done by you, please contact us immediately
            <a href="#" className="text-blue-500 ">
              support@gatochain.com
            </a>
          </p>
        </div>
      ) : (
        <div className="  py-7  border-y-gray-300 border-y my-5 ">
          <p className="mt-2 mb-2 text-gray-500 text-md">
            Don&apos;t recognize this activity?
            <a href="#" className="text-blue-500 ">
              reset your password
            </a>
            and contact
            <a href="#" className="text-blue-500 ">
              customer support
            </a>
            immediately.
          </p>
          <p className=" mt-4 text-md text-gray-500">
            This is an automated message, please do not reply.
          </p>
        </div>
      )}
    </>
  );
};

export default Commontext;
