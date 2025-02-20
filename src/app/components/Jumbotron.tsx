import { Button } from "@/components/ui/button";
import { poppin } from "../assets/fonts";
import Image from "next/image";
import React from "react";

const Jumbotron = () => {
  return (
    <section className="motion-preset-slide-right motion-duration-5 bg-[#F5FCFF] px-4 py-16 dark:bg-transparent md:py-24">
      <div className="container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Col 1 */}
          <div className="flex items-center">
            <div className="space-y-4">
              <p className={`${poppin.className} text-4xl font-semibold`}>
                Hey, I am Nick
              </p>

              <p
                className={`${poppin.className}text-3xl font-semibold md:text-5xl`}
              >
                I create{" "}
                <span className="text-[#5E3BEE]">
                  product design <br />
                </span>
                and <span className="text-[#5E3BEE]">brand experience</span>
              </p>

              <p className={`${poppin.className} font-semibold`}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
                At mollitia ab dolor dolorum deleniti quos itaque dolores porro
                iste odit?
              </p>

              <Button className="bg-[#5E3BEE]">Get In Touch</Button>
            </div>
          </div>
          {/* Col 2 */}
          <div className="relative h-[320px] w-full md:h-[500px]">
            <div>
              <Image
                src="/jumbotron1.png"
                alt="avatar"
                objectFit="contain"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
