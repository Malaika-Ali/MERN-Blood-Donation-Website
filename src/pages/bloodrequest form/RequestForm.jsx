import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faIdCard,
  faFileAlt,
  faMapMarkerAlt,
  faCity,
  faImage
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const RequestForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const navigate=useNavigate()

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const formData = new FormData();
      Object.keys(data).forEach(key => {
        if (key === 'image') {
          formData.append(key, data[key][0]);
        } else {
          formData.append(key, data[key]);
        }
      });

      const response = await axios.post('/api/v1/requests/blood-request', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log(`submitting response ${response.data}`)

      if (response.data.success) {
        setSubmitMessage("Blood request submitted successfully!");
        reset();
        navigate('/donors-list')
      } else {
        setSubmitMessage("Error submitting blood request. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitMessage("Error submitting blood request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
      <div className="flex flex-wrap">
   
      <div className="w-full md:w-1/2 px-2">
          <div className="w-full flex flex-col relative mb-6">
            <label className="opacity-80 font-medium mb-2" htmlFor="address">
              Address:
            </label>
            <input
              type="text"
              className={`bg-transparent border ${errors.address ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-600 duration-300 min-h-[48px] leading-none px-3 pl-10`}
              id="address"
              {...register("address", { required: "Address is required" })}
              placeholder="123 Main St"
            />
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="absolute top-12 text-sm left-4 opacity-80"
            />
            {errors.address && <span className="text-red-500 text-sm mt-1">{errors.address.message}</span>}
          </div>
        </div>

        <div className="w-full md:w-1/2 px-2">
          <div className="w-full flex flex-col relative mb-6">
            <label className="opacity-80 font-medium mb-2" htmlFor="CNIC">
              CNIC:
            </label>
            <input
              type="text"
              className={`bg-transparent border ${errors.CNIC ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-600 duration-300 min-h-[48px] leading-none px-3 pl-10`}
              id="CNIC"
              {...register("CNIC", { 
                required: "CNIC is required",
                pattern: {
                  value: /^[0-9]{5}-[0-9]{7}-[0-9]$/,
                  message: "Invalid CNIC format. Use: 1234512345671"
                }
              })}
              placeholder="12345-1234567-1"
            />
            <FontAwesomeIcon
              icon={faIdCard}
              className="absolute top-12 text-sm left-4 opacity-80"
            />
            {errors.cnic && <span className="text-red-500 text-sm mt-1">{errors.cnic.message}</span>}
          </div>
        </div>
        <div className="w-full px-2">
          <div className="w-full flex flex-col relative mb-6">
            <label className="opacity-80 font-medium mb-2" htmlFor="purpose">
              Purpose:
            </label>
            <textarea
              className={`bg-transparent border ${errors.purpose ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-600 duration-300 min-h-[100px] leading-none px-3 pl-10 py-2`}
              id="purpose"
              {...register("purpose", { required: "Purpose is required" })}
              placeholder="Please state your purpose..."
            />
            <FontAwesomeIcon
              icon={faFileAlt}
              className="absolute top-12 text-sm left-4 opacity-80"
            />
            {errors.purpose && <span className="text-red-500 text-sm mt-1">{errors.purpose.message}</span>}
          </div>
        </div>
      
        {/* <div className="w-full md:w-1/2 px-2">
          <div className="w-full flex flex-col relative mb-6">
            <label className="opacity-80 font-medium mb-2" htmlFor="town">
              Town:
            </label>
            <input
              type="text"
              className={`bg-transparent border ${errors.town ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-600 duration-300 min-h-[48px] leading-none px-3 pl-10`}
              id="town"
              {...register("town", { required: "Town is required" })}
              placeholder="Anytown"
            />
            <FontAwesomeIcon
              icon={faCity}
              className="absolute top-12 text-sm left-4 opacity-80"
            />
            {errors.town && <span className="text-red-500 text-sm mt-1">{errors.town.message}</span>}
          </div>
        </div> */}
    
        <div className="w-full md:w-1/2 px-2">
          <div className="w-full flex flex-col relative mb-6">
            <label className="opacity-80 font-medium mb-2" htmlFor="image">
              Upload Doctor's Prescription Image:
            </label>
            <input
              type="file"
              className={`bg-transparent border ${errors.image ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-600 duration-300 min-h-[48px] leading-none px-3 pl-10`}
              id="image"
              {...register("image", { 
                // required: "Image is required",
                validate: {
                 lessThan10MB: files => !files?.length || files[0]?.size < 10000000 || "Max 10MB"
                  
                //   acceptedFormats: files =>
                //     ['image/jpeg', 'image/png', 'image/gif'].includes(
                //       files[0]?.type
                //     ) || "Only PNG, JPEG and GIF"
                }
            
              })}
            //   accept="image/*"
            />
            <FontAwesomeIcon
              icon={faImage}
              className="absolute top-12 text-sm left-4 opacity-80"
            />
            {/* {errors.image && <span className="text-red-500 text-sm mt-1">{errors.image.message}</span>} */}
          </div>
        </div>
        <div className="w-full">
          <div className="flex md:justify-end mt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`rounded-full bg-red-600 px-5 py-2.5 my-6 text-sm md:text-base font-medium text-white shadow hover:bg-red-500 transition-all duration-300 ease-in-out flex items-center justify-between gap-2 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </div>
      </div>
      {submitMessage && (
        <div className={`mt-4 p-2 rounded ${submitMessage.includes('successfully') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {submitMessage}
        </div>
      )}
    </form>
  );
};

export default RequestForm;

