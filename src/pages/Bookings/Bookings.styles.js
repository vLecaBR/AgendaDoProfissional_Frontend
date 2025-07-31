import styled from 'styled-components';

export const Container = styled.div`
  padding: 80px 20px;
  min-height: 100vh;
  background: #0e0e0e;
  color: white;
  font-family: 'Montserrat', sans-serif;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 40px;
  text-align: center;
`;

export const BookingsList = styled.div`
  display: grid;
  gap: 24px;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Loading = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #ccc;
`;

export const ErrorMessage = styled.p`
  color: #ff4d4d;
  text-align: center;
  font-weight: bold;
`;

export const EmptyState = styled.p`
  color: #aaa;
  text-align: center;
  font-style: italic;
  margin-top: 20px;
`;
