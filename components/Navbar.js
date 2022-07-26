import { Menu, Transition } from "@headlessui/react";
import { DotsVerticalIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { Logo } from "../utils/images";
import TextSearch from "./TextSearch";
import { useRouter } from "next/router";

const menu = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "Live Channels",
    href: "account",
  },
  {
    id: 3,
    name: "Top Categories",
    href: "account",
  },
  {
    id: 4,
    name: "Account",
    href: "account",
  },
];

const menuItems = [
  {
    id: 1,
    to: "#",
    name: "Settings",
  },
  {
    id: 2,
    to: "#",
    name: "Support",
  },
  {
    id: 3,
    to: "#",
    name: "License",
  },
];

function MenuItem({ name, to }) {
  return (
    <Menu.Item>
      {({ active }) => (
        <a
          href={to}
          className={`${
            active ? " text-gray-100 bg-gray-500" : "text-gray-200"
          } block px-4 py-2 text-sm `}
        >
          {name}
        </a>
      )}
    </Menu.Item>
  );
}

function MyDropdown() {
  return (
    <Menu as="div" className="relative text-left m-0">
      <Menu.Button>
        <DotsVerticalIcon className="w-5 cursor-pointer" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-[#0e0e10] ring-1 ring-white ring-opacity-5 focus:outline-none">
          {menuItems.map((item) => (
            <MenuItem key={item.id} name={item.name} to={item.to} />
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [activeLink, setActiveLink] = useState(false);
  const [searchText, setSearchText] = useState("");
  const { pathname } = useRouter();
  useEffect(() => {
    if (pathname === "/browse") {
      setActiveLink(true);
      return;
    }
    setActiveLink(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 z-10 w-full">
      <div className="flex items-center justify-between px-2 ">
        <div
          className={`${
            navbar ? "" : "z-10"
          } flex items-center gap-8 min-h-[50px]`}
        >
          <Link href="/" passHref>
            <a href="">
              <Image
                src={Logo}
                alt="/"
                width="26"
                height="26"
                className="cursor-pointer z-10"
              />
            </a>
          </Link>
          <Link href="browse" className="">
            <h3 className="font-semibold text-lg hover:text-purple-500 hover-transition cursor-pointer relative">
              Browse
              {activeLink && (
                <span className="absolute w-full h-1 bg-purple-400 top-[120%] left-0 "></span>
              )}
            </h3>
          </Link>

          <div className="flex items-center justify-center  hover:bg-gray-800 px-1 pt-1 rounded">
            <MyDropdown />
          </div>
        </div>
        <TextSearch
          value={searchText}
          handleClear={() => setSearchText("")}
          handleSearch={(e) => setSearchText(e.target.value)}
          handleClick={() => console.log(searchText)}
        />
        <div className="hidden md:flex items-center">
          <div className="rounded bg-purple-500 px-3 py-1 cursor-pointer hover:bg-purple-700 hover-transition">
            <Link href="account">
              <span className="font-bold text-sm">Account</span>
            </Link>
          </div>
        </div>
        <div className="block md:hidden z-10">
          {navbar ? (
            <XIcon
              className="h-8 text-white cursor-pointer"
              onClick={() => setNavbar(false)}
            />
          ) : (
            <MenuIcon
              className="h-8 text-white cursor-pointer"
              onClick={() => setNavbar(true)}
            />
          )}
        </div>
        <ul
          className={`${
            navbar ? "top-0 left-0" : "top-[-200%] left-0"
          } md:hidden fixed w-full h-full bg-[#0e0e10] flex flex-col justify-center items-center ease-in duration-500 gap-6`}
        >
          {menu.map((item) => (
            <li key={item.id} className="text-3xl font-bold cursor-pointer">
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
