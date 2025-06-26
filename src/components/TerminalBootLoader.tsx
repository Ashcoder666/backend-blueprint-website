
import { useEffect, useState } from "react";

interface TerminalBootLoaderProps {
  onBootComplete: () => void;
}

const TerminalBootLoader = ({ onBootComplete }: TerminalBootLoaderProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const bootSteps = [
    "booting ./ashir.dev ...",
    "Initializing dev environment...",
    "Connecting to services [MongoDB, Redis, Node.js]...",
    "Loading experience modules...",
    "System check: ✅ PASS",
    "✅ System ready. Launching profile..."
  ];

  useEffect(() => {
    if (currentStep < bootSteps.length) {
      const timer = setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, 500);
      return () => clearTimeout(timer);
    } else if (!isComplete) {
      const completeTimer = setTimeout(() => {
        setIsComplete(true);
        onBootComplete();
      }, 800);
      return () => clearTimeout(completeTimer);
    }
  }, [currentStep, isComplete, onBootComplete]);

  return (
    <div className="font-mono text-sm">
      <div className="mb-4 flex items-center">
        <div className="w-4 h-4 mr-2 animate-spin text-terminal-green">⟳</div>
        <span className="text-terminal-green">loading modules...</span>
      </div>
      
      <div className="space-y-1">
        {bootSteps.slice(0, currentStep).map((step, index) => (
          <div 
            key={index}
            className="text-terminal-green animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <span className="text-muted-foreground">$</span> {step}
          </div>
        ))}
        
        {currentStep < bootSteps.length && (
          <div className="text-terminal-green">
            <span className="text-muted-foreground">$</span>
            <span className="animate-pulse ml-1">█</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default TerminalBootLoader;
