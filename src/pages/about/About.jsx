import React from "react";
import { BiSolidDonateBlood } from "react-icons/bi";
import { Link } from "react-router-dom";

const About = () => {
	return (
		<section className="py-14 md:py-10 bg-red-50 text-zinc-900">
			<h1 className="flex justify-center items-center text-5xl font-bold pt-2 pb-8">About Us</h1>
			<div className="container px-4">
				<div className="grid grid-cols-12 gap-5 justify-center items-center">
					<div className="col-span-12 lg:col-span-6">
						<div className="text-center lg:px-20">
							<h2 className="text-3xl md:text-5xl leading-tight font-light uppercase tracking-wide">
								Donate <span className="font-bold text-red-600">Blood</span>, Save <span className="font-bold text-red-600">Lives</span>
								<span className="inline-flex w-3 h-3 rounded-full bg-red-600 ml-2"></span>
							</h2>
							<p className="text-xl leading-normal opacity-75 mt-4 mb-6">
								Your small act of kindness can create a huge difference in someone’s life. Join us in building a healthier, more compassionate community.
							</p>
							<p className="opacity-50 text-sm lg:mx-12">
								We connect donors with those in need, ensuring that every drop of blood is used to save lives. Together, we can make miracles happen.
							</p>
						</div>
					</div>
					<div className="col-span-12 lg:col-span-6">
						<div className="lg:ml-12">
							<p className="opacity-75 mb-4">
								<span className="text-[40px] text-red-600 font-bold">E</span>very year, millions of lives are saved thanks to generous blood donors. By donating blood, you give hope and a second chance to those in need.
							</p>
							<p className="opacity-75 mb-4">
              We are committed to creating a platform that connects compassionate donors with those in urgent need of blood. Our goal is to ensure a reliable and safe blood supply for hospitals and patients while spreading awareness about the importance of regular donations.
							</p>
              <p className="opacity-75 mb-4">
							We understand that donating blood might seem daunting for some. That’s why our platform is designed to make the process as smooth and rewarding as possible. From finding nearby donors to providing resources and support, we’re here every step of the way to ensure your experience is seamless and satisfying.
							</p>
              <p className="opacity-75 mb-4">
							If you’ve never donated blood before, we’re here to guide and support you through the process. It’s a simple, safe, and fulfilling act that takes just a little time but makes an enormous impact. Take the first step today and become a life-saver!
							</p>
							<p className="opacity-75 mb-4">
								Join our community of heroes and make a lasting impact. Your blood donation could be the reason someone gets to celebrate another birthday, hug their loved ones, or chase their dreams.
							</p>

              <Link
              className="rounded-full bg-red-600 px-5 py-2.5 my-6 text-sm md:text-base font-medium text-white shadow hover:bg-red-500 transition-all duration-300 ease-in-out inline-flex items-center gap-2"
             to='/'
            >
              Donate Blood
			  <BiSolidDonateBlood />
            </Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
