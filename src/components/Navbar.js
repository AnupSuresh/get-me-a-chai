"use client";
import Link from "next/link";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import React, { useState } from "react";

const Navbar = () => {
  // State to handle the toggle of the mobile menu
  // const [isOpen, setIsOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const { data: session } = useSession();
  // if (session) {
  //   return (
  //     <>
  //       Signed in as {session.user.email} <br />
  //       <button onClick={() => signOut()}>Sign out</button>
  //     </>
  //   );
  // }

  return (
    <div>
      <nav className="startTemplate p-4 bg-gray-800 relative">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div>
            <Link
              className="flex justify-center items-center logo font-bold sm:text-lg text-white relative"
              href={"/"}
            >
              <Image
                src={"/picmix.com_1819794.gif"}
                alt="tea-gif"
                width={60}
                height={60}
                className=" relative bottom-2"
              ></Image>
              <span>GetMeAChai!</span>
            </Link>
          </div>
          <div className="flex justify-center items-center gap-4 ">
            {!session && (
              <Link href={"/login"}>
                <button
                  type="button"
                  className="text-white font-bold bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Login
                </button>
              </Link>
            )}
            {session && (
              <div className="relative inline-block">
                <button
                  onClick={handleClick}
                  onBlur={() => {
                    setTimeout(() => {
                      setIsOpen(false);
                    }, 300);
                  }}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button"
                >
                  Welcome {session.user.email}
                  <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                {/* Dropdown menu */}
                {isOpen && (
                  <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-slate-800 px-2 absolute mt-2">
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownHoverButton"
                    >
                      <li>
                        <Link
                          href="/dashboard"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-700 dark:hover:text-white hover:rounded-md"
                        >
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={`/${session.user.name}`}
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-700 dark:hover:text-white hover:rounded-md"
                        >
                          Your Page
                        </Link>
                      </li>

                      <li className=" mt-1">
                        <Link href={"/login"}>
                          <button
                            type="button"
                            className="text-white font-bold bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 rounded-lg text-sm px-5 py-2.5 text-center w-full"
                            onClick={() => {
                              signOut();
                            }}
                          >
                            Logout
                          </button>
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            )}

            {session && (
              <Link href={"/login"}>
                <button
                  type="button"
                  className="text-white font-bold bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 rounded-lg text-sm px-5 py-2.5 text-center"
                  onClick={() => {
                    signOut();
                  }}
                >
                  Logout
                </button>
              </Link>
            )}
          </div>
          {/* Desktop Menu */}
          {/* <ul className="hidden md:flex justify-center items-center gap-5 text-white">
            <li>
              <Link href="/" className="hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Project
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Sign Up
              </a>
            </li>
            <li>
              <Link href={"/login"}>
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Login
                </button>
              </Link>
            </li>
          </ul> */}

          {/* Mobile Menu Button (burger icon) */}
          {/* <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              Hamburger Icon
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div> */}
        </div>

        {/* Mobile Menu */}
        {/* {isOpen && (
          <ul className="md:hidden flex flex-col bg-gray-800 text-white space-y-2 p-4 rounded-md absolute top-4 right-20">
            <li>
              <a href="#" className="block p-2 hover:bg-gray-700">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 hover:bg-gray-700">
                About
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 hover:bg-gray-700">
                Project
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 hover:bg-gray-700">
                Sign Up
              </a>
            </li>
            <li>
              <Link href={"/login"}>
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Login
                </button>
              </Link>
            </li>
          </ul>
        )} */}
      </nav>
    </div>
  );
};

export default Navbar;
