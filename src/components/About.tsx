import { Brain, Code, Database } from "lucide-react";

const About = () => {


  return (
    <section id="about" className="py-20 bg-[#1A1A1A]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center slide-in">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="slide-in slide-in-delay-1">
            <p className="text-gray-400 mb-6">
              Associate Software Engineer with 1 year of experience in web-based application development,
              currently working on a product-based project to deliver impactful solutions. Experienced in
              ReactJS for 18+ months, building modern, responsive, and cohesive web applications using
              JavaScript, ShadCN, and TailwindCSS.
            </p>
            <p className="text-gray-400">
              Adept at collaborating in cross-functional teams, implementing clean UI components, and ensuring performance optimizations.
              Passionate about advancing in modern front-end frameworks, contributing to scalable product development, and growing into a senior developer role with ownership in technical decision-making.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 slide-in slide-in-delay-2">
            <div className="bg-[#222222] p-4 rounded-lg">
              <Brain className="w-8 h-8 text-purple-500 mb-2" />
              <h3 className="font-semibold mb-2">AI/ML</h3>
              <p className="text-sm text-gray-400">
                Deep learning, NLP, and Machine learning
              </p>
            </div>
            <div className="bg-[#222222] p-4 rounded-lg">
              <Code className="w-8 h-8 text-purple-500 mb-2" />
              <h3 className="font-semibold mb-2">Web Dev</h3>
              <p className="text-sm text-gray-400">
                Modern and responsive web applications
              </p>
            </div>
            <div className="bg-[#222222] p-4 rounded-lg col-span-2 slide-in slide-in-delay-3">
              <Database className="w-8 h-8 text-purple-500 mb-2" />
              <h3 className="font-semibold mb-2">Full Stack</h3>
              <p className="text-sm text-gray-400">
                End-to-end application development
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
