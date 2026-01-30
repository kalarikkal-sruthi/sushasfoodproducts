"use client";
import Image from "next/image";
import Link from "next/link";
function About() {
  return (
    <section
      className="py-8 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-0 sm:gap-8 lg:gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden ">
              <Image
                src="/assets/about.png"
                alt="Susha's Foods organic farm with fresh produce and cold-pressed oil production"
                fill
                className="object-contain w-full h-full shadow-lg"
                sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 600px"
                priority
                quality={85}
              />
            </div>
          </div>
          <div className="space-y-4 md:space-y-6 order-1 lg:order-2">
            <span className="inline-block text-green-600 font-bold tracking-widest text-[10px] sm:text-[14px] uppercase mb-1">
              Our Heritage Story
            </span>
            <h1
              id="about-heading"
              className="font-playfair text-[24px] sm:text-[28px] md:text-[40px]  text-gray-900 leading-tight mb-2 sm:mb-3 "
            >
              Preserving Organic Traditions
            </h1>
            <div className="space-y-3 md:space-y-4">
              <p className="font-inter text-gray-700 leading-relaxed  text-[12px] sm:text-[14px] ">
                P T Sushama founded Susha&apos;s Food Products & Prakash Farm to
                continue the sustainable legacy inspired by her husband Prakash.
                Our Kerala farm employs regenerative techniques that yield
                nutrient-dense organic produce while improving soil health and
                ecosystem diversity. We make wholesome, affordable food
                accessible to communities, ensuring both people and nature
                thrive together. Explore our trustworthy farm-to-table process.
              </p>
            </div>
            <div className="pt-0 md:pt-4">
              <Link
                href="/about"
                className="inline-flex items-center group"
                aria-label="Learn more about Susha's Foods organic journey"
                prefetch={false}
              >
                <button
                  className="group inline-flex items-center justify-center gap-3 px-3 py-1 md:px-6 md:py-3 bg-[#5db046] hover:bg-white text-white hover:text-black font-semibold border-1 border-[#5db046] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  aria-label="Learn more about our production methods"
                >
                  <span className="text-[12px] md:text-[14px] tracking-wide  uppercase font-montserrat">
                    Learn More
                  </span>
                  <svg
                    className="h-3 w-3 md:h-4 md:w-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
