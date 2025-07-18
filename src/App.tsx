import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { Features } from './components/ui/features';
import ConsultancySection from './components/ConsultancySection';
import TestimonialSection from './components/TestimonialSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import { AuroraBackground } from './components/ui/aurora-background';
import Login from './components/Login';

function App() {
  useEffect(() => {
    // Optimized scroll animation observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            // Unobserve after animation to improve performance
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '50px' // Start animation before element is fully visible
      }
    );

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={
          <AuroraBackground className="min-h-screen">
            <Navbar />
            <Hero />
            <Features />
            <ConsultancySection />
            <TestimonialSection />
            <AboutSection />
            <Footer />
            <FloatingButtons />
          </AuroraBackground>
        } />
      </Routes>
    </Router>
  );
}

export default App;
