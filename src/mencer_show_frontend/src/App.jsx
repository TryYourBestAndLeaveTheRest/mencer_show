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
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Overview';
import Mentors from './pages/Dashboard/Mentors';
import Trending from './pages/Dashboard/Trending';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="!overflow-x-hidden">
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
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/dashboard/mentors' element={<Mentors />} />
        <Route path='/dashboard/trending' element={<Trending />} />
      </Routes>
    </Router>
  );
}

export default App;
