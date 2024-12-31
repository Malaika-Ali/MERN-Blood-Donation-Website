import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHeartbeat,
	faBalanceScale,
	faSmileBeam,
} from "@fortawesome/free-solid-svg-icons";

const features = [
	{
		icon: faHeartbeat,
		desc: "Improves heart health by reducing harmful iron levels in the blood, lowering the risk of heart disease.",
	},
	{
		icon: faBalanceScale,
		desc: "Enhances overall balance in the body by stimulating the production of new, healthy red blood cells.",
	},
	{
		icon: faSmileBeam,
		desc: "Boosts mental health by fostering a sense of accomplishment and reducing stress levels.",
	},
];

const FeaturedItem = ({ feature }) => {
	const isFirstItem = feature === features[0];
	const isSecondItem = feature === features[1];

	return (
		<div className={`flex items-center mt-12 ${isFirstItem ? "!mt-0" : ""}`}>
			<div className="mr-4">
				<span
					className={`w-14 h-14 rounded-full text-xl inline-flex items-center justify-center ${
						isFirstItem
							? "bg-teal-600 text-teal-600"
							: isSecondItem
							? "bg-green-600 text-green-600"
							: "bg-yellow-600 text-yellow-600"
					} bg-opacity-10`}
				>
					<FontAwesomeIcon icon={feature.icon} />
				</span>
			</div>
			<div>
				<p className="opacity-80">{feature.desc}</p>
			</div>
		</div>
	);
};

FeaturedItem.propTypes = {
	feature: PropTypes.object.isRequired,
};

const Benefits = () => {
	return (
		<section className="py-24 md:py-32 bg-white dark:bg-red-600 text-black dark:text-white relative overflow-hidden z-10 rounded-xl">
			<div className="container px-4 mx-auto">
				<div className="grid grid-cols-12 gap-6">
					<div className="col-span-12 md:col-span-5 md:col-start-2">
						<h1 className="text-3xl font-bold leading-tight md:text-[45px] mb-12 md:mb-0">
							Health Benefits of Donating Blood for Donors
						</h1>
					</div>
					<div className="col-span-12 md:col-span-5 md:col-start-7">
						{features.map((feature, i) => (
							<FeaturedItem feature={feature} key={i} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Benefits;
