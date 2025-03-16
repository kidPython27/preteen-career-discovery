
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface StrengthCardProps {
  icon: string;
  title: string;
  description: string;
  percentage: number;
  color: string;
  delay?: number;
  className?: string;
}

const StrengthCard = ({ 
  icon, 
  title, 
  description, 
  percentage, 
  color,
  delay = 0,
  className 
}: StrengthCardProps) => {
  const [showPercentage, setShowPercentage] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPercentage(percentage);
    }, 300 + delay);
    
    return () => clearTimeout(timer);
  }, [percentage, delay]);

  return (
    <div className={cn(
      "rounded-xl p-4 transition-all duration-300 hover:shadow-lg", 
      className
    )}>
      <div className="trait-title">
        <div className={`trait-icon ${color}`}>{icon}</div>
        <span>{title}</span>
      </div>
      <div className="percentage-bar">
        <div 
          className={`percentage-fill ${color}`} 
          style={{ width: `${showPercentage}%` }}
        ></div>
      </div>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default StrengthCard;
