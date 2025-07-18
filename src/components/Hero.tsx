import React from 'react';
import PremiumHero from '@/components/ui/premium-hero';

const Hero = () => {
  // Adicionar containers parallax dentro da seção Hero
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbar = document.querySelector('.navbar');
      const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 80;
      const elementPosition = element.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative bg-transparent">
      <PremiumHero
        headline="Tudo o que você precisa para beber água limpa na era da IA"
        subheadline="Soluções autônomas e inteligentes que trazem eficiência e produtividade para suas operações."
        ctaPrimaryText="Quero beber água limpa"
        ctaSecondaryText="Agendar Consultoria"
        onCtaPrimaryClick={() => window.open('https://wa.me/5511918688001?text=Olá! Gostaria de saber mais sobre os agentes de IA da Oasis.', '_blank')}
        onCtaSecondaryClick={() => scrollToSection('about')}
      />
    </section>
  );
};

export default Hero;
