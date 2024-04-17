"use client"
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      name:"Inicio",
      link: "/",
    },
    {
      id: 2,
      name:"Productos",
      link: "/page/products",
    },
    {
      id: 3,
      name: "Mi Carrito",
      link: "/page/checkout",
    },
    {
      id: 4,
      name:"Iniciar Sesión",
      link: "/page/login",
    },
    
  ];

  return (
    <div className="fixed flex items-center justify-between w-full h-5 px-20 text-white py-14 nav navColor">
      <div>
        {/* <h1 className="ml-2 text-5xl font-signature"><a className="ease-in-out delay-150 link-underline hover:transition hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
        <h1 className="ml-2 text-5xl font-signature">
          <a
            className="link-underline link-underline-black"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            Logo
          </a>
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link,name }) => (
          <li
            key={id}
            className="px-4 font-medium text-gray-500 capitalize duration-200 cursor-pointer nav-links hover:scale-105 hover:text-white link-underline"
          >
            <Link href={link}>{name}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="z-10 pr-4 text-gray-500 cursor-pointer md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-screen text-gray-500 bg-gradient-to-b from-black to-gray-800">
          {links.map(({ id, link, name }) => (
            <li
              key={id}
              className="px-4 py-6 text-4xl capitalize cursor-pointer"
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;