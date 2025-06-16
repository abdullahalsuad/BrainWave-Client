import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router";
import {
  BookOpen,
  Users,
  Target,
  Heart,
  Lightbulb,
  MessageCircle,
} from "lucide-react";
import { useEffect } from "react";

const AboutUsPage = () => {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const features = [
    {
      icon: BookOpen,
      title: "Knowledge Sharing",
      description:
        "Share your insights and learn from others in a collaborative environment.",
    },
    {
      icon: Users,
      title: "Community Driven",
      description:
        "Built by students, for students. Every voice matters in our community.",
    },
    {
      icon: Target,
      title: "Quality Content",
      description:
        "Curated articles and discussions that help you grow academically and personally.",
    },
    {
      icon: Heart,
      title: "Supportive Environment",
      description:
        "A safe space for learning, asking questions, and sharing experiences.",
    },
  ];

  const stats = [
    { number: "10,000+", label: "Students" },
    { number: "5,000+", label: "Articles" },
    { number: "50+", label: "Universities" },
    { number: "95%", label: "Satisfaction Rate" },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      bio: "Computer Science student passionate about making education accessible to everyone.",
      image:
        "https://images.pexels.com/photos/18100324/pexels-photo-18100324/free-photo-of-a-green-eyed-cat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Michael Chen",
      role: "Lead Developer",
      bio: "Full-stack developer and education technology enthusiast.",
      image:
        "https://images.pexels.com/photos/774731/pexels-photo-774731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Emily Rodriguez",
      role: "Community Manager",
      bio: "Psychology major focused on building inclusive learning communities.",
      image:
        "https://images.pexels.com/photos/32050138/pexels-photo-32050138/free-photo-of-stunning-ragdoll-cat-with-blue-eyes-indoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 mt-40">
      {/* Hero Section */}
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
          <Heart className="h-4 w-4" />
          About Our Mission
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-slate-100 mb-6 leading-tight">
          Empowering Students Through
          <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
            {" "}
            Knowledge Sharing
          </span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-10">
          KnowledgeHub is a platform where students from around the world come
          together to share insights, learn from each other, and build a
          stronger academic community.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/authpage/register"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-medium transition-all duration-300 shadow-md"
          >
            <Users className="h-5 w-5" />
            Join Our Community
          </Link>
          <Link
            to="/all-articles"
            className="flex items-center justify-center gap-2 px-6 py-3 border border-teal-600 hover:border-teal-700 text-teal-600 rounded-lg font-medium transition-all duration-300 shadow-sm"
          >
            <BookOpen className="h-5 w-5" />
            Explore Articles
          </Link>
        </div>
      </div>

      {/* Stats Section */}
      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 text-center "
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 hover:shadow-lg transition-transform transform hover:scale-[1.02] cursor-pointer"
          >
            <div className="text-4xl font-bold text-teal-600 dark:text-teal-400 mb-2">
              {stat.number}
            </div>
            <div className="text-slate-600 dark:text-slate-400 font-medium text-lg">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Features Section */}
      <div className="mb-30 mt-30" data-aos="fade-up" data-aos-duration="3000">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Why Choose KnowledgeHub?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            We’re more than just a platform – we’re a community dedicated to
            academic excellence and collaborative learning.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 hover:shadow-lg transition-transform transform hover:scale-[1.02] cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-teal-100 dark:bg-teal-900 rounded-lg">
                  <feature.icon className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Story */}
      <div className="mb-30 mt-30 " data-aos="fade-up" data-aos-duration="3000">
        <div className="bg-gradient-to-r from-white to-white dark:from-slate-800 dark:to-gray-800 rounded-2xl p-10 md:p-16 text-center border border-gray-200 dark:border-0">
          <Lightbulb className="h-12 w-12 text-teal-800 dark:text-teal-600 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            Our Story
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-4 max-w-3xl mx-auto">
            KnowledgeHub was born from a simple idea: every student has valuable
            insights to share. Founded in 2024 by a group of university
            students, we noticed that traditional learning often happens in
            isolation. We wanted to create a space where students could learn
            from each other’s experiences, share study techniques, and build
            lasting connections.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Today, we’re proud to host thousands of students from universities
            worldwide, all contributing to a richer, more collaborative
            educational experience.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-30 mt-30" data-aos="fade-up" data-aos-duration="3000">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            The passionate students behind KnowledgeHub, dedicated to making
            education more accessible and collaborative.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 border border-slate-200 dark:border-slate-700 text-center rounded-xl p-6 hover:shadow-lg transition-transform transform hover:scale-[1.02]"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-1">
                {member.name}
              </h3>
              <div className="bg-teal-100 dark:bg-teal-900 text-gray-900 dark:text-white px-3 py-1 rounded-full inline-block text-sm mb-3">
                {member.role}
              </div>
              <p className="text-slate-600 dark:text-slate-400">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="text-center bg-white dark:bg-slate-800 rounded-2xl p-10 md:p-16 my-20 border border-gray-200 dark:border-0"
      >
        <MessageCircle className="h-12 w-12 text-teal-600 dark:text-teal-400 mx-auto mb-6" />
        <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          Ready to Join Our Community?
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
          Start sharing your knowledge and learning from thousands of students
          worldwide. Together, we can make education more collaborative and
          accessible.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/authpage/register"
            className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-medium transition-all duration-300 shadow-md"
          >
            Get Started Today
          </Link>
          <Link
            to="/articles"
            className="px-6 py-3 border border-teal-600 hover:border-teal-700 text-teal-600 rounded-lg font-medium transition-all duration-300 shadow-sm"
          >
            Browse Articles
          </Link>
        </div>
      </div>

      
    </div>
  );
};

export default AboutUsPage;
