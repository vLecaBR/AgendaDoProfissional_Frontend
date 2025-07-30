// src/pages/Home/Home.jsx
import React from 'react';
import { Container, VideoBackground, Overlay, Content, Title, Subtitle, CTAButton, Section, SectionTitle } from './Home.styles';
import ArtistCarousel from '../../components/ArtistCarousel/ArtistCarousel';

export default function Home() {
  return (
    <Container>
      <VideoBackground autoPlay muted loop>
        <source src="/bg-video.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos HTML5.
      </VideoBackground>

      <Overlay />

      <Content>
        <Title>Studio Tattoo</Title>
        <Subtitle>Tatuagens Old School com alma moderna</Subtitle>
        <CTAButton href="/agendamentos">Agendar agora</CTAButton>
      </Content>

      <Section>
        <SectionTitle>Nossos Artistas</SectionTitle>
        <ArtistCarousel />
      </Section>
    </Container>
  );
}
