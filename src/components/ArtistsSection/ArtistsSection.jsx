// src/components/ArtistsSection/ArtistsSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import {
  Section,
  SectionTitle,
  ArtistsGrid,
  ArtistCard,
  ArtistImage,
  ArtistName,
  ArtistBio
} from './ArtistsSection.styles';

import artists from '../../pages/Home/artists';

export default function ArtistsSection() {
  return (
    <Section as={motion.section}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <SectionTitle>Nossos Artistas</SectionTitle>
      <ArtistsGrid>
        {artists.map((artist, index) => (
          <ArtistCard
            as={motion.div}
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <ArtistImage src={artist.img} alt={artist.name} />
            <ArtistName>{artist.name}</ArtistName>
            <ArtistBio>{artist.bio}</ArtistBio>
          </ArtistCard>
        ))}
      </ArtistsGrid>
    </Section>
  );
}
