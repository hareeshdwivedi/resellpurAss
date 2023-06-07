import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="pt-5 pb-8 sm:py-12 px-6 sm:px-16 bg-secondary">
      <div className="flex flex-col-reverse sm:flex-row sm:justify-between">
        <div className="flex flex-col w-56">
          <img
            alt="resellpur"
            src="/logo/logo.png"
            className="w-36 sm:w-40"
            // loading="lazy"
          />

          <p className="text-xs sm:text-base mt-4 text-white font-light leading-5">
            Phone no:{" "}
            <a className="hover:underline" href="tel:+12706335030">
              +1234567890
            </a>
          </p>

          <div className="flex mt-8">
            <Link href="https://www.linkedin.com/company/resellpur/" passHref>
              <a target="_blank" rel="noopener noreferrer">
                <img
                  alt="linkedin_logo"
                  src="/linkedin.svg"
                  className="mr-3 cursor-pointer"
                  height="24"
                  width="24"
                  // loading="lazy"
                />
              </a>
            </Link>
          </div>
        </div>
        <div className="flex sm:justify-between mr-4 mb-9">
          <div className="flex flex-col text-white mr-16">
            <p className="text-white font-semibold mb-4">Sitemap</p>
            <a className="font-extralight text-sm" href="#whychooseus">
              Why Choose Us
            </a>
            <a className="font-extralight text-sm my-5" href="#howitworks">
              How it Works
            </a>
            <a href="#ourmission" className="font-extralight text-sm">
              Our Mission
            </a>
          </div>
          <div className="flex flex-col text-white ">
            <p className="text-white font-semibold">Links</p>
            <a
              href="mailto:jayantdwivedi19@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-extralight text-sm my-1 text-theme_green"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
