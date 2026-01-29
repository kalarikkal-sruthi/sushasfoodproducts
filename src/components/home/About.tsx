"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Award,
  Sparkles,
} from "lucide-react";

const About = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="w-full py-20 bg-white">
      <div className="text-center">
        <div className="inline-flex items-center gap-2  ">
          <Sparkles className="h-4 w-4 text-[#5db046]" />
          <span className="font-playfair text-[40px]  text-[#000]  tracking-wider">
            Our Story
          </span>
          <Sparkles className="h-4 w-4 text-[#5db046]" />
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Label */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Image with Decorative Elements */}
          <div className="relative w-full h-96 md:h-120">
           <div className="relative w-full h-full">
  {/* First Image - Left side */}
  <div
    className="absolute top-1/4  w-64 h-64 md:w-80 md:h-80
        transform -translate-y-1/2 -rotate-0
        overflow-hidden 
        border-2 border-white
        z-10
        shadow-lg"
  >
    <Image
      src="/assets/reg.png"
      alt="Loved01 Product 1"
      fill
      className="object-cover"
      sizes="(max-width: 768px) 256px, 320px"
    />
  </div>

  {/* Second Image - Right side with gap */}
  <div
    className="absolute top-2/4 left-2/4 w-64 h-64 md:w-80 md:h-80
        transform -translate-y-1/2 rotate-0
        overflow-hidden 
        border-2 border-white
        z-10
        shadow-lg"
  >
    <Image
      src="/assets/a2.jpeg"
      alt="Loved01 Product 2"
      fill
      className="object-cover"
      sizes="(max-width: 768px) 256px, 320px"
    />
  </div>
</div>
          </div>
          {/* Right Side - Content */}
          <div className="space-y-8">
            {/* Description */}
            <div className="space-y-8">
              <p className="font-intertext-[12px] md:text-[14px] text-gray-700 leading-relaxed">
                A sustainable organic farm in Kerala, committed to regenerative
                agriculture and healthy communities. Meet P T Sushama, the
                founder of Susha’s Food & Prakash Farm. Inspired by my husband
                Prakash, who has been a role model in agriculture, our farm is
                dedicated to the mutual flourishing of people and nature. Our
                mission is to foster a healthy community by providing affordable
                organic produce while upholding sustainable farming practices
                that rejuvenate nature. Our regenerative methods improve soil
                health, promote biodiversity, and cultivate the most
                nutrient-dense food possible. We have received many recognitions
                for our contribution to sustainable agriculture. From our
                harvest, we create value-added products which are sold in our
                farm outlet named Susha's Foods ensuring freshness and quality
                straight from the source.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <button className="group inline-flex items-center justify-center gap-3 px-4 py-2 bg-[#5db046] hover:bg-white text-white hover:text-black font-semibold  border-2 border-[#5db046] transition-all duration-300">
                <span className="text-[14px] tracking-wide font-montserrat">
                  LEARN MORE
                </span>

                {/* Arrow with stroke color change */}
                <svg
                  className="h-5 w-5 transition-all duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
