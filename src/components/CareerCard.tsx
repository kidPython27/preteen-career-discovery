
import React from 'react';
import { cn } from '@/lib/utils';

interface CareerCardProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
  bgColor?: string;
}

const CareerCard = ({ 
  icon, 
  title, 
  description, 
  className,
  bgColor = "bg-gradient-to-br from-kid-blue/10 to-kid-purple/10" 
}: CareerCardProps) => {
  return (
    <div className={cn(
      "rounded-xl p-4 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-md", 
      bgColor,
      className
    )}>
      <div className="text-xl mb-2">{icon}</div>
      <h3 className="font-bold text-gray-800 mb-1">{title}</h3>
      <p className="text-sm text-gray-600 flex-grow">{description}</p>
    </div>
  );
};

export default CareerCard;
