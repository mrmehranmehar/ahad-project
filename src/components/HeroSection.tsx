import React from "react";
import Link from "next/link"; // Next.js se Link component ko import karna
import { Spotlight } from "./ui/Spotlight"; // Spotlight component ko import karna
import { Button } from "./ui/moving-border";


const HeroSection = () => {
  return (
    <div className="h-auto md:h-[40rem] w-full bg-black rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      {/* Spotlight component ko render karna, position aur fill color set karna */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 relative z-10 w-full text-center">
        {/* Heading jo page ka main title hai */}
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master the Craft of Coding
        </h1>
        {/* Description jo coding courses ke baare mein batata hai */}
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Dive into our comprehensive coding courses and transform your development journey today. Whether you are a beginner or looking to refine your programming skills, join us to unlock your true coding potential.
        </p>

        <div className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          {/* Courses page par navigate karne ke liye button */}
          <Link href="/courses">
          <Button borderRadius="1.75rem" className=" bg-black  text-white  border-slate-800">
              Explore courses
            </Button>
          </Link>
        </div>

        
      </div>
    </div>
  );
};

export default HeroSection; // HeroSection component ko export karna