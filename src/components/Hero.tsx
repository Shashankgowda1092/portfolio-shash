import { Github, Linkedin, Mail, Twitter, Instagram } from "lucide-react";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <section id="home" className="pt-4 pb-6 min-h-screen flex items-center">
        <div className="container mx-auto px-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="space-y-4">
                <h2 className="text-xl font-light tracking-wide slide-in">
                  Hi, I am
                </h2>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight slide-in slide-in-delay-1 space-x-2">
                  Shashank
                  <span className="text-purple-500"> H</span>
                </h1>
                <div
                  className="slide-in slide-in-delay-2 flex flex-col">
                  <div className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 font-semibold">
                    ReactJS Web Developer
                  </div>
                  <div className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-medium">
                    Torry Harris Integration Solutions
                  </div>
                </div>
                <p className="text-lg text-gray-400 max-w-lg slide-in slide-in-delay-3">
                  Building modern, responsive web apps with ReactJS, Tailwind,
                  and ShadCN. Passionate about clean UI, smart code, and
                  product-driven development.
                </p>
                <div className="flex space-x-4 pt-4 slide-in slide-in-delay-3">
                  <a
                    href="https://github.com/Shashankgowda1092"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full border border-white/20 hover:border-purple-500 transition-colors"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/shash-/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full border border-white/20 hover:border-purple-500 transition-colors"
                  >
                    <Linkedin size={24} />
                  </a>
               
                
                  <a
                    href="mailto:shashankh1092@gmail.com"
                    className="p-2 rounded-full border border-white/20 hover:border-purple-500 transition-colors"
                  >
                    <Mail size={24} />
                  </a>
                </div>
                {/* Download CV Button */}
                <div className="mt-6 slide-in slide-in-delay-3 flex justify-center md:justify-start">
                  <a
                    href="/resume2025.pdf"
                    download="Shashank_resume.pdf"
                    className="button"
                  >
                    Download CV
                  </a>
                </div>
              </div>
            </div>
            <div className="relative slide-in slide-in-delay-4 order-first md:order-none mt-12 sm:mt-16">
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 relative mx-auto">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-2xl opacity-80 animate-pulse"></div>
                <img
                  src="/profile.png"
                  alt="Shashank H"
                  className="rounded-full w-full h-full object-cover [object-position:0_20%] relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
