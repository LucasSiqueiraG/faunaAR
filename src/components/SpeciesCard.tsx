interface SpeciesCardProps {
  name: string;
  scientificName: string;
  status: string;
  description: string;
  imageUrl?: string;
  delay?: number;
}

const SpeciesCard = ({ 
  name, 
  scientificName, 
  status, 
  description, 
  delay = 0 
}: SpeciesCardProps) => {
  return (
    <div 
      className="bg-card rounded-2xl overflow-hidden shadow-nature hover-lift animate-slide-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="h-48 bg-secondary/20 flex items-center justify-center">
        <div className="text-6xl animate-pulse-nature">
          {name.includes('Arara') ? '🦜' : 
           name.includes('Mico') ? '🐒' : 
           name.includes('Onça') ? '🐆' : '🦎'}
        </div>
      </div>
      
      <div className="p-6 space-y-3">
        <div>
          <h3 className="font-oswald font-bold text-lg text-foreground">
            {name}
          </h3>
          <p className="font-work-sans text-sm italic text-muted-foreground">
            {scientificName}
          </p>
        </div>
        
        <div className="flex items-center">
          <span className="px-3 py-1 bg-destructive/10 text-destructive rounded-full text-xs font-work-sans font-medium">
            {status}
          </span>
        </div>
        
        <p className="font-work-sans text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
        
 
      </div>
    </div>
  );
};

export default SpeciesCard;