import React from "react";
import {
  FaShareAlt,
  FaHeart,
  FaComment,
  FaUser,
  FaLongArrowAltLeft,
} from "react-icons/fa";
import { Link } from "react-router";

const ArticleDetails = () => {
  return (
    <>
      {/* Header */}

      <div className="mt-30 mb-10 w-11/12 mx-auto">
        <button className="text-gray-500 dark:text-gray-400 hover:text-teal-700 dark:hover:text-teal-300 flex items-center gap-4 cursor-pointer">
          <FaLongArrowAltLeft size={20} />
          Back to Articles
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  mb-60">
        <div className="transition-colors duration-500 mb-10">
          {/* Main Content */}
          <div className=" px-4 py-8 bg-white dark:bg-gray-900 rounded-md">
            {/* Article Header */}
            <div className="mb-8">
              {/* Article Image */}
              <div class="w-full h-96 flex justify-center items-center overflow-hidden rounded-lg mb-4">
                <img
                  src="https://images.pexels.com/photos/32417557/pexels-photo-32417557/free-photo-of-charming-antique-shop-in-paris-display-window.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Article Image"
                  class="min-w-full min-h-full object-cover"
                />
              </div>

              {/* Article Meta */}
              <div className="flex items-center justify-between mb-4">
                {/* Tags */}
                <div className="flex space-x-2">
                  <span className="bg-teal-700 text-white px-2 py-1 rounded font-semibold">
                    Technology
                  </span>
                  <span className="bg-teal-700 text-white px-2 py-1 rounded font-semibold">
                    AI
                  </span>
                  <span className="bg-teal-700 text-white px-2 py-1 rounded font-semibold">
                    Education
                  </span>
                  <span className="bg-teal-700 text-white px-2 py-1 rounded font-semibold">
                    Future
                  </span>
                </div>
              </div>

              {/* Article Title */}
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2">
                The Future of Artificial Intelligence in Education
              </h1>

              {/* Author and Date */}
              <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 mb-4">
                <div className="flex items-center gap-4">
                  <img
                    src="https://images.pexels.com/photos/32470472/pexels-photo-32470472/free-photo-of-dog-amidst-blooming-rhododendrons-in-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    className="w-8 h-8 rounded-full"
                  />

                  <span>Sarah Johnson</span>
                </div>
                <span>•</span>
                <span>2024-03-15</span>
                <span>•</span>
                <span>24 comments</span>
              </div>
            </div>

            {/* Article Content */}
            <article className="prose prose-sm md:prose lg:prose-lg max-w-none text-gray-700 dark:text-gray-300">
              <p>
                Artificial Intelligence is revolutionizing the education sector
                in unprecedented ways. From personalized learning experiences to
                automated grading systems, AI is transforming how students learn
                and how educators teach.
              </p>
              <h2>Personalized Learning Paths</h2>
              <p>
                One of the most significant impacts of AI in education is the
                ability to create personalized learning paths for each student.
                By analyzing learning patterns, strengths, and weaknesses, AI
                systems can adapt content delivery to match individual learning
                styles and pace.
              </p>
              <h2>Intelligent Tutoring Systems</h2>
              <p>
                AI-powered tutoring systems are becoming increasingly
                sophisticated, providing 24/7 support to students. These systems
                can identify knowledge gaps, provide targeted exercises, and
                offer explanations tailored to each student’s understanding
                level.
              </p>
              <h2>Automated Assessment and Feedback</h2>
              <p>
                Traditional grading methods are time-consuming and sometimes
                subjective. AI can provide instant feedback on assignments,
                essays, and even creative work, allowing students to iterate and
                improve their work more quickly.
              </p>
              <h2>Challenges and Considerations</h2>
              <p>
                While AI offers tremendous opportunities, we must also address
                concerns about data privacy, the digital divide, and ensuring
                that AI enhances rather than replaces human connection in
                education.
              </p>
              <h2>The Future</h2>
              <p>
                As AI technology continues to evolve, we can expect even more
                innovative applications in education. Virtual reality
                classrooms, AI-generated educational content, and predictive
                analytics for student success are just the beginning.
              </p>
            </article>
          </div>
        </div>

        {/* Comments Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-lg font-bold mb-4 flex items-center">
            <FaComment className="h-4 w-4 inline-block mr-2" />
            Comments (3)
          </h3>
          <form className="mb-4">
            <textarea
              placeholder="Share your thoughts..."
              className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-600 resize-none"
            ></textarea>
            <div className="mt-2 flex justify-end">
              <button className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition duration-300 ease-in-out">
                Post Comment
              </button>
            </div>
          </form>
          <div>
            <div className="flex items-start mb-4">
              <div className="w-10 h-10 bg-gray-300 rounded-full mr-4"></div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-gray-600 dark:text-gray-300">
                    Michael Chen
                  </h4>
                  <span className="text-gray-500 dark:text-gray-400">
                    2 hours ago
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  This is a fantastic overview of AI in education! I
                  particularly appreciate the balanced perspective on both
                  benefits and challenges. As an educator, I've seen firsthand
                  how AI tools can enhance learning, but the human element
                  remains irreplaceable.
                </p>
                <div className="flex items-center space-x-2 mt-2">
                  <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 inline-block mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    12
                  </button>
                  <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                    Reply
                  </button>
                  <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 inline-block mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 17a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H2a1 1 0 01-1-1v-2zm14-1A2 2 0 0018 9h.02a2 2 0 01.02 1.98V17a2 2 0 01-2 2H5a2 2 0 01-2-2V9c0-1.11.89-2 2-2h5.02a2 2 0 011.98 2V16a2 2 0 01-2 2H5a1 1 0 01-1-1V9a1 1 0 011-1h12a1 1 0 011 1v6zM5 7a1 1 0 100-2 1 1 0 000 2zm10 0a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-start mb-4">
              <div className="w-10 h-10 bg-gray-300 rounded-full mr-4"></div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-gray-600 dark:text-gray-300">
                    Emily Rodriguez
                  </h4>
                  <span className="text-gray-500 dark:text-gray-400">
                    5 hours ago
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Great article! I'm curious about the privacy concerns you
                  mentioned. How can educational institutions ensure student
                  data is protected while still leveraging AI's capabilities?
                </p>
                <div className="flex items-center space-x-2 mt-2">
                  <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 inline-block mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    8
                  </button>
                  <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                    Reply
                  </button>
                  <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 inline-block mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 17a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H2a1 1 0 01-1-1v-2zm14-1A2 2 0 0018 9h.02a2 2 0 01.02 1.98V17a2 2 0 01-2 2H5a2 2 0 01-2-2V9c0-1.11.89-2 2-2h5.02a2 2 0 011.98 2V16a2 2 0 01-2 2H5a1 1 0 01-1-1V9a1 1 0 011-1h12a1 1 0 011 1v6zM5 7a1 1 0 100-2 1 1 0 000 2zm10 0a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-start mb-4">
              <div className="w-10 h-10 bg-gray-300 rounded-full mr-4"></div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-gray-600 dark:text-gray-300">
                    Dr. James Wilson
                  </h4>
                  <span className="text-gray-500 dark:text-gray-400">
                    1 day ago
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  The section on personalized learning paths really resonates
                  with me. We've implemented similar systems at our university,
                  and the results have been remarkable. Students are more
                  engaged and perform better when the content adapts to their
                  learning style.
                </p>
                <div className="flex items-center space-x-2 mt-2">
                  <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 inline-block mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    15
                  </button>
                  <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                    Reply
                  </button>
                  <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 inline-block mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 17a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H2a1 1 0 01-1-1v-2zm14-1A2 2 0 0018 9h.02a2 2 0 01.02 1.98V17a2 2 0 01-2 2H5a2 2 0 01-2-2V9c0-1.11.89-2 2-2h5.02a2 2 0 011.98 2V16a2 2 0 01-2 2H5a1 1 0 01-1-1V9a1 1 0 011-1h12a1 1 0 011 1v6zM5 7a1 1 0 100-2 1 1 0 000 2zm10 0a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles */}
      </div>
    </>
  );
};

export default ArticleDetails;
