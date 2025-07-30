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

      <HeroSection
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      />

      <ArtistsSection />
    </Container>
  );
}
