import AboutHome from "@/components/About";
import FeaturedMeals from "@/components/FeaturedMeal";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MeetTeam from "@/components/MeetTeam";
import Navbar from "@/components/Navbar";
import NewsLetter from "@/components/NewsLetter";
import OurRestaurant from "@/components/OurRestaurant";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <FeaturedMeals />
      <AboutHome />
      <NewsLetter />
      <MeetTeam />
      <OurRestaurant />
      <Footer />
    </main>
  );
}
