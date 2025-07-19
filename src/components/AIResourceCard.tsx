
import React from 'react';
import { ExternalLink } from 'lucide-react';

interface AIResourceCardProps {
  title: string;
  description: string;
  link: string;
  icon?: string;
}

const AIResourceCard = ({ title, description, link, icon = "🔗" }: AIResourceCardProps) => {
  return (
    <div className="bg-gradient-to-br from-kid-purple/10 to-kid-blue/10 rounded-lg p-4 border border-gray-100 hover:shadow-md transition-all duration-300">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3 flex-1">
          <div className="text-2xl">{icon}</div>
          <div>
            <h4 className="font-semibold text-gray-800 text-sm mb-1">{title}</h4>
            <p className="text-xs text-gray-600">{description}</p>
          </div>
        </div>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-kid-blue hover:text-kid-purple transition-colors p-1"
        >
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default AIResourceCard;
