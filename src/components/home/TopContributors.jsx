import React from "react";

const TopContributors = () => {
  const topContributors = [
    {
      name: "Sarah Johnson",

      like: "200k",
      comment: "400k",

      bio: "Tech enthusiast and writer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wzNTMwODB8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoZXIlMjBmZW1hbGV8ZW58MHx8fDE3MTc0NTE2MDZ8MA==",
    },
    {
      name: "Michael Chen",

      like: "100k",
      comment: "200k",
      bio: "Data science expert",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wzNTMwODB8MHwxfHNlYXJjaHwxMnx8fHxpbWFnZSUyMHRlc3R8MA==",
    },
    {
      name: "Lisa Thompson",

      like: "100k",
      comment: "20k",
      bio: "Creative writer & editor",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wzNTMwODB8MHwxfHNlYXJjaHwxfHxmaW5hbHxlbnwwfHwxfDE3MTc0NTE4NjF8MA==",
    },
    {
      name: "David Kim",

      like: "200k",
      comment: "200k",
      bio: "Frontend developer & designer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wzNTMwODB8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoZXIlMjBmZW1hbGV8ZW58MHx8fDE3MTc0NTE4NjF8MA==",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-10 mt-30">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Top Contributors
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Discover insights from top contributors and explore content across
          various tech domains.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {topContributors.map((contributor, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg border border-gray-200 dark:border-gray-700 transition-transform duration-300 transform hover:-translate-y-1"
          >
            <div className="flex flex-col items-center text-center">
              {/* Position Badge */}

              <span
                className={`inline-block px-4 py-1 text-md font-medium bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 rounded-full mb-4`}
              >
                👑
              </span>

              {/* Profile Image */}
              <img
                src={contributor.image}
                alt={contributor.name}
                className="w-16 h-16 rounded-full object-cover mb-4 ring-2 ring-teal-500"
              />

              {/* Name */}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                {contributor.name}
              </h3>

              {/* Bio */}
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {contributor.bio}
              </p>
              <p className="text-md mt-4 text-teal-800 font-bold dark:text-gray-400">
                Total Like :- {contributor.like}
              </p>
              <p className="text-md   text-teal-800 font-bold dark:text-gray-400">
                Total Comment :- {contributor.comment}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopContributors;
