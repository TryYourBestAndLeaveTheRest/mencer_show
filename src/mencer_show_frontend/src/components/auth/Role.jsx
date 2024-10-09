import { LiaUserCogSolid } from "react-icons/lia";
import { GoPerson } from "react-icons/go";
import { FaCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Role = ({ role }) => {
	return (
		<div className="flex w-full flex-col space-y-4 py-4">
			<Link to="/auth/signup/student"
				className={
					role === "student"
						? "border border-blue rounded-sm p-3 flex flex-row gap-2 justify-between items-center"
						: "border border-gray-200 rounded-sm p-3 text-gray-500 flex flex-row gap-2 justify-between items-center"
				}
			>
				<div
					className={
						role === "student"
							? "p-2 bg-lightYellow rounded-md"
							: "p-2 bg-gray-200 rounded-md"
					}
				>
					<GoPerson className="text-xl rounded-md " />
				</div>{" "}
				<div className="flex flex-col gap-2 text-left ">
					<span className="font-semibold">I'm a student</span>{" "}
					<span className="text-xs">
						I'm looking to access learning resources
					</span>
				</div>
				<div>
					<FaCircleCheck
						className={
							role === "student"
								? "bg-white rounded-full text-green-500"
								: "hidden"
						}
					/>
				</div>
			</Link>

			<Link to="/auth/signup/educator"
				className={
					role === "educator"
						? "border border-blue rounded-sm p-3 flex flex-row gap-2 justify-between items-center"
						: "border border-gray-200 rounded-sm p-3 text-gray-500 flex flex-row gap-2 justify-between items-center"
				}
			>
				<div
					className={
						role === "educator"
							? "p-2 bg-lightYellow rounded-md"
							: "p-2 bg-gray-200 rounded-md"
					}
				>
					<LiaUserCogSolid className="text-xl rounded-md " />
				</div>
				<div className="flex flex-col gap-2 text-left">
					<span className="font-semibold text-base">I'm an Educator</span>
					<span className="text-xs">I'm ready to share learning resources</span>
				</div>

				<div>
					<FaCircleCheck
						className={
							role === "educator"
								? "bg-white rounded-full text-green-500"
								: "hidden"
						}
					/>
				</div>
			</Link>
		</div>
	);
};

export default Role;
