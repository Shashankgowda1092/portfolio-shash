
import { Github, Linkedin, Mail} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#121212] border-t border-[#33353F] py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © 2025 Shashank H. All rights reserved.
          </p>

          <div className="flex space-x-4">
            <a
              href="https://github.com/Shashankgowda1092"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-500 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/shash-/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-500 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:shashankh1092@gmail.com"
              className="text-gray-400 hover:text-purple-500 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
