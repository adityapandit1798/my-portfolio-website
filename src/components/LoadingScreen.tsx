import React, { useState, useEffect } from 'react';
import { Terminal, Server, Cloud } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [currentCommand, setCurrentCommand] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const commands = [
    'aws ec2 describe-instances --region us-east-1',
    'terraform plan -var-file="production.tfvars"',
    'kubectl get pods -n innspark-cloud',
    'docker build -t pragma-connect:latest .',
    'aws s3 sync ./build s3://production-bucket',
    'prometheus --config.file=prometheus.yml',
    'grafana-server --config=/etc/grafana/grafana.ini',
    'python scheduler.py --optimize-resources',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setTimeout(() => setIsVisible(false), 1000);
          return 100;
        }
        return prev + 3;
      });
    }, 80);

    const commandTimer = setInterval(() => {
      setCurrentCommand((prev) => (prev + 1) % commands.length);
    }, 600);

    return () => {
      clearInterval(timer);
      clearInterval(commandTimer);
    };
  }, [commands.length]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-gray-900 flex items-center justify-center transition-opacity duration-1000">
      <div className="max-w-2xl w-full mx-4">
        {/* Header */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Server className="w-8 h-8 text-blue-400" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <div className="text-2xl font-mono text-white">
              Aditya's Cloud Command Center
            </div>
            <Cloud className="w-8 h-8 text-blue-400" />
          </div>
        </div>

        {/* Terminal Window */}
        <div className="bg-black border border-gray-700 rounded-lg overflow-hidden shadow-2xl">
          <div className="bg-gray-800 px-4 py-2 flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="ml-4 text-gray-300 text-sm font-mono">
              terminal — bash — aditya@cloud-workstation
            </div>
          </div>
          
          <div className="p-4 font-mono text-sm min-h-[300px]">
            <div className="text-green-400 mb-2">
              <Terminal className="inline w-4 h-4 mr-2" />
              Initializing Cloud Infrastructure...
            </div>
            
            {/* Command Output */}
            <div className="space-y-1 mb-4">
              {commands.slice(0, Math.floor(progress / 12.5)).map((cmd, index) => (
                <div key={index} className="text-gray-300">
                  <span className="text-blue-400">$</span> {cmd}
                  <div className="text-green-400 text-xs ml-2">✓ Success</div>
                </div>
              ))}
              
              {progress < 100 && (
                <div className="text-gray-300">
                  <span className="text-blue-400">$</span> {commands[currentCommand]}
                  <span className="animate-pulse">|</span>
                </div>
              )}
            </div>

            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-gray-400">
                <span>Loading 3D Environment...</span>
                <span>{progress}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              
              {progress === 100 && (
                <div className="text-green-400 text-center animate-pulse">
                  Cloud Environment Ready! Welcome to Aditya's Portfolio...
                </div>
              )}
            </div>
          </div>
        </div>

        {/* System Status */}
        <div className="mt-6 grid grid-cols-3 gap-4 text-center">
          <div className="bg-gray-800 rounded-lg p-3">
            <div className="text-blue-400 text-sm">AWS Infrastructure</div>
            <div className="text-green-400 font-mono">ONLINE</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-3">
            <div className="text-blue-400 text-sm">Monitoring Stack</div>
            <div className="text-green-400 font-mono">ACTIVE</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-3">
            <div className="text-blue-400 text-sm">CI/CD Pipeline</div>
            <div className="text-green-400 font-mono">READY</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;