// src/components/HeroSection/HeroSection.styles.js
import styled from 'styled-components';

export const HeroContainer = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 0 20px;
  backdrop-filter: blur(4px);
`;

export const Title = styled.h1`
  font-size: 4rem;
  font-weight: 900;
  text-transform: uppercase;
  text-align: center;
  color: white;

  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.4rem;
  max-width: 700px;
  margin: 20px 0;
  text-align: center;
  color: white;

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
