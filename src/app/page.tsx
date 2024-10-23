import FeaturedCourses from '@/components/FeaturedCourses';
import FeaturedWabinars from '@/components/FeaturedWabinars';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import TestiMonialCard from '@/components/TestiMonialCard';
import { Spotlight } from '@/components/ui/Spotlight';
import WhyChooseUs from '@/components/WhyChooseUs';
import React from 'react'

const page = () => {
  return(

    <div>

<HeroSection/>
<Spotlight/>
<FeaturedCourses/>
<WhyChooseUs/>
<FeaturedWabinars/>
<TestiMonialCard/>
<Footer/>
    </div>
  )
}

export default page