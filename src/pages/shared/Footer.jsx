import React from "react";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiGithub,
  FiMail,
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-[#00224D] text-white pt-10 pb-6 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-3">
              <span className="text-white dark:text-blue-400 ">Brain</span>{" "}
              <span className=" text-teal-400 dark:text-teal-400">Wave</span>
            </h3>
            <p className="text-gray-300 text-sm dark:text-gray-400">
              Connecting people through shared passions. Build your tribe today.
            </p>
            <div className="flex space-x-4 mt-4 ">
              <a href="#" className="hover:text-teal-400 transition">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="hover:text-teal-400 transition">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="hover:text-teal-400 transition">
                <FiInstagram size={20} />
              </a>
              <a href="#" className="hover:text-teal-400 transition">
                <FiGithub size={20} />
              </a>
              <a href="#" className="hover:text-teal-400 transition">
                <FiMail size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300 dark:text-gray-400">
              <li>
                <a href="#" className="hover:text-teal-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition">
                  Post Article
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition">
                  Team
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-300 text-sm mb-4 dark:text-gray-400">
              Get the latest hobby group updates straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 bg-[#1E2A3A] border border-teal-400 rounded-md focus:outline-none w-full dark:bg-gray-700 "
              />
              <button
                type="submit"
                className="px-4 py-2 bg-teal-400 hover:bg-[#1f5490] rounded-md transition text-white cursor-pointer dark:hover:bg-[#1f5490]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-[#3C424B] text-center text-sm text-gray-400 dark:border-gray-600">
          &copy; {new Date().getFullYear()} Brain Wave . All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
