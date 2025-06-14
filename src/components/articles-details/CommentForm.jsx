import React from "react";

const CommentForm = () => {
  return (
    <>
      <textarea
        placeholder="Share your thoughts..."
        name="comment"
        className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-400 dark:focus:ring-teal-600 resize-none"
      ></textarea>
      <div className="mt-2 flex justify-end">
        <button
          type="submit"
          className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition duration-300 ease-in-out cursor-pointer"
        >
          Post Comment
        </button>
      </div>
    </>
  );
};

export default CommentForm;
