import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import logo from '../../assets/logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faAt,
  faLock
} from "@fortawesome/free-solid-svg-icons";

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("/api/v1/users/login", data, {
        withCredentials: true,
      });

      if (response.data.statusCode === 200) {
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "You have been logged in successfully!",
        });
        navigate("/"); 
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: error.response?.data?.message || "An error occurred during login.",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
      <div className="flex flex-wrap">
        <div className="w-full px-2">
          <div className="w-full flex flex-col relative mb-6">
            <label className="opacity-80 font-medium mb-2" htmlFor="email">
              EMAIL:
            </label>
            <input
              {...register("email", { 
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
              type="email"
              className="bg-transparent border border-gray-300 focus:outline-none focus:border-blue-600 duration-300 min-h-[48px] leading-none px-3 pl-10"
              id="email"
              placeholder="johnsmith@gmail.com"
            />
            <FontAwesomeIcon
              icon={faAt}
              className="absolute top-12 text-sm left-4 opacity-80"
            />
            {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>}
          </div>
        </div>
        <div className="w-full px-2">
          <div className="w-full flex flex-col relative mb-6">
            <label className="opacity-80 font-medium mb-2" htmlFor="password">
              PASSWORD:
            </label>
            <input
              {...register("password", { required: "Password is required" })}
              type="password"
              className="bg-transparent border border-gray-300 focus:outline-none focus:border-blue-600 duration-300 min-h-[48px] leading-none px-3 pl-10"
              id="password"
              placeholder="******"
            />
            <FontAwesomeIcon
              icon={faLock}
              className="absolute top-12 text-sm left-4 opacity-80"
            />
            {errors.password && <span className="text-red-500 text-sm mt-1">{errors.password.message}</span>}
          </div>
        </div>

        <div className="w-full">
          <div className="flex md:justify-end mt-4">
            <button
              type="submit"
              className="rounded-full bg-red-600 px-5 py-2.5 my-6 text-sm md:text-base font-medium text-white shadow hover:bg-red-500 transition-all duration-300 ease-in-out flex items-center justify-between gap-2"
            >
              Login <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

const Login = () => {
  return (
    <section className="flex items-center flex-col justify-center py-14 md:py-8 bg-red-50 text-zinc-900 overflow-hidden">
      <div className="flex items-start justify-start container">
        <Link to='/' className="flex items-start w-16 h-16">
          <img className="object-cover w-full h-full" src={logo} alt="logo" />
        </Link>
      </div>
      <div className="container px-4 md:16 lg:px-28 mx-auto">
        <div className="flex justify-center">
          <div className="w-full md:w-2/3">
            <div className="bg-white rounded-xl shadow-xl p-4">
              <div className="p-6 lg:p-12">
                <h2 className="text-3xl font-bold mb-2 text-center">
                  LOGIN
                </h2>

                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

