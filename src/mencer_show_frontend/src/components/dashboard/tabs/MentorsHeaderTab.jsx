import React from "react";
import { Link } from "react-router-dom";

const MentorsHeaderTab = ({ currentTab = 'mentors' }) => {
  return (
    <div className="py-4">
      <ul className="space-x-3 md:space-x-6 py-2 bg-[#f1f1f1] rounded-[100px] w-fit h-20 px-6 inline-flex items-center">
        <Link to="/dashboard/mentors">
          <li
            className={`cursor-pointer text-lg font-normal font-['Familjen Grotesk'] ${
              currentTab === "mentors"
                ? "bg-white rounded-[100px] text-[#00357c] text-lg font-normal font-['Familjen Grotesk'] py-2 px-4"
                : "text-[#787777]"
            }`}
          >
            Mentors
          </li>
        </Link>
        <Link to="/dashboard/trending">
          <li
            className={`cursor-pointer text-lg font-normal font-['Familjen Grotesk'] ${
              currentTab === "trending"
                ? "bg-white rounded-[100px] text-[#00357c] text-lg font-normal font-['Familjen Grotesk'] py-2 px-4"
                : "text-[#787777]"
            }`}
          >
            Trending events
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default MentorsHeaderTab;
