import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false); // Fecha o menu após navegar
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
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 object-contain transition-all duration-300 ml-2 sm:ml-0"
              style={{ transform: 'scale(2)' }}
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
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className={`w-full h-0.5 transition-all duration-300 ${
                isScrolled ? 'bg-foreground' : 'bg-white'
              } ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`w-full h-0.5 transition-all duration-300 ${
                isScrolled ? 'bg-foreground' : 'bg-white'
              } ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-full h-0.5 transition-all duration-300 ${
                isScrolled ? 'bg-foreground' : 'bg-white'
              } ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </div>
          </button>
        </div>

        {/* Menu mobile dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border">
            <div className="container mx-auto px-6 py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('sobre')}
                className="block w-full text-left font-work-sans text-foreground hover:text-primary transition-colors py-2"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('educacao')}
                className="block w-full text-left font-work-sans text-foreground hover:text-primary transition-colors py-2"
              >
                Educação
              </button>
              <button 
                onClick={() => scrollToSection('especies')}
                className="block w-full text-left font-work-sans text-foreground hover:text-primary transition-colors py-2"
              >
                Espécies
              </button>
              <a 
                href="https://app.faunar.site"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-primary text-primary-foreground px-6 py-3 rounded-full font-work-sans font-medium hover:bg-primary/90 transition-colors mt-4"
              >
                Iniciar Experiência
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;