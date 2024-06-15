import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />

      <div className="md:py-32 py-20 px-6 md:px-14">
        <div className="w-full bg-about md:h-[45vh] h-[25vh] bg-cover flex justify-center md:justify-start items-center p-12">
          <h3 className="text-3xl font-semibold">About Us</h3>
        </div>

        <div className="my-6 md:text-lg font-medium text-justify leading-loose">
          <p>
            Welcome to Fraiche, where luxury meets exquisite taste. At Elan, we
            curate an unparalleled dining experience that transcends the
            ordinary. Our culinary artisans craft each dish with meticulous
            attention to detail, using only the finest ingredients sourced from
            around the globe. Our menu is a symphony of flavors, blending
            classic elegance with innovative flair, designed to delight even the
            most discerning palate. <br /> Nestled in the heart of the city,
            Elan Gastronomy boasts an ambiance that exudes sophistication and
            comfort. Our elegantly designed interiors, coupled with impeccable
            service, create a serene and intimate atmosphere perfect for any
            occasion. <br /> Whether you are indulging in our signature tasting
            menu or enjoying a bespoke cocktail at our luxurious bar, Elan
            Gastronomy promises an unforgettable journey of culinary excellence.
            Join us and discover the epitome of refined dining.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
