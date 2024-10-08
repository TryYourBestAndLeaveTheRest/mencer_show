import { BookOpen, BadgeCheck, Share, Clock, Zap } from "lucide-react";

const Achievements = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md grid grid-cols-2 gap-4 font-['Familjen Grotesk']">

      <div className="flex flex-col gap-2 bg-[#c9a0ff] rounded-[20px] py-4 px-3">
        <div className="flex justify-between items-center">
          <h4 className="text-sm font-semibold">
            Time
          </h4>
          <div className="bg-[#b984fa] w-8 h-8 p-2 rounded-[11px] justify-center items-center inline-flex">
            <Share className="text-white" />
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <Clock size={27} className=""/>
          <h4 className="text-black text-4xl font-semibold">6:24</h4>
        </div>
        <div>
          <p className="text-black text-[10px] font-medium">
            Your Study Time is 23% Faster than 850 people
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2 bg-[#ff9a62] rounded-[20px] py-4 px-3">
        <div className="flex justify-between items-center">
          <h4 className="text-sm font-semibold">
            Streak
          </h4>
          <div className="bg-[#ec824a] w-8 h-8 p-2 rounded-[11px] justify-center items-center inline-flex">
            <Share className="text-white" />
          </div>
        </div>
        <div className="flex justify-center items-center gap-4">
          <Zap className="w-9 h-9"/>
          <h4 className="text-black text-4xl font-semibold">7</h4>
        </div>
        <div>
          <p className="text-black text-[10px] font-medium">
            Day streak, come back tomorrow to keep it up!
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2 bg-[#b6f36a] rounded-[20px] py-4 px-3">
        <div className="flex justify-between items-center">
          <h4 className="text-sm font-semibold">
            Level
          </h4>
          <div className="bg-[#9ae33c] w-8 h-8 p-2 rounded-[11px] justify-center items-center inline-flex">
            <Share className="text-white" />
          </div>
        </div>
        <div className="flex justify-center items-center gap-4">
          <img src="/images/certificate.svg" className="w-9 h-9"/>
          <h4 className="text-black text-4xl font-semibold">2</h4>
        </div>
        <div>
          <p className="text-black text-[10px] font-medium">
          Congratulations for 50 Module Milestone!
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-between bg-[#94dbfb] rounded-[20px] py-4 px-3">
        <div className="flex justify-between items-center">
          <h4 className="text-sm font-semibold">
            Badges
          </h4>
          <div className="bg-[#70ccf5] w-8 h-8 p-2 rounded-[11px] justify-center items-center inline-flex">
            <Share className="text-white" />
          </div>
        </div>
        <div className=" grid grid-cols-3 gap-4">
          <img src="/images/bulb.svg" className="w-6 h-6" />
          <img src="/images/double-line-badge.svg" className="w-6 h-6"  />
          <img src="/images/single-line-badge.svg" className="w-6 h-6"  />
          <BadgeCheck className="w-6 h-6"  />
          <BookOpen className="w-6 h-6"  />
          <img src="/images/police-badge.svg" />
        </div>
      </div>

    </div>
  );
};

export default Achievements;
