import { Home, Search, BookOpen } from "lucide-react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4">
        <div className="text-center max-w-2xl mx-auto">
          {/* 404 Animation */}
          <div className="mb-8 relative">
            <div className="text-[12rem] md:text-[16rem] font-bold text-primary/20 leading-none">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl animate-bounce">🔍</div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold">
              Lost in Knowledge?
            </h1>

            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              Oops! The page you're looking for seems to have wandered off into
              the vast universe of knowledge.
            </p>

            <div className="flex  gap-4 justify-center items-center">
              <button className="bg-gray-400 px-4 py-4 rounded-md cursor-pointer">
                <Link to="/" className="flex items-center">
                  <Home className="mr-2 h-5 w-5" />
                  Back to Home
                </Link>
              </button>

              <button className="bg-teal-600 px-4 py-4 rounded-md cursor-pointer">
                <Link to="/all-articles" className="flex items-center">
                  <Search className="mr-2 h-5 w-5" />
                  Explore Articles
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
