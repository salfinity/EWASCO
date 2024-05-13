"use client";
import Link from "next/link";
import Logo from "./Logo";
import { MoonIcon, SunIcon } from "../Icons";
import MobileUserMenu from "./MobileUserMenu";
import UserMenu from "./UserMenu";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import siteMetadata from "/src/utils/siteMetaData";
import { useThemeSwitch } from "../Hooks/useThemeSwitch";
import { useState } from "react";
import { cx } from "/src/utils";

const Header = () => {
  const [mode, setMode] = useThemeSwitch();
  const [click, setClick] = useState(false);

  const toggle = () => {
    setClick(!click);
  };
  return (
    <header className="w-full p-4  px-5 sm:px-10 flex items-center justify-between">
      <Logo />

      <button
        className="inline-block mr-3 sm:hidden z-50"
        onClick={toggle}
        aria-label="Hamburger Menu"
      >
        <div className="w-6 cursor-pointer transition-all ease duration-300">
          <div className="relative">
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: click
                  ? "rotate(-45deg) translateY(0)"
                  : "rotate(0deg) translateY(6px)",
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                opacity: click ? 0 : 1,
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: click
                  ? "rotate(45deg) translateY(0)"
                  : "rotate(0deg) translateY(-6px)",
              }}
            >
              &nbsp;
            </span>
          </div>
        </div>
      </button>

      <nav
        className="w-max py-3 px-6 sm:px-8 border border-solid border-dark rounded-md font-medium capitalize  items-center flex-col  sm:hidden
        fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50
        transition-all ease duration-300 my-2
        "
        style={{
          top: click ? "3.5rem" : "-23rem",
        }}
      >
        <div className="flex items-center justify-between mb-3">
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={cx(
              "w-10 h-10 ease flex items-center justify-center rounded-full p-2 border-zinc-500 border-2",
              mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
            )}
            aria-label="theme-switcher"
          >
            {mode === "light" ? (
              <MoonIcon className={"fill-dark"} />
            ) : (
              <SunIcon className={"fill-dark"} />
            )}
          </button>
          <div className="ml-auto flex items-center">
            <MobileUserMenu />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mb-10 mt-10">
          <Link href="/" className="mb-2">
            Home
          </Link>
          <Link href="/classes" className="my-2">
            Classes
          </Link>
          <Link href="/e-learning" className="my-2">
            E-learning
          </Link>
          <Link href="/contact" className="my-2">
            Contact
          </Link>
        </div>
        <div className="flex my-4 gap-4 items-center justify-center">
          <a
            href={siteMetadata.twitter}
            className="inline-block w-6 h-6 mr-4"
            aria-label="Reach out to me via Twitter"
            target="_blank"
          >
            <FaXTwitter
              size={30}
              className="text-[#003366] hover:scale-125 transition-all ease duration-200"
            />
          </a>
          <a
            href={siteMetadata.facebook}
            className="inline-block w-6 h-6 mr-4"
            aria-label="Check my profile on Dribbble"
            target="_blank"
          >
            <FaFacebook
              size={30}
              className="text-blue-600 hover:scale-125 transition-all ease duration-200"
            />
          </a>
        </div>
      </nav>

      <nav
        className="w-max py-3 px-8 border border-solid border-dark rounded-md font-medium capitalize  items-center hidden sm:flex
        fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50"
      >
        <Link href="/" className="mr-2">
          Home
        </Link>
        <Link href="/classes" className="mx-2">
          Classes
        </Link>
        <Link href="/e-learning" className="mx-2">
          E-learning
        </Link>
        <Link href="/contact" className="mx-2">
          Contact
        </Link>
        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={cx(
            "w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1",
            mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
          )}
          aria-label="theme-switcher"
        >
          {mode === "light" ? (
            <MoonIcon className={"fill-dark"} />
          ) : (
            <SunIcon className={"fill-dark"} />
          )}
        </button>
      </nav>
      <div className=" hidden sm:flex items-center">
        <a
          href={siteMetadata.twitter}
          className="inline-block w-6 h-6 mr-4"
          aria-label="Reach out to me via Twitter"
          target="_blank"
        >
          <FaXTwitter
            size={30}
            className="text-black dark:text-white hover:scale-125 transition-all ease duration-200"
          />
        </a>
        <a
          href={siteMetadata.facebook}
          className="inline-block w-6 h-6 mr-4"
          aria-label="Check my profile on Dribbble"
          target="_blank"
        >
          <FaFacebook
            size={30}
            className="text-blue-600 hover:scale-125 transition-all ease duration-200"
          />
        </a>
        <UserMenu />
      </div>
    </header>
  );
};

export default Header;
