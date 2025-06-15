import { GraduationCap, Briefcase, Award } from "lucide-react";

const Resume = () => {
  const education = [
    {
      degree: "B.Tech in Information Science",
      institution: "Don Bosco Institute of Technology",
      year: "2019 - 2023",
      description: "Specialization in Computer Science and Web devlopment",
    },
    {
      degree: "PUC",
      institution: " MES PU College",
      year: "2017-2019",
      description:
        "Studied Science stream with core subjects in PCM and Electronics.",
    },
  ];

  const experience = [
    {
      role: "Associate Software Engineer ",
      company: "Torry Harris Business Solutions",
      year: "2023 – Present",
      description:
        "Working as a ReactJS developer at Torry Harris Business Solutions, focusing on building responsive UIs, integrating REST APIs, and implementing component-based design using ShadCN, Redux, and TailwindCSS.",
    },
    {
      role: "Intern Bootcamp",
      company: "Torry Harris Business Solutions",
      year: "2023",
      description:
        "Underwent intensive DevOps training, gaining hands-on experience with tools such as Docker, Kubernetes, and Terraform, while contributing to internal projects and collaborative learning.",
    },
    {
      role: "Intern",
      company: "KT technologies",
      year: "2022",
      description:
        "Gained practical experience in Python programming and machine learning by working on data-driven models and automation tasks during the internship period.",
    },
  ];

  const skills = {
    "Programming Languages": [
      "JavaScript",
      "TypeScript",
      "Java",
      "Python",
      "HTML",
      "C",
    ],
    "Frontend Frameworks": ["ReactJS","NextJS"],
    "Component Libraries": ["ShadCN", "Material UI", "Ant Design"],
    "CSS Frameworks": ["Tailwind CSS","SCSS" ,"Bootstrap"],
    "Frontend Concepts": ["Hooks", "ContextAPI", "Redux"],
    DevOps: ["AWS", "Docker", "Jenkins"],
    Databases: ["MySQL", "MongoDB"],
    "Backend Tools": ["Postman", "Swagger", "Spring Boot"],
    
  };

  return (
    <section id="resume" className="py-10 ">
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
