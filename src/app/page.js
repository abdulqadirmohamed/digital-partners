import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-primary w-full h-full">
      <div className="w-[70%] mx-auto">
        <Header />
        <Hero/>
        <WhoWeAre/>
        <About/>
      </div>
    </main>
  );
}
