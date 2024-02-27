import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className="flex justify-center align-center pt-3">
        <Image
          src="/logo.jpeg"
          alt="Profile Picture"
          width={200}
          height={200}
        />
      </div>
      <div className="flex flex-wrap justify-center">
        <div>
          <Image src="/trophy.jpeg" alt="Trophy" width={350} height={100} />
        </div>
        <div>
          <p className="font-bold pb-3 mt-6">
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.
          </p>
          <ul className="list-disc mx-8 mb-5">
            <li> C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for 
              various projects across the globe to save energy.</li>
            <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the 
              old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
          </ul>
          <Image src="/present.jpeg" alt="Presentation" width={600} height={600} />
          <p className="mt-4">
            Government of India has awarded the <span className="font-bold">National Energy Conservation Award 2018.</span>
            Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha &amp; Shri. Raj Kumar Singh, Honorable Minister of State.
          </p>
        </div>
      </div>
      <div className="text-center">
        <p className="my-4 ">
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.
        </p>
        <div className="flex justify-center align-middle">
          <Image src="/machine.jpeg" alt="Products" width={800} height={200} />
        </div>
        <p className="my-6">Valves - Pumps-Pipes - Iot Drives &amp; Controllers - Wires &amp; Cables - Solar System - Motors</p>
      </div>

      <div className="text-center">
        <p className="font-bold my-3">C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
        <p className="mb-4">CHEMICALS &amp; PROCESS POWER WATER &amp; WASTE WATER OILS &amp; GAS PHARMA SUGARS &amp; DISTILLERIES PAPER &amp; PULP MARINE &amp; DEFENCE METAL &amp; MINING FOOD &amp; BEVERAGE PETROCHEMICAL &amp; REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE &amp; RESIDENTIAL</p>
      </div>
      <div className="flex justify-between align-middle md:px-52 px-10 bg-red-500 py-7">
        <a href="#">
          <p className="text-white">Toll free 1800 200 1234</p>
        </a>
        <a href="#">
          <p className="text-white">www.facebook.com/cripumps</p>
        </a>
        <a href="#">
          <p className="text-white">www.crigroups.com</p>
        </a>
      </div>
    </main>
  );
}
