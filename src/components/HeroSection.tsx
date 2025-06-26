
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import { useState } from "react";
import TerminalBootLoader from "./TerminalBootLoader";
import TerminalPrompt from "./TerminalPrompt";
import MatrixBackground from "./MatrixBackground";

const HeroSection = () => {
  const [bootComplete, setBootComplete] = useState(false);
  const [promptComplete, setPromptComplete] = useState(false);

  const handleBootComplete = () => {
    setBootComplete(true);
  };

  const handlePromptComplete = () => {
    setPromptComplete(true);
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Matrix Background Effect */}
      <MatrixBackground />

      <div className="container mx-auto px-6 text-center z-10">
        <div className="animate-fade-in">
          {/* Terminal Window */}
          <div className="bg-gray-900 border border-terminal-green/50 rounded-lg p-6 mb-8 max-w-2xl mx-auto shadow-2xl shadow-terminal-green/20">
            <div className="flex items-center mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-xs text-gray-400 ml-4 font-mono">ashir@dev:~</div>
            </div>
            
            <div className="text-left min-h-[200px]">
              {!bootComplete ? (
                <TerminalBootLoader onBootComplete={handleBootComplete} />
              ) : (
                <TerminalPrompt onComplete={handlePromptComplete} />
              )}
            </div>
          </div>

          {/* Animated Subtitle - Only show after prompt is complete */}
          {promptComplete && (
            <div className="text-sm md:text-base text-muted-foreground mb-8 max-w-2xl mx-auto font-mono animate-fade-in">
              <span>Designing APIs, Automating Infrastructure, and Building Scalable Systems...</span>
            </div>
          )}

          {/* CTA Buttons - Only show after prompt is complete */}
          {promptComplete && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <Button 
                size="lg" 
                className="bg-terminal-green hover:bg-terminal-green/80 text-black font-semibold px-6 py-2 font-mono relative overflow-hidden group text-sm"
              >
                <span className="relative z-10">Download Resume</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-terminal-blue text-terminal-blue hover:bg-terminal-blue/10 px-6 py-2 font-mono hover:shadow-lg hover:shadow-terminal-blue/30 transition-all text-sm"
              >
                <Linkedin className="mr-2 h-3 w-3" />
                Connect on LinkedIn
              </Button>
            </div>
          )}

          {/* Social Links - Only show after prompt is complete */}
          {promptComplete && (
            <div className="flex justify-center space-x-6 animate-fade-in" style={{ animationDelay: '1s' }}>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-terminal-green transition-colors transform hover:scale-110 hover:glow"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-terminal-blue transition-colors transform hover:scale-110 hover:glow"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Scroll indicator - Only show when everything is loaded */}
      {promptComplete && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-terminal-green rounded-full flex justify-center shadow-lg shadow-terminal-green/50">
            <div className="w-1 h-3 bg-terminal-green rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
