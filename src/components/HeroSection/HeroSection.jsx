// src/components/HeroSection/HeroSection.jsx
import React from 'react';
import { HeroContainer, Title, Subtitle, CTAButton } from './HeroSection.styles';

export default function HeroSection() {
  return (
    <HeroContainer>
      <Title>BarberSHOP</Title>
      <Subtitle>Seu cabelo, nosso compromisso</Subtitle>
      <CTAButton href="/agendamentos">Agendar agora</CTAButton>
    </HeroContainer>
  );
}
