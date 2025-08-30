import { Book, Heart, Users } from 'lucide-react';
import Header from '../components/Header';
import EducationCard from '../components/EducationCard';
import SpeciesCard from '../components/SpeciesCard';
import heroImage from '../assets/hero-fauna-ar.jpg';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${heroImage})`,
          }}
        />
        <div className="absolute inset-0 gradient-hero" />
        
        <div className="relative z-10 container mx-auto px-6 text-center text-white animate-slide-in">
          <h1 className="font-oswald font-bold text-5xl md:text-7xl mb-6 leading-tight">
            Explore a Vida Selvagem
            <br />
            <span className="text-primary animate-pulse-nature">em Realidade Aumentada</span>
          </h1>
          
          <p className="font-work-sans text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
            Conheça espécies em perigo e descubra como ajudar a preservar 
            nossa biodiversidade através da tecnologia
          </p>
          
          <button 
            onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-oswald font-bold text-lg hover:bg-primary/90 transition-all duration-300 shadow-floating hover-lift animate-float"
          >
            Iniciar Experiência
          </button>
        </div>
      </section>

      {/* Sobre o Projeto */}
      <section id="sobre" className="py-20 gradient-nature">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-slide-in">
            <h2 className="font-oswald font-bold text-4xl md:text-5xl mb-8 text-foreground">
              Conservação Digital para o 
              <span className="text-primary"> Futuro da Terra</span>
            </h2>
            
            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-nature">
              <p className="font-work-sans text-lg text-muted-foreground leading-relaxed mb-6">
                O <strong className="text-primary">Fauna AR</strong> é uma iniciativa pioneira que utiliza 
                Realidade Aumentada baseada em navegador para conectar pessoas com a vida selvagem 
                brasileira em risco de extinção.
              </p>
              
              <p className="font-work-sans text-lg text-muted-foreground leading-relaxed mb-8">
                Alinhado ao <strong className="text-accent">ODS 15: Vida Terrestre</strong> da ONU, 
                nosso projeto transforma zoológicos e museus em portais interativos de 
                conscientização e educação ambiental.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="animate-float">
                  <div className="text-4xl mb-2">🦜</div>
                  <h3 className="font-oswald font-bold text-primary">Arara-Azul</h3>
                </div>
                <div className="animate-float" style={{ animationDelay: '0.5s' }}>
                  <div className="text-4xl mb-2">🐒</div>
                  <h3 className="font-oswald font-bold text-primary">Mico-Leão-Dourado</h3>
                </div>
                <div className="animate-float" style={{ animationDelay: '1s' }}>
                  <div className="text-4xl mb-2">🐆</div>
                  <h3 className="font-oswald font-bold text-primary">Onça-Pintada</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Educacional */}
      <section id="educacao" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-slide-in">
            <h2 className="font-oswald font-bold text-4xl md:text-5xl mb-6 text-foreground">
              Impacto Através da 
              <span className="text-primary"> Tecnologia</span>
            </h2>
            <p className="font-work-sans text-xl text-muted-foreground max-w-3xl mx-auto">
              Transformamos a experiência de visitação em uma jornada educativa 
              e inspiradora pela conservação
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <EducationCard
              icon={<Book className="w-8 h-8 text-secondary-foreground" />}
              title="Educação Interativa"
              description="Aprenda sobre habitats, comportamentos e desafios de conservação através de experiências imersivas em Realidade Aumentada."
              delay={0}
            />
            
            <EducationCard
              icon={<Heart className="w-8 h-8 text-secondary-foreground" />}
              title="Conscientização Ativa"
              description="Descubra como suas ações cotidianas podem contribuir para a preservação das espécies e ecossistemas brasileiros."
              delay={200}
            />
            
            <EducationCard
              icon={<Users className="w-8 h-8 text-secondary-foreground" />}
              title="Acessibilidade Universal"
              description="Tecnologia que quebra barreiras, oferecendo experiências educativas para pessoas de todas as idades e habilidades."
              delay={400}
            />
          </div>
        </div>
      </section>

      {/* Espécies em Destaque */}
      <section id="especies" className="py-20 gradient-nature">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-slide-in">
            <h2 className="font-oswald font-bold text-4xl md:text-5xl mb-6 text-foreground">
              Conheça as 
              <span className="text-primary"> Espécies</span>
            </h2>
            <p className="font-work-sans text-xl text-muted-foreground max-w-3xl mx-auto">
              Cada espécie tem uma história única de resistência e esperança. 
              Explore suas características em Realidade Aumentada
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <SpeciesCard
              name="Arara-Azul"
              scientificName="Anodorhynchus hyacinthinus"
              status="Vulnerável"
              description="A maior arara do mundo, símbolo do Pantanal brasileiro. Sua população se recupera graças a projetos de conservação."
              delay={0}
            />
            
            <SpeciesCard
              name="Mico-Leão-Dourado"
              scientificName="Leontopithecus rosalia"
              status="Em Perigo"
              description="Endêmico da Mata Atlântica do Rio de Janeiro, este primata dourado é um símbolo de conservação bem-sucedida."
              delay={200}
            />
            
            <SpeciesCard
              name="Onça-Pintada"
              scientificName="Panthera onca"
              status="Quase Ameaçada"
              description="O maior felino das Américas, predador-chave dos ecossistemas brasileiros, enfrenta perda de habitat."
              delay={400}
            />
          </div>
        </div>
      </section>

      {/* Call-to-Action Final */}
      <section id="cta-final" className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto animate-slide-in">
            <h2 className="font-oswald font-bold text-4xl md:text-6xl mb-6 leading-tight">
              Transforme sua visita em uma 
              <span className="text-primary"> jornada pela conservação</span>
              <br />da vida terrestre
            </h2>
            
            <p className="font-work-sans text-xl mb-10 opacity-90 leading-relaxed">
              Cada interação é uma oportunidade de aprender, se conectar e 
              se tornar um guardião da biodiversidade brasileira
            </p>
            
            <div className="space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center">
              <button className="w-full sm:w-auto bg-primary text-primary-foreground px-10 py-4 rounded-full font-oswald font-bold text-lg hover:bg-primary/90 transition-all duration-300 shadow-floating hover-lift animate-float">
                Iniciar Agora
              </button>
              
              <button className="w-full sm:w-auto border-2 border-primary text-primary px-10 py-4 rounded-full font-oswald font-bold text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                Saiba Mais
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-oswald font-bold">F</span>
              </div>
              <span className="font-oswald font-bold text-lg text-foreground">Fauna AR</span>
            </div>
            
            <p className="font-work-sans text-muted-foreground text-center">
              © 2024 Fauna AR • Contribuindo para o ODS 15: Vida Terrestre
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;