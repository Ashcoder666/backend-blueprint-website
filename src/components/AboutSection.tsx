
import { Terminal, Github, Book } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-gradient">About Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a backend developer passionate about building scalable, high-performance systems with clean architecture. 
                With over 3.5 years of hands-on experience in Node.js, Express.js, MongoDB, and PostgreSQL, I specialize in 
                designing APIs, solving system-level challenges, and deploying applications using Docker and AWS.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I've led teams, owned delivery pipelines, and worked across automotive, fintech, and e-commerce domains. 
                My approach combines technical excellence with practical problem-solving to deliver robust backend solutions 
                that power modern applications.
              </p>

              <div className="flex space-x-6 pt-4">
                <div className="flex items-center space-x-2 text-terminal-green">
                  <Terminal className="w-5 h-5" />
                  <span className="font-mono text-sm">Full Stack Development</span>
                </div>
                <div className="flex items-center space-x-2 text-terminal-blue">
                  <Github className="w-5 h-5" />
                  <span className="font-mono text-sm">Open Source</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative">
                <div className="bg-terminal-dark border border-terminal-green/30 rounded-lg p-6 font-mono text-sm">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-muted-foreground ml-2">developer.js</span>
                  </div>
                  <div className="space-y-2 text-terminal-green">
                    <div><span className="text-terminal-blue">const</span> developer = {'{'}</div>
                    <div className="ml-4">name: <span className="text-yellow-400">"Backend Engineer"</span>,</div>
                    <div className="ml-4">experience: <span className="text-yellow-400">"3.5+ years"</span>,</div>
                    <div className="ml-4">skills: [<span className="text-yellow-400">"Node.js"</span>, <span className="text-yellow-400">"Express"</span>, <span className="text-yellow-400">"MongoDB"</span>],</div>
                    <div className="ml-4">passion: <span className="text-yellow-400">"Clean Architecture"</span></div>
                    <div>{'}'}</div>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-terminal-green rounded-full animate-glow"></div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-card border border-border rounded-lg hover:border-terminal-green/50 transition-colors">
                  <Terminal className="w-8 h-8 text-terminal-green mx-auto mb-2" />
                  <div className="text-sm font-mono">Backend</div>
                </div>
                <div className="text-center p-4 bg-card border border-border rounded-lg hover:border-terminal-blue/50 transition-colors">
                  <Github className="w-8 h-8 text-terminal-blue mx-auto mb-2" />
                  <div className="text-sm font-mono">DevOps</div>
                </div>
                <div className="text-center p-4 bg-card border border-border rounded-lg hover:border-terminal-green/50 transition-colors">
                  <Book className="w-8 h-8 text-terminal-green mx-auto mb-2" />
                  <div className="text-sm font-mono">APIs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
