import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #667eea, #764ba2);
  padding: 20px;
`;

export const Form = styled.form`
  background: #fff;
  padding: 40px 30px;
  border-radius: 12px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;

  @media (max-width: 480px) {
    padding: 30px 20px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 25px;
  text-align: center;
  font-weight: 700;
  color: #333;
  font-size: 1.8rem;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const Input = styled.input`
  padding: 14px 16px;
  margin-bottom: 20px;
  font-size: 1rem;
  border-radius: 8px;
  border: 1.5px solid #ddd;
  transition: border-color 0.2s;

  &:focus {
    border-color: #667eea;
    outline: none;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

export const Button = styled.button`
  padding: 14px 16px;
  background: #667eea;
  color: white;
  font-weight: 600;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.25s;

  &:hover {
    background: #5a6dde;
  }

  &:active {
    background: #4b57c1;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

export const ErrorMessage = styled.p`
  color: #e74c3c;
  margin-bottom: 15px;
  font-size: 0.9rem;
  text-align: center;
`;
