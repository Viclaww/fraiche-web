"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <div className="flex w-full absolute font-medium items-center justify-around py-5">
      <h2 className="text-3xl">Fraiche</h2>
      <div className="flex gap-10 text-xl">
        {navLinks.map(({ name, path }, index) => (
          <Link
            className={`${path == pathname ? "text-fraiche-yellow" : ""}`}
            href={path}
            key={index}
          >
            {name}
          </Link>
        ))}
      </div>
      <button className="text-xl border border-fraiche-yellow py-2 px-4 rounded-md duration-200 hover:bg-fraiche-yellow">
        Order Now
      </button>
    </div>
  );
};

export default Navbar;
