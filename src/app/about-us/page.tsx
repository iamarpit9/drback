import Card from "@/components/common/Card/Card";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import React from "react";
import ch1 from "/public/about/drback.png";
import ch2 from "/public/about/ch2.webp";
import Image from "next/image";
import { Metadata } from "next";
import { div } from "motion/react-client";

export const metadata: Metadata = {
  title: "You are in good hands!",
  description:
    "We are IIM Ahmedabad graduates and come from a deep knowledge of terry towel development. Our word is our commitment and you will be proud of working with us.",
};

const About = () => {
  return (
    <MaxWidthWrapper>
      <div className="flex items-center m-5 justify-center pt-10 ">
        <Card
          title="Why Choose Dr. Back?"
          decription={
            <div className="flex flex-col text-left items-center">
              <span className="text-center">
                Our mattresses are designed with medical-grade back support,
                combining firmness with plush comfort. Perfect for those with
                slip disc, spondylitis, and lower back issues.
              </span>
              <ul className="list-disc">
                <li className="py-4">Spine-aligned orthopedic design</li>
                <li className="py-4">Motion isolation for undisturbed sleep</li>
                <li className="py-4">Luxurious feel with premium fabric</li>
                <li className="py-4">Doctor-recommended support</li>
              </ul>
            </div>
          }
          image={ch1}
        />
      </div>

      <div className="flex m-5 flex-col items-center justify-center pt-5 lg:gap-10 lg:flex-row ">
        <Card
          title="⭐ India’s Top-Rated Ortho Mattress Brand"
          decription="Trusted by customers and recommended by experts, Dr. Back is one of India’s fastest-growing and best-reviewed orthopedic mattress brands. Our hybrid design combines the proven support of coil springs with the comfort of advanced orthopedic foam — giving your back exactly what it needs, night after night."
        />

        <Card
          title="🔕 Sleep Without Disturbance – Thanks to Motion Isolation"
          decription={`With our Motion Isolation Technology, movements on one side of the bed won’t disturb the other. This is made possible by the use of natural latex and rubberized coir — giving you an undisturbed and pain-free sleep. The mattress ensures proper shoulder and lumbar support, which is vital for those with chronic back pain.`}
        />
      </div>

      {/* <div className="pt-10 md:pt-20 m-5">
        <Image src={ch2} alt="" />
      </div>
      <div className="tracking-[0.2rem] pt-10 text-[#627478] m-5">
        OUR VALUES
      </div>
      <div className="flex justify-center items-center m-5">
        <div className="max-w-2xl flex flex-col">
          <div className="text-2xl font-light py-5">
            At PatPug, we believe in the 5F set of values
          </div>
          <div className="px-5 text-[#5e5e5e] font-light">
            <ul className="list-disc">
              <li className="py-4">
                <span className="font-bold">Fairness:</span> We are always fair
                with our vendors, employees and customers alike. We protect our
                reputations as much as we protect our interests.
              </li>

              <li className="py-4">
                <span className="font-bold">Forthrightness:</span> We believe in
                complete transparency with our clients. We do not shy from
                admitting mistakes and appreciating honesty.
              </li>
              <li className="py-4">
                <span className="font-bold">Frugality:</span> We maintain a
                frugal culture in our operations! We understand how important
                costs are for our customers and we keep ours low.{" "}
              </li>
              <li className="py-4">
                <span className="font-bold">Feedback:</span> We always value
                feedback from all our stakeholders and strive to act and improve
                ourselves and our business.{" "}
              </li>
              <li className="py-4">
                <span className="font-bold">Fun:</span> We are not boring people
                and we believe that business can be run in a fun way!{" "}
              </li>
            </ul>
          </div>
        </div>
        <div></div>
      </div> */}
    </MaxWidthWrapper>
  );
};

export default About;
