// src/components/ArtistsSection/ArtistsSection.styles.js
import styled from 'styled-components';

export const Section = styled.section`
  background: transparent;
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
  color: white;
`;

export const ArtistsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  width: 100%;
  max-width: 1200px;
  padding: 0 10px;
`;

export const ArtistCard = styled.div`
  backdrop-filter: blur(12px);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 8px 32px rgba(0,0,0,0.3);
  transition: all 0.3s ease-in-out;
  transform-style: preserve-3d;

  &:hover {
    transform: scale(1.05);
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
  font-size: 1.6rem;
  color: white;
`;

export const ArtistBio = styled.p`
  font-size: 1rem;
  color: #ccc;
  margin-top: 8px;
`;
