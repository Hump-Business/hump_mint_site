import { FC } from "react";

import Banner from "../assets/imgs/banner.jpg";
import NFT from "../assets/imgs/nft.png";

const Home: FC = () => {
  return (
    <div className="w-full mt-[-75px] flex flex-col items-center">
      <div className="w-full h-screen relative flex justify-center items-center">
        <img
          src={Banner}
          className="w-full h-full object-cover inline-block"
          alt=""
        />
        <p className="text-[80px] font-black absolute leading-[80px] stroke-red-600 stroke-2 font-Akira">
          Hump Business
        </p>
      </div>
      <div className="w-full max-w-[1300px] flex flex-row gap-5 mt-[150px] items-center">
        <div className="w-full flex flex-col justify-center items-center">
          <div className="w-[400px]">
            <p className="uppercase font-Akira text-[51px] mb-[50px] leading-[60px]">
              Hump Business
            </p>
            <p className="text-[16px] mb-[50px]">
              Shiba Social Club is an Elite club for the baddest of the Shiba.
              Our NFT collection has 7,777 & 8,888 hand-drawn Shiba and Baby
              Shiba with the best details in the industry.
            </p>
            <button className="px-[20px] py-[10px] rounded-full bg-coolRed border-2 border-coolRed hover:border-white hover:bg-opacity-0 transition uppercase font-Akira">
              Mint NFT
            </button>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <img src={NFT} className="w-[580px] h-[580px]" alt="" />
        </div>
      </div>
      <div className="w-full max-w-[1300px] flex flex-row gap-5 mt-[150px] items-center">
        <div className="w-full grid grid-cols-2 gap-4 justify-center">
          <div className="flex justify-end">
            <img src={NFT} className="w-[250px] h-[250px]" alt="" />
          </div>
          <div className="flex justify-start">
            <img src={NFT} className="w-[250px] h-[250px]" alt="" />
          </div>
          <div className="flex justify-end">
            <img src={NFT} className="w-[250px] h-[250px]" alt="" />
          </div>
          <div className="flex justify-start">
            <img src={NFT} className="w-[250px] h-[250px]" alt="" />
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <div className="w-[400px]">
            <p className="uppercase font-Akira text-[30px] mb-[30px] leading-[30px]">
              JOIN THE CLUB!
            </p>
            <p className="text-[16px] mb-[50px]">
              When you buy a Shiba, you don't buy only an avatar or a piece of
              art.
              <br />
              <br /> You are gaining membership access to a club whose benefits
              and offerings will increase over time. Your Shiba can serve as
              your digital identity, and open digital doors for you.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full mt-[150px] py-[80px] bg-white/5">
        <p className="font-Akira text-center text-[25px] uppercase">
          Our Special Legendary Collection
        </p>
        <p className="text-center mt-[20px]">
          Discover our special legendary collection, they are the rarest and
          unique.
        </p>
        <div className="w-full grid grid-cols-4 gap-20 mt-[50px] px-10">
          <div className="flex justify-center">
            <img src={NFT} className="w-full aspect-square" alt="" />
          </div>
          <div className="flex justify-center">
            <img src={NFT} className="w-full aspect-square" alt="" />
          </div>
          <div className="flex justify-center">
            <img src={NFT} className="w-full aspect-square" alt="" />
          </div>
          <div className="flex justify-center">
            <img src={NFT} className="w-full aspect-square" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
