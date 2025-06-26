
import { Terminal, Github, Book } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Backend Developer",
      company: "Product-Based Automotive Company",
      period: "Current Role",
      description: "Building enterprise-grade APIs and microservices for automotive software solutions.",
      technologies: ["Node.js", "Express", "Redis", "MongoDB", "Docker", "AWS", "Microservices"],
      color: "terminal-green"
    },
    {
      title: "Project Lead",
      company: "Fintech Loan Management App",
      period: "Previous Role",
      description: "Led development of REST APIs and integrated third-party finance tools while managing team delivery.",
      technologies: ["Node.js", "Express", "PostgreSQL", "Third-party APIs", "Team Leadership"],
      color: "terminal-blue"
    },
    {
      title: "Full Stack Developer",
      company: "Littra",
      period: "Early Career",
      description: "Developed end-to-end solutions with React frontend and Node.js backend architecture.",
      technologies: ["React", "Node.js", "MongoDB", "Full Stack", "Web Development"],
      color: "terminal-green"
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            <span className="text-gradient">Experience & Skills</span>
          </h2>

          <p className="text-xl text-muted-foreground text-center mb-16 max-w-4xl mx-auto">
            Backend Developer with 3.5+ years of experience across product-based companies, currently working in the 
            automotive software domain. Specialized in building enterprise-grade APIs, integrating DevOps workflows, 
            and optimizing system performance.
          </p>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="group bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 hover:border-terminal-green/50 transition-all duration-300 hover:shadow-lg hover:shadow-terminal-green/10"
              >
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className={`w-3 h-3 bg-${exp.color} rounded-full animate-glow`}></div>
                      <span className="text-sm font-mono text-muted-foreground">{exp.period}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                    <p className="text-terminal-green font-medium">{exp.company}</p>
                  </div>

                  <div className="md:col-span-2">
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-terminal-dark border border-terminal-green/30 rounded-full text-sm font-mono text-terminal-green hover:border-terminal-green/60 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-card/30 border border-border rounded-xl hover:border-terminal-green/50 transition-colors">
              <Terminal className="w-12 h-12 text-terminal-green mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Backend Development</h3>
              <p className="text-muted-foreground">Node.js, Express, MongoDB, PostgreSQL, Redis</p>
            </div>
            
            <div className="text-center p-6 bg-card/30 border border-border rounded-xl hover:border-terminal-blue/50 transition-colors">
              <Github className="w-12 h-12 text-terminal-blue mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">DevOps & Cloud</h3>
              <p className="text-muted-foreground">Docker, AWS, Microservices, CI/CD</p>
            </div>
            
            <div className="text-center p-6 bg-card/30 border border-border rounded-xl hover:border-terminal-green/50 transition-colors">
              <Book className="w-12 h-12 text-terminal-green mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Team Leadership</h3>
              <p className="text-muted-foreground">Project Management, Mentoring, Delivery</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
