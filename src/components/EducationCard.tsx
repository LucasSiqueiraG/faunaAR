import { ReactNode } from 'react';

interface EducationCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const EducationCard = ({ icon, title, description, delay = 0 }: EducationCardProps) => {
  return (
    <div 
      className="bg-card rounded-2xl p-8 shadow-soft hover-lift animate-slide-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center animate-float">
          {icon}
        </div>
        <h3 className="font-oswald font-bold text-xl text-foreground">
          {title}
        </h3>
        <p className="font-work-sans text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default EducationCard;