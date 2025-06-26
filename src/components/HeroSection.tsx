import { Button } from "@/components/ui/button";
import { Github, Linkedin, Terminal } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Backend Developer & Node.js Specialist";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden animated-bg">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 animate-float">
          <Terminal className="w-8 h-8 text-terminal-green opacity-20" />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-4 h-4 bg-terminal-blue rounded-full opacity-30 animate-glow"></div>
        </div>
        <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '2s' }}>
          <div className="text-terminal-green opacity-20 font-mono text-sm">
            {"{ code: 'life' }"}
          </div>
        </div>
        <div className="absolute top-60 right-10 animate-float" style={{ animationDelay: '1.5s' }}>
          <div className="text-terminal-blue opacity-20 font-mono text-sm">
            npm run dev
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">
              Hi, I'm Ashir N Basheer — 
            </span>
            <br />
            <span className="text-gradient terminal-cursor">
              {typedText}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Crafting scalable, high-performance systems with clean backend architecture.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-terminal-green hover:bg-terminal-green/80 text-black font-semibold px-8 py-3 animate-glow"
            >
              Download Resume
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-terminal-blue text-terminal-blue hover:bg-terminal-blue/10 px-8 py-3"
            >
              <Linkedin className="mr-2 h-4 w-4" />
              Connect on LinkedIn
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a 
              href="#" 
              className="text-muted-foreground hover:text-terminal-green transition-colors transform hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-terminal-blue transition-colors transform hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-terminal-green rounded-full flex justify-center">
          <div className="w-1 h-3 bg-terminal-green rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
