
import React from 'react';

interface SoftSkillCardProps {
  name: string;
  whatItMeans: string;
  howToPractice: string;
  icon?: string;
}

const SoftSkillCard = ({ name, whatItMeans, howToPractice, icon = "💪" }: SoftSkillCardProps) => {
  return (
    <div className="bg-gradient-to-br from-white to-gray-50/50 rounded-xl p-4 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start space-x-3">
        <div className="text-2xl">{icon}</div>
        <div className="flex-1">
          <h4 className="font-bold text-gray-800 mb-2">{name}</h4>
          <div className="space-y-2">
            <div>
              <span className="text-xs bg-kid-blue/10 text-kid-blue px-2 py-1 rounded-full font-medium">
                What it means
              </span>
              <p className="text-sm text-gray-600 mt-1">{whatItMeans}</p>
            </div>
            <div>
              <span className="text-xs bg-kid-green/10 text-kid-green px-2 py-1 rounded-full font-medium">
                How to practice
              </span>
              <p className="text-sm text-gray-600 mt-1">{howToPractice}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftSkillCard;
