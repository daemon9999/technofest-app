import { Link } from "react-router-dom";
import { GrTechnology } from "react-icons/gr";
import { RiLogoutCircleRFill, RiLogoutCircleRLine, RiTeamFill } from "react-icons/ri";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Fragment } from "react";
import { FaUser } from "react-icons/fa";
import classNames from "classnames";
import { HiMiniCurrencyDollar } from "react-icons/hi2";
export default function Header() {
  const linkStyle = `flex items-center  gap-x-2 bg-200 text-400 px-3 py-1 text-lg rounded border border-200 hover:bg-transparent 
  hover:text-200 transition-all duration-300`;
  return (
    <header className="bg-white shadow-md shadow-200">
      <div className="container mx-auto w-[90%] flex items-center justify-between">
        <Link to={"/"} className="w-20 h-20 flex items-center gap-x-3">
          <img
            src="/icons/logo-icon.png"
            className="w-full h-full"
            alt="Logo Icon"
          />
          <span className="uppercase font-montserrat text-2xl tracking-widest font-extrabold gradient-text">
            agro4help
          </span>
        </Link>

        <div className="flex  items-center gap-x-4 font-montserrat font-medium">
          <Link to={"/tech"} className={linkStyle}>
            <GrTechnology size={22} />
            Our Tech
          </Link>
          {/* <Link to={"/team"} className={linkStyle}>
            <RiTeamFill size={22} />
            Team Members
          </Link> */}

          <Link to={"/about"} className={linkStyle}>
            <BsFillInfoCircleFill size={22} />
            About Company
          </Link>

          <Link to={"/contact"} className={linkStyle}>
            <MdOutlineConnectWithoutContact size={23} />
            Contact Us
          </Link>

          <Menu as={"div"} className={"relative"}>
            {({ open }) => (
              <>
                <MenuButton
                  as="button"
                  className={classNames(
                    `border border-200 w-10 h-10 flex transition-all duration-300 items-center 
                    justify-center  rounded-full `,
                    {
                      "hover:bg-transparent hover:text-200 text-400 bg-200":
                        !open,
                      "bg-transparent text-200": open,
                    }
                  )}
                >
                  <FaUser size={22} />
                </MenuButton>
                <MenuItems
                  as="div"
                  className={`z-[100] bg-white absolute text-400 border-200 top-full right-0 translate-y-2 px-3 py-2 rounded shadow-md shadow-200 whitespace-nowrap
                    flex flex-col items-start gap-y-1
                    `}
                >
                    <p className="text-sm mb-2 text-600 font-semibold">Welcome, Our Farm Guest!</p>
                  <MenuItem as={Fragment}>
                    <Link  className={linkStyle + ' text-base w-full'} to={"/subscription"}><HiMiniCurrencyDollar size={22} />Subscription Plan</Link>
                  </MenuItem>

                  <MenuItem as={Fragment}>
                    <Link  className={linkStyle + ' text-base w-full'} to={"/subscription"}><RiLogoutCircleRLine size={22} />Log out</Link>
                  </MenuItem>
                </MenuItems>
              </>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}
