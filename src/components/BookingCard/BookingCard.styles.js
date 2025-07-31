import styled from 'styled-components';

export const Card = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.3);
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.1rem;
`;

export const Label = styled.span`
  color: #ccc;
`;

export const Value = styled.span`
  font-weight: 600;
`;
