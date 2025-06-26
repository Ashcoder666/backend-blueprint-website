import { Button } from "@/components/ui/button";
import { Github, Linkedin, Terminal, Database, Server, Cloud } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [typedText, setTypedText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  
  const fullText = "Backend Developer | Node.js Specialist | System Architect";
  const animatedWords = ["APIs", "Systems", "Cloud Workflows", "Microservices", "Infrastructure"];
  
  const terminalCommands = [
    "$ npm start",
    "🚀 Server running at https://ashir.dev",
    "💾 Connected to MongoDB",
    "🔐 Auth system initialized", 
    "✅ Ready for requests"
  ];

  // Typing effect for main text
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);

    return () => clearInterval(timer);
  }, []);

  // Word swapping animation
  useEffect(() => {
    const wordTimer = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % animatedWords.length);
    }, 2000);

    return () => clearInterval(wordTimer);
  }, []);

  // Terminal animation
  useEffect(() => {
    let lineIndex = 0;
    const terminalTimer = setInterval(() => {
      if (lineIndex < terminalCommands.length) {
        setTerminalLines(prev => [...prev, terminalCommands[lineIndex]]);
        lineIndex++;
      } else {
        clearInterval(terminalTimer);
      }
    }, 800);

    return () => clearInterval(terminalTimer);
  }, []);

  // Matrix rain effect elements
  const matrixElements = Array.from({ length: 50 }, (_, i) => (
    <div
      key={i}
      className="absolute text-terminal-green opacity-20 font-mono text-xs animate-float"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${3 + Math.random() * 2}s`
      }}
    >
      {['{', '}', '(', ')', '[', ']', '<', '>', '=', ';', ':', '"', "'"][Math.floor(Math.random() * 13)]}
    </div>
  ));

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Matrix Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {matrixElements}
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
            {Array.from({ length: 144 }, (_, i) => (
              <div
                key={i}
                className="border border-terminal-green/20 animate-pulse"
                style={{ animationDelay: `${(i * 0.1) % 3}s` }}
              />
            ))}
          </div>
        </div>

        {/* Floating Tech Icons */}
        <div className="absolute top-20 left-10 animate-float">
          <Terminal className="w-8 h-8 text-terminal-green opacity-30 animate-pulse" />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
          <Database className="w-8 h-8 text-terminal-blue opacity-30 animate-pulse" />
        </div>
        <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '2s' }}>
          <Server className="w-8 h-8 text-terminal-green opacity-30 animate-pulse" />
        </div>
        <div className="absolute top-60 right-10 animate-float" style={{ animationDelay: '1.5s' }}>
          <Cloud className="w-8 h-8 text-terminal-blue opacity-30 animate-pulse" />
        </div>

        {/* Moving Code Lines */}
        <div className="absolute top-1/4 left-0 w-full opacity-20">
          <div className="font-mono text-terminal-green text-sm animate-slide-across">
            const express = require('express'); app.listen(3000);
          </div>
        </div>
        <div className="absolute top-3/4 right-0 w-full opacity-20">
          <div className="font-mono text-terminal-blue text-sm animate-slide-across-reverse">
            {"db.collection.find().sort({createdAt: -1})"}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <div className="animate-fade-in">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-mono">
            <span className="text-gradient glow-text">
              Hi, I'm Ashir N Basheer
            </span>
            <br />
            <span className="text-gradient terminal-cursor font-mono">
              {typedText}
            </span>
          </h1>
          
          {/* Animated Subtitle */}
          <div className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto font-mono">
            <span>Designing </span>
            <span className="text-terminal-green font-bold animate-pulse">
              {animatedWords[currentWordIndex]}
            </span>
            <span>, Automating Infrastructure, and Building Scalable Systems...</span>
          </div>

          {/* Terminal Window */}
          <div className="bg-gray-900 border border-terminal-green/50 rounded-lg p-4 mb-8 max-w-md mx-auto shadow-2xl shadow-terminal-green/20">
            <div className="flex items-center mb-2">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-xs text-gray-400 ml-4 font-mono">ashir@dev:~</div>
            </div>
            <div className="text-left space-y-1">
              {terminalLines.map((line, index) => (
                <div
                  key={index}
                  className="text-terminal-green font-mono text-sm animate-fade-in"
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
                  {line}
                </div>
              ))}
              <div className="text-terminal-green font-mono text-sm animate-blink">
                <span className="opacity-50">$</span>
                <span className="animate-pulse">_</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-terminal-green hover:bg-terminal-green/80 text-black font-semibold px-8 py-3 font-mono relative overflow-hidden group"
            >
              <span className="relative z-10">Download Resume</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-terminal-blue text-terminal-blue hover:bg-terminal-blue/10 px-8 py-3 font-mono hover:shadow-lg hover:shadow-terminal-blue/30 transition-all"
            >
              <Linkedin className="mr-2 h-4 w-4" />
              Connect on LinkedIn
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a 
              href="#" 
              className="text-muted-foreground hover:text-terminal-green transition-colors transform hover:scale-110 hover:glow"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-terminal-blue transition-colors transform hover:scale-110 hover:glow"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-terminal-green rounded-full flex justify-center shadow-lg shadow-terminal-green/50">
          <div className="w-1 h-3 bg-terminal-green rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
