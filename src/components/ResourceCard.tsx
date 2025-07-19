
import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ResourceCardProps {
  title: string;
  reason?: string;
  url?: string;
  type: 'book' | 'video' | 'website';
}

const ResourceCard = ({ title, reason, url, type }: ResourceCardProps) => {
  const getIcon = () => {
    switch (type) {
      case 'book': return '📚';
      case 'video': return '🎥';
      case 'website': return '🌐';
      default: return '📖';
    }
  };

  const getBgGradient = () => {
    switch (type) {
      case 'book': return 'from-kid-orange/10 to-kid-red/10';
      case 'video': return 'from-kid-purple/10 to-kid-pink/10';
      case 'website': return 'from-kid-blue/10 to-kid-green/10';
      default: return 'from-gray-50 to-gray-100/50';
    }
  };

  return (
    <div className={`bg-gradient-to-br ${getBgGradient()} rounded-lg p-4 border border-gray-100`}>
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3 flex-1">
          <div className="text-2xl">{getIcon()}</div>
          <div>
            <h4 className="font-semibold text-gray-800 text-sm">{title}</h4>
            {reason && (
              <p className="text-xs text-gray-600 mt-1">{reason}</p>
            )}
          </div>
        </div>
        {url && (
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-kid-blue hover:text-kid-purple transition-colors p-1"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ResourceCard;
