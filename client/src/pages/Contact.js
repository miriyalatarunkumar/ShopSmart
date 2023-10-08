import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-6 mt-5">
          <img
            src="/images/contact_us.jpg"
            alt="contact-us"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4 mt-5">
          <h1 className="bg-dark p-2 mt-3 text-white text-center">
            CONTACT US
          </h1>
          <p className="mt-4" style={{ textAlign: "justify" }}>
            At ShopSmart, we genuinely value your thoughts and questions. If
            you're curious about our products or just want to share some
            feedback, give us a shout anytime. We're here around the clock,
            always eager to chat and help out.
          </p>
          <p className="mt-4">
            <BiMailSend /> : www.help@ShopSmart.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 987-6543-210
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
