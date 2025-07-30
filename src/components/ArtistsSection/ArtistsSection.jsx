import React from 'react';
import {
  Section,
  SectionTitle,
  ArtistsGrid,
  ArtistCard,
  ArtistImage,
  ArtistName,
  Artistspecialty
} from './ArtistsSection.styles';
import { motion } from 'framer-motion';

import artists from '../../pages/Home/artists';

export default function ArtistsSection() {
  return (
    <Section>
      <SectionTitle
        as={motion.h2}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Nossos Artistas
      </SectionTitle>
      <ArtistsGrid>
        {artists.map((artist, index) => (
          <ArtistCard
            as={motion.div}
            key={index}
            initial={{ opacity: 0, rotateY: -90 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <ArtistImage src={artist.img} alt={artist.name} />
            <ArtistName>{artist.name}</ArtistName>
            <Artistspecialty>{artist.specialty}</Artistspecialty>
          </ArtistCard>
        ))}
      </ArtistsGrid>
    </Section>
  );
}