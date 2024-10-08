import React, { useEffect, useState } from "react";
import { LibraryBig, Calendar } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";

const DashboardSidebar = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentRoute, setCurrentRoute] = useState("");

  useEffect(() => {
    setCurrentRoute(location.pathname);
  }, [location.pathname]);

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <>
      <aside className="relative">
        <div className="w-fit min-h-screen hidden md:block bg-white shadow-xl fixed top-20 left-10 flex-col items-center p-6 space-y-8 overflow-y-auto scrollbar-hide">
          <div>
            <ul>
              <Link to="/dashboard" className="flex flex-col items-center gap-2 py-2 px-4 rounded-md w-full">
                <li
                  className={
                    currentRoute === "/dashboard"
                      ? "text-[#003B8F] bg-[#ACCFFF] flex flex-col items-center gap-2 py-2 px-4 rounded-md w-full"
                      : "text-gray-600 hover:bg-gray-100 flex flex-col items-center gap-2 py-2 px-4 rounded-md w-full"
                  }
                >
                  <div className="flex flex-col items-center justify-center w-full">
                    <img
                      src="../images/house-icon.svg"
                      className={
                        currentRoute === "/dashboard" ? "w-6 h-6 bg-[#ACCFFF]" : "w-6 h-6"
                      }
                      alt="Overview"
                    />
                    Overview
                  </div>
                </li>
              </Link>

              <li
                className={
                  currentRoute === "/dashboard/learn"
                    ? "text-[#003B8F] bg-[#ACCFFF] flex flex-col items-center gap-2 py-2 px-4 rounded-md w-full cursor-not-allowed"
                    : "text-gray-600 hover:bg-gray-100 flex flex-col items-center gap-2 py-2 px-4 rounded-md w-full cursor-not-allowed"
                }
              >
                <div className="flex flex-col items-center justify-center w-full">
                  <LibraryBig className={currentRoute === "/dashboard/learn" ? "w-6 h-6 bg-[#ACCFFF]" : "w-6 h-6"} />
                  Learn
                </div>
              </li>

              <Link to="/dashboard/mentors">
                <li
                  className={
                    currentRoute === "/dashboard/mentors"
                      ? "text-[#003B8F] bg-[#ACCFFF] flex flex-col items-center gap-2 py-2 px-4 rounded-md w-full"
                      : "text-gray-600 hover:bg-gray-100 flex flex-col items-center gap-2 py-2 px-4 rounded-md w-full"
                  }
                >
                  <div className="flex flex-col items-center justify-center w-full">
                    <img
                      src="../images/mentor-icon.svg"
                      className={currentRoute === "/dashboard/mentors" ? "w-6 h-6 bg-[#ACCFFF]" : "w-6 h-6"}
                      alt="Mentors"
                    />
                    Mentors
                  </div>
                </li>
              </Link>

              <li
                className={
                  currentRoute === "/dashboard/bookings"
                    ? "text-[#003B8F] bg-[#ACCFFF] flex flex-col items-center gap-2 py-2 px-4 rounded-md w-full cursor-not-allowed"
                    : "text-gray-600 hover:bg-gray-100 flex flex-col items-center gap-2 py-2 px-4 rounded-md w-full cursor-not-allowed"
                }
              >
                <div className="flex flex-col items-center justify-center w-full">
                  <Calendar className={currentRoute === "/dashboard/bookings" ? "w-6 h-6 bg-[#ACCFFF]" : "w-6 h-6"} />
                  Bookings
                </div>
              </li>

              <li
                className={
                  currentRoute === "/dashboard/chats"
                    ? "text-[#003B8F] bg-[#ACCFFF] flex flex-col items-center gap-2 py-2 px-4 rounded-md w-full cursor-not-allowed"
                    : "text-gray-600 hover:bg-gray-100 flex flex-col items-center gap-2 py-2 px-4 rounded-md w-full cursor-not-allowed"
                }
              >
                <div className="flex flex-col items-center justify-center w-full">
                  <img
                    src="../images/chat.svg"
                    className={currentRoute === "/dashboard/chats" ? "w-6 h-6 bg-[#ACCFFF]" : "w-6 h-6"}
                    alt="Chats"
                  />
                  Chats
                </div>
              </li>

              <li
                className={
                  currentRoute === "/dashboard/others"
                    ? "text-[#003B8F] bg-[#ACCFFF] flex flex-col items-center gap-2 py-2 px-4 rounded-md w-full cursor-not-allowed"
                    : "text-gray-600 hover:bg-gray-100 flex flex-col items-center gap-2 py-2 px-4 rounded-md w-full cursor-not-allowed"
                }
              >
                <div className="flex flex-col items-center justify-center w-full">
                  <img
                    src="../images/others-icon.svg"
                    className={currentRoute === "/dashboard/others" ? "w-6 h-6 bg-[#ACCFFF]" : "w-6 h-6"}
                    alt="Others"
                  />
                  Others
                </div>
              </li>
            </ul>

            <div className="flex flex-col items-center justify-center w-full">
              <Link to="/dashboard">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="avatar" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </Link>
            </div>
          </div>
        </div>

        <div className="h-full min-h-screen w-full pl-5 pr-5 pt-12 py-10 md:pt-10 lg:min-h-40 lg:pl-[3rem] lg:pr-2 pb-20">
          {children}
        </div>
      </aside>
    </>
  );
};

export default DashboardSidebar;
