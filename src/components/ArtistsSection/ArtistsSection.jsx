// src/components/ArtistsSection/ArtistsSection.jsx
import React from 'react';
import {
  Section,
  SectionTitle,
  ArtistsGrid,
  ArtistCard,
  ArtistImage,
  ArtistName,
  ArtistBio
} from './ArtistsSection.styles';

import artists from '../../pages/Home/artists'; // ou ajuste o caminho conforme onde o JSON estiver

export default function ArtistsSection() {
  return (
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
  );
}
