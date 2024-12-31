import React from "react";
import logo from '../../assets/logo.png'
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faAt,
  faLock,
  faUser,
  faPhone
} from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';

const SignUpForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const navigate=useNavigate()

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('/api/v1/users/register', data);
      Swal.fire({
        icon: 'success',
        title: 'Registration Successful',
        text: 'You have successfully registered!',
      });
      console.log('Registration successful:', response.data);
      navigate('/login')
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Registration Failed',
        text: err.response?.data?.message || 'An error occurred during registration',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 px-2">
          <div className="w-full flex flex-col relative mb-6">
            <label className="opacity-80 font-medium mb-2" htmlFor="fullname">
              Full Name:
            </label>
            <input
              type="text"
              className={`bg-transparent border ${errors.fullname ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-600 duration-300 min-h-[48px] leading-none px-3 pl-10`}
              id="fullname"
              {...register("fullname", { required: "Full name is required" })}
              placeholder="John Smith"
            />
            <FontAwesomeIcon
              icon={faUser}
              className="absolute top-12 text-sm left-4 opacity-80"
            />
            {errors.fullname && <span className="text-red-500 text-sm mt-1">{errors.fullname.message}</span>}
          </div>
        </div>

        <div className="w-full md:w-1/2 px-2">
          <div className="w-full flex flex-col relative mb-6">
            <label className="opacity-80 font-medium mb-2" htmlFor="fathersName">
              Father's Name:
            </label>
            <input
              type="text"
              className={`bg-transparent border ${errors.fathersName ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-600 duration-300 min-h-[48px] leading-none px-3 pl-10`}
              id="fathersName"
              {...register("fathersName", { required: "Father's name is required" })}
              placeholder="Smith Austin"
            />
            <FontAwesomeIcon
              icon={faUser}
              className="absolute top-12 text-sm left-4 opacity-80"
            />
            {errors.fathersName && <span className="text-red-500 text-sm mt-1">{errors.fathersName.message}</span>}
          </div>
        </div>

        
        <div className="w-full md:w-1/2 px-2">
          <div className="w-full flex flex-col relative mb-6">
            <label className="opacity-80 font-medium mb-2" htmlFor="email">
              EMAIL:
            </label>
            <input
              type="email"
              className={`bg-transparent border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-600 duration-300 min-h-[48px] leading-none px-3 pl-10`}
              id="email"
              {...register("email", { 
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
              placeholder="johnsmith@gmail.com"
            />
            <FontAwesomeIcon
              icon={faAt}
              className="absolute top-12 text-sm left-4 opacity-80"
            />
            {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>}
          </div>
        </div>
        <div className="w-full md:w-1/2 px-2">
          <div className="w-full flex flex-col relative mb-6">
            <label className="opacity-80 font-medium mb-2" htmlFor="password">
              PASSWORD:
            </label>
            <input
              type="password"
              className={`bg-transparent border ${errors.password ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-600 duration-300 min-h-[48px] leading-none px-3 pl-10`}
              id="password"
              {...register("password", { 
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long"
                }
              })}
              placeholder="******"
            />
            <FontAwesomeIcon
              icon={faLock}
              className="absolute top-12 text-sm left-4 opacity-80"
            />
            {errors.password && <span className="text-red-500 text-sm mt-1">{errors.password.message}</span>}
          </div>
        </div>
        <div className="w-full md:w-1/2 px-2">
          <div className="w-full flex flex-col relative mb-6">
            <label className="opacity-80 font-medium mb-2" htmlFor="phonenumber">
              Phone Number:
            </label>
            <input
              type="tel"
              className={`bg-transparent border ${errors.phonenumber ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-600 duration-300 min-h-[48px] leading-none px-3 pl-10`}
              id="phonenumber"
              {...register("phonenumber", { 
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{11}$/,
                  message: "Invalid phone number format"
                }
              })}
              placeholder="03xxxxxxxxx"
            />
            <FontAwesomeIcon
              icon={faPhone}
              className="absolute top-12 text-sm left-4 opacity-80"
            />
            {errors.phonenumber && <span className="text-red-500 text-sm mt-1">{errors.phonenumber.message}</span>}
          </div>
        </div>
        <div className="w-full md:w-1/2 px-2">
          <div className="w-full flex flex-col mb-6">
            <label htmlFor="group" className="font-medium mb-2">
              BLOOD GROUP:
            </label>
            <div className="w-full">
              <select
                className={`w-full bg-transparent border ${errors.group ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-600 duration-300 min-h-[48px] leading-none px-3 opacity-80`}
                id="group"
                {...register("group", { required: "Blood group is required" })}
              >
                <option value="A+" className="bg-white">A+</option>
                <option value="A-" className="bg-white">A-</option>
                <option value="B+" className="bg-white">B+</option>
                <option value="B-" className="bg-white">B-</option>
                <option value="O+" className="bg-white">O+</option>
                <option value="O-" className="bg-white">O-</option>
                <option value="AB+" className="bg-white">AB+</option>
                <option value="AB-" className="bg-white">AB-</option>
              </select>
            </div>
            {errors.group && <span className="text-red-500 text-sm mt-1">{errors.group.message}</span>}
          </div>
        </div>
        <div className="w-full md:w-1/2 px-2">
          <div className="w-full flex flex-col relative mb-6">
            <label className="opacity-80 font-medium mb-2" htmlFor="age">
              AGE:
            </label>
            <input
              type="number"
              className={`bg-transparent border ${errors.age ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-600 duration-300 min-h-[48px] leading-none px-3 pl-4`}
              id="age"
              {...register("age", { 
                required: "Age is required",
                min: {
                  value: 18,
                  message: "You must be at least 18 years old"
                },
                max: {
                  value: 100,
                  message: "Age must be less than 100"
                }
              })}
              placeholder="30"
            />
            {errors.age && <span className="text-red-500 text-sm mt-1">{errors.age.message}</span>}
          </div>
        </div>


        <div className="w-full md:w-1/2 px-2">
          <div className="w-full flex flex-col mb-6">
            <label htmlFor="city" className="font-medium mb-2">
              City:
            </label>
            <div className="w-full">
              <select
                className={`w-full bg-transparent border ${errors.city ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-600 duration-300 min-h-[48px] leading-none px-3 opacity-80`}
                id="city"
                {...register("city", { required: "City is required" })}
              >
                <option value="">Select a city</option>
                <option value="Karachi">Karachi</option>
                <option value="Lahore">Lahore</option>
                <option value="Islamabad">Islamabad</option>
                <option value="Rawalpindi">Rawalpindi</option>
                <option value="Faisalabad">Faisalabad</option>
              </select>
            </div>
            {errors.city && <span className="text-red-500 text-sm mt-1">{errors.city.message}</span>}
          </div>
        </div>


        <div className="w-full md:w-1/2 px-2">
          <div className="w-full flex flex-col relative mb-6">
            <label className="opacity-80 font-medium mb-2" htmlFor="area">
              AREA:
            </label>
            <input
              type="text"
              className={`bg-transparent border ${errors.area ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-600 duration-300 min-h-[48px] leading-none px-3 pl-4`}
              id="area"
              {...register("area", { 
                required: "Area is required",
              })}
              placeholder="Gulshan -e- Iqbal"
            />
      
            {errors.area && <span className="text-red-500 text-sm mt-1">{errors.area.message}</span>}
          </div>
        </div>

       
        <div className="w-full md:w-1/2 px-2">
          <div className="w-full flex flex-col mb-6">
            <label htmlFor="role" className="font-medium mb-2">
              REGISTER AS:
            </label>
            <div className="w-full">
              <select
                className={`w-full bg-transparent border ${errors.role ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-600 min-h-[48px] leading-none px-3 opacity-80`}
                id="role"
                {...register("role", { required: "Role is required" })}
              >
                <option value="donor" className="bg-white">Donor</option>
                <option value="recipient" className="bg-white">Recipient</option>
              </select>
            </div>
            {errors.role && <span className="text-red-500 text-sm mt-1">{errors.role.message}</span>}
          </div>
        </div>
        <div className="w-full">
          <div className="flex md:justify-end mt-4">
            <button
              type="submit"
              className="rounded-full bg-red-600 px-5 py-2.5 my-6 text-sm md:text-base font-medium text-white shadow hover:bg-red-500 transition-all duration-300 ease-in-out flex items-center justify-between gap-2"
            >
              Register <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

const Register = () => {
  return (
    <section className="flex items-center flex-col justify-center py-14 md:py-8 bg-red-50  text-zinc-900  overflow-hidden">
      <div className="flex items-start justify-start container">
      <Link to='/' className="flex items-start w-16 h-16">
            <img className="object-cover w-full h-full" src={logo} alt="Logo" />
          </Link>
      </div>
      <div className="container px-4 mx-auto">
        <div className="flex justify-center">
          <div className="w-full md:w-2/3">
            <div className="bg-white rounded-xl shadow-xl p-4">
              <div className="p-6 lg:p-12">
                <h2 className="text-3xl font-bold mb-2 text-center">
                  REGISTRATION FORM
                </h2>

                <SignUpForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;

