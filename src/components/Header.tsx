import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-sm shadow-soft' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src={isScrolled ? "/logo_black.webp" : "/logo_white.webp"}
              alt="Fauna AR Logo" 
              className="w-8 h-8 object-contain transition-transform duration-300"
              style={{ transform: 'scale(4)' }}
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('sobre')}
              className={`font-work-sans hover:text-primary transition-colors ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('educacao')}
              className={`font-work-sans hover:text-primary transition-colors ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              Educação
            </button>
            <button 
              onClick={() => scrollToSection('especies')}
              className={`font-work-sans hover:text-primary transition-colors ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              Espécies
            </button>
            <a 
              href="https://app.faunar.site"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-work-sans font-medium hover:bg-primary/90 transition-colors shadow-soft hover-lift"
            >
              Iniciar Experiência
            </a>
          </div>

          {/* Menu mobile */}
          <button className="md:hidden p-2">
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className="w-full h-0.5 bg-foreground"></div>
              <div className="w-full h-0.5 bg-foreground"></div>
              <div className="w-full h-0.5 bg-foreground"></div>
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;