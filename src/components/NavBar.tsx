import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed top-0 z-10 w-full bg-white px-2 py-2 shadow">
      <div className="flex h-full w-full items-center justify-between px-2">
        <div className="flex">
          <img
            src="Logo.jpeg"
            height={110}
            width={110}
            alt="Logo"
            className="cursor-pointer"
          />
          <div className="mt-11 text-2xl "> Ferjen Steve Coffee Shop </div>
        </div>

        <div className="hidden lg:flex lg:items-center lg:justify-center">
          <ul className="lg:flex">
            <li className="text-md my-6 mr-10">
              <Link
                href="/"
                className={`font-semibold text-yellow-900  ${
                  router.pathname === "/"
                    ? "border-b-4 border-yellow-900 py-2"
                    : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li className="text-md my-6 mr-10">
              <Link
                href="/contact"
                className={`font-semibold text-yellow-900  ${
                  router.pathname === "/contact"
                    ? "border-b-4 border-yellow-900  py-2"
                    : ""
                }`}
              >
                Contact Us
              </Link>
            </li>

            <li className="text-md my-6 mr-10">
              <Link
                href="/coffee-shop"
                style={{ backgroundColor: "#230404" }}
                className="rounded-full px-4 py-3 font-bold text-white"
              >
                Coffee Shop
              </Link>
            </li>
          </ul>
        </div>

        {/* Navigation for MD and SM view */}
        <div className="lg:hidden">
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Dropdown menu for MD and SM view */}
      <div
        className={`fixed left-0 top-0 h-screen w-full transform bg-white ${
          menuOpen
            ? "z-10 translate-y-0 transition-transform ease-in"
            : "-translate-y-full"
        } px-4 py-2 duration-500 lg:hidden`}
      >
        {/* Close button for MD and SM view */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex">
            <img
              src="Logo.jpeg"
              height={110}
              width={110}
              alt="Logo"
              className="cursor-pointer"
            />
            <div className="mt-11 text-2xl "> Ferjen Steve Coffee Shop </div>
          </div>
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={25} />
          </div>
        </div>

        {/* Navigation links for MD and SM view */}
        <div className="flex-col py-4">
          <ul>
            <li
              onClick={() => setMenuOpen(false)}
              className="mb-20 ml-6 mt-6 cursor-pointer text-lg"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={() => setMenuOpen(false)}
              className="mb-20 ml-6 mt-10 cursor-pointer text-lg"
            >
              <Link href="/contact">Contact Us </Link>
            </li>

            <Link href="/coffee-shop">
              <li
                onClick={() => setMenuOpen(false)}
                className="mt-8 rounded bg-yellow-900 px-6 py-2 text-center font-bold text-white"
              >
                COFFEE SHOP
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
