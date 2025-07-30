import React from 'react';
import { HeroContainer, Title, Subtitle, CTAButton } from './HeroSection.styles';

export default function HeroSection() {
  return (
    <HeroContainer>
      <Title>Studio Tattoo</Title>
      <Subtitle>Tatuagens Old School com alma moderna</Subtitle>
      <CTAButton href="/agendamentos">Agendar agora</CTAButton>
    </HeroContainer>
  );
}
