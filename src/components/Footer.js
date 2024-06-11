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
          <span className="text-left">+234 90 9838 7664</span>
          <span className="text-left">+234 90 9838 7664</span>
        </div>
        <div className="flex flex-col  text-center gap-3 w-auto md:w-1/5 order-1">
          <h4 className="text-xl text-fraiche-yellow">Fraiche</h4>
          <p>
            Cozy ambiance, exquisite cuisine, and exceptional service for an
            unforgettable dining experience.
          </p>
          <div className="flex w-full gap-2 text-black  justify-center">
            <span className="p-2 rounded-full bg-white cursor-pointer">
              <FaFacebookF size={20} />
            </span>
            <span className="p-2 rounded-full bg-white cursor-pointer">
              <FaTwitter size={20} />
            </span>
            <span className="p-2 rounded-full bg-white cursor-pointer">
              <FaInstagram size={20} />
            </span>
            <span className="p-2 rounded-full bg-white cursor-pointer">
              <FaWhatsapp size={20} />
            </span>
          </div>
        </div>
        <div className="flex flex-col order-2 gap-1">
          <h4 className="text-xl text-fraiche-yellow">Working Hours</h4>
          <h5 className="text-fraiche-yellow text-left">Monday-friday</h5>
          <p>8:00AM - 10:30PM</p>
          <h5 className="text-fraiche-yellow text-left">Saturday-Sunday</h5>
          <p>9:00AM - 8:30PM</p>
        </div>
      </div>
      <article className="my-4 w-full text-center">
        Copyright © fraiche | All Right Reserved- Powered by Applift
      </article>
    </>
  );
};

export default Footer;
