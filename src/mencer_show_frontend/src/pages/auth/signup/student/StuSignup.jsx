import { TypographyH3 } from "../../../../components/Typography";
import { Progress } from "../../../../components/ui/progress";
import Role from "../../../../components/auth/Role";
import { Button } from "../../../../components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const StuSignup = () => {
	return (
		<motion.main
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -50 }}
			transition={{ duration: 0.5 }}
			className="p-5 md:p-10 flex flex-row gap-16 justify-center m-auto"
		>
			<div className="max-w-[500px] w-full px-3">
				{/* logo */}
				<div className="">
					<img
						src="/images/logo.svg"
						alt="logo"
						width={196}
						height={66}
						className=""
					/>
				</div>

				{/* progress bar */}
				<div className="py-10">
					<p>1/3</p>
					<Progress
						value={33}
						className=" bg-amber-100 active:bg-white md:w-96 w-64 h-1"
					/>
				</div>

				<TypographyH3 className="pb-5">
					Let's Help You Get Started
				</TypographyH3>
				<p className="text-sm text-gray-500 py-3">
					Choose your role to personalize your journey.{" "}
					<span>
						Select 'Student' to access courses that build your
						skills
					</span>
				</p>

				{/*Role component */}
				<div>
					<Role role={"student"} />
				</div>

				<Link to="/auth/signup/student/create-account">
					<Button className="w-full mt-8 py-3 duration-300 hover:bg-primaryHover text-black">
						Continue
					</Button>
				</Link>

				<div>
					<p className="text-sm text-gray-500 py-3 text-right">
						Already have an account?{" "}
						<Link
							to={"/auth/signin/student"}
							className="underline font-semibold"
						>
							Login
						</Link>
					</p>
				</div>
			</div>

			{/*Signup image */}
			<div className="lg:block hidden">
				<img
					src="/images/auth/signup-img-2.png"
					alt="logo"
					className="h-screen aspect-auto w-fit"
				/>
			</div>
		</motion.main>
	);
};

export default StuSignup;
