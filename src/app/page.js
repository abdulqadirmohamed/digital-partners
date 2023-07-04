import About from "@/components/About";
import Footer from "@/components/Footer";
import Guidelines from "@/components/Guidelines";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import WhatWeDoList from "@/components/WhatWeDoList";
import Optimise from "@/components/Optimise";
import Services from "@/components/Services";
import WhatWeDo from "@/components/WhatWeDo";
import WhoWeAre from "@/components/WhoWeAre";
import WorldMap from "@/components/WorldMap";

export default function Home() {
  return (
    <main className="bg-white w-full h-full">
      <div id="home">
        <Header />
        <Hero />
        <Optimise />
        <WhoWeAre />
        <hr/>
        <About />
        <Mission />
        <Guidelines />

        <hr />
        <WhatWeDo />
        <WhatWeDoList />
        <hr />

        <Services />
        <WorldMap />
        <Footer />
      </div>
    </main>
  );
}
