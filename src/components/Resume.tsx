import { GraduationCap, Briefcase, Award } from "lucide-react";

const Resume = () => {
  const education = [
    {
      degree: "B.Tech in Information Science",
      institution: "Don Bosco Institute of Technology",
      year: "2019 - 2023",
      description:
        "Specialization in Computer Science and Web devlopment",
    },
    {
      degree:"PUC",
      institution:" MES PU College",
      year:"2017-2019",
      description:"Studied Science stream with core subjects in PCM and Electronics."
    }
  ];

  const experience = [
    {
      role: "Associate Software Engineer ",
      company: "Torry Harris Business Solutions",
      year: "2023 – Present",
      description:
        "Worked as a Developer (role),Explored Generative AI model, specifically Mistral and build a ChatBot and other different techniques such as RAG during this period.",
    },
    {
      role: "Intern Bootcamp",
      company: "Torry Harris Business Solutions",
      year: "2023",
      description:
        "Contributed ideas during brainstorming sessions to generate creative solutions.Worked On Generative AIBuilt full-stack applications using React and Node.js",
    },
    {
      role: "Design Head",
      company: "Design and Innovation Club",
      year: "2022-2024",
      description:
        "Led the design team, overseeing creative direction for various design projects and prototypes. Collaborated closely with the technical head to ensure feasibility and innovation in product designs. Organized design workshops and brainstormed new concepts, resulting in innovative solutions and a cohesive design strategy for the club. Managed and mentored team members to foster creativity and enhance technical skills.",
    },
    {
      role: "Cyber Security Intern",
      company: "EduStation",
      year: "2023",
      description:
        "Completed an internship focused on Cyber Security, gaining hands-on experience in identifying and mitigating security threats. Demonstrated dedication, professionalism, and valuable technical skills, contributing to projects aimed at enhancing cybersecurity protocols and practices during the period.",
    },
  ];

  const skills = {
    "Programming Languages": ["Python", "JavaScript", "TypeScript", "C++", "C"],
    "AI/ML": ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV"],
    "Web Technologies": ["React", "Node.js", "Next.js", "Tailwind CSS"],
    Databases: ["MongoDB", "PostgreSQL", "Redis"],
    Tools: ["Git", "Docker", "AWS", "Linux"],
  };

  return (
    <section id="resume" className="py-10 bg-[#1A1A1A]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-12 mb-12 slide-in slide-in-delay-1">
          {/* Skills Section */}
          <div className="skills slide-in slide-in-delay-4">
            <h3 className="text-2xl font-bold mb-8 text-center">
              Skills & Technologies
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, items]) => (
                <div
                  key={category}
                  className="bg-[#222222] p-6 rounded-lg slide-in slide-in-delay-5"
                >
                  <h4 className="text-xl font-semibold mb-4">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="text-sm bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div>
            <div className="flex items-center gap-2 mb-6 slide-in slide-in-delay-2">
              <Briefcase className="text-purple-500" size={24} />
              <h3 className="text-2xl font-semibold">Experience</h3>
            </div>
            {experience.map((exp, index) => (
              <div
                key={index}
                className="mb-6 border-l-2 border-purple-500 pl-4 slide-in slide-in-delay-3"
              >
                <h4 className="text-xl font-semibold">{exp.role}</h4>
                <p className="text-gray-400">{exp.company}</p>
                <p className="text-purple-500">{exp.year}</p>
                <p className="text-gray-400 mt-2">{exp.description}</p>
              </div>
            ))}
          </div>
          {/* Education Section */}
          <div>
            <div className="flex items-center gap-2 mb-6 slide-in slide-in-delay-2">
              <GraduationCap className="text-purple-500" size={24} />
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="border-l-2 border-purple-500 pl-4 slide-in slide-in-delay-3"
                >
                  <h4 className="text-xl font-semibold">{edu.degree}</h4>
                  <p className="text-gray-400">{edu.institution}</p>
                  <p className="text-purple-500">{edu.year}</p>
                  <p className="text-gray-400 mt-2">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
