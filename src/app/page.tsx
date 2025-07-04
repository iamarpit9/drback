import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import home1 from "/public/homepage/home1.webp";
import banner1 from "/public/banner1.png";
import Image from "next/image";
import Card from "@/components/common/Card/Card";
import ch1 from "/public/card/ch1.webp";
import ch2 from "/public/card/ch2.webp";
import ch3 from "/public/card/ch3.webp";
import Link from "next/link";
import whatsappIcon from "/public/whatsappicon.svg";
import instaIcon from "/public/instagramicon.svg";
import Carousel from "@/components/common/Carousel";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="max-w-full">
          <Carousel />
        </div>
        <div className="pt-20 md:max-w-3xl m-5 ">
          <div className="tracking-[0.2rem] text-[#627478]">ABOUT US</div>
          <div className="flex flex-col py-5 lg:flex-row lg:gap-10">
            <Card
              title="Our Mission"
              decription="To provide our customers best quality products at reasonable prices while ensuring we meet our commitments in terms of timely delivery and transparency. "
              comment="We honour not only our written contracts but also our spoken word!"
              image={ch1}
            />
            <Card
              title="Our Expertise"
              decription="With roots in the textile business for over two decades, we partner with the best manufacturers and mills in the business to provide best quality bath products to our customers and clients."
              comment="No one can beat us in price for your desired quality."
              image={ch2}
            />
            <Card
              title="For importers/ B2B customers"
              decription="No need to haggle with manufacturers, no need to follow up for the timely delivery, no need to worry about product quality- we take care of you throughout your procurement journey!"
              comment="We ensure complete pricing and supply chain transparency."
              image={ch3}
            />
          </div>
        </div>

        <div className="p-5 md:pt-20 tracking-[0.2rem] text-[#627478]">
          CONTACT US
        </div>
        <div className="flex flex-col items-center justify-center py-10">
          <div className="text-[#5e5e5e] font-light text-[14px] md:text-[16px] text-center">
            We love our customers, so feel free to ping us on Whatsapp during
            normal business hours.
          </div>

          <Link
            href="https://wa.me/8950353673"
            target="_blank"
            className="mt-6 h-[40px] md:w-[286px] md:h-[56px] bg-[#455964] flex items-center justify-center px-1 hover:bg-[#4f6672] text-white"
          >
            <Image
              src={whatsappIcon}
              alt="whatsapp"
              className="w-4 h-4 md:w-5 md:h-5"
            />
            <span className="px-2">Message us on Whatsapp</span>
          </Link>

          {/* <div className="pt-16 text-center font-light text-[#5e5e5e] text-sm md:text-[16px]">
            <div className="py-1">
              General inquiries:{" "}
              <Link
                href="mailto:info@patpug.com"
                className="hover:text-[#3f484a] hover:font-black"
              >
                info@patpug.com
              </Link>
            </div>
            <div className="py-1">
              For B2B orders:{" "}
              <Link
                href="mailto:corporate@patpug.com"
                className="hover:text-[#3f484a] hover:font-black"
              >
                corporate@patpug.com
              </Link>
            </div>
            <div className="py-1">
              For export inquiries:{" "}
              <Link
                href="mailto:exports@patpug.com"
                className="hover:text-[#3f484a] hover:font-black"
              >
                exports@patpug.com
              </Link>
            </div>
          </div> */}
        </div>

        {/* <div className=" p-5 md:pt-20 tracking-[0.2rem] text-[#627478]">
          CONNECT WITH US
        </div>

        <div className="flex flex-col items-center justify-center py-10">
          <Link href="https://www.instagram.com/patpug_life/" target="_blank">
            <Image src={instaIcon} alt="instagram" className="w-10 h-10" />
          </Link>
        </div> */}
      </MaxWidthWrapper>
    </>
  );
}
