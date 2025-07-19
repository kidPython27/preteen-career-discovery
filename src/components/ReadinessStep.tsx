
import React from 'react';

interface ReadinessStepProps {
  step: string;
  index: number;
  type: 'stream' | 'career';
}

const ReadinessStep = ({ step, index, type }: ReadinessStepProps) => {
  const bgColor = type === 'stream' ? 'bg-kid-purple' : 'bg-kid-green';
  const textColor = type === 'stream' ? 'text-kid-purple' : 'text-kid-green';
  
  return (
    <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50/50 transition-colors">
      <div className={`${bgColor} text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0`}>
        {index + 1}
      </div>
      <p className="text-gray-700 text-sm leading-relaxed flex-1">{step}</p>
    </div>
  );
};

export default ReadinessStep;
