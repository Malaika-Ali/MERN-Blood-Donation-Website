import React, {useState, useEffect} from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import heroimg from '../../assets/hero-img.png'
import { BiSolidDonateBlood } from "react-icons/bi";
import axios from "axios";
const HeroHeaderShape = () => (
	<svg
		className="absolute right-0 top-0 lg:top-[-55px] text-red-200 -z-10"
		width="686"
		height="630"
		viewBox="0 0 686 630"
		fill="currentColor"
		xmlns="http://www.w3.org/2000/svg"
	>
		<ellipse
			cx="403.5"
			cy="231.894"
			rx="403.5"
			ry="397.98"
			fill="currentColor"
		/>
	</svg>
);

const HeroSection = () => {

	const [currentUser, setCurrentUser] = useState(null);
	useEffect(() => {
	  const fetchCurrentUser = async () => {
		try {
		  const response = await axios.get("/api/v1/users/current-user", {
			withCredentials: true
		  });
		  setCurrentUser(response.data.data);
		} catch (error) {
		  console.error("Error fetching current user:", error);
		}
	  };
  
	  fetchCurrentUser();
	}, []);

	return (
		<section className=" pt-24 -pb-20 lg:py-0 bg-red-50  text-black  relative z-10 overflow-hidden">
			<HeroHeaderShape />

			<div className="container px-4 mx-auto relative ">
				<div className="grid grid-cols-12 gap-6">
					<div className="col-span-12 lg:col-span-6 xl:col-span-7 xl:pr-12 text-center lg:text-start ">
						<div className="flex flex-col justify-center h-full lg:h-[90%]">
							<h2 className="text-4xl font-bold md:text-[70px] leading-4 mb-6">
								Donate <span className="text-red-600">Blood</span>
							</h2>
							<h2 className="text-4xl font-bold md:text-[70px] leading-none mb-6">
								Save <span className="text-red-600">Lives</span>
							</h2>
							<p className="text-lg text-gray-700 leading-6 opacity-80 lg:max-w-[75%]">
							Your one donation can be the lifeline for someone in need. Join us in making a difference—because every drop counts.
							</p>
							<div className="items-center gap-4 flex justify-center lg:justify-start">
            {/* <Link
              className="rounded-full bg-red-600 px-5 py-2.5 my-6 text-sm md:text-lg font-medium text-white shadow hover:bg-red-500 transition-all duration-300 ease-in-out flex items-center justify-between gap-2"
             to='/login'
            >
              Donate Blood
			  <BiSolidDonateBlood />
            </Link> */}

			{currentUser?.role === 'recipient' ? (
              <Link
              className="rounded-full bg-red-600 px-5 py-2.5 my-6 text-sm md:text-lg font-medium text-white shadow hover:bg-red-500 transition-all duration-300 ease-in-out flex items-center justify-between gap-2"
             to='/request-blood'
            >
              Request Blood
            </Link>)
            :
			   (<Link
				className="rounded-full bg-red-600 px-5 py-2.5 my-6 text-sm md:text-lg font-medium text-white shadow hover:bg-red-500 transition-all duration-300 ease-in-out flex items-center justify-between gap-2"
			   to='/register'
			  >
				Donate Blood
				<BiSolidDonateBlood />
			  </Link>)
			}
          </div>
						</div>
					</div>
					<div className="col-span-12 lg:col-span-6 xl:col-span-5 text-center lg:text-start ">
						<img
							src={heroimg}
							alt=""
							className="rounded max-w-[80%] lg:max-w-full h-[70%] lg:h-full mx-auto lg:mx-0 -mt-4 lg:-mt-8"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection