
import { Terminal, Database, Server, Cloud } from "lucide-react";

const MatrixBackground = () => {
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
        <Terminal className="w-6 h-6 text-terminal-green opacity-30 animate-pulse" />
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <Database className="w-6 h-6 text-terminal-blue opacity-30 animate-pulse" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '2s' }}>
        <Server className="w-6 h-6 text-terminal-green opacity-30 animate-pulse" />
      </div>
      <div className="absolute top-60 right-10 animate-float" style={{ animationDelay: '1.5s' }}>
        <Cloud className="w-6 h-6 text-terminal-blue opacity-30 animate-pulse" />
      </div>

      {/* Moving Code Lines */}
      <div className="absolute top-1/4 left-0 w-full opacity-20">
        <div className="font-mono text-terminal-green text-xs animate-slide-across">
          const express = require('express'); app.listen(3000);
        </div>
      </div>
      <div className="absolute top-3/4 right-0 w-full opacity-20">
        <div className="font-mono text-terminal-blue text-xs animate-slide-across-reverse">
          {"db.collection.find().sort({createdAt: -1})"}
        </div>
      </div>
    </div>
  );
};

export default MatrixBackground;
