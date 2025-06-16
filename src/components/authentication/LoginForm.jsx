import { Link } from "react-router";
import { FiMail, FiLock } from "react-icons/fi";
import { FaGoogle, FaLongArrowAltLeft, FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { LuEye } from "react-icons/lu";

const LoginForm = ({
  showPassword,
  setShowPassword,
  handleSignin,
  error,
  isLoading,
  handleGoogleSignIn,
}) => {
  return (
    <>
      <div className="flex items-center justify-center mt-20 py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8 bg-white dark:bg-gray-800 p-6 sm:p-10 rounded-xl shadow-md">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
              Sign in
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              Don't have an account?{" "}
              <Link
                to="/authpage/register"
                className="text-indigo-600 hover:text-purple-400 font-medium dark:text-purple-400 dark:hover:text-indigo-300"
              >
                Create an account
              </Link>
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSignin}>
            {/* Email Address */}
            <div>
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
                  className="pl-10 block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md  placeholder-gray-400 focus:outline-none focus:ring-purple-400 focus:border-purple-400"
                  placeholder="you@example.com"
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
                  autoComplete="current-password"
                  required
                  className="pl-10 pr-10 block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md  placeholder-gray-400 focus:outline-none focus:ring-purple-400 focus:border-purple-400"
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

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-purple-400 border-gray-300 dark:border-gray-600 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900 dark:text-white"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <Link
                  to="/forgot-password"
                  className="font-medium text-indigo-600 hover:text-purple-400 dark:text-purple-400 dark:hover:text-indigo-300"
                >
                  Forgot password?
                </Link>
              </div>
            </div>

            {/* Divider + Google Sign In */}
            <div className="relative my-4">
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
              className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-gray-300 dark:border-gray-600 rounded-md  bg-white dark:bg-gray-700 text-sm font-medium text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-600 transition"
            >
              <FcGoogle className="h-5 w-5" />
              Sign in with Google
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
                {isLoading ? "loading....." : "Sign in"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* home */}
      <div className="flex justify-center mt-4">
        <Link
          className="flex items-center gap-3 px-5 py-3 rounded-md bg-gradient-to-r from-teal-600 to-teal-400 text-white font-medium shadow-lg hover:from-teal-500 hover:to-teal-300 hover:scale-105 transition-transform duration-300 ease-in-out"
          to="/"
        >
          <FaLongArrowAltLeft size={24} />
          <span className="text-md">Visit Home Page</span>
        </Link>
      </div>
    </>
  );
};

export default LoginForm;
