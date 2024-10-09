import { useState } from "react";
import { mencer_show_backend } from "declarations/mencer_show_backend";
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
				{/* educator */}
				<Route path="/auth/signup/educator" element={<EduSignup />} />
				<Route path="/auth/signup/educator/create-account" element={<CreateAcc />} />
				<Route path="/auth/signup/educator/select-language" element={<SelectLang />} />

				{/* student */}
				<Route path="/auth/signup/student" element={<StuSignup />} />
				<Route path="/auth/signup/student/create-account" element={<StuCreateAcc />} />
				<Route path="/auth/signup/student/select-language" element={<StuSelectLang />} />
			</Routes>
		</Router>
	);
}

export default App;
