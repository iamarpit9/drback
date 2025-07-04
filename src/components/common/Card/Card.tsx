import Image, { StaticImageData } from "next/image";
import React from "react";

interface IProps {
  title: string;
  decription: any;
  comment?: string;
  image?: StaticImageData | "" | any;
}

const Card = ({ title, decription, comment, image }: IProps) => {
  return (
    <div className="bg-[#EFF5F6] text-center mt-5 text-[#5e5e5e] font-light  lg:min-w-[338px]">
      {image ? <Image src={image} alt="" className="w-full" priority /> : null}{" "}
      <div className="px-5">
        <div className="py-8 text-[22px] text-[#1b1b1b]">{title}</div>
        <div className="pb-5">{decription}</div>
        <div className="pb-5">{comment}</div>
      </div>
    </div>
  );
};

export default Card;
