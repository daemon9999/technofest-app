import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="py-10 shadow-md shadow-100">
      <div className="container mx-auto w-[90%] flex gap-x-10 items-center">
        <div className="flex flex-col flex-auto items-end order-2 gap-y-4">
        <h4 className="text-4xl font-black tracking-widest text-10 uppercase font-montserrat  ">
          About us
        </h4>
        <p className="text-end text-2xl font-semibold text-700 ">
              The leading minds in technology, data science and agronomy are
              working to address the great challenge of our time...
            </p>
            <Link to={'/about'} className="bg-100 px-4 border border-100 hover:bg-transparent hover:text-100 transition-all duration-300 py-1 text-xl font-medium text-400 rounded">Explore more </Link>
        </div>
       

        <div className="flex  w-[calc(80%-80px)] flex-shrink-0 gap-x-10 order-1">
          <span className="w-full h-auto hover:scale-[1.15] transition-all cursor-pointer filter saturate-[1.2]">
            <img
              src="/images/main-bg.webp"
              alt="Main Background Image"
              className="w-full h-auto rounded-[100px]"
            />
          </span>
    
          <span className="w-full h-auto hover:scale-[1.15] transition-all cursor-pointer filter saturate-[1.2]">
            <img
              src="/images/main-bg-2.webp"
              alt="Main Background Image"
              className="w-full h-auto rounded-[100px]"
            />
          </span>
          <span className="w-full h-auto hover:scale-[1.15] transition-all cursor-pointer filter saturate-[1.2]">
            <img
              src="/images/intro-image.png"
              alt="Main Background Image"
              className="w-full h-auto rounded-[100px]"
            />
          </span>
        </div>
      </div>
    </section>
  );
}
