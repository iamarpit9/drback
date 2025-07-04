"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface IProps {
  route: string;
  href: string;
  setActive: boolean;
  setTracking?: boolean;
}

const NavItem = ({ route, href, setActive, setTracking }: IProps) => {
  const currentPath = usePathname();
  let isActive = false;
  if (setActive) {
    isActive = currentPath === href;
    if (currentPath.includes("/blog") && route === "BLOG") {
      isActive = true;
    }
  }

  // if(currentPath.includes("/blog") && route === "BLOG") isActive = true

  return (
    <Link
      href={href}
      className={`p-1 text-[#151515] hover:text-[#627478] ${setTracking ? "tracking-[0.2rem]" : null} text-sm font-light  ${isActive ? "border-b border-[#151515]" : ""}`}
      target={href.includes("amazon") ? "_blank" : ""}
    >
      {route}
    </Link>
  );
};

export default NavItem;
