
import React from 'react';
import { cn } from '@/lib/utils';

interface SkillBadgeProps {
  icon: string;
  text: string;
  className?: string;
}

const SkillBadge = ({ icon, text, className }: SkillBadgeProps) => {
  return (
    <div className={cn(
      "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-white border border-gray-100 shadow-sm mr-2 mb-2 transition-all duration-300 hover:shadow-md", 
      className
    )}>
      <span className="mr-1">{icon}</span>
      {text}
    </div>
  );
};

export default SkillBadge;
