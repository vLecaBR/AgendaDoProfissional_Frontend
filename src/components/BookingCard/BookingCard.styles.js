import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Card = styled.div`
  animation: ${fadeInUp} 0.5s ease;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(16px);
  border-radius: 16px;
  padding: 1rem;
  color: #fff;
  transition: transform 0.2s ease;
  box-shadow: 0 4px 16px rgba(0,0,0,0.2);

  &:hover {
    transform: translateY(-4px);
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
`;

export const Label = styled.span`
  font-size: 0.85rem;
  color: #aaa;
`;

export const Value = styled.span`
  font-size: 1.05rem;
  font-weight: 500;
`;
