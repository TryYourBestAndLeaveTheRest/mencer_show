import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard/Overview";
import Mentors from "./pages/Dashboard/Mentors";
import Trending from "./pages/Dashboard/Trending";
import LearnCourseDetails from "./pages/Dashboard/Learn/CourseDetails";

import EduSignup from "./pages/auth/signup/educator/EduSignup";
import CreateAcc from "./pages/auth/signup/educator/CreateAcc";
import SelectLang from "./pages/auth/signup/educator/SelectLang";

import StuCreateAcc from "./pages/auth/signup/student/StuCreateAcc";
import StuSelectLang from "./pages/auth/signup/student/StuSelectLang";
import StuSignup from "./pages/auth/signup/student/StuSignup";

import StuSignin from "./pages/auth/signin/StuSignin";
import EduSignin from "./pages/auth/signin/EduSignin";

import Footer from "./components/footer";
import Header from "./components/header";
import ChooseLevel from "./components/homepage/chooseLevel";
import GamifiedLearning from "./components/homepage/gamifiedLearning";
import Hero from "./components/homepage/hero";
import HowItWorks from "./components/homepage/howItWorks";
import JoinCommunity from "./components/homepage/joinCommunity";
import Newsletter from "./components/homepage/newsletter";
import PopularCourses from "./components/homepage/popularCourses";
import ProjectRewards from "./components/homepage/projectrewards";
import Testimonials from "./components/homepage/testimonials";
import MencerMarquee from "./components/homepage/ui/mencerMarquee";
import WhyWeAreDifferent from "./components/homepage/whyWeAreDifferent";


function App() {
	return (
		<Router>
			<Routes>

				{/* Dashboard routes */}
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/dashboard/mentors" element={<Mentors />} />
				<Route path="/dashboard/trending" element={<Trending />} />
				<Route
					path="/dashboard/learn/:courseId"
					elemen  t={<LearnCourseDetails />}
				/>

				{/* auth routes */}

				{/* signup */}
				{/* educator */}
				<Route path="/auth/signup/educator" element={<EduSignup />} />
				<Route path="/auth/signup/educator/create-account" element={<CreateAcc />} />
				<Route path="/auth/signup/educator/select-language" element={<SelectLang />} />

				{/* student */}
				<Route path="/auth/signup/student" element={<StuSignup />} />
				<Route path="/auth/signup/student/create-account" element={<StuCreateAcc />} />
				<Route path="/auth/signup/student/select-language" element={<StuSelectLang />} />

				{/* signin */}
				<Route path="/auth/signin/student" element={<StuSignin/>} />
				<Route path="/auth/signin/educator" element={<EduSignin/>} />


				{/* home page */}
				<Route
          path="/"
          element={
            <div className="!overflow-hidden">
              <div className="w-full max-w-[1440px] min-h-screen mx-auto px-2">
                <div className="w-full mx-auto max-w-[1280px] h-fit">
                  <Header />
                  <Hero />
                  <HowItWorks />
                  <ProjectRewards />
                  <GamifiedLearning />
                  <PopularCourses />
                  <WhyWeAreDifferent />
                  <MencerMarquee 
                  color={"#FFDC16"}
                  direction={"left"}
                  />
                  <MencerMarquee
                  color={"#00249A"}
                  direction={"right"}
                  />
                  <ChooseLevel />
                  <JoinCommunity />
                  <Testimonials />
                  <Newsletter />
                  <Footer />
                </div>
              </div>
            </div>
          }
        />
			</Routes>
		</Router>
	);
}

export default App;
