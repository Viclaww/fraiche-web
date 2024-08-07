import { FaFacebookF } from "react-icons/fa6";
import { FaWhatsapp, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="flex font-medium flex-col md:flex-row flex-wrap gap-5 px-6  items-center justify-evenly">
        <div className="flex flex-col text-center gap-1 md:order-first order-last">
          <h4 className="text-xl text-fraiche-yellow ">Contact Us</h4>
          <p>Address: 228 Oron Road</p>
          <h5 className="text-fraiche-yellow text-left">Call Line</h5>
          <span className="text-left">+234 70 2570 6611</span>
          {/* <span className="text-left">+234 90 9838 7664</span> */}
        </div>
        <div className="flex flex-col  text-center gap-3 w-auto md:w-1/5 order-1">
          <h4 className="text-xl text-fraiche-yellow">Fraiche</h4>
          <p>
            Cozy ambiance, exquisite cuisine, and exceptional service for an
            unforgettable dining experience.
          </p>
          <div className="flex w-full gap-2 text-black  justify-center">
            <a href="https://www.facebook.com/share/tkq95pFfjR7rKmFn/?mibextid=LQQJ4d" className="p-2 rounded-full bg-white cursor-pointer">
              <FaFacebookF size={20} />
            </a>
            <a href="https://x.com/fraiche_palace?s=21&t=_VI4iOI-yf16Ge84Skct9Q" className="p-2 rounded-full bg-white cursor-pointer">
              <FaTwitter size={20} />
            </a>
            <a href="https://www.instagram.com/fraichepalacerestaurant/profilecard/?igsh=Zm93ZHJteG9nbTJ3" className="p-2 rounded-full bg-white cursor-pointer">
              <FaInstagram size={20} />
            </a>
            <a href="https://wa.me/2347025706611" className="p-2 rounded-full bg-white cursor-pointer">
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>
        <div className="flex flex-col order-2 gap-1">
          <h4 className="text-xl text-fraiche-yellow">Working Hours</h4>
          <h5 className="text-fraiche-yellow text-left">Monday - Saturday</h5>
          <p>8:00AM - 10:00PM</p>
          <h5 className="text-fraiche-yellow text-left">Sunday</h5>
          <p>10:00AM - 10:00PM</p>
        </div>
      </div>
      <article className="my-4 w-full text-center">
        Copyright © Fraiche | All Right Reserved- Powered by <a className="text-[#0264B5]" href="https://www.applift.xyz">Applift</a> 
      </article>
    </>
  );
};

export default Footer;
