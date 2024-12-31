import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";


const infoList = [
	{ label: "Recipient City", value: "Bangladesh" },
	{ label: "Recipient's area", value: "7+ Years" },
	{ label: "Recipient's Phone Number", value: "21 June 1994" },
	{ label: "Recipient's Email Address", value: "21 June 1994" },

];

const ProfileKeyInfo = () => (
	<div>
		{infoList.map((info, i) => (
			<p className="text-2xl mb-0" key={i}>
				<span className="opacity-50 mr-2 font-light">{info.label}</span>
				<strong>{info.value}</strong>
			</p>
		))}
	</div>
);

const RequestDetail = () => {
	return (
		<header className=" py-14 md:py-24 bg-red-50  text-black ">
			<div className="container px-4 relative">
				<div className="grid grid-cols-12">
					<div className="col-span-12 lg:col-span-3 xl:col-span-4 lg:order-2 mb-6 lg:mb-0 text-center lg:text-start">
                        <h1 className="text-center">Doctor's prescription's image</h1>
						<img
							src="https://cdn.easyfrontend.com/pictures/team/team_13_3.jpg"
							alt=""
							className="max-w-full h-auto border-[5px] border-red-600 shadow-xl  mx-auto"
						/>
					</div>
					<div className="col-span-12 lg:col-span-7 lg:pl-6 xl:pl-12">
						<p className="text-xl leading-normal mb-2 opacity-50">
							Request By:
						</p>
						<h2 className="text-3xl leading-none md:text-7xl font-bold mb-6">
							Sara Taylor
						</h2>

						<div className="mt-12 lg:ml-12 p-4 md:px-12 lg:py-6 border-l">
							<ProfileKeyInfo />
							
						</div>

                        <div className="flex flex-row justify-center gap-2 items-center">
                    <div
              className="rounded-full bg-red-600 px-5 py-2.5 my-6 text-sm md:text-lg font-medium text-white shadow hover:bg-red-500 transition-all duration-300 ease-in-out flex items-center justify-between gap-2 cursor-pointer"
             
            >
              Accept
            </div>
            <div
              className="rounded-full bg-transparent px-5 py-2.5 my-6 text-sm md:text-lg font-medium text-red-600 border-2 border-red-600 shadow hover:bg-red-600 hover:text-white transition-all duration-300 ease-in-out flex items-center justify-between gap-2 cursor-pointer"
             
            >
              Ignore
            </div>
                    </div>
					</div>
                    
				</div>
			</div>
		</header>
	);
};

export default RequestDetail