import About from "@/components/About";
import Footer from "@/components/Footer";
import Guidelines from "@/components/Guidelines";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import WhatWeDoList from "@/components/WhatWeDoList";
import Optimise from "@/components/Optimise";
import Partners from "@/components/Partners";
import Services from "@/components/Services";
import WhatWeDo from "@/components/WhatWeDo";
import WhoWeAre from "@/components/WhoWeAre";
import WorldMap from "@/components/WorldMap";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white w-full h-full">
      <div id="home">
        <Header />
        <Hero/>
        <Optimise/>
        <WhoWeAre/>
        <About/>
        <Mission/>
        <Guidelines/>

        <WhatWeDo/>
        <WhatWeDoList/>

    

        <Services/>
        {/* <Partners/> */}
        <WorldMap/>
        <Footer/>
      </div>
    </main>
  );
}
