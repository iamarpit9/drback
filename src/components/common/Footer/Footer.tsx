import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import NavItem from "../Navbar/NavItem";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="bg-white h-36 z-50 inset-x-0 py-10">
      <footer className="relative bg-white">
        <MaxWidthWrapper>
          <div className="flex flex-col items-center justify-center md:space-x-2 md:flex-row decoration-none">
            <NavItem
              href="/"
              route="HOME"
              setActive={false}
              setTracking={false}
            />
            <NavItem
              href="/b2bexports"
              route="B2B/EXPORTS"
              setActive={false}
              setTracking={false}
            />

            <NavItem
              href="/about-us"
              route="ABOUT US"
              setActive={false}
              setTracking={false}
            />
          </div>
          <div className="font-light text-center py-8  text-[#595959] text-xs tracking-widest md:tracking-[0.15rem]">
            Batra Foam Traders, PANIPAT, HARYANA 132103
          </div>
          <div className="font-light text-center py-8 text-[#595959] text-xs tracking-widest md:tracking-[0.15rem]">
            COPYRIGHT © {year} | ALL RIGHTS RESERVED.
          </div>
        </MaxWidthWrapper>
      </footer>
    </div>
  );
};

export default Footer;
