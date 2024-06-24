import IntroLoader from "@/components/loaders/intro-loader";
import { BiAnalyse } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Intro() {
  return (
    <section className="relative mt-10 bg-gradient-to-r from-10 to-100 ">
      <div className="container mx-auto flex items-center gap-x-10  w-[90%] p-10 ">
        <div className="w-[calc(50%-40px)]  items-start flex flex-col gap-y-10 flex-shrink-0">
          <h1 className="font-montserrat tracking-wider font-bold text-4xl text-400">
            <span className="text-20">Digital Farming’s</span> Leading Software
            Platform
          </h1>
          <p className="text-xl text-400 w-[400px]">
            Analyze your farm’s data down to the acre with Climate FieldView
          </p>
          <Link
            to={"/farm"}
            className="flex items-center gap-x-3 px-3 rounded-md py-2 text-xl bg-100 text-400 hover:bg-20 hover:text-100 transition-all duration-300 "
          >
            Explore Your Farm
            <BiAnalyse />

          </Link>
        </div>

        <div >
            <IntroLoader/>
        </div>

        <span className="w-[400px] ml-auto ">
          <img src="/images/digital-image-2.webp" className="rounded-md " alt="Digital Intro Image" />
        </span>
      </div>
    </section>
  );
}
