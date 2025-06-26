
import { useEffect, useState } from "react";

interface TerminalPromptProps {
  onComplete: () => void;
}

const TerminalPrompt = ({ onComplete }: TerminalPromptProps) => {
  const [currentCommand, setCurrentCommand] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [showResult, setShowResult] = useState(false);

  const commands = [
    {
      command: "> whoami",
      result: "Ashir N Basheer"
    },
    {
      command: "> role", 
      result: "Backend Developer | Node.js Specialist | System Architect"
    }
  ];

  useEffect(() => {
    if (currentCommand < commands.length) {
      const command = commands[currentCommand];
      let index = 0;
      
      const typeCommand = () => {
        const timer = setInterval(() => {
          if (index < command.command.length) {
            setTypedText(command.command.slice(0, index + 1));
            index++;
          } else {
            clearInterval(timer);
            // Show result after command is typed
            setTimeout(() => {
              setShowResult(true);
              // Move to next command
              setTimeout(() => {
                setCurrentCommand(prev => prev + 1);
                setTypedText("");
                setShowResult(false);
              }, 1500);
            }, 500);
          }
        }, 80);
        return timer;
      };

      const timer = typeCommand();
      return () => clearInterval(timer);
    } else {
      // All commands completed
      setTimeout(() => {
        onComplete();
      }, 500);
    }
  }, [currentCommand, onComplete]);

  return (
    <div className="font-mono space-y-3">
      {/* Previous completed commands */}
      {commands.slice(0, currentCommand).map((cmd, index) => (
        <div key={index} className="space-y-1">
          <div className="text-terminal-green text-sm glow-text">
            {cmd.command}
          </div>
          <div className="text-white text-base pl-2">
            {cmd.result}
          </div>
        </div>
      ))}
      
      {/* Current typing command */}
      {currentCommand < commands.length && (
        <div className="space-y-1">
          <div className="text-terminal-green text-sm glow-text">
            {typedText}
            <span className="animate-pulse">█</span>
          </div>
          {showResult && (
            <div className="text-white text-base pl-2 animate-fade-in">
              {commands[currentCommand].result}
            </div>
          )}
        </div>
      )}
      
      {/* Final cursor */}
      {currentCommand >= commands.length && (
        <div className="text-terminal-green text-sm">
          <span className="text-muted-foreground">$</span>
          <span className="animate-pulse ml-1">█</span>
        </div>
      )}
    </div>
  );
};

export default TerminalPrompt;
