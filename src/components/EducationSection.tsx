
import { GraduationCap, Book } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      description: "Specialized in software engineering, system design, and full-stack development. Completed real-world projects and team-based assignments focused on enterprise solutions.",
      icon: GraduationCap,
      color: "terminal-green"
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      description: "Built strong foundations in programming, databases, and data structures. Participated in coding events and web development projects.",
      icon: Book,
      color: "terminal-blue"
    }
  ];

  return (
    <section id="education" className="py-20 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-gradient">Education</span>
          </h2>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div 
                key={index}
                className="group bg-card border border-border rounded-xl p-8 hover:border-terminal-green/50 transition-all duration-300 hover:shadow-lg hover:shadow-terminal-green/10"
              >
                <div className="flex items-start space-x-6">
                  <div className={`p-4 bg-${edu.color}/10 border border-${edu.color}/30 rounded-xl`}>
                    <edu.icon className={`w-8 h-8 text-${edu.color}`} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-terminal-green transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-terminal-dark border border-terminal-green/30 rounded-full">
              <GraduationCap className="w-5 h-5 text-terminal-green" />
              <span className="font-mono text-terminal-green">Continuous Learning & Growth</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
