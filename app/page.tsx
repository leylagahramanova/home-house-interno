import Image from "next/image";
import Banner from "@/app/components/mainpage/Banner/Banner";
import Work from "@/app/components/mainpage/Work/Work";
import About from "./components/mainpage/About/About";

import Testimonial from "./components/mainpage/Testimonial/Testimonial";
import Brands from "./components/mainpage/Brands/Brands";
import Project from "./components/mainpage/Project/Project";
import Article from "./components/mainpage/Article/Article";
import Join from "./components/mainpage/Join/Join";
import Counter from "./components/mainpage/Counter/Counter";
export default function Home() {
  return (
    <div>
   <Banner/>
   <Work/>
   <About/>
   <Testimonial/>
   <Brands/>
   <Project/>
   <Article/>
   <Join/>
   <Counter/>
    </div>
  );
}
