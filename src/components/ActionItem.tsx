
import { cn } from '@/lib/utils';
import React from 'react';

interface ActionItemProps {
  icon: string;
  children: React.ReactNode;
  color?: string;
  className?: string;
}

const ActionItem = ({ 
  icon, 
  children, 
  color = "bg-kid-blue",
  className 
}: ActionItemProps) => {
  return (
    <div className={cn("flex items-start mb-3 group", className)}>
      <div className={`${color} text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3 transition-transform group-hover:scale-110`}>
        {icon}
      </div>
      <div className="text-gray-700">{children}</div>
    </div>
  );
};

export default ActionItem;
