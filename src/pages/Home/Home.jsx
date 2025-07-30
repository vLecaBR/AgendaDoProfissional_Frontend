import React from 'react';
import {
  Container,
  Title,
  SubTitle,
  Carousel,
  TattooArtistCard,
  ArtistImage,
  ArtistName,
  ArtistSpecialty,
  CTAButton,
} from './Home.styles';
import { artists } from './artists';

export default function Home() {
  return (
    <Container>
      <Title>Old Skull Studio</Title>
      <SubTitle>Arte na pele com personalidade e respeito à tradição</SubTitle>

      <Carousel>
        {artists.map((artist, index) => (
          <TattooArtistCard
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <ArtistImage src={artist.image} alt={artist.name} />
            <ArtistName>{artist.name}</ArtistName>
            <ArtistSpecialty>{artist.specialty}</ArtistSpecialty>
          </TattooArtistCard>
        ))}
      </Carousel>

      <CTAButton onClick={() => window.location.href = '/login'}>
        Agende sua Tattoo
      </CTAButton>
    </Container>
  );
}
