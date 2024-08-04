import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Gallery from "./gallery";
// import Menu from "@/components/menu";
export default function Page() {
  return (
    <>
      <Navbar />
      <div className=" pt-2 flex flex-col items-center justify-center">
        <Gallery />
      </div>
      <Footer />
    </>
  );
}
