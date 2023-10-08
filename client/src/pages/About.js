import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - ShopSmart"}>
      <div className="row contactus ">
        <div className="col-md-6 m-3 mt-5">
          <img
            src="/images/about.png"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 mt-5 text-white text-center">ABOUT US</h1>
          <p className="mt-3" style={{ textAlign: "justify" }}>
            At ShopSmart, we weave sophistication with convenience, creating an
            unparalleled shopping journey for our patrons. Every product in our
            collection echoes quality, while our platform boasts an intuitive
            design, making selections effortless. We believe in not just selling
            products, but in delivering an experience characterized by trust and
            transparency. Dive into our curated selections, where every item
            tells a story, and every purchase connects you to a world of
            elegance. Choose ShopSmart - where quality meets the modern
            shopper's needs.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
