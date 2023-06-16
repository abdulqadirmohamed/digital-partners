import About from "@/components/About";
import Guidelines from "@/components/Guidelines";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhatWeDo from "@/components/WhatWeDo";
import WhoWeAre from "@/components/WhoWeAre";
import WorldMap from "@/components/WorldMap";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-primary w-full h-full">
      <div className="">
        <Header />
        <Hero/>
        <WhoWeAre/>
        <About/>
        {/* <Guidelines/> */}
        <WhatWeDo/>
        <Services/>
        <WorldMap/>
      </div>
    </main>
  );
}
