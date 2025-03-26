import React from "react";
import Image from "next/image";

const Nav = () => {
  return (
    <div className="transition-all duration-200 h-[12vh] z-[100] fixed w-full bg-[#f2ebe9]">
      <div className="flex items-center h-full justify-between sm:w-[80%]  w-[90%] mx-auto">
        <div>
          {/* <img src={DevelopherjLogo} alt="developherj logo" /> */}
          <Image
            src="/images/Developherj_logo.png"
            alt="Developherj Logo"
            width={200}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
