import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  backdrop-filter: blur(10px);
  background-color: rgba(0, 0, 0, 0.6);
`;

export const Title = styled.h1`
  font-size: 2.8rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 40px;
  text-align: center;
`;

export const BookingsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  width: 100%;
  max-width: 1000px;
`;

export const Loading = styled.p`
  font-size: 1.2rem;
  color: #ccc;
`;

export const ErrorMessage = styled.p`
  font-size: 1.2rem;
  color: #ff4f4f;
`;

export const EmptyState = styled.p`
  font-size: 1.2rem;
  color: #bbb;
  margin-top: 20px;
`;
