import Countdown from "../countdown/Countdown";
import Image from "next/image";
import dc32Logo from "../../../public/images/dc32-logo-2color-halftonegradient.webp";
import localFont from "next/font/local";

const neuropolXFont = localFont({
  src: "../../../public/fonts/neuropol_x.woff2",
  display: "swap",
  variable: "--font-neuropol-x",
});

export default function Splash() {
  return (
    <div className="my-12">
      <div className="flex w-full justify-center items-center text-center mt-5">
        <div>
          <Image
            src={dc32Logo}
            alt="DEF CON 32 Logo"
            className="md:w-96 w-64 relative"
          />
        </div>
      </div>
      <Countdown />
    </div>
  );
}
