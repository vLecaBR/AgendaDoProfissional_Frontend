// src/components/ArtistCarousel/ArtistCarousel.styles.js
import styled from 'styled-components';

export const CarouselContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;

  .slick-slide {
    padding: 0 15px;
  }

  .slick-dots li button:before {
    color: white;
  }
`;

export const ArtistCard = styled.div`
  background: #1e1e1e;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 5px 25px rgba(0,0,0,0.2);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.03);
  }
`;

export const ArtistImage = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 8px;
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
