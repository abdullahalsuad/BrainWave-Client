import React from "react";
import { FaShareAlt, FaHeart, FaComment, FaUser } from "react-icons/fa";

const ArticleDetails = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 inline-block mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 12.707l-.707.707L8 8.707l-1.707 1.707L6.293 8l2-2 1.414 1.414L9.828 5l.707.707L12 6.293l-1.707-1.707L10.586 5z"
                clipRule="evenodd"
              />
            </svg>
            Back to Articles
          </p>
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="bg-blue-500 text-white px-2 py-1 rounded-md text-xs">
                Technology
              </span>
              <span className="ml-2 text-gray-500 dark:text-gray-400">
                8 min read
              </span>
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-2">
            The Future of Artificial Intelligence in Education
          </h1>
          <div className="flex items-center space-x-4 mb-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              <span className="ml-2 text-gray-600 dark:text-gray-300">
                Sarah Johnson
              </span>
            </div>
            <span className="text-gray-500 dark:text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 inline-block mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fillRule="evenodd"
                  d="M.458 10C3.732 5.932 7.461 4 11 4c3.539 0 7.268 1.932 10.542 6C18.268 14.068 15.539 16 11 16c-3.539 0-7.268-1.932-10.542-6zM11 18c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"
                  clipRule="evenodd"
                />
              </svg>
              December 15, 2024
            </span>
            <span className="text-gray-500 dark:text-gray-400">
              <FaHeart className="h-4 w-4 inline-block mr-1" /> 89
            </span>
            <span className="text-gray-500 dark:text-gray-400">
              <FaShareAlt className="h-4 w-4 inline-block mr-1" />
            </span>
          </div>
        </div>

        {/* Hero Image Placeholder */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center justify-center h-64">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0l4-4m-4 4l4 4m-4 4V4"
              />
            </svg>
          </div>
        </div>

        {/* Article Content */}
        <div className="mb-8">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Artificial intelligence is revolutionizing the educational landscape
            in ways we never imagined possible. From personalized learning
            experiences to automated grading systems, AI is transforming how we
            teach and learn.
          </p>
          <h2 className="text-xl font-bold mb-2 mt-8">
            The Current State of AI in Education
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Today's educational institutions are increasingly adopting
            AI-powered tools to enhance the learning experience. These
            technologies are helping educators create more engaging and
            effective learning environments while providing students with
            personalized support.
          </p>
          <h2 className="text-xl font-bold mb-2 mt-8">Key Applications</h2>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
            <li>
              Personalized Learning Paths: AI algorithms analyze student
              performance and learning patterns to create customized educational
              experiences.
            </li>
            <li>
              Intelligent Tutoring Systems: Virtual tutors provide 24/7 support,
              answering questions and guiding students through complex concepts.
            </li>
            <li>
              Automated Assessment: AI can grade assignments, provide feedback,
              and identify areas where students need additional support.
            </li>
            <li>
              Content Creation: AI tools help educators create engaging
              multimedia content and interactive learning materials.
            </li>
          </ul>
          <h2 className="text-xl font-bold mb-2 mt-8">
            Benefits and Challenges
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            While AI offers tremendous potential for improving education, it
            also presents certain challenges that need to be addressed:
          </p>
          <h3 className="text-lg font-bold mb-2">Benefits:</h3>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
            <li>Enhanced personalization and adaptive learning</li>
            <li>Improved accessibility for students with disabilities</li>
            <li>More efficient administrative processes</li>
            <li>Data-driven insights for better decision making</li>
          </ul>
          <h3 className="text-lg font-bold mb-2">Challenges:</h3>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
            <li>Privacy and data security concerns</li>
            <li>The need for teacher training and adaptation</li>
            <li>Ensuring equitable access to AI technologies</li>
            <li>Maintaining human connection in education</li>
          </ul>
          <h2 className="text-xl font-bold mb-2 mt-8">Looking Ahead</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            The future of AI in education is bright, with emerging technologies
            like natural language processing, computer vision, and machine
            learning continuing to evolve. As we move forward, it's crucial to
            strike a balance between leveraging AI's capabilities and preserving
            the human elements that make education meaningful.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Educational institutions, policymakers, and technology developers
            must work together to ensure that AI serves as a tool for
            empowerment rather than replacement, enhancing the educational
            experience while maintaining the irreplaceable value of human
            mentorship and connection.
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          <span className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-md text-xs">
            #AI
          </span>
          <span className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-md text-xs">
            #Education
          </span>
          <span className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-md text-xs">
            #Future
          </span>
          <span className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-md text-xs">
            #Technology
          </span>
          <span className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-md text-xs">
            #Learning
          </span>
        </div>

        {/* Author Bio */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
            <div>
              <h3 className="text-lg font-bold">About Sarah Johnson</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Sarah is an EdTech researcher and AI enthusiast with over 10
                years of experience in educational technology. She holds a PhD
                in Computer Science and has published numerous papers on AI
                applications in learning.
              </p>
            </div>
          </div>
          <button className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-4 py-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300 ease-in-out">
            Follow Author
          </button>
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
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold mb-4">Related Articles</h3>
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="text-gray-600 dark:text-gray-300">
                  Machine Learning Basics for Educators
                </h4>
                <p className="text-gray-500 dark:text-gray-400">
                  By David Park · Dec 10, 2024 · 6 min read
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="text-gray-600 dark:text-gray-300">
                  Digital Transformation in Higher Education
                </h4>
                <p className="text-gray-500 dark:text-gray-400">
                  By Lisa Wang · Dec 8, 2024 · 7 min read
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="text-gray-600 dark:text-gray-300">
                  Ethics in Educational Technology
                </h4>
                <p className="text-gray-500 dark:text-gray-400">
                  By Prof. Robert Kim · Dec 5, 2024 · 5 min read
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleDetails;
