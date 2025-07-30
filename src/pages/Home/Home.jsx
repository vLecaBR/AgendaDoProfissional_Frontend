// src/pages/Home/Home.jsx
import React from 'react';
import { Container, VideoBackground, Overlay } from './Home.styles';
import HeroSection from '../../components/HeroSection/HeroSection';
import ArtistsSection from '../../components/ArtistsSection/ArtistsSection';

export default function Home() {
  return (
    <Container>
      <VideoBackground autoPlay muted loop>
        <source src="/videos/bg-video.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos HTML5.
      </VideoBackground>

      <Overlay />

      {/* Animações aqui dentro do componente */}
      <HeroSection />
      <ArtistsSection />
    </Container>
  );
}
