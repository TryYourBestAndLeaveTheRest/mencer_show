import React from "react";
import { Briefcase, MessageCircle } from "lucide-react";

const MentorsComp = ({ value, mentors }) => {
  const filteredMentors =
    value === "all"
      ? mentors
      : mentors.filter(
          (mentor) =>
            mentor.category === value ||
            (value === "toprated" && mentor.topRated)
        );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
      {filteredMentors.map((mentor) => (
        <div
          key={mentor.id}
          className="bg-white rounded-[14px] border border-black/10 p-2 shadow-sm hover:shadow-lg transition-shadow"
        >
          <div className="relative">
            <img
              src={mentor.imageUrl}
              alt={mentor.name}
              className="w-full h-48 object-cover rounded-lg"
            />
            {mentor.topRated && (
              <span className="bg-white text-[10px] font-normal text-black px-2 py-1 rounded-full absolute top-2 left-2">
                Top Rated
              </span>
            )}
          </div>

          <div className="mt-4 flex gap-3 flex-col">
            <div className="flex gap-2 items-center">
              <h3 className="text-base font-medium uppercase">{mentor.name}</h3>
              <p className="text-xs font-normal capitalize">{mentor.location}</p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="inline-flex items-center gap-4 text-[#2f2f2f]">
                <Briefcase className="w-5 h-5 text-[#6b6b6b]" />
                <p className="text-[#6d6d6d] text-xs font-normal">
                  {mentor.role} at {mentor.company}
                </p>
              </div>

              <div className="inline-flex items-center gap-4 text-[#2f2f2f]">
                <MessageCircle className="w-5 h-5 text-[#6b6b6b]" />
                <p className="text-[#6d6d6d] text-xs font-normal">
                  {mentor.sessions} sessions ({mentor.reviews} reviews)
                </p>
              </div>
            </div>

            <div className="rounded-md shadow bg-white flex justify-between py-2 px-4 mt-4">
              <div>
                <p className="capitalize text-[#b4b4b4] text-[10px] font-normal">
                  Experience
                </p>
                <p className="text-black text-xs font-bold capitalize">
                  {mentor.experience} Years
                </p>
              </div>
              <div>
                <p className="capitalize text-[#b4b4b4] text-[10px] font-normal text-right">
                  Avg. Attendance
                </p>
                <p className="text-black text-xs font-bold capitalize">
                  {mentor.avgAttendance}%
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MentorsComp;
