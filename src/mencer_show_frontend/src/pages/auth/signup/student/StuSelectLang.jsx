import { motion } from "framer-motion";
import { Progress } from "../../../../components/ui/progress";
import { TypographyH4 } from "../../../../components/Typography";
import { Checkbox } from "../../../../components/ui/checkbox";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import { Button } from "../../../../components/ui/button";

// Form page component
const StuSelectLang = () => {
	const [clicked, setClicked] = useState(false);
	const handleClick = () => {
		setClicked(!clicked);
	};

	const languageOptions = [
		{ value: "english", label: "English" },
		{ value: "french", label: "French" },
		{ value: "spanish", label: "Spanish" },
		{ value: "german", label: "German" },
		{ value: "italian", label: "Italian" },
	];

	// Form schema for checkbox validation
	const initialValues = {
		language: [], // Keep track of selected languages in an array
	};

	const validationSchema = Yup.object({
		language: Yup.array()
			.min(1, "Please select at least one language")
			.required(),
	});

	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: (values) => {
			console.log(values);
		},
	});

	return (
		<motion.main
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -50 }}
			transition={{ duration: 0.5 }}
			className="p-5 md:p-10 flex flex-row gap-16 justify-center m-auto"
		>
			<div className="max-w-[500px] w-full px-3">
				{/* Logo */}
				<div>
					<img
						src="/images/logo.svg"
						alt="logo"
						width={196}
						height={66}
						quality={100}
					/>
				</div>

				{/* Progress bar */}
				<div className="py-10">
					<p>3/3</p>
					<Progress
						value={100}
						className="bg-amber-100 active:bg-white md:w-96 w-64 h-1"
					/>
				</div>

				{/* Heading */}
				<TypographyH4 className="pb-3">
					You are Almost there!
				</TypographyH4>
				<p className="text-sm pb-6 text-gray-500">
					Select your preferred learning language so we can customize
					your experience
				</p>

				{/* Form */}
				<form onSubmit={formik.handleSubmit}>
					<div className="flex flex-col gap-4">
						<div className="flex flex-col gap-1">
							<label
								htmlFor="language"
								className="font-semibold  my-5 mb-2"
							>
								What is your preferred learning language?
							</label>
							<button
								className="font-semibold p-2 px-3 border border-yellow rounded-lg flex flex-row items-center justify-between gap-2 w-[200px] mb-4"
								onClick={handleClick}
							>
								Select{" "}
								{clicked ? (
									<GoTriangleDown />
								) : (
									<GoTriangleUp />
								)}
							</button>

							{/* Language Checkboxes */}
							{clicked ? (
								<div className="flex flex-col gap-2">
									{languageOptions.map((option) => (
										<div
											key={option.value}
											className="flex items-center"
										>
											<Checkbox
												checked={formik.values.language.includes(
													option.value
												)}
												onCheckedChange={(
													isChecked
												) => {
													const selectedLanguages = [
														...formik.values
															.language,
													];
													if (isChecked) {
														formik.setFieldValue(
															"language",
															[
																...selectedLanguages,
																option.value,
															]
														);
													} else {
														formik.setFieldValue(
															"language",
															selectedLanguages.filter(
																(lang) =>
																	lang !==
																	option.value
															)
														);
													}
												}}
												id={option.value}
											/>
											<label
												htmlFor={option.value}
												className="ml-2 text-gray-600"
											>
												{option.label}
											</label>
										</div>
									))}
								</div>
							) : (
								<></>
							)}

							{formik.errors.language && (
								<div className="text-red-500 text-sm mt-1">
									{formik.errors.language}
								</div>
							)}
						</div>

						<Button
							onClick={formik.handleSubmit}
							onSubmit={formik.handleSubmit}
							className="mt-4 text-black hover:bg-primaryHover p-2 rounded"
						>
							Complete
						</Button>
					</div>
				</form>
			</div>

			{/* Page image */}
			<div className="lg:block hidden">
				<img
					src="/images/auth/signup-img-3.png"
					alt="Select image"
					className="h-screen aspect-auto w-fit"
				/>
			</div>
		</motion.main>
	);
};

export default StuSelectLang;
