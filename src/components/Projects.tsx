import React from 'react';
import { ExternalLink, Github} from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "PDF CHATBOT AI",
      description: "A chatbot application using Streamlit and Langchain for document processing, chunking, embedding, FAISS vector storage, and CTransformers for generating answers based on user queries.",
      image: "https://raw.githubusercontent.com/Karthik-coder-003/pdf-chatbot-personalized/master/pdf%20chatbot.jpg",
      tags: ["Streamlit", "Langchain", "Python", "FAISS", "CTransformers", "Chatbot", "AI"],
      github: "https://github.com/Karthik-coder-003/pdf-chatbot-personalized",
      demo: "#"
    },
    {
      title: "Twitter Sentiment Analysis",
      description: "Twitter sentiment analysis using Logistic Regression and XGBoost with data preprocessing, text analysis, and model evaluation, leveraging pandas, NLTK, seaborn, and XGBoost for sentiment classification.",
      image: "https://www.aimtechnologies.co/wp-content/uploads/2023/08/Sentiment-Analysis-For-Marketing.jpg",
      tags: ["Sentiment Analysis", "Logistic Regression", "XGBoost", "Python", "Machine Learning", "NLP", "Twitter", "pandas", "NLTK", "scikit-learn", "Data Visualization"],

      github: "https://github.com/Karthik-coder-003/Twitter_Analysis",
      demo: "#"
    },
    {
      title: "Income & Expense Tracker (Static)",
      description: "An Simple Income and Expense Tracker app using HTML, CSS, and JavaScript, with a focus on user experience and functionality.",
      image: "https://www.freshbooks.com/wp-content/uploads/2022/02/expense-tracking.jpg",
      tags: ["HTML", "CSS", "JavaScript", "Expense Tracker", "Income Tracker", "User Experience", "User Interface"],
      github: "#",
      demo: "#"
    }
  ];

  return (
<section id="projects" className="py-20">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-12 text-center slide-in">Featured Projects</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 slide-in slide-in-delay-1">
      {projects.map((project, index) => (
        <div key={index} className="bg-[#1A1A1A] rounded-lg overflow-hidden group">
          <div className="relative overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
              <a href={project.github} className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href={project.demo} className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <ExternalLink className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="text-sm bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full">
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
}

export default Projects;