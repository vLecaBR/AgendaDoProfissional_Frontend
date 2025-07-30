// src/components/HeroSection/HeroSection.jsx
import React from 'react';
import { HeroContainer, Title, Subtitle, CTAButton } from './HeroSection.styles';

export default function HeroSection() {
  return (
    <HeroContainer
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Title>BarberSHOP</Title>
      <Subtitle>Seu cabelo, nosso compromisso</Subtitle>
      <CTAButton href="/agendamentos">Agendar agora</CTAButton>
    </HeroContainer>
  );
}
