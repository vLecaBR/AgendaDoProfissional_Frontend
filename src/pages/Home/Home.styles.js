import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  min-height: 100vh;
  background: url('/images/bg-texture.jpg') center center / cover no-repeat fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 40px;
  color: white;
`;

export const Title = styled.h1`
  font-family: 'Cinzel Decorative', cursive;
  font-size: 3.5rem;
  margin-bottom: 10px;
  text-shadow: 2px 2px #000;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const SubTitle = styled.p`
  font-size: 1.2rem;
  color: #ccc;
  margin-bottom: 60px;
  text-align: center;
`;

export const Carousel = styled.div`
  display: flex;
  gap: 40px;
  overflow-x: auto;
  padding-bottom: 30px;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TattooArtistCard = styled(motion.div)`
  min-width: 300px;
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid #333;
  border-radius: 20px;
  padding: 20px;
  scroll-snap-align: center;
  backdrop-filter: blur(8px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.5);
  transition: transform 0.3s;
  text-align: center;
  cursor: pointer;

  &:hover {
    transform: translateY(-12px) scale(1.03);
  }
`;

export const ArtistImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: contain;
  margin-bottom: 15px;
`;

export const ArtistName = styled.h3`
  font-size: 1.5rem;
  margin: 0;
`;

export const ArtistSpecialty = styled.p`
  font-size: 1rem;
  color: #aaa;
  margin-top: 4px;
`;

export const CTAButton = styled.button`
  margin-top: 60px;
  padding: 16px 30px;
  background: #ff5252;
  border: none;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  letter-spacing: 1px;
  transition: background 0.3s;
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(255, 82, 82, 0.4);

  &:hover {
    background: #e04848;
  }
`;
