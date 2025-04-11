import { LayoutGrid, MonitorSmartphone, PackageOpen } from "lucide-react";

const About = () => {

  return (
    <section id="about" className=" ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center slide-in">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="slide-in slide-in-delay-1">
            <p className="text-gray-400 mb-6">
              Associate Software Engineer at Torry Harris Business Solutions with a solid foundation in full-stack web development and a focus on front-end technologies. With over 18 months of hands-on experience in ReactJS, ShadCN, and TailwindCSS, I craft responsive, scalable, and user-centric web applications that drive real-world impact.
            </p>
            <p className="text-gray-400">
              I’m currently building feature-rich digital platforms for e-commerce and learning management using modern libraries and microservices architecture. Skilled in JavaScript, TypeScript, Redux, and REST API integration, I thrive in cross-functional teams where clean design, performance, and functionality meet. My goal is to take ownership of complex technical decisions and grow into a senior developer role in a product-focused environment.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 slide-in slide-in-delay-2">
            <div className="bg-[#222222] p-4 rounded-lg">
              <LayoutGrid className="w-8 h-8 text-purple-500 mb-2" />
              <h3 className="font-semibold mb-2">React Ecosystem</h3>
              <p className="text-sm text-gray-400">
                ReactJS, Redux, Context API, React Query, ShadCN, TailwindCSS
              </p>
            </div>
            <div className="bg-[#222222] p-4 rounded-lg">
              <MonitorSmartphone className="w-8 h-8 text-purple-500 mb-2" />
              <h3 className="font-semibold mb-2">Frontend Development</h3>
              <p className="text-sm text-gray-400">
                Building modern, responsive UI for web platforms
              </p>
            </div>
            <div className="bg-[#222222] p-4 rounded-lg col-span-2 slide-in slide-in-delay-3">
              <PackageOpen className="w-8 h-8 text-purple-500 mb-2" />
              <h3 className="font-semibold mb-2">Product Engineering</h3>
              <p className="text-sm text-gray-400">
                Experience in e-commerce & LMS platforms, REST APIs, DevOps, microservices
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
