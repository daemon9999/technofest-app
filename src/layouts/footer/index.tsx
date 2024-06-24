import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-10">
      <div className="w-[90%] container mx-auto flex flex-col gap-y-3 py-10">
        <div className="flex items-center justify-between border-b border-400 pb-4">
          <button onClick={() => window.scrollTo(0,0)} type="button" className="w-auto h-20 px-2 rounded-md bg-400 flex items-center">
            <img
              src="/icons/logo-icon.png"
              className="w-full h-full"
              alt="Logo Icon"
            />
            <span className="uppercase font-montserrat text-2xl tracking-widest font-extrabold gradient-text">
              agro4help
            </span>
          </button>

          <div className="flex items-center gap-x-4 text-400 font-bold tracking-wider text-xl">
          <Link to={'/farm'} className="hover:underline">Product</Link>
          <Link to={'/about'} className="hover:underline">Our Company</Link>
          <a href={window.location.pathname === '/' ? '#resources' : '/#resources'} className="hover:underline">Resources</a>
          <Link to={'/contact'} className="hover:underline">Support</Link>
          <a href={window.location.pathname === '/' ? '#features' : '/#features'} className="hover:underline">Features</a>
          </div>

        </div>

        <div className="text-lg text-400 tracking-wider ml-auto">
            &copy;{new Date(Date.now()).getFullYear()} AGRO4HELP, All rights reserved.
        </div>
      </div>
    </footer>
  );
}
