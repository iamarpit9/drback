import Card from "@/components/common/Card/Card";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import React from "react";
import ch1 from "/public/b2b/ch1.webp";
import ch2 from "/public/b2b/ch2.webp";
import ch3 from "/public/b2b/ch3.webp";
import Link from "next/link";
import Image from "next/image";
import instaIcon from "/public/instagramicon.svg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PatPug - Source your towels from India",
  description:
    "PatPug is your one stop shop to source your towels from India with focus on quality, price and complete transparency! We offer lower MOQs and efficient delivery",
};

const B2B = () => {
  return (
    <>
      <MaxWidthWrapper>
        <div className="pt-20 md:max-w-3xl">
          <div className="tracking-[0.2rem] text-[#627478]">
            WHY YOU SHOULD CHOOSE US?
          </div>
          <div className="flex flex-col m-5 py-5 lg:flex-row lg:gap-10">
            <Card
              title="Complete white label solution for brands"
              decription="At PatPug, we ensure full suite of services starting from product design, packaging design to delivery at your doorstep, so you can focus on what you do best- Selling and brand building.  "
              comment="We make sure that you get the industry's lowest prices and low MOQs for you to kick start your bath linen brand in only a few days!"
              image={ch1}
            />
            <Card
              title="100% Quality assurance always"
              decription="We are brand owners ourselves and  understand how quality is the key pillar of success for you! With PatPug, you can stay assured that you get what you pay for! "
              comment="We offer all qualities of bath linen from 100% Cotton carded, combed, compact, compact-combed, zerotwist to microfiber to OEKOTEX certified products! "
              image={ch2}
            />
            <Card
              title="Tech driven complete transparency"
              decription="Know anyone who does not like to be aware of what is happening to his order? But no manufacturer offers you clarity! Tired of calling sales personnel who do not pick your phone once the advance payment is processed?"
              comment="We offer complete transparency from order booking -> RM purchase -> Weaving -> Dyeing -> Packaging -> Shipping till your order reaches your doorstep!"
              image={ch3}
            />
          </div>
        </div>

        <div className="p-5 md:pt-20 tracking-[0.2rem] text-[#627478]">
          CONNECT WITH US
        </div>

        <div className="flex flex-col items-center justify-center py-10">
          <Link href="https://www.instagram.com/patpug_life/" target="_blank">
            <Image src={instaIcon} alt="instagram" className="w-10 h-10" />
          </Link>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default B2B;
