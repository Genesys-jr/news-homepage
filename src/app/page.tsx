import Navbar from "@/components/Navbar";
import Image from "next/image";
import mobile from "../../public/assets/images/mobile.jpg";
import desktop from "../../public/assets/images/desktop.jpg";

export default function Home() {
  return (
    <main className=" mx-4">
      <div>
        <Navbar />
      </div>
      <div>
        <Image src={mobile} alt={""} className="md:hidden" />
        <Image src={desktop} alt={""} className="hidden md:block" />
      </div>
      <div className="space-y-5">
        <h1 className="text-6xl font-bold">
          The Bright <br />
          Future of <br /> Web 3.0?
        </h1>
        <p className="text-slate-500">
          We dive into the next evolution of the web that <br /> claims to put
          power of the platforms back <br /> into the hands of the people. But
          is it really <br /> fulfilling its promise?
        </p>
        <button className="bg-red-400 text-white py-4 px-9">READ MORE</button>
      </div>
      <div className="bg-slate-900 space-y-5">
        <div>
          <h1>NEW</h1>
        </div>
        <div>
          <h1>Hydrogen VS Electric Cars</h1>
          <p>Will hydrogen-fueled cars ever catch up to EVs</p>
          <hr />
        </div>
        <div>
          <h1>Hydrogen VS Electric Cars</h1>
          <p>Will hydrogen-fueled cars ever catch up to EVs</p>
          <hr />
        </div>
        <div>
          <h1>Hydrogen VS Electric Cars</h1>
          <p>Will hydrogen-fueled cars ever catch up to EVs</p>
        </div>
      </div>
    </main>
  );
}
