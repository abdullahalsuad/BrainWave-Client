import { Link } from "react-router";
import {
  Cpu,
  Shield,
  Cloud,
  Radio,
  Blocks,
  Glasses,
  Cog,
  Code,
  Atom,
} from "lucide-react";

const CategoriesSection = () => {
  const categories = [
    {
      name: "Artificial Intelligence",
      slug: "Artificial-Intelligence",
      icon: Cpu,
      description: "AI trends, machine learning, deep learning",
      count: 28,
      color: "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400",
    },
    {
      name: "Cybersecurity",
      slug: "Cybersecurity",
      icon: Shield,
      description: "Network security, encryption, ethical hacking",
      count: 22,
      color:
        "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400",
    },
    {
      name: "Cloud Computing",
      slug: "Cloud-Computing",
      icon: Cloud,
      description: "AWS, Azure, DevOps, Serverless",
      count: 18,
      color:
        "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400",
    },
    {
      name: "Internet of Things",
      slug: "Internet-of-Things",
      icon: Radio,
      description: "IoT devices, sensors, edge computing",
      count: 15,
      color: "bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-400",
    },
    {
      name: "Blockchain Technology",
      slug: "Blockchain-Technology",
      icon: Blocks,
      description: "Smart contracts, decentralization, crypto",
      count: 17,
      color: "bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400",
    },
    {
      name: "Augmented Reality",
      slug: "Augmented-Reality",
      icon: Glasses,
      description: "AR applications, headsets, immersive tech",
      count: 13,
      color:
        "bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400",
    },
    {
      name: "Robotics",
      slug: "Robotics",
      icon: Cog,
      description: "Autonomous systems, robotics engineering",
      count: 14,
      color:
        "bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400",
    },
    {
      name: "Software Development",
      slug: "Software-Development",
      icon: Code,
      description: "Web dev, mobile apps, frameworks",
      count: 30,
      color: "bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-400",
    },
    {
      name: "Quantum Computing",
      slug: "Quantum-Computing",
      icon: Atom,
      description: "Qubits, quantum algorithms, future computing",
      count: 9,
      color:
        "bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400",
    },
  ];

  return (
    <section className="py-30 bg-gradient-to-r from-[##F0F7FF] dark:from-gray-900 via-teal-50 dark:via-gray-700 to-[#F0F7FF] dark:to-gray-900 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Explore Categories
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Browse articles by technology domain and deepen your knowledge.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Link
                key={index}
                to={`/articles?category=${category.slug}`}
                className="group "
              >
                <div className="bg-white dark:bg-gray-800  shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 p-6 group-hover:scale-105 transform text-center border border-gray-200 dark:border-gray-800 rounded-md">
                  <div
                    className={`w-12 h-12 rounded-full ${category.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {category.name}
                  </h3>

                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {category.description}
                  </p>

                  <span className="inline-block px-4 py-1 rounded-full text-xs bg-gray-200  text-gray-600  dark:bg-teal-900  dark:text-teal-300">
                    {category.count} articles
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
