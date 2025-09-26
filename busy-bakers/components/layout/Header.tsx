import Link from "next/link";
import Image from "next/image";
import BusyBakers from "@/public/assets/icons/busy-bakers.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { $PRIMARYCOLOR, $SECONDARYCOLOR, $TERTIARYCOLOR } from "@/styles/color";

const Header: React.FC = () => {
  return (
    <header className={`border-black border-2 bg-[${$SECONDARYCOLOR}] p-4 text-white flex flex-col sticky`}>
      <div className="relative flex">
        <div id="companyIcon" className="w-max relative left-1/3">
        <Link href={"/"}>
          {" "}
          <Image src={BusyBakers} alt="Busy Bakers Logo" width={300} priority />
        </Link>
      </div>

      <div className="w-min m-3 relative left-2/4">
        <Link href={"/login"}>
          <FontAwesomeIcon icon={faUser} size="3x" color={$PRIMARYCOLOR}/>
        </Link>
      </div>

      </div>
      
      
      <nav className="w-3/4 flex justify-evenly m-auto text-2xl py-3">
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About Us</Link>
        <Link href={"/shop"}>Shop</Link>
        <Link href={"/blog"}>Blog</Link>
        <Link href={"/contact"}>Contact Us</Link>
      </nav>
      <div className="w-1/2 m-auto mt-3 gap-3 flex">
        <input
          type="search"
          name="ProductSearch"
          id="ProductSearch"
          className={`border-[${$PRIMARYCOLOR}] border-2 w-3/4 text-2xl bg-gray-300 text-black rounded-md text-center`}
        />
        <button type="button" className="">
          <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" color={$TERTIARYCOLOR}/>
        </button>
      </div>
    </header>
  );
};

export default Header;
