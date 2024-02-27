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
      <div className="flex flex-wrap justify-center align-middle">
        <div>
          <Image src="/trophy.jpeg" alt="Trophy" width={350} height={100} />
        </div>
        <div>
          <p className="font-bold pb-3 mt-6">
            {" "}
            cncncks emfknwfrofwoffwolrmf;fk
          </p>
          <ul className="list-disc mx-8 mb-5">
            <li>behwbeebjwkew</li>
            <li>dveujdvdewej</li>
          </ul>
          <Image src="/present.jpeg" alt="Trophy" width={600} height={600} />
          <p className="mt-4">
            vdsvdgsvsdvcsdvcs{" "}
            <span className="font-bold">*National Surgery Conversation*</span>{" "}
            jcsbd hdbds
          </p>
        </div>
      </div>
      <div className="text-center">
        <p className="my-4 ">
          looeorfrbheebrcslbccbcnbcsbc NATION ejwbcd
          kbkejwbewkwffwwefjwebcwkjfbwj cbdjsfsbbdhj
        </p>
        <div className="flex justify-center align-middle">
          <Image src="/machine.jpeg" alt="Products" width={800} height={200} />
        </div>
        <p className="my-6">kfsjljfnlsnnfjslnvlsfjfbhfdhdfbhfbdbsdjzbvhz</p>
      </div>

      <div className="text-center">
        <p className="font-bold my-3">shcakbcbdckabhcd</p>
        <p className="mb-4">efhiuefififidsudfoesdf</p>
      </div>
      <div className="flex justify-between align-middle md:px-52 px-10 bg-red-500 py-7">
        <a href="#">
          <p className="text-white">hswww.jdjd</p>
        </a>
        <a href="#">
          <p className="text-white">hswww.jdjd</p>
        </a>
        <a href="#">
          <p className="text-white">hswww.jdjd</p>
        </a>
      </div>
    </main>
  );
}
