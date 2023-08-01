"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../public/assets/images/logo.svg";
import iconMenu from "../../public/assets/images/iconMenu.svg";
import iconMenuClose from "../../public/assets/images/iconMenuClose.svg";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex items-center justify-between m-5 ">
      <div>
        <Image src={logo} alt="" className="object-contain" />
      </div>
      <div className="space-x-7 hidden md:block ">
        <Link href={"#"} className="hover:text-pink-600">
          Home
        </Link>
        <Link href={"#"} className="hover:text-pink-600">
          New
        </Link>
        <Link href={"#"} className="hover:text-pink-600">
          Popular
        </Link>
        <Link href={"#"} className="hover:text-pink-600">
          Trending
        </Link>
        <Link href={"#"} className="hover:text-pink-600">
          Categories
        </Link>
      </div>

      {/* Mobile Navigation */}
      <div className="">

      <div className="md:hidden ">
        <Image
          src={iconMenu}
          alt={""}
          className="object-contain cursor-pointer"
          onClick={toggleMobileMenu}
        />
      </div>
      {/* Mobile Menu contents */}
      {isMobileMenuOpen && (
        <div className="flex flex-col md:hidden absolute top-0 right-0 bg-gray-400 pt-5 min-h-screen px-20  " >
          <Image src={iconMenuClose} alt={""}
            onClick={toggleMobileMenu}
            className="cursor-pointer mb-10"
          />
          <div className="flex flex-col space-y-5">

          <Link href={"#"} className="hover:text-pink-600">
            Home
          </Link>
          <Link href={"#"} className="hover:text-pink-600">
            New
          </Link>
          <Link href={"#"} className="hover:text-pink-600">
            Popular
          </Link>
          <Link href={"#"} className="hover:text-pink-600">
            Trending
          </Link>
          <Link href={"#"} className="hover:text-pink-600">
            Categories
          </Link>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default Navbar;
