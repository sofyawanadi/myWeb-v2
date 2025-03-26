"use client";

import Navbar from "./navbar";
import Hero from "./hero";
import CareerJourney from "./career-journey";
import PortofolioCard from "./portfolio";
import Footer from "./footer";
export default function Home() {
   return (
      <>
         <div className="@container">
            {/* <div className="px-8 md:px-16 lg:px-24"> */}
            <Navbar />
            <Hero />
            <CareerJourney />
            <PortofolioCard />
            <Footer />
         </div>
      </>
   );
}
