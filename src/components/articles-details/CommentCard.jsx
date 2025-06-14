import { BiSolidQuoteSingleLeft } from "react-icons/bi";

const CommentCard = ({ comment }) => {
  return (
    <div className="my-4 border border-gray-200 p-4 rounded-md shadow-md bg-sky-50 dark:bg-gray-700">
      <div className="flex items-center mb-4 mt-4 ">
        <div>
          <img
            src={comment.userAvatar}
            alt=""
            className="w-10 h-10  rounded-full mr-4"
          />
        </div>
        <div>
          <h4 className="text-gray-600 dark:text-gray-300 font-bold">
            {comment.userName}
          </h4>

          <span className="text-gray-500 dark:text-gray-400">
            {comment.createdAt}
          </span>
        </div>
      </div>
      <div>
        <p className="text-gray-800 dark:text-gray-300 ml-13 text-md font-semibold flex items-center gap-1">
          <BiSolidQuoteSingleLeft size={20} className="text-gray-300" />{" "}
          {comment.comment}
        </p>
      </div>
    </div>
  );
};

export default CommentCard;
