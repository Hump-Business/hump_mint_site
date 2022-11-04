import { FC } from "react";
import { Link } from "react-router-dom";

import { useScrollPosition } from "../../hooks/userScrollPosition";

import Logo from "../../assets/imgs/logo3.png";
import Discord from "../../assets/imgs/discord.png";
import Instagram from "../../assets/imgs/instagram.png";
import Twitter from "../../assets/imgs/twitter.png";

const MainHeader: FC = () => {
  const scrollPosition = useScrollPosition();

  return (
    <div
      className={`${
        scrollPosition > 0
          ? "bg-black backdrop-blur-sm"
          : "bg-none backdrop-blur-none"
      } transition duration-700 ease-in-out sticky top-0 w-full flex flex-row justify-center items-center h-[75px] px-[30px] font-Akira text-[12px] uppercase z-50`}
    >
      <div
        className={`w-full max-w-[1300px] h-full flex flex-row justify-between items-center`}
      >
        <Link to="/">
          <img src={Logo} className="h-[45px]" alt="" />
        </Link>
        <div className="flex flex-row gap-10 items-center">
          <Link className="transition hover:text-coolRed" to="/">
            Home
          </Link>
          <Link className="transition hover:text-coolRed" to="/">
            About
          </Link>
          <Link className="transition hover:text-coolRed" to="/">
            RoadMap
          </Link>
          <Link className="transition hover:text-coolRed" to="/">
            Team
          </Link>
          <Link className="transition hover:text-coolRed" to="/">
            FAQ
          </Link>
          <div className="flex flex-row gap-6 items-center">
            <a
              href="https://www.material-tailwind.com/"
              className="w-[22px] transition hover:scale-110"
              target="_blank"
            >
              <img src={Instagram} alt="" />
            </a>
            <a
              href="https://www.material-tailwind.com/"
              className="w-[22px] transition hover:scale-110"
              target="_blank"
            >
              <img src={Twitter} alt="" />
            </a>
            <a
              href="https://www.material-tailwind.com/"
              className="w-[22px] transition hover:scale-110"
              target="_blank"
            >
              <img src={Discord} alt="" />
            </a>
          </div>
          <Link className="transition hover:text-coolRed" to="/">
            Connect Wallet
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
