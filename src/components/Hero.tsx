import { Github, Linkedin, Mail, Twitter, Instagram } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="space-y-4">
              <h2 className="text-xl font-light tracking-wide slide-in">
                Hi, I am
              </h2>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight slide-in slide-in-delay-1 ">
                Shashank
                <span
                  className="text-purple-500 
            "
                >
                  H
                </span>
              </h1>
              <div className="slide-in slide-in-delay-2">
                <span className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 font-semibold">
                  ReactJS Web Developer
                </span>
              </div>
              <p className="text-lg text-gray-400 max-w-lg slide-in slide-in-delay-3">
                I craft intelligent solutions and beautiful web experiences,
                specializing in artificial intelligence and full-stack
                development.
              </p>
              <div className="flex space-x-4 pt-4 slide-in slide-in-delay-3">
                <a
                  href="https://github.com/Karthik-coder-003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-white/20 hover:border-purple-500 transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/karthikeyan-g-1389b2281"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-white/20 hover:border-purple-500 transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://twitter.com/your_twitter_handle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-white/20 hover:border-purple-500 transition-colors"
                >
                  <Twitter size={24} />
                </a>
                <a
                  href="https://instagram.com/your_instagram_handle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-white/20 hover:border-purple-500 transition-colors"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="mailto:kark60200710@gmail.com"
                  className="p-2 rounded-full border border-white/20 hover:border-purple-500 transition-colors"
                >
                  <Mail size={24} />
                </a>
              </div>
              {/* Download CV Button */}
              <div className="mt-6 slide-in slide-in-delay-3">
                <a
                  href="/resume.pdf"
                  download="Karthikeyan_G_Resume.pdf"
                  className="button"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
          {/* Photo Container */}
          <div className="relative slide-in slide-in-delay-4">
            <div className="w-64 h-64 md:w-80 md:h-80 relative mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-2xl opacity-20 animate-pulse"></div>
              {/* <img
                src="/profile.png"
                alt="Karthikeyan G"
                className="rounded-full w-full h-full object-cover object-center relative z-10"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
