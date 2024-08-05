import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./Contact-Form-page.css";

export default function Page() {
  return (
    <>
      <Navbar />
      <div className=" pt-2 flex flex-row items-center justify-center">
        <section className="Contact-Us">
          <div className="  contact-heading">
            <img src="/images/assets/Restaurant Pic3.jpg" alt="" />
            <span className="heading-text heading3 center">Contact Us</span>
          </div>

          <div className="form-wrapper">
            <div className="headings">
              <div className="heading3 left pl1">Just Say Hi</div>
              <div className="heading-small-white left pl0-5">
                Tell us about yourself and we'll contact you soon.
              </div>
            </div>
            <form action="#">
              <div className="row-flex ma-tp-btm-1">
                <div className="input-container">
                  <div className="labeler">Full Name</div>
                  <input type="text" name="Name" id="Name" />
                </div>

                <div className="input-container">
                  <div className="labeler">E-mail</div>
                  <input type="email" name="email" id="email" />
                </div>
              </div>
              <div className="subject ma-tp-btm-1 input-container">
                <div className="labeler">Subject</div>
                <input type="text" name="subject" id="subject" />
              </div>
              <div className="message ma-tp-btm-1 input-container">
                <div className="labeler">Your Message</div>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
