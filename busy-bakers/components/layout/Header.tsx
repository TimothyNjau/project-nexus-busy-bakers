import Link from "next/link";
import Image from "next/image";
import BusyBakers from "@/public/assets/icons/busy-bakers.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Header: React.FC = () => {
  return (
    <header>
      <div>
        <div>
          <Link href={"/"}>
            {" "}
            <Image
              src={BusyBakers}
              alt="Busy Bakers Logo"
              width={250}
              priority
            />
          </Link>
        </div>
        <nav>
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About Us</Link>
          <Link href={"/shop"}>Shop</Link>
          <Link href={"/blog"}>Blog</Link>
          <Link href={"/contact"}>Contact Us</Link>
        </nav>
        <div>
          <Link href={"/login"}>
            <FontAwesomeIcon icon={faUser} className="text-3xl" />
          </Link>
        </div>
      </div>
      <div></div>
    </header>
  );
};

export default Header;
