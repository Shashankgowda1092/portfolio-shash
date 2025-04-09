import React from "react";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Torry Harris Marketplace (Digital Product)",
      description:
        "Part of the product engineering team building a marketplace platform similar to Amazon. Developed components and pages for portals like admin, vendor, and storefront using ShadCN, Redux, and React Query. Responsible for feature implementation and migration tasks for a platform supporting multiple user types and seamless transactions.",
      image: "",
      tags: [
        "React",
        "ShadCN",
        "Redux",
        "React Query",
        "Marketplace",
        "Admin Panel",
        "Frontend Development",
      ],

      demo: "https://www.torryharrisproducts.com/products/torry-harris-marketplace",
    },
    {
      title: "LMS Project @ Torry Harris",
      description:
        "Created an LMS application using microservices architecture for internal training at Torry Harris. Personally handled component and page development for the Admin Dashboard, including seamless API integration.",
      image:
        "https://cdn.pixabay.com/photo/2020/07/03/14/52/lms-5362270_1280.jpg",
      tags: [
        "LMS",
        "Microservices",
        "Admin Dashboard",
        "API Integration",
        "React",
      ],
      demo: "#",
    },
    {
      title: "E-commerce Web App",
      description:
        "Successfully developed and deployed a dynamic and responsive e-commerce website using the latest version of React and Strapi. Implemented features such as Hooks, Context API, and custom APIs for enhanced functionality.",
      image:
        "https://www.bigcommerce.com/blog/wp-content/uploads/2021/09/bigcommerce-headless-1.png",
      tags: [
        "React",
        "Strapi",
        "Hooks",
        "Context API",
        "E-commerce",
        "Custom API",
      ],

      demo: "https://github.com/Shashankgowda1092/client-ecom",
    },
  ];

  return (
    <section id="projects" className="py-5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center slide-in">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 slide-in slide-in-delay-1">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] rounded-lg overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                  <a
                    href={project.demo}
                    className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
