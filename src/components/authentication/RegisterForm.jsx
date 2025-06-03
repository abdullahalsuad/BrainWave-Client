import { Link } from "react-router";
import { FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { LuEye } from "react-icons/lu";
import { FiUser, FiMail, FiImage, FiLock } from "react-icons/fi";

const RegisterForm = ({
  showPassword,
  setShowPassword,
  handleRegistration,
  error,
  isLoading,
  handleGoogleSignIn,
}) => {
  return (
    <>
      <div className="lg:flex items-center justify-center my-20 py-12 px-4 sm:px-6 lg:px-8">
        <div className="lg:w-4/12 space-y-8 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-10 rounded-xl shadow-md">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">
              Create your account
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-indigo-600 hover:text-indigo-500 font-medium dark:text-purple-400 dark:hover:text-indigo-300"
              >
                Sign in
              </Link>
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleRegistration}>
            {/* Full Name */}
            <div className="relative">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Full Name
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500 dark:text-gray-400">
                  <FiUser className="h-5 w-5" />
                </div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="pl-10 block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C68EFD]"
                  placeholder="John Doe"
                />
              </div>
            </div>

            {/* Email Address */}
            <div className="relative">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email address
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500 dark:text-gray-400">
                  <FiMail className="h-5 w-5" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="pl-10 block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C68EFD]"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {/* Photo URL Input */}
            <div className="mb-5 relative">
              <label
                htmlFor="photoURL"
                className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
              >
                Photo URL
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500 dark:text-gray-400">
                  <FiImage className="h-5 w-5" />
                </div>
                <input
                  id="photoURL"
                  type="url"
                  name="photoURL"
                  placeholder="https://example.com/photo.jpg"
                  className="pl-10 block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C68EFD]"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Password
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500 dark:text-gray-400">
                  <FiLock className="h-5 w-5" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  className="pl-10 pr-10 block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C68EFD]"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 text-gray-600 dark:text-gray-300"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <LuEye size={25} />
                  ) : (
                    <FaRegEyeSlash size={25} />
                  )}
                </button>
              </div>
            </div>

            {/* Divider + Google Sign Up */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                  Or continue with
                </span>
              </div>
            </div>

            {/* Google Button */}
            <button
              onClick={handleGoogleSignIn}
              type="button"
              className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm font-medium text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-600 transition cursor-pointer"
            >
              <FcGoogle size={25} />
              Sign up with Google
            </button>

            {/* Submit Button */}
            <div>
              {error && (
                <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
              )}
              <button
                type="submit"
                disabled={isLoading}
                className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 ${
                  isLoading
                    ? "cursor-not-allowed bg-gray-400"
                    : "cursor-pointer bg-gray-900 hover:bg-gray-800 dark:bg-teal-600 dark:hover:bg-teal-800 transition-colors duration-300 ease-in-out"
                }`}
              >
                {isLoading ? "Loading...." : "Create Account"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
