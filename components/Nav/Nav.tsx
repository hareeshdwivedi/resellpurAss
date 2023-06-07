import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface NavProps {
  inView: any;
}
const Nav: React.FC<NavProps> = (inView) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [stickyClass, setStickyClass] = useState("relative");
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (typeof window !== undefined) {
      let scrolled = window.scrollY;
      window.innerWidth > 768
        ? scrolled > window.innerHeight || !inView
          ? (setIsSticky(true),
            setStickyClass(
              "bg-white fixed top-0 sm:!py-4 ease-in-out duration-100 z-50 shadow-class"
            ))
          : (setIsSticky(false), setStickyClass("relative"))
        : setStickyClass("relative");
    }
  };

  return (
    <>
      <nav
        className={`flex flex-wrap items-center justify-between w-full px-8 sm:py-10 pt-8 pb-4 lg:px-20 text-lg text-gray-700 ease-in-out duration-300 ${stickyClass}`}
      >
        <Link href="/">
          <a className="flex items-center">
            <Image
              src="/logo/logo.png"
              className="mr-3"
              alt="Logo"
              height={30}
              width={120}
            />
          </a>
        </Link>
        <div onClick={() => setToggle(!toggle)} className="block md:hidden">
          {toggle ? (
            <svg
              className="block h-6 w-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="menu-button"
              className="block h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </div>

        {toggle ? (
          <div className="flex-col md:hidden absolute top-20 left-0 bg-white w-full z-50 shadow-class">
            <ul className="flex flex-col mt-3 mb-4 text-[white] [&>li>a]:text-base [&>li]:pl-4">
              <li>
                <Link href="/#whychooseus">
                  <a className="block py-2 pr-4 pl-3 text-black">
                    Why Choose Us
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#howitworks">
                  <a className="block py-2 pr-4 pl-3 text-black">
                    How it Works
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#ourmission">
                  <a className="block py-2 pr-4 pl-3 text-black">Our Mission</a>
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <div className={`hidden md:flex`}>
            <ul className="flex flex-col items-center mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium text-[white]">
              <li>
                <Link href="/#whychooseus">
                  <a
                    className={`block py-2 pr-4 pl-3 px-2 border-color-blue ${
                      isSticky ? "text-secondary" : "text-white"
                    }`}
                  >
                    Why Choose us
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#howitworks">
                  <a
                    className={`block py-2 pr-4 pl-3 px-2 border-color-blue ${
                      isSticky ? "text-secondary" : "text-white"
                    }`}
                  >
                    How it Works
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#ourmission">
                  <a
                    className={`block py-2 pr-4 pl-3 px-2 border-color-blue ${
                      isSticky ? "text-secondary" : "text-white"
                    }`}
                  >
                    Our Mission
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Nav;
