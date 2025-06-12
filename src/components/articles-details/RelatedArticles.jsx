const RelatedArticles = () => {
  return (
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
  );
};

export default RelatedArticles;
