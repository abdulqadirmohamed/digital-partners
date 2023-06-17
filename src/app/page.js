import About from "@/components/About";
import Footer from "@/components/Footer";
import Guidelines from "@/components/Guidelines";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Services from "@/components/Services";
import WhatWeDo from "@/components/WhatWeDo";
import WhoWeAre from "@/components/WhoWeAre";
import WorldMap from "@/components/WorldMap";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-primary w-full h-full ">
      <div id="home">
        <Header />
        <Hero/>
        <WhoWeAre/>
        <About/>
        <Guidelines/>
        <WhatWeDo/>
        <Services/>
        <Partners/>
        <WorldMap/>
        <Footer/>
      </div>
    </main>
  );
}
