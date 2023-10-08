import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 mt-5">
          <img
            src="/images/privacy-policy.jpg"
            alt="privacy-policy"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 mt-5 text-white text-center">
            PRIVACY POLICY
          </h1>
          <p className="mt-4" style={{ textAlign: "justify" }}>
            At ShopSmart, your privacy is our top priority. We aim to enhance
            your shopping experience while ensuring your personal information
            remains protected. Every data we collect is solely to improve our
            services for you and is secured with state-of-the-art encryption. As
            technology evolves, so does our dedication to transparency and
            trust. Our privacy policy is more than a document, it's our promise
            to safeguard every interaction you have with us. With ShopSmart,
            your digital footprint is always secure and respected. Choose us,
            where privacy isn't just a policy, it's a commitment.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
