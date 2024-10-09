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
	const [greeting, setGreeting] = useState("");

	function handleSubmit(event) {
		event.preventDefault();
		const name = event.target.elements.name.value;
		mencer_show_backend.greet(name).then((greeting) => {
			setGreeting(greeting);
		});
		return false;
	}

	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={
						<main>
							<img src="/logo2.svg" alt="DFINITY logo" />
							<br />
							<br />
							<form action="#" onSubmit={handleSubmit}>
								<label htmlFor="name">
									Enter your name: &nbsp;
								</label>
								<input id="name" alt="Name" type="text" />
								<button type="submit">Click Me!</button>
							</form>
							<section id="greeting">{greeting}</section>
						</main>
					}
				/>
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/dashboard/mentors" element={<Mentors />} />
				<Route path="/dashboard/trending" element={<Trending />} />
				<Route
					path="/dashboard/learn/:courseId"
					element={<LearnCourseDetails />}
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
			</Routes>
		</Router>
	);
}

export default App;
