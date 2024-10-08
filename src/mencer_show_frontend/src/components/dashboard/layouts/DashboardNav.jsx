import React from "react";
import { Bell, Calendar, AlignJustify, LibraryBig, X } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Link, useLocation, useNavigate } from "react-router-dom";

const DashboardNav = ({ toggleSideBar, setToggleSideBar }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const handleLogout = () => {
    navigate("/"); // React router navigate function
  };

  const handleToggleSidebar = () => setToggleSideBar(!toggleSideBar);

  return (
    <>
      <nav className="fixed top-0 z-40 w-full px-5 py-6 bg-white text-black md:px-10 lg:py-4 border-b">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src="/images/logo.svg" alt="Mencer Logo" className="h-8 sm:h-10 mx-auto" />
          </div>

          {/* Search Input - Hidden on mobile */}
          <div className="hidden md:block flex-grow px-4">
            <Input
              type="search"
              placeholder="Search for your tasks"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none"
            />
          </div>

          {/* Right-side buttons and avatar */}
          <div className="flex items-center space-x-4">
            <Button className="relative rounded-sm bg-[#DFDFDF] text-black hover:bg-[#DFDFDF]/55">
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full px-2 py-1">8</span>
              <Bell size={20} />
            </Button>

            <Button className="rounded-sm bg-[#DFDFDF] text-black hover:bg-[#DFDFDF]/55 items-center gap-2 hidden md:flex">
              <img src="/images/golden-coin.svg" alt="coin" />
              <span className="text-black">
                <h1 className="text-sm font-bold tracking-tight lg:text-xl">8</h1>
              </span>
            </Button>

            <Button className="bg-[#FFDC16] hover:bg-[#FFDC16]/55 text-black text-base items-center gap-2 px-4 py-2 rounded-md hidden md:flex">
              <Calendar size={24} /> Book Session
            </Button>

            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="avatar" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            {/* Hamburger icon for mobile menu */}
            <div className="cursor-pointer lg:hidden block" onClick={handleToggleSidebar}>
              {toggleSideBar ? <X size={24} /> : <AlignJustify size={24} />}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile sidebar */}
      <aside
        className={`transition-width fixed z-40 flex h-screen bg-white shadow-lg duration-300 ease-in-out lg:hidden ${
          toggleSideBar ? "w-64" : "w-0"
        }`}
      >
        {toggleSideBar && (
          <div className="flex flex-col items-center justify-center">
            <ul className="flex flex-col items-center justify-center w-full">
              <Link to="/dashboard">
                <li
                  className={`${
                    pathname === "/dashboard"
                      ? "text-[#003B8F] bg-[#ACCFFF] py-2 px-4 w-full"
                      : "text-gray-600 hover:bg-gray-100 py-2 px-4 w-full"
                  } flex items-center justify-center rounded-md`}
                  onClick={() => setToggleSideBar(false)}
                >
                  <img src="/images/house-icon.svg" className="w-6 h-6" alt="house" />
                  <span className="ml-2">Overview</span>
                </li>
              </Link>

              <Link to="/dashboard/learn">
                <li
                  className={`${
                    pathname === "/dashboard/learn"
                      ? "text-[#003B8F] bg-[#ACCFFF] flex flex-col items-center gap-2 py-2 px-4 rounded-md w-full"
                      : "text-gray-600 hover:bg-gray-100 flex flex-col items-center gap-2 py-2 px-4 rounded-md w-full"
                  }`}
                  onClick={() => setToggleSideBar(false)}
                >
                  <div className="flex items-center">
                    <LibraryBig className={pathname === "/dashboard/learn" ? "w-6 h-6 bg-[#ACCFFF]" : "w-6 h-6"} />
                    Learn
                  </div>
                </li>
              </Link>

              <Link to="/dashboard/mentors">
                <li
                  className={`${
                    pathname === "/dashboard/mentors"
                      ? "text-[#003B8F] bg-[#ACCFFF] flex flex-col items-center gap-2 py-2 px-4 rounded-md w-full"
                      : "text-gray-600 hover:bg-gray-100 flex flex-col items-center gap-2 py-2 px-4 rounded-md w-full"
                  }`}
                  onClick={() => setToggleSideBar(false)}
                >
                  <div className="flex items-center">
                    <img src="../images/mentor-icon.svg" className={pathname === "/dashboard/mentors" ? "w-6 h-6 bg-[#ACCFFF]" : "w-6 h-6"} />
                    Mentors
                  </div>
                </li>
              </Link>

              <Link to="/dashboard/bookings">
                <li
                  className={`${
                    pathname === "/dashboard/bookings"
                      ? "text-[#003B8F] bg-[#ACCFFF] flex flex-col items-center gap-2 py-2 px-4 rounded-md w-full"
                      : "text-gray-600 hover:bg-gray-100 flex flex-col items-center gap-2 py-2 px-4 rounded-md w-full"
                  }`}
                  onClick={() => setToggleSideBar(false)}
                >
                  <div className="flex items-center">
                    <Calendar className={pathname === "/dashboard/bookings" ? "w-6 h-6 bg-[#ACCFFF]" : "w-6 h-6"} />
                    Bookings
                  </div>
                </li>
              </Link>

              <Link to="/dashboard/chats">
                <li
                  className={`${
                    pathname === "/dashboard/chats"
                      ? "text-[#003B8F] bg-[#ACCFFF] flex flex-col items-center gap-2 py-2 px-4 rounded-md w-full"
                      : "text-gray-600 hover:bg-gray-100 flex flex-col items-center gap-2 py-2 px-4 rounded-md w-full"
                  }`}
                  onClick={() => setToggleSideBar(false)}
                >
                  <div className="flex items-center">
                    <img src="../images/chat.svg" className={pathname === "/dashboard/chats" ? "w-6 h-6 bg-[#ACCFFF]" : "w-6 h-6"} />
                    Chats
                  </div>
                </li>
              </Link>

              <Link to="/dashboard/others">
                <li
                  className={`${
                    pathname === "/dashboard/others"
                      ? "text-[#003B8F] bg-[#ACCFFF] flex flex-col items-center gap-2 py-2 px-4 rounded-md w-full"
                      : "text-gray-600 hover:bg-gray-100 flex flex-col items-center gap-2 py-2 px-4 rounded-md w-full"
                  }`}
                  onClick={() => setToggleSideBar(false)}
                >
                  <div className="flex items-center">
                    <img src="../images/others-icon.svg" className={pathname === "/dashboard/others" ? "w-6 h-6 bg-[#ACCFFF]" : "w-6 h-6"} />
                    Others
                  </div>
                </li>
              </Link>
            </ul>
          </div>
        )}
      </aside>
    </>
  );
};

export default DashboardNav;
