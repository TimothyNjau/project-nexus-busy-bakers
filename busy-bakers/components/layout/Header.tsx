import Link from "next/link";
import Image from "next/image";
import BusyBakers from "@/public/assets/icons/busy-bakers.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { $PRIMARYCOLOR, $SECONDARYCOLOR, $TERTIARYCOLOR } from "@/styles/color";

const Header: React.FC = () => {
  return (
    <header className={`border-black border-2 bg-[#272726] p-4 text-white flex flex-col sticky`}>
      <div id="companyIcon" className="absolute top-5">
        <Link href={"/"}>
          {" "}
          <Image src={BusyBakers} alt="Busy Bakers Logo" width={400} priority />
        </Link>
      </div>
      <div className="relative left-3/4 w-min m-2">
        <Link href={"/login"}>
          <FontAwesomeIcon icon={faUser} size="3x" color={$PRIMARYCOLOR}/>
        </Link>
      </div>
      <nav className="w-3/4 flex justify-evenly m-auto text-3xl py-3">
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About Us</Link>
        <Link href={"/shop"}>Shop</Link>
        <Link href={"/blog"}>Blog</Link>
        <Link href={"/contact"}>Contact Us</Link>
      </nav>
      <div className="w-1/2 m-auto">
        <input
          type="search"
          name="ProductSearch"
          id="ProductSearch"
          className="border-[#ffc910] border-2 w-3/4 text-2xl bg-gray-300"
        />
        <button type="button" className="">
          <FontAwesomeIcon icon={faMagnifyingGlass} size="2x"/>
        </button>
      </div>
    </header>
  );
};

export default Header;
