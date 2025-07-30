// src/pages/Home/Home.styles.js
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
  color: white;
  font-family: 'Montserrat', sans-serif;
`;

export const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -2;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(15, 15, 15, 0.7);
  z-index: -1;
`;

export const Content = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  text-align: center;
  gap: 1.5rem;
`;

export const Title = styled(motion.h1)`
  font-size: 3rem;
  font-weight: 900;
  text-transform: uppercase;
`;

export const Subtitle = styled(motion.p)`
  font-size: 1.3rem;
  max-width: 500px;
`;

export const CTAButton = styled.a`
  background: #ff1744;
  color: white;
  padding: 14px 28px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: 0.3s;

  &:hover {
    background: #e10035;
  }
`;

export const Section = styled.section`
  padding: 60px 40px;
  background: #0e0e0e;
`;

export const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 30px;
`;
