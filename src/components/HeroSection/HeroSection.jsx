import React from 'react';
import { HeroContainer, Title, Subtitle, CTAButton } from './HeroSection.styles';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <HeroContainer
      as={motion.section}
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Title as={motion.h1} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
        BarberSHOP
      </Title>
      <Subtitle as={motion.p} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
        Seu cabelo, nosso compromisso
      </Subtitle>
      <CTAButton
        as={motion.a}
        href="/agendamentos"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
      >
        Agendar agora
      </CTAButton>
    </HeroContainer>
  );
}