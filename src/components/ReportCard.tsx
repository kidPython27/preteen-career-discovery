
import React from 'react';
import { cn } from '@/lib/utils';

interface ReportCardProps {
  title: string;
  children: React.ReactNode;
  chipText?: string;
  chipColor?: string;
  className?: string;
  delay?: 'none' | 'short' | 'long';
}

const ReportCard = ({ 
  title, 
  children, 
  chipText, 
  chipColor = "from-kid-blue to-kid-purple", 
  className,
  delay = 'none'
}: ReportCardProps) => {
  const animationClass = 
    delay === 'none' 
      ? 'opacity-100 animate-slide-up' 
      : delay === 'short' 
        ? 'opacity-0 animate-slide-up-delayed' 
        : 'opacity-0 animate-slide-up-more-delayed';

  return (
    <div className={cn("riasec-card", animationClass, className)}>
      {chipText && (
        <div className={`section-chip ${chipColor} text-white`}>
          {chipText}
        </div>
      )}
      <h2 className="section-title">{title}</h2>
      <div className="text-gray-700">
        {children}
      </div>
    </div>
  );
};

export default ReportCard;
