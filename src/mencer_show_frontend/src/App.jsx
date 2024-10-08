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
  );
}

export default App;
