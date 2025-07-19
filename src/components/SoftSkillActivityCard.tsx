
import React from 'react';

interface SoftSkillActivityCardProps {
  activity: string;
  softSkillsUsed: string[];
  icon?: string;
}

const SoftSkillActivityCard = ({ activity, softSkillsUsed, icon = "🎯" }: SoftSkillActivityCardProps) => {
  return (
    <div className="bg-gradient-to-br from-kid-yellow/10 to-kid-orange/10 rounded-lg p-4 border border-gray-100">
      <div className="flex items-start space-x-3">
        <div className="text-2xl">{icon}</div>
        <div className="flex-1">
          <h4 className="font-semibold text-gray-800 text-sm mb-2">{activity}</h4>
          <div className="flex flex-wrap gap-1">
            {softSkillsUsed.map((skill, index) => (
              <span
                key={index}
                className="text-xs bg-kid-purple/20 text-kid-purple px-2 py-1 rounded-full font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftSkillActivityCard;
