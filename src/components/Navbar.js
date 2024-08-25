"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaCartArrowDown } from "react-icons/fa6";
import { MdCancel, MdMenu } from "react-icons/md";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];
  const cartMeals = JSON.parse(localStorage.getItem("fraiche-cart")) || [];
  return (
    <div className="flex w-full absolute font-medium items-center justify-around py-5">
      <h2 className="text-3xl">Fraiche</h2>
      <div
        className={`flex md:gap-10 duration-200 text-xl ${
          isOpen
            ? "flex-col translate-x-0 md:flex-row z-40 md:relative fixed top-0 gap-12 w-4/5 left-0  h-screen md:w-auto md:h-auto items-center text-2xl bg-black-prime md:bg-transparent pt-16 md:pt-0"
            : "-translate-x-full  md:translate-x-0"
        } `}
      >
        {navLinks.map(({ name, path }, index) => (
          <Link
            className={`hover:text-fraiche-yellow relative ${
              path == pathname
                ? "text-fraiche-yellow after:content-[''] after:rounded-sm  after:left-0 after:-bottom-1 after:bg-fraiche-yellow after:w-4/5 after:absolute md:after:h-1"
                : "after:w-0"
            }  ${
              isOpen
                ? "border-b md:border-0 border-fraiche-yellow w-full py-2 md:py-0 text-center"
                : "hidden md:block"
            } duration-400`}
            href={path}
            key={index}
          >
            {name}
          </Link>
        ))}
      </div>
      <div className="flex  items-center gap-4">
        <Link href="/checkout" className="relative">
          <span className="absolute text-white bg-red-600 w-5 h-5 flex justify-center -top-2 -right-2 rounded-full">
            {cartMeals && cartMeals.length > 0 && cartMeals.length > 10
              ? `10+`
              : `${cartMeals.length}`}
          </span>
          <FaCartArrowDown size={30} />
        </Link>

        <Link href={"/menu"}>
          <button className="hidden md:block text-xl border border-fraiche-yellow py-2 px-4 rounded-md duration-200 hover:bg-fraiche-yellow">
            Order Now
          </button>
        </Link>
      </div>

      <span
        onClick={() => setIsOpen(true)}
        className={`${isOpen ? "hidden" : ""} md:hidden`}
      >
        <MdMenu size={30} />
      </span>
      <span
        onClick={() => setIsOpen(false)}
        className={`${isOpen ? "" : "hidden"} md:hidden right-5 absolute`}
      >
        <MdCancel size={35} />
      </span>
    </div>
  );
};

export default Navbar;
