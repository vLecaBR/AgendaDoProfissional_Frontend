// src/pages/Home/Home.jsx
import React from 'react';
import {
  Container,
  VideoBackground,
  Overlay,
  Content,
  Title,
  Subtitle,
  CTAButton,
  Section,
  SectionTitle,
  ArtistsGrid,
  ArtistCard,
  ArtistImage,
  ArtistName,
  ArtistBio
} from './Home.styles';
import artists from './artists';

export default function Home() {

  return (
    <Container>
      <VideoBackground autoPlay muted loop>
        <source src="/videos/bg-video.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos HTML5.
      </VideoBackground>

      <Overlay />

      <Content
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Title>Studio Tattoo</Title>
        <Subtitle>Tatuagens Old School com alma moderna</Subtitle>
        <CTAButton href="/agendamentos">Agendar agora</CTAButton>
      </Content>

      <Section>
        <SectionTitle>Nossos Artistas</SectionTitle>
        <ArtistsGrid>
          {artists.map((artist, index) => (
            <ArtistCard key={index}>
              <ArtistImage src={artist.img} alt={artist.name} />
              <ArtistName>{artist.name}</ArtistName>
              <ArtistBio>{artist.bio}</ArtistBio>
            </ArtistCard>
          ))}
        </ArtistsGrid>
      </Section>
    </Container>
  );
}
