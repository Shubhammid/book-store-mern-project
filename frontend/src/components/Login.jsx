import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const handleGoogleSignIn = async () => {};
  return (
    <div className="h-[calc(100vh-120px)] flex justify-center items-center">
      <div className="w-full max-w-md mx-auto bg-white/70 backdrop-blur-xl shadow-2xl rounded-2xl px-8 pt-10 pb-8">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Welcome Back 👋
        </h2>
        <p className="text-sm text-gray-500 text-center mb-8">
          Please login to your account
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              {...register("password", { required: true })}
              type="password"
              id="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
            />
          </div>
          {message && (
            <p className="text-red-500 text-xs italic mb-3">{message}</p>
          )}
          <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2.5 rounded-xl shadow-md transition-all duration-200">
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-indigo-500 font-medium hover:underline"
          >
            Register
          </Link>
        </p>

        <div className="flex items-center gap-3 my-6">
          <div className="flex-grow h-[1px] bg-gray-300" />
          <span className="text-gray-400 text-sm">or</span>
          <div className="flex-grow h-[1px] bg-gray-300" />
        </div>

        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-2.5 rounded-xl shadow-sm transition"
        >
          <FaGoogle className="text-red-500" />
          Continue with Google
        </button>

        <p className="mt-8 text-center text-gray-400 text-xs">
          © {new Date().getFullYear()} Book Store. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Login;
