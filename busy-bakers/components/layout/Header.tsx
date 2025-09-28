import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import BusyBakers from "@/public/assets/icons/busy-bakers.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faMagnifyingGlass, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { $PRIMARYCOLOR, $TERTIARYCOLOR } from "@/styles/color";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-black border-2 bg-[#272726] text-white sticky top-0 z-50">
      <div className="flex justify-between items-center p-4">
        
        <button
          className="block md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>

        <div className="flex justify-center items-center flex-1 md:flex-none">
          <Link href={"/"}>
            <Image
              src={BusyBakers}
              alt="Busy Bakers Logo"
              width={150}
              height={50}
              priority
              className="sm:w-32 md:w-48 lg:w-72 transition-all duration-300"
            />
          </Link>
        </div>
        <Link href={"/login"} className="text-right">
          <FontAwesomeIcon
            icon={faUser}
            color={$PRIMARYCOLOR}
            className="sm:text-xl md:text-2xl lg:text-4xl transition-all duration-300"
          />
        </Link>
      </div>

      <nav
        className={`flex flex-col md:flex-row md:justify-center md:gap-8 text-xl md:text-2xl py-3 bg-[#272726] transition-all duration-300 ${
          menuOpen ? "block" : "hidden md:flex"
        }`}
      >
        <Link href={"/"} className="hover:text-[#ffc910] py-2 text-center">
          Home
        </Link>
        <Link href={"/about"} className="hover:text-[#ffc910] py-2 text-center">
          About Us
        </Link>
        <Link href={"/shop"} className="hover:text-[#ffc910] py-2 text-center">
          Shop
        </Link>
        <Link href={"/blog"} className="hover:text-[#ffc910] py-2 text-center">
          Blog
        </Link>
        <Link href={"/contact"} className="hover:text-[#ffc910] py-2 text-center">
          Contact Us
        </Link>
      </nav>
      <div className="w-11/12 md:w-1/2 mx-auto mt-3 flex gap-3">
        <input
          type="search"
          name="ProductSearch"
          id="ProductSearch"
          placeholder="Search products..."
          className={`border-2 border-[${$PRIMARYCOLOR}] w-3/4 text-lg md:text-2xl bg-gray-300 text-black rounded-md text-center focus:outline-none`}
        />
        <button type="button">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            size="lg"
            color={$TERTIARYCOLOR}
          />
        </button>
      </div>
    </header>
  );
};

export default Header;