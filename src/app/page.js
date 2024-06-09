import AboutHome from "@/components/About";
import FeaturedMeals from "@/components/FeaturedMeal";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import NewsLetter from "@/components/NewsLetter";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <FeaturedMeals />
      <AboutHome />
      <NewsLetter />
    </main>
  );
}
