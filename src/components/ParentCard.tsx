
import React from 'react';
import { cn } from '@/lib/utils';

interface ParentCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const ParentCard = ({ title, children, className }: ParentCardProps) => {
  return (
    <div className={cn("bg-white rounded-xl p-6 shadow-md mb-6", className)}>
      <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">{title}</h3>
      <div className="text-gray-700">{children}</div>
    </div>
  );
};

export default ParentCard;
