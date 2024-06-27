"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { getContentByRoute } from "../../utils/route";
import Header from "./header";
import GatoSection from "./gato-section";
import Button from "./button";
import Footer from "./footer";
import CommonText from "./common-text";
import Thanktext from "./thank-text";
interface LayoutProps {
  route: string;
}
const Layout: React.FC<LayoutProps> = ({ route }: any) => {
  const router = useRouter();
  const content = getContentByRoute(route);

  return (
    <div className="min-h-screen w-full bg-white flex flex-col">
      {/* Header with Background Image */}
      <Header headerText={content.headerText} />

      <main className="flex-grow bg-gray-100 flex flex-col w-full items-center justify-center">
        <div className="p-8 w-full max-w-lg text-center">
          <div className="flex justify-center mb-6">
            <Image
              src={content.imagePath}
              alt="Gato Ecosystem"
              width={200}
              height={200}
              onClick={() => router.push(content.buttonRoute)}
              className="cursor-pointer"
            />
          </div>
          <p className="mb-6 text-gray-500 ">{content.heading}</p>

          {route == "email" ? undefined : (
            <Button
              buttonRoute={content.buttonRoute}
              buttonLabel={content.buttonLabel}
              route={route}
            />
          )}
          <CommonText route={route} />
          <Thanktext />
        </div>
        <GatoSection />
      </main>

      {/* Footer Placeholder */}
      <Footer />
    </div>
  );
};

export default Layout;
