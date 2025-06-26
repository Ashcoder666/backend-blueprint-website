
import { Github, Linkedin, Terminal } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex space-x-6">
            <a 
              href="#" 
              className="p-3 bg-card border border-border rounded-full hover:border-terminal-green/50 hover:bg-terminal-green/10 transition-all group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-terminal-green" />
            </a>
            <a 
              href="#" 
              className="p-3 bg-card border border-border rounded-full hover:border-terminal-blue/50 hover:bg-terminal-blue/10 transition-all group"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 text-muted-foreground group-hover:text-terminal-blue" />
            </a>
            <a 
              href="mailto:contact@example.com" 
              className="p-3 bg-card border border-border rounded-full hover:border-terminal-green/50 hover:bg-terminal-green/10 transition-all group"
              aria-label="Email"
            >
              <Terminal className="w-6 h-6 text-muted-foreground group-hover:text-terminal-green" />
            </a>
          </div>

          <div className="flex items-center space-x-2 font-mono text-sm text-muted-foreground">
            <span>Built with</span>
            <span className="text-red-500 animate-pulse">❤️</span>
            <span>using</span>
            <Terminal className="w-4 h-4 text-terminal-green" />
            <span className="text-terminal-green">Node.js</span>
          </div>

          <p className="text-center text-muted-foreground text-sm">
            © 2024 Ashir N Basheer. Crafted with passion for clean code.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
