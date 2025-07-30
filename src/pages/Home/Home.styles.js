// src/pages/Home/Home.styles.js
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
  color: white;
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
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
