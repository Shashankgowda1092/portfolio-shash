import React from 'react';
import { Brain, Code, Database } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: "AI/ML",
      items: ["TensorFlow", "PyTorch", "Scikit-learn", "Computer Vision", "NLP"]
    },
    {
      category: "Frontend",
      items: ["React", "TypeScript", "Tailwind CSS", "Next.js"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Python", "mySQL", "MongoDB", "AWS"]
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#1A1A1A]">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center slide-in">About Me</h2>
      
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div className="slide-in slide-in-delay-1">
          <p className="text-gray-400 mb-6">
            I'm a passionate AI/ML Engineer and Web Developer with a focus on creating
            intelligent and scalable solutions. With expertise in both artificial intelligence
            and web development, I bridge the gap between cutting-edge AI technologies
            and user-friendly web applications.
          </p>
          <p className="text-gray-400">
            Currently pursuing my BTech degree in Computer Science, I've worked on various projects
            ranging from deep learning models to full-stack web applications. I'm always
            eager to learn new technologies and tackle challenging problems.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 slide-in slide-in-delay-2">
          <div className="bg-[#222222] p-4 rounded-lg">
            <Brain className="w-8 h-8 text-purple-500 mb-2" />
            <h3 className="font-semibold mb-2">AI/ML</h3>
            <p className="text-sm text-gray-400">Deep learning, NLP, and Machine learning</p>
          </div>
          <div className="bg-[#222222] p-4 rounded-lg">
            <Code className="w-8 h-8 text-purple-500 mb-2" />
            <h3 className="font-semibold mb-2">Web Dev</h3>
            <p className="text-sm text-gray-400">Modern and responsive web applications</p>
          </div>
          <div className="bg-[#222222] p-4 rounded-lg col-span-2 slide-in slide-in-delay-3">
            <Database className="w-8 h-8 text-purple-500 mb-2" />
            <h3 className="font-semibold mb-2">Full Stack</h3>
            <p className="text-sm text-gray-400">End-to-end application development</p>
          </div>
        </div>
      </div>
  
      <div className="skills slide-in slide-in-delay-4">
        <h3 className="text-2xl font-bold mb-8 text-center">Skills & Technologies</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillSet) => (
            <div key={skillSet.category} className="bg-[#222222] p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">{skillSet.category}</h4>
              <ul className="space-y-2">
                {skillSet.items.map((skill) => (
                  <li key={skill} className="text-gray-400">• {skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  );
}

export default About;