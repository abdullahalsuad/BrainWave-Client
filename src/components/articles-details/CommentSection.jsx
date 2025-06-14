import { FaComment } from "react-icons/fa";
import CommentForm from "./CommentForm";

const CommentSection = () => {
  // handle comment
  const handleComment = async (e) => {
    e.preventDefault();
    console.log("hello");
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
      <h3 className="text-lg font-bold mb-4 flex items-center">
        <FaComment className="h-4 w-4 inline-block mr-2" />
        Comments (3)
      </h3>
      <form className="mb-4" onSubmit={handleComment}>
        <CommentForm />
      </form>

      {/* all comment */}
      <div className="my-4 border border-gray-200 p-4 rounded-md shadow-md bg-sky-50 dark:bg-gray-700">
        <div className="flex items-center mb-4 mt-4 ">
          <div>
            <img
              src="https://images.pexels.com/photos/12562982/pexels-photo-12562982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="w-10 h-10  rounded-full mr-4"
            />
          </div>
          <div>
            <h4 className="text-gray-600 dark:text-gray-300 font-bold">
              Emily Rodriguez
            </h4>

            <span className="text-gray-500 dark:text-gray-400">
              5 hours ago
            </span>
          </div>
        </div>
        <div>
          <p className="text-gray-600 dark:text-gray-300">
            Great article! I'm curious about the privacy concerns you mentioned.
            How can educational institutions ensure student data is protected
            while still leveraging AI's capabilities?
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
