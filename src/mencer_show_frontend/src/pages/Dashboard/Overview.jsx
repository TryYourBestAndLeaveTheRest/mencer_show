import DashboardLayout from "../../components/dashboard/layouts/DashboardLayout";
import DashboardSidebar from "../../components/dashboard/layouts/DashboardSidebar";
import DashboardNav from "../../components/dashboard/layouts/DashboardNav";
import CourseProgress from "../../components/dashboard/CourseProgress";
import Achievements from "../../components/dashboard/Achievements";
import TaskCard from "../../components/dashboard/TaskCard";
import MentorCard from "../../components/dashboard/MentorCard";
import NotificationCard from "../../components/dashboard/NotificationCard";
import { courses, tasksData, notificationsData } from "../../lib/dashboardData";
import { Pen, Share, Trash2 } from "lucide-react";

export default function DashboardPage() {
  return (
    <>
    <DashboardNav page={"overview"} />
    <DashboardSidebar>
      
      <div className="flex-1 mt-20 px-4 md:px-8 lg:ml-52">
        {/* Header Section */}
        <div className="relative mb-8 bg-gradient-to-r from-[#E26EE5] to-[#DC0EE2] text-white px-4 md:px-8 rounded-lg py-4 flex flex-col lg:flex-row justify-between items-center shadow-lg">
          <div className="mb-4 lg:mb-0">
            <span className="text-xs uppercase tracking-wide font-normal">
              Online Course
            </span>
            <h2 className="text-white text-2xl md:text-3xl lg:text-[44px] font-bold font-['Familjen Grotesk'] mt-2">
            Sharpen Your Skills With <br />
            Professional Online Courses
          </h2>

            <button className="bg-black text-white px-6 py-3 rounded-full mt-6 flex items-center">
              Join Now
              <span className="ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polygon points="10 8 16 12 10 16 10 8"></polygon>
                </svg>
              </span>
            </button>
          </div>
          <div className="relative w-full lg:w-1/3 mt-6 lg:mt-0">
            <img
              src='../images/girl-graduate.png'
              alt="Graduate image"
              // width={400}
              // height={400}
              className="object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3">
            {/* Course Progress */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {courses.map((course, index) => {
                return <CourseProgress key={index} coursesData={course} />;
              })}
            </div>

            {/* Tasks */}
            <div className="mb-8 shadow-md px-4 md:px-8 py-6">
              <div className="font-semibold text-xl mb-4 gap-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span>Tasks</span>
                  <div className="w-2 h-2 bg-[#a5ff00] rounded-full"></div>
                </div>
                <div className="flex gap-6 items-center text-[#707070]">
                  <span className="flex items-center gap-2 text-[15px] font-normal">
                    <Pen className="w-4 h-4" /> Edit
                  </span>
                  <span className="flex items-center gap-2 text-[15px] font-normal">
                    <Share className="w-4 h-4" /> Share
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tasksData.map((tasks, index) => {
                  return <TaskCard key={index} tasksData={tasks} />;
                })}
              </div>
            </div>

            {/* Mentors */}
            <div className="shadow-md px-4 md:px-8 py-6">
              <h3 className="font-semibold text-xl mb-4">Your Mentors</h3>
              <MentorCard />
            </div>
          </div>

          <div className="w-full lg:w-1/3">
            {/* Achievements */}
            <div className="mb-8">
              <h6 className="text-black text-sm font-bold tracking-tight lg:text-xl">
                Your Achievements
              </h6>
              <Achievements />
            </div>

            {/* Notifications Section */}
            <div className="p-4 rounded-md shadow-md">
              <div className="flex justify-between">
                <h5 className="text-xl mb-4 text-base font-bold tracking-tight lg:text-2xl">
                  Notifications
                </h5>
                <div className="flex items-center gap-2 text-[#707070] text-sm font-normal">
                  <Trash2 className="w-4 h-4" /> Clear
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 mb-8 bg-white rounded-lg">
                {notificationsData.map((notifications, index) => {
                  return (
                    <NotificationCard
                      key={index}
                      notificationsData={notifications}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardSidebar>
    </>
  );
}

// DashboardPage.getLayout = function getLayout(page) {
//   return <DashboardLayout page={"overview"}>{page}</DashboardLayout>;
// };
