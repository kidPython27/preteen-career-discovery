
import React from 'react';

interface PathwayCardProps {
  title: string;
  educationRequired: string;
  description: string;
  icon?: string;
}

const PathwayCard = ({ title, educationRequired, description, icon = "🎯" }: PathwayCardProps) => {
  return (
    <div className="bg-gradient-to-br from-white to-gray-50/50 rounded-xl p-4 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start space-x-3">
        <div className="text-2xl">{icon}</div>
        <div className="flex-1">
          <h4 className="font-bold text-gray-800 mb-1">{title}</h4>
          <div className="text-xs bg-kid-green/10 text-kid-green px-2 py-1 rounded-full inline-block mb-2 font-medium">
            {educationRequired}
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default PathwayCard;
