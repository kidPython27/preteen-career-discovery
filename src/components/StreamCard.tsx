
import React from 'react';
import { cn } from '@/lib/utils';

interface StreamCardProps {
  name: string;
  matchPercentage: number;
  reasoning?: string;
  subjects?: string[];
  isRecommended?: boolean;
  note?: string;
  className?: string;
}

const StreamCard = ({ 
  name, 
  matchPercentage, 
  reasoning, 
  subjects, 
  isRecommended = false,
  note,
  className 
}: StreamCardProps) => {
  return (
    <div className={cn(
      "riasec-card p-6 transition-all duration-300",
      isRecommended 
        ? "ring-2 ring-kid-blue/30 bg-gradient-to-br from-kid-blue/5 to-kid-purple/5" 
        : "bg-gradient-to-br from-gray-50 to-gray-100/50",
      className
    )}>
      {isRecommended && (
        <div className="inline-block bg-gradient-to-r from-kid-blue to-kid-purple text-white text-xs uppercase tracking-wider font-semibold py-1 px-3 rounded-full mb-3">
          🎯 BEST MATCH
        </div>
      )}
      
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold text-kid-blue">{matchPercentage}%</div>
          <div className="text-sm text-gray-600">match</div>
        </div>
      </div>

      {reasoning && (
        <p className="text-gray-700 mb-4 text-sm leading-relaxed">{reasoning}</p>
      )}

      {note && (
        <p className="text-gray-600 mb-4 text-sm italic">{note}</p>
      )}

      {subjects && subjects.length > 0 && (
        <div className="mb-4">
          <h4 className="font-semibold text-gray-800 mb-2">Key Subjects:</h4>
          <div className="flex flex-wrap gap-2">
            {subjects.map((subject, index) => (
              <span 
                key={index}
                className="bg-kid-blue/10 text-kid-blue px-3 py-1 rounded-full text-sm font-medium"
              >
                {subject}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
        <div 
          className="bg-gradient-to-r from-kid-blue to-kid-purple h-2 rounded-full transition-all duration-1000"
          style={{ width: `${matchPercentage}%` }}
        />
      </div>
    </div>
  );
};

export default StreamCard;
