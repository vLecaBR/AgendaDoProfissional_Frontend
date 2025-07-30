import HeroSection from '../../components/HeroSection/HeroSection';

// ...

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
