import React from "react";
import img from '../../assets/get-blood.png';
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import reg from '../../assets/reg.avif';
// import noti from '../../assets/noti.avif'
import contact from '../../assets/contact.png';
import pic from '../../assets/new.png'

const GetBloodProcedure = () => {
  return (
    <div className="bg-red-50 py-12 px-6 lg:px-20">
      <h2 className="text-center text-2xl lg:text-4xl font-bold">
        How to Get Blood?
      </h2>
      <div className="flex flex-col lg:flex-row items-center justify-center space-y-14 lg:space-y-0 lg:space-x-10">
        {/* Mobile Heartline Image */}
        <div className="flex justify-center -mt-8 w-full lg:hidden">
          <img src={img} alt="Heartline" />
        </div>
        
        {/* Step 1 */}
        <div className="relative flex flex-col items-center text-center">
          <div className="w-20 h-20 bg-white rounded-full border-2 border-black flex items-center justify-center absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-10">
            <span className="text-black font-bold text-lg">1</span>
          </div>
          <div className="bg-white rounded-full shadow-lg p-6 w-56 h-56 flex items-center justify-center">
            <img
              src={reg}
              alt="Register Yourself"
              className="w-full"
            />
          </div>
          <p className="mt-4 text-sm lg:text-base text-gray-700">
            Register yourself by signing up on our platform and providing your details, including the type of blood you need.
          </p>
        </div>
        
        {/* Heartline for Desktop */}
        <div className="flex flex-col gap-12">
          <div className="hidden lg:flex lg:justify-center lg:w-full">
            <img className="w-full" src={img} alt="Heartline" />
          </div>

          {/* Step 2 */}
          <div className="relative flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-white rounded-full border-2 border-black flex items-center justify-center absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-10">
              <span className="text-black font-bold text-lg">2</span>
            </div>
            <div className="bg-white rounded-full shadow-lg p-6 w-56 h-56 flex items-center justify-center">
              <img
                src={pic}
                alt="Notify Donors"
                className="w-full"
              />
            </div>
            <p className="mt-4 text-sm lg:text-base text-gray-700">
              Notifications are sent to donors within a 3km radius, alerting them of your blood requirement.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="relative flex flex-col items-center text-center">
          <div className="w-20 h-20 bg-white rounded-full border-2 border-black flex items-center justify-center absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-10">
            <span className="text-black font-bold text-lg">3</span>
          </div>
          <div className="bg-white rounded-full shadow-lg p-6 w-56 h-56 flex items-center justify-center">
            <img
              src={contact}
              alt="Connect with Donor"
              className="w-full"
            />
          </div>
          <p className="mt-4 text-sm lg:text-base text-gray-700">
            A donor will contact you to coordinate the donation process. You can finalize the time and place for the donation together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetBloodProcedure;
