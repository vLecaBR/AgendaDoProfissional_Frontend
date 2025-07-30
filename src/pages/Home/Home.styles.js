// src/pages/Home/Home.styles.js
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
  color: white;
  font-family: 'Montserrat', sans-serif;
`;



export const VideoBackground = styled.video`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -2;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(10, 10, 10, 0.75);
  z-index: -1;
`;

export const Content = styled(motion.div)`
  padding: 0 20px;
  max-width: 1000px;
  width: 100%;
`;


export const Title = styled.h1`
  font-size: 4rem;
  font-weight: 900;
  text-transform: uppercase;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.4rem;
  max-width: 700px;
  margin: 20px 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const CTAButton = styled.a`
  background: #ff1744;
  color: white;
  padding: 14px 28px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: 0.3s;
  margin-top: 20px;

  &:hover {
    background: #e10035;
  }
`;

export const Section = styled.section`
  background: rgba(10, 10, 10, 0.85);
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 40px;
`;

export const ArtistsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 30px;
  width: 100%;
  max-width: 1000px;
  padding: 0 10px;
`;

export const ArtistCard = styled.div`
  background: #1e1e1e;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 8px 30px rgba(0,0,0,0.3);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.03);
  }
`;

export const ArtistImage = styled.img`
  width: 100%;
  max-height: 280px;
  object-fit: cover;
  border-radius: 10px;
`;

export const ArtistName = styled.h3`
  margin-top: 15px;
  font-size: 1.5rem;
`;

export const ArtistBio = styled.p`
  font-size: 1rem;
  color: #bbb;
  margin-top: 8px;
`;

export const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 0 20px;
  max-width: 1000px;
  margin: 0 auto;
`;
