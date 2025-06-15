import React from "react";

const NewsletterSection = () => {
  return (
    <section className="lg:w-8/12 rounded-xl  mx-auto bg-teal-100 my-40 dark:bg-gray-800 py-20 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Get the latest updates, articles, and resources delivered straight to
          your inbox.
        </p>

        <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full sm:w-auto flex-1 px-5 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-md transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
