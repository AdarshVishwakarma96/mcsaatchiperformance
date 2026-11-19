import Image from "next/image";
import Services from "../components/services/Services";
import OurClients from "../components/OurClients/OurClients";
import Resources from "../components/Resources/Resources";
import FaqAccordion from "@/components/FaqAccordion";
import AwardsGrid from "@/components/AwardsGrid/AwardsGrid";

export default function Home() {
  return (
    <>
    <main>
    <section id="home" className="bannersection">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-md-11 col-sm-12 col-12">
            <div className="banner-container">
              <h1>We’re the minds behind the machines</h1>
              <h2>The growth marketing agency</h2>
              <h3>for digitally-driven brands</h3>
              <p>We work at the frontiers of media, marketing and technology to maximise marketing ROI. Our approach involves meticulous media planning and buying across digital channels leveraging the reach of paid search & social, programmatic advertising, influencer marketing, streaming platforms, affiliates and more.</p>
              <a href="#" title="Talk To Us">Talk to us</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Services />

    <section id="ourwork" className="ourworksection">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h2>Our Work</h2>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="our-work-media">
              <Image src="/media/Our-Work-Art-Media-Img.webp" alt="MC Saathi Works" fill />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="our-work-descp">
              <h3><span>Measurement</span> is at the core of what we do</h3>
              <p>The measurable nature of performance marketing enables marketers to understand and maximise the return on their advertising investment.</p>
              <p>We don’t just assume it, we test and learn, optimizing campaigns only based on what’s driving performance.</p>
              <a href="#" title="View Our Work">View Our Work</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <OurClients />

    <section id="faq" className="faqsection">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="faq-accordian">
              <div className="faq-accordian-title">
                <h2>Frequently Asked Questions</h2>
              </div>
              <FaqAccordion />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="awards" className="awardssection">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="awards-title">
              <h2>Driving innovation since 2006</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <AwardsGrid />
          </div>
        </div>
        <div className="row text-center">
          <div className="col-12">
            <div className="awards-cta">
              <a href="https://www.mcsaatchiperformance.com/awards/" target="_blank">View Our More Awards</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Resources />

    <section id="contactus" className="contactsection">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="contact-title">
              <h2>Talk To Us</h2>
            </div>
          </div>
        </div>
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-5 col-md-6 col-sm-12 col-12">
            <div className="contact-media">
              <img src="https://cdn-ilellnp.nitrocdn.com/DVoHflVnJQHYOqexcWVIsCcCJdgJBITv/assets/images/optimized/rev-b7a65ae/www.mcsaatchiperformance.com/wp-content/uploads/2026/01/david-sarkisov-VUyb7WeQ0QA-unsplash-1000x1000-1.jpg" alt="MC Saathi Contact Us" loading="lazy"/>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="contact-form">
              <form autoComplete="off">
                <div className="form-field">
                  <label htmlFor="formname">Name</label>
                  <input type="text" id="formname" name="formname" placeholder="Enter your Name" />
                </div>
                <div className="form-field">
                  <label htmlFor="formemail">Email</label>
                  <input type="email" id="formemail" name="formemail" placeholder="Enter your Email Address" />
                </div>
                <div className="form-field">
                  <label htmlFor="formphone">Phone number</label>
                  <input type="tel" id="formphone" name="formphone" placeholder="Enter your Phone number" />
                </div>
                <div className="form-field">
                  <label htmlFor="formservice">I'd like to talk about</label>
                  <select id="formservice" name="formservice">
                    <option value="">Please Select</option>
                    <option value="App Store Optimisation">App Store Optimisation</option>
                    <option value="Performance Media">Performance Media</option>
                    <option value="Ecommerce/Retail Media">eCommerce / Retail Media &amp; Quick Commerce</option>
                    <option value="Measurement / OneView / MMM &amp; Incrementality">Measurement / OneView / MMM &amp; Incrementality</option>
                    <option value="AEO / SEO / GEO">AEO / SEO / GEO</option>
                    <option value="Media Partnerships">Media Partnerships</option>
                    <option value="Careers">Careers</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor="formmessage">Can you give us some more detail?</label>
                  <textarea id="formmessage" name="formmessage" placeholder="Enter more detail"></textarea>
                </div>
                <div className="form-field">
                  <button type="submit" title="Submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    </main>

</>

  );
}
