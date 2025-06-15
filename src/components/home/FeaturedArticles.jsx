import { Link } from "react-router";

const FeaturedArticles = () => {
  const featuredArticles = [
    {
      id: "1",
      title: "The Future of Artificial Intelligence in Education",
      excerpt:
        "Exploring how AI is revolutionizing the way we learn and teach, from personalized learning experiences to automated grading systems.",
      category: "Technology",
      tags: ["AI", "Education", "Future"],
      authorName: "Sarah Johnson",
      authorPhoto:
        "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=32&h=32&fit=crop&crop=face",
      publishedDate: "2024-03-15",
      thumbnail:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      commentCount: 24,
    },
    {
      id: "2",
      title: "Sustainable Development: A Student's Guide",
      excerpt:
        "Understanding the principles of sustainable development and how students can contribute to creating a more sustainable future.",
      category: "Environment",
      tags: ["Sustainability", "Environment", "Future"],
      authorName: "Michael Chen",
      authorPhoto:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
      publishedDate: "2024-03-14",
      thumbnail:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop",
      commentCount: 18,
    },
    {
      id: "3",
      title: "Data Science Fundamentals Every Student Should Know",
      excerpt:
        "A comprehensive guide to getting started with data science, covering essential concepts, tools, and practical applications.",
      category: "Technology",
      tags: ["Data Science", "Programming", "Analytics"],
      authorName: "Emily Rodriguez",
      authorPhoto:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face",
      publishedDate: "2024-03-13",
      thumbnail:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      commentCount: 31,
    },
    {
      id: "4",
      title: "The Psychology of Learning: Memory Techniques That Work",
      excerpt:
        "Science-backed strategies to improve your memory and learning efficiency for better academic performance.",
      category: "Psychology",
      tags: ["Learning", "Memory", "Study Tips"],
      authorName: "David Kim",
      authorPhoto:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
      publishedDate: "2024-03-12",
      thumbnail:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
      commentCount: 15,
    },
    {
      id: "5",
      title: "Creative Writing in the Digital Age",
      excerpt:
        "How digital tools and platforms are changing the landscape of creative writing and storytelling.",
      category: "Literature",
      tags: ["Writing", "Digital", "Creativity"],
      authorName: "Lisa Thompson",
      authorPhoto:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=32&h=32&fit=crop&crop=face",
      publishedDate: "2024-03-11",
      thumbnail:
        "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=250&fit=crop",
      commentCount: 22,
    },
    {
      id: "6",
      title: "Building Resilience: A Mental Health Guide for Students",
      excerpt:
        "Practical strategies for maintaining mental health and building resilience during challenging academic periods.",
      category: "Health",
      tags: ["Mental Health", "Resilience", "Wellbeing"],
      authorName: "Dr. Amanda Lee",
      authorPhoto:
        "https://images.unsplash.com/photo-1559386484-97dfc0e15539?w=32&h=32&fit=crop&crop=face",
      publishedDate: "2024-03-10",
      thumbnail:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
      commentCount: 28,
    },
  ];

  return (
    <section className="py-16 mt-10 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Featured Articles
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover the latest insights and knowledge shared by our community
            of passionate learners.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full"
            >
              <img
                src={article.thumbnail}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 my-4">
                <span className="px-2 py-1 text-xs font-medium bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 rounded">
                  {article.category}
                </span>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 flex-1 line-clamp-2 mt-4">
                  {article.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                  {article.excerpt}
                </p>

                {/* 👇 Read More Button Inside Its Own div */}
                <div className="mt-auto pt-4">
                  <Link
                    to={`/article/${article.id}`}
                    className="block w-full text-center text-teal-600 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-gray-700 font-medium py-2 px-4 rounded border border-teal-600 dark:border-teal-400 transition-colors"
                  >
                    Read More →
                  </Link>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mt-4">
                  <div className="flex items-center">
                    <img
                      src={article.authorPhoto}
                      alt={article.authorName}
                      className="w-6 h-6 rounded-full mr-2"
                    />
                    <span>{article.authorName}</span>
                  </div>
                  <span>{article.publishedDate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/articles"
            className="inline-flex items-center text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300 font-medium transition-colors"
          >
            View All Articles →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;
