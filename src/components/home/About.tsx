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
    <section className="w-full py-30 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Image with Decorative Elements */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative  overflow-hidden ">
              <div className="relative">
                <div className="w-64 h-64 md:w-100 md:h-100 mx-auto relative">
                  <Image
                    src="/assets/reg.png"
                    alt="Loved01 Brand - Premium Skincare"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 256px, 320px"
                  />
                </div>
                {/* <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#44aee3de] via-[#2f5898] to-[#95c9ece1]" /> */}
              </div>

              {/* Bottom Accent */}
            </div>

            {/* Decorative Background Element */}
            {/* <div className="absolute -z-10 -bottom-6 -left-6 w-3/4 h-3/4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl" /> */}
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            {/* Section Label */}
            <div className="inline-flex items-center gap-2  ">
              <Sparkles className="h-4 w-4 text-[#5db046]" />
              <span className="font-playfair text-[30px] font-semibold text-[#214687] uppercase tracking-wider">
                Our Story
              </span>
              <Sparkles className="h-4 w-4 text-[#5db046]" />
            </div>

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
              <button className="group inline-flex items-center justify-center gap-3 px-4 py-2 bg-black hover:bg-white text-white hover:text-black font-semibold  border-2 border-black transition-all duration-300">
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
