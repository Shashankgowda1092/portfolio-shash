import { Mail, Linkedin, Github,   } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="pb-10 bg-[#1A1A1A]">
    <div className="container mx-auto px-4 max-w-3xl pt-5">
      <div className="text-center mb-16 slide-in">
        <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto slide-in slide-in-delay-1">
          I'm always interested in hearing about new projects and opportunities.
          Feel free to reach out through any of these platforms.
        </p>
      </div>
  
      <div className="grid gap-8 slide-in slide-in-delay-2">
        <a 
          href="mailto:shashankh1092@gmail.com"
          className="group flex items-center justify-between p-6 bg-[#222222] rounded-lg hover:bg-[#2a2a2a] transition-all duration-300"
        >
          <div className="flex items-center gap-4">
            <Mail className="text-purple-500" size={24} />
            <span className="text-xl">shashankh1092@gmail.com</span>
          </div>
          <span className="text-gray-400 group-hover:translate-x-2 transition-transform duration-300">
            Send an email →
          </span>
        </a>
  
        <a 
          href="https://www.linkedin.com/in/shash-/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between p-6 bg-[#222222] rounded-lg hover:bg-[#2a2a2a] transition-all duration-300"
        >
          <div className="flex items-center gap-4">
            <Linkedin className="text-purple-500" size={24} />
            <span className="text-xl">LinkedIn</span>
          </div>
          <span className="text-gray-400 group-hover:translate-x-2 transition-transform duration-300">
            Connect with me →
          </span>
        </a>
  
        <a 
          href="https://github.com/Shashankgowda1092"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between p-6 bg-[#222222] rounded-lg hover:bg-[#2a2a2a] transition-all duration-300"
        >
          <div className="flex items-center gap-4">
            <Github className="text-purple-500" size={24} />
            <span className="text-xl">GitHub</span>
          </div>
          <span className="text-gray-400 group-hover:translate-x-2 transition-transform duration-300">
            See my work →
          </span>
        </a>
    

      </div>
    </div>
  </section>
  );
}

export default Contact;
