// src/components/ArtistsSection/ArtistsSection.jsx
import styled from 'styled-components';

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
  color: white;
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
  color: white;
`;

export const ArtistBio = styled.p`
  font-size: 1rem;
  color: #bbb;
  margin-top: 8px;
`;
