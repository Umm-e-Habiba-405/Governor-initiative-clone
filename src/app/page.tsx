import React from "react";
import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";
import Header from "@/components/Header";
import ImageSlider from "@/components/ImageSlider";
import Courses from "@/components/Courses";
import AdvancesCourse from "@/components/AdvancesCourse";
import Footer from "@/components/Footer";
import Jobs from "@/jobs/page";



export default function Home() {
  return (
    <>
     <Header/>
   <Hero/>
   <Hero2/>
   <ImageSlider/>
      <Courses/>
      <AdvancesCourse/>
      {/* <Footer/> */}
      
      
      
      
   </>
  );
}
