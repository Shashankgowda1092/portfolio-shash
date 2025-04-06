import React from 'react';
import { Github, Linkedin, Mail, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#121212] border-t border-[#33353F] py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">© 2024 Karthikeyan G. All rights reserved.</p>
          
          <div className="flex space-x-4">
            <a href="https://github.com/Karthik-coder-003" target="_blank" rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-500 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/karthikeyan-g-1389b2281" target="_blank" rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-500 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:kark60200710@gmail.com"
              className="text-gray-400 hover:text-purple-500 transition-colors">
              <Mail size={20} />
            </a>
            <a href="https://twitter.com/your_twitter_handle" target="_blank" rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-500 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="https://www.instagram.com/arno_dorian_123?igsh=MXQyZWY5c2x2MGR3dg==" target="_blank" rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-500 transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
