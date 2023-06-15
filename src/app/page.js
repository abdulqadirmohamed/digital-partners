import About from "@/components/About";
import Guidelines from "@/components/Guidelines";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Services from "@/components/Services";
import WhoWeAre from "@/components/WhoWeAre";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-primary w-full h-full">
      <div className="">
        <Header />
        <Hero/>
        <WhoWeAre/>
        <About/>
        <Guidelines/>
        <Services/>
        <Partners/>
      </div>
    </main>
  );
}
