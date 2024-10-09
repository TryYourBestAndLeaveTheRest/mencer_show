import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full h-fit grid grid-cols-1 sm:grid-cols-4 xl:grid-cols-5 mt-16 gap-y-10 !px-10">
      <div className="space-y-3 sm:col-span-2">
        <div className="">
          <img
            src="/images/logo.svg"
            alt="logo"
            width={196}
            height={66}
            className=""
            quality={100}
          />
        </div>
        <div className="flex gap-x-3">
          <Link to="#">
            <img src="/images/homepage/x.png" />
          </Link>
          <Link to="#">
            <img src="/images/homepage/insta.png" />
          </Link>
          <Link to="#">
            <img src="/images/homepage/youtube.png" />
          </Link>
          <Link to="#">
            <img src="/images/homepage/linkedin.png" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-7 text-[#1e1e1e]">
        <p className={`font-semibold`}>Quick Links</p>
        <ul className="flex flex-col gap-2">
          <li>Academy</li>
          <li>Hackathon</li>
          <li>Build</li>
          <li>About Us</li>
          <li>Community</li>
        </ul>
      </div>
      <div className="flex flex-col gap-7 text-[#1e1e1e]">
        <p className={`font-semibold`}>Career</p>
        <ul className="flex flex-col gap-2">
          <li>Become a Mentor</li>
          <li>Become a Partner</li>
          <li>Job Opportunity</li>
        </ul>
      </div>
      <div className="flex flex-col gap-7 text-[#1e1e1e]">
        <p className={`font-semibold`}>Others</p>
        <ul className="flex flex-col gap-2">
          <li>Find a Mentor</li>
          <li>FAQs</li>
          <li>Help Center</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
